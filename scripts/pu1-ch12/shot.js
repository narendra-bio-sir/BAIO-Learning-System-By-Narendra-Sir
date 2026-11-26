/* node shot.js <repo-relative page> <w> <h> <out.jpg> [quality] — screenshot a page at a fixed size (serves the repo itself) */
const { chromium } = require('playwright');
(async () => { const [page, w, h, out, q] = process.argv.slice(2); const srv = require('./serve.js')();
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: +w, height: +h } }); p.on('pageerror', e => console.log('PAGE ERROR', e.message));
  await p.goto(srv.url + page); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(300);
  const over = await p.evaluate(() => [...document.querySelectorAll('.card')].filter(c => c.scrollHeight > c.clientHeight + 2).map(c => c.querySelector('.hd') ? c.querySelector('.hd').textContent : '?'));
  if (over.length) console.log('OVERFLOW', over);
  await p.screenshot({ path: out, type: 'jpeg', quality: +(q || 88) }); await b.close(); srv.close(); })();
