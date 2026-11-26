/* PU-I Chapter 12 — Respiration in Plants: topics, Study Mode and Concepts (English).
   Source: Narendra Sir's typed notes + NCERT Class 11 Ch 12 (reprint 2026-27). Built into pu1-ch12.html by build.js. */
const topics = [
  {id:'breathe', name:'Respiration & Do Plants Breathe?'},
  {id:'glycolysis', name:'Glycolysis (EMP Pathway)'},
  {id:'fermentation', name:'Fermentation (Anaerobic Respiration)'},
  {id:'krebs', name:'Aerobic Respiration: Link Reaction & TCA Cycle'},
  {id:'ets', name:'ETS & Oxidative Phosphorylation'},
  {id:'balance', name:'Respiratory Balance Sheet'},
  {id:'amphibolic', name:'Amphibolic Pathway'},
  {id:'rq', name:'Respiratory Quotient (RQ)'}
];

const study = {
  'breathe': {
    recap: [
      '<b>Cellular respiration</b>: breaking of <b>C&ndash;C bonds</b> of complex compounds by <b>oxidation</b> within cells, releasing a considerable amount of energy',
      'Compounds oxidised are <b>respiratory substrates</b>; usually <b>carbohydrates</b>, but proteins, fats and even organic acids can be used',
      'Energy is released in <b>slow, step-wise, enzyme-controlled</b> reactions and trapped as <b>ATP</b>, the <b>energy currency</b> of the cell',
      'Plants have <b>no special respiratory organs</b>; gases are exchanged through <b>stomata</b> and <b>lenticels</b> by diffusion',
      'Every living plant cell is close to the surface, and <b>loosely packed parenchyma</b> gives an interconnected network of air spaces'
    ],
    sections: [
      {h:'Why Do Living Organisms Need Respiration?', body:'All living organisms need <b>energy</b> for daily life activities such as absorption, transport, movement, reproduction and even breathing. This energy comes from the <b>oxidation</b> of macromolecules we call <b>food</b>. Green plants and cyanobacteria make their own food by photosynthesis, trapping light energy as chemical energy in the bonds of carbohydrates like <b>glucose, sucrose and starch</b>. Even in green plants, only cells with chloroplasts photosynthesise, so food has to be <b>translocated to all non-green parts</b>. Ultimately <b>all the food that is respired comes from photosynthesis</b>.'},
      {h:'What Is Cellular Respiration?', body:'<b>Cellular respiration</b> is the mechanism of breakdown of food within the cell to release energy, and the trapping of this energy for the synthesis of <b>ATP</b>. The breaking of the <b>C&ndash;C bonds</b> of complex compounds through <b>oxidation</b> within cells, releasing considerable energy, is called <b>respiration</b>. In eukaryotes, photosynthesis takes place in chloroplasts, while the breakdown of complex molecules takes place in the <b>cytoplasm and the mitochondria</b>.'},
      {h:'Respiratory Substrates and ATP', body:'The compounds oxidised during respiration are called <b>respiratory substrates</b>. Usually <b>carbohydrates</b> are oxidised, but <b>proteins, fats and even organic acids</b> can be used in some plants under certain conditions. The energy is <b>not released all at once</b>: it is released in a series of <b>slow, step-wise reactions controlled by enzymes</b>, and is trapped as chemical energy in <b>ATP</b>. ATP is broken down whenever and wherever energy is needed, so ATP acts as the <b>energy currency of the cell</b>. The <b>carbon skeletons</b> produced during respiration are used as precursors for the biosynthesis of other molecules.'},
      {h:'Do Plants Breathe?', body:'Yes &mdash; plants need <b>O<sub>2</sub></b> for respiration and give out <b>CO<sub>2</sub></b>. But unlike animals, plants have <b>no specialised organs for gaseous exchange</b>; they have <b>stomata</b> and <b>lenticels</b>. Plants manage without respiratory organs for three reasons: (i) <b>each plant part takes care of its own gas-exchange needs</b>, with very little transport of gases from one part to another; (ii) plants <b>do not have great demands</b> for gas exchange &mdash; roots, stems and leaves respire at rates far lower than animals, and only during photosynthesis are large volumes exchanged (and then O<sub>2</sub> is released inside the cell itself); (iii) the <b>distance gases must diffuse is small</b>, because every living cell is close to the surface.'},
      {h:'How Gases Reach Every Cell', body:'In leaves, cells are close to the surface. In stems, the <b>living cells are organised in thin layers inside and beneath the bark</b>, and the stem has openings called <b>lenticels</b>; the cells in the interior are <b>dead</b> and give only mechanical support. So most plant cells have at least a part of their surface in contact with air. This is helped by the <b>loose packing of parenchyma cells</b> in leaves, stems and roots, which forms an <b>interconnected network of air spaces</b>.'},
      {h:'Combustion vs Step-wise Oxidation', body:'Complete <b>combustion</b> of glucose gives CO<sub>2</sub> and H<sub>2</sub>O and releases energy mostly as <b>heat</b>:<br><b>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> &rarr; 6CO<sub>2</sub> + 6H<sub>2</sub>O + Energy</b><br>The cell instead oxidises glucose <b>not in one step but in several small steps</b>, so that some steps release just enough energy to be <b>coupled to ATP synthesis</b>. The first cells probably lived without oxygen, and all living organisms still keep the enzymes to <b>partially oxidise glucose without O<sub>2</sub></b>. Organisms may be <b>facultative</b> or <b>obligate anaerobes</b>.'}
    ],
    table: {title:'Combustion vs Cellular Respiration', headers:['Feature','Combustion (burning)','Cellular respiration'], rows:[
      ['Steps','Single step','Many small, step-wise steps'],
      ['Control','Not controlled by enzymes','Each step controlled by an enzyme'],
      ['Energy released as','Mostly heat (and light)','Trapped as ATP; little lost as heat'],
      ['Temperature','Very high','Body / room temperature'],
      ['Intermediates','None useful','Carbon skeletons used for biosynthesis'],
      ['Where','Outside cells (fire)','Cytoplasm and mitochondria']
    ]},
    keyList: {title:'Why Plants Need No Lungs', items:[
      'Each plant part handles its own gas exchange; little transport of gases between parts',
      'Low demand: roots, stems and leaves respire far more slowly than animals',
      'Short diffusion distance: every living cell is near the surface; stomata and lenticels open to air',
      'Loose parenchyma forms a network of air spaces; interior cells of woody stems are dead'
    ]}
  },

  'glycolysis': {
    recap: [
      '<b>Glycolysis</b> (Greek <i>glycos</i> = sugar, <i>lysis</i> = splitting): glucose is partially oxidised to <b>2 molecules of pyruvic acid</b>',
      'Scheme given by <b>Embden, Meyerhof and Parnas</b> &mdash; the <b>EMP pathway</b>; occurs in the <b>cytoplasm</b> of all living organisms',
      'In anaerobic organisms it is the <b>only process</b> of respiration; it has <b>10 reactions</b>, each controlled by an enzyme',
      '<b>ATP used</b> at 2 steps (glucose &rarr; G-6-P by <b>hexokinase</b>; F-6-P &rarr; fructose 1,6-bisphosphate); <b>NADH</b> formed when <b>PGAL &rarr; BPGA</b>',
      '<b>ATP made</b> at BPGA &rarr; PGA and PEP &rarr; pyruvic acid (2 per triose, 4 per glucose): <b>net gain 2 ATP + 2 NADH</b> per glucose'
    ],
    sections: [
      {h:'What Is Glycolysis?', body:'The breakdown of glucose to pyruvic acid is called <b>glycolysis</b>. The term comes from the Greek words <b><i>glycos</i></b> (sugar) and <b><i>lysis</i></b> (splitting). The scheme of glycolysis was given by <b>Gustav Embden, Otto Meyerhof and J. Parnas</b>, so it is often called the <b>EMP pathway</b>. In anaerobic organisms it is the <b>only process</b> of respiration. Glycolysis occurs in the <b>cytoplasm</b> and is present in <b>all living organisms</b>. Glucose undergoes <b>partial oxidation</b> to form <b>two molecules of pyruvic acid</b>.'},
      {h:'Where Does the Glucose Come From?', body:'In plants, glucose is derived from <b>sucrose</b> (the end product of photosynthesis) or from <b>storage carbohydrates</b>. Sucrose is converted into <b>glucose and fructose</b> by the enzyme <b>invertase</b>, and both monosaccharides readily enter the glycolytic pathway. Glucose and fructose are <b>phosphorylated</b> to give <b>glucose-6-phosphate</b> by the enzyme <b>hexokinase</b>. This then <b>isomerises</b> to <b>fructose-6-phosphate</b>; after this, the steps for glucose and fructose are the same.'},
      {h:'The Energy-Investment Steps (ATP Used)', body:'Glycolysis is a chain of <b>ten reactions</b> under the control of different enzymes. <b>ATP is utilised at two steps</b>: (i) <b>glucose &rarr; glucose-6-phosphate</b> (hexokinase) and (ii) <b>fructose-6-phosphate &rarr; fructose 1,6-bisphosphate</b>. Fructose 1,6-bisphosphate (6C) is then <b>split</b> into two triose phosphates: <b>dihydroxyacetone phosphate (DHAP)</b> and <b>3-phosphoglyceraldehyde (PGAL)</b>, which are interconvertible.'},
      {h:'The Oxidation Step (NADH Formed)', body:'There is <b>one step where NADH + H<sup>+</sup> is formed</b> from NAD<sup>+</sup>: when <b>3-phosphoglyceraldehyde (PGAL)</b> is converted to <b>1,3-bisphosphoglycerate (BPGA)</b>. Two redox equivalents (two hydrogen atoms) are removed from PGAL and transferred to NAD<sup>+</sup>. PGAL is oxidised and, with <b>inorganic phosphate</b>, converted into BPGA. Since one glucose gives two PGAL, <b>2 NADH</b> are formed per glucose.'},
      {h:'The Energy-Payoff Steps (ATP Made)', body:'The conversion of <b>BPGA &rarr; 3-phosphoglyceric acid (PGA)</b> is energy-yielding; the energy is trapped as <b>ATP</b>. 3-PGA &rarr; 2-phosphoglycerate &rarr; (loses H<sub>2</sub>O) <b>phosphoenolpyruvate (PEP)</b>. Another <b>ATP</b> is made when <b>PEP &rarr; pyruvic acid</b>. These are <b>substrate-level phosphorylations</b>. Per glucose: <b>4 ATP made &minus; 2 ATP used = net 2 ATP</b>, plus <b>2 NADH + H<sup>+</sup></b>.'},
      {h:'Fate of Pyruvic Acid', body:'<b>Pyruvic acid</b> is the key product of glycolysis. Its fate depends on the cell&rsquo;s needs. There are <b>three major ways</b> to handle it: <b>lactic acid fermentation</b>, <b>alcoholic fermentation</b> and <b>aerobic respiration</b>. Fermentation occurs under <b>anaerobic</b> conditions in many prokaryotes and unicellular eukaryotes. For the <b>complete oxidation</b> of glucose to CO<sub>2</sub> and H<sub>2</sub>O, organisms use the <b>Krebs&rsquo; cycle</b> (aerobic respiration), which needs O<sub>2</sub>.'}
    ],
    table: {title:'Key Steps of Glycolysis (per glucose)', headers:['Step','Enzyme / event','ATP / NADH'], rows:[
      ['Glucose &rarr; Glucose-6-phosphate','Hexokinase (phosphorylation)','1 ATP used'],
      ['Fructose-6-phosphate &rarr; Fructose 1,6-bisphosphate','Phosphorylation','1 ATP used'],
      ['Fructose 1,6-bisphosphate &rarr; DHAP + PGAL','Splitting into two trioses','&mdash;'],
      ['2 PGAL &rarr; 2 BPGA','Oxidation with P<sub>i</sub>','2 NADH formed'],
      ['2 BPGA &rarr; 2 PGA','Substrate-level phosphorylation','2 ATP made'],
      ['2 PEP &rarr; 2 Pyruvic acid','Substrate-level phosphorylation','2 ATP made']
    ]},
    keyList: {title:'Glycolysis in Numbers', items:[
      '10 reactions; occurs in cytoplasm; no O<sub>2</sub> needed',
      'ATP used: 2 &nbsp;|&nbsp; ATP made: 4 &nbsp;|&nbsp; Net ATP: 2',
      'NADH + H<sup>+</sup> formed: 2 (at PGAL &rarr; BPGA)',
      'End product: 2 pyruvic acid (3C) from 1 glucose (6C)'
    ]}
  },

  'fermentation': {
    recap: [
      '<b>Fermentation</b>: incomplete oxidation of glucose under <b>anaerobic</b> conditions',
      '<b>Alcoholic fermentation</b> (yeast): pyruvic acid &rarr; <b>CO<sub>2</sub> + ethanol</b> by <b>pyruvic acid decarboxylase</b> and <b>alcohol dehydrogenase</b>',
      '<b>Lactic acid fermentation</b> (some bacteria; muscles during exercise): pyruvic acid &rarr; <b>lactic acid</b> by <b>lactate dehydrogenase</b>',
      'In both, <b>NADH + H<sup>+</sup></b> is the reducing agent and is <b>reoxidised to NAD<sup>+</sup></b>',
      'Less than <b>7%</b> of the energy in glucose is released; the products (acid or alcohol) are <b>hazardous</b>; yeasts die at about <b>13% alcohol</b>'
    ],
    sections: [
      {h:'What Is Fermentation?', body:'In <b>fermentation</b>, say by <b>yeast</b>, the <b>incomplete oxidation</b> of glucose is achieved under <b>anaerobic conditions</b> by a set of reactions in which pyruvic acid is converted into <b>CO<sub>2</sub> and ethanol</b>. Fermentation takes place under anaerobic conditions in many <b>prokaryotes</b>, <b>unicellular eukaryotes</b> and in <b>germinating seeds</b>.'},
      {h:'Alcoholic Fermentation', body:'In yeast, pyruvic acid is first <b>decarboxylated</b> by <b>pyruvic acid decarboxylase</b> (CO<sub>2</sub> is removed), and the product is then <b>reduced to ethanol</b> by <b>alcohol dehydrogenase</b>, using <b>NADH + H<sup>+</sup></b>. Overall:<br><b>Pyruvic acid &rarr; Ethanol + CO<sub>2</sub></b> (NADH + H<sup>+</sup> &rarr; NAD<sup>+</sup>)'},
      {h:'Lactic Acid Fermentation', body:'Some organisms, like <b>some bacteria</b>, produce <b>lactic acid</b> from pyruvic acid. In animal cells too, such as <b>muscles during exercise</b>, when oxygen is inadequate, pyruvic acid is <b>reduced to lactic acid</b> by the enzyme <b>lactate dehydrogenase</b>. The reducing agent is <b>NADH + H<sup>+</sup></b>, which is <b>reoxidised to NAD<sup>+</sup></b>. No CO<sub>2</sub> is released.'},
      {h:'Why Is Fermentation Inefficient?', body:'In both lactic acid and alcoholic fermentation, <b>not much energy is released</b>: <b>less than seven per cent</b> of the energy in glucose is released, and not all of it is trapped as ATP. The <b>net gain is only 2 ATP</b> per glucose (from glycolysis). The processes are also <b>hazardous</b> &mdash; either <b>acid or alcohol</b> is produced. <b>Yeasts poison themselves to death</b> when the concentration of alcohol reaches about <b>13 per cent</b>, so naturally fermented beverages cannot exceed about 13% alcohol; stronger drinks are made by <b>distillation</b>.'},
      {h:'Why Regenerate NAD<sup>+</sup>?', body:'Glycolysis uses NAD<sup>+</sup> at the PGAL &rarr; BPGA step. A cell has only a small amount of NAD<sup>+</sup>, so without oxygen, glycolysis would stop once all NAD<sup>+</sup> became NADH. Fermentation <b>reoxidises NADH to NAD<sup>+</sup></b> (rather slowly), so that glycolysis can <b>keep running</b> and keep making its 2 ATP.'}
    ],
    table: {title:'Alcoholic vs Lactic Acid Fermentation', headers:['Feature','Alcoholic fermentation','Lactic acid fermentation'], rows:[
      ['Organisms','Yeast','Some bacteria; animal muscle cells (low O<sub>2</sub>)'],
      ['End products','Ethanol + CO<sub>2</sub>','Lactic acid (no CO<sub>2</sub>)'],
      ['Enzymes','Pyruvic acid decarboxylase, alcohol dehydrogenase','Lactate dehydrogenase'],
      ['NADH','Reoxidised to NAD<sup>+</sup>','Reoxidised to NAD<sup>+</sup>'],
      ['Net ATP per glucose','2','2']
    ]},
    keyList: {title:'Fermentation Facts to Remember', items:[
      'Less than 7% of the energy in glucose is released',
      'Yeast dies at about 13% alcohol; higher-alcohol drinks are distilled',
      'Muscle cramps/fatigue after exercise: lactic acid build-up',
      'Net gain: only 2 ATP per glucose (all from glycolysis)'
    ]}
  },

  'krebs': {
    recap: [
      'Pyruvate enters the <b>mitochondrial matrix</b> and undergoes <b>oxidative decarboxylation</b> by <b>pyruvate dehydrogenase</b> (needs NAD<sup>+</sup>, CoA, Mg<sup>2+</sup>) &rarr; <b>acetyl CoA + CO<sub>2</sub> + NADH</b>',
      '<b>TCA / Krebs&rsquo; / citric acid cycle</b> (Hans Krebs) occurs in the <b>matrix</b>; acetyl CoA + <b>OAA (4C)</b> + H<sub>2</sub>O &rarr; <b>citric acid (6C)</b> by <b>citrate synthase</b>',
      'Citrate &rarr; isocitrate &rarr; two decarboxylations &rarr; <b>&alpha;-ketoglutaric acid (5C)</b> &rarr; <b>succinyl CoA</b> &rarr; succinic acid &rarr; &hellip; &rarr; OAA',
      'Per turn: <b>3 NADH</b>, <b>1 FADH<sub>2</sub></b>, <b>1 GTP</b> (&rarr; ATP, substrate-level phosphorylation) and <b>2 CO<sub>2</sub></b>',
      'The cycle needs continued replenishment of <b>OAA</b> and regeneration of <b>NAD<sup>+</sup> and FAD<sup>+</sup></b>'
    ],
    sections: [
      {h:'Two Crucial Events of Aerobic Respiration', body:'For aerobic respiration, pyruvate (the final product of glycolysis) is transported from the cytoplasm into the <b>mitochondria</b>. The crucial events are: (i) the <b>complete oxidation of pyruvate</b> by stepwise removal of all the hydrogen atoms, leaving <b>three molecules of CO<sub>2</sub></b>; and (ii) passing the <b>electrons</b> removed as part of the hydrogen atoms to <b>molecular O<sub>2</sub></b> with simultaneous synthesis of ATP. The first takes place in the <b>matrix</b>; the second on the <b>inner mitochondrial membrane</b>.'},
      {h:'Link Reaction: Pyruvate to Acetyl CoA', body:'In the mitochondrial matrix, pyruvate undergoes <b>oxidative decarboxylation</b> by a complex set of reactions catalysed by <b>pyruvic dehydrogenase</b>, which needs several coenzymes including <b>NAD<sup>+</sup></b> and <b>Coenzyme A</b>:<br><b>Pyruvic acid + CoA + NAD<sup>+</sup> &rarr; Acetyl CoA + CO<sub>2</sub> + NADH + H<sup>+</sup></b> (Mg<sup>2+</sup>, pyruvate dehydrogenase)<br>Two pyruvates (from one glucose) give <b>2 NADH</b>. This step links glycolysis to the Krebs&rsquo; cycle, so it is often called the <b>link reaction</b> or <b>gateway step</b>.'},
      {h:'Start of the TCA Cycle', body:'Acetyl CoA enters a cyclic pathway, the <b>tricarboxylic acid (TCA) cycle</b>, commonly called the <b>Krebs&rsquo; cycle</b> after <b>Hans Krebs</b> who first explained it. The cycle starts with the <b>condensation</b> of the <b>acetyl group</b> with <b>oxaloacetic acid (OAA)</b> and water to yield <b>citric acid</b>; the enzyme is <b>citrate synthase</b>, and a molecule of <b>CoA is released</b>. Citrate is then <b>isomerised to isocitrate</b>.'},
      {h:'Decarboxylations and GTP', body:'Isocitrate undergoes <b>two successive decarboxylations</b>, forming <b>&alpha;-ketoglutaric acid</b> (5C) and then <b>succinyl-CoA</b>. In the remaining steps, succinyl-CoA is oxidised back to <b>OAA</b>, so the cycle continues. During the conversion of <b>succinyl-CoA to succinic acid</b>, a molecule of <b>GTP</b> is synthesised &mdash; a <b>substrate-level phosphorylation</b>. In a coupled reaction, GTP is converted to GDP with the simultaneous synthesis of <b>ATP from ADP</b>.'},
      {h:'Reduced Coenzymes per Turn', body:'There are <b>three points</b> in the cycle where <b>NAD<sup>+</sup> is reduced to NADH + H<sup>+</sup></b> and <b>one point</b> where <b>FAD<sup>+</sup> is reduced to FADH<sub>2</sub></b> (succinic acid &rarr; fumaric acid). The continued oxidation of acetyl CoA needs <b>continued replenishment of OAA</b>, the first member of the cycle, and <b>regeneration of NAD<sup>+</sup> and FAD<sup>+</sup></b> from NADH and FADH<sub>2</sub>.'},
      {h:'Summary Equation', body:'<b>Pyruvic acid + 4NAD<sup>+</sup> + FAD<sup>+</sup> + 2H<sub>2</sub>O + ADP + P<sub>i</sub> &rarr; 3CO<sub>2</sub> + 4NADH + 4H<sup>+</sup> + FADH<sub>2</sub> + ATP</b> (mitochondrial matrix)<br>So far, glucose has been broken down to CO<sub>2</sub>, and <b>8 NADH + H<sup>+</sup></b> and <b>2 FADH<sub>2</sub></b> have been made (link reaction + TCA, for two pyruvates), besides just <b>2 ATP</b> in the TCA cycle. O<sub>2</sub> has not yet come into the picture &mdash; that happens in the ETS.'}
    ],
    table: {title:'Krebs&rsquo; Cycle: What Each Step Gives', headers:['Step','Change','Product'], rows:[
      ['Acetyl CoA + OAA + H<sub>2</sub>O &rarr; Citric acid','Condensation (citrate synthase)','CoA released'],
      ['Isocitrate &rarr; &alpha;-Ketoglutaric acid','Oxidative decarboxylation','NADH + CO<sub>2</sub>'],
      ['&alpha;-Ketoglutaric acid &rarr; Succinyl CoA','Oxidative decarboxylation','NADH + CO<sub>2</sub>'],
      ['Succinyl CoA &rarr; Succinic acid','Substrate-level phosphorylation','GTP &rarr; ATP'],
      ['Succinic acid &rarr; Fumaric acid','Oxidation','FADH<sub>2</sub>'],
      ['Malic acid &rarr; OAA','Oxidation','NADH']
    ]},
    keyList: {title:'Count It Up (per glucose = 2 turns)', items:[
      'Link reaction: 2 NADH + 2 CO<sub>2</sub>',
      'TCA cycle: 6 NADH + 2 FADH<sub>2</sub> + 2 ATP (via GTP) + 4 CO<sub>2</sub>',
      'Total CO<sub>2</sub> from mitochondria: 6 (3 per pyruvate)',
      'First member of the cycle: OAA (4C); first product: citric acid (6C)'
    ]}
  },

  'ets': {
    recap: [
      '<b>ETS</b>: the pathway through which electrons pass from one carrier to another; located in the <b>inner mitochondrial membrane</b>',
      '<b>Complex I</b> (NADH dehydrogenase) &rarr; <b>ubiquinone</b> (also gets electrons from FADH<sub>2</sub> via <b>Complex II</b>) &rarr; <b>Complex III</b> (cytochrome bc<sub>1</sub>) &rarr; <b>cytochrome c</b> &rarr; <b>Complex IV</b> (cytochrome c oxidase: cyt a, a<sub>3</sub>, 2 copper centres) &rarr; O<sub>2</sub>',
      '<b>Complex V</b> = <b>ATP synthase</b>; <b>1 NADH &rarr; 3 ATP</b>, <b>1 FADH<sub>2</sub> &rarr; 2 ATP</b>',
      '<b>O<sub>2</sub></b> is the <b>final hydrogen acceptor</b>, forming H<sub>2</sub>O; it drives the whole process by removing hydrogen',
      'ATP synthase: <b>F<sub>0</sub></b> (proton channel) + <b>F<sub>1</sub></b> (ATP-making head); <b>4H<sup>+</sup></b> pass through F<sub>0</sub> per ATP'
    ],
    sections: [
      {h:'What Is the ETS?', body:'The energy stored in <b>NADH + H<sup>+</sup></b> and <b>FADH<sub>2</sub></b> is released when they are oxidised through the <b>electron transport system (ETS)</b> and the electrons are passed on to <b>O<sub>2</sub></b>, forming <b>H<sub>2</sub>O</b>. The metabolic pathway through which electrons pass from one carrier to another is the ETS, present in the <b>inner mitochondrial membrane</b>.'},
      {h:'Complexes I, II and Ubiquinone', body:'Electrons from NADH produced in the matrix during the citric acid cycle are oxidised by <b>NADH dehydrogenase (Complex I)</b>, and the electrons are transferred to <b>ubiquinone</b>, located within the inner membrane. Ubiquinone also receives reducing equivalents via <b>FADH<sub>2</sub> (Complex II)</b>, generated during the oxidation of <b>succinate</b> in the citric acid cycle.'},
      {h:'Complexes III and IV, and Cytochrome c', body:'The reduced ubiquinone (<b>ubiquinol</b>) is oxidised with the transfer of electrons to <b>cytochrome c</b> via the <b>cytochrome bc<sub>1</sub> complex (Complex III)</b>. <b>Cytochrome c</b> is a small protein attached to the <b>outer surface of the inner membrane</b>; it is a <b>mobile carrier</b> between Complex III and Complex IV. <b>Complex IV</b> is the <b>cytochrome c oxidase</b> complex, containing <b>cytochromes a and a<sub>3</sub></b> and <b>two copper centres</b>.'},
      {h:'ATP Production and the Role of Oxygen', body:'As electrons pass from one carrier to another via Complex I to IV, they are <b>coupled to ATP synthase (Complex V)</b> for the production of ATP from ADP and P<sub>i</sub>. The number of ATP depends on the electron donor: <b>1 NADH gives 3 ATP</b>; <b>1 FADH<sub>2</sub> gives 2 ATP</b>. The role of oxygen is limited to the <b>terminal stage</b>, yet it is <b>vital</b>: it drives the whole process by <b>removing hydrogen</b> from the system. Oxygen is the <b>final hydrogen acceptor</b>.'},
      {h:'Why &ldquo;Oxidative&rdquo; Phosphorylation?', body:'In <b>photophosphorylation</b>, <b>light energy</b> is used to build the proton gradient. In respiration, it is the <b>energy of oxidation&ndash;reduction</b> that builds it. That is why ATP synthesis in mitochondria is called <b>oxidative phosphorylation</b>. The mechanism is explained by the <b>chemiosmotic hypothesis</b>.'},
      {h:'ATP Synthase (Complex V)', body:'ATP synthase has two major components, <b>F<sub>1</sub></b> and <b>F<sub>0</sub></b>. The <b>F<sub>1</sub> headpiece</b> is a <b>peripheral membrane protein complex</b> with the site for synthesis of ATP from ADP and P<sub>i</sub>. <b>F<sub>0</sub></b> is an <b>integral membrane protein complex</b> that forms the <b>channel</b> through which protons cross the inner membrane. The passage of protons is coupled to the catalytic site of F<sub>1</sub>. For each ATP produced, <b>4H<sup>+</sup></b> pass through F<sub>0</sub> from the <b>intermembrane space to the matrix</b>, down the electrochemical proton gradient.'}
    ],
    table: {title:'Complexes of the Respiratory Chain', headers:['Complex','Name','Role'], rows:[
      ['I','NADH dehydrogenase','Oxidises NADH; passes electrons to ubiquinone'],
      ['II','Succinate dehydrogenase (FADH<sub>2</sub>)','Passes electrons from FADH<sub>2</sub> to ubiquinone'],
      ['III','Cytochrome bc<sub>1</sub> complex','Ubiquinol &rarr; cytochrome c'],
      ['IV','Cytochrome c oxidase (cyt a, a<sub>3</sub>, 2 Cu centres)','Passes electrons to O<sub>2</sub> &rarr; H<sub>2</sub>O'],
      ['V','ATP synthase (F<sub>0</sub> + F<sub>1</sub>)','Makes ATP as 4H<sup>+</sup> flow into the matrix']
    ]},
    keyList: {title:'Mobile Carriers and Numbers', items:[
      'Ubiquinone: mobile carrier within the inner membrane (I/II &rarr; III)',
      'Cytochrome c: mobile carrier on the outer surface of the inner membrane (III &rarr; IV)',
      'NADH &rarr; 3 ATP; FADH<sub>2</sub> &rarr; 2 ATP; 4H<sup>+</sup> per ATP',
      'Final electron (hydrogen) acceptor: O<sub>2</sub> &rarr; H<sub>2</sub>O'
    ]}
  },

  'balance': {
    recap: [
      'The <b>respiratory balance sheet</b> calculates the <b>net gain of ATP</b> per glucose oxidised &mdash; only a <b>theoretical</b> exercise',
      'Assumptions: an <b>orderly, sequential pathway</b> (glycolysis &rarr; TCA &rarr; ETS); glycolytic <b>NADH enters mitochondria</b>; <b>no intermediates</b> withdrawn; <b>only glucose</b> respired',
      'These assumptions are <b>not valid</b> in a living system: pathways run simultaneously and substrates enter and leave as needed',
      'Net gain: <b>38 ATP</b> per glucose in aerobic respiration',
      'Fermentation: partial breakdown, <b>net 2 ATP</b>, NADH oxidised <b>slowly</b>; aerobic: complete breakdown, many ATP, NADH oxidised <b>vigorously</b>'
    ],
    sections: [
      {h:'What Is the Balance Sheet?', body:'It is possible to calculate the <b>net gain of ATP</b> for every glucose molecule oxidised, but in reality this can remain only a <b>theoretical exercise</b>. The calculation is made only on certain <b>assumptions</b>.'},
      {h:'Assumptions', body:'(i) There is a <b>sequential, orderly pathway</b>, with one substrate forming the next, and with <b>glycolysis, TCA cycle and ETS</b> following one after another. (ii) The <b>NADH synthesised in glycolysis</b> is transferred into the mitochondria and undergoes oxidative phosphorylation. (iii) <b>None of the intermediates</b> are used to synthesise any other compound. (iv) <b>Only glucose</b> is being respired; no alternative substrates enter at any intermediate stage.'},
      {h:'Why the Assumptions Are Not Real', body:'Such assumptions are <b>not really valid</b> in a living system: all pathways <b>work simultaneously</b> and not one after another; substrates <b>enter and are withdrawn</b> as and when necessary; ATP is used as and when needed; and enzyme rates are controlled by multiple means. Yet the exercise is useful to appreciate the <b>beauty and efficiency</b> of the living system in extracting and storing energy.'},
      {h:'Counting the 38 ATP', body:'Per glucose: <b>Glycolysis</b> gives a net <b>2 ATP</b> directly and <b>2 NADH</b> (&times; 3 = 6 ATP) &rarr; 8 ATP. The <b>link reaction</b> gives <b>2 NADH</b> (&times; 3 = 6 ATP). The <b>Krebs&rsquo; cycle</b> (2 turns) gives <b>2 ATP</b> (via GTP), <b>6 NADH</b> (&times; 3 = 18 ATP) and <b>2 FADH<sub>2</sub></b> (&times; 2 = 4 ATP) &rarr; 24 ATP. <b>Total = 8 + 6 + 24 = 38 ATP</b>. NCERT states there can be a <b>net gain of 38 ATP</b> during aerobic respiration of one glucose.'},
      {h:'Fermentation vs Aerobic Respiration', body:'(i) Fermentation is only a <b>partial breakdown</b> of glucose, whereas in aerobic respiration glucose is <b>completely degraded</b> to CO<sub>2</sub> and H<sub>2</sub>O. (ii) Fermentation gives a <b>net gain of only 2 ATP</b> per glucose, whereas many more ATP are made under aerobic conditions. (iii) NADH is oxidised to NAD<sup>+</sup> <b>rather slowly</b> in fermentation, but <b>very vigorously</b> in aerobic respiration.'}
    ],
    table: {title:'ATP Balance Sheet (per glucose)', headers:['Stage','Direct ATP','Reduced coenzymes','ATP via ETS','Total'], rows:[
      ['Glycolysis','2 (net)','2 NADH','6','8'],
      ['Link reaction (pyruvate &rarr; acetyl CoA)','0','2 NADH','6','6'],
      ['Krebs&rsquo; cycle (2 turns)','2 (GTP)','6 NADH + 2 FADH<sub>2</sub>','18 + 4','24'],
      ['<b>Total</b>','<b>4</b>','<b>10 NADH + 2 FADH<sub>2</sub></b>','<b>34</b>','<b>38</b>']
    ]},
    keyList: {title:'Remember', items:[
      'Net gain per glucose: 38 ATP (aerobic) vs 2 ATP (fermentation)',
      'Direct (substrate-level) ATP: 4; ETS (oxidative) ATP: 34',
      'Total NADH: 10; total FADH<sub>2</sub>: 2',
      'Balance sheet is theoretical: real pathways run simultaneously'
    ]}
  },

  'amphibolic': {
    recap: [
      '<b>Glucose</b> is the favoured respiratory substrate; other carbohydrates are first converted to glucose',
      '<b>Fats</b> &rarr; glycerol + fatty acids; fatty acids &rarr; <b>acetyl CoA</b>; glycerol &rarr; <b>PGAL</b>',
      '<b>Proteins</b> &rarr; amino acids (by <b>proteases</b>); after <b>deamination</b> they enter as <b>pyruvate, acetyl CoA</b> or within the <b>Krebs&rsquo; cycle</b>',
      'The same intermediates are <b>withdrawn</b> to synthesise fats and proteins (e.g. acetyl CoA &rarr; fatty acids)',
      'Respiration is involved in both <b>catabolism</b> and <b>anabolism</b>, so it is an <b>amphibolic pathway</b>'
    ],
    sections: [
      {h:'Glucose Is the Favoured Substrate', body:'<b>Glucose</b> is the favoured substrate for respiration. All carbohydrates are usually first converted into glucose before they are used. Other substrates can also be respired, but they <b>do not enter at the first step</b>; they enter at different points of the respiratory pathway (Figure 12.6).'},
      {h:'Entry Points of Fats', body:'<b>Fats</b> are first broken down into <b>glycerol and fatty acids</b>. If <b>fatty acids</b> are respired, they are first degraded to <b>acetyl CoA</b> and enter the pathway. <b>Glycerol</b> enters the pathway after being converted to <b>PGAL</b> (3-phosphoglyceraldehyde).'},
      {h:'Entry Points of Proteins', body:'<b>Proteins</b> are degraded by <b>proteases</b> into individual <b>amino acids</b>. After <b>deamination</b> (removal of the amino group), depending on their structure, they enter the pathway at some stage <b>within the Krebs&rsquo; cycle</b>, or even as <b>pyruvate</b> or <b>acetyl CoA</b>.'},
      {h:'Catabolic or Amphibolic?', body:'Because respiration breaks down substrates, it was traditionally called <b>catabolic</b>. But the very compounds at which substrates enter are <b>withdrawn</b> from the pathway for the <b>synthesis</b> of those substrates. Fatty acids are broken down to acetyl CoA when respired; but when the organism needs to <b>make fatty acids</b>, acetyl CoA is <b>withdrawn</b> from the pathway. Similarly, respiratory intermediates link the breakdown and synthesis of <b>proteins</b>. Breaking down is <b>catabolism</b> and building up is <b>anabolism</b>; since the respiratory pathway is involved in <b>both</b>, it is better called an <b>amphibolic pathway</b>.'},
      {h:'Metabolic Sink and Gateway Step', body:'Because carbohydrates, fats and proteins all funnel into the Krebs&rsquo; cycle for complete oxidation, the cycle is often described as a <b>metabolic sink</b> (common pathway). The formation of <b>acetyl CoA</b> from pyruvate is called the <b>gateway step</b> or <b>link reaction</b>, as it links glycolysis with the Krebs&rsquo; cycle.'}
    ],
    table: {title:'Where Each Substrate Enters', headers:['Substrate','Broken down to','Enters the pathway as'], rows:[
      ['Carbohydrates','Glucose (simple sugars)','Glucose-6-phosphate (start of glycolysis)'],
      ['Fats: fatty acids','Fatty acids','Acetyl CoA'],
      ['Fats: glycerol','Glycerol','PGAL (3-phosphoglyceraldehyde)'],
      ['Proteins','Amino acids (deaminated)','Pyruvate, acetyl CoA or Krebs&rsquo; cycle intermediates']
    ]},
    keyList: {title:'Amphibolic in One Line Each', items:[
      'Catabolism: breakdown of substrates to release energy',
      'Anabolism: withdrawal of intermediates to build fats, proteins',
      'Acetyl CoA: used for breakdown and for synthesis of fatty acids',
      'Respiratory pathway = amphibolic pathway (both)'
    ]}
  },

  'rq': {
    recap: [
      '<b>Respiratory quotient (RQ)</b> or respiratory ratio = <b>volume of CO<sub>2</sub> evolved / volume of O<sub>2</sub> consumed</b>',
      'RQ depends on the <b>type of respiratory substrate</b>',
      '<b>Carbohydrates</b>: RQ = <b>1</b> (6CO<sub>2</sub> / 6O<sub>2</sub>)',
      '<b>Fats</b>: RQ <b>&lt; 1</b>; tripalmitin: 102CO<sub>2</sub> / 145O<sub>2</sub> = <b>0.7</b>',
      '<b>Proteins</b>: RQ about <b>0.9</b>; in living organisms substrates are often more than one; pure proteins or fats are never used'
    ],
    sections: [
      {h:'Definition', body:'During aerobic respiration, O<sub>2</sub> is consumed and CO<sub>2</sub> is released. The <b>ratio of the volume of CO<sub>2</sub> evolved to the volume of O<sub>2</sub> consumed</b> in respiration is called the <b>respiratory quotient (RQ)</b> or <b>respiratory ratio</b>.<br><b>RQ = Volume of CO<sub>2</sub> evolved / Volume of O<sub>2</sub> consumed</b>'},
      {h:'RQ of Carbohydrates = 1', body:'When <b>carbohydrates</b> are used and completely oxidised, <b>equal amounts</b> of CO<sub>2</sub> and O<sub>2</sub> are evolved and consumed:<br><b>C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> &rarr; 6CO<sub>2</sub> + 6H<sub>2</sub>O + Energy</b><br><b>RQ = 6CO<sub>2</sub> / 6O<sub>2</sub> = 1.0</b>'},
      {h:'RQ of Fats &lt; 1', body:'When <b>fats</b> are used, RQ is <b>less than 1</b>, because fats have little oxygen in their molecule and need more O<sub>2</sub> for oxidation. For the fatty acid <b>tripalmitin</b>:<br><b>2(C<sub>51</sub>H<sub>98</sub>O<sub>6</sub>) + 145O<sub>2</sub> &rarr; 102CO<sub>2</sub> + 98H<sub>2</sub>O + energy</b><br><b>RQ = 102CO<sub>2</sub> / 145O<sub>2</sub> = 0.7</b>'},
      {h:'RQ of Proteins', body:'When <b>proteins</b> are the respiratory substrates, the RQ is about <b>0.9</b>.'},
      {h:'Mixed Substrates in Real Life', body:'In living organisms, respiratory substrates are <b>often more than one</b>; <b>pure proteins or fats are never used</b> as respiratory substrates. So the measured RQ of a tissue tells us which substrate is <b>mainly</b> being respired: close to 1 (carbohydrates, e.g. cereal seeds), close to 0.7 (fats, e.g. germinating oil seeds).'}
    ],
    table: {title:'RQ of Different Substrates', headers:['Substrate','Equation / example','RQ'], rows:[
      ['Carbohydrate (glucose)','C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub> &rarr; 6CO<sub>2</sub> + 6H<sub>2</sub>O','1.0'],
      ['Fat (tripalmitin)','2(C<sub>51</sub>H<sub>98</sub>O<sub>6</sub>) + 145O<sub>2</sub> &rarr; 102CO<sub>2</sub> + 98H<sub>2</sub>O','0.7 (less than 1)'],
      ['Protein','&mdash;','About 0.9']
    ]},
    keyList: {title:'RQ Quick Recall', items:[
      'RQ = CO<sub>2</sub> evolved &divide; O<sub>2</sub> consumed (volumes)',
      'Carbohydrate 1.0 &gt; Protein ~0.9 &gt; Fat 0.7',
      'Fats need more O<sub>2</sub> because they are poor in oxygen',
      'RQ depends on the type of respiratory substrate'
    ]}
  }
};

const concepts = {
  'breathe': {
    hook:'A huge banyan tree has no lungs, no nose and no blood &mdash; yet every one of its living cells takes in oxygen and gives out CO<sub>2</sub> every second. How does oxygen reach a cell deep inside a thick trunk?',
    chain:[
      'All life activities need energy, which comes from oxidising food made by photosynthesis.',
      'Respiration breaks C&ndash;C bonds of food step by step, under enzyme control, and traps the energy as ATP.',
      'Plants exchange gases through stomata and lenticels, by simple diffusion.',
      'Each plant part handles its own gas exchange, demand is low, and every living cell is close to the surface.',
      'Loose parenchyma forms connected air spaces, and the interior of woody stems is dead, so O<sub>2</sub> easily reaches all living cells.'
    ],
    misconceptions:[
      {wrong:'Plants do not respire; they only photosynthesise.', right:'Every living plant cell respires all the time, day and night; photosynthesis happens only in green cells in light.'},
      {wrong:'Respiration and breathing are the same.', right:'Breathing is gas exchange; respiration is the oxidation of food inside cells to make ATP.'},
      {wrong:'All the energy of glucose is released at once, like burning.', right:'In cells it is released in many small enzyme-controlled steps, so much of it can be trapped as ATP.'}
    ],
    analogy:'Respiration is like breaking a big currency note into small coins: one huge burst of energy (combustion) is useless to a cell, but many small &ldquo;coins&rdquo; of ATP can be spent exactly where needed.',
    analytical:[
      {q:'Why can a tall tree survive without a transport system for gases?', a:'Its living cells lie in thin layers just under the bark, close to lenticels; the inner wood is dead and needs no O<sub>2</sub>. Diffusion over these short distances is enough.'},
      {q:'Why do plants not need O<sub>2</sub> to be carried to photosynthesising cells during the day?', a:'Photosynthesis releases O<sub>2</sub> inside the same cells, so O<sub>2</sub> is readily available there for respiration.'}
    ]
  },
  'glycolysis': {
    hook:'Every living cell on earth &mdash; bacterium, yeast, root or human muscle &mdash; splits sugar the same way, with the same ten reactions. Why would such an ancient pathway still be in every cell?',
    chain:[
      'Glucose (from sucrose via invertase, or from starch) is phosphorylated by hexokinase to glucose-6-phosphate.',
      'Two ATP are invested to make fructose 1,6-bisphosphate, which splits into two 3-carbon sugars (PGAL and DHAP).',
      'Each PGAL is oxidised to BPGA, and NAD<sup>+</sup> is reduced to NADH + H<sup>+</sup>.',
      'BPGA &rarr; PGA and PEP &rarr; pyruvate each give ATP by substrate-level phosphorylation: 4 ATP made in all.',
      'Net result: 2 pyruvate, 2 ATP and 2 NADH per glucose, in the cytoplasm, without O<sub>2</sub>.'
    ],
    misconceptions:[
      {wrong:'Glycolysis occurs in the mitochondria.', right:'Glycolysis occurs in the cytoplasm; only the Krebs&rsquo; cycle and ETS are mitochondrial.'},
      {wrong:'Glycolysis gives 4 ATP per glucose.', right:'4 ATP are made but 2 are used, so the net gain is 2 ATP.'},
      {wrong:'Glycolysis needs oxygen.', right:'Glycolysis is anaerobic; it is the only respiratory process in anaerobes.'}
    ],
    analogy:'Glycolysis is like a small business: you invest 2 rupees (2 ATP) to start, sell two products and earn 4 rupees, so you keep a profit of 2 &mdash; and you also earn 2 &ldquo;cheques&rdquo; (NADH) that can be cashed later in the mitochondria.',
    analytical:[
      {q:'Why is glycolysis thought to be the most ancient respiratory pathway?', a:'It needs no O<sub>2</sub>, occurs in the cytoplasm and is found in all living organisms; the first cells lived in an atmosphere without oxygen.'},
      {q:'At which step is NAD<sup>+</sup> needed, and what happens if NAD<sup>+</sup> runs out?', a:'At PGAL &rarr; BPGA. Without NAD<sup>+</sup> this step stops, so glycolysis stops; that is why NAD<sup>+</sup> must be regenerated (by fermentation or by the ETS).'}
    ]
  },
  'fermentation': {
    hook:'Bread rises, curd sets and your legs ache after a long run &mdash; all three are caused by the same problem: pyruvate with no oxygen to receive its electrons. What do cells do with it?',
    chain:[
      'Without O<sub>2</sub>, NADH from glycolysis cannot be oxidised in mitochondria.',
      'Yeast decarboxylates pyruvate and reduces the product to ethanol, releasing CO<sub>2</sub> (bread rises, beverages form).',
      'Some bacteria and oxygen-starved muscle reduce pyruvate to lactic acid using lactate dehydrogenase.',
      'In both, NADH is reoxidised to NAD<sup>+</sup>, so glycolysis can continue.',
      'Only about 7% of glucose energy is released, net ATP is 2, and the products (alcohol or acid) are toxic.'
    ],
    misconceptions:[
      {wrong:'Fermentation produces extra ATP from pyruvate.', right:'Converting pyruvate to ethanol or lactic acid makes no ATP; its job is only to regenerate NAD<sup>+</sup>.'},
      {wrong:'Lactic acid fermentation releases CO<sub>2</sub>.', right:'Only alcoholic fermentation releases CO<sub>2</sub>; lactic acid fermentation does not.'},
      {wrong:'Yeast can make any concentration of alcohol.', right:'Yeasts are poisoned when alcohol reaches about 13%; stronger drinks are distilled.'}
    ],
    analogy:'Fermentation is like a shop that cannot bank its cheques (NADH) because the bank (oxygen) is closed &mdash; it tears them up (passes the hydrogen to pyruvate) just to free the counter (NAD<sup>+</sup>) and keep selling a little.',
    analytical:[
      {q:'Why do muscles feel tired and cramped after vigorous exercise?', a:'O<sub>2</sub> supply is inadequate, so pyruvate is reduced to lactic acid by lactate dehydrogenase; lactic acid accumulates and causes fatigue.'},
      {q:'What is the maximum alcohol content of naturally fermented beverages, and why?', a:'About 13%, because yeast is poisoned and dies at that concentration; higher-alcohol drinks are obtained by distillation.'}
    ]
  },
  'krebs': {
    hook:'Pyruvate still holds most of the energy of glucose. Inside the mitochondrion, a wheel of reactions strips it down to CO<sub>2</sub> and collects every hydrogen. How does a 2-carbon acetyl group disappear completely?',
    chain:[
      'Pyruvate enters the mitochondrial matrix and is oxidatively decarboxylated by pyruvate dehydrogenase to acetyl CoA, releasing CO<sub>2</sub> and NADH.',
      'Acetyl CoA (2C) joins OAA (4C) with water to form citric acid (6C), catalysed by citrate synthase.',
      'Two decarboxylations remove two CO<sub>2</sub> (isocitrate &rarr; &alpha;-ketoglutarate &rarr; succinyl CoA), giving NADH each time.',
      'Succinyl CoA &rarr; succinic acid makes GTP (&rarr; ATP); then FADH<sub>2</sub> and one more NADH form as the cycle regenerates OAA.',
      'Per turn: 3 NADH, 1 FADH<sub>2</sub>, 1 ATP, 2 CO<sub>2</sub>; per glucose: 2 turns.'
    ],
    misconceptions:[
      {wrong:'The Krebs&rsquo; cycle uses O<sub>2</sub> directly.', right:'No step of the cycle uses O<sub>2</sub>; it needs O<sub>2</sub> only indirectly, because NAD<sup>+</sup> and FAD<sup>+</sup> are regenerated by the ETS.'},
      {wrong:'The cycle produces most of the ATP of respiration.', right:'It makes only 1 ATP (via GTP) per turn; most ATP is made later in the ETS from its NADH and FADH<sub>2</sub>.'},
      {wrong:'Acetyl CoA combines with citric acid to start the cycle.', right:'Acetyl CoA combines with oxaloacetic acid (OAA); citric acid is the product.'}
    ],
    analogy:'The Krebs&rsquo; cycle is like a merry-go-round (OAA) that picks up a 2-carbon passenger (acetyl group), takes it round, drops two CO<sub>2</sub> off on the way and hands out &ldquo;energy tickets&rdquo; (NADH, FADH<sub>2</sub>, GTP) &mdash; and returns empty to pick up the next passenger.',
    analytical:[
      {q:'Why must OAA be continuously replenished?', a:'OAA is the first member that accepts acetyl CoA; if intermediates are withdrawn for biosynthesis, OAA runs short and the cycle slows or stops.'},
      {q:'Why is the formation of acetyl CoA called the link reaction?', a:'It connects glycolysis (cytoplasm) to the Krebs&rsquo; cycle (matrix): pyruvate must be converted to acetyl CoA before it can enter the cycle.'}
    ]
  },
  'ets': {
    hook:'All the NADH and FADH<sub>2</sub> made so far are like charged batteries. Where are they discharged, and why does the whole system stop the moment oxygen is cut off?',
    chain:[
      'NADH gives electrons to Complex I; FADH<sub>2</sub> gives them via Complex II; both reach ubiquinone in the inner membrane.',
      'Ubiquinol passes electrons through Complex III to cytochrome c, a mobile carrier on the outer face of the inner membrane.',
      'Cytochrome c passes them to Complex IV (cytochrome c oxidase), which hands them to O<sub>2</sub> to form water.',
      'The energy released builds a proton gradient; protons flow back through F<sub>0</sub> of ATP synthase, and F<sub>1</sub> makes ATP (4H<sup>+</sup> per ATP).',
      'NADH gives 3 ATP and FADH<sub>2</sub> gives 2 ATP; O<sub>2</sub> as the final acceptor keeps the chain moving.'
    ],
    misconceptions:[
      {wrong:'The ETS is in the mitochondrial matrix.', right:'The ETS is in the inner mitochondrial membrane; the Krebs&rsquo; cycle is in the matrix.'},
      {wrong:'Oxygen is needed at every step of respiration.', right:'Oxygen acts only at the terminal stage as the final hydrogen acceptor, but without it the whole process stops.'},
      {wrong:'FADH<sub>2</sub> gives as many ATP as NADH.', right:'FADH<sub>2</sub> enters later (at ubiquinone via Complex II), so it gives 2 ATP, while NADH gives 3.'}
    ],
    analogy:'The ETS is like water falling down a series of steps with small water-wheels on the way: electrons &ldquo;fall&rdquo; from NADH to oxygen, and the energy is used to pump protons uphill; the protons then rush back through ATP synthase like water through a turbine, making ATP.',
    analytical:[
      {q:'Why is ATP formation in mitochondria called oxidative phosphorylation?', a:'The proton gradient used to make ATP is built by the energy of oxidation&ndash;reduction (electron transfer to O<sub>2</sub>), unlike photophosphorylation, which uses light energy.'},
      {q:'What would happen to ATP synthesis if O<sub>2</sub> were absent?', a:'Electrons could not be passed to the final acceptor, the chain would back up, NADH would not be oxidised, and ATP synthesis by the ETS would stop.'}
    ]
  },
  'balance': {
    hook:'One glucose, 38 ATP &mdash; but NCERT itself calls this &ldquo;only a theoretical exercise&rdquo;. If the number is not real, why do we calculate it?',
    chain:[
      'Assume one orderly sequence: glycolysis &rarr; link reaction &rarr; TCA &rarr; ETS, with only glucose respired.',
      'Glycolysis: net 2 ATP + 2 NADH (= 6 ATP) &rarr; 8 ATP.',
      'Link reaction: 2 NADH &rarr; 6 ATP.',
      'Krebs&rsquo; cycle (2 turns): 2 ATP + 6 NADH (18 ATP) + 2 FADH<sub>2</sub> (4 ATP) &rarr; 24 ATP.',
      'Total = 38 ATP; but in real cells pathways overlap, and intermediates are withdrawn, so the real yield varies.'
    ],
    misconceptions:[
      {wrong:'Every glucose in a cell always yields exactly 38 ATP.', right:'38 is a theoretical maximum based on assumptions that are not valid in a living system.'},
      {wrong:'Most of the 38 ATP is made in glycolysis and the Krebs&rsquo; cycle.', right:'Only 4 ATP are made directly; 34 come from the ETS by oxidative phosphorylation.'},
      {wrong:'Fermentation and aerobic respiration oxidise NADH at the same rate.', right:'NADH is oxidised slowly in fermentation and vigorously in aerobic respiration.'}
    ],
    analogy:'The balance sheet is like a shop&rsquo;s ideal profit statement that assumes every customer buys, nothing is wasted and nothing is taken home by the staff &mdash; a useful benchmark, even if real days differ.',
    analytical:[
      {q:'List the assumptions made in calculating the net gain of ATP.', a:'(i) Orderly sequential pathway (glycolysis &rarr; TCA &rarr; ETS); (ii) glycolytic NADH enters mitochondria; (iii) no intermediate used for other compounds; (iv) only glucose is respired.'},
      {q:'How many times more ATP does aerobic respiration give than fermentation per glucose?', a:'38 / 2 = 19 times.'}
    ]
  },
  'amphibolic': {
    hook:'You eat rice, dal and ghee. Each is broken down for energy &mdash; yet your body also builds new fat and new protein from the same food. Which pathway sits at the crossroads of both?',
    chain:[
      'Carbohydrates are converted to glucose and enter at the start of glycolysis.',
      'Fats split into glycerol (enters as PGAL) and fatty acids (enter as acetyl CoA).',
      'Proteins are broken into amino acids by proteases; after deamination they enter as pyruvate, acetyl CoA or Krebs&rsquo; intermediates.',
      'When the cell needs to build fats or proteins, the same intermediates (e.g. acetyl CoA) are withdrawn from the pathway.',
      'Since the pathway serves both breakdown (catabolism) and synthesis (anabolism), it is an amphibolic pathway.'
    ],
    misconceptions:[
      {wrong:'Respiration is a purely catabolic process.', right:'It provides intermediates for synthesis too, so it is amphibolic.'},
      {wrong:'Fats enter respiration at the start of glycolysis, like glucose.', right:'Fatty acids enter as acetyl CoA and glycerol as PGAL, not at the first step.'},
      {wrong:'Amino acids can enter the pathway directly with their amino group.', right:'They are deaminated first, then enter as pyruvate, acetyl CoA or Krebs&rsquo; intermediates.'}
    ],
    analogy:'The respiratory pathway is like a two-way railway junction: trains of fat and protein can come in to be &ldquo;scrapped&rdquo; for energy, and new trains of fat and protein can be assembled from parts taken out at the same station.',
    analytical:[
      {q:'Explain with one example why respiration is called amphibolic.', a:'Fatty acids are broken down to acetyl CoA to enter respiration (catabolism), and acetyl CoA is withdrawn from the pathway to synthesise fatty acids (anabolism).'},
      {q:'At what point does glycerol enter the respiratory pathway?', a:'After being converted to PGAL (3-phosphoglyceraldehyde), in glycolysis.'}
    ]
  },
  'rq': {
    hook:'Two seeds are germinating side by side: wheat and groundnut. A simple gas measurement can tell you which one is burning starch and which one is burning oil. How?',
    chain:[
      'During aerobic respiration, O<sub>2</sub> is consumed and CO<sub>2</sub> is released.',
      'RQ = volume of CO<sub>2</sub> evolved / volume of O<sub>2</sub> consumed.',
      'For carbohydrates, 6 O<sub>2</sub> in and 6 CO<sub>2</sub> out, so RQ = 1.',
      'Fats are poor in oxygen and need more O<sub>2</sub>: tripalmitin gives 102 CO<sub>2</sub> for 145 O<sub>2</sub>, RQ = 0.7.',
      'Proteins give an RQ of about 0.9; real tissues usually respire a mix of substrates.'
    ],
    misconceptions:[
      {wrong:'RQ is the same for all substrates.', right:'RQ depends on the type of respiratory substrate: 1 for carbohydrates, 0.7 for fats, about 0.9 for proteins.'},
      {wrong:'Fats have an RQ greater than 1.', right:'Fats have an RQ less than 1 because they need more O<sub>2</sub> than the CO<sub>2</sub> they release.'},
      {wrong:'Organisms respire pure fats or pure proteins.', right:'Pure proteins or fats are never used; substrates are usually a mixture.'}
    ],
    analogy:'RQ is like a fuel gauge for metabolism: by comparing the &ldquo;exhaust&rdquo; (CO<sub>2</sub>) with the &ldquo;air intake&rdquo; (O<sub>2</sub>), you can tell whether the engine is running on sugar or on oil.',
    analytical:[
      {q:'Calculate the RQ of tripalmitin from its equation.', a:'2(C<sub>51</sub>H<sub>98</sub>O<sub>6</sub>) + 145O<sub>2</sub> &rarr; 102CO<sub>2</sub> + 98H<sub>2</sub>O; RQ = 102 / 145 = 0.7.'},
      {q:'Germinating oil seeds show an RQ of about 0.7. What does this indicate?', a:'They are mainly respiring fats (stored oil), which need more O<sub>2</sub> than the CO<sub>2</sub> they release.'}
    ]
  }
};

module.exports = {topics, study, concepts};
