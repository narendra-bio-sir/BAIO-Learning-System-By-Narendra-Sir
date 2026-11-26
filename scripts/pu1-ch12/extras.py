#!/usr/bin/env python3
"""Adds PU-I Ch12 (Respiration in Plants) to Storybooks, Flash Cards, Activities, the Game Zone and the BAIO Zone.
Idempotent: skips any file that already has a pu1-ch12 entry. Run from the repo root after building pu1-ch12.html:
python3 scripts/pu1-ch12/extras.py"""
import json, os, re
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.chdir(ROOT)

def append(path, text, marker="'pu1-ch12'"):
    s = open(path, encoding='utf-8').read()
    if marker in s: print('skip', path); return
    open(path, 'w', encoding='utf-8').write(s.rstrip('\n') + '\n\n' + text.strip('\n') + '\n'); print('appended', path)

def insert_before(path, anchor, text, marker="pu1-ch12"):
    s = open(path, encoding='utf-8').read()
    if marker in s: print('skip', path); return
    i = s.index(anchor)
    open(path, 'w', encoding='utf-8').write(s[:i] + text + s[i:]); print('inserted', path)

# ---------------- Storybooks ----------------
append('stories/books-pu1.js', r"""
BOOKS['pu1-ch12'] = { title:'The Power Station in Every Cell', ch:'I PUC · Ch 12 · Respiration in Plants', cover:'🔋', color:'#00838F', page:'pu1-ch12.html',
 pages:[
  {t:'Do Plants Breathe?', bg:'garden', e:'🌳💨🍃', x:'Bindu hugged a big mango tree. "Does it breathe like me?" "It respires all the time," smiled Prof. BAIO, "but it has no lungs. Leaves exchange gases through [[stomata]] and woody stems through [[lenticels]]. Each part looks after itself, and the living cells lie close to the surface, so gases reach them easily."', r:'Plants have no special respiratory organs; every living cell respires, day and night.'},
  {t:'Burning, but Slowly', bg:'lab', e:'🔥🍬🔋', x:'Prof. BAIO lit a sugar cube. Whoosh — all its energy came out as heat and light. "A cell cannot use energy like that," he said. "It breaks the C–C bonds of glucose in many small steps, each run by an [[enzyme]], and stores the energy as [[ATP]], the energy currency of the cell." This slow oxidation is [[cellular respiration]].', r:'Respiration = stepwise oxidation of food; the energy is trapped as ATP.'},
  {t:'Glucose Splits in Two', bg:'cell', e:'🍬✂️🍬', x:'In the [[cytoplasm]] Bindu watched one glucose go through ten steps of [[glycolysis]], the EMP pathway. "First the cell spends 2 ATP," said Prof. BAIO, "then it earns 4 ATP and 2 [[NADH]]." At the end, glucose had become two molecules of [[pyruvic acid]]. "Spend two, earn four, keep two!"', r:'Glycolysis: net 2 ATP + 2 NADH + 2 pyruvic acid per glucose.'},
  {t:'The Bakery Without Air', bg:'field', e:'🍞🫧🧪', x:'In a bakery the dough swelled up. "[[Yeast]] has no oxygen here," said Prof. BAIO, "so it turns pyruvic acid into [[ethanol]] and CO₂ — the bubbles lift the bread. When you sprint, your muscles make [[lactic acid]] instead." Both kinds of [[fermentation]] turn NADH back into NAD⁺ so glycolysis can go on, but they release less than 7% of the energy, and yeast dies at about 13% alcohol.', r:'Alcoholic fermentation gives ethanol + CO₂; lactic acid fermentation gives no CO₂.'},
  {t:'Into the Powerhouse', bg:'cell', e:'🏭🔁⚙️', x:'With oxygen, pyruvic acid entered the [[mitochondrial matrix]]. [[Pyruvate dehydrogenase]] cut off CO₂ and made [[acetyl CoA]]. "Now the [[Krebs cycle]] begins," said Prof. BAIO. Acetyl CoA joined oxaloacetic acid to make citric acid, and the wheel turned: 2 CO₂, 3 NADH, 1 [[FADH₂]] and 1 GTP every turn.', r:'One glucose gives two pyruvic acids, so the Krebs cycle turns twice.'},
  {t:'The Electron Waterfall', bg:'river', e:'🌊⚡💧', x:'On the inner membrane, NADH and FADH₂ poured their electrons into the [[electron transport system]]. They tumbled from complex I through [[ubiquinone]], complex III, [[cytochrome c]] and complex IV, where [[oxygen]] caught them and became water. The pumped protons rushed back through [[ATP synthase]] — F₀ the channel, F₁ the ATP maker.', r:'NADH gives 3 ATP, FADH₂ gives 2 ATP; O₂ is the final electron acceptor.'},
  {t:'Counting the Coins', bg:'city', e:'🪙🧮✅', x:'Bindu added it up on the board: glycolysis 8, link reaction 6, Krebs cycle 24 — [[38 ATP]] from one glucose! "Fats and proteins can enter this road too," said Prof. BAIO, "and the same road also builds fatty acids and amino acids. That is why respiration is an [[amphibolic pathway]]."', r:'Balance sheet: 8 + 6 + 24 = 38 ATP (theoretical).'},
  {t:'The Seed Test', bg:'garden', e:'🌱🌰📏', x:'Bindu put germinating wheat seeds and groundnut seeds in two [[respirometers]]. Wheat gave out as much CO₂ as the O₂ it took in. Groundnut took in more O₂. "That ratio is the [[respiratory quotient]]," said Prof. BAIO. "Carbohydrates 1, fats about 0.7 — tripalmitin gives 102 CO₂ for 145 O₂ — and proteins about 0.9."', r:'RQ = volume of CO₂ released ÷ volume of O₂ consumed.'}],
 quiz:[['Glycolysis takes place in the:',['Matrix','Cytoplasm','Inner membrane','Nucleus'],1],['Which fermentation releases no CO₂?',['Alcoholic','Lactic acid','Both','Neither'],1],['The final electron acceptor in aerobic respiration is:',['NAD⁺','Cytochrome c','Oxygen','Ubiquinone'],2],['Net ATP per glucose in aerobic respiration (NCERT) is:',['2','36','38','24'],2],['The RQ of fat is about:',['1','0.7','0.9','1.3'],1]]};
""")
append('stories/books-pu1-kn.js', r"""
BOOKS_I18N.kn['pu1-ch12'] = { title:'ಪ್ರತಿ ಕೋಶದಲ್ಲಿನ ವಿದ್ಯುತ್ ಕೇಂದ್ರ', ch:'I PUC · ಅಧ್ಯಾಯ 12 · ಸಸ್ಯಗಳಲ್ಲಿ ಉಸಿರಾಟ',
 p:[
  ['ಸಸ್ಯಗಳು ಉಸಿರಾಡುತ್ತವೆಯೇ?','ಬಿಂದು ದೊಡ್ಡ ಮಾವಿನ ಮರವನ್ನು ಅಪ್ಪಿಕೊಂಡಳು. "ಇದೂ ನನ್ನಂತೆ ಉಸಿರಾಡುತ್ತದೆಯೇ?" "ಇದು ಸದಾ ಉಸಿರಾಟ ನಡೆಸುತ್ತದೆ," ಎಂದು ನಕ್ಕರು ಪ್ರೊ. BAIO, "ಆದರೆ ಇದಕ್ಕೆ ಶ್ವಾಸಕೋಶಗಳಿಲ್ಲ. ಎಲೆಗಳು [[stomata]] ಮೂಲಕ, ಮರದ ಕಾಂಡಗಳು [[lenticels]] ಮೂಲಕ ಅನಿಲ ವಿನಿಮಯ ಮಾಡುತ್ತವೆ. ಪ್ರತಿ ಭಾಗ ತನ್ನನ್ನು ತಾನೇ ನೋಡಿಕೊಳ್ಳುತ್ತದೆ, ಜೀವಂತ ಕೋಶಗಳು ಮೇಲ್ಮೈ ಹತ್ತಿರವೇ ಇರುವುದರಿಂದ ಅನಿಲಗಳು ಸುಲಭವಾಗಿ ತಲುಪುತ್ತವೆ."','ಸಸ್ಯಗಳಿಗೆ ವಿಶೇಷ ಉಸಿರಾಟದ ಅಂಗಗಳಿಲ್ಲ; ಪ್ರತಿ ಜೀವಂತ ಕೋಶ ಹಗಲು ರಾತ್ರಿ ಉಸಿರಾಟ ನಡೆಸುತ್ತದೆ.'],
  ['ಉರಿಯುವುದು, ಆದರೆ ನಿಧಾನವಾಗಿ','ಪ್ರೊ. BAIO ಸಕ್ಕರೆ ತುಂಡಿಗೆ ಬೆಂಕಿ ಹಚ್ಚಿದರು. ಅದರ ಎಲ್ಲಾ ಶಕ್ತಿ ಒಮ್ಮೆಲೇ ಶಾಖ ಮತ್ತು ಬೆಳಕಾಗಿ ಹೊರಬಂತು. "ಕೋಶ ಹೀಗೆ ಶಕ್ತಿ ಬಳಸಲಾರದು," ಎಂದರು. "ಅದು ಗ್ಲೂಕೋಸ್‌ನ C–C ಬಂಧಗಳನ್ನು ಅನೇಕ ಸಣ್ಣ ಹಂತಗಳಲ್ಲಿ, ಪ್ರತಿಯೊಂದನ್ನೂ ಒಂದು [[enzyme]] ನಡೆಸುವಂತೆ ಮುರಿದು, ಶಕ್ತಿಯನ್ನು ಕೋಶದ ಶಕ್ತಿ ನಾಣ್ಯವಾದ [[ATP]] ಆಗಿ ಸಂಗ್ರಹಿಸುತ್ತದೆ." ಈ ನಿಧಾನ ಆಕ್ಸಿಡೀಕರಣವೇ [[cellular respiration]].','ಉಸಿರಾಟ = ಆಹಾರದ ಹಂತ ಹಂತದ ಆಕ್ಸಿಡೀಕರಣ; ಶಕ್ತಿ ATP ಆಗಿ ಸಂಗ್ರಹ.'],
  ['ಗ್ಲೂಕೋಸ್ ಎರಡಾಗಿ ಒಡೆಯುತ್ತದೆ','[[cytoplasm]] ನಲ್ಲಿ ಒಂದು ಗ್ಲೂಕೋಸ್ [[glycolysis]], ಅಂದರೆ EMP ಪಥದ ಹತ್ತು ಹಂತಗಳನ್ನು ಹಾದುಹೋಗುವುದನ್ನು ಬಿಂದು ನೋಡಿದಳು. "ಮೊದಲು ಕೋಶ 2 ATP ಖರ್ಚು ಮಾಡುತ್ತದೆ," ಎಂದರು ಪ್ರೊ. BAIO, "ನಂತರ 4 ATP ಮತ್ತು 2 [[NADH]] ಗಳಿಸುತ್ತದೆ." ಕೊನೆಗೆ ಗ್ಲೂಕೋಸ್ ಎರಡು ಅಣು [[pyruvic acid]] ಆಗಿತ್ತು. "ಎರಡು ಖರ್ಚು, ನಾಲ್ಕು ಗಳಿಕೆ, ಎರಡು ಉಳಿಕೆ!"','ಗ್ಲೈಕಾಲಿಸಿಸ್: ಪ್ರತಿ ಗ್ಲೂಕೋಸ್‌ಗೆ ನಿವ್ವಳ 2 ATP + 2 NADH + 2 ಪೈರುವಿಕ್ ಆಮ್ಲ.'],
  ['ಗಾಳಿಯಿಲ್ಲದ ಬೇಕರಿ','ಬೇಕರಿಯಲ್ಲಿ ಹಿಟ್ಟು ಉಬ್ಬಿತು. "ಇಲ್ಲಿ [[Yeast]] ಗೆ ಆಮ್ಲಜನಕ ಇಲ್ಲ," ಎಂದರು ಪ್ರೊ. BAIO, "ಹಾಗಾಗಿ ಅದು ಪೈರುವಿಕ್ ಆಮ್ಲವನ್ನು [[ethanol]] ಮತ್ತು CO₂ ಆಗಿಸುತ್ತದೆ — ಗುಳ್ಳೆಗಳು ಬ್ರೆಡ್ ಉಬ್ಬಿಸುತ್ತವೆ. ನೀನು ಓಡುವಾಗ ನಿನ್ನ ಸ್ನಾಯುಗಳು [[lactic acid]] ತಯಾರಿಸುತ್ತವೆ." ಎರಡೂ ಬಗೆಯ [[fermentation]] NADH ಅನ್ನು ಮತ್ತೆ NAD⁺ ಆಗಿಸಿ ಗ್ಲೈಕಾಲಿಸಿಸ್ ಮುಂದುವರಿಸುತ್ತವೆ, ಆದರೆ 7% ಕ್ಕಿಂತ ಕಡಿಮೆ ಶಕ್ತಿ ನೀಡುತ್ತವೆ; ಸುಮಾರು 13% ಆಲ್ಕೋಹಾಲ್‌ನಲ್ಲಿ ಯೀಸ್ಟ್ ಸಾಯುತ್ತದೆ.','ಆಲ್ಕೋಹಾಲ್ ಹುದುಗುವಿಕೆ: ಎಥೆನಾಲ್ + CO₂; ಲ್ಯಾಕ್ಟಿಕ್ ಆಮ್ಲ ಹುದುಗುವಿಕೆ: CO₂ ಇಲ್ಲ.'],
  ['ಶಕ್ತಿಗೃಹದ ಒಳಗೆ','ಆಮ್ಲಜನಕ ಇದ್ದಾಗ ಪೈರುವಿಕ್ ಆಮ್ಲ [[mitochondrial matrix]] ಪ್ರವೇಶಿಸಿತು. [[Pyruvate dehydrogenase]] CO₂ ತೆಗೆದು [[acetyl CoA]] ತಯಾರಿಸಿತು. "ಈಗ [[Krebs cycle]] ಆರಂಭ," ಎಂದರು ಪ್ರೊ. BAIO. ಅಸಿಟೈಲ್ CoA ಆಕ್ಸಲೋಅಸಿಟಿಕ್ ಆಮ್ಲದೊಂದಿಗೆ ಸೇರಿ ಸಿಟ್ರಿಕ್ ಆಮ್ಲವಾಯಿತು, ಚಕ್ರ ತಿರುಗಿತು: ಪ್ರತಿ ಸುತ್ತಿಗೆ 2 CO₂, 3 NADH, 1 [[FADH₂]] ಮತ್ತು 1 GTP.','ಒಂದು ಗ್ಲೂಕೋಸ್ ಎರಡು ಪೈರುವಿಕ್ ಆಮ್ಲ ನೀಡುವುದರಿಂದ ಕ್ರೆಬ್ಸ್ ಚಕ್ರ ಎರಡು ಬಾರಿ ಸುತ್ತುತ್ತದೆ.'],
  ['ಎಲೆಕ್ಟ್ರಾನ್ ಜಲಪಾತ','ಒಳಪೊರೆಯ ಮೇಲೆ NADH ಮತ್ತು FADH₂ ತಮ್ಮ ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳನ್ನು [[electron transport system]] ಗೆ ಸುರಿದವು. ಅವು ಸಂಕೀರ್ಣ I ರಿಂದ [[ubiquinone]], ಸಂಕೀರ್ಣ III, [[cytochrome c]] ಮತ್ತು ಸಂಕೀರ್ಣ IV ಮೂಲಕ ಉರುಳಿದವು; ಅಲ್ಲಿ [[oxygen]] ಅವನ್ನು ಹಿಡಿದು ನೀರಾಯಿತು. ಪಂಪ್ ಮಾಡಿದ ಪ್ರೋಟಾನ್‌ಗಳು [[ATP synthase]] ಮೂಲಕ ಹಿಂತಿರುಗಿದವು — F₀ ಕಾಲುವೆ, F₁ ATP ತಯಾರಕ.','NADH ನಿಂದ 3 ATP, FADH₂ ನಿಂದ 2 ATP; O₂ ಅಂತಿಮ ಎಲೆಕ್ಟ್ರಾನ್ ಸ್ವೀಕಾರಕ.'],
  ['ನಾಣ್ಯಗಳ ಎಣಿಕೆ','ಬಿಂದು ಬೋರ್ಡ್ ಮೇಲೆ ಕೂಡಿಸಿದಳು: ಗ್ಲೈಕಾಲಿಸಿಸ್ 8, ಸಂಪರ್ಕ ಕ್ರಿಯೆ 6, ಕ್ರೆಬ್ಸ್ ಚಕ್ರ 24 — ಒಂದು ಗ್ಲೂಕೋಸ್‌ನಿಂದ [[38 ATP]]! "ಕೊಬ್ಬು ಮತ್ತು ಪ್ರೋಟೀನ್‌ಗಳೂ ಇದೇ ದಾರಿಗೆ ಬರಬಲ್ಲವು," ಎಂದರು ಪ್ರೊ. BAIO, "ಮತ್ತು ಇದೇ ದಾರಿ ಕೊಬ್ಬಿನಾಮ್ಲ, ಅಮೈನೋ ಆಮ್ಲಗಳನ್ನೂ ನಿರ್ಮಿಸುತ್ತದೆ. ಅದಕ್ಕೇ ಉಸಿರಾಟ ಒಂದು [[amphibolic pathway]]."','ಲೆಕ್ಕಪತ್ರ: 8 + 6 + 24 = 38 ATP (ಸೈದ್ಧಾಂತಿಕ).'],
  ['ಬೀಜಗಳ ಪರೀಕ್ಷೆ','ಬಿಂದು ಮೊಳಕೆಯೊಡೆಯುತ್ತಿರುವ ಗೋಧಿ ಮತ್ತು ಶೇಂಗಾ ಬೀಜಗಳನ್ನು ಎರಡು [[respirometers]] ಗಳಲ್ಲಿ ಇಟ್ಟಳು. ಗೋಧಿ ತೆಗೆದುಕೊಂಡ O₂ ನಷ್ಟೇ CO₂ ಬಿಟ್ಟಿತು. ಶೇಂಗಾ ಹೆಚ್ಚು O₂ ತೆಗೆದುಕೊಂಡಿತು. "ಆ ಅನುಪಾತವೇ [[respiratory quotient]]," ಎಂದರು ಪ್ರೊ. BAIO. "ಕಾರ್ಬೋಹೈಡ್ರೇಟ್ 1, ಕೊಬ್ಬು ಸುಮಾರು 0.7 — ಟ್ರೈಪಾಮಿಟಿನ್ 145 O₂ ಗೆ 102 CO₂ — ಮತ್ತು ಪ್ರೋಟೀನ್ ಸುಮಾರು 0.9."','RQ = ಬಿಡುಗಡೆಯಾದ CO₂ ಪರಿಮಾಣ ÷ ಬಳಸಿದ O₂ ಪರಿಮಾಣ.']],
 q:[['ಗ್ಲೈಕಾಲಿಸಿಸ್ ನಡೆಯುವುದು:',['ಮ್ಯಾಟ್ರಿಕ್ಸ್','ಕೋಶದ್ರವ್ಯ','ಒಳಪೊರೆ','ಕೋಶಕೇಂದ್ರ']],['ಯಾವ ಹುದುಗುವಿಕೆ CO₂ ಬಿಡುವುದಿಲ್ಲ?',['ಆಲ್ಕೋಹಾಲ್','ಲ್ಯಾಕ್ಟಿಕ್ ಆಮ್ಲ','ಎರಡೂ','ಯಾವುದೂ ಅಲ್ಲ']],['ವಾಯುವಿಕ ಉಸಿರಾಟದ ಅಂತಿಮ ಎಲೆಕ್ಟ್ರಾನ್ ಸ್ವೀಕಾರಕ:',['NAD⁺','ಸೈಟೋಕ್ರೋಮ್ c','ಆಮ್ಲಜನಕ','ಯುಬಿಕ್ವಿನೋನ್']],['ವಾಯುವಿಕ ಉಸಿರಾಟದಲ್ಲಿ ಪ್ರತಿ ಗ್ಲೂಕೋಸ್‌ಗೆ ನಿವ್ವಳ ATP (NCERT):',['2','36','38','24']],['ಕೊಬ್ಬಿನ RQ ಸುಮಾರು:',['1','0.7','0.9','1.3']]]};
""")
append('stories/books-pu1-hi.js', r"""
BOOKS_I18N.hi['pu1-ch12'] = { title:'हर कोशिका का बिजलीघर', ch:'I PUC · अध्याय 12 · पौधों में श्वसन',
 p:[
  ['क्या पौधे साँस लेते हैं?','बिंदु ने आम के बड़े पेड़ को गले लगाया। "क्या यह भी मेरी तरह साँस लेता है?" "यह हर समय श्वसन करता है," प्रो. BAIO मुस्कुराए, "पर इसके फेफड़े नहीं हैं। पत्तियाँ [[stomata]] से और काष्ठीय तने [[lenticels]] से गैसों का विनिमय करते हैं। हर भाग अपना ध्यान खुद रखता है, और जीवित कोशिकाएँ सतह के पास होती हैं, इसलिए गैसें आसानी से पहुँच जाती हैं।"','पौधों में कोई विशेष श्वसन अंग नहीं; हर जीवित कोशिका दिन-रात श्वसन करती है।'],
  ['जलना, पर धीरे-धीरे','प्रो. BAIO ने चीनी का टुकड़ा जलाया। उसकी सारी ऊर्जा एक साथ ऊष्मा और प्रकाश बनकर निकल गई। "कोशिका ऐसे ऊर्जा का उपयोग नहीं कर सकती," उन्होंने कहा। "वह ग्लूकोज़ के C–C बंध कई छोटे चरणों में तोड़ती है, हर चरण एक [[enzyme]] चलाता है, और ऊर्जा को कोशिका की ऊर्जा मुद्रा [[ATP]] में जमा करती है।" यही धीमा ऑक्सीकरण [[cellular respiration]] है।','श्वसन = भोजन का चरणबद्ध ऑक्सीकरण; ऊर्जा ATP में जमा होती है।'],
  ['ग्लूकोज़ दो में टूटता है','[[cytoplasm]] में बिंदु ने एक ग्लूकोज़ को [[glycolysis]], यानी EMP पथ, के दस चरणों से गुज़रते देखा। "पहले कोशिका 2 ATP खर्च करती है," प्रो. BAIO बोले, "फिर 4 ATP और 2 [[NADH]] कमाती है।" अंत में ग्लूकोज़ [[pyruvic acid]] के दो अणु बन गया। "दो खर्च, चार कमाई, दो बचत!"','ग्लाइकोलाइसिस: प्रति ग्लूकोज़ शुद्ध 2 ATP + 2 NADH + 2 पाइरुविक अम्ल।'],
  ['बिना हवा की बेकरी','बेकरी में आटा फूल गया। "यहाँ [[Yeast]] को ऑक्सीजन नहीं मिलती," प्रो. BAIO ने कहा, "इसलिए वह पाइरुविक अम्ल को [[ethanol]] और CO₂ में बदलता है — बुलबुले ब्रेड को फुलाते हैं। जब तुम दौड़ती हो, तुम्हारी पेशियाँ [[lactic acid]] बनाती हैं।" दोनों तरह का [[fermentation]] NADH को फिर NAD⁺ बनाकर ग्लाइकोलाइसिस चालू रखता है, पर 7% से कम ऊर्जा देता है; लगभग 13% ऐल्कोहॉल पर यीस्ट मर जाता है।','ऐल्कोहॉली किण्वन: एथेनॉल + CO₂; लैक्टिक अम्ल किण्वन: CO₂ नहीं।'],
  ['शक्ति-गृह के अंदर','ऑक्सीजन होने पर पाइरुविक अम्ल [[mitochondrial matrix]] में गया। [[Pyruvate dehydrogenase]] ने CO₂ निकालकर [[acetyl CoA]] बनाया। "अब [[Krebs cycle]] शुरू," प्रो. BAIO ने कहा। ऐसीटिल CoA ऑक्सैलोऐसीटिक अम्ल से जुड़कर सिट्रिक अम्ल बना, और पहिया घूमा: हर चक्कर में 2 CO₂, 3 NADH, 1 [[FADH₂]] और 1 GTP।','एक ग्लूकोज़ से दो पाइरुविक अम्ल, इसलिए क्रेब्स चक्र दो बार घूमता है।'],
  ['इलेक्ट्रॉन का झरना','भीतरी झिल्ली पर NADH और FADH₂ ने अपने इलेक्ट्रॉन [[electron transport system]] में उड़ेल दिए। वे सम्मिश्र I से [[ubiquinone]], सम्मिश्र III, [[cytochrome c]] और सम्मिश्र IV से होकर लुढ़के, जहाँ [[oxygen]] ने उन्हें पकड़ा और पानी बना। पंप किए गए प्रोटॉन [[ATP synthase]] से होकर लौटे — F₀ वाहिका, F₁ ATP बनाने वाला।','NADH से 3 ATP, FADH₂ से 2 ATP; O₂ अंतिम इलेक्ट्रॉन ग्राही है।'],
  ['सिक्कों की गिनती','बिंदु ने बोर्ड पर जोड़ा: ग्लाइकोलाइसिस 8, संयोजक अभिक्रिया 6, क्रेब्स चक्र 24 — एक ग्लूकोज़ से [[38 ATP]]! "वसा और प्रोटीन भी इसी रास्ते आ सकते हैं," प्रो. BAIO ने कहा, "और यही रास्ता वसा अम्ल और अमीनो अम्ल भी बनाता है। इसीलिए श्वसन एक [[amphibolic pathway]] है।"','संतुलन चार्ट: 8 + 6 + 24 = 38 ATP (सैद्धांतिक)।'],
  ['बीजों की जाँच','बिंदु ने अंकुरित होते गेहूँ और मूँगफली के बीज दो [[respirometers]] में रखे। गेहूँ ने जितनी O₂ ली, उतनी ही CO₂ छोड़ी। मूँगफली ने अधिक O₂ ली। "यही अनुपात [[respiratory quotient]] है," प्रो. BAIO ने कहा। "कार्बोहाइड्रेट 1, वसा लगभग 0.7 — ट्राइपामिटिन 145 O₂ पर 102 CO₂ — और प्रोटीन लगभग 0.9।"','RQ = मुक्त CO₂ का आयतन ÷ प्रयुक्त O₂ का आयतन।']],
 q:[['ग्लाइकोलाइसिस होता है:',['आधात्री में','कोशिकाद्रव्य में','भीतरी झिल्ली में','केंद्रक में']],['किस किण्वन में CO₂ नहीं निकलती?',['ऐल्कोहॉली','लैक्टिक अम्ल','दोनों','कोई नहीं']],['वायवीय श्वसन में अंतिम इलेक्ट्रॉन ग्राही:',['NAD⁺','साइटोक्रोम c','ऑक्सीजन','यूबिक्विनोन']],['वायवीय श्वसन में प्रति ग्लूकोज़ शुद्ध ATP (NCERT):',['2','36','38','24']],['वसा का RQ लगभग:',['1','0.7','0.9','1.3']]]};
""")

# ---------------- Flash cards ----------------
append('flashcards/fc-pu1.js', r"""
FC['pu1-ch12'] = { title:'Respiration in Plants', ch:'I PUC · Ch 12 · Respiration in Plants', color:'#00838F', page:'pu1-ch12.html', cards:[
 {t:'Respiration Basics', p:[['Respiration','C–C bonds broken step by step; energy trapped as ATP'],['Substrate','Usually glucose; fats and proteins too'],['Gas exchange','Stomata and lenticels; no special organs'],['ATP','Energy currency of the cell']], f:{k:'emoji', e:'🌳 💨 🔋'}},
 {t:'Glycolysis', p:[['Where','Cytoplasm; all living organisms'],['Also called','EMP pathway (10 steps)'],['ATP','2 used, 4 made → net 2'],['Products','2 pyruvic acid + 2 NADH']], f:{k:'flow', s:['Glucose','G-6-P','F-1,6-bisP','PGAL','Pyruvic acid']}},
 {t:'Fermentation', p:[['Alcoholic','Yeast: ethanol + CO₂'],['Lactic acid','Muscle, bacteria: no CO₂'],['Why','NADH → NAD⁺ so glycolysis goes on'],['Limits','< 7% energy; yeast dies at ~13% alcohol']], f:{k:'table', h:['','Alcoholic','Lactic'], r:[['Organism','Yeast','Muscle'],['CO₂','Yes','No'],['Enzyme','Alcohol DH','Lactate DH']]}},
 {t:'Link Reaction & Krebs Cycle', p:[['Link','Pyruvic acid → acetyl CoA + CO₂ + NADH'],['Start','Acetyl CoA + OAA → citric acid'],['Per turn','2 CO₂, 3 NADH, 1 FADH₂, 1 GTP'],['Per glucose','2 turns; matrix']], f:{k:'flow', s:['Citric','α-KG','Succinic','Malic','OAA']}},
 {t:'Electron Transport System', p:[['Where','Inner mitochondrial membrane'],['Order','I → UQ → III → cyt c → IV → O₂'],['FADH₂','Enters at complex II'],['Final acceptor','O₂, forming water']], f:{k:'flow', s:['NADH','I','UQ','III','cyt c','IV','O₂']}},
 {t:'ATP Synthase', p:[['Complex V','F₀ + F₁'],['F₀','Proton channel in the membrane'],['F₁','Head that makes ATP'],['Yield','NADH 3 ATP · FADH₂ 2 ATP']], f:{k:'emoji', e:'🌊 ⚙️ 🔋'}},
 {t:'Balance Sheet & Amphibolic', p:[['Glycolysis','8 ATP'],['Link reaction','6 ATP'],['Krebs cycle','24 ATP → total 38'],['Amphibolic','Breaks down and builds up']], f:{k:'table', h:['Stage','ATP'], r:[['Glycolysis','8'],['Link','6'],['Krebs','24'],['Total','38']]}},
 {t:'Respiratory Quotient', p:[['RQ','CO₂ released ÷ O₂ used'],['Carbohydrate','1 (6 CO₂ / 6 O₂)'],['Fat','0.7 (tripalmitin 102 / 145)'],['Protein','About 0.9']], f:{k:'table', h:['Substrate','RQ'], r:[['Carbohydrate','1'],['Protein','~0.9'],['Fat','0.7']]}}]};
""")
append('flashcards/fc-pu1-kn.js', r"""
FC_I18N.kn['pu1-ch12'] = { title:'ಸಸ್ಯಗಳಲ್ಲಿ ಉಸಿರಾಟ', ch:'I PUC · ಅಧ್ಯಾಯ 12 · ಸಸ್ಯಗಳಲ್ಲಿ ಉಸಿರಾಟ', cards:[
 {t:'ಉಸಿರಾಟದ ಮೂಲಾಂಶಗಳು', p:[['ಉಸಿರಾಟ','C–C ಬಂಧಗಳು ಹಂತ ಹಂತವಾಗಿ ಮುರಿದು ಶಕ್ತಿ ATP ಆಗಿ ಸಂಗ್ರಹ'],['ಆಧಾರವಸ್ತು','ಸಾಮಾನ್ಯವಾಗಿ ಗ್ಲೂಕೋಸ್; ಕೊಬ್ಬು, ಪ್ರೋಟೀನ್ ಕೂಡ'],['ಅನಿಲ ವಿನಿಮಯ','ಪತ್ರರಂಧ್ರ ಮತ್ತು ವಾತರಂಧ್ರ; ವಿಶೇಷ ಅಂಗಗಳಿಲ್ಲ'],['ATP','ಕೋಶದ ಶಕ್ತಿ ನಾಣ್ಯ']]},
 {t:'ಗ್ಲೈಕಾಲಿಸಿಸ್', p:[['ಎಲ್ಲಿ','ಕೋಶದ್ರವ್ಯ; ಎಲ್ಲಾ ಜೀವಿಗಳಲ್ಲಿ'],['ಇನ್ನೊಂದು ಹೆಸರು','EMP ಪಥ (10 ಹಂತಗಳು)'],['ATP','2 ಬಳಕೆ, 4 ಉತ್ಪತ್ತಿ → ನಿವ್ವಳ 2'],['ಉತ್ಪನ್ನಗಳು','2 ಪೈರುವಿಕ್ ಆಮ್ಲ + 2 NADH']], f:{s:['ಗ್ಲೂಕೋಸ್','G-6-P','F-1,6-bisP','PGAL','ಪೈರುವಿಕ್ ಆಮ್ಲ']}},
 {t:'ಹುದುಗುವಿಕೆ', p:[['ಆಲ್ಕೋಹಾಲ್','ಯೀಸ್ಟ್: ಎಥೆನಾಲ್ + CO₂'],['ಲ್ಯಾಕ್ಟಿಕ್ ಆಮ್ಲ','ಸ್ನಾಯು, ಬ್ಯಾಕ್ಟೀರಿಯಾ: CO₂ ಇಲ್ಲ'],['ಏಕೆ','NADH → NAD⁺, ಗ್ಲೈಕಾಲಿಸಿಸ್ ಮುಂದುವರಿಕೆ'],['ಮಿತಿ','< 7% ಶಕ್ತಿ; ~13% ಆಲ್ಕೋಹಾಲ್‌ನಲ್ಲಿ ಯೀಸ್ಟ್ ಸಾವು']], f:{h:['','ಆಲ್ಕೋಹಾಲ್','ಲ್ಯಾಕ್ಟಿಕ್'], r:[['ಜೀವಿ','ಯೀಸ್ಟ್','ಸ್ನಾಯು'],['CO₂','ಹೌದು','ಇಲ್ಲ'],['ಕಿಣ್ವ','ಆಲ್ಕೋಹಾಲ್ DH','ಲ್ಯಾಕ್ಟೇಟ್ DH']]}},
 {t:'ಸಂಪರ್ಕ ಕ್ರಿಯೆ ಮತ್ತು ಕ್ರೆಬ್ಸ್ ಚಕ್ರ', p:[['ಸಂಪರ್ಕ','ಪೈರುವಿಕ್ ಆಮ್ಲ → ಅಸಿಟೈಲ್ CoA + CO₂ + NADH'],['ಆರಂಭ','ಅಸಿಟೈಲ್ CoA + OAA → ಸಿಟ್ರಿಕ್ ಆಮ್ಲ'],['ಪ್ರತಿ ಸುತ್ತು','2 CO₂, 3 NADH, 1 FADH₂, 1 GTP'],['ಪ್ರತಿ ಗ್ಲೂಕೋಸ್','2 ಸುತ್ತು; ಮ್ಯಾಟ್ರಿಕ್ಸ್']], f:{s:['ಸಿಟ್ರಿಕ್','α-KG','ಸಕ್ಸಿನಿಕ್','ಮ್ಯಾಲಿಕ್','OAA']}},
 {t:'ಎಲೆಕ್ಟ್ರಾನ್ ಸಾಗಣೆ ವ್ಯವಸ್ಥೆ', p:[['ಎಲ್ಲಿ','ಒಳ ಮೈಟೋಕಾಂಡ್ರಿಯಲ್ ಪೊರೆ'],['ಕ್ರಮ','I → UQ → III → cyt c → IV → O₂'],['FADH₂','ಸಂಕೀರ್ಣ II ರಲ್ಲಿ ಪ್ರವೇಶ'],['ಅಂತಿಮ ಸ್ವೀಕಾರಕ','O₂, ನೀರು ಉಂಟಾಗುತ್ತದೆ']], f:{s:['NADH','I','UQ','III','cyt c','IV','O₂']}},
 {t:'ATP ಸಿಂಥೇಸ್', p:[['ಸಂಕೀರ್ಣ V','F₀ + F₁'],['F₀','ಪೊರೆಯಲ್ಲಿನ ಪ್ರೋಟಾನ್ ಕಾಲುವೆ'],['F₁','ATP ತಯಾರಿಸುವ ತಲೆ'],['ಇಳುವರಿ','NADH 3 ATP · FADH₂ 2 ATP']]},
 {t:'ಲೆಕ್ಕಪತ್ರ ಮತ್ತು ಉಭಯಚಯಾಪಚಯಿ', p:[['ಗ್ಲೈಕಾಲಿಸಿಸ್','8 ATP'],['ಸಂಪರ್ಕ ಕ್ರಿಯೆ','6 ATP'],['ಕ್ರೆಬ್ಸ್ ಚಕ್ರ','24 ATP → ಒಟ್ಟು 38'],['ಉಭಯಚಯಾಪಚಯಿ','ವಿಘಟನೆ ಮತ್ತು ನಿರ್ಮಾಣ ಎರಡೂ']], f:{h:['ಹಂತ','ATP'], r:[['ಗ್ಲೈಕಾಲಿಸಿಸ್','8'],['ಸಂಪರ್ಕ','6'],['ಕ್ರೆಬ್ಸ್','24'],['ಒಟ್ಟು','38']]}},
 {t:'ಉಸಿರಾಟದ ಅನುಪಾತ', p:[['RQ','ಬಿಡುಗಡೆಯಾದ CO₂ ÷ ಬಳಸಿದ O₂'],['ಕಾರ್ಬೋಹೈಡ್ರೇಟ್','1 (6 CO₂ / 6 O₂)'],['ಕೊಬ್ಬು','0.7 (ಟ್ರೈಪಾಮಿಟಿನ್ 102 / 145)'],['ಪ್ರೋಟೀನ್','ಸುಮಾರು 0.9']], f:{h:['ಆಧಾರವಸ್ತು','RQ'], r:[['ಕಾರ್ಬೋಹೈಡ್ರೇಟ್','1'],['ಪ್ರೋಟೀನ್','~0.9'],['ಕೊಬ್ಬು','0.7']]}}]};
""")
append('flashcards/fc-pu1-hi.js', r"""
FC_I18N.hi['pu1-ch12'] = { title:'पौधों में श्वसन', ch:'I PUC · अध्याय 12 · पौधों में श्वसन', cards:[
 {t:'श्वसन की मूल बातें', p:[['श्वसन','C–C बंध चरणबद्ध टूटते हैं; ऊर्जा ATP में जमा'],['क्रियाधार','प्रायः ग्लूकोज़; वसा और प्रोटीन भी'],['गैस विनिमय','रंध्र और वातरंध्र; कोई विशेष अंग नहीं'],['ATP','कोशिका की ऊर्जा मुद्रा']]},
 {t:'ग्लाइकोलाइसिस', p:[['कहाँ','कोशिकाद्रव्य; सभी जीवों में'],['दूसरा नाम','EMP पथ (10 चरण)'],['ATP','2 खर्च, 4 बने → शुद्ध 2'],['उत्पाद','2 पाइरुविक अम्ल + 2 NADH']], f:{s:['ग्लूकोज़','G-6-P','F-1,6-bisP','PGAL','पाइरुविक अम्ल']}},
 {t:'किण्वन', p:[['ऐल्कोहॉली','यीस्ट: एथेनॉल + CO₂'],['लैक्टिक अम्ल','पेशी, जीवाणु: CO₂ नहीं'],['क्यों','NADH → NAD⁺, ग्लाइकोलाइसिस चालू'],['सीमा','< 7% ऊर्जा; ~13% ऐल्कोहॉल पर यीस्ट की मृत्यु']], f:{h:['','ऐल्कोहॉली','लैक्टिक'], r:[['जीव','यीस्ट','पेशी'],['CO₂','हाँ','नहीं'],['एंजाइम','ऐल्कोहॉल DH','लैक्टेट DH']]}},
 {t:'संयोजक अभिक्रिया और क्रेब्स चक्र', p:[['संयोजक','पाइरुविक अम्ल → ऐसीटिल CoA + CO₂ + NADH'],['शुरुआत','ऐसीटिल CoA + OAA → सिट्रिक अम्ल'],['हर चक्कर','2 CO₂, 3 NADH, 1 FADH₂, 1 GTP'],['हर ग्लूकोज़','2 चक्कर; आधात्री']], f:{s:['सिट्रिक','α-KG','सक्सिनिक','मैलिक','OAA']}},
 {t:'इलेक्ट्रॉन परिवहन तंत्र', p:[['कहाँ','भीतरी माइटोकॉन्ड्रियल झिल्ली'],['क्रम','I → UQ → III → cyt c → IV → O₂'],['FADH₂','सम्मिश्र II पर प्रवेश'],['अंतिम ग्राही','O₂, पानी बनता है']], f:{s:['NADH','I','UQ','III','cyt c','IV','O₂']}},
 {t:'ATP सिंथेज़', p:[['सम्मिश्र V','F₀ + F₁'],['F₀','झिल्ली में प्रोटॉन वाहिका'],['F₁','ATP बनाने वाला सिर'],['उपज','NADH 3 ATP · FADH₂ 2 ATP']]},
 {t:'संतुलन चार्ट और उभयधर्मी', p:[['ग्लाइकोलाइसिस','8 ATP'],['संयोजक अभिक्रिया','6 ATP'],['क्रेब्स चक्र','24 ATP → कुल 38'],['उभयधर्मी','तोड़ता भी है, बनाता भी है']], f:{h:['चरण','ATP'], r:[['ग्लाइकोलाइसिस','8'],['संयोजक','6'],['क्रेब्स','24'],['कुल','38']]}},
 {t:'श्वसन गुणांक', p:[['RQ','मुक्त CO₂ ÷ प्रयुक्त O₂'],['कार्बोहाइड्रेट','1 (6 CO₂ / 6 O₂)'],['वसा','0.7 (ट्राइपामिटिन 102 / 145)'],['प्रोटीन','लगभग 0.9']], f:{h:['क्रियाधार','RQ'], r:[['कार्बोहाइड्रेट','1'],['प्रोटीन','~0.9'],['वसा','0.7']]}}]};
""")

# ---------------- Activities ----------------
append('activities/acts-pu1.js', r"""
ACTS['pu1-ch12'] = { title:'Catch the Cells Breathing', ch:'I PUC · Ch 12 · Respiration in Plants', cover:'🫧', color:'#00838F', page:'pu1-ch12.html',
 hands:[
  {t:'Germinating Seeds Give Out CO₂', icon:'🌱', where:'lab', time:'45 minutes (seeds soaked a day before)',
   concept:'Living, germinating seeds respire and release carbon dioxide, which turns lime water milky.',
   need:['A handful of germinating gram or wheat seeds (soaked overnight)','A few boiled (dead) seeds for comparison','Two conical flasks or wide bottles with corks','Two small test tubes with fresh lime water','Thread to hang the test tubes'],
   safety:'Lime water is mildly alkaline: do not taste it, and wash your hands after the activity.',
   steps:['Put germinating seeds in flask A and the same amount of boiled seeds in flask B.','Hang a small tube of fresh lime water inside each flask with thread, above the seeds.','Close both flasks tightly with corks.','Keep them in a warm place for 30–40 minutes.','Compare the colour of the lime water in the two flasks.'],
   cols:['Flask','Seeds','Lime water after 40 min'], rows:2,
   why:'Germinating seeds respire fast and release CO₂, which reacts with lime water (calcium hydroxide) to form white calcium carbonate, so it turns milky. Boiled seeds are dead and do not respire, so their lime water stays clear.',
   qs:['Why were boiled seeds kept in flask B?','Which gas turned the lime water milky?','Would dry, dormant seeds give the same result? Why?'],
   terms:['respiration','carbon dioxide','germination','control']},
  {t:'Yeast Blows Up a Balloon', icon:'🎈', where:'home', time:'1 hour',
   concept:'Yeast ferments sugar without oxygen and releases carbon dioxide gas.',
   need:['A small plastic bottle','One teaspoon of dry yeast','Two teaspoons of sugar','Half a cup of warm (not hot) water','A balloon'],
   safety:'Use only warm water; very hot water kills the yeast. Do not drink the mixture.',
   steps:['Pour the warm water into the bottle.','Add the sugar and the yeast and swirl gently to mix.','Stretch the balloon over the mouth of the bottle.','Keep the bottle in a warm place and check every 15 minutes.','After an hour, note the size of the balloon and smell the mixture carefully by wafting.'],
   cols:['Time (min)','Balloon size','Bubbles in the bottle?'], rows:5,
   why:'Inside the closed bottle there is little oxygen, so yeast carries out alcoholic fermentation: pyruvic acid becomes ethanol and CO₂. The CO₂ fills the balloon, and the faint alcohol smell comes from ethanol. The same CO₂ makes bread dough rise.',
   qs:['Which gas filled the balloon?','Name the other product of this fermentation.','Why does dough rise when yeast is added?'],
   terms:['fermentation','yeast','ethanol','anaerobic']}],
 digital:{type:'sort', t:'Where Does It Happen?', intro:'Tap an event, then tap where it happens.',
  bins:['Cytoplasm (glycolysis)','Mitochondrial matrix','Inner mitochondrial membrane','Fermentation (no O₂)'],
  items:[['Glucose is split into two pyruvic acids',0],['2 ATP are used and 4 ATP are made',0],['PGAL is oxidised and NADH forms',0],['Pyruvic acid becomes acetyl CoA',1],['Citric acid is formed from acetyl CoA and OAA',1],['GTP forms from succinyl CoA',1],['Electrons pass from complex I to complex IV',2],['O₂ accepts electrons and water forms',2],['ATP synthase makes ATP',2],['Yeast makes ethanol and CO₂',3],['Muscle makes lactic acid',3],['NADH is turned back into NAD⁺ without O₂',3]],
  learn:'Glycolysis runs in the cytoplasm; the link reaction and the Krebs cycle run in the matrix; the ETS and ATP synthase sit on the inner membrane; fermentation happens in the cytoplasm when oxygen is absent.',
  qs:['Which stage is common to aerobic respiration and fermentation?','Why does the ETS stop without oxygen?']}};
""")
append('activities/acts-pu1-kn.js', r"""
ACTS_I18N.kn['pu1-ch12'] = { title:'ಕೋಶಗಳು ಉಸಿರಾಡುವುದನ್ನು ಹಿಡಿಯಿರಿ', ch:'I PUC · ಅಧ್ಯಾಯ 12 · ಸಸ್ಯಗಳಲ್ಲಿ ಉಸಿರಾಟ',
 hands:[
  {t:'ಮೊಳಕೆಯೊಡೆಯುವ ಬೀಜಗಳು CO₂ ಬಿಡುತ್ತವೆ', time:'45 ನಿಮಿಷ (ಹಿಂದಿನ ದಿನ ನೆನೆಸಿದ ಬೀಜಗಳು)',
   concept:'ಜೀವಂತ, ಮೊಳಕೆಯೊಡೆಯುವ ಬೀಜಗಳು ಉಸಿರಾಡಿ ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಬಿಡುತ್ತವೆ, ಅದು ಸುಣ್ಣದ ನೀರನ್ನು ಹಾಲಿನಂತೆ ಮಾಡುತ್ತದೆ.',
   need:['ಒಂದು ಹಿಡಿ ಮೊಳಕೆಯೊಡೆಯುವ ಕಡಲೆ ಅಥವಾ ಗೋಧಿ ಬೀಜಗಳು (ರಾತ್ರಿ ನೆನೆಸಿದ)','ಹೋಲಿಕೆಗೆ ಕೆಲವು ಬೇಯಿಸಿದ (ಸತ್ತ) ಬೀಜಗಳು','ಬಿರಡೆ ಇರುವ ಎರಡು ಶಂಕುಪಾತ್ರೆ ಅಥವಾ ಅಗಲ ಬಾಟಲಿ','ತಾಜಾ ಸುಣ್ಣದ ನೀರಿನ ಎರಡು ಸಣ್ಣ ಪರೀಕ್ಷಾ ನಳಿಕೆ','ನಳಿಕೆ ತೂಗಿಸಲು ದಾರ'],
   safety:'ಸುಣ್ಣದ ನೀರು ಸ್ವಲ್ಪ ಕ್ಷಾರೀಯ: ರುಚಿ ನೋಡಬೇಡಿ, ಚಟುವಟಿಕೆಯ ನಂತರ ಕೈ ತೊಳೆಯಿರಿ.',
   steps:['ಪಾತ್ರೆ A ಯಲ್ಲಿ ಮೊಳಕೆಯೊಡೆಯುವ ಬೀಜಗಳು, ಪಾತ್ರೆ B ಯಲ್ಲಿ ಅಷ್ಟೇ ಬೇಯಿಸಿದ ಬೀಜಗಳನ್ನು ಹಾಕಿ.','ಪ್ರತಿ ಪಾತ್ರೆಯೊಳಗೆ ಬೀಜಗಳ ಮೇಲೆ ತಾಜಾ ಸುಣ್ಣದ ನೀರಿನ ಸಣ್ಣ ನಳಿಕೆಯನ್ನು ದಾರದಿಂದ ತೂಗಿಸಿ.','ಎರಡೂ ಪಾತ್ರೆಗಳನ್ನು ಬಿರಡೆಯಿಂದ ಬಿಗಿಯಾಗಿ ಮುಚ್ಚಿ.','30–40 ನಿಮಿಷ ಬೆಚ್ಚಗಿನ ಸ್ಥಳದಲ್ಲಿಡಿ.','ಎರಡೂ ಪಾತ್ರೆಗಳ ಸುಣ್ಣದ ನೀರಿನ ಬಣ್ಣ ಹೋಲಿಸಿ.'],
   cols:['ಪಾತ್ರೆ','ಬೀಜಗಳು','40 ನಿಮಿಷದ ನಂತರ ಸುಣ್ಣದ ನೀರು'],
   why:'ಮೊಳಕೆಯೊಡೆಯುವ ಬೀಜಗಳು ವೇಗವಾಗಿ ಉಸಿರಾಡಿ CO₂ ಬಿಡುತ್ತವೆ; ಅದು ಸುಣ್ಣದ ನೀರಿನೊಂದಿಗೆ (ಕ್ಯಾಲ್ಸಿಯಂ ಹೈಡ್ರಾಕ್ಸೈಡ್) ಸೇರಿ ಬಿಳಿ ಕ್ಯಾಲ್ಸಿಯಂ ಕಾರ್ಬೊನೇಟ್ ಆಗುತ್ತದೆ, ಹಾಗಾಗಿ ಹಾಲಿನಂತಾಗುತ್ತದೆ. ಬೇಯಿಸಿದ ಬೀಜಗಳು ಸತ್ತಿವೆ, ಉಸಿರಾಡುವುದಿಲ್ಲ, ಅವುಗಳ ಸುಣ್ಣದ ನೀರು ತಿಳಿಯಾಗಿಯೇ ಇರುತ್ತದೆ.',
   qs:['ಪಾತ್ರೆ B ಯಲ್ಲಿ ಬೇಯಿಸಿದ ಬೀಜಗಳನ್ನು ಏಕೆ ಇಟ್ಟಿರಿ?','ಯಾವ ಅನಿಲ ಸುಣ್ಣದ ನೀರನ್ನು ಹಾಲಿನಂತೆ ಮಾಡಿತು?','ಒಣ, ಸುಪ್ತ ಬೀಜಗಳು ಇದೇ ಫಲಿತಾಂಶ ನೀಡುತ್ತವೆಯೇ? ಏಕೆ?']},
  {t:'ಯೀಸ್ಟ್ ಬಲೂನ್ ಊದುತ್ತದೆ', time:'1 ಗಂಟೆ',
   concept:'ಯೀಸ್ಟ್ ಆಮ್ಲಜನಕವಿಲ್ಲದೆ ಸಕ್ಕರೆಯನ್ನು ಹುದುಗಿಸಿ ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಅನಿಲ ಬಿಡುತ್ತದೆ.',
   need:['ಒಂದು ಸಣ್ಣ ಪ್ಲಾಸ್ಟಿಕ್ ಬಾಟಲಿ','ಒಂದು ಚಮಚ ಒಣ ಯೀಸ್ಟ್','ಎರಡು ಚಮಚ ಸಕ್ಕರೆ','ಅರ್ಧ ಕಪ್ ಬೆಚ್ಚಗಿನ (ಬಿಸಿಯಲ್ಲದ) ನೀರು','ಒಂದು ಬಲೂನ್'],
   safety:'ಬೆಚ್ಚಗಿನ ನೀರನ್ನು ಮಾತ್ರ ಬಳಸಿ; ತುಂಬಾ ಬಿಸಿ ನೀರು ಯೀಸ್ಟ್ ಕೊಲ್ಲುತ್ತದೆ. ಮಿಶ್ರಣ ಕುಡಿಯಬೇಡಿ.',
   steps:['ಬಾಟಲಿಗೆ ಬೆಚ್ಚಗಿನ ನೀರು ಸುರಿಯಿರಿ.','ಸಕ್ಕರೆ ಮತ್ತು ಯೀಸ್ಟ್ ಸೇರಿಸಿ ನಿಧಾನವಾಗಿ ಕಲಕಿ.','ಬಾಟಲಿಯ ಬಾಯಿಗೆ ಬಲೂನ್ ಎಳೆದು ಹಾಕಿ.','ಬಾಟಲಿಯನ್ನು ಬೆಚ್ಚಗಿನ ಸ್ಥಳದಲ್ಲಿಟ್ಟು ಪ್ರತಿ 15 ನಿಮಿಷಕ್ಕೆ ನೋಡಿ.','ಒಂದು ಗಂಟೆಯ ನಂತರ ಬಲೂನ್ ಗಾತ್ರ ಗಮನಿಸಿ, ಕೈಯಿಂದ ಗಾಳಿ ಬೀಸಿ ಮಿಶ್ರಣದ ವಾಸನೆ ನೋಡಿ.'],
   cols:['ಸಮಯ (ನಿಮಿಷ)','ಬಲೂನ್ ಗಾತ್ರ','ಬಾಟಲಿಯಲ್ಲಿ ಗುಳ್ಳೆಗಳು?'],
   why:'ಮುಚ್ಚಿದ ಬಾಟಲಿಯಲ್ಲಿ ಆಮ್ಲಜನಕ ಕಡಿಮೆ, ಹಾಗಾಗಿ ಯೀಸ್ಟ್ ಆಲ್ಕೋಹಾಲ್ ಹುದುಗುವಿಕೆ ನಡೆಸುತ್ತದೆ: ಪೈರುವಿಕ್ ಆಮ್ಲ ಎಥೆನಾಲ್ ಮತ್ತು CO₂ ಆಗುತ್ತದೆ. CO₂ ಬಲೂನ್ ತುಂಬುತ್ತದೆ, ಎಥೆನಾಲ್‌ನಿಂದ ಮಸುಕಾದ ಆಲ್ಕೋಹಾಲ್ ವಾಸನೆ ಬರುತ್ತದೆ. ಇದೇ CO₂ ಬ್ರೆಡ್ ಹಿಟ್ಟನ್ನು ಉಬ್ಬಿಸುತ್ತದೆ.',
   qs:['ಯಾವ ಅನಿಲ ಬಲೂನ್ ತುಂಬಿತು?','ಈ ಹುದುಗುವಿಕೆಯ ಇನ್ನೊಂದು ಉತ್ಪನ್ನ ಹೆಸರಿಸಿ.','ಯೀಸ್ಟ್ ಸೇರಿಸಿದಾಗ ಹಿಟ್ಟು ಏಕೆ ಉಬ್ಬುತ್ತದೆ?']}],
 digital:{t:'ಇದು ಎಲ್ಲಿ ನಡೆಯುತ್ತದೆ?', intro:'ಒಂದು ಘಟನೆಯನ್ನು ಒತ್ತಿ, ನಂತರ ಅದು ನಡೆಯುವ ಸ್ಥಳವನ್ನು ಒತ್ತಿ.',
  bins:['ಕೋಶದ್ರವ್ಯ (ಗ್ಲೈಕಾಲಿಸಿಸ್)','ಮೈಟೋಕಾಂಡ್ರಿಯದ ಮ್ಯಾಟ್ರಿಕ್ಸ್','ಒಳ ಮೈಟೋಕಾಂಡ್ರಿಯಲ್ ಪೊರೆ','ಹುದುಗುವಿಕೆ (O₂ ಇಲ್ಲ)'],
  items:['ಗ್ಲೂಕೋಸ್ ಎರಡು ಪೈರುವಿಕ್ ಆಮ್ಲವಾಗಿ ವಿಭಜನೆ','2 ATP ಬಳಕೆ, 4 ATP ಉತ್ಪತ್ತಿ','PGAL ಆಕ್ಸಿಡೀಕರಣ, NADH ರಚನೆ','ಪೈರುವಿಕ್ ಆಮ್ಲ ಅಸಿಟೈಲ್ CoA ಆಗುತ್ತದೆ','ಅಸಿಟೈಲ್ CoA ಮತ್ತು OAA ಯಿಂದ ಸಿಟ್ರಿಕ್ ಆಮ್ಲ','ಸಕ್ಸಿನೈಲ್ CoA ಯಿಂದ GTP','ಸಂಕೀರ್ಣ I ರಿಂದ IV ಗೆ ಎಲೆಕ್ಟ್ರಾನ್ ಸಾಗಣೆ','O₂ ಎಲೆಕ್ಟ್ರಾನ್ ಸ್ವೀಕರಿಸಿ ನೀರು','ATP ಸಿಂಥೇಸ್ ATP ತಯಾರಿಸುತ್ತದೆ','ಯೀಸ್ಟ್ ಎಥೆನಾಲ್ ಮತ್ತು CO₂ ತಯಾರಿಸುತ್ತದೆ','ಸ್ನಾಯು ಲ್ಯಾಕ್ಟಿಕ್ ಆಮ್ಲ ತಯಾರಿಸುತ್ತದೆ','O₂ ಇಲ್ಲದೆ NADH ಮತ್ತೆ NAD⁺ ಆಗುತ್ತದೆ'],
  learn:'ಗ್ಲೈಕಾಲಿಸಿಸ್ ಕೋಶದ್ರವ್ಯದಲ್ಲಿ; ಸಂಪರ್ಕ ಕ್ರಿಯೆ ಮತ್ತು ಕ್ರೆಬ್ಸ್ ಚಕ್ರ ಮ್ಯಾಟ್ರಿಕ್ಸ್‌ನಲ್ಲಿ; ETS ಮತ್ತು ATP ಸಿಂಥೇಸ್ ಒಳಪೊರೆಯಲ್ಲಿ; ಆಮ್ಲಜನಕ ಇಲ್ಲದಿದ್ದಾಗ ಕೋಶದ್ರವ್ಯದಲ್ಲಿ ಹುದುಗುವಿಕೆ.',
  qs:['ವಾಯುವಿಕ ಉಸಿರಾಟ ಮತ್ತು ಹುದುಗುವಿಕೆಗೆ ಸಾಮಾನ್ಯವಾದ ಹಂತ ಯಾವುದು?','ಆಮ್ಲಜನಕವಿಲ್ಲದೆ ETS ಏಕೆ ನಿಲ್ಲುತ್ತದೆ?']}};
""")
append('activities/acts-pu1-hi.js', r"""
ACTS_I18N.hi['pu1-ch12'] = { title:'कोशिकाओं को साँस लेते पकड़ो', ch:'I PUC · अध्याय 12 · पौधों में श्वसन',
 hands:[
  {t:'अंकुरित बीज CO₂ छोड़ते हैं', time:'45 मिनट (बीज एक दिन पहले भिगोए)',
   concept:'जीवित, अंकुरित होते बीज श्वसन करके कार्बन डाइऑक्साइड छोड़ते हैं, जो चूने के पानी को दूधिया कर देती है।',
   need:['मुट्ठी भर अंकुरित चने या गेहूँ के बीज (रात भर भिगोए)','तुलना के लिए कुछ उबले (मृत) बीज','काग वाले दो शंक्वाकार फ्लास्क या चौड़ी बोतलें','ताज़े चूने के पानी की दो छोटी परखनलियाँ','परखनली लटकाने के लिए धागा'],
   safety:'चूने का पानी हल्का क्षारीय है: इसे चखो मत, और गतिविधि के बाद हाथ धोओ।',
   steps:['फ्लास्क A में अंकुरित बीज और फ्लास्क B में उतने ही उबले बीज रखो।','हर फ्लास्क में बीजों के ऊपर ताज़े चूने के पानी की छोटी परखनली धागे से लटकाओ।','दोनों फ्लास्क काग से कसकर बंद करो।','30–40 मिनट गरम जगह पर रखो।','दोनों फ्लास्कों के चूने के पानी का रंग मिलाओ।'],
   cols:['फ्लास्क','बीज','40 मिनट बाद चूने का पानी'],
   why:'अंकुरित बीज तेज़ी से श्वसन करके CO₂ छोड़ते हैं, जो चूने के पानी (कैल्शियम हाइड्रॉक्साइड) से मिलकर सफ़ेद कैल्शियम कार्बोनेट बनाती है, इसलिए वह दूधिया हो जाता है। उबले बीज मृत हैं, श्वसन नहीं करते, इसलिए उनका चूने का पानी साफ़ रहता है।',
   qs:['फ्लास्क B में उबले बीज क्यों रखे गए?','किस गैस ने चूने के पानी को दूधिया किया?','क्या सूखे, सुप्त बीज भी यही परिणाम देंगे? क्यों?']},
  {t:'यीस्ट गुब्बारा फुलाता है', time:'1 घंटा',
   concept:'यीस्ट ऑक्सीजन के बिना चीनी का किण्वन करके कार्बन डाइऑक्साइड गैस छोड़ता है।',
   need:['एक छोटी प्लास्टिक बोतल','एक चम्मच सूखा यीस्ट','दो चम्मच चीनी','आधा कप गुनगुना (गरम नहीं) पानी','एक गुब्बारा'],
   safety:'केवल गुनगुना पानी लो; बहुत गरम पानी यीस्ट को मार देता है। मिश्रण मत पीना।',
   steps:['बोतल में गुनगुना पानी डालो।','चीनी और यीस्ट डालकर धीरे से हिलाओ।','बोतल के मुँह पर गुब्बारा चढ़ाओ।','बोतल को गरम जगह रखो और हर 15 मिनट पर देखो।','एक घंटे बाद गुब्बारे का आकार देखो और हाथ से हवा करके मिश्रण की गंध लो।'],
   cols:['समय (मिनट)','गुब्बारे का आकार','बोतल में बुलबुले?'],
   why:'बंद बोतल में ऑक्सीजन कम है, इसलिए यीस्ट ऐल्कोहॉली किण्वन करता है: पाइरुविक अम्ल एथेनॉल और CO₂ बनता है। CO₂ गुब्बारा भरती है, और हल्की ऐल्कोहॉल गंध एथेनॉल की है। यही CO₂ ब्रेड के आटे को फुलाती है।',
   qs:['किस गैस ने गुब्बारा भरा?','इस किण्वन का दूसरा उत्पाद बताओ।','यीस्ट डालने पर आटा क्यों फूलता है?']}],
 digital:{t:'यह कहाँ होता है?', intro:'एक घटना पर टैप करो, फिर उस जगह पर टैप करो जहाँ वह होती है।',
  bins:['कोशिकाद्रव्य (ग्लाइकोलाइसिस)','माइटोकॉन्ड्रिया की आधात्री','भीतरी माइटोकॉन्ड्रियल झिल्ली','किण्वन (O₂ नहीं)'],
  items:['ग्लूकोज़ दो पाइरुविक अम्लों में टूटता है','2 ATP खर्च और 4 ATP बनते हैं','PGAL ऑक्सीकृत होता है और NADH बनता है','पाइरुविक अम्ल ऐसीटिल CoA बनता है','ऐसीटिल CoA और OAA से सिट्रिक अम्ल','सक्सिनिल CoA से GTP','इलेक्ट्रॉन सम्मिश्र I से IV तक जाते हैं','O₂ इलेक्ट्रॉन लेकर पानी बनाती है','ATP सिंथेज़ ATP बनाता है','यीस्ट एथेनॉल और CO₂ बनाता है','पेशी लैक्टिक अम्ल बनाती है','O₂ के बिना NADH फिर NAD⁺ बनता है'],
  learn:'ग्लाइकोलाइसिस कोशिकाद्रव्य में; संयोजक अभिक्रिया और क्रेब्स चक्र आधात्री में; ETS और ATP सिंथेज़ भीतरी झिल्ली पर; ऑक्सीजन न होने पर किण्वन कोशिकाद्रव्य में।',
  qs:['वायवीय श्वसन और किण्वन दोनों में कौन-सा चरण होता है?','ऑक्सीजन के बिना ETS क्यों रुक जाता है?']}};
""")

# ---------------- Game Zone ----------------
insert_before('games/riddles.js', " {id:'pu2-ch1'", r""" {id:'pu1-ch12', pu:1, ch:12, t:'Respiration in Plants', page:'pu1-ch12.html', r:[
  ['Glycolysis',['I happen in the cytoplasm.','I have ten steps.','I split glucose into two pyruvic acids.'],['Krebs cycle','Photolysis','ETS']],
  ['Acetyl CoA',['I have two carbons.','I am made from pyruvic acid in the matrix.','I join OAA to start the Krebs cycle.'],['Citric acid','PEP','Lactic acid']],
  ['Oxygen',['I am a gas.','I wait at the end of the ETS.','I accept electrons and become water.'],['Carbon dioxide','NAD⁺','Ubiquinone']],
  ['ATP synthase',['I am complex V.','I have F₀ and F₁ parts.','Protons flow through me to make ATP.'],['Cytochrome c','RuBisCO','Hexokinase']],
  ['Yeast',['I am a fungus.','I make bread rise.','Without oxygen I make ethanol and CO₂.'],['Muscle','Chlorella','Lactobacillus']],
  ['Lenticels',['I am found in bark.','I am a small opening.','Woody stems exchange gases through me.'],['Stomata','Hydathodes','Xylem']],
  ['Citric acid',['I have six carbons.','I am the first product of the Krebs cycle.','I form from acetyl CoA and OAA.'],['Malic acid','Succinic acid','Pyruvic acid']],
  ['Respiratory quotient',['I am a ratio.','I am CO₂ released divided by O₂ used.','I am 0.7 for fats.'],['Balance sheet','Amphibolic pathway','Action spectrum']],
 ]},
""")
insert_before('games/riddles-more.js', " 'pu2-ch1':[", r""" 'pu1-ch12':[
  ['Pyruvic acid',['I have three carbons.','I am the end product of glycolysis.','My fate depends on oxygen.'],['Acetyl CoA','Citric acid','Ethanol']],
  ['Lactic acid',['I form in tired muscles.','I am made without releasing CO₂.','Lactate dehydrogenase makes me.'],['Ethanol','Pyruvic acid','Citric acid']],
  ['FADH₂',['I am a reduced coenzyme.','I form when succinic acid is oxidised.','I give 2 ATP in the ETS.'],['NADH','GTP','NAD⁺']],
  ['Cytochrome c',['I am a small protein.','I am mobile.','I carry electrons from complex III to IV.'],['Ubiquinone','ATP synthase','Complex I']],
  ['Ubiquinone',['I move inside the inner membrane.','I take electrons from complexes I and II.','I pass them to complex III.'],['Cytochrome c','Oxygen','NADH']],
  ['Hexokinase',['I am an enzyme.','I use ATP.','I turn glucose into glucose-6-phosphate.'],['Invertase','Pyruvate dehydrogenase','Lactate dehydrogenase']],
  ['Amphibolic pathway',['I break molecules down.','I also build them up.','Respiration is my best example.'],['Catabolic pathway','C₂ pathway','Z scheme']],
  ['Tripalmitin',['I am a fat.','I need 145 O₂ to burn.','I give 102 CO₂, so my RQ is 0.7.'],['Glucose','Sucrose','Protein']],
 ],
""")
insert_before('games/words.js', " 'pu2-ch1':[", r""" 'pu1-ch12':[['GLYCOLYSIS','Splitting of glucose in the cytoplasm'],['PYRUVATE','Three-carbon end product of glycolysis'],['YEAST','Fungus that makes ethanol and CO₂'],['ETHANOL','Alcohol made in alcoholic fermentation'],['KREBS','Scientist of the citric acid cycle'],['CITRIC','Six-carbon acid that starts the TCA cycle'],['MATRIX','Where the Krebs cycle runs'],['OXYGEN','Final electron acceptor'],['LENTICEL','Pore in the bark for gas exchange'],['QUOTIENT','RQ = CO₂ / O₂']],
""")
insert_before('games/words-more.js', " 'pu2-ch1':[", r""" 'pu1-ch12':[['FERMENTATION','Incomplete oxidation without oxygen'],['MITOCHONDRIA','Powerhouse where aerobic respiration happens'],['UBIQUINONE','Mobile carrier between complexes I, II and III'],['CYTOCHROME','Carrier proteins of the ETS'],['SYNTHASE','ATP ___: complex V'],['AMPHIBOLIC','Both catabolic and anabolic'],['SUCCINIC','Acid oxidised to give FADH₂'],['TRIPALMITIN','Fat with an RQ of 0.7'],['INVERTASE','Enzyme that splits sucrose'],['LACTIC','Acid made in tired muscles']],
""")
insert_before('games/sequences.js', " {id:'embryo-sac'", r""" {id:'glycolysis-steps', ch:'pu1-ch12', t:'Key steps of glycolysis', s:['Glucose becomes glucose-6-phosphate (ATP used)','Fructose-6-phosphate becomes fructose 1,6-bisphosphate (ATP used)','It splits into two triose phosphates','PGAL is oxidised and NADH forms','PEP gives pyruvic acid and ATP']},
 {id:'krebs-order', ch:'pu1-ch12', t:'Acids of the Krebs cycle', s:['Citric acid (6C)','α-Ketoglutaric acid (5C)','Succinic acid (4C)','Malic acid (4C)','Oxaloacetic acid (4C)']},
 {id:'ets-path', ch:'pu1-ch12', t:'Path of electrons in the ETS', s:['NADH gives electrons to complex I','Ubiquinone carries them to complex III','Cytochrome c carries them to complex IV','Oxygen accepts them and water forms','Protons flow through ATP synthase and ATP forms']},
 {id:'aerobic-journey', ch:'pu1-ch12', t:'Journey of glucose in aerobic respiration', s:['Glycolysis in the cytoplasm','Pyruvic acid enters the matrix','Link reaction forms acetyl CoA','Krebs cycle releases CO₂, NADH and FADH₂','ETS and ATP synthase make most of the ATP']},
""")
insert_before('zone/content.js', " {t:'Robert Brown discovered", r""" {t:'Yeast stops fermenting when the alcohol reaches about 13 percent, because the alcohol poisons it.', c:'pu1-ch12'},
 {t:'Fermentation releases less than 7 percent of the energy stored in glucose.', c:'pu1-ch12'},
 {t:'One glucose gives 38 ATP in aerobic respiration, as counted in the NCERT balance sheet.', c:'pu1-ch12'},
 {t:'The Krebs cycle turns twice for every glucose, because one glucose gives two pyruvic acids.', c:'pu1-ch12'},
 {t:'Fats have a respiratory quotient of about 0.7, because they need extra oxygen to burn.', c:'pu1-ch12'},
 {t:'Bread rises because yeast releases carbon dioxide while fermenting sugar.', c:'pu1-ch12'},
""", marker="c:'pu1-ch12'")
s = open('zone/content.js', encoding='utf-8').read()
if "ch:'pu1-ch12'" not in s:
    i = s.index('ZONE.MEMES'); j = s.rindex('];', 0, i)
    add = r""",
 {a:'Glycolysis', o:['Glycolysis','Krebs cycle','Calvin cycle','ETS'], c:['I am a pathway','I happen in the cytoplasm','I need no oxygen','I split glucose into two pyruvic acids'], ch:'pu1-ch12', e:'🍬'},
 {a:'ATP synthase', o:['ATP synthase','Cytochrome c','RuBisCO','Hexokinase'], c:['I am an enzyme complex','I sit in the inner mitochondrial membrane','Protons flow through my F₀ part','My F₁ head makes ATP'], ch:'pu1-ch12', e:'⚙️'},
 {a:'Fermentation', o:['Fermentation','Photolysis','Transpiration','Krebs cycle'], c:['I happen without oxygen','Yeast does me','I make ethanol or lactic acid','I give only 2 ATP per glucose'], ch:'pu1-ch12', e:'🫧'},
 {a:'Respiratory quotient', o:['Respiratory quotient','Action spectrum','Balance sheet','Water potential'], c:['I am a ratio','I compare two gases','I am 1 for carbohydrates','I am 0.7 for fats'], ch:'pu1-ch12', e:'📏'}
"""
    k = s.rindex('}', 0, j) + 1
    s = s[:k] + add.rstrip('\n') + s[k:]
    open('zone/content.js', 'w', encoding='utf-8').write(s); print('clues added')
s = open('zone/fact-card.js', encoding='utf-8').read()
if 'pu1-ch12' not in s:
    s = s.replace("'pu1-ch11':'Photosynthesis in Higher Plants',", "'pu1-ch11':'Photosynthesis in Higher Plants','pu1-ch12':'Respiration in Plants',")
    open('zone/fact-card.js', 'w', encoding='utf-8').write(s); print('fact-card')

# Zone question bank: 60 questions from the Ch12 KCET and MCQ banks (the built page keeps the shuffled answer keys)
B = json.load(open('zone/bank-pu1.json', encoding='utf-8'))
if not any(c['id'] == 'pu1-ch12' for c in B['chapters']):
    page = open('pu1-ch12.html', encoding='utf-8').read()
    kc = json.loads(re.search(r'^const KCET_QUESTIONS = (.*);$', page, re.M).group(1))
    data = json.loads(re.search(r'^const DATA = (.*);$', page, re.M).group(1))
    qs = [{'c': 'pu1-ch12', 'q': x['q'].replace('\n', ' '), 'o': x['options'], 'a': x['answer'], 'e': x['exp'], 'd': x['difficulty']} for x in kc if x['format'] not in ('matching', 'diagram')]
    need = 60 - len(qs)
    for t in [x['id'] for x in data['topics']]:
        for x in [m for m in data['mcq'] if m['topic'] == t][14:14 + max(1, need // 8 + 1)]:
            if len(qs) < 60: qs.append({'c': 'pu1-ch12', 'q': x['q'], 'o': x['options'], 'a': x['answer'], 'e': x['exp'], 'd': x['difficulty']})
    qs = qs[:60]
    B['chapters'].append({'id': 'pu1-ch12', 'pu': 1, 'ch': 12, 'title': 'Respiration in Plants', 'page': 'pu1-ch12.html', 'n': len(qs)})
    B['q'].extend(qs)
    json.dump(B, open('zone/bank-pu1.json', 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
    print('zone bank +', len(qs))
