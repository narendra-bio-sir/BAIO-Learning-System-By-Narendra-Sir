// Shared question bank + PDF builder for the I PUC Biology tests on
// Ch 9 Biomolecules and Ch 14 Breathing and Exchange of Gases (monthly test and its mock test).
//
// Chapter pattern follows the official I PUC Biology Blue Print 2026-27 (Department of School Education, PU):
//   Ch 9  Biomolecules ........................ 6 marks = 1 one-mark (MCQ / fill-in) + 1 five-mark (LA)
//   Ch 14 Breathing and Exchange of Gases ...... 5 marks = 1 two-mark (SA) + 1 three-mark (SA)
// So every one-mark and five-mark question is from Ch 9, and every two-mark and three-mark question is from Ch 14.
// Every question is from the I PUC Biology Question Bank 2026-27; answers follow the current NCERT text.
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const OUT = path.join(ROOT, 'exam-corner', 'pu-board-2026-27');
const CH = {9: 'Biomolecules', 14: 'Breathing and Exchange of Gases'};
const IMG = {
  resp: 'exam-corner/diagrams/ncert-human-respiratory-system-fig14-1.jpg',
  odc: 'exam-corner/diagrams/ncert-o2-dissociation-curve-fig14-5.jpg',
  ae: 'exam-corner/diagrams/ncert-activation-energy-fig9-4.jpg',
  mech: 'exam-corner/diagrams/ncert-mechanism-of-breathing-fig14-2.jpg',
  alv: 'exam-corner/diagrams/ncert-alveolus-section-fig14-4.jpg'
};

/* ------------------------------------------------------------------ question bank ------------------------------------------------------------------ */
/* t: mcq | fib | B (2 marks) | C (3 marks) | D (5 marks).  ref = Question Bank reference, lv = level, pg = NCERT page.
   p = marking points [text, marks]; m = full-mark model answer (HTML). */
const Q = {
  /* ---- Ch 9 · one-mark (MCQ) ---- */
  rubisco: {t: 'mcq', ch: 9, ref: 'A I · Q14', lv: 'Easy', pg: 110, q: 'The most abundant protein in the whole biosphere is', o: ['Collagen', 'Chitin', 'RuBisCO', 'Insulin'], a: 2,
    e: 'RuBisCO (Ribulose bisphosphate Carboxylase-Oxygenase) is the most abundant protein in the whole biosphere; collagen is the most abundant protein in the animal world.'},
  ester: {t: 'mcq', ch: 9, ref: 'A I · Q7', lv: 'Easy', pg: 106, q: 'Fatty acid and glycerol react to form lipids. The chemical reaction involved is called', o: ['Neutralization', 'Reduction', 'Oxidation', 'Esterification'], a: 3,
    e: 'In lipids the fatty acids are found esterified with glycerol, giving monoglycerides, diglycerides and triglycerides.'},
  compet: {t: 'mcq', ch: 9, ref: 'A I · Q24', lv: 'Average', pg: 117, wide: true, q: 'When the enzyme succinic dehydrogenase is added to a mixture of the substrates malonate and succinate, the rate of enzyme activity declines because of', o: ['Increase in pH', 'Decrease in pH', 'Decrease in concentration of substrate', 'Competitive inhibition'], a: 3,
    e: 'Malonate closely resembles the substrate succinate in structure and competes with it for the substrate-binding site of succinic dehydrogenase: competitive inhibition.'},
  adenosine: {t: 'mcq', ch: 9, ref: 'A I · Q10', lv: 'Easy', pg: 106, q: 'Adenosine is a/an', o: ['Amino acid', 'Purine', 'Nucleoside', 'Nucleotide'], a: 2,
    e: 'Adenine (a nitrogen base) attached to a sugar is the nucleoside adenosine; when a phosphate is also esterified to the sugar it becomes a nucleotide (adenylic acid).'},
  valine: {t: 'mcq', ch: 9, ref: 'A I · Q6', lv: 'Easy', pg: 106, q: 'Which of the following is a neutral amino acid?', o: ['Glutamic acid', 'Lysine', 'Aspartic acid', 'Valine'], a: 3,
    e: 'Based on the number of amino and carboxyl groups, amino acids are acidic (e.g. glutamic acid), basic (lysine) or neutral (valine).'},
  galactose: {t: 'mcq', ch: 9, ref: 'A I · Q18', lv: 'Easy', pg: 110, q: 'All of the following are composed of glucose except', o: ['Starch', 'Glycogen', 'Cellulose', 'Galactose'], a: 3,
    e: 'Starch, glycogen and cellulose are polymers of glucose; galactose is itself a monosaccharide (a hexose sugar).'},
  rate: {t: 'mcq', ch: 9, ref: 'A I · Q22', lv: 'Easy', pg: 113, q: 'The rate of a chemical reaction S → P is determined by the formula', o: ['r = δP/δt', 'r = δS/δt', 'r = δP/δS', 'r = δt/δP'], a: 0,
    e: 'The rate of a physical or chemical process is the amount of product formed per unit time: rate = δP/δt.'},
  transition: {t: 'mcq', ch: 9, ref: 'A I · Q32', lv: 'Easy', pg: 114, wide: true, q: 'The transition state structure of the substrate formed during an enzymatic reaction is', o: ['Transient but stable', 'Permanent but unstable', 'Transient and unstable', 'Permanent and stable'], a: 2,
    e: 'The substrate passes through a short-lived (transient) transition state on its way to the product; such intermediate structural states are unstable.'},

  /* ---- Ch 9 · one-mark (fill in the blanks) ---- */
  water: {t: 'fib', ch: 9, ref: 'A II · Q2', lv: 'Easy', pg: 109, q: 'The most abundant chemical in living organisms is ____________.', a: 'Water',
    e: 'Water makes up 70–90% of the total cellular mass (NCERT Table 9.4).'},
  cellulose: {t: 'fib', ch: 9, ref: 'A II · Q9', lv: 'Easy', pg: 111, q: 'Chemically, the cotton fibre is composed of ____________.', a: 'Cellulose',
    e: 'Cotton fibre is cellulose, a homopolymer of glucose; plant cell walls are also made of cellulose.'},
  cytosine: {t: 'fib', ch: 9, ref: 'A II · Q6', lv: 'Easy', pg: 111, q: 'The pyrimidine found in both DNA and RNA is ____________.', a: 'Cytosine',
    e: 'Cytosine occurs in both DNA and RNA; thymine is found only in DNA and uracil only in RNA.'},

  /* ---- Ch 14 · two-mark ---- */
  vctlc: {t: 'B', ch: 14, ref: 'B III · Q11', lv: 'Average', pg: 187, q: 'Differentiate between vital capacity and total lung capacity.',
    p: [['Vital capacity: maximum air a person can breathe in after a forced expiration (or out after a forced inspiration); VC = ERV + TV + IRV, does not include RV', 1],
        ['Total lung capacity: total air accommodated in the lungs at the end of a forced inspiration; TLC = RV + ERV + TV + IRV = VC + RV', 1]],
    m: '<ul><li><b>Vital capacity (VC):</b> the maximum volume of air a person can breathe in after a forced expiration, or breathe out after a forced inspiration. It includes ERV, TV and IRV (<b>VC = ERV + TV + IRV</b>) and does not include the residual volume.</li><li><b>Total lung capacity (TLC):</b> the total volume of air accommodated in the lungs at the end of a forced inspiration. It includes RV, ERV, TV and IRV, i.e. <b>TLC = VC + RV</b>.</li></ul>'},
  tidal: {t: 'B', ch: 14, ref: 'B III · Q5', lv: 'Easy', pg: 186, q: 'What is tidal volume (TV)? Mention the value of TV of a normal man.',
    p: [['Tidal volume: the volume of air inspired or expired during a normal respiration', 1], ['About 500 mL (a healthy man can inspire or expire about 6000–8000 mL of air per minute)', 1]],
    m: '<ul><li><b>Tidal volume (TV)</b> is the volume of air inspired or expired during a normal respiration.</li><li>It is approximately <b>500 mL</b>, i.e. a healthy man can inspire or expire approximately <b>6000 to 8000 mL</b> of air per minute.</li></ul>'},
  emphysema: {t: 'B', ch: 14, ref: 'B III · Q15', lv: 'Easy', pg: 190, q: 'Mention the major cause and the organ affected in emphysema.',
    p: [['Major cause: cigarette smoking', 1], ['Organ affected: the alveolar walls are damaged, so the respiratory surface decreases', 1]],
    m: '<ul><li>Emphysema is a chronic disorder; one of its <b>major causes is cigarette smoking</b>.</li><li>The <b>alveolar walls</b> are damaged, due to which the respiratory surface is decreased.</li></ul>'},
  ppressure: {t: 'B', ch: 14, ref: 'B III · Q12', lv: 'Easy', pg: 187, q: 'What is partial pressure? What is the partial pressure of O₂ and CO₂ in the alveoli?',
    p: [['Partial pressure: the pressure contributed by an individual gas in a mixture of gases (pO₂, pCO₂)', 1], ['In the alveoli: pO₂ = 104 mm Hg and pCO₂ = 40 mm Hg (½ each)', 1]],
    m: '<ul><li><b>Partial pressure</b> is the pressure contributed by an individual gas in a mixture of gases; it is represented as pO₂ for oxygen and pCO₂ for carbon dioxide.</li><li>In the <b>alveoli</b>: pO₂ = <b>104 mm Hg</b> and pCO₂ = <b>40 mm Hg</b> (NCERT Table 14.1).</li></ul>'},
  organs: {t: 'B', ch: 14, ref: 'B III · Q2', lv: 'Easy', pg: 184, q: 'Mention the organs of human respiratory system.', img: IMG.resp,
    p: [['External nostrils → nasal passage → nasal chamber → pharynx → larynx → trachea', 1], ['Primary, secondary and tertiary bronchi → bronchioles → terminal bronchioles → alveoli; the two lungs, covered by a double-layered pleura', 1]],
    m: '<ul><li>A pair of <b>external nostrils</b> → <b>nasal passage</b> → <b>nasal chamber</b> → <b>pharynx</b> (common passage for food and air) → <b>larynx</b> (sound box) → <b>trachea</b>.</li><li>The trachea divides into right and left <b>primary bronchi</b> → secondary and tertiary bronchi → <b>bronchioles</b> → terminal bronchioles → <b>alveoli</b>. The branching network of bronchi, bronchioles and alveoli forms the two <b>lungs</b>, covered by a double-layered pleura.</li></ul>'},
  animals: {t: 'B', ch: 14, ref: 'B III · Q1', lv: 'Easy', pg: 183, q: 'Mention the various respiratory organs found in different forms of organisms.',
    p: [['Body surface (simple diffusion): sponges, coelenterates, flatworms', 0.5], ['Moist cuticle: earthworms; tracheal tubes: insects', 0.5], ['Gills: most aquatic arthropods and molluscs, and fishes', 0.5], ['Lungs: terrestrial forms (amphibians, reptiles, birds, mammals); moist skin: frogs', 0.5]],
    m: '<ul><li><b>Body surface</b> (simple diffusion): lower invertebrates like sponges, coelenterates and flatworms.</li><li><b>Moist cuticle:</b> earthworms. <b>Tracheal tubes:</b> insects.</li><li><b>Gills</b> (branchial respiration): most aquatic arthropods and molluscs, and fishes.</li><li><b>Lungs</b> (pulmonary respiration): terrestrial forms; amphibians, reptiles, birds and mammals.</li><li><b>Moist skin</b> (cutaneous respiration): amphibians like frogs.</li></ul><p class="hint">Any four, ½ mark each.</p>'},

  /* ---- Ch 14 · three-mark ---- */
  mechanism: {t: 'C', ch: 14, ref: 'C IV · Q2', lv: 'Easy', pg: '185, 186', img: IMG.mech, q: 'Explain the mechanism of breathing.',
    p: [['Two stages, inspiration and expiration, by a pressure gradient: inspiration when intra-pulmonary pressure is less than atmospheric, expiration when it is higher; diaphragm and intercostal muscles create it', 1],
        ['Inspiration: diaphragm and external intercostal muscles contract; thoracic and pulmonary volume increase; intra-pulmonary pressure falls; air moves in', 1],
        ['Expiration: diaphragm and intercostal muscles relax; thoracic and pulmonary volume decrease; pressure rises above atmospheric; air is expelled', 1]],
    m: '<ul><li>Breathing has two stages, <b>inspiration</b> and <b>expiration</b>, brought about by a pressure gradient between the lungs and the atmosphere: inspiration when the intra-pulmonary pressure is <b>less</b> than the atmospheric pressure, expiration when it is <b>higher</b>. The diaphragm and the external and internal intercostal muscles generate these gradients.</li><li><b>Inspiration:</b> the diaphragm contracts (volume of the thoracic chamber increases in the antero-posterior axis) and the external intercostal muscles contract, lifting the ribs and sternum (volume increases in the dorso-ventral axis). Pulmonary volume increases, intra-pulmonary pressure falls below atmospheric and air moves into the lungs.</li><li><b>Expiration:</b> the diaphragm and intercostal muscles relax, returning the diaphragm and sternum to normal. Thoracic and pulmonary volumes decrease, intra-pulmonary pressure rises slightly above atmospheric and air is expelled. Abdominal muscles can increase the strength of breathing; a healthy human breathes 12–16 times per minute.</li></ul>'},
  haemoglobin: {t: 'C', ch: 14, ref: 'C IV · Q7', lv: 'Average', pg: 189, q: 'Describe the role of haemoglobin in oxygen transport.', img: IMG.odc,
    p: [['Haemoglobin (iron-containing pigment of RBCs; ~97% of O₂ carried by RBCs) binds O₂ reversibly as oxyhaemoglobin; each molecule carries up to 4 O₂', 1],
        ['Binding depends mainly on pO₂ (also pCO₂, H⁺ concentration, temperature); sigmoid oxygen dissociation curve', 1],
        ['Alveoli (high pO₂, low pCO₂) favour formation, tissues favour dissociation; 100 ml of oxygenated blood delivers about 5 ml of O₂', 1]],
    m: '<ul><li>Haemoglobin is a red, iron-containing pigment in the RBCs; about 97% of O₂ is transported by RBCs. O₂ binds with haemoglobin in a reversible manner to form <b>oxyhaemoglobin</b>; each haemoglobin molecule can carry a maximum of <b>four molecules of O₂</b>.</li><li>Binding is primarily related to the <b>partial pressure of O₂</b>; pCO₂, H⁺ concentration and temperature also interfere. Plotting percentage saturation of haemoglobin against pO₂ gives a sigmoid curve, the <b>oxygen dissociation curve</b> (NCERT Fig. 14.5).</li><li>In the <b>alveoli</b> (high pO₂, low pCO₂, less H⁺, lower temperature) oxyhaemoglobin is formed; in the <b>tissues</b> (low pO₂, high pCO₂, high H⁺, higher temperature) O₂ dissociates from it. Every 100 ml of oxygenated blood delivers about <b>5 ml of O₂</b> to the tissues.</li></ul>'},
  larynx: {t: 'C', ch: 14, ref: 'C IV · Q1', lv: 'Easy', pg: 184, img: IMG.alv, q: 'Mention the functions of the following organs of respiration: a) Larynx b) Respiratory membrane c) Glottis.',
    p: [['Larynx: cartilaginous box that helps in sound production (sound box); passage of air from pharynx to trachea', 1],
        ['Respiratory (diffusion) membrane: site of exchange of O₂ and CO₂ between alveoli and blood; three thin layers, less than a millimetre thick', 1],
        ['Glottis: opening into the larynx for air; covered by the epiglottis during swallowing so food does not enter the larynx', 1]],
    m: '<ul><li><b>Larynx:</b> a cartilaginous box that helps in sound production (sound box); air passes through it from the pharynx into the trachea.</li><li><b>Respiratory (diffusion) membrane:</b> the site of exchange of gases: O₂ diffuses from the alveoli into the blood and CO₂ from the blood into the alveoli. It has three layers (squamous epithelium of alveoli, endothelium of alveolar capillaries and the basement substance between them) and is less than a millimetre thick, which favours diffusion.</li><li><b>Glottis:</b> the opening into the larynx through which air passes; during swallowing it is covered by the epiglottis to prevent the entry of food into the larynx.</li></ul>'},

  /* ---- Ch 9 · five-mark ---- */
  enzymes: {t: 'D', ch: 9, ref: 'D V · Q1', lv: 'Easy', pg: 117, q: 'Classify the various classes of enzymes based on the type of reaction they catalyse.',
    p: [['Oxidoreductases/dehydrogenases: oxidoreduction between two substrates S and S′', 1], ['Transferases: transfer of a group G (other than hydrogen) between a pair of substrates', 1],
        ['Hydrolases: hydrolysis of ester, ether, peptide, glycosidic, C–C, C–halide or P–N bonds', 1], ['Lyases: removal of groups by mechanisms other than hydrolysis, leaving double bonds', 1],
        ['Isomerases (inter-conversion of optical, geometric or positional isomers) or Ligases (linking together of 2 compounds)', 1]],
    m: '<p>Enzymes are divided into <b>6 classes</b>, each with 4–13 subclasses, based on the type of reaction they catalyse:</p><ul><li><b>Oxidoreductases / dehydrogenases:</b> oxidoreduction between two substrates S and S′: S<sub>reduced</sub> + S′<sub>oxidised</sub> → S<sub>oxidised</sub> + S′<sub>reduced</sub>.</li><li><b>Transferases:</b> transfer of a group G (other than hydrogen) between a pair of substrates: S–G + S′ → S + S′–G.</li><li><b>Hydrolases:</b> hydrolysis of ester, ether, peptide, glycosidic, C–C, C–halide or P–N bonds.</li><li><b>Lyases:</b> removal of groups from substrates by mechanisms other than hydrolysis, leaving double bonds.</li><li><b>Isomerases:</b> inter-conversion of optical, geometric or positional isomers.</li><li><b>Ligases:</b> linking together of 2 compounds, e.g. joining of C–O, C–S, C–N, P–O bonds.</li></ul><p class="hint">Any five classes with the correct reaction: 1 mark each (name ½ + reaction ½).</p>'},
  proteins: {t: 'D', ch: 9, ref: 'D V · Q2', lv: 'Easy', pg: 109, q: 'List any five functions of proteins with examples.',
    p: [['Intercellular ground substance: collagen', 1], ['Enzyme: trypsin', 1], ['Hormone: insulin', 1], ['Fights infectious agents: antibody', 1], ['Sensory reception: receptor, or transport of glucose into cells: GLUT-4', 1]],
    m: '<ul><li><b>Intercellular ground substance</b> (structural): collagen, the most abundant protein in the animal world.</li><li><b>Enzyme:</b> trypsin.</li><li><b>Hormone:</b> insulin.</li><li><b>Fights infectious agents:</b> antibody.</li><li><b>Sensory reception</b> (smell, taste, hormone, etc.): receptor.</li><li><b>Transport of nutrients across the cell membrane:</b> GLUT-4 enables glucose transport into cells.</li></ul><p class="hint">NCERT Table 9.5. Any five, 1 mark each (function ½ + example ½); other correct examples may be accepted.</p>'}
};
for (const k in Q) Q[k].id = k;

/* ------------------------------------------------------------------ PDF builder ------------------------------------------------------------------ */
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
.part{font-family:'DejaVu Sans',Arial,sans-serif;font-weight:700;font-size:10.5pt;text-align:center;letter-spacing:1px;margin:9px 0 2px;break-after:avoid}
.sec{display:flex;justify-content:space-between;align-items:baseline;font-weight:700;margin:9px 0 4px;font-size:11pt;break-after:avoid}
.sec .mk{white-space:nowrap;margin-left:10px}
.q{display:flex;gap:6px;margin:4px 0;page-break-inside:avoid}
.q .n{width:24px;flex:none;font-weight:700}
.q .b{flex:1}
.op{display:grid;grid-template-columns:repeat(4,auto);justify-content:start;gap:1px 26px;margin:1px 0 0}
.op.w{grid-template-columns:repeat(2,minmax(0,82mm))}
.sec .pt{font-family:'DejaVu Sans',Arial,sans-serif;font-size:9.5pt;letter-spacing:.5px;background:#111;color:#fff;border-radius:3px;padding:0 5px;margin-right:6px}
.sec+.sec{margin-top:6px}
.wb{text-align:center;font-weight:700;margin:2px 0 5px}
.end{text-align:center;margin-top:8px;font-size:10pt;letter-spacing:1px}
h2{font-family:'DejaVu Sans',Arial,sans-serif;font-size:12.5pt;margin:14px 0 6px;border-bottom:1.5px solid #333;padding-bottom:3px;break-after:avoid}
table{border-collapse:collapse;width:100%;font-size:9.8pt;margin:4px 0}
th,td{border:1px solid #555;padding:4px 6px;text-align:center;vertical-align:middle}
th{background:#eee}
td.l,th.l{text-align:left}
.ka{margin:5px 0 7px;page-break-inside:avoid}
.ka .qq{font-weight:700}
.ka ul{margin:2px 0 0 18px;padding:0}
.ka li{margin:1px 0}
.ka p{margin:3px 0}
.sch{font-size:9.6pt;margin:3px 0 0;padding:3px 8px;border-left:3px solid #999;background:#f6f6f6}
.sch b{font-family:'DejaVu Sans',Arial,sans-serif;font-size:8.8pt}
.pts{font-family:'DejaVu Sans',Arial,sans-serif;font-size:8.6pt;font-weight:700;background:#eee;border:1px solid #999;border-radius:3px;padding:0 4px;margin-left:4px;white-space:nowrap}
.hint,.note{font-size:9.6pt;color:#333}
.fig{text-align:center;margin:4px 0}
.fig img{max-height:62mm}
`;
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const PART_NAMES = {mcq: 'I', fib: 'II', B: 'III', C: 'IV', D: 'V'};
const MARKS = {mcq: 1, fib: 1, B: 2, C: 3, D: 5};
const BP_NOTE = `As per the official <b>I PUC Biology Blue Print 2026-27</b> (Department of School Education, Pre-University), Chapter 9 Biomolecules carries <b>6 marks</b> as one 1-mark question (MCQ / fill in the blank) and one 5-mark question, and Chapter 14 Breathing and Exchange of Gases carries <b>5 marks</b> as one 2-mark and one 3-mark question. This test follows the same chapter pattern: <b>all 1-mark and 5-mark questions are from Biomolecules, and all 2-mark and 3-mark questions are from Breathing and Exchange of Gases</b>, with the chapter marks in about the same 6 : 5 ratio.`;

/* cfg: {kind, base, time, total, parts:{mcq:[ids], fib:[ids], B:{ids, n}, C:{ids, n}, D:{ids, n}}, words:[...], extraWord, tight, monthlyIds?} */
function counts(cfg){
  const r = {9: {}, 14: {}};
  for (const t of ['mcq', 'fib', 'B', 'C', 'D']) { const ids = Array.isArray(cfg.parts[t]) ? cfg.parts[t] : cfg.parts[t].ids; for (const id of ids) { const c = Q[id].ch; r[c][t] = (r[c][t] || 0) + 1; } }
  return r;
}
function order(cfg){ return [...cfg.parts.mcq, ...cfg.parts.fib, ...cfg.parts.B.ids, ...cfg.parts.C.ids, ...cfg.parts.D.ids]; }
function numbers(cfg){ const n = {}; order(cfg).forEach((id, i) => n[id] = i + 1); return n; }
function stats(cfg){
  const P = cfg.parts, A = P.mcq.length + P.fib.length;
  const set = {A, B: P.B.ids.length * 2, C: P.C.ids.length * 3, D: P.D.ids.length * 5};
  const ans = {A, B: P.B.n * 2, C: P.C.n * 3, D: P.D.n * 5};
  return {set, ans, totalSet: set.A + set.B + set.C + set.D, totalAns: ans.A + ans.B + ans.C + ans.D, ch9Set: set.A + set.D, ch14Set: set.B + set.C, ch9Ans: ans.A + ans.D, ch14Ans: ans.B + ans.C};
}
const WORD = ['', 'ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX'];

function build(cfg){
  const P = cfg.parts, N = numbers(cfg), S = stats(cfg);
  if (S.totalAns !== cfg.total) throw new Error('marks do not add up: ' + S.totalAns);
  const CHAPTERS = 'Chapter 9: Biomolecules &nbsp;·&nbsp; Chapter 14: Breathing and Exchange of Gases';
  const header = (sub) => `<div class="hd"><div class="t1">${cfg.kind} · I PUC BIOLOGY (36)</div><div class="t2">${sub}</div><div class="t3">${CHAPTERS}</div></div>
<div class="meta"><span>Time: ${cfg.time}</span><span>Max. Marks: ${cfg.total}</span></div>`;
  const doc = (body, extra = '') => `<!doctype html><html><head><meta charset="utf-8"><style>${css}${extra}</style></head><body>${body}</body></html>`;
  const qline = (q) => `<div class="q"><span class="n">${N[q.id]}.</span><div class="b">${esc(q.q)}${q.o ? `<div class="op${q.wide ? ' w' : ''}">${q.o.map((o, i) => `<span>${'abcd'[i]}) ${esc(o)}</span>`).join('')}</div>` : ''}</div></div>`;
  const sec = (txt, mk) => `<div class="sec"><span>${txt}</span><span class="mk">${mk}</span></div>`;

  /* ---- question paper ---- */
  const paper = doc(`${header('Question Paper')}
<div class="who"><span>Name:</span><span style="flex:.55">Roll No.:</span><span style="flex:.45">Section:</span><span style="flex:.5">Date:</span></div>
<div class="ins"><b>Instructions:</b><ol>
<li>The question paper has four parts: A, B, C and D. Answer all questions in Part A.</li>
<li>Follow the internal choice given in Parts B, C and D.</li>
<li>Draw neat, labelled diagrams wherever necessary.</li></ol></div>
${sec('<b class="pt">PART A</b> I. Select the correct alternative from the choices given below.', `${P.mcq.length} × 1 = ${P.mcq.length}`)}
${P.mcq.map(id => qline(Q[id])).join('\n')}
${sec('II. Fill in the blanks by choosing the appropriate word given in the bracket.', `${P.fib.length} × 1 = ${P.fib.length}`)}
<div class="wb">( ${cfg.words.join(', &nbsp;')} )</div>
${P.fib.map(id => qline(Q[id])).join('\n')}
${sec(`<b class="pt">PART B</b> III. Answer any ${WORD[P.B.n]} of the following in 3–5 sentences each.`, `${P.B.n} × 2 = ${P.B.n * 2}`)}
${P.B.ids.map(id => qline(Q[id])).join('\n')}
${sec(`<b class="pt">PART C</b> IV. Answer any ${WORD[P.C.n]} of the following in 40–80 words each.`, `${P.C.n} × 3 = ${P.C.n * 3}`)}
${P.C.ids.map(id => qline(Q[id])).join('\n')}
${sec(`<b class="pt">PART D</b> V. Answer any ${WORD[P.D.n]} of the following in 200–250 words.`, `${P.D.n} × 5 = ${P.D.n * 5}`)}
${P.D.ids.map(id => qline(Q[id])).join('\n')}
<div class="end">✦ ✦ ✦ &nbsp; ALL THE BEST &nbsp; ✦ ✦ ✦</div>`, cfg.tight || '');

  /* ---- shared blueprint tables ---- */
  const cnt = counts(cfg);
  const rng = (t) => { const ids = Array.isArray(P[t]) ? P[t] : P[t].ids; return ids.map(id => N[id]); };
  const qlist = (c, t) => { const ids = (Array.isArray(P[t]) ? P[t] : P[t].ids).filter(id => Q[id].ch === c); return ids.length ? ids.map(id => N[id]).join(', ') : ''; };
  const cell = (c, t, withQ) => { const v = cnt[c][t] || 0; return `<td>${v || '–'}${withQ && v ? `<br><small>Q${qlist(c, t)}</small>` : ''}</td>`; };
  const span = (arr) => `Q${Math.min(...arr)}–${Math.max(...arr)}`;
  const weightTable = (withQ) => `<table>
<tr><th rowspan="2">Chapter</th><th colspan="2">Part A · 1 mark</th><th>Part B</th><th>Part C</th><th>Part D</th><th rowspan="2">Total<br>questions</th><th rowspan="2">Marks<br>set</th><th rowspan="2">Marks to<br>answer</th></tr>
<tr><th>I · MCQ${withQ ? `<br><small>${span(rng('mcq'))}</small>` : ''}</th><th>II · Fill in${withQ ? `<br><small>${span(rng('fib'))}</small>` : ''}</th><th>III · 2 marks${withQ ? `<br><small>${span(rng('B'))}</small>` : ''}</th><th>IV · 3 marks${withQ ? `<br><small>${span(rng('C'))}</small>` : ''}</th><th>V · 5 marks${withQ ? `<br><small>${span(rng('D'))}</small>` : ''}</th></tr>
<tr><td class="l"><b>Ch 9</b> Biomolecules</td>${['mcq', 'fib', 'B', 'C', 'D'].map(t => cell(9, t, withQ)).join('')}<td>${P.mcq.length + P.fib.length + P.D.ids.length}</td><td>${S.ch9Set}</td><td><b>${S.ch9Ans}</b></td></tr>
<tr><td class="l"><b>Ch 14</b> Breathing and Exchange of Gases</td>${['mcq', 'fib', 'B', 'C', 'D'].map(t => cell(14, t, withQ)).join('')}<td>${P.B.ids.length + P.C.ids.length}</td><td>${S.ch14Set}</td><td><b>${S.ch14Ans}</b></td></tr>
<tr><th class="l">Questions set</th><th>${P.mcq.length}</th><th>${P.fib.length}</th><th>${P.B.ids.length}</th><th>${P.C.ids.length}</th><th>${P.D.ids.length}</th><th>${order(cfg).length}</th><th>${S.totalSet}</th><th>${S.totalAns}</th></tr>
<tr><th class="l">To answer</th><th>all ${P.mcq.length}</th><th>all ${P.fib.length}</th><th>any ${P.B.n} of ${P.B.ids.length}</th><th>any ${P.C.n} of ${P.C.ids.length}</th><th>any ${P.D.n} of ${P.D.ids.length}</th><th colspan="3">${S.totalAns} marks</th></tr>
</table>`;
  const officialTable = `<table>
<tr><th class="l">Chapter (official I PUC Blue Print 2026-27)</th><th>Teaching hours</th><th>Marks weightage</th><th>1 mark<br>(MCQ &amp; FB)</th><th>2 marks<br>(SA)</th><th>3 marks<br>(SA)</th><th>5 marks<br>(LA)</th><th>Marks in this test</th></tr>
<tr><td class="l">9. Biomolecules</td><td>7</td><td>6</td><td>1</td><td>*</td><td>*</td><td>1</td><td><b>${S.ch9Ans}</b> (1-mark + 5-mark only)</td></tr>
<tr><td class="l">14. Breathing and exchange of gases</td><td>6</td><td>5</td><td>*</td><td>1</td><td>1</td><td>*</td><td><b>${S.ch14Ans}</b> (2-mark + 3-mark only)</td></tr>
</table>`;
  const design = `<table>
<tr><th>Part</th><th class="l">Type of question</th><th>Chapter</th><th>Marks each</th><th>Questions set</th><th>To answer</th><th>Marks</th></tr>
<tr><td rowspan="2">A</td><td class="l">I. Multiple choice questions</td><td>Ch 9</td><td>1</td><td>${P.mcq.length}</td><td>all</td><td>${P.mcq.length}</td></tr>
<tr><td class="l">II. Fill in the blanks (choose from the words given)</td><td>Ch 9</td><td>1</td><td>${P.fib.length}</td><td>all</td><td>${P.fib.length}</td></tr>
<tr><td>B</td><td class="l">III. Short answer (3–5 sentences)</td><td>Ch 14</td><td>2</td><td>${P.B.ids.length}</td><td>any ${P.B.n}</td><td>${P.B.n * 2}</td></tr>
<tr><td>C</td><td class="l">IV. Short answer (40–80 words)</td><td>Ch 14</td><td>3</td><td>${P.C.ids.length}</td><td>any ${P.C.n}</td><td>${P.C.n * 3}</td></tr>
<tr><td>D</td><td class="l">V. Long answer (200–250 words)</td><td>Ch 9</td><td>5</td><td>${P.D.ids.length}</td><td>any ${P.D.n}</td><td>${P.D.n * 5}</td></tr>
<tr><th></th><th class="l">Total</th><th></th><th></th><th>${order(cfg).length}</th><th></th><th>${S.totalAns}</th></tr>
</table>`;

  /* ---- answer key ---- */
  const ids = order(cfg), half = Math.ceil(ids.length / 2), srcRows = [];
  const M = (id) => cfg.monthlyIds && cfg.monthlyIds.includes(id) ? '<sup>M</sup>' : '';
  for (let i = 0; i < half; i++) { const a = Q[ids[i]], b = Q[ids[i + half]];
    const c = (q) => q ? `<td>${N[q.id]}</td><td class="l">Ch ${q.ch} · ${q.ref}${M(q.id)}</td><td>${q.lv}</td><td>${q.pg}</td>` : '<td></td><td></td><td></td><td></td>';
    srcRows.push(`<tr>${c(a)}${c(b)}</tr>`); }
  const one = [...P.mcq, ...P.fib].map(id => Q[id]);
  const keyRows = []; for (let i = 0; i < one.length; i += 6) { const row = one.slice(i, i + 6);
    keyRows.push(`<tr>${row.map(q => `<th>Q${N[q.id]}</th>`).join('')}${'<th></th>'.repeat(6 - row.length)}</tr><tr>${row.map(q => `<td>${q.t === 'mcq' ? `${'abcd'[q.a]}) ${esc(q.o[q.a])}` : esc(q.a)}</td>`).join('')}${'<td></td>'.repeat(6 - row.length)}</tr>`); }
  const fmtPts = (v) => v === 0.5 ? '½' : String(v);
  const long = (t, mk) => (P[t].ids).map(id => { const q = Q[id];
    return `<div class="ka"><span class="qq">${N[id]}. ${esc(q.q)}</span>${q.m}${q.img && cfg.keyImages ? `<div class="fig"><img src="data:image/jpeg;base64,${fs.readFileSync(path.join(ROOT, q.img)).toString('base64')}"></div>` : ''}
<div class="sch"><b>SCHEME OF VALUATION (${mk} marks):</b> ${q.p.map(p => `${esc(p[0])} <span class="pts">${fmtPts(p[1])}</span>`).join(' · ')}</div></div>`; }).join('\n');
  const key = doc(`${header('Answer Key &amp; Scheme of Valuation')}
<h2>Blueprint (as per the official I PUC Blue Print 2026-27)</h2>
<p class="note">${BP_NOTE}</p>
${weightTable(true)}
${officialTable}
<h2>Source of each question in the Question Bank</h2>
<table><tr><th>Q</th><th>Question bank reference</th><th>Level</th><th>NCERT page</th><th>Q</th><th>Question bank reference</th><th>Level</th><th>NCERT page</th></tr>
${srcRows.join('\n')}</table>
<p class="note">All ${ids.length} questions are taken from the official <b>I PUC Biology Question Bank 2026-27</b> (Department of School Education, Karnataka). ${cfg.keyNote || ''} "${cfg.extraWord}" in the word box is the extra word and is not an answer. Page numbers follow the question bank (current NCERT Class XI book).</p>
<div style="break-inside:avoid"><h2>Part A: Answer key (1 mark each)</h2>
<table>${keyRows.join('\n')}</table>
<p class="note">${one.map(q => `Q${N[q.id]}: ${esc(q.e)}`).join(' ')}</p></div>
<h2>Part B: 2 marks each (any ${WORD[P.B.n].toLowerCase()})</h2>
${long('B', 2)}
<h2>Part C: 3 marks each (any ${WORD[P.C.n].toLowerCase()})</h2>
${long('C', 3)}
<h2>Part D: 5 marks (any ${WORD[P.D.n].toLowerCase()})</h2>
${long('D', 5)}
<p class="note" style="margin-top:10px">Answers are from the current NCERT Class XI Biology text (Chapters 9 and 14); page numbers follow the question bank.</p>`);

  /* ---- blueprint sheet ---- */
  const bp = doc(`${header('Blueprint')}
<p class="note">${BP_NOTE} All questions are taken from the official <b>I PUC Biology Question Bank 2026-27</b>.</p>
<h2>Chapter pattern in the official I PUC Blue Print 2026-27</h2>
${officialTable}
<h2>Chapter-wise weightage of this test (number of questions)</h2>
${weightTable(false)}
<h2>Question paper design</h2>
${design}
<p class="note" style="margin-top:10px"><b>How to prepare:</b> for <b>Biomolecules</b>, practise one-mark questions (MCQs and fill-ups) from the question bank and the long answers on enzymes and proteins (classes of enzymes, functions of proteins). For <b>Breathing and Exchange of Gases</b>, practise the 2-mark and 3-mark short answers: respiratory volumes and capacities, partial pressures, disorders, mechanism of breathing and transport of oxygen.</p>`);

  return {paper, key, bp, N, S};
}

async function writePdfs(cfg, built){
  const {chromium} = require('playwright');
  const b = await chromium.launch();
  for (const [name, html, m] of [[cfg.base, built.paper, '11mm'], [cfg.base + '-answer-key', built.key, '11mm'], [cfg.base + '-blueprint', built.bp, '12mm']]) {
    const p = await b.newPage();
    await p.setContent(html, {waitUntil: 'load'});
    await p.pdf({path: path.join(OUT, name + '.pdf'), format: 'A4', printBackground: true, margin: {top: m, bottom: '10mm', left: '15mm', right: '15mm'}});
    await p.close();
    console.log('wrote', name + '.pdf');
  }
  await b.close();
}

module.exports = {Q, CH, IMG, build, writePdfs, stats, numbers, order, ROOT};
