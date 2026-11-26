// Mock test (30 marks, 1 hr 15 min): I PUC Biology, Ch 9 Biomolecules + Ch 14 Breathing and Exchange of Gases.
// Practice paper for students before the monthly test: every question is from the I PUC Biology Question Bank 2026-27,
// and none of the monthly test's 15 questions is repeated (or answered in this key).
// Builds 3 PDFs into exam-corner/pu-board-2026-27/:
//   …-30m.pdf (question paper), …-30m-answer-key.pdf, …-30m-blueprint.pdf
// Run: NODE_PATH=<global node_modules with playwright> node scripts/class-tests/mock-biomolecules-breathing.js
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const ROOT = path.join(__dirname, '..', '..');
const OUT = path.join(ROOT, 'exam-corner', 'pu-board-2026-27');
const BASE = 'biology-i-puc-mock-test-biomolecules-and-breathing-30m';

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
const paper = doc(`
${header('Question Paper')}
<div class="who"><span>Name:</span><span style="flex:.55">Roll No.:</span><span style="flex:.45">Section:</span><span style="flex:.5">Date:</span></div>
<div class="ins"><b>Instructions:</b><ol>
<li>The question paper has five parts (I–V). Answer all questions in Parts I and II.</li>
<li>Follow the choice given in Parts III, IV and V.</li>
<li>Draw diagrams wherever necessary. Unlabelled diagrams do not attract any marks.</li></ol></div>

<div class="sec"><span>I. Select the correct alternative from the choices given below.</span><span class="mk">6 × 1 = 6</span></div>
<div class="q"><span class="n">1.</span><div class="b">Which of the following is a neutral amino acid?
<div class="op"><span>a) Glutamic acid</span><span>b) Lysine</span><span>c) Aspartic acid</span><span>d) Valine</span></div></div></div>
<div class="q"><span class="n">2.</span><div class="b">All of the following are composed of glucose except
<div class="op"><span>a) Starch</span><span>b) Glycogen</span><span>c) Cellulose</span><span>d) Galactose</span></div></div></div>
<div class="q"><span class="n">3.</span><div class="b">Adenosine is a/an
<div class="op"><span>a) Amino acid</span><span>b) Purine</span><span>c) Nucleoside</span><span>d) Nucleotide</span></div></div></div>
<div class="q"><span class="n">4.</span><div class="b">The rate of a chemical reaction S → P is determined by the formula
<div class="op"><span>a) r = δP/δt</span><span>b) r = δS/δt</span><span>c) r = δP/δS</span><span>d) r = δt/δP</span></div></div></div>
<div class="q"><span class="n">5.</span><div class="b">The volume of air involved in breathing movements can be estimated by using
<div class="op"><span>a) Spirometer</span><span>b) Osmometer</span><span>c) Respirometer</span><span>d) Aerometer</span></div></div></div>
<div class="q"><span class="n">6.</span><div class="b">Wheezing due to inflammation of bronchi and bronchioles is the result of
<div class="op"><span>a) Emphysema</span><span>b) Asthma</span><span>c) Bronchitis</span><span>d) Occupational respiratory disorders</span></div></div></div>

<div class="sec"><span>II. Fill in the blanks by choosing the appropriate word given below.</span><span class="mk">4 × 1 = 4</span></div>
<div class="wb">( Carbamino-haemoglobin, &nbsp;Isomerases, &nbsp;Lyases, &nbsp;Residual volume, &nbsp;Water )</div>
<div class="q"><span class="n">7.</span><div class="b">The most abundant chemical in living organisms is ____________.</div></div>
<div class="q"><span class="n">8.</span><div class="b">Enzymes that catalyse the inter-conversion of optical, geometric and positional isomers are ____________.</div></div>
<div class="q"><span class="n">9.</span><div class="b">The volume of air remaining in the lungs even after a forcible expiration is ____________.</div></div>
<div class="q"><span class="n">10.</span><div class="b">CO<sub>2</sub> is carried by haemoglobin as ____________.</div></div>

<div class="sec"><span>III. Answer any THREE of the following in 3–5 sentences.</span><span class="mk">3 × 2 = 6</span></div>
<div class="q"><span class="n">11.</span><div class="b">Differentiate between essential and non-essential amino acids.</div></div>
<div class="q"><span class="n">12.</span><div class="b">What is activation energy? How does it vary with or without enzyme?</div></div>
<div class="q"><span class="n">13.</span><div class="b">Mention the various respiratory organs found in different forms of organisms.</div></div>
<div class="q"><span class="n">14.</span><div class="b">What is partial pressure? What is the partial pressure of O<sub>2</sub> and CO<sub>2</sub> in the alveoli?</div></div>

<div class="sec"><span>IV. Answer any THREE of the following in 40–80 words.</span><span class="mk">3 × 3 = 9</span></div>
<div class="q"><span class="n">15.</span><div class="b">Mention the three types of co-factors associated with enzymes.</div></div>
<div class="q"><span class="n">16.</span><div class="b">Lipids are not strictly macromolecules. Substantiate.</div></div>
<div class="q"><span class="n">17.</span><div class="b">Mention the functions of the following organs of respiration: a) Larynx &nbsp;b) Respiratory membrane &nbsp;c) Glottis.</div></div>
<div class="q"><span class="n">18.</span><div class="b">Describe the role of haemoglobin in oxygen transport.</div></div>

<div class="sec"><span>V. Answer any ONE of the following in 200–250 words.</span><span class="mk">1 × 5 = 5</span></div>
<div class="q"><span class="n">19.</span><div class="b">List any five functions of proteins with examples.</div></div>
<div class="q"><span class="n">20.</span><div class="b">Explain the process of regulation of respiration in human.</div></div>

<div class="end">✦ ✦ ✦ &nbsp; ALL THE BEST &nbsp; ✦ ✦ ✦</div>`, TIGHT);

/* ---------------- blueprint tables (shared) ---------------- */
const weightNote = `In the I PUC annual blueprint, Chapter 9 Biomolecules carries <b>6 marks</b> and Chapter 14 Breathing and Exchange of Gases carries <b>5 marks</b>, a ratio of 6 : 5. This 30-mark paper keeps Biomolecules a little ahead (21 : 19 of the 40 marks set), follows the annual question pattern, has at least one question of every type from each chapter, and gives internal choice in Parts III–V.`;
const weightTable = (withQ) => `<table>
<tr><th rowspan="${withQ ? 2 : 1}">Chapter</th><th>I · MCQ<br>1 mark</th><th>II · Fill in${withQ ? '' : ' the blanks'}<br>1 mark</th><th>III · Short${withQ ? '' : ' answer'}<br>2 marks</th><th>IV · Short${withQ ? '' : ' answer'}<br>3 marks</th><th>V · Long${withQ ? '' : ' answer'}<br>5 marks</th>${withQ ? '<th rowspan="2">Marks<br>set</th>' : '<th>Total questions</th><th>Marks set</th>'}</tr>
${withQ ? '<tr><th>Q1–6</th><th>Q7–10</th><th>Q11–14</th><th>Q15–18</th><th>Q19–20</th></tr>' : ''}
<tr><td class="l"><b>Ch 9</b> Biomolecules</td><td>4${withQ ? '<br><small>Q1, 2, 3, 4</small>' : ''}</td><td>2${withQ ? '<br><small>Q7, 8</small>' : ''}</td><td>2${withQ ? '<br><small>Q11, 12</small>' : ''}</td><td>2${withQ ? '<br><small>Q15, 16</small>' : ''}</td><td>1${withQ ? '<br><small>Q19</small>' : ''}</td>${withQ ? '' : '<td>11</td>'}<td>21</td></tr>
<tr><td class="l"><b>Ch 14</b> Breathing and Exchange of Gases</td><td>2${withQ ? '<br><small>Q5, 6</small>' : ''}</td><td>2${withQ ? '<br><small>Q9, 10</small>' : ''}</td><td>2${withQ ? '<br><small>Q13, 14</small>' : ''}</td><td>2${withQ ? '<br><small>Q17, 18</small>' : ''}</td><td>1${withQ ? '<br><small>Q20</small>' : ''}</td>${withQ ? '' : '<td>9</td>'}<td>19</td></tr>
${withQ ? `<tr><th class="l">Questions set</th><th>6 × 1 = 6</th><th>4 × 1 = 4</th><th>4 × 2 = 8</th><th>4 × 3 = 12</th><th>2 × 5 = 10</th><th>40</th></tr>
<tr><th class="l">To answer</th><th>all 6</th><th>all 4</th><th>any 3 of 4</th><th>any 3 of 4</th><th>any 1 of 2</th><th>30</th></tr>`
  : '<tr><th class="l">Total questions</th><th>6</th><th>4</th><th>4</th><th>4</th><th>2</th><th>20</th><th>40</th></tr>'}
</table>`;

/* ---------------- answer key ---------------- */
const pts = (n) => `<span class="pts">${n}</span>`;
const QB = (r) => `Ch 9 · ${r}`, NC = (r) => `Ch 14 · ${r}`;
const src = [
  [1, QB('Part A I · Q6'), 'Easy', 106], [11, QB('Part B III · Q6'), 'Average', 109],
  [2, QB('Part A I · Q18'), 'Easy', 110], [12, QB('Part B III · Q10'), 'Easy', 115],
  [3, QB('Part A I · Q10'), 'Easy', 106], [13, NC('Part B III · Q1'), 'Easy', 183],
  [4, QB('Part A I · Q22'), 'Easy', 113], [14, NC('Part B III · Q12'), 'Easy', 187],
  [5, NC('Part A I · Q14'), 'Easy', 186], [15, QB('Part C IV · Q4'), 'Easy', 118],
  [6, NC('Part A I · Q21'), 'Easy', 190], [16, QB('Part C IV · Q6'), 'Easy', 108],
  [7, QB('Part A II · Q2'), 'Easy', 109], [17, NC('Part C IV · Q1'), 'Easy', 184],
  [8, QB('Part A II · Q1'), 'Easy', 117], [18, NC('Part C IV · Q7'), 'Average', 189],
  [9, NC('Part A II · Q4'), 'Easy', 187], [19, QB('Part D V · Q2'), 'Easy', 109],
  [10, NC('Part A II · Q7'), 'Easy', 189], [20, NC('Part D V · Q5'), 'Average', 190]];
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
<p class="note">All 20 questions are taken from the official <b>I PUC Biology Question Bank 2026-27</b> (Department of School Education, Karnataka). The fill-in word box mixes words from both chapters' banks; "Lyases" is the extra word and is not an answer. Page numbers follow the question bank (current NCERT Class XI book).</p>

<div style="break-inside:avoid"><h2>Part I &amp; II: Answer key</h2>
<table>
<tr><th>Q1</th><th>Q2</th><th>Q3</th><th>Q4</th><th>Q5</th><th>Q6</th></tr>
<tr><td>d) Valine</td><td>d) Galactose</td><td>c) Nucleoside</td><td>a) r = δP/δt</td><td>a) Spirometer</td><td>b) Asthma</td></tr>
<tr><th>Q7</th><th>Q8</th><th>Q9</th><th>Q10</th><th colspan="2"></th></tr>
<tr><td>Water</td><td>Isomerases</td><td>Residual volume</td><td>Carbamino-haemoglobin</td><td colspan="2"></td></tr>
</table>
<p class="note">1 mark each. Q1: amino acids may be acidic (glutamic acid), basic (lysine) or neutral (valine). Q3: adenosine is a nitrogen base (adenine) with a sugar, i.e. a nucleoside; with a phosphate it becomes a nucleotide. Q4: rate is the amount of product formed per unit time. Q7: water makes up 70–90% of the total cellular mass.</p></div>

<h2>Part III: 2 marks each (any three)</h2>
<div class="ka"><span class="qq">11. Essential vs non-essential amino acids</span>
<ul><li><b>Essential amino acids:</b> cannot be made by our body, so they have to be supplied through our diet/food; dietary proteins are their source (e.g. lysine, tryptophan, valine). ${pts('1')}</li>
<li><b>Non-essential amino acids:</b> those which our body can make, so they need not come from the diet (e.g. alanine, glycine). ${pts('1')}</li></ul>
<p class="note">NCERT gives no examples; accept any correct ones. Full marks for the two definitions.</p></div>
<div class="ka"><span class="qq">12. Activation energy</span>
<ul><li>During a reaction the substrate S has to pass through a much higher energy state, the <b>transition state</b>. The difference in average energy content of S from that of this transition state is called <b>activation energy</b>. ${pts('1')}</li>
<li><b>Without enzyme</b> the activation energy is high; <b>with enzyme</b> it is much lower, because enzymes bring down this energy barrier and make the transition of S to P easier, so the rate of the reaction increases greatly. ${pts('1')}</li></ul></div>
<div class="ka"><span class="qq">13. Respiratory organs in different organisms</span> (any four, ½ mark each)
<ul><li><b>Body surface</b> (simple diffusion): lower invertebrates like sponges, coelenterates and flatworms.</li>
<li><b>Moist cuticle:</b> earthworms. &nbsp; <b>Tracheal tubes:</b> insects.</li>
<li><b>Gills</b> (branchial respiration): most aquatic arthropods and molluscs, and fishes.</li>
<li><b>Lungs</b> (pulmonary respiration): terrestrial forms; amphibians, reptiles, birds and mammals.</li>
<li><b>Moist skin</b> (cutaneous respiration): amphibians like frogs.</li></ul></div>
<div class="ka"><span class="qq">14. Partial pressure</span>
<ul><li><b>Partial pressure</b> is the pressure contributed by an individual gas in a mixture of gases; it is represented as pO<sub>2</sub> for oxygen and pCO<sub>2</sub> for carbon dioxide. ${pts('1')}</li>
<li>In the <b>alveoli</b>: pO<sub>2</sub> = <b>104 mm Hg</b> ${pts('½')} and pCO<sub>2</sub> = <b>40 mm Hg</b> ${pts('½')} (NCERT Table 14.1).</li></ul></div>

<h2>Part IV: 3 marks each (any three)</h2>
<div class="ka"><span class="qq">15. Three types of co-factors</span> (non-protein constituents bound to the apoenzyme to make the enzyme catalytically active)
<ul><li><b>Prosthetic groups:</b> organic compounds tightly bound to the apoenzyme, e.g. haem in peroxidase and catalase (part of the active site). ${pts('1')}</li>
<li><b>Co-enzymes:</b> organic compounds whose association with the apoenzyme is only transient, during catalysis; many contain vitamins, e.g. NAD and NADP contain the vitamin niacin. ${pts('1')}</li>
<li><b>Metal ions:</b> form coordination bonds with side chains at the active site and with the substrate, e.g. zinc for the proteolytic enzyme carboxypeptidase. ${pts('1')}</li></ul>
<p class="note">Name ½ + example or feature ½ for each type.</p></div>
<div class="ka"><span class="qq">16. Lipids are not strictly macromolecules</span>
<ul><li>Biomacromolecules (proteins, nucleic acids, polysaccharides) have molecular weights of <b>ten thousand daltons and above</b>, but lipids have molecular weights that <b>do not exceed 800 Da</b>; they are small molecular weight compounds and are not polymers. ${pts('1')}</li>
<li>Yet lipids come under the acid insoluble (macromolecular) fraction because they are also arranged into structures like the <b>cell membrane and other membranes</b>. ${pts('1')}</li>
<li>When a tissue is ground, these membranes break into pieces and form <b>vesicles which are not water soluble</b>; these separate along with the acid insoluble pool. Hence lipids are not strictly macromolecules. ${pts('1')}</li></ul></div>
<div class="ka"><span class="qq">17. Functions of larynx, respiratory membrane and glottis</span>
<ul><li><b>Larynx:</b> a cartilaginous box that helps in sound production (sound box); air passes through it from the pharynx into the trachea. ${pts('1')}</li>
<li><b>Respiratory (diffusion) membrane:</b> the site of exchange of gases: O<sub>2</sub> diffuses from the alveoli into the blood and CO<sub>2</sub> from the blood into the alveoli. It has three layers (squamous epithelium of alveoli, endothelium of alveolar capillaries and the basement substance between them) and is less than a millimetre thick, which favours diffusion. ${pts('1')}</li>
<li><b>Glottis:</b> the opening into the larynx through which air passes; during swallowing it is covered by the epiglottis to prevent the entry of food into the larynx. ${pts('1')}</li></ul></div>
<div class="ka"><span class="qq">18. Role of haemoglobin in oxygen transport</span>
<ul><li>Haemoglobin is a red, iron-containing pigment in the RBCs. O<sub>2</sub> binds with it in a reversible manner to form <b>oxyhaemoglobin</b>; each haemoglobin molecule can carry a maximum of <b>four molecules of O<sub>2</sub></b>. ${pts('1')}</li>
<li>Binding is primarily related to the <b>partial pressure of O<sub>2</sub></b>; pCO<sub>2</sub>, H<sup>+</sup> concentration and temperature also interfere. Plotting percentage saturation of haemoglobin against pO<sub>2</sub> gives a sigmoid curve, the <b>oxygen dissociation curve</b>. ${pts('1')}</li>
<li>In the <b>alveoli</b> (high pO<sub>2</sub>, low pCO<sub>2</sub>, less H<sup>+</sup>, lower temperature) oxyhaemoglobin is formed; in the <b>tissues</b> (low pO<sub>2</sub>, high pCO<sub>2</sub>, high H<sup>+</sup>, higher temperature) O<sub>2</sub> dissociates from it. Every 100 ml of oxygenated blood delivers about <b>5 ml of O<sub>2</sub></b> to the tissues. ${pts('1')}</li></ul></div>

<h2>Part V: 5 marks (any one)</h2>
<div class="ka"><span class="qq">19. Functions of proteins with examples</span> (any five, 1 mark each: function ½ + example ½)
<ul><li><b>Intercellular ground substance</b> (structural): collagen, the most abundant protein in the animal world.</li>
<li><b>Enzyme:</b> trypsin.</li>
<li><b>Hormone:</b> insulin.</li>
<li><b>Fights infectious agents:</b> antibody.</li>
<li><b>Sensory reception</b> (smell, taste, hormone, etc.): receptor.</li>
<li><b>Transport of nutrients across the cell membrane:</b> GLUT-4 enables glucose transport into cells.</li></ul>
<p class="note">NCERT Table 9.5. Other correct examples may be accepted (e.g. haemoglobin for O<sub>2</sub> transport).</p></div>
<div class="ka"><span class="qq">20. Regulation of respiration in human</span>
<ul><li>Human beings can maintain and moderate the respiratory rhythm to suit the demands of the body tissues; this is done by the <b>neural system</b>. ${pts('1')}</li>
<li><b>Respiratory rhythm centre:</b> a specialised centre in the <b>medulla</b> region of the brain, primarily responsible for this regulation. ${pts('1')}</li>
<li><b>Pneumotaxic centre:</b> present in the <b>pons</b> region; it moderates the rhythm centre. Its neural signal can reduce the duration of inspiration and thereby alter the respiratory rate. ${pts('1')}</li>
<li><b>Chemosensitive area:</b> adjacent to the rhythm centre and highly sensitive to CO<sub>2</sub> and hydrogen ions; an increase in these activates it, and it signals the rhythm centre to adjust breathing so that they are eliminated. ${pts('1')}</li>
<li><b>Receptors of the aortic arch and carotid artery</b> also recognise changes in CO<sub>2</sub> and H<sup>+</sup> concentration and signal the rhythm centre for remedial actions. The role of <b>oxygen</b> in regulating the respiratory rhythm is quite insignificant. ${pts('1')}</li></ul>
<p class="note">A neat flow chart of these centres may be credited in place of the explanation.</p></div>
<p class="note" style="margin-top:10px">Answers are from the current NCERT Class XI Biology text (Chapters 9 and 14); page numbers follow the question bank.</p>`);

/* ---------------- blueprint sheet ---------------- */
const bp = doc(`
${header('Blueprint')}
<p class="note">Prepared as per the I PUC annual blueprint weightage: Chapter 9 carries 6 marks and Chapter 14 carries 5 marks in the annual exam (6 : 5), so this mock test gives Biomolecules a little more weight. All questions are taken from the official <b>I PUC Biology Question Bank 2026-27</b> (Department of School Education, Karnataka).</p>
<h2>Chapter-wise weightage (number of questions)</h2>
${weightTable(false)}
<h2>Question paper design</h2>
<table>
<tr><th>Part</th><th>Type of question</th><th>Marks each</th><th>Questions set</th><th>To answer</th><th>Marks</th></tr>
<tr><td>I</td><td class="l">Multiple choice questions</td><td>1</td><td>6</td><td>all 6</td><td>6</td></tr>
<tr><td>II</td><td class="l">Fill in the blanks (choose from the words given)</td><td>1</td><td>4</td><td>all 4</td><td>4</td></tr>
<tr><td>III</td><td class="l">Short answer (3–5 sentences)</td><td>2</td><td>4</td><td>any 3</td><td>6</td></tr>
<tr><td>IV</td><td class="l">Short answer (40–80 words)</td><td>3</td><td>4</td><td>any 3</td><td>9</td></tr>
<tr><td>V</td><td class="l">Long answer (200–250 words)</td><td>5</td><td>2</td><td>any 1</td><td>5</td></tr>
<tr><th></th><th class="l">Total</th><th></th><th>20</th><th></th><th>30</th></tr>
</table>
<h2>Chapter weightage compared with the annual blueprint</h2>
<table>
<tr><th>Chapter</th><th>Annual blueprint marks</th><th>Marks set in this test</th><th>Share</th></tr>
<tr><td class="l">Ch 9 Biomolecules</td><td>6</td><td>21</td><td>a little over half</td></tr>
<tr><td class="l">Ch 14 Breathing and Exchange of Gases</td><td>5</td><td>19</td><td>a little under half</td></tr>
</table>
<p class="note" style="margin-top:10px"><b>How to prepare:</b> revise both chapters from the NCERT text and the question bank: amino acids and proteins, carbohydrates, nucleosides and nucleotides, lipids, and enzymes (rate of reaction, activation energy, classes, co-factors); respiratory organs, the human respiratory system, respiratory volumes, exchange and transport of gases, regulation of respiration and disorders.</p>`);

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
