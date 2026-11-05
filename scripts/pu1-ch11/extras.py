#!/usr/bin/env python3
"""Adds PU-I Ch11 (Photosynthesis in Higher Plants) to Storybooks, Flash Cards, Activities and the Game Zone.
Idempotent: skips any file that already has a pu1-ch11 entry. Run from the repo root: python3 scripts/pu1-ch11/extras.py"""
import json, os, re
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.chdir(ROOT)

def append(path, text, marker="'pu1-ch11'"):
    s = open(path, encoding='utf-8').read()
    if marker in s: print('skip', path); return
    open(path, 'w', encoding='utf-8').write(s.rstrip('\n') + '\n\n' + text.strip('\n') + '\n'); print('appended', path)

def insert_before(path, anchor, text, marker="pu1-ch11"):
    s = open(path, encoding='utf-8').read()
    if marker in s: print('skip', path); return
    i = s.index(anchor)
    open(path, 'w', encoding='utf-8').write(s[:i] + text + s[i:]); print('inserted', path)

# ---------------- Storybooks ----------------
append('stories/books-pu1.js', r"""
BOOKS['pu1-ch11'] = { title:'The Kitchen Inside a Leaf', ch:'I PUC · Ch 11 · Photosynthesis in Higher Plants', cover:'🌿', color:'#3f9a3a', page:'pu1-ch11.html',
 pages:[
  {t:'A Mouse, a Candle and a Mint Plant', bg:'lab', e:'🕯️🐭🌱', x:'Prof. BAIO put a candle and a mouse under a glass jar. Soon the candle went out. "In 1770 [[Joseph Priestley]] saw this too," he said. "But when he kept a [[mint plant]] inside, the candle burned on and the mouse lived. Plants give back what burning and breathing take away." Later [[Ingenhousz]] showed that this needs [[sunlight]].', r:'Only the green parts of a plant, in light, release oxygen.'},
  {t:'Starch Only Where It Is Green', bg:'garden', e:'🍃🧪🔵', x:'Bindu tested a [[variegated leaf]] with iodine. Only the green patches turned blue-black. "[[Julius von Sachs]] found that green parts make [[glucose]] and store it as [[starch]]," said Prof. BAIO. When half a leaf was kept with [[KOH]], which soaks up CO₂, that half made no starch at all.', r:'Photosynthesis needs chlorophyll, light and CO₂.'},
  {t:'Whose Oxygen Is It?', bg:'pond', e:'💧🦠❓', x:'"Does the oxygen come from CO₂ or from water?" asked Bindu. [[Cornelius van Niel]] studied [[sulphur bacteria]] that use H₂S instead of water. They give out sulphur, not oxygen! So in plants the oxygen must come from [[water]]. Heavy-oxygen tests later proved him right.', r:'6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂ — all the O₂ comes from water.'},
  {t:'The Green Factory', bg:'cell', e:'🏭🟢⚡', x:'Inside a [[mesophyll cell]] Bindu saw many [[chloroplasts]]. "Each one is a factory," said Prof. BAIO. "The stacked [[grana]] trap light and make [[ATP]] and [[NADPH]]. The liquid [[stroma]] uses them to turn CO₂ into sugar." Four pigments help: [[chlorophyll a]], chlorophyll b, xanthophylls and carotenoids.', r:'Chlorophyll a absorbs blue and red light the most.'},
  {t:'Two Lifts and a Slide', bg:'sky', e:'🛗⚡🛝', x:'Light hit [[photosystem II]]. An electron jumped high, slid down a chain of [[cytochromes]], was lifted again by [[photosystem I]] and slid down to make NADPH. "Its path looks like the letter Z — the [[Z scheme]]," laughed Prof. BAIO. To replace the lost electrons, water split and [[oxygen]] bubbled out.', r:'PS II = P680, PS I = P700. Water splitting goes with PS II.'},
  {t:'The Proton Dam', bg:'river', e:'🌊🏞️⚙️', x:'"Protons pile up inside the thylakoid like water behind a dam," said Prof. BAIO. "They can only flow back through a turbine, [[ATP synthase]]." As they rushed through [[CF0]], the [[CF1]] head turned and made ATP. "This is [[chemiosmosis]], explained by Peter Mitchell."', r:'About three protons flowing out make one ATP.'},
  {t:'The Merry-Go-Round of Sugar', bg:'field', e:'🎠🍬🔁', x:'In the stroma a five-carbon seat, [[RuBP]], picked up CO₂ with the help of [[RuBisCO]]. It split into two [[3-PGA]]. ATP and NADPH turned these into sugar, and some was used to rebuild RuBP. "This is the [[Calvin cycle]]. Six turns make one glucose, using 18 ATP and 12 NADPH."', r:'Carboxylation → reduction → regeneration.'},
  {t:'The Maize Trick', bg:'desert', e:'🌽☀️🔥', x:'In the hot sun the wheat struggled, but the [[maize]] grew fast. "Maize is a [[C4 plant]]," said Prof. BAIO. "Its mesophyll catches CO₂ with [[PEPcase]] and passes it to big [[bundle sheath]] cells — [[Kranz anatomy]]. So RuBisCO never wastes energy on oxygen, called [[photorespiration]]. But every plant is still limited by the scarcest factor — [[Blackman]]’s law!"', r:'C4 plants: no photorespiration, higher yield, love heat.'}],
 quiz:[['The oxygen released in photosynthesis comes from:',['CO₂','Water','Glucose','Chlorophyll'],1],['The reaction centre of PS II is:',['P700','P680','P430','P660'],1],['The first stable product of the Calvin cycle is:',['OAA','RuBP','3-PGA','PEP'],2],['ATP is made when protons flow through:',['CF₀ of ATP synthase','PS I','NADP reductase','RuBisCO'],0],['Which plant has Kranz anatomy?',['Wheat','Rice','Maize','Sunflower'],2]]};
""")
append('stories/books-pu1-kn.js', r"""
BOOKS_I18N.kn['pu1-ch11'] = { title:'ಎಲೆಯೊಳಗಿನ ಅಡುಗೆಮನೆ', ch:'I PUC · ಅಧ್ಯಾಯ 11 · ಉನ್ನತ ಸಸ್ಯಗಳಲ್ಲಿ ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ',
 p:[
  ['ಇಲಿ, ಮೇಣದಬತ್ತಿ ಮತ್ತು ಪುದೀನ ಸಸ್ಯ','ಪ್ರೊ. BAIO ಗಾಜಿನ ಜಾರ್ ಅಡಿ ಮೇಣದಬತ್ತಿ ಮತ್ತು ಇಲಿಯನ್ನು ಇಟ್ಟರು. ಬೇಗ ಮೇಣದಬತ್ತಿ ಆರಿತು. "1770 ರಲ್ಲಿ [[Joseph Priestley]] ಕೂಡ ಇದನ್ನು ಕಂಡರು," ಎಂದರು. "ಆದರೆ ಒಳಗೆ [[mint plant]] ಇಟ್ಟಾಗ ಮೇಣದಬತ್ತಿ ಉರಿಯುತ್ತಲೇ ಇತ್ತು, ಇಲಿ ಬದುಕಿತು. ಉರಿಯುವಿಕೆ ಮತ್ತು ಉಸಿರಾಟ ತೆಗೆದುಕೊಳ್ಳುವುದನ್ನು ಸಸ್ಯಗಳು ಮರಳಿ ಕೊಡುತ್ತವೆ." ನಂತರ ಇದಕ್ಕೆ [[sunlight]] ಬೇಕು ಎಂದು [[Ingenhousz]] ತೋರಿಸಿದರು.','ಬೆಳಕಿನಲ್ಲಿ ಸಸ್ಯದ ಹಸಿರು ಭಾಗಗಳು ಮಾತ್ರ ಆಮ್ಲಜನಕ ಬಿಡುತ್ತವೆ.'],
  ['ಹಸಿರಿರುವಲ್ಲಿ ಮಾತ್ರ ಪಿಷ್ಟ','ಬಿಂದು [[variegated leaf]] ಅನ್ನು ಅಯೋಡಿನ್‌ನಿಂದ ಪರೀಕ್ಷಿಸಿದಳು. ಹಸಿರು ಭಾಗಗಳು ಮಾತ್ರ ನೀಲಿ-ಕಪ್ಪಾದವು. "ಹಸಿರು ಭಾಗಗಳು [[glucose]] ತಯಾರಿಸಿ [[starch]] ಆಗಿ ಸಂಗ್ರಹಿಸುತ್ತವೆ ಎಂದು [[Julius von Sachs]] ಕಂಡುಕೊಂಡರು," ಎಂದರು ಪ್ರೊ. BAIO. CO₂ ಹೀರುವ [[KOH]] ಜೊತೆ ಇಟ್ಟ ಅರ್ಧ ಎಲೆಯಲ್ಲಿ ಪಿಷ್ಟವೇ ಇರಲಿಲ್ಲ.','ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಗೆ ಪತ್ರಹರಿತ್ತು, ಬೆಳಕು ಮತ್ತು CO₂ ಬೇಕು.'],
  ['ಆಮ್ಲಜನಕ ಯಾರದು?','"ಆಮ್ಲಜನಕ CO₂ ನಿಂದ ಬರುತ್ತದೆಯೋ ನೀರಿನಿಂದಲೋ?" ಎಂದು ಕೇಳಿದಳು ಬಿಂದು. ನೀರಿನ ಬದಲು H₂S ಬಳಸುವ [[sulphur bacteria]] ಗಳನ್ನು [[Cornelius van Niel]] ಅಧ್ಯಯನ ಮಾಡಿದರು. ಅವು ಆಮ್ಲಜನಕವಲ್ಲ, ಗಂಧಕ ಬಿಡುತ್ತವೆ! ಆದ್ದರಿಂದ ಸಸ್ಯಗಳಲ್ಲಿ ಆಮ್ಲಜನಕ [[water]] ನಿಂದಲೇ ಬರಬೇಕು. ಭಾರ ಆಮ್ಲಜನಕ ಪರೀಕ್ಷೆಗಳು ನಂತರ ಇದನ್ನು ಸಾಬೀತುಪಡಿಸಿದವು.','6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂ — ಎಲ್ಲಾ O₂ ನೀರಿನಿಂದ.'],
  ['ಹಸಿರು ಕಾರ್ಖಾನೆ','[[mesophyll cell]] ಒಳಗೆ ಬಿಂದು ಅನೇಕ [[chloroplasts]] ಕಂಡಳು. "ಪ್ರತಿಯೊಂದೂ ಒಂದು ಕಾರ್ಖಾನೆ," ಎಂದರು ಪ್ರೊ. BAIO. "ರಾಶಿಯಾದ [[grana]] ಬೆಳಕು ಹಿಡಿದು [[ATP]] ಮತ್ತು [[NADPH]] ತಯಾರಿಸುತ್ತವೆ. ದ್ರವ [[stroma]] ಅವನ್ನು ಬಳಸಿ CO₂ ಅನ್ನು ಸಕ್ಕರೆಯಾಗಿಸುತ್ತದೆ." ನಾಲ್ಕು ವರ್ಣದ್ರವ್ಯಗಳು ಸಹಾಯ ಮಾಡುತ್ತವೆ: [[chlorophyll a]], ಪತ್ರಹರಿತ್ತು b, ಜ್ಯಾಂಥೋಫಿಲ್ ಮತ್ತು ಕ್ಯಾರೊಟಿನಾಯ್ಡ್.','ಪತ್ರಹರಿತ್ತು a ನೀಲಿ ಮತ್ತು ಕೆಂಪು ಬೆಳಕನ್ನು ಹೆಚ್ಚು ಹೀರುತ್ತದೆ.'],
  ['ಎರಡು ಲಿಫ್ಟ್ ಮತ್ತು ಒಂದು ಜಾರುಬಂಡಿ','ಬೆಳಕು [[photosystem II]] ಗೆ ಬಡಿಯಿತು. ಒಂದು ಎಲೆಕ್ಟ್ರಾನ್ ಎತ್ತರಕ್ಕೆ ಜಿಗಿದು, [[cytochromes]] ಸರಪಳಿಯಲ್ಲಿ ಜಾರಿ, [[photosystem I]] ನಿಂದ ಮತ್ತೆ ಎತ್ತಲ್ಪಟ್ಟು, NADPH ತಯಾರಿಸಲು ಜಾರಿತು. "ಅದರ ಮಾರ್ಗ Z ಅಕ್ಷರದಂತಿದೆ — [[Z scheme]]," ಎಂದು ನಕ್ಕರು ಪ್ರೊ. BAIO. ಕಳೆದ ಎಲೆಕ್ಟ್ರಾನ್‌ಗಳನ್ನು ಭರ್ತಿ ಮಾಡಲು ನೀರು ವಿಭಜನೆಯಾಗಿ [[oxygen]] ಗುಳ್ಳೆಗಳು ಹೊರಬಂದವು.','PS II = P680, PS I = P700. ನೀರಿನ ವಿಭಜನೆ PS II ಜೊತೆ.'],
  ['ಪ್ರೋಟಾನ್ ಅಣೆಕಟ್ಟು','"ಅಣೆಕಟ್ಟಿನ ಹಿಂದಿನ ನೀರಿನಂತೆ ಪ್ರೋಟಾನ್‌ಗಳು ಥೈಲಕಾಯ್ಡ್ ಒಳಗೆ ಸಂಗ್ರಹವಾಗುತ್ತವೆ," ಎಂದರು ಪ್ರೊ. BAIO. "ಅವು ಒಂದು ಟರ್ಬೈನ್, [[ATP synthase]] ಮೂಲಕ ಮಾತ್ರ ಹಿಂತಿರುಗಬಲ್ಲವು." ಅವು [[CF0]] ಮೂಲಕ ನುಗ್ಗಿದಾಗ [[CF1]] ತಲೆ ತಿರುಗಿ ATP ಮಾಡಿತು. "ಇದೇ [[chemiosmosis]], ಪೀಟರ್ ಮಿಚೆಲ್ ವಿವರಿಸಿದ್ದು."','ಸುಮಾರು ಮೂರು ಪ್ರೋಟಾನ್ ಹೊರಹೋದಾಗ ಒಂದು ATP.'],
  ['ಸಕ್ಕರೆಯ ತಿರುಗುವ ತೊಟ್ಟಿಲು','ಸ್ಟ್ರೋಮಾದಲ್ಲಿ ಐದು ಇಂಗಾಲದ ಆಸನ [[RuBP]], [[RuBisCO]] ಸಹಾಯದಿಂದ CO₂ ಹಿಡಿಯಿತು. ಅದು ಎರಡು [[3-PGA]] ಆಗಿ ಒಡೆಯಿತು. ATP ಮತ್ತು NADPH ಇವನ್ನು ಸಕ್ಕರೆಯಾಗಿಸಿದವು, ಸ್ವಲ್ಪ RuBP ಮರುನಿರ್ಮಾಣಕ್ಕೆ ಬಳಕೆಯಾಯಿತು. "ಇದೇ [[Calvin cycle]]. ಆರು ಸುತ್ತು ಒಂದು ಗ್ಲೂಕೋಸ್ ಮಾಡುತ್ತವೆ, 18 ATP ಮತ್ತು 12 NADPH ಬಳಸಿ."','ಕಾರ್ಬಾಕ್ಸಿಲೀಕರಣ → ಅಪಕರ್ಷಣ → ಪುನರುತ್ಪಾದನೆ.'],
  ['ಮೆಕ್ಕೆಜೋಳದ ತಂತ್ರ','ಸುಡುಬಿಸಿಲಿನಲ್ಲಿ ಗೋಧಿ ಕಷ್ಟಪಟ್ಟಿತು, ಆದರೆ [[maize]] ವೇಗವಾಗಿ ಬೆಳೆಯಿತು. "ಮೆಕ್ಕೆಜೋಳ ಒಂದು [[C4 plant]]," ಎಂದರು ಪ್ರೊ. BAIO. "ಅದರ ಪತ್ರಮಧ್ಯಕ [[PEPcase]] ನಿಂದ CO₂ ಹಿಡಿದು ದೊಡ್ಡ [[bundle sheath]] ಕೋಶಗಳಿಗೆ ಕೊಡುತ್ತದೆ — [[Kranz anatomy]]. ಹಾಗಾಗಿ RuBisCO ಆಮ್ಲಜನಕದ ಮೇಲೆ ಶಕ್ತಿ ವ್ಯರ್ಥ ಮಾಡುವುದಿಲ್ಲ, ಅದೇ [[photorespiration]]. ಆದರೂ ಪ್ರತಿ ಸಸ್ಯವನ್ನು ಅತಿ ಕಡಿಮೆ ಇರುವ ಅಂಶ ಮಿತಿಗೊಳಿಸುತ್ತದೆ — [[Blackman]] ನಿಯಮ!"','C4 ಸಸ್ಯಗಳು: ದ್ಯುತಿಶ್ವಸನ ಇಲ್ಲ, ಹೆಚ್ಚು ಇಳುವರಿ, ಬಿಸಿ ಇಷ್ಟ.']],
 q:[['ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಯಲ್ಲಿ ಬಿಡುಗಡೆಯಾಗುವ ಆಮ್ಲಜನಕ ಬರುವುದು:',['CO₂','ನೀರು','ಗ್ಲೂಕೋಸ್','ಪತ್ರಹರಿತ್ತು']],['PS II ರ ಕ್ರಿಯಾಕೇಂದ್ರ:',['P700','P680','P430','P660']],['ಕೆಲ್ವಿನ್ ಚಕ್ರದ ಮೊದಲ ಸ್ಥಿರ ಉತ್ಪನ್ನ:',['OAA','RuBP','3-PGA','PEP']],['ಪ್ರೋಟಾನ್‌ಗಳು ಇದರ ಮೂಲಕ ಹರಿದಾಗ ATP ತಯಾರಾಗುತ್ತದೆ:',['ATP ಸಿಂಥೇಸ್‌ನ CF₀','PS I','NADP ರಿಡಕ್ಟೇಸ್','RuBisCO']],['ಯಾವ ಸಸ್ಯಕ್ಕೆ ಕ್ರಾನ್ಜ್ ಅಂಗರಚನೆ ಇದೆ?',['ಗೋಧಿ','ಭತ್ತ','ಮೆಕ್ಕೆಜೋಳ','ಸೂರ್ಯಕಾಂತಿ']]]};
""")
append('stories/books-pu1-hi.js', r"""
BOOKS_I18N.hi['pu1-ch11'] = { title:'पत्ती के अंदर की रसोई', ch:'I PUC · अध्याय 11 · उच्च पादपों में प्रकाश संश्लेषण',
 p:[
  ['चूहा, मोमबत्ती और पुदीने का पौधा','प्रो. BAIO ने काँच के जार के नीचे मोमबत्ती और चूहा रखा। जल्दी ही मोमबत्ती बुझ गई। "1770 में [[Joseph Priestley]] ने भी यह देखा था," उन्होंने कहा। "पर जब उन्होंने अंदर [[mint plant]] रखा, मोमबत्ती जलती रही और चूहा जीवित रहा। जलना और साँस लेना जो छीनते हैं, पौधे वह लौटा देते हैं।" बाद में [[Ingenhousz]] ने दिखाया कि इसके लिए [[sunlight]] चाहिए।','प्रकाश में केवल पौधे के हरे भाग ऑक्सीजन छोड़ते हैं।'],
  ['मंड केवल हरे भाग में','बिंदु ने [[variegated leaf]] को आयोडीन से जाँचा। केवल हरे भाग नीले-काले हुए। "[[Julius von Sachs]] ने पाया कि हरे भाग [[glucose]] बनाते हैं और उसे [[starch]] के रूप में जमा करते हैं," प्रो. BAIO ने कहा। CO₂ सोखने वाले [[KOH]] के साथ रखी आधी पत्ती में मंड बना ही नहीं।','प्रकाश संश्लेषण के लिए पर्णहरित, प्रकाश और CO₂ चाहिए।'],
  ['ऑक्सीजन किसकी?','"ऑक्सीजन CO₂ से आती है या पानी से?" बिंदु ने पूछा। [[Cornelius van Niel]] ने पानी के बजाय H₂S लेने वाले [[sulphur bacteria]] का अध्ययन किया। वे ऑक्सीजन नहीं, गंधक छोड़ते हैं! इसलिए पौधों में ऑक्सीजन [[water]] से ही आनी चाहिए। भारी ऑक्सीजन के परीक्षणों ने बाद में यह सिद्ध किया।','6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂ — सारी O₂ पानी से।'],
  ['हरा कारखाना','[[mesophyll cell]] के अंदर बिंदु ने कई [[chloroplasts]] देखे। "हर एक कारखाना है," प्रो. BAIO बोले। "ढेरों में रखे [[grana]] प्रकाश पकड़कर [[ATP]] और [[NADPH]] बनाते हैं। तरल [[stroma]] इनसे CO₂ को शर्करा में बदलता है।" चार वर्णक मदद करते हैं: [[chlorophyll a]], पर्णहरित b, ज़ैंथोफिल और कैरोटिनॉइड।','पर्णहरित a नीला और लाल प्रकाश सबसे अधिक सोखता है।'],
  ['दो लिफ़्ट और एक फिसलपट्टी','प्रकाश [[photosystem II]] पर पड़ा। एक इलेक्ट्रॉन ऊँचा उछला, [[cytochromes]] की शृंखला पर फिसला, [[photosystem I]] ने उसे फिर उठाया, और वह NADPH बनाने को नीचे फिसला। "इसका मार्ग Z अक्षर जैसा है — [[Z scheme]]," प्रो. BAIO हँसे। खोए इलेक्ट्रॉनों की पूर्ति के लिए पानी टूटा और [[oxygen]] के बुलबुले निकले।','PS II = P680, PS I = P700. जल विघटन PS II के साथ।'],
  ['प्रोटॉन बाँध','"बाँध के पीछे पानी की तरह प्रोटॉन थायलाकॉइड के अंदर जमा होते हैं," प्रो. BAIO ने कहा। "वे केवल एक टरबाइन, [[ATP synthase]], से होकर लौट सकते हैं।" जब वे [[CF0]] से निकले, [[CF1]] का सिर घूमा और ATP बना। "यही [[chemiosmosis]] है, जिसे पीटर मिचेल ने समझाया।"','लगभग तीन प्रोटॉन बाहर निकलने पर एक ATP।'],
  ['शर्करा का झूला','स्ट्रोमा में पाँच कार्बन वाली सीट [[RuBP]] ने [[RuBisCO]] की मदद से CO₂ पकड़ी। वह दो [[3-PGA]] में टूटी। ATP और NADPH ने इन्हें शर्करा बनाया, और कुछ से RuBP फिर बनी। "यही [[Calvin cycle]] है। छह चक्कर एक ग्लूकोज़ बनाते हैं, 18 ATP और 12 NADPH लगाकर।"','कार्बोक्सिलीकरण → अपचयन → पुनर्जनन।'],
  ['मक्का की तरकीब','तेज़ धूप में गेहूँ परेशान था, पर [[maize]] तेज़ी से बढ़ा। "मक्का एक [[C4 plant]] है," प्रो. BAIO ने कहा। "इसका पर्णमध्योतक [[PEPcase]] से CO₂ पकड़कर बड़ी [[bundle sheath]] कोशिकाओं को देता है — [[Kranz anatomy]]। इसलिए RuBisCO ऑक्सीजन पर ऊर्जा व्यर्थ नहीं करता, जिसे [[photorespiration]] कहते हैं। फिर भी हर पौधे को सबसे कम उपलब्ध कारक सीमित करता है — [[Blackman]] का नियम!"','C4 पौधे: प्रकाश श्वसन नहीं, अधिक उपज, गर्मी पसंद।']],
 q:[['प्रकाश संश्लेषण में निकलने वाली ऑक्सीजन आती है:',['CO₂ से','पानी से','ग्लूकोज़ से','पर्णहरित से']],['PS II का अभिक्रिया केंद्र:',['P700','P680','P430','P660']],['केल्विन चक्र का पहला स्थायी उत्पाद:',['OAA','RuBP','3-PGA','PEP']],['प्रोटॉन किससे होकर बहें तो ATP बनता है:',['ATP सिंथेज़ का CF₀','PS I','NADP रिडक्टेज़','RuBisCO']],['किस पौधे में क्रैन्ज़ शारीरिकी है?',['गेहूँ','धान','मक्का','सूरजमुखी']]]};
""")

# ---------------- Flash cards ----------------
append('flashcards/fc-pu1.js', r"""
FC['pu1-ch11'] = { title:'Photosynthesis in Higher Plants', ch:'I PUC · Ch 11 · Photosynthesis in Higher Plants', color:'#3f9a3a', page:'pu1-ch11.html', cards:[
 {t:'Early Experiments', p:[['Priestley','Mint plant restores air fouled by candle and mouse'],['Ingenhousz','Needs sunlight; only green parts give O₂'],['Engelmann','First action spectrum with Cladophora'],['van Niel','O₂ comes from H₂O, not CO₂']], f:{k:'emoji', e:'🕯️ 🐭 🌱'}},
 {t:'Chloroplast & Pigments', p:[['Grana','Trap light; make ATP and NADPH'],['Stroma','Enzymes fix CO₂ into sugar'],['Chief pigment','Chlorophyll a (blue-green)'],['Accessory','Chl b, xanthophylls, carotenoids']], f:{k:'table', h:['Pigment','Colour'], r:[['Chl a','Blue-green'],['Chl b','Yellow-green'],['Xanthophyll','Yellow'],['Carotenoid','Yellow-orange']]}},
 {t:'Light Reaction', p:[['LHC','Antenna pigments + one chl a reaction centre'],['PS I / PS II','P700 / P680'],['Photolysis','2H₂O → 4H⁺ + O₂ + 4e⁻ (Mn, Cl)'],['Products','ATP, NADPH, O₂']], f:{k:'flow', s:['Light','PS II','ETS','PS I','NADPH']}},
 {t:'Z Scheme & Cyclic', p:[['Non-cyclic','PS II + PS I; ATP + NADPH + O₂'],['Cyclic','PS I only; ATP only'],['Where cyclic','Stroma lamellae; light above 680 nm'],['Enzyme','NADP reductase on the stroma side']], f:{k:'table', h:['','Non-cyclic','Cyclic'], r:[['PS','I + II','I only'],['O₂','Yes','No'],['NADPH','Yes','No']]}},
 {t:'Chemiosmosis', p:[['Who','Peter Mitchell (1961)'],['Gradient','H⁺ high in the lumen, low in the stroma'],['ATP synthase','CF₀ channel + CF₁ head'],['Yield','About 3 H⁺ per ATP']], f:{k:'emoji', e:'🏞️ ⚙️ 🔋'}},
 {t:'Calvin Cycle', p:[['Acceptor','RuBP (5C); enzyme RuBisCO'],['First product','3-PGA (3C)'],['Per CO₂','3 ATP + 2 NADPH'],['Per glucose','18 ATP + 12 NADPH, 6 turns']], f:{k:'flow', s:['Carboxylation','Reduction','Regeneration']}},
 {t:'C₄ Pathway', p:[['Examples','Maize, sugarcane, sorghum'],['Mesophyll','PEP + CO₂ → OAA by PEPcase'],['Bundle sheath','CO₂ released → Calvin cycle'],['Kranz','Wreath of thick-walled bundle sheath cells']], f:{k:'flow', s:['PEP','OAA','Malic acid','CO₂ to Calvin','PEP again']}},
 {t:'Photorespiration & Factors', p:[['C₂ pathway','RuBisCO binds O₂ → phosphoglycolate'],['Effect','Wasteful: no sugar, no ATP'],['C₄ plants','No photorespiration'],['Blackman','Factor nearest its minimum sets the rate']], f:{k:'table', h:['Feature','C₃','C₄'], r:[['Acceptor','RuBP','PEP'],['First product','3-PGA','OAA'],['Optimum','10–25 °C','30–45 °C']]}}]};
""")
append('flashcards/fc-pu1-kn.js', r"""
FC_I18N.kn['pu1-ch11'] = { title:'ಉನ್ನತ ಸಸ್ಯಗಳಲ್ಲಿ ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ', ch:'I PUC · ಅಧ್ಯಾಯ 11 · ಉನ್ನತ ಸಸ್ಯಗಳಲ್ಲಿ ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ', cards:[
 {t:'ಆರಂಭಿಕ ಪ್ರಯೋಗಗಳು', p:[['ಪ್ರೀಸ್ಟ್ಲಿ','ಮೇಣದಬತ್ತಿ, ಇಲಿಯಿಂದ ಕೆಟ್ಟ ಗಾಳಿಯನ್ನು ಪುದೀನ ಸಸ್ಯ ಶುದ್ಧಗೊಳಿಸುತ್ತದೆ'],['ಇಂಜೆನ್‌ಹೌಸ್','ಸೂರ್ಯನ ಬೆಳಕು ಬೇಕು; ಹಸಿರು ಭಾಗಗಳು ಮಾತ್ರ O₂ ಬಿಡುತ್ತವೆ'],['ಎಂಗೆಲ್‌ಮನ್','ಕ್ಲಾಡೋಫೊರಾ ಬಳಸಿ ಮೊದಲ ಕ್ರಿಯಾ ವರ್ಣಪಟಲ'],['ವಾನ್ ನೀಲ್','O₂ H₂O ದಿಂದ, CO₂ ದಿಂದಲ್ಲ']]},
 {t:'ಹರಿತ್ತಿಲವ ಮತ್ತು ವರ್ಣದ್ರವ್ಯಗಳು', p:[['ಗ್ರಾನಾ','ಬೆಳಕು ಹಿಡಿದು ATP, NADPH ತಯಾರಿಕೆ'],['ಸ್ಟ್ರೋಮಾ','ಕಿಣ್ವಗಳು CO₂ ಅನ್ನು ಸಕ್ಕರೆಯಾಗಿಸುತ್ತವೆ'],['ಮುಖ್ಯ ವರ್ಣದ್ರವ್ಯ','ಪತ್ರಹರಿತ್ತು a (ನೀಲಿ-ಹಸಿರು)'],['ಸಹಾಯಕ','ಪತ್ರಹರಿತ್ತು b, ಜ್ಯಾಂಥೋಫಿಲ್, ಕ್ಯಾರೊಟಿನಾಯ್ಡ್']], f:{h:['ವರ್ಣದ್ರವ್ಯ','ಬಣ್ಣ'], r:[['ಪತ್ರಹರಿತ್ತು a','ನೀಲಿ-ಹಸಿರು'],['ಪತ್ರಹರಿತ್ತು b','ಹಳದಿ-ಹಸಿರು'],['ಜ್ಯಾಂಥೋಫಿಲ್','ಹಳದಿ'],['ಕ್ಯಾರೊಟಿನಾಯ್ಡ್','ಹಳದಿ-ಕಿತ್ತಳೆ']]}},
 {t:'ಬೆಳಕಿನ ಕ್ರಿಯೆ', p:[['LHC','ಆಂಟೆನಾ ವರ್ಣದ್ರವ್ಯಗಳು + ಒಂದು ಪತ್ರಹರಿತ್ತು a ಕ್ರಿಯಾಕೇಂದ್ರ'],['PS I / PS II','P700 / P680'],['ದ್ಯುತಿವಿಭಜನೆ','2H₂O → 4H⁺ + O₂ + 4e⁻ (Mn, Cl)'],['ಉತ್ಪನ್ನಗಳು','ATP, NADPH, O₂']], f:{s:['ಬೆಳಕು','PS II','ETS','PS I','NADPH']}},
 {t:'Z ಯೋಜನೆ ಮತ್ತು ಚಕ್ರೀಯ', p:[['ಚಕ್ರೀಯವಲ್ಲದ','PS II + PS I; ATP + NADPH + O₂'],['ಚಕ್ರೀಯ','PS I ಮಾತ್ರ; ATP ಮಾತ್ರ'],['ಚಕ್ರೀಯ ಎಲ್ಲಿ','ಸ್ಟ್ರೋಮಾ ಲ್ಯಾಮೆಲ್ಲೆ; 680 nm ಮೀರಿದ ಬೆಳಕು'],['ಕಿಣ್ವ','ಸ್ಟ್ರೋಮಾ ಕಡೆ NADP ರಿಡಕ್ಟೇಸ್']], f:{h:['','ಚಕ್ರೀಯವಲ್ಲದ','ಚಕ್ರೀಯ'], r:[['PS','I + II','I ಮಾತ್ರ'],['O₂','ಹೌದು','ಇಲ್ಲ'],['NADPH','ಹೌದು','ಇಲ್ಲ']]}},
 {t:'ರಸಾಯನಾಭಿಸರಣ', p:[['ಯಾರು','ಪೀಟರ್ ಮಿಚೆಲ್ (1961)'],['ಇಳಿಜಾರು','ಲ್ಯೂಮೆನ್‌ನಲ್ಲಿ H⁺ ಹೆಚ್ಚು, ಸ್ಟ್ರೋಮಾದಲ್ಲಿ ಕಡಿಮೆ'],['ATP ಸಿಂಥೇಸ್','CF₀ ನಾಳ + CF₁ ತಲೆ'],['ಇಳುವರಿ','ಸುಮಾರು 3 H⁺ ಗೆ 1 ATP']]},
 {t:'ಕೆಲ್ವಿನ್ ಚಕ್ರ', p:[['ಸ್ವೀಕಾರಕ','RuBP (5C); ಕಿಣ್ವ RuBisCO'],['ಮೊದಲ ಉತ್ಪನ್ನ','3-PGA (3C)'],['ಪ್ರತಿ CO₂ ಗೆ','3 ATP + 2 NADPH'],['ಪ್ರತಿ ಗ್ಲೂಕೋಸ್‌ಗೆ','18 ATP + 12 NADPH, 6 ಸುತ್ತು']], f:{s:['ಕಾರ್ಬಾಕ್ಸಿಲೀಕರಣ','ಅಪಕರ್ಷಣ','ಪುನರುತ್ಪಾದನೆ']}},
 {t:'C₄ ಮಾರ್ಗ', p:[['ಉದಾಹರಣೆಗಳು','ಮೆಕ್ಕೆಜೋಳ, ಕಬ್ಬು, ಜೋಳ'],['ಪತ್ರಮಧ್ಯಕ','PEPcase ನಿಂದ PEP + CO₂ → OAA'],['ನಾಳಕಟ್ಟು ಕವಚ','CO₂ ಬಿಡುಗಡೆ → ಕೆಲ್ವಿನ್ ಚಕ್ರ'],['ಕ್ರಾನ್ಜ್','ದಪ್ಪ ಭಿತ್ತಿಯ ನಾಳಕಟ್ಟು ಕವಚ ಕೋಶಗಳ ಹಾರ']], f:{s:['PEP','OAA','ಮ್ಯಾಲಿಕ್ ಆಮ್ಲ','CO₂ ಕೆಲ್ವಿನ್‌ಗೆ','ಮತ್ತೆ PEP']}},
 {t:'ದ್ಯುತಿಶ್ವಸನ ಮತ್ತು ಅಂಶಗಳು', p:[['C₂ ಮಾರ್ಗ','RuBisCO O₂ ಗೆ ಬಂಧಿಸುತ್ತದೆ → ಫಾಸ್ಫೊಗ್ಲೈಕೊಲೇಟ್'],['ಪರಿಣಾಮ','ವ್ಯರ್ಥ: ಸಕ್ಕರೆ ಇಲ್ಲ, ATP ಇಲ್ಲ'],['C₄ ಸಸ್ಯಗಳು','ದ್ಯುತಿಶ್ವಸನ ಇಲ್ಲ'],['ಬ್ಲ್ಯಾಕ್‌ಮನ್','ಕನಿಷ್ಠಕ್ಕೆ ಹತ್ತಿರದ ಅಂಶ ದರ ನಿರ್ಧರಿಸುತ್ತದೆ']], f:{h:['ಲಕ್ಷಣ','C₃','C₄'], r:[['ಸ್ವೀಕಾರಕ','RuBP','PEP'],['ಮೊದಲ ಉತ್ಪನ್ನ','3-PGA','OAA'],['ಸೂಕ್ತ ತಾಪ','10–25 °C','30–45 °C']]}}]};
""")
append('flashcards/fc-pu1-hi.js', r"""
FC_I18N.hi['pu1-ch11'] = { title:'उच्च पादपों में प्रकाश संश्लेषण', ch:'I PUC · अध्याय 11 · उच्च पादपों में प्रकाश संश्लेषण', cards:[
 {t:'प्रारंभिक प्रयोग', p:[['प्रीस्टले','मोमबत्ती और चूहे से खराब हवा को पुदीना शुद्ध करता है'],['इन्जेनहाउस','सूर्य का प्रकाश चाहिए; केवल हरे भाग O₂ छोड़ते हैं'],['एंगेलमान','क्लैडोफोरा से पहला क्रिया स्पेक्ट्रम'],['वॉन नील','O₂ H₂O से आती है, CO₂ से नहीं']]},
 {t:'हरितलवक और वर्णक', p:[['ग्रैना','प्रकाश पकड़कर ATP, NADPH बनाते हैं'],['स्ट्रोमा','एंजाइम CO₂ को शर्करा में बदलते हैं'],['मुख्य वर्णक','पर्णहरित a (नीला-हरा)'],['सहायक','पर्णहरित b, ज़ैंथोफिल, कैरोटिनॉइड']], f:{h:['वर्णक','रंग'], r:[['पर्णहरित a','नीला-हरा'],['पर्णहरित b','पीला-हरा'],['ज़ैंथोफिल','पीला'],['कैरोटिनॉइड','पीला-नारंगी']]}},
 {t:'प्रकाश अभिक्रिया', p:[['LHC','ऐंटेना वर्णक + एक पर्णहरित a अभिक्रिया केंद्र'],['PS I / PS II','P700 / P680'],['प्रकाश अपघटन','2H₂O → 4H⁺ + O₂ + 4e⁻ (Mn, Cl)'],['उत्पाद','ATP, NADPH, O₂']], f:{s:['प्रकाश','PS II','ETS','PS I','NADPH']}},
 {t:'Z योजना और चक्रीय', p:[['अचक्रीय','PS II + PS I; ATP + NADPH + O₂'],['चक्रीय','केवल PS I; केवल ATP'],['चक्रीय कहाँ','स्ट्रोमा लैमेली; 680 nm से अधिक प्रकाश'],['एंजाइम','स्ट्रोमा की ओर NADP रिडक्टेज़']], f:{h:['','अचक्रीय','चक्रीय'], r:[['PS','I + II','केवल I'],['O₂','हाँ','नहीं'],['NADPH','हाँ','नहीं']]}},
 {t:'रसोपरासरण', p:[['किसने','पीटर मिचेल (1961)'],['प्रवणता','ल्यूमेन में H⁺ अधिक, स्ट्रोमा में कम'],['ATP सिंथेज़','CF₀ नलिका + CF₁ सिर'],['उपज','लगभग 3 H⁺ पर 1 ATP']]},
 {t:'केल्विन चक्र', p:[['ग्राही','RuBP (5C); एंजाइम RuBisCO'],['पहला उत्पाद','3-PGA (3C)'],['हर CO₂ पर','3 ATP + 2 NADPH'],['हर ग्लूकोज़ पर','18 ATP + 12 NADPH, 6 चक्कर']], f:{s:['कार्बोक्सिलीकरण','अपचयन','पुनर्जनन']}},
 {t:'C₄ पथ', p:[['उदाहरण','मक्का, गन्ना, ज्वार'],['पर्णमध्योतक','PEPcase से PEP + CO₂ → OAA'],['बंडल आच्छद','CO₂ मुक्त → केल्विन चक्र'],['क्रैन्ज़','मोटी भित्ति वाली बंडल आच्छद कोशिकाओं की माला']], f:{s:['PEP','OAA','मैलिक अम्ल','CO₂ केल्विन में','फिर PEP']}},
 {t:'प्रकाश श्वसन और कारक', p:[['C₂ पथ','RuBisCO O₂ से बंधता है → फॉस्फोग्लाइकोलेट'],['प्रभाव','व्यर्थ: न शर्करा, न ATP'],['C₄ पौधे','प्रकाश श्वसन नहीं'],['ब्लैकमैन','न्यूनतम के निकट वाला कारक दर तय करता है']], f:{h:['लक्षण','C₃','C₄'], r:[['ग्राही','RuBP','PEP'],['पहला उत्पाद','3-PGA','OAA'],['इष्टतम ताप','10–25 °C','30–45 °C']]}}]};
""")

# ---------------- Activities ----------------
append('activities/acts-pu1.js', r"""
ACTS['pu1-ch11'] = { title:'Catch the Leaf Making Food', ch:'I PUC · Ch 11 · Photosynthesis in Higher Plants', cover:'🍃', color:'#3f9a3a', page:'pu1-ch11.html',
 hands:[
  {t:'Starch Test on a Variegated Leaf', icon:'🍃', where:'lab', time:'1 hour (after 2 days in the dark)',
   concept:'Starch forms only in the green, lit parts of a leaf, so chlorophyll and light are needed for photosynthesis.',
   need:['A potted plant with variegated (green and white) leaves, e.g. croton or coleus','Black paper and paper clips','Spirit (alcohol), a beaker of hot water and a boiling tube','Dilute iodine solution and a white tile','Forceps'],
   safety:'Alcohol catches fire easily: never heat it on a flame — warm it only in a hot water bath, with the teacher.',
   steps:['Keep the plant in the dark for 2 days so the leaves use up their starch.','Cover part of one leaf with a strip of black paper on both sides; put the plant in sunlight for 4–6 hours.','Pluck the leaf and draw its green and white parts.','Dip the leaf in boiling water for 1 minute to soften it.','Warm it in alcohol (in a hot water bath) until it loses its green colour.','Rinse it, spread it on a tile and add iodine; note which parts turn blue-black.'],
   cols:['Part of the leaf','Colour with iodine','Starch present?'], rows:4,
   why:'Iodine turns starch blue-black. Only cells that had chlorophyll and received light could photosynthesise and store the glucose as starch. The white parts (no chlorophyll) and the covered part (no light) stay brown.',
   qs:['Why was the plant kept in the dark first?','Why was the leaf boiled in alcohol?','What do the white and the covered parts prove?'],
   terms:['starch','chlorophyll','photosynthesis','variegated leaf']},
  {t:'Paper Chromatography of Leaf Pigments', icon:'🧻', where:'lab', time:'45 minutes',
   concept:'A leaf extract separates on paper into four coloured bands, showing that several pigments take part in photosynthesis.',
   need:['Fresh spinach leaves, a mortar and pestle, a little sand','Acetone (or ether–acetone solvent)','A strip of Whatman filter paper and a tall glass jar with a lid','A capillary tube or a fine brush','A pencil and a ruler'],
   safety:'Acetone fumes are harmful and flammable: work near an open window, away from flames, and keep the jar closed.',
   steps:['Grind the leaves with a little sand and acetone to get a dark green extract.','Draw a pencil line 2 cm from the bottom of the strip.','Put a tiny drop of extract on the line, let it dry, and repeat 10–15 times for a dark spot.','Pour a little solvent into the jar so it stays below the spot; hang the strip and close the lid.','Remove the strip when the solvent is near the top; mark the solvent front.','Note the colour and order of the bands from top to bottom.'],
   cols:['Band (from top)','Colour','Pigment'], rows:4,
   why:'Each pigment dissolves and travels up the paper at a different speed. Carotene travels farthest, then xanthophyll, chlorophyll a and chlorophyll b. Chlorophyll a is the chief pigment; the others are accessory pigments that widen the range of light used.',
   qs:['How many bands did you see? Name them.','Which pigment moved the farthest?','Why must the spot stay above the solvent?'],
   terms:['chromatography','chlorophyll a','accessory pigments','carotenoids']}],
 digital:{type:'sort', t:'Light Reaction or Calvin Cycle?', intro:'Tap an event, then tap where it happens.',
  bins:['Light reaction (thylakoid)','Calvin cycle (stroma)','C₄ mesophyll cell','Photorespiration'],
  items:[['Water is split and O₂ is released',0],['P680 and P700 are excited by light',0],['ATP is made by ATP synthase',0],['NADP⁺ is reduced to NADPH',0],['RuBP accepts CO₂ with RuBisCO',1],['3-PGA is reduced to triose phosphate',1],['RuBP is regenerated',1],['PEP accepts CO₂ with PEPcase',2],['OAA is formed',2],['RuBisCO binds O₂',3],['Phosphoglycolate is formed',3],['CO₂ is lost and ATP is used',3]],
  learn:'The thylakoids make ATP, NADPH and O₂; the stroma uses them in the Calvin cycle; C₄ plants first fix CO₂ in the mesophyll with PEPcase; photorespiration happens when RuBisCO binds O₂.',
  qs:['Which events need light directly?','Why do C₄ plants not show photorespiration?']}};
""")
append('activities/acts-pu1-kn.js', r"""
ACTS_I18N.kn['pu1-ch11'] = { title:'ಎಲೆ ಆಹಾರ ತಯಾರಿಸುವುದನ್ನು ಹಿಡಿಯಿರಿ', ch:'I PUC · ಅಧ್ಯಾಯ 11 · ಉನ್ನತ ಸಸ್ಯಗಳಲ್ಲಿ ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ',
 hands:[
  {t:'ಬಹುವರ್ಣದ ಎಲೆಯಲ್ಲಿ ಪಿಷ್ಟ ಪರೀಕ್ಷೆ', time:'1 ಗಂಟೆ (2 ದಿನ ಕತ್ತಲೆಯ ನಂತರ)',
   concept:'ಎಲೆಯ ಹಸಿರು, ಬೆಳಕು ಬಿದ್ದ ಭಾಗಗಳಲ್ಲಿ ಮಾತ್ರ ಪಿಷ್ಟ ಉಂಟಾಗುತ್ತದೆ, ಹಾಗಾಗಿ ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಗೆ ಪತ್ರಹರಿತ್ತು ಮತ್ತು ಬೆಳಕು ಬೇಕು.',
   need:['ಬಹುವರ್ಣದ (ಹಸಿರು ಮತ್ತು ಬಿಳಿ) ಎಲೆಗಳ ಕುಂಡದ ಸಸ್ಯ, ಉದಾ. ಕ್ರೋಟನ್ ಅಥವಾ ಕೋಲಿಯಸ್','ಕಪ್ಪು ಕಾಗದ ಮತ್ತು ಪೇಪರ್ ಕ್ಲಿಪ್','ಸ್ಪಿರಿಟ್ (ಆಲ್ಕೋಹಾಲ್), ಬಿಸಿನೀರಿನ ಬೀಕರ್ ಮತ್ತು ಕುದಿಸುವ ನಳಿಕೆ','ದುರ್ಬಲ ಅಯೋಡಿನ್ ದ್ರಾವಣ ಮತ್ತು ಬಿಳಿ ಟೈಲ್','ಫೋರ್ಸೆಪ್ಸ್'],
   safety:'ಆಲ್ಕೋಹಾಲ್ ಬೇಗ ಬೆಂಕಿ ಹಿಡಿಯುತ್ತದೆ: ಜ್ವಾಲೆಯ ಮೇಲೆ ಎಂದಿಗೂ ಬಿಸಿ ಮಾಡಬೇಡಿ — ಶಿಕ್ಷಕರೊಂದಿಗೆ ಬಿಸಿನೀರಿನ ಸ್ನಾನದಲ್ಲಿ ಮಾತ್ರ.',
   steps:['ಎಲೆಗಳ ಪಿಷ್ಟ ಖಾಲಿಯಾಗಲು ಸಸ್ಯವನ್ನು 2 ದಿನ ಕತ್ತಲೆಯಲ್ಲಿಡಿ.','ಒಂದು ಎಲೆಯ ಭಾಗವನ್ನು ಎರಡೂ ಕಡೆ ಕಪ್ಪು ಕಾಗದದಿಂದ ಮುಚ್ಚಿ; ಸಸ್ಯವನ್ನು 4–6 ಗಂಟೆ ಬಿಸಿಲಿನಲ್ಲಿಡಿ.','ಎಲೆ ಕಿತ್ತು ಅದರ ಹಸಿರು, ಬಿಳಿ ಭಾಗಗಳ ಚಿತ್ರ ಬರೆಯಿರಿ.','ಎಲೆ ಮೃದುವಾಗಲು 1 ನಿಮಿಷ ಕುದಿಯುವ ನೀರಿನಲ್ಲಿ ಮುಳುಗಿಸಿ.','ಹಸಿರು ಬಣ್ಣ ಹೋಗುವವರೆಗೆ (ಬಿಸಿನೀರಿನ ಸ್ನಾನದಲ್ಲಿ) ಆಲ್ಕೋಹಾಲ್‌ನಲ್ಲಿ ಬಿಸಿ ಮಾಡಿ.','ತೊಳೆದು ಟೈಲ್ ಮೇಲೆ ಹರಡಿ ಅಯೋಡಿನ್ ಹಾಕಿ; ಯಾವ ಭಾಗಗಳು ನೀಲಿ-ಕಪ್ಪಾಗುತ್ತವೆ ಎಂದು ಗಮನಿಸಿ.'],
   cols:['ಎಲೆಯ ಭಾಗ','ಅಯೋಡಿನ್‌ನೊಂದಿಗೆ ಬಣ್ಣ','ಪಿಷ್ಟ ಇದೆಯೇ?'],
   why:'ಅಯೋಡಿನ್ ಪಿಷ್ಟವನ್ನು ನೀಲಿ-ಕಪ್ಪಾಗಿಸುತ್ತದೆ. ಪತ್ರಹರಿತ್ತು ಇದ್ದು ಬೆಳಕು ಪಡೆದ ಕೋಶಗಳು ಮಾತ್ರ ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ ನಡೆಸಿ ಗ್ಲೂಕೋಸ್ ಅನ್ನು ಪಿಷ್ಟವಾಗಿ ಸಂಗ್ರಹಿಸಬಲ್ಲವು. ಬಿಳಿ ಭಾಗಗಳು (ಪತ್ರಹರಿತ್ತು ಇಲ್ಲ) ಮತ್ತು ಮುಚ್ಚಿದ ಭಾಗ (ಬೆಳಕು ಇಲ್ಲ) ಕಂದುಬಣ್ಣದಲ್ಲೇ ಇರುತ್ತವೆ.',
   qs:['ಮೊದಲು ಸಸ್ಯವನ್ನು ಕತ್ತಲೆಯಲ್ಲಿ ಏಕೆ ಇಟ್ಟಿರಿ?','ಎಲೆಯನ್ನು ಆಲ್ಕೋಹಾಲ್‌ನಲ್ಲಿ ಏಕೆ ಬಿಸಿ ಮಾಡಿದಿರಿ?','ಬಿಳಿ ಮತ್ತು ಮುಚ್ಚಿದ ಭಾಗಗಳು ಏನನ್ನು ಸಾಬೀತುಪಡಿಸುತ್ತವೆ?']},
  {t:'ಎಲೆ ವರ್ಣದ್ರವ್ಯಗಳ ಕಾಗದ ವರ್ಣಲೇಖನ', time:'45 ನಿಮಿಷ',
   concept:'ಎಲೆಯ ಸಾರ ಕಾಗದದ ಮೇಲೆ ನಾಲ್ಕು ಬಣ್ಣದ ಪಟ್ಟಿಗಳಾಗಿ ಬೇರ್ಪಡುತ್ತದೆ, ಹಲವು ವರ್ಣದ್ರವ್ಯಗಳು ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಯಲ್ಲಿ ಭಾಗವಹಿಸುತ್ತವೆ ಎಂದು ತೋರಿಸುತ್ತದೆ.',
   need:['ತಾಜಾ ಪಾಲಕ್ ಎಲೆಗಳು, ಒರಳು ಮತ್ತು ಒನಕೆ, ಸ್ವಲ್ಪ ಮರಳು','ಅಸಿಟೋನ್ (ಅಥವಾ ಈಥರ್–ಅಸಿಟೋನ್ ದ್ರಾವಕ)','ವಾಟ್‌ಮನ್ ಫಿಲ್ಟರ್ ಕಾಗದದ ಪಟ್ಟಿ ಮತ್ತು ಮುಚ್ಚಳವಿರುವ ಎತ್ತರದ ಗಾಜಿನ ಜಾರ್','ಕ್ಯಾಪಿಲರಿ ನಳಿಕೆ ಅಥವಾ ಸಣ್ಣ ಬ್ರಷ್','ಪೆನ್ಸಿಲ್ ಮತ್ತು ಸ್ಕೇಲ್'],
   safety:'ಅಸಿಟೋನ್ ಆವಿ ಹಾನಿಕಾರಕ ಮತ್ತು ಬೆಂಕಿ ಹಿಡಿಯುತ್ತದೆ: ತೆರೆದ ಕಿಟಕಿ ಬಳಿ, ಜ್ವಾಲೆಯಿಂದ ದೂರ ಕೆಲಸ ಮಾಡಿ, ಜಾರ್ ಮುಚ್ಚಿಡಿ.',
   steps:['ಎಲೆಗಳನ್ನು ಸ್ವಲ್ಪ ಮರಳು ಮತ್ತು ಅಸಿಟೋನ್‌ನೊಂದಿಗೆ ಅರೆದು ಗಾಢ ಹಸಿರು ಸಾರ ಪಡೆಯಿರಿ.','ಪಟ್ಟಿಯ ಕೆಳಗಿನಿಂದ 2 cm ಮೇಲೆ ಪೆನ್ಸಿಲ್ ಗೆರೆ ಎಳೆಯಿರಿ.','ಗೆರೆಯ ಮೇಲೆ ಸಾರದ ಸಣ್ಣ ಹನಿ ಹಾಕಿ, ಒಣಗಿಸಿ, ಗಾಢ ಚುಕ್ಕೆಗಾಗಿ 10–15 ಬಾರಿ ಪುನರಾವರ್ತಿಸಿ.','ಚುಕ್ಕೆಗಿಂತ ಕೆಳಗಿರುವಂತೆ ಜಾರ್‌ಗೆ ಸ್ವಲ್ಪ ದ್ರಾವಕ ಸುರಿದು, ಪಟ್ಟಿ ತೂಗುಹಾಕಿ ಮುಚ್ಚಳ ಮುಚ್ಚಿ.','ದ್ರಾವಕ ಮೇಲ್ಭಾಗದ ಬಳಿ ತಲುಪಿದಾಗ ಪಟ್ಟಿ ತೆಗೆದು ದ್ರಾವಕ ಮುಂಚೂಣಿ ಗುರುತಿಸಿ.','ಮೇಲಿನಿಂದ ಕೆಳಕ್ಕೆ ಪಟ್ಟಿಗಳ ಬಣ್ಣ ಮತ್ತು ಕ್ರಮ ಬರೆಯಿರಿ.'],
   cols:['ಪಟ್ಟಿ (ಮೇಲಿನಿಂದ)','ಬಣ್ಣ','ವರ್ಣದ್ರವ್ಯ'],
   why:'ಪ್ರತಿ ವರ್ಣದ್ರವ್ಯ ಬೇರೆ ಬೇರೆ ವೇಗದಲ್ಲಿ ಕರಗಿ ಕಾಗದದ ಮೇಲೆ ಸಾಗುತ್ತದೆ. ಕ್ಯಾರೊಟೀನ್ ಅತಿ ದೂರ, ನಂತರ ಜ್ಯಾಂಥೋಫಿಲ್, ಪತ್ರಹರಿತ್ತು a ಮತ್ತು ಪತ್ರಹರಿತ್ತು b. ಪತ್ರಹರಿತ್ತು a ಮುಖ್ಯ ವರ್ಣದ್ರವ್ಯ; ಉಳಿದವು ಬಳಸುವ ಬೆಳಕಿನ ವ್ಯಾಪ್ತಿ ಹೆಚ್ಚಿಸುವ ಸಹಾಯಕ ವರ್ಣದ್ರವ್ಯಗಳು.',
   qs:['ಎಷ್ಟು ಪಟ್ಟಿಗಳು ಕಂಡವು? ಅವುಗಳನ್ನು ಹೆಸರಿಸಿ.','ಯಾವ ವರ್ಣದ್ರವ್ಯ ಅತಿ ದೂರ ಸಾಗಿತು?','ಚುಕ್ಕೆ ದ್ರಾವಕಕ್ಕಿಂತ ಮೇಲೆ ಏಕೆ ಇರಬೇಕು?']}],
 digital:{t:'ಬೆಳಕಿನ ಕ್ರಿಯೆಯೋ ಕೆಲ್ವಿನ್ ಚಕ್ರವೋ?', intro:'ಒಂದು ಘಟನೆಯನ್ನು ಒತ್ತಿ, ನಂತರ ಅದು ನಡೆಯುವ ಸ್ಥಳವನ್ನು ಒತ್ತಿ.',
  bins:['ಬೆಳಕಿನ ಕ್ರಿಯೆ (ಥೈಲಕಾಯ್ಡ್)','ಕೆಲ್ವಿನ್ ಚಕ್ರ (ಸ್ಟ್ರೋಮಾ)','C₄ ಪತ್ರಮಧ್ಯಕ ಕೋಶ','ದ್ಯುತಿಶ್ವಸನ'],
  items:['ನೀರು ವಿಭಜನೆಯಾಗಿ O₂ ಬಿಡುಗಡೆ','P680 ಮತ್ತು P700 ಬೆಳಕಿನಿಂದ ಉದ್ರೇಕ','ATP ಸಿಂಥೇಸ್‌ನಿಂದ ATP ತಯಾರಿಕೆ','NADP⁺ NADPH ಆಗಿ ಅಪಕರ್ಷಣ','RuBisCO ಜೊತೆ RuBP CO₂ ಸ್ವೀಕಾರ','3-PGA ಟ್ರಯೋಸ್ ಫಾಸ್ಫೇಟ್ ಆಗಿ ಅಪಕರ್ಷಣ','RuBP ಪುನರುತ್ಪಾದನೆ','PEPcase ಜೊತೆ PEP CO₂ ಸ್ವೀಕಾರ','OAA ರಚನೆ','RuBisCO O₂ ಗೆ ಬಂಧನ','ಫಾಸ್ಫೊಗ್ಲೈಕೊಲೇಟ್ ರಚನೆ','CO₂ ನಷ್ಟ ಮತ್ತು ATP ಬಳಕೆ'],
  learn:'ಥೈಲಕಾಯ್ಡ್‌ಗಳು ATP, NADPH ಮತ್ತು O₂ ತಯಾರಿಸುತ್ತವೆ; ಸ್ಟ್ರೋಮಾ ಅವನ್ನು ಕೆಲ್ವಿನ್ ಚಕ್ರದಲ್ಲಿ ಬಳಸುತ್ತದೆ; C₄ ಸಸ್ಯಗಳು ಮೊದಲು ಪತ್ರಮಧ್ಯಕದಲ್ಲಿ PEPcase ನಿಂದ CO₂ ಸ್ಥಿರೀಕರಿಸುತ್ತವೆ; RuBisCO O₂ ಗೆ ಬಂಧಿಸಿದಾಗ ದ್ಯುತಿಶ್ವಸನ.',
  qs:['ಯಾವ ಘಟನೆಗಳಿಗೆ ನೇರವಾಗಿ ಬೆಳಕು ಬೇಕು?','C₄ ಸಸ್ಯಗಳಲ್ಲಿ ದ್ಯುತಿಶ್ವಸನ ಏಕೆ ಇಲ್ಲ?']}};
""")
append('activities/acts-pu1-hi.js', r"""
ACTS_I18N.hi['pu1-ch11'] = { title:'पत्ती को भोजन बनाते पकड़ो', ch:'I PUC · अध्याय 11 · उच्च पादपों में प्रकाश संश्लेषण',
 hands:[
  {t:'चितकबरी पत्ती में मंड परीक्षण', time:'1 घंटा (2 दिन अंधेरे के बाद)',
   concept:'मंड केवल पत्ती के हरे और प्रकाश पाने वाले भागों में बनता है, इसलिए प्रकाश संश्लेषण के लिए पर्णहरित और प्रकाश चाहिए।',
   need:['चितकबरी (हरी और सफ़ेद) पत्तियों वाला गमले का पौधा, जैसे क्रोटन या कोलियस','काला कागज़ और पेपर क्लिप','स्पिरिट (एल्कोहॉल), गरम पानी का बीकर और क्वथन नली','तनु आयोडीन विलयन और सफ़ेद टाइल','चिमटी'],
   safety:'एल्कोहॉल जल्दी आग पकड़ता है: इसे कभी लौ पर गरम मत करो — केवल शिक्षक के साथ गरम पानी के स्नान में।',
   steps:['पत्तियों का मंड खत्म होने के लिए पौधे को 2 दिन अंधेरे में रखो।','एक पत्ती के कुछ भाग को दोनों ओर काले कागज़ से ढको; पौधे को 4–6 घंटे धूप में रखो।','पत्ती तोड़कर उसके हरे और सफ़ेद भागों का चित्र बनाओ।','पत्ती को नरम करने के लिए 1 मिनट उबलते पानी में डुबाओ।','हरा रंग निकलने तक (गरम पानी के स्नान में) एल्कोहॉल में गरम करो।','धोकर टाइल पर फैलाओ और आयोडीन डालो; देखो कौन-से भाग नीले-काले होते हैं।'],
   cols:['पत्ती का भाग','आयोडीन से रंग','मंड है?'],
   why:'आयोडीन मंड को नीला-काला कर देता है। केवल पर्णहरित वाली और प्रकाश पाने वाली कोशिकाएँ प्रकाश संश्लेषण करके ग्लूकोज़ को मंड के रूप में जमा कर सकीं। सफ़ेद भाग (पर्णहरित नहीं) और ढका भाग (प्रकाश नहीं) भूरे ही रहते हैं।',
   qs:['पौधे को पहले अंधेरे में क्यों रखा?','पत्ती को एल्कोहॉल में क्यों गरम किया?','सफ़ेद और ढके भाग क्या सिद्ध करते हैं?']},
  {t:'पत्ती के वर्णकों की पेपर क्रोमैटोग्राफी', time:'45 मिनट',
   concept:'पत्ती का सत्त कागज़ पर चार रंगीन पट्टियों में अलग होता है, जिससे पता चलता है कि कई वर्णक प्रकाश संश्लेषण में भाग लेते हैं।',
   need:['ताज़ी पालक की पत्तियाँ, खरल-मूसल, थोड़ी रेत','ऐसीटोन (या ईथर–ऐसीटोन विलायक)','व्हाटमैन फ़िल्टर पेपर की पट्टी और ढक्कन वाला लंबा काँच का जार','केशनली या पतला ब्रश','पेंसिल और स्केल'],
   safety:'ऐसीटोन की भाप हानिकारक और ज्वलनशील है: खुली खिड़की के पास, लौ से दूर काम करो और जार बंद रखो।',
   steps:['पत्तियों को थोड़ी रेत और ऐसीटोन के साथ पीसकर गहरा हरा सत्त बनाओ।','पट्टी के नीचे से 2 cm ऊपर पेंसिल से रेखा खींचो।','रेखा पर सत्त की छोटी बूँद डालो, सुखाओ, और गहरे धब्बे के लिए 10–15 बार दोहराओ।','जार में थोड़ा विलायक डालो ताकि वह धब्बे से नीचे रहे; पट्टी लटकाकर ढक्कन बंद करो।','विलायक ऊपर तक पहुँचने पर पट्टी निकालो और विलायक अग्र चिह्नित करो।','ऊपर से नीचे पट्टियों के रंग और क्रम लिखो।'],
   cols:['पट्टी (ऊपर से)','रंग','वर्णक'],
   why:'हर वर्णक अलग गति से घुलकर कागज़ पर चढ़ता है। कैरोटीन सबसे दूर जाता है, फिर ज़ैंथोफिल, पर्णहरित a और पर्णहरित b। पर्णहरित a मुख्य वर्णक है; बाकी सहायक वर्णक उपयोग होने वाले प्रकाश की सीमा बढ़ाते हैं।',
   qs:['कितनी पट्टियाँ दिखीं? उनके नाम बताओ।','कौन-सा वर्णक सबसे दूर गया?','धब्बा विलायक से ऊपर क्यों रहना चाहिए?']}],
 digital:{t:'प्रकाश अभिक्रिया या केल्विन चक्र?', intro:'एक घटना पर टैप करो, फिर उस जगह पर टैप करो जहाँ वह होती है।',
  bins:['प्रकाश अभिक्रिया (थायलाकॉइड)','केल्विन चक्र (स्ट्रोमा)','C₄ पर्णमध्योतक कोशिका','प्रकाश श्वसन'],
  items:['पानी टूटता है और O₂ निकलती है','P680 और P700 प्रकाश से उत्तेजित होते हैं','ATP सिंथेज़ से ATP बनता है','NADP⁺ अपचयित होकर NADPH बनता है','RuBisCO के साथ RuBP CO₂ ग्रहण करता है','3-PGA अपचयित होकर ट्रायोज़ फॉस्फेट बनता है','RuBP का पुनर्जनन होता है','PEPcase के साथ PEP CO₂ ग्रहण करता है','OAA बनता है','RuBisCO O₂ से बंधता है','फॉस्फोग्लाइकोलेट बनता है','CO₂ नष्ट होती है और ATP खर्च होता है'],
  learn:'थायलाकॉइड ATP, NADPH और O₂ बनाते हैं; स्ट्रोमा इन्हें केल्विन चक्र में उपयोग करता है; C₄ पौधे पहले पर्णमध्योतक में PEPcase से CO₂ स्थिर करते हैं; RuBisCO के O₂ से बंधने पर प्रकाश श्वसन होता है।',
  qs:['किन घटनाओं को सीधे प्रकाश चाहिए?','C₄ पौधों में प्रकाश श्वसन क्यों नहीं होता?']}};
""")

# ---------------- Game Zone ----------------
insert_before('games/riddles.js', " {id:'pu2-ch1'", r""" {id:'pu1-ch11', pu:1, ch:11, t:'Photosynthesis in Higher Plants', page:'pu1-ch11.html', r:[
  ['RuBisCO',['I am the most abundant enzyme on Earth.','I fix CO₂ on RuBP.','I can also bind O₂ by mistake.'],['PEPcase','ATP synthase','NADP reductase']],
  ['P680',['I am a reaction centre.','My absorption peak is in red light.','I belong to photosystem II.'],['P700','RuBP','PEP']],
  ['Stroma',['I am the fluid matrix of the chloroplast.','I hold the enzymes of the Calvin cycle.','I lose protons when light falls.'],['Lumen','Granum','Thylakoid']],
  ['Kranz anatomy',['My name means wreath.','I am seen in maize leaves.','My bundle sheath cells have thick walls.'],['Z scheme','Calvin cycle','Hill reaction']],
  ['Photolysis',['I need light.','I split water.','Manganese and chlorine help me.'],['Photorespiration','Carboxylation','Chemiosmosis']],
  ['3-PGA',['I have three carbons.','I am the first stable product of the Calvin cycle.','Two of me form from one RuBP.'],['OAA','PEP','RuBP']],
  ['Chlorophyll a',['I am blue-green on a chromatogram.','I am the chief pigment.','I sit in the reaction centre.'],['Chlorophyll b','Xanthophyll','Carotene']],
  ['Cyclic photophosphorylation',['I use PS I only.','I happen in the stroma lamellae.','I give ATP but no NADPH.'],['Z scheme','Photolysis','Calvin cycle']],
 ]},
""")
insert_before('games/riddles-more.js', " 'pu2-ch1':[", r""" 'pu1-ch11':[
  ['PEP',['I have three carbons.','I am found in C₄ mesophyll cells.','I am the first acceptor of CO₂ in C₄ plants.'],['RuBP','OAA','3-PGA']],
  ['OAA',['I have four carbons.','I am the first product in C₄ plants.','I can become malic or aspartic acid.'],['PEP','3-PGA','Pyruvate']],
  ['ATP synthase',['I have two parts, CF₀ and CF₁.','Protons flow through me.','I make ATP.'],['RuBisCO','PEPcase','Cytochrome']],
  ['Lumen',['I am inside the thylakoid.','Protons pile up in me.','My pH falls in light.'],['Stroma','Cytoplasm','Mitochondrion']],
  ['Phosphoglycolate',['I have two carbons.','I form when RuBisCO binds oxygen.','I start the C₂ pathway.'],['3-PGA','Glucose','OAA']],
  ['Engelmann',['I used a prism and aerobic bacteria.','I worked with Cladophora.','I drew the first action spectrum.'],['Priestley','Sachs','Calvin']],
  ['Blackman',['I gave a law in 1905.','I spoke of limiting factors.','My rule: the factor nearest its minimum decides.'],['Mitchell','Hill','van Niel']],
  ['Carotenoids',['I am yellow to yellow-orange.','I am an accessory pigment.','I protect chlorophyll a from photo-oxidation.'],['Chlorophyll a','Chlorophyll b','RuBisCO']],
 ],
""")
insert_before('games/words.js', " 'pu2-ch1':[", r""" 'pu1-ch11':[['RUBISCO','Most abundant enzyme; fixes CO₂ on RuBP'],['CHLOROPHYLL','Green pigment of the chloroplast'],['STROMA','Fluid matrix where the Calvin cycle runs'],['GRANA','Stacks of thylakoids'],['PHOTOLYSIS','Light-driven splitting of water'],['KRANZ','Wreath-like anatomy of C₄ leaves'],['CALVIN','Scientist who traced carbon with ¹⁴C'],['CAROTENE','Yellow-orange accessory pigment'],['THYLAKOID','Membrane sac where the light reaction occurs'],['MAIZE','A C₄ crop plant']],
""")
insert_before('games/words-more.js', " 'pu2-ch1':[", r""" 'pu1-ch11':[['XANTHOPHYLL','Yellow accessory pigment'],['CHEMIOSMOSIS','ATP made by a proton gradient'],['PHOTOSYSTEM','Antenna plus a reaction centre'],['LUMEN','Space inside the thylakoid'],['NADPH','Reducing power from the light reaction'],['OXALOACETIC','Acid that is the first C₄ product'],['PRIESTLEY','He kept a mint plant in a bell jar'],['SPECTRUM','Graph of light absorbed or used'],['ANTENNA','Light harvesting pigments of a photosystem'],['SUGARCANE','A C₄ crop plant']],
""")
insert_before('games/sequences.js', " {id:'embryo-sac'", r""" {id:'z-scheme', ch:'pu1-ch11', t:'Path of an electron in the Z scheme', s:['Water is split near PS II','P680 is excited and gives an electron','The electron passes down the cytochromes','P700 is excited by light','NADP reductase makes NADPH']},
 {id:'calvin-cycle', ch:'pu1-ch11', t:'Stages of the Calvin cycle', s:['RuBP accepts CO₂ (carboxylation)','Two 3-PGA are formed','3-PGA is reduced with ATP and NADPH','Triose phosphate forms sugar','RuBP is regenerated using ATP']},
 {id:'c4-path', ch:'pu1-ch11', t:'The C₄ pathway', s:['PEP accepts CO₂ in the mesophyll','OAA is formed','Malic acid moves to the bundle sheath','CO₂ is released and enters the Calvin cycle','The C₃ acid returns and PEP is made again']},
 {id:'chemiosmosis-run', ch:'pu1-ch11', t:'Making ATP by chemiosmosis', s:['Light drives electron flow','Protons pile up in the lumen','A proton gradient forms','Protons flow back through CF₀','CF₁ changes shape and makes ATP']},
""")
insert_before('zone/content.js', " {t:'Robert Brown discovered", r""" {t:'RuBisCO is the most abundant enzyme on Earth.', c:'pu1-ch11'},
 {t:'Light saturation is reached at only about 10% of full sunlight, so light rarely limits photosynthesis in nature.', c:'pu1-ch11'},
 {t:'All the oxygen given out in photosynthesis comes from water, not from carbon dioxide.', c:'pu1-ch11'},
 {t:'Making one glucose in the Calvin cycle uses 18 ATP and 12 NADPH.', c:'pu1-ch11'},
 {t:'Tomatoes and capsicum give higher yields when grown in greenhouses enriched with carbon dioxide.', c:'pu1-ch11'},
 {t:'In 1770 Joseph Priestley showed that a mint plant could restore air in which a candle had burned out.', c:'pu1-ch11'},
""", marker="c:'pu1-ch11'")
s = open('zone/content.js', encoding='utf-8').read()
if "ch:'pu1-ch11'" not in s:
    i = s.index('ZONE.MEMES'); j = s.rindex('];', 0, i)
    add = r""",
 {a:'RuBisCO', o:['RuBisCO','PEPcase','ATP synthase','Amylase'], c:['I am an enzyme','I am the most abundant protein on Earth','I work in the stroma','I fix CO₂ on RuBP'], ch:'pu1-ch11', e:'🧪'},
 {a:'Photorespiration', o:['Photorespiration','Photolysis','Respiration','Transpiration'], c:['I happen in light','I am found in C₃ plants','I start when RuBisCO binds O₂','I waste energy and carbon'], ch:'pu1-ch11', e:'💨'},
 {a:'Z scheme', o:['Z scheme','Calvin cycle','C₄ pathway','Krebs cycle'], c:['I am a path of electrons','I use two photosystems','I end by making NADPH','My shape is a letter of the alphabet'], ch:'pu1-ch11', e:'⚡'},
 {a:'Chlorophyll a', o:['Chlorophyll a','Chlorophyll b','Carotene','Xanthophyll'], c:['I am a pigment','I absorb blue and red light','I am blue-green','I am the chief pigment of photosynthesis'], ch:'pu1-ch11', e:'🌿'}
"""
    k = s.rindex('}', 0, j) + 1
    s = s[:k] + add.rstrip('\n') + s[k:]
    open('zone/content.js', 'w', encoding='utf-8').write(s); print('clues added')
s = open('zone/fact-card.js', encoding='utf-8').read()
if 'pu1-ch11' not in s:
    s = s.replace("'pu1-ch10':'Cell Cycle and Cell Division',", "'pu1-ch10':'Cell Cycle and Cell Division','pu1-ch11':'Photosynthesis in Higher Plants',")
    open('zone/fact-card.js', 'w', encoding='utf-8').write(s); print('fact-card')

# Zone question bank: 60 questions from the Ch11 KCET and MCQ banks (built page keeps the shuffled answer keys)
B = json.load(open('zone/bank-pu1.json', encoding='utf-8'))
if not any(c['id'] == 'pu1-ch11' for c in B['chapters']):
    page = open('pu1-ch11.html', encoding='utf-8').read()
    kc = json.loads(re.search(r'^const KCET_QUESTIONS = (.*);$', page, re.M).group(1))
    data = json.loads(re.search(r'^const DATA = (.*);$', page, re.M).group(1))
    qs = [{'c': 'pu1-ch11', 'q': x['q'].replace('\n', ' '), 'o': x['options'], 'a': x['answer'], 'e': x['exp'], 'd': x['difficulty']} for x in kc if x['format'] != 'matching']
    need = 60 - len(qs)
    for t in [x['id'] for x in data['topics']]:
        for x in [m for m in data['mcq'] if m['topic'] == t][20:20 + max(1, need // 9 + 1)]:
            if len(qs) < 60: qs.append({'c': 'pu1-ch11', 'q': x['q'], 'o': x['options'], 'a': x['answer'], 'e': x['exp'], 'd': x['difficulty']})
    qs = qs[:60]
    B['chapters'].append({'id': 'pu1-ch11', 'pu': 1, 'ch': 11, 'title': 'Photosynthesis in Higher Plants', 'page': 'pu1-ch11.html', 'n': len(qs)})
    B['q'].extend(qs)
    json.dump(B, open('zone/bank-pu1.json', 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
    print('zone bank +', len(qs))
