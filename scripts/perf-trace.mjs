import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const distDir = path.join(process.cwd(), 'dist');
const reportsDir = path.join(process.cwd(), '.perf-reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
}

// Static server for local dist
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURI(req.url.split('?')[0]);
  let filePath = path.join(distDir, reqPath);

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': mimeTypes[ext] || 'application/octet-stream',
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
    });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

const PORT = 4323;

async function auditUrl(browser, target, isMobile = true, throttle = true) {
  const page = await browser.newPage();
  const cdp = await page.target().createCDPSession();

  if (isMobile) {
    await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 });
    await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1');
  } else {
    await page.setViewport({ width: 1440, height: 900, isMobile: false, deviceScaleFactor: 1 });
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');
  }

  // Network and CPU Throttling (Simulated Fast 4G / 4x CPU slowdown for mobile to match standard CWV mobile testing)
  if (throttle && isMobile) {
    await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
    // Fast 4G: 150ms RTT, 1.6 Mbps down, 750 Kbps up (in bytes/sec: 1.6*1024*1024/8 = 209715, 750*1024/8 = 96000)
    await cdp.send('Network.emulateNetworkConditions', {
      offline: false,
      latency: 150,
      downloadThroughput: 1.6 * 1024 * 1024 / 8,
      uploadThroughput: 750 * 1024 / 8,
    });
  }

  // Disable browser cache for cold load
  await page.setCacheEnabled(false);

  // Collect network requests
  const requests = [];
  page.on('request', (req) => {
    requests.push({
      url: req.url(),
      resourceType: req.resourceType(),
      method: req.method(),
      headers: req.headers(),
    });
  });

  const responses = [];
  page.on('response', (res) => {
    responses.push({
      url: res.url(),
      status: res.status(),
      headers: res.headers(),
      fromCache: res.fromCache(),
    });
  });

  // Inject performance observer early
  await page.evaluateOnNewDocument(() => {
    window.__perfData = {
      lcp: null,
      lcpEntries: [],
      cls: 0,
      clsEntries: [],
      longTasks: [],
      tbt: 0,
    };

    // LCP Observer
    new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      for (const entry of entries) {
        window.__perfData.lcp = entry.startTime;
        window.__perfData.lcpEntries.push({
          startTime: Math.round(entry.startTime),
          size: entry.size,
          id: entry.id,
          url: entry.url,
          elementTagName: entry.element ? entry.element.tagName : null,
          elementId: entry.element ? entry.element.id : null,
          elementClass: entry.element ? entry.element.className : null,
        });
      }
    }).observe({ type: 'largest-contentful-paint', buffered: true });

    // CLS Observer
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        if (!entry.hadRecentInput) {
          window.__perfData.cls += entry.value;
          window.__perfData.clsEntries.push({
            value: entry.value,
            sources: (entry.sources || []).map(s => ({
              node: s.node ? s.node.nodeName : 'unknown',
              previousRect: s.previousRect,
              currentRect: s.currentRect,
            })),
          });
        }
      }
    }).observe({ type: 'layout-shift', buffered: true });

    // Long Task Observer (for TBT)
    new PerformanceObserver((entryList) => {
      for (const entry of entryList.getEntries()) {
        const blockingTime = entry.duration - 50;
        if (blockingTime > 0) {
          window.__perfData.tbt += blockingTime;
          window.__perfData.longTasks.push({
            startTime: Math.round(entry.startTime),
            duration: Math.round(entry.duration),
            blockingTime: Math.round(blockingTime),
          });
        }
      }
    }).observe({ type: 'longtask', buffered: true });
  });

  const navigationStartTime = Date.now();
  await page.goto(target.url, { waitUntil: 'networkidle2', timeout: 30000 });
  await page.evaluate(() => new Promise((r) => setTimeout(r, 1000)));

  // Extract CWV and timing metrics
  const timing = await page.evaluate(() => {
    const nav = performance.getEntriesByType('navigation')[0];
    const paintEntries = performance.getEntriesByType('paint');
    const fcp = paintEntries.find(p => p.name === 'first-contentful-paint');

    const resourceList = performance.getEntriesByType('resource').map(r => ({
      name: r.name,
      initiatorType: r.initiatorType,
      duration: Math.round(r.duration),
      transferSize: r.transferSize,
      decodedBodySize: r.decodedBodySize,
      startTime: Math.round(r.startTime),
      responseEnd: Math.round(r.responseEnd),
    }));

    // Check render blocking resources
    const headScripts = Array.from(document.querySelectorAll('head script')).map(s => ({
      src: s.src,
      async: s.async,
      defer: s.defer,
      type: s.type,
      isBlocking: !s.async && !s.defer && s.type !== 'module',
    }));

    const headStylesheets = Array.from(document.querySelectorAll('head link[rel="stylesheet"]')).map(l => ({
      href: l.href,
      media: l.media,
      isBlocking: !l.media || l.media === 'all',
    }));

    // Check images
    const images = Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      currentSrc: img.currentSrc,
      naturalWidth: img.naturalWidth,
      naturalHeight: img.naturalHeight,
      width: img.width,
      height: img.height,
      hasWidthAttr: img.hasAttribute('width'),
      hasHeightAttr: img.hasAttribute('height'),
      loading: img.getAttribute('loading'),
      fetchPriority: img.getAttribute('fetchpriority'),
      alt: img.alt,
    }));

    return {
      navigation: {
        ttfb: Math.round(nav ? (nav.responseStart - nav.requestStart) : 0),
        domInteractive: Math.round(nav ? nav.domInteractive : 0),
        domContentLoaded: Math.round(nav ? nav.domContentLoadedEventEnd : 0),
        loadEvent: Math.round(nav ? nav.loadEventEnd : 0),
      },
      fcp: fcp ? Math.round(fcp.startTime) : null,
      perfData: window.__perfData,
      resources: resourceList,
      headScripts,
      headStylesheets,
      images,
    };
  });

  // Accessibility snapshot
  let a11ySnapshot = null;
  try {
    a11ySnapshot = await page.accessibility.snapshot();
  } catch (err) {
    console.error('A11y snapshot error:', err.message);
  }

  // Heading hierarchy check
  const headingHierarchy = await page.evaluate(() => {
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
      tag: h.tagName.toLowerCase(),
      text: h.textContent.trim().replace(/\s+/g, ' '),
    }));
    return headings;
  });

  await page.close();

  return {
    target: target.name,
    url: target.url,
    mode: isMobile ? 'mobile' : 'desktop',
    throttled: throttle && isMobile,
    cwv: {
      ttfb: timing.navigation.ttfb,
      fcp: timing.fcp,
      lcp: timing.perfData.lcp ? Math.round(timing.perfData.lcp) : null,
      cls: Number((timing.perfData.cls || 0).toFixed(4)),
      tbt: Math.round(timing.perfData.tbt || 0),
      domContentLoaded: timing.navigation.domContentLoaded,
      loadEvent: timing.navigation.loadEvent,
    },
    lcpDetails: timing.perfData.lcpEntries.slice(-1)[0] || null,
    clsDetails: timing.perfData.clsEntries,
    longTasks: timing.perfData.longTasks,
    resourcesSummary: {
      count: timing.resources.length,
      totalTransferSize: timing.resources.reduce((acc, r) => acc + (r.transferSize || 0), 0),
      totalDecodedSize: timing.resources.reduce((acc, r) => acc + (r.decodedBodySize || 0), 0),
      byType: timing.resources.reduce((acc, r) => {
        acc[r.initiatorType] = (acc[r.initiatorType] || 0) + 1;
        return acc;
      }, {}),
    },
    renderBlocking: {
      scripts: timing.headScripts.filter(s => s.isBlocking),
      stylesheets: timing.headStylesheets.filter(s => s.isBlocking),
    },
    images: timing.images,
    headingHierarchy,
    a11ySummary: {
      nodeCount: a11ySnapshot ? countA11yNodes(a11ySnapshot) : 0,
    },
  };
}

function countA11yNodes(node) {
  let count = 1;
  if (node.children) {
    for (const child of node.children) {
      count += countA11yNodes(child);
    }
  }
  return count;
}

server.listen(PORT, async () => {
  console.log(`Static server running on port ${PORT}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });

  const targets = [
    { name: 'local-review-en-home', url: `http://127.0.0.1:${PORT}/en/` },
    { name: 'local-review-ar-home', url: `http://127.0.0.1:${PORT}/ar/` },
    { name: 'local-review-case-thermal', url: `http://127.0.0.1:${PORT}/en/projects/en-thermal-network/` },
    { name: 'live-prod-en-home', url: 'https://alanpire.ae/en/' },
  ];

  const results = {};

  try {
    for (const target of targets) {
      console.log(`Auditing ${target.name} [Mobile Simulated]...`);
      results[`${target.name}-mobile`] = await auditUrl(browser, target, true, true);

      console.log(`Auditing ${target.name} [Desktop Unthrottled]...`);
      results[`${target.name}-desktop`] = await auditUrl(browser, target, false, false);
    }

    fs.writeFileSync(path.join(reportsDir, 'cwv-audit-results.json'), JSON.stringify(results, null, 2), 'utf8');
    console.log('Saved audit results to .perf-reports/cwv-audit-results.json');
  } catch (err) {
    console.error('Audit execution error:', err);
  } finally {
    await browser.close();
    server.close();
    process.exit(0);
  }
});
