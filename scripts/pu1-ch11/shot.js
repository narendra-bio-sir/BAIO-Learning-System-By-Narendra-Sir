/* node shot.js <url> <w> <h> <out.jpg> [quality] — screenshot a page at a fixed size */
const { chromium } = require('playwright');
(async () => { const [url, w, h, out, q] = process.argv.slice(2); const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: +w, height: +h } });
  await p.goto(url); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
  await p.screenshot({ path: out, type: 'jpeg', quality: +(q || 88) }); await b.close(); })();
