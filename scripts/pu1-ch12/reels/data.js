/* "Board topics in 60 seconds" revision reels (same design as the Ch11 reel).
   head = top-left chapter label, base = image folder (relative to this page). *word* / <em> = gold highlight. */
window.REEL_DATA = {
  pu1ch12: { kind: 'topic', out: 'pu1-ch12-respiration-in-plants-reel', head: 'I PUC BIOLOGY · CH 12<br>RESPIRATION IN PLANTS', cta: 'Open Chapter 12', base: '../../../pu1-ch12-assets/',
    intro: { kick: 'BOARD EXAM SPECIAL', t1: 'Respiration', t2: 'in 60 seconds', p: 'The topics that come again and again in I PUC board papers.', chips: ['Breathing', 'Glycolysis', 'Fermentation', 'Krebs', 'ETS', 'ATP synthase', '38 ATP', 'RQ'] },
    topics: [
      { m: '2 MARKS', t: 'Do plants breathe?', rows: [['Stomata', 'gas exchange in leaves'], ['Lenticels', 'gas exchange in woody stems'], ['Living cells', 'lie just under the bark'], ['Inside O₂', 'from photosynthesis']] },
      { m: '5 MARKS', t: 'Glycolysis', flow: ['Glucose', 'F-1,6-bisP', 'PGAL', 'Pyruvic acid'], img: 'diag-glycolysis.jpg', foot: 'Cytoplasm · net <em>2 ATP + 2 NADH</em>' },
      { m: '3 MARKS', t: 'Fermentation', cards: [['ALCOHOLIC (YEAST)', 'Pyruvic acid → <b>ethanol + CO₂</b>'], ['LACTIC ACID (MUSCLE)', 'Pyruvic acid → <b>lactic acid</b> · no CO₂'], ['LIMITS', '<b>&lt; 7%</b> energy · yeast dies at <b>~13%</b> alcohol']] },
      { m: '5 MARKS', t: 'Krebs cycle', rows: [['1', '<b>Link</b> — pyruvic acid → acetyl CoA + CO₂'], ['2', 'Acetyl CoA + OAA → <b>citric acid</b>'], ['3', 'Per turn: <b>2 CO₂ · 3 NADH · 1 FADH₂ · 1 GTP</b>']], img: 'diag-krebs.jpg', foot: 'Matrix · <em>2 turns</em> per glucose', num: true },
      { m: '5 MARKS', t: 'Electron transport', flow: ['NADH', 'I', 'UQ', 'III', 'cyt c', 'IV', 'O₂'], img: 'diag-ets.jpg', foot: 'O₂ = <em>final acceptor</em> · FADH₂ enters at II' },
      { m: '3 MARKS', t: 'ATP synthase', rows: [['1', '<b>F₀</b> — proton channel in the membrane'], ['2', '<b>F₁</b> — head that makes ATP'], ['3', 'NADH → <b>3 ATP</b> · FADH₂ → <b>2 ATP</b>']], img: 'diag-atp-synthase.jpg', foot: 'Complex V · <em>oxidative phosphorylation</em>', num: true },
      { m: '3 MARKS', t: 'Balance sheet', cards: [['GLYCOLYSIS', '<b>8 ATP</b> · 2 ATP + 2 NADH'], ['LINK REACTION', '<b>6 ATP</b> · 2 NADH'], ['KREBS CYCLE', '<b>24 ATP</b> · 2 GTP + 6 NADH + 2 FADH₂']], foot: 'Total: <em>38 ATP</em> per glucose' },
      { m: '3 MARKS', t: 'Amphibolic & RQ', cards: [['AMPHIBOLIC', 'Fatty acids → <b>acetyl CoA</b> · glycerol → <b>PGAL</b>'], ['RQ', '<b>CO₂ released ÷ O₂ used</b>'], ['VALUES', 'Carbohydrate <b>1</b> · protein <b>~0.9</b> · fat <b>0.7</b>']] }
    ] },
  pu2ch9: { kind: 'topic', out: 'pu2-ch9-biotechnology-principles-and-processes-reel', head: 'II PUC BIOLOGY · CH 9<br>BIOTECHNOLOGY: PRINCIPLES', cta: 'Open Chapter 9', base: 'img/pu2-ch9-',
    intro: { kick: 'BOARD EXAM SPECIAL', t1: 'Biotechnology', t2: 'in 60 seconds', p: 'Principles and Processes: the topics that come again and again in II PUC board papers.', chips: ['Principles', 'Restriction enzymes', 'Gel', 'pBR322', 'Host cells', 'PCR', 'Bioreactor', 'Downstream'] },
    topics: [
      { m: '2 MARKS', t: 'Principles', rows: [['Genetic engineering', 'change DNA, put it in a host'], ['Bioprocess', 'sterile, large-scale culture'], ['First rDNA', 'Cohen & Boyer, 1972'], ['Steps', 'isolate · cut · join · transfer']] },
      { m: '3 MARKS', t: 'Restriction enzymes', rows: [['E', 'genus <b>Escherichia</b>'], ['co', 'species <b>coli</b>'], ['R', 'strain <b>RY13</b>'], ['I', 'order of isolation']], img: 'fig-9-1.jpg', imgH: 640, foot: 'Palindrome <em>GAATTC</em> · sticky ends', num: true },
      { m: '3 MARKS', t: 'Gel electrophoresis', cards: [['MATRIX', '<b>Agarose</b> gel (from seaweed)'], ['MOVEMENT', 'DNA is <b>negative</b> → moves to the anode; small pieces go farthest'], ['SEE & COLLECT', '<b>Ethidium bromide</b> + UV → orange bands · <b>elution</b>']] },
      { m: '5 MARKS', t: 'Vector pBR322', rows: [['1', '<b>ori</b> — controls copy number'], ['2', '<b>Markers</b> — amp<sup>R</sup>, tet<sup>R</sup>'], ['3', '<b>Sites</b> — BamHI in tet<sup>R</sup>, PvuI in amp<sup>R</sup>']], img: 'fig-9-4.jpg', imgH: 600, foot: 'Insertional inactivation · <em>blue–white</em> selection', num: true },
      { m: '3 MARKS', t: 'DNA into the host', cards: [['BACTERIA', '<b>CaCl₂</b> + heat shock at <b>42 °C</b>'], ['ANIMAL CELLS', '<b>Microinjection</b> into the nucleus'], ['PLANT CELLS', '<b>Gene gun</b> · disarmed <b>Agrobacterium</b>']] },
      { m: '5 MARKS', t: 'PCR', flow: ['Denaturation', 'Annealing', 'Extension'], img: 'fig-9-6.jpg', foot: '<em>Taq</em> polymerase · ~1 billion copies' },
      { m: '3 MARKS', t: 'Bioreactors', rows: [['Stirred tank', 'the most common type'], ['Agitator', 'mixes and spreads O₂'], ['Controls', 'temperature · pH · foam'], ['Volume', '100–1000 litres']], img: 'fig-9-7.jpg' },
      { m: '3 MARKS', t: 'Downstream processing', cards: [['SEPARATION', 'Product is separated and <b>purified</b>'], ['FORMULATION', 'Suitable <b>preservatives</b> added'], ['QUALITY CONTROL', '<b>Clinical trials</b> for drugs · strict testing']] }
    ] }
};
