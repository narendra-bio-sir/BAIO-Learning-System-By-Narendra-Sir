// Free chapter notes: one branded PDF per chapter + the list behind the home "Free Notes" downloads sheet.
//
//   NODE_PATH=<global node_modules> node scripts/free-notes/build-free-notes.js
//
// 1. Revision notes PDFs: cuts each chapter's free revision notes out of the Unit Test Prep pages
//    (biology-unittest1-prep.html = I PUC Ch 1-19, biology-ii-puc-prep.html = II PUC Ch 1-13)
//    and prints them to notes/free/pu<k>-chNN-<slug>.pdf (A4, BAIO header and page numbers).
// 2. notes/free/free-notes.js (window.FREE_NOTES): for every chapter, that PDF plus the free
//    Study Material PDFs already offered in the chapter page's Downloads tab (typed notes,
//    complete / comprehensive notes, rapid revision notes). Premium items (handwritten notes,
//    colour notes) are left out on purpose. Chapters whose page lives in a folder (ch2/, ch3/, ch9/)
//    are read from that folder's index.html.
//
//   --index-only  keep the revision-notes PDFs already in notes/free/ and only rebuild free-notes.js
const {chromium} = require('playwright'), http = require('http'), fs = require('fs'), path = require('path');
const ROOT = path.resolve(__dirname, '..', '..'), OUT = path.join(ROOT, 'notes', 'free');
const TYPES = {'.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp'};
const SRC = [
  {k: '1', page: 'biology-unittest1-prep.html', cls: 'I PUC Biology'},
  {k: '2', page: 'biology-ii-puc-prep.html', cls: 'II PUC Biology'}
];
const INDEX_ONLY = process.argv.includes('--index-only');
const slug = (t) => t.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const pad = (n) => String(n).padStart(2, '0');

// Free Study Material PDFs in the chapter pages (keys rendered by pdfRow / static dl-rows; all free).
const FOLDER = {'1-2': 'ch2/', '1-3': 'ch3/', '2-9': 'ch9/'};
function folderExtras(k, dir) {
  const s = fs.readFileSync(path.join(ROOT, dir, 'index.html'), 'utf8'), files = [];
  const add = (e, t, h) => { if (fs.existsSync(path.join(ROOT, dir, h.split('?')[0]))) files.push({e, t, h: dir + h}); };
  const want = [['notes', '📄', "Sir's Typed Notes"], ['typed_notes', '📄', "Sir's Typed Notes"], ['study_guide', '📗', 'Complete Notes'], ['comprehensive', '📗', 'Complete Notes'], ['revision_notes', '⚡', k === '1' ? 'Rapid Revision' : 'Quick Summary']];
  for (const [key, e, t] of want) {
    const m = s.match(new RegExp('"' + key + '":\\s*\\{"title":\\s*"[^"]*",\\s*"desc":\\s*"[^"]*",\\s*"section":\\s*"[^"]*",\\s*"data":\\s*"([^"]+\\.pdf)"'));
    if (m && !files.some((f) => f.t === t)) add(e, t, m[1]);
  }
  return {page: dir, files};
}
function chapterExtras(k, n) {
  if (FOLDER[k + '-' + n]) return folderExtras(k, FOLDER[k + '-' + n]);
  const f = path.join(ROOT, 'pu' + k + '-ch' + n + '.html');
  if (!fs.existsSync(f)) return {page: null, files: []};
  const s = fs.readFileSync(f, 'utf8'), files = [];
  const add = (e, t, h) => { const p = h.split('?')[0]; if (fs.existsSync(path.join(ROOT, p))) files.push({e, t, h}); };
  if (k === '1') {
    // label from the page's own title (Ch 5 stores the typed notes under the "comprehensive" key)
    const label = (title, key) => /typed/i.test(title) ? ['📄', "Sir's Typed Notes"] : /revision/i.test(title) || key === 'revision_notes' ? ['⚡', 'Rapid Revision'] : ['📗', 'Complete Notes'];
    for (const key of ['typed_notes', 'comprehensive', 'revision_notes']) {
      const m = s.match(new RegExp('"' + key + '":\\s*\\{\\s*"title":\\s*"([^"]*)"[^}]*?"data":\\s*"([^"]+\\.pdf[^"]*)"'));
      if (m) { const [e, t] = label(m[1], key); add(e, t, m[2]); }
    }
  } else {
    const want = [['10_Typed_Notes.pdf', '📄', "Sir's Typed Notes"], ['00_Complete_Study_Notes.pdf', '📗', 'Complete Notes'], ['00b_Revision_Notes.pdf', '⚡', 'Quick Summary']];
    for (const [key, e, t] of want) {
      const m = s.match(new RegExp('"' + key.replace(/\./g, '\\.') + '":\\s*\\{"label":\\s*"[^"]*",\\s*"b64":\\s*"([^"]+)"'));
      if (m) add(e, t, m[1]);
    }
  }
  return {page: 'pu' + k + '-ch' + n + '.html', files};
}

const PRINT_CSS = `
html,body{background:#fff!important;color:#1E2A22!important}
body{margin:0!important;padding:0!important;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.fn{max-width:none;margin:0;padding:0 2px}
.fn,.fn *{font-family:Inter,'Noto Sans Kannada','Noto Sans Devanagari',Arial,sans-serif!important}
.fn-top{display:flex;justify-content:space-between;align-items:center;border-bottom:2px solid #B8912A;padding-bottom:8px;margin-bottom:12px}
.fn-top b{font:800 17px 'Space Grotesk',Inter,sans-serif;color:#1E2A22}.fn-top b small{display:block;font:600 10.5px Inter,sans-serif;color:#5C6E63;letter-spacing:.02em}
.fn-top span{font:700 10.5px Inter,sans-serif;color:#0B6F5E;border:1px solid #0B6F5E;border-radius:99px;padding:4px 10px}
.fn h1{font:800 24px/1.2 'Space Grotesk',Inter,sans-serif;margin:4px 0 2px;color:#1E2A22}
.fn .fn-k{font:700 11px Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#B8912A}
.fn .chip-row{margin:8px 0 10px!important}
.fn details.topic{break-inside:auto;margin-top:10px}
.fn details.topic>summary{break-after:avoid;list-style:none}
.fn details.topic>summary::-webkit-details-marker{display:none}
.fn .chevron,.fn button{display:none!important}
.fn img{max-width:100%;height:auto;break-inside:avoid}
.fn figure,.fn table{break-inside:avoid}
.fn-end{margin-top:16px;padding:10px 12px;border:1px dashed #B8912A;border-radius:10px;font:600 11.5px/1.5 Inter,sans-serif;color:#5C6E63}
`;

(async () => {
  fs.mkdirSync(OUT, {recursive: true});
  const srv = http.createServer((q, r) => {
    const p = path.join(ROOT, decodeURIComponent(q.url.split('?')[0]));
    if (fs.existsSync(p) && fs.statSync(p).isFile()) { r.setHeader('content-type', TYPES[path.extname(p)] || 'application/octet-stream'); r.end(fs.readFileSync(p)); }
    else { r.statusCode = 404; r.end(); }
  }).listen(0);
  const base = 'http://localhost:' + srv.address().port + '/';
  const browser = await chromium.launch();
  const ctx = await browser.newContext({serviceWorkers: 'block', colorScheme: 'light'});
  await ctx.route(/^https?:\/\/(?!localhost)/, (r) => r.abort());
  await ctx.addInitScript(() => { try { localStorage.setItem('baio_theme', 'light'); localStorage.setItem('baio_tour_done', '1'); localStorage.setItem('baio_user_name', 'Student'); } catch (e) {} });
  const data = {};
  for (const src of SRC) {
    const p = await ctx.newPage();
    await p.goto(base + src.page, {waitUntil: 'load'});
    await p.waitForTimeout(600);
    const chs = await p.evaluate(() => {
      const kids = [...document.getElementById('notesWrap').children], out = []; let cur = null;
      kids.forEach((k, i) => {
        const t = (k.innerText || '').trim();
        const m = k.classList.contains('chip-row') && t.match(/^Chapter\s+(\d+)\s*·\s*([^\n]+?)(?:\n|$)/);
        if (m) { cur = {n: +m[1], name: m[2].replace(/Board 20.*$/, '').trim(), idx: [i]}; out.push(cur); return; }
        if (k.classList.contains('unit-head') || k.classList.contains('section-sub')) return;
        if (cur) cur.idx.push(i);
      });
      return out;
    });
    const list = [];
    for (const ch of chs) {
      await p.goto(base + src.page, {waitUntil: 'load'});
      await p.waitForTimeout(300);
      await p.evaluate(({ch, cls, css}) => {
        const kids = [...document.getElementById('notesWrap').children];
        const nodes = ch.idx.map((i) => kids[i].cloneNode(true));
        nodes.forEach((n) => { n.querySelectorAll && n.querySelectorAll('details').forEach((d) => d.setAttribute('open', '')); if (n.tagName === 'DETAILS') n.setAttribute('open', ''); });
        document.documentElement.setAttribute('data-theme', 'light');
        document.body.innerHTML = '';
        const st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
        const w = document.createElement('div'); w.className = 'fn';
        w.innerHTML = '<div class="fn-top"><b>BAIO Learning System<small>Narendra Sir · Biology Lecturer · Founder/CEO</small></b><span>FREE NOTES</span></div>'
          + '<div class="fn-k">' + cls + ' · Chapter ' + ch.n + ' · Revision Notes</div><h1></h1>';
        w.querySelector('h1').textContent = ch.name;
        nodes.forEach((n) => w.appendChild(n));
        // in-app links (Diagram MCQs →, Open the full chapter →) do nothing in a PDF
        w.querySelectorAll('a').forEach((a) => { if (!a.closest('details') && /→\s*$/.test(a.textContent)) a.remove(); });
        w.querySelectorAll('div').forEach((d) => { if (!d.closest('details') && !d.textContent.trim() && !d.querySelector('img')) d.remove(); });
        const end = document.createElement('div'); end.className = 'fn-end';
        end.textContent = 'Free revision notes from the BAIO Learning System app (Unit Test Prep). For MCQs, NEET / KCET practice, mind maps and more, open the chapter in the BAIO app.';
        w.appendChild(end);
        document.body.appendChild(w);
      }, {ch, cls: src.cls, css: PRINT_CSS});
      await p.evaluate(() => Promise.all([...document.images].map((i) => i.complete ? 0 : new Promise((r) => { i.onload = i.onerror = r; }))));
      await p.evaluate(() => document.fonts.ready);
      const file = 'pu' + src.k + '-ch' + pad(ch.n) + '-' + slug(ch.name) + '.pdf';
      if (!(INDEX_ONLY && fs.existsSync(path.join(OUT, file)))) await p.pdf({path: path.join(OUT, file), format: 'A4', printBackground: true, margin: {top: '12mm', bottom: '14mm', left: '12mm', right: '12mm'},
        displayHeaderFooter: true, headerTemplate: '<span></span>',
        footerTemplate: '<div style="width:100%;font:9px Inter,Arial,sans-serif;color:#7a857f;padding:0 12mm;display:flex;justify-content:space-between"><span>BAIO Learning System · ' + src.cls + ' · Ch ' + ch.n + ' · Free revision notes</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>'});
      const pages = (fs.readFileSync(path.join(OUT, file), 'latin1').match(/\/Type\s*\/Page[^s]/g) || []).length;
      const ex = chapterExtras(src.k, ch.n);
      list.push({n: ch.n, t: ch.name, page: ex.page, files: [{e: '📘', t: 'Revision Notes', h: 'notes/free/' + file, pg: pages}].concat(ex.files)});
      console.log(src.cls, 'Ch', ch.n, ch.name, '→', file, pages + ' pp', '+', ex.files.map((f) => f.t).join(', ') || '—');
    }
    data[src.k] = {t: src.cls, prep: src.page, ch: list};
    await p.close();
  }
  await browser.close(); srv.close();
  fs.writeFileSync(path.join(OUT, 'free-notes.js'),
    '/* Free chapter notes for the home "Free Notes" downloads sheet. Built by scripts/free-notes/build-free-notes.js — do not edit by hand. */\n'
    + 'window.FREE_NOTES=' + JSON.stringify(data) + ';\n');
  console.log('wrote notes/free/free-notes.js');
})();
