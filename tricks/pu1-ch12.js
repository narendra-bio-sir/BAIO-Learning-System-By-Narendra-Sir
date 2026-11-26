/* Short Notes & Tricks — I PUC Biology, Chapter 12: Respiration in Plants (NCERT). */
window.TRICKS = window.TRICKS || {};
window.TRICKS['pu1-ch12'] = {
  title: 'Respiration in Plants', cls: 'I PUC', ch: 12, page: 'pu1-ch12.html',
  topics: [
    {
      t: 'Respiration and do plants breathe?',
      notes: [
        '<b>Cellular respiration</b>: breakdown of C–C bonds of food inside the cell to release energy, trapped as <b>ATP</b> (the energy currency).',
        'The compound oxidised is the <b>respiratory substrate</b>, usually a carbohydrate (glucose); fats and proteins can also be used.',
        'Plants have <b>no special respiratory organs</b>: gases are exchanged through <b>stomata</b> and <b>lenticels</b>.',
        'Why no lungs: each part handles its own needs, demand is low, the distance is short (living cells lie near the surface), and O₂ from photosynthesis is used inside the cells.',
        'Respiration is a <b>slow, stepwise oxidation</b> controlled by enzymes, unlike combustion, which releases all the energy at once as heat.'
      ],
      tricks: [
        ['Why plants need no lungs', '"<b>S</b>elf-reliant parts, <b>L</b>ow demand, <b>S</b>hort distance, <b>O₂</b> made inside" = SLSO.'],
        ['Energy currency', '"<b>ATP is the cash</b>, glucose is the fixed deposit": you cannot spend glucose directly.']
      ],
      traps: ['Plants respire all the time, day and night; photosynthesis happens only in light.', 'In a woody stem the inner cells are dead, so they need no oxygen.'],
      kn: 'ಉಸಿರಾಟ = ಕೋಶದೊಳಗೆ ಆಹಾರದ ಹಂತ ಹಂತದ ಆಕ್ಸಿಡೀಕರಣ; ಶಕ್ತಿ ATP ಆಗಿ ಸಂಗ್ರಹ. ಸಸ್ಯಗಳು ಪತ್ರರಂಧ್ರ ಮತ್ತು ವಾತರಂಧ್ರಗಳ ಮೂಲಕ ಅನಿಲ ವಿನಿಮಯ ಮಾಡುತ್ತವೆ.',
      hi: 'श्वसन = कोशिका के भीतर भोजन का चरणबद्ध ऑक्सीकरण; ऊर्जा ATP में संचित। पौधे रंध्र और वातरंध्र से गैस विनिमय करते हैं।'
    },
    {
      t: 'Glycolysis (EMP pathway)',
      notes: [
        'Named after <b>Embden, Meyerhof and Parnas</b>; occurs in the <b>cytoplasm</b> of all living organisms; the only step of respiration in anaerobes.',
        'In plants, glucose comes from sucrose (<b>invertase</b> → glucose + fructose) or from starch.',
        '<b>ATP used (2)</b>: glucose → glucose-6-phosphate (<b>hexokinase</b>) and fructose-6-phosphate → fructose-1,6-bisphosphate.',
        '<b>NADH formed (2)</b>: PGAL (3-phosphoglyceraldehyde) → BPGA (1,3-bisphosphoglyceric acid).',
        '<b>ATP made (4)</b>: BPGA → 3-PGA and PEP → pyruvic acid. Net per glucose: <b>2 ATP + 2 NADH + 2 pyruvic acid</b>.'
      ],
      tricks: [
        ['ATP account', '"<b>Spend 2, earn 4, keep 2</b>".'],
        ['Where ATP is made', '"<b>B</b>PGA and <b>P</b>EP <b>p</b>ay" — the two substrate-level phosphorylation steps.']
      ],
      traps: ['Glycolysis needs no oxygen, but it does need NAD⁺.', 'PGAL → BPGA is the oxidation step (NADH), not an ATP step.'],
      kn: 'ಗ್ಲೈಕಾಲಿಸಿಸ್: ಕೋಶದ್ರವ್ಯದಲ್ಲಿ 10 ಹಂತಗಳು; 2 ATP ಬಳಕೆ, 4 ATP ಉತ್ಪತ್ತಿ; ನಿವ್ವಳ 2 ATP + 2 NADH + 2 ಪೈರುವಿಕ್ ಆಮ್ಲ.',
      hi: 'ग्लाइकोलाइसिस: कोशिकाद्रव्य में 10 चरण; 2 ATP उपयोग, 4 ATP निर्माण; शुद्ध 2 ATP + 2 NADH + 2 पाइरुविक अम्ल।'
    },
    {
      t: 'Fermentation (anaerobic respiration)',
      notes: [
        '<b>Alcoholic</b> (yeast): pyruvic acid → acetaldehyde + CO₂ (<b>pyruvic acid decarboxylase</b>) → ethanol (<b>alcohol dehydrogenase</b>).',
        '<b>Lactic acid</b> (muscle in O₂ shortage, some bacteria): pyruvic acid → lactic acid (<b>lactate dehydrogenase</b>), no CO₂.',
        'In both, <b>NADH is reoxidised to NAD⁺</b>, so glycolysis can continue.',
        'Net gain only <b>2 ATP</b>; less than <b>7%</b> of the energy in glucose is released.',
        'The products are hazardous: yeast is poisoned when alcohol reaches about <b>13%</b>.'
      ],
      tricks: [
        ['Which gives CO₂?', '"<b>Yeast bubbles, muscle burns</b>": alcoholic gives CO₂, lactic does not.'],
        ['Energy', '"<b>Under seven</b>" — fermentation releases &lt; 7% of glucose energy.']
      ],
      traps: ['Lactic acid fermentation does not release CO₂.', 'Fermentation is incomplete oxidation; it does not produce ATP beyond glycolysis.'],
      kn: 'ಆಲ್ಕೋಹಾಲ್ ಹುದುಗುವಿಕೆ (ಯೀಸ್ಟ್): ಎಥೆನಾಲ್ + CO₂; ಲ್ಯಾಕ್ಟಿಕ್ ಆಮ್ಲ (ಸ್ನಾಯು): CO₂ ಇಲ್ಲ. 7% ಕ್ಕಿಂತ ಕಡಿಮೆ ಶಕ್ತಿ; 13% ಆಲ್ಕೋಹಾಲ್‌ನಲ್ಲಿ ಯೀಸ್ಟ್ ಸಾವು.',
      hi: 'ऐल्कोहॉली किण्वन (यीस्ट): एथेनॉल + CO₂; लैक्टिक अम्ल (पेशी): CO₂ नहीं। 7% से कम ऊर्जा; 13% ऐल्कोहॉल पर यीस्ट की मृत्यु।'
    },
    {
      t: 'Link reaction and Krebs’ (TCA) cycle',
      notes: [
        'Aerobic respiration happens in the <b>mitochondria</b>; pyruvic acid enters the <b>matrix</b>.',
        '<b>Link reaction</b>: pyruvic acid + CoA + NAD⁺ → <b>acetyl CoA</b> + CO₂ + NADH (<b>pyruvate dehydrogenase</b>, needs Mg²⁺).',
        'Acetyl CoA + OAA (4C) + H₂O → <b>citric acid</b> (6C) by <b>citrate synthase</b>; the cycle was described by Hans Krebs.',
        'Per turn: <b>2 CO₂, 3 NADH, 1 FADH₂, 1 GTP</b>; GTP forms at <b>succinyl CoA → succinic acid</b> and gives ATP.',
        'OAA is regenerated; one glucose = 2 pyruvic acid = <b>2 turns</b> of the cycle.'
      ],
      tricks: [
        ['Krebs intermediates', '"<b>C</b>itric <b>I</b>s <b>K</b>ing, <b>S</b>o <b>S</b>ucceed <b>F</b>or <b>M</b>e, <b>O</b>K?" = citric, isocitric, α-ketoglutaric, succinyl CoA, succinic, fumaric, malic, OAA.'],
        ['Per turn', '"<b>3-1-1-2</b>": 3 NADH, 1 FADH₂, 1 GTP, 2 CO₂.']
      ],
      traps: ['The link reaction is not part of the Krebs cycle, but it also happens in the matrix.', 'FADH₂ forms at succinic acid → fumaric acid (succinate dehydrogenase, on the inner membrane).'],
      kn: 'ಸಂಪರ್ಕ ಕ್ರಿಯೆ: ಪೈರುವಿಕ್ ಆಮ್ಲ → ಅಸಿಟೈಲ್ CoA + CO₂ + NADH. ಕ್ರೆಬ್ಸ್ ಚಕ್ರ ಪ್ರತಿ ಸುತ್ತು: 2 CO₂, 3 NADH, 1 FADH₂, 1 GTP.',
      hi: 'संयोजक अभिक्रिया: पाइरुविक अम्ल → ऐसीटिल CoA + CO₂ + NADH। क्रेब्स चक्र प्रति चक्कर: 2 CO₂, 3 NADH, 1 FADH₂, 1 GTP।'
    },
    {
      t: 'Electron transport system and oxidative phosphorylation',
      notes: [
        'ETS lies in the <b>inner mitochondrial membrane</b>.',
        'NADH → <b>complex I</b> (NADH dehydrogenase); FADH₂ → <b>complex II</b> (succinate dehydrogenase).',
        '<b>Ubiquinone</b> carries electrons to <b>complex III</b> (cytochrome bc₁); <b>cytochrome c</b> carries them to <b>complex IV</b> (cytochrome c oxidase: cyt a, a₃ and two copper centres).',
        '<b>O₂ is the final electron acceptor</b>, forming water; without O₂ the whole chain stops.',
        '<b>Complex V</b> = ATP synthase: <b>F₀</b> is the proton channel, <b>F₁</b> head makes ATP. NADH → 3 ATP, FADH₂ → 2 ATP; about <b>4 H⁺ per ATP</b>.'
      ],
      tricks: [
        ['Order of the chain', '"<b>I Use 3 Cars For Oxygen</b>" = I → UQ → III → cyt c → IV → O₂.'],
        ['F₀ vs F₁', '"F-<b>zero</b> is the <b>tunnel</b>, F-<b>one</b> makes <b>the</b> ATP".']
      ],
      traps: ['It is oxidative phosphorylation (energy from oxidation), not photophosphorylation.', 'Oxygen is needed only at the very end, but without it nothing upstream can move.'],
      kn: 'ETS: I → UQ → III → cyt c → IV → O₂; ಸಂಕೀರ್ಣ V (F₀ + F₁) ATP ತಯಾರಿಸುತ್ತದೆ. NADH = 3 ATP, FADH₂ = 2 ATP.',
      hi: 'ETS: I → UQ → III → cyt c → IV → O₂; सम्मिश्र V (F₀ + F₁) ATP बनाता है। NADH = 3 ATP, FADH₂ = 2 ATP।'
    },
    {
      t: 'The respiratory balance sheet',
      notes: [
        'Assumptions: a <b>sequential, orderly pathway</b>; NADH made in glycolysis enters the mitochondria; no intermediate is withdrawn; only glucose is respired.',
        'Glycolysis: 2 ATP + 2 NADH = <b>8 ATP</b>.',
        'Link reaction: 2 NADH = <b>6 ATP</b>.',
        'Krebs cycle (2 turns): 2 GTP + 6 NADH + 2 FADH₂ = 2 + 18 + 4 = <b>24 ATP</b>.',
        'Net gain = <b>38 ATP</b> per glucose in aerobic respiration (theory); real values are lower.'
      ],
      tricks: [
        ['The sum', '"<b>8 + 6 + 24 = 38</b>" — draw the bars, do not memorise.'],
        ['Fermentation vs aerobic', '"<b>2 vs 38</b>": partial vs complete breakdown of glucose.']
      ],
      traps: ['38 is a theoretical number; pathways in a living cell work together.', 'Fermentation yields 2 ATP, aerobic respiration 38 ATP per glucose.'],
      kn: 'ಲೆಕ್ಕಪತ್ರ: ಗ್ಲೈಕಾಲಿಸಿಸ್ 8 + ಸಂಪರ್ಕ 6 + ಕ್ರೆಬ್ಸ್ 24 = 38 ATP (ಸೈದ್ಧಾಂತಿಕ).',
      hi: 'संतुलन चार्ट: ग्लाइकोलाइसिस 8 + संयोजक 6 + क्रेब्स 24 = 38 ATP (सैद्धांतिक)।'
    },
    {
      t: 'Amphibolic pathway',
      notes: [
        '<b>Fats</b> → glycerol (enters as <b>PGAL</b>) + fatty acids (enter as <b>acetyl CoA</b>).',
        '<b>Proteins</b> → amino acids; after <b>deamination</b> they enter as pyruvic acid, acetyl CoA or Krebs cycle acids.',
        '<b>Carbohydrates</b> → glucose → glycolysis.',
        'The same intermediates are withdrawn to <b>synthesise</b> fatty acids and amino acids.',
        'So respiration is both catabolic and anabolic: an <b>amphibolic pathway</b>, not just catabolic.'
      ],
      tricks: [
        ['Meaning', '"<b>Amphi</b> = both (like amphibians)": breaks down and builds up.'],
        ['Entry points', '"<b>Glycerol → PGAL, fatty acid → acetyl CoA</b>".']
      ],
      traps: ['Fatty acids enter as acetyl CoA, not as pyruvic acid.', 'Amino acids must be deaminated before they enter.'],
      kn: 'ಉಭಯಚಯಾಪಚಯಿ ಪಥ: ಕೊಬ್ಬು, ಪ್ರೋಟೀನ್, ಕಾರ್ಬೋಹೈಡ್ರೇಟ್ ವಿಘಟನೆ ಮತ್ತು ಸಂಶ್ಲೇಷಣೆ ಎರಡಕ್ಕೂ ಒಂದೇ ಮಧ್ಯವರ್ತಿಗಳು.',
      hi: 'उभयधर्मी पथ: वसा, प्रोटीन, कार्बोहाइड्रेट के अपघटन और संश्लेषण दोनों के लिए वही मध्यवर्ती।'
    },
    {
      t: 'Respiratory quotient (RQ)',
      notes: [
        '<b>RQ = volume of CO₂ evolved ÷ volume of O₂ consumed</b>.',
        'Carbohydrate: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy; RQ = 6/6 = <b>1</b>.',
        'Fat (tripalmitin): 2C₅₁H₉₈O₆ + 145O₂ → 102CO₂ + 98H₂O + energy; RQ = 102/145 = <b>0.7</b>.',
        'Proteins: RQ about <b>0.9</b>.',
        'RQ depends on the type of substrate respired; in living organisms substrates are often mixed.'
      ],
      tricks: [
        ['Order of RQ', '"<b>C</b>arbs 1 &gt; <b>P</b>roteins 0.9 &gt; <b>F</b>ats 0.7".'],
        ['Fat numbers', '"<b>102 out, 145 in</b>" — fats need more O₂ because they are poor in oxygen.']
      ],
      traps: ['Fats have RQ less than 1 because they need extra O₂.', 'Write RQ as CO₂ over O₂, never the other way round.'],
      kn: 'RQ = CO₂ ÷ O₂; ಕಾರ್ಬೋಹೈಡ್ರೇಟ್ 1, ಕೊಬ್ಬು 0.7 (102/145), ಪ್ರೋಟೀನ್ ~0.9.',
      hi: 'RQ = CO₂ ÷ O₂; कार्बोहाइड्रेट 1, वसा 0.7 (102/145), प्रोटीन ~0.9।'
    }
  ],
  numbers: [
    ['Steps of glycolysis', '10'],
    ['Glycolysis: ATP used / made / net', '2 / 4 / 2 (+ 2 NADH)'],
    ['Krebs cycle per turn', '2 CO₂ · 3 NADH · 1 FADH₂ · 1 GTP'],
    ['Turns per glucose', '2'],
    ['ATP from NADH / FADH₂', '3 / 2'],
    ['Protons per ATP (chemiosmosis)', '~4 H⁺'],
    ['Net ATP per glucose (aerobic)', '38'],
    ['Energy released by fermentation', '< 7%'],
    ['Alcohol that kills yeast', '~13%'],
    ['RQ: carbohydrate / protein / fat', '1 / ~0.9 / 0.7']
  ],
  last: [
    'Glycolysis: cytoplasm, net 2 ATP + 2 NADH + 2 pyruvic acid.',
    'Alcoholic fermentation gives ethanol + CO₂; lactic gives no CO₂.',
    'Fermentation regenerates NAD⁺ so glycolysis can go on.',
    'Link reaction: pyruvic acid → acetyl CoA + CO₂ + NADH (matrix).',
    'Krebs per turn: 2 CO₂, 3 NADH, 1 FADH₂, 1 GTP.',
    'ETS: I → UQ → III → cyt c → IV → O₂ (final acceptor).',
    'Complex V: F₀ channel, F₁ makes ATP.',
    'Balance sheet: 8 + 6 + 24 = 38 ATP.',
    'Respiration is amphibolic: breakdown and synthesis.',
    'RQ: carbohydrate 1, fat 0.7, protein ~0.9.'
  ]
};
