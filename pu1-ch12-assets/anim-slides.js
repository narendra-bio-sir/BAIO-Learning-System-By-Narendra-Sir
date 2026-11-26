/* PU-I Ch12 Animated deck: 10 step-by-step topics (EN/KN/HI). Drawn live with the BAIO drawing kit
   (anim/draw.js, anim/ps-draw.js, anim/diagrams.js = scripts/pu1-ch12/diagrams.js). Each step shows/hides
   groups with in{n}/out{n} classes. Scenes are drawn in a 1600 x 1000 box and placed on the slide by G(). */
(function(){
const D = window.D, P = window.P, S = window.SCENE;
const ART = f => L => { D.defs = {}; P.L = L; const body = f(L); return `<defs>${Object.values(D.defs).join('')}</defs>` + body; };
const F = (a, b, s) => `<g class="in${a}${b != null ? ' out' + b : ''}">${s}</g>`;
const G = s => `<g transform="translate(304 90) scale(.82)">${s}</g>`;
/* a scene, shrunk a little so a key-point chip fits underneath */
/* crop boxes measured by scripts/pu1-ch12/make-vis.js: each scene is fitted into the 1600 x 820 area above the chip */
const CROP = {"glycolysis":[400,56,980,948],"krebs":[272,75,1127,896],"ets":[36,116,1533,838],"atpSynth":[176,126,1248,818],"fermentation":[96,56,1408,928],"amphibolic":[166,96,1268,902],"cellSites":[66,86,1468,868],"rqBars":[175,93,1249,814],"rqSeeds":[260,176,1123,613],"energyFlow":[59,123,1407,743],"atpCoin":[150,251,1026,548],"plantGas":[266,103,1218,822],"woodyStem":[256,136,1336,768],"burnVsStep":[260,101,1278,834],"sucrose":[409,102,784,723],"pyrFate":[86,151,1428,694],"nadLoop":[96,241,1408,558],"link":[116,96,1389,828],"balanceBars":[127,156,1337,773],"fermVsAer":[116,156,1368,688],"pipeline":[32,95,1530,883],"phosCompare":[96,176,1408,648]};
const SC = n => { const [x, y, w, h] = CROP[n] || [0, 0, 1600, 1000]; const k = Math.min(1500 / w, 800 / h, 1.25); const tx = 800 - (x + w / 2) * k, ty = 412 - (y + h / 2) * k;
  return `<g transform="translate(${tx.toFixed(1)} ${ty.toFixed(1)}) scale(${k.toFixed(4)})">${S[n]()}</g>`; };
const chip = (t, c) => `<rect x="120" y="842" width="1360" height="116" rx="58" fill="#fffdf6" stroke="${c || '#0b7f72'}" stroke-width="5"/>` + P.t(800, 915, t, 42, '#0c1830');
const pick = (L, t) => t[L] || t.en;

const SL = [];
/* 1. why respire */
SL.push({ title: T('Respiration: <em>energy for life</em>', 'ಉಸಿರಾಟ: <em>ಜೀವಕ್ಕೆ ಶಕ್ತಿ</em>', 'श्वसन: <em>जीवन के लिए ऊर्जा</em>'), css: '',
  art: ART(L => G(F(0, 2, SC('energyFlow')) +
    F(1, 2, chip(pick(L, T('Food → CO₂ + H₂O + energy', 'ಆಹಾರ → CO₂ + H₂O + ಶಕ್ತಿ', 'भोजन → CO₂ + H₂O + ऊर्जा')))) +
    F(2, null, SC('atpCoin')) +
    F(3, null, chip(pick(L, T('ATP = energy currency of the cell', 'ATP = ಕೋಶದ ಶಕ್ತಿ ನಾಣ್ಯ', 'ATP = कोशिका की ऊर्जा मुद्रा')), '#e8952f')))),
  steps: [
    T('All living things need energy. It comes from the oxidation of food, mainly glucose, which green plants make by photosynthesis.', 'ಎಲ್ಲಾ ಜೀವಿಗಳಿಗೆ ಶಕ್ತಿ ಬೇಕು. ಅದು ಆಹಾರದ, ಮುಖ್ಯವಾಗಿ ಗ್ಲೂಕೋಸ್‌ನ ಆಕ್ಸಿಡೀಕರಣದಿಂದ ಬರುತ್ತದೆ. ಹಸಿರು ಸಸ್ಯಗಳು ಗ್ಲೂಕೋಸನ್ನು ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಯಿಂದ ತಯಾರಿಸುತ್ತವೆ.', 'सभी जीवों को ऊर्जा चाहिए। यह भोजन, मुख्यतः ग्लूकोज़, के ऑक्सीकरण से आती है, जिसे हरे पौधे प्रकाश संश्लेषण से बनाते हैं।'),
    T('Breaking the carbon to carbon bonds of food inside the cell releases energy. This is cellular respiration, and the food that is broken down is the respiratory substrate.', 'ಕೋಶದೊಳಗೆ ಆಹಾರದ ಕಾರ್ಬನ್–ಕಾರ್ಬನ್ ಬಂಧಗಳು ಮುರಿದಾಗ ಶಕ್ತಿ ಬಿಡುಗಡೆಯಾಗುತ್ತದೆ. ಇದೇ ಕೋಶೀಯ ಉಸಿರಾಟ. ವಿಘಟನೆಯಾಗುವ ಆಹಾರವೇ ಉಸಿರಾಟದ ಆಧಾರವಸ್ತು.', 'कोशिका के भीतर भोजन के कार्बन–कार्बन बंध टूटने पर ऊर्जा मुक्त होती है। यही कोशिकीय श्वसन है, और टूटने वाला भोजन श्वसन क्रियाधार कहलाता है।'),
    T('This energy is not used directly. It is trapped in ATP, which the cell spends wherever work has to be done.', 'ಈ ಶಕ್ತಿಯನ್ನು ನೇರವಾಗಿ ಬಳಸುವುದಿಲ್ಲ. ಅದು ATP ಯಲ್ಲಿ ಸಂಗ್ರಹವಾಗುತ್ತದೆ, ಕೆಲಸ ಮಾಡಬೇಕಾದಲ್ಲೆಲ್ಲ ಕೋಶ ಅದನ್ನು ಖರ್ಚು ಮಾಡುತ್ತದೆ.', 'यह ऊर्जा सीधे उपयोग नहीं होती। यह ATP में संचित होती है, जिसे कोशिका जहाँ भी काम करना हो, वहाँ खर्च करती है।'),
    T('That is why ATP is called the energy currency of the cell.', 'ಆದ್ದರಿಂದಲೇ ATP ಯನ್ನು ಕೋಶದ ಶಕ್ತಿ ನಾಣ್ಯ ಎನ್ನುತ್ತಾರೆ.', 'इसीलिए ATP को कोशिका की ऊर्जा मुद्रा कहते हैं।')
  ] });
/* 2. do plants breathe */
SL.push({ title: T('Do plants <em>breathe</em>?', 'ಸಸ್ಯಗಳು <em>ಉಸಿರಾಡುತ್ತವೆಯೇ</em>?', 'क्या पौधे <em>साँस लेते</em> हैं?'), css: '',
  art: ART(L => G(F(0, 2, SC('plantGas')) +
    F(1, 2, chip(pick(L, T('Stomata + lenticels: no breathing organs', 'ಪತ್ರರಂಧ್ರ + ವಾತರಂಧ್ರ: ಉಸಿರಾಟದ ಅಂಗಗಳಿಲ್ಲ', 'रंध्र + वातरंध्र: श्वसन अंग नहीं')))) +
    F(2, null, SC('woodyStem')) +
    F(3, null, chip(pick(L, T('Low demand + O₂ from photosynthesis', 'ಕಡಿಮೆ ಬೇಡಿಕೆ + ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಯ O₂', 'कम माँग + प्रकाश संश्लेषण की O₂')))))),
  steps: [
    T('Plants take in oxygen and give out carbon dioxide, but they have no special organs for breathing.', 'ಸಸ್ಯಗಳು ಆಮ್ಲಜನಕ ತೆಗೆದುಕೊಂಡು ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಬಿಡುತ್ತವೆ, ಆದರೆ ಉಸಿರಾಟಕ್ಕೆ ವಿಶೇಷ ಅಂಗಗಳಿಲ್ಲ.', 'पौधे ऑक्सीजन लेते हैं और कार्बन डाइऑक्साइड छोड़ते हैं, पर उनमें साँस लेने के विशेष अंग नहीं होते।'),
    T('Gases move through stomata in the leaves and lenticels in the stems. Each part of the plant looks after its own gas exchange.', 'ಎಲೆಗಳ ಪತ್ರರಂಧ್ರಗಳು ಮತ್ತು ಕಾಂಡಗಳ ವಾತರಂಧ್ರಗಳ ಮೂಲಕ ಅನಿಲಗಳು ಚಲಿಸುತ್ತವೆ. ಸಸ್ಯದ ಪ್ರತಿ ಭಾಗ ತನ್ನ ಅನಿಲ ವಿನಿಮಯವನ್ನು ತಾನೇ ನೋಡಿಕೊಳ್ಳುತ್ತದೆ.', 'गैसें पत्तियों के रंध्रों और तनों के वातरंध्रों से आती-जाती हैं। पौधे का हर भाग अपना गैस विनिमय स्वयं करता है।'),
    T('In a woody stem the living cells lie just under the bark, close to the air. The cells inside are dead and need no oxygen.', 'ಮರದ ಕಾಂಡದಲ್ಲಿ ಜೀವಂತ ಕೋಶಗಳು ತೊಗಟೆಯ ಕೆಳಗೆ, ಗಾಳಿಗೆ ಹತ್ತಿರದಲ್ಲಿವೆ. ಒಳಗಿನ ಕೋಶಗಳು ಸತ್ತಿವೆ, ಅವಕ್ಕೆ ಆಮ್ಲಜನಕ ಬೇಡ.', 'काष्ठीय तने में जीवित कोशिकाएँ छाल के ठीक नीचे, हवा के पास होती हैं। अंदर की कोशिकाएँ मृत हैं और उन्हें ऑक्सीजन नहीं चाहिए।'),
    T('Plants also need far less gas exchange than animals, and the oxygen made in photosynthesis is used right inside the cells.', 'ಸಸ್ಯಗಳಿಗೆ ಪ್ರಾಣಿಗಳಿಗಿಂತ ಬಹಳ ಕಡಿಮೆ ಅನಿಲ ವಿನಿಮಯ ಸಾಕು, ಮತ್ತು ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಯಲ್ಲಿ ಉಂಟಾದ ಆಮ್ಲಜನಕ ಕೋಶಗಳೊಳಗೇ ಬಳಕೆಯಾಗುತ್ತದೆ.', 'पौधों को जंतुओं से बहुत कम गैस विनिमय चाहिए, और प्रकाश संश्लेषण में बनी ऑक्सीजन कोशिकाओं के अंदर ही उपयोग हो जाती है।')
  ] });
/* 3. step-wise oxidation and where it happens */
SL.push({ title: T('Slow burning, <em>step by step</em>', 'ನಿಧಾನ ದಹನ, <em>ಹಂತ ಹಂತವಾಗಿ</em>', 'धीमा दहन, <em>चरण दर चरण</em>'), css: '',
  art: ART(L => G(F(0, 2, SC('burnVsStep')) +
    F(1, 2, chip(pick(L, T('Many small enzyme steps → ATP', 'ಅನೇಕ ಸಣ್ಣ ಕಿಣ್ವ ಹಂತಗಳು → ATP', 'कई छोटे एंजाइम चरण → ATP')), '#e8952f')) +
    F(2, null, SC('cellSites')) +
    F(3, null, chip(pick(L, T('Glycolysis: in all living organisms', 'ಗ್ಲೈಕಾಲಿಸಿಸ್: ಎಲ್ಲಾ ಜೀವಿಗಳಲ್ಲಿ', 'ग्लाइकोलाइसिस: सभी जीवों में')))))),
  steps: [
    T('Burning glucose in one step releases all its energy at once, as heat and light. A cell cannot use energy in that form.', 'ಗ್ಲೂಕೋಸನ್ನು ಒಂದೇ ಹಂತದಲ್ಲಿ ಸುಟ್ಟರೆ ಅದರ ಎಲ್ಲಾ ಶಕ್ತಿ ಒಮ್ಮೆಲೇ ಶಾಖ ಮತ್ತು ಬೆಳಕಾಗಿ ಬಿಡುಗಡೆಯಾಗುತ್ತದೆ. ಕೋಶ ಆ ರೂಪದ ಶಕ್ತಿಯನ್ನು ಬಳಸಲಾರದು.', 'ग्लूकोज़ को एक ही चरण में जलाने से उसकी सारी ऊर्जा एक साथ ऊष्मा और प्रकाश के रूप में निकलती है। कोशिका उस रूप की ऊर्जा का उपयोग नहीं कर सकती।'),
    T('In the cell, glucose is oxidised slowly, in many small steps controlled by enzymes, and the energy is trapped as ATP.', 'ಕೋಶದಲ್ಲಿ ಗ್ಲೂಕೋಸ್ ಕಿಣ್ವಗಳು ನಿಯಂತ್ರಿಸುವ ಅನೇಕ ಸಣ್ಣ ಹಂತಗಳಲ್ಲಿ ನಿಧಾನವಾಗಿ ಆಕ್ಸಿಡೀಕರಣಗೊಳ್ಳುತ್ತದೆ, ಶಕ್ತಿ ATP ಆಗಿ ಸಂಗ್ರಹವಾಗುತ್ತದೆ.', 'कोशिका में ग्लूकोज़ एंजाइमों द्वारा नियंत्रित कई छोटे चरणों में धीरे-धीरे ऑक्सीकृत होता है, और ऊर्जा ATP के रूप में संचित होती है।'),
    T('Glycolysis happens in the cytoplasm. The Krebs cycle runs in the mitochondrial matrix, and the electron transport system sits on the inner membrane.', 'ಗ್ಲೈಕಾಲಿಸಿಸ್ ಕೋಶದ್ರವ್ಯದಲ್ಲಿ ನಡೆಯುತ್ತದೆ. ಕ್ರೆಬ್ಸ್ ಚಕ್ರ ಮೈಟೋಕಾಂಡ್ರಿಯದ ಮ್ಯಾಟ್ರಿಕ್ಸ್‌ನಲ್ಲಿ, ಎಲೆಕ್ಟ್ರಾನ್ ಸಾಗಣೆ ವ್ಯವಸ್ಥೆ ಒಳಪೊರೆಯಲ್ಲಿ ಇದೆ.', 'ग्लाइकोलाइसिस कोशिकाद्रव्य में होता है। क्रेब्स चक्र माइटोकॉन्ड्रिया की आधात्री में चलता है, और इलेक्ट्रॉन परिवहन तंत्र भीतरी झिल्ली पर होता है।'),
    T('Glycolysis is common to all living organisms, with or without oxygen. Only the later steps need oxygen.', 'ಗ್ಲೈಕಾಲಿಸಿಸ್ ಆಮ್ಲಜನಕ ಇರಲಿ ಇಲ್ಲದಿರಲಿ ಎಲ್ಲಾ ಜೀವಿಗಳಲ್ಲಿ ಸಾಮಾನ್ಯ. ನಂತರದ ಹಂತಗಳಿಗೆ ಮಾತ್ರ ಆಮ್ಲಜನಕ ಬೇಕು.', 'ग्लाइकोलाइसिस ऑक्सीजन हो या न हो, सभी जीवों में होता है। केवल बाद के चरणों को ऑक्सीजन चाहिए।')
  ] });
/* 4. glycolysis */
SL.push({ title: T('<em>Glycolysis</em>: the EMP pathway', '<em>ಗ್ಲೈಕಾಲಿಸಿಸ್</em>: EMP ಪಥ', '<em>ग्लाइकोलाइसिस</em>: EMP पथ'), css: '',
  art: ART(L => G(F(0, 1, SC('sucrose')) + F(1, null, SC('glycolysis')) +
    F(2, 3, chip(pick(L, T('2 ATP used: glucose → G-6-P, F-6-P → F-1,6-bisP', '2 ATP ಬಳಕೆ: ಗ್ಲೂಕೋಸ್ → G-6-P, F-6-P → F-1,6-bisP', '2 ATP उपयोग: ग्लूकोज़ → G-6-P, F-6-P → F-1,6-bisP')), '#c0392b')) +
    F(3, null, chip(pick(L, T('4 ATP + 2 NADH made → net 2 ATP', '4 ATP + 2 NADH ಉತ್ಪತ್ತಿ → ನಿವ್ವಳ 2 ATP', '4 ATP + 2 NADH बने → शुद्ध 2 ATP')), '#e8952f')))),
  steps: [
    T('In plants, glucose comes from sucrose. The enzyme invertase splits sucrose into glucose and fructose, and both enter glycolysis.', 'ಸಸ್ಯಗಳಲ್ಲಿ ಗ್ಲೂಕೋಸ್ ಸುಕ್ರೋಸ್‌ನಿಂದ ಬರುತ್ತದೆ. ಇನ್‌ವರ್ಟೇಸ್ ಕಿಣ್ವ ಸುಕ್ರೋಸನ್ನು ಗ್ಲೂಕೋಸ್ ಮತ್ತು ಫ್ರಕ್ಟೋಸ್ ಆಗಿ ವಿಭಜಿಸುತ್ತದೆ, ಎರಡೂ ಗ್ಲೈಕಾಲಿಸಿಸ್ ಪ್ರವೇಶಿಸುತ್ತವೆ.', 'पौधों में ग्लूकोज़ सुक्रोज़ से आता है। इनवर्टेज एंजाइम सुक्रोज़ को ग्लूकोज़ और फ्रक्टोज़ में तोड़ता है, और दोनों ग्लाइकोलाइसिस में जाते हैं।'),
    T('Glycolysis, the EMP pathway, breaks one glucose into two molecules of pyruvic acid, in ten steps, in the cytoplasm.', 'ಗ್ಲೈಕಾಲಿಸಿಸ್, ಅಂದರೆ EMP ಪಥ, ಕೋಶದ್ರವ್ಯದಲ್ಲಿ ಹತ್ತು ಹಂತಗಳಲ್ಲಿ ಒಂದು ಗ್ಲೂಕೋಸನ್ನು ಎರಡು ಅಣು ಪೈರುವಿಕ್ ಆಮ್ಲವಾಗಿ ವಿಭಜಿಸುತ್ತದೆ.', 'ग्लाइकोलाइसिस, यानी EMP पथ, कोशिकाद्रव्य में दस चरणों में एक ग्लूकोज़ को पाइरुविक अम्ल के दो अणुओं में तोड़ता है।'),
    T('Two ATP are used first: one when glucose becomes glucose six phosphate, and one when fructose six phosphate becomes fructose one six bisphosphate.', 'ಮೊದಲು ಎರಡು ATP ಬಳಕೆಯಾಗುತ್ತವೆ: ಗ್ಲೂಕೋಸ್ ಗ್ಲೂಕೋಸ್-6-ಫಾಸ್ಫೇಟ್ ಆಗುವಾಗ ಒಂದು, ಫ್ರಕ್ಟೋಸ್-6-ಫಾಸ್ಫೇಟ್ ಫ್ರಕ್ಟೋಸ್-1,6-ಬೈಸ್ಫಾಸ್ಫೇಟ್ ಆಗುವಾಗ ಇನ್ನೊಂದು.', 'पहले दो ATP उपयोग होते हैं: एक जब ग्लूकोज़ ग्लूकोज़-6-फॉस्फेट बनता है, और एक जब फ्रक्टोज़-6-फॉस्फेट फ्रक्टोज़-1,6-बिसफॉस्फेट बनता है।'),
    T('Later, four ATP and two NADH are formed. So the net gain from one glucose is two ATP and two NADH.', 'ನಂತರ ನಾಲ್ಕು ATP ಮತ್ತು ಎರಡು NADH ಉಂಟಾಗುತ್ತವೆ. ಆದ್ದರಿಂದ ಒಂದು ಗ್ಲೂಕೋಸ್‌ನಿಂದ ನಿವ್ವಳ ಲಾಭ ಎರಡು ATP ಮತ್ತು ಎರಡು NADH.', 'बाद में चार ATP और दो NADH बनते हैं। इसलिए एक ग्लूकोज़ से शुद्ध लाभ दो ATP और दो NADH है।')
  ] });
/* 5. fermentation */
SL.push({ title: T('<em>Fermentation</em>: life without oxygen', '<em>ಹುದುಗುವಿಕೆ</em>: ಆಮ್ಲಜನಕವಿಲ್ಲದ ಜೀವನ', '<em>किण्वन</em>: ऑक्सीजन के बिना जीवन'), css: '',
  art: ART(L => G(F(0, 1, SC('pyrFate')) + F(1, 2, SC('fermentation')) + F(2, 3, SC('nadLoop')) + F(3, null, SC('fermVsAer') +
    chip(pick(L, T('< 7% energy released · yeast dies at ~13% alcohol', '< 7% ಶಕ್ತಿ ಬಿಡುಗಡೆ · ~13% ಆಲ್ಕೋಹಾಲ್‌ನಲ್ಲಿ ಯೀಸ್ಟ್ ಸಾವು', '< 7% ऊर्जा मुक्त · ~13% ऐल्कोहॉल पर यीस्ट की मृत्यु')), '#a85bb8')))),
  steps: [
    T('Pyruvic acid has three fates, depending on the organism and on oxygen: lactic acid, ethanol with carbon dioxide, or complete oxidation.', 'ಜೀವಿ ಮತ್ತು ಆಮ್ಲಜನಕವನ್ನು ಅವಲಂಬಿಸಿ ಪೈರುವಿಕ್ ಆಮ್ಲಕ್ಕೆ ಮೂರು ಗತಿಗಳಿವೆ: ಲ್ಯಾಕ್ಟಿಕ್ ಆಮ್ಲ, ಎಥೆನಾಲ್ ಮತ್ತು ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್, ಅಥವಾ ಪೂರ್ಣ ಆಕ್ಸಿಡೀಕರಣ.', 'जीव और ऑक्सीजन के अनुसार पाइरुविक अम्ल की तीन नियतियाँ हैं: लैक्टिक अम्ल, एथेनॉल और कार्बन डाइऑक्साइड, या पूर्ण ऑक्सीकरण।'),
    T('Without oxygen, yeast makes ethanol and carbon dioxide, using pyruvic acid decarboxylase and alcohol dehydrogenase. Muscle and some bacteria make lactic acid, using lactate dehydrogenase.', 'ಆಮ್ಲಜನಕವಿಲ್ಲದೆ ಯೀಸ್ಟ್ ಪೈರುವಿಕ್ ಆಮ್ಲ ಡಿಕಾರ್ಬಾಕ್ಸಿಲೇಸ್ ಮತ್ತು ಆಲ್ಕೋಹಾಲ್ ಡಿಹೈಡ್ರೋಜಿನೇಸ್ ಬಳಸಿ ಎಥೆನಾಲ್ ಮತ್ತು ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ತಯಾರಿಸುತ್ತದೆ. ಸ್ನಾಯು ಮತ್ತು ಕೆಲವು ಬ್ಯಾಕ್ಟೀರಿಯಾಗಳು ಲ್ಯಾಕ್ಟೇಟ್ ಡಿಹೈಡ್ರೋಜಿನೇಸ್ ಬಳಸಿ ಲ್ಯಾಕ್ಟಿಕ್ ಆಮ್ಲ ತಯಾರಿಸುತ್ತವೆ.', 'ऑक्सीजन के बिना यीस्ट पाइरुविक अम्ल डीकार्बोक्सिलेज़ और ऐल्कोहॉल डिहाइड्रोजिनेज़ से एथेनॉल और कार्बन डाइऑक्साइड बनाता है। पेशी और कुछ जीवाणु लैक्टेट डिहाइड्रोजिनेज़ से लैक्टिक अम्ल बनाते हैं।'),
    T('In both kinds, NADH is oxidised back to NAD plus. This keeps glycolysis going.', 'ಎರಡೂ ವಿಧಗಳಲ್ಲಿ NADH ಮತ್ತೆ NAD ಪ್ಲಸ್ ಆಗಿ ಆಕ್ಸಿಡೀಕರಣಗೊಳ್ಳುತ್ತದೆ. ಇದರಿಂದ ಗ್ಲೈಕಾಲಿಸಿಸ್ ಮುಂದುವರಿಯುತ್ತದೆ.', 'दोनों प्रकारों में NADH फिर से NAD प्लस में ऑक्सीकृत होता है। इससे ग्लाइकोलाइसिस चलता रहता है।'),
    T('But fermentation releases less than seven percent of the energy in glucose, and yeast is poisoned when alcohol reaches about thirteen percent.', 'ಆದರೆ ಹುದುಗುವಿಕೆ ಗ್ಲೂಕೋಸ್‌ನ ಶಕ್ತಿಯ ಏಳು ಪ್ರತಿಶತಕ್ಕಿಂತ ಕಡಿಮೆ ಬಿಡುಗಡೆ ಮಾಡುತ್ತದೆ, ಮತ್ತು ಆಲ್ಕೋಹಾಲ್ ಸುಮಾರು ಹದಿಮೂರು ಪ್ರತಿಶತ ತಲುಪಿದಾಗ ಯೀಸ್ಟ್ ಸಾಯುತ್ತದೆ.', 'पर किण्वन ग्लूकोज़ की ऊर्जा का सात प्रतिशत से भी कम मुक्त करता है, और ऐल्कोहॉल लगभग तेरह प्रतिशत होने पर यीस्ट मर जाता है।')
  ] });
/* 6. link reaction and Krebs cycle */
SL.push({ title: T('Link reaction and the <em>Krebs cycle</em>', 'ಸಂಪರ್ಕ ಕ್ರಿಯೆ ಮತ್ತು <em>ಕ್ರೆಬ್ಸ್ ಚಕ್ರ</em>', 'संयोजक अभिक्रिया और <em>क्रेब्स चक्र</em>'), css: '',
  art: ART(L => G(F(0, 1, SC('link')) + F(1, null, SC('krebs')) +
    F(2, 3, chip(pick(L, T('Per turn: 2 CO₂ · 3 NADH · 1 FADH₂ · 1 GTP', 'ಪ್ರತಿ ಸುತ್ತು: 2 CO₂ · 3 NADH · 1 FADH₂ · 1 GTP', 'प्रति चक्कर: 2 CO₂ · 3 NADH · 1 FADH₂ · 1 GTP')), '#2f8f6a')) +
    F(3, null, chip(pick(L, T('1 glucose = 2 pyruvic acid = 2 turns', '1 ಗ್ಲೂಕೋಸ್ = 2 ಪೈರುವಿಕ್ ಆಮ್ಲ = 2 ಸುತ್ತು', '1 ग्लूकोज़ = 2 पाइरुविक अम्ल = 2 चक्कर')), '#2f8f6a')))),
  steps: [
    T('With oxygen, pyruvic acid enters the mitochondrial matrix. Pyruvate dehydrogenase turns it into acetyl coenzyme A, releasing carbon dioxide and forming NADH.', 'ಆಮ್ಲಜನಕ ಇದ್ದಾಗ ಪೈರುವಿಕ್ ಆಮ್ಲ ಮೈಟೋಕಾಂಡ್ರಿಯದ ಮ್ಯಾಟ್ರಿಕ್ಸ್ ಪ್ರವೇಶಿಸುತ್ತದೆ. ಪೈರುವೇಟ್ ಡಿಹೈಡ್ರೋಜಿನೇಸ್ ಅದನ್ನು ಅಸಿಟೈಲ್ ಕೋಎಂಜೈಮ್ A ಆಗಿ ಬದಲಿಸುತ್ತದೆ, ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಬಿಡುಗಡೆಯಾಗಿ NADH ಉಂಟಾಗುತ್ತದೆ.', 'ऑक्सीजन होने पर पाइरुविक अम्ल माइटोकॉन्ड्रिया की आधात्री में जाता है। पाइरुवेट डिहाइड्रोजिनेज़ उसे ऐसीटिल कोएंज़ाइम A में बदलता है, जिससे कार्बन डाइऑक्साइड निकलती है और NADH बनता है।'),
    T('Acetyl CoA joins oxaloacetic acid to form citric acid, with the enzyme citrate synthase. This starts the Krebs cycle, also called the TCA cycle.', 'ಸಿಟ್ರೇಟ್ ಸಿಂಥೇಸ್ ಕಿಣ್ವದ ಸಹಾಯದಿಂದ ಅಸಿಟೈಲ್ CoA ಆಕ್ಸಲೋಅಸಿಟಿಕ್ ಆಮ್ಲದೊಂದಿಗೆ ಸೇರಿ ಸಿಟ್ರಿಕ್ ಆಮ್ಲ ಉಂಟಾಗುತ್ತದೆ. ಇದರಿಂದ ಕ್ರೆಬ್ಸ್ ಚಕ್ರ, ಅಂದರೆ TCA ಚಕ್ರ, ಆರಂಭವಾಗುತ್ತದೆ.', 'सिट्रेट सिंथेज़ एंजाइम की मदद से ऐसीटिल CoA ऑक्सैलोऐसीटिक अम्ल से जुड़कर सिट्रिक अम्ल बनाता है। इससे क्रेब्स चक्र, यानी TCA चक्र, शुरू होता है।'),
    T('Each turn releases two carbon dioxide and forms three NADH, one FADH two and one GTP. The GTP forms when succinyl CoA becomes succinic acid.', 'ಪ್ರತಿ ಸುತ್ತಿನಲ್ಲಿ ಎರಡು ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಬಿಡುಗಡೆಯಾಗಿ ಮೂರು NADH, ಒಂದು FADH ಟು ಮತ್ತು ಒಂದು GTP ಉಂಟಾಗುತ್ತವೆ. ಸಕ್ಸಿನೈಲ್ CoA ಸಕ್ಸಿನಿಕ್ ಆಮ್ಲವಾದಾಗ GTP ಉಂಟಾಗುತ್ತದೆ.', 'हर चक्कर में दो कार्बन डाइऑक्साइड निकलती हैं और तीन NADH, एक FADH टू और एक GTP बनते हैं। सक्सिनिल CoA के सक्सिनिक अम्ल बनने पर GTP बनता है।'),
    T('Oxaloacetic acid is made again, so the cycle goes on. One glucose gives two pyruvic acids, so the cycle turns twice.', 'ಆಕ್ಸಲೋಅಸಿಟಿಕ್ ಆಮ್ಲ ಮತ್ತೆ ಉಂಟಾಗುವುದರಿಂದ ಚಕ್ರ ಮುಂದುವರಿಯುತ್ತದೆ. ಒಂದು ಗ್ಲೂಕೋಸ್ ಎರಡು ಪೈರುವಿಕ್ ಆಮ್ಲ ನೀಡುವುದರಿಂದ ಚಕ್ರ ಎರಡು ಬಾರಿ ಸುತ್ತುತ್ತದೆ.', 'ऑक्सैलोऐसीटिक अम्ल फिर से बनता है, इसलिए चक्र चलता रहता है। एक ग्लूकोज़ से दो पाइरुविक अम्ल बनते हैं, इसलिए चक्र दो बार घूमता है।')
  ] });
/* 7. ETS and oxidative phosphorylation */
SL.push({ title: T('ETS and <em>oxidative phosphorylation</em>', 'ETS ಮತ್ತು <em>ಆಕ್ಸಿಡೇಟಿವ್ ಫಾಸ್ಫೊರಿಲೀಕರಣ</em>', 'ETS और <em>ऑक्सीकारी फॉस्फोरिलीकरण</em>'), css: '',
  art: ART(L => G(F(0, 3, SC('ets')) +
    F(1, 2, chip(pick(L, T('NADH → complex I · FADH₂ → complex II', 'NADH → ಸಂಕೀರ್ಣ I · FADH₂ → ಸಂಕೀರ್ಣ II', 'NADH → सम्मिश्र I · FADH₂ → सम्मिश्र II')), '#3f7fc5')) +
    F(2, 3, chip(pick(L, T('O₂ = final electron acceptor → H₂O', 'O₂ = ಅಂತಿಮ ಎಲೆಕ್ಟ್ರಾನ್ ಸ್ವೀಕಾರಕ → H₂O', 'O₂ = अंतिम इलेक्ट्रॉन ग्राही → H₂O')), '#e05f5f')) +
    F(3, null, SC('atpSynth') + chip(pick(L, T('Complex V: F₀ channel + F₁ makes ATP', 'ಸಂಕೀರ್ಣ V: F₀ ಕಾಲುವೆ + F₁ ATP ತಯಾರಿಕೆ', 'सम्मिश्र V: F₀ वाहिका + F₁ ATP बनाता')), '#e8952f')))),
  steps: [
    T('NADH and FADH two now hand their electrons to the electron transport system on the inner mitochondrial membrane.', 'ಈಗ NADH ಮತ್ತು FADH ಟು ತಮ್ಮ ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳನ್ನು ಒಳ ಮೈಟೋಕಾಂಡ್ರಿಯಲ್ ಪೊರೆಯ ಎಲೆಕ್ಟ್ರಾನ್ ಸಾಗಣೆ ವ್ಯವಸ್ಥೆಗೆ ನೀಡುತ್ತವೆ.', 'अब NADH और FADH टू अपने इलेक्ट्रॉन भीतरी माइटोकॉन्ड्रियल झिल्ली के इलेक्ट्रॉन परिवहन तंत्र को देते हैं।'),
    T('Electrons from NADH enter at complex one, NADH dehydrogenase. Those from FADH two enter at complex two. Ubiquinone carries them to complex three.', 'NADH ನ ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳು ಸಂಕೀರ್ಣ ಒಂದು, NADH ಡಿಹೈಡ್ರೋಜಿನೇಸ್‌ನಲ್ಲಿ ಪ್ರವೇಶಿಸುತ್ತವೆ. FADH ಟು ವಿನವು ಸಂಕೀರ್ಣ ಎರಡರಲ್ಲಿ ಪ್ರವೇಶಿಸುತ್ತವೆ. ಯುಬಿಕ್ವಿನೋನ್ ಅವನ್ನು ಸಂಕೀರ್ಣ ಮೂರಕ್ಕೆ ಒಯ್ಯುತ್ತದೆ.', 'NADH के इलेक्ट्रॉन सम्मिश्र एक, NADH डिहाइड्रोजिनेज़, पर प्रवेश करते हैं। FADH टू के इलेक्ट्रॉन सम्मिश्र दो पर प्रवेश करते हैं। यूबिक्विनोन उन्हें सम्मिश्र तीन तक ले जाता है।'),
    T('Cytochrome c carries them on to complex four, cytochrome c oxidase. Oxygen is the final electron acceptor, and water is formed.', 'ಸೈಟೋಕ್ರೋಮ್ c ಅವನ್ನು ಸಂಕೀರ್ಣ ನಾಲ್ಕು, ಸೈಟೋಕ್ರೋಮ್ c ಆಕ್ಸಿಡೇಸ್‌ಗೆ ಒಯ್ಯುತ್ತದೆ. ಆಮ್ಲಜನಕ ಅಂತಿಮ ಎಲೆಕ್ಟ್ರಾನ್ ಸ್ವೀಕಾರಕ, ನೀರು ಉಂಟಾಗುತ್ತದೆ.', 'साइटोक्रोम c उन्हें सम्मिश्र चार, साइटोक्रोम c ऑक्सीडेज़, तक ले जाता है। ऑक्सीजन अंतिम इलेक्ट्रॉन ग्राही है, और पानी बनता है।'),
    T('Protons pumped out by the complexes flow back through the F zero channel of ATP synthase, complex five. F one then makes ATP from ADP and phosphate.', 'ಸಂಕೀರ್ಣಗಳು ಹೊರಗೆ ಪಂಪ್ ಮಾಡಿದ ಪ್ರೋಟಾನ್‌ಗಳು ATP ಸಿಂಥೇಸ್, ಅಂದರೆ ಸಂಕೀರ್ಣ ಐದರ F ಸೊನ್ನೆ ಕಾಲುವೆಯ ಮೂಲಕ ಮರಳುತ್ತವೆ. ಆಗ F ಒಂದು ADP ಮತ್ತು ಫಾಸ್ಫೇಟ್‌ನಿಂದ ATP ತಯಾರಿಸುತ್ತದೆ.', 'सम्मिश्रों द्वारा बाहर पंप किए गए प्रोटॉन ATP सिंथेज़, यानी सम्मिश्र पाँच, की F शून्य वाहिका से लौटते हैं। तब F एक ADP और फॉस्फेट से ATP बनाता है।')
  ] });
/* 8. balance sheet */
SL.push({ title: T('The respiratory <em>balance sheet</em>', 'ಉಸಿರಾಟದ <em>ಲೆಕ್ಕಪತ್ರ</em>', 'श्वसन <em>संतुलन चार्ट</em>'), css: '',
  art: ART(L => G(F(0, 1, SC('pipeline')) + F(1, null, SC('balanceBars')) +
    F(2, 3, chip(pick(L, T('Glycolysis 8 · Link 6 · Krebs 24', 'ಗ್ಲೈಕಾಲಿಸಿಸ್ 8 · ಸಂಪರ್ಕ 6 · ಕ್ರೆಬ್ಸ್ 24', 'ग्लाइकोलाइसिस 8 · संयोजक 6 · क्रेब्स 24')), '#e8952f')) +
    F(3, null, chip(pick(L, T('Net gain = 38 ATP per glucose', 'ನಿವ್ವಳ ಲಾಭ = ಪ್ರತಿ ಗ್ಲೂಕೋಸ್‌ಗೆ 38 ATP', 'शुद्ध लाभ = प्रति ग्लूकोज़ 38 ATP')), '#e8952f')))),
  steps: [
    T('To count the ATP, we assume an orderly pathway: glycolysis, then the link reaction, then the Krebs cycle, then the ETS, with nothing withdrawn on the way.', 'ATP ಎಣಿಸಲು ನಾವು ಕ್ರಮಬದ್ಧ ಪಥ ಊಹಿಸುತ್ತೇವೆ: ಗ್ಲೈಕಾಲಿಸಿಸ್, ನಂತರ ಸಂಪರ್ಕ ಕ್ರಿಯೆ, ನಂತರ ಕ್ರೆಬ್ಸ್ ಚಕ್ರ, ನಂತರ ETS, ಮಧ್ಯದಲ್ಲಿ ಏನನ್ನೂ ತೆಗೆಯದೆ.', 'ATP गिनने के लिए हम एक क्रमबद्ध पथ मानते हैं: ग्लाइकोलाइसिस, फिर संयोजक अभिक्रिया, फिर क्रेब्स चक्र, फिर ETS, बीच में कुछ भी निकाले बिना।'),
    T('Each NADH gives three ATP, and each FADH two gives two ATP.', 'ಪ್ರತಿ NADH ಮೂರು ATP, ಪ್ರತಿ FADH ಟು ಎರಡು ATP ನೀಡುತ್ತದೆ.', 'हर NADH से तीन ATP, और हर FADH टू से दो ATP मिलते हैं।'),
    T('Glycolysis gives eight ATP, the link reaction six, and the two turns of the Krebs cycle twenty four.', 'ಗ್ಲೈಕಾಲಿಸಿಸ್ ಎಂಟು ATP, ಸಂಪರ್ಕ ಕ್ರಿಯೆ ಆರು, ಕ್ರೆಬ್ಸ್ ಚಕ್ರದ ಎರಡು ಸುತ್ತುಗಳು ಇಪ್ಪತ್ತನಾಲ್ಕು ATP ನೀಡುತ್ತವೆ.', 'ग्लाइकोलाइसिस से आठ ATP, संयोजक अभिक्रिया से छह, और क्रेब्स चक्र के दो चक्करों से चौबीस ATP मिलते हैं।'),
    T('So the net gain is thirty eight ATP per glucose. In a living cell it is less, because the pathways run together and intermediates are taken away.', 'ಆದ್ದರಿಂದ ಪ್ರತಿ ಗ್ಲೂಕೋಸ್‌ಗೆ ನಿವ್ವಳ ಲಾಭ ಮೂವತ್ತೆಂಟು ATP. ಜೀವಂತ ಕೋಶದಲ್ಲಿ ಇದು ಕಡಿಮೆ, ಏಕೆಂದರೆ ಪಥಗಳು ಒಟ್ಟಿಗೆ ನಡೆಯುತ್ತವೆ ಮತ್ತು ಮಧ್ಯವರ್ತಿಗಳನ್ನು ತೆಗೆಯಲಾಗುತ್ತದೆ.', 'इसलिए प्रति ग्लूकोज़ शुद्ध लाभ अड़तीस ATP है। जीवित कोशिका में यह कम होता है, क्योंकि पथ साथ-साथ चलते हैं और मध्यवर्ती निकाल लिए जाते हैं।')
  ] });
/* 9. amphibolic pathway */
SL.push({ title: T('The <em>amphibolic</em> pathway', '<em>ಉಭಯಚಯಾಪಚಯಿ</em> ಪಥ', '<em>उभयधर्मी</em> पथ'), css: '',
  art: ART(L => G(F(0, null, SC('amphibolic')) +
    F(1, 2, chip(pick(L, T('Fats → glycerol (PGAL) + fatty acids (acetyl CoA)', 'ಕೊಬ್ಬು → ಗ್ಲಿಸರಾಲ್ (PGAL) + ಕೊಬ್ಬಿನಾಮ್ಲ (ಅಸಿಟೈಲ್ CoA)', 'वसा → ग्लिसरॉल (PGAL) + वसा अम्ल (ऐसीटिल CoA)')), '#e6b422')) +
    F(2, 3, chip(pick(L, T('Proteins → amino acids → pyruvic acid / acetyl CoA / Krebs', 'ಪ್ರೋಟೀನ್ → ಅಮೈನೋ ಆಮ್ಲ → ಪೈರುವಿಕ್ / ಅಸಿಟೈಲ್ CoA / ಕ್ರೆಬ್ಸ್', 'प्रोटीन → अमीनो अम्ल → पाइरुविक / ऐसीटिल CoA / क्रेब्स')), '#c2557a')) +
    F(3, null, chip(pick(L, T('Breakdown + build-up = amphibolic', 'ವಿಘಟನೆ + ನಿರ್ಮಾಣ = ಉಭಯಚಯಾಪಚಯಿ', 'अपघटन + निर्माण = उभयधर्मी')))))),
  steps: [
    T('Respiration is not only about glucose. Fats, carbohydrates and proteins can all enter the respiratory pathway.', 'ಉಸಿರಾಟ ಗ್ಲೂಕೋಸ್‌ಗೆ ಮಾತ್ರ ಸೀಮಿತವಲ್ಲ. ಕೊಬ್ಬು, ಕಾರ್ಬೋಹೈಡ್ರೇಟ್ ಮತ್ತು ಪ್ರೋಟೀನ್ ಎಲ್ಲವೂ ಉಸಿರಾಟದ ಪಥ ಪ್ರವೇಶಿಸಬಲ್ಲವು.', 'श्वसन केवल ग्लूकोज़ तक सीमित नहीं है। वसा, कार्बोहाइड्रेट और प्रोटीन सभी श्वसन पथ में प्रवेश कर सकते हैं।'),
    T('Fats break into glycerol, which enters as PGAL, and fatty acids, which enter as acetyl CoA.', 'ಕೊಬ್ಬು ಗ್ಲಿಸರಾಲ್ ಮತ್ತು ಕೊಬ್ಬಿನಾಮ್ಲಗಳಾಗಿ ವಿಭಜನೆಯಾಗುತ್ತದೆ. ಗ್ಲಿಸರಾಲ್ PGAL ಆಗಿ, ಕೊಬ್ಬಿನಾಮ್ಲಗಳು ಅಸಿಟೈಲ್ CoA ಆಗಿ ಪ್ರವೇಶಿಸುತ್ತವೆ.', 'वसा ग्लिसरॉल और वसा अम्लों में टूटती है। ग्लिसरॉल PGAL के रूप में और वसा अम्ल ऐसीटिल CoA के रूप में प्रवेश करते हैं।'),
    T('Proteins break into amino acids. After deamination, they enter as pyruvic acid, acetyl CoA or acids of the Krebs cycle.', 'ಪ್ರೋಟೀನ್‌ಗಳು ಅಮೈನೋ ಆಮ್ಲಗಳಾಗಿ ವಿಭಜನೆಯಾಗುತ್ತವೆ. ಡಿಅಮೈನೀಕರಣದ ನಂತರ ಅವು ಪೈರುವಿಕ್ ಆಮ್ಲ, ಅಸಿಟೈಲ್ CoA ಅಥವಾ ಕ್ರೆಬ್ಸ್ ಚಕ್ರದ ಆಮ್ಲಗಳಾಗಿ ಪ್ರವೇಶಿಸುತ್ತವೆ.', 'प्रोटीन अमीनो अम्लों में टूटते हैं। विऐमीनीकरण के बाद वे पाइरुविक अम्ल, ऐसीटिल CoA या क्रेब्स चक्र के अम्लों के रूप में प्रवेश करते हैं।'),
    T('The same intermediates are also used to build fatty acids and proteins. So the pathway both breaks down and builds up: it is amphibolic.', 'ಇದೇ ಮಧ್ಯವರ್ತಿಗಳು ಕೊಬ್ಬಿನಾಮ್ಲ ಮತ್ತು ಪ್ರೋಟೀನ್ ನಿರ್ಮಾಣಕ್ಕೂ ಬಳಕೆಯಾಗುತ್ತವೆ. ಆದ್ದರಿಂದ ಈ ಪಥ ವಿಘಟನೆ ಮತ್ತು ನಿರ್ಮಾಣ ಎರಡನ್ನೂ ಮಾಡುತ್ತದೆ: ಇದು ಉಭಯಚಯಾಪಚಯಿ.', 'यही मध्यवर्ती वसा अम्ल और प्रोटीन बनाने में भी उपयोग होते हैं। इसलिए यह पथ तोड़ता भी है और बनाता भी है: यह उभयधर्मी है।')
  ] });
/* 10. respiratory quotient */
SL.push({ title: T('Respiratory quotient, <em>RQ</em>', 'ಉಸಿರಾಟದ ಅನುಪಾತ, <em>RQ</em>', 'श्वसन गुणांक, <em>RQ</em>'), css: '',
  art: ART(L => G(F(0, 3, SC('rqBars')) +
    F(0, 1, chip(pick(L, T('RQ = volume of CO₂ evolved ÷ volume of O₂ consumed', 'RQ = ಬಿಡುಗಡೆಯಾದ CO₂ ಪರಿಮಾಣ ÷ ಬಳಸಿದ O₂ ಪರಿಮಾಣ', 'RQ = मुक्त CO₂ का आयतन ÷ प्रयुक्त O₂ का आयतन')))) +
    F(1, 2, chip(pick(L, T('Glucose: 6 CO₂ ÷ 6 O₂ = 1', 'ಗ್ಲೂಕೋಸ್: 6 CO₂ ÷ 6 O₂ = 1', 'ग्लूकोज़: 6 CO₂ ÷ 6 O₂ = 1')), '#4a9a4a')) +
    F(2, 3, chip(pick(L, T('Tripalmitin: 102 CO₂ ÷ 145 O₂ = 0.7', 'ಟ್ರೈಪಾಮಿಟಿನ್: 102 CO₂ ÷ 145 O₂ = 0.7', 'ट्राइपामिटिन: 102 CO₂ ÷ 145 O₂ = 0.7')), '#e6b422')) +
    F(3, null, SC('rqSeeds') + chip(pick(L, T('Proteins ≈ 0.9', 'ಪ್ರೋಟೀನ್ ≈ 0.9', 'प्रोटीन ≈ 0.9')), '#c2557a')))),
  steps: [
    T('The respiratory quotient, RQ, is the volume of carbon dioxide given out divided by the volume of oxygen taken in.', 'ಉಸಿರಾಟದ ಅನುಪಾತ, RQ, ಎಂದರೆ ಬಿಡುಗಡೆಯಾದ ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಪರಿಮಾಣವನ್ನು ತೆಗೆದುಕೊಂಡ ಆಮ್ಲಜನಕದ ಪರಿಮಾಣದಿಂದ ಭಾಗಿಸಿದ್ದು.', 'श्वसन गुणांक, RQ, छोड़ी गई कार्बन डाइऑक्साइड के आयतन को ली गई ऑक्सीजन के आयतन से भाग देने पर मिलता है।'),
    T('For carbohydrates like glucose, RQ is one: six carbon dioxide for six oxygen.', 'ಗ್ಲೂಕೋಸ್‌ನಂತಹ ಕಾರ್ಬೋಹೈಡ್ರೇಟ್‌ಗಳಿಗೆ RQ ಒಂದು: ಆರು ಆಮ್ಲಜನಕಕ್ಕೆ ಆರು ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್.', 'ग्लूकोज़ जैसे कार्बोहाइड्रेट के लिए RQ एक है: छह ऑक्सीजन के लिए छह कार्बन डाइऑक्साइड।'),
    T('For fats it is less than one. Tripalmitin gives one hundred and two carbon dioxide for one hundred and forty five oxygen, about zero point seven.', 'ಕೊಬ್ಬುಗಳಿಗೆ ಇದು ಒಂದಕ್ಕಿಂತ ಕಡಿಮೆ. ಟ್ರೈಪಾಮಿಟಿನ್ ನೂರ ನಲವತ್ತೈದು ಆಮ್ಲಜನಕಕ್ಕೆ ನೂರ ಎರಡು ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ನೀಡುತ್ತದೆ, ಸುಮಾರು ಸೊನ್ನೆ ಪಾಯಿಂಟ್ ಏಳು.', 'वसा के लिए यह एक से कम है। ट्राइपामिटिन एक सौ पैंतालीस ऑक्सीजन के लिए एक सौ दो कार्बन डाइऑक्साइड देता है, लगभग शून्य दशमलव सात।'),
    T('Starchy wheat seeds show an RQ near one, oily groundnut seeds about zero point seven, and proteins about zero point nine. So RQ tells us which food is being respired.', 'ಪಿಷ್ಟಯುಕ್ತ ಗೋಧಿ ಬೀಜಗಳ RQ ಸುಮಾರು ಒಂದು, ಎಣ್ಣೆಯುಕ್ತ ಶೇಂಗಾ ಬೀಜಗಳದು ಸುಮಾರು ಸೊನ್ನೆ ಪಾಯಿಂಟ್ ಏಳು, ಪ್ರೋಟೀನ್‌ಗಳದು ಸುಮಾರು ಸೊನ್ನೆ ಪಾಯಿಂಟ್ ಒಂಬತ್ತು. ಹೀಗೆ ಯಾವ ಆಹಾರ ಉಸಿರಾಟದಲ್ಲಿ ಬಳಕೆಯಾಗುತ್ತಿದೆ ಎಂದು RQ ತಿಳಿಸುತ್ತದೆ.', 'मंड वाले गेहूँ के बीजों का RQ लगभग एक, तेल वाले मूँगफली के बीजों का लगभग शून्य दशमलव सात, और प्रोटीन का लगभग शून्य दशमलव नौ होता है। इस तरह RQ बताता है कि कौन-सा भोजन श्वसन में उपयोग हो रहा है।')
  ] });

window.ANIM_SLIDES = SL;
})();
