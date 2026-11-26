/* renders DIAGRAMS → pu1-ch12-assets/diag-*.jpg. node scripts/pu1-ch12/render-diag.js [name] */
const { chromium } = require('playwright'); const fs = require('fs'), path = require('path');
(async () => {
  const srv = require('./serve.js')();
  const b = await chromium.launch(); const p = await b.newPage({ deviceScaleFactor: 1 });
  p.on('pageerror', e => console.log('PAGE ERROR', e.message));
  await p.goto(srv.url + 'scripts/pu1-ch12/harness.html'); await p.evaluate(() => document.fonts.ready);
  const names = process.argv[2] ? [process.argv[2]] : await p.evaluate(() => Object.keys(DIAGRAMS));
  const out = path.join(__dirname, '..', '..', 'pu1-ch12-assets'); fs.mkdirSync(out, { recursive: true });
  for (const n of names) {
    const [w, h] = await p.evaluate(n => { const o = document.getElementById('out'); o.innerHTML = DIAGRAMS[n](); const v = o.firstChild.viewBox.baseVal; o.firstChild.setAttribute('width', v.width); o.firstChild.setAttribute('height', v.height); return [v.width, v.height]; }, n);
    await p.setViewportSize({ width: w, height: h }); await p.waitForTimeout(150);
    await p.screenshot({ path: path.join(out, n + '.jpg'), type: 'jpeg', quality: 86, clip: { x: 0, y: 0, width: w, height: h } });
    console.log(n, w, h);
  }
  await b.close(); srv.close();
})();
