/* PU-I Chapter 11 — Photosynthesis in Higher Plants: topics, Study Mode and Concepts (English).
   Source: Narendra Sir's typed notes + NCERT Class 11 Ch 11. Built into pu1-ch11.html by build.js. */
const topics = [
  {id:'discovery', name:'Early Experiments & the Equation'},
  {id:'chloroplast', name:'Chloroplast & Photosynthetic Pigments'},
  {id:'light', name:'Light Reaction: Photosystems & Photolysis'},
  {id:'electron', name:'Z Scheme & Cyclic Photophosphorylation'},
  {id:'chemiosmosis', name:'Chemiosmotic Hypothesis: Making ATP'},
  {id:'calvin', name:'Biosynthetic Phase: The Calvin (C3) Cycle'},
  {id:'c4', name:'C4 Pathway & Kranz Anatomy'},
  {id:'photoresp', name:'Photorespiration (C2 Pathway)'},
  {id:'factors', name:'Factors Affecting Photosynthesis'}
];

const study = {
  'discovery': {
    recap: [
      'Photosynthesis is a <b>physico-chemical process</b> in which green plants use <b>light energy</b> to make organic compounds; it is the basis of all food on earth and the source of the <b>oxygen</b> we breathe',
      '<b>Joseph Priestley (1770)</b>: plants restore the air fouled by a burning candle or a breathing mouse',
      '<b>Jan Ingenhousz</b>: <b>sunlight</b> is essential, and only the <b>green parts</b> of plants release oxygen',
      '<b>Julius von Sachs (1854)</b>: glucose is made in green parts and stored as <b>starch</b>; chlorophyll is in <b>chloroplasts</b>. <b>T.W. Engelmann</b>: first <b>action spectrum</b> using <i>Cladophora</i>',
      '<b>Cornelius van Niel</b>: O<sub>2</sub> comes from <b>H<sub>2</sub>O</b>, not CO<sub>2</sub> &mdash; 6CO<sub>2</sub> + 12H<sub>2</sub>O &rarr; C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6H<sub>2</sub>O + 6O<sub>2</sub>'
    ],
    sections: [
      {h:'What Is Photosynthesis?', body:'All animals, including human beings, depend on plants for their food. Green plants make, or rather <b>synthesise</b>, the food they need, and all other organisms depend on them. Green plants carry out <b>photosynthesis</b>, a <b>physico-chemical process</b> by which they use <b>light energy</b> to drive the synthesis of organic compounds. Photosynthesis is important for two reasons: it is the <b>primary source of all food on earth</b>, and it is responsible for the <b>release of oxygen</b> into the atmosphere by green plants.'},
      {h:'What Do We Already Know?', body:'Simple experiments show that <b>chlorophyll</b> (the green pigment), <b>light</b> and <b>CO<sub>2</sub></b> are required for photosynthesis. In a <b>variegated leaf</b> (or a leaf partially covered with black paper) exposed to light, the starch test shows that starch forms <b>only in the green parts</b> and only in the parts exposed to light. In the <b>half-leaf experiment</b>, part of a leaf is enclosed in a test tube containing KOH-soaked cotton (which absorbs CO<sub>2</sub>); that part does not form starch, showing that <b>CO<sub>2</sub> is required</b>.'},
      {h:'Priestley and Ingenhousz', body:'<b>Joseph Priestley (1733&ndash;1804)</b> showed in 1770 that a burning candle or a mouse in a closed bell jar soon dies or goes out, but if a <b>mint plant</b> is placed inside, the mouse stays alive and the candle keeps burning. He concluded that plants <b>restore to the air</b> whatever breathing animals and burning candles remove (he had discovered oxygen in 1774). <b>Jan Ingenhousz (1730&ndash;1799)</b> repeated this with the plant kept in <b>sunlight</b> and in darkness, and showed that <b>sunlight is essential</b> for the plant to purify the air. With an aquatic plant he showed that in bright sunlight small <b>bubbles</b> formed around the <b>green parts</b>, while in the dark they did not &mdash; these bubbles were <b>oxygen</b>.'},
      {h:'Sachs and Engelmann', body:'<b>Julius von Sachs (1854)</b> provided evidence that <b>glucose</b> is produced when plants grow; glucose is usually stored as <b>starch</b>. He found that the green substance, <b>chlorophyll</b>, is located in special bodies (later called <b>chloroplasts</b>) within plant cells, and that the green parts are where glucose is made. <b>T.W. Engelmann (1843&ndash;1909)</b> split light into its spectral components with a prism and illuminated a green alga, <b><i>Cladophora</i></b>, placed in a suspension of <b>aerobic bacteria</b>. The bacteria accumulated mainly in the region of <b>blue and red light</b>, where most oxygen was released. This gave the <b>first action spectrum</b> of photosynthesis, which roughly resembles the <b>absorption spectra of chlorophyll a and b</b>.'},
      {h:'Van Niel: Where Does the Oxygen Come From?', body:'<b>Cornelius van Niel (1897&ndash;1985)</b> studied <b>purple and green bacteria</b> and showed that photosynthesis is a <b>light-dependent reaction</b> in which <b>hydrogen from a suitable oxidisable compound reduces CO<sub>2</sub></b> to carbohydrates: 2H<sub>2</sub>A + CO<sub>2</sub> &rarr; 2A + CH<sub>2</sub>O + H<sub>2</sub>O (in light). In green plants H<sub>2</sub>O is the hydrogen donor and is oxidised to O<sub>2</sub>. Some organisms (purple and green sulphur bacteria) use <b>H<sub>2</sub>S</b> as the hydrogen donor, and the oxidation product is <b>sulphur</b> (or sulphate), not O<sub>2</sub>. So he inferred that the <b>O<sub>2</sub> evolved by green plants comes from H<sub>2</sub>O, not from CO<sub>2</sub></b>. This was later proved using <b>radioisotopic techniques</b>.'},
      {h:'The Correct Equation', body:'<b>Ruben and Kamen (1941)</b>, working with <i>Chlorella</i>, used heavy oxygen (<b><sup>18</sup>O</b>): when H<sub>2</sub><sup>18</sup>O was supplied, the oxygen released was <sup>18</sup>O<sub>2</sub>; when C<sup>18</sup>O<sub>2</sub> was supplied, ordinary O<sub>2</sub> was released. This confirmed that the oxygen comes from water. The correct equation for photosynthesis is therefore:<br><b>6CO<sub>2</sub> + 12H<sub>2</sub>O &rarr; C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6H<sub>2</sub>O + 6O<sub>2</sub></b> (in light, with chlorophyll)<br>where C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> is glucose. The 6 molecules of O<sub>2</sub> come from 12 molecules of water.'}
    ],
    table: {title:'Scientists and Their Discoveries', headers:['Scientist','Experiment / organism','Conclusion'], rows:[
      ['Joseph Priestley (1770)','Mint plant, mouse and candle in a bell jar','Plants restore the air fouled by burning and breathing'],
      ['Jan Ingenhousz','Plant kept in sunlight and in the dark; aquatic plant','Sunlight is essential; only green parts release O<sub>2</sub>'],
      ['Julius von Sachs (1854)','Starch in green parts','Glucose is made in green parts and stored as starch; chlorophyll is in chloroplasts'],
      ['T.W. Engelmann','<i>Cladophora</i> + aerobic bacteria + prism','First action spectrum; blue and red light are most effective'],
      ['Cornelius van Niel','Purple and green (sulphur) bacteria','O<sub>2</sub> comes from H<sub>2</sub>O, not from CO<sub>2</sub>'],
      ['Ruben &amp; Kamen (1941)','<i>Chlorella</i> with <sup>18</sup>O','Confirmed: liberated O<sub>2</sub> comes from water']
    ]},
    keyList: {title:'Must-Know Equations', items:[
      'Van Niel: 2H<sub>2</sub>A + CO<sub>2</sub> &rarr; 2A + CH<sub>2</sub>O + H<sub>2</sub>O',
      'Sulphur bacteria: 2H<sub>2</sub>S + CO<sub>2</sub> &rarr; 2S + CH<sub>2</sub>O + H<sub>2</sub>O (no O<sub>2</sub>)',
      'Overall: 6CO<sub>2</sub> + 12H<sub>2</sub>O &rarr; C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6H<sub>2</sub>O + 6O<sub>2</sub>',
      'Half-leaf experiment: KOH absorbs CO<sub>2</sub> &rarr; no starch in that part'
    ]}
  },

  'chloroplast': {
    recap: [
      '<b>Mesophyll cells</b> of leaves have a large number of <b>chloroplasts</b>, the site of photosynthesis; they align along the cell walls to get <b>optimum light</b>',
      'Chloroplast = <b>grana</b> + <b>stroma lamellae</b> (membrane system) + fluid <b>stroma</b>',
      'Membrane system traps light and makes <b>ATP and NADPH</b> (light reaction); <b>stroma</b> fixes CO<sub>2</sub> into sugar (dark reaction)',
      '4 pigments (paper chromatography): <b>chlorophyll a</b> (blue-green), <b>chlorophyll b</b> (yellow-green), <b>xanthophylls</b> (yellow), <b>carotenoids</b> (yellow to yellow-orange)',
      '<b>Chlorophyll a</b> is the chief pigment; absorption is maximum in the <b>blue and red</b> regions; the others are <b>accessory pigments</b>'
    ],
    sections: [
      {h:'Where Does Photosynthesis Take Place?', body:'Photosynthesis takes place in the <b>green parts</b> of the plant, mostly the <b>leaves</b>. Within a leaf, photosynthesis occurs in the <b>mesophyll cells</b>, which contain a large number of <b>chloroplasts</b>. Usually the chloroplasts <b>align themselves along the walls</b> of the mesophyll cells so that they get the <b>optimum quantity of incident light</b>: when light is intense they turn their edges (parallel) to it, and in dim light they lie flat (perpendicular) to it.'},
      {h:'Structure of the Chloroplast', body:'Within the chloroplast there is a <b>membranous system</b> made of the <b>grana</b> (stacks of thylakoids), the <b>stroma lamellae</b> (which connect the grana) and the <b>matrix</b> called the <b>stroma</b>. The chloroplast is bounded by an <b>outer and inner membrane</b>. The stroma also contains <b>ribosomes, DNA (circular)</b> and <b>starch granules</b>.'},
      {h:'Division of Labour Inside the Chloroplast', body:'There is a clear <b>division of labour</b>. The <b>membrane system</b> (thylakoids) is responsible for <b>trapping light energy</b> and for the synthesis of <b>ATP and NADPH</b> &mdash; the <b>light reactions</b>. In the <b>stroma</b>, <b>enzymatic reactions</b> incorporate CO<sub>2</sub> into the plant, leading to the synthesis of <b>sugar</b>, which in turn forms starch. These are the <b>dark reactions</b>. The term &ldquo;dark reaction&rdquo; does not mean they occur in darkness or are independent of light: they are <b>not directly light-driven</b> but depend on the products of the light reaction (ATP and NADPH).'},
      {h:'How Many Pigments Are Involved?', body:'If you separate the pigments of a leaf by <b>paper chromatography</b>, the <b>chromatogram</b> shows that the colour of leaves is due to <b>four pigments</b>: <b>chlorophyll a</b> (bright or <b>blue-green</b>), <b>chlorophyll b</b> (<b>yellow-green</b>), <b>xanthophylls</b> (<b>yellow</b>) and <b>carotenoids</b> (<b>yellow to yellow-orange</b>). Pigments are substances that have the ability to <b>absorb light at specific wavelengths</b>.<br>Formulae (for reference): chlorophyll a C<sub>55</sub>H<sub>72</sub>O<sub>5</sub>N<sub>4</sub>Mg; chlorophyll b C<sub>55</sub>H<sub>70</sub>O<sub>6</sub>N<sub>4</sub>Mg; both contain <b>magnesium</b>.'},
      {h:'Absorption Spectrum and Action Spectrum', body:'An <b>absorption spectrum</b> is a graph of the amount of light <b>absorbed</b> by a pigment at different wavelengths. An <b>action spectrum</b> is a graph of the <b>rate of photosynthesis</b> (a physiological activity) at different wavelengths. <b>Chlorophyll a</b> shows maximum absorption in the <b>blue</b> and <b>red</b> regions of the visible spectrum, and the rate of photosynthesis is also highest there. Since the action spectrum <b>closely matches</b> the absorption spectrum of chlorophyll a, chlorophyll a is the <b>chief pigment</b> of photosynthesis. Photosynthesis does still take place at other wavelengths, so the curves do not overlap completely.'},
      {h:'Accessory Pigments', body:'<b>Chlorophyll b, xanthophylls and carotenoids</b> are called <b>accessory pigments</b>. They (i) <b>absorb light of a wider range of wavelengths</b> and <b>transfer the energy to chlorophyll a</b>, so they increase the efficiency of photosynthesis, and (ii) <b>protect chlorophyll a from photo-oxidation</b>.'}
    ],
    table: {title:'The Four Leaf Pigments', headers:['Pigment','Colour on chromatogram','Role'], rows:[
      ['Chlorophyll a','Bright / blue-green','Chief pigment; reaction centre of PS I and PS II'],
      ['Chlorophyll b','Yellow-green','Accessory pigment; widens light absorbed'],
      ['Xanthophylls','Yellow','Accessory; protects chlorophyll a from photo-oxidation'],
      ['Carotenoids (carotenes)','Yellow to yellow-orange','Accessory; absorbs blue light, protects chlorophyll a']
    ]},
    keyList: {title:'Chloroplast: Who Does What', items:[
      'Thylakoid (grana + stroma lamellae) membranes &rarr; trap light, make ATP and NADPH',
      'Stroma &rarr; enzymes fix CO<sub>2</sub> and make sugar (Calvin cycle)',
      'Mesophyll cells &rarr; site of photosynthesis in the leaf',
      'Blue and red light &rarr; maximum absorption and maximum photosynthesis'
    ]}
  },

  'light': {
    recap: [
      'Photosynthesis has two phases: <b>photochemical (light) phase</b> and <b>biosynthetic phase</b>',
      'Light reaction = <b>light absorption, splitting of water, oxygen release</b> and formation of <b>ATP and NADPH</b>; it occurs in the <b>thylakoid membranes</b>',
      'Pigments bound to proteins form <b>light harvesting complexes (LHC)</b> inside two photosystems, <b>PS I and PS II</b> (named in order of discovery)',
      'Each photosystem = <b>reaction centre</b> (one chlorophyll a molecule) + <b>antenna</b> of hundreds of pigment molecules',
      'Reaction centres: <b>PS I = P700</b>, <b>PS II = P680</b>. Water splitting (2H<sub>2</sub>O &rarr; 4H<sup>+</sup> + O<sub>2</sub> + 4e<sup>&minus;</sup>) is linked to <b>PS II</b>, with <b>Mn and Cl</b>'
    ],
    sections: [
      {h:'Two Phases of Photosynthesis', body:'Photosynthesis is not a single reaction. It has two parts: the <b>photochemical phase</b> (light reaction), which directly depends on light, and the <b>biosynthetic phase</b>, which does not directly depend on light but uses the products of the light reaction (ATP and NADPH) to fix CO<sub>2</sub> into sugar.'},
      {h:'What Happens in the Light Reaction?', body:'The light reactions, or the <b>photochemical phase</b>, include <b>light absorption</b>, <b>water splitting</b>, <b>oxygen release</b>, and the formation of high-energy chemical intermediates, <b>ATP and NADPH</b>. Several complexes are involved. They take place on the <b>thylakoid membranes</b> (grana) of the chloroplast.'},
      {h:'Light Harvesting Complexes and Photosystems', body:'The pigments are organised into two discrete photochemical <b>light harvesting complexes (LHC)</b> within <b>Photosystem I (PS I)</b> and <b>Photosystem II (PS II)</b>. They are named in the <b>sequence of their discovery</b>, not in the sequence in which they function during the light reaction. The LHC are made up of <b>hundreds of pigment molecules bound to proteins</b>.'},
      {h:'Reaction Centre and Antenna', body:'Each photosystem has <b>all the pigments except one molecule of chlorophyll a</b> forming a <b>light harvesting system</b>, also called the <b>antenna</b>. These pigments help make photosynthesis more efficient by <b>absorbing different wavelengths</b> of light and passing the energy on. The single <b>chlorophyll a</b> molecule forms the <b>reaction centre</b>. The reaction centres are different in the two photosystems: in <b>PS I</b> the reaction centre chlorophyll a has an absorption peak at <b>700 nm</b> and is called <b>P700</b>; in <b>PS II</b> it has an absorption peak at <b>680 nm</b> and is called <b>P680</b>.'},
      {h:'Splitting of Water (Photolysis)', body:'Where do the electrons that PS II keeps losing come from? From <b>water</b>. The <b>water splitting complex</b> is associated with <b>PS II</b>, which is physically located on the <b>inner side of the thylakoid membrane</b> (towards the lumen). Water is split into <b>protons (H<sup>+</sup>)</b>, <b>[O]</b> and <b>electrons</b>:<br><b>2H<sub>2</sub>O &rarr; 4H<sup>+</sup> + O<sub>2</sub> + 4e<sup>&minus;</sup></b><br><b>Manganese (Mn) and chlorine (Cl)</b> play an important role. The <b>electrons</b> replace those removed from PS II (P680); the <b>protons</b> accumulate in the lumen and are later used for reducing NADP<sup>+</sup>; <b>oxygen</b> is liberated as a <b>by-product</b> of photosynthesis. The light-dependent splitting of water is called <b>photolysis</b>.'},
      {h:'Hill Reaction', body:'<b>Robert Hill (1939)</b> showed that <b>isolated chloroplasts</b>, when illuminated, could <b>liberate oxygen</b> in the presence of a suitable <b>electron acceptor</b> (an oxidising agent), even without CO<sub>2</sub>. This is the <b>Hill reaction</b>. It proved that O<sub>2</sub> release is part of the light reaction and comes from water.'}
    ],
    table: {title:'PS I vs PS II', headers:['Feature','Photosystem I','Photosystem II'], rows:[
      ['Reaction centre','P700 (peak at 700 nm)','P680 (peak at 680 nm)'],
      ['Water splitting','Not linked','Linked (Mn, Cl); releases O<sub>2</sub>'],
      ['Role in Z scheme','Second: passes electrons to NADP<sup>+</sup>','First: gets electrons from water'],
      ['Cyclic flow','Takes part (only PS I works)','Not involved'],
      ['Location','Grana and stroma lamellae','Grana (appressed thylakoids)']
    ]},
    keyList: {title:'Products of the Light Reaction', items:[
      'ATP (by photophosphorylation)',
      'NADPH + H<sup>+</sup> (reducing power)',
      'O<sub>2</sub> (by-product of photolysis of water)',
      'ATP and NADPH go to the stroma for the biosynthetic phase; O<sub>2</sub> diffuses out of the chloroplast'
    ]}
  },

  'electron': {
    recap: [
      'Making ATP using light energy in the chloroplast = <b>photophosphorylation</b>: <b>non-cyclic</b> and <b>cyclic</b>',
      'Non-cyclic (<b>Z scheme</b>): PS II &rarr; electron acceptor &rarr; electron transport (cytochromes) &rarr; PS I &rarr; acceptor &rarr; <b>NADP<sup>+</sup> &rarr; NADPH + H<sup>+</sup></b> (enzyme <b>NADP reductase</b>)',
      'Carriers placed by <b>redox potential</b> make the shape of the letter <b>&ldquo;Z&rdquo;</b>; electrons lost by PS II are replaced from <b>water</b>',
      'Non-cyclic gives <b>ATP + NADPH + O<sub>2</sub></b>; both photosystems work',
      'Cyclic: <b>only PS I</b>; electrons return to PS I; only <b>ATP</b> forms, no NADPH, no O<sub>2</sub>; occurs in <b>stroma lamellae</b> (no PS II, no NADP reductase) and when only light &gt; 680 nm is available'
    ],
    sections: [
      {h:'Photophosphorylation', body:'Living organisms extract energy from oxidisable substances and store it as bond energy in <b>ATP</b>. The process by which ATP is synthesised by cells (in mitochondria and chloroplasts) is called <b>phosphorylation</b>. <b>Photophosphorylation</b> is the synthesis of ATP from ADP and inorganic phosphate (Pi) <b>in the presence of light</b> in the chloroplast. When both photosystems work in series (the Z scheme), it is <b>non-cyclic photophosphorylation</b>; when only PS I works, it is <b>cyclic photophosphorylation</b>.'},
      {h:'The Electron Transport: First Uphill, Then Down', body:'In <b>PS II</b>, the reaction centre chlorophyll a absorbs <b>680 nm</b> red light, causing electrons to become <b>excited</b> and jump into an orbit farther from the nucleus. These electrons are picked up by an <b>electron acceptor</b>, which passes them to an <b>electron transport system</b> consisting of <b>cytochromes</b>. This movement is <b>downhill</b> in terms of an oxidation-reduction or <b>redox potential</b> scale. The electrons are not used up as they pass through the chain; they are passed on to the pigments of <b>PS I</b>.'},
      {h:'PS I and the Formation of NADPH', body:'Simultaneously, electrons in the reaction centre of <b>PS I</b> are also excited when they receive red light of wavelength <b>700 nm</b> and are transferred to another <b>acceptor molecule</b> that has a greater redox potential. These electrons are then moved <b>downhill</b> again, this time to a molecule of energy-rich <b>NADP<sup>+</sup></b>. The addition of these electrons reduces NADP<sup>+</sup> to <b>NADPH + H<sup>+</sup></b>, using the enzyme <b>NADP reductase</b> (on the stroma side of the membrane).'},
      {h:'Why Is It Called the Z Scheme?', body:'This whole scheme of transfer of electrons, starting from PS II, <b>uphill to the acceptor</b>, <b>down the electron transport chain to PS I</b>, excitation of electrons, transfer to another acceptor, and finally <b>down hill to NADP<sup>+</sup></b>, causing it to be reduced to NADPH + H<sup>+</sup>, is called the <b>Z scheme</b>, due to its characteristic shape. This shape is formed when all the carriers are placed in a sequence on a <b>redox potential scale</b>. Electrons lost by PS II <b>do not come back</b> to it &mdash; they are replaced by electrons from the splitting of water. Because the electrons travel in one direction (water &rarr; NADP<sup>+</sup>), the ATP formed is by <b>non-cyclic photophosphorylation</b>.'},
      {h:'Cyclic Photophosphorylation', body:'When <b>only PS I is functional</b>, the electron is circulated within the photosystem, and phosphorylation occurs due to the <b>cyclic flow of electrons</b>. A possible location where this could be happening is the <b>stroma lamellae</b>. While the membranes or lamellae of the grana have both PS I and PS II, the stroma lamellae membranes <b>lack PS II as well as the NADP reductase enzyme</b>. The excited electron does not pass on to NADP<sup>+</sup> but is <b>cycled back to the PS I complex</b> through the electron transport chain. The cyclic flow results <b>only in the synthesis of ATP</b>, but <b>not of NADPH + H<sup>+</sup></b> (and no O<sub>2</sub>). Cyclic photophosphorylation also occurs when <b>only light of wavelengths beyond 680 nm</b> is available for excitation.'}
    ],
    table: {title:'Non-cyclic vs Cyclic Photophosphorylation', headers:['Feature','Non-cyclic (Z scheme)','Cyclic'], rows:[
      ['Photosystems','PS II and PS I','Only PS I'],
      ['Electron path','Water &rarr; PS II &rarr; PS I &rarr; NADP<sup>+</sup> (one way)','PS I &rarr; acceptor &rarr; ETS &rarr; back to PS I'],
      ['Photolysis of water','Yes; O<sub>2</sub> released','No; no O<sub>2</sub>'],
      ['Products','ATP + NADPH + H<sup>+</sup>','ATP only'],
      ['Location','Grana thylakoids','Stroma lamellae'],
      ['When','Normal light (680 + 700 nm)','Light beyond 680 nm; NADPH not needed']
    ]},
    keyList: {title:'Z Scheme in Order', items:[
      'Water splits (PS II side) &rarr; e<sup>&minus;</sup> to P680',
      'P680 excited (680 nm) &rarr; primary acceptor &rarr; cytochromes (ETS) &rarr; P700',
      'P700 excited (700 nm) &rarr; acceptor &rarr; NADP reductase',
      'NADP<sup>+</sup> + 2e<sup>&minus;</sup> + H<sup>+</sup> &rarr; NADPH; ATP made as protons move back'
    ]}
  },

  'chemiosmosis': {
    recap: [
      'ATP synthesis in chloroplasts is explained by the <b>chemiosmotic hypothesis</b> (<b>Peter Mitchell, 1961</b>)',
      'Needs a <b>membrane</b>, a <b>proton pump</b>, a <b>proton gradient</b> and <b>ATP synthase (ATPase)</b>',
      'Protons accumulate in the <b>lumen</b> of the thylakoid: (i) water splitting inside, (ii) carriers pump H<sup>+</sup> in, (iii) NADP reductase removes H<sup>+</sup> from the stroma',
      'Protons flow back to the stroma through the <b>CF<sub>0</sub></b> channel; <b>CF<sub>1</sub></b> (on the stroma side) changes shape and makes <b>ATP</b>',
      'About <b>one ATP for every 3 H<sup>+</sup></b> passing out; ATP and NADPH are then used in the stroma'
    ],
    sections: [
      {h:'How Is ATP Actually Made?', body:'The <b>chemiosmotic hypothesis</b>, proposed by <b>Peter Mitchell (1961)</b>, explains the mechanism of ATP synthesis. As in respiration, in photosynthesis too ATP synthesis is linked to the development of a <b>proton gradient across a membrane</b>. Here the membranes are those of the <b>thylakoid</b>. There is one difference: in chloroplasts the <b>proton accumulation is towards the inside of the membrane</b>, i.e. in the <b>lumen</b>; in respiration, protons accumulate in the intermembrane space of the mitochondria.'},
      {h:'Why Does a Proton Gradient Develop?', body:'Three steps of the light reaction build the gradient:<br>(i) Since <b>splitting of the water molecule</b> takes place on the <b>inner side</b> of the membrane, the protons (H<sup>+</sup>) produced by it accumulate within the <b>lumen</b> of the thylakoids.<br>(ii) As electrons move through the photosystems, protons are transported across the membrane. This happens because the <b>primary acceptor</b> of electrons is located towards the <b>outer side</b>; it transfers its electron not to an electron carrier but to an <b>H carrier</b>, which removes a proton from the <b>stroma</b> while transporting an electron. When this molecule passes its electron to the carrier on the inner side, the proton is <b>released into the lumen</b>.<br>(iii) The <b>NADP reductase</b> enzyme is located on the <b>stroma side</b>. Along with electrons from the PS I acceptor, protons are needed to reduce NADP<sup>+</sup> to NADPH + H<sup>+</sup>; these protons are <b>removed from the stroma</b>.<br>Hence, within the chloroplast, protons in the <b>stroma decrease</b> while in the <b>lumen they increase</b>. This creates a <b>proton gradient</b> across the thylakoid membrane as well as a measurable <b>decrease in pH in the lumen</b>.'},
      {h:'ATP Synthase: CF<sub>0</sub> and CF<sub>1</sub>', body:'The gradient is important because it is the <b>breakdown of this gradient</b> that leads to the release of energy. The gradient is broken down due to the movement of protons across the membrane <b>back to the stroma</b> through the <b>transmembrane channel</b> of the <b>CF<sub>0</sub></b> of the ATP synthase. The ATP synthase enzyme has two parts: <b>CF<sub>0</sub></b>, which is <b>embedded in the thylakoid membrane</b> and forms a channel that carries out <b>facilitated diffusion of protons</b>; and <b>CF<sub>1</sub></b>, which <b>protrudes on the outer surface</b> of the thylakoid membrane facing the stroma. The breakdown of the gradient provides enough energy to cause a <b>conformational change in the CF<sub>1</sub></b> particle, which makes the enzyme synthesise several molecules of <b>energy-packed ATP</b>.'},
      {h:'Why &ldquo;Chemiosmosis&rdquo;?', body:'Chemiosmosis requires a <b>membrane</b>, a <b>proton pump</b>, a <b>proton gradient</b> and <b>ATP synthase</b>. Energy is used to pump protons across the membrane to create a gradient, or a high concentration of protons in the thylakoid lumen. ATP synthase has a channel that allows <b>diffusion of protons back</b> across the membrane; this releases enough energy to activate the ATP synthase enzyme that catalyses the formation of ATP. Because ATP formation is due to the <b>diffusion of protons</b>, similar to osmosis, the process is called <b>chemiosmosis</b>. Evidence suggests that about <b>one ATP is formed for every 3 H<sup>+</sup></b> passing outwards through the CF<sub>0</sub>&ndash;CF<sub>1</sub> particle.'},
      {h:'Where Are ATP and NADPH Used?', body:'Along with the NADPH produced by the movement of electrons, the <b>ATP</b> will be used <b>immediately</b> in the <b>biosynthetic reaction</b> taking place in the <b>stroma</b>, responsible for <b>fixing CO<sub>2</sub></b> and the synthesis of sugars. The O<sub>2</sub> diffuses out of the chloroplast. After the light reaction, therefore, the products used further are <b>ATP and NADPH</b>; CO<sub>2</sub> and H<sub>2</sub>O are the raw materials of the biosynthetic phase.'}
    ],
    table: {title:'Chemiosmosis: Four Requirements', headers:['Requirement','In the chloroplast'], rows:[
      ['Membrane','Thylakoid membrane (impermeable to H<sup>+</sup>)'],
      ['Proton pump','Electron transport (H carrier, plastoquinone) moves H<sup>+</sup> from stroma to lumen'],
      ['Proton gradient','High H<sup>+</sup> (low pH) in the lumen, low H<sup>+</sup> in the stroma'],
      ['ATP synthase','CF<sub>0</sub> channel in the membrane + CF<sub>1</sub> head facing the stroma']
    ]},
    keyList: {title:'Three Reasons for the Proton Gradient', items:[
      'Water splits on the lumen side &rarr; H<sup>+</sup> released into the lumen',
      'H carrier picks H<sup>+</sup> from the stroma and releases it into the lumen',
      'NADP reductase uses H<sup>+</sup> from the stroma to make NADPH',
      'Result: lumen H<sup>+</sup> high, stroma H<sup>+</sup> low &rarr; H<sup>+</sup> flow back through CF<sub>0</sub> drives ATP synthesis'
    ]}
  },

  'calvin': {
    recap: [
      'Biosynthetic (dark) phase: <b>ATP and NADPH</b> are used to fix CO<sub>2</sub> into sugar in the <b>stroma</b>; not directly light-driven',
      '<b>Melvin Calvin</b> traced the path of carbon using radioactive <b><sup>14</sup>C</b> in algae; first stable product = <b>3-phosphoglyceric acid (PGA)</b>, a 3-carbon compound &rarr; <b>C<sub>3</sub> pathway</b>',
      'Primary CO<sub>2</sub> acceptor = <b>RuBP (ribulose 1,5-bisphosphate)</b>, a <b>5-carbon ketose sugar</b>; enzyme = <b>RuBisCO</b>',
      'Three stages: <b>carboxylation, reduction, regeneration</b>',
      'Per CO<sub>2</sub>: <b>3 ATP + 2 NADPH</b>; per glucose (6 turns): <b>18 ATP + 12 NADPH</b>'
    ],
    sections: [
      {h:'Where Are ATP and NADPH Used?', body:'The products of the light reaction are <b>ATP, NADPH and O<sub>2</sub></b>. O<sub>2</sub> diffuses out of the chloroplast, while ATP and NADPH are used to drive the processes leading to the synthesis of food, more accurately <b>sugars</b>. This is the <b>biosynthetic phase</b>. It does not directly depend on light but is dependent on the products of the light reaction (ATP and NADPH), besides CO<sub>2</sub> and H<sub>2</sub>O. You may wonder how this could be verified: immediately after light becomes unavailable, the biosynthetic process continues for some time and then stops; if light is made available again, the synthesis starts again.'},
      {h:'The Primary Acceptor of CO<sub>2</sub>', body:'Using radioactive <b><sup>14</sup>C</b> in algal photosynthesis studies, <b>Melvin Calvin</b> found that the <b>first CO<sub>2</sub> fixation product</b> was a <b>3-carbon organic acid</b>: <b>3-phosphoglyceric acid (PGA)</b>. He also contributed to working out the complete biosynthetic pathway, hence it is called the <b>Calvin cycle</b>. Scientists then asked: which molecule accepts CO<sub>2</sub>? It was expected to be a 2-carbon molecule, but after many experiments it was found to be a <b>5-carbon ketose sugar</b>, <b>ribulose bisphosphate (RuBP)</b>. Plants in which the first product is PGA are called <b>C<sub>3</sub> plants</b>; those in which the first product is a 4-carbon organic acid, <b>oxaloacetic acid (OAA)</b>, are called <b>C<sub>4</sub> plants</b>.'},
      {h:'Stage 1: Carboxylation', body:'<b>Carboxylation</b> is the <b>fixation of CO<sub>2</sub></b> into a stable organic intermediate. It is the <b>most crucial step</b> of the Calvin cycle, where CO<sub>2</sub> is utilised for the carboxylation of <b>RuBP</b>. The reaction is catalysed by the enzyme <b>RuBP carboxylase</b>, which results in the formation of <b>two molecules of 3-PGA</b>. Since this enzyme also has oxygenation activity, it is more correctly called <b>RuBP carboxylase-oxygenase</b> or <b>RuBisCO</b>.<br>RuBP (5C) + CO<sub>2</sub> + H<sub>2</sub>O &rarr; 2 &times; 3-PGA (3C)'},
      {h:'Stage 2: Reduction', body:'This is a series of reactions that lead to the formation of <b>glucose</b> (triose phosphate is the immediate sugar). The steps involve the utilisation of <b>2 molecules of ATP</b> for phosphorylation and <b>2 molecules of NADPH</b> for reduction <b>per molecule of CO<sub>2</sub> fixed</b>. The fixation of <b>six molecules of CO<sub>2</sub></b> and <b>6 turns of the cycle</b> are required for the removal of one molecule of glucose from the pathway.'},
      {h:'Stage 3: Regeneration', body:'<b>Regeneration of the CO<sub>2</sub> acceptor molecule RuBP</b> is crucial if the cycle is to continue uninterrupted. The regeneration steps require <b>one ATP</b> (per CO<sub>2</sub>) for phosphorylation to form RuBP. Hence, for every CO<sub>2</sub> molecule entering the Calvin cycle, <b>3 molecules of ATP and 2 of NADPH</b> are required. It is probably to meet this difference in the number of ATP and NADPH used in the dark reaction that <b>cyclic phosphorylation</b> takes place.'},
      {h:'Counting ATP and NADPH for One Glucose', body:'To make <b>one molecule of glucose</b>, 6 molecules of CO<sub>2</sub> must be fixed (6 turns of the cycle):<br>&bull; ATP: 3 per CO<sub>2</sub> (2 for reduction + 1 for regeneration) &times; 6 = <b>18 ATP</b><br>&bull; NADPH: 2 per CO<sub>2</sub> (for reduction) &times; 6 = <b>12 NADPH</b><br>In: 6 CO<sub>2</sub>, 18 ATP, 12 NADPH. Out: 1 glucose, 18 ADP, 12 NADP<sup>+</sup>. The Calvin pathway occurs in <b>all photosynthetic plants</b>, whether they have C<sub>3</sub> or C<sub>4</sub> (or other) pathways. Example of a C<sub>3</sub> plant: <i>Helianthus</i> (sunflower), wheat, rice.'}
    ],
    table: {title:'The Calvin Cycle in Three Stages (per CO<sub>2</sub>)', headers:['Stage','What happens','Uses'], rows:[
      ['Carboxylation','RuBP + CO<sub>2</sub> &rarr; 2 &times; 3-PGA (enzyme RuBisCO)','&mdash;'],
      ['Reduction','3-PGA &rarr; triose phosphate &rarr; glucose','2 ATP + 2 NADPH'],
      ['Regeneration','Triose phosphate &rarr; RuBP (acceptor re-formed)','1 ATP'],
      ['Total for 1 glucose','6 CO<sub>2</sub> fixed, 6 turns','18 ATP + 12 NADPH']
    ]},
    keyList: {title:'Calvin Cycle Numbers', items:[
      'Acceptor: RuBP (5C ketose sugar); first stable product: 3-PGA (3C)',
      'Enzyme: RuBisCO, the most abundant enzyme in the world',
      'Per CO<sub>2</sub>: 3 ATP + 2 NADPH',
      'Per glucose: 6 CO<sub>2</sub>, 6 turns, 18 ATP, 12 NADPH'
    ]}
  },

  'c4': {
    recap: [
      'C<sub>4</sub> plants (<b>maize, sugarcane, sorghum</b>) are adapted to <b>dry tropical regions</b>; first stable product = <b>oxaloacetic acid (OAA)</b>, a 4C acid',
      'Leaves show <b>Kranz anatomy</b>: large <b>bundle sheath cells</b> around the vascular bundles, with <b>many chloroplasts, thick walls impervious to gas exchange</b> and <b>no intercellular spaces</b>',
      'Primary CO<sub>2</sub> acceptor in mesophyll = <b>phosphoenol pyruvate (PEP)</b>, a 3C molecule; enzyme = <b>PEP carboxylase (PEPcase)</b>',
      'C<sub>4</sub> acids (malic or aspartic acid) go to bundle sheath &rarr; release <b>CO<sub>2</sub></b> &rarr; <b>Calvin cycle</b> there; the C<sub>3</sub> acid returns and regenerates PEP',
      'Mesophyll lacks RuBisCO; bundle sheath is rich in RuBisCO but lacks PEPcase. C<sub>4</sub> plants tolerate <b>high temperature and light</b>, give <b>more biomass</b>, and lack photorespiration'
    ],
    sections: [
      {h:'Who Are C<sub>4</sub> Plants?', body:'Plants that are adapted to <b>dry tropical regions</b> have the <b>C<sub>4</sub> pathway</b>, also called the <b>Hatch and Slack pathway</b>. Examples: <b>maize, sugarcane, sorghum</b>. Though these plants have the C<sub>4</sub> oxaloacetic acid as the first CO<sub>2</sub> fixation product, they use the <b>C<sub>3</sub> pathway (Calvin cycle) as the main biosynthetic pathway</b>. C<sub>4</sub> plants are special: they have a special type of leaf anatomy, they <b>tolerate higher temperatures</b>, they show a response to <b>high light intensities</b>, they <b>lack photorespiration</b> and they have <b>greater productivity of biomass</b>.'},
      {h:'Kranz Anatomy', body:'Study vertical sections of the leaves of a C<sub>3</sub> and a C<sub>4</sub> plant. The particularly large cells around the vascular bundles of the C<sub>4</sub> pathway plants are called <b>bundle sheath cells</b>, and leaves which have such anatomy are said to have <b>&lsquo;Kranz&rsquo; anatomy</b>. <b>&lsquo;Kranz&rsquo; means &lsquo;wreath&rsquo;</b> and reflects the arrangement of cells. The bundle sheath cells may form <b>several layers</b> around the vascular bundles; they are characterised by having a <b>large number of chloroplasts</b>, <b>thick walls impervious to gaseous exchange</b> and <b>no intercellular spaces</b>.'},
      {h:'Step 1: Fixation in the Mesophyll', body:'The <b>primary CO<sub>2</sub> acceptor</b> is a 3-carbon molecule, <b>phosphoenol pyruvate (PEP)</b>, and is present in the <b>mesophyll cells</b>. The enzyme responsible for this fixation is <b>PEP carboxylase</b> or <b>PEPcase</b>. It is important to register that the <b>mesophyll cells lack the RuBisCO enzyme</b>. The C<sub>4</sub> acid <b>OAA</b> is formed in the mesophyll cells. It then forms other 4-carbon compounds like <b>malic acid or aspartic acid</b> in the mesophyll cells itself.'},
      {h:'Step 2: Release of CO<sub>2</sub> in the Bundle Sheath', body:'The C<sub>4</sub> acids are <b>transported to the bundle sheath cells</b>. In the bundle sheath cells, these C<sub>4</sub> acids are broken down to release <b>CO<sub>2</sub></b> and a <b>3-carbon molecule</b>. The 3-carbon molecule is <b>transported back to the mesophyll</b>, where it is converted to <b>PEP again</b> (using ATP), thus completing the cycle. The CO<sub>2</sub> released in the bundle sheath cells enters the <b>C<sub>3</sub> or Calvin pathway</b>, a pathway common to all plants.'},
      {h:'Division of Labour Between the Two Cells', body:'The bundle sheath cells are <b>rich in RuBisCO</b> but <b>lack PEPcase</b>. Thus, the basic pathway that results in the formation of sugars, the Calvin pathway, is common to C<sub>3</sub> and C<sub>4</sub> plants. In C<sub>4</sub> plants, the C<sub>4</sub> cycle runs in the <b>mesophyll</b> and the C<sub>3</sub> cycle runs in the <b>bundle sheath</b>. Because CO<sub>2</sub> is pumped into the bundle sheath, its concentration there is high, which suppresses the oxygenase activity of RuBisCO.'}
    ],
    table: {title:'Mesophyll vs Bundle Sheath in a C<sub>4</sub> Leaf', headers:['Feature','Mesophyll cells','Bundle sheath cells'], rows:[
      ['Enzyme present','PEPcase','RuBisCO'],
      ['Enzyme absent','RuBisCO','PEPcase'],
      ['Pathway','C<sub>4</sub>: PEP + CO<sub>2</sub> &rarr; OAA &rarr; malic / aspartic acid','Calvin cycle (C<sub>3</sub>)'],
      ['CO<sub>2</sub> acceptor','PEP (3C)','RuBP (5C)'],
      ['Structure','Loosely arranged, around the sheath','Large, thick-walled, many chloroplasts, no intercellular spaces']
    ]},
    keyList: {title:'C<sub>4</sub> Cycle in Four Steps', items:[
      'Mesophyll: PEP (3C) + CO<sub>2</sub> &rarr; OAA (4C) by PEPcase',
      'OAA &rarr; malic acid / aspartic acid &rarr; moved to bundle sheath',
      'Bundle sheath: C<sub>4</sub> acid &rarr; CO<sub>2</sub> + C<sub>3</sub> acid; CO<sub>2</sub> enters the Calvin cycle',
      'C<sub>3</sub> acid (pyruvate) returns to mesophyll &rarr; regenerates PEP'
    ]}
  },

  'photoresp': {
    recap: [
      '<b>Photorespiration</b> = light-dependent uptake of O<sub>2</sub> and release of CO<sub>2</sub> by green cells; seen in <b>C<sub>3</sub> plants</b> (first observed by <b>Decker, 1955</b>)',
      '<b>RuBisCO</b> can bind <b>both CO<sub>2</sub> and O<sub>2</sub></b>; it has much greater affinity for CO<sub>2</sub>, and the binding depends on the <b>relative concentration</b> of O<sub>2</sub> and CO<sub>2</sub>',
      'When O<sub>2</sub> binds: RuBP + O<sub>2</sub> &rarr; <b>one 3-PGA + one phosphoglycolate (2C)</b> &rarr; hence <b>C<sub>2</sub> pathway</b>',
      'No sugar, no ATP, no NADPH is made; <b>ATP is used</b> and CO<sub>2</sub> is released &rarr; a <b>wasteful process</b>',
      '<b>C<sub>4</sub> plants lack photorespiration</b>: CO<sub>2</sub> concentration in the bundle sheath is high, so RuBisCO acts as a carboxylase &rarr; better productivity and yield'
    ],
    sections: [
      {h:'RuBisCO Has a Double Character', body:'RuBisCO, the most abundant enzyme in the world, is characterised by the fact that its <b>active site can bind to both CO<sub>2</sub> and O<sub>2</sub></b> &mdash; hence the name <b>ribulose bisphosphate carboxylase-oxygenase</b>. RuBisCO has a <b>much greater affinity for CO<sub>2</sub></b> than for O<sub>2</sub>. Imagine what would happen if this were not so! This binding is <b>competitive</b>: it is the <b>relative concentration of O<sub>2</sub> and CO<sub>2</sub></b> that determines which of the two will bind to the enzyme.'},
      {h:'What Happens in Photorespiration?', body:'In <b>C<sub>3</sub> plants</b>, some O<sub>2</sub> does bind to RuBisCO, and hence CO<sub>2</sub> fixation is decreased. Here the RuBP, instead of being converted to 2 molecules of PGA, <b>binds with O<sub>2</sub></b> to form <b>one molecule of phosphoglycerate</b> and <b>one molecule of phosphoglycolate (2C)</b>, in a pathway called <b>photorespiration</b>. Because a 2-carbon compound (phosphoglycolate) is produced, it is also referred to as the <b>C<sub>2</sub> pathway</b>. Photorespiration is the respiration that occurs in green cells in the presence of light, resulting in the evolution of CO<sub>2</sub>; it was first observed by <b>Decker (1955)</b>.'},
      {h:'Why Is It Wasteful?', body:'In the photorespiratory pathway, there is <b>neither synthesis of sugars, nor of ATP</b> (nor NADPH). Rather, it results in the <b>release of CO<sub>2</sub> with the utilisation of ATP</b>. In the photorespiratory pathway there is no synthesis of ATP or NADPH. Therefore, photorespiration is a <b>wasteful process</b> in C<sub>3</sub> plants. The pathway involves three organelles: <b>chloroplast, peroxisome and mitochondrion</b>.'},
      {h:'Why Do C<sub>4</sub> Plants Not Photorespire?', body:'In <b>C<sub>4</sub> plants, photorespiration does not occur</b>. This is because they have a mechanism that <b>increases the concentration of CO<sub>2</sub> at the enzyme site</b>. This takes place when the C<sub>4</sub> acid from the mesophyll is broken down in the bundle sheath cells to release CO<sub>2</sub>; this results in <b>increasing the intracellular concentration of CO<sub>2</sub></b>. In turn, this ensures that RuBisCO functions as a <b>carboxylase</b>, minimising the oxygenase activity. Now that you know C<sub>4</sub> plants lack photorespiration, you probably understand why <b>productivity and yields are better</b> in these plants. In addition, these plants show <b>tolerance to higher temperatures</b>.'},
      {h:'C<sub>3</sub> and C<sub>4</sub>: The Big Comparison', body:'Photorespiration is the main reason for the difference in efficiency between C<sub>3</sub> and C<sub>4</sub> plants. C<sub>3</sub> plants fix CO<sub>2</sub> with RuBisCO directly in the mesophyll and lose some carbon by photorespiration, especially at high temperature (when O<sub>2</sub> relative to CO<sub>2</sub> rises). C<sub>4</sub> plants first trap CO<sub>2</sub> with PEPcase, which has <b>no affinity for O<sub>2</sub></b>, and then concentrate it in the bundle sheath. Use the table below for any &ldquo;differentiate&rdquo; question.'}
    ],
    table: {title:'C<sub>3</sub> Plants vs C<sub>4</sub> Plants', headers:['Character','C<sub>3</sub> plants','C<sub>4</sub> plants'], rows:[
      ['Cell types doing the Calvin cycle','Mesophyll','Bundle sheath'],
      ['Cell types doing initial CO<sub>2</sub> fixation','Mesophyll','Mesophyll'],
      ['Number of cell types fixing CO<sub>2</sub>','One','Two'],
      ['Primary CO<sub>2</sub> acceptor','RuBP (5C)','PEP (3C)'],
      ['Number of carbons in the acceptor','5','3'],
      ['Primary CO<sub>2</sub> fixation product','3-PGA (3C)','OAA (4C)'],
      ['Enzyme for CO<sub>2</sub> fixation','RuBisCO','PEPcase'],
      ['RuBisCO in mesophyll?','Yes','No'],
      ['Photorespiration','Yes (high)','Negligible'],
      ['Optimum temperature','Lower (about 10&ndash;25 &deg;C)','Higher (about 30&ndash;45 &deg;C)'],
      ['Kranz anatomy','Absent','Present'],
      ['Examples','Wheat, rice, sunflower','Maize, sugarcane, sorghum']
    ]},
    keyList: {title:'Photorespiration in One Line Each', items:[
      'Who: C<sub>3</sub> plants, in light',
      'Why: RuBisCO binds O<sub>2</sub> instead of CO<sub>2</sub>',
      'Product: 1 phosphoglycerate + 1 phosphoglycolate (2C) &rarr; C<sub>2</sub> pathway',
      'Result: ATP used, CO<sub>2</sub> released, no sugar &rarr; wasteful'
    ]}
  },

  'factors': {
    recap: [
      'Rate of photosynthesis depends on <b>internal (plant) factors</b> and <b>external factors</b>: light, CO<sub>2</sub>, temperature and water',
      '<b>Blackman&rsquo;s law of limiting factors (1905)</b>: when a process depends on several factors, its rate is determined by the factor <b>nearest to its minimal value</b>',
      '<b>Light</b>: rate rises with intensity at low light; light <b>saturation at about 10% of full sunlight</b>; very high light damages chlorophyll (<b>solarisation</b>)',
      '<b>CO<sub>2</sub></b> (0.03&ndash;0.04% in air) is the <b>major limiting factor</b>; raising it to about <b>0.05%</b> increases fixation; C<sub>3</sub> plants respond more (used in greenhouses for <b>tomato and bell pepper</b>)',
      '<b>Temperature</b>: dark reactions are temperature-sensitive; C<sub>4</sub> optimum is higher. <b>Water</b> stress closes stomata and wilts leaves'
    ],
    sections: [
      {h:'Internal and External Factors', body:'An understanding of the factors that affect photosynthesis is necessary. The rate of photosynthesis is very important in determining the <b>yield of plants including crop plants</b>. Photosynthesis is under the influence of several factors, both <b>internal (plant)</b> and <b>external</b>. The plant factors include the <b>number, size, age and orientation of leaves</b>, <b>mesophyll cells and chloroplasts</b>, <b>internal CO<sub>2</sub> concentration</b> and the <b>amount of chlorophyll</b>. The plant or internal factors depend on the genetic predisposition and the growth of the plant. The external factors include the availability of <b>sunlight, temperature, CO<sub>2</sub> concentration and water</b>.'},
      {h:'Blackman&rsquo;s Law of Limiting Factors', body:'As a plant photosynthesises, all these factors will simultaneously affect its rate. Hence, though several factors interact and simultaneously affect photosynthesis or CO<sub>2</sub> fixation, usually <b>one factor is the major cause</b> or is the one that limits the rate. Hence, at any point the rate will be determined by the factor available at sub-optimal levels. <b>Blackman&rsquo;s (1905) Law of Limiting Factors</b>: <i>If a chemical process is affected by more than one factor, then its rate will be determined by the factor which is nearest to its minimal value: it is the factor which directly affects the process if its quantity is changed.</i> For example, despite the presence of a green leaf and optimal light and CO<sub>2</sub> conditions, the plant may not photosynthesise if the temperature is very low. This leaf, if given the optimal temperature, will start photosynthesising.'},
      {h:'Light', body:'We need to distinguish between <b>light quality, light intensity and the duration of exposure</b>. There is a <b>linear relationship</b> between incident light and CO<sub>2</sub> fixation rates at <b>low light intensities</b>. At higher light intensities, gradually the rate does not show further increase, as other factors become limiting. Interestingly, <b>light saturation occurs at about 10 per cent of the full sunlight</b>. Hence, except for plants in <b>shade or in dense forests</b>, light is <b>rarely a limiting factor</b> in nature. Increase in incident light beyond a point causes the <b>breakdown of chlorophyll</b> and a decrease in photosynthesis (this is called <b>solarisation</b>).<br>In the light-intensity graph: <b>A and B</b> &mdash; light is the limiting factor (rate rises with light); <b>C</b> &mdash; rate does not increase further because some other factor is limiting; <b>D</b> &mdash; the light intensity at which another factor becomes limiting.'},
      {h:'Carbon Dioxide Concentration', body:'CO<sub>2</sub> is the <b>major limiting factor</b> for photosynthesis. The concentration of CO<sub>2</sub> is very low in the atmosphere (between <b>0.03 and 0.04 per cent</b>). Increase in concentration up to <b>0.05 per cent</b> can cause an increase in CO<sub>2</sub> fixation rates; beyond this the levels can become <b>damaging over longer periods</b>. The C<sub>3</sub> and C<sub>4</sub> plants respond differently to CO<sub>2</sub> concentrations. At low light conditions neither group responds to high CO<sub>2</sub>. At high light intensities, both C<sub>3</sub> and C<sub>4</sub> plants show an increase in the rates of photosynthesis. C<sub>4</sub> plants show <b>saturation at about 360 &mu;l L<sup>&minus;1</sup></b>, while C<sub>3</sub> plants respond to increased CO<sub>2</sub> and saturation is seen only <b>beyond 450 &mu;l L<sup>&minus;1</sup></b>. Thus current availability of CO<sub>2</sub> is <b>limiting to C<sub>3</sub> plants</b>. The fact that C<sub>3</sub> plants respond to higher CO<sub>2</sub> is used in <b>greenhouse crops</b> such as <b>tomatoes and bell pepper</b>, which are grown in a CO<sub>2</sub>-enriched atmosphere for higher yields.'},
      {h:'Temperature', body:'The <b>dark reactions</b>, being <b>enzymatic</b>, are <b>temperature controlled</b>. Though the light reactions are also temperature sensitive, they are affected to a much lesser extent. The <b>C<sub>4</sub> plants respond to higher temperatures</b> and show a higher rate of photosynthesis (optimum about <b>30&ndash;45 &deg;C</b>), while <b>C<sub>3</sub> plants have a much lower temperature optimum</b> (about <b>10&ndash;25 &deg;C</b>). The temperature optimum for photosynthesis of different plants also depends on the <b>habitat</b> they are adapted to: <b>tropical plants have a higher temperature optimum</b> than plants adapted to temperate climates.'},
      {h:'Water', body:'Even though water is one of the reactants in the light reaction, the effect of water as a factor is more through its effect on the plant rather than directly on photosynthesis. <b>Water stress causes the stomata to close</b>, hence <b>reducing CO<sub>2</sub> availability</b>. Besides, water stress also makes <b>leaves wilt</b>, thus <b>reducing the surface area</b> of the leaves and their <b>metabolic activity</b> as well.'}
    ],
    table: {title:'External Factors at a Glance', headers:['Factor','Effect on photosynthesis','Key number / fact'], rows:[
      ['Light','Rate rises linearly at low intensity, then levels off','Saturation at about 10% of full sunlight; excess &rarr; solarisation'],
      ['CO<sub>2</sub>','Major limiting factor; more CO<sub>2</sub> &rarr; more fixation (up to a point)','Air 0.03&ndash;0.04%; up to 0.05% helps; C<sub>4</sub> saturate ~360 &mu;l/L, C<sub>3</sub> beyond 450 &mu;l/L'],
      ['Temperature','Controls the enzymatic dark reactions','C<sub>4</sub> optimum higher; tropical &gt; temperate'],
      ['Water','Indirect: stomata close, leaves wilt','Less CO<sub>2</sub> enters; smaller leaf surface']
    ]},
    keyList: {title:'Light-Intensity Graph (A, B, C, D)', items:[
      'A and B: light is the limiting factor &mdash; rate rises with light',
      'C: the curve levels off &mdash; another factor (CO<sub>2</sub>, temperature) limits the rate',
      'D: the light intensity at which another factor becomes limiting',
      'Blackman (1905): the factor nearest its minimum decides the rate'
    ]}
  }
};

const concepts = {
  'discovery': {
    hook:'A mouse in a sealed jar dies; a candle in a sealed jar goes out. Put a mint plant in the jar and both survive. What is the plant giving back &mdash; and where does it get it from?',
    chain:[
      'Breathing animals and burning candles use up something in air (oxygen) and foul it.',
      'Priestley found that a green plant restores this &ldquo;good air&rdquo;; Ingenhousz showed it happens only in sunlight and only in green parts.',
      'Sachs showed the green parts make glucose (stored as starch), and that chlorophyll is in chloroplasts.',
      'Van Niel compared plants with sulphur bacteria: when H<sub>2</sub>S is the hydrogen donor, sulphur is released instead of oxygen, so the oxygen of plants must come from water.',
      'Isotope studies with <sup>18</sup>O confirmed it, giving 6CO<sub>2</sub> + 12H<sub>2</sub>O &rarr; C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6H<sub>2</sub>O + 6O<sub>2</sub>.'
    ],
    misconceptions:[
      {wrong:'The oxygen released in photosynthesis comes from CO<sub>2</sub>.', right:'It comes from water. Van Niel inferred this from sulphur bacteria, and <sup>18</sup>O-labelled water proved it.'},
      {wrong:'Priestley discovered that sunlight is needed for photosynthesis.', right:'Priestley showed plants restore air; it was Jan Ingenhousz who showed sunlight is essential and only green parts release oxygen.'},
      {wrong:'The equation is 6CO<sub>2</sub> + 6H<sub>2</sub>O &rarr; C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6O<sub>2</sub>.', right:'That equation is balanced, but to show that all O<sub>2</sub> comes from water, the correct form uses 12H<sub>2</sub>O on the left and 6H<sub>2</sub>O on the right.'}
    ],
    analogy:'Photosynthesis is like a solar-powered kitchen: sunlight is the stove&rsquo;s fuel, water and CO<sub>2</sub> are the raw ingredients, glucose is the meal, and oxygen is the steam that escapes &mdash; and the steam comes from the water, not from the vegetables (CO<sub>2</sub>).',
    analytical:[
      {q:'In Engelmann&rsquo;s experiment, why did aerobic bacteria crowd in the blue and red regions?', a:'Those wavelengths are absorbed most by chlorophyll, so <i>Cladophora</i> photosynthesised fastest there and released the most O<sub>2</sub>; aerobic bacteria moved to where O<sub>2</sub> was highest. This was the first action spectrum.'},
      {q:'In the half-leaf experiment, why does the part of the leaf inside a tube with KOH not form starch?', a:'KOH absorbs CO<sub>2</sub>, so that part of the leaf gets no CO<sub>2</sub> and cannot photosynthesise; the rest of the leaf, with CO<sub>2</sub> and light, forms starch. This proves CO<sub>2</sub> is required.'}
    ]
  },
  'chloroplast': {
    hook:'Leaves look green, yet a leaf extract on chromatography paper shows four different bands. Why does a plant need so many pigments if only one does the real job?',
    chain:[
      'Photosynthesis happens mostly in mesophyll cells, packed with chloroplasts that line up along the walls to catch the right amount of light.',
      'Inside the chloroplast, the thylakoid membranes (grana and stroma lamellae) trap light and make ATP and NADPH.',
      'The stroma holds the enzymes that use ATP and NADPH to fix CO<sub>2</sub> into sugar.',
      'Chlorophyll a absorbs mainly blue and red light; the action spectrum matches its absorption spectrum, so it is the chief pigment.',
      'Accessory pigments (chlorophyll b, xanthophylls, carotenoids) absorb other wavelengths, pass the energy to chlorophyll a and protect it from photo-oxidation.'
    ],
    misconceptions:[
      {wrong:'Dark reactions happen only at night.', right:'&ldquo;Dark&rdquo; means not directly driven by light. They run in the stroma during the day, using ATP and NADPH from the light reaction.'},
      {wrong:'Leaves are green because green light is used most in photosynthesis.', right:'Green light is absorbed the least and reflected, so leaves look green. Blue and red light are absorbed and used the most.'},
      {wrong:'Accessory pigments carry out photosynthesis on their own.', right:'They only absorb light and transfer the energy to chlorophyll a, the reaction-centre pigment, and protect it from photo-oxidation.'}
    ],
    analogy:'The chloroplast is a factory: the thylakoids are the power station (making ATP and NADPH from sunlight) and the stroma is the assembly floor (using that power to build sugar). Accessory pigments are like extra solar panels angled to catch light the main panel misses.',
    analytical:[
      {q:'An action spectrum and an absorption spectrum of chlorophyll a are similar but not identical. What does the similarity show, and what does the difference show?', a:'The similarity shows chlorophyll a is the main pigment. The difference (some photosynthesis at wavelengths chlorophyll a absorbs poorly) shows accessory pigments also absorb light and pass the energy on.'},
      {q:'Why do chloroplasts in mesophyll cells line up along the cell walls?', a:'To receive the optimum quantity of incident light: they turn edge-on in strong light (to avoid damage) and flat in weak light (to catch more).'}
    ]
  },
  'light': {
    hook:'If light energy is just &ldquo;absorbed&rdquo;, how does it end up as chemical energy in ATP and NADPH &mdash; and why is oxygen released at the same time?',
    chain:[
      'Hundreds of pigment molecules bound to proteins form light harvesting complexes in PS I and PS II.',
      'The antenna pigments absorb light and funnel the energy to one special chlorophyll a molecule, the reaction centre (P680 in PS II, P700 in PS I).',
      'The excited reaction-centre chlorophyll gives away a high-energy electron to an acceptor.',
      'PS II must refill its lost electrons; it takes them from water, which splits into 4H<sup>+</sup>, O<sub>2</sub> and 4e<sup>&minus;</sup> with the help of Mn and Cl.',
      'The electrons drive ATP and NADPH formation, the protons build a gradient, and the oxygen is released as a by-product.'
    ],
    misconceptions:[
      {wrong:'PS I acts before PS II because it is numbered first.', right:'They are numbered in order of discovery. In the Z scheme, PS II acts first and passes electrons to PS I.'},
      {wrong:'Every chlorophyll a molecule is a reaction centre.', right:'Only one chlorophyll a molecule per photosystem is the reaction centre; all other pigments, including other chlorophyll a molecules, form the antenna.'},
      {wrong:'Water splitting is associated with PS I.', right:'The water splitting complex is associated with PS II, on the inner (lumen) side of the thylakoid membrane.'}
    ],
    analogy:'A photosystem is like a satellite dish: the wide dish (antenna pigments) collects signals of many wavelengths and focuses them onto one small receiver at the centre (the reaction centre chlorophyll a).',
    analytical:[
      {q:'Why are the reaction centres of PS I and PS II named P700 and P680?', a:'Their chlorophyll a molecules have absorption peaks at 700 nm and 680 nm respectively, because of the different proteins they are bound to in each photosystem.'},
      {q:'In the Hill reaction, isolated chloroplasts release O<sub>2</sub> without CO<sub>2</sub> if an electron acceptor is present. What does this prove?', a:'That O<sub>2</sub> evolution is part of the light reaction and comes from the splitting of water, not from CO<sub>2</sub>; CO<sub>2</sub> fixation is a separate (biosynthetic) step.'}
    ]
  },
  'electron': {
    hook:'If water gives electrons and NADP<sup>+</sup> takes them, why does the path need two photosystems and two jumps of light energy instead of one?',
    chain:[
      'Water holds its electrons tightly; NADP<sup>+</sup> needs electrons at a very high energy level. One push of light is not enough to bridge this gap.',
      'Light at 680 nm lifts electrons of PS II to an acceptor; they flow down through cytochromes to PS I, releasing energy used for ATP.',
      'Light at 700 nm lifts them again from PS I to a second acceptor with greater redox potential.',
      'From there they flow down to NADP<sup>+</sup>, which is reduced to NADPH + H<sup>+</sup> by NADP reductase.',
      'Plotted on a redox scale this path looks like a Z. When NADPH is not needed or only far-red light is available, PS I alone cycles electrons and makes only ATP.'
    ],
    misconceptions:[
      {wrong:'Cyclic photophosphorylation makes NADPH.', right:'Cyclic flow makes only ATP. No NADPH and no O<sub>2</sub> are produced because the electron returns to PS I and water is not split.'},
      {wrong:'Electrons lost by PS II return to it at the end of the Z scheme.', right:'In the non-cyclic path electrons do not return; they end up in NADPH. PS II gets new electrons from water.'},
      {wrong:'Cyclic photophosphorylation happens in grana thylakoids where both photosystems are present.', right:'It is thought to occur in the stroma lamellae, which lack PS II and NADP reductase.'}
    ],
    analogy:'The Z scheme is like a water-park ride with two lifts: lift 1 (PS II) raises you up, you slide down (electron transport, releasing energy for ATP), lift 2 (PS I) raises you higher, and the last slide drops you into the pool (NADP<sup>+</sup>). In cyclic flow you ride only lift 2 and slide back to its foot again and again.',
    analytical:[
      {q:'The Calvin cycle needs 3 ATP but only 2 NADPH per CO<sub>2</sub>. How does the plant meet the extra ATP demand?', a:'The non-cyclic path gives ATP and NADPH in a fixed ratio; the extra ATP is made by cyclic photophosphorylation, which produces only ATP.'},
      {q:'A plant is illuminated only with light of wavelength 700 nm. Which type of photophosphorylation will occur, and will O<sub>2</sub> be released?', a:'Only PS I is excited, so cyclic photophosphorylation occurs: ATP forms, but no NADPH, and no O<sub>2</sub> because PS II does not split water.'}
    ]
  },
  'chemiosmosis': {
    hook:'Electrons flowing through a chain do not touch ADP. So what actually pushes ADP and phosphate together to make ATP?',
    chain:[
      'The thylakoid membrane does not let protons leak through.',
      'Water splitting releases H<sup>+</sup> inside the lumen; the H carrier moves more H<sup>+</sup> from the stroma into the lumen; NADP reductase uses up H<sup>+</sup> in the stroma.',
      'So the lumen becomes rich in protons (low pH) and the stroma poor &mdash; a proton gradient, a store of energy.',
      'Protons can return to the stroma only through the CF<sub>0</sub> channel of ATP synthase.',
      'Their flow changes the shape of CF<sub>1</sub>, which joins ADP and Pi into ATP &mdash; about one ATP per three protons.'
    ],
    misconceptions:[
      {wrong:'In chloroplasts, protons accumulate in the stroma.', right:'They accumulate inside the thylakoid lumen; the stroma loses protons. (In mitochondria, they accumulate in the intermembrane space.)'},
      {wrong:'CF<sub>0</sub> makes ATP.', right:'CF<sub>0</sub> is the proton channel in the membrane; CF<sub>1</sub>, which faces the stroma, makes ATP when its conformation changes.'},
      {wrong:'Chemiosmosis is the same as osmosis of water.', right:'It is the diffusion of protons (H<sup>+</sup>) down their gradient, similar to osmosis in principle, coupled to chemical (ATP) synthesis.'}
    ],
    analogy:'The thylakoid is like a dam: protons pumped into the lumen are the water stored behind it, and ATP synthase is the turbine &mdash; water (protons) rushing back through the turbine (CF<sub>0</sub>) spins the generator (CF<sub>1</sub>) to produce electricity (ATP).',
    analytical:[
      {q:'If the thylakoid membrane were made leaky to H<sup>+</sup>, what would happen to ATP and NADPH formation?', a:'The proton gradient could not build up, so ATP synthase would stop making ATP. Electron flow could still reduce NADP<sup>+</sup>, so NADPH might still form, but ATP would not.'},
      {q:'Give the three reasons why the lumen of the thylakoid becomes acidic in light.', a:'(i) Water is split on the lumen side, releasing H<sup>+</sup>; (ii) the H carrier picks protons from the stroma and releases them into the lumen; (iii) NADP reductase removes H<sup>+</sup> from the stroma while reducing NADP<sup>+</sup>.'}
    ]
  },
  'calvin': {
    hook:'Scientists expected a 2-carbon molecule to accept CO<sub>2</sub> to make a 3-carbon product. Instead they found a 5-carbon sugar. How can 5 + 1 give two molecules of 3?',
    chain:[
      'RuBP (5C) accepts one CO<sub>2</sub> (1C) with the enzyme RuBisCO, giving an unstable 6C compound.',
      'It immediately splits into two molecules of 3-PGA (3C each) &mdash; carboxylation.',
      '3-PGA is phosphorylated by ATP and reduced by NADPH to triose phosphate, which builds glucose &mdash; reduction (2 ATP + 2 NADPH per CO<sub>2</sub>).',
      'Most triose phosphate is used to rebuild RuBP using one more ATP, so the cycle can continue &mdash; regeneration.',
      'Six turns fix six CO<sub>2</sub> and release one glucose, using 18 ATP and 12 NADPH in all.'
    ],
    misconceptions:[
      {wrong:'The primary acceptor of CO<sub>2</sub> in the Calvin cycle is a 2-carbon compound.', right:'It is the 5-carbon ketose sugar RuBP; the product is two molecules of 3-carbon PGA.'},
      {wrong:'The Calvin cycle occurs only in C<sub>3</sub> plants.', right:'It occurs in all photosynthetic plants; C<sub>4</sub> plants run it in their bundle sheath cells.'},
      {wrong:'One turn of the Calvin cycle makes one glucose.', right:'One turn fixes one CO<sub>2</sub>; six turns are needed for one glucose.'}
    ],
    analogy:'The Calvin cycle is like a carousel: the seat (RuBP) picks up one passenger (CO<sub>2</sub>) each round, the passengers are processed (reduced with ATP and NADPH) and a few leave as glucose, while the seat is rebuilt (regeneration) so the ride never stops.',
    analytical:[
      {q:'How many ATP and NADPH are needed to make 2 molecules of glucose by the Calvin cycle?', a:'One glucose needs 18 ATP and 12 NADPH, so two glucose need 36 ATP and 24 NADPH (12 CO<sub>2</sub>, 12 turns).'},
      {q:'If a plant is suddenly transferred to darkness, what happens to the levels of RuBP and 3-PGA, and why?', a:'Without ATP and NADPH, 3-PGA cannot be reduced and RuBP cannot be regenerated, while RuBP is still carboxylated for a while; so 3-PGA rises and RuBP falls until the cycle stops.'}
    ]
  },
  'c4': {
    hook:'Maize and sugarcane grow fastest in the hot sun, when wheat struggles. What special trick in their leaves lets them fix CO<sub>2</sub> so well?',
    chain:[
      'In heat, stomata partly close, CO<sub>2</sub> inside the leaf falls and O<sub>2</sub> rises &mdash; RuBisCO then wastes energy binding O<sub>2</sub>.',
      'C<sub>4</sub> plants first fix CO<sub>2</sub> in mesophyll cells with PEPcase, which has no affinity for O<sub>2</sub>, forming the 4C acid OAA.',
      'OAA is changed to malic or aspartic acid and moved into the bundle sheath cells of the Kranz anatomy.',
      'There the C<sub>4</sub> acid releases CO<sub>2</sub>, building a high CO<sub>2</sub> concentration around RuBisCO, which runs the Calvin cycle efficiently.',
      'The leftover 3C acid returns to the mesophyll to regenerate PEP, so the pump keeps working.'
    ],
    misconceptions:[
      {wrong:'C<sub>4</sub> plants do not have the Calvin cycle.', right:'They do: the C<sub>4</sub> pathway only concentrates CO<sub>2</sub>; the Calvin cycle in the bundle sheath makes the sugar.'},
      {wrong:'Mesophyll cells of C<sub>4</sub> plants contain RuBisCO.', right:'Mesophyll cells of C<sub>4</sub> plants lack RuBisCO; it is abundant in bundle sheath cells, which lack PEPcase.'},
      {wrong:'The primary acceptor in C<sub>4</sub> plants is OAA.', right:'The acceptor is PEP (3C); OAA (4C) is the first stable product.'}
    ],
    analogy:'A C<sub>4</sub> leaf works like a courier service: mesophyll cells collect CO<sub>2</sub> from the air and pack it in a 4C parcel; the parcel is delivered to the bundle sheath &ldquo;factory&rdquo;, opened, and the CO<sub>2</sub> handed to RuBisCO; the empty box (3C acid) goes back for the next parcel.',
    analytical:[
      {q:'Why do bundle sheath cells of C<sub>4</sub> plants have thick walls impervious to gases and no intercellular spaces?', a:'To keep the CO<sub>2</sub> released from C<sub>4</sub> acids trapped inside at a high concentration around RuBisCO, and to keep O<sub>2</sub> out, which prevents photorespiration.'},
      {q:'The C<sub>4</sub> pathway uses extra ATP to regenerate PEP. Why is it still advantageous in hot, sunny regions?', a:'Because it removes photorespiration, which would waste much more energy and carbon in C<sub>3</sub> plants at high temperature and light; so net productivity is higher.'}
    ]
  },
  'photoresp': {
    hook:'Plants &ldquo;breathe&rdquo; in light and release CO<sub>2</sub> without making any ATP. Why would evolution keep such a wasteful process?',
    chain:[
      'RuBisCO evolved when the air had very little O<sub>2</sub>, so it never learned to fully ignore O<sub>2</sub>; its active site binds both gases.',
      'The gas that wins depends on their relative concentrations; at high O<sub>2</sub> or high temperature more O<sub>2</sub> binds.',
      'RuBP + O<sub>2</sub> gives one 3-PGA and one 2C phosphoglycolate instead of two 3-PGA.',
      'Phosphoglycolate is processed through chloroplast, peroxisome and mitochondrion, using ATP and releasing CO<sub>2</sub>.',
      'C<sub>4</sub> plants avoid this by concentrating CO<sub>2</sub> around RuBisCO in the bundle sheath, so RuBisCO acts only as a carboxylase.'
    ],
    misconceptions:[
      {wrong:'Photorespiration produces ATP like normal respiration.', right:'Photorespiration produces no ATP, no NADPH and no sugar; it consumes ATP and releases CO<sub>2</sub>.'},
      {wrong:'RuBisCO prefers O<sub>2</sub> over CO<sub>2</sub>.', right:'RuBisCO has a much greater affinity for CO<sub>2</sub>; O<sub>2</sub> binds only when its relative concentration is high.'},
      {wrong:'Photorespiration is common in C<sub>4</sub> plants.', right:'It is negligible in C<sub>4</sub> plants because the CO<sub>2</sub> concentration at RuBisCO is kept high.'}
    ],
    analogy:'RuBisCO is like a shopkeeper who takes either rupees (CO<sub>2</sub>) or fake coins (O<sub>2</sub>). Usually most coins are real, but when fake coins become common, he accepts some and loses money (energy) &mdash; that loss is photorespiration.',
    analytical:[
      {q:'Why does photorespiration increase on a hot, dry day in a C<sub>3</sub> plant?', a:'Stomata close to save water, so CO<sub>2</sub> inside the leaf falls while O<sub>2</sub> from photosynthesis builds up; higher temperature also favours O<sub>2</sub> binding. RuBisCO therefore binds more O<sub>2</sub>.'},
      {q:'Why is photorespiration called the C<sub>2</sub> pathway?', a:'Because the oxygenation of RuBP produces a 2-carbon compound, phosphoglycolate, which is then metabolised.'}
    ]
  },
  'factors': {
    hook:'A farmer adds more fertiliser and more water but the crop does not grow faster. How do we find which single factor is holding the plant back?',
    chain:[
      'Photosynthesis depends on many things at once: light, CO<sub>2</sub>, temperature, water, and internal leaf factors.',
      'Blackman: at any moment, the factor in shortest supply (nearest its minimum) decides the rate.',
      'Raising a factor that is not limiting makes no difference; raising the limiting one speeds the process until another becomes limiting.',
      'In nature, light is rarely limiting (saturation at about 10% of full sunlight), but CO<sub>2</sub> (0.03&ndash;0.04%) often is, especially for C<sub>3</sub> plants.',
      'Temperature controls the enzymatic dark reactions, and water acts indirectly through stomata and leaf wilting.'
    ],
    misconceptions:[
      {wrong:'More light always means more photosynthesis.', right:'Beyond saturation the rate stops rising, and very strong light can damage chlorophyll (solarisation) and reduce photosynthesis.'},
      {wrong:'Water affects photosynthesis mainly as a raw material.', right:'Its main effect is indirect: water stress closes stomata (less CO<sub>2</sub>) and wilts leaves (less surface area).'},
      {wrong:'C<sub>4</sub> plants benefit more from extra CO<sub>2</sub> than C<sub>3</sub> plants.', right:'C<sub>4</sub> plants saturate at about 360 &mu;l/L; C<sub>3</sub> plants keep responding beyond 450 &mu;l/L, so CO<sub>2</sub> enrichment helps C<sub>3</sub> crops (tomato, bell pepper) more.'}
    ],
    analogy:'Blackman&rsquo;s law is like a team relay where the slowest runner decides the team&rsquo;s time: training the fast runners does nothing until you improve the slowest one.',
    analytical:[
      {q:'A plant in bright light shows no increase in photosynthesis when light is increased further, but the rate rises when CO<sub>2</sub> is increased. Explain using Blackman&rsquo;s law.', a:'Light is no longer limiting (it is at saturation); CO<sub>2</sub> is the factor nearest its minimum, so increasing CO<sub>2</sub> raises the rate until another factor becomes limiting.'},
      {q:'Why are tomatoes grown in CO<sub>2</sub>-enriched greenhouses?', a:'Tomato is a C<sub>3</sub> plant; current atmospheric CO<sub>2</sub> limits C<sub>3</sub> photosynthesis, and C<sub>3</sub> plants respond to CO<sub>2</sub> up to beyond 450 &mu;l/L, so enrichment gives higher yields.'}
    ]
  }
};

module.exports = {topics, study, concepts};
