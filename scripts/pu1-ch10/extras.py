#!/usr/bin/env python3
"""Adds PU-I Ch10 (Cell Cycle and Cell Division) to Storybooks, Flash Cards, Activities and the Game Zone.
Idempotent: skips any file that already has a pu1-ch10 entry. Run from the repo root: python3 scripts/pu1-ch10/extras.py"""
import json, os, re, subprocess
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
os.chdir(ROOT)

def append(path, text, marker="'pu1-ch10'"):
    s = open(path, encoding='utf-8').read()
    if marker in s: print('skip', path); return
    open(path, 'w', encoding='utf-8').write(s.rstrip('\n') + '\n\n' + text.strip('\n') + '\n'); print('appended', path)

def insert_before(path, anchor, text, marker="pu1-ch10"):
    s = open(path, encoding='utf-8').read()
    if marker in s: print('skip', path); return
    i = s.index(anchor)
    open(path, 'w', encoding='utf-8').write(s[:i] + text + s[i:]); print('inserted', path)

# ---------------- Storybooks ----------------
append('stories/books-pu1.js', r"""
BOOKS['pu1-ch10'] = { title:'The Dance of the Chromosomes', ch:'I PUC · Ch 10 · Cell Cycle and Cell Division', cover:'💃', color:'#2f9e8f', page:'pu1-ch10.html',
 pages:[
  {t:'One Cell, Many Cells', bg:'cell', e:'🦉👧🔬', x:'Prof. BAIO showed Bindu an onion root tip under the microscope. "Every big body starts as one cell. Cells grow and divide, again and again. This repeating story is the [[cell cycle]]." A human cell takes about 24 hours for one cycle, but [[yeast]] needs only 90 minutes.', r:'Cell cycle: copy the genome, make cell parts, divide into two daughter cells.'},
  {t:'The Busy Rest', bg:'lab', e:'⏳📋🧬', x:'"This cell looks quiet," said Bindu. "It is busiest of all!" laughed Prof. BAIO. In [[interphase]] the cell grows in [[G1 phase]], copies its DNA in [[S phase]], and makes proteins for division in [[G2 phase]]. Cells that stop dividing, like heart cells, rest in [[G0]].', r:'S phase: DNA doubles from 2C to 4C, but the chromosome number stays 2n.'},
  {t:'Getting Ready', bg:'cell', e:'🧶➡️🧬', x:'In [[prophase]] the tangled threads coiled into thick [[chromosomes]]. Each had two [[sister chromatids]] held together at a [[centromere]]. The centrosomes walked to opposite poles and threw out star-like [[asters]]. Slowly, the nuclear envelope disappeared.', r:'Asters + spindle fibres = the mitotic apparatus.'},
  {t:'The Line-Up', bg:'night', e:'🧍‍♂️🧍🧍‍♀️', x:'In [[metaphase]], spindle fibres caught each chromosome by its [[kinetochore]] and pulled it to the middle. All the chromosomes stood in one line, the [[metaphase plate]]. "Now is the best time to count them!" said Prof. BAIO.', r:'Metaphase is the best stage to study the shape of chromosomes.'},
  {t:'Tug of War', bg:'field', e:'↔️💪🧬', x:'Snap! In [[anaphase]] every centromere split at once, and the sister chromatids raced to opposite poles, centromere first, arms trailing. In [[telophase]] they relaxed, and a new nuclear envelope formed around each group.', r:'Telophase is the reverse of prophase.'},
  {t:'Two Ways to Split', bg:'garden', e:'🎈✂️🧱', x:'Now the cytoplasm had to divide: [[cytokinesis]]. The animal cell pinched in with a [[furrow]], like a belt tightening on a balloon. The plant cell, with its stiff wall, built a [[cell plate]] from the centre outwards. In coconut, nuclei divided without the cell dividing, making a [[syncytium]].', r:'Animal cell: furrow (outside in). Plant cell: cell plate (centre out) = middle lamella.'},
  {t:'The Special Dance', bg:'space', e:'💃🕺🔀', x:'"To make gametes, cells do a special dance called [[meiosis]]," said Prof. BAIO. In prophase I, partner chromosomes paired up by [[synapsis]] and swapped pieces by [[crossing over]], helped by the enzyme [[recombinase]]. X-shaped [[chiasmata]] showed where they had swapped.', r:'Prophase I: Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis.'},
  {t:'Four New Cells', bg:'sky', e:'4️⃣🌱🧬', x:'In meiosis I the partners separated, giving a [[dyad]] of two cells. Meiosis II worked like mitosis, and four haploid cells, a [[tetrad]], were born. "At fertilisation two such cells join, so the chromosome number stays the same in every generation, and crossing over makes every child unique!"', r:'Meiosis I is reductional; meiosis II is equational.'}],
 quiz:[['DNA is copied in:',['G1 phase','S phase','G2 phase','M phase'],1],['The best stage to count chromosomes is:',['Prophase','Metaphase','Anaphase','Telophase'],1],['Crossing over takes place in:',['Leptotene','Zygotene','Pachytene','Diakinesis'],2],['Liquid endosperm of coconut is an example of:',['Syncytium','Cell plate','Tetrad','Dyad'],0],['Homologous chromosomes separate in:',['Anaphase I','Anaphase II','Metaphase I','Telophase II'],0]]};
""")
append('stories/books-pu1-kn.js', r"""
BOOKS_I18N.kn['pu1-ch10'] = { title:'ವರ್ಣತಂತುಗಳ ನೃತ್ಯ', ch:'I PUC · ಅಧ್ಯಾಯ 10 · ಕೋಶ ಚಕ್ರ ಮತ್ತು ಕೋಶ ವಿಭಜನೆ',
 p:[
  ['ಒಂದು ಕೋಶ, ಅನೇಕ ಕೋಶಗಳು','ಪ್ರೊ. BAIO ಬಿಂದುಗೆ ಸೂಕ್ಷ್ಮದರ್ಶಕದಲ್ಲಿ ಈರುಳ್ಳಿಯ ಬೇರಿನ ತುದಿಯನ್ನು ತೋರಿಸಿದರು. "ಪ್ರತಿ ದೊಡ್ಡ ದೇಹವೂ ಒಂದು ಕೋಶದಿಂದ ಆರಂಭ. ಕೋಶಗಳು ಬೆಳೆದು ಮತ್ತೆ ಮತ್ತೆ ವಿಭಜನೆಯಾಗುತ್ತವೆ. ಈ ಪುನರಾವರ್ತಿತ ಕಥೆಯೇ [[cell cycle]]." ಮಾನವ ಕೋಶಕ್ಕೆ ಒಂದು ಚಕ್ರಕ್ಕೆ ಸುಮಾರು 24 ಗಂಟೆ, ಆದರೆ [[yeast]] ಗೆ ಕೇವಲ 90 ನಿಮಿಷ.','ಕೋಶ ಚಕ್ರ: ಜೀನೋಮ್ ನಕಲು, ಕೋಶ ಘಟಕಗಳ ತಯಾರಿ, ಎರಡು ಮರಿಕೋಶಗಳಾಗಿ ವಿಭಜನೆ.'],
  ['ಕಾರ್ಯನಿರತ ವಿಶ್ರಾಂತಿ','"ಈ ಕೋಶ ಶಾಂತವಾಗಿ ಕಾಣುತ್ತದೆ," ಎಂದಳು ಬಿಂದು. "ಇದೇ ಅತಿ ಕಾರ್ಯನಿರತ!" ಎಂದು ನಕ್ಕರು ಪ್ರೊ. BAIO. [[interphase]] ನಲ್ಲಿ ಕೋಶ [[G1 phase]] ನಲ್ಲಿ ಬೆಳೆಯುತ್ತದೆ, [[S phase]] ನಲ್ಲಿ DNA ನಕಲು ಮಾಡುತ್ತದೆ, [[G2 phase]] ನಲ್ಲಿ ವಿಭಜನೆಗೆ ಪ್ರೋಟೀನ್ ತಯಾರಿಸುತ್ತದೆ. ಹೃದಯ ಕೋಶಗಳಂತೆ ವಿಭಜನೆ ನಿಲ್ಲಿಸುವ ಕೋಶಗಳು [[G0]] ನಲ್ಲಿ ವಿಶ್ರಮಿಸುತ್ತವೆ.','S ಹಂತ: DNA 2C ಯಿಂದ 4C ಆಗುತ್ತದೆ, ಆದರೆ ವರ್ಣತಂತು ಸಂಖ್ಯೆ 2n ಆಗಿಯೇ ಇರುತ್ತದೆ.'],
  ['ಸಿದ್ಧತೆ','[[prophase]] ನಲ್ಲಿ ಸಿಕ್ಕುಸಿಕ್ಕಾದ ದಾರಗಳು ಸುರುಳಿಯಾಗಿ ದಪ್ಪ [[chromosomes]] ಆದವು. ಪ್ರತಿಯೊಂದಕ್ಕೂ [[centromere]] ನಲ್ಲಿ ಜೋಡಿಸಿದ ಎರಡು [[sister chromatids]]. ಸೆಂಟ್ರೋಸೋಮ್‌ಗಳು ವಿರುದ್ಧ ಧ್ರುವಗಳಿಗೆ ನಡೆದು ನಕ್ಷತ್ರದಂತಹ [[asters]] ಚೆಲ್ಲಿದವು. ನಿಧಾನವಾಗಿ ಕೋಶಕೇಂದ್ರ ಹೊದಿಕೆ ಕಣ್ಮರೆಯಾಯಿತು.','ಆಸ್ಟರ್‌ಗಳು + ಸ್ಪಿಂಡಲ್ ತಂತುಗಳು = ಮೈಟಾಟಿಕ್ ಉಪಕರಣ.'],
  ['ಸಾಲು ನಿಲ್ಲುವಿಕೆ','[[metaphase]] ನಲ್ಲಿ ಸ್ಪಿಂಡಲ್ ತಂತುಗಳು ಪ್ರತಿ ವರ್ಣತಂತುವನ್ನು ಅದರ [[kinetochore]] ನಿಂದ ಹಿಡಿದು ಮಧ್ಯಕ್ಕೆ ಎಳೆದವು. ಎಲ್ಲಾ ವರ್ಣತಂತುಗಳು [[metaphase plate]] ಎಂಬ ಒಂದೇ ಸಾಲಿನಲ್ಲಿ ನಿಂತವು. "ಎಣಿಸಲು ಇದೇ ಅತ್ಯುತ್ತಮ ಸಮಯ!" ಎಂದರು ಪ್ರೊ. BAIO.','ವರ್ಣತಂತುಗಳ ಆಕಾರ ಅಧ್ಯಯನಕ್ಕೆ ಮೆಟಾಫೇಸ್ ಅತ್ಯುತ್ತಮ ಹಂತ.'],
  ['ಹಗ್ಗ-ಜಗ್ಗಾಟ','ಟಕ್! [[anaphase]] ನಲ್ಲಿ ಎಲ್ಲಾ ಸೆಂಟ್ರೊಮಿಯರ್‌ಗಳು ಒಮ್ಮೆಲೇ ಸೀಳಿದವು, ಸಹೋದರ ಕ್ರೊಮ್ಯಾಟಿಡ್‌ಗಳು ಸೆಂಟ್ರೊಮಿಯರ್ ಮುಂದೆ, ತೋಳುಗಳು ಹಿಂದೆ, ವಿರುದ್ಧ ಧ್ರುವಗಳಿಗೆ ಓಡಿದವು. [[telophase]] ನಲ್ಲಿ ಅವು ಸಡಿಲಗೊಂಡವು, ಪ್ರತಿ ಗುಂಪಿನ ಸುತ್ತ ಹೊಸ ಕೋಶಕೇಂದ್ರ ಹೊದಿಕೆ ರೂಪುಗೊಂಡಿತು.','ಟೀಲೋಫೇಸ್ ಪ್ರೊಫೇಸ್‌ನ ವಿರುದ್ಧ.'],
  ['ವಿಭಜನೆಯ ಎರಡು ದಾರಿಗಳು','ಈಗ ಕೋಶದ್ರವ್ಯ ವಿಭಜನೆಯಾಗಬೇಕು: [[cytokinesis]]. ಪ್ರಾಣಿ ಕೋಶ ಬಲೂನಿನ ಸುತ್ತ ಬೆಲ್ಟ್ ಬಿಗಿದಂತೆ [[furrow]] ನಿಂದ ಹಿಸುಕಿತು. ಗಟ್ಟಿ ಭಿತ್ತಿಯ ಸಸ್ಯ ಕೋಶ ಮಧ್ಯದಿಂದ ಹೊರಮುಖವಾಗಿ [[cell plate]] ಕಟ್ಟಿತು. ತೆಂಗಿನಕಾಯಿಯಲ್ಲಿ ಕೋಶ ವಿಭಜನೆಯಾಗದೆ ಕೋಶಕೇಂದ್ರಗಳು ವಿಭಜನೆಯಾಗಿ [[syncytium]] ಆಯಿತು.','ಪ್ರಾಣಿ ಕೋಶ: ತೋಡು (ಹೊರಗಿನಿಂದ ಒಳಕ್ಕೆ). ಸಸ್ಯ ಕೋಶ: ಕೋಶ ಫಲಕ (ಮಧ್ಯದಿಂದ ಹೊರಕ್ಕೆ) = ಮಧ್ಯ ಪಟಲ.'],
  ['ವಿಶೇಷ ನೃತ್ಯ','"ಲಿಂಗಾಣುಗಳನ್ನು ಮಾಡಲು ಕೋಶಗಳು [[meiosis]] ಎಂಬ ವಿಶೇಷ ನೃತ್ಯ ಮಾಡುತ್ತವೆ," ಎಂದರು ಪ್ರೊ. BAIO. ಪ್ರೊಫೇಸ್ I ನಲ್ಲಿ ಜೊತೆಗಾರ ವರ್ಣತಂತುಗಳು [[synapsis]] ಮೂಲಕ ಜೋಡಿಯಾಗಿ, [[recombinase]] ಕಿಣ್ವದ ಸಹಾಯದಿಂದ [[crossing over]] ಮೂಲಕ ಭಾಗಗಳನ್ನು ಅದಲುಬದಲು ಮಾಡಿಕೊಂಡವು. X-ಆಕಾರದ [[chiasmata]] ಅವು ಎಲ್ಲಿ ಅದಲುಬದಲಾದವು ಎಂದು ತೋರಿಸಿದವು.','ಪ್ರೊಫೇಸ್ I: ಲೆಪ್ಟೋಟೀನ್, ಜೈಗೋಟೀನ್, ಪ್ಯಾಕಿಟೀನ್, ಡಿಪ್ಲೋಟೀನ್, ಡಯಾಕೈನೆಸಿಸ್.'],
  ['ನಾಲ್ಕು ಹೊಸ ಕೋಶಗಳು','ಮಿಯಾಸಿಸ್ I ನಲ್ಲಿ ಜೊತೆಗಾರರು ಬೇರ್ಪಟ್ಟು ಎರಡು ಕೋಶಗಳ [[dyad]] ಆಯಿತು. ಮಿಯಾಸಿಸ್ II ಮೈಟಾಸಿಸ್‌ನಂತೆ ನಡೆದು ನಾಲ್ಕು ಏಕಗುಣಿತ ಕೋಶಗಳ [[tetrad]] ಹುಟ್ಟಿತು. "ಫಲೀಕರಣದಲ್ಲಿ ಇಂತಹ ಎರಡು ಕೋಶಗಳು ಸೇರುವುದರಿಂದ ಪ್ರತಿ ಪೀಳಿಗೆಯಲ್ಲೂ ವರ್ಣತಂತು ಸಂಖ್ಯೆ ಒಂದೇ ಇರುತ್ತದೆ, ಮತ್ತು ಕ್ರಾಸಿಂಗ್ ಓವರ್ ಪ್ರತಿ ಮಗುವನ್ನೂ ವಿಶಿಷ್ಟವಾಗಿಸುತ್ತದೆ!"','ಮಿಯಾಸಿಸ್ I ಕ್ಷೀಣ ವಿಭಜನೆ; ಮಿಯಾಸಿಸ್ II ಸಮ ವಿಭಜನೆ.']],
 q:[['DNA ನಕಲಾಗುವುದು:',['G1 ಹಂತ','S ಹಂತ','G2 ಹಂತ','M ಹಂತ']],['ವರ್ಣತಂತುಗಳನ್ನು ಎಣಿಸಲು ಅತ್ಯುತ್ತಮ ಹಂತ:',['ಪ್ರೊಫೇಸ್','ಮೆಟಾಫೇಸ್','ಅನಾಫೇಸ್','ಟೀಲೋಫೇಸ್']],['ಕ್ರಾಸಿಂಗ್ ಓವರ್ ನಡೆಯುವುದು:',['ಲೆಪ್ಟೋಟೀನ್','ಜೈಗೋಟೀನ್','ಪ್ಯಾಕಿಟೀನ್','ಡಯಾಕೈನೆಸಿಸ್']],['ತೆಂಗಿನ ದ್ರವ ಎಂಡೋಸ್ಪರ್ಮ್ ಇದಕ್ಕೆ ಉದಾಹರಣೆ:',['ಸಿನ್ಸೀಷಿಯಮ್','ಕೋಶ ಫಲಕ','ಟೆಟ್ರಾಡ್','ಡಯಾಡ್']],['ಸಮಜಾತ ವರ್ಣತಂತುಗಳು ಬೇರ್ಪಡುವುದು:',['ಅನಾಫೇಸ್ I','ಅನಾಫೇಸ್ II','ಮೆಟಾಫೇಸ್ I','ಟೀಲೋಫೇಸ್ II']]]};
""")
append('stories/books-pu1-hi.js', r"""
BOOKS_I18N.hi['pu1-ch10'] = { title:'गुणसूत्रों का नृत्य', ch:'I PUC · अध्याय 10 · कोशिका चक्र और कोशिका विभाजन',
 p:[
  ['एक कोशिका, अनेक कोशिकाएँ','प्रो. BAIO ने बिंदु को सूक्ष्मदर्शी में प्याज़ की जड़ का सिरा दिखाया। "हर बड़ा शरीर एक कोशिका से शुरू होता है। कोशिकाएँ बढ़ती हैं और बार-बार बँटती हैं। यही दोहराई जाने वाली कहानी [[cell cycle]] है।" मानव कोशिका को एक चक्र में लगभग 24 घंटे लगते हैं, पर [[yeast]] को केवल 90 मिनट।','कोशिका चक्र: जीनोम की प्रतिलिपि, कोशिका के घटक बनाना, दो संतति कोशिकाओं में बँटना।'],
  ['व्यस्त विश्राम','"यह कोशिका तो शांत दिखती है," बिंदु बोली। "यही सबसे व्यस्त है!" प्रो. BAIO हँसे। [[interphase]] में कोशिका [[G1 phase]] में बढ़ती है, [[S phase]] में DNA की प्रतिलिपि बनाती है, और [[G2 phase]] में विभाजन के लिए प्रोटीन बनाती है। हृदय कोशिकाओं जैसी, बँटना बंद करने वाली कोशिकाएँ [[G0]] में आराम करती हैं।','S प्रावस्था: DNA 2C से 4C हो जाता है, पर गुणसूत्र संख्या 2n ही रहती है।'],
  ['तैयारी','[[prophase]] में उलझे धागे कुंडलित होकर मोटे [[chromosomes]] बन गए। हर एक में [[centromere]] पर जुड़े दो [[sister chromatids]] थे। तारककेंद्र विपरीत ध्रुवों पर चले गए और तारे जैसे [[asters]] फैलाए। धीरे-धीरे केंद्रक आवरण गायब हो गया।','तारक + तर्कु तंतु = समसूत्री उपकरण।'],
  ['पंक्ति में खड़े','[[metaphase]] में तर्कु तंतुओं ने हर गुणसूत्र को उसके [[kinetochore]] से पकड़कर बीच में खींचा। सारे गुणसूत्र एक पंक्ति, [[metaphase plate]], पर खड़े हो गए। "गिनने का यही सबसे अच्छा समय है!" प्रो. BAIO ने कहा।','गुणसूत्रों का आकार देखने के लिए मध्यावस्था सबसे अच्छी अवस्था है।'],
  ['रस्साकशी','चट! [[anaphase]] में हर गुणसूत्रबिंदु एक साथ टूटा, और सहोदर अर्धगुणसूत्र गुणसूत्रबिंदु आगे और भुजाएँ पीछे करके विपरीत ध्रुवों की ओर दौड़े। [[telophase]] में वे ढीले पड़ गए, और हर समूह के चारों ओर नया केंद्रक आवरण बन गया।','अंत्यावस्था पूर्वावस्था की उलटी है।'],
  ['बँटने के दो तरीके','अब कोशिकाद्रव्य को बँटना था: [[cytokinesis]]। जंतु कोशिका गुब्बारे पर कसती बेल्ट की तरह [[furrow]] से दब गई। कठोर भित्ति वाली पादप कोशिका ने बीच से बाहर की ओर [[cell plate]] बनाई। नारियल में कोशिका बँटे बिना केंद्रक बँटे, और [[syncytium]] बना।','जंतु कोशिका: खाँच (बाहर से अंदर)। पादप कोशिका: कोशिका पट्टिका (बीच से बाहर) = मध्य पटलिका।'],
  ['विशेष नृत्य','"युग्मक बनाने के लिए कोशिकाएँ [[meiosis]] नाम का विशेष नृत्य करती हैं," प्रो. BAIO ने कहा। पूर्वावस्था I में साथी गुणसूत्रों ने [[synapsis]] से जोड़े बनाए और [[recombinase]] एंजाइम की मदद से [[crossing over]] द्वारा टुकड़े बदले। X आकार के [[chiasmata]] ने दिखाया कि उन्होंने कहाँ अदला-बदली की।','पूर्वावस्था I: लेप्टोटीन, जाइगोटीन, पैकिटीन, डिप्लोटीन, डायकाइनेसिस।'],
  ['चार नई कोशिकाएँ','अर्धसूत्री I में साथी अलग हुए और दो कोशिकाओं का [[dyad]] बना। अर्धसूत्री II समसूत्री की तरह चला, और चार अगुणित कोशिकाओं का [[tetrad]] जन्मा। "निषेचन में ऐसी दो कोशिकाएँ मिलती हैं, इसलिए हर पीढ़ी में गुणसूत्र संख्या वही रहती है, और जीन विनिमय हर बच्चे को अनोखा बनाता है!"','अर्धसूत्री I न्यूनीकरण विभाजन है; अर्धसूत्री II समीकरण विभाजन है।']],
 q:[['DNA की प्रतिलिपि बनती है:',['G1 प्रावस्था','S प्रावस्था','G2 प्रावस्था','M प्रावस्था']],['गुणसूत्र गिनने की सबसे अच्छी अवस्था:',['पूर्वावस्था','मध्यावस्था','पश्चावस्था','अंत्यावस्था']],['जीन विनिमय होता है:',['लेप्टोटीन','जाइगोटीन','पैकिटीन','डायकाइनेसिस']],['नारियल का तरल भ्रूणपोष उदाहरण है:',['संकोशिका (syncytium)','कोशिका पट्टिका','चतुष्क','द्विक']],['समजात गुणसूत्र अलग होते हैं:',['पश्चावस्था I','पश्चावस्था II','मध्यावस्था I','अंत्यावस्था II']]]};
""")

# ---------------- Flash cards ----------------
append('flashcards/fc-pu1.js', r"""
FC['pu1-ch10'] = { title:'Cell Cycle and Cell Division', ch:'I PUC · Ch 10 · Cell Cycle and Cell Division', color:'#2f9e8f', page:'pu1-ch10.html', cards:[
 {t:'The Cell Cycle', p:[['Definition','Duplicate the genome, make cell parts, divide into 2 daughter cells'],['Duration','Human cell ~24 h · yeast ~90 min'],['Two phases','Interphase (>95%) + M phase (~1 h)'],['Control','All events are under genetic control']], f:{k:'flow', s:['G₁','S','G₂','M']}},
 {t:'Interphase', p:[['G₁','Cell grows; no DNA replication'],['S','DNA 2C → 4C; chromosomes stay 2n; centriole duplicates'],['G₂','Proteins for mitosis are made'],['G₀','Quiescent: active but not dividing (heart cells)']], f:{k:'table', h:['Stage','Chromosomes','DNA'], r:[['G₁','2n','2C'],['G₂','2n','4C'],['After mitosis','2n','2C'],['After meiosis II','n','C']]}},
 {t:'Mitosis', p:[['Type','Equational division'],['Prophase','Condensation, asters, envelope breaks down'],['Metaphase','Chromosomes on the metaphase plate; kinetochores attach'],['Anaphase','Centromeres split; chromatids to opposite poles'],['Telophase','Nuclei reform — reverse of prophase']], f:{k:'flow', s:['Prophase','Metaphase','Anaphase','Telophase']}},
 {t:'Cytokinesis', p:[['Animal cell','Furrow deepens from outside to the centre'],['Plant cell','Cell plate grows from the centre outwards'],['Cell plate','Becomes the middle lamella'],['Syncytium','No cytokinesis → multinucleate (coconut endosperm)']], f:{k:'emoji', e:'🎈 ✂️ 🧱'}},
 {t:'Prophase I', p:[['Leptotene','Chromosomes become visible'],['Zygotene','Synapsis; synaptonemal complex; bivalent'],['Pachytene','Crossing over by recombinase'],['Diplotene','Chiasmata; can last years in oocytes'],['Diakinesis','Terminalisation of chiasmata']], f:{k:'flow', s:['Leptotene','Zygotene','Pachytene','Diplotene','Diakinesis']}},
 {t:'Meiosis I & II', p:[['Meiosis I','Reductional — homologues separate → dyad'],['Interkinesis','Short; no DNA replication'],['Meiosis II','Equational — centromeres split → tetrad'],['Significance','Constant chromosome number; variation for evolution']], f:{k:'table', h:['Feature','Mitosis','Meiosis'], r:[['Divisions','1','2'],['Daughter cells','2 (2n)','4 (n)'],['Crossing over','No','Yes']]}}]};
""")
append('flashcards/fc-pu1-kn.js', r"""
FC_I18N.kn['pu1-ch10'] = { title:'ಕೋಶ ಚಕ್ರ ಮತ್ತು ಕೋಶ ವಿಭಜನೆ', ch:'I PUC · ಅಧ್ಯಾಯ 10 · ಕೋಶ ಚಕ್ರ ಮತ್ತು ಕೋಶ ವಿಭಜನೆ', cards:[
 {t:'ಕೋಶ ಚಕ್ರ', p:[['ವ್ಯಾಖ್ಯೆ','ಜೀನೋಮ್ ನಕಲು, ಕೋಶ ಘಟಕಗಳ ತಯಾರಿ, 2 ಮರಿಕೋಶಗಳಾಗಿ ವಿಭಜನೆ'],['ಅವಧಿ','ಮಾನವ ಕೋಶ ~24 ಗಂಟೆ · ಯೀಸ್ಟ್ ~90 ನಿಮಿಷ'],['ಎರಡು ಹಂತಗಳು','ಇಂಟರ್‌ಫೇಸ್ (>95%) + M ಹಂತ (~1 ಗಂಟೆ)'],['ನಿಯಂತ್ರಣ','ಎಲ್ಲಾ ಘಟನೆಗಳು ಜೀನ್ ನಿಯಂತ್ರಣದಲ್ಲಿ']]},
 {t:'ಇಂಟರ್‌ಫೇಸ್', p:[['G₁','ಕೋಶ ಬೆಳೆಯುತ್ತದೆ; DNA ನಕಲು ಇಲ್ಲ'],['S','DNA 2C → 4C; ವರ್ಣತಂತುಗಳು 2n; ಸೆಂಟ್ರಿಯೋಲ್ ದ್ವಿಗುಣ'],['G₂','ಮೈಟಾಸಿಸ್‌ಗೆ ಪ್ರೋಟೀನ್ ತಯಾರಿ'],['G₀','ನಿಶ್ಚಲ: ಸಕ್ರಿಯ ಆದರೆ ವಿಭಜನೆ ಇಲ್ಲ (ಹೃದಯ ಕೋಶಗಳು)']], f:{h:['ಹಂತ','ವರ್ಣತಂತುಗಳು','DNA'], r:[['G₁','2n','2C'],['G₂','2n','4C'],['ಮೈಟಾಸಿಸ್ ನಂತರ','2n','2C'],['ಮಿಯಾಸಿಸ್ II ನಂತರ','n','C']]}},
 {t:'ಮೈಟಾಸಿಸ್', p:[['ವಿಧ','ಸಮ ವಿಭಜನೆ'],['ಪ್ರೊಫೇಸ್','ಸಾಂದ್ರೀಕರಣ, ಆಸ್ಟರ್‌ಗಳು, ಹೊದಿಕೆ ಒಡೆಯುತ್ತದೆ'],['ಮೆಟಾಫೇಸ್','ಮೆಟಾಫೇಸ್ ಫಲಕದ ಮೇಲೆ ವರ್ಣತಂತುಗಳು; ಕೈನೆಟೋಕೋರ್ ಜೋಡಣೆ'],['ಅನಾಫೇಸ್','ಸೆಂಟ್ರೊಮಿಯರ್ ಸೀಳು; ಕ್ರೊಮ್ಯಾಟಿಡ್‌ಗಳು ವಿರುದ್ಧ ಧ್ರುವಗಳಿಗೆ'],['ಟೀಲೋಫೇಸ್','ಕೋಶಕೇಂದ್ರಗಳ ಮರುರಚನೆ — ಪ್ರೊಫೇಸ್‌ನ ವಿರುದ್ಧ']], f:{s:['ಪ್ರೊಫೇಸ್','ಮೆಟಾಫೇಸ್','ಅನಾಫೇಸ್','ಟೀಲೋಫೇಸ್']}},
 {t:'ಸೈಟೋಕೈನೆಸಿಸ್', p:[['ಪ್ರಾಣಿ ಕೋಶ','ತೋಡು ಹೊರಗಿನಿಂದ ಮಧ್ಯಕ್ಕೆ ಆಳವಾಗುತ್ತದೆ'],['ಸಸ್ಯ ಕೋಶ','ಕೋಶ ಫಲಕ ಮಧ್ಯದಿಂದ ಹೊರಕ್ಕೆ ಬೆಳೆಯುತ್ತದೆ'],['ಕೋಶ ಫಲಕ','ಮಧ್ಯ ಪಟಲವಾಗುತ್ತದೆ'],['ಸಿನ್ಸೀಷಿಯಮ್','ಸೈಟೋಕೈನೆಸಿಸ್ ಇಲ್ಲ → ಬಹುಕೋಶಕೇಂದ್ರೀಯ (ತೆಂಗಿನ ಎಂಡೋಸ್ಪರ್ಮ್)']]},
 {t:'ಪ್ರೊಫೇಸ್ I', p:[['ಲೆಪ್ಟೋಟೀನ್','ವರ್ಣತಂತುಗಳು ಕಾಣಿಸುತ್ತವೆ'],['ಜೈಗೋಟೀನ್','ಸಿನಾಪ್ಸಿಸ್; ಸಿನಾಪ್ಟೋನಿಮಲ್ ಸಂಕೀರ್ಣ; ಬೈವೇಲೆಂಟ್'],['ಪ್ಯಾಕಿಟೀನ್','ರೀಕಾಂಬಿನೇಸ್‌ನಿಂದ ಕ್ರಾಸಿಂಗ್ ಓವರ್'],['ಡಿಪ್ಲೋಟೀನ್','ಕಯಾಸ್ಮಾಟಾ; ಅಂಡಕೋಶಗಳಲ್ಲಿ ವರ್ಷಗಳ ಕಾಲ ಇರಬಹುದು'],['ಡಯಾಕೈನೆಸಿಸ್','ಕಯಾಸ್ಮಾಟಾ ಟರ್ಮಿನಲೈಸೇಶನ್']], f:{s:['ಲೆಪ್ಟೋಟೀನ್','ಜೈಗೋಟೀನ್','ಪ್ಯಾಕಿಟೀನ್','ಡಿಪ್ಲೋಟೀನ್','ಡಯಾಕೈನೆಸಿಸ್']}},
 {t:'ಮಿಯಾಸಿಸ್ I ಮತ್ತು II', p:[['ಮಿಯಾಸಿಸ್ I','ಕ್ಷೀಣ — ಸಮಜಾತಗಳು ಬೇರ್ಪಡುತ್ತವೆ → ಡಯಾಡ್'],['ಇಂಟರ್‌ಕೈನೆಸಿಸ್','ಅಲ್ಪ; DNA ನಕಲು ಇಲ್ಲ'],['ಮಿಯಾಸಿಸ್ II','ಸಮ — ಸೆಂಟ್ರೊಮಿಯರ್ ಸೀಳು → ಟೆಟ್ರಾಡ್'],['ಮಹತ್ವ','ಸ್ಥಿರ ವರ್ಣತಂತು ಸಂಖ್ಯೆ; ವಿಕಾಸಕ್ಕೆ ವ್ಯತ್ಯಾಸ']], f:{h:['ಲಕ್ಷಣ','ಮೈಟಾಸಿಸ್','ಮಿಯಾಸಿಸ್'], r:[['ವಿಭಜನೆಗಳು','1','2'],['ಮರಿಕೋಶಗಳು','2 (2n)','4 (n)'],['ಕ್ರಾಸಿಂಗ್ ಓವರ್','ಇಲ್ಲ','ಇದೆ']]}}]};
""")
append('flashcards/fc-pu1-hi.js', r"""
FC_I18N.hi['pu1-ch10'] = { title:'कोशिका चक्र और कोशिका विभाजन', ch:'I PUC · अध्याय 10 · कोशिका चक्र और कोशिका विभाजन', cards:[
 {t:'कोशिका चक्र', p:[['परिभाषा','जीनोम की प्रतिलिपि, कोशिका घटक बनाना, 2 संतति कोशिकाओं में बँटना'],['अवधि','मानव कोशिका ~24 घंटे · यीस्ट ~90 मिनट'],['दो प्रावस्थाएँ','अंतरावस्था (>95%) + M प्रावस्था (~1 घंटा)'],['नियंत्रण','सभी घटनाएँ आनुवंशिक नियंत्रण में']]},
 {t:'अंतरावस्था', p:[['G₁','कोशिका बढ़ती है; DNA प्रतिकृति नहीं'],['S','DNA 2C → 4C; गुणसूत्र 2n ही; सेंट्रिओल द्विगुणन'],['G₂','समसूत्री विभाजन हेतु प्रोटीन बनते हैं'],['G₀','शांत: सक्रिय पर विभाजन नहीं (हृदय कोशिकाएँ)']], f:{h:['अवस्था','गुणसूत्र','DNA'], r:[['G₁','2n','2C'],['G₂','2n','4C'],['समसूत्री के बाद','2n','2C'],['अर्धसूत्री II के बाद','n','C']]}},
 {t:'समसूत्री विभाजन', p:[['प्रकार','समीकरण विभाजन'],['पूर्वावस्था','संघनन, तारक, आवरण टूटता है'],['मध्यावस्था','गुणसूत्र मध्यावस्था पट्टिका पर; काइनेटोकोर जुड़ते हैं'],['पश्चावस्था','गुणसूत्रबिंदु विभाजित; अर्धगुणसूत्र विपरीत ध्रुवों पर'],['अंत्यावस्था','केंद्रक फिर बनते हैं — पूर्वावस्था की उलटी']], f:{s:['पूर्वावस्था','मध्यावस्था','पश्चावस्था','अंत्यावस्था']}},
 {t:'साइटोकाइनेसिस', p:[['जंतु कोशिका','खाँच बाहर से बीच तक गहरी होती है'],['पादप कोशिका','कोशिका पट्टिका बीच से बाहर बढ़ती है'],['कोशिका पट्टिका','मध्य पटलिका बनती है'],['संकोशिका','साइटोकाइनेसिस नहीं → बहुकेंद्रकी (नारियल भ्रूणपोष)']]},
 {t:'पूर्वावस्था I', p:[['लेप्टोटीन','गुणसूत्र दिखाई देते हैं'],['जाइगोटीन','सूत्रयुग्मन; सिनेप्टोनिमल सम्मिश्र; द्विसंयोजक'],['पैकिटीन','रिकॉम्बिनेज़ से जीन विनिमय'],['डिप्लोटीन','काएज़्मेटा; अंडकों में वर्षों तक रह सकती है'],['डायकाइनेसिस','काएज़्मेटा का उपांतीभवन']], f:{s:['लेप्टोटीन','जाइगोटीन','पैकिटीन','डिप्लोटीन','डायकाइनेसिस']}},
 {t:'अर्धसूत्री I और II', p:[['अर्धसूत्री I','न्यूनीकरण — समजात अलग → द्विक'],['अंतरालावस्था','छोटी; DNA प्रतिकृति नहीं'],['अर्धसूत्री II','समीकरण — गुणसूत्रबिंदु विभाजित → चतुष्क'],['महत्व','स्थिर गुणसूत्र संख्या; विकास के लिए विविधता']], f:{h:['लक्षण','समसूत्री','अर्धसूत्री'], r:[['विभाजन','1','2'],['संतति कोशिकाएँ','2 (2n)','4 (n)'],['जीन विनिमय','नहीं','हाँ']]}}]};
""")

# ---------------- Activities ----------------
append('activities/acts-pu1.js', r"""
ACTS['pu1-ch10'] = { title:'Watch Cells Divide', ch:'I PUC · Ch 10 · Cell Cycle and Cell Division', cover:'🧅', color:'#2f9e8f', page:'pu1-ch10.html',
 hands:[
  {t:'Onion Root Tip Squash: See Mitosis', icon:'🧅', where:'lab', time:'1 hour',
   concept:'Root tips divide actively, so a stained squash of a root tip shows every stage of mitosis.',
   need:['An onion kept with its base in water for 3–4 days (roots 2–3 cm long)','Acetocarmine stain','1N hydrochloric acid, a spirit lamp, a watch glass','Slides, coverslips, blotting paper, forceps and a blade','A compound microscope'],
   safety:'Hydrochloric acid is corrosive: handle it with the teacher and wash your hands. Warm gently and never let the acid boil dry.',
   steps:['Cut 1 cm long root tips in the morning, when most cells are dividing.','Warm the tips gently in acetocarmine with 2–3 drops of 1N HCl for about 5 minutes.','Place one tip on a slide in a drop of stain and cut off the white end; keep only the dark tip.','Put a coverslip on it, cover with blotting paper and press gently with your thumb to squash it.','Look under low power, then high power, and find cells in each stage.'],
   cols:['Stage','Number of cells seen','What you saw'], rows:6,
   why:'Root tips have a meristem whose cells divide by mitosis again and again. Acid softens the tissue so the cells spread out, and acetocarmine stains the chromosomes red. Most cells are in interphase because it takes more than 95% of the cell cycle; metaphase shows the chromosomes most clearly on the metaphase plate.',
   qs:['Which stage did you see most often? Why?','In which stage could you count the chromosomes most easily?','Why are root tips chosen for this experiment?'],
   terms:['mitosis','interphase','metaphase','anaphase','meristem']},
  {t:'Bead Chromosomes: Model Mitosis and Meiosis', icon:'📿', where:'home', time:'45 minutes',
   concept:'Moving model chromosomes through each stage shows why mitosis keeps the chromosome number and meiosis halves it.',
   need:['Pop-beads or modelling clay in two colours (red from the mother, blue from the father)','Paper clips to act as centromeres','A chart paper with a big circle drawn on it (the cell)','Thread for spindle fibres'],
   safety:'Keep small beads away from young children.',
   steps:['Make one long and one short chromosome in each colour, so the cell has 2n = 4.','S phase: make an identical copy of each chromosome and join the two strands with a clip.','Mitosis: line all four up in the middle, then pull the sister strands to opposite sides. Count the chromosomes on each side.','Meiosis I: pair each red chromosome with its blue partner, swap a small piece (crossing over), then pull the partners apart.','Meiosis II: in each half, pull the sister strands apart again. Count the chromosomes in all four cells.'],
   cols:['Step','Number of cells','Chromosomes per cell'], rows:6,
   why:'In mitosis sister chromatids separate, so each daughter cell gets the full set (2n). In meiosis I the homologous partners separate, halving the number to n; meiosis II then separates the sisters. The swapped bead pieces show crossing over, which mixes the parents\' genes and creates variation.',
   qs:['How many cells and chromosomes did you get after mitosis? After meiosis?','What did swapping the beads show?','Why must meiosis happen before gametes are formed?'],
   terms:['sister chromatids','homologous chromosomes','crossing over','meiosis']}],
 digital:{type:'sort', t:'Which Stage Am I?', intro:'Tap an event, then tap the division in which it happens.',
  bins:['Interphase','Mitosis','Meiosis I','Meiosis II'],
  items:[['DNA replication (2C → 4C)',0],['Centriole duplicates',0],['Proteins for mitosis are made (G₂)',0],['Chromosomes of a 2n cell on the metaphase plate',1],['Sister chromatids of a 2n cell go to opposite poles',1],['Two diploid daughter nuclei form',1],['Synapsis of homologous chromosomes',2],['Crossing over in pachytene',2],['Homologous chromosomes separate',2],['A dyad of cells forms',2],['Centromeres split in a haploid cell',3],['A tetrad of four haploid cells forms',3]],
  learn:'Interphase prepares the cell; mitosis separates sister chromatids and keeps the number 2n; meiosis I separates homologues (2n → n) and meiosis II separates sister chromatids (n → n).',
  qs:['Which events happen only in meiosis I?','Why is meiosis II called equational?']}};
""")
append('activities/acts-pu1-kn.js', r"""
ACTS_I18N.kn['pu1-ch10'] = { title:'ಕೋಶಗಳ ವಿಭಜನೆ ನೋಡಿ', ch:'I PUC · ಅಧ್ಯಾಯ 10 · ಕೋಶ ಚಕ್ರ ಮತ್ತು ಕೋಶ ವಿಭಜನೆ',
 hands:[
  {t:'ಈರುಳ್ಳಿ ಬೇರಿನ ತುದಿ ಸ್ಕ್ವಾಷ್: ಮೈಟಾಸಿಸ್ ನೋಡಿ', time:'1 ಗಂಟೆ',
   concept:'ಬೇರಿನ ತುದಿಗಳು ಸಕ್ರಿಯವಾಗಿ ವಿಭಜನೆಯಾಗುವುದರಿಂದ, ಬಣ್ಣ ಹಾಕಿದ ಸ್ಕ್ವಾಷ್ ಮೈಟಾಸಿಸ್‌ನ ಎಲ್ಲಾ ಹಂತಗಳನ್ನು ತೋರಿಸುತ್ತದೆ.',
   need:['3–4 ದಿನ ತಳಭಾಗ ನೀರಿನಲ್ಲಿಟ್ಟ ಈರುಳ್ಳಿ (2–3 cm ಬೇರುಗಳು)','Acetocarmine ಬಣ್ಣ','1N ಹೈಡ್ರೋಕ್ಲೋರಿಕ್ ಆಮ್ಲ, ಸ್ಪಿರಿಟ್ ದೀಪ, ವಾಚ್ ಗ್ಲಾಸ್','ಸ್ಲೈಡ್, ಕವರ್‌ಸ್ಲಿಪ್, ಬ್ಲಾಟಿಂಗ್ ಕಾಗದ, ಫೋರ್ಸೆಪ್ಸ್ ಮತ್ತು ಬ್ಲೇಡ್','ಸಂಯುಕ್ತ ಸೂಕ್ಷ್ಮದರ್ಶಕ'],
   safety:'ಹೈಡ್ರೋಕ್ಲೋರಿಕ್ ಆಮ್ಲ ಸುಡುತ್ತದೆ: ಶಿಕ್ಷಕರೊಂದಿಗೆ ಬಳಸಿ, ಕೈ ತೊಳೆಯಿರಿ. ನಿಧಾನವಾಗಿ ಬಿಸಿ ಮಾಡಿ, ಆಮ್ಲ ಒಣಗುವಂತೆ ಕುದಿಸಬೇಡಿ.',
   steps:['ಹೆಚ್ಚಿನ ಕೋಶಗಳು ವಿಭಜನೆಯಾಗುವ ಬೆಳಿಗ್ಗೆ 1 cm ಬೇರಿನ ತುದಿಗಳನ್ನು ಕತ್ತರಿಸಿ.','2–3 ಹನಿ 1N HCl ಇರುವ acetocarmine ನಲ್ಲಿ ಸುಮಾರು 5 ನಿಮಿಷ ನಿಧಾನವಾಗಿ ಬಿಸಿ ಮಾಡಿ.','ಒಂದು ತುದಿಯನ್ನು ಬಣ್ಣದ ಹನಿಯಲ್ಲಿ ಸ್ಲೈಡ್ ಮೇಲಿಟ್ಟು ಬಿಳಿ ಭಾಗ ಕತ್ತರಿಸಿ; ಕಡು ತುದಿ ಮಾತ್ರ ಉಳಿಸಿ.','ಕವರ್‌ಸ್ಲಿಪ್ ಇಟ್ಟು, ಬ್ಲಾಟಿಂಗ್ ಕಾಗದ ಮುಚ್ಚಿ, ಹೆಬ್ಬೆರಳಿನಿಂದ ನಿಧಾನವಾಗಿ ಒತ್ತಿ.','ಕಡಿಮೆ ನಂತರ ಹೆಚ್ಚಿನ ವರ್ಧನೆಯಲ್ಲಿ ನೋಡಿ, ಪ್ರತಿ ಹಂತದ ಕೋಶಗಳನ್ನು ಹುಡುಕಿ.'],
   cols:['ಹಂತ','ಕಂಡ ಕೋಶಗಳ ಸಂಖ್ಯೆ','ನೀವು ಕಂಡದ್ದು'],
   why:'ಬೇರಿನ ತುದಿಯ ವಿಭಜಕ ಅಂಗಾಂಶದ ಕೋಶಗಳು ಮೈಟಾಸಿಸ್‌ನಿಂದ ಮತ್ತೆ ಮತ್ತೆ ವಿಭಜನೆಯಾಗುತ್ತವೆ. ಆಮ್ಲ ಅಂಗಾಂಶವನ್ನು ಮೃದುಗೊಳಿಸಿ ಕೋಶಗಳನ್ನು ಹರಡುತ್ತದೆ, acetocarmine ವರ್ಣತಂತುಗಳಿಗೆ ಕೆಂಪು ಬಣ್ಣ ಕೊಡುತ್ತದೆ. ಇಂಟರ್‌ಫೇಸ್ ಚಕ್ರದ 95% ಕ್ಕಿಂತ ಹೆಚ್ಚು ಸಮಯ ತೆಗೆದುಕೊಳ್ಳುವುದರಿಂದ ಹೆಚ್ಚಿನ ಕೋಶಗಳು ಅದರಲ್ಲಿರುತ್ತವೆ; ಮೆಟಾಫೇಸ್ ವರ್ಣತಂತುಗಳನ್ನು ಅತ್ಯಂತ ಸ್ಪಷ್ಟವಾಗಿ ತೋರಿಸುತ್ತದೆ.',
   qs:['ಯಾವ ಹಂತ ಹೆಚ್ಚಾಗಿ ಕಂಡಿತು? ಏಕೆ?','ಯಾವ ಹಂತದಲ್ಲಿ ವರ್ಣತಂತುಗಳನ್ನು ಸುಲಭವಾಗಿ ಎಣಿಸಬಹುದು?','ಈ ಪ್ರಯೋಗಕ್ಕೆ ಬೇರಿನ ತುದಿಗಳನ್ನೇ ಏಕೆ ಆರಿಸುತ್ತೇವೆ?']},
  {t:'ಮಣಿ ವರ್ಣತಂತುಗಳು: ಮೈಟಾಸಿಸ್ ಮತ್ತು ಮಿಯಾಸಿಸ್ ಮಾದರಿ', time:'45 ನಿಮಿಷ',
   concept:'ಮಾದರಿ ವರ್ಣತಂತುಗಳನ್ನು ಪ್ರತಿ ಹಂತದಲ್ಲಿ ಸರಿಸಿದಾಗ, ಮೈಟಾಸಿಸ್ ವರ್ಣತಂತು ಸಂಖ್ಯೆಯನ್ನು ಉಳಿಸುವುದು ಮತ್ತು ಮಿಯಾಸಿಸ್ ಅರ್ಧಗೊಳಿಸುವುದು ಏಕೆ ಎಂದು ತಿಳಿಯುತ್ತದೆ.',
   need:['ಎರಡು ಬಣ್ಣದ ಪಾಪ್-ಮಣಿಗಳು ಅಥವಾ ಜೇಡಿಮಣ್ಣು (ಕೆಂಪು ತಾಯಿಯಿಂದ, ನೀಲಿ ತಂದೆಯಿಂದ)','ಸೆಂಟ್ರೊಮಿಯರ್ ಆಗಿ ಪೇಪರ್ ಕ್ಲಿಪ್‌ಗಳು','ದೊಡ್ಡ ವೃತ್ತ ಬರೆದ ಚಾರ್ಟ್ ಕಾಗದ (ಕೋಶ)','ಸ್ಪಿಂಡಲ್ ತಂತುಗಳಿಗೆ ದಾರ'],
   safety:'ಸಣ್ಣ ಮಣಿಗಳನ್ನು ಚಿಕ್ಕ ಮಕ್ಕಳಿಂದ ದೂರವಿಡಿ.',
   steps:['ಪ್ರತಿ ಬಣ್ಣದಲ್ಲಿ ಒಂದು ಉದ್ದ ಮತ್ತು ಒಂದು ಚಿಕ್ಕ ವರ್ಣತಂತು ಮಾಡಿ, ಹೀಗೆ ಕೋಶದಲ್ಲಿ 2n = 4.','S ಹಂತ: ಪ್ರತಿ ವರ್ಣತಂತುವಿನ ಒಂದೇ ರೀತಿಯ ನಕಲು ಮಾಡಿ ಎರಡು ಎಳೆಗಳನ್ನು ಕ್ಲಿಪ್‌ನಿಂದ ಜೋಡಿಸಿ.','ಮೈಟಾಸಿಸ್: ನಾಲ್ಕನ್ನೂ ಮಧ್ಯದಲ್ಲಿ ಸಾಲಾಗಿಸಿ, ಸಹೋದರ ಎಳೆಗಳನ್ನು ವಿರುದ್ಧ ಬದಿಗಳಿಗೆ ಎಳೆಯಿರಿ. ಪ್ರತಿ ಬದಿಯ ವರ್ಣತಂತುಗಳನ್ನು ಎಣಿಸಿ.','ಮಿಯಾಸಿಸ್ I: ಪ್ರತಿ ಕೆಂಪು ವರ್ಣತಂತುವನ್ನು ನೀಲಿ ಜೊತೆಗಾರನೊಂದಿಗೆ ಜೋಡಿಸಿ, ಸಣ್ಣ ತುಂಡು ಅದಲುಬದಲು ಮಾಡಿ (ಕ್ರಾಸಿಂಗ್ ಓವರ್), ನಂತರ ಜೊತೆಗಾರರನ್ನು ಬೇರ್ಪಡಿಸಿ.','ಮಿಯಾಸಿಸ್ II: ಪ್ರತಿ ಅರ್ಧದಲ್ಲಿ ಸಹೋದರ ಎಳೆಗಳನ್ನು ಮತ್ತೆ ಬೇರ್ಪಡಿಸಿ. ನಾಲ್ಕೂ ಕೋಶಗಳ ವರ್ಣತಂತುಗಳನ್ನು ಎಣಿಸಿ.'],
   cols:['ಹಂತ','ಕೋಶಗಳ ಸಂಖ್ಯೆ','ಪ್ರತಿ ಕೋಶದ ವರ್ಣತಂತುಗಳು'],
   why:'ಮೈಟಾಸಿಸ್‌ನಲ್ಲಿ ಸಹೋದರ ಕ್ರೊಮ್ಯಾಟಿಡ್‌ಗಳು ಬೇರ್ಪಡುವುದರಿಂದ ಪ್ರತಿ ಮರಿಕೋಶಕ್ಕೆ ಸಂಪೂರ್ಣ ಗುಂಪು (2n) ಸಿಗುತ್ತದೆ. ಮಿಯಾಸಿಸ್ I ನಲ್ಲಿ ಸಮಜಾತ ಜೊತೆಗಾರರು ಬೇರ್ಪಟ್ಟು ಸಂಖ್ಯೆ n ಗೆ ಅರ್ಧವಾಗುತ್ತದೆ; ಮಿಯಾಸಿಸ್ II ಸಹೋದರರನ್ನು ಬೇರ್ಪಡಿಸುತ್ತದೆ. ಅದಲುಬದಲಾದ ಮಣಿ ತುಂಡುಗಳು ಕ್ರಾಸಿಂಗ್ ಓವರ್ ಅನ್ನು ತೋರಿಸುತ್ತವೆ, ಇದು ತಂದೆ-ತಾಯಿಯರ ಜೀನ್‌ಗಳನ್ನು ಬೆರೆಸಿ ವ್ಯತ್ಯಾಸ ಸೃಷ್ಟಿಸುತ್ತದೆ.',
   qs:['ಮೈಟಾಸಿಸ್ ನಂತರ ಎಷ್ಟು ಕೋಶಗಳು ಮತ್ತು ವರ್ಣತಂತುಗಳು ಸಿಕ್ಕವು? ಮಿಯಾಸಿಸ್ ನಂತರ?','ಮಣಿ ಅದಲುಬದಲು ಏನನ್ನು ತೋರಿಸಿತು?','ಲಿಂಗಾಣುಗಳು ರೂಪುಗೊಳ್ಳುವ ಮೊದಲು ಮಿಯಾಸಿಸ್ ಏಕೆ ನಡೆಯಬೇಕು?']}],
 digital:{t:'ನಾನು ಯಾವ ಹಂತ?', intro:'ಒಂದು ಘಟನೆಯನ್ನು ಒತ್ತಿ, ನಂತರ ಅದು ನಡೆಯುವ ವಿಭಜನೆಯನ್ನು ಒತ್ತಿ.',
  bins:['ಇಂಟರ್‌ಫೇಸ್','ಮೈಟಾಸಿಸ್','ಮಿಯಾಸಿಸ್ I','ಮಿಯಾಸಿಸ್ II'],
  items:['DNA ನಕಲು (2C → 4C)','ಸೆಂಟ್ರಿಯೋಲ್ ದ್ವಿಗುಣ','ಮೈಟಾಸಿಸ್‌ಗೆ ಪ್ರೋಟೀನ್ ತಯಾರಿ (G₂)','2n ಕೋಶದ ವರ್ಣತಂತುಗಳು ಮೆಟಾಫೇಸ್ ಫಲಕದ ಮೇಲೆ','2n ಕೋಶದ ಸಹೋದರ ಕ್ರೊಮ್ಯಾಟಿಡ್‌ಗಳು ವಿರುದ್ಧ ಧ್ರುವಗಳಿಗೆ','ಎರಡು ದ್ವಿಗುಣಿತ ಮರಿ ಕೋಶಕೇಂದ್ರಗಳು','ಸಮಜಾತ ವರ್ಣತಂತುಗಳ ಸಿನಾಪ್ಸಿಸ್','ಪ್ಯಾಕಿಟೀನ್‌ನಲ್ಲಿ ಕ್ರಾಸಿಂಗ್ ಓವರ್','ಸಮಜಾತ ವರ್ಣತಂತುಗಳು ಬೇರ್ಪಡುತ್ತವೆ','ಕೋಶಗಳ ಡಯಾಡ್ ರೂಪುಗೊಳ್ಳುತ್ತದೆ','ಏಕಗುಣಿತ ಕೋಶದಲ್ಲಿ ಸೆಂಟ್ರೊಮಿಯರ್ ಸೀಳು','ನಾಲ್ಕು ಏಕಗುಣಿತ ಕೋಶಗಳ ಟೆಟ್ರಾಡ್'],
  learn:'ಇಂಟರ್‌ಫೇಸ್ ಕೋಶವನ್ನು ಸಿದ್ಧಗೊಳಿಸುತ್ತದೆ; ಮೈಟಾಸಿಸ್ ಸಹೋದರ ಕ್ರೊಮ್ಯಾಟಿಡ್‌ಗಳನ್ನು ಬೇರ್ಪಡಿಸಿ 2n ಉಳಿಸುತ್ತದೆ; ಮಿಯಾಸಿಸ್ I ಸಮಜಾತಗಳನ್ನು ಬೇರ್ಪಡಿಸುತ್ತದೆ (2n → n), ಮಿಯಾಸಿಸ್ II ಸಹೋದರ ಕ್ರೊಮ್ಯಾಟಿಡ್‌ಗಳನ್ನು ಬೇರ್ಪಡಿಸುತ್ತದೆ (n → n).',
  qs:['ಯಾವ ಘಟನೆಗಳು ಮಿಯಾಸಿಸ್ I ನಲ್ಲಿ ಮಾತ್ರ ನಡೆಯುತ್ತವೆ?','ಮಿಯಾಸಿಸ್ II ಅನ್ನು ಸಮ ವಿಭಜನೆ ಎಂದು ಏಕೆ ಕರೆಯುತ್ತಾರೆ?']}};
""")
append('activities/acts-pu1-hi.js', r"""
ACTS_I18N.hi['pu1-ch10'] = { title:'कोशिकाओं को बँटते देखो', ch:'I PUC · अध्याय 10 · कोशिका चक्र और कोशिका विभाजन',
 hands:[
  {t:'प्याज़ की जड़ के सिरे का स्क्वैश: समसूत्री विभाजन देखो', time:'1 घंटा',
   concept:'जड़ के सिरे सक्रिय रूप से बँटते हैं, इसलिए रंगे हुए स्क्वैश में समसूत्री विभाजन की हर अवस्था दिखती है।',
   need:['3–4 दिन तक आधार पानी में रखा प्याज़ (2–3 cm लंबी जड़ें)','ऐसीटोकार्मिन रंजक','1N हाइड्रोक्लोरिक अम्ल, स्पिरिट लैंप, वॉच ग्लास','स्लाइड, कवरस्लिप, सोख्ता कागज़, चिमटी और ब्लेड','संयुक्त सूक्ष्मदर्शी'],
   safety:'हाइड्रोक्लोरिक अम्ल संक्षारक है: शिक्षक के साथ उपयोग करो और हाथ धोओ। धीरे गरम करो, अम्ल को सूखने तक मत उबालो।',
   steps:['सुबह, जब अधिकांश कोशिकाएँ बँटती हैं, 1 cm लंबे जड़ के सिरे काटो।','2–3 बूँद 1N HCl वाले ऐसीटोकार्मिन में लगभग 5 मिनट धीरे-धीरे गरम करो।','एक सिरे को रंजक की बूँद में स्लाइड पर रखो और सफ़ेद हिस्सा काट दो; केवल गहरा सिरा रखो।','कवरस्लिप रखो, ऊपर सोख्ता कागज़ रखकर अँगूठे से धीरे से दबाओ।','पहले कम फिर अधिक आवर्धन में देखो और हर अवस्था की कोशिकाएँ ढूँढो।'],
   cols:['अवस्था','दिखी कोशिकाओं की संख्या','तुमने क्या देखा'],
   why:'जड़ के सिरे के विभज्योतक की कोशिकाएँ बार-बार समसूत्री विभाजन से बँटती हैं। अम्ल ऊतक को नरम करके कोशिकाएँ फैला देता है, और ऐसीटोकार्मिन गुणसूत्रों को लाल रंग देता है। अंतरावस्था चक्र का 95% से अधिक समय लेती है, इसलिए अधिकांश कोशिकाएँ उसी में दिखती हैं; मध्यावस्था गुणसूत्रों को सबसे स्पष्ट दिखाती है।',
   qs:['कौन-सी अवस्था सबसे अधिक दिखी? क्यों?','किस अवस्था में गुणसूत्र गिनना सबसे आसान था?','इस प्रयोग के लिए जड़ के सिरे ही क्यों चुने जाते हैं?']},
  {t:'मोती गुणसूत्र: समसूत्री और अर्धसूत्री का मॉडल', time:'45 मिनट',
   concept:'मॉडल गुणसूत्रों को हर अवस्था से गुज़ारने पर समझ आता है कि समसूत्री विभाजन संख्या क्यों बनाए रखता है और अर्धसूत्री उसे आधा क्यों करता है।',
   need:['दो रंगों के पॉप-मोती या मिट्टी (लाल माँ से, नीला पिता से)','गुणसूत्रबिंदु के लिए पेपर क्लिप','बड़ा वृत्त बना चार्ट पेपर (कोशिका)','तर्कु तंतुओं के लिए धागा'],
   safety:'छोटे मोती छोटे बच्चों से दूर रखो।',
   steps:['हर रंग में एक लंबा और एक छोटा गुणसूत्र बनाओ, ताकि कोशिका में 2n = 4 हों।','S प्रावस्था: हर गुणसूत्र की समान प्रतिलिपि बनाओ और दोनों लड़ियों को क्लिप से जोड़ो।','समसूत्री: चारों को बीच में पंक्ति में रखो, फिर सहोदर लड़ियों को विपरीत ओर खींचो। हर ओर गुणसूत्र गिनो।','अर्धसूत्री I: हर लाल गुणसूत्र को उसके नीले साथी के साथ जोड़ो, एक छोटा टुकड़ा बदलो (जीन विनिमय), फिर साथियों को अलग करो।','अर्धसूत्री II: हर आधे में सहोदर लड़ियों को फिर अलग करो। चारों कोशिकाओं के गुणसूत्र गिनो।'],
   cols:['चरण','कोशिकाओं की संख्या','हर कोशिका में गुणसूत्र'],
   why:'समसूत्री विभाजन में सहोदर अर्धगुणसूत्र अलग होते हैं, इसलिए हर संतति कोशिका को पूरा समूह (2n) मिलता है। अर्धसूत्री I में समजात साथी अलग होते हैं और संख्या आधी (n) हो जाती है; अर्धसूत्री II सहोदरों को अलग करता है। बदले हुए मोती के टुकड़े जीन विनिमय दिखाते हैं, जो माता-पिता के जीन मिलाकर विविधता लाता है।',
   qs:['समसूत्री के बाद कितनी कोशिकाएँ और गुणसूत्र मिले? अर्धसूत्री के बाद?','मोतियों की अदला-बदली ने क्या दिखाया?','युग्मक बनने से पहले अर्धसूत्री विभाजन क्यों ज़रूरी है?']}],
 digital:{t:'मैं कौन-सी अवस्था हूँ?', intro:'एक घटना पर टैप करो, फिर उस विभाजन पर टैप करो जिसमें वह होती है।',
  bins:['अंतरावस्था','समसूत्री','अर्धसूत्री I','अर्धसूत्री II'],
  items:['DNA प्रतिकृति (2C → 4C)','सेंट्रिओल द्विगुणन','समसूत्री के लिए प्रोटीन बनना (G₂)','2n कोशिका के गुणसूत्र मध्यावस्था पट्टिका पर','2n कोशिका के सहोदर अर्धगुणसूत्र विपरीत ध्रुवों पर','दो द्विगुणित संतति केंद्रक बनना','समजात गुणसूत्रों का सूत्रयुग्मन','पैकिटीन में जीन विनिमय','समजात गुणसूत्रों का अलग होना','कोशिकाओं का द्विक बनना','अगुणित कोशिका में गुणसूत्रबिंदु का विभाजन','चार अगुणित कोशिकाओं का चतुष्क बनना'],
  learn:'अंतरावस्था कोशिका को तैयार करती है; समसूत्री विभाजन सहोदर अर्धगुणसूत्र अलग करके 2n बनाए रखता है; अर्धसूत्री I समजात अलग करता है (2n → n) और अर्धसूत्री II सहोदर अर्धगुणसूत्र अलग करता है (n → n)।',
  qs:['कौन-सी घटनाएँ केवल अर्धसूत्री I में होती हैं?','अर्धसूत्री II को समीकरण विभाजन क्यों कहते हैं?']}};
""")

# ---------------- Game Zone ----------------
insert_before('games/riddles.js', " {id:'pu2-ch1'", r""" {id:'pu1-ch10', pu:1, ch:10, t:'Cell Cycle and Cell Division', page:'pu1-ch10.html', r:[
  ['Centromere',['I am a constriction on a chromosome.','I hold two sister chromatids together.','I split in anaphase.'],['Centriole','Telomere','Nucleolus']],
  ['Kinetochore',['I am a small disc.','I sit on the surface of the centromere.','Spindle fibres attach to me.'],['Aster','Centriole','Chiasma']],
  ['Metaphase',['Condensation is complete in me.','The nuclear envelope has fully gone.','I am the best stage to count chromosomes.'],['Prophase','Anaphase','Telophase']],
  ['Anaphase',['I am a stage of mitosis.','Centromeres split at my start.','Sister chromatids move to opposite poles in me.'],['Metaphase','Telophase','Prophase']],
  ['Syncytium',['I am a multinucleate condition.','I form when cytokinesis does not follow karyokinesis.','Coconut water is my example.'],['Tetrad','Dyad','Cell plate']],
  ['Recombinase',['I am an enzyme.','I work in pachytene.','I bring about crossing over.'],['Helicase','Ligase','Amylase']],
  ['Chiasmata',['I am X-shaped.','I appear in diplotene.','I mark the points of crossing over.'],['Kinetochores','Asters','Centromeres']],
  ['G0 phase',['I am entered by cells leaving G1.','Cells in me are active but do not divide.','Adult heart cells stay in me.'],['S phase','G2 phase','M phase']],
 ]},
""")
insert_before('games/riddles-more.js', " 'pu2-ch1':[", r""" 'pu1-ch10':[
  ['Interphase',['I take more than 95% of the cell cycle.','My old name is the resting phase.','G1, S and G2 are my parts.'],['M phase','Prophase','Cytokinesis']],
  ['S phase',['DNA content goes from 2C to 4C in me.','The chromosome number stays 2n in me.','DNA replication happens in me.'],['G1 phase','G2 phase','G0 phase']],
  ['Cytokinesis',['I follow karyokinesis.','In animals I use a furrow.','I divide the cytoplasm.'],['Karyokinesis','Interkinesis','Synapsis']],
  ['Cell plate',['I form in plant cells.','I grow from the centre outwards.','I become the middle lamella.'],['Cleavage furrow','Metaphase plate','Nuclear envelope']],
  ['Synaptonemal complex',['I form in zygotene.','I dissolve at the start of diplotene.','I hold paired homologous chromosomes together.'],['Kinetochore','Spindle','Chiasma']],
  ['Diakinesis',['I am the last stage of prophase I.','Chiasmata terminalise in me.','The nucleolus and nuclear envelope vanish by my end.'],['Diplotene','Pachytene','Leptotene']],
  ['Interkinesis',['I come between meiosis I and meiosis II.','I am usually short.','No DNA replication happens in me.'],['Interphase','Diakinesis','Telophase']],
  ['Tetrad of cells',['I form at the end of meiosis II.','I have four cells.','All my cells are haploid.'],['Dyad','Syncytium','Bivalent']],
 ],
""")
insert_before('games/words.js', " 'pu2-ch1':[", r""" 'pu1-ch10':[['MITOSIS','Equational division'],['MEIOSIS','Reductional division that forms gametes'],['CENTROMERE','Holds two sister chromatids together'],['KINETOCHORE','Disc on the centromere for spindle fibres'],['SYNAPSIS','Pairing of homologous chromosomes'],['CHIASMATA','X-shaped crossover points'],['SYNCYTIUM','Multinucleate cell, e.g. coconut endosperm'],['RECOMBINASE','Enzyme of crossing over'],['TELOPHASE','Last stage of karyokinesis'],['ANAPHASE','Stage when chromatids move to the poles']],
""")
insert_before('games/words-more.js', " 'pu2-ch1':[", r""" 'pu1-ch10':[['PROPHASE','First stage of mitosis'],['METAPHASE','Best stage to count chromosomes'],['INTERPHASE','Preparation phase of the cell cycle'],['CYTOKINESIS','Division of the cytoplasm'],['DIPLOTENE','Prophase I stage with chiasmata'],['PACHYTENE','Prophase I stage of crossing over'],['ZYGOTENE','Prophase I stage of synapsis'],['LEPTOTENE','First stage of prophase I'],['DYAD','Two cells after meiosis I'],['ASTER','Star of microtubules around a centriole']],
""")
insert_before('games/sequences.js', " {id:'embryo-sac'", r""" {id:'cell-cycle', ch:'pu1-ch10', t:'Phases of the cell cycle', s:['G₁ — the cell grows','S — DNA is replicated','G₂ — proteins for mitosis are made','M — the cell divides']},
 {id:'mitosis-stages', ch:'pu1-ch10', t:'Stages of mitosis', s:['Prophase — chromosomes condense','Metaphase — chromosomes line up at the centre','Anaphase — chromatids move to the poles','Telophase — nuclei form again','Cytokinesis — the cytoplasm divides']},
 {id:'prophase-one', ch:'pu1-ch10', t:'Sub-stages of prophase I', s:['Leptotene — chromosomes become visible','Zygotene — homologues pair (synapsis)','Pachytene — crossing over','Diplotene — chiasmata appear','Diakinesis — chiasmata terminalise']},
 {id:'meiosis-run', ch:'pu1-ch10', t:'The whole of meiosis', s:['Prophase I','Metaphase I — bivalents line up','Anaphase I — homologues separate','Telophase I — a dyad forms','Interkinesis','Meiosis II — a tetrad of haploid cells']},
""")
insert_before('zone/content.js', " {t:'Robert Brown discovered", r""" {t:'A human cell in culture divides about once every 24 hours, but yeast can finish a cell cycle in about 90 minutes.', c:'pu1-ch10'},
 {t:'More than 95% of the cell cycle is spent in interphase; the actual division lasts only about an hour.', c:'pu1-ch10'},
 {t:'Coconut water is a syncytium: the nucleus divided many times but the cytoplasm did not.', c:'pu1-ch10'},
 {t:'In the oocytes of some vertebrates, diplotene of meiosis can last for months or even years.', c:'pu1-ch10'},
 {t:'Crossing over in pachytene is why brothers and sisters never look exactly alike.', c:'pu1-ch10'},
 {t:'Walther Flemming coined the word "mitosis" in 1879, after Strasburger saw it in plant cells in 1870.', c:'pu1-ch10'},
""", marker="c:'pu1-ch10'")
s = open('zone/content.js', encoding='utf-8').read()
if "ch:'pu1-ch10'" not in s:
    i = s.index('ZONE.MEMES'); j = s.rindex('];', 0, i)
    add = r""",
 {a:'Metaphase', o:['Metaphase','Prophase','Anaphase','Telophase'], c:['I am a stage of mitosis','The nuclear envelope has completely gone','Spindle fibres hold every kinetochore','All chromosomes line up on my plate'], ch:'pu1-ch10', e:'📏'},
 {a:'Crossing over', o:['Crossing over','Synapsis','Terminalisation','Cytokinesis'], c:['I happen in prophase I','I happen in pachytene','The enzyme recombinase helps me','I swap pieces between non-sister chromatids'], ch:'pu1-ch10', e:'🔀'},
 {a:'Cell plate', o:['Cell plate','Cleavage furrow','Metaphase plate','Nuclear envelope'], c:['I form only in plant cells','I appear after telophase','I grow from the centre outwards','I become the middle lamella'], ch:'pu1-ch10', e:'🧱'},
 {a:'Interphase', o:['Interphase','M phase','Cytokinesis','Prophase'], c:['People call me the resting phase','But I am really very busy','I take more than 95% of the cycle','G1, S and G2 are my parts'], ch:'pu1-ch10', e:'⏳'}
"""
    k = s.rindex('}', 0, j) + 1
    s = s[:k] + add.rstrip('\n') + s[k:]
    open('zone/content.js', 'w', encoding='utf-8').write(s); print('clues added')
s = open('zone/fact-card.js', encoding='utf-8').read()
if 'pu1-ch10' not in s:
    s = s.replace("'pu1-ch9':'Biomolecules',", "'pu1-ch9':'Biomolecules','pu1-ch10':'Cell Cycle and Cell Division',")
    open('zone/fact-card.js', 'w', encoding='utf-8').write(s); print('fact-card')

# Zone question bank: 60 questions from the Ch10 KCET and MCQ banks (built page keeps the shuffled answer keys)
B = json.load(open('zone/bank-pu1.json', encoding='utf-8'))
if not any(c['id'] == 'pu1-ch10' for c in B['chapters']):
    page = open('pu1-ch10.html', encoding='utf-8').read()
    kc = json.loads(re.search(r'^const KCET_QUESTIONS = (.*);$', page, re.M).group(1))
    data = json.loads(re.search(r'^const DATA = (.*);$', page, re.M).group(1))
    qs = [{'c': 'pu1-ch10', 'q': x['q'].replace('\n', ' '), 'o': x['options'], 'a': x['answer'], 'e': x['exp'], 'd': x['difficulty']} for x in kc if x['format'] != 'matching']
    need = 60 - len(qs)
    for t in [x['id'] for x in data['topics']]:
        for x in [m for m in data['mcq'] if m['topic'] == t][20:20 + max(1, need // 8 + 1)]:
            if len(qs) < 60: qs.append({'c': 'pu1-ch10', 'q': x['q'], 'o': x['options'], 'a': x['answer'], 'e': x['exp'], 'd': x['difficulty']})
    B['chapters'].append({'id': 'pu1-ch10', 'pu': 1, 'ch': 10, 'title': 'Cell Cycle and Cell Division', 'page': 'pu1-ch10.html', 'n': len(qs)})
    B['q'].extend(qs)
    json.dump(B, open('zone/bank-pu1.json', 'w', encoding='utf-8'), ensure_ascii=False, separators=(',', ':'))
    print('zone bank +', len(qs))
