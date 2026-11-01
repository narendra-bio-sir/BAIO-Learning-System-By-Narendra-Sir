/* Electronics (PCME) students in the Engineering stream of careers.html. Extends window.CAREERS.
   Fees and pay approximate (Nov 2026). KCET engineering rank uses PU Physics, Chemistry, Maths
   marks + CET; Electronics counts for eligibility and the PU result. */
(function(){
  var D = window.CAREERS; if(!D) return;
  D.groups.push({ id:'ele', st:'pcm', ic:'⚡', t:{en:'For Electronics students (PCME)', kn:'ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ (PCME)', hi:'इलेक्ट्रॉनिक्स छात्रों के लिए (PCME)'},
    s:{en:'Chip design, embedded & IoT, robotics, BSc Electronics', kn:'ಚಿಪ್ ವಿನ್ಯಾಸ, ಎಂಬೆಡೆಡ್ ಮತ್ತು IoT, ರೋಬೋಟಿಕ್ಸ್, BSc ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್', hi:'चिप डिज़ाइन, एम्बेडेड व IoT, रोबोटिक्स, BSc इलेक्ट्रॉनिक्स'} });
  var KCET = {en:'KCET (Physics, Chemistry, Maths) / COMEDK / JEE Main → BE in ECE, EEE or related branch', kn:'KCET (ಭೌತ, ರಸಾಯನ, ಗಣಿತ) / COMEDK / JEE Main → ECE, EEE ಅಥವಾ ಸಂಬಂಧಿತ ಶಾಖೆಯಲ್ಲಿ BE', hi:'KCET (भौतिकी, रसायन, गणित) / COMEDK / JEE Main → ECE, EEE या संबंधित ब्रांच में BE'};
  var ELIG = {en:'PU with Physics + Maths + Chemistry/Electronics (45%, 40% reserved)', kn:'ಭೌತ + ಗಣಿತ + ರಸಾಯನ/ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಸಹಿತ ಪಿಯು (45%, ಮೀಸಲು 40%)', hi:'भौतिकी + गणित + रसायन/इलेक्ट्रॉनिक्स के साथ पीयू (45%, आरक्षित 40%)'};
  var FEE = {en:'Same as engineering (KCET fee list): govt college about ₹44,000/yr', kn:'ಎಂಜಿನಿಯರಿಂಗ್‌ನಂತೆಯೇ (KCET ಶುಲ್ಕ): ಸರ್ಕಾರಿ ಕಾಲೇಜು ಸುಮಾರು ₹44,000/ವರ್ಷ', hi:'इंजीनियरिंग जैसा (KCET फ़ीस): सरकारी कॉलेज लगभग ₹44,000/साल'};
  [].push.apply(D.list, [
    { id:'vlsi', g:'ele', ic:'🔬', name:'VLSI · Chip design', t:['elec','tech','long'],
      sub:{en:'Design the chips inside phones, cars and computers', kn:'ಫೋನ್, ಕಾರು, ಕಂಪ್ಯೂಟರ್ ಒಳಗಿನ ಚಿಪ್ ವಿನ್ಯಾಸ', hi:'फ़ोन, कार और कंप्यूटर के अंदर की चिप डिज़ाइन करें'},
      dur:{en:'BE ECE (4 yrs) + M.Tech VLSI or a VLSI course', kn:'BE ECE (4 ವರ್ಷ) + M.Tech VLSI ಅಥವಾ VLSI ಕೋರ್ಸ್', hi:'BE ECE (4 साल) + M.Tech VLSI या VLSI कोर्स'},
      what:{en:'Design, test and verify integrated circuits using special software.', kn:'ವಿಶೇಷ ಸಾಫ್ಟ್‌ವೇರ್ ಬಳಸಿ ಇಂಟಿಗ್ರೇಟೆಡ್ ಸರ್ಕ್ಯೂಟ್ ವಿನ್ಯಾಸ, ಪರೀಕ್ಷೆ, ಪರಿಶೀಲನೆ.', hi:'विशेष सॉफ़्टवेयर से इंटीग्रेटेड सर्किट डिज़ाइन, टेस्ट और वेरिफ़ाई करना।'},
      exam:KCET, elig:ELIG, fee:FEE,
      pay:{en:'Starting about ₹5–10 lakh/yr (approx.)', kn:'ಆರಂಭ ಸುಮಾರು ₹5–10 ಲಕ್ಷ/ವರ್ಷ (ಅಂದಾಜು)', hi:'शुरुआत लगभग ₹5–10 लाख/साल (अनुमान)'},
      scope:{en:'India is building its own chip industry; Bengaluru is the country\'s chip-design hub.', kn:'ಭಾರತ ತನ್ನದೇ ಚಿಪ್ ಉದ್ಯಮ ಕಟ್ಟುತ್ತಿದೆ; ಬೆಂಗಳೂರು ದೇಶದ ಚಿಪ್ ವಿನ್ಯಾಸ ಕೇಂದ್ರ.', hi:'भारत अपना चिप उद्योग बना रहा है; बेंगलुरु देश का चिप-डिज़ाइन केंद्र है।'} },
    { id:'embed', g:'ele', ic:'📟', name:'Embedded systems · IoT', t:['elec','code','tech'],
      sub:{en:'Smart devices: microcontrollers + code', kn:'ಸ್ಮಾರ್ಟ್ ಸಾಧನಗಳು: ಮೈಕ್ರೋಕಂಟ್ರೋಲರ್ + ಕೋಡ್', hi:'स्मार्ट डिवाइस: माइक्रोकंट्रोलर + कोड'},
      dur:{en:'BE ECE / EEE (4 yrs) + embedded certificate', kn:'BE ECE / EEE (4 ವರ್ಷ) + ಎಂಬೆಡೆಡ್ ಪ್ರಮಾಣಪತ್ರ', hi:'BE ECE / EEE (4 साल) + एम्बेडेड सर्टिफ़िकेट'},
      what:{en:'Program the small computers inside washing machines, cars, medical devices and smart homes.', kn:'ವಾಷಿಂಗ್ ಮೆಷಿನ್, ಕಾರು, ವೈದ್ಯಕೀಯ ಸಾಧನ, ಸ್ಮಾರ್ಟ್ ಮನೆಗಳ ಒಳಗಿನ ಚಿಕ್ಕ ಕಂಪ್ಯೂಟರ್‌ಗಳ ಪ್ರೋಗ್ರಾಮಿಂಗ್.', hi:'वॉशिंग मशीन, कार, मेडिकल डिवाइस और स्मार्ट घरों के अंदर के छोटे कंप्यूटरों की प्रोग्रामिंग।'},
      exam:KCET, elig:ELIG, fee:FEE,
      pay:{en:'Starting about ₹3.5–6 lakh/yr (approx.)', kn:'ಆರಂಭ ಸುಮಾರು ₹3.5–6 ಲಕ್ಷ/ವರ್ಷ (ಅಂದಾಜು)', hi:'शुरुआत लगभग ₹3.5–6 लाख/साल (अनुमान)'},
      scope:{en:'Automobile, EV, consumer-electronics and defence companies hire a lot in Bengaluru and Pune.', kn:'ಆಟೋಮೊಬೈಲ್, EV, ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್, ರಕ್ಷಣಾ ಕಂಪನಿಗಳು ಬೆಂಗಳೂರು, ಪುಣೆಯಲ್ಲಿ ಹೆಚ್ಚು ನೇಮಕ ಮಾಡುತ್ತವೆ.', hi:'ऑटोमोबाइल, EV, इलेक्ट्रॉनिक्स और रक्षा कंपनियाँ बेंगलुरु और पुणे में खूब भर्ती करती हैं।'} },
    { id:'robot', g:'ele', ic:'🤖', name:'Robotics · Automation · Mechatronics', t:['elec','build','code'],
      sub:{en:'Electronics + machines + code', kn:'ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ + ಯಂತ್ರ + ಕೋಡ್', hi:'इलेक्ट्रॉनिक्स + मशीनें + कोड'},
      dur:{en:'4 years (BE Robotics & Automation / Mechatronics)', kn:'4 ವರ್ಷ (BE ರೋಬೋಟಿಕ್ಸ್ ಮತ್ತು ಆಟೊಮೇಷನ್ / ಮೆಕಟ್ರಾನಿಕ್ಸ್)', hi:'4 साल (BE रोबोटिक्स व ऑटोमेशन / मेकाट्रॉनिक्स)'},
      what:{en:'Build robots and automatic machines for factories, hospitals and farms.', kn:'ಕಾರ್ಖಾನೆ, ಆಸ್ಪತ್ರೆ, ಕೃಷಿಗಾಗಿ ರೋಬೋಟ್ ಮತ್ತು ಸ್ವಯಂಚಾಲಿತ ಯಂತ್ರಗಳ ನಿರ್ಮಾಣ.', hi:'फ़ैक्ट्रियों, अस्पतालों और खेतों के लिए रोबोट और स्वचालित मशीनें बनाना।'},
      exam:KCET, elig:ELIG, fee:FEE,
      pay:{en:'Starting about ₹3.5–6 lakh/yr (approx.)', kn:'ಆರಂಭ ಸುಮಾರು ₹3.5–6 ಲಕ್ಷ/ವರ್ಷ (ಅಂದಾಜು)', hi:'शुरुआत लगभग ₹3.5–6 लाख/साल (अनुमान)'},
      scope:{en:'Manufacturing, automobile and warehouse automation are growing fast.', kn:'ತಯಾರಿಕೆ, ಆಟೋಮೊಬೈಲ್, ಗೋದಾಮು ಆಟೊಮೇಷನ್ ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತಿವೆ.', hi:'मैन्युफ़ैक्चरिंग, ऑटोमोबाइल और वेयरहाउस ऑटोमेशन तेज़ी से बढ़ रहे हैं।'} },
    { id:'bscele', g:'ele', ic:'🔌', name:'BSc Electronics', t:['elec','lab','quick'],
      sub:{en:'Degree on PU marks, no entrance needed', kn:'ಪಿಯು ಅಂಕಗಳ ಮೇಲೆ ಪದವಿ, ಪ್ರವೇಶ ಪರೀಕ್ಷೆ ಬೇಡ', hi:'पीयू अंकों पर डिग्री, प्रवेश परीक्षा नहीं'},
      dur:{en:'3–4 years (+ MSc / MCA later)', kn:'3–4 ವರ್ಷ (+ ನಂತರ MSc / MCA)', hi:'3–4 साल (+ बाद में MSc / MCA)'},
      what:{en:'Study circuits, communication and instruments with Physics or Computer Science.', kn:'ಭೌತಶಾಸ್ತ್ರ ಅಥವಾ ಕಂಪ್ಯೂಟರ್ ಜೊತೆ ಸರ್ಕ್ಯೂಟ್, ಸಂವಹನ, ಉಪಕರಣಗಳ ಅಧ್ಯಯನ.', hi:'भौतिकी या कंप्यूटर साइंस के साथ सर्किट, संचार और उपकरणों की पढ़ाई।'},
      exam:{en:'University / college admission on PU marks', kn:'ಪಿಯು ಅಂಕಗಳ ಮೇಲೆ ವಿವಿ / ಕಾಲೇಜು ಪ್ರವೇಶ', hi:'पीयू अंकों पर विश्वविद्यालय / कॉलेज प्रवेश'},
      elig:{en:'PU Science with Electronics or Maths', kn:'ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಅಥವಾ ಗಣಿತ ಸಹಿತ ಪಿಯು ವಿಜ್ಞಾನ', hi:'इलेक्ट्रॉनिक्स या गणित के साथ पीयू विज्ञान'},
      fee:{en:'Govt colleges: low · Private: moderate', kn:'ಸರ್ಕಾರಿ: ಕಡಿಮೆ · ಖಾಸಗಿ: ಮಧ್ಯಮ', hi:'सरकारी: कम · प्राइवेट: मध्यम'},
      pay:{en:'Starting about ₹2–4 lakh/yr; more after MSc / MCA', kn:'ಆರಂಭ ಸುಮಾರು ₹2–4 ಲಕ್ಷ/ವರ್ಷ; MSc / MCA ನಂತರ ಹೆಚ್ಚು', hi:'शुरुआत लगभग ₹2–4 लाख/साल; MSc / MCA के बाद ज़्यादा'},
      scope:{en:'Electronics companies, labs, teaching, and govt jobs at BEL, ISRO, BSNL and railways.', kn:'ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಕಂಪನಿ, ಪ್ರಯೋಗಾಲಯ, ಬೋಧನೆ, BEL, ISRO, BSNL, ರೈಲ್ವೆಯಲ್ಲಿ ಸರ್ಕಾರಿ ಉದ್ಯೋಗ.', hi:'इलेक्ट्रॉनिक्स कंपनियाँ, लैब, शिक्षण, और BEL, ISRO, BSNL व रेलवे में सरकारी नौकरियाँ।'} }
  ]);
  /* Show related careers from other groups here too. */
  var also = { ece:['ele'], evtech:['ele'], drone:['ele'] };
  D.alsoIn = D.alsoIn || {};
  Object.keys(also).forEach(function(k){ D.alsoIn[k] = [].concat(D.alsoIn[k] || [], also[k]); });
})();
