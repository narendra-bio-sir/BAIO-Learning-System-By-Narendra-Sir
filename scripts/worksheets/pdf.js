/* Renders every worksheet to worksheets/pdf/<chapter>-<sheet>.pdf (A4) from worksheets.html?print=...
   Run after build.py:  NODE_PATH=/opt/node22/lib/node_modules node scripts/worksheets/pdf.js */
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const ROOT = path.join(__dirname, '..', '..'), OUT = path.join(ROOT, 'worksheets', 'pdf');
global.window = {}; require(path.join(ROOT, 'worksheets', 'index.js'));
const IDX = global.window.WS_INDEX;
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const want = new Set();
  IDX.forEach(c => c.sheets.forEach(s => want.add(c.id + '-' + s[0] + '.pdf')));
  fs.readdirSync(OUT).forEach(f => { if (!want.has(f)) fs.unlinkSync(path.join(OUT, f)); });   /* drop stale files */
  const srv = await require(path.join(ROOT, 'scripts', 'pu1-ch12', 'serve.js'))();
  const b = await chromium.launch(), pg = await b.newPage();
  let n = 0, bytes = 0;
  for (const c of IDX) for (const s of c.sheets) {
    await pg.goto(srv.url + '/worksheets.html?print=' + c.id + '/' + s[0]);
    await pg.waitForFunction(() => window.__ready, null, { timeout: 15000 });
    await pg.evaluate(() => document.fonts.ready);
    const f = path.join(OUT, c.id + '-' + s[0] + '.pdf');
    await pg.pdf({ path: f, format: 'A4', printBackground: true, displayHeaderFooter: true, headerTemplate: '<span></span>',
      footerTemplate: '<div style="width:100%;font-size:8px;color:#777;text-align:center;font-family:Arial">BAIO Learning System · Free worksheet by Narendra Sir · Page <span class="pageNumber"></span> of <span class="totalPages"></span></div>',
      margin: { top: '12mm', bottom: '14mm', left: '12mm', right: '12mm' } });
    n++; bytes += fs.statSync(f).size;
  }
  await b.close(); srv.close();
  console.log(n, 'PDFs,', (bytes / 1048576).toFixed(1), 'MB');
})();
