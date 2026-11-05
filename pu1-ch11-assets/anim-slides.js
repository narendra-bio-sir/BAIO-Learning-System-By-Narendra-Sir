/* PU-I Ch11 Animated deck: 12 step-by-step topics (EN/KN/HI). Drawn live with the BAIO drawing kit
   (anim/draw.js, anim/ps-draw.js, anim/diagrams.js). Each step shows/hides groups with in{n}/out{n} classes.
   Pictures are drawn in a 1600 x 1000 box and placed on the 1920-wide slide by G(). */
(function(){
const D = window.D, P = window.P, S = window.SCENE, K = P.K;
const ART = f => L => { D.defs = {}; P.L = L; const body = f(L); return `<defs>${Object.values(D.defs).join('')}</defs>` + body; };
const F = (a, b, s) => `<g class="in${a}${b != null ? ' out' + b : ''}">${s}</g>`;
const G = s => `<g transform="translate(304 90) scale(.82)">${s}</g>`;
const lab = (x, y, t, c, fs) => P.t(x, y, t, fs || 46, c || '#0b7f72', { halo: true, w: 800 });
const ring = (x, y, r) => `<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="#e0453a" stroke-width="7" stroke-dasharray="18 12"/>`;

const SL = [];
/* 1. photosynthesis overview */
SL.push({ title: T('Photosynthesis: <em>food from light</em>', 'ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ: <em>ಬೆಳಕಿನಿಂದ ಆಹಾರ</em>', 'प्रकाश संश्लेषण: <em>प्रकाश से भोजन</em>'), css: '',
  art: ART(L => G(F(0, null, P.sun(260, 240, 90) + P.ray(360, 300, 640, 470, '#f0a400') + P.plant(820, 920, 2.1)) +
    F(1, null, P.co2(1290, 430, 1.1) + D.arrow(1240, 450, 1060, 520, '#555', 6) + lab(1290, 510, 'CO₂', '#333') + D.arrow(820, 880, 820, 770, K.WATER, 6) + P.drop(900, 860, 22) + lab(980, 875, 'H₂O', '#174a6e')) +
    F(2, null, D.arrow(600, 640, 420, 700, K.O2, 6) + P.o2(360, 720, 1.1) + lab(360, 800, 'O₂', '#a8321e') + P.pill(1250, 700, 'C₆H₁₂O₆', K.SUGAR, { fs: 40, tc: '#5a4300' })) +
    F(3, null, `<rect x="100" y="20" width="1400" height="96" rx="24" fill="#fffdf6" stroke="#0b7f72" stroke-width="4"/>` + P.t(800, 84, '6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂', 50, '#0c1830')))),
  steps: [
    T('Green plants make their own food. They use the energy of sunlight, and this process is called photosynthesis.', 'ಹಸಿರು ಸಸ್ಯಗಳು ತಮ್ಮ ಆಹಾರವನ್ನು ತಾವೇ ತಯಾರಿಸುತ್ತವೆ. ಅವು ಸೂರ್ಯನ ಬೆಳಕಿನ ಶಕ್ತಿಯನ್ನು ಬಳಸುತ್ತವೆ, ಈ ಕ್ರಿಯೆಯೇ ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ.', 'हरे पौधे अपना भोजन स्वयं बनाते हैं। वे सूर्य के प्रकाश की ऊर्जा का उपयोग करते हैं, और इस प्रक्रिया को प्रकाश संश्लेषण कहते हैं।'),
    T('The leaf takes in carbon dioxide from the air, and the roots bring up water from the soil.', 'ಎಲೆ ಗಾಳಿಯಿಂದ ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ತೆಗೆದುಕೊಳ್ಳುತ್ತದೆ, ಬೇರುಗಳು ಮಣ್ಣಿನಿಂದ ನೀರನ್ನು ತರುತ್ತವೆ.', 'पत्ती हवा से कार्बन डाइऑक्साइड लेती है, और जड़ें मिट्टी से पानी लाती हैं।'),
    T('Light energy turns them into glucose, and oxygen is released into the air. This is the source of all our food and oxygen.', 'ಬೆಳಕಿನ ಶಕ್ತಿ ಅವನ್ನು ಗ್ಲೂಕೋಸ್ ಆಗಿ ಬದಲಿಸುತ್ತದೆ, ಆಮ್ಲಜನಕ ಗಾಳಿಗೆ ಬಿಡುಗಡೆಯಾಗುತ್ತದೆ. ನಮ್ಮ ಎಲ್ಲಾ ಆಹಾರ ಮತ್ತು ಆಮ್ಲಜನಕದ ಮೂಲ ಇದೇ.', 'प्रकाश ऊर्जा इन्हें ग्लूकोज़ में बदल देती है, और ऑक्सीजन हवा में निकलती है। यही हमारे सारे भोजन और ऑक्सीजन का स्रोत है।'),
    T('The correct equation: six carbon dioxide plus twelve water gives one glucose, six water and six oxygen.', 'ಸರಿಯಾದ ಸಮೀಕರಣ: ಆರು ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಮತ್ತು ಹನ್ನೆರಡು ನೀರು ಸೇರಿ ಒಂದು ಗ್ಲೂಕೋಸ್, ಆರು ನೀರು ಮತ್ತು ಆರು ಆಮ್ಲಜನಕ ನೀಡುತ್ತವೆ.', 'सही समीकरण: छह कार्बन डाइऑक्साइड और बारह पानी से एक ग्लूकोज़, छह पानी और छह ऑक्सीजन बनते हैं।')
  ] });
/* 2. Priestley and Ingenhousz */
SL.push({ title: T('Priestley\'s <em>bell jar</em>', 'ಪ್ರೀಸ್ಟ್ಲಿಯ <em>ಬೆಲ್ ಜಾರ್</em>', 'प्रीस्टले का <em>बेल जार</em>'), css: '',
  art: ART(L => G(F(0, null, P.jar(400, 820, 420, 560) + P.candle(330, 820, 1.2, false) + P.mouse(500, 820, .9, true) + P.t(400, 920, '✗', 70, '#c0392b')) +
    F(1, null, P.jar(1160, 820, 460, 600) + P.plant(1080, 820, 1.25) + P.candle(1240, 820, 1.1, true) + P.mouse(1310, 820, .75, false) + P.t(1160, 920, '✓', 70, '#2f8f3a')) +
    F(2, null, P.sun(1460, 160, 60) + P.ray(1400, 210, 1260, 330, '#f0a400') + lab(1160, 110, T('Ingenhousz: sunlight needed', 'ಇಂಜೆನ್‌ಹೌಸ್: ಸೂರ್ಯನ ಬೆಳಕು ಬೇಕು', 'इन्जेनहाउस: सूर्य का प्रकाश आवश्यक')[L], '#8a6508', 40)) +
    F(3, null, P.bubbles(1010, 470, 4, 14, 2) + P.bubbles(1130, 420, 4, 14, 6) + lab(800, 990, T('bubbles = oxygen from green parts', 'ಗುಳ್ಳೆಗಳು = ಹಸಿರು ಭಾಗಗಳ ಆಮ್ಲಜನಕ', 'बुलबुले = हरे भागों की ऑक्सीजन')[L], '#0b7f72', 40)))),
  steps: [
    T('In 1770 Joseph Priestley kept a burning candle and a mouse in closed bell jars. The candle went out and the mouse died.', '1770 ರಲ್ಲಿ ಜೋಸೆಫ್ ಪ್ರೀಸ್ಟ್ಲಿ ಮುಚ್ಚಿದ ಬೆಲ್ ಜಾರ್‌ಗಳಲ್ಲಿ ಉರಿಯುವ ಮೇಣದಬತ್ತಿ ಮತ್ತು ಇಲಿಯನ್ನು ಇಟ್ಟರು. ಮೇಣದಬತ್ತಿ ಆರಿತು, ಇಲಿ ಸತ್ತಿತು.', '1770 में जोसेफ प्रीस्टले ने बंद बेल जार में जलती मोमबत्ती और चूहा रखा। मोमबत्ती बुझ गई और चूहा मर गया।'),
    T('With a mint plant inside, the candle kept burning and the mouse lived. Plants restore the air.', 'ಒಳಗೆ ಪುದೀನ ಸಸ್ಯ ಇಟ್ಟಾಗ ಮೇಣದಬತ್ತಿ ಉರಿಯುತ್ತಲೇ ಇತ್ತು, ಇಲಿ ಬದುಕಿತು. ಸಸ್ಯಗಳು ಗಾಳಿಯನ್ನು ಶುದ್ಧಗೊಳಿಸುತ್ತವೆ.', 'अंदर पुदीने का पौधा रखने पर मोमबत्ती जलती रही और चूहा जीवित रहा। पौधे हवा को शुद्ध करते हैं।'),
    T('Jan Ingenhousz showed that this happens only in sunlight.', 'ಇದು ಸೂರ್ಯನ ಬೆಳಕಿನಲ್ಲಿ ಮಾತ್ರ ನಡೆಯುತ್ತದೆ ಎಂದು ಜಾನ್ ಇಂಜೆನ್‌ಹೌಸ್ ತೋರಿಸಿದರು.', 'जॉन इन्जेनहाउस ने दिखाया कि यह केवल सूर्य के प्रकाश में होता है।'),
    T('In an aquatic plant, small bubbles of oxygen formed only around the green parts, and only in bright light.', 'ಜಲಸಸ್ಯದಲ್ಲಿ ಆಮ್ಲಜನಕದ ಸಣ್ಣ ಗುಳ್ಳೆಗಳು ಹಸಿರು ಭಾಗಗಳ ಸುತ್ತ ಮಾತ್ರ, ಅದೂ ಪ್ರಕಾಶಮಾನ ಬೆಳಕಿನಲ್ಲಿ ಮಾತ್ರ ಉಂಟಾದವು.', 'जलीय पौधे में ऑक्सीजन के छोटे बुलबुले केवल हरे भागों के चारों ओर, और केवल तेज़ प्रकाश में बने।')
  ] });
/* 3. van Niel: oxygen from water */
SL.push({ title: T('Where does the <em>oxygen</em> come from?', '<em>ಆಮ್ಲಜನಕ</em> ಎಲ್ಲಿಂದ ಬರುತ್ತದೆ?', '<em>ऑक्सीजन</em> कहाँ से आती है?'), css: '',
  art: ART(L => G(F(0, null, P.box(140, 160, 1320, 220, '#e9f5d3', { flat: true, st: '#2f8f3a' }) + P.plant(300, 360, .62) + P.t(880, 255, '2H₂O + CO₂ → CH₂O + H₂O + O₂', 46, '#1d3b2f') + P.t(880, 325, P.w('Green plants'), 30, '#2f8f3a')) +
    F(1, null, P.box(140, 440, 1320, 220, '#f3ecfa', { flat: true, st: '#7a5a9a' }) + P.t(880, 535, '2H₂S + CO₂ → CH₂O + H₂O + 2S', 46, '#3b2a58') + P.t(880, 605, P.w('Sulphur bacteria'), 30, '#7a5a9a') + ring(1250, 520, 60)) +
    F(2, null, ring(600, 240, 70) + ring(1255, 240, 60) + P.parrow('M640,300 C800,400 1100,400 1230,300', '#e0453a', 6)) +
    F(3, null, lab(800, 800, T('¹⁸O in water → ¹⁸O₂ released (Ruben & Kamen)', 'ನೀರಿನ ¹⁸O → ¹⁸O₂ ಬಿಡುಗಡೆ (ರೂಬೆನ್ ಮತ್ತು ಕೇಮನ್)', 'पानी का ¹⁸O → ¹⁸O₂ मुक्त (रूबेन और केमन)')[L], '#8a6508', 44)))),
  steps: [
    T('In green plants, water is the hydrogen donor and oxygen is released.', 'ಹಸಿರು ಸಸ್ಯಗಳಲ್ಲಿ ನೀರು ಹೈಡ್ರೋಜನ್ ದಾನಿ, ಆಮ್ಲಜನಕ ಬಿಡುಗಡೆಯಾಗುತ್ತದೆ.', 'हरे पौधों में पानी हाइड्रोजन दाता है और ऑक्सीजन मुक्त होती है।'),
    T('Van Niel studied sulphur bacteria. They use hydrogen sulphide, and they release sulphur, not oxygen.', 'ವಾನ್ ನೀಲ್ ಗಂಧಕ ಬ್ಯಾಕ್ಟೀರಿಯಾಗಳನ್ನು ಅಧ್ಯಯನ ಮಾಡಿದರು. ಅವು ಹೈಡ್ರೋಜನ್ ಸಲ್ಫೈಡ್ ಬಳಸಿ ಗಂಧಕವನ್ನು ಬಿಡುತ್ತವೆ, ಆಮ್ಲಜನಕವನ್ನಲ್ಲ.', 'वॉन नील ने गंधक जीवाणुओं का अध्ययन किया। वे हाइड्रोजन सल्फाइड लेकर गंधक छोड़ते हैं, ऑक्सीजन नहीं।'),
    T('So the oxygen given out by plants must come from water, and not from carbon dioxide.', 'ಆದ್ದರಿಂದ ಸಸ್ಯಗಳು ಬಿಡುವ ಆಮ್ಲಜನಕ ನೀರಿನಿಂದಲೇ ಬರಬೇಕು, ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್‌ನಿಂದಲ್ಲ.', 'इसलिए पौधों द्वारा छोड़ी गई ऑक्सीजन पानी से आनी चाहिए, कार्बन डाइऑक्साइड से नहीं।'),
    T('Heavy oxygen experiments later proved it: water labelled with oxygen eighteen gave labelled oxygen gas.', 'ಭಾರ ಆಮ್ಲಜನಕ ಪ್ರಯೋಗಗಳು ನಂತರ ಇದನ್ನು ಸಾಬೀತುಪಡಿಸಿದವು: ಆಮ್ಲಜನಕ ಹದಿನೆಂಟು ಗುರುತಿನ ನೀರು ಗುರುತಿನ ಆಮ್ಲಜನಕ ಅನಿಲ ನೀಡಿತು.', 'भारी ऑक्सीजन प्रयोगों ने बाद में इसे सिद्ध किया: ऑक्सीजन अठारह से चिह्नित पानी से चिह्नित ऑक्सीजन गैस मिली।')
  ] });
/* 4. chloroplast */
SL.push({ title: T('Inside the <em>chloroplast</em>', '<em>ಹರಿತ್ತಿಲವ</em>ದ ಒಳಗೆ', '<em>हरितलवक</em> के अंदर'), css: '',
  art: ART(L => { const G2 = P.cpLayout(620, 520, 520, 290).grana; return G(F(0, null, P.chloroplast(620, 520, 520, 290)) +
    F(1, null, ring(G2[2][0], G2[2][1] - 60, 110) + lab(620, 160, T('Thylakoids (grana): light reaction', 'ಥೈಲಕಾಯ್ಡ್ (ಗ್ರಾನಾ): ಬೆಳಕಿನ ಕ್ರಿಯೆ', 'थायलाकॉइड (ग्रैना): प्रकाश अभिक्रिया')[L], '#2f6a1e', 42)) +
    F(2, null, ring(400, 700, 80) + lab(620, 900, T('Stroma: enzymes fix CO₂ into sugar', 'ಸ್ಟ್ರೋಮಾ: ಕಿಣ್ವಗಳು CO₂ ಅನ್ನು ಸಕ್ಕರೆಯಾಗಿಸುತ್ತವೆ', 'स्ट्रोमा: एंजाइम CO₂ को शर्करा में बदलते हैं')[L], '#8a6508', 42)) +
    F(3, null, P.pill(1360, 380, 'ATP', K.ATP, { fs: 40 }) + P.pill(1360, 480, 'NADPH', K.NADPH, { fs: 40 }) + D.arrow(1360, 530, 1360, 640, '#555', 7) + P.pill(1360, 690, P.w('Sugar'), K.SUGAR, { fs: 40, tc: '#5a4300' }))); }),
  steps: [
    T('Photosynthesis happens in the chloroplasts of mesophyll cells. Each chloroplast has two membranes.', 'ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ ಪತ್ರಮಧ್ಯಕ ಕೋಶಗಳ ಹರಿತ್ತಿಲವಗಳಲ್ಲಿ ನಡೆಯುತ್ತದೆ. ಪ್ರತಿ ಹರಿತ್ತಿಲವಕ್ಕೆ ಎರಡು ಪೊರೆಗಳಿವೆ.', 'प्रकाश संश्लेषण पर्णमध्योतक कोशिकाओं के हरितलवक में होता है। हर हरितलवक में दो झिल्लियाँ होती हैं।'),
    T('The thylakoid stacks, the grana, trap light and make ATP and NADPH. This is the light reaction.', 'ಥೈಲಕಾಯ್ಡ್ ರಾಶಿಗಳು, ಗ್ರಾನಾ, ಬೆಳಕನ್ನು ಹಿಡಿದು ATP ಮತ್ತು NADPH ತಯಾರಿಸುತ್ತವೆ. ಇದೇ ಬೆಳಕಿನ ಕ್ರಿಯೆ.', 'थायलाकॉइड के ढेर, ग्रैना, प्रकाश पकड़कर ATP और NADPH बनाते हैं। यही प्रकाश अभिक्रिया है।'),
    T('The fluid stroma has the enzymes that fix carbon dioxide into sugar.', 'ದ್ರವ ಸ್ಟ್ರೋಮಾದಲ್ಲಿ ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಅನ್ನು ಸಕ್ಕರೆಯಾಗಿ ಸ್ಥಿರೀಕರಿಸುವ ಕಿಣ್ವಗಳಿವೆ.', 'तरल स्ट्रोमा में वे एंजाइम हैं जो कार्बन डाइऑक्साइड को शर्करा में स्थिर करते हैं।'),
    T('ATP and NADPH from the grana are used in the stroma to make sugar. This is a clear division of labour.', 'ಗ್ರಾನಾದ ATP ಮತ್ತು NADPH ಸ್ಟ್ರೋಮಾದಲ್ಲಿ ಸಕ್ಕರೆ ತಯಾರಿಸಲು ಬಳಕೆಯಾಗುತ್ತವೆ. ಇದು ಸ್ಪಷ್ಟ ಕಾರ್ಯ ವಿಭಜನೆ.', 'ग्रैना के ATP और NADPH स्ट्रोमा में शर्करा बनाने में उपयोग होते हैं। यह स्पष्ट कार्य विभाजन है।')
  ] });
/* 5. pigments and LHC */
SL.push({ title: T('Pigments and the <em>light harvesting complex</em>', 'ವರ್ಣದ್ರವ್ಯಗಳು ಮತ್ತು <em>ಬೆಳಕು ಸಂಗ್ರಹಣಾ ಸಂಕೀರ್ಣ</em>', 'वर्णक और <em>प्रकाश संग्राही संकुल</em>'), css: '',
  art: ART(L => G(F(0, 1, S.chromatogram()) + F(1, null, S.lhc({ noRay: true, noOut: true })) +
    F(2, null, S.lhc({ noOut: true }).replace(/^[\s\S]*?(<path d="M180)/, '$1')) + F(3, null, ring(760, 520, 60) + D.arrow(800, 500, 1240, 300, '#e0a000', 8) + P.pill(1330, 270, P.w('Acceptor'), '#8a6fd8', { fs: 28 }) + P.el(1180, 330, 20)))),
  steps: [
    T('Paper chromatography separates four leaf pigments: chlorophyll a, chlorophyll b, xanthophylls and carotenoids.', 'ಕಾಗದ ವರ್ಣಲೇಖನ ಎಲೆಯ ನಾಲ್ಕು ವರ್ಣದ್ರವ್ಯಗಳನ್ನು ಬೇರ್ಪಡಿಸುತ್ತದೆ: ಪತ್ರಹರಿತ್ತು a, ಪತ್ರಹರಿತ್ತು b, ಜ್ಯಾಂಥೋಫಿಲ್ ಮತ್ತು ಕ್ಯಾರೊಟಿನಾಯ್ಡ್.', 'पेपर क्रोमैटोग्राफी पत्ती के चार वर्णक अलग करती है: पर्णहरित a, पर्णहरित b, ज़ैंथोफिल और कैरोटिनॉइड।'),
    T('Hundreds of pigment molecules bound to proteins form a light harvesting complex, the antenna.', 'ಪ್ರೋಟೀನ್‌ಗಳಿಗೆ ಬಂಧಿತ ನೂರಾರು ವರ್ಣದ್ರವ್ಯ ಅಣುಗಳು ಬೆಳಕು ಸಂಗ್ರಹಣಾ ಸಂಕೀರ್ಣ, ಅಂದರೆ ಆಂಟೆನಾ ರೂಪಿಸುತ್ತವೆ.', 'प्रोटीनों से बंधे सैकड़ों वर्णक अणु प्रकाश संग्राही संकुल, यानी ऐंटेना बनाते हैं।'),
    T('Light falling on any antenna pigment is passed inwards, from pigment to pigment.', 'ಯಾವುದೇ ಆಂಟೆನಾ ವರ್ಣದ್ರವ್ಯದ ಮೇಲೆ ಬಿದ್ದ ಬೆಳಕು ಒಂದು ವರ್ಣದ್ರವ್ಯದಿಂದ ಇನ್ನೊಂದಕ್ಕೆ ಒಳಗೆ ಸಾಗುತ್ತದೆ.', 'किसी भी ऐंटेना वर्णक पर पड़ा प्रकाश एक वर्णक से दूसरे वर्णक तक अंदर की ओर जाता है।'),
    T('It reaches the reaction centre, a single chlorophyll a: P700 in photosystem one and P680 in photosystem two. It gives away an excited electron.', 'ಅದು ಕ್ರಿಯಾಕೇಂದ್ರವನ್ನು ತಲುಪುತ್ತದೆ, ಅದು ಒಂದೇ ಪತ್ರಹರಿತ್ತು a: ದ್ಯುತಿವ್ಯವಸ್ಥೆ ಒಂದರಲ್ಲಿ P700, ಎರಡರಲ್ಲಿ P680. ಅದು ಉದ್ರೇಕಗೊಂಡ ಎಲೆಕ್ಟ್ರಾನ್ ನೀಡುತ್ತದೆ.', 'यह अभिक्रिया केंद्र तक पहुँचता है, जो एक पर्णहरित a है: प्रकाश तंत्र एक में P700 और दो में P680। यह एक उत्तेजित इलेक्ट्रॉन देता है।')
  ] });
/* 6. Z scheme */
SL.push({ title: T('The <em>Z scheme</em>, step by step', '<em>Z ಯೋಜನೆ</em>, ಹಂತ ಹಂತವಾಗಿ', '<em>Z योजना</em>, क्रम से'), css: '',
  art: ART(L => { const e = '#e0a000'; return G(
    F(0, null, P.ray(150, 470, 262, 640, '#f0a400') + P.t(170, 440, '680 nm', 26, '#a86b00') + P.complex(340, 700, 180, 120, K.PS2, 'PS II\nP680', { fs: 28 }) + D.arrow(372, 636, 440, 300, e, 9) + P.pill(470, 262, P.w('Acceptor'), '#8a6fd8', { fs: 24 })) +
    F(1, null, P.box(150, 820, 300, 76, '#d6ecfb', { flat: true, st: '#4a90c2' }) + P.t(300, 868, '2H₂O → 4H⁺ + O₂ + 4e⁻', 25, '#174a6e') + D.arrow(320, 812, 334, 770, '#2b6fa8', 5) + P.bubbles(500, 800, 3, 14, 3)) +
    F(2, null, D.arrow(510, 292, 585, 352, e, 7) + P.pill(620, 380, 'PQ', K.PQ, { fs: 24 }) + D.arrow(650, 410, 710, 448, e, 7) + P.complex(760, 482, 150, 84, K.CYT, 'Cyt b₆f', { fs: 24 }) + D.arrow(802, 526, 856, 580, e, 7) + P.pill(888, 604, 'PC', K.PC, { fs: 24 }) + D.arrow(918, 630, 950, 650, e, 7) + P.curve(690, 520, 640, 600, 600, 640, '#c96d10', 4) + P.pill(560, 666, 'ATP', K.ATP, { fs: 24 })) +
    F(3, null, P.complex(1040, 700, 180, 120, K.PS1, 'PS I\nP700', { fs: 28 }) + P.ray(1280, 900, 1120, 756, '#f0a400') + P.t(1320, 930, '700 nm', 26, '#a86b00') + D.arrow(1060, 636, 1110, 240, e, 9) + P.pill(1140, 200, P.w('Acceptor'), '#e07a5f', { fs: 24 })) +
    F(4, null, D.arrow(1190, 228, 1268, 300, e, 7) + P.complex(1320, 344, 200, 90, K.NR, 'NADP\nreductase', { fs: 22 }) + D.arrow(1340, 392, 1380, 448, e, 7) + P.box(1230, 456, 330, 70, '#e3eefb', { flat: true, st: K.NR }) + P.t(1395, 501, 'NADP⁺ + H⁺ → NADPH', 25, '#1d4f86'))); }),
  steps: [
    T('Red light of 680 nanometres excites photosystem two. Its electron jumps up to a primary acceptor.', '680 ನ್ಯಾನೋಮೀಟರ್ ಕೆಂಪು ಬೆಳಕು ದ್ಯುತಿವ್ಯವಸ್ಥೆ ಎರಡನ್ನು ಉದ್ರೇಕಿಸುತ್ತದೆ. ಅದರ ಎಲೆಕ್ಟ್ರಾನ್ ಪ್ರಾಥಮಿಕ ಸ್ವೀಕಾರಕಕ್ಕೆ ಜಿಗಿಯುತ್ತದೆ.', '680 नैनोमीटर का लाल प्रकाश प्रकाश तंत्र दो को उत्तेजित करता है। उसका इलेक्ट्रॉन प्राथमिक ग्राही तक उछलता है।'),
    T('The lost electrons are replaced from water. Water splits into protons, oxygen and electrons, with manganese and chlorine helping.', 'ಕಳೆದುಹೋದ ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳನ್ನು ನೀರು ಭರ್ತಿ ಮಾಡುತ್ತದೆ. ಮ್ಯಾಂಗನೀಸ್ ಮತ್ತು ಕ್ಲೋರಿನ್ ಸಹಾಯದಿಂದ ನೀರು ಪ್ರೋಟಾನ್, ಆಮ್ಲಜನಕ ಮತ್ತು ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳಾಗಿ ವಿಭಜನೆಯಾಗುತ್ತದೆ.', 'खोए इलेक्ट्रॉनों की पूर्ति पानी करता है। मैंगनीज़ और क्लोरीन की सहायता से पानी प्रोटॉन, ऑक्सीजन और इलेक्ट्रॉनों में टूटता है।'),
    T('The electron then moves downhill through the electron transport chain of cytochromes to photosystem one. Energy released here helps make ATP.', 'ನಂತರ ಎಲೆಕ್ಟ್ರಾನ್ ಸೈಟೋಕ್ರೋಮ್‌ಗಳ ಎಲೆಕ್ಟ್ರಾನ್ ಸಾಗಣೆ ಸರಪಳಿಯ ಮೂಲಕ ಇಳಿಜಾರಿನಲ್ಲಿ ದ್ಯುತಿವ್ಯವಸ್ಥೆ ಒಂದಕ್ಕೆ ಹೋಗುತ್ತದೆ. ಇಲ್ಲಿ ಬಿಡುಗಡೆಯಾದ ಶಕ್ತಿ ATP ತಯಾರಿಕೆಗೆ ಸಹಾಯಕ.', 'फिर इलेक्ट्रॉन साइटोक्रोमों की इलेक्ट्रॉन परिवहन शृंखला से होकर ढलान पर प्रकाश तंत्र एक तक जाता है। यहाँ मुक्त ऊर्जा ATP बनाने में सहायक है।'),
    T('Light of 700 nanometres excites photosystem one, and the electron jumps up again to a second acceptor.', '700 ನ್ಯಾನೋಮೀಟರ್ ಬೆಳಕು ದ್ಯುತಿವ್ಯವಸ್ಥೆ ಒಂದನ್ನು ಉದ್ರೇಕಿಸುತ್ತದೆ, ಎಲೆಕ್ಟ್ರಾನ್ ಮತ್ತೆ ಎರಡನೇ ಸ್ವೀಕಾರಕಕ್ಕೆ ಜಿಗಿಯುತ್ತದೆ.', '700 नैनोमीटर का प्रकाश प्रकाश तंत्र एक को उत्तेजित करता है, और इलेक्ट्रॉन फिर दूसरे ग्राही तक उछलता है।'),
    T('Finally NADP reductase uses the electrons to reduce NADP plus into NADPH. The path looks like the letter Z.', 'ಕೊನೆಗೆ NADP ರಿಡಕ್ಟೇಸ್ ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳನ್ನು ಬಳಸಿ NADP ಅನ್ನು NADPH ಆಗಿ ಅಪಕರ್ಷಿಸುತ್ತದೆ. ಈ ಮಾರ್ಗ Z ಅಕ್ಷರದಂತೆ ಕಾಣುತ್ತದೆ.', 'अंत में NADP रिडक्टेज़ इलेक्ट्रॉनों से NADP को NADPH में अपचयित करता है। यह मार्ग Z अक्षर जैसा दिखता है।')
  ] });
/* 7. cyclic */
SL.push({ title: T('<em>Cyclic</em> photophosphorylation', '<em>ಚಕ್ರೀಯ</em> ದ್ಯುತಿ ಫಾಸ್ಫೊರಿಲೀಕರಣ', '<em>चक्रीय</em> प्रकाश फॉस्फोरिलीकरण'), css: '',
  art: ART(L => { const e = '#e0a000'; return G(F(0, null, P.ray(220, 440, 430, 640, '#c0392b') + P.t(240, 410, '> 680 nm', 28, '#a8321e') + P.complex(540, 690, 200, 130, K.PS1, 'PS I\nP700', { fs: 30 })) +
    F(1, null, D.arrow(560, 620, 620, 280, e, 10) + P.pill(650, 240, P.w('Acceptor'), '#e07a5f', { fs: 26 })) +
    F(2, null, P.parrow('M720,250 C900,240 1000,300 1030,380', e, 8) + P.complex(1050, 440, 170, 96, K.CYT, 'Cyt b₆f', { fs: 26 }) + P.parrow('M1040,494 C1020,560 980,600 940,620', e, 8) + P.pill(900, 640, 'PC', K.PC, { fs: 26 }) + P.parrow('M860,660 C760,690 700,700 650,700', e, 8) + P.curve(1140, 440, 1220, 440, 1260, 470, '#c96d10', 5) + P.box(1250, 470, 270, 70, '#fde8c8', { flat: true, st: K.ATP }) + P.t(1385, 515, 'ADP + Pi → ATP', 26, '#7a4300')) +
    F(3, null, P.box(1150, 160, 360, 70, '#f1f1f1', { flat: true, st: '#999', dash: '10 8' }) + P.t(1330, 205, P.w('no NADPH, no O₂'), 26, '#888'))); }),
  steps: [
    T('Sometimes only photosystem one works, for example when only light above 680 nanometres is available.', 'ಕೆಲವೊಮ್ಮೆ ದ್ಯುತಿವ್ಯವಸ್ಥೆ ಒಂದು ಮಾತ್ರ ಕೆಲಸ ಮಾಡುತ್ತದೆ, ಉದಾಹರಣೆಗೆ 680 ನ್ಯಾನೋಮೀಟರ್ ಮೀರಿದ ಬೆಳಕು ಮಾತ್ರ ಇದ್ದಾಗ.', 'कभी-कभी केवल प्रकाश तंत्र एक काम करता है, जैसे जब केवल 680 नैनोमीटर से अधिक का प्रकाश उपलब्ध हो।'),
    T('Its excited electron goes up to the acceptor.', 'ಅದರ ಉದ್ರೇಕಗೊಂಡ ಎಲೆಕ್ಟ್ರಾನ್ ಸ್ವೀಕಾರಕಕ್ಕೆ ಹೋಗುತ್ತದೆ.', 'उसका उत्तेजित इलेक्ट्रॉन ग्राही तक जाता है।'),
    T('Instead of going to NADP, it cycles back to photosystem one through the electron transport chain, and ATP is made on the way.', 'NADP ಗೆ ಹೋಗುವ ಬದಲು ಅದು ಎಲೆಕ್ಟ್ರಾನ್ ಸಾಗಣೆ ಸರಪಳಿಯ ಮೂಲಕ ದ್ಯುತಿವ್ಯವಸ್ಥೆ ಒಂದಕ್ಕೆ ಮರಳುತ್ತದೆ, ದಾರಿಯಲ್ಲಿ ATP ತಯಾರಾಗುತ್ತದೆ.', 'NADP तक जाने के बजाय यह इलेक्ट्रॉन परिवहन शृंखला से होकर प्रकाश तंत्र एक में लौट आता है, और रास्ते में ATP बनता है।'),
    T('So cyclic flow gives only ATP: no NADPH and no oxygen. It happens in the stroma lamellae.', 'ಆದ್ದರಿಂದ ಚಕ್ರೀಯ ಹರಿವು ATP ಮಾತ್ರ ನೀಡುತ್ತದೆ: NADPH ಇಲ್ಲ, ಆಮ್ಲಜನಕ ಇಲ್ಲ. ಇದು ಸ್ಟ್ರೋಮಾ ಲ್ಯಾಮೆಲ್ಲೆಯಲ್ಲಿ ನಡೆಯುತ್ತದೆ.', 'इसलिए चक्रीय प्रवाह केवल ATP देता है: न NADPH, न ऑक्सीजन। यह स्ट्रोमा लैमेली में होता है।')
  ] });
/* 8. chemiosmosis */
SL.push({ title: T('Chemiosmosis: the <em>proton dam</em>', 'ರಸಾಯನಾಭಿಸರಣ: <em>ಪ್ರೋಟಾನ್ ಅಣೆಕಟ್ಟು</em>', 'रसोपरासरण: <em>प्रोटॉन बाँध</em>'), css: '',
  art: ART(L => { const y = 470, th = 90; const R = D.rnd(9); let hp = ''; for (let i = 0; i < 22; i++){ const hx = 120 + R() * 1340, hy = 640 + R() * 220; if (Math.abs(hx - 1320) < 70 || (Math.abs(hx - 315) < 170 && hy < 780) || Math.abs(hx - 610) < 40 || Math.abs(hx - 740) < 40) continue; hp += P.hp(hx, hy, 15); }
    return G(F(0, null, `<rect x="60" y="140" width="1480" height="${y - 140}" rx="24" fill="#eef7df"/><rect x="60" y="${y + th}" width="1480" height="${930 - y - th}" rx="24" fill="#fff4d6"/>` + P.t(90, 186, P.w('STROMA (low H⁺)'), 28, '#2d5512', { a: 'start' }) + P.t(90, 910, P.w('LUMEN (high H⁺)'), 28, '#8a5a00', { a: 'start' }) + P.membrane(60, 1540, y, th) + P.complex(310, y + th / 2, 160, 190, K.PS2, 'PS II', { fs: 28 }) + P.complex(610, y + th / 2, 130, 170, K.CYT, 'Cyt\nb₆f', { fs: 24 }) + P.complex(880, y + th / 2, 160, 190, K.PS1, 'PS I', { fs: 28 }) + P.complex(1050, y - 60, 170, 80, K.NR, 'NADP\nreductase', { fs: 20 }) + P.atpSynthase(1320, y, th, 1.05)) +
      F(1, null, P.box(170, 700, 290, 64, '#d6ecfb', { flat: true, st: '#4a90c2' }) + P.t(315, 742, '2H₂O → 4H⁺ + O₂', 25, '#174a6e') + P.hp(610, 250, 18) + D.arrow(610, 272, 610, 372, '#c98a10', 5) + D.arrow(610, 660, 610, 720, '#c98a10', 5) + P.hp(610, 744, 18) + hp) +
      F(2, null, D.arrow(1320, 860, 1320, y + th + 10, '#c98a10', 9) + ring(1320, 700, 90)) +
      F(3, null, D.arrow(1395, 330, 1450, 270, '#c98a10', 6) + P.box(1380, 196, 150, 60, '#fde8c8', { flat: true, st: K.ATP }) + P.t(1455, 236, 'ATP', 30, '#7a4300') + lab(1060, 120, '3 H⁺ → 1 ATP', '#8a6508', 44))); }),
  steps: [
    T('The thylakoid membrane holds the two photosystems, the cytochrome complex and ATP synthase. The lumen is inside, the stroma outside.', 'ಥೈಲಕಾಯ್ಡ್ ಪೊರೆಯಲ್ಲಿ ಎರಡು ದ್ಯುತಿವ್ಯವಸ್ಥೆಗಳು, ಸೈಟೋಕ್ರೋಮ್ ಸಂಕೀರ್ಣ ಮತ್ತು ATP ಸಿಂಥೇಸ್ ಇವೆ. ಒಳಗೆ ಲ್ಯೂಮೆನ್, ಹೊರಗೆ ಸ್ಟ್ರೋಮಾ.', 'थायलाकॉइड झिल्ली में दोनों प्रकाश तंत्र, साइटोक्रोम संकुल और ATP सिंथेज़ हैं। अंदर ल्यूमेन है, बाहर स्ट्रोमा।'),
    T('Water splitting inside and proton pumping by the carriers pile up protons in the lumen. The lumen becomes acidic.', 'ಒಳಗೆ ನೀರಿನ ವಿಭಜನೆ ಮತ್ತು ವಾಹಕಗಳ ಪ್ರೋಟಾನ್ ಪಂಪಿಂಗ್ ಲ್ಯೂಮೆನ್‌ನಲ್ಲಿ ಪ್ರೋಟಾನ್‌ಗಳನ್ನು ಸಂಗ್ರಹಿಸುತ್ತವೆ. ಲ್ಯೂಮೆನ್ ಆಮ್ಲೀಯವಾಗುತ್ತದೆ.', 'अंदर जल विघटन और वाहकों द्वारा प्रोटॉन पंपिंग से ल्यूमेन में प्रोटॉन जमा होते हैं। ल्यूमेन अम्लीय हो जाता है।'),
    T('Protons can return to the stroma only through the CF zero channel of ATP synthase.', 'ಪ್ರೋಟಾನ್‌ಗಳು ATP ಸಿಂಥೇಸ್‌ನ CF ಸೊನ್ನೆ ನಾಳದ ಮೂಲಕ ಮಾತ್ರ ಸ್ಟ್ರೋಮಾಗೆ ಮರಳಬಲ್ಲವು.', 'प्रोटॉन केवल ATP सिंथेज़ की CF शून्य नलिका से होकर स्ट्रोमा में लौट सकते हैं।'),
    T('This flow changes the shape of CF one, which joins ADP and phosphate into ATP: about one ATP for every three protons.', 'ಈ ಹರಿವು CF ಒಂದರ ಆಕಾರ ಬದಲಿಸುತ್ತದೆ, ಅದು ADP ಮತ್ತು ಫಾಸ್ಫೇಟ್ ಸೇರಿಸಿ ATP ಮಾಡುತ್ತದೆ: ಸುಮಾರು ಮೂರು ಪ್ರೋಟಾನ್‌ಗೆ ಒಂದು ATP.', 'यह प्रवाह CF एक का आकार बदलता है, जो ADP और फॉस्फेट जोड़कर ATP बनाता है: लगभग तीन प्रोटॉन पर एक ATP।')
  ] });
/* 9. Calvin cycle */
SL.push({ title: T('The <em>Calvin cycle</em>', '<em>ಕೆಲ್ವಿನ್ ಚಕ್ರ</em>', '<em>केल्विन चक्र</em>'), css: '',
  art: ART(L => { const cx = 800, cy = 560, r = 280; const [ax, ay] = P.pt(cx, cy, r, -60), [bx, by] = P.pt(cx, cy, r, 60), [tx, ty] = P.pt(cx, cy, r, 180), [r1x, r1y] = P.pt(cx, cy, r, 100), [r2x, r2y] = P.pt(cx, cy, r, 140), [g1x, g1y] = P.pt(cx, cy, r, 250);
    return G(F(0, null, `<circle cx="${cx}" cy="${cy}" r="118" fill="#fffaf0" stroke="#e3d6b6" stroke-width="3"/>` + P.t(cx, cy - 6, P.w('Calvin\ncycle'), 34, '#1d3b2f') + P.pill(ax, ay, 'RuBP (5C)', '#2f8f3a', { fs: 28 }) + P.box(cx - 120, 150, 240, 66, '#eef2f5', { flat: true, st: '#6f7f8f' }) + P.t(cx, 194, 'CO₂ + H₂O', 30, '#333') + D.arrow(cx, 220, cx, 272, '#555', 6) + P.arc(cx, cy, r, -44, 44, '#2f8f3a', 10) + P.pill(cx, 330, 'RuBisCO', '#8a5a2a', { fs: 24 }) + P.pill(bx, by, '3-PGA (3C)', '#2f8f3a', { fs: 28 })) +
      F(1, null, P.arc(cx, cy, r, 76, 164, '#2b6fa8', 10) + P.pill(tx, ty, P.w('Triose phosphate'), '#b88a12', { fs: 26 }) + P.pill(1330, 470, 'ATP', K.ATP, { fs: 26 }) + P.curve(1300, 494, 1180, 520, r1x + 8, r1y - 6, '#c96d10', 4) + P.pill(1330, 720, 'NADPH', K.NADPH, { fs: 26 }) + P.curve(1280, 742, 1150, 760, r2x + 8, r2y - 4, '#2b6fa8', 4)) +
      F(2, null, P.arc(cx, cy, r, 196, 284, '#b86a12', 10) + P.pill(260, 760, 'ATP', K.ATP, { fs: 26 }) + P.curve(300, 740, 400, 700, g1x - 8, g1y + 6, '#c96d10', 4)) +
      F(3, null, D.arrow(cx, ty + 28, cx, ty + 74, '#b88a12', 6) + P.box(cx - 150, ty + 78, 300, 64, '#fdf1c8', { flat: true, st: '#c49a1a' }) + P.t(cx, ty + 120, P.w('Sucrose, starch'), 26, '#6b4e00') + lab(1330, 960, '6 CO₂ · 18 ATP · 12 NADPH', '#8a6508', 40))); }),
  steps: [
    T('Carboxylation: RuBP, a five carbon sugar, takes up carbon dioxide with the enzyme RuBisCO and gives two molecules of 3-PGA.', 'ಕಾರ್ಬಾಕ್ಸಿಲೀಕರಣ: ಐದು ಇಂಗಾಲದ ಸಕ್ಕರೆ RuBP, RuBisCO ಕಿಣ್ವದೊಂದಿಗೆ ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಸ್ವೀಕರಿಸಿ ಎರಡು ಅಣು 3-PGA ನೀಡುತ್ತದೆ.', 'कार्बोक्सिलीकरण: पाँच कार्बन वाली शर्करा RuBP, RuBisCO एंजाइम की सहायता से कार्बन डाइऑक्साइड लेकर 3-PGA के दो अणु देती है।'),
    T('Reduction: using ATP and NADPH, 3-PGA is reduced to triose phosphate, the sugar.', 'ಅಪಕರ್ಷಣ: ATP ಮತ್ತು NADPH ಬಳಸಿ 3-PGA ಟ್ರಯೋಸ್ ಫಾಸ್ಫೇಟ್ ಎಂಬ ಸಕ್ಕರೆಯಾಗಿ ಅಪಕರ್ಷಿಸಲ್ಪಡುತ್ತದೆ.', 'अपचयन: ATP और NADPH से 3-PGA ट्रायोज़ फॉस्फेट नामक शर्करा में अपचयित होता है।'),
    T('Regeneration: with one more ATP, RuBP is rebuilt so the cycle keeps going.', 'ಪುನರುತ್ಪಾದನೆ: ಇನ್ನೊಂದು ATP ಬಳಸಿ RuBP ಮರುನಿರ್ಮಾಣವಾಗುತ್ತದೆ, ಹಾಗಾಗಿ ಚಕ್ರ ಮುಂದುವರಿಯುತ್ತದೆ.', 'पुनर्जनन: एक और ATP से RuBP फिर बनता है, ताकि चक्र चलता रहे।'),
    T('Each carbon dioxide needs three ATP and two NADPH. One glucose needs six turns: eighteen ATP and twelve NADPH.', 'ಪ್ರತಿ ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್‌ಗೆ ಮೂರು ATP ಮತ್ತು ಎರಡು NADPH ಬೇಕು. ಒಂದು ಗ್ಲೂಕೋಸ್‌ಗೆ ಆರು ಸುತ್ತು: ಹದಿನೆಂಟು ATP ಮತ್ತು ಹನ್ನೆರಡು NADPH.', 'हर कार्बन डाइऑक्साइड के लिए तीन ATP और दो NADPH चाहिए। एक ग्लूकोज़ के लिए छह चक्कर: अठारह ATP और बारह NADPH।')
  ] });
/* 10. C4 pathway */
SL.push({ title: T('The <em>C₄ pathway</em>', '<em>C₄ ಮಾರ್ಗ</em>', '<em>C₄ पथ</em>'), css: '',
  art: ART(L => G(F(0, null, P.cell(60, 200, 660, 680, { cp: 20, c: '#dcedbb', cpr: 24 }) + P.cell(880, 200, 660, 680, { cp: 30, wall: 18, c: '#bcd690', st: '#4a7a26', cpr: 28 }) + P.t(390, 930, P.w('Mesophyll cell'), 32, '#3d6a1e') + P.t(1210, 930, P.w('Bundle sheath cell'), 32, '#2d5512')) +
    F(1, null, P.co2(370, 130, 1) + D.arrow(370, 160, 370, 388, '#555', 6) + P.pill(200, 420, 'PEP (3C)', '#2f8f3a', { fs: 26 }) + D.arrow(260, 410, 470, 410, '#2f8f3a', 7) + P.pill(300, 470, 'PEPcase', '#8a5a2a', { fs: 22 }) + P.pill(560, 420, 'OAA (4C)', '#2f8f3a', { fs: 26 }) + D.arrow(560, 452, 560, 520, '#2f8f3a', 7) + P.box(430, 528, 260, 96, '#e9f5d3', { flat: true, st: '#2f8f3a' }) + P.t(560, 568, P.w('Malic acid /\naspartic acid'), 24, '#1d5a1d')) +
    F(2, null, D.arrow(690, 576, 1010, 576, '#2f8f3a', 9) + P.t(800, 540, P.w('C₄ acid'), 28, '#1d5a1d', { halo: true }) + P.co2(1110, 470, .9) + D.arrow(1060, 560, 1100, 500, '#555', 6) + D.arrow(1150, 470, 1210, 470, '#555', 6) + `<circle cx="1320" cy="470" r="100" fill="#fff6dc" stroke="#2f8f3a" stroke-width="6"/>` + P.arc(1320, 470, 100, 20, 330, '#2f8f3a', 6) + P.t(1320, 462, P.w('Calvin\ncycle'), 26, '#1d3b2f') + D.arrow(1320, 572, 1320, 690, '#b88a12', 6) + P.box(1215, 694, 210, 60, '#fdf1c8', { flat: true, st: '#c49a1a' }) + P.t(1320, 734, P.w('Sugar'), 26, '#6b4e00')) +
    F(3, null, P.box(960, 640, 210, 96, '#f4f0e0', { flat: true, st: '#8a7a40' }) + P.t(1065, 680, P.w('C₃ acid\n(pyruvate)'), 24, '#5a4a10') + D.arrow(1040, 600, 1050, 636, '#8a7a40', 5) + P.parrow('M960,700 C800,700 700,800 520,800 C360,800 240,700 210,460', '#8a7a40', 7) + P.pill(400, 760, 'ATP → ADP', K.ATP, { fs: 22 })))),
  steps: [
    T('C4 plants like maize and sugarcane have two kinds of photosynthetic cells: mesophyll cells and large bundle sheath cells, the Kranz anatomy.', 'ಮೆಕ್ಕೆಜೋಳ, ಕಬ್ಬಿನಂತಹ C4 ಸಸ್ಯಗಳಲ್ಲಿ ಎರಡು ರೀತಿಯ ದ್ಯುತಿಸಂಶ್ಲೇಷಕ ಕೋಶಗಳಿವೆ: ಪತ್ರಮಧ್ಯಕ ಕೋಶಗಳು ಮತ್ತು ದೊಡ್ಡ ನಾಳಕಟ್ಟು ಕವಚ ಕೋಶಗಳು, ಅಂದರೆ ಕ್ರಾನ್ಜ್ ಅಂಗರಚನೆ.', 'मक्का और गन्ने जैसे C4 पौधों में दो प्रकार की प्रकाश संश्लेषी कोशिकाएँ हैं: पर्णमध्योतक कोशिकाएँ और बड़ी बंडल आच्छद कोशिकाएँ, यानी क्रैन्ज़ शारीरिकी।'),
    T('In the mesophyll, PEP takes up carbon dioxide with the enzyme PEPcase. The first product is OAA, a four carbon acid, which becomes malic or aspartic acid.', 'ಪತ್ರಮಧ್ಯಕದಲ್ಲಿ PEP, PEPcase ಕಿಣ್ವದೊಂದಿಗೆ ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಸ್ವೀಕರಿಸುತ್ತದೆ. ಮೊದಲ ಉತ್ಪನ್ನ OAA, ನಾಲ್ಕು ಇಂಗಾಲದ ಆಮ್ಲ, ಅದು ಮ್ಯಾಲಿಕ್ ಅಥವಾ ಆಸ್ಪಾರ್ಟಿಕ್ ಆಮ್ಲವಾಗುತ್ತದೆ.', 'पर्णमध्योतक में PEP, PEPcase एंजाइम से कार्बन डाइऑक्साइड लेता है। पहला उत्पाद OAA है, एक चार कार्बन अम्ल, जो मैलिक या एस्पार्टिक अम्ल बनता है।'),
    T('This C4 acid moves into the bundle sheath. There it releases carbon dioxide, which enters the Calvin cycle and makes sugar.', 'ಈ C4 ಆಮ್ಲ ನಾಳಕಟ್ಟು ಕವಚಕ್ಕೆ ಹೋಗುತ್ತದೆ. ಅಲ್ಲಿ ಅದು ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಬಿಡುತ್ತದೆ, ಅದು ಕೆಲ್ವಿನ್ ಚಕ್ರಕ್ಕೆ ಸೇರಿ ಸಕ್ಕರೆ ತಯಾರಿಸುತ್ತದೆ.', 'यह C4 अम्ल बंडल आच्छद में जाता है। वहाँ यह कार्बन डाइऑक्साइड छोड़ता है, जो केल्विन चक्र में जाकर शर्करा बनाती है।'),
    T('The leftover three carbon acid returns to the mesophyll and, using ATP, PEP is made again.', 'ಉಳಿದ ಮೂರು ಇಂಗಾಲದ ಆಮ್ಲ ಪತ್ರಮಧ್ಯಕಕ್ಕೆ ಮರಳುತ್ತದೆ, ATP ಬಳಸಿ ಮತ್ತೆ PEP ತಯಾರಾಗುತ್ತದೆ.', 'बचा हुआ तीन कार्बन अम्ल पर्णमध्योतक में लौटता है, और ATP से फिर PEP बनता है।')
  ] });
/* 11. photorespiration */
SL.push({ title: T('Photorespiration: <em>RuBisCO\'s mistake</em>', 'ದ್ಯುತಿಶ್ವಸನ: <em>RuBisCO ತಪ್ಪು</em>', 'प्रकाश श्वसन: <em>RuBisCO की भूल</em>'), css: '',
  art: ART(L => G(F(0, 2, `<path d="M560,300 C760,180 1040,260 1080,460 C1120,640 900,780 700,760 C560,745 440,650 450,520 L620,520 L520,420 Z" fill="${D.rg('#8a5a2a')}" stroke="#4a2a10" stroke-width="5"/>` + P.t(780, 620, 'RuBisCO', 44, '#fff') + P.co2(260, 330, 1.4) + D.arrow(340, 360, 520, 460, '#2f8f3a', 8) + P.pill(1330, 380, '2 × 3-PGA', '#2f8f3a', { fs: 32 }) + D.arrow(1090, 420, 1180, 390, '#2f8f3a', 6)) +
    F(1, 2, P.o2(260, 720, 1.4) + D.arrow(330, 690, 520, 560, '#c0392b', 8) + P.pill(1330, 640, '3-PGA + 2C', '#c0392b', { fs: 32 }) + D.arrow(1090, 560, 1180, 620, '#c0392b', 6)) +
    F(2, null, S.photoresp()) + F(3, null, lab(800, 960, T('C₄ plants: high CO₂ near RuBisCO → no photorespiration', 'C₄ ಸಸ್ಯಗಳು: RuBisCO ಬಳಿ ಹೆಚ್ಚು CO₂ → ದ್ಯುತಿಶ್ವಸನ ಇಲ್ಲ', 'C₄ पौधे: RuBisCO के पास अधिक CO₂ → प्रकाश श्वसन नहीं')[L], '#0b7f72', 40)))),
  steps: [
    T('RuBisCO normally fixes carbon dioxide on RuBP, giving two molecules of 3-PGA.', 'RuBisCO ಸಾಮಾನ್ಯವಾಗಿ RuBP ಮೇಲೆ ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಸ್ಥಿರೀಕರಿಸಿ ಎರಡು ಅಣು 3-PGA ನೀಡುತ್ತದೆ.', 'RuBisCO सामान्यतः RuBP पर कार्बन डाइऑक्साइड स्थिर कर 3-PGA के दो अणु देता है।'),
    T('But its active site can also bind oxygen. Then RuBP gives one 3-PGA and one two carbon phosphoglycolate.', 'ಆದರೆ ಅದರ ಸಕ್ರಿಯ ತಾಣ ಆಮ್ಲಜನಕಕ್ಕೂ ಬಂಧಿಸಬಲ್ಲದು. ಆಗ RuBP ಒಂದು 3-PGA ಮತ್ತು ಒಂದು ಎರಡು ಇಂಗಾಲದ ಫಾಸ್ಫೊಗ್ಲೈಕೊಲೇಟ್ ನೀಡುತ್ತದೆ.', 'पर इसका सक्रिय स्थल ऑक्सीजन से भी बंध सकता है। तब RuBP एक 3-PGA और एक दो कार्बन फॉस्फोग्लाइकोलेट देता है।'),
    T('Phosphoglycolate passes through the chloroplast, peroxisome and mitochondrion. Carbon dioxide is lost and ATP is used, with no sugar made. This wasteful process is photorespiration.', 'ಫಾಸ್ಫೊಗ್ಲೈಕೊಲೇಟ್ ಹರಿತ್ತಿಲವ, ಪೆರಾಕ್ಸಿಸೋಮ್ ಮತ್ತು ಮೈಟೋಕಾಂಡ್ರಿಯದ ಮೂಲಕ ಸಾಗುತ್ತದೆ. ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಕಳೆದುಹೋಗುತ್ತದೆ, ATP ಬಳಕೆಯಾಗುತ್ತದೆ, ಸಕ್ಕರೆ ತಯಾರಾಗುವುದಿಲ್ಲ. ಈ ವ್ಯರ್ಥ ಕ್ರಿಯೆಯೇ ದ್ಯುತಿಶ್ವಸನ.', 'फॉस्फोग्लाइकोलेट हरितलवक, परऑक्सीसोम और माइटोकॉन्ड्रिया से होकर जाता है। कार्बन डाइऑक्साइड नष्ट होती है और ATP खर्च होता है, शर्करा नहीं बनती। यह व्यर्थ प्रक्रिया प्रकाश श्वसन है।'),
    T('C4 plants keep carbon dioxide high around RuBisCO in the bundle sheath, so they have no photorespiration and give higher yields.', 'C4 ಸಸ್ಯಗಳು ನಾಳಕಟ್ಟು ಕವಚದಲ್ಲಿ RuBisCO ಸುತ್ತ ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಹೆಚ್ಚಿಡುತ್ತವೆ, ಹಾಗಾಗಿ ಅವುಗಳಲ್ಲಿ ದ್ಯುತಿಶ್ವಸನ ಇಲ್ಲ ಮತ್ತು ಇಳುವರಿ ಹೆಚ್ಚು.', 'C4 पौधे बंडल आच्छद में RuBisCO के आसपास कार्बन डाइऑक्साइड अधिक रखते हैं, इसलिए उनमें प्रकाश श्वसन नहीं होता और उपज अधिक होती है।')
  ] });
/* 12. limiting factors */
SL.push({ title: T('Factors and the <em>limiting factor</em>', 'ಅಂಶಗಳು ಮತ್ತು <em>ಮಿತಿಗೊಳಿಸುವ ಅಂಶ</em>', 'कारक और <em>सीमाकारी कारक</em>'), css: '',
  art: ART(L => { const x0 = 230, y0 = 780; return G(F(0, 3, P.axes(x0, y0, 1200, 600, P.w('Light intensity'), P.w('Rate of photosynthesis'), { yoff: 60, fs: 28 }) + P.line([[x0, y0], [440, 610], [640, 445], [760, 372]], '#2f8f3a', 8)) +
    F(1, 3, D.ball(440, 610, 14, '#c0392b') + P.t(410, 592, 'A', 36, '#a8321e') + D.ball(640, 445, 14, '#c0392b') + P.t(610, 427, 'B', 36, '#a8321e') + lab(450, 330, T('light is limiting', 'ಬೆಳಕು ಮಿತಿಗೊಳಿಸುತ್ತಿದೆ', 'प्रकाश सीमाकारी है')[L], '#2f8f3a', 40)) +
    F(2, 3, P.line([[760, 372], [880, 330], [1050, 312], [1380, 308]], '#2f8f3a', 8) + D.ball(1180, 310, 14, '#c0392b') + P.t(1180, 280, 'C', 36, '#a8321e') + `<line x1="770" y1="${y0}" x2="770" y2="368" stroke="#777" stroke-width="3" stroke-dasharray="12 9"/>` + P.t(770, y0 - 24, 'D', 36, '#a8321e') + lab(1100, 200, T('CO₂ or temperature now limits', 'ಈಗ CO₂ ಅಥವಾ ತಾಪ ಮಿತಿಗೊಳಿಸುತ್ತದೆ', 'अब CO₂ या ताप सीमित करता है')[L], '#8a6508', 40)) +
    F(3, null, `<g transform="translate(-60 0)">${S.barrel()}</g>` + lab(1420, 500, T('Blackman (1905)', 'ಬ್ಲ್ಯಾಕ್‌ಮನ್ (1905)', 'ब्लैकमैन (1905)')[L], '#0b7f72', 46))); }),
  steps: [
    T('Light, carbon dioxide, temperature and water all affect photosynthesis. At low light, the rate rises in a straight line as light increases.', 'ಬೆಳಕು, ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್, ತಾಪ ಮತ್ತು ನೀರು ಎಲ್ಲವೂ ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಯ ಮೇಲೆ ಪ್ರಭಾವ ಬೀರುತ್ತವೆ. ಕಡಿಮೆ ಬೆಳಕಿನಲ್ಲಿ ಬೆಳಕು ಹೆಚ್ಚಿದಂತೆ ದರ ನೇರ ರೇಖೆಯಲ್ಲಿ ಏರುತ್ತದೆ.', 'प्रकाश, कार्बन डाइऑक्साइड, ताप और पानी सभी प्रकाश संश्लेषण को प्रभावित करते हैं। कम प्रकाश में प्रकाश बढ़ने के साथ दर सीधी रेखा में बढ़ती है।'),
    T('At points A and B, light is the limiting factor.', 'A ಮತ್ತು B ಬಿಂದುಗಳಲ್ಲಿ ಬೆಳಕೇ ಮಿತಿಗೊಳಿಸುವ ಅಂಶ.', 'बिंदु A और B पर प्रकाश सीमाकारी कारक है।'),
    T('After D, more light does not help. At C the rate stays flat, because another factor, such as carbon dioxide, is now limiting.', 'D ನಂತರ ಹೆಚ್ಚು ಬೆಳಕು ಸಹಾಯ ಮಾಡುವುದಿಲ್ಲ. C ಯಲ್ಲಿ ದರ ಸಮತಟ್ಟಾಗಿರುತ್ತದೆ, ಏಕೆಂದರೆ ಈಗ ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್‌ನಂತಹ ಬೇರೆ ಅಂಶ ಮಿತಿಗೊಳಿಸುತ್ತಿದೆ.', 'D के बाद अधिक प्रकाश से लाभ नहीं होता। C पर दर स्थिर रहती है, क्योंकि अब कार्बन डाइऑक्साइड जैसा कोई अन्य कारक सीमाकारी है।'),
    T('Blackman\'s law: the rate is set by the factor nearest its minimum, just as the shortest plank decides how full a barrel can be.', 'ಬ್ಲ್ಯಾಕ್‌ಮನ್ ನಿಯಮ: ದರವನ್ನು ತನ್ನ ಕನಿಷ್ಠಕ್ಕೆ ಹತ್ತಿರವಿರುವ ಅಂಶ ನಿರ್ಧರಿಸುತ್ತದೆ, ಡಬ್ಬದ ಅತಿ ಚಿಕ್ಕ ಹಲಗೆ ಅದು ಎಷ್ಟು ತುಂಬಬಹುದು ಎಂದು ನಿರ್ಧರಿಸುವಂತೆ.', 'ब्लैकमैन का नियम: दर वह कारक तय करता है जो अपने न्यूनतम के सबसे निकट हो, जैसे पीपे का सबसे छोटा तख्ता तय करता है कि वह कितना भरेगा।')
  ] });

window.ANIM_SLIDES = SL;
})();
