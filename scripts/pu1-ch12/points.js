/* Short, large-print slide points for the PU-I Ch12 class decks (both decks, EN/KN/HI).
   The slides show these short points with icons so the last bench can read them; Narendra Sir's narration
   still reads the full Study-mode text (study.js), and the spotlight moves through the points in order.
   Each point: [icon, en, kn, hi]. Icon 'NOTE' renders the point as a NOTE strip.
   sec[i] = points for Study section i of the topic; recap = the "Part N" slide of the Large Text deck (one per recap item). */
const O2 = 'O<sub>2</sub>', CO2 = 'CO<sub>2</sub>', H2O = 'H<sub>2</sub>O', FADH2 = 'FADH<sub>2</sub>', NADp = 'NAD<sup>+</sup>', Hp = 'H<sup>+</sup>';
module.exports = {
  breathe: {
    recap: [
      ['🔥', `Respiration: breaking <b>C–C bonds</b> by oxidation`, `ಉಸಿರಾಟ: ಆಕ್ಸಿಡೀಕರಣದಿಂದ <b>C–C ಬಂಧ</b> ಮುರಿಯುವುದು`, `श्वसन: ऑक्सीकरण से <b>C–C बंध</b> तोड़ना`],
      ['🍬', `Substrates: mostly <b>carbohydrates</b>`, `ಆಧಾರವಸ್ತುಗಳು: ಹೆಚ್ಚಾಗಿ <b>ಕಾರ್ಬೋಹೈಡ್ರೇಟ್‌ಗಳು</b>`, `क्रियाधार: अधिकतर <b>कार्बोहाइड्रेट</b>`],
      ['🔋', `Step-wise energy release, trapped as <b>ATP</b>`, `ಹಂತ ಹಂತದ ಶಕ್ತಿ ಬಿಡುಗಡೆ, <b>ATP</b> ಆಗಿ ಸಂಗ್ರಹ`, `चरणबद्ध ऊर्जा मुक्ति, <b>ATP</b> में संचित`],
      ['🍃', `No respiratory organs: <b>stomata + lenticels</b>`, `ಉಸಿರಾಟದ ಅಂಗಗಳಿಲ್ಲ: <b>ಪತ್ರರಂಧ್ರ + ವಾತರಂಧ್ರ</b>`, `श्वसन अंग नहीं: <b>रंध्र + वातरंध्र</b>`],
      ['🫧', `Every cell near the surface; <b>air spaces</b>`, `ಪ್ರತಿ ಕೋಶ ಮೇಲ್ಮೈ ಹತ್ತಿರ; <b>ವಾಯು ಅವಕಾಶಗಳು</b>`, `हर कोशिका सतह के पास; <b>वायु अवकाश</b>`]
    ],
    sec: [
      [ ['⚡', `Every life activity needs <b>energy</b>`, `ಪ್ರತಿ ಜೀವಕ್ರಿಯೆಗೂ <b>ಶಕ್ತಿ</b> ಬೇಕು`, `हर जैविक क्रिया को <b>ऊर्जा</b> चाहिए`],
        ['🍞', `Energy comes from <b>oxidising food</b>`, `ಶಕ್ತಿ <b>ಆಹಾರದ ಆಕ್ಸಿಡೀಕರಣದಿಂದ</b>`, `ऊर्जा <b>भोजन के ऑक्सीकरण</b> से`],
        ['🌿', `Green plants make food by <b>photosynthesis</b>`, `ಹಸಿರು ಸಸ್ಯಗಳು <b>ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಯಿಂದ</b> ಆಹಾರ ತಯಾರಿಸುತ್ತವೆ`, `हरे पौधे <b>प्रकाश-संश्लेषण</b> से भोजन बनाते हैं`],
        ['🚚', `Food is <b>translocated</b> to non-green parts`, `ಆಹಾರ ಹಸಿರಲ್ಲದ ಭಾಗಗಳಿಗೆ <b>ಸಾಗಣೆ</b>`, `भोजन अहरित भागों तक <b>स्थानांतरित</b>`] ],
      [ ['🔥', `Breaking <b>C–C bonds</b> by oxidation`, `ಆಕ್ಸಿಡೀಕರಣದಿಂದ <b>C–C ಬಂಧ</b> ಮುರಿಯುವುದು`, `ऑक्सीकरण से <b>C–C बंध</b> तोड़ना`],
        ['🔋', `Released energy is trapped as <b>ATP</b>`, `ಬಿಡುಗಡೆಯಾದ ಶಕ್ತಿ <b>ATP</b> ಆಗಿ ಸಂಗ್ರಹ`, `मुक्त ऊर्जा <b>ATP</b> में संचित`],
        ['📍', `Occurs in <b>cytoplasm</b> and <b>mitochondria</b>`, `<b>ಕೋಶದ್ರವ್ಯ</b> ಮತ್ತು <b>ಮೈಟೋಕಾಂಡ್ರಿಯಾ</b>ದಲ್ಲಿ`, `<b>कोशिकाद्रव्य</b> और <b>माइटोकॉन्ड्रिया</b> में`] ],
      [ ['🍬', `Substrates: mainly <b>carbohydrates</b>`, `ಆಧಾರವಸ್ತುಗಳು: ಮುಖ್ಯವಾಗಿ <b>ಕಾರ್ಬೋಹೈಡ್ರೇಟ್‌ಗಳು</b>`, `क्रियाधार: मुख्यतः <b>कार्बोहाइड्रेट</b>`],
        ['🥜', `Also proteins, fats, organic acids`, `ಪ್ರೋಟೀನ್, ಕೊಬ್ಬು, ಸಾವಯವ ಆಮ್ಲಗಳೂ`, `प्रोटीन, वसा, कार्बनिक अम्ल भी`],
        ['🪜', `Energy released <b>step by step</b>`, `ಶಕ್ತಿ <b>ಹಂತ ಹಂತವಾಗಿ</b> ಬಿಡುಗಡೆ`, `ऊर्जा <b>चरणबद्ध</b> मुक्त`],
        ['💰', `ATP = <b>energy currency</b> of the cell`, `ATP = ಕೋಶದ <b>ಶಕ್ತಿ ನಾಣ್ಯ</b>`, `ATP = कोशिका की <b>ऊर्जा मुद्रा</b>`] ],
      [ ['✅', `Yes! Plants take in ${O2}, give out ${CO2}`, `ಹೌದು! ಸಸ್ಯಗಳು ${O2} ಪಡೆದು ${CO2} ಬಿಡುತ್ತವೆ`, `हाँ! पौधे ${O2} लेते, ${CO2} छोड़ते हैं`],
        ['🚫', `<b>No special respiratory organs</b>`, `<b>ವಿಶೇಷ ಉಸಿರಾಟದ ಅಂಗಗಳಿಲ್ಲ</b>`, `<b>कोई विशेष श्वसन अंग नहीं</b>`],
        ['🍃', `Gas exchange by <b>stomata</b> and <b>lenticels</b>`, `<b>ಪತ್ರರಂಧ್ರ</b> ಮತ್ತು <b>ವಾತರಂಧ್ರಗಳ</b> ಮೂಲಕ ಅನಿಲ ವಿನಿಮಯ`, `<b>रंध्र</b> और <b>वातरंध्र</b> से गैस विनिमय`],
        ['📉', `Low gas demand, short diffusion distance`, `ಕಡಿಮೆ ಅನಿಲ ಬೇಡಿಕೆ, ಕಡಿಮೆ ವಿಸರಣ ದೂರ`, `कम गैस माँग, कम विसरण दूरी`] ],
      [ ['🍃', `Leaf cells lie close to the surface`, `ಎಲೆಯ ಕೋಶಗಳು ಮೇಲ್ಮೈ ಹತ್ತಿರ`, `पत्ती की कोशिकाएँ सतह के पास`],
        ['🌳', `Stem: living cells under bark + <b>lenticels</b>`, `ಕಾಂಡ: ತೊಗಟೆಯಡಿ ಜೀವಂತ ಕೋಶಗಳು + <b>ವಾತರಂಧ್ರ</b>`, `तना: छाल के नीचे जीवित कोशिकाएँ + <b>वातरंध्र</b>`],
        ['🪵', `Inner stem cells are dead (support only)`, `ಒಳಗಿನ ಕಾಂಡ ಕೋಶಗಳು ಮೃತ (ಆಧಾರ ಮಾತ್ರ)`, `भीतरी तना कोशिकाएँ मृत (केवल सहारा)`],
        ['🫧', `Loose <b>parenchyma</b> → network of air spaces`, `ಸಡಿಲ <b>ಮೃದೂತಕ</b> → ವಾಯು ಅವಕಾಶಗಳ ಜಾಲ`, `ढीला <b>मृदूतक</b> → वायु अवकाशों का जाल`] ],
      [ ['🔥', `Combustion: energy lost as <b>heat</b>`, `ದಹನ: ಶಕ್ತಿ <b>ಶಾಖ</b>ವಾಗಿ ನಷ್ಟ`, `दहन: ऊर्जा <b>ऊष्मा</b> में नष्ट`],
        ['🪜', `Cell oxidises glucose in <b>small steps</b>`, `ಕೋಶ ಗ್ಲೂಕೋಸ್ ಅನ್ನು <b>ಸಣ್ಣ ಹಂತಗಳಲ್ಲಿ</b> ಆಕ್ಸಿಡೀಕರಿಸುತ್ತದೆ`, `कोशिका ग्लूकोज़ को <b>छोटे चरणों</b> में ऑक्सीकृत करती है`],
        ['🔋', `Step energy is coupled to <b>ATP synthesis</b>`, `ಹಂತದ ಶಕ್ತಿ <b>ATP ಸಂಶ್ಲೇಷಣೆಗೆ</b> ಜೋಡಣೆ`, `चरण की ऊर्जा <b>ATP संश्लेषण</b> से जुड़ी`],
        ['🦠', `<b>Facultative</b> or <b>obligate</b> anaerobes`, `<b>ಐಚ್ಛಿಕ</b> ಅಥವಾ <b>ಕಡ್ಡಾಯ</b> ಅವಾಯುಜೀವಿಗಳು`, `<b>विकल्पी</b> या <b>अविकल्पी</b> अवायवीय`] ]
    ]
  },
  glycolysis: {
    recap: [
      ['🍬', `Glucose → <b>2 pyruvic acid</b>`, `ಗ್ಲೂಕೋಸ್ → <b>2 ಪೈರುವಿಕ್ ಆಮ್ಲ</b>`, `ग्लूकोज़ → <b>2 पाइरुविक अम्ल</b>`],
      ['👨‍🔬', `<b>EMP pathway</b>; in the cytoplasm`, `<b>EMP ಪಥ</b>; ಕೋಶದ್ರವ್ಯದಲ್ಲಿ`, `<b>EMP पथ</b>; कोशिकाद्रव्य में`],
      ['🔟', `<b>10 reactions</b>, each by an enzyme`, `<b>10 ಕ್ರಿಯೆಗಳು</b>, ಪ್ರತಿಯೊಂದಕ್ಕೂ ಕಿಣ್ವ`, `<b>10 अभिक्रियाएँ</b>, हर एक का एंजाइम`],
      ['⚡', `ATP used at 2 steps; NADH at <b>PGAL → BPGA</b>`, `2 ಹಂತಗಳಲ್ಲಿ ATP ಬಳಕೆ; <b>PGAL → BPGA</b>ಯಲ್ಲಿ NADH`, `2 चरणों में ATP उपयोग; <b>PGAL → BPGA</b> पर NADH`],
      ['🧮', `Net gain: <b>2 ATP + 2 NADH</b>`, `ನಿವ್ವಳ ಲಾಭ: <b>2 ATP + 2 NADH</b>`, `शुद्ध लाभ: <b>2 ATP + 2 NADH</b>`]
    ],
    sec: [
      [ ['🍬', `Glucose → <b>2 pyruvic acid</b>`, `ಗ್ಲೂಕೋಸ್ → <b>2 ಪೈರುವಿಕ್ ಆಮ್ಲ</b>`, `ग्लूकोज़ → <b>2 पाइरुविक अम्ल</b>`],
        ['📜', `<i>glycos</i> = sugar, <i>lysis</i> = splitting`, `<i>glycos</i> = ಸಕ್ಕರೆ, <i>lysis</i> = ವಿಭಜನೆ`, `<i>glycos</i> = शर्करा, <i>lysis</i> = विखंडन`],
        ['👨‍🔬', `<b>EMP pathway</b>: Embden, Meyerhof, Parnas`, `<b>EMP ಪಥ</b>: ಎಂಬ್ಡೆನ್, ಮೇಯರ್‌ಹಾಫ್, ಪಾರ್ನಾಸ್`, `<b>EMP पथ</b>: एम्बडेन, मेयरहॉफ, पारनास`],
        ['📍', `In the <b>cytoplasm</b> of all organisms`, `ಎಲ್ಲಾ ಜೀವಿಗಳ <b>ಕೋಶದ್ರವ್ಯದಲ್ಲಿ</b>`, `सभी जीवों के <b>कोशिकाद्रव्य</b> में`] ],
      [ ['🌿', `From <b>sucrose</b> or stored carbohydrates`, `<b>ಸುಕ್ರೋಸ್</b> ಅಥವಾ ಸಂಗ್ರಹಿತ ಕಾರ್ಬೋಹೈಡ್ರೇಟ್‌ನಿಂದ`, `<b>सुक्रोज़</b> या संचित कार्बोहाइड्रेट से`],
        ['✂️', `<b>Invertase</b>: sucrose → glucose + fructose`, `<b>ಇನ್ವರ್ಟೇಸ್</b>: ಸುಕ್ರೋಸ್ → ಗ್ಲೂಕೋಸ್ + ಫ್ರಕ್ಟೋಸ್`, `<b>इनवर्टेज</b>: सुक्रोज़ → ग्लूकोज़ + फ्रक्टोज़`],
        ['⚗️', `<b>Hexokinase</b> → glucose-6-phosphate`, `<b>ಹೆಕ್ಸೋಕೈನೇಸ್</b> → ಗ್ಲೂಕೋಸ್-6-ಫಾಸ್ಫೇಟ್`, `<b>हेक्सोकाइनेज</b> → ग्लूकोज़-6-फॉस्फेट`],
        ['🔁', `Isomerised to <b>fructose-6-phosphate</b>`, `<b>ಫ್ರಕ್ಟೋಸ್-6-ಫಾಸ್ಫೇಟ್</b> ಆಗಿ ಸಮಾಂಗೀಕರಣ`, `<b>फ्रक्टोज़-6-फॉस्फेट</b> में समावयवन`] ],
      [ ['🔟', `<b>10 reactions</b>, each by an enzyme`, `<b>10 ಕ್ರಿಯೆಗಳು</b>, ಪ್ರತಿಯೊಂದಕ್ಕೂ ಕಿಣ್ವ`, `<b>10 अभिक्रियाएँ</b>, हर एक का एंजाइम`],
        ['🔋', `ATP used: glucose → <b>G-6-P</b>`, `ATP ಬಳಕೆ: ಗ್ಲೂಕೋಸ್ → <b>G-6-P</b>`, `ATP उपयोग: ग्लूकोज़ → <b>G-6-P</b>`],
        ['🔋', `ATP used: F-6-P → <b>fructose 1,6-bisP</b>`, `ATP ಬಳಕೆ: F-6-P → <b>ಫ್ರಕ್ಟೋಸ್ 1,6-ಬೈಸ್P</b>`, `ATP उपयोग: F-6-P → <b>फ्रक्टोज़ 1,6-बिसP</b>`],
        ['✂️', `Splits into <b>DHAP + PGAL</b> (3C each)`, `<b>DHAP + PGAL</b> ಆಗಿ ವಿಭಜನೆ (ತಲಾ 3C)`, `<b>DHAP + PGAL</b> में विखंडन (प्रत्येक 3C)`] ],
      [ ['⚡', `<b>PGAL → BPGA</b> forms NADH + ${Hp}`, `<b>PGAL → BPGA</b>: NADH + ${Hp} ಉತ್ಪತ್ತಿ`, `<b>PGAL → BPGA</b>: NADH + ${Hp} बनता है`],
        ['🧪', `Uses ${NADp} and inorganic phosphate`, `${NADp} ಮತ್ತು ಅಜೈವಿಕ ಫಾಸ್ಫೇಟ್ ಬಳಕೆ`, `${NADp} और अकार्बनिक फॉस्फेट का उपयोग`],
        ['✌️', `2 PGAL per glucose → <b>2 NADH</b>`, `ಪ್ರತಿ ಗ್ಲೂಕೋಸ್‌ಗೆ 2 PGAL → <b>2 NADH</b>`, `प्रति ग्लूकोज़ 2 PGAL → <b>2 NADH</b>`] ],
      [ ['🔋', `<b>BPGA → PGA</b>: ATP made`, `<b>BPGA → PGA</b>: ATP ಉತ್ಪಾದನೆ`, `<b>BPGA → PGA</b>: ATP बनता है`],
        ['💧', `PGA → PEP (loses ${H2O})`, `PGA → PEP (${H2O} ನಷ್ಟ)`, `PGA → PEP (${H2O} निकलता है)`],
        ['🔋', `<b>PEP → pyruvic acid</b>: ATP made`, `<b>PEP → ಪೈರುವಿಕ್ ಆಮ್ಲ</b>: ATP ಉತ್ಪಾದನೆ`, `<b>PEP → पाइरुविक अम्ल</b>: ATP बनता है`],
        ['NOTE', `Net: <b>4 − 2 = 2 ATP</b> + 2 NADH`, `ನಿವ್ವಳ: <b>4 − 2 = 2 ATP</b> + 2 NADH`, `शुद्ध: <b>4 − 2 = 2 ATP</b> + 2 NADH`] ],
      [ ['🎯', `Pyruvic acid: the key product`, `ಪೈರುವಿಕ್ ಆಮ್ಲ: ಮುಖ್ಯ ಉತ್ಪನ್ನ`, `पाइरुविक अम्ल: मुख्य उत्पाद`],
        ['🥛', `<b>Lactic acid</b> fermentation`, `<b>ಲ್ಯಾಕ್ಟಿಕ್ ಆಮ್ಲ</b> ಹುದುಗುವಿಕೆ`, `<b>लैक्टिक अम्ल</b> किण्वन`],
        ['🍺', `<b>Alcoholic</b> fermentation`, `<b>ಆಲ್ಕೋಹಾಲ್</b> ಹುದುಗುವಿಕೆ`, `<b>ऐल्कोहॉली</b> किण्वन`],
        ['🌬️', `<b>Aerobic respiration</b> (needs ${O2})`, `<b>ವಾಯುವಿಕ ಉಸಿರಾಟ</b> (${O2} ಬೇಕು)`, `<b>वायवीय श्वसन</b> (${O2} चाहिए)`] ]
    ]
  },
  fermentation: {
    recap: [
      ['🍺', `<b>Incomplete oxidation</b> of glucose, no ${O2}`, `${O2} ಇಲ್ಲದೆ ಗ್ಲೂಕೋಸ್‌ನ <b>ಅಪೂರ್ಣ ಆಕ್ಸಿಡೀಕರಣ</b>`, `${O2} के बिना ग्लूकोज़ का <b>अपूर्ण ऑक्सीकरण</b>`],
      ['🍞', `Yeast: pyruvic acid → <b>ethanol + ${CO2}</b>`, `ಯೀಸ್ಟ್: ಪೈರುವಿಕ್ ಆಮ್ಲ → <b>ಎಥೆನಾಲ್ + ${CO2}</b>`, `यीस्ट: पाइरुविक अम्ल → <b>एथेनॉल + ${CO2}</b>`],
      ['🏃', `Muscles, bacteria: → <b>lactic acid</b>`, `ಸ್ನಾಯು, ಬ್ಯಾಕ್ಟೀರಿಯಾ: → <b>ಲ್ಯಾಕ್ಟಿಕ್ ಆಮ್ಲ</b>`, `पेशियाँ, जीवाणु: → <b>लैक्टिक अम्ल</b>`],
      ['🔁', `NADH + ${Hp} reoxidised to ${NADp}`, `NADH + ${Hp} ಮತ್ತೆ ${NADp} ಆಗುತ್ತದೆ`, `NADH + ${Hp} फिर ${NADp} बनता है`],
      ['📉', `< 7% energy; yeast dies at ~13% alcohol`, `< 7% ಶಕ್ತಿ; ~13% ಆಲ್ಕೋಹಾಲ್‌ಗೆ ಯೀಸ್ಟ್ ಸಾವು`, `< 7% ऊर्जा; ~13% ऐल्कोहॉल पर यीस्ट मृत`]
    ],
    sec: [
      [ ['🍺', `<b>Incomplete oxidation</b> of glucose`, `ಗ್ಲೂಕೋಸ್‌ನ <b>ಅಪೂರ್ಣ ಆಕ್ಸಿಡೀಕರಣ</b>`, `ग्लूकोज़ का <b>अपूर्ण ऑक्सीकरण</b>`],
        ['🚫', `Occurs <b>without ${O2}</b> (anaerobic)`, `<b>${O2} ಇಲ್ಲದೆ</b> ನಡೆಯುತ್ತದೆ (ಅವಾಯುವಿಕ)`, `<b>${O2} के बिना</b> होता है (अवायवीय)`],
        ['🦠', `Yeast, prokaryotes, germinating seeds`, `ಯೀಸ್ಟ್, ಪ್ರೊಕ್ಯಾರಿಯೋಟ್, ಮೊಳೆಯುವ ಬೀಜಗಳು`, `यीस्ट, प्रोकैरियोट, अंकुरित बीज`] ],
      [ ['🍞', `Occurs in <b>yeast</b>`, `<b>ಯೀಸ್ಟ್</b>ನಲ್ಲಿ ನಡೆಯುತ್ತದೆ`, `<b>यीस्ट</b> में होता है`],
        ['➖', `<b>Pyruvic acid decarboxylase</b> removes ${CO2}`, `<b>ಪೈರುವಿಕ್ ಆಮ್ಲ ಡಿಕಾರ್ಬಾಕ್ಸಿಲೇಸ್</b> ${CO2} ತೆಗೆಯುತ್ತದೆ`, `<b>पाइरुविक अम्ल डिकार्बोक्सिलेज</b> ${CO2} हटाता है`],
        ['🍷', `<b>Alcohol dehydrogenase</b> → ethanol`, `<b>ಆಲ್ಕೋಹಾಲ್ ಡಿಹೈಡ್ರೋಜಿನೇಸ್</b> → ಎಥೆನಾಲ್`, `<b>ऐल्कोहॉल डिहाइड्रोजिनेज</b> → एथेनॉल`],
        ['🔁', `NADH + ${Hp} → ${NADp}`, `NADH + ${Hp} → ${NADp}`, `NADH + ${Hp} → ${NADp}`] ],
      [ ['🦠', `Some <b>bacteria</b> make lactic acid`, `ಕೆಲವು <b>ಬ್ಯಾಕ್ಟೀರಿಯಾ</b> ಲ್ಯಾಕ್ಟಿಕ್ ಆಮ್ಲ ಮಾಡುತ್ತವೆ`, `कुछ <b>जीवाणु</b> लैक्टिक अम्ल बनाते हैं`],
        ['🏃', `<b>Muscles</b> during heavy exercise`, `ಹೆಚ್ಚು ವ್ಯಾಯಾಮದಲ್ಲಿ <b>ಸ್ನಾಯುಗಳು</b>`, `भारी व्यायाम में <b>पेशियाँ</b>`],
        ['⚗️', `<b>Lactate dehydrogenase</b> → lactic acid`, `<b>ಲ್ಯಾಕ್ಟೇಟ್ ಡಿಹೈಡ್ರೋಜಿನೇಸ್</b> → ಲ್ಯಾಕ್ಟಿಕ್ ಆಮ್ಲ`, `<b>लैक्टेट डिहाइड्रोजिनेज</b> → लैक्टिक अम्ल`],
        ['🚫', `<b>No ${CO2}</b> released`, `<b>${CO2} ಬಿಡುಗಡೆ ಇಲ್ಲ</b>`, `<b>${CO2} नहीं</b> निकलती`] ],
      [ ['📉', `Less than <b>7%</b> energy released`, `<b>7%</b>ಕ್ಕಿಂತ ಕಡಿಮೆ ಶಕ್ತಿ ಬಿಡುಗಡೆ`, `<b>7%</b> से कम ऊर्जा मुक्त`],
        ['🔋', `Net only <b>2 ATP</b> per glucose`, `ಪ್ರತಿ ಗ್ಲೂಕೋಸ್‌ಗೆ ನಿವ್ವಳ <b>2 ATP</b> ಮಾತ್ರ`, `प्रति ग्लूकोज़ शुद्ध केवल <b>2 ATP</b>`],
        ['☠️', `Acid or alcohol: <b>hazardous</b>`, `ಆಮ್ಲ ಅಥವಾ ಆಲ್ಕೋಹಾಲ್: <b>ಅಪಾಯಕಾರಿ</b>`, `अम्ल या ऐल्कोहॉल: <b>हानिकारक</b>`],
        ['🍷', `Yeast dies at ~<b>13% alcohol</b>`, `~<b>13% ಆಲ್ಕೋಹಾಲ್</b>ಗೆ ಯೀಸ್ಟ್ ಸಾಯುತ್ತದೆ`, `~<b>13% ऐल्कोहॉल</b> पर यीस्ट मर जाता है`] ],
      [ ['🧪', `Glycolysis needs ${NADp} (PGAL → BPGA)`, `ಗ್ಲೈಕಾಲಿಸಿಸ್‌ಗೆ ${NADp} ಬೇಕು (PGAL → BPGA)`, `ग्लाइकोलाइसिस को ${NADp} चाहिए (PGAL → BPGA)`],
        ['📦', `A cell has <b>little ${NADp}</b>`, `ಕೋಶದಲ್ಲಿ <b>${NADp} ಕಡಿಮೆ</b>`, `कोशिका में <b>${NADp} कम</b>`],
        ['🔁', `Fermentation <b>regenerates ${NADp}</b>`, `ಹುದುಗುವಿಕೆ <b>${NADp} ಮರುಉತ್ಪಾದಿಸುತ್ತದೆ</b>`, `किण्वन <b>${NADp} फिर बनाता है</b>`],
        ['▶️', `So glycolysis <b>keeps running</b>`, `ಆದ್ದರಿಂದ ಗ್ಲೈಕಾಲಿಸಿಸ್ <b>ಮುಂದುವರಿಯುತ್ತದೆ</b>`, `इसलिए ग्लाइकोलाइसिस <b>चलता रहता है</b>`] ]
    ]
  },
  krebs: {
    recap: [
      ['⚗️', `Pyruvate → <b>acetyl CoA</b> + ${CO2} + NADH`, `ಪೈರುವೇಟ್ → <b>ಅಸಿಟೈಲ್ CoA</b> + ${CO2} + NADH`, `पाइरुवेट → <b>ऐसीटिल CoA</b> + ${CO2} + NADH`],
      ['🔄', `Krebs' cycle in the <b>matrix</b>; starts with OAA`, `ಕ್ರೆಬ್ಸ್ ಚಕ್ರ <b>ಮ್ಯಾಟ್ರಿಕ್ಸ್</b>ನಲ್ಲಿ; OAA ಯಿಂದ ಆರಂಭ`, `क्रेब्स चक्र <b>आधात्री</b> में; OAA से शुरू`],
      ['➖', `Two decarboxylations: <b>α-KG (5C)</b> → succinyl CoA`, `ಎರಡು ಡಿಕಾರ್ಬಾಕ್ಸಿಲೀಕರಣ: <b>α-KG (5C)</b> → ಸಕ್ಸಿನೈಲ್ CoA`, `दो विकार्बोक्सिलीकरण: <b>α-KG (5C)</b> → सक्सिनिल CoA`],
      ['🧮', `Per turn: <b>3 NADH, 1 ${FADH2}, 1 GTP</b>`, `ಪ್ರತಿ ಸುತ್ತು: <b>3 NADH, 1 ${FADH2}, 1 GTP</b>`, `प्रति चक्कर: <b>3 NADH, 1 ${FADH2}, 1 GTP</b>`],
      ['♻️', `OAA, ${NADp}, FAD<sup>+</sup> must be regenerated`, `OAA, ${NADp}, FAD<sup>+</sup> ಮರುಉತ್ಪಾದನೆ ಬೇಕು`, `OAA, ${NADp}, FAD<sup>+</sup> फिर बनने चाहिए`]
    ],
    sec: [
      [ ['🚚', `Pyruvate enters the <b>mitochondria</b>`, `ಪೈರುವೇಟ್ <b>ಮೈಟೋಕಾಂಡ್ರಿಯಾ</b> ಪ್ರವೇಶಿಸುತ್ತದೆ`, `पाइरुवेट <b>माइटोकॉन्ड्रिया</b> में जाता है`],
        ['1️⃣', `Full oxidation → <b>3 ${CO2}</b> (matrix)`, `ಪೂರ್ಣ ಆಕ್ಸಿಡೀಕರಣ → <b>3 ${CO2}</b> (ಮ್ಯಾಟ್ರಿಕ್ಸ್)`, `पूर्ण ऑक्सीकरण → <b>3 ${CO2}</b> (आधात्री)`],
        ['2️⃣', `Electrons to ${O2} + <b>ATP</b> (inner membrane)`, `ಎಲೆಕ್ಟ್ರಾನ್ ${O2}ಗೆ + <b>ATP</b> (ಒಳಪೊರೆ)`, `इलेक्ट्रॉन ${O2} को + <b>ATP</b> (भीतरी झिल्ली)`] ],
      [ ['📍', `In the <b>mitochondrial matrix</b>`, `<b>ಮೈಟೋಕಾಂಡ್ರಿಯಾದ ಮ್ಯಾಟ್ರಿಕ್ಸ್</b>ನಲ್ಲಿ`, `<b>माइटोकॉन्ड्रिया की आधात्री</b> में`],
        ['⚗️', `<b>Pyruvate dehydrogenase</b> (Mg<sup>2+</sup>)`, `<b>ಪೈರುವೇಟ್ ಡಿಹೈಡ್ರೋಜಿನೇಸ್</b> (Mg<sup>2+</sup>)`, `<b>पाइरुवेट डिहाइड्रोजिनेज</b> (Mg<sup>2+</sup>)`],
        ['➡️', `→ <b>acetyl CoA + ${CO2} + NADH</b>`, `→ <b>ಅಸಿಟೈಲ್ CoA + ${CO2} + NADH</b>`, `→ <b>ऐसीटिल CoA + ${CO2} + NADH</b>`],
        ['🚪', `<b>Link reaction</b> / gateway step`, `<b>ಸಂಪರ್ಕ ಕ್ರಿಯೆ</b> / ಪ್ರವೇಶ ದ್ವಾರ ಹಂತ`, `<b>संयोजक अभिक्रिया</b> / प्रवेश-द्वार चरण`] ],
      [ ['👨‍🔬', `<b>Krebs' cycle</b> = TCA cycle (Hans Krebs)`, `<b>ಕ್ರೆಬ್ಸ್ ಚಕ್ರ</b> = TCA ಚಕ್ರ (ಹ್ಯಾನ್ಸ್ ಕ್ರೆಬ್ಸ್)`, `<b>क्रेब्स चक्र</b> = TCA चक्र (हैंस क्रेब्स)`],
        ['➕', `Acetyl CoA + <b>OAA</b> → <b>citric acid</b>`, `ಅಸಿಟೈಲ್ CoA + <b>OAA</b> → <b>ಸಿಟ್ರಿಕ್ ಆಮ್ಲ</b>`, `ऐसीटिल CoA + <b>OAA</b> → <b>सिट्रिक अम्ल</b>`],
        ['⚗️', `Enzyme: <b>citrate synthase</b>`, `ಕಿಣ್ವ: <b>ಸಿಟ್ರೇಟ್ ಸಿಂಥೇಸ್</b>`, `एंजाइम: <b>सिट्रेट सिंथेज</b>`],
        ['🔁', `Citrate → <b>isocitrate</b>`, `ಸಿಟ್ರೇಟ್ → <b>ಐಸೋಸಿಟ್ರೇಟ್</b>`, `सिट्रेट → <b>आइसोसिट्रेट</b>`] ],
      [ ['➖', `Two <b>decarboxylations</b> (${CO2} out)`, `ಎರಡು <b>ಡಿಕಾರ್ಬಾಕ್ಸಿಲೀಕರಣ</b> (${CO2} ಹೊರಕ್ಕೆ)`, `दो <b>विकार्बोक्सिलीकरण</b> (${CO2} बाहर)`],
        ['🧪', `→ <b>α-ketoglutaric acid</b> (5C) → succinyl-CoA`, `→ <b>α-ಕೀಟೋಗ್ಲುಟಾರಿಕ್ ಆಮ್ಲ</b> (5C) → ಸಕ್ಸಿನೈಲ್-CoA`, `→ <b>α-कीटोग्लूटैरिक अम्ल</b> (5C) → सक्सिनिल-CoA`],
        ['🔋', `Succinyl-CoA → succinic acid: <b>GTP</b>`, `ಸಕ್ಸಿನೈಲ್-CoA → ಸಕ್ಸಿನಿಕ್ ಆಮ್ಲ: <b>GTP</b>`, `सक्सिनिल-CoA → सक्सिनिक अम्ल: <b>GTP</b>`],
        ['NOTE', `GTP → <b>ATP</b> (substrate-level)`, `GTP → <b>ATP</b> (ಆಧಾರವಸ್ತು ಮಟ್ಟದ)`, `GTP → <b>ATP</b> (क्रियाधार-स्तरीय)`] ],
      [ ['⚡', `<b>3 NADH</b> per turn`, `ಪ್ರತಿ ಸುತ್ತಿಗೆ <b>3 NADH</b>`, `प्रति चक्कर <b>3 NADH</b>`],
        ['⚡', `<b>1 ${FADH2}</b> (succinic → fumaric acid)`, `<b>1 ${FADH2}</b> (ಸಕ್ಸಿನಿಕ್ → ಫ್ಯೂಮರಿಕ್ ಆಮ್ಲ)`, `<b>1 ${FADH2}</b> (सक्सिनिक → फ्यूमैरिक अम्ल)`],
        ['🔁', `OAA must be <b>replenished</b>`, `OAA <b>ಮರುಪೂರಣ</b> ಬೇಕು`, `OAA की <b>पूर्ति</b> ज़रूरी`],
        ['♻️', `${NADp} and FAD<sup>+</sup> regenerated`, `${NADp} ಮತ್ತು FAD<sup>+</sup> ಮರುಉತ್ಪಾದನೆ`, `${NADp} और FAD<sup>+</sup> फिर बनते हैं`] ],
      [ ['🧾', `Per pyruvate: 3 ${CO2}, 4 NADH, 1 ${FADH2}, 1 ATP`, `ಪ್ರತಿ ಪೈರುವೇಟ್: 3 ${CO2}, 4 NADH, 1 ${FADH2}, 1 ATP`, `प्रति पाइरुवेट: 3 ${CO2}, 4 NADH, 1 ${FADH2}, 1 ATP`],
        ['🧮', `Per glucose: <b>8 NADH + 2 ${FADH2}</b>`, `ಪ್ರತಿ ಗ್ಲೂಕೋಸ್: <b>8 NADH + 2 ${FADH2}</b>`, `प्रति ग्लूकोज़: <b>8 NADH + 2 ${FADH2}</b>`],
        ['NOTE', `${O2} not used yet; that is in the <b>ETS</b>`, `${O2} ಇನ್ನೂ ಬಳಕೆಯಾಗಿಲ್ಲ; ಅದು <b>ETS</b>ನಲ್ಲಿ`, `${O2} अभी उपयोग नहीं; वह <b>ETS</b> में`] ]
    ]
  },
  ets: {
    recap: [
      ['📍', `ETS: in the <b>inner mitochondrial membrane</b>`, `ETS: <b>ಮೈಟೋಕಾಂಡ್ರಿಯಾದ ಒಳಪೊರೆ</b>ಯಲ್ಲಿ`, `ETS: <b>माइटोकॉन्ड्रिया की भीतरी झिल्ली</b> में`],
      ['🔗', `I → UQ → III → cyt c → IV → ${O2}`, `I → UQ → III → cyt c → IV → ${O2}`, `I → UQ → III → cyt c → IV → ${O2}`],
      ['🔋', `Complex V: NADH = <b>3 ATP</b>, ${FADH2} = <b>2 ATP</b>`, `ಸಂಕೀರ್ಣ V: NADH = <b>3 ATP</b>, ${FADH2} = <b>2 ATP</b>`, `सम्मिश्र V: NADH = <b>3 ATP</b>, ${FADH2} = <b>2 ATP</b>`],
      ['🌬️', `${O2}: final hydrogen acceptor → ${H2O}`, `${O2}: ಅಂತಿಮ ಹೈಡ್ರೋಜನ್ ಸ್ವೀಕಾರಕ → ${H2O}`, `${O2}: अंतिम हाइड्रोजन ग्राही → ${H2O}`],
      ['🟡', `ATP synthase: F<sub>0</sub> + F<sub>1</sub>; <b>4 ${Hp}</b> per ATP`, `ATP ಸಿಂಥೇಸ್: F<sub>0</sub> + F<sub>1</sub>; ಪ್ರತಿ ATPಗೆ <b>4 ${Hp}</b>`, `ATP सिंथेज: F<sub>0</sub> + F<sub>1</sub>; प्रति ATP <b>4 ${Hp}</b>`]
    ],
    sec: [
      [ ['⚡', `Oxidises <b>NADH</b> and <b>${FADH2}</b>`, `<b>NADH</b> ಮತ್ತು <b>${FADH2}</b> ಆಕ್ಸಿಡೀಕರಣ`, `<b>NADH</b> और <b>${FADH2}</b> का ऑक्सीकरण`],
        ['💧', `Electrons end on <b>${O2} → ${H2O}</b>`, `ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳು ಕೊನೆಗೆ <b>${O2} → ${H2O}</b>`, `इलेक्ट्रॉन अंत में <b>${O2} → ${H2O}</b>`],
        ['🔗', `Electrons pass carrier to carrier`, `ಎಲೆಕ್ಟ್ರಾನ್ ವಾಹಕದಿಂದ ವಾಹಕಕ್ಕೆ`, `इलेक्ट्रॉन वाहक से वाहक तक`],
        ['📍', `In the <b>inner mitochondrial membrane</b>`, `<b>ಮೈಟೋಕಾಂಡ್ರಿಯಾದ ಒಳಪೊರೆ</b>ಯಲ್ಲಿ`, `<b>माइटोकॉन्ड्रिया की भीतरी झिल्ली</b> में`] ],
      [ ['1️⃣', `<b>Complex I</b> = NADH dehydrogenase`, `<b>ಸಂಕೀರ್ಣ I</b> = NADH ಡಿಹೈಡ್ರೋಜಿನೇಸ್`, `<b>सम्मिश्र I</b> = NADH डिहाइड्रोजिनेज`],
        ['➡️', `Electrons go to <b>ubiquinone</b>`, `ಎಲೆಕ್ಟ್ರಾನ್ <b>ಯುಬಿಕ್ವಿನೋನ್</b>ಗೆ`, `इलेक्ट्रॉन <b>यूबिक्विनोन</b> को`],
        ['2️⃣', `<b>Complex II</b>: ${FADH2} → ubiquinone`, `<b>ಸಂಕೀರ್ಣ II</b>: ${FADH2} → ಯುಬಿಕ್ವಿನೋನ್`, `<b>सम्मिश्र II</b>: ${FADH2} → यूबिक्विनोन`] ],
      [ ['3️⃣', `<b>Complex III</b> = cytochrome bc<sub>1</sub>`, `<b>ಸಂಕೀರ್ಣ III</b> = ಸೈಟೋಕ್ರೋಮ್ bc<sub>1</sub>`, `<b>सम्मिश्र III</b> = साइटोक्रोम bc<sub>1</sub>`],
        ['🚌', `<b>Cytochrome c</b>: mobile carrier (III → IV)`, `<b>ಸೈಟೋಕ್ರೋಮ್ c</b>: ಚಲಿಸುವ ವಾಹಕ (III → IV)`, `<b>साइटोक्रोम c</b>: गतिशील वाहक (III → IV)`],
        ['4️⃣', `<b>Complex IV</b> = cytochrome c oxidase`, `<b>ಸಂಕೀರ್ಣ IV</b> = ಸೈಟೋಕ್ರೋಮ್ c ಆಕ್ಸಿಡೇಸ್`, `<b>सम्मिश्र IV</b> = साइटोक्रोम c ऑक्सीडेज`],
        ['🟠', `Cyt a, a<sub>3</sub> + <b>2 copper centres</b>`, `ಸೈಟ್ a, a<sub>3</sub> + <b>2 ತಾಮ್ರ ಕೇಂದ್ರಗಳು</b>`, `साइट a, a<sub>3</sub> + <b>2 ताँबा केंद्र</b>`] ],
      [ ['🔋', `<b>Complex V</b> (ATP synthase) makes ATP`, `<b>ಸಂಕೀರ್ಣ V</b> (ATP ಸಿಂಥೇಸ್) ATP ಮಾಡುತ್ತದೆ`, `<b>सम्मिश्र V</b> (ATP सिंथेज) ATP बनाता है`],
        ['3️⃣', `1 NADH → <b>3 ATP</b>`, `1 NADH → <b>3 ATP</b>`, `1 NADH → <b>3 ATP</b>`],
        ['2️⃣', `1 ${FADH2} → <b>2 ATP</b>`, `1 ${FADH2} → <b>2 ATP</b>`, `1 ${FADH2} → <b>2 ATP</b>`],
        ['NOTE', `${O2} = <b>final hydrogen acceptor</b>`, `${O2} = <b>ಅಂತಿಮ ಹೈಡ್ರೋಜನ್ ಸ್ವೀಕಾರಕ</b>`, `${O2} = <b>अंतिम हाइड्रोजन ग्राही</b>`] ],
      [ ['☀️', `Photophosphorylation: <b>light</b> builds the gradient`, `ದ್ಯುತಿ ಫಾಸ್ಫೊರಿಲೀಕರಣ: <b>ಬೆಳಕು</b> ಪ್ರವಣತೆ ರಚಿಸುತ್ತದೆ`, `प्रकाश-फॉस्फोरिलीकरण: <b>प्रकाश</b> प्रवणता बनाता है`],
        ['⚡', `Respiration: <b>redox energy</b> builds it`, `ಉಸಿರಾಟ: <b>ರೆಡಾಕ್ಸ್ ಶಕ್ತಿ</b> ರಚಿಸುತ್ತದೆ`, `श्वसन: <b>रेडॉक्स ऊर्जा</b> बनाती है`],
        ['🏷️', `Hence <b>oxidative phosphorylation</b>`, `ಆದ್ದರಿಂದ <b>ಆಕ್ಸಿಡೇಟಿವ್ ಫಾಸ್ಫೊರಿಲೀಕರಣ</b>`, `इसलिए <b>ऑक्सीकारी फॉस्फोरिलीकरण</b>`],
        ['📘', `<b>Chemiosmotic hypothesis</b>`, `<b>ರಸಾಯನ ಪರಾಸರಣ ಸಿದ್ಧಾಂತ</b>`, `<b>रसोपरासरणी परिकल्पना</b>`] ],
      [ ['🟡', `<b>F<sub>1</sub></b> head: site of ATP synthesis`, `<b>F<sub>1</sub></b> ತಲೆ: ATP ಸಂಶ್ಲೇಷಣೆಯ ಸ್ಥಳ`, `<b>F<sub>1</sub></b> शीर्ष: ATP संश्लेषण का स्थल`],
        ['🚪', `<b>F<sub>0</sub></b>: proton channel in the membrane`, `<b>F<sub>0</sub></b>: ಪೊರೆಯಲ್ಲಿನ ಪ್ರೋಟಾನ್ ಕಾಲುವೆ`, `<b>F<sub>0</sub></b>: झिल्ली में प्रोटॉन चैनल`],
        ['➡️', `Proton flow drives ATP making`, `ಪ್ರೋಟಾನ್ ಹರಿವಿನಿಂದ ATP ಉತ್ಪಾದನೆ`, `प्रोटॉन प्रवाह से ATP बनता है`],
        ['NOTE', `<b>4 ${Hp}</b> per ATP`, `ಪ್ರತಿ ATPಗೆ <b>4 ${Hp}</b>`, `प्रति ATP <b>4 ${Hp}</b>`] ]
    ]
  },
  balance: {
    recap: [
      ['🧮', `Net ATP per glucose: <b>theoretical</b>`, `ಪ್ರತಿ ಗ್ಲೂಕೋಸ್‌ಗೆ ನಿವ್ವಳ ATP: <b>ಸೈದ್ಧಾಂತಿಕ</b>`, `प्रति ग्लूकोज़ शुद्ध ATP: <b>सैद्धांतिक</b>`],
      ['📋', `Assumes an orderly pathway, only glucose`, `ಕ್ರಮಬದ್ಧ ಪಥ, ಗ್ಲೂಕೋಸ್ ಮಾತ್ರ ಎಂಬ ಊಹೆ`, `क्रमबद्ध पथ, केवल ग्लूकोज़ की मान्यता`],
      ['⚙️', `Real pathways run <b>simultaneously</b>`, `ನಿಜವಾದ ಪಥಗಳು <b>ಏಕಕಾಲದಲ್ಲಿ</b>`, `वास्तविक पथ <b>एक साथ</b> चलते हैं`],
      ['🏆', `Net gain: <b>38 ATP</b> (aerobic)`, `ನಿವ್ವಳ ಲಾಭ: <b>38 ATP</b> (ವಾಯುವಿಕ)`, `शुद्ध लाभ: <b>38 ATP</b> (वायवीय)`],
      ['🍺', `Fermentation: only <b>2 ATP</b>`, `ಹುದುಗುವಿಕೆ: ಕೇವಲ <b>2 ATP</b>`, `किण्वन: केवल <b>2 ATP</b>`]
    ],
    sec: [
      [ ['🧮', `Counts <b>net ATP</b> per glucose`, `ಪ್ರತಿ ಗ್ಲೂಕೋಸ್‌ಗೆ <b>ನಿವ್ವಳ ATP</b> ಲೆಕ್ಕ`, `प्रति ग्लूकोज़ <b>शुद्ध ATP</b> की गणना`],
        ['📝', `Only a <b>theoretical</b> exercise`, `ಕೇವಲ <b>ಸೈದ್ಧಾಂತಿಕ</b> ಲೆಕ್ಕ`, `केवल <b>सैद्धांतिक</b> अभ्यास`],
        ['📋', `Based on certain <b>assumptions</b>`, `ಕೆಲವು <b>ಊಹೆಗಳ</b> ಆಧಾರದಲ್ಲಿ`, `कुछ <b>मान्यताओं</b> पर आधारित`] ],
      [ ['➡️', `Orderly: glycolysis → TCA → ETS`, `ಕ್ರಮಬದ್ಧ: ಗ್ಲೈಕಾಲಿಸಿಸ್ → TCA → ETS`, `क्रमबद्ध: ग्लाइकोलाइसिस → TCA → ETS`],
        ['🚚', `Glycolysis NADH enters mitochondria`, `ಗ್ಲೈಕಾಲಿಸಿಸ್ NADH ಮೈಟೋಕಾಂಡ್ರಿಯಾಗೆ`, `ग्लाइकोलाइसिस का NADH माइटोकॉन्ड्रिया में`],
        ['🚫', `No intermediate is withdrawn`, `ಯಾವ ಮಧ್ಯವರ್ತಿಯನ್ನೂ ತೆಗೆಯುವುದಿಲ್ಲ`, `कोई मध्यवर्ती नहीं निकाला जाता`],
        ['🍬', `Only <b>glucose</b> is respired`, `<b>ಗ್ಲೂಕೋಸ್</b> ಮಾತ್ರ ಉಸಿರಾಟಕ್ಕೆ`, `केवल <b>ग्लूकोज़</b> का श्वसन`] ],
      [ ['⚙️', `Pathways run <b>simultaneously</b>`, `ಪಥಗಳು <b>ಏಕಕಾಲದಲ್ಲಿ</b> ನಡೆಯುತ್ತವೆ`, `पथ <b>एक साथ</b> चलते हैं`],
        ['🔀', `Substrates enter and leave as needed`, `ಅಗತ್ಯಕ್ಕೆ ತಕ್ಕಂತೆ ಆಧಾರವಸ್ತುಗಳ ಪ್ರವೇಶ-ನಿರ್ಗಮನ`, `ज़रूरत के अनुसार क्रियाधार आते-जाते हैं`],
        ['🎛️', `Enzyme rates are controlled`, `ಕಿಣ್ವಗಳ ವೇಗ ನಿಯಂತ್ರಿತ`, `एंजाइमों की दर नियंत्रित`],
        ['🌟', `Still shows life's <b>efficiency</b>`, `ಆದರೂ ಜೀವದ <b>ದಕ್ಷತೆ</b> ತೋರಿಸುತ್ತದೆ`, `फिर भी जीवन की <b>दक्षता</b> दिखाता है`] ],
      [ ['🍬', `Glycolysis: 2 ATP + 2 NADH = <b>8 ATP</b>`, `ಗ್ಲೈಕಾಲಿಸಿಸ್: 2 ATP + 2 NADH = <b>8 ATP</b>`, `ग्लाइकोलाइसिस: 2 ATP + 2 NADH = <b>8 ATP</b>`],
        ['🚪', `Link reaction: 2 NADH = <b>6 ATP</b>`, `ಸಂಪರ್ಕ ಕ್ರಿಯೆ: 2 NADH = <b>6 ATP</b>`, `संयोजक अभिक्रिया: 2 NADH = <b>6 ATP</b>`],
        ['🔄', `Krebs: 2 ATP + 6 NADH + 2 ${FADH2} = <b>24</b>`, `ಕ್ರೆಬ್ಸ್: 2 ATP + 6 NADH + 2 ${FADH2} = <b>24</b>`, `क्रेब्स: 2 ATP + 6 NADH + 2 ${FADH2} = <b>24</b>`],
        ['NOTE', `Total = <b>38 ATP</b> per glucose`, `ಒಟ್ಟು = ಪ್ರತಿ ಗ್ಲೂಕೋಸ್‌ಗೆ <b>38 ATP</b>`, `कुल = प्रति ग्लूकोज़ <b>38 ATP</b>`] ],
      [ ['🍺', `Fermentation: <b>partial</b> breakdown`, `ಹುದುಗುವಿಕೆ: <b>ಭಾಗಶಃ</b> ವಿಭಜನೆ`, `किण्वन: <b>आंशिक</b> विखंडन`],
        ['🌬️', `Aerobic: <b>complete</b> → ${CO2} + ${H2O}`, `ವಾಯುವಿಕ: <b>ಪೂರ್ಣ</b> → ${CO2} + ${H2O}`, `वायवीय: <b>पूर्ण</b> → ${CO2} + ${H2O}`],
        ['🔋', `<b>2 ATP</b> vs <b>38 ATP</b>`, `<b>2 ATP</b> vs <b>38 ATP</b>`, `<b>2 ATP</b> बनाम <b>38 ATP</b>`],
        ['🐢', `NADH oxidised slowly vs <b>vigorously</b>`, `NADH ನಿಧಾನ vs <b>ವೇಗವಾಗಿ</b> ಆಕ್ಸಿಡೀಕರಣ`, `NADH धीरे बनाम <b>तेज़ी से</b> ऑक्सीकृत`] ]
    ]
  },
  amphibolic: {
    recap: [
      ['🍬', `<b>Glucose</b>: the favoured substrate`, `<b>ಗ್ಲೂಕೋಸ್</b>: ಮೆಚ್ಚಿನ ಆಧಾರವಸ್ತು`, `<b>ग्लूकोज़</b>: पसंदीदा क्रियाधार`],
      ['🧈', `Fatty acids → acetyl CoA; glycerol → PGAL`, `ಕೊಬ್ಬಿನಾಮ್ಲ → ಅಸಿಟೈಲ್ CoA; ಗ್ಲಿಸರಾಲ್ → PGAL`, `वसा अम्ल → ऐसीटिल CoA; ग्लिसरॉल → PGAL`],
      ['🥩', `Amino acids enter after <b>deamination</b>`, `<b>ಡಿಅಮೈನೀಕರಣದ</b> ನಂತರ ಅಮೈನೋ ಆಮ್ಲ ಪ್ರವೇಶ`, `<b>विऐमीनीकरण</b> के बाद ऐमीनो अम्ल प्रवेश`],
      ['🧱', `Intermediates also used to <b>build</b> molecules`, `ಮಧ್ಯವರ್ತಿಗಳು ಅಣು <b>ರಚನೆಗೂ</b> ಬಳಕೆ`, `मध्यवर्ती अणु <b>बनाने</b> में भी उपयोगी`],
      ['🔀', `So respiration is <b>amphibolic</b>`, `ಆದ್ದರಿಂದ ಉಸಿರಾಟ <b>ಉಭಯಚಯಾಪಚಯಿ</b>`, `इसलिए श्वसन <b>उभयधर्मी</b> है`]
    ],
    sec: [
      [ ['🍬', `<b>Glucose</b> is the favoured substrate`, `<b>ಗ್ಲೂಕೋಸ್</b> ಮೆಚ್ಚಿನ ಆಧಾರವಸ್ತು`, `<b>ग्लूकोज़</b> पसंदीदा क्रियाधार`],
        ['🔁', `Other carbohydrates → glucose first`, `ಇತರ ಕಾರ್ಬೋಹೈಡ್ರೇಟ್ ಮೊದಲು ಗ್ಲೂಕೋಸ್ ಆಗುತ್ತದೆ`, `अन्य कार्बोहाइड्रेट पहले ग्लूकोज़ बनते हैं`],
        ['🚪', `Others enter at <b>different points</b>`, `ಇತರವು <b>ಬೇರೆ ಬೇರೆ ಹಂತಗಳಲ್ಲಿ</b> ಪ್ರವೇಶ`, `अन्य <b>अलग-अलग बिंदुओं</b> पर प्रवेश`] ],
      [ ['🧈', `Fats → <b>glycerol + fatty acids</b>`, `ಕೊಬ್ಬು → <b>ಗ್ಲಿಸರಾಲ್ + ಕೊಬ್ಬಿನಾಮ್ಲ</b>`, `वसा → <b>ग्लिसरॉल + वसा अम्ल</b>`],
        ['➡️', `Fatty acids → <b>acetyl CoA</b>`, `ಕೊಬ್ಬಿನಾಮ್ಲ → <b>ಅಸಿಟೈಲ್ CoA</b>`, `वसा अम्ल → <b>ऐसीटिल CoA</b>`],
        ['➡️', `Glycerol → <b>PGAL</b>`, `ಗ್ಲಿಸರಾಲ್ → <b>PGAL</b>`, `ग्लिसरॉल → <b>PGAL</b>`] ],
      [ ['✂️', `<b>Proteases</b>: proteins → amino acids`, `<b>ಪ್ರೋಟಿಯೇಸ್</b>: ಪ್ರೋಟೀನ್ → ಅಮೈನೋ ಆಮ್ಲ`, `<b>प्रोटिएज</b>: प्रोटीन → ऐमीनो अम्ल`],
        ['➖', `<b>Deamination</b>: amino group removed`, `<b>ಡಿಅಮೈನೀಕರಣ</b>: ಅಮೈನೋ ಗುಂಪು ತೆಗೆಯುವಿಕೆ`, `<b>विऐमीनीकरण</b>: ऐमीनो समूह हटता है`],
        ['🚪', `Enter as pyruvate, acetyl CoA or in Krebs'`, `ಪೈರುವೇಟ್, ಅಸಿಟೈಲ್ CoA ಅಥವಾ ಕ್ರೆಬ್ಸ್‌ನಲ್ಲಿ ಪ್ರವೇಶ`, `पाइरुवेट, ऐसीटिल CoA या क्रेब्स में प्रवेश`] ],
      [ ['💥', `Breaking down = <b>catabolism</b>`, `ವಿಭಜನೆ = <b>ಅಪಚಯ</b>`, `विखंडन = <b>अपचय</b>`],
        ['🧱', `Building up = <b>anabolism</b>`, `ರಚನೆ = <b>ಉಪಚಯ</b>`, `निर्माण = <b>उपचय</b>`],
        ['🔁', `Acetyl CoA → fatty acids when needed`, `ಅಗತ್ಯವಿದ್ದಾಗ ಅಸಿಟೈಲ್ CoA → ಕೊಬ್ಬಿನಾಮ್ಲ`, `ज़रूरत पर ऐसीटिल CoA → वसा अम्ल`],
        ['NOTE', `Both → <b>amphibolic pathway</b>`, `ಎರಡೂ → <b>ಉಭಯಚಯಾಪಚಯಿ ಪಥ</b>`, `दोनों → <b>उभयधर्मी पथ</b>`] ],
      [ ['🕳️', `Krebs' cycle = <b>metabolic sink</b>`, `ಕ್ರೆಬ್ಸ್ ಚಕ್ರ = <b>ಚಯಾಪಚಯ ಸಿಂಕ್</b>`, `क्रेब्स चक्र = <b>उपापचयी सिंक</b>`],
        ['🔀', `Carbs, fats, proteins all end here`, `ಕಾರ್ಬೋಹೈಡ್ರೇಟ್, ಕೊಬ್ಬು, ಪ್ರೋಟೀನ್ ಎಲ್ಲವೂ ಇಲ್ಲಿಗೆ`, `कार्बोहाइड्रेट, वसा, प्रोटीन सभी यहाँ`],
        ['🚪', `Pyruvate → acetyl CoA = <b>gateway step</b>`, `ಪೈರುವೇಟ್ → ಅಸಿಟೈಲ್ CoA = <b>ಪ್ರವೇಶ ದ್ವಾರ ಹಂತ</b>`, `पाइरुवेट → ऐसीटिल CoA = <b>प्रवेश-द्वार चरण</b>`] ]
    ]
  },
  rq: {
    recap: [
      ['📊', `<b>RQ = ${CO2} evolved ÷ ${O2} consumed</b>`, `<b>RQ = ಬಿಡುಗಡೆಯಾದ ${CO2} ÷ ಬಳಸಿದ ${O2}</b>`, `<b>RQ = मुक्त ${CO2} ÷ उपयुक्त ${O2}</b>`],
      ['🏷️', `Depends on the <b>substrate</b>`, `<b>ಆಧಾರವಸ್ತುವಿನ</b> ಮೇಲೆ ಅವಲಂಬಿತ`, `<b>क्रियाधार</b> पर निर्भर`],
      ['🍬', `Carbohydrates: <b>RQ = 1</b>`, `ಕಾರ್ಬೋಹೈಡ್ರೇಟ್: <b>RQ = 1</b>`, `कार्बोहाइड्रेट: <b>RQ = 1</b>`],
      ['🧈', `Fats: <b>RQ &lt; 1</b> (0.7)`, `ಕೊಬ್ಬು: <b>RQ &lt; 1</b> (0.7)`, `वसा: <b>RQ &lt; 1</b> (0.7)`],
      ['🥩', `Proteins: <b>RQ ≈ 0.9</b>`, `ಪ್ರೋಟೀನ್: <b>RQ ≈ 0.9</b>`, `प्रोटीन: <b>RQ ≈ 0.9</b>`]
    ],
    sec: [
      [ ['🌬️', `${O2} consumed, ${CO2} released`, `${O2} ಬಳಕೆ, ${CO2} ಬಿಡುಗಡೆ`, `${O2} उपयोग, ${CO2} मुक्त`],
        ['📊', `<b>RQ = ${CO2} evolved ÷ ${O2} consumed</b>`, `<b>RQ = ಬಿಡುಗಡೆಯಾದ ${CO2} ÷ ಬಳಸಿದ ${O2}</b>`, `<b>RQ = मुक्त ${CO2} ÷ उपयुक्त ${O2}</b>`],
        ['🏷️', `Also called <b>respiratory ratio</b>`, `<b>ಉಸಿರಾಟದ ಅನುಪಾತ</b> ಎಂದೂ ಕರೆಯುತ್ತಾರೆ`, `<b>श्वसन अनुपात</b> भी कहते हैं`] ],
      [ ['🍬', `Carbohydrates: equal ${CO2} and ${O2}`, `ಕಾರ್ಬೋಹೈಡ್ರೇಟ್: ಸಮ ${CO2} ಮತ್ತು ${O2}`, `कार्बोहाइड्रेट: बराबर ${CO2} और ${O2}`],
        ['🧪', `C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6${O2} → 6${CO2} + 6${H2O}`, `C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6${O2} → 6${CO2} + 6${H2O}`, `C<sub>6</sub>H<sub>12</sub>O<sub>6</sub> + 6${O2} → 6${CO2} + 6${H2O}`],
        ['NOTE', `<b>RQ = 6 ÷ 6 = 1</b>`, `<b>RQ = 6 ÷ 6 = 1</b>`, `<b>RQ = 6 ÷ 6 = 1</b>`] ],
      [ ['🧈', `Fats are <b>poor in oxygen</b>`, `ಕೊಬ್ಬಿನಲ್ಲಿ <b>ಆಮ್ಲಜನಕ ಕಡಿಮೆ</b>`, `वसा में <b>ऑक्सीजन कम</b>`],
        ['🌬️', `So they need <b>more ${O2}</b>`, `ಆದ್ದರಿಂದ <b>ಹೆಚ್ಚು ${O2}</b> ಬೇಕು`, `इसलिए <b>अधिक ${O2}</b> चाहिए`],
        ['🧪', `Tripalmitin: 102 ${CO2} ÷ 145 ${O2}`, `ಟ್ರೈಪಾಲ್ಮಿಟಿನ್: 102 ${CO2} ÷ 145 ${O2}`, `ट्राइपामिटिन: 102 ${CO2} ÷ 145 ${O2}`],
        ['NOTE', `<b>RQ = 0.7</b> (less than 1)`, `<b>RQ = 0.7</b> (1ಕ್ಕಿಂತ ಕಡಿಮೆ)`, `<b>RQ = 0.7</b> (1 से कम)`] ],
      [ ['🥩', `Proteins as the substrate`, `ಆಧಾರವಸ್ತುವಾಗಿ ಪ್ರೋಟೀನ್`, `क्रियाधार के रूप में प्रोटीन`],
        ['📊', `<b>RQ ≈ 0.9</b>`, `<b>RQ ≈ 0.9</b>`, `<b>RQ ≈ 0.9</b>`] ],
      [ ['🔀', `Usually <b>more than one</b> substrate`, `ಸಾಮಾನ್ಯವಾಗಿ <b>ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು</b> ಆಧಾರವಸ್ತು`, `सामान्यतः <b>एक से अधिक</b> क्रियाधार`],
        ['🚫', `Pure fats or proteins never used`, `ಶುದ್ಧ ಕೊಬ್ಬು ಅಥವಾ ಪ್ರೋಟೀನ್ ಎಂದೂ ಬಳಕೆಯಾಗದು`, `शुद्ध वसा या प्रोटीन कभी उपयोग नहीं`],
        ['🌾', `Cereal seeds: RQ ≈ <b>1</b>`, `ಧಾನ್ಯ ಬೀಜಗಳು: RQ ≈ <b>1</b>`, `अनाज के बीज: RQ ≈ <b>1</b>`],
        ['🥜', `Oil seeds: RQ ≈ <b>0.7</b>`, `ಎಣ್ಣೆ ಬೀಜಗಳು: RQ ≈ <b>0.7</b>`, `तिलहन बीज: RQ ≈ <b>0.7</b>`] ]
    ]
  }
};
