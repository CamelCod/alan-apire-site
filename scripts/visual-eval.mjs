import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(ROOT, 'dist-screenshots');
const arg = process.argv.find((a) => a.startsWith('--base'));
const BASE = arg ? arg.split('=')[1] : process.env.BASE_URL || 'http://localhost:4333';
const VIEWPORTS = [
  { name: 'mobile-sm', width: 375, height: 667 },
  { name: 'mobile-std', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1280, height: 800 },
  { name: 'desktop-fhd', width: 1920, height: 1080 },
];
const LOCALES = ['en', 'ar', 'ru'];
const ROUTES = [
  ['home', (l) => `/${l}/`],
  ['about', (l) => `/${l}/about/`],
  ['services', (l) => `/${l}/services/`],
  ['industries', (l) => `/${l}/industries/`],
  ['projects', (l) => `/${l}/projects/`],
  ['case-pump', (l) => `/${l}/projects/${l}-pump-station/`],
  ['case-water', (l) => `/${l}/projects/${l}-water-supply/`],
  ['case-oilgas', (l) => `/${l}/projects/${l}-oil-gas-coordination/`],
  ['contact', (l) => `/${l}/contact/`],
];
async function checkOverflow(pg) {
  return pg.evaluate(() => {
    const vw = window.innerWidth;
    const bad = [];
    const w = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
    let n;
    while ((n = w.nextNode())) {
      const r = n.getBoundingClientRect();
      if (r.width > 0 && (r.left < -1 || r.right > vw + 1)) {
        bad.push(n.tagName.toLowerCase() + (n.id ? '#' + n.id : '') + ' L=' + Math.round(r.left) + ' R=' + Math.round(r.right));
        if (bad.length >= 10) break;
      }
    }
    const sw = document.documentElement.scrollWidth;
    return { vw, sw, overflow: sw > vw + 1, bad };
  });
}
async function checkRtl(pg) {
  const dir = await pg.evaluate(() => document.documentElement.getAttribute('dir'));
  const hits = await pg.evaluate(() => {
    const out = [];
    document.querySelectorAll('*').forEach((el) => {
      const c = typeof el.className === 'string' ? el.className : '';
      const toks = c.split(/\s+/);
      const isBad = (t) => {
        if (/^(pl|pr|ml|mr)-(\d|px|auto)/.test(t)) return true;
        if (/^(text-left|text-right)$/.test(t)) return true;
        if (/^(left|right)-\d/.test(t)) return true;
        if (/^rounded-(l|r)(-|$)/.test(t)) return true;
        if (/^border-(l|r)(-|$)/.test(t)) return true;
        if (/^(ps|pe|ms|me)-/.test(t)) return false;
        return false;
      };
      const bad = toks.filter(isBad);
      if (bad.length) out.push(el.tagName.toLowerCase() + '.' + bad.slice(0, 2).join('.'));
    });
    return out.slice(0, 8);
  });
  return { dir, hits };
}
async function checkImages(pg) {
  return pg.evaluate(() => {
    const broken = [...document.images].filter((i) => !(i.naturalWidth > 0)).map((i) => i.currentSrc || i.src);
    const distort = [];
    document.querySelectorAll('img.object-cover').forEach((img) => {
      if (img.naturalWidth && img.closest('.aspect-video')) {
        const r = img.getBoundingClientRect();
        const ratio = r.width / Math.max(1, r.height);
        if (Math.abs(ratio - 16 / 9) > 0.12) distort.push(ratio.toFixed(2));
      }
    });
    const logo = document.querySelector('header img[src*="logo-mark"]');
    let logoBox = null;
    if (logo) { const r = logo.getBoundingClientRect(); logoBox = [Math.round(r.width), Math.round(r.height)]; }
    return { broken: broken.slice(0, 8), distort, logoBox, hasLogo: !!logo };
  });
}
async function checkNav(pg, width) {
  const st = await pg.evaluate(() => {
    const d = document.querySelector('header nav[aria-label="Primary"]');
    const b = document.getElementById('menu-btn');
    const m = document.getElementById('mobile-menu');
    const vis = (el) => { if (!el) return false; const r = el.getBoundingClientRect(); return r.width > 0 && r.height > 0; };
    return { d: d ? getComputedStyle(d).display : 'missing', bv: vis(b), hidden: m ? m.classList.contains('hidden') : null };
  });
  return st;
}
const results = [];
const browser = await chromium.launch();
try {
  for (const vp of VIEWPORTS) {
    const dir = path.join(OUT, vp.name);
    fs.mkdirSync(dir, { recursive: true });
    for (const locale of LOCALES) {
      for (const [key, fn] of ROUTES) {
        const route = fn(locale);
        const url = BASE + route;
        const pg = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
        const defects = [];
        let status = 'pass';
        try {
          await pg.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
          await pg.waitForTimeout(1500);
          const ov = await checkOverflow(pg);
          if (ov.overflow) defects.push({ check: 'overflow', detail: 'sw=' + ov.sw + ' vw=' + ov.vw + ' ' + ov.bad.slice(0, 5).join(' | ') });
          if (locale === 'ar') {
            const rtl = await checkRtl(pg);
            if (rtl.dir !== 'rtl') defects.push({ check: 'rtl-dir', detail: 'dir=' + rtl.dir });
            if (rtl.hits.length) defects.push({ check: 'rtl-props', detail: rtl.hits.join(',') });
          }
          const im = await checkImages(pg);
          if (im.broken.length) defects.push({ check: 'images-broken', detail: im.broken.join(',') });
          if (im.distort.length) defects.push({ check: 'images-aspect', detail: im.distort.join(',') });
          if (!im.hasLogo) defects.push({ check: 'logo', detail: 'missing logo-mark' });
          else if (Math.abs(im.logoBox[0] - 32) > 2) defects.push({ check: 'logo', detail: 'logo ' + im.logoBox.join('x') });
          const nav = await checkNav(pg, vp.width);
          const mobile = vp.width < 1024;
          if (mobile && nav.d !== 'none') defects.push({ check: 'nav', detail: 'desktop nav=' + nav.d });
          if (mobile && !nav.bv) defects.push({ check: 'nav', detail: 'menu-btn hidden' });
          if (!mobile && nav.bv) defects.push({ check: 'nav', detail: 'menu-btn shown on desktop' });
          if (mobile) {
            await pg.click('#menu-btn');
            await pg.waitForTimeout(300);
            const opened = await pg.evaluate(() => {
              const m = document.getElementById('mobile-menu');
              return { open: m && !m.classList.contains('hidden'), n: m ? m.querySelectorAll('a').length : 0 };
            });
            if (!opened.open) defects.push({ check: 'nav-toggle', detail: 'menu did not open' });
            else if (opened.n < 4) defects.push({ check: 'nav-toggle', detail: 'only ' + opened.n + ' links' });
            await pg.click('#menu-btn');
            await pg.waitForTimeout(200);
          }
          if (route.includes('/contact/')) {
            const bad = await pg.evaluate(() => {
              const vw = window.innerWidth;
              const o = [];
              document.querySelectorAll('form input, form select, form textarea').forEach((el) => {
                const r = el.getBoundingClientRect();
                if (r.right > vw + 1) o.push(el.name || el.tagName);
              });
              return o;
            });
            if (bad.length) defects.push({ check: 'form', detail: bad.join(',') });
          }
          await pg.screenshot({ path: path.join(dir, locale + '-' + key + '.png'), fullPage: true });
        } catch (e) {
          status = 'error';
          defects.push({ check: 'load', detail: String((e && e.message) || e).slice(0, 200) });
        }
        if (status !== 'error') status = defects.length ? 'FAIL' : 'pass';
        results.push({ viewport: vp.name, locale, page: key, route, status, defects });
        console.log('[' + status.toUpperCase() + '] ' + vp.name + ' ' + route + ' ' + (defects.length ? JSON.stringify(defects) : ''));
        await pg.close();
      }
    }
  }
} finally {
  await browser.close();
}
fs.mkdirSync(OUT, { recursive: true });
const fails = results.filter((r) => r.status !== 'pass');
const summary = { base: BASE, total: results.length, passed: results.length - fails.length, failed: fails.length, byCheck: {}, results };
for (const r of fails) for (const d of r.defects) summary.byCheck[d.check] = (summary.byCheck[d.check] || 0) + 1;
fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(summary, null, 2));
console.log('==== ' + summary.passed + '/' + summary.total + ' passed ====');
if (fails.length) { console.log('By check: ' + JSON.stringify(summary.byCheck)); process.exitCode = 1; }
