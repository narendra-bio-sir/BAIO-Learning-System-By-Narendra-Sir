/* 8 printable 2-page topic worksheets (same layout as the Ch9 worksheets) → pu1-ch10-assets/worksheet-t*.html */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..'), S = require('./study.js'), Q = require('./questions.js'), M = require('./more.js');
const tpl = fs.readFileSync(path.join(ROOT, 'pu1-ch9-assets', 'worksheet-t1-chemical-composition.html'), 'utf8');
const head = tpl.slice(0, tpl.indexOf('<body>')).replace(/<title>[\s\S]*?<\/title>/, '');
const qr = (tpl.match(/<div class="ws-qr">[\s\S]*?<\/div>\s*<\/div>/) || [''])[0];
const FILES = { 'cycle':'worksheet-t1-cell-cycle.html', 'interphase':'worksheet-t2-interphase.html', 'mitosis-early':'worksheet-t3-prophase-metaphase.html', 'mitosis-late':'worksheet-t4-anaphase-telophase.html', 'cytokinesis':'worksheet-t5-cytokinesis.html', 'meiosis-prophase':'worksheet-t6-prophase-1.html', 'meiosis-one':'worksheet-t7-meiosis-1.html', 'meiosis-two':'worksheet-t8-meiosis-2.html' };
const DRAW = { 'cycle':'Draw a labelled diagram of the cell cycle showing G₁, S, G₂, M phase and G₀.', 'interphase':'Draw a chromosome before and after S phase and label sister chromatids and centromere.', 'mitosis-early':'Draw labelled diagrams of prophase and metaphase in an animal cell.', 'mitosis-late':'Draw labelled diagrams of anaphase and telophase in an animal cell.', 'cytokinesis':'Draw labelled diagrams to show cytokinesis in an animal cell and in a plant cell.', 'meiosis-prophase':'Draw labelled diagrams of pachytene and diplotene showing crossing over and chiasmata.', 'meiosis-one':'Draw labelled diagrams of metaphase I and anaphase I.', 'meiosis-two':'Draw labelled diagrams of the stages of meiosis II.' };
const L = ['a', 'b', 'c', 'd'];
function shuf(o, seed){ const a = o.slice(); let k = seed; for (let i = a.length - 1; i > 0; i--){ k = (k * 9301 + 49297) % 233280; const j = Math.floor(k / 233280 * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }
const header = (t, i) => `
    <div class="ws-header">
      <div class="ws-header-top">
        <div class="ws-brand">
          <div class="name">Biology <span class="baio">All In One</span> (BAIO)</div>
          <div class="tagline">Learning System &middot; NEET / KCET Aligned</div>
          <div class="cred">Narendra Sir <span class="cred-sub">&ndash; Lecturer in Biology, M.Sc, B.Ed, KSET</span></div>
          <div class="cred2">Founder &amp; CEO, Biology All In One (BAIO) Learning System</div>
        </div>
        ${qr}
      </div>
      <div class="ws-title-row">
        <span class="wlabel">Worksheet</span>
        <div class="ws-chapter">Chapter 10: Cell Cycle and Cell Division</div>
        <div class="ws-topic">Topic ${i + 1} &middot; ${t.name.replace(/&/g, '&amp;')}</div>
      </div>
      <div class="ws-fields">
        <div class="f wide">Name: <span class="ln"></span></div>
        <div class="f">Roll No: <span class="ln"></span></div>
        <div class="f">Section: <span class="ln"></span></div>
        <div class="f">Date: <span class="ln"></span></div>
      </div>
    </div>`;
const footer = n => `
    <div class="ws-footer">
      Biology All In One (BAIO) Learning System &middot; Worksheet by Narendra Sir &ndash; Lecturer in Biology
      &middot; <a href="https://whatsapp.com/channel/0029Vb6CCEO5vKADDySvN90X">WhatsApp</a>
      &middot; <a href="https://www.instagram.com/new_gen_bioguru?igsh=YTMyMXB4YjA3OXhw">Instagram</a>
      &middot; <a href="https://youtube.com/@biogurunarendrasir?si=sQXOrNWk3EnIL7Y0">YouTube</a>
      &middot; <span class="pnum">Page ${n} of 2</span>
    </div>`;
const lines = n => `<div class="ws-answer-lines">${'<div class="rl"></div>'.repeat(n)}</div>`;
S.topics.forEach((t, i) => {
  const mcq = Q.mcq[t.id], pick = [0, 4, 9, 14, 19].map(k => mcq[k]);
  const fib = Q.neet[t.id].filter(x => x.t === 'fib');
  const d2 = M.desc[t.id].filter(x => x[0] === 2), d3 = M.desc[t.id].filter(x => x[0] === 3), d5 = M.desc[t.id].filter(x => x[0] === 5), d1 = M.desc[t.id].filter(x => x[0] === 1);
  const p1 = `<div class="ws-sec-title">Section A &mdash; Multiple Choice Questions <span class="marks">(1 mark each &middot; tick the correct option)</span></div>
${pick.map((q, k) => `    <div class="ws-q"><span class="num">${k + 1}.</span> ${q[1]}
      <div class="ws-opts">
        ${shuf(q[2], 7 + k * 13 + i).map((o, j) => `<div>(${L[j]}) ${o}</div>`).join('')}
      </div>
    </div>`).join('\n')}
    <div class="ws-sec-title">Section B &mdash; Fill in the Blanks <span class="marks">(1 mark each)</span></div>
${fib.map((q, k) => `    <div class="ws-fib-item">${k + 1}. ${q.q.replace('______', '<span class="ws-blank-line"></span>')}</div>`).join('\n')}
    <div class="ws-sec-title">Section C &mdash; 1 and 2 Mark Questions</div>
${[...d1, ...d2].map((q, k) => `    <div class="ws-q"><span class="num">${k + 1}.</span> ${q[2]} <span class="marks">(${q[0]} M)</span></div>\n    ${lines(q[0])}`).join('\n')}`;
  const p2 = `<div class="ws-sec-title">Section D &mdash; 3 Mark Questions</div>
${d3.map((q, k) => `    <div class="ws-q"><span class="num">${k + 1}.</span> ${q[2]}</div>\n    ${lines(2)}`).join('\n')}
    <div class="ws-sec-title">Section E &mdash; 5 Mark Question</div>
${d5.map((q, k) => `    <div class="ws-q"><span class="num">${k + 1}.</span> ${q[2]}</div>\n    ${lines(3)}`).join('\n')}
    <div class="ws-sec-title">Section F &mdash; Draw &amp; Label</div>
    <div class="ws-q"><span class="num">1.</span> ${DRAW[t.id]}</div>
    <div class="ws-diagram-box"></div>`;
  const page = (n, body) => `    <div class="ws-page">\n${header(t, i)}\n\n    <div class="ws-body">\n    ${body}\n    </div>\n${footer(n)}\n\n  </div>`;
  const html = head.replace('<head>', `<head>\n<title>Worksheet &ndash; Ch10 Topic ${i + 1}: ${t.name.replace(/&/g, '&amp;')} | BAIO</title>`) +
    `<body>\n  <div class="toolbar">\n    <button onclick="window.print()">&#128424;&#65039; Print / Save as PDF</button>\n  </div>\n\n${page(1, p1)}\n${page(2, p2)}\n</body>\n</html>\n`;
  fs.writeFileSync(path.join(ROOT, 'pu1-ch10-assets', FILES[t.id]), html);
});
console.log('worksheets written');
