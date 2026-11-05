/* PU-I Ch11 reels: comedy group chat, "in 60 seconds" board reel, and the shayari (Hindi, Roman Hindi, Kannada).
   *word* = gold highlight, _word_ = teal highlight. Times are in seconds. */
window.REEL_DATA = {
  comedy: { kind: 'chat', out: 'comedy-photo-chat',
    intro: { emoji: '📱', title: 'Jab <em>RuBisCO</em> galti se O₂ ko andar le aaye', tail: '😂', sub: 'I PUC · CH 11 · PHOTOSYNTHESIS' },
    group: { name: 'Chloroplast Kitchen 🍳', members: 'Sun, Chlorophyll, Water, RuBisCO, CO₂, O₂, PEPcase…', icon: '🌿' },
    msgs: [
      { who: 'Sun ☀️', c: '#f5c542', side: 'l', text: 'Good morning team! Photons bhej raha hoon 📸 *680* aur *700 nm* dono 🔥' },
      { who: 'Chlorophyll a 🌿', c: '#7be07b', side: 'r', text: 'Received! *PS II* ne electron uchhaal diya ⚡ *Z scheme* start 🛝', react: '🤩' },
      { who: 'Water 💧', c: '#6ec6ff', side: 'l', text: 'Mera electron le gaye 😭 Main toot gaya: *2H₂O → 4H⁺ + O₂ + 4e⁻* 💔' },
      { who: 'O₂ 🫧', c: '#ff8a80', side: 'l', text: 'Main free ho gaya! Bye bye chloroplast ✌️ Yaad rakhna, main *paani* se aaya, CO₂ se nahi 😎', react: '😂' },
      { who: 'ATP 🔋 & NADPH', c: '#ffb74d', side: 'r', text: 'Hum ready hain! *Stroma* ki taraf nikal rahe 🏃‍♂️💨' },
      { who: 'CO₂ ☁️', c: '#cfd8dc', side: 'l', text: 'RuBisCO bhai, main aa gaya 🙋 *RuBP* ke saath fix karo' },
      { who: 'RuBisCO 🧑‍🍳', c: '#d7a86e', side: 'l', text: 'Done! *2 × 3-PGA* ready 🍽️ *Calvin cycle* chalu 🔁', react: '👏' },
      { who: 'O₂ 🫧', c: '#ff8a80', side: 'l', text: 'Ruko… main wapas aa gaya 😈 RuBisCO, mujhe bhi bind karo na!' },
      { who: 'RuBisCO 🧑‍🍳', c: '#d7a86e', side: 'l', text: 'Arre galti se tujhe bhi pakad liya 🤦 *Phosphoglycolate* ban gaya… ATP waste 😩 = *photorespiration*', react: '😱' },
      { who: 'PEPcase 🌽', c: '#c5e1a5', side: 'r', text: 'Isliye *maize* mein main hoon 💪 CO₂ pehle main pakdunga, O₂ ki entry *band* 🚫', react: '🔥' },
      { who: 'Sun ☀️', c: '#f5c542', side: 'l', text: 'Aur sabka boss? Jo factor sabse *kam*, wahi rate decide karega — *Blackman* 📏' }
    ],
    remember: [
      '💧 O₂ comes from <em>water</em> — photolysis at <em>PS II</em> (Mn, Cl)',
      '⚡ Z scheme gives <em>ATP + NADPH + O₂</em>; cyclic gives <em>only ATP</em>',
      '😈 RuBisCO + O₂ → <em>phosphoglycolate</em>: photorespiration (C₂), wasteful',
      '🌽 C₄ plants: <em>PEPcase</em> in mesophyll, <em>no</em> photorespiration'
    ] },
  topic: { kind: 'topic', out: 'pu1-ch11-photosynthesis-reel',
    intro: { kick: 'BOARD EXAM SPECIAL', t1: 'Photosynthesis', t2: 'in 60 seconds', p: 'The topics that come again and again in I PUC board papers.', chips: ['Experiments', 'Pigments', 'Photosystems', 'Z scheme', 'Chemiosmosis', 'Calvin cycle', 'C₄', 'Factors'] },
    topics: [
      { m: '2 MARKS', t: 'Early experiments', rows: [['Priestley', 'mint plant restores air'], ['Ingenhousz', 'needs sunlight; green parts give O₂'], ['Sachs', 'glucose stored as starch'], ['Engelmann', 'first action spectrum'], ['van Niel', 'O₂ comes from water']] },
      { m: '2 / 3 MARKS', t: 'Four leaf pigments', sw: [['#2a8f6a', 'Chlorophyll a', 'blue-green · chief pigment'], ['#8db83a', 'Chlorophyll b', 'yellow-green'], ['#f2d02a', 'Xanthophyll', 'yellow'], ['#f29a1e', 'Carotenoids', 'yellow to yellow-orange']], foot: 'Most absorbed: <em>blue & red</em> light' },
      { m: '3 MARKS', t: 'Photosystems & photolysis', cards: [['PS I', 'Reaction centre <b>P700</b>'], ['PS II', 'Reaction centre <b>P680</b>'], ['PHOTOLYSIS', '<b>2H₂O → 4H⁺ + O₂ + 4e⁻</b> · with PS II · Mn, Cl']] },
      { m: '5 MARKS', t: 'Z scheme', flow: ['H₂O', 'P680', 'ETS', 'P700', 'NADPH'], img: 'diag-z-scheme.jpg', foot: 'Non-cyclic: <em>ATP + NADPH + O₂</em> · Cyclic: <em>ATP only</em>' },
      { m: '3 MARKS', t: 'Chemiosmosis', rows: [['1', 'H⁺ pile up in the <b>lumen</b>'], ['2', 'They flow back through <b>CF₀</b>'], ['3', '<b>CF₁</b> changes shape → ATP']], foot: 'Peter Mitchell · <em>3 H⁺ → 1 ATP</em>', num: true },
      { m: '5 MARKS', t: 'Calvin cycle', rows: [['1', '<b>Carboxylation</b> — RuBP + CO₂ → 2 × 3-PGA (RuBisCO)'], ['2', '<b>Reduction</b> — 3-PGA → sugar (ATP, NADPH)'], ['3', '<b>Regeneration</b> — RuBP rebuilt (ATP)']], img: 'diag-calvin.jpg', foot: 'Per glucose: <em>18 ATP + 12 NADPH</em>', num: true },
      { m: '5 MARKS', t: 'C₄ pathway', rows: [['1', 'Mesophyll: <b>PEP + CO₂ → OAA</b> (PEPcase)'], ['2', 'Bundle sheath: CO₂ released → <b>Calvin cycle</b>']], img: 'diag-c4.jpg', foot: '<em>Kranz</em> = wreath · maize, sugarcane', num: true },
      { m: '3 MARKS', t: 'Photorespiration & factors', cards: [['PHOTORESPIRATION', 'RuBisCO + O₂ → <b>phosphoglycolate</b> · no sugar, no ATP · absent in C₄'], ['BLACKMAN (1905)', 'Rate set by the factor <b>nearest its minimum</b>'], ['NUMBERS', 'Light saturation <b>~10%</b> · CO₂ <b>0.03–0.04%</b> · C₄ <b>30–45 °C</b>']] }
    ] },
  shayari: { kind: 'shayari',
    langs: {
      hi: { out: 'pu1-ch11-photosynthesis-shayari', font: "'Kalam','Noto Sans Devanagari'", title: 'प्रकाश संश्लेषण<br>पर <em>शायरी</em>', end: 'शायरी पसंद आई?<br>दोस्तों को भेजो! 📤',
        c: [
          ['🌿 Photosynthesis', 'leaf', 'सूरज की *किरणों* से पत्ती ने खाना बनाया,', '_CO₂_ और _पानी_ से *ग्लूकोज़* सजाया।', '6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂', 'वाह वाह! ✨'],
          ['💧 Oxygen', 'drop', 'पानी के *टूटने* से ऑक्सीजन आई,', '_वॉन नील_ ने यह बात सबको समझाई।', 'O₂ comes from water, not CO₂ (photolysis at PS II)', 'क्या बात है! 💫'],
          ['⚡ Z Scheme', 'zig', '*P680* से *P700* तक इलेक्ट्रॉन की सवारी,', '_Z योजना_ में बनती ATP-NADPH की तैयारी।', 'Non-cyclic: ATP + NADPH + O₂ · cyclic: only ATP', 'इरशाद! 🎶'],
          ['🔁 Calvin Cycle', 'cycle', '*RuBP* ने CO₂ को गले लगाया,', '_RuBisCO_ ने झट से *3-PGA* बनाया।', 'Per glucose: 18 ATP + 12 NADPH, 6 turns', 'वाह वाह! ✨'],
          ['🌽 C₄ Plants', 'corn', '*मक्का*-*गन्ना* धूप में भी मुस्काते हैं,', '_PEP_ से CO₂ पकड़, _फ़ोटोरेस्पिरेशन_ भगाते हैं।', 'C₄: PEP → OAA in mesophyll · Kranz anatomy', 'क्या बात है! 💫'],
          ['🏆 Board Special', 'star', '*ब्लैकमैन* कहे, जो सबसे कम वही राजा,', '_फ़ोटोसिंथेसिस_ समझ लो, बोर्ड में बजेगा *बाजा*!', 'Z scheme · Calvin cycle · C₄ · Photorespiration · Factors', 'मुकर्रर! 🔁']
        ] },
      en: { out: 'pu1-ch11-photosynthesis-shayari-english', font: "'Kalam','Patrick Hand'", title: 'Photosynthesis<br>par <em>Shayari</em>', end: 'Shayari pasand aayi?<br>Doston ko bhejo! 📤',
        c: [
          ['🌿 Photosynthesis', 'leaf', 'Sooraj ki *kirnon* se patti ne khana banaya,', '_CO₂_ aur _paani_ se *glucose* sajaya.', '6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂', 'Wah wah! ✨'],
          ['💧 Oxygen', 'drop', 'Paani ke *tootne* se oxygen aayi,', '_Van Niel_ ne yeh baat sabko samjhaayi.', 'O₂ comes from water, not CO₂ (photolysis at PS II)', 'Kya baat hai! 💫'],
          ['⚡ Z Scheme', 'zig', '*P680* se *P700* tak electron ki sawaari,', '_Z scheme_ mein banti ATP-NADPH ki taiyaari.', 'Non-cyclic: ATP + NADPH + O₂ · cyclic: only ATP', 'Irshaad! 🎶'],
          ['🔁 Calvin Cycle', 'cycle', '*RuBP* ne CO₂ ko gale lagaya,', '_RuBisCO_ ne jhat se *3-PGA* banaya.', 'Per glucose: 18 ATP + 12 NADPH, 6 turns', 'Wah wah! ✨'],
          ['🌽 C₄ Plants', 'corn', '*Makka*-*ganna* dhoop mein bhi muskaate hain,', '_PEP_ se CO₂ pakad, _photorespiration_ bhagaate hain.', 'C₄: PEP → OAA in mesophyll · Kranz anatomy', 'Kya baat hai! 💫'],
          ['🏆 Board Special', 'star', '*Blackman* kahe, jo sabse kam wahi raja,', '_Photosynthesis_ samajh lo, board mein bajega *baaja*!', 'Z scheme · Calvin cycle · C₄ · Photorespiration · Factors', 'Mukarrar! 🔁']
        ] },
      kn: { out: 'pu1-ch11-photosynthesis-shayari-kannada', font: "'Noto Sans Kannada'", title: 'ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ<br><em>ಶಾಯರಿ</em>', end: 'ಶಾಯರಿ ಇಷ್ಟವಾಯಿತೇ?<br>ಗೆಳೆಯರಿಗೆ ಕಳುಹಿಸಿ! 📤',
        c: [
          ['🌿 Photosynthesis', 'leaf', 'ಸೂರ್ಯನ *ಕಿರಣಕ್ಕೆ* ಎಲೆಯೇ ಅಡುಗೆಮನೆ,', '_CO₂_, _ನೀರಿನಿಂದ_ *ಗ್ಲೂಕೋಸ್‌ನ* ರಚನೆ.', '6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂', 'ವಾಹ್ ವಾಹ್! ✨'],
          ['💧 Oxygen', 'drop', 'ನೀರು *ಒಡೆದಾಗಲೇ* ಆಮ್ಲಜನಕ ಬಂತು,', '_ವಾನ್ ನೀಲ್_ ಹೇಳಿದ ಸತ್ಯ ಎಲ್ಲರಿಗೂ ತಿಳಿಯಿತು.', 'O₂ comes from water, not CO₂ (photolysis at PS II)', 'ಅದ್ಭುತ! 💫'],
          ['⚡ Z Scheme', 'zig', '*P680* ಇಂದ *P700* ಗೆ ಎಲೆಕ್ಟ್ರಾನ್ ಪಯಣ,', '_Z ಯೋಜನೆಯಲ್ಲಿ_ ATP-NADPH ತಯಾರಿಕೆಯ ಕಥನ.', 'Non-cyclic: ATP + NADPH + O₂ · cyclic: only ATP', 'ಭಲೇ! 🎶'],
          ['🔁 Calvin Cycle', 'cycle', '*RuBP* CO₂ ಅನ್ನು ಅಪ್ಪಿಕೊಂಡಿತು,', '_RuBisCO_ ತಕ್ಷಣ *3-PGA* ಮಾಡಿಬಿಟ್ಟಿತು.', 'Per glucose: 18 ATP + 12 NADPH, 6 turns', 'ವಾಹ್ ವಾಹ್! ✨'],
          ['🌽 C₄ Plants', 'corn', '*ಮೆಕ್ಕೆಜೋಳ*, *ಕಬ್ಬು* ಬಿಸಿಲಿನಲ್ಲೂ ನಗುತ್ತವೆ,', '_PEP_ ಯಿಂದ CO₂ ಹಿಡಿದು _ದ್ಯುತಿಶ್ವಸನ_ ಓಡಿಸುತ್ತವೆ.', 'C₄: PEP → OAA in mesophyll · Kranz anatomy', 'ಅದ್ಭುತ! 💫'],
          ['🏆 Board Special', 'star', '*ಬ್ಲ್ಯಾಕ್‌ಮನ್* ಹೇಳಿದ, ಕಡಿಮೆ ಇದ್ದದ್ದೇ ರಾಜ,', '_ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ_ ಕಲಿತರೆ ಬೋರ್ಡ್‌ನಲ್ಲಿ ಅಂಕಗಳ *ಮಜಾ*!', 'Z scheme · Calvin cycle · C₄ · Photorespiration · Factors', 'ಮತ್ತೊಮ್ಮೆ! 🔁']
        ] }
    } }
};
