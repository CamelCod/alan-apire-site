import http from 'http';
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const distDir = path.join(process.cwd(), 'dist');
const outDir = '/Users/root1/.gemini/antigravity/brain/d6ce0a6e-0c42-4e7e-9644-7bedc0e5fe16/screenshots';
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Simple static file server
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
    res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

const PORT = 4322;
server.listen(PORT, async () => {
  console.log(`Server listening at http://localhost:${PORT}`);

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const viewports = [
    { width: 360, height: 780, name: '360px' },
    { width: 390, height: 844, name: '390px' },
    { width: 768, height: 1024, name: '768px' },
    { width: 1440, height: 900, name: '1440px' },
  ];

  const pagesToTest = [
    { url: '/en/', name: 'home-en' },
    { url: '/ar/', name: 'home-ar' },
    { url: '/ru/', name: 'home-ru' },
    { url: '/en/projects/en-thermal-network/', name: 'case-thermal-en' },
    { url: '/ar/projects/ar-thermal-network/', name: 'case-thermal-ar' },
    { url: '/ru/projects/ru-thermal-network/', name: 'case-thermal-ru' },
    { url: '/en/projects/', name: 'projects-index-en' },
    { url: '/ar/projects/', name: 'projects-index-ar' },
    { url: '/ru/projects/', name: 'projects-index-ru' },
  ];

  const page = await browser.newPage();

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    for (const p of pagesToTest) {
      await page.goto(`http://localhost:${PORT}${p.url}`, { waitUntil: 'networkidle0' });
      const filename = `${p.name}-${vp.name}.png`;
      await page.screenshot({ path: path.join(outDir, filename), fullPage: false });
      console.log(`Saved screenshot: ${filename}`);
    }
  }

  // Focused typography comparison: same paragraph in EN, AR, RU
  await page.setViewport({ width: 1200, height: 600 });
  for (const loc of ['en', 'ar', 'ru']) {
    await page.goto(`http://localhost:${PORT}/${loc}/`, { waitUntil: 'networkidle0' });
    const heroCard = await page.$('article.card');
    if (heroCard) {
      const elFilename = `typography-pillar-${loc}.png`;
      await heroCard.screenshot({ path: path.join(outDir, elFilename) });
      console.log(`Saved typography sample: ${elFilename}`);
    }
  }

  await browser.close();
  server.close();
  console.log('All screenshots completed successfully!');
  process.exit(0);
});
