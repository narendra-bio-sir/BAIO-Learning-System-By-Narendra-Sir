/* Builds pu1-ch10.html (Cell Cycle and Cell Division) from the PU-I Ch9 app template + the
   content in this folder. Run: node scripts/pu1-ch10/build.js
   Slide lists, one-shot parts and colour-notes page count come from pu1-ch10-assets/manifest.json
   (written by the asset builders). */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const S = require('./study.js'), Q = require('./questions.js'), M = require('./more.js');
const KN = require('./tr-kn.js'), HI = require('./tr-hi.js');
const A = 'pu1-ch10-assets';
let man = {};
try { man = JSON.parse(fs.readFileSync(path.join(ROOT, A, 'manifest.json'), 'utf8')); } catch (e) {}

/* ---------- deterministic balanced shuffling ---------- */
function rng(seed){ let a = seed >>> 0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; }
function hash(s){ let h = 2166136261; for (const c of s) { h ^= c.charCodeAt(0); h = Math.imul(h, 16777619); } return h >>> 0; }
function targets(n, seed){ const r = rng(seed), out = []; while (out.length < n) { const b = [0,1,2,3]; for (let i = 3; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } out.push(...b); } return out.slice(0, n); }
/* options are written correct-first; place the correct one at index t, keep the wrong ones in a seeded order */
function place(opts, t, seed){ const r = rng(seed); const wrong = opts.slice(1); for (let i = wrong.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [wrong[i], wrong[j]] = [wrong[j], wrong[i]]; } const o = wrong.slice(); o.splice(t, 0, opts[0]); return o; }

const topics = S.topics;
const DATA = { topics, study: S.study, concepts: S.concepts, flashcards: [], mcq: [], neet: [], pdfs: {} };
let id = 0;
topics.forEach(t => Q.flashcards[t.id].forEach(([f, b]) => DATA.flashcards.push({ topic: t.id, f, b, id: id++ })));
id = 0;
topics.forEach(t => { const L = Q.mcq[t.id], T = targets(L.length, hash('mcq' + t.id));
  L.forEach(([d, q, o, e], i) => DATA.mcq.push({ topic: t.id, difficulty: d, q, options: place(o, T[i], hash(q)), exp: e, answer: T[i], id: id++ })); });
const S12 = { CC: 'Both Statement I and II are correct', CI: 'Statement I is correct, Statement II is incorrect', IC: 'Statement I is incorrect, Statement II is correct', II: 'Both Statement I and II are incorrect' };
id = 0;
topics.forEach(t => { const L = Q.neet[t.id].filter(x => x.t !== 'ar'), T = targets(L.length, hash('neet' + t.id)); let k = 0;
  Q.neet[t.id].forEach(x => {
    const base = { type: x.t, topic: t.id, difficulty: x.d };
    let o, ans;
    if (x.t === 'ar') { o = Q.AR.slice(); ans = x.ans; }
    else if (x.t === 's12') { const c = S12[x.ans]; const rest = Object.values(S12).filter(v => v !== c); ans = T[k++]; o = place([c, ...rest], ans, hash(x.s1)); }
    else { ans = T[k++]; o = place(x.o, ans, hash(JSON.stringify(x))); }
    const q = Object.assign(base,
      x.t === 'ar' ? { assertion: x.a, reason: x.r } :
      x.t === 'match' ? { q: 'Match Column I with Column II:', colA: x.A, colB: x.B } :
      x.t === 'cistate' ? { qtype: x.qtype, statements: x.s } :
      x.t === 's12' ? { s1: x.s1, s2: x.s2 } :
      x.t === 'seq' ? { q: x.q, steps: x.steps } : { q: x.q },
      { options: o, exp: x.e, answer: ans, id: id++ });
    DATA.neet.push(q);
  }); });

const WS = { 'cycle':'worksheet-t1-cell-cycle.html', 'interphase':'worksheet-t2-interphase.html', 'mitosis-early':'worksheet-t3-prophase-metaphase.html', 'mitosis-late':'worksheet-t4-anaphase-telophase.html', 'cytokinesis':'worksheet-t5-cytokinesis.html', 'meiosis-prophase':'worksheet-t6-prophase-1.html', 'meiosis-one':'worksheet-t7-meiosis-1.html', 'meiosis-two':'worksheet-t8-meiosis-2.html' };
DATA.pdfs.handwritten_notes = { title: "Narendra Sir's Handwritten Notes", desc: 'Complete Chapter 10 notes in handwritten style · ' + (man.hwPages || 10) + ' pages · diagrams, tables & exam stars', section: 'study', data: A + '/pdf-handwritten_notes.pdf?v=1' };
DATA.pdfs.typed_notes = { title: "Narendra Sir's Typed Notes", desc: 'Complete Chapter 10 study notes (original PDF)', section: 'study', data: A + '/pdf-typed_notes.pdf?v=1' };
DATA.pdfs.diagrams = { title: 'Important Diagrams (PDF)', desc: 'All 8 labelled diagrams of this chapter on printable pages', section: 'study', data: A + '/pdf-diagrams.pdf?v=1' };
const TOPIC_WORKSHEET_FILES = {};
topics.forEach(t => { const k = 'ws_' + t.id; TOPIC_WORKSHEET_FILES[t.id] = k; DATA.pdfs[k] = { title: t.name, desc: 'Worksheet · 2 pages', section: 'worksheet', data: A + '/' + WS[t.id] }; });

const KCET = []; id = 0;
topics.forEach(t => { const L = M.kcet[t.id], T = targets(L.length, hash('kcet' + t.id));
  L.forEach(([f, d, q, o, e, A1, B1], i) => { const x = { topic: t.id, difficulty: d, format: f, q }; if (A1) { x.colA = A1; x.colB = B1; } Object.assign(x, { options: place(o, T[i], hash(q + f)), exp: e, answer: T[i], id: id++ }); KCET.push(x); }); });
const DESC = []; topics.forEach(t => M.desc[t.id].forEach(([m, d, q, a]) => DESC.push({ topic: t.id, marks: m, difficulty: d, q, a })));
const GLOSS = M.glossary.map(([term, def]) => ({ term, def }));
const GLOSS_TR = {}; M.glossary.forEach(([term]) => GLOSS_TR[term] = { kn: KN.glossary[term], hi: HI.glossary[term] });
const STUDY_TR = {}, CONC_TR = {};
topics.forEach(t => { STUDY_TR[t.id] = { kn: KN.study[t.id], hi: HI.study[t.id] }; CONC_TR[t.id] = { kn: KN.concepts[t.id], hi: HI.concepts[t.id] }; });
const J = x => JSON.stringify(x);

/* ---------- template surgery ---------- */
let s = fs.readFileSync(path.join(ROOT, 'pu1-ch9.html'), 'utf8');
function setConst(name, value, tail){
  const re = new RegExp('^const ' + name + ' = .*$', 'm');
  if (!re.test(s)) throw new Error('const not found: ' + name);
  s = s.replace(re, () => 'const ' + name + ' = ' + value + ';' + (tail || ''));
}
function rep(a, b, all){
  if (!s.includes(a)) throw new Error('not found: ' + a.slice(0, 80));
  s = all ? s.split(a).join(b) : s.replace(a, () => b);
}
function cut(startMark, endMark, b){
  const i = s.indexOf(startMark), j = s.indexOf(endMark, i);
  if (i < 0 || j < 0) throw new Error('cut markers not found: ' + startMark.slice(0, 50));
  s = s.slice(0, i) + b + s.slice(j);
}

setConst('DATA', J(DATA));
setConst('TOPIC_WORKSHEET_FILES', J(TOPIC_WORKSHEET_FILES));
setConst('KCET_QUESTIONS', J(KCET));
setConst('STUDY_TRANSLATIONS_CH9', J(STUDY_TR));
setConst('CONCEPT_TRANSLATIONS_CH9', J(CONC_TR));
setConst('STUDYTIPS_CH9_EN', J(M.tips));
setConst('STUDYTIPS_CH9_TRANSLATIONS', J({ kn: KN.tips, hi: HI.tips }));
setConst('BOARD_IMPORTANT_CH9', J(M.board));
setConst('DESC_QUESTIONS', J(DESC));
setConst('TREE_DATA', J(M.tree));
setConst('COMPARE_DATA', J(M.compare));
setConst('GLOSSARY_DATA', J(GLOSS));
setConst('GLOSSARY_TRANSLATIONS_CH9', J(GLOSS_TR));

/* Important Diagrams: our own drawn, labelled images (zoomable) instead of NCERT page links */
cut('/* ---- Important Diagrams: Board Exam Mandatory Diagram Guide', 'window.renderDiagrams = renderDiagrams;',
`/* ---- Important Diagrams: Board Exam Mandatory Diagram Guide, grouped by priority tier ----
   Every diagram is drawn for BAIO (pu1-ch10-assets/diag-*.jpg); pinch, double-tap or Ctrl+scroll to zoom. */
const CH10_DIAGRAMS = ${J(M.diagrams)};
function diagramRefItems(key){
  const items = CH10_DIAGRAMS.filter(d=>d.key===key);
  return items.map((d,i)=>\`<div class="diagram-ref-item">
    <div class="diagram-ref-head"><span class="diagram-ref-name">\${d.fig}</span><span class="diagram-ref-badges"><span class="diagram-ref-marks">\${d.marks}</span><span class="diagram-ref-priority \${d.pr}">\${d.prLabel}</span></span></div>
    <div class="diagram-ref-labels"><b>Labels to mark:</b> \${d.labels}</div>
    <div class="board-page-wrap diagram-img-wrap" id="diagWrap_\${key}_\${i}"><img id="diagImg_\${key}_\${i}" src="${A}/\${d.src}?v=1" alt="\${d.fig.replace(/<[^>]+>/g,'')}" loading="lazy" onload="this.classList.add('loaded')"></div>
  </div>\`).join('');
}
const DIAGRAM_SECTIONS = ${J(M.diagramSections)};
function attachDiagramZoom(wrapEl, imgEl){
  function currentWidthPct(){ const m = /([\\d.]+)%/.exec(imgEl.style.width); return m ? parseFloat(m[1]) : 100; }
  function setWidthPct(pct){ imgEl.style.width = Math.min(Math.max(pct, 100), 400) + '%'; }
  wrapEl.addEventListener('wheel', (e)=>{ if(!(e.ctrlKey || e.metaKey)) return; e.preventDefault(); setWidthPct(currentWidthPct() + (e.deltaY < 0 ? 15 : -15)); }, {passive:false});
  let startDist = 0, startWidth = 100;
  function dist(t){ return Math.hypot(t[0].clientX-t[1].clientX, t[0].clientY-t[1].clientY); }
  wrapEl.addEventListener('touchstart', (e)=>{ if(e.touches.length===2){ startDist = dist(e.touches); startWidth = currentWidthPct(); } }, {passive:true});
  wrapEl.addEventListener('touchmove', (e)=>{ if(e.touches.length===2){ e.preventDefault(); setWidthPct(startWidth*(dist(e.touches)/startDist)); } }, {passive:false});
  imgEl.addEventListener('dblclick', ()=> setWidthPct(currentWidthPct() > 100 ? 100 : 200));
}
function renderDiagrams(){
  let html = \`<div class="dl-topic-block"><div style="color:var(--ink-dim);font-size:12px;line-height:1.5;margin-bottom:8px;">\\u{1F4D6} Every high-yield labelled diagram in this chapter, ranked by board-exam priority with typical mark weightage and the exact labels to practise &mdash; pinch, double-tap or Ctrl+scroll to zoom in on any diagram.</div>\${pdfRow('diagrams')}</div>\`;
  DIAGRAM_SECTIONS.forEach(sec=>{ html += \`<div class="dl-topic-block"><div class="dl-section-title">\${sec.title}</div>\${diagramRefItems(sec.key)}</div>\`; });
  document.getElementById('content').innerHTML = html;
  setTimeout(function(){
    CH10_DIAGRAMS.forEach(d=>{
      const i = CH10_DIAGRAMS.filter(x=>x.key===d.key).indexOf(d);
      const wrap = document.getElementById(\`diagWrap_\${d.key}_\${i}\`), img = document.getElementById(\`diagImg_\${d.key}_\${i}\`);
      if(wrap && img) attachDiagramZoom(wrap, img);
    });
  }, 50);
}
`);
if (!s.includes('.diagram-img-wrap')) rep('</style>\n<script src="https://cdnjs', '.diagram-img-wrap{margin-top:10px;max-height:none}\n.diagram-img-wrap img{width:100%;display:block;border-radius:10px;background:#fff}\n</style>\n<script src="https://cdnjs');

/* Study Tips "View example": show this chapter's own tables in the chosen language */
cut('const TIP_EXAMPLE_INDEX =', 'function openTipExample(key){',
`const TIP_EXAMPLE_INDEX = {0:'cycle-clock', 2:'numbers', 3:'prophase1'};
const TIP_EXAMPLE_BTN_LABEL = {en:'View example', kn:'ಉದಾಹರಣೆ ನೋಡಿ', hi:'उदाहरण देखें'};
/* Each popover shows the filled-in table the tip talks about, taken from this chapter's own Study Mode data
   (DATA.study + STUDY_TRANSLATIONS_CH10), so the facts always match the Study tab in every language. */
function tipTable(topic, lang){
  const d = (lang !== 'en' && STUDY_TRANSLATIONS_CH10[topic] && STUDY_TRANSLATIONS_CH10[topic][lang]) || DATA.study[topic];
  const t = d.table, k = d.keyList;
  return \`<div style="overflow-x:auto;"><table class="tipex-table"><thead><tr>\${t.headers.map(h=>\`<th>\${h}</th>\`).join('')}</tr></thead><tbody>\${t.rows.map(r=>\`<tr>\${r.map((c,i)=>\`<td\${i?'':' class="tipex-organ"'}>\${c}</td>\`).join('')}</tr>\`).join('')}</tbody></table></div>
    \${k ? \`<div class="tipex-case" style="margin-top:10px;"><div class="tipex-case-title">\${k.title}</div>\${k.items.map((x,i)=>\`<div class="tipex-step"><span class="tipex-q">\${i+1}</span><span>\${x}</span></div>\`).join('')}</div>\` : ''}\`;
}
const TIP_EXAMPLES = {
  'cycle-clock': { title:{en:'🕒 The Cell Cycle Clock', kn:'🕒 ಕೋಶ ಚಕ್ರದ ಗಡಿಯಾರ', hi:'🕒 कोशिका चक्र की घड़ी'}, render: lang=>tipTable('cycle', lang) },
  'numbers': { title:{en:'🔢 Chromosome Number vs DNA Content', kn:'🔢 ವರ್ಣತಂತು ಸಂಖ್ಯೆ ಮತ್ತು DNA ಪ್ರಮಾಣ', hi:'🔢 गुणसूत्र संख्या और DNA मात्रा'}, render: lang=>tipTable('interphase', lang) },
  'prophase1': { title:{en:'🧬 Prophase I — One Keyword per Sub-stage', kn:'🧬 ಪ್ರೊಫೇಸ್ I — ಪ್ರತಿ ಉಪಹಂತಕ್ಕೆ ಒಂದು ಪದ', hi:'🧬 पूर्वावस्था I — हर उप-अवस्था का एक शब्द'}, render: lang=>tipTable('meiosis-prophase', lang) }
};
`);

/* Class presentation decks, scenes, one-shot */
const nStd = man.std || 0, nLarge = man.large || 0;
const list = (dir, n) => J(Array.from({ length: n }, (_, i) => A + '/' + dir + 'slide-' + String(i + 1).padStart(2, '0') + '.jpg'));
setConst('CLASS_SLIDES', list('', nStd));
setConst('CLASS_SLIDES_LARGE', list('proj/', nLarge));
rep('function pptSceneFor(){', 'Object.keys(PPT_SCENES).forEach(k=>{ PPT_SCENES[k] = {}; });   /* Ch10 has no live in-slide scenes; the Animated deck carries the animations */\nfunction pptSceneFor(){');
rep('/* ---- Class Presentation: PowerPoint-style slide viewer ----', '/* ---- Class Presentation: PowerPoint-style slide viewer (Ch10 decks are built by scripts/pu1-ch10/slides.js) ----');
setConst('OS_SKIP', J(man.osSkip || []), '   /* 0-based slide indices left out of the revision */');
setConst('OS_DROP', J(man.osDrop || { en: {}, kn: {}, hi: {} }), '   /* per language: slide index -> sentence numbers left out */');
cut('const OS_PARTS = [', 'const OS_NUM =', 'const OS_PARTS = ' + J(man.osParts || topics.map((t, i) => ({ from: 1, en: t.name, kn: t.name, hi: t.name }))) + ';\n');
const OS_IO = {
  en: { intro: 'Hello students. I am Narendra Sir, and this is the one-shot revision of Chapter 10, Cell Cycle and Cell Division, for PU-I Biology. We will revise the whole chapter in one go, in eight parts. Keep your notes ready, and pause whenever you want to write something down. Let us begin.',
        outro: 'That completes the one-shot revision of Cell Cycle and Cell Division. Quickly recall the big ideas. Interphase takes more than ninety five percent of the cycle, and S phase doubles the DNA but not the chromosome number. Mitosis is equational and gives two identical diploid cells. Meiosis is reductional, gives four haploid cells, and crossing over in pachytene creates variation. All the best for your exams!' },
  kn: { intro: 'ನಮಸ್ಕಾರ ವಿದ್ಯಾರ್ಥಿಗಳೇ. ನಾನು ನರೇಂದ್ರ ಸರ್. ಇದು PU-I ಜೀವಶಾಸ್ತ್ರದ ಅಧ್ಯಾಯ ಹತ್ತು, ಕೋಶ ಚಕ್ರ ಮತ್ತು ಕೋಶ ವಿಭಜನೆಯ ಒನ್-ಶಾಟ್ ಪುನರಾವರ್ತನೆ. ಇಡೀ ಅಧ್ಯಾಯವನ್ನು ಒಂದೇ ಬಾರಿಗೆ, ಎಂಟು ಭಾಗಗಳಲ್ಲಿ ಪುನರಾವರ್ತಿಸೋಣ. ನಿಮ್ಮ ನೋಟ್ಸ್ ಸಿದ್ಧವಾಗಿಟ್ಟುಕೊಳ್ಳಿ, ಏನಾದರೂ ಬರೆದುಕೊಳ್ಳಬೇಕಾದಾಗ ವಿರಾಮ ನೀಡಿ. ಆರಂಭಿಸೋಣ.',
        outro: 'ಇದರೊಂದಿಗೆ ಕೋಶ ಚಕ್ರ ಮತ್ತು ಕೋಶ ವಿಭಜನೆಯ ಒನ್-ಶಾಟ್ ಪುನರಾವರ್ತನೆ ಮುಗಿಯಿತು. ಮುಖ್ಯ ಅಂಶಗಳನ್ನು ಬೇಗ ನೆನಪಿಸಿಕೊಳ್ಳಿ. ಇಂಟರ್‌ಫೇಸ್ ಚಕ್ರದ ತೊಂಬತ್ತೈದು ಶೇಕಡಾಕ್ಕಿಂತ ಹೆಚ್ಚು ಸಮಯ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ, ಮತ್ತು S ಹಂತ DNA ಅನ್ನು ದ್ವಿಗುಣಗೊಳಿಸುತ್ತದೆ, ವರ್ಣತಂತು ಸಂಖ್ಯೆಯನ್ನಲ್ಲ. ಮೈಟಾಸಿಸ್ ಸಮ ವಿಭಜನೆ, ಎರಡು ಒಂದೇ ರೀತಿಯ ದ್ವಿಗುಣಿತ ಕೋಶಗಳನ್ನು ನೀಡುತ್ತದೆ. ಮಿಯಾಸಿಸ್ ಕ್ಷೀಣ ವಿಭಜನೆ, ನಾಲ್ಕು ಏಕಗುಣಿತ ಕೋಶಗಳನ್ನು ನೀಡುತ್ತದೆ, ಮತ್ತು ಪ್ಯಾಕಿಟೀನ್‌ನ ಕ್ರಾಸಿಂಗ್ ಓವರ್ ವ್ಯತ್ಯಾಸವನ್ನು ಸೃಷ್ಟಿಸುತ್ತದೆ. ಪರೀಕ್ಷೆಗಳಿಗೆ ಶುಭಾಶಯಗಳು!' },
  hi: { intro: 'नमस्ते विद्यार्थियों। मैं नरेंद्र सर हूँ। यह PU-I जीवविज्ञान के अध्याय दस, कोशिका चक्र और कोशिका विभाजन, का वन-शॉट रिवीज़न है। हम पूरे अध्याय को एक ही बार में, आठ भागों में दोहराएँगे। अपने नोट्स तैयार रखिए, और जब भी कुछ लिखना हो, रोक लीजिए। चलिए शुरू करते हैं।',
        outro: 'इसके साथ कोशिका चक्र और कोशिका विभाजन का वन-शॉट रिवीज़न पूरा हुआ। मुख्य बातें जल्दी से याद कीजिए। अंतरावस्था चक्र का पंचानबे प्रतिशत से अधिक समय लेती है, और S प्रावस्था DNA दोगुना करती है, गुणसूत्र संख्या नहीं। समसूत्री विभाजन समीकरण विभाजन है और दो समान द्विगुणित कोशिकाएँ देता है। अर्धसूत्री विभाजन न्यूनीकरण विभाजन है, चार अगुणित कोशिकाएँ देता है, और पैकिटीन का जीन विनिमय विविधता लाता है। परीक्षाओं के लिए शुभकामनाएँ!' }
};
{
  const i = s.indexOf('const OS_TXT = {'), j = s.indexOf('const osT =', i);
  let blk = s.slice(i, j);
  for (const L of ['en', 'kn', 'hi']) {
    const k = blk.indexOf('  ' + L + ':{');
    const nextL = { en: '  kn:{', kn: '  hi:{', hi: '};' }[L];
    const e = blk.indexOf(nextL, k + 3);
    let seg = blk.slice(k, e);
    seg = seg.replace(/intro:'(?:[^'\\]|\\.)*'/, () => "intro:'" + OS_IO[L].intro.replace(/'/g, "\\'") + "'")
             .replace(/outro:'(?:[^'\\]|\\.)*'/, () => "outro:'" + OS_IO[L].outro.replace(/'/g, "\\'") + "'");
    blk = blk.slice(0, k) + seg + blk.slice(e);
  }
  s = s.slice(0, i) + blk + s.slice(j);
}
rep('12 topics · step by step', (man.animTopics || 12) + ' topics · step by step', true);
rep("pu1-ch9-assets/animated.html?lang=${pptLang}&v=5", "pu1-ch9-assets/animated.html?lang=${pptLang}&v=1");

/* Podcasts: Narendra Sir's recorded episodes in 5 languages */
cut('const PODCASTS_CH9 = {', 'function renderPodcast(){',
`const PODCASTS_CH9 = {
  en: {label:'English', url:'pu1-ch9-assets/podcast-english.mp3?v=2'},
  kn: {label:'Kannada', url:'pu1-ch9-assets/podcast-kannada.mp3?v=2'},
  hi: {label:'Hindi', url:'pu1-ch9-assets/podcast-hindi.mp3?v=2'},
  mr: {label:'Marathi', url:'pu1-ch9-assets/podcast-marathi.mp3?v=2'},
  ur: {label:'Urdu', url:'pu1-ch9-assets/podcast-urdu.mp3?v=2'}
};
let podcastLang = 'en';
let podcastSpeed = 1;
function podcastSetLang(lang){ podcastLang = lang; renderContent(); }
window.podcastSetLang = podcastSetLang;
`);

/* Colour Notes */
setConst('COLOUR_NOTES_PAGES', String(man.cnPages || 4));
/* Pages are Narendra Sir's own 4-page Colour Notes PDF, as 1100x1556 JPGs (render-cn.js is no longer used). */
rep("colour-notes/page-${String(i).padStart(2,'0')}.jpg?v=1`", "colour-notes/page-${String(i).padStart(2,'0')}.jpg?v=2`");
rep('draggable="false" width="1100" height="1450"', 'draggable="false" width="1100" height="1556"');
rep("const CN_RAZORPAY_LINK = 'https://rzp.io/rzp/PzZQP9K'; /* Biomolecules Colour Notes ₹100 payment link */",
    "const CN_RAZORPAY_LINK = 'https://rzp.io/rzp/rV09xlyo'; /* Cell Cycle Colour Notes ₹100 payment link */");
rep("const RAZORPAY_PREMIUM_LINK = 'YOUR_CHAPTER9_PREMIUM_LINK_HERE';", "const RAZORPAY_PREMIUM_LINK = 'https://rzp.io/rzp/DRVyP7MF';");

/* Header, titles, jump list */
rep('<title>Chapter 9: Biomolecules — PU-I Biology | Narendra Sir</title>', '<title>Chapter 10: Cell Cycle and Cell Division — PU-I Biology | Narendra Sir</title>');
rep('<div class="chapter-title">Chapter 9: Biomolecules</div>', '<div class="chapter-title">Chapter 10: Cell Cycle and Cell Division</div>');
rep('Chemical Composition · Biomicromolecules · Nitrogenous Bases · Polysaccharides · Nucleic Acids · Proteins · Enzymes · Enzyme Kinetics',
    'Cell Cycle · Interphase · Prophase & Metaphase · Anaphase & Telophase · Cytokinesis · Prophase I · Meiosis I · Meiosis II');
rep(`      <div class="notif-modal-item chapter-jump-item chapter-jump-current">
        <span class="chapter-jump-icon">🧪</span>
        <span><b>Chapter 9</b><span class="chapter-jump-title">Biomolecules</span></span>
        <span class="chapter-jump-current-tag">You're here</span>
      </div>`,
`      <a class="notif-modal-item chapter-jump-item" href="pu1-ch9.html">
        <span class="chapter-jump-icon">🧪</span>
        <span><b>Chapter 9</b><span class="chapter-jump-title">Biomolecules</span></span>
      </a>
      <div class="notif-modal-item chapter-jump-item chapter-jump-current">
        <span class="chapter-jump-icon">🔄</span>
        <span><b>Chapter 10</b><span class="chapter-jump-title">Cell Cycle and Cell Division</span></span>
        <span class="chapter-jump-current-tag">You're here</span>
      </div>`);
rep("QuickCard.mount(document.getElementById('content'), {id:'pu1-ch9', base:'', title:'Biomolecules', cls:'I PUC', ch:9})",
    "QuickCard.mount(document.getElementById('content'), {id:'pu1-ch10', base:'', title:'Cell Cycle and Cell Division', cls:'I PUC', ch:10})");

/* identifiers, keys and assets */
s = s.replace(/pu1-ch9-assets/g, A)
     .replace(/pu1ch9_biomolecules_/g, 'pu1ch10_cellcycle_')
     .replace(/pu1ch9_/g, 'pu1ch10_')
     .replace(/'ch9_student_profile'/g, "'pu1ch10_student_profile'")
     .replace(/'ch9_lang'/g, "'pu1ch10_lang'")
     .replace(/CH9-PU1-/g, 'CH10-PU1-')
     .replace(/(_|\b)CH9(?=_|\b)/g, '$1CH10')
     .replace(/Ch9_Biomolecules_Mind_Map/g, 'Ch10_Cell_Cycle_Mind_Map')
     .replace(/Biomolecules_Colour_Notes/g, 'Cell_Cycle_Colour_Notes')
     .replace(/Chapter 9: Biomolecules/g, 'Chapter 10: Cell Cycle and Cell Division')
     .replace(/Biomolecules Colour Notes download \(Chapter 9\)/g, 'Cell Cycle Colour Notes download (Chapter 10)')
     .replace(/Board Important \\u2013 Biomolecules/g, 'Board Important \\u2013 Cell Cycle and Cell Division')
     .replace(/Biomolecules &ndash;/g, 'Cell Cycle and Cell Division &ndash;')
     .replace(/Colour Notes – Biomolecules/g, 'Colour Notes – Cell Cycle')
     .replace(/alt="Biomolecules Mind Map"/g, 'alt="Cell Cycle and Cell Division Mind Map"')
     .replace(/Biomolecules colour notes/g, 'Cell Cycle colour notes')
     .replace(/study notes for Biomolecules/g, 'study notes for Cell Cycle and Cell Division')
     .replace(/BAIO Learning System &middot; Biomolecules/g, 'BAIO Learning System &middot; Cell Cycle and Cell Division')
     .replace(/Chapter 9 Updates/g, 'Chapter 10 Updates')
     .replace(/My Chapter 9 Notes/g, 'My Chapter 10 Notes')
     .replace(/Chapter 9 Handwritten Notes/g, 'Chapter 10 Handwritten Notes')
     .replace(/Chapter 9 Razorpay/g, 'Chapter 10 Razorpay')
     .replace(/Chapter 9's own 'CH9-PREMIUM'/g, "Chapter 10's own 'CH10-PREMIUM'")
     .replace(/Ch 9 Biomolecules deck/g, 'Ch 10 deck');
fs.writeFileSync(path.join(ROOT, 'pu1-ch10.html'), s);

/* leftovers report */
const left = s.split('\n').map((l, i) => [i + 1, l]).filter(([, l]) => /ch9|Biomolec|Chapter 9|ಜೈವಿಕ ಅಣು|जैव अणु|enzyme/i.test(l) && l.length < 3000);
console.log('pu1-ch10.html', (s.length / 1024).toFixed(0) + ' KB;', DATA.mcq.length, 'MCQ', DATA.neet.length, 'NEET', KCET.length, 'KCET', DESC.length, 'desc');
left.slice(0, 60).forEach(([n, l]) => console.log('  ' + n + ': ' + l.trim().slice(0, 150)));
