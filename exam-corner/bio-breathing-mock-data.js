/* I PUC Biology · Monthly-test mock (30 marks): Ch 9 Biomolecules and Ch 14 Breathing and Exchange of Gases.
   Same questions, in the same order, as biology-i-puc-mock-test-biomolecules-and-breathing-30m.pdf
   (built by scripts/class-tests/mock-biomolecules-breathing.js): all 15 questions of the 20-mark monthly test,
   shuffled, plus 5 more. Every question is from the official I PUC Biology Question Bank 2026-27; answers follow
   the current NCERT text.
   Pattern: Part A 6 MCQ + 4 fill-ups (10) · Part B any 3 of 4 × 2 (6) · Part C any 3 of 4 × 3 (9)
            · Part D any 1 of 2 × 5 (5) = 30. Used by biomolecules-breathing-mock-practice.html. */
window.MT = {
 chapters: ['','','','','','','','','','Biomolecules','','','','','Breathing and Exchange of Gases'],
 page: ['','','','','','','','','','pu1-ch9.html','','','','',''],
 marks: [0,0,0,0,0,0,0,0,0,22,0,0,0,0,18],

 /* ---------- Part A · I. MCQs (6) ---------- */
 mcq: [
  {ch:14,q:'What is the percentage of O₂ transported by RBCs in the blood?',o:['90%','98%','100%','97%'],a:3,e:'About 97 per cent of O₂ is transported by RBCs in the blood; the remaining 3 per cent is carried in a dissolved state through the plasma.'},
  {ch:9,q:'Which of the following is a neutral amino acid?',o:['Glutamic acid','Lysine','Aspartic acid','Valine'],a:3,e:'Based on the number of amino and carboxyl groups, amino acids are acidic (e.g. glutamic acid), basic (lysine) or neutral (valine).'},
  {ch:14,q:'Emphysema is a chronic respiratory disorder, in which the organ affected is',o:['Alveolar walls','Bronchi','Bronchioles','Pleural membrane'],a:0,e:'Emphysema is a chronic disorder in which the alveolar walls are damaged, so the respiratory surface decreases. One of its major causes is cigarette smoking.'},
  {ch:9,q:'When the enzyme succinic dehydrogenase is added to a mixture of the substrates malonate and succinate, the rate of enzyme activity declines because of',o:['Increase in pH','Decrease in pH','Decrease in concentration of substrate','Competitive inhibition'],a:3,e:'Malonate closely resembles the substrate succinate in structure and competes with it for the substrate-binding site of succinic dehydrogenase: competitive inhibition.'},
  {ch:9,q:'The most abundant protein in the whole biosphere is',o:['Collagen','Chitin','RuBisCO','Insulin'],a:2,e:'RuBisCO (Ribulose bisphosphate Carboxylase-Oxygenase) is the most abundant protein in the whole biosphere; collagen is the most abundant protein in the animal world.'},
  {ch:9,q:'Fatty acid and glycerol react to form lipids. The chemical reaction involved is called',o:['Neutralization','Reduction','Oxidation','Esterification'],a:3,e:'In lipids the fatty acids are found esterified with glycerol, giving monoglycerides, diglycerides and triglycerides.'}
 ],

 /* ---------- Part A · II. Fill in the blanks (4) ---------- */
 fibWords: ['Alveoli','Carbamino-haemoglobin','Cellulose','Larynx','Tidal volume'],
 fib: [
  {ch:14,q:'The volume of air inspired or expired during a normal respiration is ______.',a:'Tidal volume',e:'Tidal volume (TV) is about 500 mL; a healthy man can inspire or expire about 6000 to 8000 mL of air per minute.'},
  {ch:14,q:'CO₂ is carried by haemoglobin as ______.',a:'Carbamino-haemoglobin',e:'About 20–25 per cent of CO₂ is carried by haemoglobin as carbamino-haemoglobin; about 70 per cent is carried as bicarbonate.'},
  {ch:9,q:'Chemically, the cotton fibre is composed of ______.',a:'Cellulose',e:'Cotton fibre is cellulose, a homopolymer of glucose; plant cell walls are also made of cellulose.'},
  {ch:14,q:'______ are the primary sites of exchange of gases.',a:'Alveoli',e:'Alveoli are the primary sites of exchange of gases; exchange also occurs between blood and tissues. (Larynx is the extra word.)'}
 ],

 /* ---------- Part B · 2 marks, any 3 of 4 ---------- */
 B: [
  {id:'B1',ch:14,q:'Differentiate between vital capacity and total lung capacity.',
   p:[['Vital capacity: maximum air breathed in after a forced expiration (or out after a forced inspiration); VC = ERV + TV + IRV, excludes RV',1],['Total lung capacity: total air in the lungs at the end of a forced inspiration; TLC = RV + ERV + TV + IRV = VC + RV',1]],
   m:'<ul><li><b>Vital capacity (VC):</b> the maximum volume of air a person can breathe in after a forced expiration, or breathe out after a forced inspiration. It includes ERV, TV and IRV (<b>VC = ERV + TV + IRV</b>) and does not include the residual volume.</li><li><b>Total lung capacity (TLC):</b> the total volume of air accommodated in the lungs at the end of a forced inspiration. It includes RV, ERV, TV and IRV, i.e. <b>TLC = VC + RV</b>.</li></ul>'},
  {id:'B2',ch:9,q:'Mention the four structures formed by folding of protein chain to become functional.',
   p:[['Primary: sequence of amino acids from the N-terminal to the C-terminal amino acid',0.5],['Secondary: thread folded as a helix (right-handed) or other forms, e.g. α-helix, β-pleated sheet',0.5],['Tertiary: long chain folded upon itself like a hollow woollen ball, giving a 3-D view',0.5],['Quaternary: arrangement of more than one polypeptide or subunit, e.g. haemoglobin (2 α + 2 β)',0.5]],
   m:'<ul><li><b>Primary structure:</b> the sequence of amino acids (positional information) from the N-terminal to the C-terminal amino acid.</li><li><b>Secondary structure:</b> portions of the protein thread folded in the form of a helix (only right-handed helices in proteins) and other forms.</li><li><b>Tertiary structure:</b> the long protein chain folded upon itself like a hollow woollen ball, giving a 3-dimensional view; necessary for many biological activities.</li><li><b>Quaternary structure:</b> the arrangement of more than one polypeptide or subunit with respect to each other, e.g. adult human haemoglobin with 2 α and 2 β subunits.</li></ul><p class="hint">Only the four names without features: 1 mark.</p>'},
  {id:'B3',ch:9,q:'What is activation energy? How does it vary with or without enzyme?',
   p:[['Activation energy: difference in average energy content of the substrate S from that of the transition state',1],['Without enzyme it is high; enzymes bring down this energy barrier, so the reaction is faster',1]],
   m:'<ul><li>During a reaction the substrate S has to pass through a much higher energy state, the <b>transition state</b>. The difference in average energy content of S from that of this transition state is called <b>activation energy</b>.</li><li><b>Without enzyme</b> the activation energy is high; <b>with enzyme</b> it is much lower, because enzymes bring down this energy barrier and make the transition of S to P easier, so the rate of the reaction increases greatly (NCERT Fig. 9.4).</li></ul>',img:'exam-corner/diagrams/ncert-activation-energy-fig9-4.jpg'},
  {id:'B4',ch:9,q:'Give an example of a) Homopolysaccharides b) Heteropolysaccharides.',
   p:[['Homopolysaccharide (one type of monosaccharide): cellulose, starch, glycogen or inulin',1],['Heteropolysaccharide (more than one type): e.g. hyaluronic acid, heparin, peptidoglycan',1]],
   m:'<ul><li><b>a) Homopolysaccharides</b> (made of only one type of monosaccharide): <b>cellulose</b>, <b>starch</b> or <b>glycogen</b> (all made of glucose); <b>inulin</b> (a polymer of fructose).</li><li><b>b) Heteropolysaccharides</b> (made of more than one type of monosaccharide or sugar derivative): e.g. <b>hyaluronic acid</b>, <b>heparin</b>, <b>peptidoglycan</b> (bacterial cell wall).</li></ul><p class="hint">Chitin is mostly a homopolymer, so it is not an example for (b).</p>'}
 ],

 /* ---------- Part C · 3 marks, any 3 of 4 ---------- */
 C: [
  {id:'C1',ch:14,q:'Explain the mechanism of breathing.',
   p:[['Two stages; pressure gradient: inspiration when intra-pulmonary pressure < atmospheric, expiration when it is higher; diaphragm and intercostal muscles create it',1],['Inspiration: diaphragm and external intercostal muscles contract; thoracic and pulmonary volume increase; pressure falls; air moves in',1],['Expiration: muscles relax; thoracic and pulmonary volume decrease; pressure rises above atmospheric; air is expelled',1]],
   m:'<ul><li>Breathing has two stages, <b>inspiration</b> and <b>expiration</b>, brought about by a pressure gradient between the lungs and the atmosphere: inspiration when the intra-pulmonary pressure is <b>less</b> than the atmospheric pressure, expiration when it is <b>higher</b>. The diaphragm and the external and internal intercostal muscles generate these gradients.</li><li><b>Inspiration:</b> the diaphragm contracts (volume of the thoracic chamber increases in the antero-posterior axis) and the external intercostal muscles contract, lifting the ribs and sternum (volume increases in the dorso-ventral axis). Pulmonary volume increases, intra-pulmonary pressure falls below atmospheric and air moves into the lungs.</li><li><b>Expiration:</b> the diaphragm and intercostal muscles relax, returning the diaphragm and sternum to normal. Thoracic and pulmonary volumes decrease, intra-pulmonary pressure rises slightly above atmospheric and air is expelled. Abdominal muscles can increase the strength of breathing; a healthy human breathes 12–16 times per minute.</li></ul>'},
  {id:'C2',ch:9,q:'Mention the three types of co-factors associated with enzymes.',
   p:[['Prosthetic groups: organic, tightly bound to the apoenzyme, e.g. haem in peroxidase and catalase',1],['Co-enzymes: organic, only transiently bound during catalysis; often vitamins, e.g. NAD/NADP contain niacin',1],['Metal ions: coordination bonds at the active site, e.g. zinc for carboxypeptidase',1]],
   m:'<p>Co-factors are non-protein constituents bound to the enzyme (the protein part is the <b>apoenzyme</b>) to make it catalytically active.</p><ul><li><b>Prosthetic groups:</b> organic compounds <b>tightly bound</b> to the apoenzyme, e.g. <b>haem</b> in peroxidase and catalase (part of the active site).</li><li><b>Co-enzymes:</b> organic compounds whose association with the apoenzyme is only <b>transient</b>, during catalysis; many contain vitamins, e.g. <b>NAD and NADP</b> contain the vitamin niacin.</li><li><b>Metal ions:</b> form coordination bonds with side chains at the active site and with the substrate, e.g. <b>zinc</b> for the proteolytic enzyme carboxypeptidase.</li></ul><p class="hint">Catalytic activity is lost when the co-factor is removed.</p>'},
  {id:'C3',ch:14,q:'Describe the role of haemoglobin in oxygen transport.',
   p:[['Haemoglobin (iron-containing pigment of RBCs) binds O₂ reversibly as oxyhaemoglobin; each molecule carries up to 4 O₂',1],['Binding depends mainly on pO₂ (also pCO₂, H⁺, temperature); sigmoid oxygen dissociation curve',1],['Alveoli favour formation, tissues favour dissociation; 100 ml blood delivers about 5 ml O₂',1]],
   m:'<ul><li>Haemoglobin is a red, iron-containing pigment in the RBCs; about 97% of O₂ is transported by RBCs. O₂ binds with haemoglobin in a reversible manner to form <b>oxyhaemoglobin</b>; each haemoglobin molecule can carry a maximum of <b>four molecules of O₂</b>.</li><li>Binding is primarily related to the <b>partial pressure of O₂</b>; pCO₂, H⁺ concentration and temperature also interfere. Plotting percentage saturation of haemoglobin against pO₂ gives a sigmoid curve, the <b>oxygen dissociation curve</b> (NCERT Fig. 14.5).</li><li>In the <b>alveoli</b> (high pO₂, low pCO₂, less H⁺, lower temperature) oxyhaemoglobin is formed; in the <b>tissues</b> (low pO₂, high pCO₂, high H⁺, higher temperature) O₂ dissociates from it. Every 100 ml of oxygenated blood delivers about <b>5 ml of O₂</b> to the tissues.</li></ul>',img:'exam-corner/diagrams/ncert-o2-dissociation-curve-fig14-5.jpg'},
  {id:'C4',ch:9,q:'What are nucleotides? Mention the 5 types of nucleotides that make nucleic acids.',
   p:[['Nucleotide = nitrogen base + pentose sugar + phosphate (a nucleoside with a phosphate esterified to the sugar)',1],['Five types: adenylic, guanylic, cytidylic, thymidylic and uridylic acid (½ each for any four)',2]],
   m:'<ul><li>When a nitrogen base (adenine, guanine, cytosine, uracil or thymine) is attached to a sugar it is a <b>nucleoside</b>; if a <b>phosphate group</b> is also esterified to the sugar, it is a <b>nucleotide</b> (nitrogen base + pentose sugar + phosphate). Nucleic acids like DNA and RNA consist of nucleotides only.</li><li><b>Five types:</b> adenylic acid, guanylic acid, cytidylic acid, thymidylic acid and uridylic acid.</li></ul>'}
 ],

 /* ---------- Part D · 5 marks, any 1 of 2 ---------- */
 D: [
  {id:'D1',ch:14,q:'Draw a neat labelled diagrammatic view of the human respiratory system.',img:'exam-corner/diagrams/ncert-human-respiratory-system-fig14-1.jpg',
   labels:['Epiglottis','Larynx','Trachea','Bronchus','Bronchiole','Alveoli','Lung','Pleural membranes','Pleural fluid','Diaphragm','Heart','Cut end of rib'],
   p:[['Neat, proportionate diagram: trachea dividing into two bronchi, both lungs, bronchial tree and alveoli, dome-shaped diaphragm',2],['Any six correct labels (½ mark each)',3]],
   m:'<p>Draw NCERT Figure 14.1 (sectional view of the left lung): the trachea dividing into two primary bronchi, the two lungs in the thoracic cavity with the bronchial tree and alveoli shown in one lung, the heart between the lungs and the dome-shaped diaphragm below. Point each label with a clear line.</p>'},
  {id:'D2',ch:9,q:'Classify the various classes of enzymes based on the type of reaction they catalyse.',
   p:[['Oxidoreductases/dehydrogenases: oxidoreduction between two substrates S and S′',1],['Transferases: transfer of a group G (other than hydrogen) between a pair of substrates',1],['Hydrolases: hydrolysis of ester, ether, peptide, glycosidic, C–C, C–halide or P–N bonds',1],['Lyases: removal of groups by mechanisms other than hydrolysis, leaving double bonds',1],['Isomerases (inter-conversion of optical, geometric or positional isomers) or Ligases (linking together of 2 compounds)',1]],
   m:'<p>Enzymes are divided into <b>6 classes</b>, each with 4–13 subclasses, based on the type of reaction they catalyse:</p><ul><li><b>Oxidoreductases / dehydrogenases:</b> oxidoreduction between two substrates S and S′: S<sub>reduced</sub> + S′<sub>oxidised</sub> → S<sub>oxidised</sub> + S′<sub>reduced</sub>.</li><li><b>Transferases:</b> transfer of a group G (other than hydrogen) between a pair of substrates: S–G + S′ → S + S′–G.</li><li><b>Hydrolases:</b> hydrolysis of ester, ether, peptide, glycosidic, C–C, C–halide or P–N bonds.</li><li><b>Lyases:</b> removal of groups from substrates by mechanisms other than hydrolysis, leaving double bonds.</li><li><b>Isomerases:</b> inter-conversion of optical, geometric or positional isomers.</li><li><b>Ligases:</b> linking together of 2 compounds, e.g. joining of C–O, C–S, C–N, P–O bonds.</li></ul><p class="hint">Any five classes with the correct reaction: 1 mark each.</p>'}
 ],
 D2: [],

 /* ---------- diagrams to master ---------- */
 diagrams: [
  {t:'Human respiratory system (NCERT Fig. 14.1)',ch:14,img:'exam-corner/diagrams/ncert-human-respiratory-system-fig14-1.jpg',labels:['Epiglottis','Larynx','Trachea','Bronchus','Bronchiole','Alveoli','Lung','Pleural membranes','Pleural fluid','Diaphragm','Heart','Cut end of rib']},
  {t:'Oxygen dissociation curve (NCERT Fig. 14.5)',ch:14,img:'exam-corner/diagrams/ncert-o2-dissociation-curve-fig14-5.jpg',labels:['X-axis: partial pressure of oxygen (mm Hg)','Y-axis: percentage saturation of haemoglobin with oxygen','Sigmoid (S-shaped) curve','Scale 0–100 on both axes']},
  {t:'Concept of activation energy (NCERT Fig. 9.4)',ch:9,img:'exam-corner/diagrams/ncert-activation-energy-fig9-4.jpg',labels:['Y-axis: potential energy','X-axis: progress of reaction','Substrate (S)','Product (P)','Transition state','Activation energy without enzyme','Activation energy with enzyme']}
 ]
};
