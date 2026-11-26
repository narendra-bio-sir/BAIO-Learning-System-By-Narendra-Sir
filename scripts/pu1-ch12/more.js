/* PU-I Ch12 — Respiration in Plants: KCET practice, descriptive questions, board important, glossary,
   tree, compare matrix, study tips and the Important Diagrams list. Built into pu1-ch12.html by build.js. */
const E='Easy', M='Medium', H='Hard';

/* ---------- KCET: [format, difficulty, q, [correct, ...wrong], explanation, colA?, colB?] ---------- */
const kcet = {
  'breathe': [
    ['recall',E,'Plants exchange gases mainly through:',['Stomata and lenticels','Lungs','Gills','Spiracles'],'No special respiratory organs.'],
    ['recall',M,'The energy released in respiration is trapped as:',['ATP','Heat only','Light','Glucose'],'Energy currency.'],
    ['recall',M,'Respiration in eukaryotic cells takes place in the:',['Cytoplasm and mitochondria','Chloroplast','Nucleus','Ribosomes'],'Glycolysis + mitochondria.'],
    ['matching',M,'Match Column I with Column II:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'Lenticels in bark; stomata in leaves.',['A. Lenticels','B. Stomata'],['i. Openings in leaf epidermis','ii. Openings in bark of woody stems']],
    ['statement',H,'Which of the following is/are correct?\n(i) Plants respire at rates lower than animals\n(ii) Interior cells of woody stems are living\n(iii) Each plant part handles its own gas exchange',['(i) and (iii) only','(ii) only','(i), (ii) and (iii)','(ii) and (iii) only'],'Interior cells are dead.'],
    ['recall',M,'Complete combustion of glucose releases energy mostly as:',['Heat','ATP','NADH','Light'],'Hence step-wise oxidation in cells.'],
    ['diagram',M,'In a woody stem, the living cells that respire are found:',['In thin layers beneath the bark','At the centre of the stem','In dead xylem','In the pith only'],'Near lenticels.'],
    ['diagram',M,'In a leaf, the network of air spaces is formed by:',['Loosely packed parenchyma','Compact epidermis','Xylem vessels','Cuticle'],'Spongy parenchyma.']
  ],
  'glycolysis': [
    ['recall',E,'Glycolysis takes place in the:',['Cytoplasm','Mitochondrial matrix','Chloroplast','Nucleus'],'Cytoplasmic pathway.'],
    ['recall',M,'The EMP pathway is another name for:',['Glycolysis','Krebs&rsquo; cycle','ETS','Calvin cycle'],'Embden, Meyerhof, Parnas.'],
    ['recall',M,'Net ATP gained in glycolysis per glucose:',['2','4','8','38'],'4 made, 2 used.'],
    ['matching',M,'Match Column I with Column II:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'Hexokinase phosphorylates glucose; invertase splits sucrose.',['A. Hexokinase','B. Invertase'],['i. Sucrose &rarr; glucose + fructose','ii. Glucose &rarr; glucose-6-phosphate']],
    ['statement',H,'Which of the following is/are correct about glycolysis?\n(i) It has 10 reactions\n(ii) It releases CO<sub>2</sub>\n(iii) NADH is formed when PGAL &rarr; BPGA',['(i) and (iii) only','(ii) only','(i), (ii) and (iii)','(i) and (ii) only'],'No CO<sub>2</sub> is released in glycolysis.'],
    ['recall',M,'ATP is formed in glycolysis during conversion of:',['PEP to pyruvic acid','Glucose to glucose-6-phosphate','F-6-P to F-1,6-BP','PGAL to BPGA'],'Substrate-level phosphorylation.'],
    ['diagram',M,'In the glycolysis flow chart, the 6C sugar that splits into two 3C sugars is:',['Fructose 1,6-bisphosphate','Glucose-6-phosphate','Fructose-6-phosphate','PEP'],'Splitting step.'],
    ['diagram',H,'In the glycolysis diagram, H<sub>2</sub>O is shown leaving at the step:',['2-phosphoglycerate &rarr; PEP','PGAL &rarr; BPGA','Glucose &rarr; G-6-P','PEP &rarr; pyruvate'],'Dehydration.']
  ],
  'fermentation': [
    ['recall',E,'Products of alcoholic fermentation:',['Ethanol and CO<sub>2</sub>','Lactic acid','Acetyl CoA and CO<sub>2</sub>','Water and CO<sub>2</sub>'],'Yeast.'],
    ['recall',M,'Lactate dehydrogenase converts:',['Pyruvic acid to lactic acid','Pyruvic acid to ethanol','Glucose to pyruvate','Lactic acid to glucose'],'Muscles, some bacteria.'],
    ['recall',M,'Yeasts die when alcohol concentration reaches about:',['13%','3%','30%','60%'],'NCERT.'],
    ['matching',M,'Match Column I with Column II:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'Yeast: alcohol; muscle: lactic acid.',['A. Yeast','B. Muscle cells'],['i. Lactic acid','ii. Ethanol + CO<sub>2</sub>']],
    ['statement',H,'Which of the following is/are correct?\n(i) Fermentation releases less than 7% of glucose energy\n(ii) Lactic acid fermentation releases CO<sub>2</sub>\n(iii) NADH is reoxidised to NAD<sup>+</sup> in fermentation',['(i) and (iii) only','(ii) only','(i), (ii) and (iii)','(ii) and (iii) only'],'No CO<sub>2</sub> in lactic acid fermentation.'],
    ['recall',M,'Net ATP per glucose in fermentation:',['2','36','38','4'],'From glycolysis.'],
    ['diagram',M,'In the NCERT figure of anaerobic pathways, the branch giving ethanol also releases:',['CO<sub>2</sub>','O<sub>2</sub>','Lactic acid','ATP'],'Decarboxylation.'],
    ['diagram',M,'In the same figure, NADH + H<sup>+</sup> is converted to NAD<sup>+</sup> when pyruvic acid forms:',['Lactic acid or ethanol','Acetyl CoA','Citric acid','Glucose'],'Both branches.']
  ],
  'krebs': [
    ['recall',E,'The Krebs&rsquo; cycle occurs in the:',['Mitochondrial matrix','Cytoplasm','Inner membrane','Chloroplast'],'Matrix.'],
    ['recall',M,'Acetyl CoA combines with oxaloacetic acid to form:',['Citric acid','Malic acid','&alpha;-Ketoglutaric acid','Succinic acid'],'Citrate synthase.'],
    ['recall',M,'GTP is formed in the TCA cycle when:',['Succinyl-CoA &rarr; succinic acid','Citrate &rarr; isocitrate','Malate &rarr; OAA','OAA &rarr; citrate'],'Substrate-level phosphorylation.'],
    ['matching',M,'Match Column I with Column II:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'Citric acid is 6C; &alpha;-ketoglutaric acid is 5C.',['A. Citric acid','B. &alpha;-Ketoglutaric acid'],['i. 5 carbon','ii. 6 carbon']],
    ['statement',H,'Which of the following is/are correct?\n(i) 3 NADH are formed per turn\n(ii) O<sub>2</sub> is used directly in the cycle\n(iii) 1 FADH<sub>2</sub> is formed per turn',['(i) and (iii) only','(ii) only','(i), (ii) and (iii)','(i) and (ii) only'],'O<sub>2</sub> is used only in the ETS.'],
    ['recall',M,'Pyruvate dehydrogenase needs:',['NAD<sup>+</sup>, CoA and Mg<sup>2+</sup>','NADP<sup>+</sup> and light','FAD only','O<sub>2</sub> only'],'Link reaction.'],
    ['diagram',M,'In the citric acid cycle diagram, CO<sub>2</sub> is shown leaving after:',['Citric acid and &alpha;-ketoglutaric acid','Malic acid and OAA','Succinic acid and malic acid','OAA only'],'Two decarboxylations.'],
    ['diagram',H,'In the citric acid cycle diagram, FADH<sub>2</sub> is shown forming between:',['Succinic acid and malic acid','Citric acid and &alpha;-ketoglutaric acid','Pyruvate and acetyl CoA','Malic acid and OAA'],'Succinate oxidation.']
  ],
  'ets': [
    ['recall',E,'The ETS is present in the:',['Inner mitochondrial membrane','Matrix','Outer membrane','Cytoplasm'],'NCERT.'],
    ['recall',M,'The final electron acceptor of the ETS is:',['O<sub>2</sub>','NAD<sup>+</sup>','Cytochrome c','Ubiquinone'],'Forms water.'],
    ['recall',M,'Number of ATP from one FADH<sub>2</sub>:',['2','3','1','4'],'NCERT.'],
    ['matching',M,'Match Column I with Column II:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'Complex I: NADH dehydrogenase; Complex IV: cytochrome c oxidase.',['A. Complex I','B. Complex IV'],['i. Cytochrome c oxidase','ii. NADH dehydrogenase']],
    ['statement',H,'Which of the following is/are correct?\n(i) Cytochrome c is a mobile carrier\n(ii) F<sub>0</sub> is the ATP-making headpiece\n(iii) 4H<sup>+</sup> pass through F<sub>0</sub> per ATP',['(i) and (iii) only','(ii) only','(i), (ii) and (iii)','(ii) and (iii) only'],'F<sub>1</sub> is the headpiece.'],
    ['recall',M,'Complex V of the ETS is:',['ATP synthase','Cytochrome bc<sub>1</sub>','Ubiquinone','NADH dehydrogenase'],'NCERT.'],
    ['diagram',M,'In the ETS diagram, H<sup>+</sup> flows back into the matrix through:',['F<sub>0</sub> of ATP synthase','Complex I','Cytochrome c','Ubiquinone'],'Proton channel.'],
    ['diagram',H,'In the ETS diagram, succinate &rarr; fumarate is shown at:',['Complex II','Complex I','Complex III','Complex IV'],'Succinate dehydrogenase.']
  ],
  'balance': [
    ['recall',E,'Net ATP per glucose in aerobic respiration (NCERT):',['38','36','2','12'],'NCERT.'],
    ['recall',M,'The balance sheet assumes that:',['Only glucose is respired','Pathways run together','Intermediates are withdrawn','Fats are respired'],'Assumption.'],
    ['recall',M,'ATP made through ETS per glucose:',['34','4','38','24'],'38 &minus; 4.'],
    ['matching',M,'Match Column I with Column II:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'Glycolysis 8 ATP; Krebs&rsquo; 24 ATP (with coenzymes).',['A. Glycolysis','B. Krebs&rsquo; cycle'],['i. 24 ATP','ii. 8 ATP']],
    ['statement',H,'Which of the following is/are correct?\n(i) Balance sheet is theoretical\n(ii) Fermentation gives 38 ATP\n(iii) NADH oxidation is vigorous in aerobic respiration',['(i) and (iii) only','(ii) only','(i), (ii) and (iii)','(ii) and (iii) only'],'Fermentation gives 2.'],
    ['recall',M,'Total NADH formed per glucose:',['10','8','6','2'],'2 + 2 + 6.'],
    ['diagram',M,'In an ATP balance table, the stage giving 6 ATP is:',['Link reaction','Glycolysis','Krebs&rsquo; cycle','ETS'],'2 NADH.'],
    ['diagram',H,'In an ATP balance table, the total of the ETS column is:',['34','30','4','38'],'30 (NADH) + 4 (FADH<sub>2</sub>).']
  ],
  'amphibolic': [
    ['recall',E,'Glycerol enters respiration as:',['PGAL','Acetyl CoA','OAA','Glucose'],'NCERT.'],
    ['recall',M,'Fatty acids enter respiration as:',['Acetyl CoA','PGAL','Pyruvate','Glucose'],'NCERT.'],
    ['recall',M,'Respiratory pathway involved in both anabolism and catabolism is:',['Amphibolic','Catabolic','Anabolic','Photolytic'],'NCERT.'],
    ['matching',M,'Match Column I with Column II:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'Catabolism breaks; anabolism builds.',['A. Catabolism','B. Anabolism'],['i. Synthesis','ii. Breakdown']],
    ['statement',H,'Which of the following is/are correct?\n(i) Amino acids are deaminated before entering respiration\n(ii) Fats enter at the first step of glycolysis\n(iii) Acetyl CoA is withdrawn for fatty acid synthesis',['(i) and (iii) only','(ii) only','(i), (ii) and (iii)','(i) and (ii) only'],'Fats enter as PGAL and acetyl CoA.'],
    ['recall',M,'Proteins are broken into amino acids by:',['Proteases','Lipases','Amylases','Invertase'],'NCERT.'],
    ['diagram',M,'In NCERT Fig. 12.6, fatty acids join the pathway at:',['Acetyl CoA','Glucose-6-phosphate','PGAL','Pyruvic acid'],'Interrelationship figure.'],
    ['diagram',H,'In NCERT Fig. 12.6, amino acids join the pathway at:',['Pyruvic acid / acetyl CoA / Krebs&rsquo; cycle','Glucose only','PGAL only','Fructose 1,6-bisphosphate'],'Depends on structure.']
  ],
  'rq': [
    ['recall',E,'RQ of carbohydrates:',['1','0.7','0.9','0'],'6/6.'],
    ['recall',M,'RQ of fats is:',['Less than 1','Exactly 1','Greater than 1','Zero'],'0.7 for tripalmitin.'],
    ['recall',M,'RQ of proteins is about:',['0.9','0.7','1.0','1.4'],'NCERT.'],
    ['matching',M,'Match Column I with Column II:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'Glucose 1.0; tripalmitin 0.7.',['A. Glucose','B. Tripalmitin'],['i. 0.7','ii. 1.0']],
    ['statement',H,'Which of the following is/are correct?\n(i) RQ = CO<sub>2</sub> evolved / O<sub>2</sub> consumed\n(ii) RQ of fats is more than 1\n(iii) RQ depends on the substrate',['(i) and (iii) only','(ii) only','(i), (ii) and (iii)','(i) and (ii) only'],'Fats: less than 1.'],
    ['recall',H,'In tripalmitin oxidation, O<sub>2</sub> consumed and CO<sub>2</sub> evolved are:',['145 and 102','102 and 145','6 and 6','98 and 102'],'2(C<sub>51</sub>H<sub>98</sub>O<sub>6</sub>) + 145O<sub>2</sub> &rarr; 102CO<sub>2</sub> + 98H<sub>2</sub>O.'],
    ['diagram',M,'A respirometer shows 10 mL O<sub>2</sub> used and 10 mL CO<sub>2</sub> released. The substrate is likely:',['Carbohydrate','Fat','Protein','None'],'RQ = 1.'],
    ['diagram',H,'A respirometer shows 10 mL O<sub>2</sub> used and 7 mL CO<sub>2</sub> released. The substrate is likely:',['Fat','Carbohydrate','Protein','Organic acid'],'RQ = 0.7.']
  ]
};

/* ---------- Descriptive: [marks, difficulty, q, answer] ---------- */
const desc = {
  'breathe': [
    [1,E,'Define respiration.','The breaking of C&ndash;C bonds of complex compounds through oxidation within cells, releasing a considerable amount of energy.'],
    [1,E,'What are respiratory substrates?','Compounds oxidised during respiration to release energy (usually carbohydrates).'],
    [2,M,'Why is ATP called the energy currency of the cell?','(i) Energy released in respiration is trapped as ATP. (ii) ATP is broken down whenever and wherever energy is needed for life processes.'],
    [2,M,'Name the structures through which plants exchange gases. Where are they found?','(i) Stomata &mdash; in the epidermis of leaves (and young stems). (ii) Lenticels &mdash; in the bark of woody stems.'],
    [3,M,'Give three reasons why plants can get along without respiratory organs.','(i) Each plant part takes care of its own gas-exchange needs; little transport of gases between parts. (ii) Plants have low demand for gas exchange; roots, stems and leaves respire far slower than animals. (iii) Diffusion distances are short: every living cell is close to the surface.'],
    [3,M,'How do gases reach the living cells of thick woody stems and roots?','(i) Living cells are organised in thin layers inside and beneath the bark. (ii) Bark has openings called lenticels. (iii) Interior cells are dead and need no O<sub>2</sub>; loosely packed parenchyma forms an interconnected network of air spaces.'],
    [3,H,'What is the significance of step-wise release of energy in respiration?','(i) If glucose were oxidised in one step (combustion), most energy would be lost as heat. (ii) In step-wise oxidation, each step releases a small amount of energy that can be coupled to ATP synthesis. (iii) Intermediates (carbon skeletons) formed in the steps can be used for biosynthesis.'],
    [5,H,'Differentiate between respiration and combustion.','<b>Respiration</b>: occurs in living cells; step-wise; each step controlled by enzymes; energy trapped as ATP; occurs at body temperature; intermediates used for biosynthesis. <b>Combustion</b>: non-living process; single step; not enzyme controlled; energy released mostly as heat and light; needs high temperature; no useful intermediates. Both oxidise organic compounds to CO<sub>2</sub> and H<sub>2</sub>O (C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> &rarr; 6CO<sub>2</sub> + 6H<sub>2</sub>O + energy).']
  ],
  'glycolysis': [
    [1,E,'Where does glycolysis occur?','In the cytoplasm.'],
    [1,E,'What is the EMP pathway?','Glycolysis, named after Embden, Meyerhof and Parnas.'],
    [2,M,'Name the steps of glycolysis where ATP is used.','(i) Glucose &rarr; glucose-6-phosphate (hexokinase). (ii) Fructose-6-phosphate &rarr; fructose 1,6-bisphosphate.'],
    [2,M,'Name the steps of glycolysis where ATP is formed.','(i) 1,3-Bisphosphoglycerate &rarr; 3-phosphoglyceric acid. (ii) Phosphoenolpyruvate &rarr; pyruvic acid.'],
    [3,M,'How is sucrose made ready for glycolysis in plants?','(i) Sucrose is converted into glucose and fructose by invertase. (ii) Glucose and fructose are phosphorylated to glucose-6-phosphate by hexokinase. (iii) Glucose-6-phosphate isomerises to fructose-6-phosphate; after this the steps are common.'],
    [3,M,'Calculate the net gain of ATP and NADH in glycolysis.','(i) ATP used: 2 (glucose &rarr; G-6-P; F-6-P &rarr; F-1,6-BP). (ii) ATP made: 4 (2 at BPGA &rarr; PGA, 2 at PEP &rarr; pyruvate). (iii) Net: 2 ATP and 2 NADH + H<sup>+</sup> per glucose.'],
    [3,H,'Describe the step in glycolysis where NADH is formed.','(i) 3-Phosphoglyceraldehyde (PGAL) is converted to 1,3-bisphosphoglycerate (BPGA). (ii) Two hydrogen atoms (redox equivalents) are removed from PGAL and transferred to NAD<sup>+</sup>, forming NADH + H<sup>+</sup>. (iii) PGAL is oxidised and combines with inorganic phosphate to form BPGA.'],
    [5,H,'Give a schematic representation of glycolysis and explain its main steps.','Glucose &rarr; (ATP, hexokinase) glucose-6-phosphate &rarr; fructose-6-phosphate &rarr; (ATP) fructose 1,6-bisphosphate &rarr; DHAP + PGAL &rarr; (NAD<sup>+</sup> &rarr; NADH) 2 &times; BPGA &rarr; (ATP) 2 &times; 3-PGA &rarr; 2 &times; 2-PGA &rarr; (&minus;H<sub>2</sub>O) 2 &times; PEP &rarr; (ATP) 2 &times; pyruvic acid. Occurs in cytoplasm; 10 reactions (EMP pathway); 2 ATP used, 4 ATP made; net 2 ATP + 2 NADH; no O<sub>2</sub> needed; the only respiratory process in anaerobes.']
  ],
  'fermentation': [
    [1,E,'Name the products of alcoholic fermentation.','Ethanol and CO<sub>2</sub>.'],
    [1,E,'Name the enzyme that converts pyruvic acid to lactic acid.','Lactate dehydrogenase.'],
    [2,M,'Name the enzymes involved in alcoholic fermentation.','(i) Pyruvic acid decarboxylase. (ii) Alcohol dehydrogenase.'],
    [2,M,'Why do muscles accumulate lactic acid during vigorous exercise?','(i) O<sub>2</sub> supply is inadequate for aerobic respiration. (ii) Pyruvic acid is reduced to lactic acid by lactate dehydrogenase, using NADH.'],
    [3,M,'Why is fermentation called an inefficient and hazardous process?','(i) Less than 7% of the energy in glucose is released; net gain only 2 ATP. (ii) Not all the released energy is trapped as ATP. (iii) Toxic products &mdash; acid or alcohol &mdash; are formed; yeasts die at about 13% alcohol.'],
    [3,M,'What is the maximum alcohol in naturally fermented beverages? How are stronger drinks made?','(i) About 13%, because yeasts are poisoned to death at this concentration. (ii) Beverages with higher alcohol content are obtained by distillation of the fermented product.'],
    [3,H,'What is the role of NADH in fermentation?','(i) NADH + H<sup>+</sup> formed in glycolysis acts as the reducing agent. (ii) It reduces pyruvic acid (to lactic acid) or acetaldehyde (to ethanol). (iii) It is reoxidised to NAD<sup>+</sup>, which is needed to keep glycolysis running.'],
    [5,H,'Differentiate between aerobic respiration and fermentation.','<b>Aerobic respiration</b>: needs O<sub>2</sub>; glycolysis + Krebs&rsquo; cycle + ETS; occurs in cytoplasm and mitochondria; complete breakdown to CO<sub>2</sub> + H<sub>2</sub>O; net 38 ATP per glucose; NADH oxidised vigorously; no toxic product. <b>Fermentation</b>: anaerobic; glycolysis + reduction of pyruvate; only in cytoplasm; partial breakdown to ethanol + CO<sub>2</sub> or lactic acid; net 2 ATP; less than 7% energy released; NADH oxidised slowly; products toxic.']
  ],
  'krebs': [
    [1,E,'Where does the Krebs&rsquo; cycle take place?','In the mitochondrial matrix.'],
    [1,E,'Name the first product of the Krebs&rsquo; cycle.','Citric acid.'],
    [2,M,'Write the reaction of the link reaction.','Pyruvic acid + CoA + NAD<sup>+</sup> &rarr; Acetyl CoA + CO<sub>2</sub> + NADH + H<sup>+</sup> (pyruvate dehydrogenase, Mg<sup>2+</sup>).'],
    [2,M,'What two things are required for continued oxidation of acetyl CoA in the TCA cycle?','(i) Continued replenishment of oxaloacetic acid. (ii) Regeneration of NAD<sup>+</sup> and FAD<sup>+</sup> from NADH and FADH<sub>2</sub>.'],
    [3,M,'What are the main steps in aerobic respiration? Where do they take place?','(i) Glycolysis &mdash; cytoplasm. (ii) Oxidative decarboxylation of pyruvate and Krebs&rsquo; cycle &mdash; mitochondrial matrix (complete oxidation of pyruvate, leaving 3 CO<sub>2</sub>). (iii) ETS and oxidative phosphorylation &mdash; inner mitochondrial membrane (electrons passed to O<sub>2</sub>, ATP made).'],
    [3,M,'Where is GTP formed in the Krebs&rsquo; cycle? What happens to it?','(i) During conversion of succinyl-CoA to succinic acid (substrate-level phosphorylation). (ii) In a coupled reaction GTP is converted to GDP, synthesising ATP from ADP.'],
    [3,H,'Write the summary equation of the Krebs&rsquo; cycle phase for one pyruvate.','Pyruvic acid + 4NAD<sup>+</sup> + FAD<sup>+</sup> + 2H<sub>2</sub>O + ADP + P<sub>i</sub> &rarr; 3CO<sub>2</sub> + 4NADH + 4H<sup>+</sup> + FADH<sub>2</sub> + ATP (mitochondrial matrix).'],
    [5,H,'Give a schematic representation of the Krebs&rsquo; cycle and explain it.','Pyruvate (3C) &rarr; (CoA, NAD<sup>+</sup>, CO<sub>2</sub> out) acetyl CoA (2C); acetyl CoA + OAA (4C) + H<sub>2</sub>O &rarr; citric acid (6C) (citrate synthase, CoA released) &rarr; isocitrate &rarr; (NADH, CO<sub>2</sub>) &alpha;-ketoglutaric acid (5C) &rarr; (NADH, CO<sub>2</sub>) succinyl-CoA &rarr; (GDP &rarr; GTP &rarr; ATP) succinic acid (4C) &rarr; (FAD &rarr; FADH<sub>2</sub>) fumaric acid &rarr; malic acid (4C) &rarr; (NADH) OAA. Per turn: 3 NADH, 1 FADH<sub>2</sub>, 1 ATP, 2 CO<sub>2</sub>. Discovered by Hans Krebs; occurs in the matrix; needs OAA replenishment and NAD<sup>+</sup>/FAD<sup>+</sup> regeneration.']
  ],
  'ets': [
    [1,E,'Where is the ETS located?','Inner mitochondrial membrane.'],
    [1,E,'What is the final electron acceptor in aerobic respiration?','Oxygen (forms water).'],
    [2,M,'Name the two mobile carriers of the ETS.','(i) Ubiquinone &mdash; within the inner membrane. (ii) Cytochrome c &mdash; on the outer surface of the inner membrane, between Complex III and IV.'],
    [2,M,'What is oxidative phosphorylation?','Synthesis of ATP using the energy of oxidation&ndash;reduction (electron transfer to O<sub>2</sub>) in the ETS, which builds a proton gradient used by ATP synthase.'],
    [3,M,'Describe the structure of ATP synthase.','(i) It is Complex V with two components, F<sub>1</sub> and F<sub>0</sub>. (ii) F<sub>1</sub>: peripheral headpiece with the site for ATP synthesis from ADP and P<sub>i</sub>. (iii) F<sub>0</sub>: integral membrane protein forming the proton channel; 4H<sup>+</sup> pass from the intermembrane space to the matrix per ATP.'],
    [3,M,'What is the role of oxygen in respiration?','(i) Oxygen acts as the final hydrogen (electron) acceptor and forms water. (ii) Its role is limited to the terminal stage. (iii) Yet it is vital, since it drives the whole process by removing hydrogen from the system.'],
    [3,H,'Why does FADH<sub>2</sub> give fewer ATP than NADH?','(i) NADH gives electrons to Complex I. (ii) FADH<sub>2</sub> gives electrons to ubiquinone via Complex II, bypassing Complex I. (iii) So FADH<sub>2</sub> yields 2 ATP, while NADH yields 3 ATP.'],
    [5,H,'Explain the electron transport system (ETS) with a diagram.','NADH (matrix) &rarr; Complex I (NADH dehydrogenase) &rarr; ubiquinone (also receives electrons from FADH<sub>2</sub> via Complex II) &rarr; ubiquinol &rarr; Complex III (cytochrome bc<sub>1</sub>) &rarr; cytochrome c (mobile carrier) &rarr; Complex IV (cytochrome c oxidase: cyt a, a<sub>3</sub>, 2 Cu centres) &rarr; O<sub>2</sub> + 2H<sup>+</sup> &rarr; H<sub>2</sub>O. Electron flow is coupled to ATP synthase (Complex V: F<sub>0</sub> + F<sub>1</sub>); NADH &rarr; 3 ATP, FADH<sub>2</sub> &rarr; 2 ATP; 4H<sup>+</sup> per ATP; located in the inner mitochondrial membrane; called oxidative phosphorylation.']
  ],
  'balance': [
    [1,E,'What is the net gain of ATP from aerobic respiration of one glucose?','38 ATP.'],
    [1,E,'What is the net gain of ATP from fermentation of one glucose?','2 ATP.'],
    [2,M,'Why is the respiratory balance sheet only a theoretical exercise?','(i) It is based on assumptions that are not valid in living systems. (ii) In reality pathways work simultaneously, and substrates and intermediates enter and leave as needed.'],
    [2,M,'How many ATP are formed from glycolysis including the NADH it produces?','2 ATP (net) + 2 NADH &times; 3 = 6 ATP; total 8 ATP.'],
    [3,M,'What are the assumptions made during the calculation of net gain of ATP?','(i) A sequential, orderly pathway: glycolysis, TCA cycle and ETS one after another. (ii) NADH from glycolysis enters mitochondria and undergoes oxidative phosphorylation. (iii) No intermediates are used to synthesise other compounds; only glucose is respired.'],
    [3,M,'Compare fermentation and aerobic respiration (any three points).','(i) Partial breakdown of glucose vs complete breakdown to CO<sub>2</sub> + H<sub>2</sub>O. (ii) Net 2 ATP vs many (38) ATP per glucose. (iii) NADH oxidised slowly vs very vigorously.'],
    [3,H,'Calculate the ATP produced from the Krebs&rsquo; cycle for one glucose.','(i) 2 turns give 2 ATP (via GTP). (ii) 6 NADH &times; 3 = 18 ATP. (iii) 2 FADH<sub>2</sub> &times; 2 = 4 ATP. Total = 24 ATP.'],
    [5,H,'Prepare the respiratory balance sheet for one glucose molecule.','<b>Glycolysis</b>: net 2 ATP + 2 NADH (6 ATP) = 8. <b>Link reaction</b>: 2 NADH = 6. <b>Krebs&rsquo; cycle</b>: 2 ATP + 6 NADH (18) + 2 FADH<sub>2</sub> (4) = 24. <b>Total = 38 ATP</b> (4 by substrate-level phosphorylation, 34 by oxidative phosphorylation). Assumptions: orderly pathway; glycolytic NADH enters mitochondria; no intermediates withdrawn; only glucose respired. These are not valid in living cells, so 38 is a theoretical value.']
  ],
  'amphibolic': [
    [1,E,'Which is the favoured respiratory substrate?','Glucose.'],
    [1,E,'In what form does glycerol enter the respiratory pathway?','PGAL (3-phosphoglyceraldehyde).'],
    [2,M,'How do fats enter the respiratory pathway?','(i) Fats are broken into glycerol and fatty acids. (ii) Fatty acids enter as acetyl CoA; glycerol enters as PGAL.'],
    [2,M,'How do proteins enter the respiratory pathway?','(i) Proteases break proteins into amino acids. (ii) After deamination, amino acids enter as pyruvate, acetyl CoA or at some stage within the Krebs&rsquo; cycle.'],
    [3,M,'Define catabolism, anabolism and amphibolic pathway.','(i) Catabolism: breaking-down processes in the organism. (ii) Anabolism: synthesis processes. (iii) Amphibolic pathway: a pathway involved in both, such as the respiratory pathway.'],
    [3,M,'Why is the Krebs&rsquo; cycle called a metabolic sink, and acetyl CoA formation the gateway step?','(i) Carbohydrates, fats and proteins all funnel into the Krebs&rsquo; cycle for oxidation, so it is a common pathway (metabolic sink). (ii) Formation of acetyl CoA links glycolysis to the Krebs&rsquo; cycle, so it is the gateway (link) step.'],
    [3,H,'Give an example to show that respiration is an amphibolic pathway.','(i) When fatty acids are respired, they are broken down to acetyl CoA (catabolism). (ii) When the organism needs fatty acids, acetyl CoA is withdrawn from the pathway for their synthesis (anabolism). (iii) Hence the same intermediate serves both.'],
    [5,H,'Discuss &ldquo;The respiratory pathway is an amphibolic pathway.&rdquo;','Glucose is the favoured substrate; other substrates enter at different points: fatty acids as acetyl CoA, glycerol as PGAL, amino acids (after deamination by proteases) as pyruvate, acetyl CoA or Krebs&rsquo; intermediates. The same compounds are withdrawn from the pathway for synthesis of these substrates: acetyl CoA for fatty acids; respiratory intermediates for amino acids/proteins. Breakdown is catabolism; synthesis is anabolism. Since the respiratory pathway is involved in both, it is called amphibolic rather than catabolic.']
  ],
  'rq': [
    [1,E,'Define respiratory quotient.','The ratio of the volume of CO<sub>2</sub> evolved to the volume of O<sub>2</sub> consumed in respiration.'],
    [1,E,'What is the RQ of fats?','Less than 1 (0.7 for tripalmitin).'],
    [2,M,'Why is the RQ of carbohydrates equal to 1?','(i) C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> &rarr; 6CO<sub>2</sub> + 6H<sub>2</sub>O. (ii) Equal volumes of CO<sub>2</sub> evolved and O<sub>2</sub> consumed: RQ = 6/6 = 1.'],
    [2,M,'Give the RQ values for carbohydrates, fats and proteins.','Carbohydrates: 1.0; fats: 0.7 (less than 1); proteins: about 0.9.'],
    [3,M,'Calculate the RQ of tripalmitin.','(i) 2(C<sub>51</sub>H<sub>98</sub>O<sub>6</sub>) + 145O<sub>2</sub> &rarr; 102CO<sub>2</sub> + 98H<sub>2</sub>O + energy. (ii) RQ = 102CO<sub>2</sub> / 145O<sub>2</sub>. (iii) RQ = 0.7, less than 1.'],
    [3,M,'Why is the RQ of fats less than 1?','(i) Fats contain very little oxygen compared with carbon and hydrogen. (ii) So more O<sub>2</sub> is needed for their oxidation. (iii) Hence O<sub>2</sub> consumed exceeds CO<sub>2</sub> evolved, giving RQ &lt; 1.'],
    [3,H,'What does the RQ of a tissue tell us? Give examples.','(i) RQ depends on the type of respiratory substrate. (ii) RQ close to 1: carbohydrates are respired (e.g. germinating cereal seeds). (iii) RQ close to 0.7: fats are respired (e.g. germinating oil seeds); in reality substrates are usually mixed.'],
    [5,H,'Define RQ. Explain its value when carbohydrates, fats and proteins are used as substrates.','RQ = volume of CO<sub>2</sub> evolved / volume of O<sub>2</sub> consumed; also called respiratory ratio; depends on the substrate. Carbohydrate: C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> &rarr; 6CO<sub>2</sub> + 6H<sub>2</sub>O; RQ = 1. Fat (tripalmitin): 2(C<sub>51</sub>H<sub>98</sub>O<sub>6</sub>) + 145O<sub>2</sub> &rarr; 102CO<sub>2</sub> + 98H<sub>2</sub>O; RQ = 0.7. Protein: about 0.9. In living organisms substrates are usually more than one; pure fats or proteins are never used.']
  ]
};

/* ---------- Board Important ---------- */
const board = {
  intro:'Chapter 12 typically carries <b>8&ndash;10 marks</b> in the Annual PU Board / Class 11 theory paper. Most frequent high-weightage areas: <b>glycolysis (schematic)</b>, <b>Krebs&rsquo; cycle (schematic)</b>, <b>electron transport system</b>, <b>fermentation vs aerobic respiration</b>, <b>respiratory balance sheet (38 ATP)</b>, <b>amphibolic pathway</b> and <b>respiratory quotient</b>.',
  parts:[
    {label:'Very Short Answer (VSA — 1 Mark Each)', marks:1, items:[
      {q:'Define respiration.', a:'Breaking of C&ndash;C bonds of complex compounds through oxidation within cells, releasing energy.'},
      {q:'What is the EMP pathway?', a:'Glycolysis (Embden, Meyerhof and Parnas).'},
      {q:'Where does glycolysis occur?', a:'Cytoplasm.'},
      {q:'Name the enzyme that converts sucrose into glucose and fructose.', a:'Invertase.'},
      {q:'At what alcohol concentration do yeasts die?', a:'About 13%.'},
      {q:'Name the first product of the Krebs&rsquo; cycle.', a:'Citric acid.'},
      {q:'Where is the ETS located?', a:'Inner mitochondrial membrane.'},
      {q:'What is Complex IV of the ETS?', a:'Cytochrome c oxidase.'},
      {q:'What is the final hydrogen acceptor in respiration?', a:'Oxygen.'},
      {q:'Define RQ.', a:'Volume of CO<sub>2</sub> evolved / volume of O<sub>2</sub> consumed.'},
      {q:'What is the RQ of fats?', a:'Less than 1 (0.7 for tripalmitin).'}
    ]},
    {label:'Short Answer I (SA-I — 2 Marks Each)', marks:2, items:[
      {q:'Name the steps in glycolysis where ATP is utilised.', a:'Glucose &rarr; glucose-6-phosphate; fructose-6-phosphate &rarr; fructose 1,6-bisphosphate.'},
      {q:'Name the enzymes of alcoholic fermentation.', a:'Pyruvic acid decarboxylase and alcohol dehydrogenase.'},
      {q:'Write the reaction catalysed by pyruvate dehydrogenase.', a:'Pyruvic acid + CoA + NAD<sup>+</sup> &rarr; Acetyl CoA + CO<sub>2</sub> + NADH + H<sup>+</sup> (Mg<sup>2+</sup>).'},
      {q:'What is oxidative phosphorylation?', a:'ATP synthesis using the energy of oxidation&ndash;reduction in the ETS (O<sub>2</sub> as final acceptor).'},
      {q:'Name the two components of ATP synthase and give their roles.', a:'F<sub>0</sub>: integral protein forming the proton channel; F<sub>1</sub>: headpiece where ATP is synthesised.'},
      {q:'What is an amphibolic pathway? Give an example.', a:'A pathway in both catabolism and anabolism; respiratory pathway (acetyl CoA used for breakdown and synthesis of fatty acids).'},
      {q:'Why is the RQ of carbohydrates 1?', a:'6CO<sub>2</sub> evolved / 6O<sub>2</sub> consumed = 1.'}
    ]},
    {label:'Short Answer II / Explanatory (SA-II — 3 Marks Each)', marks:3, items:[
      {q:'Differentiate between glycolysis and Krebs&rsquo; cycle.', a:'Cytoplasm vs mitochondrial matrix; glucose &rarr; 2 pyruvate vs acetyl CoA &rarr; CO<sub>2</sub>; anaerobic vs needs O<sub>2</sub> indirectly; no CO<sub>2</sub> vs 2 CO<sub>2</sub> per turn; 2 ATP + 2 NADH vs 1 ATP + 3 NADH + 1 FADH<sub>2</sub> per turn.'},
      {q:'Differentiate between aerobic respiration and fermentation.', a:'O<sub>2</sub> needed vs not; complete vs partial breakdown; CO<sub>2</sub> + H<sub>2</sub>O vs ethanol + CO<sub>2</sub> / lactic acid; 38 vs 2 ATP; mitochondria + cytoplasm vs cytoplasm only.'},
      {q:'What are the assumptions made in calculating the net gain of ATP?', a:'Orderly pathway (glycolysis &rarr; TCA &rarr; ETS); glycolytic NADH enters mitochondria; no intermediates used elsewhere; only glucose respired.'},
      {q:'Give three reasons why plants do not need respiratory organs.', a:'Each part handles its own gas exchange; low demand; every living cell is close to the surface (stomata, lenticels, air spaces).'},
      {q:'Calculate the RQ of tripalmitin.', a:'2(C<sub>51</sub>H<sub>98</sub>O<sub>6</sub>) + 145O<sub>2</sub> &rarr; 102CO<sub>2</sub> + 98H<sub>2</sub>O; RQ = 102/145 = 0.7.'}
    ]},
    {label:'Long Answer (LA — 5 Marks Each)', marks:5, items:[
      {q:'Give a schematic representation of glycolysis and explain it.', a:'Glucose &rarr; G-6-P (ATP, hexokinase) &rarr; F-6-P &rarr; F-1,6-BP (ATP) &rarr; DHAP + PGAL &rarr; BPGA (NADH) &rarr; 3-PGA (ATP) &rarr; 2-PGA &rarr; PEP (&minus;H<sub>2</sub>O) &rarr; pyruvate (ATP); cytoplasm; 10 steps; net 2 ATP + 2 NADH.'},
      {q:'Explain the Krebs&rsquo; cycle with a schematic diagram.', a:'Pyruvate &rarr; acetyl CoA (link); + OAA &rarr; citric acid &rarr; isocitrate &rarr; &alpha;-KG &rarr; succinyl-CoA &rarr; succinate (GTP) &rarr; fumarate (FADH<sub>2</sub>) &rarr; malate &rarr; OAA; 3 NADH, 1 FADH<sub>2</sub>, 1 ATP, 2 CO<sub>2</sub> per turn; matrix.'},
      {q:'Explain the electron transport system with a diagram.', a:'Complex I &rarr; ubiquinone (+ Complex II/FADH<sub>2</sub>) &rarr; Complex III &rarr; cytochrome c &rarr; Complex IV &rarr; O<sub>2</sub> &rarr; H<sub>2</sub>O; ATP synthase (Complex V, F<sub>0</sub>/F<sub>1</sub>); NADH 3 ATP, FADH<sub>2</sub> 2 ATP; inner membrane.'}
    ]}
  ],
  diagrams:[
    {title:'Steps of Glycolysis', labels:'Glucose, Glucose-6-phosphate, Fructose-6-phosphate, Fructose 1,6-bisphosphate, PGAL, DHAP, BPGA, 3-PGA, 2-PGA, PEP, Pyruvic acid, ATP / ADP, NAD<sup>+</sup> / NADH'},
    {title:'Citric Acid (Krebs&rsquo;) Cycle', labels:'Pyruvate, Acetyl CoA, Oxaloacetic acid, Citric acid, &alpha;-Ketoglutaric acid, Succinic acid, Malic acid, NADH, FADH<sub>2</sub>, GTP, CO<sub>2</sub>'},
    {title:'Electron Transport System', labels:'Inner mitochondrial membrane, Complex I&ndash;IV, Ubiquinone, Cytochrome c, O<sub>2</sub> &rarr; H<sub>2</sub>O, ATP synthase (F<sub>0</sub>, F<sub>1</sub>), H<sup>+</sup> flow'},
    {title:'Major Pathways of Anaerobic Respiration', labels:'Glucose, PGAL, PGA, PEP, Pyruvic acid, Lactic acid, Ethanol + CO<sub>2</sub>, NADH / NAD<sup>+</sup>'},
    {title:'ATP Synthase in Mitochondria', labels:'Inner mitochondrial membrane, F<sub>0</sub>, F<sub>1</sub>, 4H<sup>+</sup>, ADP + P<sub>i</sub>, ATP, Matrix, Outer side'},
    {title:'Interrelationship Among Metabolic Pathways (Amphibolic)', labels:'Fats, Carbohydrates, Proteins, Fatty acids, Glycerol, Glucose, Amino acids, PGAL, Pyruvic acid, Acetyl CoA, Krebs&rsquo; cycle, CO<sub>2</sub>, H<sub>2</sub>O'}
  ]
};

/* ---------- Glossary ---------- */
const glossary = [
  ['Respiration','Breaking of C&ndash;C bonds of complex compounds by oxidation within cells, releasing considerable energy.'],
  ['Cellular respiration','Breakdown of food within the cell to release energy and trap it as ATP.'],
  ['Respiratory substrate','A compound oxidised during respiration to release energy; usually carbohydrate.'],
  ['ATP','Adenosine triphosphate; the energy currency of the cell.'],
  ['Stomata','Pores in the leaf epidermis for gaseous exchange.'],
  ['Lenticels','Openings in the bark of woody stems for gaseous exchange.'],
  ['Combustion','One-step burning of a substance with O<sub>2</sub>, releasing energy mostly as heat.'],
  ['Facultative anaerobe','An organism that can live with or without oxygen.'],
  ['Obligate anaerobe','An organism that requires the absence of oxygen.'],
  ['Glycolysis','Partial oxidation of glucose to two pyruvic acid in the cytoplasm (EMP pathway).'],
  ['EMP pathway','Glycolysis, named after Embden, Meyerhof and Parnas.'],
  ['Invertase','Enzyme that converts sucrose into glucose and fructose.'],
  ['Hexokinase','Enzyme that phosphorylates glucose to glucose-6-phosphate.'],
  ['PGAL','3-Phosphoglyceraldehyde; a triose phosphate of glycolysis.'],
  ['BPGA','1,3-Bisphosphoglycerate; formed when PGAL is oxidised with NAD<sup>+</sup>.'],
  ['PEP','Phosphoenolpyruvate; converted to pyruvic acid with ATP formation.'],
  ['Substrate-level phosphorylation','Direct formation of ATP (or GTP) from a high-energy substrate, without the ETS.'],
  ['Fermentation','Incomplete oxidation of glucose under anaerobic conditions.'],
  ['Alcoholic fermentation','Conversion of pyruvic acid to ethanol and CO<sub>2</sub> by yeast.'],
  ['Lactic acid fermentation','Reduction of pyruvic acid to lactic acid by lactate dehydrogenase.'],
  ['Pyruvate dehydrogenase','Enzyme complex for oxidative decarboxylation of pyruvate to acetyl CoA.'],
  ['Acetyl CoA','2-carbon compound that enters the Krebs&rsquo; cycle; formed in the link reaction.'],
  ['Link reaction (gateway step)','Pyruvate &rarr; acetyl CoA; links glycolysis to the Krebs&rsquo; cycle.'],
  ['Krebs&rsquo; cycle','TCA or citric acid cycle; oxidises acetyl CoA in the mitochondrial matrix.'],
  ['Oxaloacetic acid (OAA)','4-carbon first member of the Krebs&rsquo; cycle; accepts acetyl CoA.'],
  ['Citrate synthase','Enzyme that condenses acetyl CoA with OAA to form citric acid.'],
  ['Electron transport system (ETS)','Chain of electron carriers in the inner mitochondrial membrane passing electrons to O<sub>2</sub>.'],
  ['Ubiquinone','Mobile electron carrier within the inner mitochondrial membrane.'],
  ['Cytochrome c','Small mobile protein carrier between Complex III and IV.'],
  ['Cytochrome c oxidase','Complex IV; contains cytochromes a, a<sub>3</sub> and two copper centres.'],
  ['ATP synthase','Complex V; F<sub>0</sub> (proton channel) + F<sub>1</sub> (ATP synthesis site).'],
  ['Oxidative phosphorylation','ATP synthesis using energy of oxidation&ndash;reduction in the ETS.'],
  ['Respiratory balance sheet','Theoretical calculation of net ATP per glucose (38 ATP).'],
  ['Amphibolic pathway','A pathway involved in both catabolism and anabolism, such as respiration.'],
  ['Catabolism','Breakdown processes within the organism.'],
  ['Anabolism','Synthesis processes within the organism.'],
  ['Deamination','Removal of the amino group from an amino acid before it enters respiration.'],
  ['Respiratory quotient (RQ)','Volume of CO<sub>2</sub> evolved / volume of O<sub>2</sub> consumed; 1 for carbohydrates, 0.7 for fats.']
];

/* ---------- Tree ---------- */
const tree = [
  {kingdom:'Respiration & Breathing in Plants', groups:[
    {name:'Respiration', detail:'Oxidation of <b>C&ndash;C bonds</b>; energy trapped as <b>ATP</b>.'},
    {name:'Substrates', detail:'Usually <b>carbohydrates</b>; also proteins, fats, organic acids.'},
    {name:'Gas exchange', detail:'<b>Stomata</b> and <b>lenticels</b>; no respiratory organs.'},
    {name:'Why no lungs', detail:'Own needs, <b>low demand</b>, <b>short diffusion</b> distance.'}]},
  {kingdom:'Glycolysis', groups:[
    {name:'Site', detail:'<b>Cytoplasm</b>; all organisms; <b>EMP</b> pathway.'},
    {name:'ATP used', detail:'Glucose &rarr; G-6-P (<b>hexokinase</b>); F-6-P &rarr; F-1,6-BP.'},
    {name:'NADH formed', detail:'<b>PGAL &rarr; BPGA</b>.'},
    {name:'Yield', detail:'<b>Net 2 ATP + 2 NADH</b>; 2 pyruvic acid.'}]},
  {kingdom:'Fermentation', groups:[
    {name:'Alcoholic', detail:'Yeast: pyruvate &rarr; <b>ethanol + CO<sub>2</sub></b>.'},
    {name:'Lactic acid', detail:'Bacteria, muscle: <b>lactate dehydrogenase</b>.'},
    {name:'NADH', detail:'Reoxidised to <b>NAD<sup>+</sup></b>.'},
    {name:'Limits', detail:'&lt; <b>7%</b> energy; yeast dies at <b>13%</b> alcohol.'}]},
  {kingdom:'Link Reaction & TCA Cycle', groups:[
    {name:'Link reaction', detail:'Pyruvate &rarr; <b>acetyl CoA</b> + CO<sub>2</sub> + NADH (PDH, Mg<sup>2+</sup>).'},
    {name:'Start', detail:'Acetyl CoA + <b>OAA</b> &rarr; <b>citric acid</b> (citrate synthase).'},
    {name:'Per turn', detail:'<b>3 NADH, 1 FADH<sub>2</sub>, 1 GTP</b>, 2 CO<sub>2</sub>.'},
    {name:'Needs', detail:'OAA replenished; <b>NAD<sup>+</sup>, FAD<sup>+</sup></b> regenerated.'}]},
  {kingdom:'ETS & Oxidative Phosphorylation', groups:[
    {name:'Complexes', detail:'<b>I</b> NADH DH, <b>II</b> succinate DH, <b>III</b> cyt bc<sub>1</sub>, <b>IV</b> cyt c oxidase.'},
    {name:'Carriers', detail:'<b>Ubiquinone</b> and <b>cytochrome c</b> (mobile).'},
    {name:'ATP', detail:'NADH <b>3</b>, FADH<sub>2</sub> <b>2</b>; ATP synthase F<sub>0</sub> + F<sub>1</sub>.'},
    {name:'Oxygen', detail:'<b>Final hydrogen acceptor</b>; forms water; <b>4H<sup>+</sup></b> per ATP.'}]},
  {kingdom:'Respiratory Balance Sheet', groups:[
    {name:'Net gain', detail:'<b>38 ATP</b> per glucose (theoretical).'},
    {name:'Assumptions', detail:'Orderly pathway; NADH enters mitochondria; no withdrawal; only glucose.'},
    {name:'Split', detail:'Glycolysis <b>8</b>, link <b>6</b>, Krebs&rsquo; <b>24</b>.'},
    {name:'vs fermentation', detail:'Complete vs partial; 38 vs <b>2</b> ATP.'}]},
  {kingdom:'Amphibolic Pathway', groups:[
    {name:'Fats', detail:'Fatty acids &rarr; <b>acetyl CoA</b>; glycerol &rarr; <b>PGAL</b>.'},
    {name:'Proteins', detail:'<b>Proteases</b>, deamination &rarr; pyruvate / acetyl CoA / TCA.'},
    {name:'Both ways', detail:'Intermediates <b>withdrawn</b> for synthesis.'},
    {name:'Name', detail:'<b>Amphibolic</b>: catabolism + anabolism.'}]},
  {kingdom:'Respiratory Quotient', groups:[
    {name:'Definition', detail:'RQ = <b>CO<sub>2</sub> evolved / O<sub>2</sub> consumed</b>.'},
    {name:'Carbohydrate', detail:'RQ = <b>1</b>.'},
    {name:'Fat', detail:'Tripalmitin: 102/145 = <b>0.7</b>.'},
    {name:'Protein', detail:'About <b>0.9</b>; substrates usually mixed.'}]}
];

/* ---------- Compare matrix ---------- */
const compare = [
  {name:'Glycolysis', organ:'Cytoplasm', purpose:'Glucose &rarr; 2 pyruvic acid', structuralChange:'10 enzyme steps; no O<sub>2</sub>', keyFeature:'Net 2 ATP + 2 NADH', example:'All living organisms'},
  {name:'Alcoholic fermentation', organ:'Cytoplasm (yeast)', purpose:'Regenerate NAD<sup>+</sup> without O<sub>2</sub>', structuralChange:'Pyruvate &rarr; ethanol + CO<sub>2</sub>', keyFeature:'Pyruvic acid decarboxylase, alcohol dehydrogenase', example:'Bread, beverages'},
  {name:'Lactic acid fermentation', organ:'Cytoplasm (bacteria, muscle)', purpose:'Regenerate NAD<sup>+</sup> without O<sub>2</sub>', structuralChange:'Pyruvate &rarr; lactic acid', keyFeature:'Lactate dehydrogenase; no CO<sub>2</sub>', example:'Curd, exercising muscle'},
  {name:'Link reaction', organ:'Mitochondrial matrix', purpose:'Pyruvate &rarr; acetyl CoA', structuralChange:'Oxidative decarboxylation', keyFeature:'Pyruvate dehydrogenase; NAD<sup>+</sup>, CoA, Mg<sup>2+</sup>', example:'Gateway step'},
  {name:'Krebs&rsquo; (TCA) cycle', organ:'Mitochondrial matrix', purpose:'Complete oxidation of acetyl CoA', structuralChange:'OAA + acetyl CoA &rarr; citric acid', keyFeature:'3 NADH, 1 FADH<sub>2</sub>, 1 GTP per turn', example:'Hans Krebs'},
  {name:'Electron transport system', organ:'Inner mitochondrial membrane', purpose:'Pass electrons to O<sub>2</sub>', structuralChange:'Complexes I&ndash;IV, UQ, cyt c', keyFeature:'O<sub>2</sub> final acceptor &rarr; H<sub>2</sub>O', example:'NADH 3 ATP, FADH<sub>2</sub> 2 ATP'},
  {name:'ATP synthase (Complex V)', organ:'Inner mitochondrial membrane', purpose:'Make ATP', structuralChange:'F<sub>0</sub> channel + F<sub>1</sub> head', keyFeature:'4H<sup>+</sup> per ATP into matrix', example:'Oxidative phosphorylation'},
  {name:'Aerobic respiration', organ:'Cytoplasm + mitochondria', purpose:'Complete oxidation of glucose', structuralChange:'Glucose &rarr; CO<sub>2</sub> + H<sub>2</sub>O', keyFeature:'38 ATP; needs O<sub>2</sub>', example:'Most higher organisms'},
  {name:'Fermentation', organ:'Cytoplasm', purpose:'Partial oxidation of glucose', structuralChange:'Glucose &rarr; ethanol + CO<sub>2</sub> / lactic acid', keyFeature:'2 ATP; &lt; 7% energy', example:'Yeast, bacteria'},
  {name:'Carbohydrate as substrate', organ:'Favoured substrate', purpose:'Energy', structuralChange:'Enters as glucose', keyFeature:'RQ = 1', example:'Cereal seeds'},
  {name:'Fat as substrate', organ:'Alternative substrate', purpose:'Energy', structuralChange:'Fatty acids &rarr; acetyl CoA; glycerol &rarr; PGAL', keyFeature:'RQ = 0.7 (&lt; 1)', example:'Oil seeds'},
  {name:'Protein as substrate', organ:'Alternative substrate', purpose:'Energy', structuralChange:'Amino acids (deaminated) &rarr; pyruvate / acetyl CoA / TCA', keyFeature:'RQ &asymp; 0.9', example:'Proteases act first'}
];

/* ---------- Study tips ---------- */
const tips = {
  title:'Study Tips &ndash; Respiration in Plants',
  intro:'How to study this chapter well, and what to focus on for NEET and KCET.',
  theoryHead:'📘 Theory &mdash; How to Study This Chapter',
  neetHead:'🎯 NEET Strategy for This Chapter',
  theory:[
    'Learn the chapter as one journey of a glucose molecule: <b>cytoplasm</b> (glycolysis) &rarr; <b>matrix</b> (link reaction, Krebs&rsquo; cycle) &rarr; <b>inner membrane</b> (ETS, ATP synthase). For each stop, write &ldquo;where&rdquo;, &ldquo;what goes in&rdquo; and &ldquo;what comes out&rdquo;.',
    'Draw <b>glycolysis</b> as a ladder of 10 steps and mark only four things: the two <b>ATP used</b>, the one <b>NADH</b> step (PGAL &rarr; BPGA) and the two <b>ATP made</b> steps. Net = 2 ATP + 2 NADH.',
    'Draw the <b>Krebs&rsquo; cycle</b> as a clock: OAA at 12, citric acid at 2, &alpha;-ketoglutarate at 4, succinate at 7, malate at 10. Put the 2 CO<sub>2</sub>, 3 NADH, 1 FADH<sub>2</sub> and 1 GTP around it.',
    'For the ETS, remember the order <b>I &rarr; UQ &rarr; III &rarr; cyt c &rarr; IV &rarr; O<sub>2</sub></b>, with II feeding UQ and V making ATP. Then the numbers: NADH 3, FADH<sub>2</sub> 2, 4H<sup>+</sup> per ATP.',
    'Build the <b>balance sheet</b> table yourself (8 + 6 + 24 = 38) instead of memorising it; then write the four assumptions and the three fermentation-vs-aerobic differences beside it.'
  ],
  neet:[
    'Number questions are favourites: <b>10</b> steps of glycolysis, <b>2 / 4 / 2</b> ATP (used / made / net), <b>3 NADH + 1 FADH<sub>2</sub> + 1 GTP</b> per turn, <b>3 / 2</b> ATP per NADH / FADH<sub>2</sub>, <b>4H<sup>+</sup></b> per ATP, <b>38</b> ATP, <b>7%</b> and <b>13%</b> in fermentation, RQ <b>1 / 0.7 / 0.9</b>.',
    'Watch the traps: glycolysis is in the <b>cytoplasm</b> and releases <b>no CO<sub>2</sub></b>; the Krebs&rsquo; cycle uses <b>no O<sub>2</sub> directly</b>; lactic acid fermentation releases <b>no CO<sub>2</sub></b>; fats have RQ <b>less than 1</b>; ETS is in the <b>inner membrane</b>, not the matrix.',
    'Enzyme&ndash;step matching is common: invertase (sucrose), hexokinase (glucose &rarr; G-6-P), pyruvic acid decarboxylase + alcohol dehydrogenase (yeast), lactate dehydrogenase (muscle), pyruvate dehydrogenase (link reaction), citrate synthase (citric acid).',
    'Assertion&ndash;reason questions test the <b>why</b>: why O<sub>2</sub> is vital though used only at the end, why FADH<sub>2</sub> gives fewer ATP, why respiration is amphibolic, why the balance sheet is theoretical. Practise one-sentence answers.'
  ]
};

/* Important diagrams with our own drawn images (pu1-ch12-assets/diag-*.jpg) */
const diagrams = [
  {key:'tier1', fig:'Steps of Glycolysis (EMP Pathway)', marks:'5 M', pr:'high', prLabel:'★★★ Must Learn', labels:'Glucose, Glucose-6-phosphate, Fructose-6-phosphate, Fructose 1,6-bisphosphate, DHAP, PGAL, BPGA, 3-PGA, 2-PGA, PEP, Pyruvic acid, ATP &rarr; ADP, NAD<sup>+</sup> &rarr; NADH', src:'diag-glycolysis.jpg'},
  {key:'tier1', fig:'Citric Acid (Krebs&rsquo;) Cycle', marks:'5 M', pr:'high', prLabel:'★★★ Must Learn', labels:'Pyruvate, Acetyl CoA, OAA (4C), Citric acid (6C), &alpha;-Ketoglutaric acid (5C), Succinic acid (4C), Malic acid (4C), NADH + H<sup>+</sup>, FADH<sub>2</sub>, GDP &rarr; GTP, CO<sub>2</sub>', src:'diag-krebs.jpg'},
  {key:'tier1', fig:'Electron Transport System (ETS)', marks:'5 M', pr:'high', prLabel:'★★★ Must Learn', labels:'Inter-membrane space, Inner mitochondrial membrane, Matrix, Complex I&ndash;IV, Ubiquinone, Cytochrome c, O<sub>2</sub> &rarr; H<sub>2</sub>O, ATP synthase, H<sup>+</sup>', src:'diag-ets.jpg'},
  {key:'tier2', fig:'Major Pathways of Anaerobic Respiration', marks:'3 M', pr:'med', prLabel:'★★☆ High Probability', labels:'Glucose, Glyceraldehyde 3-phosphate, 3-Phosphoglyceric acid, PEP, Pyruvic acid, Lactic acid, Ethanol + CO<sub>2</sub>, NAD<sup>+</sup> / NADH + H<sup>+</sup>', src:'diag-fermentation.jpg'},
  {key:'tier2', fig:'ATP Synthesis in Mitochondria (ATP Synthase)', marks:'3 M', pr:'med', prLabel:'★★☆ High Probability', labels:'Outer side, Inner mitochondrial membrane, F<sub>0</sub>, F<sub>1</sub>, 4H<sup>+</sup>, ADP + P<sub>i</sub>, ATP, Matrix', src:'diag-atp-synthase.jpg'},
  {key:'tier2', fig:'Interrelationship Among Metabolic Pathways (Amphibolic)', marks:'3 M', pr:'med', prLabel:'★★☆ High Probability', labels:'Fats, Carbohydrates, Proteins, Fatty acids and glycerol, Glucose, Amino acids, Glucose-6-phosphate, PGAL, Pyruvic acid, Acetyl CoA, Krebs&rsquo; cycle, CO<sub>2</sub>, H<sub>2</sub>O', src:'diag-amphibolic.jpg'},
  {key:'tier3', fig:'Sites of Respiration in the Cell', marks:'2 M', pr:'mod', prLabel:'★☆☆ Key Structure', labels:'Cytoplasm (glycolysis), Mitochondrion, Outer membrane, Inner membrane (ETS), Cristae, Matrix (Krebs&rsquo; cycle)', src:'diag-sites.jpg'},
  {key:'tier3', fig:'Respiratory Quotient of Different Substrates', marks:'2 M', pr:'mod', prLabel:'★☆☆ Key Graph', labels:'Carbohydrate (RQ 1.0), Protein (RQ ~0.9), Fat (RQ 0.7), CO<sub>2</sub> evolved, O<sub>2</sub> consumed', src:'diag-rq.jpg'}
];
const diagramSections = [{key:'tier1',title:'Tier 1 — Highest Priority (5M)'},{key:'tier2',title:'Tier 2 — High Probability'},{key:'tier3',title:'Tier 3 — Key Structures & Graphs'}];

module.exports = {kcet, desc, board, glossary, tree, compare, tips, diagrams, diagramSections};
