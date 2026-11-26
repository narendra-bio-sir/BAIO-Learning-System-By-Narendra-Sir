// II PUC Biology · Class test (20 marks, 60 min): Ch 7 Human Health and Disease, Ch 8 Microbes in Human Welfare,
// Ch 9 Biotechnology: Principles and Processes.
//
// Layout is the DSE (PU) LBA 2026-27 Unit Test 1 Model Question Paper (biology-ii-puc-unittest1-mqp.pdf) scaled to 20 marks:
//   I MCQ 5 × 1 · II fill-ups 2 × 1 · III any 1 of 2 × 2 · IV any 2 of 3 × 3 · V any 1 of 2 × 5 = 20.
// The 7 one-markers split 3 : 2 : 2 across Ch 7 : 8 : 9, exactly as in the blueprint.
// Chapter pattern follows the official 2026-27 II PUC Blue Print (KSEAB):
//   Ch 7 (11 marks) = 3 × 1 + 1 × 3 + 1 × 5   ·   Ch 8 (7 marks) = 2 × 1 + 1 × 2 + 1 × 3   ·   Ch 9 (7 marks) = 2 × 1 + 1 × 5
// so 2-mark questions come only from Ch 8, 3-mark only from Ch 7 and Ch 8, and 5-mark only from Ch 7 and Ch 9.
// Every question is from the II PUC Biology Question Bank (biology-ii-puc-question-bank-2025-26.pdf); answers follow
// the current NCERT Class XII text.
// Builds 3 PDFs into exam-corner/pu-board-2026-27/: …-20m.pdf (question paper), …-20m-answer-key.pdf, …-20m-blueprint.pdf
// Run: NODE_PATH=<global node_modules with playwright> node scripts/class-tests/pu2-class-test-health-microbes-biotech.js
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const OUT = path.join(ROOT, 'exam-corner', 'pu-board-2026-27');
const BASE = 'biology-ii-puc-class-test-health-microbes-biotech-20m';
const img = (f) => 'data:image/jpeg;base64,' + fs.readFileSync(path.join(ROOT, 'pu2-unittest-prep-assets', f)).toString('base64');
const CHN = {7: 'Human Health and Disease', 8: 'Microbes in Human Welfare', 9: 'Biotechnology: Principles and Processes'};

/* ---------------------------------------------------------------- questions (paper order) ---------------------------------------------------------------- */
const MCQ = [
  {ch: 7, ref: 'A I · Q2', lv: 'Easy', q: 'Which of the following is not a bacterial disease in humans?', o: ['Pneumonia', 'Malaria', 'Plague', 'Diphtheria'], a: 1,
    e: 'Malaria is caused by the protozoan Plasmodium; pneumonia, plague and diphtheria are bacterial diseases.'},
  {ch: 7, ref: 'A I · Q15', lv: 'Easy', q: 'Which of the following is an autoimmune disease?', o: ['Rheumatoid arthritis', 'Tuberculosis', 'Malaria', 'AIDS'], a: 0,
    e: 'In autoimmunity the body attacks self-cells; rheumatoid arthritis is an example.'},
  {ch: 8, ref: 'A I · Q7', lv: 'Easy', wide: true, q: 'Which micro-organism is useful in the production of citric acid?', o: ['Acetobacter aceti', 'Penicillium notatum', 'Aspergillus niger', 'Clostridium butylicum'], a: 2,
    e: 'Aspergillus niger (a fungus) produces citric acid; Acetobacter aceti gives acetic acid and Clostridium butylicum butyric acid.'},
  {ch: 8, ref: 'A I · Q16', lv: 'Easy', q: 'Mycorrhiza is involved in the absorption of ______ from soil and passes it to the plant.', o: ['Nitrogen', 'Phosphorus', 'Potassium', 'Magnesium'], a: 1,
    e: 'The fungal symbiont (e.g. Glomus) absorbs phosphorus from the soil and passes it to the plant.'},
  {ch: 9, ref: 'A I · Q3', lv: 'Easy', q: 'Autonomously replicating circular extra-chromosomal DNA is called', o: ['Vector', 'Restriction enzyme', 'Marker', 'Plasmid'], a: 3,
    e: 'A plasmid is an autonomously replicating, circular, extra-chromosomal DNA; it is used as a vector.'}
];
const WORDS = ['Elution', 'Metastasis', 'Smack'];   /* "Smack" is the extra word */
const FIB = [
  {ch: 7, ref: 'A II · Q11', lv: 'Easy', q: 'The most feared property of malignant tumors is ____________.', a: 'Metastasis',
    e: 'Cells sloughed from malignant tumors reach distant sites through the blood and start new tumors (metastasis).'},
  {ch: 9, ref: 'A II · Q6', lv: 'Easy', q: 'The extraction of separated DNA bands from the agarose gel is known as ____________.', a: 'Elution',
    e: 'Separated bands of DNA are cut out from the agarose gel and extracted from the gel piece: elution.'}
];
const B = [   /* 2 marks, all Ch 8 (only Ch 8 has 2-mark questions in the blueprint) */
  {ch: 8, ref: 'B III · Q5', lv: 'Easy', q: 'Define BOD. Mention its significance.',
    p: [['BOD (biochemical oxygen demand): the amount of oxygen that would be consumed if all the organic matter in one litre of water were oxidised by bacteria', 1], ['Significance: it is an indirect measure of the organic matter in water; the greater the BOD of waste water, the more its polluting potential (sewage is treated till the BOD is reduced)', 1]],
    m: '<ul><li><b>BOD (biochemical oxygen demand)</b> is the amount of oxygen that would be consumed if all the organic matter in one litre of water were oxidised by bacteria.</li><li><b>Significance:</b> the BOD test measures the rate of uptake of oxygen by micro-organisms in a water sample, so it is indirectly a measure of the organic matter present. The greater the BOD of waste water, the more is its polluting potential; sewage is treated till its BOD is reduced.</li></ul>'},
  {ch: 8, ref: 'B III · Q8', lv: 'Easy', q: 'Mention the source and uses of Cyclosporin A.',
    p: [['Source: the fungus Trichoderma polysporum', 1], ['Use: immunosuppressive agent in organ-transplant patients', 1]],
    m: '<ul><li><b>Source:</b> the fungus <b><i>Trichoderma polysporum</i></b>.</li><li><b>Use:</b> cyclosporin A is a bioactive molecule used as an <b>immunosuppressive agent</b> in organ-transplant patients.</li></ul>'}
];
const C = [   /* 3 marks: Ch 7 and Ch 8 */
  {ch: 7, ref: 'C IV · Q10', lv: 'Easy', q: 'Differentiate between active immunity and passive immunity. Give an example for each.',
    p: [['Active immunity: antibodies produced in the host body on exposure to antigens (living or dead microbes or other proteins); slow, takes time for full response', 1], ['Passive immunity: ready-made (preformed) antibodies are directly given to protect the body; quick', 1], ['Examples: active – natural infection or vaccination; passive – IgA in colostrum, antibodies through placenta, antitoxin for tetanus or antivenom', 1]],
    m: '<table class="dt"><tr><th>Active immunity</th><th>Passive immunity</th></tr><tr><td>Antibodies are produced in the host body when it is exposed to antigens (living or dead microbes or other proteins).</td><td>Ready-made (preformed) antibodies are directly given to protect the body against foreign agents.</td></tr><tr><td>Slow; takes time to give its full effective response.</td><td>Quick protection.</td></tr><tr><td>e.g. immunisation with vaccines, or natural infection.</td><td>e.g. IgA antibodies in colostrum, antibodies to the foetus through the placenta, antitoxin in tetanus, antivenom for snakebite.</td></tr></table>'},
  {ch: 7, ref: 'C IV · Q16', lv: 'Easy', q: 'Mention the names of three drugs which are commonly abused and write the binomial names of the plants from which these drugs are extracted.',
    p: [['Opioids (heroin/smack, morphine): Papaver somniferum (poppy, latex)', 1], ['Cannabinoids (marijuana, hashish, charas, ganja): Cannabis sativa', 1], ['Coca alkaloid (cocaine, coke, crack): Erythroxylum coca', 1]],
    m: '<ul><li><b>Opioids</b> – heroin (smack), obtained by acetylation of morphine from the latex of the poppy plant <b><i>Papaver somniferum</i></b>.</li><li><b>Cannabinoids</b> – marijuana, hashish, charas, ganja, from the inflorescences, leaves and resin of <b><i>Cannabis sativa</i></b>.</li><li><b>Coca alkaloid</b> – cocaine (coke, crack), from the coca plant <b><i>Erythroxylum coca</i></b>.</li></ul>'},
  {ch: 8, ref: 'C IV · Q5', lv: 'Easy', q: 'Mention one use each for the following enzymes: a) Lipase b) Pectinase c) Streptokinase.',
    p: [['Lipase: in detergent formulations to remove oily stains from laundry', 1], ['Pectinase: to clarify bottled fruit juices (with proteases)', 1], ['Streptokinase: "clot buster" to remove clots from blood vessels of patients with myocardial infarction', 1]],
    m: '<ul><li><b>a) Lipases</b> are used in detergent formulations; they help in removing oily stains from the laundry.</li><li><b>b) Pectinases</b> (with proteases) are used to clarify bottled fruit juices.</li><li><b>c) Streptokinase</b>, produced by <i>Streptococcus</i> and modified by genetic engineering, is used as a "clot buster" for removing clots from the blood vessels of patients who have undergone myocardial infarction.</li></ul>'}
];
const D5 = [   /* V: 5 marks, Ch 7 and Ch 9 */
  {ch: 7, ref: 'D V · Q4', lv: 'Average', q: 'Explain the life cycle of Plasmodium.', fig: 'fig-7-1.jpg', figT: 'NCERT Figure 7.1: Stages in the life cycle of Plasmodium',
    p: [['Plasmodium enters the human body as sporozoites (infectious form) through the bite of an infected female Anopheles mosquito', 1], ['Parasites multiply asexually in liver cells, then attack red blood cells, which rupture', 1], ['Rupture of RBCs releases haemozoin, which causes chill and high fever recurring every 3–4 days; gametocytes develop in RBCs', 1], ['A female Anopheles biting an infected person takes up gametocytes; fertilisation and development take place in the mosquito gut', 1], ['Sporozoites formed in the mosquito are stored in its salivary glands and enter a new human host at the next bite; two hosts (human and mosquito), mosquito is also the vector', 1]],
    m: '<ul><li>Plasmodium enters the human body as <b>sporozoites</b> (infectious form) through the bite of an infected <b>female <i>Anopheles</i></b> mosquito.</li><li>The parasites first multiply (asexually) within the <b>liver cells</b> and then attack the <b>red blood cells</b>, resulting in their rupture.</li><li>The rupture of RBCs releases a toxic substance, <b>haemozoin</b>, responsible for the chill and high fever recurring every three to four days. Sexual stages (<b>gametocytes</b>) develop in the RBCs.</li><li>When a female <i>Anopheles</i> bites an infected person, the parasites enter the mosquito; fertilisation and development take place in its stomach (gut).</li><li>The parasites multiply to form sporozoites, which are stored in the mosquito\'s <b>salivary glands</b> and are introduced into a person at the next bite. The parasite needs <b>two hosts</b>, human and mosquito; the female <i>Anopheles</i> is also the vector.</li></ul>'},
  {ch: 9, ref: 'D V · Q6', lv: 'Easy', q: 'Explain the process of amplification of gene using PCR.', fig: 'fig-9-6.jpg', figT: 'NCERT Figure 9.6: Polymerase chain reaction (PCR)',
    p: [['PCR (polymerase chain reaction): multiple copies of the gene of interest synthesised in vitro using two sets of primers and DNA polymerase', 1], ['Denaturation: double-stranded DNA separated at high temperature', 1], ['Primer annealing: primers (small chemically synthesised oligonucleotides complementary to the DNA) bind to the template', 1], ['Extension: thermostable DNA polymerase (Taq, from Thermus aquaticus) extends the primers using nucleotides and genomic DNA as template', 1], ['Repeated cycles amplify the segment about a billion times; the amplified fragment can be ligated with a vector for cloning', 1]],
    m: '<ul><li><b>PCR</b> (polymerase chain reaction): multiple copies of the gene (or DNA) of interest are synthesised <i>in vitro</i> using two sets of <b>primers</b> (small chemically synthesised oligonucleotides complementary to the regions of DNA) and the enzyme <b>DNA polymerase</b>.</li><li>Each cycle has three steps: <b>(i) denaturation</b> of double-stranded DNA at high temperature, <b>(ii) primer annealing</b> to the separated strands, and <b>(iii) extension</b> of primers by the polymerase, using the nucleotides provided and the genomic DNA as template.</li><li>The polymerase used is <b>thermostable</b> (Taq polymerase, from <i>Thermus aquaticus</i>), so it stays active during the high-temperature denaturation.</li><li>Repeating the cycle many times amplifies the DNA segment approximately <b>a billion times</b>; the amplified fragment can then be ligated with a vector for further cloning.</li></ul>'}
];

/* ---------------------------------------------------------------- numbering and checks ---------------------------------------------------------------- */
const ALL = [...MCQ.map(q => ({...q, t: 'mcq', mk: 1})), ...FIB.map(q => ({...q, t: 'fib', mk: 1})), ...B.map(q => ({...q, t: 'B', mk: 2})), ...C.map(q => ({...q, t: 'C', mk: 3})), ...D5.map(q => ({...q, t: 'V', mk: 5}))];
ALL.forEach((q, i) => { q.n = i + 1; if (q.p) { const s = q.p.reduce((a, p) => a + p[1], 0); if (s !== q.mk) throw new Error(`Q${q.n}: points ${s} ≠ ${q.mk}`); } });
const ALLOWED = {7: ['mcq', 'fib', 'C', 'V'], 8: ['mcq', 'fib', 'B', 'C'], 9: ['mcq', 'fib', 'V']};
for (const q of ALL) if (!ALLOWED[q.ch].includes(q.t)) throw new Error(`Q${q.n}: Ch ${q.ch} has no ${q.t} questions in the blueprint`);
const setBy = (ch) => ALL.filter(q => q.ch === ch).reduce((a, q) => a + q.mk, 0);

/* ---------------------------------------------------------------- HTML ---------------------------------------------------------------- */
const css = `
@page{size:A4}
*{box-sizing:border-box}
body{font-family:'Noto Serif','DejaVu Serif',Georgia,serif;font-size:10.8pt;line-height:1.28;color:#111;margin:0}
.hd{text-align:center;border-bottom:2px solid #111;padding-bottom:5px;margin-bottom:7px}
.hd .t0{font-size:9.6pt;letter-spacing:.5px}
.hd .t1{font-family:'DejaVu Sans',Arial,sans-serif;font-weight:700;font-size:14.5pt;letter-spacing:.5px;margin-top:2px}
.hd .t2{font-weight:700;font-size:12pt;margin-top:2px}
.hd .t3{font-size:9.8pt;margin-top:3px}
.meta{display:flex;justify-content:space-between;font-weight:700;font-size:10.8pt;margin:5px 0 3px}
.who{display:flex;gap:18px;font-size:10.3pt;margin:5px 0 8px}
.who span{flex:1;border-bottom:1px dotted #555;padding-bottom:2px}
.ins{font-size:9.8pt;border:1px solid #999;border-radius:4px;padding:4px 9px;margin-bottom:7px}
.ins ol{margin:2px 0 0 18px;padding:0}
.sec{display:flex;justify-content:space-between;align-items:baseline;font-weight:700;margin:8px 0 3px;font-size:10.8pt;break-after:avoid}
.sec .mk{white-space:nowrap;margin-left:10px}
.q{display:flex;gap:6px;margin:3px 0;page-break-inside:avoid}
.q .n{width:24px;flex:none;font-weight:700}
.q .b{flex:1}
.op{display:grid;grid-template-columns:repeat(4,auto);justify-content:start;gap:1px 24px;margin:1px 0 0}
.op.w{grid-template-columns:repeat(2,minmax(0,80mm))}
.wb{text-align:center;font-weight:700;margin:2px 0 4px}
.end{text-align:center;margin-top:8px;font-size:10pt;letter-spacing:1px}
h2{font-family:'DejaVu Sans',Arial,sans-serif;font-size:12.3pt;margin:13px 0 6px;border-bottom:1.5px solid #333;padding-bottom:3px;break-after:avoid}
table{border-collapse:collapse;width:100%;font-size:9.6pt;margin:4px 0}
th,td{border:1px solid #555;padding:4px 6px;text-align:center;vertical-align:middle}
th{background:#eee}
td.l,th.l{text-align:left}
table.dt td{text-align:left;vertical-align:top}
.ka{margin:5px 0 8px;page-break-inside:avoid}
.ka .qq{font-weight:700}
.ka ul{margin:2px 0 0 18px;padding:0}
.ka li{margin:1px 0}
.ka p{margin:3px 0}
.sch{font-size:9.4pt;margin:3px 0 0;padding:3px 8px;border-left:3px solid #999;background:#f6f6f6}
.sch b{font-family:'DejaVu Sans',Arial,sans-serif;font-size:8.6pt}
.pts{font-family:'DejaVu Sans',Arial,sans-serif;font-size:8.4pt;font-weight:700;background:#eee;border:1px solid #999;border-radius:3px;padding:0 4px;margin-left:3px;white-space:nowrap}
.note{font-size:9.5pt;color:#333}
.fig{text-align:center;margin:4px 0}
.fig img{max-width:120mm;max-height:70mm}
.fig div{font-size:8.8pt;color:#333}
`;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const CHAP = 'Ch 7: Human Health and Disease &nbsp;·&nbsp; Ch 8: Microbes in Human Welfare &nbsp;·&nbsp; Ch 9: Biotechnology: Principles and Processes';
const header = (sub) => `<div class="hd"><div class="t0">2026-27 · PRACTICE PAPER</div><div class="t1">CLASS TEST · II PUC BIOLOGY (36)</div><div class="t2">${sub}</div><div class="t3">${CHAP}</div></div>
<div class="meta"><span>Time: 60 minutes</span><span>Max. Marks: 20</span></div>`;
const doc = (body, extra = '') => `<!doctype html><html><head><meta charset="utf-8"><style>${css}${extra}</style></head><body>${body}</body></html>`;
/* the paper and blueprint are tightened a little so each stays on one page */
const TIGHT = '.end{margin-top:4px}body{font-size:10.3pt;line-height:1.21}.q{margin:2px 0}.sec{margin:6px 0 2px}.ins{margin-bottom:5px;padding:3px 9px}.who{margin:4px 0 5px}.hd{padding-bottom:4px;margin-bottom:5px}';
const TIGHT_BP = 'h2{margin:9px 0 4px}table{font-size:9.2pt}th,td{padding:3px 5px}.note{font-size:9.2pt}';
const qline = (q) => `<div class="q"><span class="n">${q.n}.</span><div class="b">${esc(q.q)}${q.o ? `<div class="op${q.wide ? ' w' : ''}">${q.o.map((o, i) => `<span>${'abcd'[i]}) ${esc(o)}</span>`).join('')}</div>` : ''}</div></div>`;
const sec = (t, mk) => `<div class="sec"><span>${t}</span><span class="mk">${mk}</span></div>`;
const by = (t) => ALL.filter(q => q.t === t);

const paper = doc(`${header('Question Paper')}
<div class="who"><span>Name:</span><span style="flex:.55">Reg. No.:</span><span style="flex:.45">Section:</span><span style="flex:.5">Date:</span></div>
<div class="ins"><b>Instructions:</b><ol>
<li>The question paper has five sections (I–V). Answer all questions in Sections I and II.</li>
<li>Follow the internal choice given in Sections III, IV and V.</li>
<li>Draw neat, labelled diagrams wherever necessary.</li></ol></div>
${sec('I. Select the correct alternative from the choices given below.', '5 × 1 = 5')}
${by('mcq').map(qline).join('\n')}
${sec('II. Fill in the blanks by choosing the appropriate word given below.', '2 × 1 = 2')}
<div class="wb">( ${WORDS.join(', &nbsp;')} )</div>
${by('fib').map(qline).join('\n')}
${sec('III. Answer any ONE of the following in 3–5 sentences.', '1 × 2 = 2')}
${by('B').map(qline).join('\n')}
${sec('IV. Answer any TWO of the following in 40–80 words.', '2 × 3 = 6')}
${by('C').map(qline).join('\n')}
${sec('V. Answer any ONE of the following in 200–250 words.', '1 × 5 = 5')}
${by('V').map(qline).join('\n')}
<div class="end">✦ ✦ ✦ &nbsp; ALL THE BEST &nbsp; ✦ ✦ ✦</div>`, TIGHT);

/* blueprint tables */
const cnt = (ch, t) => ALL.filter(q => q.ch === ch && q.t === t);
const cell = (ch, t, withQ) => { const a = cnt(ch, t); return `<td>${a.length || '–'}${withQ && a.length ? `<br><small>Q${a.map(q => q.n).join(', ')}</small>` : ''}</td>`; };
const TYPES = ['mcq', 'fib', 'B', 'C', 'V'];
const weight = (withQ) => `<table>
<tr><th class="l">Chapter</th><th>I · MCQ<br>1 mark</th><th>II · Fill in<br>1 mark</th><th>III<br>2 marks</th><th>IV<br>3 marks</th><th>V<br>5 marks</th><th>Questions</th><th>Marks set</th></tr>
${[7, 8, 9].map(ch => `<tr><td class="l"><b>Ch ${ch}</b> ${CHN[ch]}</td>${TYPES.map(t => cell(ch, t, withQ)).join('')}<td>${ALL.filter(q => q.ch === ch).length}</td><td><b>${setBy(ch)}</b></td></tr>`).join('\n')}
<tr><th class="l">Questions set</th>${TYPES.map(t => `<th>${by(t).length}</th>`).join('')}<th>${ALL.length}</th><th>${setBy(7) + setBy(8) + setBy(9)}</th></tr>
<tr><th class="l">To answer</th><th>all 5</th><th>all 2</th><th>any 1</th><th>any 2</th><th>any 1</th><th colspan="2">20 marks</th></tr>
</table>`;
const official = `<table>
<tr><th class="l">Chapter (2026-27 II PUC Blue Print, KSEAB)</th><th>Hours</th><th>Marks</th><th>1 mark</th><th>2 marks</th><th>3 marks</th><th>5 marks</th><th>Question types used in this test</th></tr>
<tr><td class="l">7. Human health and disease</td><td>13</td><td>11</td><td>3</td><td>–</td><td>1</td><td>1</td><td class="l">1, 3 and 5 marks</td></tr>
<tr><td class="l">8. Microbes in human welfare</td><td>8</td><td>7</td><td>2</td><td>1</td><td>1</td><td>–</td><td class="l">1, 2 and 3 marks</td></tr>
<tr><td class="l">9. Biotechnology: Principles and Processes</td><td>8</td><td>7</td><td>2</td><td>–</td><td>–</td><td>1</td><td class="l">1 and 5 marks</td></tr>
</table>`;
const NOTE = `This class test is the <b>DSE (PU) LBA 2026-27 Unit Test 1 Model Question Paper</b> layout scaled to <b>20 marks</b> (60 minutes: 5 MCQs, 2 fill-ups, any 1 of 2 two-markers, any 2 of 3 three-markers and any 1 of 2 five-markers), in the chapter pattern of the official <b>2026-27 II PUC Blue Print</b>: each chapter gives only the question types it has in the annual paper, so the <b>2-mark</b> questions are from Microbes in Human Welfare, the <b>3-mark</b> questions from Human Health and Disease and Microbes in Human Welfare, and the <b>5-mark</b> questions from Human Health and Disease and Biotechnology. The 7 one-mark questions split 3 : 2 : 2, exactly as in the blueprint, and the marks set (${setBy(7)} : ${setBy(8)} : ${setBy(9)}) are close to the blueprint weightage 11 : 7 : 7.`;

/* answer key */
const srcRows = []; const half = Math.ceil(ALL.length / 2);
for (let i = 0; i < half; i++) { const c = (q) => q ? `<td>${q.n}</td><td class="l">Ch ${q.ch} · ${q.ref}</td><td>${q.lv}</td>` : '<td></td><td></td><td></td>'; srcRows.push(`<tr>${c(ALL[i])}${c(ALL[i + half])}</tr>`); }
const one = [...by('mcq'), ...by('fib')];
const longKey = (t, mk) => by(t).map(q => `<div class="ka"><span class="qq">${q.n}. ${esc(q.q)}</span>${q.m}${q.fig ? `<div class="fig"><img src="${img(q.fig)}"><div>${q.figT}</div></div>` : ''}
<div class="sch"><b>SCHEME OF VALUATION (${mk} marks):</b> ${q.p.map(p => `${esc(p[0])} <span class="pts">${p[1]}</span>`).join(' · ')}</div></div>`).join('\n');
const key = doc(`${header('Answer Key &amp; Scheme of Valuation')}
<h2>Blueprint</h2>
<p class="note">${NOTE}</p>
${weight(true)}
${official}
<h2>Source of each question in the Question Bank</h2>
<table><tr><th>Q</th><th>Question bank reference</th><th>Level</th><th>Q</th><th>Question bank reference</th><th>Level</th></tr>${srcRows.join('\n')}</table>
<p class="note">All ${ALL.length} questions are from the <b>II PUC Biology Question Bank</b> (Department of School Education, PU, and KSEAB); references are chapter · part · question number. "${WORDS[3]}" in the word box is the extra word and is not an answer. Answers follow the current NCERT Class XII Biology text.</p>
<div style="break-inside:avoid"><h2>Sections I &amp; II: Answer key (1 mark each)</h2>
<table><tr>${one.slice(0, 5).map(q => `<th>Q${q.n}</th>`).join('')}</tr><tr>${one.slice(0, 5).map(q => `<td>${q.o ? `${'abcd'[q.a]}) ${esc(q.o[q.a])}` : esc(q.a)}</td>`).join('')}</tr>
<tr>${one.slice(5).map(q => `<th>Q${q.n}</th>`).join('')}</tr><tr>${one.slice(5).map(q => `<td>${q.o ? `${'abcd'[q.a]}) ${esc(q.o[q.a])}` : esc(q.a)}</td>`).join('')}</tr></table>
<p class="note">${one.map(q => `Q${q.n}: ${esc(q.e)}`).join(' ')}</p></div>
<h2>Section III: 2 marks (any one)</h2>${longKey('B', 2)}
<h2>Section IV: 3 marks each (any two)</h2>${longKey('C', 3)}
<h2>Section V: 5 marks (any one)</h2>${longKey('V', 5)}`);

const bp = doc(`${header('Blueprint')}
<p class="note">${NOTE} All questions are taken from the II PUC Biology Question Bank.</p>
<h2>Chapter pattern in the official 2026-27 II PUC Blue Print</h2>
${official}
<h2>Chapter-wise weightage of this test (number of questions)</h2>
${weight(false)}
<h2>Question paper design</h2>
<table>
<tr><th>Section</th><th class="l">Type of question</th><th>Chapters</th><th>Marks each</th><th>Questions set</th><th>To answer</th><th>Marks</th></tr>
<tr><td>I</td><td class="l">Multiple choice questions</td><td>7, 8, 9</td><td>1</td><td>5</td><td>all</td><td>5</td></tr>
<tr><td>II</td><td class="l">Fill in the blanks (choose from the words given)</td><td>7, 9</td><td>1</td><td>2</td><td>all</td><td>2</td></tr>
<tr><td>III</td><td class="l">Short answer (3–5 sentences)</td><td>8</td><td>2</td><td>2</td><td>any 1</td><td>2</td></tr>
<tr><td>IV</td><td class="l">Short answer (40–80 words)</td><td>7, 8</td><td>3</td><td>3</td><td>any 2</td><td>6</td></tr>
<tr><td>V</td><td class="l">Long answer (200–250 words)</td><td>7, 9</td><td>5</td><td>2</td><td>any 1</td><td>5</td></tr>
<tr><th></th><th class="l">Total</th><th></th><th></th><th>14</th><th></th><th>20</th></tr>
</table>
<p class="note" style="margin-top:10px"><b>How to prepare:</b> <b>Human Health and Disease</b> – diseases and their pathogens, life cycle of Plasmodium, immunity (active and passive), AIDS, cancer, and drugs with their plant sources. <b>Microbes in Human Welfare</b> – microbes in household and industrial products, enzymes and bioactive molecules, sewage treatment (flocs, BOD), bioactive molecules and BOD. <b>Biotechnology: Principles and Processes</b> – restriction enzymes, vectors (plasmid, Ti plasmid, retroviruses), PCR, gel electrophoresis and methods of introducing DNA into host cells.</p>`, TIGHT_BP);

(async () => {
  const {chromium} = require('playwright');
  const b = await chromium.launch();
  for (const [name, html, m] of [[BASE, paper, '9mm'], [BASE + '-answer-key', key, '11mm'], [BASE + '-blueprint', bp, '12mm']]) {
    const p = await b.newPage();
    await p.setContent(html, {waitUntil: 'load'});
    await p.pdf({path: path.join(OUT, name + '.pdf'), format: 'A4', printBackground: true, margin: {top: m, bottom: '10mm', left: '15mm', right: '15mm'}});
    await p.close();
    console.log('wrote', name + '.pdf');
  }
  await b.close();
  console.log('marks set by chapter: Ch7', setBy(7), '· Ch8', setBy(8), '· Ch9', setBy(9));
})();
