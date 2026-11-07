/* Colour Notes pages → pu1-ch10-assets/colour-notes/page-NN.jpg (1100x1448) */
const { chromium } = require('playwright'); const fs = require('fs'), path = require('path');
(async () => { const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1100, height: 1448 } });
  const out = path.join(__dirname, '..', '..', 'pu1-ch10-assets', 'colour-notes'); fs.mkdirSync(out, { recursive: true });
  let N = 1;
  for (let i = 1; i <= N; i++){
    await p.goto('http://localhost:8785/scripts/pu1-ch10/colour-notes.html?p=' + i); await p.evaluate(() => document.fonts.ready);
    await p.waitForFunction(() => [...document.images].every(im => im.complete)); await p.waitForTimeout(200);
    await p.evaluate(() => FIT()); await p.waitForTimeout(100); N = await p.evaluate(() => PAGES_N); const over = await p.evaluate(() => OVER());
    await p.screenshot({ path: path.join(out, 'page-' + String(i).padStart(2, '0') + '.jpg'), type: 'jpeg', quality: 86 });
    console.log('page', i, over ? 'OVERFLOW' : 'ok');
  }
  const mf = path.join(out, '..', 'manifest.json'); const M = JSON.parse(fs.readFileSync(mf, 'utf8')); M.cnPages = N; fs.writeFileSync(mf, JSON.stringify(M, null, 1));
  await b.close(); })();
