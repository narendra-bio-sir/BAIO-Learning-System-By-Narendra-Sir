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
  await p.goto(base + '&all=1'); await p.waitForFunction(() => window.__ready);
  await p.pdf({ path: path.join(root, 'pdf', ch + '.pdf'), width: '1080px', height: '1080px', printBackground: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
  await b.close(); console.log(ch, n, 'slides');
})();
