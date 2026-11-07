/* Engineering / PCM stream for careers.html. Extends window.CAREERS (careers/data.js).
   Groups, careers and exams here carry st:'pcm'; the PCB ones in data.js have no st (= 'pcb').
   Fees and pay are approximate. Checked Nov 2026: KCET 2025 engineering fees (govt ₹44,200;
   private govt quota ₹1.12–1.22 lakh), KCET rank = 50% PU PCM + 50% CET, JEE Main 75% rule. */
(function(){
  var D = window.CAREERS; if(!D) return;
  D.streams = [
    { id:'pcb', ic:'🩺', t:{en:'Medical & Life Sciences', kn:'ವೈದ್ಯಕೀಯ ಮತ್ತು ಜೀವ ವಿಜ್ಞಾನ', hi:'मेडिकल और जीव विज्ञान'}, s:{en:'PCB students', kn:'PCB ವಿದ್ಯಾರ್ಥಿಗಳು', hi:'PCB छात्र'} },
    { id:'pcm', ic:'⚙️', t:{en:'Engineering & Technology', kn:'ಎಂಜಿನಿಯರಿಂಗ್ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ', hi:'इंजीनियरिंग और टेक्नोलॉजी'}, s:{en:'PCM / PCMB students', kn:'PCM / PCMB ವಿದ್ಯಾರ್ಥಿಗಳು', hi:'PCM / PCMB छात्र'} }
  ];
  [].push.apply(D.groups, [
    { id:'eng', st:'pcm', ic:'⚙️', t:{en:'Engineering in Karnataka', kn:'ಕರ್ನಾಟಕದಲ್ಲಿ ಎಂಜಿನಿಯರಿಂಗ್', hi:'कर्नाटक में इंजीनियरिंग'},
      s:{en:'KCET & COMEDK: CSE, ECE, Mechanical, Civil and more', kn:'KCET ಮತ್ತು COMEDK: CSE, ECE, ಮೆಕ್ಯಾನಿಕಲ್, ಸಿವಿಲ್', hi:'KCET और COMEDK: CSE, ECE, मैकेनिकल, सिविल'} },
    { id:'top', st:'pcm', ic:'🏛️', t:{en:'Top national institutes', kn:'ರಾಷ್ಟ್ರೀಯ ಉನ್ನತ ಸಂಸ್ಥೆಗಳು', hi:'शीर्ष राष्ट्रीय संस्थान'},
      s:{en:'IIT, NIT, IIIT, BITS, IISc', kn:'IIT, NIT, IIIT, BITS, IISc', hi:'IIT, NIT, IIIT, BITS, IISc'} },
    { id:'des', st:'pcm', ic:'📐', t:{en:'Architecture & Design', kn:'ವಾಸ್ತುಶಿಲ್ಪ ಮತ್ತು ವಿನ್ಯಾಸ', hi:'आर्किटेक्चर और डिज़ाइन'},
      s:{en:'B.Arch, B.Des', kn:'B.Arch, B.Des', hi:'B.Arch, B.Des'} },
    { id:'oth', st:'pcm', ic:'🧭', t:{en:'More paths & backups', kn:'ಇನ್ನಷ್ಟು ದಾರಿಗಳು', hi:'और रास्ते व बैकअप'},
      s:{en:'BSc, BCA, defence, merchant navy, pilot, govt jobs', kn:'BSc, BCA, ರಕ್ಷಣಾ ಪಡೆ, ಮರ್ಚೆಂಟ್ ನೇವಿ, ಪೈಲಟ್', hi:'BSc, BCA, रक्षा, मर्चेंट नेवी, पायलट'} }
  ]);
  var KCET_EXAM = {en:'KCET (Physics, Chemistry, Maths) → KEA counselling. Rank = 50% PU PCM marks + 50% CET marks · Also COMEDK UGET for private colleges', kn:'KCET (ಭೌತ, ರಸಾಯನ, ಗಣಿತ) → KEA ಕೌನ್ಸೆಲಿಂಗ್. ರ್‍ಯಾಂಕ್ = 50% ಪಿಯುಸಿ PCM ಅಂಕ + 50% CET ಅಂಕ · ಖಾಸಗಿ ಕಾಲೇಜುಗಳಿಗೆ COMEDK UGET ಕೂಡ', hi:'KCET (भौतिकी, रसायन, गणित) → KEA काउंसलिंग। रैंक = 50% पीयूसी PCM अंक + 50% CET अंक · प्राइवेट कॉलेजों के लिए COMEDK UGET भी'};
  var KCET_ELIG = {en:'PU with Physics + Maths (+ Chemistry/Biology/Computer Science/Electronics); 45% in these (40% reserved)', kn:'ಭೌತ + ಗಣಿತ (+ ರಸಾಯನ/ಜೀವಶಾಸ್ತ್ರ/ಕಂಪ್ಯೂಟರ್/ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್) ಜೊತೆ ಪಿಯುಸಿ; 45% (ಮೀಸಲು 40%)', hi:'भौतिकी + गणित (+ रसायन/जीवविज्ञान/कंप्यूटर/इलेक्ट्रॉनिक्स) के साथ पीयूसी; 45% (आरक्षित 40%)'};
  var KCET_FEE = {en:'Govt college: about ₹44,000/yr · Private college, govt quota: about ₹1.1–1.2 lakh/yr · COMEDK / management: higher (KCET 2025)', kn:'ಸರ್ಕಾರಿ ಕಾಲೇಜು: ಸುಮಾರು ₹44,000/ವರ್ಷ · ಖಾಸಗಿ ಕಾಲೇಜಿನ ಸರ್ಕಾರಿ ಕೋಟಾ: ಸುಮಾರು ₹1.1–1.2 ಲಕ್ಷ/ವರ್ಷ · COMEDK / ಮ್ಯಾನೇಜ್‌ಮೆಂಟ್: ಹೆಚ್ಚು (KCET 2025)', hi:'सरकारी कॉलेज: लगभग ₹44,000/साल · प्राइवेट कॉलेज, सरकारी कोटा: लगभग ₹1.1–1.2 लाख/साल · COMEDK / मैनेजमेंट: ज़्यादा (KCET 2025)'};
  var BE = {en:'4 years (BE / B.Tech)', kn:'4 ವರ್ಷ (BE / B.Tech)', hi:'4 साल (BE / B.Tech)'};
  [].push.apply(D.list, [
    { id:'cse', g:'eng', ic:'💻', name:'Computer Science · AI & Data Science', t:['code','tech','quick'],
      sub:{en:'Software engineer, AI/ML, data science, cyber security', kn:'ಸಾಫ್ಟ್‌ವೇರ್ ಎಂಜಿನಿಯರ್, AI/ML, ಡೇಟಾ ಸೈನ್ಸ್, ಸೈಬರ್ ಭದ್ರತೆ', hi:'सॉफ़्टवेयर इंजीनियर, AI/ML, डेटा साइंस, साइबर सुरक्षा'},
      dur:BE,
      what:{en:'Programming, algorithms, databases, networks, AI and how to build apps and software.', kn:'ಪ್ರೋಗ್ರಾಮಿಂಗ್, ಅಲ್ಗಾರಿದಮ್, ಡೇಟಾಬೇಸ್, ನೆಟ್‌ವರ್ಕ್, AI ಮತ್ತು ಆ್ಯಪ್/ಸಾಫ್ಟ್‌ವೇರ್ ನಿರ್ಮಾಣ.', hi:'प्रोग्रामिंग, एल्गोरिदम, डेटाबेस, नेटवर्क, AI और ऐप/सॉफ़्टवेयर बनाना।'},
      exam:KCET_EXAM, elig:KCET_ELIG, fee:KCET_FEE,
      pay:{en:'Starting about ₹4–8 lakh/yr; top companies pay much more', kn:'ಆರಂಭ ಸುಮಾರು ₹4–8 ಲಕ್ಷ/ವರ್ಷ; ಉನ್ನತ ಕಂಪನಿಗಳಲ್ಲಿ ಹೆಚ್ಚು', hi:'शुरुआत लगभग ₹4–8 लाख/साल; बड़ी कंपनियों में कहीं ज़्यादा'},
      scope:{en:'Highest demand, especially in Bengaluru. Skills matter more than the college: build projects and learn to code early.', kn:'ಅತಿ ಹೆಚ್ಚು ಬೇಡಿಕೆ, ವಿಶೇಷವಾಗಿ ಬೆಂಗಳೂರಿನಲ್ಲಿ. ಕಾಲೇಜಿಗಿಂತ ಕೌಶಲ್ಯ ಮುಖ್ಯ: ಬೇಗ ಕೋಡಿಂಗ್ ಕಲಿಯಿರಿ.', hi:'सबसे ज़्यादा माँग, ख़ासकर बेंगलुरु में। कॉलेज से ज़्यादा स्किल ज़रूरी: जल्दी कोडिंग सीखें।'} },
    { id:'ece', g:'eng', ic:'📡', name:'Electronics · Electrical (ECE / EEE)', t:['elec','tech','code'],
      sub:{en:'Chips, communication, power, robotics, EVs', kn:'ಚಿಪ್, ಸಂವಹನ, ವಿದ್ಯುತ್, ರೋಬೋಟಿಕ್ಸ್, EV', hi:'चिप, कम्युनिकेशन, पावर, रोबोटिक्स, EV'},
      dur:BE,
      what:{en:'Circuits, semiconductors, signals, mobile networks, embedded systems, power grids and electric vehicles.', kn:'ಸರ್ಕ್ಯೂಟ್, ಸೆಮಿಕಂಡಕ್ಟರ್, ಸಿಗ್ನಲ್, ಮೊಬೈಲ್ ನೆಟ್‌ವರ್ಕ್, ಎಂಬೆಡೆಡ್ ಸಿಸ್ಟಮ್, ವಿದ್ಯುತ್ ಜಾಲ, EV.', hi:'सर्किट, सेमीकंडक्टर, सिग्नल, मोबाइल नेटवर्क, एम्बेडेड सिस्टम, बिजली ग्रिड, EV।'},
      exam:KCET_EXAM, elig:KCET_ELIG, fee:KCET_FEE,
      pay:{en:'Starting about ₹3.5–7 lakh/yr', kn:'ಆರಂಭ ಸುಮಾರು ₹3.5–7 ಲಕ್ಷ/ವರ್ಷ', hi:'शुरुआत लगभग ₹3.5–7 लाख/साल'},
      scope:{en:'Chip design and EVs are growing fast in India; also software jobs, govt PSUs (via GATE), and core companies.', kn:'ಚಿಪ್ ವಿನ್ಯಾಸ ಮತ್ತು EV ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತಿವೆ; ಸಾಫ್ಟ್‌ವೇರ್, ಸರ್ಕಾರಿ PSU (GATE ಮೂಲಕ).', hi:'चिप डिज़ाइन और EV तेज़ी से बढ़ रहे हैं; सॉफ़्टवेयर, सरकारी PSU (GATE से) भी।'} },
    { id:'mech', g:'eng', ic:'🏗️', name:'Mechanical · Civil · Automobile', t:['build','tech','disc'],
      sub:{en:'Machines, buildings, bridges, cars, aerospace', kn:'ಯಂತ್ರ, ಕಟ್ಟಡ, ಸೇತುವೆ, ಕಾರು, ವೈಮಾನಿಕ', hi:'मशीन, इमारत, पुल, कार, एयरोस्पेस'},
      dur:BE,
      what:{en:'Design and build machines, engines, roads, buildings and structures; lots of practical and site work.', kn:'ಯಂತ್ರ, ಎಂಜಿನ್, ರಸ್ತೆ, ಕಟ್ಟಡಗಳ ವಿನ್ಯಾಸ ಮತ್ತು ನಿರ್ಮಾಣ; ಹೆಚ್ಚು ಪ್ರಾಯೋಗಿಕ ಮತ್ತು ಸೈಟ್ ಕೆಲಸ.', hi:'मशीन, इंजन, सड़क, इमारतें डिज़ाइन करना और बनाना; काफ़ी प्रैक्टिकल और साइट का काम।'},
      exam:KCET_EXAM, elig:KCET_ELIG, fee:KCET_FEE,
      pay:{en:'Starting about ₹3–6 lakh/yr', kn:'ಆರಂಭ ಸುಮಾರು ₹3–6 ಲಕ್ಷ/ವರ್ಷ', hi:'शुरुआत लगभग ₹3–6 लाख/साल'},
      scope:{en:'Manufacturing, construction, infrastructure, govt engineer posts (PWD, KPSC AE/JE), PSUs via GATE, own business.', kn:'ಉತ್ಪಾದನೆ, ನಿರ್ಮಾಣ, ಮೂಲಸೌಕರ್ಯ, ಸರ್ಕಾರಿ ಎಂಜಿನಿಯರ್ (PWD, KPSC AE/JE), GATE ಮೂಲಕ PSU.', hi:'मैन्युफ़ैक्चरिंग, निर्माण, इन्फ़्रास्ट्रक्चर, सरकारी इंजीनियर (PWD, KPSC AE/JE), GATE से PSU।'} },
    { id:'iit', g:'top', ic:'🏛️', name:'IIT', t:['tech','long','code'],
      sub:{en:'Indian Institutes of Technology', kn:'ಭಾರತೀಯ ತಂತ್ರಜ್ಞಾನ ಸಂಸ್ಥೆಗಳು', hi:'भारतीय प्रौद्योगिकी संस्थान'},
      dur:{en:'4 years B.Tech (5 years dual degree)', kn:'4 ವರ್ಷ B.Tech (5 ವರ್ಷ ಡ್ಯುಯಲ್ ಡಿಗ್ರಿ)', hi:'4 साल B.Tech (5 साल ड्यूल डिग्री)'},
      what:{en:"India's top engineering colleges, with the best labs, professors and placements.", kn:'ಭಾರತದ ಅತ್ಯುತ್ತಮ ಎಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜುಗಳು, ಉತ್ತಮ ಪ್ರಯೋಗಾಲಯ ಮತ್ತು ಉದ್ಯೋಗಾವಕಾಶ.', hi:'भारत के सबसे अच्छे इंजीनियरिंग कॉलेज, बेहतरीन लैब और प्लेसमेंट।'},
      exam:{en:'JEE Main (Jan & Apr) → top candidates write JEE Advanced (May) → JoSAA counselling', kn:'JEE Main (ಜನವರಿ ಮತ್ತು ಏಪ್ರಿಲ್) → ಉನ್ನತ ಅಭ್ಯರ್ಥಿಗಳು JEE Advanced (ಮೇ) → JoSAA', hi:'JEE Main (जनवरी व अप्रैल) → शीर्ष उम्मीदवार JEE Advanced (मई) → JoSAA'},
      elig:{en:'PCM; 75% in PU (65% SC/ST) or top 20 percentile of your board', kn:'PCM; ಪಿಯುಸಿಯಲ್ಲಿ 75% (SC/ST 65%) ಅಥವಾ ಬೋರ್ಡ್‌ನ ಮೊದಲ 20 ಪರ್ಸೆಂಟೈಲ್', hi:'PCM; पीयूसी में 75% (SC/ST 65%) या बोर्ड के टॉप 20 पर्सेंटाइल'},
      fee:{en:'About ₹2–2.5 lakh/yr; big fee waivers for low family income', kn:'ಸುಮಾರು ₹2–2.5 ಲಕ್ಷ/ವರ್ಷ; ಕಡಿಮೆ ಆದಾಯದ ಕುಟುಂಬಗಳಿಗೆ ದೊಡ್ಡ ಶುಲ್ಕ ವಿನಾಯಿತಿ', hi:'लगभग ₹2–2.5 लाख/साल; कम आय वाले परिवारों को बड़ी फ़ीस माफ़ी'},
      pay:{en:'Starting often ₹10 lakh+/yr', kn:'ಆರಂಭ ಸಾಮಾನ್ಯವಾಗಿ ₹10 ಲಕ್ಷ+/ವರ್ಷ', hi:'शुरुआत अक्सर ₹10 लाख+/साल'},
      scope:{en:'Top companies, research, higher studies abroad, start-ups. Very competitive: needs 2 years of focused preparation.', kn:'ಉನ್ನತ ಕಂಪನಿಗಳು, ಸಂಶೋಧನೆ, ವಿದೇಶ ಅಧ್ಯಯನ, ಸ್ಟಾರ್ಟ್‌ಅಪ್. ತೀವ್ರ ಸ್ಪರ್ಧೆ: 2 ವರ್ಷ ಕೇಂದ್ರೀಕೃತ ತಯಾರಿ ಬೇಕು.', hi:'बड़ी कंपनियाँ, रिसर्च, विदेश में पढ़ाई, स्टार्ट-अप। बहुत कड़ी प्रतियोगिता: 2 साल की तैयारी चाहिए।'} },
    { id:'nit', g:'top', ic:'🎓', name:'NIT · IIIT', t:['tech','code','long'],
      sub:{en:'National Institutes of Technology, IIITs', kn:'ರಾಷ್ಟ್ರೀಯ ತಂತ್ರಜ್ಞಾನ ಸಂಸ್ಥೆಗಳು, IIIT', hi:'राष्ट्रीय प्रौद्योगिकी संस्थान, IIIT'},
      dur:BE,
      what:{en:'Excellent government engineering colleges across India, including NIT Surathkal in Karnataka.', kn:'ಭಾರತದೆಲ್ಲೆಡೆ ಉತ್ತಮ ಸರ್ಕಾರಿ ಎಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜುಗಳು, ಕರ್ನಾಟಕದ NIT ಸುರತ್ಕಲ್ ಸೇರಿ.', hi:'पूरे भारत में बेहतरीन सरकारी इंजीनियरिंग कॉलेज, कर्नाटक का NIT सुरथकल भी।'},
      exam:{en:'JEE Main → JoSAA counselling (home-state quota helps)', kn:'JEE Main → JoSAA ಕೌನ್ಸೆಲಿಂಗ್ (ಸ್ವಂತ ರಾಜ್ಯ ಕೋಟಾ ಸಹಾಯಕ)', hi:'JEE Main → JoSAA काउंसलिंग (होम-स्टेट कोटा मदद करता है)'},
      elig:{en:'PCM; 75% in PU (65% SC/ST) or top 20 percentile', kn:'PCM; ಪಿಯುಸಿಯಲ್ಲಿ 75% (SC/ST 65%) ಅಥವಾ ಮೊದಲ 20 ಪರ್ಸೆಂಟೈಲ್', hi:'PCM; पीयूसी में 75% (SC/ST 65%) या टॉप 20 पर्सेंटाइल'},
      fee:{en:'About ₹1.5–2 lakh/yr (approx.), with income-based waivers', kn:'ಸುಮಾರು ₹1.5–2 ಲಕ್ಷ/ವರ್ಷ (ಅಂದಾಜು), ಆದಾಯ ಆಧಾರಿತ ವಿನಾಯಿತಿ', hi:'लगभग ₹1.5–2 लाख/साल (अनुमान), आय के आधार पर छूट'},
      pay:{en:'Starting about ₹6–12 lakh/yr', kn:'ಆರಂಭ ಸುಮಾರು ₹6–12 ಲಕ್ಷ/ವರ್ಷ', hi:'शुरुआत लगभग ₹6–12 लाख/साल'},
      scope:{en:'Strong placements, GATE/PSU jobs, MS abroad.', kn:'ಉತ್ತಮ ಉದ್ಯೋಗಾವಕಾಶ, GATE/PSU, ವಿದೇಶದಲ್ಲಿ MS.', hi:'अच्छे प्लेसमेंट, GATE/PSU नौकरियाँ, विदेश में MS।'} },
    { id:'bits', g:'top', ic:'🏫', name:'BITS Pilani · IISc BS', t:['tech','lab','long'],
      sub:{en:'Top private institute and India\'s top science institute', kn:'ಉನ್ನತ ಖಾಸಗಿ ಸಂಸ್ಥೆ ಮತ್ತು ಭಾರತದ ಉನ್ನತ ವಿಜ್ಞಾನ ಸಂಸ್ಥೆ', hi:'शीर्ष निजी संस्थान और भारत का शीर्ष विज्ञान संस्थान'},
      dur:{en:'BITS: 4 years · IISc BS (Research): 4 years', kn:'BITS: 4 ವರ್ಷ · IISc BS: 4 ವರ್ಷ', hi:'BITS: 4 साल · IISc BS: 4 साल'},
      what:{en:'BITS (Pilani, Goa, Hyderabad) for engineering; IISc Bengaluru BS for research in science.', kn:'ಎಂಜಿನಿಯರಿಂಗ್‌ಗೆ BITS; ವಿಜ್ಞಾನ ಸಂಶೋಧನೆಗೆ IISc ಬೆಂಗಳೂರು BS.', hi:'इंजीनियरिंग के लिए BITS; विज्ञान रिसर्च के लिए IISc बेंगलुरु BS।'},
      exam:{en:'BITS: BITSAT (May–June) · IISc BS: through JEE, NEET or IISER IAT scores', kn:'BITS: BITSAT (ಮೇ–ಜೂನ್) · IISc BS: JEE, NEET ಅಥವಾ IAT ಅಂಕಗಳ ಮೂಲಕ', hi:'BITS: BITSAT (मई–जून) · IISc BS: JEE, NEET या IAT स्कोर से'},
      elig:{en:'BITS: 75% in PCM with 60% in each · IISc: 60% in PU Science', kn:'BITS: PCM ನಲ್ಲಿ 75%, ಪ್ರತಿ ವಿಷಯದಲ್ಲಿ 60% · IISc: ಪಿಯುಸಿ ವಿಜ್ಞಾನದಲ್ಲಿ 60%', hi:'BITS: PCM में 75%, हर विषय में 60% · IISc: पीयूसी साइंस में 60%'},
      fee:{en:'BITS: high (private) · IISc: low, with scholarships', kn:'BITS: ಹೆಚ್ಚು (ಖಾಸಗಿ) · IISc: ಕಡಿಮೆ, ವಿದ್ಯಾರ್ಥಿವೇತನ ಸಹಿತ', hi:'BITS: ज़्यादा (निजी) · IISc: कम, छात्रवृत्ति के साथ'},
      pay:{en:'Excellent placements; IISc leads to PhD/scientist careers', kn:'ಉತ್ತಮ ಉದ್ಯೋಗಾವಕಾಶ; IISc ಯಿಂದ PhD/ವಿಜ್ಞಾನಿ ವೃತ್ತಿ', hi:'शानदार प्लेसमेंट; IISc से PhD/वैज्ञानिक करियर'},
      scope:{en:'Strong alumni network, start-ups, research, higher studies abroad.', kn:'ಬಲವಾದ ಹಳೆಯ ವಿದ್ಯಾರ್ಥಿ ಜಾಲ, ಸ್ಟಾರ್ಟ್‌ಅಪ್, ಸಂಶೋಧನೆ, ವಿದೇಶ ಅಧ್ಯಯನ.', hi:'मज़बूत एलुमनाई नेटवर्क, स्टार्ट-अप, रिसर्च, विदेश में पढ़ाई।'} },
    { id:'arch', g:'des', ic:'🏛️', name:'B.Arch', t:['design','build','long'],
      sub:{en:'Architect', kn:'ವಾಸ್ತುಶಿಲ್ಪಿ', hi:'आर्किटेक्ट'},
      dur:{en:'5 years', kn:'5 ವರ್ಷ', hi:'5 साल'},
      what:{en:'Design homes, buildings and cities: drawing, art, structures and building science.', kn:'ಮನೆ, ಕಟ್ಟಡ, ನಗರಗಳ ವಿನ್ಯಾಸ: ಚಿತ್ರಕಲೆ, ಕಲೆ, ರಚನೆ, ಕಟ್ಟಡ ವಿಜ್ಞಾನ.', hi:'घर, इमारतें और शहर डिज़ाइन करना: ड्रॉइंग, कला, संरचना।'},
      exam:{en:'NATA (or JEE Main Paper 2) → KEA / JoSAA counselling', kn:'NATA (ಅಥವಾ JEE Main ಪೇಪರ್ 2) → KEA / JoSAA', hi:'NATA (या JEE Main पेपर 2) → KEA / JoSAA'},
      elig:{en:'PCM with Maths; check the NATA notice for marks', kn:'ಗಣಿತ ಸಹಿತ PCM; ಅಂಕಗಳಿಗೆ NATA ಸೂಚನೆ ನೋಡಿ', hi:'गणित सहित PCM; अंकों के लिए NATA सूचना देखें'},
      fee:{en:'Govt quota: moderate · Private: higher (approx.)', kn:'ಸರ್ಕಾರಿ ಕೋಟಾ: ಮಧ್ಯಮ · ಖಾಸಗಿ: ಹೆಚ್ಚು (ಅಂದಾಜು)', hi:'सरकारी कोटा: मध्यम · प्राइवेट: ज़्यादा (अनुमान)'},
      pay:{en:'Starting about ₹3–6 lakh/yr; own practice grows with experience', kn:'ಆರಂಭ ಸುಮಾರು ₹3–6 ಲಕ್ಷ/ವರ್ಷ; ಅನುಭವದೊಂದಿಗೆ ಸ್ವಂತ ಪ್ರಾಕ್ಟೀಸ್', hi:'शुरुआत लगभग ₹3–6 लाख/साल; अनुभव के साथ अपनी प्रैक्टिस'},
      scope:{en:'Architecture firms, town planning, interiors, own practice.', kn:'ಆರ್ಕಿಟೆಕ್ಚರ್ ಸಂಸ್ಥೆಗಳು, ನಗರ ಯೋಜನೆ, ಒಳಾಂಗಣ ವಿನ್ಯಾಸ, ಸ್ವಂತ ಪ್ರಾಕ್ಟೀಸ್.', hi:'आर्किटेक्चर फ़र्म, टाउन प्लानिंग, इंटीरियर, अपनी प्रैक्टिस।'} },
    { id:'bdes', g:'des', ic:'🎨', name:'B.Des', t:['design','code','mind'],
      sub:{en:'Product, UX, fashion, communication designer', kn:'ಉತ್ಪನ್ನ, UX, ಫ್ಯಾಷನ್, ಸಂವಹನ ವಿನ್ಯಾಸಕ', hi:'प्रोडक्ट, UX, फ़ैशन, कम्युनिकेशन डिज़ाइनर'},
      dur:{en:'4 years', kn:'4 ವರ್ಷ', hi:'4 साल'},
      what:{en:'Creative design for apps, products, brands and fashion, with sketching and digital tools.', kn:'ಆ್ಯಪ್, ಉತ್ಪನ್ನ, ಬ್ರ್ಯಾಂಡ್, ಫ್ಯಾಷನ್‌ಗಾಗಿ ಸೃಜನಶೀಲ ವಿನ್ಯಾಸ.', hi:'ऐप, प्रोडक्ट, ब्रांड और फ़ैशन के लिए रचनात्मक डिज़ाइन।'},
      exam:{en:'UCEED (IITs), NID DAT, NIFT', kn:'UCEED (IIT), NID DAT, NIFT', hi:'UCEED (IIT), NID DAT, NIFT'},
      elig:{en:'PU any stream (Science welcome)', kn:'ಯಾವುದೇ ಪಿಯುಸಿ ವಿಭಾಗ', hi:'कोई भी पीयूसी स्ट्रीम'},
      fee:{en:'Govt institutes: moderate · Private: higher', kn:'ಸರ್ಕಾರಿ: ಮಧ್ಯಮ · ಖಾಸಗಿ: ಹೆಚ್ಚು', hi:'सरकारी: मध्यम · प्राइवेट: ज़्यादा'},
      pay:{en:'Starting about ₹4–8 lakh/yr (UX design pays well)', kn:'ಆರಂಭ ಸುಮಾರು ₹4–8 ಲಕ್ಷ/ವರ್ಷ', hi:'शुरुआत लगभग ₹4–8 लाख/साल'},
      scope:{en:'Tech companies (UI/UX), product firms, fashion houses, freelancing.', kn:'ಟೆಕ್ ಕಂಪನಿಗಳು (UI/UX), ಉತ್ಪನ್ನ ಸಂಸ್ಥೆಗಳು, ಫ್ಯಾಷನ್, ಫ್ರೀಲ್ಯಾನ್ಸ್.', hi:'टेक कंपनियाँ (UI/UX), प्रोडक्ट फ़र्म, फ़ैशन, फ़्रीलांसिंग।'} },
    { id:'bscpcm', g:'oth', ic:'🔭', name:'BSc · BCA', t:['code','lab','quick'],
      sub:{en:'Physics, Maths, Computer Science, Data Science · BCA', kn:'ಭೌತ, ಗಣಿತ, ಕಂಪ್ಯೂಟರ್ ಸೈನ್ಸ್, ಡೇಟಾ ಸೈನ್ಸ್ · BCA', hi:'भौतिकी, गणित, कंप्यूटर साइंस, डेटा साइंस · BCA'},
      dur:{en:'3 years (4 years Honours under NEP)', kn:'3 ವರ್ಷ (NEP ಅಡಿ 4 ವರ್ಷ ಆನರ್ಸ್)', hi:'3 साल (NEP में 4 साल ऑनर्स)'},
      what:{en:'Deep study of science or computers; BCA is a quick route into IT jobs.', kn:'ವಿಜ್ಞಾನ ಅಥವಾ ಕಂಪ್ಯೂಟರ್‌ನ ಆಳ ಅಧ್ಯಯನ; BCA IT ಉದ್ಯೋಗಕ್ಕೆ ವೇಗದ ದಾರಿ.', hi:'विज्ञान या कंप्यूटर की गहरी पढ़ाई; BCA IT नौकरी का तेज़ रास्ता।'},
      exam:{en:'Karnataka colleges: PU marks · Central universities: CUET-UG', kn:'ಕರ್ನಾಟಕ ಕಾಲೇಜುಗಳು: ಪಿಯುಸಿ ಅಂಕ · ಕೇಂದ್ರೀಯ ವಿವಿ: CUET-UG', hi:'कर्नाटक कॉलेज: पीयूसी अंक · केंद्रीय विश्वविद्यालय: CUET-UG'},
      elig:{en:'PU Science (Maths for BSc Maths/CS)', kn:'ಪಿಯುಸಿ ವಿಜ್ಞಾನ (BSc ಗಣಿತ/CS ಗೆ ಗಣಿತ)', hi:'पीयूसी साइंस (BSc गणित/CS के लिए गणित)'},
      fee:{en:'Govt colleges: low · Private: moderate', kn:'ಸರ್ಕಾರಿ: ಕಡಿಮೆ · ಖಾಸಗಿ: ಮಧ್ಯಮ', hi:'सरकारी: कम · प्राइवेट: मध्यम'},
      pay:{en:'Starting about ₹2.5–5 lakh/yr; more after MSc/MCA', kn:'ಆರಂಭ ಸುಮಾರು ₹2.5–5 ಲಕ್ಷ/ವರ್ಷ; MSc/MCA ನಂತರ ಹೆಚ್ಚು', hi:'शुरुआत लगभग ₹2.5–5 लाख/साल; MSc/MCA के बाद ज़्यादा'},
      scope:{en:'IT jobs, MSc/MCA, research (ISRO, labs), teaching, competitive exams.', kn:'IT ಉದ್ಯೋಗ, MSc/MCA, ಸಂಶೋಧನೆ (ISRO), ಬೋಧನೆ, ಸ್ಪರ್ಧಾತ್ಮಕ ಪರೀಕ್ಷೆ.', hi:'IT नौकरी, MSc/MCA, रिसर्च (ISRO), पढ़ाना, प्रतियोगी परीक्षाएँ।'} },
    { id:'nda', g:'oth', ic:'🎖️', name:'NDA (Army · Navy · Air Force)', t:['disc','fly','tech'],
      sub:{en:'Officer in the armed forces', kn:'ಸಶಸ್ತ್ರ ಪಡೆಗಳಲ್ಲಿ ಅಧಿಕಾರಿ', hi:'सशस्त्र बलों में अधिकारी'},
      dur:{en:'3 years NDA + 1 year academy', kn:'3 ವರ್ಷ NDA + 1 ವರ್ಷ ಅಕಾಡೆಮಿ', hi:'3 साल NDA + 1 साल अकादमी'},
      what:{en:'Free training as an officer; Navy and Air Force (including pilots) need Physics and Maths.', kn:'ಅಧಿಕಾರಿಯಾಗಿ ಉಚಿತ ತರಬೇತಿ; ನೌಕಾ ಮತ್ತು ವಾಯುಪಡೆಗೆ (ಪೈಲಟ್ ಸೇರಿ) ಭೌತ ಮತ್ತು ಗಣಿತ ಬೇಕು.', hi:'अधिकारी के रूप में मुफ़्त ट्रेनिंग; नौसेना और वायुसेना (पायलट सहित) के लिए भौतिकी और गणित ज़रूरी।'},
      exam:{en:'UPSC NDA exam (April & September) → SSB interview → medical', kn:'UPSC NDA ಪರೀಕ್ಷೆ (ಏಪ್ರಿಲ್ ಮತ್ತು ಸೆಪ್ಟೆಂಬರ್) → SSB ಸಂದರ್ಶನ → ವೈದ್ಯಕೀಯ', hi:'UPSC NDA परीक्षा (अप्रैल व सितंबर) → SSB इंटरव्यू → मेडिकल'},
      elig:{en:'Age about 16½–19½, unmarried; Physics + Maths for Navy/Air Force', kn:'ವಯಸ್ಸು ಸುಮಾರು 16½–19½, ಅವಿವಾಹಿತ; ನೌಕಾ/ವಾಯುಪಡೆಗೆ ಭೌತ + ಗಣಿತ', hi:'आयु लगभग 16½–19½, अविवाहित; नौसेना/वायुसेना के लिए भौतिकी + गणित'},
      fee:{en:'Training is free (with stipend)', kn:'ತರಬೇತಿ ಉಚಿತ (ಸ್ಟೈಪೆಂಡ್ ಜೊತೆ)', hi:'ट्रेनिंग मुफ़्त (स्टाइपेंड के साथ)'},
      pay:{en:'Lieutenant: basic ₹56,100 + allowances (about ₹1 lakh/month)', kn:'ಲೆಫ್ಟಿನೆಂಟ್: ಮೂಲ ₹56,100 + ಭತ್ಯೆ (ಸುಮಾರು ₹1 ಲಕ್ಷ/ತಿಂಗಳು)', hi:'लेफ़्टिनेंट: बेसिक ₹56,100 + भत्ते (लगभग ₹1 लाख/माह)'},
      scope:{en:'Respect, adventure, security and a pension; engineering branches inside the forces too.', kn:'ಗೌರವ, ಸಾಹಸ, ಭದ್ರತೆ, ಪಿಂಚಣಿ; ಪಡೆಗಳೊಳಗೆ ಎಂಜಿನಿಯರಿಂಗ್ ವಿಭಾಗಗಳೂ ಇವೆ.', hi:'सम्मान, रोमांच, सुरक्षा, पेंशन; सेनाओं के अंदर इंजीनियरिंग शाखाएँ भी।'} },
    { id:'navy', g:'oth', ic:'🚢', name:'Merchant Navy', t:['disc','build','quick'],
      sub:{en:'Marine engineer or deck officer on cargo ships', kn:'ಸರಕು ಹಡಗುಗಳಲ್ಲಿ ಮರೈನ್ ಎಂಜಿನಿಯರ್ ಅಥವಾ ಡೆಕ್ ಅಧಿಕಾರಿ', hi:'मालवाहक जहाज़ों पर मरीन इंजीनियर या डेक अधिकारी'},
      dur:{en:'B.Tech Marine 4 yrs · BSc Nautical Science 3 yrs', kn:'B.Tech ಮರೈನ್ 4 ವರ್ಷ · BSc ನಾಟಿಕಲ್ 3 ವರ್ಷ', hi:'B.Tech मरीन 4 साल · BSc नॉटिकल 3 साल'},
      what:{en:'Run and navigate big ships that travel the world; months at sea, then months off.', kn:'ಜಗತ್ತಿನಾದ್ಯಂತ ಸಂಚರಿಸುವ ದೊಡ್ಡ ಹಡಗುಗಳ ನಿರ್ವಹಣೆ; ತಿಂಗಳುಗಳ ಕಾಲ ಸಮುದ್ರದಲ್ಲಿ.', hi:'दुनिया भर में चलने वाले बड़े जहाज़ चलाना; महीनों समुद्र में, फिर छुट्टी।'},
      exam:{en:'IMU-CET (Indian Maritime University)', kn:'IMU-CET (ಭಾರತೀಯ ಸಾಗರ ವಿಶ್ವವಿದ್ಯಾಲಯ)', hi:'IMU-CET (भारतीय समुद्री विश्वविद्यालय)'},
      elig:{en:'PCM with good marks; strict medical and eyesight standards', kn:'ಉತ್ತಮ ಅಂಕಗಳ PCM; ಕಟ್ಟುನಿಟ್ಟಾದ ವೈದ್ಯಕೀಯ ಮತ್ತು ದೃಷ್ಟಿ ಮಾನದಂಡ', hi:'अच्छे अंकों के साथ PCM; सख़्त मेडिकल और आँखों के मानक'},
      fee:{en:'Moderate to high (approx.)', kn:'ಮಧ್ಯಮದಿಂದ ಹೆಚ್ಚು (ಅಂದಾಜು)', hi:'मध्यम से ज़्यादा (अनुमान)'},
      pay:{en:'High pay at sea, rising fast with rank', kn:'ಸಮುದ್ರದಲ್ಲಿ ಹೆಚ್ಚು ಸಂಬಳ, ಹುದ್ದೆಯೊಂದಿಗೆ ವೇಗವಾಗಿ ಏರಿಕೆ', hi:'समुद्र में अच्छा वेतन, पद के साथ तेज़ी से बढ़ता है'},
      scope:{en:'Global shipping companies; later shore jobs in ports and ship management.', kn:'ಜಾಗತಿಕ ಹಡಗು ಕಂಪನಿಗಳು; ನಂತರ ಬಂದರು ಮತ್ತು ಹಡಗು ನಿರ್ವಹಣೆಯ ಉದ್ಯೋಗ.', hi:'वैश्विक शिपिंग कंपनियाँ; बाद में बंदरगाह और शिप मैनेजमेंट की नौकरी।'} },
    { id:'pilot', g:'oth', ic:'✈️', name:'Commercial Pilot', t:['fly','disc','tech'],
      sub:{en:'Fly passenger planes (CPL)', kn:'ಪ್ರಯಾಣಿಕ ವಿಮಾನ ಹಾರಾಟ (CPL)', hi:'यात्री विमान उड़ाना (CPL)'},
      dur:{en:'About 1½–2 years of flying training', kn:'ಸುಮಾರು 1½–2 ವರ್ಷ ಹಾರಾಟ ತರಬೇತಿ', hi:'लगभग 1½–2 साल की उड़ान ट्रेनिंग'},
      what:{en:'Ground classes plus 200 hours of flying to get a Commercial Pilot Licence from DGCA.', kn:'DGCA ಯಿಂದ ಕಮರ್ಷಿಯಲ್ ಪೈಲಟ್ ಲೈಸೆನ್ಸ್‌ಗೆ ತರಗತಿ ಮತ್ತು 200 ಗಂಟೆ ಹಾರಾಟ.', hi:'DGCA से कमर्शियल पायलट लाइसेंस के लिए क्लास और 200 घंटे की उड़ान।'},
      exam:{en:'Flying school entrance + DGCA Class 1 medical (IGRUA and others)', kn:'ಹಾರಾಟ ಶಾಲೆ ಪ್ರವೇಶ + DGCA ಕ್ಲಾಸ್ 1 ವೈದ್ಯಕೀಯ', hi:'फ़्लाइंग स्कूल प्रवेश + DGCA क्लास 1 मेडिकल'},
      elig:{en:'PU with Physics and Maths; age 17+ to start', kn:'ಭೌತ ಮತ್ತು ಗಣಿತ ಸಹಿತ ಪಿಯುಸಿ; 17+ ವಯಸ್ಸು', hi:'भौतिकी और गणित के साथ पीयूसी; 17+ आयु'},
      fee:{en:'High: often ₹40 lakh+ in total (loans available)', kn:'ಹೆಚ್ಚು: ಒಟ್ಟು ₹40 ಲಕ್ಷ+ (ಸಾಲ ಲಭ್ಯ)', hi:'ज़्यादा: कुल ₹40 लाख+ (लोन उपलब्ध)'},
      pay:{en:'High once hired by an airline', kn:'ಏರ್‌ಲೈನ್ ಸೇರಿದ ನಂತರ ಹೆಚ್ಚು ಸಂಬಳ', hi:'एयरलाइन में नौकरी के बाद अच्छा वेतन'},
      scope:{en:'Airlines are expanding fast in India; plan the cost carefully with your family.', kn:'ಭಾರತದಲ್ಲಿ ಏರ್‌ಲೈನ್‌ಗಳು ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತಿವೆ; ಖರ್ಚನ್ನು ಕುಟುಂಬದೊಂದಿಗೆ ಯೋಜಿಸಿ.', hi:'भारत में एयरलाइंस तेज़ी से बढ़ रही हैं; ख़र्च परिवार के साथ सोच-समझकर तय करें।'} }
  ]);
  /* Biotech engineering already exists in the PCB list; show it in the engineering stream too. */
  D.alsoIn = { btbio:['eng'], govt:['oth'], teach:['oth'] };

  D.quizPcm = [
    { t:'code', q:{en:'I enjoy computers, coding or apps.', kn:'ಕಂಪ್ಯೂಟರ್, ಕೋಡಿಂಗ್ ಅಥವಾ ಆ್ಯಪ್‌ಗಳು ಇಷ್ಟ.', hi:'मुझे कंप्यूटर, कोडिंग या ऐप पसंद हैं।'} },
    { t:'elec', q:{en:'Circuits, gadgets and electronics excite me.', kn:'ಸರ್ಕ್ಯೂಟ್, ಗ್ಯಾಜೆಟ್, ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ನನಗೆ ಆಸಕ್ತಿ.', hi:'सर्किट, गैजेट और इलेक्ट्रॉनिक्स मुझे रोमांचित करते हैं।'} },
    { t:'build', q:{en:'I like machines, vehicles or building things.', kn:'ಯಂತ್ರ, ವಾಹನ ಅಥವಾ ವಸ್ತು ನಿರ್ಮಾಣ ಇಷ್ಟ.', hi:'मुझे मशीनें, गाड़ियाँ या चीज़ें बनाना पसंद है।'} },
    { t:'design', q:{en:'I love drawing, design or creative work.', kn:'ಚಿತ್ರಕಲೆ, ವಿನ್ಯಾಸ ಅಥವಾ ಸೃಜನಶೀಲ ಕೆಲಸ ಇಷ್ಟ.', hi:'मुझे ड्रॉइंग, डिज़ाइन या रचनात्मक काम पसंद है।'} },
    { t:'tech', q:{en:'Maths and Physics are my strong subjects.', kn:'ಗಣಿತ ಮತ್ತು ಭೌತಶಾಸ್ತ್ರ ನನ್ನ ಬಲವಾದ ವಿಷಯಗಳು.', hi:'गणित और भौतिकी मेरे मज़बूत विषय हैं।'} },
    { t:'lab', q:{en:'I want to do research and discover new things.', kn:'ಸಂಶೋಧನೆ ಮಾಡಿ ಹೊಸದನ್ನು ಕಂಡುಹಿಡಿಯಲು ಬಯಸುತ್ತೇನೆ.', hi:'मैं रिसर्च करके नई चीज़ें खोजना चाहता/चाहती हूँ।'} },
    { t:'fly', q:{en:'Flying, ships or travelling the world sounds exciting.', kn:'ಹಾರಾಟ, ಹಡಗು ಅಥವಾ ಜಗತ್ತು ಸುತ್ತುವುದು ರೋಮಾಂಚಕ.', hi:'उड़ान, जहाज़ या दुनिया घूमना रोमांचक लगता है।'} },
    { t:'disc', q:{en:'I like discipline, fitness or a uniform job.', kn:'ಶಿಸ್ತು, ದೈಹಿಕ ಸದೃಢತೆ ಅಥವಾ ಸಮವಸ್ತ್ರದ ಕೆಲಸ ಇಷ್ಟ.', hi:'मुझे अनुशासन, फ़िटनेस या वर्दी वाली नौकरी पसंद है।'} },
    { t:'quick', q:{en:'I want to start earning within 3–4 years.', kn:'3–4 ವರ್ಷಗಳಲ್ಲಿ ಸಂಪಾದನೆ ಆರಂಭಿಸಬೇಕು.', hi:'मैं 3–4 साल में कमाना शुरू करना चाहता/चाहती हूँ।'} },
    { t:'long', q:{en:'I am ready for tough exams and years of study for a top college.', kn:'ಉನ್ನತ ಕಾಲೇಜಿಗಾಗಿ ಕಠಿಣ ಪರೀಕ್ಷೆ ಮತ್ತು ವರ್ಷಗಳ ಅಧ್ಯಯನಕ್ಕೆ ಸಿದ್ಧ.', hi:'टॉप कॉलेज के लिए कठिन परीक्षा और सालों की पढ़ाई को तैयार हूँ।'} }
  ];
  /* Teacher/govt cards use 'mind'/'disc'; give them engineering traits too so the quiz can match them. */
  D.list.forEach(function(c){ if(c.id === 'btbio' && c.t.indexOf('build') < 0) c.t.push('build'); });

  [].push.apply(D.exams, [
    { st:'pcm', n:'JEE Main', by:'NTA', m:{en:'Two sessions: January & April', kn:'ಎರಡು ಅವಧಿ: ಜನವರಿ ಮತ್ತು ಏಪ್ರಿಲ್', hi:'दो सत्र: जनवरी व अप्रैल'}, f:{en:'NIT, IIIT, B.Arch (Paper 2); gateway to JEE Advanced', kn:'NIT, IIIT, B.Arch (ಪೇಪರ್ 2); JEE Advanced ಗೆ ದಾರಿ', hi:'NIT, IIIT, B.Arch (पेपर 2); JEE Advanced का रास्ता'} },
    { st:'pcm', n:'JEE Advanced', by:'IITs', m:{en:'May (after JEE Main)', kn:'ಮೇ (JEE Main ನಂತರ)', hi:'मई (JEE Main के बाद)'}, f:{en:'IITs, IISc BS', kn:'IIT, IISc BS', hi:'IIT, IISc BS'} },
    { st:'pcm', n:'KCET', by:'KEA', m:{en:'Form: Jan–Feb · Exam: April', kn:'ಅರ್ಜಿ: ಜನವರಿ–ಫೆಬ್ರವರಿ · ಪರೀಕ್ಷೆ: ಏಪ್ರಿಲ್', hi:'फ़ॉर्म: जन–फ़र · परीक्षा: अप्रैल'}, f:{en:'Engineering in Karnataka (rank = 50% PU + 50% CET), B.Arch with NATA', kn:'ಕರ್ನಾಟಕ ಎಂಜಿನಿಯರಿಂಗ್ (ರ್‍ಯಾಂಕ್ = 50% ಪಿಯು + 50% CET)', hi:'कर्नाटक इंजीनियरिंग (रैंक = 50% पीयू + 50% CET)'} },
    { st:'pcm', n:'COMEDK UGET', by:'COMEDK', m:{en:'May', kn:'ಮೇ', hi:'मई'}, f:{en:'Private engineering colleges in Karnataka', kn:'ಕರ್ನಾಟಕದ ಖಾಸಗಿ ಎಂಜಿನಿಯರಿಂಗ್ ಕಾಲೇಜುಗಳು', hi:'कर्नाटक के निजी इंजीनियरिंग कॉलेज'} },
    { st:'pcm', n:'BITSAT · NATA · UCEED', by:'BITS · CoA · IIT', m:{en:'Jan–June (check each notice)', kn:'ಜನವರಿ–ಜೂನ್ (ಪ್ರತಿ ಸೂಚನೆ ನೋಡಿ)', hi:'जनवरी–जून (हर सूचना देखें)'}, f:{en:'BITS, Architecture, Design', kn:'BITS, ವಾಸ್ತುಶಿಲ್ಪ, ವಿನ್ಯಾಸ', hi:'BITS, आर्किटेक्चर, डिज़ाइन'} },
    { st:'pcm', n:'NDA · IMU-CET', by:'UPSC · IMU', m:{en:'NDA: April & Sept · IMU-CET: May–June', kn:'NDA: ಏಪ್ರಿಲ್ ಮತ್ತು ಸೆಪ್ಟೆಂಬರ್ · IMU-CET: ಮೇ–ಜೂನ್', hi:'NDA: अप्रैल व सितंबर · IMU-CET: मई–जून'}, f:{en:'Armed forces, Merchant Navy', kn:'ಸಶಸ್ತ್ರ ಪಡೆ, ಮರ್ಚೆಂಟ್ ನೇವಿ', hi:'सशस्त्र बल, मर्चेंट नेवी'} }
  ]);
})();
