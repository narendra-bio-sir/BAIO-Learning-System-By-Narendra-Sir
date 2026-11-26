// Monthly test (20 marks, 45 min): I PUC Biology, Ch 9 Biomolecules + Ch 14 Breathing and Exchange of Gases.
// Same format as the Cell + Cell Cycle slip test. Builds 3 PDFs into exam-corner/pu-board-2026-27/:
//   …-20m.pdf (question paper), …-20m-answer-key.pdf (teacher's copy), …-20m-blueprint.pdf
// Run: NODE_PATH=<global node_modules with playwright> node scripts/class-tests/monthly-biomolecules-breathing.js
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const ROOT = path.join(__dirname, '..', '..');
const OUT = path.join(ROOT, 'exam-corner', 'pu-board-2026-27');
const BASE = 'biology-i-puc-monthly-test-biomolecules-and-breathing-20m';
const RESP = 'data:image/jpeg;base64,' + fs.readFileSync(path.join(ROOT, 'pu1-unittest-prep-assets', 'fig-14-1.jpg')).toString('base64');

const css = `
@page{size:A4}
*{box-sizing:border-box}
body{font-family:'Noto Serif','DejaVu Serif',Georgia,serif;font-size:11pt;line-height:1.31;color:#111;margin:0}
.hd{text-align:center;border-bottom:2px solid #111;padding-bottom:6px;margin-bottom:8px}
.hd .t1{font-family:'DejaVu Sans',Arial,sans-serif;font-weight:700;font-size:15pt;letter-spacing:.5px}
.hd .t2{font-weight:700;font-size:12pt;margin-top:2px}
.hd .t3{font-size:10.2pt;margin-top:3px}
.meta{display:flex;justify-content:space-between;font-weight:700;font-size:11pt;margin:6px 0 4px}
.who{display:flex;gap:18px;font-size:10.5pt;margin:6px 0 10px}
.who span{flex:1;border-bottom:1px dotted #555;padding-bottom:2px}
.ins{font-size:10pt;border:1px solid #999;border-radius:4px;padding:5px 9px;margin-bottom:10px}
.ins ol{margin:2px 0 0 18px;padding:0}
.sec{display:flex;justify-content:space-between;align-items:baseline;font-weight:700;margin:10px 0 4px;font-size:11pt}
.sec .mk{white-space:nowrap;margin-left:10px}
.q{display:flex;gap:6px;margin:4px 0 4px 0;page-break-inside:avoid}
.q .n{width:24px;flex:none;font-weight:700}
.q .b{flex:1}
.op{display:grid;grid-template-columns:repeat(4,auto);justify-content:start;gap:1px 26px;margin:1px 0 0}
.op.w{grid-template-columns:repeat(2,minmax(0,62mm))}
.wb{text-align:center;font-weight:700;margin:2px 0 5px}
.end{text-align:center;margin-top:8px;font-size:10pt;letter-spacing:1px}
h2{font-family:'DejaVu Sans',Arial,sans-serif;font-size:12.5pt;margin:14px 0 6px;border-bottom:1.5px solid #333;padding-bottom:3px}
table{border-collapse:collapse;width:100%;font-size:9.8pt;margin:4px 0}
th,td{border:1px solid #555;padding:4px 6px;text-align:center;vertical-align:middle}
th{background:#eee}
td.l{text-align:left}
.ka{margin:5px 0 7px;page-break-inside:avoid}
.ka .qq{font-weight:700}
.ka ul{margin:2px 0 0 18px;padding:0}
.ka li{margin:1px 0}
.pts{font-family:'DejaVu Sans',Arial,sans-serif;font-size:8.6pt;font-weight:700;background:#eee;border:1px solid #999;border-radius:3px;padding:0 4px;margin-left:4px;white-space:nowrap}
.fig{text-align:center;margin:4px 0}
.fig div{font-size:8.8pt;color:#333}
.note{font-size:9.6pt;color:#333}
`;

const CHAPTERS = 'Chapter 9: Biomolecules &nbsp;·&nbsp; Chapter 14: Breathing and Exchange of Gases';
const header = (sub) => `
<div class="hd">
  <div class="t1">MONTHLY TEST · I PUC BIOLOGY (36)</div>
  <div class="t2">${sub}</div>
  <div class="t3">${CHAPTERS}</div>
</div>
<div class="meta"><span>Time: 45 minutes</span><span>Max. Marks: 20</span></div>`;
const doc = (body) => `<!doctype html><html><head><meta charset="utf-8"><style>${css}</style></head><body>${body}</body></html>`;

/* ---------------- question paper ---------------- */
const paper = doc(`
${header('Question Paper')}
<div class="who"><span>Name:</span><span style="flex:.55">Roll No.:</span><span style="flex:.45">Section:</span><span style="flex:.5">Date:</span></div>
<div class="ins"><b>Instructions:</b><ol>
<li>The question paper has five parts (I–V). Answer all questions in Parts I and II.</li>
<li>Follow the choice given in Parts III, IV and V.</li>
<li>Draw diagrams wherever necessary. Unlabelled diagrams do not attract any marks.</li></ol></div>

<div class="sec"><span>I. Select the correct alternative from the choices given below.</span><span class="mk">5 × 1 = 5</span></div>
<div class="q"><span class="n">1.</span><div class="b">The most abundant protein in the whole biosphere is
<div class="op"><span>a) Collagen</span><span>b) Chitin</span><span>c) RuBisCO</span><span>d) Insulin</span></div></div></div>
<div class="q"><span class="n">2.</span><div class="b">Which of the following is a neutral amino acid?
<div class="op"><span>a) Glutamic acid</span><span>b) Lysine</span><span>c) Aspartic acid</span><span>d) Valine</span></div></div></div>
<div class="q"><span class="n">3.</span><div class="b">When the enzyme succinic dehydrogenase is added to a mixture of the substrates malonate and succinate, the rate of enzyme activity declines because of
<div class="op w"><span>a) Increase in pH</span><span>b) Decrease in pH</span><span>c) Decrease in concentration of substrate</span><span>d) Competitive inhibition</span></div></div></div>
<div class="q"><span class="n">4.</span><div class="b">In human beings, O<sub>2</sub> and CO<sub>2</sub> are exchanged between the alveoli and the blood mainly by
<div class="op"><span>a) Active transport</span><span>b) Simple diffusion</span><span>c) Osmosis</span><span>d) Phagocytosis</span></div></div></div>
<div class="q"><span class="n">5.</span><div class="b">About 97 per cent of the oxygen in blood is transported by
<div class="op"><span>a) Plasma</span><span>b) RBCs</span><span>c) WBCs</span><span>d) Platelets</span></div></div></div>

<div class="sec"><span>II. Fill in the blanks by choosing the appropriate word given below.</span><span class="mk">3 × 1 = 3</span></div>
<div class="wb">( Pleura, &nbsp;Haemoglobin, &nbsp;Ribozyme, &nbsp;Tidal volume )</div>
<div class="q"><span class="n">6.</span><div class="b">A non-proteinaceous enzyme is ____________.</div></div>
<div class="q"><span class="n">7.</span><div class="b">The lungs are covered by a double-layered ____________, with a fluid between the two layers.</div></div>
<div class="q"><span class="n">8.</span><div class="b">The volume of air inspired or expired during a normal respiration is called ____________.</div></div>

<div class="sec"><span>III. Answer any TWO of the following in 3–5 sentences.</span><span class="mk">2 × 2 = 4</span></div>
<div class="q"><span class="n">9.</span><div class="b">Proteins are regarded as heteropolymers. Substantiate.</div></div>
<div class="q"><span class="n">10.</span><div class="b">How does temperature affect the enzyme activity?</div></div>
<div class="q"><span class="n">11.</span><div class="b">Define vital capacity. What is its significance?</div></div>

<div class="sec"><span>IV. Answer any ONE of the following in 40–80 words.</span><span class="mk">1 × 3 = 3</span></div>
<div class="q"><span class="n">12.</span><div class="b">Mention the three types of co-factors associated with enzymes, with an example each.</div></div>
<div class="q"><span class="n">13.</span><div class="b">Explain how respiration is regulated in human beings.</div></div>

<div class="sec"><span>V. Answer any ONE of the following in 200–250 words.</span><span class="mk">1 × 5 = 5</span></div>
<div class="q"><span class="n">14.</span><div class="b">Classify the various classes of enzymes based on the type of reaction they catalyse.</div></div>
<div class="q"><span class="n">15.</span><div class="b">Draw a neat labelled diagram of the human respiratory system.</div></div>

<div class="end">✦ ✦ ✦ &nbsp; ALL THE BEST &nbsp; ✦ ✦ ✦</div>`);

/* ---------------- blueprint tables (shared) ---------------- */
const weightNote = `In the I PUC annual blueprint, Chapter 9 Biomolecules carries <b>6 marks</b> (one 1-mark and one 5-mark question) and Chapter 14 Breathing and Exchange of Gases carries <b>5 marks</b> (one 2-mark and one 3-mark question), a ratio of 6 : 5. This 20-mark paper keeps that ratio (16 : 14 of the 30 marks set) and the annual question pattern, with at least one question of every type from each chapter and internal choice in Parts III–V.`;
const weightTable = (withQ) => `<table>
<tr><th rowspan="${withQ ? 2 : 1}">Chapter</th><th>I · MCQ<br>1 mark</th><th>II · Fill in${withQ ? '' : ' the blanks'}<br>1 mark</th><th>III · Short${withQ ? '' : ' answer'}<br>2 marks</th><th>IV · Short${withQ ? '' : ' answer'}<br>3 marks</th><th>V · Long${withQ ? '' : ' answer'}<br>5 marks</th>${withQ ? '<th rowspan="2">Marks<br>set</th>' : '<th>Total questions</th><th>Marks set</th>'}</tr>
${withQ ? '<tr><th>Q1–5</th><th>Q6–8</th><th>Q9–11</th><th>Q12–13</th><th>Q14–15</th></tr>' : ''}
<tr><td class="l"><b>Ch 9</b> Biomolecules</td><td>3${withQ ? '<br><small>Q1, 2, 3</small>' : ''}</td><td>1${withQ ? '<br><small>Q6</small>' : ''}</td><td>2${withQ ? '<br><small>Q9, 10</small>' : ''}</td><td>1${withQ ? '<br><small>Q12</small>' : ''}</td><td>1${withQ ? '<br><small>Q14</small>' : ''}</td>${withQ ? '' : '<td>8</td>'}<td>16</td></tr>
<tr><td class="l"><b>Ch 14</b> Breathing and Exchange of Gases</td><td>2${withQ ? '<br><small>Q4, 5</small>' : ''}</td><td>2${withQ ? '<br><small>Q7, 8</small>' : ''}</td><td>1${withQ ? '<br><small>Q11</small>' : ''}</td><td>1${withQ ? '<br><small>Q13</small>' : ''}</td><td>1${withQ ? '<br><small>Q15</small>' : ''}</td>${withQ ? '' : '<td>7</td>'}<td>14</td></tr>
${withQ ? `<tr><th class="l">Questions set</th><th>5 × 1 = 5</th><th>3 × 1 = 3</th><th>3 × 2 = 6</th><th>2 × 3 = 6</th><th>2 × 5 = 10</th><th>30</th></tr>
<tr><th class="l">To answer</th><th>all 5</th><th>all 3</th><th>any 2 of 3</th><th>any 1 of 2</th><th>any 1 of 2</th><th>20</th></tr>`
  : '<tr><th class="l">Total questions</th><th>5</th><th>3</th><th>3</th><th>2</th><th>2</th><th>15</th><th>30</th></tr>'}
</table>`;

/* ---------------- teacher's copy ---------------- */
const pts = (n) => `<span class="pts">${n}</span>`;
const QB = (r) => `QB Ch 9 · ${r}`, NC = (s) => `NCERT ${s}`;
const src = [
  [1, QB('Part A I · Q14'), 'Easy', 110], [9, QB('Part B III · Q3'), 'Average', 109],
  [2, QB('Part A I · Q6'), 'Easy', 106], [10, QB('Part B III · Q12'), 'Average', 116],
  [3, QB('Part A I · Q24'), 'Average', 117], [11, NC('Ch 14 · Exercise Q1'), 'Easy', 187],
  [4, NC('14.3'), 'Easy', 187], [12, QB('Part C IV · Q4'), 'Easy', 118],
  [5, NC('14.4'), 'Easy', 189], [13, NC('14.5'), 'Average', 190],
  [6, QB('Part A II · Q4'), 'Difficult', 119], [14, QB('Part D V · Q1'), 'Easy', 117],
  [7, NC('14.1.1'), 'Easy', 184], [15, NC('Fig. 14.1'), 'Average', 184],
  [8, NC('14.2.1'), 'Easy', 186]];
const srcRows = []; for(let i = 0; i < src.length; i += 2){ const a = src[i], b = src[i + 1] || ['', '', '', ''];
  srcRows.push(`<tr><td>${a[0]}</td><td class="l">${a[1]}</td><td>${a[2]}</td><td>${a[3]}</td><td>${b[0]}</td><td class="l">${b[1]}</td><td>${b[2]}</td><td>${b[3]}</td></tr>`); }

const key = doc(`
${header("Teacher's Copy: Blueprint, Answer Key &amp; Scheme of Valuation")}

<h2>Blueprint (as per the I PUC annual blueprint weightage)</h2>
<p class="note">${weightNote}</p>
${weightTable(true)}

<h2>Source of each question</h2>
<table>
<tr><th>Paper Q</th><th>Source</th><th>Level</th><th>NCERT page</th><th>Paper Q</th><th>Source</th><th>Level</th><th>NCERT page</th></tr>
${srcRows.join('\n')}
</table>
<p class="note"><b>QB</b>: all Chapter 9 questions are from the official <b>I PUC Biology Question Bank 2026-27</b> (Department of School Education, Karnataka). <b>NCERT</b>: Chapter 14 questions are framed from the current NCERT Class XI text in the question-bank style; Q11 is NCERT exercise question 1. Page numbers are from the current NCERT Class XI Biology book. The fill-in word box mixes words from both chapters; "Haemoglobin" is the extra word and is not an answer.</p>

<div style="break-inside:avoid"><h2>Part I &amp; II: Answer key</h2>
<table>
<tr><th>Q1</th><th>Q2</th><th>Q3</th><th>Q4</th><th>Q5</th><th>Q6</th><th>Q7</th><th>Q8</th></tr>
<tr><td>c) RuBisCO</td><td>d) Valine</td><td>d) Competitive inhibition</td><td>b) Simple diffusion</td><td>b) RBCs</td><td>Ribozyme</td><td>Pleura</td><td>Tidal volume</td></tr>
</table>
<p class="note">1 mark each. Q3: malonate closely resembles the substrate succinate in structure and competes with it for the substrate-binding site.</p></div>

<h2>Part III: 2 marks each (any two)</h2>
<div class="ka"><span class="qq">9. Proteins are heteropolymers</span>
<ul><li>Each protein is a polymer of amino acids, and there are <b>20 types of amino acids</b> (e.g. alanine, cysteine, proline, tryptophan, lysine), so a protein is made of different kinds of monomers: a heteropolymer. ${pts('1')}</li>
<li>A <b>homopolymer</b> has only one type of monomer repeating ‘n’ number of times (e.g. cellulose, made only of glucose); proteins are therefore heteropolymers and not homopolymers. ${pts('1')}</li></ul></div>
<div class="ka"><span class="qq">10. Effect of temperature on enzyme activity</span>
<ul><li>Enzymes function in a narrow range of temperature; each enzyme shows its highest activity at a particular temperature called the <b>optimum temperature</b>, and activity declines both below and above it. ${pts('1')}</li>
<li><b>Low temperature</b> preserves the enzyme in a temporarily inactive state, whereas <b>high temperature</b> destroys enzymatic activity because proteins are denatured by heat. ${pts('1')}</li></ul></div>
<div class="ka"><span class="qq">11. Vital capacity</span>
<ul><li><b>Definition:</b> the maximum volume of air a person can breathe in after a forced expiration, or breathe out after a forced inspiration. It includes ERV, TV and IRV (VC = ERV + TV + IRV). ${pts('1')}</li>
<li><b>Significance:</b> it shows the maximum amount of air that can be exchanged in one breath, so a higher vital capacity means more fresh air enters the lungs with each breath; pulmonary capacities like this are used in clinical diagnosis of lung function (and are higher in athletes and wind-instrument players). ${pts('1')}</li></ul></div>

<h2>Part IV: 3 marks (any one)</h2>
<div class="ka"><span class="qq">12. Three types of co-factors</span> (1 mark each: name with its feature or example)
<ul><li><b>Prosthetic groups:</b> organic compounds tightly bound to the apoenzyme, e.g. <b>haem</b> in peroxidase and catalase.</li>
<li><b>Co-enzymes:</b> organic compounds whose association with the apoenzyme is only transient, during catalysis; many contain vitamins, e.g. <b>NAD and NADP</b> contain the vitamin niacin.</li>
<li><b>Metal ions:</b> form coordination bonds with side chains at the active site and with the substrate, e.g. <b>zinc</b> for the proteolytic enzyme carboxypeptidase.</li></ul>
<p class="note">Award ½ mark for each correct name without its feature or example.</p></div>
<div class="ka"><span class="qq">13. Regulation of respiration</span>
<ul><li>The <b>respiratory rhythm centre</b> in the <b>medulla</b> region of the brain is primarily responsible for the regulation of respiration. ${pts('1')}</li>
<li>The <b>pneumotaxic centre</b> in the <b>pons</b> moderates the rhythm centre: its neural signal can reduce the duration of inspiration and thereby alter the respiratory rate. ${pts('1')}</li>
<li>A <b>chemosensitive area</b> next to the rhythm centre is highly sensitive to CO<sub>2</sub> and H<sup>+</sup>; an increase activates it and it signals the rhythm centre to adjust breathing. Receptors in the <b>aortic arch and carotid artery</b> also sense CO<sub>2</sub> and H<sup>+</sup>. The role of oxygen in regulating the rhythm is quite insignificant. ${pts('1')}</li></ul></div>

<h2 style="break-before:page">Part V: 5 marks (any one)</h2>
<div class="ka"><span class="qq">14. Classes of enzymes</span> (enzymes are divided into 6 classes based on the type of reaction they catalyse)
<ul><li><b>Oxidoreductases / dehydrogenases:</b> catalyse oxidoreduction between two substrates S and S′: S<sub>reduced</sub> + S′<sub>oxidised</sub> → S<sub>oxidised</sub> + S′<sub>reduced</sub>.</li>
<li><b>Transferases:</b> catalyse the transfer of a group G (other than hydrogen) between a pair of substrates: S–G + S′ → S + S′–G.</li>
<li><b>Hydrolases:</b> catalyse hydrolysis of ester, ether, peptide, glycosidic, C–C, C–halide or P–N bonds.</li>
<li><b>Lyases:</b> catalyse removal of groups from substrates by mechanisms other than hydrolysis, leaving double bonds.</li>
<li><b>Isomerases:</b> catalyse inter-conversion of optical, geometric or positional isomers.</li>
<li><b>Ligases:</b> catalyse the linking together of 2 compounds, e.g. joining of C–O, C–S, C–N, P–O bonds.</li></ul>
<p class="note">Any five classes with the correct type of reaction: 1 mark each (name ½ + reaction ½). Each class has 4–13 subclasses and is named by a four-digit number (not needed for full marks).</p></div>
<div class="ka"><span class="qq">15. Human respiratory system (diagram)</span>
<div class="fig"><img src="${RESP}" style="width:108mm"><div><b>NCERT Figure 14.1: Diagrammatic view of human respiratory system</b> (sectional view of the left lung). Labels that may be credited: epiglottis, larynx, trachea, bronchus, bronchiole, alveoli, lung, pleural membranes, pleural fluid, diaphragm, heart, cut end of rib.</div></div>
<ul><li><b>Diagram</b>: neat, proportionate drawing of the trachea dividing into two bronchi, the two lungs in the thoracic cavity with the bronchial tree and alveoli in one lung, and the dome-shaped diaphragm below. ${pts('2')}</li>
<li><b>Labels</b>: any six correct labels, ½ mark each. ${pts('3')}</li></ul>
<p class="note">Labels must be pointed with clear lines. Accept the diagram drawn as in NCERT Figure 14.1; do not award diagram marks for a drawing without the diaphragm or the bronchial branching.</p></div>
<p class="note" style="margin-top:10px">Answers are from the current NCERT Class XI Biology text (Chapters 9 and 14).</p>`);

/* ---------------- blueprint sheet ---------------- */
const bp = doc(`
${header('Blueprint')}
<p class="note">Prepared as per the I PUC annual blueprint weightage: Chapter 9 carries 6 marks and Chapter 14 carries 5 marks in the annual exam (6 : 5), so this 20-mark test keeps the same ratio. Chapter 9 questions are taken from the official <b>I PUC Biology Question Bank 2026-27</b> (Department of School Education, Karnataka); Chapter 14 questions follow the NCERT text in the same style.</p>
<h2>Chapter-wise weightage (number of questions)</h2>
${weightTable(false)}
<h2>Question paper design</h2>
<table>
<tr><th>Part</th><th>Type of question</th><th>Marks each</th><th>Questions set</th><th>To answer</th><th>Marks</th></tr>
<tr><td>I</td><td class="l">Multiple choice questions</td><td>1</td><td>5</td><td>all 5</td><td>5</td></tr>
<tr><td>II</td><td class="l">Fill in the blanks (choose from the words given)</td><td>1</td><td>3</td><td>all 3</td><td>3</td></tr>
<tr><td>III</td><td class="l">Short answer (3–5 sentences)</td><td>2</td><td>3</td><td>any 2</td><td>4</td></tr>
<tr><td>IV</td><td class="l">Short answer (40–80 words)</td><td>3</td><td>2</td><td>any 1</td><td>3</td></tr>
<tr><td>V</td><td class="l">Long answer (200–250 words), includes a diagram question</td><td>5</td><td>2</td><td>any 1</td><td>5</td></tr>
<tr><th></th><th class="l">Total</th><th></th><th>15</th><th></th><th>20</th></tr>
</table>
<h2>Chapter weightage compared with the annual blueprint</h2>
<table>
<tr><th>Chapter</th><th>Annual blueprint marks</th><th>Marks set in this test</th><th>Share</th></tr>
<tr><td class="l">Ch 9 Biomolecules</td><td>6</td><td>16</td><td>a little over half</td></tr>
<tr><td class="l">Ch 14 Breathing and Exchange of Gases</td><td>5</td><td>14</td><td>a little under half</td></tr>
</table>
<p class="note" style="margin-top:10px"><b>How to prepare:</b> revise both chapters from the NCERT text and the question bank: enzymes (classes, co-factors, factors affecting activity, inhibition), proteins and amino acids; respiratory volumes and capacities, exchange and transport of gases and regulation of respiration. Practise the labelled diagram of the human respiratory system.</p>`);

(async () => {
  const b = await chromium.launch();
  for (const [name, html, m] of [[BASE, paper, '11mm'], [BASE + '-answer-key', key, '11mm'], [BASE + '-blueprint', bp, '12mm']]) {
    const p = await b.newPage();
    await p.setContent(html, { waitUntil: 'load' });
    await p.pdf({ path: path.join(OUT, name + '.pdf'), format: 'A4', printBackground: true, margin: { top: m, bottom: '10mm', left: '15mm', right: '15mm' } });
    await p.close();
    console.log('wrote', name + '.pdf');
  }
  await b.close();
})();
