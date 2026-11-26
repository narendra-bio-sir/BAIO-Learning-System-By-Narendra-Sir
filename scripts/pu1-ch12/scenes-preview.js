/* Preview every SCENE (full 1600x1000 canvas) into one contact sheet per batch: node scenes-preview.js <outdir> */
const { chromium } = require('playwright'); const path = require('path');
(async () => {
  const srv = require('./serve.js')(); const out = process.argv[2];
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1600, height: 1000 } });
  p.on('pageerror', e => console.log('PAGE ERROR', e.message));
  await p.goto(srv.url + 'scripts/pu1-ch12/harness.html'); await p.evaluate(() => document.fonts.ready);
  const names = await p.evaluate(() => Object.keys(SCENE));
  for (const n of names){
    await p.evaluate(n => { P.L = 'en'; document.getElementById('out').innerHTML = D.svg(1600, 1000, () => SCENE[n]()).replace('<svg', '<svg width="1600" height="1000"'); }, n);
    await p.screenshot({ path: path.join(out, 'scene-' + n + '.jpg'), type: 'jpeg', quality: 70 });
  }
  console.log(names.join(' '));
  await b.close(); srv.close();
})();
