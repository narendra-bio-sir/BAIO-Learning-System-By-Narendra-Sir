// Mock test (30 marks, 1 hr 15 min): I PUC Biology, Ch 9 Biomolecules + Ch 14 Breathing and Exchange of Gases.
// All 15 questions of the 20-mark monthly test, shuffled within each part, plus 5 more question-bank questions
// (Q2, Q8, Q13, Q16, Q17) to fill the 30-mark pattern. Every question is from the I PUC Biology Question Bank 2026-27.
// Builds 3 PDFs into exam-corner/pu-board-2026-27/:
//   …-30m.pdf (question paper), …-30m-answer-key.pdf, …-30m-blueprint.pdf
// Run: NODE_PATH=<global node_modules with playwright> node scripts/class-tests/mock-biomolecules-breathing.js
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const ROOT = path.join(__dirname, '..', '..');
const OUT = path.join(ROOT, 'exam-corner', 'pu-board-2026-27');
const BASE = 'biology-i-puc-mock-test-biomolecules-and-breathing-30m';
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
.sec{display:flex;justify-content:space-between;align-items:baseline;font-weight:700;margin:10px 0 4px;font-size:11pt;break-after:avoid}
.sec .mk{white-space:nowrap;margin-left:10px}
.q{display:flex;gap:6px;margin:4px 0 4px 0;page-break-inside:avoid}
.q .n{width:24px;flex:none;font-weight:700}
.q .b{flex:1}
.op{display:grid;grid-template-columns:repeat(4,auto);justify-content:start;gap:1px 26px;margin:1px 0 0}
.op.w{grid-template-columns:repeat(2,minmax(0,62mm))}
.wb{text-align:center;font-weight:700;margin:2px 0 5px}
.end{text-align:center;margin-top:8px;font-size:10pt;letter-spacing:1px}
h2{font-family:'DejaVu Sans',Arial,sans-serif;font-size:12.5pt;margin:14px 0 6px;border-bottom:1.5px solid #333;padding-bottom:3px;break-after:avoid}
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
  <div class="t1">MOCK TEST · I PUC BIOLOGY (36)</div>
  <div class="t2">${sub}</div>
  <div class="t3">${CHAPTERS}</div>
</div>
<div class="meta"><span>Time: 1 hour 15 minutes</span><span>Max. Marks: 30</span></div>`;
const doc = (body, extra = '') => `<!doctype html><html><head><meta charset="utf-8"><style>${css}${extra}</style></head><body>${body}</body></html>`;
/* the 20-question paper is tightened a little so it stays on one page */
const TIGHT = 'body{font-size:10.6pt;line-height:1.27}.q{margin:3px 0}.sec{margin:8px 0 3px}.ins{margin-bottom:7px}.who{margin:4px 0 7px}';

/* ---------------- question paper ---------------- */
/* ---------------- question paper ---------------- */
const paper = doc(`
${header('Question Paper')}
<div class="who"><span>Name:</span><span style="flex:.55">Roll No.:</span><span style="flex:.45">Section:</span><span style="flex:.5">Date:</span></div>
<div class="ins"><b>Instructions:</b><ol>
<li>The question paper has five parts (I–V). Answer all questions in Parts I and II.</li>
<li>Follow the choice given in Parts III, IV and V.</li>
<li>Draw diagrams wherever necessary. Unlabelled diagrams do not attract any marks.</li></ol></div>

<div class="sec"><span>I. Select the correct alternative from the choices given below.</span><span class="mk">6 × 1 = 6</span></div>
<div class="q"><span class="n">1.</span><div class="b">What is the percentage of O<sub>2</sub> transported by RBCs in the blood?
<div class="op"><span>a) 90%</span><span>b) 98%</span><span>c) 100%</span><span>d) 97%</span></div></div></div>
<div class="q"><span class="n">2.</span><div class="b">Which of the following is a neutral amino acid?
<div class="op"><span>a) Glutamic acid</span><span>b) Lysine</span><span>c) Aspartic acid</span><span>d) Valine</span></div></div></div>
<div class="q"><span class="n">3.</span><div class="b">Emphysema is a chronic respiratory disorder, in which the organ affected is
<div class="op"><span>a) Alveolar walls</span><span>b) Bronchi</span><span>c) Bronchioles</span><span>d) Pleural membrane</span></div></div></div>
<div class="q"><span class="n">4.</span><div class="b">When the enzyme succinic dehydrogenase is added to a mixture of the substrates malonate and succinate, the rate of enzyme activity declines because of
<div class="op w"><span>a) Increase in pH</span><span>b) Decrease in pH</span><span>c) Decrease in concentration of substrate</span><span>d) Competitive inhibition</span></div></div></div>
<div class="q"><span class="n">5.</span><div class="b">The most abundant protein in the whole biosphere is
<div class="op"><span>a) Collagen</span><span>b) Chitin</span><span>c) RuBisCO</span><span>d) Insulin</span></div></div></div>
<div class="q"><span class="n">6.</span><div class="b">Fatty acid and glycerol react to form lipids. The chemical reaction involved is called
<div class="op"><span>a) Neutralization</span><span>b) Reduction</span><span>c) Oxidation</span><span>d) Esterification</span></div></div></div>

<div class="sec"><span>II. Fill in the blanks by choosing the appropriate word given below.</span><span class="mk">4 × 1 = 4</span></div>
<div class="wb">( Alveoli, &nbsp;Carbamino-haemoglobin, &nbsp;Cellulose, &nbsp;Larynx, &nbsp;Tidal volume )</div>
<div class="q"><span class="n">7.</span><div class="b">The volume of air inspired or expired during a normal respiration is ____________.</div></div>
<div class="q"><span class="n">8.</span><div class="b">CO<sub>2</sub> is carried by haemoglobin as ____________.</div></div>
<div class="q"><span class="n">9.</span><div class="b">Chemically, the cotton fibre is composed of ____________.</div></div>
<div class="q"><span class="n">10.</span><div class="b">____________ are the primary sites of exchange of gases.</div></div>

<div class="sec"><span>III. Answer any THREE of the following in 3–5 sentences.</span><span class="mk">3 × 2 = 6</span></div>
<div class="q"><span class="n">11.</span><div class="b">Differentiate between vital capacity and total lung capacity.</div></div>
<div class="q"><span class="n">12.</span><div class="b">Mention the four structures formed by folding of protein chain to become functional.</div></div>
<div class="q"><span class="n">13.</span><div class="b">What is activation energy? How does it vary with or without enzyme?</div></div>
<div class="q"><span class="n">14.</span><div class="b">Give an example of a) Homopolysaccharides &nbsp;b) Heteropolysaccharides.</div></div>

<div class="sec"><span>IV. Answer any THREE of the following in 40–80 words.</span><span class="mk">3 × 3 = 9</span></div>
<div class="q"><span class="n">15.</span><div class="b">Explain the mechanism of breathing.</div></div>
<div class="q"><span class="n">16.</span><div class="b">Mention the three types of co-factors associated with enzymes.</div></div>
<div class="q"><span class="n">17.</span><div class="b">Describe the role of haemoglobin in oxygen transport.</div></div>
<div class="q"><span class="n">18.</span><div class="b">What are nucleotides? Mention the 5 types of nucleotides that make nucleic acids.</div></div>

<div class="sec"><span>V. Answer any ONE of the following in 200–250 words.</span><span class="mk">1 × 5 = 5</span></div>
<div class="q"><span class="n">19.</span><div class="b">Draw a neat labelled diagrammatic view of the human respiratory system.</div></div>
<div class="q"><span class="n">20.</span><div class="b">Classify the various classes of enzymes based on the type of reaction they catalyse.</div></div>

<div class="end">✦ ✦ ✦ &nbsp; ALL THE BEST &nbsp; ✦ ✦ ✦</div>`, TIGHT);

/* ---------------- blueprint tables (shared) ---------------- */
const weightNote = `In the I PUC annual blueprint, Chapter 9 Biomolecules carries <b>6 marks</b> and Chapter 14 Breathing and Exchange of Gases carries <b>5 marks</b>, a ratio of 6 : 5. This 30-mark paper keeps that ratio (22 : 18 of the 40 marks set), follows the annual question pattern, has at least one question of every type from each chapter, and gives internal choice in Parts III–V.`;
const weightTable = (withQ) => `<table>
<tr><th rowspan="${withQ ? 2 : 1}">Chapter</th><th>I · MCQ<br>1 mark</th><th>II · Fill in${withQ ? '' : ' the blanks'}<br>1 mark</th><th>III · Short${withQ ? '' : ' answer'}<br>2 marks</th><th>IV · Short${withQ ? '' : ' answer'}<br>3 marks</th><th>V · Long${withQ ? '' : ' answer'}<br>5 marks</th>${withQ ? '<th rowspan="2">Marks<br>set</th>' : '<th>Total questions</th><th>Marks set</th>'}</tr>
${withQ ? '<tr><th>Q1–6</th><th>Q7–10</th><th>Q11–14</th><th>Q15–18</th><th>Q19–20</th></tr>' : ''}
<tr><td class="l"><b>Ch 9</b> Biomolecules</td><td>4${withQ ? '<br><small>Q2, 4, 5, 6</small>' : ''}</td><td>1${withQ ? '<br><small>Q9</small>' : ''}</td><td>3${withQ ? '<br><small>Q12, 13, 14</small>' : ''}</td><td>2${withQ ? '<br><small>Q16, 18</small>' : ''}</td><td>1${withQ ? '<br><small>Q20</small>' : ''}</td>${withQ ? '' : '<td>11</td>'}<td>22</td></tr>
<tr><td class="l"><b>Ch 14</b> Breathing and Exchange of Gases</td><td>2${withQ ? '<br><small>Q1, 3</small>' : ''}</td><td>3${withQ ? '<br><small>Q7, 8, 10</small>' : ''}</td><td>1${withQ ? '<br><small>Q11</small>' : ''}</td><td>2${withQ ? '<br><small>Q15, 17</small>' : ''}</td><td>1${withQ ? '<br><small>Q19</small>' : ''}</td>${withQ ? '' : '<td>9</td>'}<td>18</td></tr>
${withQ ? `<tr><th class="l">Questions set</th><th>6 × 1 = 6</th><th>4 × 1 = 4</th><th>4 × 2 = 8</th><th>4 × 3 = 12</th><th>2 × 5 = 10</th><th>40</th></tr>
<tr><th class="l">To answer</th><th>all 6</th><th>all 4</th><th>any 3 of 4</th><th>any 3 of 4</th><th>any 1 of 2</th><th>30</th></tr>`
  : '<tr><th class="l">Total questions</th><th>6</th><th>4</th><th>4</th><th>4</th><th>2</th><th>20</th><th>40</th></tr>'}
</table>`;

/* ---------------- answer key ---------------- */
const pts = (n) => `<span class="pts">${n}</span>`;
const QB = (r) => `Ch 9 · ${r.replace('Part ', '')}`, NC = (r) => `Ch 14 · ${r.replace('Part ', '')}`;
const M = '<sup>M</sup>';   /* question also in the monthly test */
const src = [
  [1, NC('Part A I · Q15') + M, 'Easy', 189], [11, NC('Part B III · Q11') + M, 'Average', 187],
  [2, QB('Part A I · Q6'), 'Easy', 106], [12, QB('Part B III · Q8') + M, 'Easy', 111],
  [3, NC('Part A I · Q20') + M, 'Easy', 190], [13, QB('Part B III · Q10'), 'Easy', 115],
  [4, QB('Part A I · Q24') + M, 'Average', 117], [14, QB('Part B III · Q7') + M, 'Easy', 109],
  [5, QB('Part A I · Q14') + M, 'Easy', 110], [15, NC('Part C IV · Q2') + M, 'Easy', '185, 186'],
  [6, QB('Part A I · Q7') + M, 'Easy', 106], [16, QB('Part C IV · Q4'), 'Easy', 118],
  [7, NC('Part A II · Q11') + M, 'Easy', 186], [17, NC('Part C IV · Q7'), 'Average', 189],
  [8, NC('Part A II · Q7'), 'Easy', 189], [18, QB('Part C IV · Q1') + M, 'Easy', 106],
  [9, QB('Part A II · Q9') + M, 'Easy', 111], [19, NC('Part D V · Q2') + M, 'Easy', 184],
  [10, NC('Part A II · Q5') + M, 'Easy', 187], [20, QB('Part D V · Q1') + M, 'Easy', 117]];
const srcRows = []; for(let i = 0; i < src.length; i += 2){ const a = src[i], b = src[i + 1];
  srcRows.push(`<tr><td>${a[0]}</td><td class="l">${a[1]}</td><td>${a[2]}</td><td>${a[3]}</td><td>${b[0]}</td><td class="l">${b[1]}</td><td>${b[2]}</td><td>${b[3]}</td></tr>`); }

const key = doc(`
${header('Answer Key &amp; Scheme of Valuation')}

<h2>Blueprint (as per the I PUC annual blueprint weightage)</h2>
<p class="note">${weightNote}</p>
${weightTable(true)}

<h2>Source of each question in the Question Bank</h2>
<table>
<tr><th>Paper Q</th><th>Question bank reference</th><th>Level</th><th>NCERT page</th><th>Paper Q</th><th>Question bank reference</th><th>Level</th><th>NCERT page</th></tr>
${srcRows.join('\n')}
</table>
<p class="note">All 20 questions are taken from the official <b>I PUC Biology Question Bank 2026-27</b> (Department of School Education, Karnataka). <b>M</b> marks the 15 questions of the 20-mark monthly test, all included here in a shuffled order; Q2, Q8, Q13, Q16 and Q17 are added to make up the 30-mark pattern. "Larynx" in the word box is the extra word and is not an answer. Page numbers follow the question bank (current NCERT Class XI book).</p>

<div style="break-inside:avoid"><h2>Part I &amp; II: Answer key</h2>
<table>
<tr><th>Q1</th><th>Q2</th><th>Q3</th><th>Q4</th><th>Q5</th><th>Q6</th></tr>
<tr><td>d) 97%</td><td>d) Valine</td><td>a) Alveolar walls</td><td>d) Competitive inhibition</td><td>c) RuBisCO</td><td>d) Esterification</td></tr>
<tr><th>Q7</th><th>Q8</th><th>Q9</th><th>Q10</th><th colspan="2"></th></tr>
<tr><td>Tidal volume</td><td>Carbamino-haemoglobin</td><td>Cellulose</td><td>Alveoli</td><td colspan="2"></td></tr>
</table>
<p class="note">1 mark each. Q2: amino acids may be acidic (glutamic acid), basic (lysine) or neutral (valine). Q4: malonate closely resembles the substrate succinate in structure and competes with it for the substrate-binding site. Q6: in lipids the fatty acids are found esterified with glycerol (mono-, di- and triglycerides). Q9: cotton fibre is cellulosic.</p></div>

<h2>Part III: 2 marks each (any three)</h2>
<div class="ka"><span class="qq">11. Vital capacity vs total lung capacity</span>
<ul><li><b>Vital capacity (VC):</b> the maximum volume of air a person can breathe in after a forced expiration, or breathe out after a forced inspiration; it includes ERV, TV and IRV (VC = ERV + TV + IRV) and does not include the residual volume. ${pts('1')}</li>
<li><b>Total lung capacity (TLC):</b> the total volume of air accommodated in the lungs at the end of a forced inspiration; it includes RV, ERV, TV and IRV, i.e. TLC = vital capacity + residual volume. ${pts('1')}</li></ul></div>
<div class="ka"><span class="qq">12. Four levels of protein structure</span> (½ mark each: name with its feature)
<ul><li><b>Primary structure:</b> the sequence of amino acids (positional information) from the N-terminal to the C-terminal amino acid.</li>
<li><b>Secondary structure:</b> portions of the protein thread folded in the form of a helix (only right-handed helices in proteins) and other forms, e.g. α-helix, β-pleated sheet.</li>
<li><b>Tertiary structure:</b> the long protein chain folded upon itself like a hollow woollen ball, giving a 3-dimensional view; absolutely necessary for many biological activities.</li>
<li><b>Quaternary structure:</b> the arrangement of more than one polypeptide or subunit with respect to each other, e.g. adult human haemoglobin with 2 α and 2 β subunits.</li></ul>
<p class="note">If only the four names are written without their features, award 1 mark.</p></div>
<div class="ka"><span class="qq">13. Activation energy</span>
<ul><li>During a reaction the substrate S has to pass through a much higher energy state, the <b>transition state</b>. The difference in average energy content of S from that of this transition state is called <b>activation energy</b>. ${pts('1')}</li>
<li><b>Without enzyme</b> the activation energy is high; <b>with enzyme</b> it is much lower, because enzymes bring down this energy barrier and make the transition of S to P easier, so the rate of the reaction increases greatly. ${pts('1')}</li></ul></div>
<div class="ka"><span class="qq">14. Homo- and heteropolysaccharides</span>
<ul><li><b>a) Homopolysaccharides</b> (made of only one type of monosaccharide): <b>cellulose</b>, <b>starch</b> or <b>glycogen</b> (all made of glucose); <b>inulin</b> (a polymer of fructose). Any one. ${pts('1')}</li>
<li><b>b) Heteropolysaccharides</b> (made of more than one type of monosaccharide or sugar derivative): e.g. <b>hyaluronic acid</b>, <b>heparin</b>, <b>peptidoglycan</b> (bacterial cell wall). Any one. ${pts('1')}</li></ul>
<p class="note">NCERT names homopolysaccharides but gives no heteropolysaccharide example, so accept any correct one. Do not credit chitin for (b): NCERT notes that chitin and similar complex polysaccharides are mostly homopolymers.</p></div>

<h2>Part IV: 3 marks each (any three)</h2>
<div class="ka"><span class="qq">15. Mechanism of breathing</span>
<ul><li>Breathing has two stages, <b>inspiration</b> and <b>expiration</b>, brought about by a pressure gradient between the lungs and the atmosphere: inspiration when the intra-pulmonary pressure is <b>less</b> than the atmospheric pressure, expiration when it is <b>higher</b>. The diaphragm and the external and internal intercostal muscles generate these gradients. ${pts('1')}</li>
<li><b>Inspiration:</b> the diaphragm contracts (volume of the thoracic chamber increases in the antero-posterior axis) and the external intercostal muscles contract, lifting the ribs and sternum (volume increases in the dorso-ventral axis); pulmonary volume increases, intra-pulmonary pressure falls below atmospheric and air moves into the lungs. ${pts('1')}</li>
<li><b>Expiration:</b> the diaphragm and intercostal muscles relax, returning the diaphragm and sternum to normal; thoracic and pulmonary volumes decrease, intra-pulmonary pressure rises slightly above atmospheric and air is expelled. Abdominal muscles can increase the strength of breathing; a healthy human breathes 12–16 times per minute. ${pts('1')}</li></ul></div>
<div class="ka"><span class="qq">16. Three types of co-factors</span> (non-protein constituents bound to the apoenzyme to make the enzyme catalytically active)
<ul><li><b>Prosthetic groups:</b> organic compounds tightly bound to the apoenzyme, e.g. haem in peroxidase and catalase (part of the active site). ${pts('1')}</li>
<li><b>Co-enzymes:</b> organic compounds whose association with the apoenzyme is only transient, during catalysis; many contain vitamins, e.g. NAD and NADP contain the vitamin niacin. ${pts('1')}</li>
<li><b>Metal ions:</b> form coordination bonds with side chains at the active site and with the substrate, e.g. zinc for the proteolytic enzyme carboxypeptidase. ${pts('1')}</li></ul>
<p class="note">Name ½ + example or feature ½ for each type.</p></div>
<div class="ka"><span class="qq">17. Role of haemoglobin in oxygen transport</span>
<ul><li>Haemoglobin is a red, iron-containing pigment in the RBCs; about 97% of O<sub>2</sub> is transported by RBCs. O<sub>2</sub> binds with haemoglobin in a reversible manner to form <b>oxyhaemoglobin</b>; each haemoglobin molecule can carry a maximum of <b>four molecules of O<sub>2</sub></b>. ${pts('1')}</li>
<li>Binding is primarily related to the <b>partial pressure of O<sub>2</sub></b>; pCO<sub>2</sub>, H<sup>+</sup> concentration and temperature also interfere. Plotting percentage saturation of haemoglobin against pO<sub>2</sub> gives a sigmoid curve, the <b>oxygen dissociation curve</b>. ${pts('1')}</li>
<li>In the <b>alveoli</b> (high pO<sub>2</sub>, low pCO<sub>2</sub>, less H<sup>+</sup>, lower temperature) oxyhaemoglobin is formed; in the <b>tissues</b> (low pO<sub>2</sub>, high pCO<sub>2</sub>, high H<sup>+</sup>, higher temperature) O<sub>2</sub> dissociates from it. Every 100 ml of oxygenated blood delivers about <b>5 ml of O<sub>2</sub></b> to the tissues. ${pts('1')}</li></ul></div>
<div class="ka"><span class="qq">18. Nucleotides</span>
<ul><li><b>Definition:</b> when a nitrogen base (adenine, guanine, cytosine, uracil or thymine) is attached to a sugar it is a nucleoside; if a <b>phosphate group</b> is also esterified to the sugar, it is a <b>nucleotide</b> (nitrogen base + pentose sugar + phosphate). Nucleic acids like DNA and RNA consist of nucleotides only. ${pts('1')}</li>
<li><b>Five types:</b> adenylic acid, guanylic acid, cytidylic acid, thymidylic acid and uridylic acid. ${pts('2')}</li></ul>
<p class="note">Five types: award ½ mark each for any four correct names (maximum 2 marks).</p></div>

<h2>Part V: 5 marks (any one)</h2>
<div class="ka"><span class="qq">19. Human respiratory system (diagram)</span>
<div class="fig"><img src="${RESP}" style="width:100mm"><div><b>NCERT Figure 14.1: Diagrammatic view of human respiratory system</b> (sectional view of the left lung). Labels that may be credited: epiglottis, larynx, trachea, bronchus, bronchiole, alveoli, lung, pleural membranes, pleural fluid, diaphragm, heart, cut end of rib.</div></div>
<ul><li><b>Diagram</b>: neat, proportionate drawing of the trachea dividing into two bronchi, the two lungs in the thoracic cavity with the bronchial tree and alveoli in one lung, and the dome-shaped diaphragm below. ${pts('2')}</li>
<li><b>Labels</b>: any six correct labels, ½ mark each. ${pts('3')}</li></ul>
<p class="note">Labels must be pointed with clear lines. Accept the diagram drawn as in NCERT Figure 14.1; do not award diagram marks for a drawing without the diaphragm or the bronchial branching.</p></div>
<div class="ka"><span class="qq">20. Classes of enzymes</span> (enzymes are divided into 6 classes based on the type of reaction they catalyse)
<ul><li><b>Oxidoreductases / dehydrogenases:</b> catalyse oxidoreduction between two substrates S and S′: S<sub>reduced</sub> + S′<sub>oxidised</sub> → S<sub>oxidised</sub> + S′<sub>reduced</sub>.</li>
<li><b>Transferases:</b> catalyse the transfer of a group G (other than hydrogen) between a pair of substrates: S–G + S′ → S + S′–G.</li>
<li><b>Hydrolases:</b> catalyse hydrolysis of ester, ether, peptide, glycosidic, C–C, C–halide or P–N bonds.</li>
<li><b>Lyases:</b> catalyse removal of groups from substrates by mechanisms other than hydrolysis, leaving double bonds.</li>
<li><b>Isomerases:</b> catalyse inter-conversion of optical, geometric or positional isomers.</li>
<li><b>Ligases:</b> catalyse the linking together of 2 compounds, e.g. joining of C–O, C–S, C–N, P–O bonds.</li></ul>
<p class="note">Any five classes with the correct type of reaction: 1 mark each (name ½ + reaction ½). Each class has 4–13 subclasses and is named by a four-digit number (not needed for full marks).</p></div>
<p class="note" style="margin-top:10px">Answers are from the current NCERT Class XI Biology text (Chapters 9 and 14); page numbers follow the question bank.</p>`);

/* ---------------- blueprint sheet ---------------- */
const bp = doc(`
${header('Blueprint')}
<p class="note">Prepared as per the I PUC annual blueprint weightage: Chapter 9 carries 6 marks and Chapter 14 carries 5 marks in the annual exam (6 : 5), so this mock test keeps the same ratio. All questions are taken from the official <b>I PUC Biology Question Bank 2026-27</b> (Department of School Education, Karnataka).</p>
<h2>Chapter-wise weightage (number of questions)</h2>
${weightTable(false)}
<h2>Question paper design</h2>
<table>
<tr><th>Part</th><th>Type of question</th><th>Marks each</th><th>Questions set</th><th>To answer</th><th>Marks</th></tr>
<tr><td>I</td><td class="l">Multiple choice questions</td><td>1</td><td>6</td><td>all 6</td><td>6</td></tr>
<tr><td>II</td><td class="l">Fill in the blanks (choose from the words given)</td><td>1</td><td>4</td><td>all 4</td><td>4</td></tr>
<tr><td>III</td><td class="l">Short answer (3–5 sentences)</td><td>2</td><td>4</td><td>any 3</td><td>6</td></tr>
<tr><td>IV</td><td class="l">Short answer (40–80 words)</td><td>3</td><td>4</td><td>any 3</td><td>9</td></tr>
<tr><td>V</td><td class="l">Long answer (200–250 words), includes a diagram question</td><td>5</td><td>2</td><td>any 1</td><td>5</td></tr>
<tr><th></th><th class="l">Total</th><th></th><th>20</th><th></th><th>30</th></tr>
</table>
<h2>Chapter weightage compared with the annual blueprint</h2>
<table>
<tr><th>Chapter</th><th>Annual blueprint marks</th><th>Marks set in this test</th><th>Share</th></tr>
<tr><td class="l">Ch 9 Biomolecules</td><td>6</td><td>22</td><td>a little over half</td></tr>
<tr><td class="l">Ch 14 Breathing and Exchange of Gases</td><td>5</td><td>18</td><td>a little under half</td></tr>
</table>
<p class="note" style="margin-top:10px"><b>How to prepare:</b> revise both chapters from the NCERT text and the question bank: amino acids and proteins (levels of structure), lipids, carbohydrates (homo- and heteropolysaccharides), nucleotides, and enzymes (activation energy, classes, co-factors, inhibition); respiratory volumes and capacities, mechanism of breathing, exchange and transport of gases and disorders. Practise the labelled diagram of the human respiratory system.</p>`);

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
