/* PU-I Ch11: KCET, descriptive (Answer Practice / Paper Generator), Board Important, Glossary,
   Tree Explorer, Compare Matrix, Study Tips and Important Diagrams (English). */
const E='Easy', M='Medium', H='Hard';

/* KCET: [format, difficulty, q, [correct, ...wrong], exp, colA?, colB?] */
const kcet = {
  'discovery': [
    ['recall',E,'Who showed that only the green parts of plants release oxygen in sunlight?',['Jan Ingenhousz','Joseph Priestley','Julius von Sachs','Melvin Calvin'],'Ingenhousz.'],
    ['recall',M,'Engelmann&rsquo;s experiment used:',['<i>Cladophora</i> and aerobic bacteria','<i>Chlorella</i> and <sup>18</sup>O','Mint and mouse','Sunflower and KOH'],'First action spectrum.'],
    ['recall',M,'The oxygen evolved in photosynthesis comes from:',['Water','CO<sub>2</sub>','Glucose','Chlorophyll'],'Van Niel; confirmed with <sup>18</sup>O.'],
    ['matching',M,'Match Column I with Column II:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'Priestley: restores air; Sachs: starch.',['A. Priestley','B. Sachs'],['i. Glucose stored as starch','ii. Plants restore fouled air']],
    ['statement',H,'Which of the following is/are correct?\n(i) Sulphur bacteria release O<sub>2</sub>\n(ii) KOH absorbs CO<sub>2</sub>\n(iii) Ingenhousz showed the need for sunlight',['(ii) and (iii) only','(i) only','(i), (ii) and (iii)','(i) and (ii) only'],'Sulphur bacteria release sulphur, not O<sub>2</sub>.'],
    ['recall',M,'In the correct equation of photosynthesis, the number of water molecules on the reactant side is:',['12','6','24','1'],'6CO<sub>2</sub> + 12H<sub>2</sub>O.'],
    ['diagram',M,'In a variegated leaf tested for starch, the white areas turn:',['Brown (no starch)','Blue-black','Green','Red'],'No chlorophyll, no starch.'],
    ['diagram',M,'In the half-leaf experiment, the part inside the tube with KOH shows:',['No starch','Most starch','More chlorophyll','More stomata'],'No CO<sub>2</sub>, no starch.']
  ],
  'chloroplast': [
    ['recall',E,'The site of photosynthesis in a leaf is the:',['Mesophyll cell','Epidermal cell','Xylem','Phloem'],'Mesophyll.'],
    ['recall',M,'Enzymes of the dark reaction are present in the:',['Stroma','Grana','Thylakoid lumen','Outer membrane'],'Stroma.'],
    ['recall',M,'The yellow-green pigment on a leaf chromatogram is:',['Chlorophyll b','Chlorophyll a','Xanthophyll','Carotene'],'Chlorophyll b.'],
    ['matching',M,'Match Column I with Column II:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'Absorption = light absorbed; action = rate.',['A. Absorption spectrum','B. Action spectrum'],['i. Rate of photosynthesis vs wavelength','ii. Light absorbed vs wavelength']],
    ['statement',H,'Which of the following is/are correct?\n(i) Chlorophyll a is the chief pigment\n(ii) Accessory pigments protect chlorophyll a from photo-oxidation\n(iii) Green light is absorbed the most',['(i) and (ii) only','(iii) only','(i), (ii) and (iii)','(ii) and (iii) only'],'Green light is absorbed the least.'],
    ['recall',M,'Photosynthesis is maximum in which regions of light?',['Blue and red','Green and yellow','Only green','Only far-red'],'Blue and red.'],
    ['diagram',M,'In a chloroplast diagram, the stacks of coin-like membranes are labelled:',['Grana','Stroma','Ribosomes','Starch granule'],'Grana.'],
    ['diagram',M,'In the absorption spectrum of chlorophyll a, the two peaks lie in:',['Blue and red regions','Green and yellow regions','UV and infrared','Yellow and orange'],'Blue and red.']
  ],
  'light': [
    ['recall',E,'The reaction centre of PS II is:',['P680','P700','P600','P720'],'P680.'],
    ['recall',M,'The water splitting complex is associated with:',['PS II','PS I','Stroma','ATP synthase'],'PS II.'],
    ['recall',M,'Elements required for photolysis of water:',['Mn and Cl','Fe and Mg','Cu and Zn','N and P'],'Mn and Cl.'],
    ['matching',M,'Match Column I with Column II:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'PS I = P700; PS II = P680.',['A. PS I','B. PS II'],['i. P680','ii. P700']],
    ['statement',H,'Which of the following is/are correct?\n(i) Photosystems are named in order of discovery\n(ii) Each photosystem has one chlorophyll a as reaction centre\n(iii) Light reactions occur in the stroma',['(i) and (ii) only','(iii) only','(i), (ii) and (iii)','(ii) and (iii) only'],'Light reactions occur on thylakoids.'],
    ['recall',M,'O<sub>2</sub> released in the light reaction is a product of:',['Photolysis of water','Carboxylation','Reduction of NADP<sup>+</sup>','Chemiosmosis'],'Water splitting.'],
    ['diagram',M,'In a diagram of a photosystem, the pigments surrounding the reaction centre form the:',['Antenna (light harvesting complex)','Cytochrome chain','Stroma','ATP synthase'],'Antenna.'],
    ['diagram',M,'In a light harvesting complex diagram, energy flows towards:',['The reaction centre','The stroma','The cytoplasm','The outer membrane'],'Energy is funnelled to the reaction centre.']
  ],
  'electron': [
    ['recall',E,'Cyclic photophosphorylation forms:',['Only ATP','ATP and NADPH','Only NADPH','O<sub>2</sub> and NADPH'],'Only ATP.'],
    ['recall',M,'The enzyme that reduces NADP<sup>+</sup> is:',['NADP reductase','RuBisCO','PEPcase','ATPase'],'NADP reductase.'],
    ['recall',M,'Stroma lamellae lack:',['PS II and NADP reductase','PS I','ATP synthase','Chlorophyll'],'Only cyclic flow there.'],
    ['matching',M,'Match Column I with Column II:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'Non-cyclic gives ATP + NADPH; cyclic gives ATP.',['A. Non-cyclic','B. Cyclic'],['i. ATP only','ii. ATP and NADPH']],
    ['statement',H,'Which of the following is/are correct?\n(i) In the Z scheme electrons go from water to NADP<sup>+</sup>\n(ii) Cyclic flow releases O<sub>2</sub>\n(iii) Only PS I works in cyclic flow',['(i) and (iii) only','(ii) only','(i), (ii) and (iii)','(i) and (ii) only'],'Cyclic flow releases no O<sub>2</sub>.'],
    ['recall',M,'The Z scheme gets its name from:',['The shape of electron flow on a redox scale','Zinc in the chain','The Z-protein','Zeaxanthin'],'Shape on a redox scale.'],
    ['diagram',M,'In the Z scheme diagram, the highest point on the right is the acceptor of:',['PS I','PS II','Water','NADPH'],'The PS I acceptor sits at the top right of the Z.'],
    ['diagram',M,'In the Z scheme diagram, electrons enter PS II from:',['Water (photolysis)','NADPH','ATP','CO<sub>2</sub>'],'Water.']
  ],
  'chemiosmosis': [
    ['recall',E,'The chemiosmotic hypothesis was given by:',['Peter Mitchell','Melvin Calvin','Robert Hill','Blackman'],'Mitchell.'],
    ['recall',M,'Protons accumulate in the chloroplast in the:',['Thylakoid lumen','Stroma','Cytoplasm','Outer membrane'],'Lumen.'],
    ['recall',M,'The proton channel of ATP synthase is:',['CF<sub>0</sub>','CF<sub>1</sub>','LHC','P680'],'CF<sub>0</sub>.'],
    ['matching',M,'Match Column I with Column II:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'CF<sub>0</sub> channel; CF<sub>1</sub> makes ATP.',['A. CF<sub>0</sub>','B. CF<sub>1</sub>'],['i. Makes ATP, faces stroma','ii. Proton channel in membrane']],
    ['statement',H,'Which of the following is/are correct?\n(i) Water splitting adds H<sup>+</sup> to the lumen\n(ii) NADP reductase removes H<sup>+</sup> from the stroma\n(iii) ATP is made when protons move into the lumen',['(i) and (ii) only','(iii) only','(i), (ii) and (iii)','(ii) and (iii) only'],'ATP is made as protons move out to the stroma.'],
    ['recall',M,'About how many protons are needed per ATP?',['3','1','6','12'],'About 3.'],
    ['diagram',M,'In a chemiosmosis diagram, the proton concentration is highest in the:',['Lumen','Stroma','Cytoplasm','Intermembrane space'],'Lumen.'],
    ['diagram',M,'In a chemiosmosis diagram, the arrow through ATP synthase points from:',['Lumen to stroma','Stroma to lumen','Outer to inner envelope','Cytoplasm to stroma'],'Protons flow back to the stroma.']
  ],
  'calvin': [
    ['recall',E,'The first stable product of the Calvin cycle is:',['3-PGA','OAA','RuBP','PEP'],'3-PGA.'],
    ['recall',M,'The CO<sub>2</sub> acceptor in C<sub>3</sub> plants is:',['RuBP','PEP','OAA','Pyruvate'],'RuBP.'],
    ['recall',M,'ATP and NADPH needed per glucose:',['18 and 12','12 and 18','6 and 6','3 and 2'],'18 ATP, 12 NADPH.'],
    ['matching',M,'Match Column I with Column II:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'Reduction 2 ATP + 2 NADPH; regeneration 1 ATP.',['A. Reduction','B. Regeneration'],['i. 1 ATP per CO<sub>2</sub>','ii. 2 ATP + 2 NADPH per CO<sub>2</sub>']],
    ['statement',H,'Which of the following is/are correct?\n(i) RuBP is a 5-carbon ketose sugar\n(ii) Six turns of the Calvin cycle make one glucose\n(iii) The Calvin cycle runs only in C<sub>3</sub> plants',['(i) and (ii) only','(iii) only','(i), (ii) and (iii)','(ii) and (iii) only'],'It runs in all plants.'],
    ['recall',M,'Melvin Calvin used the radioactive isotope:',['<sup>14</sup>C','<sup>18</sup>O','<sup>32</sup>P','<sup>35</sup>S'],'<sup>14</sup>C.'],
    ['diagram',M,'In a Calvin cycle diagram, CO<sub>2</sub> enters at the stage of:',['Carboxylation','Reduction','Regeneration','Photolysis'],'Carboxylation.'],
    ['diagram',M,'In a Calvin cycle diagram, sugar leaves the cycle after:',['Reduction','Carboxylation','Regeneration','Photolysis'],'Triose phosphate from reduction.']
  ],
  'c4': [
    ['recall',E,'Which is a C<sub>4</sub> plant?',['Maize','Wheat','Rice','Sunflower'],'Maize.'],
    ['recall',M,'The primary CO<sub>2</sub> acceptor of C<sub>4</sub> plants is:',['PEP','RuBP','OAA','PGA'],'PEP.'],
    ['recall',M,'In C<sub>4</sub> plants, RuBisCO is found in:',['Bundle sheath cells','Mesophyll cells','Epidermis','Guard cells'],'Bundle sheath.'],
    ['matching',M,'Match Column I with Column II:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'Mesophyll PEPcase; bundle sheath RuBisCO.',['A. Mesophyll (C<sub>4</sub>)','B. Bundle sheath (C<sub>4</sub>)'],['i. RuBisCO','ii. PEPcase']],
    ['statement',H,'Which of the following is/are correct?\n(i) Bundle sheath cells have no intercellular spaces\n(ii) OAA is the first stable product of C<sub>4</sub> plants\n(iii) Mesophyll cells of C<sub>4</sub> plants have RuBisCO',['(i) and (ii) only','(iii) only','(i), (ii) and (iii)','(ii) and (iii) only'],'Mesophyll lacks RuBisCO.'],
    ['recall',M,'&lsquo;Kranz&rsquo; means:',['Wreath','Sheath','Ring','Crown'],'Wreath.'],
    ['diagram',M,'In a Kranz anatomy diagram, the large cells surrounding the vascular bundle are:',['Bundle sheath cells','Mesophyll cells','Epidermal cells','Guard cells'],'Bundle sheath.'],
    ['diagram',M,'In a C<sub>4</sub> pathway diagram, the arrow from bundle sheath back to mesophyll carries:',['A C<sub>3</sub> acid (pyruvate)','Glucose','RuBP','O<sub>2</sub>'],'It regenerates PEP.']
  ],
  'photoresp': [
    ['recall',E,'Photorespiration is common in:',['C<sub>3</sub> plants','C<sub>4</sub> plants','Fungi','Animals'],'C<sub>3</sub>.'],
    ['recall',M,'The 2-carbon compound of photorespiration is:',['Phosphoglycolate','Phosphoglycerate','Pyruvate','Oxaloacetate'],'Phosphoglycolate.'],
    ['recall',M,'Photorespiration was first observed by:',['Decker','Calvin','Hatch','Mitchell'],'Decker, 1955.'],
    ['matching',M,'Match Column I with Column II:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'C<sub>3</sub>: RuBP; C<sub>4</sub>: PEP.',['A. C<sub>3</sub> acceptor','B. C<sub>4</sub> acceptor'],['i. PEP','ii. RuBP']],
    ['statement',H,'Which of the following is/are correct?\n(i) Photorespiration uses ATP\n(ii) Photorespiration releases CO<sub>2</sub>\n(iii) Photorespiration makes sugar',['(i) and (ii) only','(iii) only','(i), (ii) and (iii)','(ii) and (iii) only'],'No sugar is made.'],
    ['recall',M,'C<sub>4</sub> plants lack photorespiration because:',['CO<sub>2</sub> is concentrated at RuBisCO','They lack RuBisCO','They live in shade','They lack mitochondria'],'CO<sub>2</sub> concentrating mechanism.'],
    ['diagram',M,'In a photorespiration flow diagram, the organelle between chloroplast and mitochondrion is the:',['Peroxisome','Golgi body','Nucleus','Vacuole'],'Peroxisome.'],
    ['diagram',M,'In a comparison chart, Kranz anatomy is marked &ldquo;present&rdquo; for:',['C<sub>4</sub> plants','C<sub>3</sub> plants','Both','Neither'],'C<sub>4</sub>.']
  ],
  'factors': [
    ['recall',E,'The law of limiting factors was given by:',['Blackman','Calvin','Priestley','Hill'],'Blackman, 1905.'],
    ['recall',M,'Light saturation occurs at about:',['10% of full sunlight','50% of full sunlight','90% of full sunlight','Full sunlight'],'10%.'],
    ['recall',M,'The major limiting factor of photosynthesis is:',['CO<sub>2</sub>','Light','O<sub>2</sub>','N<sub>2</sub>'],'CO<sub>2</sub>.'],
    ['matching',M,'Match Column I with Column II:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'C<sub>4</sub> saturate at ~360; C<sub>3</sub> beyond 450 &mu;l/L.',['A. C<sub>4</sub> plants','B. C<sub>3</sub> plants'],['i. Saturate beyond 450 &mu;l/L CO<sub>2</sub>','ii. Saturate at about 360 &mu;l/L CO<sub>2</sub>']],
    ['statement',H,'Which of the following is/are correct?\n(i) Water stress closes stomata\n(ii) Dark reactions are temperature sensitive\n(iii) Light is the most common limiting factor in nature',['(i) and (ii) only','(iii) only','(i), (ii) and (iii)','(ii) and (iii) only'],'Light is rarely limiting.'],
    ['recall',M,'Breakdown of chlorophyll at very high light intensity is called:',['Solarisation','Etiolation','Plasmolysis','Senescence'],'Solarisation.'],
    ['diagram',M,'In the light-intensity graph, the flat region shows that:',['Another factor is limiting','Light is limiting','Photosynthesis has stopped','Chlorophyll is absent'],'Plateau.'],
    ['diagram',M,'In the light-intensity graph, the steep initial rise shows that:',['Light is the limiting factor','CO<sub>2</sub> is limiting','Temperature is limiting','Water is limiting'],'Rate rises with light.']
  ]
};

/* Descriptive: [marks, difficulty, question, answer] */
const desc = {
  'discovery': [
    [1,E,'Define photosynthesis.','A physico-chemical process by which green plants use light energy to synthesise organic compounds (sugar) from CO<sub>2</sub> and water, releasing oxygen.'],
    [1,E,'Name the alga used by Engelmann.','<i>Cladophora</i>.'],
    [2,M,'Give two reasons why photosynthesis is important.','(i) It is the primary source of all food on earth. (ii) It releases oxygen into the atmosphere.'],
    [2,M,'What did Priestley and Ingenhousz conclude from their experiments?','(i) Priestley: plants restore the air fouled by burning candles and breathing animals. (ii) Ingenhousz: sunlight is essential, and only green parts release oxygen.'],
    [3,M,'Describe Engelmann&rsquo;s experiment and its conclusion.','(i) He split light into its spectrum using a prism and illuminated the green alga <i>Cladophora</i> placed in a suspension of aerobic bacteria. (ii) The bacteria accumulated mainly in the blue and red regions, where most O<sub>2</sub> was released. (iii) This was the first action spectrum of photosynthesis; it resembles the absorption spectra of chlorophyll a and b.'],
    [3,M,'How did van Niel show that the O<sub>2</sub> of photosynthesis comes from water?','(i) Working with purple and green bacteria, he showed that photosynthesis is a light-dependent reaction in which hydrogen from an oxidisable compound reduces CO<sub>2</sub>: 2H<sub>2</sub>A + CO<sub>2</sub> &rarr; 2A + CH<sub>2</sub>O + H<sub>2</sub>O. (ii) In sulphur bacteria H<sub>2</sub>S is the donor and sulphur is released, not O<sub>2</sub>. (iii) So in green plants, where H<sub>2</sub>O is the donor, the O<sub>2</sub> must come from water; this was later confirmed with <sup>18</sup>O.'],
    [3,H,'Describe the half-leaf experiment. What does it prove?','(i) A part of a leaf (still on the plant) is enclosed in a test tube containing cotton soaked in KOH, which absorbs CO<sub>2</sub>; the other half is exposed to air. (ii) After keeping the plant in light, the leaf is tested for starch with iodine. (iii) The half in the tube shows no starch, the exposed half shows starch &mdash; proving CO<sub>2</sub> is required for photosynthesis.'],
    [5,H,'Trace the history of the discovery of photosynthesis and write the correct overall equation.','<b>Priestley (1770)</b>: mint plant restores air fouled by a candle or mouse. <b>Ingenhousz</b>: sunlight is essential; green parts release O<sub>2</sub>. <b>Sachs (1854)</b>: glucose made in green parts, stored as starch; chlorophyll in chloroplasts. <b>Engelmann</b>: first action spectrum with <i>Cladophora</i>; blue and red light most effective. <b>Van Niel</b>: from purple and green bacteria, O<sub>2</sub> comes from H<sub>2</sub>O (2H<sub>2</sub>A + CO<sub>2</sub> &rarr; 2A + CH<sub>2</sub>O + H<sub>2</sub>O). <b>Equation</b>: 6CO<sub>2</sub> + 12H<sub>2</sub>O &rarr; C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6H<sub>2</sub>O + 6O<sub>2</sub> (light, chlorophyll).']
  ],
  'chloroplast': [
    [1,E,'Which is the chief pigment of photosynthesis?','Chlorophyll a.'],
    [1,E,'Where do the dark reactions occur?','In the stroma of the chloroplast.'],
    [2,M,'Distinguish between absorption spectrum and action spectrum.','(i) Absorption spectrum: graph of light absorbed by a pigment at different wavelengths. (ii) Action spectrum: graph of the rate of photosynthesis at different wavelengths.'],
    [2,M,'What are accessory pigments? Give their roles.','Chlorophyll b, xanthophylls and carotenoids. (i) They absorb a wider range of wavelengths and transfer energy to chlorophyll a. (ii) They protect chlorophyll a from photo-oxidation.'],
    [3,M,'Describe the structure of a chloroplast with reference to the site of light and dark reactions.','(i) Bounded by outer and inner membranes; inside is a membrane system of grana (stacks of thylakoids) and stroma lamellae, and a matrix, the stroma. (ii) Thylakoid membranes trap light and synthesise ATP and NADPH (light reactions). (iii) The stroma contains enzymes that fix CO<sub>2</sub> into sugar (dark reactions); it also has ribosomes, DNA and starch.'],
    [3,M,'Name the four leaf pigments and their colours on a chromatogram.','(i) Chlorophyll a &mdash; bright or blue-green; (ii) chlorophyll b &mdash; yellow-green; (iii) xanthophylls &mdash; yellow; (iv) carotenoids &mdash; yellow to yellow-orange.'],
    [3,H,'Why is chlorophyll a called the chief pigment? Explain with spectra.','(i) Chlorophyll a absorbs light maximally in the blue and red regions. (ii) The action spectrum of photosynthesis also peaks in the blue and red regions. (iii) The close match between the two shows chlorophyll a is responsible for most photosynthesis; the partial mismatch shows accessory pigments contribute too.'],
    [5,H,'Describe the site of photosynthesis and the pigments involved.','<b>Site</b>: mesophyll cells of leaves, rich in chloroplasts aligned along the walls for optimum light. Chloroplast: grana + stroma lamellae (thylakoid membranes: light reaction, ATP and NADPH) and stroma (enzymes, CO<sub>2</sub> fixation, sugar). <b>Pigments</b> (paper chromatography): chlorophyll a (blue-green, chief pigment), chlorophyll b (yellow-green), xanthophylls (yellow), carotenoids (yellow-orange). Chlorophyll a absorbs in blue and red; action spectrum matches. Accessory pigments widen absorption and protect chlorophyll a from photo-oxidation.']
  ],
  'light': [
    [1,E,'Name the reaction centre of PS I.','P700.'],
    [1,E,'Which elements are needed for photolysis of water?','Manganese and chlorine.'],
    [2,M,'What is a light harvesting complex?','(i) An aggregate of hundreds of pigment molecules bound to proteins within PS I and PS II. (ii) It absorbs light of different wavelengths and passes the energy to the reaction centre.'],
    [2,M,'Write the reaction of photolysis of water and state the fate of its products.','2H<sub>2</sub>O &rarr; 4H<sup>+</sup> + O<sub>2</sub> + 4e<sup>&minus;</sup>. Electrons replace those lost by PS II; protons collect in the lumen and help reduce NADP<sup>+</sup>; O<sub>2</sub> is released as a by-product.'],
    [3,M,'List the events of the light reaction and name its products.','(i) Light absorption by pigments. (ii) Splitting of water (photolysis). (iii) Release of oxygen. (iv) Formation of ATP and NADPH. Products: ATP, NADPH and O<sub>2</sub>.'],
    [3,M,'Describe the organisation of a photosystem.','(i) Pigments are organised into light harvesting complexes in PS I and PS II. (ii) All pigments except one chlorophyll a molecule form the antenna, which absorbs light of different wavelengths. (iii) One chlorophyll a molecule is the reaction centre: P700 in PS I and P680 in PS II.'],
    [3,H,'What is the Hill reaction? What is its significance?','(i) Robert Hill (1939) showed that isolated chloroplasts in light release O<sub>2</sub> in the presence of a suitable electron acceptor. (ii) It happens without CO<sub>2</sub>. (iii) It proves that O<sub>2</sub> evolution is a light reaction and comes from water.'],
    [5,H,'Describe the light reaction of photosynthesis.','<b>Site</b>: thylakoid membranes. <b>Events</b>: light absorption, water splitting, O<sub>2</sub> release, ATP and NADPH formation. <b>Photosystems</b>: pigments form LHC in PS I and PS II (named by order of discovery); antenna + reaction centre (P700 in PS I, P680 in PS II). <b>Photolysis</b>: linked to PS II on the lumen side; 2H<sub>2</sub>O &rarr; 4H<sup>+</sup> + O<sub>2</sub> + 4e<sup>&minus;</sup>; Mn and Cl needed; electrons refill P680. <b>Electron flow</b> through the Z scheme forms NADPH; the proton gradient makes ATP by chemiosmosis.']
  ],
  'electron': [
    [1,E,'What is photophosphorylation?','Synthesis of ATP from ADP and Pi in chloroplasts in the presence of light.'],
    [1,E,'Where does cyclic photophosphorylation occur?','In the stroma lamellae.'],
    [2,M,'Why is non-cyclic electron transport called the Z scheme?','(i) When all carriers are placed on a redox potential scale in order of electron flow, the path looks like the letter Z. (ii) Electrons are lifted twice (at PS II and PS I) and flow downhill in between.'],
    [2,M,'Why is no O<sub>2</sub> or NADPH formed in cyclic photophosphorylation?','(i) Only PS I works, so water is not split and no O<sub>2</sub> is released. (ii) The electron returns to PS I instead of going to NADP<sup>+</sup>, so no NADPH forms.'],
    [3,M,'Differentiate between cyclic and non-cyclic photophosphorylation (three points).','(i) Cyclic: only PS I; non-cyclic: PS I and PS II. (ii) Cyclic: only ATP; non-cyclic: ATP, NADPH and O<sub>2</sub>. (iii) Cyclic: electrons return to PS I, in stroma lamellae; non-cyclic: electrons go from water to NADP<sup>+</sup>, in grana.'],
    [3,M,'Describe cyclic photophosphorylation.','(i) Only PS I is functional; the excited electron from P700 goes to an acceptor and returns to PS I through the electron transport chain. (ii) ATP is formed, but no NADPH or O<sub>2</sub>. (iii) It occurs in stroma lamellae (no PS II, no NADP reductase) and when only light beyond 680 nm is available.'],
    [3,H,'Why does the plant need cyclic photophosphorylation?','(i) The Calvin cycle uses 3 ATP but only 2 NADPH per CO<sub>2</sub>. (ii) Non-cyclic flow gives ATP and NADPH in a fixed ratio. (iii) Cyclic flow makes extra ATP without NADPH to meet this difference.'],
    [5,H,'Explain the Z scheme of light reaction with a diagram.','<b>PS II</b>: P680 absorbs 680 nm light; excited electrons go uphill to a primary acceptor. <b>ETS</b>: electrons pass downhill through cytochromes to PS I (energy used to pump protons). <b>PS I</b>: P700 absorbs 700 nm; electrons go uphill to another acceptor of greater redox potential, then downhill to NADP<sup>+</sup>, reduced to NADPH + H<sup>+</sup> by NADP reductase. <b>Water</b>: photolysis (Mn, Cl) replaces electrons lost by PS II and releases O<sub>2</sub>. Plotted on a redox scale the path is Z-shaped; electrons do not return to PS II, so it is non-cyclic photophosphorylation. Products: ATP, NADPH, O<sub>2</sub>.']
  ],
  'chemiosmosis': [
    [1,E,'Who proposed the chemiosmotic hypothesis?','Peter Mitchell (1961).'],
    [1,E,'Name the two parts of ATP synthase.','CF<sub>0</sub> and CF<sub>1</sub>.'],
    [2,M,'List the requirements of chemiosmosis.','A membrane, a proton pump, a proton gradient and ATP synthase.'],
    [2,M,'Give the functions of CF<sub>0</sub> and CF<sub>1</sub>.','(i) CF<sub>0</sub>: embedded in the thylakoid membrane; forms a channel for facilitated diffusion of protons. (ii) CF<sub>1</sub>: protrudes into the stroma; its conformational change synthesises ATP.'],
    [3,M,'Give three reasons for the development of a proton gradient across the thylakoid membrane.','(i) Water splitting on the lumen side releases H<sup>+</sup> into the lumen. (ii) The primary acceptor passes its electron to an H carrier that removes a proton from the stroma and releases it into the lumen. (iii) NADP reductase on the stroma side removes H<sup>+</sup> from the stroma to reduce NADP<sup>+</sup>.'],
    [3,M,'How is ATP synthesised by ATP synthase?','(i) Protons accumulated in the lumen diffuse back to the stroma through the CF<sub>0</sub> channel. (ii) The breakdown of the gradient releases energy. (iii) This causes a conformational change in CF<sub>1</sub>, which synthesises ATP (about one ATP per 3 H<sup>+</sup>).'],
    [3,H,'Compare chemiosmosis in chloroplasts and mitochondria.','(i) Both need a membrane, proton pump, gradient and ATP synthase. (ii) In chloroplasts, protons accumulate inside the thylakoid lumen; in mitochondria, in the intermembrane space. (iii) Chloroplast gradient is driven by light energy; mitochondrial by oxidation of food.'],
    [5,H,'Explain the chemiosmotic hypothesis of ATP synthesis in chloroplasts with a diagram.','Proposed by <b>Peter Mitchell</b>. Requirements: membrane (thylakoid, impermeable to H<sup>+</sup>), proton pump, proton gradient, ATP synthase. <b>Gradient</b>: (i) photolysis on the lumen side adds H<sup>+</sup>; (ii) H carrier moves H<sup>+</sup> from stroma to lumen; (iii) NADP reductase uses stromal H<sup>+</sup>. Lumen becomes acidic. <b>ATP synthase</b>: CF<sub>0</sub> (channel in the membrane) and CF<sub>1</sub> (facing stroma). Protons diffuse through CF<sub>0</sub> to the stroma; energy released changes CF<sub>1</sub> conformation and ATP is made (~1 ATP per 3 H<sup>+</sup>). ATP and NADPH are used in the stroma for CO<sub>2</sub> fixation.']
  ],
  'calvin': [
    [1,E,'Name the first stable product of the Calvin cycle.','3-phosphoglyceric acid (3-PGA).'],
    [1,E,'Name the CO<sub>2</sub> acceptor of the Calvin cycle.','Ribulose 1,5-bisphosphate (RuBP).'],
    [2,M,'Why is RuBisCO so called?','It is ribulose bisphosphate carboxylase-oxygenase: it can carboxylate RuBP (with CO<sub>2</sub>) and also oxygenate it (with O<sub>2</sub>).'],
    [2,M,'How many ATP and NADPH are required to make one glucose? Show the calculation.','Per CO<sub>2</sub>: 3 ATP + 2 NADPH. One glucose needs 6 CO<sub>2</sub>: 6 &times; 3 = 18 ATP and 6 &times; 2 = 12 NADPH.'],
    [3,M,'Describe the three stages of the Calvin cycle.','(i) Carboxylation: RuBP + CO<sub>2</sub> &rarr; 2 &times; 3-PGA, by RuBisCO. (ii) Reduction: 3-PGA reduced to triose phosphate/glucose using 2 ATP + 2 NADPH per CO<sub>2</sub>. (iii) Regeneration: RuBP re-formed using 1 ATP per CO<sub>2</sub>.'],
    [3,M,'Why are some plants called C<sub>3</sub> plants? Give examples.','(i) Their first stable CO<sub>2</sub> fixation product is 3-PGA, a 3-carbon compound. (ii) CO<sub>2</sub> is accepted by RuBP through RuBisCO in mesophyll cells. (iii) Examples: wheat, rice, sunflower.'],
    [3,H,'How was the primary acceptor of CO<sub>2</sub> identified, and why was the result surprising?','(i) Calvin used <sup>14</sup>C and found the first product was 3-PGA (3C). (ii) Scientists expected a 2-carbon acceptor. (iii) After many experiments the acceptor was found to be RuBP, a 5-carbon ketose sugar, which with CO<sub>2</sub> gives two molecules of 3-PGA.'],
    [5,H,'Describe the Calvin cycle with a diagram and give its energy requirement.','Occurs in the <b>stroma</b> of all photosynthetic plants; traced by <b>Melvin Calvin</b> with <sup>14</sup>C. <b>Carboxylation</b>: RuBP (5C) + CO<sub>2</sub> &rarr; 2 &times; 3-PGA, catalysed by RuBisCO (most crucial step). <b>Reduction</b>: 3-PGA &rarr; triose phosphate &rarr; glucose, using 2 ATP + 2 NADPH per CO<sub>2</sub>. <b>Regeneration</b>: RuBP regenerated using 1 ATP per CO<sub>2</sub>. <b>Energy</b>: per CO<sub>2</sub> 3 ATP + 2 NADPH; per glucose (6 turns) 18 ATP + 12 NADPH.']
  ],
  'c4': [
    [1,E,'Name the primary CO<sub>2</sub> acceptor of C<sub>4</sub> plants.','Phosphoenol pyruvate (PEP).'],
    [1,E,'What is the meaning of Kranz?','Wreath.'],
    [2,M,'What is Kranz anatomy?','(i) The leaves of C<sub>4</sub> plants have large bundle sheath cells forming a wreath around the vascular bundles. (ii) These cells have many chloroplasts, thick walls impervious to gas exchange and no intercellular spaces.'],
    [2,M,'Why can the Calvin cycle not occur in mesophyll cells of C<sub>4</sub> plants?','(i) Mesophyll cells of C<sub>4</sub> plants lack RuBisCO. (ii) RuBisCO is present only in the bundle sheath cells.'],
    [3,M,'Write three features of C<sub>4</sub> plants.','(i) Kranz anatomy with bundle sheath cells. (ii) Tolerate high temperature and respond to high light intensity. (iii) Lack photorespiration and show greater productivity of biomass.'],
    [3,M,'Distinguish between mesophyll and bundle sheath cells of C<sub>4</sub> plants.','(i) Mesophyll has PEPcase, lacks RuBisCO; bundle sheath has RuBisCO, lacks PEPcase. (ii) Mesophyll fixes CO<sub>2</sub> to PEP forming OAA; bundle sheath runs the Calvin cycle. (iii) Bundle sheath cells are large, thick-walled, with no intercellular spaces.'],
    [3,H,'C<sub>4</sub> plants have the C<sub>4</sub> pathway, yet use the Calvin cycle. Explain.','(i) The C<sub>4</sub> pathway only traps CO<sub>2</sub> as a 4C acid in the mesophyll. (ii) The acid is carried to the bundle sheath and broken down to release CO<sub>2</sub>. (iii) This CO<sub>2</sub> enters the Calvin cycle, which actually synthesises sugar.'],
    [5,H,'Describe the Hatch and Slack (C<sub>4</sub>) pathway with a diagram.','<b>Plants</b>: maize, sugarcane, sorghum; dry tropical regions; <b>Kranz anatomy</b>. <b>Mesophyll</b>: PEP (3C) accepts CO<sub>2</sub> with PEPcase &rarr; OAA (4C, first stable product) &rarr; malic or aspartic acid. <b>Transport</b>: C<sub>4</sub> acid moves to bundle sheath. <b>Bundle sheath</b>: C<sub>4</sub> acid &rarr; CO<sub>2</sub> + C<sub>3</sub> acid; CO<sub>2</sub> enters Calvin cycle (RuBisCO). <b>Return</b>: C<sub>3</sub> acid goes back to mesophyll and regenerates PEP. Mesophyll lacks RuBisCO; bundle sheath lacks PEPcase. Advantages: high temperature and light tolerance, no photorespiration, more biomass.']
  ],
  'photoresp': [
    [1,E,'Define photorespiration.','Light-dependent uptake of O<sub>2</sub> and release of CO<sub>2</sub> in green cells, when RuBisCO binds O<sub>2</sub> instead of CO<sub>2</sub>.'],
    [1,E,'Why is photorespiration called the C<sub>2</sub> pathway?','Because the 2-carbon compound phosphoglycolate is formed.'],
    [2,M,'Why is photorespiration a wasteful process?','(i) No sugar, ATP or NADPH is formed. (ii) ATP is used and CO<sub>2</sub> is released, decreasing net CO<sub>2</sub> fixation.'],
    [2,M,'Why do C<sub>4</sub> plants not show photorespiration?','(i) CO<sub>2</sub> released from C<sub>4</sub> acids in the bundle sheath raises the CO<sub>2</sub> concentration at RuBisCO. (ii) So RuBisCO works as a carboxylase, minimising its oxygenase activity.'],
    [3,M,'Explain how photorespiration occurs in C<sub>3</sub> plants.','(i) RuBisCO can bind both CO<sub>2</sub> and O<sub>2</sub>; the relative concentration decides which binds. (ii) When O<sub>2</sub> binds, RuBP forms one phosphoglycerate and one phosphoglycolate (2C). (iii) Phosphoglycolate is metabolised through chloroplast, peroxisome and mitochondrion, using ATP and releasing CO<sub>2</sub>.'],
    [3,M,'Differentiate between C<sub>3</sub> and C<sub>4</sub> plants (three points).','(i) Acceptor: RuBP (C<sub>3</sub>) vs PEP (C<sub>4</sub>). (ii) First product: 3-PGA vs OAA. (iii) Photorespiration: present vs absent; Kranz anatomy: absent vs present.'],
    [3,H,'Why are C<sub>4</sub> plants more productive than C<sub>3</sub> plants?','(i) C<sub>4</sub> plants lack photorespiration, so no fixed carbon is lost. (ii) Their CO<sub>2</sub> concentrating mechanism keeps RuBisCO working as a carboxylase even at high temperature and light. (iii) Hence they show higher biomass productivity and yield.'],
    [5,H,'Explain photorespiration and compare C<sub>3</sub> and C<sub>4</sub> plants.','<b>Photorespiration</b>: in C<sub>3</sub> plants RuBisCO binds O<sub>2</sub> (it binds both gases; relative concentration decides). RuBP + O<sub>2</sub> &rarr; phosphoglycerate + phosphoglycolate (2C, hence C<sub>2</sub> pathway). Involves chloroplast, peroxisome, mitochondrion; no sugar, ATP or NADPH; ATP used, CO<sub>2</sub> released &rarr; wasteful. <b>C<sub>4</sub> plants</b> concentrate CO<sub>2</sub> in bundle sheath, so no photorespiration. <b>Comparison</b>: acceptor RuBP vs PEP; product PGA vs OAA; one vs two cell types; Kranz absent vs present; photorespiration high vs negligible; lower vs higher temperature optimum; wheat, rice vs maize, sugarcane.']
  ],
  'factors': [
    [1,E,'State Blackman&rsquo;s law of limiting factors.','If a chemical process is affected by more than one factor, its rate is determined by the factor nearest to its minimal value.'],
    [1,E,'What is solarisation?','Decrease in photosynthesis due to breakdown of chlorophyll at very high light intensity.'],
    [2,M,'Name two internal and two external factors that affect photosynthesis.','Internal: amount of chlorophyll, number and size of leaves. External: light, CO<sub>2</sub> (also temperature, water).'],
    [2,M,'How does water stress affect photosynthesis?','(i) It causes stomata to close, reducing CO<sub>2</sub> availability. (ii) It wilts leaves, reducing their surface area and metabolic activity.'],
    [3,M,'Explain the effect of light on photosynthesis.','(i) At low intensities, CO<sub>2</sub> fixation increases linearly with light. (ii) At higher intensities the rate levels off as other factors become limiting; saturation occurs at about 10% of full sunlight, so light is rarely limiting except in shade. (iii) Very high light breaks down chlorophyll (solarisation).'],
    [3,M,'Explain the effect of CO<sub>2</sub> concentration on photosynthesis.','(i) CO<sub>2</sub> (0.03&ndash;0.04% in air) is the major limiting factor; raising it to about 0.05% increases fixation. (ii) C<sub>4</sub> plants saturate at about 360 &mu;l/L, C<sub>3</sub> plants only beyond 450 &mu;l/L, so C<sub>3</sub> plants are CO<sub>2</sub>-limited. (iii) This is used to grow tomato and bell pepper in CO<sub>2</sub>-enriched greenhouses.'],
    [3,H,'Explain the light-intensity graph with regions A, B, C and D.','(i) A and B: rate rises with light &mdash; light is limiting. (ii) C: the curve flattens &mdash; another factor (CO<sub>2</sub>, temperature) is limiting. (iii) D: the light intensity at which another factor becomes limiting.'],
    [5,H,'Describe the factors affecting photosynthesis.','<b>Internal</b>: number, size, age and orientation of leaves; mesophyll cells and chloroplasts; internal CO<sub>2</sub>; chlorophyll. <b>Blackman&rsquo;s law (1905)</b>: rate set by the factor nearest its minimum. <b>Light</b>: linear rise at low light; saturation at ~10% sunlight; solarisation at very high light. <b>CO<sub>2</sub></b>: major limiting factor (0.03&ndash;0.04%); up to 0.05% helps; C<sub>4</sub> saturate ~360 &mu;l/L, C<sub>3</sub> beyond 450; greenhouses for tomato, bell pepper. <b>Temperature</b>: affects enzymatic dark reactions; C<sub>4</sub> and tropical plants have higher optima. <b>Water</b>: stress closes stomata and wilts leaves.']
  ]
};

const board = {
  intro:'Chapter 11 typically carries <b>8&ndash;10 marks</b> in the Annual PU Board / Class 11 theory paper. Most frequent high-weightage areas: <b>Z scheme (non-cyclic photophosphorylation)</b>, <b>Calvin cycle</b>, <b>C<sub>4</sub> pathway and Kranz anatomy</b>, <b>chemiosmotic hypothesis</b>, <b>photorespiration</b> and <b>C<sub>3</sub> vs C<sub>4</sub> plants</b>.',
  parts:[
    {label:'Very Short Answer (VSA — 1 Mark Each)', marks:1, items:[
      {q:'Name the alga used by Engelmann to obtain the action spectrum.', a:'<i>Cladophora</i>.'},
      {q:'What is the source of O<sub>2</sub> released in photosynthesis?', a:'Water.'},
      {q:'Name the reaction centre of PS II.', a:'P680.'},
      {q:'Which elements are associated with photolysis of water?', a:'Manganese and chlorine.'},
      {q:'Name the enzyme that reduces NADP<sup>+</sup>.', a:'NADP reductase.'},
      {q:'Who proposed the chemiosmotic hypothesis?', a:'Peter Mitchell.'},
      {q:'Name the primary CO<sub>2</sub> acceptor in C<sub>3</sub> plants.', a:'RuBP (ribulose 1,5-bisphosphate).'},
      {q:'Name the first stable product of C<sub>4</sub> plants.', a:'Oxaloacetic acid (OAA).'},
      {q:'What is Kranz anatomy?', a:'Wreath of large bundle sheath cells around the vascular bundles in C<sub>4</sub> leaves.'},
      {q:'Which is the most abundant enzyme on earth?', a:'RuBisCO.'},
      {q:'State Blackman&rsquo;s law of limiting factors.', a:'The rate of a process affected by many factors is decided by the factor nearest its minimal value.'}
    ]},
    {label:'Short Answer I (SA-I — 2 Marks Each)', marks:2, items:[
      {q:'Distinguish between absorption spectrum and action spectrum.', a:'Absorption spectrum: light absorbed by a pigment vs wavelength. Action spectrum: rate of photosynthesis vs wavelength.'},
      {q:'Give two functions of accessory pigments.', a:'Absorb a wider range of light and pass energy to chlorophyll a; protect chlorophyll a from photo-oxidation.'},
      {q:'Write the reaction of photolysis of water.', a:'2H<sub>2</sub>O &rarr; 4H<sup>+</sup> + O<sub>2</sub> + 4e<sup>&minus;</sup> (Mn, Cl; linked to PS II).'},
      {q:'Why is cyclic photophosphorylation so called? What is its product?', a:'Electrons return to PS I (cyclic flow); only ATP is formed.'},
      {q:'Name the two parts of ATP synthase and their roles.', a:'CF<sub>0</sub>: proton channel in the membrane. CF<sub>1</sub>: faces the stroma and synthesises ATP.'},
      {q:'Why is photorespiration called a wasteful process?', a:'No sugar, ATP or NADPH is made; ATP is used and CO<sub>2</sub> is released.'},
      {q:'How does water stress affect photosynthesis?', a:'Stomata close (less CO<sub>2</sub>) and leaves wilt (less surface area and metabolism).'}
    ]},
    {label:'Short Answer II / Explanatory (SA-II — 3 Marks Each)', marks:3, items:[
      {q:'Differentiate between cyclic and non-cyclic photophosphorylation.', a:'Photosystems: PS I only vs PS I + PS II. Products: ATP vs ATP + NADPH + O<sub>2</sub>. Path: electrons return to PS I (stroma lamellae) vs water to NADP<sup>+</sup> (grana).'},
      {q:'Explain the three reasons for the proton gradient across the thylakoid membrane.', a:'Photolysis releases H<sup>+</sup> in the lumen; H carrier moves H<sup>+</sup> from stroma to lumen; NADP reductase removes H<sup>+</sup> from the stroma.'},
      {q:'Describe the three stages of the Calvin cycle.', a:'Carboxylation (RuBP + CO<sub>2</sub> &rarr; 2 PGA, RuBisCO); reduction (2 ATP + 2 NADPH per CO<sub>2</sub>, forms sugar); regeneration (RuBP, 1 ATP).'},
      {q:'Differentiate between C<sub>3</sub> and C<sub>4</sub> plants.', a:'Acceptor RuBP vs PEP; product PGA vs OAA; Kranz absent vs present; photorespiration high vs absent; wheat vs maize.'},
      {q:'Explain the effect of light and CO<sub>2</sub> on photosynthesis.', a:'Light: linear at low intensity, saturation at ~10% sunlight, solarisation at very high light. CO<sub>2</sub>: major limiting factor; up to 0.05% helps; C<sub>3</sub> plants respond more.'}
    ]},
    {label:'Long Answer (LA — 5 Marks Each)', marks:5, items:[
      {q:'Explain the Z scheme of light reaction with a neat labelled diagram.', a:'PS II (P680) &rarr; acceptor &rarr; cytochrome ETS &rarr; PS I (P700) &rarr; acceptor &rarr; NADP reductase &rarr; NADPH; photolysis refills PS II and releases O<sub>2</sub>; Z shape on redox scale; non-cyclic; ATP, NADPH, O<sub>2</sub>.'},
      {q:'Describe the Calvin cycle with a diagram.', a:'Carboxylation, reduction, regeneration; RuBisCO; 3 ATP + 2 NADPH per CO<sub>2</sub>; 18 ATP + 12 NADPH per glucose; occurs in stroma of all plants.'},
      {q:'Describe the C<sub>4</sub> pathway (Hatch and Slack pathway) with a diagram.', a:'Kranz anatomy; PEP + CO<sub>2</sub> &rarr; OAA (PEPcase) in mesophyll &rarr; malic/aspartic acid to bundle sheath &rarr; CO<sub>2</sub> released into Calvin cycle &rarr; C<sub>3</sub> acid returns to regenerate PEP.'}
    ]}
  ],
  diagrams:[
    {title:'Z Scheme of Light Reaction', labels:'Water, P680 (PS II), Electron acceptor, Electron transport system (cytochromes), P700 (PS I), NADP reductase, NADP<sup>+</sup> &rarr; NADPH + H<sup>+</sup>, Redox potential scale'},
    {title:'Calvin Cycle', labels:'RuBP, CO<sub>2</sub>, Carboxylation, 3-PGA, ATP, NADPH, Reduction, Triose phosphate / sugar, Regeneration'},
    {title:'C<sub>4</sub> Pathway (Hatch and Slack)', labels:'Mesophyll cell, Bundle sheath cell, PEP, OAA, C<sub>4</sub> acid, CO<sub>2</sub>, C<sub>3</sub> acid, Calvin cycle'},
    {title:'Chloroplast (Electron Micrograph Section)', labels:'Outer membrane, Inner membrane, Grana, Stroma lamellae, Stroma, Ribosomes, Starch granule, Lipid droplet'},
    {title:'ATP Synthesis Through Chemiosmosis', labels:'Thylakoid membrane, Lumen (high H<sup>+</sup>), Stroma, PS II, PS I, CF<sub>0</sub>, CF<sub>1</sub>, ATP synthase, Water splitting'},
    {title:'Kranz Anatomy (T.S. of C<sub>4</sub> Leaf)', labels:'Bundle sheath cells, Mesophyll cells, Vascular bundle (xylem, phloem), Epidermis'}
  ]
};

const glossary = [
  ['Photosynthesis','A physico-chemical process in which green plants use light energy to make organic compounds from CO<sub>2</sub> and water, releasing O<sub>2</sub>.'],
  ['Action spectrum','A graph of the rate of photosynthesis at different wavelengths of light.'],
  ['Absorption spectrum','A graph of the amount of light absorbed by a pigment at different wavelengths.'],
  ['Chlorophyll a','The chief photosynthetic pigment (blue-green); forms the reaction centre of both photosystems.'],
  ['Accessory pigments','Chlorophyll b, xanthophylls and carotenoids; absorb extra wavelengths, pass energy to chlorophyll a and protect it from photo-oxidation.'],
  ['Grana','Stacks of thylakoid membranes in the chloroplast; site of the light reaction.'],
  ['Stroma','The matrix of the chloroplast containing enzymes of CO<sub>2</sub> fixation (dark reaction).'],
  ['Stroma lamellae','Membranes that connect grana; lack PS II and NADP reductase.'],
  ['Light harvesting complex (LHC)','Hundreds of pigment molecules bound to proteins, forming the antenna of a photosystem.'],
  ['Reaction centre','The single chlorophyll a molecule of a photosystem that gives away excited electrons (P700 or P680).'],
  ['P700','Reaction centre of PS I; chlorophyll a with an absorption peak at 700 nm.'],
  ['P680','Reaction centre of PS II; chlorophyll a with an absorption peak at 680 nm.'],
  ['Photolysis','Light-dependent splitting of water: 2H<sub>2</sub>O &rarr; 4H<sup>+</sup> + O<sub>2</sub> + 4e<sup>&minus;</sup>; linked to PS II.'],
  ['Hill reaction','Release of O<sub>2</sub> by illuminated isolated chloroplasts in the presence of an electron acceptor (Robert Hill, 1939).'],
  ['Photophosphorylation','Synthesis of ATP from ADP and Pi in chloroplasts using light energy.'],
  ['Z scheme','Non-cyclic electron flow from water through PS II and PS I to NADP<sup>+</sup>, Z-shaped on a redox scale.'],
  ['Cyclic photophosphorylation','ATP synthesis by cyclic electron flow in PS I alone; no NADPH or O<sub>2</sub>.'],
  ['NADP reductase','Enzyme on the stroma side that reduces NADP<sup>+</sup> to NADPH + H<sup>+</sup>.'],
  ['Chemiosmosis','ATP synthesis driven by diffusion of protons down a gradient across a membrane through ATP synthase.'],
  ['ATP synthase','Enzyme with CF<sub>0</sub> (proton channel) and CF<sub>1</sub> (catalytic head) that makes ATP.'],
  ['Calvin cycle','The C<sub>3</sub> cycle of carboxylation, reduction and regeneration that fixes CO<sub>2</sub> into sugar in the stroma.'],
  ['RuBP','Ribulose 1,5-bisphosphate: 5-carbon ketose sugar, CO<sub>2</sub> acceptor of the Calvin cycle.'],
  ['RuBisCO','Ribulose bisphosphate carboxylase-oxygenase: enzyme that fixes CO<sub>2</sub> (or O<sub>2</sub>) to RuBP; most abundant enzyme.'],
  ['3-PGA','3-phosphoglyceric acid; first stable 3-carbon product of the Calvin cycle.'],
  ['C3 plants','Plants whose first stable CO<sub>2</sub> fixation product is 3-PGA (e.g. wheat, rice, sunflower).'],
  ['C4 plants','Plants whose first stable product is the 4-carbon OAA; have Kranz anatomy (e.g. maize, sugarcane).'],
  ['PEP','Phosphoenol pyruvate; 3-carbon primary CO<sub>2</sub> acceptor in C<sub>4</sub> mesophyll cells.'],
  ['PEPcase','PEP carboxylase; enzyme fixing CO<sub>2</sub> to PEP in the mesophyll of C<sub>4</sub> plants.'],
  ['OAA','Oxaloacetic acid; 4-carbon first stable product of C<sub>4</sub> plants.'],
  ['Kranz anatomy','Wreath-like layer of large bundle sheath cells around vascular bundles in C<sub>4</sub> leaves.'],
  ['Bundle sheath cells','Large, thick-walled cells with many chloroplasts and no intercellular spaces; run the Calvin cycle in C<sub>4</sub> plants.'],
  ['Photorespiration','Light-dependent O<sub>2</sub> uptake and CO<sub>2</sub> release when RuBisCO binds O<sub>2</sub>; the C<sub>2</sub> pathway.'],
  ['Phosphoglycolate','2-carbon compound formed when RuBP reacts with O<sub>2</sub> in photorespiration.'],
  ['Limiting factor','The factor nearest its minimal value that decides the rate of a process (Blackman, 1905).'],
  ['Solarisation','Fall in photosynthesis due to breakdown of chlorophyll at very high light intensity.'],
  ['Light saturation','The light level (about 10% of full sunlight) beyond which more light does not raise photosynthesis.']
];

const tree = [
  {kingdom:'Early Experiments & the Equation', groups:[
    {name:'Priestley (1770)', detail:'Mint plant <b>restores fouled air</b> (candle, mouse).'},
    {name:'Ingenhousz', detail:'<b>Sunlight</b> essential; only <b>green parts</b> release O<sub>2</sub>.'},
    {name:'Sachs &amp; Engelmann', detail:'Glucose &rarr; <b>starch</b>; first <b>action spectrum</b> (<i>Cladophora</i>).'},
    {name:'Van Niel', detail:'O<sub>2</sub> comes from <b>H<sub>2</sub>O</b>; 6CO<sub>2</sub> + 12H<sub>2</sub>O &rarr; C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6H<sub>2</sub>O + 6O<sub>2</sub>.'}]},
  {kingdom:'Chloroplast & Pigments', groups:[
    {name:'Site', detail:'<b>Mesophyll</b> chloroplasts aligned for optimum light.'},
    {name:'Membranes vs stroma', detail:'Thylakoids: <b>ATP, NADPH</b>; stroma: <b>sugar</b>.'},
    {name:'Pigments', detail:'Chl a (blue-green), chl b (yellow-green), xanthophyll (yellow), carotenoid (orange).'},
    {name:'Spectra', detail:'Chl a absorbs <b>blue and red</b>; action spectrum matches.'}]},
  {kingdom:'Light Reaction', groups:[
    {name:'Events', detail:'Light absorption, <b>water splitting</b>, O<sub>2</sub> release, ATP + NADPH.'},
    {name:'Photosystems', detail:'<b>PS I (P700)</b>, <b>PS II (P680)</b>; named by discovery.'},
    {name:'LHC', detail:'<b>Antenna</b> pigments + one chlorophyll a <b>reaction centre</b>.'},
    {name:'Photolysis', detail:'2H<sub>2</sub>O &rarr; 4H<sup>+</sup> + O<sub>2</sub> + 4e<sup>&minus;</sup>; <b>PS II, Mn, Cl</b>.'}]},
  {kingdom:'Z Scheme & Cyclic Flow', groups:[
    {name:'Z scheme', detail:'Water &rarr; <b>PS II</b> &rarr; ETS &rarr; <b>PS I</b> &rarr; <b>NADP<sup>+</sup></b>.'},
    {name:'Products', detail:'Non-cyclic: <b>ATP + NADPH + O<sub>2</sub></b>.'},
    {name:'Cyclic', detail:'<b>Only PS I</b>; only <b>ATP</b>; stroma lamellae.'},
    {name:'Why cyclic?', detail:'Calvin cycle needs <b>3 ATP : 2 NADPH</b>.'}]},
  {kingdom:'Chemiosmosis', groups:[
    {name:'Mitchell (1961)', detail:'Membrane, pump, <b>proton gradient</b>, ATP synthase.'},
    {name:'Gradient', detail:'H<sup>+</sup> high in <b>lumen</b>, low in stroma.'},
    {name:'ATP synthase', detail:'<b>CF<sub>0</sub></b> channel + <b>CF<sub>1</sub></b> head.'},
    {name:'Yield', detail:'About <b>1 ATP per 3 H<sup>+</sup></b>.'}]},
  {kingdom:'Calvin (C3) Cycle', groups:[
    {name:'Carboxylation', detail:'RuBP + CO<sub>2</sub> &rarr; <b>2 &times; 3-PGA</b> (RuBisCO).'},
    {name:'Reduction', detail:'<b>2 ATP + 2 NADPH</b> per CO<sub>2</sub> &rarr; sugar.'},
    {name:'Regeneration', detail:'RuBP re-formed; <b>1 ATP</b>.'},
    {name:'One glucose', detail:'6 turns; <b>18 ATP + 12 NADPH</b>.'}]},
  {kingdom:'C4 Pathway', groups:[
    {name:'Plants', detail:'<b>Maize, sugarcane, sorghum</b>; dry tropics.'},
    {name:'Kranz anatomy', detail:'Large <b>bundle sheath</b>; thick walls; no intercellular spaces.'},
    {name:'Mesophyll', detail:'PEP + CO<sub>2</sub> &rarr; <b>OAA</b> (<b>PEPcase</b>); no RuBisCO.'},
    {name:'Bundle sheath', detail:'C<sub>4</sub> acid &rarr; CO<sub>2</sub> &rarr; <b>Calvin cycle</b>; no PEPcase.'}]},
  {kingdom:'Photorespiration', groups:[
    {name:'Cause', detail:'RuBisCO binds <b>O<sub>2</sub></b> (relative concentration).'},
    {name:'Products', detail:'Phosphoglycerate + <b>phosphoglycolate (2C)</b>.'},
    {name:'Cost', detail:'<b>ATP used, CO<sub>2</sub> released</b>; no sugar.'},
    {name:'C<sub>4</sub> escape', detail:'High CO<sub>2</sub> at RuBisCO &rarr; <b>no photorespiration</b>.'}]},
  {kingdom:'Factors', groups:[
    {name:'Blackman (1905)', detail:'Factor <b>nearest its minimum</b> limits the rate.'},
    {name:'Light', detail:'Saturation at <b>~10%</b> sunlight; solarisation.'},
    {name:'CO<sub>2</sub>', detail:'<b>Major limiting factor</b>; 0.03&ndash;0.04%; greenhouses.'},
    {name:'Temperature &amp; water', detail:'Dark reactions sensitive; stress <b>closes stomata</b>.'}]}
];

const compare = [
  {name:'Light reaction', organ:'Thylakoid membranes', purpose:'Trap light; make ATP, NADPH', structuralChange:'Water split; O<sub>2</sub> released', keyFeature:'PS I and PS II', example:'Z scheme'},
  {name:'Dark (biosynthetic) reaction', organ:'Stroma', purpose:'Fix CO<sub>2</sub> into sugar', structuralChange:'Uses ATP and NADPH', keyFeature:'Not directly light-driven', example:'Calvin cycle'},
  {name:'PS I', organ:'Photosystem', purpose:'Second boost to electrons', structuralChange:'Passes e<sup>&minus;</sup> to NADP<sup>+</sup>', keyFeature:'Reaction centre P700', example:'Works alone in cyclic flow'},
  {name:'PS II', organ:'Photosystem', purpose:'First boost to electrons', structuralChange:'Linked to water splitting', keyFeature:'Reaction centre P680', example:'Releases O<sub>2</sub>'},
  {name:'Non-cyclic photophosphorylation', organ:'Grana thylakoids', purpose:'ATP + NADPH', structuralChange:'Water &rarr; NADP<sup>+</sup> (one way)', keyFeature:'Z scheme; O<sub>2</sub> released', example:'Normal light'},
  {name:'Cyclic photophosphorylation', organ:'Stroma lamellae', purpose:'Extra ATP only', structuralChange:'Electron returns to PS I', keyFeature:'No NADPH, no O<sub>2</sub>', example:'Light beyond 680 nm'},
  {name:'Chemiosmosis', organ:'Thylakoid membrane', purpose:'Make ATP', structuralChange:'H<sup>+</sup> flow lumen &rarr; stroma', keyFeature:'CF<sub>0</sub> channel + CF<sub>1</sub>', example:'~1 ATP per 3 H<sup>+</sup>'},
  {name:'Calvin (C<sub>3</sub>) cycle', organ:'Stroma (mesophyll in C<sub>3</sub>)', purpose:'Sugar synthesis', structuralChange:'RuBP + CO<sub>2</sub> &rarr; 2 PGA', keyFeature:'RuBisCO; 3 ATP + 2 NADPH per CO<sub>2</sub>', example:'Wheat, rice, sunflower'},
  {name:'C<sub>4</sub> pathway', organ:'Mesophyll + bundle sheath', purpose:'Concentrate CO<sub>2</sub>', structuralChange:'PEP + CO<sub>2</sub> &rarr; OAA', keyFeature:'PEPcase; Kranz anatomy', example:'Maize, sugarcane'},
  {name:'Photorespiration', organ:'Chloroplast, peroxisome, mitochondrion', purpose:'None (wasteful)', structuralChange:'RuBP + O<sub>2</sub> &rarr; PGA + phosphoglycolate', keyFeature:'ATP used, CO<sub>2</sub> released', example:'C<sub>3</sub> plants in heat'},
  {name:'Mesophyll cell (C<sub>4</sub>)', organ:'C<sub>4</sub> leaf', purpose:'Initial CO<sub>2</sub> fixation', structuralChange:'Forms OAA, malic acid', keyFeature:'Has PEPcase, no RuBisCO', example:'Maize leaf'},
  {name:'Bundle sheath cell (C<sub>4</sub>)', organ:'C<sub>4</sub> leaf', purpose:'Calvin cycle', structuralChange:'C<sub>4</sub> acid releases CO<sub>2</sub>', keyFeature:'Has RuBisCO, no PEPcase', example:'Kranz wreath'}
];

const tips = {
  title:'Study Tips &ndash; Photosynthesis in Higher Plants',
  intro:'How to study this chapter well, and what to focus on for NEET and KCET.',
  theoryHead:'📘 Theory &mdash; How to Study This Chapter',
  neetHead:'🎯 NEET Strategy for This Chapter',
  theory:[
    'Split the chapter into two halves and never mix them: <b>light reaction</b> (thylakoid: light, water, O<sub>2</sub>, ATP, NADPH) and <b>biosynthetic phase</b> (stroma: CO<sub>2</sub>, ATP, NADPH, sugar). Write one line for &ldquo;where&rdquo;, &ldquo;needs&rdquo; and &ldquo;makes&rdquo; for each half.',
    'Draw the <b>Z scheme</b> until you can do it in two minutes: water &rarr; P680 &rarr; acceptor &rarr; cytochromes &rarr; P700 &rarr; acceptor &rarr; NADP reductase &rarr; NADPH. Put PS II on the left. It is the most repeated 5-mark diagram.',
    'Learn the Calvin cycle as three words &mdash; <b>carboxylation, reduction, regeneration</b> &mdash; and one sum: per CO<sub>2</sub> <b>3 ATP + 2 NADPH</b>, so per glucose <b>18 ATP + 12 NADPH</b>.',
    'For C<sub>4</sub>, draw two boxes (mesophyll and bundle sheath) and move the carbon between them: PEP + CO<sub>2</sub> &rarr; OAA &rarr; malic acid &rarr; CO<sub>2</sub> into Calvin &rarr; C<sub>3</sub> acid back to PEP. Then write which enzyme lives in which box.',
    'Make one big <b>C<sub>3</sub> vs C<sub>4</sub></b> table (acceptor, first product, enzyme, cell types, Kranz, photorespiration, temperature, examples). Board &ldquo;differentiate&rdquo; questions and NEET match questions both come from it.'
  ],
  neet:[
    'Number questions are favourites: <b>P680 / P700</b>, <b>3 ATP + 2 NADPH</b> per CO<sub>2</sub>, <b>18 + 12</b> per glucose, <b>6 turns</b>, <b>3 H<sup>+</sup> per ATP</b>, <b>10%</b> light saturation, <b>0.03&ndash;0.04%</b> CO<sub>2</sub>, <b>360 vs 450 &mu;l/L</b>.',
    'Watch the traps: PS I and PS II are named by <b>discovery</b>, not function; protons collect in the <b>lumen</b>, not stroma; C<sub>4</sub> mesophyll has <b>no RuBisCO</b>; the CO<sub>2</sub> acceptor is RuBP (5C), not a 2C compound; cyclic flow makes <b>no NADPH and no O<sub>2</sub></b>.',
    'History questions are matched in pairs: Priestley (fouled air), Ingenhousz (light, green parts), Sachs (starch), Engelmann (<i>Cladophora</i>, action spectrum), van Niel (O<sub>2</sub> from water), Calvin (<sup>14</sup>C), Mitchell (chemiosmosis), Blackman (limiting factors).',
    'Assertion&ndash;reason questions often test <b>why</b>: why C<sub>4</sub> plants lack photorespiration, why cyclic flow is needed, why the lumen becomes acidic, why light is rarely limiting. Practise answering each &ldquo;why&rdquo; in one sentence.'
  ]
};

/* Important diagrams with our own drawn images (pu1-ch11-assets/diag-*.jpg) */
const diagrams = [
  {key:'tier1', fig:'Z Scheme of Light Reaction (Non-cyclic Photophosphorylation)', marks:'5 M', pr:'high', prLabel:'★★★ Must Learn', labels:'Water, P680 (PS II), Primary acceptor, Electron transport system (cytochromes), P700 (PS I), Second acceptor, NADP reductase, NADP<sup>+</sup> &rarr; NADPH + H<sup>+</sup>, O<sub>2</sub>, Redox potential axis', src:'diag-z-scheme.jpg'},
  {key:'tier1', fig:'Calvin Cycle (Carboxylation, Reduction, Regeneration)', marks:'5 M', pr:'high', prLabel:'★★★ Must Learn', labels:'RuBP, CO<sub>2</sub> + H<sub>2</sub>O, RuBisCO, 3-PGA, ATP &rarr; ADP, NADPH &rarr; NADP<sup>+</sup>, Triose phosphate, Sugar, Regeneration', src:'diag-calvin.jpg'},
  {key:'tier1', fig:'C<sub>4</sub> Pathway (Hatch and Slack)', marks:'5 M', pr:'high', prLabel:'★★★ Must Learn', labels:'Mesophyll cell, Bundle sheath cell, PEP, PEPcase, OAA, C<sub>4</sub> acid (malic/aspartic), CO<sub>2</sub>, Calvin cycle, C<sub>3</sub> acid, Sugar', src:'diag-c4.jpg'},
  {key:'tier2', fig:'ATP Synthesis Through Chemiosmosis', marks:'3/5 M', pr:'med', prLabel:'★★☆ High Probability', labels:'Thylakoid membrane, Lumen (high H<sup>+</sup>), Stroma (low H<sup>+</sup>), PS II, Water splitting, PS I, NADP reductase, CF<sub>0</sub>, CF<sub>1</sub>, ATP', src:'diag-chemiosmosis.jpg'},
  {key:'tier2', fig:'Chloroplast (Section, Electron Micrograph)', marks:'3 M', pr:'med', prLabel:'★★☆ High Probability', labels:'Outer membrane, Inner membrane, Grana, Stroma lamellae, Stroma, Ribosomes, Starch granule, Lipid droplet', src:'diag-chloroplast.jpg'},
  {key:'tier2', fig:'Kranz Anatomy (T.S. of a C<sub>4</sub> Leaf)', marks:'3 M', pr:'med', prLabel:'★★☆ High Probability', labels:'Upper and lower epidermis, Mesophyll cells, Bundle sheath cells, Xylem, Phloem, Stoma', src:'diag-kranz.jpg'},
  {key:'tier2', fig:'Cyclic Photophosphorylation', marks:'3 M', pr:'med', prLabel:'★★☆ High Probability', labels:'P700 (PS I), Electron acceptor, Electron transport system, ATP formed, Return path of electron', src:'diag-cyclic.jpg'},
  {key:'tier3', fig:'Light Harvesting Complex (Photosystem)', marks:'2 M', pr:'mod', prLabel:'★☆☆ Key Structure', labels:'Antenna pigments, Reaction centre (chlorophyll a), Primary electron acceptor, Photon, Energy transfer', src:'diag-lhc.jpg'},
  {key:'tier3', fig:'Absorption Spectrum and Action Spectrum', marks:'2 M', pr:'mod', prLabel:'★☆☆ Key Graph', labels:'Wavelength (nm), Light absorbed, Rate of photosynthesis, Chlorophyll a, Chlorophyll b, Blue and red peaks', src:'diag-spectrum.jpg'},
  {key:'tier3', fig:'Effect of Light Intensity on Photosynthesis', marks:'2 M', pr:'mod', prLabel:'★☆☆ Key Graph', labels:'Light intensity, Rate of photosynthesis, A, B (light limiting), C (plateau), D (another factor limiting)', src:'diag-light-graph.jpg'}
];
const diagramSections = [{key:'tier1',title:'Tier 1 — Highest Priority (5M)'},{key:'tier2',title:'Tier 2 — High Probability'},{key:'tier3',title:'Tier 3 — Key Structures & Graphs'}];

module.exports = {kcet, desc, board, glossary, tree, compare, tips, diagrams, diagramSections};
