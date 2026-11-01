/* "Beyond Medical & Engineering" stream for careers.html. Extends window.CAREERS.
   Groups/careers/exams carry st:'beyond'. Fees and pay are approximate.
   Checked Nov 2026: CLAT held every December (CLAT 2027 on 7 Dec 2026), 45% in 12th;
   IPMAT 60% in 12th; NCHM JEE (NTA) in April; CA Foundation after PU. */
(function(){
  var D = window.CAREERS; if(!D || !D.streams) return;
  D.streams[0].t = {en:'Medical', kn:'ವೈದ್ಯಕೀಯ', hi:'मेडिकल'}; D.streams[0].s = {en:'PCB · NEET & more', kn:'PCB · NEET ಮತ್ತು ಇತರೆ', hi:'PCB · NEET और अन्य'};
  D.streams[1].t = {en:'Engineering', kn:'ಎಂಜಿನಿಯರಿಂಗ್', hi:'इंजीनियरिंग'}; D.streams[1].s = {en:'PCM · JEE, KCET', kn:'PCM · JEE, KCET', hi:'PCM · JEE, KCET'};
  D.streams.push({ id:'beyond', ic:'🌟', t:{en:'Beyond', kn:'ಇನ್ನಷ್ಟು', hi:'और भी'}, s:{en:'Law, CA, media, design…', kn:'ಕಾನೂನು, CA, ಮಾಧ್ಯಮ…', hi:'क़ानून, CA, मीडिया…'} });
  [].push.apply(D.groups, [
    { id:'law', st:'beyond', ic:'⚖️', t:{en:'Law & public service', kn:'ಕಾನೂನು ಮತ್ತು ಸಾರ್ವಜನಿಕ ಸೇವೆ', hi:'क़ानून और लोक सेवा'}, s:{en:'Lawyer, IAS/KAS officer, govt jobs', kn:'ವಕೀಲ, IAS/KAS ಅಧಿಕಾರಿ, ಸರ್ಕಾರಿ ಉದ್ಯೋಗ', hi:'वकील, IAS/KAS अधिकारी, सरकारी नौकरी'} },
    { id:'biz', st:'beyond', ic:'💼', t:{en:'Commerce & management', kn:'ವಾಣಿಜ್ಯ ಮತ್ತು ನಿರ್ವಹಣೆ', hi:'कॉमर्स और मैनेजमेंट'}, s:{en:'CA, BBA / IIM IPM, economics', kn:'CA, BBA / IIM IPM, ಅರ್ಥಶಾಸ್ತ್ರ', hi:'CA, BBA / IIM IPM, अर्थशास्त्र'} },
    { id:'art', st:'beyond', ic:'🎬', t:{en:'Media, design & creative', kn:'ಮಾಧ್ಯಮ, ವಿನ್ಯಾಸ, ಸೃಜನಶೀಲ', hi:'मीडिया, डिज़ाइन और रचनात्मक'}, s:{en:'Journalism, animation, design, content', kn:'ಪತ್ರಿಕೋದ್ಯಮ, ಅನಿಮೇಷನ್, ವಿನ್ಯಾಸ', hi:'पत्रकारिता, एनिमेशन, डिज़ाइन'} },
    { id:'srv', st:'beyond', ic:'🤝', t:{en:'People, sports & hospitality', kn:'ಜನಸೇವೆ, ಕ್ರೀಡೆ, ಆತಿಥ್ಯ', hi:'लोग, खेल और हॉस्पिटैलिटी'}, s:{en:'Hotel, aviation, sports, psychology', kn:'ಹೋಟೆಲ್, ವಿಮಾನಯಾನ, ಕ್ರೀಡೆ, ಮನೋವಿಜ್ಞಾನ', hi:'होटल, एविएशन, खेल, मनोविज्ञान'} }
  ]);
  var ANY = {en:'PU any stream (Science is welcome)', kn:'ಯಾವುದೇ ಪಿಯುಸಿ ವಿಭಾಗ (ವಿಜ್ಞಾನ ಸ್ವಾಗತ)', hi:'कोई भी पीयूसी स्ट्रीम (साइंस भी)'};
  [].push.apply(D.list, [
    { id:'llb', g:'law', ic:'⚖️', name:'BA LLB (Law)', t:['law','write','long'],
      sub:{en:'Lawyer, judge, corporate lawyer', kn:'ವಕೀಲ, ನ್ಯಾಯಾಧೀಶ, ಕಾರ್ಪೊರೇಟ್ ವಕೀಲ', hi:'वकील, जज, कॉरपोरेट वकील'},
      dur:{en:'5 years (integrated)', kn:'5 ವರ್ಷ (ಸಂಯೋಜಿತ)', hi:'5 साल (इंटीग्रेटेड)'},
      what:{en:'Constitution, criminal and civil law, contracts, arguing cases, legal writing.', kn:'ಸಂವಿಧಾನ, ಕ್ರಿಮಿನಲ್ ಮತ್ತು ಸಿವಿಲ್ ಕಾನೂನು, ಒಪ್ಪಂದಗಳು, ವಾದ, ಕಾನೂನು ಬರವಣಿಗೆ.', hi:'संविधान, आपराधिक और दीवानी क़ानून, अनुबंध, बहस, क़ानूनी लेखन।'},
      exam:{en:'CLAT (every December) for National Law Universities like NLSIU Bengaluru · other colleges: own test or PU marks', kn:'CLAT (ಪ್ರತಿ ಡಿಸೆಂಬರ್) NLSIU ಬೆಂಗಳೂರು ಸೇರಿ ರಾಷ್ಟ್ರೀಯ ಕಾನೂನು ವಿವಿಗಳಿಗೆ · ಇತರ ಕಾಲೇಜು: ಸ್ವಂತ ಪರೀಕ್ಷೆ ಅಥವಾ ಪಿಯು ಅಂಕ', hi:'CLAT (हर दिसंबर) NLSIU बेंगलुरु जैसी राष्ट्रीय विधि विश्वविद्यालयों के लिए · अन्य कॉलेज: अपना टेस्ट या पीयू अंक'},
      elig:{en:'PU any stream; 45% (40% SC/ST) for CLAT', kn:'ಯಾವುದೇ ಪಿಯುಸಿ; CLAT ಗೆ 45% (SC/ST 40%)', hi:'कोई भी पीयूसी; CLAT के लिए 45% (SC/ST 40%)'},
      fee:{en:'Govt law colleges: low · NLUs: about ₹2–3 lakh/yr (approx.)', kn:'ಸರ್ಕಾರಿ ಕಾನೂನು ಕಾಲೇಜು: ಕಡಿಮೆ · NLU: ಸುಮಾರು ₹2–3 ಲಕ್ಷ/ವರ್ಷ (ಅಂದಾಜು)', hi:'सरकारी लॉ कॉलेज: कम · NLU: लगभग ₹2–3 लाख/साल (अनुमान)'},
      pay:{en:'Varies widely; top law firms pay very well', kn:'ಬಹಳ ವ್ಯತ್ಯಾಸ; ಉನ್ನತ ಕಾನೂನು ಸಂಸ್ಥೆಗಳಲ್ಲಿ ಹೆಚ್ಚು', hi:'काफ़ी अलग-अलग; बड़ी लॉ फ़र्म में बहुत अच्छा'},
      scope:{en:'Courts, companies, judiciary exams, legal advisor, policy work.', kn:'ನ್ಯಾಯಾಲಯ, ಕಂಪನಿಗಳು, ನ್ಯಾಯಾಂಗ ಪರೀಕ್ಷೆ, ಕಾನೂನು ಸಲಹೆಗಾರ.', hi:'अदालतें, कंपनियाँ, न्यायिक परीक्षाएँ, क़ानूनी सलाहकार।'} },
    { id:'civil', g:'law', ic:'🏛️', name:'IAS · IPS · KAS', t:['lead','long','people'],
      sub:{en:'Civil services officer', kn:'ನಾಗರಿಕ ಸೇವೆಗಳ ಅಧಿಕಾರಿ', hi:'सिविल सेवा अधिकारी'},
      dur:{en:'Any degree first, then 1–3 years of preparation', kn:'ಮೊದಲು ಯಾವುದೇ ಪದವಿ, ನಂತರ 1–3 ವರ್ಷ ತಯಾರಿ', hi:'पहले कोई भी डिग्री, फिर 1–3 साल तैयारी'},
      what:{en:'Run districts, police, departments and make policies that change lives.', kn:'ಜಿಲ್ಲೆ, ಪೊಲೀಸ್, ಇಲಾಖೆಗಳ ಆಡಳಿತ ಮತ್ತು ಜನರ ಜೀವನ ಬದಲಿಸುವ ನೀತಿಗಳು.', hi:'ज़िले, पुलिस, विभाग चलाना और जीवन बदलने वाली नीतियाँ बनाना।'},
      exam:{en:'UPSC Civil Services (IAS/IPS) · KPSC (KAS) — after your degree', kn:'UPSC ನಾಗರಿಕ ಸೇವೆ (IAS/IPS) · KPSC (KAS) — ಪದವಿಯ ನಂತರ', hi:'UPSC सिविल सेवा (IAS/IPS) · KPSC (KAS) — डिग्री के बाद'},
      elig:{en:'Any degree; age 21+', kn:'ಯಾವುದೇ ಪದವಿ; ವಯಸ್ಸು 21+', hi:'कोई भी डिग्री; आयु 21+'},
      fee:{en:'Only exam fees (coaching optional)', kn:'ಪರೀಕ್ಷಾ ಶುಲ್ಕ ಮಾತ್ರ (ಕೋಚಿಂಗ್ ಐಚ್ಛಿಕ)', hi:'केवल परीक्षा शुल्क (कोचिंग वैकल्पिक)'},
      pay:{en:'Govt pay scale, about ₹56,100 basic + allowances to start', kn:'ಸರ್ಕಾರಿ ವೇತನ, ಆರಂಭ ಮೂಲ ₹56,100 + ಭತ್ಯೆ', hi:'सरकारी वेतनमान, शुरुआत बेसिक ₹56,100 + भत्ते'},
      scope:{en:'Highest public respect and responsibility. Start reading newspapers daily now.', kn:'ಅತ್ಯುನ್ನತ ಗೌರವ ಮತ್ತು ಜವಾಬ್ದಾರಿ. ಈಗಲೇ ದಿನಪತ್ರಿಕೆ ಓದಲು ಆರಂಭಿಸಿ.', hi:'सबसे ज़्यादा सम्मान और ज़िम्मेदारी। अभी से रोज़ अख़बार पढ़ना शुरू करें।'} },
    { id:'ca', g:'biz', ic:'📊', name:'Chartered Accountant (CA)', t:['money','long','write'],
      sub:{en:'Accounts, tax and audit expert', kn:'ಲೆಕ್ಕಪತ್ರ, ತೆರಿಗೆ, ಲೆಕ್ಕಪರಿಶೋಧನೆ ತಜ್ಞ', hi:'अकाउंट्स, टैक्स और ऑडिट विशेषज्ञ'},
      dur:{en:'About 4½–5 years (Foundation → Inter → articleship → Final)', kn:'ಸುಮಾರು 4½–5 ವರ್ಷ (ಫೌಂಡೇಶನ್ → ಇಂಟರ್ → ಆರ್ಟಿಕಲ್‌ಶಿಪ್ → ಫೈನಲ್)', hi:'लगभग 4½–5 साल (फ़ाउंडेशन → इंटर → आर्टिकलशिप → फ़ाइनल)'},
      what:{en:'Accounting, taxation, auditing and business law; you can study it alongside a BCom.', kn:'ಲೆಕ್ಕಪತ್ರ, ತೆರಿಗೆ, ಲೆಕ್ಕಪರಿಶೋಧನೆ, ವ್ಯವಹಾರ ಕಾನೂನು; BCom ಜೊತೆ ಓದಬಹುದು.', hi:'अकाउंटिंग, टैक्स, ऑडिट और बिज़नेस लॉ; BCom के साथ पढ़ सकते हैं।'},
      exam:{en:'ICAI CA Foundation (after PU; held several times a year)', kn:'ICAI CA ಫೌಂಡೇಶನ್ (ಪಿಯು ನಂತರ; ವರ್ಷಕ್ಕೆ ಹಲವು ಬಾರಿ)', hi:'ICAI CA फ़ाउंडेशन (पीयू के बाद; साल में कई बार)'},
      elig:{en:'PU any stream — Science students can join too', kn:'ಯಾವುದೇ ಪಿಯುಸಿ — ವಿಜ್ಞಾನ ವಿದ್ಯಾರ್ಥಿಗಳೂ ಸೇರಬಹುದು', hi:'कोई भी पीयूसी — साइंस छात्र भी'},
      fee:{en:'Low: mainly ICAI registration and exam fees', kn:'ಕಡಿಮೆ: ಮುಖ್ಯವಾಗಿ ICAI ನೋಂದಣಿ ಮತ್ತು ಪರೀಕ್ಷಾ ಶುಲ್ಕ', hi:'कम: मुख्यतः ICAI पंजीकरण और परीक्षा शुल्क'},
      pay:{en:'Starting about ₹7–12 lakh/yr after qualifying', kn:'ಉತ್ತೀರ್ಣರಾದ ನಂತರ ಆರಂಭ ಸುಮಾರು ₹7–12 ಲಕ್ಷ/ವರ್ಷ', hi:'पास होने के बाद शुरुआत लगभग ₹7–12 लाख/साल'},
      scope:{en:'Every business needs a CA: firms, banks, companies, own practice.', kn:'ಪ್ರತಿ ವ್ಯವಹಾರಕ್ಕೆ CA ಬೇಕು: ಸಂಸ್ಥೆಗಳು, ಬ್ಯಾಂಕ್, ಕಂಪನಿಗಳು, ಸ್ವಂತ ಪ್ರಾಕ್ಟೀಸ್.', hi:'हर व्यवसाय को CA चाहिए: फ़र्म, बैंक, कंपनियाँ, अपनी प्रैक्टिस।'} },
    { id:'bba', g:'biz', ic:'📈', name:'BBA · IIM IPM', t:['money','lead','people'],
      sub:{en:'Business, management, marketing', kn:'ವ್ಯವಹಾರ, ನಿರ್ವಹಣೆ, ಮಾರ್ಕೆಟಿಂಗ್', hi:'बिज़नेस, मैनेजमेंट, मार्केटिंग'},
      dur:{en:'BBA 3–4 years · IPM (IIM) 5 years with MBA', kn:'BBA 3–4 ವರ್ಷ · IPM (IIM) 5 ವರ್ಷ MBA ಸಹಿತ', hi:'BBA 3–4 साल · IPM (IIM) 5 साल MBA सहित'},
      what:{en:'How companies run: marketing, finance, HR, start-ups and leadership.', kn:'ಕಂಪನಿಗಳು ಹೇಗೆ ನಡೆಯುತ್ತವೆ: ಮಾರ್ಕೆಟಿಂಗ್, ಹಣಕಾಸು, HR, ಸ್ಟಾರ್ಟ್‌ಅಪ್, ನಾಯಕತ್ವ.', hi:'कंपनियाँ कैसे चलती हैं: मार्केटिंग, फ़ाइनेंस, HR, स्टार्ट-अप, नेतृत्व।'},
      exam:{en:'IPMAT (IIM Indore/Rohtak, May) · BBA: PU marks or university tests', kn:'IPMAT (IIM ಇಂದೋರ್/ರೋಹ್ಟಕ್, ಮೇ) · BBA: ಪಿಯು ಅಂಕ ಅಥವಾ ವಿವಿ ಪರೀಕ್ಷೆ', hi:'IPMAT (IIM इंदौर/रोहतक, मई) · BBA: पीयू अंक या विश्वविद्यालय टेस्ट'},
      elig:{en:'PU any stream; IPMAT needs 60% in PU (55% reserved)', kn:'ಯಾವುದೇ ಪಿಯುಸಿ; IPMAT ಗೆ ಪಿಯುಸಿಯಲ್ಲಿ 60% (ಮೀಸಲು 55%)', hi:'कोई भी पीयूसी; IPMAT के लिए पीयूसी में 60% (आरक्षित 55%)'},
      fee:{en:'BBA: low to moderate · IIM IPM: high (scholarships available)', kn:'BBA: ಕಡಿಮೆ–ಮಧ್ಯಮ · IIM IPM: ಹೆಚ್ಚು (ವಿದ್ಯಾರ್ಥಿವೇತನ ಲಭ್ಯ)', hi:'BBA: कम–मध्यम · IIM IPM: ज़्यादा (छात्रवृत्ति उपलब्ध)'},
      pay:{en:'BBA: about ₹3–5 lakh/yr · IIM IPM: much higher', kn:'BBA: ಸುಮಾರು ₹3–5 ಲಕ್ಷ/ವರ್ಷ · IIM IPM: ಇನ್ನೂ ಹೆಚ್ಚು', hi:'BBA: लगभग ₹3–5 लाख/साल · IIM IPM: कहीं ज़्यादा'},
      scope:{en:'Corporate jobs, MBA later, family business, your own start-up.', kn:'ಕಾರ್ಪೊರೇಟ್ ಉದ್ಯೋಗ, ನಂತರ MBA, ಕುಟುಂಬ ವ್ಯವಹಾರ, ಸ್ವಂತ ಸ್ಟಾರ್ಟ್‌ಅಪ್.', hi:'कॉरपोरेट नौकरी, बाद में MBA, पारिवारिक व्यवसाय, अपना स्टार्ट-अप।'} },
    { id:'eco', g:'biz', ic:'💹', name:'BCom · Economics · Statistics', t:['money','quick','write'],
      sub:{en:'Banking, finance, data and research', kn:'ಬ್ಯಾಂಕಿಂಗ್, ಹಣಕಾಸು, ಡೇಟಾ, ಸಂಶೋಧನೆ', hi:'बैंकिंग, फ़ाइनेंस, डेटा, रिसर्च'},
      dur:{en:'3 years (4 years Honours under NEP)', kn:'3 ವರ್ಷ (NEP ಅಡಿ 4 ವರ್ಷ ಆನರ್ಸ್)', hi:'3 साल (NEP में 4 साल ऑनर्स)'},
      what:{en:'Money, markets and numbers; Science students with Maths do very well in economics and statistics.', kn:'ಹಣ, ಮಾರುಕಟ್ಟೆ, ಸಂಖ್ಯೆಗಳು; ಗಣಿತ ಹೊಂದಿದ ವಿಜ್ಞಾನ ವಿದ್ಯಾರ್ಥಿಗಳು ಅರ್ಥಶಾಸ್ತ್ರ, ಸಂಖ್ಯಾಶಾಸ್ತ್ರದಲ್ಲಿ ಉತ್ತಮ.', hi:'पैसा, बाज़ार और आँकड़े; गणित वाले साइंस छात्र अर्थशास्त्र और सांख्यिकी में अच्छा करते हैं।'},
      exam:{en:'PU marks · CUET-UG for central universities', kn:'ಪಿಯು ಅಂಕ · ಕೇಂದ್ರೀಯ ವಿವಿಗಳಿಗೆ CUET-UG', hi:'पीयू अंक · केंद्रीय विश्वविद्यालयों के लिए CUET-UG'},
      elig:ANY,
      fee:{en:'Govt colleges: low', kn:'ಸರ್ಕಾರಿ ಕಾಲೇಜು: ಕಡಿಮೆ', hi:'सरकारी कॉलेज: कम'},
      pay:{en:'Starting about ₹2.5–5 lakh/yr; more with MBA/MA/CFA', kn:'ಆರಂಭ ಸುಮಾರು ₹2.5–5 ಲಕ್ಷ/ವರ್ಷ; MBA/MA/CFA ನಂತರ ಹೆಚ್ಚು', hi:'शुरुआत लगभग ₹2.5–5 लाख/साल; MBA/MA/CFA के बाद ज़्यादा'},
      scope:{en:'Banks (IBPS/SBI exams), finance companies, data analyst, RBI, higher studies.', kn:'ಬ್ಯಾಂಕ್ (IBPS/SBI), ಹಣಕಾಸು ಕಂಪನಿ, ಡೇಟಾ ವಿಶ್ಲೇಷಕ, RBI, ಉನ್ನತ ವ್ಯಾಸಂಗ.', hi:'बैंक (IBPS/SBI), फ़ाइनेंस कंपनियाँ, डेटा एनालिस्ट, RBI, आगे की पढ़ाई।'} },
    { id:'jmc', g:'art', ic:'🎙️', name:'Journalism & Mass Communication', t:['write','create','people'],
      sub:{en:'Reporter, anchor, digital media, PR', kn:'ವರದಿಗಾರ, ನಿರೂಪಕ, ಡಿಜಿಟಲ್ ಮಾಧ್ಯಮ, PR', hi:'रिपोर्टर, एंकर, डिजिटल मीडिया, PR'},
      dur:{en:'3 years', kn:'3 ವರ್ಷ', hi:'3 साल'},
      what:{en:'Reporting, writing, video, radio, social media and science communication.', kn:'ವರದಿ, ಬರವಣಿಗೆ, ವಿಡಿಯೋ, ರೇಡಿಯೋ, ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ, ವಿಜ್ಞಾನ ಸಂವಹನ.', hi:'रिपोर्टिंग, लेखन, वीडियो, रेडियो, सोशल मीडिया और विज्ञान संचार।'},
      exam:{en:'PU marks / CUET-UG / university entrance', kn:'ಪಿಯು ಅಂಕ / CUET-UG / ವಿವಿ ಪ್ರವೇಶ', hi:'पीयू अंक / CUET-UG / विश्वविद्यालय प्रवेश'},
      elig:ANY, fee:{en:'Low to moderate', kn:'ಕಡಿಮೆಯಿಂದ ಮಧ್ಯಮ', hi:'कम से मध्यम'},
      pay:{en:'Starting about ₹2.5–5 lakh/yr; grows with skill and audience', kn:'ಆರಂಭ ಸುಮಾರು ₹2.5–5 ಲಕ್ಷ/ವರ್ಷ; ಕೌಶಲ್ಯದೊಂದಿಗೆ ಬೆಳೆಯುತ್ತದೆ', hi:'शुरुआत लगभग ₹2.5–5 लाख/साल; हुनर के साथ बढ़ता है'},
      scope:{en:'News channels, newspapers, digital media, PR agencies; a science background helps in science and health journalism.', kn:'ಸುದ್ದಿ ವಾಹಿನಿ, ಪತ್ರಿಕೆ, ಡಿಜಿಟಲ್ ಮಾಧ್ಯಮ, PR; ವಿಜ್ಞಾನ ಹಿನ್ನೆಲೆ ವಿಜ್ಞಾನ-ಆರೋಗ್ಯ ಪತ್ರಿಕೋದ್ಯಮಕ್ಕೆ ಸಹಾಯಕ.', hi:'न्यूज़ चैनल, अख़बार, डिजिटल मीडिया, PR; साइंस बैकग्राउंड विज्ञान-स्वास्थ्य पत्रकारिता में मदद करता है।'} },
    { id:'anim', g:'art', ic:'🎮', name:'Animation · VFX · Game design', t:['create','code','quick'],
      sub:{en:'Animator, VFX artist, game designer', kn:'ಅನಿಮೇಟರ್, VFX ಕಲಾವಿದ, ಗೇಮ್ ವಿನ್ಯಾಸಕ', hi:'एनिमेटर, VFX आर्टिस्ट, गेम डिज़ाइनर'},
      dur:{en:'3–4 years (BSc / B.Des / diploma)', kn:'3–4 ವರ್ಷ (BSc / B.Des / ಡಿಪ್ಲೊಮಾ)', hi:'3–4 साल (BSc / B.Des / डिप्लोमा)'},
      what:{en:'2D/3D animation, visual effects for films, game art and game development.', kn:'2D/3D ಅನಿಮೇಷನ್, ಚಲನಚಿತ್ರ VFX, ಗೇಮ್ ಕಲೆ ಮತ್ತು ಅಭಿವೃದ್ಧಿ.', hi:'2D/3D एनिमेशन, फ़िल्मों के VFX, गेम आर्ट और डेवलपमेंट।'},
      exam:{en:'Portfolio / college test (UCEED and NID for design)', kn:'ಪೋರ್ಟ್‌ಫೋಲಿಯೋ / ಕಾಲೇಜು ಪರೀಕ್ಷೆ (ವಿನ್ಯಾಸಕ್ಕೆ UCEED, NID)', hi:'पोर्टफ़ोलियो / कॉलेज टेस्ट (डिज़ाइन के लिए UCEED, NID)'},
      elig:ANY, fee:{en:'Moderate to high (approx.)', kn:'ಮಧ್ಯಮದಿಂದ ಹೆಚ್ಚು (ಅಂದಾಜು)', hi:'मध्यम से ज़्यादा (अनुमान)'},
      pay:{en:'Starting about ₹2.5–5 lakh/yr; strong portfolios earn more', kn:'ಆರಂಭ ಸುಮಾರು ₹2.5–5 ಲಕ್ಷ/ವರ್ಷ; ಉತ್ತಮ ಪೋರ್ಟ್‌ಫೋಲಿಯೋಗೆ ಹೆಚ್ಚು', hi:'शुरुआत लगभग ₹2.5–5 लाख/साल; अच्छे पोर्टफ़ोलियो पर ज़्यादा'},
      scope:{en:'Bengaluru and Hyderabad studios, films, games, ads, freelancing for global clients.', kn:'ಬೆಂಗಳೂರು-ಹೈದರಾಬಾದ್ ಸ್ಟುಡಿಯೋ, ಸಿನಿಮಾ, ಗೇಮ್, ಜಾಹೀರಾತು, ಜಾಗತಿಕ ಫ್ರೀಲ್ಯಾನ್ಸ್.', hi:'बेंगलुरु-हैदराबाद स्टूडियो, फ़िल्में, गेम, विज्ञापन, ग्लोबल फ़्रीलांसिंग।'} },
    { id:'hotel', g:'srv', ic:'🏨', name:'Hotel Management', t:['people','travel','quick'],
      sub:{en:'Hotels, chef, events, hospitality', kn:'ಹೋಟೆಲ್, ಶೆಫ್, ಈವೆಂಟ್, ಆತಿಥ್ಯ', hi:'होटल, शेफ़, इवेंट, हॉस्पिटैलिटी'},
      dur:{en:'3–4 years (BSc Hospitality / BHM)', kn:'3–4 ವರ್ಷ (BSc ಹಾಸ್ಪಿಟಾಲಿಟಿ / BHM)', hi:'3–4 साल (BSc हॉस्पिटैलिटी / BHM)'},
      what:{en:'Front office, food production, housekeeping, events and hotel operations.', kn:'ಫ್ರಂಟ್ ಆಫೀಸ್, ಆಹಾರ ತಯಾರಿಕೆ, ಹೌಸ್‌ಕೀಪಿಂಗ್, ಈವೆಂಟ್, ಹೋಟೆಲ್ ನಿರ್ವಹಣೆ.', hi:'फ़्रंट ऑफ़िस, फ़ूड प्रोडक्शन, हाउसकीपिंग, इवेंट और होटल संचालन।'},
      exam:{en:'NCHM JEE (NTA, April) for IHMs · private colleges: direct', kn:'IHM ಗಳಿಗೆ NCHM JEE (NTA, ಏಪ್ರಿಲ್) · ಖಾಸಗಿ: ನೇರ ಪ್ರವೇಶ', hi:'IHM के लिए NCHM JEE (NTA, अप्रैल) · प्राइवेट: सीधा प्रवेश'},
      elig:{en:'PU any stream with English', kn:'ಇಂಗ್ಲಿಷ್ ಸಹಿತ ಯಾವುದೇ ಪಿಯುಸಿ', hi:'अंग्रेज़ी सहित कोई भी पीयूसी'},
      fee:{en:'Govt IHMs: moderate · Private: higher', kn:'ಸರ್ಕಾರಿ IHM: ಮಧ್ಯಮ · ಖಾಸಗಿ: ಹೆಚ್ಚು', hi:'सरकारी IHM: मध्यम · प्राइवेट: ज़्यादा'},
      pay:{en:'Starting about ₹2.5–4 lakh/yr; abroad and cruise ships pay more', kn:'ಆರಂಭ ಸುಮಾರು ₹2.5–4 ಲಕ್ಷ/ವರ್ಷ; ವಿದೇಶ ಮತ್ತು ಕ್ರೂಸ್ ಹಡಗುಗಳಲ್ಲಿ ಹೆಚ್ಚು', hi:'शुरुआत लगभग ₹2.5–4 लाख/साल; विदेश और क्रूज़ में ज़्यादा'},
      scope:{en:'Hotel chains, airlines, cruise lines, restaurants, your own food business.', kn:'ಹೋಟೆಲ್ ಸರಪಳಿ, ಏರ್‌ಲೈನ್, ಕ್ರೂಸ್, ರೆಸ್ಟೋರೆಂಟ್, ಸ್ವಂತ ಆಹಾರ ವ್ಯವಹಾರ.', hi:'होटल चेन, एयरलाइंस, क्रूज़, रेस्तराँ, अपना फ़ूड बिज़नेस।'} },
    { id:'sports', g:'srv', ic:'🏅', name:'Sports & Physical Education', t:['sport','people','disc'],
      sub:{en:'Coach, PE teacher, fitness and sports science', kn:'ತರಬೇತುದಾರ, ದೈಹಿಕ ಶಿಕ್ಷಕ, ಫಿಟ್‌ನೆಸ್, ಕ್ರೀಡಾ ವಿಜ್ಞಾನ', hi:'कोच, PE टीचर, फ़िटनेस और स्पोर्ट्स साइंस'},
      dur:{en:'3–4 years (BPEd / BSc Sports Science)', kn:'3–4 ವರ್ಷ (BPEd / BSc ಕ್ರೀಡಾ ವಿಜ್ಞಾನ)', hi:'3–4 साल (BPEd / BSc स्पोर्ट्स साइंस)'},
      what:{en:'Training methods, sports nutrition, injury prevention and coaching; your Biology helps a lot.', kn:'ತರಬೇತಿ ವಿಧಾನ, ಕ್ರೀಡಾ ಪೋಷಣೆ, ಗಾಯ ತಡೆ, ತರಬೇತಿ; ನಿಮ್ಮ ಜೀವಶಾಸ್ತ್ರ ಬಹಳ ಸಹಾಯಕ.', hi:'ट्रेनिंग तरीके, स्पोर्ट्स न्यूट्रिशन, चोट से बचाव, कोचिंग; आपकी बायोलॉजी बहुत मदद करती है।'},
      exam:{en:'College test + physical fitness test; sports quota seats in many courses', kn:'ಕಾಲೇಜು ಪರೀಕ್ಷೆ + ದೈಹಿಕ ಸಾಮರ್ಥ್ಯ ಪರೀಕ್ಷೆ; ಹಲವು ಕೋರ್ಸ್‌ಗಳಲ್ಲಿ ಕ್ರೀಡಾ ಕೋಟಾ', hi:'कॉलेज टेस्ट + फ़िटनेस टेस्ट; कई कोर्स में स्पोर्ट्स कोटा'},
      elig:ANY, fee:{en:'Low to moderate', kn:'ಕಡಿಮೆಯಿಂದ ಮಧ್ಯಮ', hi:'कम से मध्यम'},
      pay:{en:'Starting about ₹2–4 lakh/yr; pro coaching earns more', kn:'ಆರಂಭ ಸುಮಾರು ₹2–4 ಲಕ್ಷ/ವರ್ಷ; ವೃತ್ತಿಪರ ತರಬೇತಿಗೆ ಹೆಚ್ಚು', hi:'शुरुआत लगभग ₹2–4 लाख/साल; प्रो कोचिंग में ज़्यादा'},
      scope:{en:'Schools, academies, gyms, sports teams; good sportspersons also get govt job quotas.', kn:'ಶಾಲೆ, ಅಕಾಡೆಮಿ, ಜಿಮ್, ಕ್ರೀಡಾ ತಂಡ; ಉತ್ತಮ ಕ್ರೀಡಾಪಟುಗಳಿಗೆ ಸರ್ಕಾರಿ ಉದ್ಯೋಗ ಕೋಟಾ.', hi:'स्कूल, अकादमी, जिम, खेल टीमें; अच्छे खिलाड़ियों को सरकारी नौकरी कोटा।'} },
    { id:'cabin', g:'srv', ic:'🛫', name:'Aviation: cabin crew & airport', t:['travel','people','quick'],
      sub:{en:'Cabin crew, ground staff, airport management', kn:'ಕ್ಯಾಬಿನ್ ಕ್ರೂ, ಗ್ರೌಂಡ್ ಸ್ಟಾಫ್, ವಿಮಾನ ನಿಲ್ದಾಣ ನಿರ್ವಹಣೆ', hi:'केबिन क्रू, ग्राउंड स्टाफ़, एयरपोर्ट मैनेजमेंट'},
      dur:{en:'6 months – 3 years (diploma / BBA Aviation)', kn:'6 ತಿಂಗಳು – 3 ವರ್ಷ (ಡಿಪ್ಲೊಮಾ / BBA ಏವಿಯೇಷನ್)', hi:'6 महीने – 3 साल (डिप्लोमा / BBA एविएशन)'},
      what:{en:'Passenger safety, service, communication and airport operations.', kn:'ಪ್ರಯಾಣಿಕರ ಸುರಕ್ಷತೆ, ಸೇವೆ, ಸಂವಹನ, ವಿಮಾನ ನಿಲ್ದಾಣ ಕಾರ್ಯಾಚರಣೆ.', hi:'यात्री सुरक्षा, सेवा, संवाद और एयरपोर्ट संचालन।'},
      exam:{en:'Airline selection: interview, grooming and fitness checks', kn:'ಏರ್‌ಲೈನ್ ಆಯ್ಕೆ: ಸಂದರ್ಶನ, ಅಂದ ಮತ್ತು ಫಿಟ್‌ನೆಸ್ ಪರಿಶೀಲನೆ', hi:'एयरलाइन चयन: इंटरव्यू, ग्रूमिंग और फ़िटनेस जाँच'},
      elig:{en:'PU any stream; good English and communication', kn:'ಯಾವುದೇ ಪಿಯುಸಿ; ಉತ್ತಮ ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಸಂವಹನ', hi:'कोई भी पीयूसी; अच्छी अंग्रेज़ी और संवाद'},
      fee:{en:'Moderate (check the institute carefully)', kn:'ಮಧ್ಯಮ (ಸಂಸ್ಥೆಯನ್ನು ಎಚ್ಚರಿಕೆಯಿಂದ ಪರಿಶೀಲಿಸಿ)', hi:'मध्यम (संस्थान को ध्यान से जाँचें)'},
      pay:{en:'Cabin crew start about ₹3–5 lakh/yr', kn:'ಕ್ಯಾಬಿನ್ ಕ್ರೂ ಆರಂಭ ಸುಮಾರು ₹3–5 ಲಕ್ಷ/ವರ್ಷ', hi:'केबिन क्रू शुरुआत लगभग ₹3–5 लाख/साल'},
      scope:{en:'Airlines are growing fast in India; travel the world while you work.', kn:'ಭಾರತದಲ್ಲಿ ಏರ್‌ಲೈನ್‌ಗಳು ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತಿವೆ; ಕೆಲಸದ ಜೊತೆ ಜಗತ್ತು ಸುತ್ತಿ.', hi:'भारत में एयरलाइंस तेज़ी से बढ़ रही हैं; काम के साथ दुनिया घूमें।'} },
    { id:'entre', g:'art', ic:'🚀', name:'Entrepreneur · Content creator', t:['create','money','lead'],
      sub:{en:'Start your own business, brand or channel', kn:'ಸ್ವಂತ ವ್ಯವಹಾರ, ಬ್ರ್ಯಾಂಡ್ ಅಥವಾ ಚಾನೆಲ್ ಆರಂಭಿಸಿ', hi:'अपना बिज़नेस, ब्रांड या चैनल शुरू करें'},
      dur:{en:'Alongside any degree', kn:'ಯಾವುದೇ ಪದವಿಯ ಜೊತೆಗೆ', hi:'किसी भी डिग्री के साथ'},
      what:{en:'Turn an idea or skill into a business: online education, agri-tech, health products, YouTube/Instagram.', kn:'ಕಲ್ಪನೆ ಅಥವಾ ಕೌಶಲ್ಯವನ್ನು ವ್ಯವಹಾರವಾಗಿಸಿ: ಆನ್‌ಲೈನ್ ಶಿಕ್ಷಣ, ಕೃಷಿ-ತಂತ್ರಜ್ಞಾನ, ಆರೋಗ್ಯ ಉತ್ಪನ್ನ, YouTube/Instagram.', hi:'आइडिया या हुनर को बिज़नेस बनाएँ: ऑनलाइन शिक्षा, एग्री-टेक, हेल्थ प्रोडक्ट, YouTube/Instagram।'},
      exam:{en:'No entrance — skills, practice and patience', kn:'ಪ್ರವೇಶ ಪರೀಕ್ಷೆ ಇಲ್ಲ — ಕೌಶಲ್ಯ, ಅಭ್ಯಾಸ, ತಾಳ್ಮೆ', hi:'कोई प्रवेश परीक्षा नहीं — हुनर, अभ्यास और धैर्य'},
      elig:ANY, fee:{en:'Start small; college incubators and govt schemes (Startup Karnataka) help', kn:'ಸಣ್ಣದಾಗಿ ಆರಂಭಿಸಿ; ಕಾಲೇಜು ಇನ್‌ಕ್ಯುಬೇಟರ್ ಮತ್ತು ಸ್ಟಾರ್ಟ್‌ಅಪ್ ಕರ್ನಾಟಕ ಸಹಾಯ', hi:'छोटे से शुरू करें; कॉलेज इनक्यूबेटर और स्टार्टअप कर्नाटक मदद करते हैं'},
      pay:{en:'No fixed salary: depends on your idea and effort', kn:'ನಿಗದಿತ ಸಂಬಳ ಇಲ್ಲ: ಕಲ್ಪನೆ ಮತ್ತು ಶ್ರಮದ ಮೇಲೆ', hi:'तय वेतन नहीं: आपके आइडिया और मेहनत पर निर्भर'},
      scope:{en:'Finish a degree as a safety net, and build your idea alongside it.', kn:'ಭದ್ರತೆಗಾಗಿ ಪದವಿ ಮುಗಿಸಿ, ಜೊತೆಜೊತೆಗೆ ನಿಮ್ಮ ಕಲ್ಪನೆ ಬೆಳೆಸಿ.', hi:'सुरक्षा के लिए डिग्री पूरी करें, साथ-साथ अपना आइडिया बनाएँ।'} }
  ]);
  /* Careers that already exist elsewhere and also belong here. */
  var also = { govt:['law'], psy:['srv'], nutri:['srv'], bdes:['art'], pilot:['srv'], teach:['law'] };
  D.alsoIn = D.alsoIn || {};
  Object.keys(also).forEach(function(k){ D.alsoIn[k] = [].concat(D.alsoIn[k] || [], also[k]); });

  D.quizBeyond = [
    { t:'law', q:{en:'I enjoy debates and standing up for what is right.', kn:'ಚರ್ಚೆ ಮತ್ತು ನ್ಯಾಯದ ಪರ ನಿಲ್ಲುವುದು ಇಷ್ಟ.', hi:'मुझे बहस करना और सही के लिए खड़ा होना पसंद है।'} },
    { t:'lead', q:{en:'I want to lead people and solve problems in society.', kn:'ಜನರನ್ನು ಮುನ್ನಡೆಸಿ ಸಮಾಜದ ಸಮಸ್ಯೆ ಪರಿಹರಿಸಲು ಬಯಸುತ್ತೇನೆ.', hi:'मैं लोगों का नेतृत्व करके समाज की समस्याएँ सुलझाना चाहता/चाहती हूँ।'} },
    { t:'money', q:{en:'Business, money and markets interest me.', kn:'ವ್ಯವಹಾರ, ಹಣ ಮತ್ತು ಮಾರುಕಟ್ಟೆ ನನಗೆ ಆಸಕ್ತಿ.', hi:'बिज़नेस, पैसा और बाज़ार में मेरी रुचि है।'} },
    { t:'write', q:{en:'I like reading, writing and explaining ideas.', kn:'ಓದು, ಬರವಣಿಗೆ, ವಿಚಾರ ವಿವರಿಸುವುದು ಇಷ್ಟ.', hi:'मुझे पढ़ना, लिखना और विचार समझाना पसंद है।'} },
    { t:'create', q:{en:'I love drawing, videos, design or creating content.', kn:'ಚಿತ್ರ, ವಿಡಿಯೋ, ವಿನ್ಯಾಸ ಅಥವಾ ಕಂಟೆಂಟ್ ರಚನೆ ಇಷ್ಟ.', hi:'मुझे ड्रॉइंग, वीडियो, डिज़ाइन या कंटेंट बनाना पसंद है।'} },
    { t:'people', q:{en:'I am friendly and enjoy helping and serving people.', kn:'ನಾನು ಸ್ನೇಹಪರ, ಜನರಿಗೆ ಸಹಾಯ ಮಾಡುವುದು ಇಷ್ಟ.', hi:'मैं मिलनसार हूँ और लोगों की मदद करना पसंद है।'} },
    { t:'sport', q:{en:'Sports and fitness are a big part of my life.', kn:'ಕ್ರೀಡೆ ಮತ್ತು ಫಿಟ್‌ನೆಸ್ ನನ್ನ ಜೀವನದ ದೊಡ್ಡ ಭಾಗ.', hi:'खेल और फ़िटनेस मेरी ज़िंदगी का बड़ा हिस्सा हैं।'} },
    { t:'travel', q:{en:'I would love a job where I travel to new places.', kn:'ಹೊಸ ಸ್ಥಳಗಳಿಗೆ ಪ್ರಯಾಣಿಸುವ ಕೆಲಸ ಇಷ್ಟ.', hi:'मुझे ऐसी नौकरी चाहिए जिसमें नई जगहें घूमूँ।'} },
    { t:'quick', q:{en:'I want to start earning within 3–4 years.', kn:'3–4 ವರ್ಷಗಳಲ್ಲಿ ಸಂಪಾದನೆ ಆರಂಭಿಸಬೇಕು.', hi:'मैं 3–4 साल में कमाना शुरू करना चाहता/चाहती हूँ।'} },
    { t:'long', q:{en:'I am ready for tough exams and long preparation.', kn:'ಕಠಿಣ ಪರೀಕ್ಷೆ ಮತ್ತು ದೀರ್ಘ ತಯಾರಿಗೆ ಸಿದ್ಧ.', hi:'मैं कठिन परीक्षा और लंबी तैयारी के लिए तैयार हूँ।'} }
  ];
  [].push.apply(D.exams, [
    { st:'beyond', n:'CLAT', by:'Consortium of NLUs', m:{en:'Every December (register Aug–Oct)', kn:'ಪ್ರತಿ ಡಿಸೆಂಬರ್ (ನೋಂದಣಿ ಆಗಸ್ಟ್–ಅಕ್ಟೋಬರ್)', hi:'हर दिसंबर (रजिस्ट्रेशन अगस्त–अक्टूबर)'}, f:{en:'5-year law at National Law Universities', kn:'ರಾಷ್ಟ್ರೀಯ ಕಾನೂನು ವಿವಿಗಳಲ್ಲಿ 5 ವರ್ಷದ ಕಾನೂನು', hi:'राष्ट्रीय विधि विश्वविद्यालयों में 5 साल का क़ानून'} },
    { st:'beyond', n:'IPMAT', by:'IIM Indore · Rohtak', m:{en:'May', kn:'ಮೇ', hi:'मई'}, f:{en:'5-year management (BBA + MBA) at IIMs', kn:'IIM ಗಳಲ್ಲಿ 5 ವರ್ಷದ ನಿರ್ವಹಣೆ (BBA + MBA)', hi:'IIM में 5 साल का मैनेजमेंट (BBA + MBA)'} },
    { st:'beyond', n:'CA Foundation', by:'ICAI', m:{en:'Several times a year (after PU)', kn:'ವರ್ಷಕ್ಕೆ ಹಲವು ಬಾರಿ (ಪಿಯು ನಂತರ)', hi:'साल में कई बार (पीयू के बाद)'}, f:{en:'Chartered Accountancy', kn:'ಚಾರ್ಟರ್ಡ್ ಅಕೌಂಟೆನ್ಸಿ', hi:'चार्टर्ड अकाउंटेंसी'} },
    { st:'beyond', n:'NCHM JEE', by:'NTA', m:{en:'April', kn:'ಏಪ್ರಿಲ್', hi:'अप्रैल'}, f:{en:'Hotel management at IHMs', kn:'IHM ಗಳಲ್ಲಿ ಹೋಟೆಲ್ ನಿರ್ವಹಣೆ', hi:'IHM में होटल मैनेजमेंट'} },
    { st:'beyond', n:'CUET-UG', by:'NTA', m:{en:'May–June', kn:'ಮೇ–ಜೂನ್', hi:'मई–जून'}, f:{en:'BA, BCom, BSc, journalism at central universities', kn:'ಕೇಂದ್ರೀಯ ವಿವಿಗಳಲ್ಲಿ BA, BCom, BSc, ಪತ್ರಿಕೋದ್ಯಮ', hi:'केंद्रीय विश्वविद्यालयों में BA, BCom, BSc, पत्रकारिता'} },
    { st:'beyond', n:'UCEED · NID DAT', by:'IIT Bombay · NID', m:{en:'January', kn:'ಜನವರಿ', hi:'जनवरी'}, f:{en:'Design, animation, communication', kn:'ವಿನ್ಯಾಸ, ಅನಿಮೇಷನ್, ಸಂವಹನ', hi:'डिज़ाइन, एनिमेशन, कम्युनिकेशन'} }
  ]);
})();
