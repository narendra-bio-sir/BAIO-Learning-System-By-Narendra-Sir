// Build the notes slide images + PDF for one chapter.
// Usage (repo root served on :8785):  node notes/src/build.js pu1-ch8
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
(async () => {
  const ch = process.argv[2] || 'pu1-ch8', base = 'http://localhost:8785/notes/src/render.html?ch=' + ch;
  const root = path.join(__dirname, '..'); fs.mkdirSync(path.join(root, 'img'), { recursive: true }); fs.mkdirSync(path.join(root, 'pdf'), { recursive: true });
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1080 }, deviceScaleFactor: 1.25 });
  await p.route(/fonts\.(googleapis|gstatic)\.com/, r => process.env.WEBFONTS ? r.continue() : r.abort());
  await p.goto(base + '&s=1'); await p.waitForFunction(() => window.__ready); const n = await p.evaluate(() => window.__n);
  for (let s = 1; s <= n; s++){
    await p.goto(base + '&s=' + s); await p.waitForFunction(() => window.__ready);
    await p.locator('.slide').screenshot({ path: path.join(root, 'img', `${ch}-${String(s).padStart(2, '0')}.jpg`), type: 'jpeg', quality: 84 });
  }
  // PDF = the slide JPEGs, one per page (keeps it small; diagrams use SVG filters that would rasterise heavily)
  const imgs = Array.from({ length: n }, (_, i) => `<img src="../img/${ch}-${String(i + 1).padStart(2, '0')}.jpg?t=${Date.now()}">`).join('');
  await p.goto('http://localhost:8785/notes/src/render.html?blank=1');
  await p.setContent(`<html><head><base href="http://localhost:8785/notes/src/"><style>@page{size:1080px 1080px;margin:0}body{margin:0}img{display:block;width:1080px;height:1080px;page-break-after:always}</style></head><body>${imgs}</body></html>`, { waitUntil: 'load' });
  await p.pdf({ path: path.join(root, 'pdf', ch + '.pdf'), width: '1080px', height: '1080px', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await b.close(); console.log(ch, n, 'slides');
})();
