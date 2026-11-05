/* Short Notes & Tricks — I PUC Biology, Chapter 11: Photosynthesis in Higher Plants (NCERT). */
window.TRICKS = window.TRICKS || {};
window.TRICKS['pu1-ch11'] = {
  title: 'Photosynthesis in Higher Plants', cls: 'I PUC', ch: 11, page: 'pu1-ch11.html',
  topics: [
    {
      t: 'Early experiments and the equation',
      notes: [
        '<b>Priestley</b> (1770): a mint plant restores air fouled by a burning candle or a breathing mouse.',
        '<b>Ingenhousz</b>: sunlight is needed; only the <b>green parts</b> release O₂.',
        '<b>Sachs</b> (1854): glucose is made in green parts and stored as <b>starch</b>; chlorophyll is in chloroplasts.',
        '<b>Engelmann</b>: <i>Cladophora</i> + aerobic bacteria + prism → the <b>first action spectrum</b> (blue and red).',
        '<b>van Niel</b>: O₂ comes from <b>water</b>, not CO₂. Equation: <b>6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂</b>.'
      ],
      tricks: [
        ['Scientists in order', '"<b>P</b>lease <b>I</b>nvite <b>S</b>mart <b>E</b>ngineers <b>V</b>ery early" = Priestley, Ingenhousz, Sachs, Engelmann, van Niel.'],
        ['Equation', '"<b>12 waters in, 6 waters out, 6 O₂ out</b>": every O₂ comes from water.']
      ],
      traps: ['Priestley showed plants purify air; it was Ingenhousz who proved sunlight is needed.'],
      kn: 'ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಯ O₂ ನೀರಿನಿಂದ ಬರುತ್ತದೆ (ವಾನ್ ನೀಲ್); 6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂.',
      hi: 'प्रकाश संश्लेषण की O₂ पानी से आती है (वॉन नील); 6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂।'
    },
    {
      t: 'Chloroplast and pigments',
      notes: [
        'Site: <b>mesophyll cells</b> of leaves, which have many chloroplasts.',
        '<b>Grana / thylakoids</b>: trap light and make <b>ATP and NADPH</b> (light reaction).',
        '<b>Stroma</b>: enzymes fix CO₂ into sugar (the "dark" reaction, which is not directly light driven).',
        'Four pigments: <b>chlorophyll a</b> (blue-green, chief), chlorophyll b (yellow-green), xanthophylls (yellow), carotenoids (yellow-orange).',
        'Chlorophyll a absorbs most in the <b>blue and red</b> regions; accessory pigments widen the range and protect chl a from photo-oxidation.'
      ],
      tricks: [
        ['Chromatogram order (top → bottom)', '"<b>C</b>an <b>X</b>-ray <b>A</b>nd <b>B</b>one" = Carotene, Xanthophyll, chl a, chl b.'],
        ['Division of labour', '"<b>Grana = Generator</b> (ATP, NADPH); <b>Stroma = Sugar factory</b>".']
      ],
      traps: ['"Dark reaction" does not mean it happens only at night.', 'Leaves look green because green light is reflected, not used most.'],
      kn: 'ಗ್ರಾನಾ → ATP, NADPH; ಸ್ಟ್ರೋಮಾ → ಸಕ್ಕರೆ. ಪತ್ರಹರಿತ್ತು a ಮುಖ್ಯ ವರ್ಣದ್ರವ್ಯ.',
      hi: 'ग्रैना → ATP, NADPH; स्ट्रोमा → शर्करा। पर्णहरित a मुख्य वर्णक है।'
    },
    {
      t: 'Light reaction: photosystems and photolysis',
      notes: [
        'Light harvesting complex (LHC) = hundreds of <b>antenna</b> pigments + one chlorophyll a <b>reaction centre</b>.',
        '<b>PS I → P700</b>, <b>PS II → P680</b>; named in the order of discovery, not of working.',
        'Photolysis: <b>2H₂O → 4H⁺ + O₂ + 4e⁻</b>, linked to <b>PS II</b>, needs <b>Mn and Cl</b>.',
        '<b>Hill reaction</b> (1939): isolated chloroplasts + electron acceptor release O₂ without CO₂.'
      ],
      tricks: [
        ['Numbers', '"<b>Two</b> goes with the <b>smaller</b> number": PS <b>II</b> = P<b>680</b>; PS I = P700.'],
        ['Water splitting', '"<b>Mn</b> and <b>Cl</b> help <b>PS II</b> split water" — "Many Clever Plants Split water".']
      ],
      traps: ['PS I does not work first; PS II starts the Z scheme.', 'Only one chlorophyll a in each photosystem is the reaction centre.'],
      kn: 'PS I = P700, PS II = P680. ನೀರಿನ ವಿಭಜನೆ PS II ಜೊತೆ, Mn ಮತ್ತು Cl ಬೇಕು.',
      hi: 'PS I = P700, PS II = P680। जल विघटन PS II के साथ, Mn और Cl चाहिए।'
    },
    {
      t: 'Z scheme and cyclic photophosphorylation',
      notes: [
        'Non-cyclic (Z scheme): H₂O → <b>P680</b> → acceptor → <b>ETS (cytochromes)</b> → <b>P700</b> → acceptor → <b>NADP reductase</b> → NADPH.',
        'Gives <b>ATP + NADPH + O₂</b>; both photosystems work.',
        'Cyclic: <b>PS I only</b>; electron returns to PS I; <b>ATP only</b> (no NADPH, no O₂).',
        'Cyclic happens in the <b>stroma lamellae</b> (no PS II, no NADP reductase) and when only light above <b>680 nm</b> is available.'
      ],
      tricks: [
        ['Cyclic', '"<b>Cyclic = Cheap</b>: only ATP, nothing else".'],
        ['Z path', '"<b>W</b>ater → <b>680</b> → down the stairs → <b>700</b> → <b>NADPH</b>" — up, down, up, down = Z.']
      ],
      traps: ['Cyclic photophosphorylation never releases O₂.'],
      kn: 'ಚಕ್ರೀಯ: PS I ಮಾತ್ರ, ATP ಮಾತ್ರ. ಚಕ್ರೀಯವಲ್ಲದ: ATP + NADPH + O₂.',
      hi: 'चक्रीय: केवल PS I, केवल ATP। अचक्रीय: ATP + NADPH + O₂।'
    },
    {
      t: 'Chemiosmotic hypothesis',
      notes: [
        'Proposed by <b>Peter Mitchell (1961)</b>: ATP synthesis is linked to a <b>proton gradient</b>.',
        'Protons pile up in the <b>lumen</b>: water splitting inside, the H carrier, and NADP reductase removing H⁺ from the stroma.',
        'Protons return through <b>CF₀</b> (channel in the membrane); <b>CF₁</b> (on the stroma side) changes shape and makes ATP.',
        'About <b>3 H⁺</b> moving out make <b>1 ATP</b>.'
      ],
      tricks: [
        ['CF₀ vs CF₁', '"CF<b>0</b> = <b>O</b>pening (channel); CF<b>1</b> = <b>1</b>st to make ATP (head)".'],
        ['Dam', '"Protons behind the dam (lumen) turn the turbine (ATP synthase)".']
      ],
      traps: ['In chloroplasts protons collect in the lumen, not the stroma.'],
      kn: 'ಪ್ರೋಟಾನ್‌ಗಳು ಲ್ಯೂಮೆನ್‌ನಲ್ಲಿ ಸಂಗ್ರಹ; CF₀ ನಾಳ, CF₁ ATP ತಯಾರಿಸುತ್ತದೆ; 3 H⁺ = 1 ATP.',
      hi: 'प्रोटॉन ल्यूमेन में जमा; CF₀ नलिका, CF₁ ATP बनाता है; 3 H⁺ = 1 ATP।'
    },
    {
      t: 'Calvin cycle (C₃ pathway)',
      notes: [
        '<b>Melvin Calvin</b> used <b>¹⁴C</b> in algae; first stable product <b>3-PGA</b> (3C) → C₃ plants.',
        'CO₂ acceptor: <b>RuBP</b>, a 5-carbon ketose sugar; enzyme <b>RuBisCO</b>.',
        'Stages: <b>carboxylation → reduction → regeneration</b>.',
        'Per CO₂: <b>3 ATP + 2 NADPH</b>; per glucose: <b>18 ATP + 12 NADPH</b> and 6 turns.'
      ],
      tricks: [
        ['Stages', '"<b>C R R</b> — <b>C</b>atch, <b>R</b>educe, <b>R</b>ebuild".'],
        ['Count', '"<b>3-2 per CO₂, 18-12 per glucose</b>".']
      ],
      traps: ['The acceptor is the 5C RuBP, not a 2C compound.', 'The Calvin cycle runs in all photosynthetic plants, including C₄ plants.'],
      kn: 'ಕೆಲ್ವಿನ್ ಚಕ್ರ: RuBP + CO₂ → 3-PGA; ಪ್ರತಿ CO₂ ಗೆ 3 ATP + 2 NADPH.',
      hi: 'केल्विन चक्र: RuBP + CO₂ → 3-PGA; हर CO₂ पर 3 ATP + 2 NADPH।'
    },
    {
      t: 'C₄ pathway and photorespiration',
      notes: [
        'C₄ (Hatch and Slack) plants: <b>maize, sugarcane, sorghum</b>; adapted to dry tropical regions.',
        '<b>Kranz anatomy</b>: large bundle sheath cells, many chloroplasts, thick gas-tight walls, no intercellular spaces.',
        'Mesophyll: <b>PEP + CO₂ → OAA</b> by <b>PEPcase</b> (no RuBisCO here); bundle sheath: CO₂ released → Calvin cycle.',
        '<b>Photorespiration</b> (C₂): RuBisCO binds O₂ → 1 PGA + 1 phosphoglycolate; no sugar, no ATP; absent in C₄ plants.'
      ],
      tricks: [
        ['Kranz', '"<b>Kranz = wreath</b> around the vein".'],
        ['C₄ acceptor vs product', '"<b>P</b>EP <b>P</b>icks up CO₂, <b>O</b>AA is the <b>O</b>utput".']
      ],
      traps: ['PEP is the acceptor; OAA is the first product.', 'C₄ mesophyll cells lack RuBisCO; bundle sheath cells lack PEPcase.'],
      kn: 'C₄: PEP + CO₂ → OAA (ಪತ್ರಮಧ್ಯಕ), ಕೆಲ್ವಿನ್ ಚಕ್ರ ನಾಳಕಟ್ಟು ಕವಚದಲ್ಲಿ; ದ್ಯುತಿಶ್ವಸನ ಇಲ್ಲ.',
      hi: 'C₄: PEP + CO₂ → OAA (पर्णमध्योतक), केल्विन चक्र बंडल आच्छद में; प्रकाश श्वसन नहीं।'
    },
    {
      t: 'Factors affecting photosynthesis',
      notes: [
        '<b>Blackman (1905)</b>: the rate is set by the factor <b>nearest its minimum</b> (law of limiting factors).',
        '<b>Light</b>: saturation at about <b>10%</b> of full sunlight; too much light breaks down chlorophyll (solarisation).',
        '<b>CO₂</b> (0.03–0.04%) is the <b>major limiting factor</b>; C₄ saturate near 360 µl/L, C₃ only above 450 µl/L.',
        '<b>Temperature</b> controls the enzymatic dark reactions (C₄ optimum 30–45 °C); <b>water</b> stress closes stomata.'
      ],
      tricks: [
        ['Blackman', '"<b>The shortest plank decides the water level</b> in the barrel".'],
        ['Greenhouse', '"<b>Tomato and capsicum love extra CO₂</b>" because they are C₃ plants.']
      ],
      traps: ['More light does not always mean more photosynthesis.', 'Water acts mainly indirectly, through the stomata.'],
      kn: 'ಬ್ಲ್ಯಾಕ್‌ಮನ್: ಕನಿಷ್ಠಕ್ಕೆ ಹತ್ತಿರದ ಅಂಶ ದರ ನಿರ್ಧರಿಸುತ್ತದೆ; CO₂ ಮುಖ್ಯ ಮಿತಿಗೊಳಿಸುವ ಅಂಶ.',
      hi: 'ब्लैकमैन: न्यूनतम के निकट वाला कारक दर तय करता है; CO₂ मुख्य सीमाकारी कारक।'
    }
  ],
  numbers: [
    ['Reaction centres of PS II / PS I', 'P680 / P700'],
    ['Photolysis of water', '2H₂O → 4H⁺ + O₂ + 4e⁻'],
    ['Chemiosmosis yield', '3 H⁺ = 1 ATP'],
    ['Per CO₂ fixed in the Calvin cycle', '3 ATP + 2 NADPH'],
    ['Per glucose (6 turns)', '18 ATP + 12 NADPH'],
    ['Light saturation (of full sunlight)', '~10%'],
    ['CO₂ in air', '0.03–0.04%'],
    ['CO₂ saturation of C₄ / C₃ plants', '360 / 450 µl L⁻¹'],
    ['Optimum temperature of C₄ / C₃ plants', '30–45 °C / 10–25 °C']
  ],
  last: [
    'All the O₂ released comes from water.',
    'Grana make ATP + NADPH; stroma makes sugar.',
    'PS II = P680, PS I = P700; named in order of discovery.',
    'Cyclic flow: PS I only, ATP only, stroma lamellae.',
    'Protons pile up in the lumen; CF₀ channel, CF₁ makes ATP.',
    'Calvin: RuBP + CO₂ → 2 × 3-PGA by RuBisCO.',
    'C₄: PEP + CO₂ → OAA by PEPcase; Kranz anatomy.',
    'Photorespiration: RuBisCO + O₂ → phosphoglycolate; absent in C₄.',
    'Blackman: the factor nearest its minimum sets the rate.'
  ]
};
