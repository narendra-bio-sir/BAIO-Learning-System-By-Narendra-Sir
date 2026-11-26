/* The two drawn figures for Ch12 diagram questions (no NCERT figure exists for them):
   a T.S. of a woody stem (BAIO drawing, "Living cells" hidden) and the respiratory balance sheet (Study Mode table,
   one cell hidden). Adds them to kcet-figs.json. node scripts/pu1-ch12/kcet-figs.js  (needs Playwright) */
const { chromium } = require('playwright'); const fs = require('fs'), path = require('path'), crypto = require('crypto');
const ROOT = path.join(__dirname, '..', '..'), OUT = path.join(ROOT, 'diagram-q-assets'), JP = path.join(__dirname, 'kcet-figs.json');
const S = require('./study.js');
const Q = '<span class="q">?</span>';
const QSTEM = 'In this T.S. of a woody stem, the living cells that respire lie in the region marked ?';
const QLINK = 'In this respiratory balance sheet, the stage marked ?';
const QETS = 'In this respiratory balance sheet, the total marked ?';
function table(hide){ const t = S.study.balance.table;
  return `<table><tr>${t.headers.map(h => `<th>${h}</th>`).join('')}</tr>${t.rows.map((r, i) => `<tr>${r.map((c, j) => `<td>${hide[0] === i && hide[1] === j ? Q : c}</td>`).join('')}</tr>`).join('')}</table>`; }
const CSS = `body{margin:0;background:#fff;font-family:Inter,sans-serif}#box{display:inline-block;padding:22px}
table{border-collapse:collapse;font-size:22px;color:#1c2a24}th{background:#0d7f70;color:#fff;padding:12px 16px;text-align:left}
td{border:1px solid #cfe0d8;padding:11px 16px}tr:nth-child(odd) td{background:#f3faf6}
.q{display:inline-flex;width:40px;height:40px;border:4px solid #d0342c;border-radius:50%;align-items:center;justify-content:center;color:#d0342c;font:800 28px Inter;background:#fff}
h3{margin:0 0 12px;font:800 24px Inter;color:#0d5a50}`;
(async () => { const srv = require('./serve.js')(); const b = await chromium.launch(); const meta = {};
  const save = async (p, key, cap) => { const el = await p.$('#box'); const buf = await el.screenshot({ type: 'jpeg', quality: 88 });
    const name = 'pu1-ch12-baio-' + crypto.createHash('md5').update(key).digest('hex').slice(0, 6) + '.jpg'; fs.writeFileSync(path.join(OUT, name), buf);
    const bb = await el.boundingBox(); meta[key] = { img: 'diagram-q-assets/' + name, imgCap: cap, imgW: Math.round(bb.width * 2), imgH: Math.round(bb.height * 2) }; };
  const p = await b.newPage({ viewport: { width: 1200, height: 900 }, deviceScaleFactor: 2 });
  /* woody stem */
  await p.goto(srv.url + 'scripts/pu1-ch12/harness.html'); await p.evaluate(() => document.fonts.ready);
  await p.addScriptTag({ url: srv.url + 'scripts/pu1-ch12/vis.js' });
  await p.evaluate(() => { P.L = 'en'; const o = document.getElementById('out'); o.innerHTML = '<div id="box" style="display:inline-block;background:#fff;padding:10px"></div>'; const box = document.getElementById('box');
    box.innerHTML = V.woodyStem('en').replace('<svg', '<svg width="760"');
    const t = [...box.querySelectorAll('text')].find(x => /Living cells/.test(x.textContent)); if (!t) throw new Error('label not found');
    const r = t.getBBox(), ns = 'http://www.w3.org/2000/svg', g = document.createElementNS(ns, 'g'), cy = r.y + r.height / 2, cx = r.x + 26;
    g.innerHTML = `<circle cx="${cx}" cy="${cy}" r="24" fill="#fff" stroke="#d0342c" stroke-width="5"/><text x="${cx}" y="${cy + 11}" text-anchor="middle" font-size="32" font-weight="800" fill="#d0342c" font-family="Inter,sans-serif">?</text>`;
    t.replaceWith(g); });
  await p.waitForTimeout(200); await save(p, QSTEM, 'BAIO diagram · T.S. of a woody stem (bark, lenticel, living cells, dead wood)');
  /* balance sheets */
  for (const [key, hide] of [[QLINK, [1, 0]], [QETS, [3, 3]]]) {
    await p.setContent(`<!doctype html><html><head><link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;700;800&display=swap" rel="stylesheet"><style>${CSS}</style></head><body><div id="box"><h3>${S.study.balance.table.title}</h3>${table(hide)}</div></body></html>`);
    await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(200);
    await save(p, key, 'BAIO table · Respiratory balance sheet (NCERT, per glucose)'); }
  const old = fs.existsSync(JP) ? JSON.parse(fs.readFileSync(JP, 'utf8')) : {}; Object.assign(old, meta); fs.writeFileSync(JP, JSON.stringify(old, null, 1));
  console.log(Object.keys(meta).length, 'drawn figures'); await b.close(); srv.close(); })();
