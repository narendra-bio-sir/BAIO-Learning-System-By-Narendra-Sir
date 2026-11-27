/* Study abroad (careers.html). Costs are rough ranges in Indian rupees (Nov 2026) and change every year; rules checked
   Nov 2026: NMC Foreign Medical Graduate Licentiate Regulations 2021 (54-month course + 12-month internship abroad, FMGE
   until NExT starts; a 2026 amendment is only a draft), Germany blocked account €11,904/yr, UK Graduate Route 2 years
   (18 months for applications from 1 Jan 2027), US OPT 12 months (+24 months STEM). Text fields are {en, kn, hi}. */
window.STUDY_ABROAD = {
  med: {
    rules: [
      {en:'Qualify NEET-UG first. Without a NEET pass, an MBBS degree from abroad cannot be used in India (the result counts for 3 years).',
       kn:'ಮೊದಲು NEET-UG ಉತ್ತೀರ್ಣರಾಗಿ. NEET ಇಲ್ಲದೆ ವಿದೇಶಿ MBBS ಪದವಿಯನ್ನು ಭಾರತದಲ್ಲಿ ಬಳಸಲಾಗದು (ಫಲಿತಾಂಶ 3 ವರ್ಷ ಮಾನ್ಯ).',
       hi:'पहले NEET-UG पास करें। NEET के बिना विदेश की MBBS डिग्री भारत में मान्य नहीं (रिज़ल्ट 3 साल मान्य)।'},
      {en:'The course must be at least 54 months, in English, plus a 12-month internship in the same university abroad — finished within 10 years.',
       kn:'ಕೋರ್ಸ್ ಕನಿಷ್ಠ 54 ತಿಂಗಳು, ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ, ಜೊತೆಗೆ ಅದೇ ವಿದೇಶಿ ವಿಶ್ವವಿದ್ಯಾಲಯದಲ್ಲಿ 12 ತಿಂಗಳ ಇಂಟರ್ನ್‌ಶಿಪ್ — 10 ವರ್ಷದೊಳಗೆ ಮುಗಿಯಬೇಕು.',
       hi:'कोर्स कम से कम 54 महीने का, अंग्रेज़ी में, और उसी विदेशी यूनिवर्सिटी में 12 महीने की इंटर्नशिप — 10 साल के अंदर पूरा।'},
      {en:'You must be eligible for a licence to practise in that country, and the degree must be from a recognised university (check the NMC notices and WDOMS).',
       kn:'ಆ ದೇಶದಲ್ಲಿ ವೈದ್ಯಕೀಯ ಪರವಾನಗಿಗೆ ಅರ್ಹರಾಗಿರಬೇಕು, ಮತ್ತು ಮಾನ್ಯತೆ ಪಡೆದ ವಿಶ್ವವಿದ್ಯಾಲಯದ ಪದವಿ ಆಗಿರಬೇಕು (NMC ಸೂಚನೆ ಮತ್ತು WDOMS ನೋಡಿ).',
       hi:'उस देश में प्रैक्टिस लाइसेंस के योग्य होना चाहिए, और डिग्री मान्य यूनिवर्सिटी की हो (NMC सूचनाएँ और WDOMS देखें)।'},
      {en:'Back in India: pass FMGE (until NExT starts) and do a 12-month internship here. Only about 14% passed FMGE in June 2026, so study hard abroad.',
       kn:'ಭಾರತಕ್ಕೆ ಮರಳಿದ ನಂತರ: FMGE ಉತ್ತೀರ್ಣರಾಗಿ (NExT ಆರಂಭವಾಗುವವರೆಗೆ) ಮತ್ತು ಇಲ್ಲಿ 12 ತಿಂಗಳ ಇಂಟರ್ನ್‌ಶಿಪ್. ಜೂನ್ 2026 ರಲ್ಲಿ ಸುಮಾರು 14% ಮಾತ್ರ FMGE ಉತ್ತೀರ್ಣ — ವಿದೇಶದಲ್ಲಿ ಚೆನ್ನಾಗಿ ಓದಿ.',
       hi:'भारत लौटकर: FMGE पास करें (NExT शुरू होने तक) और यहाँ 12 महीने की इंटर्नशिप। जून 2026 में सिर्फ़ लगभग 14% FMGE पास हुए — विदेश में अच्छे से पढ़ें।'}
    ],
    countries: [
      { f:'🇷🇺', n:'Russia', d:'6 yrs', c:'₹25–50 lakh', l:'English / Russian', t:{en:'Large, old government universities; cold climate; learn basic Russian for patients.', kn:'ದೊಡ್ಡ, ಹಳೆಯ ಸರ್ಕಾರಿ ವಿಶ್ವವಿದ್ಯಾಲಯಗಳು; ಚಳಿ ಹವಾಮಾನ; ರೋಗಿಗಳಿಗಾಗಿ ಮೂಲ ರಷ್ಯನ್ ಕಲಿಯಿರಿ.', hi:'बड़ी, पुरानी सरकारी यूनिवर्सिटी; ठंडा मौसम; मरीज़ों के लिए बुनियादी रूसी सीखें।'} },
      { f:'🇬🇪', n:'Georgia', d:'6 yrs', c:'₹30–50 lakh', l:'English', t:{en:'Popular, European-style; fees on the higher side.', kn:'ಜನಪ್ರಿಯ, ಯುರೋಪಿಯನ್ ಶೈಲಿ; ಶುಲ್ಕ ಸ್ವಲ್ಪ ಹೆಚ್ಚು.', hi:'लोकप्रिय, यूरोपीय शैली; फ़ीस थोड़ी ज़्यादा।'} },
      { f:'🇰🇿', n:'Kazakhstan', d:'5–6 yrs', c:'₹20–32 lakh', l:'English / Russian', t:{en:'Affordable; check that the course meets the 54-month rule.', kn:'ಕಡಿಮೆ ವೆಚ್ಚ; ಕೋರ್ಸ್ 54 ತಿಂಗಳ ನಿಯಮ ಪಾಲಿಸುತ್ತದೆಯೇ ನೋಡಿ.', hi:'सस्ता; जाँचें कि कोर्स 54 महीने के नियम में आता है।'} },
      { f:'🇰🇬', n:'Kyrgyzstan', d:'6 yrs', c:'₹15–25 lakh', l:'English / Russian', t:{en:'Among the cheapest; quality varies a lot between universities.', kn:'ಅತಿ ಕಡಿಮೆ ವೆಚ್ಚದ ದೇಶಗಳಲ್ಲಿ ಒಂದು; ವಿಶ್ವವಿದ್ಯಾಲಯಗಳ ಗುಣಮಟ್ಟ ತುಂಬಾ ಬೇರೆ.', hi:'सबसे सस्ते में से एक; यूनिवर्सिटी की गुणवत्ता में बहुत अंतर।'} },
      { f:'🇺🇿', n:'Uzbekistan', d:'6 yrs', c:'₹16–28 lakh', l:'English', t:{en:'Low cost and growing; choose universities with a long record.', kn:'ಕಡಿಮೆ ವೆಚ್ಚ, ಬೆಳೆಯುತ್ತಿದೆ; ದೀರ್ಘ ಇತಿಹಾಸದ ವಿಶ್ವವಿದ್ಯಾಲಯ ಆಯ್ಕೆಮಾಡಿ.', hi:'कम खर्च और बढ़ता हुआ; पुराने रिकॉर्ड वाली यूनिवर्सिटी चुनें।'} },
      { f:'🇧🇩', n:'Bangladesh', d:'5 yrs + 1 yr internship', c:'₹25–45 lakh', l:'English', t:{en:'Syllabus and diseases similar to India; FMGE results are usually better.', kn:'ಪಠ್ಯ ಮತ್ತು ರೋಗಗಳು ಭಾರತದಂತೆಯೇ; FMGE ಫಲಿತಾಂಶ ಸಾಮಾನ್ಯವಾಗಿ ಉತ್ತಮ.', hi:'सिलेबस और बीमारियाँ भारत जैसी; FMGE रिज़ल्ट आमतौर पर बेहतर।'} },
      { f:'🇳🇵', n:'Nepal', d:'5.5 yrs', c:'₹40–60 lakh', l:'English', t:{en:'Close to home, Indian-style syllabus; limited seats for Indians.', kn:'ಮನೆಗೆ ಹತ್ತಿರ, ಭಾರತೀಯ ಶೈಲಿಯ ಪಠ್ಯ; ಭಾರತೀಯರಿಗೆ ಸೀಮಿತ ಸೀಟುಗಳು.', hi:'घर के पास, भारतीय शैली का सिलेबस; भारतीयों के लिए सीमित सीटें।'} },
      { f:'🇵🇭', n:'Philippines', d:'BS + MD ≈ 5.5–6 yrs', c:'₹20–35 lakh', l:'English', t:{en:'US-style system; make sure the full course (including the BS year) meets NMC rules.', kn:'ಅಮೆರಿಕನ್ ಶೈಲಿ; ಪೂರ್ಣ ಕೋರ್ಸ್ (BS ವರ್ಷ ಸೇರಿ) NMC ನಿಯಮಕ್ಕೆ ಹೊಂದುತ್ತದೆಯೇ ನೋಡಿ.', hi:'अमेरिकी शैली; पूरा कोर्स (BS साल सहित) NMC नियमों में आता है, यह जाँचें।'} }
    ]
  },
  oth: {
    countries: [
      { f:'🇺🇸', n:'USA', d:'4 yrs', c:'₹35–70 lakh / yr', x:'SAT/ACT (some optional) · TOEFL/IELTS', i:'Aug–Sep (apply Nov–Jan)', w:'OPT 1 yr (+2 yrs for STEM)', t:{en:'Best universities and research; some top colleges give big need-based aid.', kn:'ಅತ್ಯುತ್ತಮ ವಿಶ್ವವಿದ್ಯಾಲಯ ಮತ್ತು ಸಂಶೋಧನೆ; ಕೆಲವು ಉನ್ನತ ಕಾಲೇಜುಗಳು ದೊಡ್ಡ ಆರ್ಥಿಕ ನೆರವು ನೀಡುತ್ತವೆ.', hi:'सबसे अच्छी यूनिवर्सिटी और रिसर्च; कुछ टॉप कॉलेज बड़ी आर्थिक सहायता देते हैं।'} },
      { f:'🇬🇧', n:'United Kingdom', d:'3 yrs (4 in Scotland)', c:'₹25–45 lakh / yr', x:'IELTS · UCAS application', i:'Sep (UCAS by Jan)', w:'Graduate visa 2 yrs (18 months from 2027)', t:{en:'Short 3-year degrees save money and time.', kn:'3 ವರ್ಷದ ಚಿಕ್ಕ ಪದವಿ — ಹಣ ಮತ್ತು ಸಮಯ ಉಳಿತಾಯ.', hi:'3 साल की छोटी डिग्री — पैसा और समय बचता है।'} },
      { f:'🇨🇦', n:'Canada', d:'4 yrs', c:'₹20–35 lakh / yr', x:'IELTS/TOEFL', i:'Sep (also Jan)', w:'PGWP up to 3 yrs', t:{en:'Study permits are now capped; apply early and pick well-known universities.', kn:'ಸ್ಟಡಿ ಪರ್ಮಿಟ್‌ಗೆ ಈಗ ಮಿತಿ ಇದೆ; ಬೇಗ ಅರ್ಜಿ ಹಾಕಿ, ಪ್ರಸಿದ್ಧ ವಿಶ್ವವಿದ್ಯಾಲಯ ಆಯ್ಕೆಮಾಡಿ.', hi:'स्टडी परमिट पर अब सीमा है; जल्दी आवेदन करें और जानी-मानी यूनिवर्सिटी चुनें।'} },
      { f:'🇩🇪', n:'Germany', d:'3–4 yrs', c:'₹8–12 lakh / yr (living)', x:'German or English test · APS certificate', i:'Oct (also Apr)', w:'Job-seeker 18 months', t:{en:'Public universities charge almost no tuition, but after PU you need a 1-year foundation (Studienkolleg) or 1 year of an Indian degree, and a blocked account of about €11,900 a year.', kn:'ಸರ್ಕಾರಿ ವಿಶ್ವವಿದ್ಯಾಲಯಗಳಲ್ಲಿ ಬಹುತೇಕ ಬೋಧನಾ ಶುಲ್ಕ ಇಲ್ಲ, ಆದರೆ ಪಿಯು ನಂತರ 1 ವರ್ಷದ ಫೌಂಡೇಶನ್ (Studienkolleg) ಅಥವಾ ಭಾರತೀಯ ಪದವಿಯ 1 ವರ್ಷ, ಮತ್ತು ವರ್ಷಕ್ಕೆ ಸುಮಾರು €11,900 ಬ್ಲಾಕ್ಡ್ ಖಾತೆ ಬೇಕು.', hi:'सरकारी यूनिवर्सिटी में लगभग कोई ट्यूशन फ़ीस नहीं, पर पीयू के बाद 1 साल का फ़ाउंडेशन (Studienkolleg) या भारतीय डिग्री का 1 साल, और सालाना लगभग €11,900 का ब्लॉक्ड अकाउंट चाहिए।'} },
      { f:'🇦🇺', n:'Australia', d:'3–4 yrs', c:'₹25–45 lakh / yr', x:'IELTS/PTE', i:'Feb & Jul', w:'Post-study work 2–4 yrs', t:{en:'Good for nursing, health sciences and engineering; work up to 48 hours a fortnight while studying.', kn:'ನರ್ಸಿಂಗ್, ಆರೋಗ್ಯ ವಿಜ್ಞಾನ, ಎಂಜಿನಿಯರಿಂಗ್‌ಗೆ ಉತ್ತಮ; ಓದುವಾಗ 15 ದಿನಕ್ಕೆ 48 ಗಂಟೆ ಕೆಲಸ.', hi:'नर्सिंग, हेल्थ साइंस और इंजीनियरिंग के लिए अच्छा; पढ़ाई के साथ 15 दिन में 48 घंटे काम।'} },
      { f:'🇮🇪', n:'Ireland', d:'3–4 yrs', c:'₹20–35 lakh / yr', x:'IELTS', i:'Sep', w:'Stay-back 1–2 yrs', t:{en:'English-speaking, tech and pharma jobs (Google, Pfizer and others are based there).', kn:'ಇಂಗ್ಲಿಷ್ ಮಾತನಾಡುವ ದೇಶ; ತಂತ್ರಜ್ಞಾನ ಮತ್ತು ಫಾರ್ಮಾ ಉದ್ಯೋಗಗಳು.', hi:'अंग्रेज़ी बोलने वाला देश; टेक और फ़ार्मा नौकरियाँ।'} },
      { f:'🇯🇵', n:'Japan', d:'4 yrs', c:'₹8–15 lakh / yr', x:'EJU / university test · Japanese for most', i:'Apr & Oct', w:'Job-seeking visa after study', t:{en:'MEXT scholarship pays full fees + monthly stipend for selected Indian students (apply through the Japanese Embassy).', kn:'MEXT ವಿದ್ಯಾರ್ಥಿವೇತನ ಆಯ್ಕೆಯಾದ ಭಾರತೀಯರಿಗೆ ಪೂರ್ಣ ಶುಲ್ಕ + ಮಾಸಿಕ ಭತ್ಯೆ (ಜಪಾನ್ ರಾಯಭಾರ ಕಚೇರಿ ಮೂಲಕ).', hi:'MEXT स्कॉलरशिप चयनित भारतीयों को पूरी फ़ीस + मासिक भत्ता देती है (जापानी दूतावास से आवेदन)।'} }
    ]
  },
  exams: [
    { n:'IELTS / TOEFL / PTE / Duolingo', t:{en:'English test for almost every country (UK, Canada, Australia, USA).', kn:'ಬಹುತೇಕ ಎಲ್ಲಾ ದೇಶಗಳಿಗೆ ಇಂಗ್ಲಿಷ್ ಪರೀಕ್ಷೆ.', hi:'लगभग हर देश के लिए अंग्रेज़ी टेस्ट।'} },
    { n:'SAT / ACT', t:{en:'For US undergraduate admission (some colleges make it optional).', kn:'ಅಮೆರಿಕದ ಪದವಿ ಪ್ರವೇಶಕ್ಕೆ (ಕೆಲವು ಕಾಲೇಜುಗಳಲ್ಲಿ ಐಚ್ಛಿಕ).', hi:'अमेरिका में ग्रेजुएशन प्रवेश के लिए (कुछ कॉलेजों में वैकल्पिक)।'} },
    { n:'NEET-UG', t:{en:'Compulsory for MBBS abroad if you want to practise in India.', kn:'ಭಾರತದಲ್ಲಿ ವೈದ್ಯರಾಗಲು ವಿದೇಶಿ MBBS ಗೆ ಕಡ್ಡಾಯ.', hi:'भारत में प्रैक्टिस करनी हो तो विदेश में MBBS के लिए अनिवार्य।'} },
    { n:'GRE / GMAT', t:{en:'Later, for a master’s or MBA abroad.', kn:'ನಂತರ, ವಿದೇಶದಲ್ಲಿ ಸ್ನಾತಕೋತ್ತರ ಅಥವಾ MBA ಗೆ.', hi:'बाद में, विदेश में मास्टर्स या MBA के लिए।'} }
  ],
  scholarships: [
    { n:'MEXT (Japan)', t:{en:'Full fees + stipend · UG & PG · via Japanese Embassy', kn:'ಪೂರ್ಣ ಶುಲ್ಕ + ಭತ್ಯೆ · UG ಮತ್ತು PG · ಜಪಾನ್ ರಾಯಭಾರ ಕಚೇರಿ', hi:'पूरी फ़ीस + भत्ता · UG व PG · जापानी दूतावास'} },
    { n:'University scholarships', t:{en:'Merit and need-based aid from the university itself (USA, UK, Canada, Australia)', kn:'ವಿಶ್ವವಿದ್ಯಾಲಯದ ಮೆರಿಟ್ ಮತ್ತು ಅಗತ್ಯ ಆಧಾರಿತ ನೆರವು', hi:'यूनिवर्सिटी की मेरिट और ज़रूरत-आधारित सहायता'} },
    { n:'DAAD (Germany)', t:{en:'Mostly for master’s and PhD', kn:'ಹೆಚ್ಚಾಗಿ ಸ್ನಾತಕೋತ್ತರ ಮತ್ತು PhD ಗೆ', hi:'ज़्यादातर मास्टर्स और PhD के लिए'} },
    { n:'Chevening · Commonwealth (UK) · Fulbright-Nehru (USA) · Erasmus Mundus (Europe)', t:{en:'Famous fully funded scholarships for master’s (after your degree)', kn:'ಪದವಿಯ ನಂತರ ಸ್ನಾತಕೋತ್ತರಕ್ಕೆ ಪ್ರಸಿದ್ಧ ಪೂರ್ಣ ವಿದ್ಯಾರ್ಥಿವೇತನಗಳು', hi:'डिग्री के बाद मास्टर्स के लिए प्रसिद्ध पूर्ण स्कॉलरशिप'} },
    { n:'National Overseas Scholarship · Karnataka Prabuddha', t:{en:'Govt support for SC/ST and other eligible students for master’s/PhD abroad', kn:'ವಿದೇಶದಲ್ಲಿ ಸ್ನಾತಕೋತ್ತರ/PhD ಗೆ SC/ST ಮತ್ತು ಇತರ ಅರ್ಹ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಸರ್ಕಾರದ ನೆರವು', hi:'विदेश में मास्टर्स/PhD के लिए SC/ST व अन्य पात्र छात्रों को सरकारी सहायता'} }
  ],
  ui: {
    en:{ btnT:'Study abroad', btnS:'MBBS abroad and other degrees abroad: countries, costs, rules, exams, scholarships and loans',
         h:'✈️ Study abroad', sub:'Studying abroad is a big decision. Know the rules, the real cost and the risks before you choose.',
         med:'🩺 MBBS abroad', oth:'🌍 Other degrees', rulesH:'📜 NMC rules you must follow', cH:'🌏 Popular countries',
         dur:'Duration', cost:'Total cost (approx.)', costY:'Cost per year (approx.)', lang:'Teaching', exam:'Exams', intake:'Intake', work:'Work after study',
         stepsH:'🗓️ Steps and timeline', steps:['Class 11–12: decide the course and countries; keep marks high (most universities look at PU marks).','12–18 months before: research universities, check recognition (NMC / WDOMS for MBBS, rankings for others).','Write the exams: NEET for MBBS; IELTS/TOEFL and SAT where needed.','Apply with marks cards, passport, statement of purpose and recommendation letters.','Get the offer letter, arrange money (scholarship + loan) and show funds for the visa.','Apply for the student visa, book travel and register with the Indian Embassy after you reach.'],
         exH:'📝 Exams you may need', schH:'🎓 Scholarships for abroad', loanH:'🏦 Education loans for abroad',
         loan:'SBI Global Ed-Vantage, Bank of Baroda Baroda Scholar, PNB Udaan and other banks give loans for abroad. Above ₹7.5 lakh they usually need collateral; you pay 15% margin.',
         loanBtn:'See education loans',
         safeH:'⚠️ Stay safe', safe:['Never pay a large amount to an agent before you get the official offer letter from the university.','Check the university on the NMC notices (for MBBS) or official rankings, and read reviews by Indian students.','Check part-time work rules — you cannot count on part-time work to pay the fees.','Keep copies of all documents, and register on the MADAD portal / with the Indian Embassy.'],
         note:'Costs are rough totals including living, in rupees, and change every year with fees and exchange rates. Rules change too: confirm with the NMC, the university and the embassy before deciding.' },
    kn:{ btnT:'ವಿದೇಶದಲ್ಲಿ ಶಿಕ್ಷಣ', btnS:'ವಿದೇಶದಲ್ಲಿ MBBS ಮತ್ತು ಇತರ ಪದವಿ: ದೇಶಗಳು, ವೆಚ್ಚ, ನಿಯಮ, ಪರೀಕ್ಷೆ, ವಿದ್ಯಾರ್ಥಿವೇತನ, ಸಾಲ',
         h:'✈️ ವಿದೇಶದಲ್ಲಿ ಶಿಕ್ಷಣ', sub:'ವಿದೇಶದಲ್ಲಿ ಓದುವುದು ದೊಡ್ಡ ನಿರ್ಧಾರ. ಆಯ್ಕೆ ಮಾಡುವ ಮೊದಲು ನಿಯಮ, ನಿಜವಾದ ವೆಚ್ಚ ಮತ್ತು ಅಪಾಯಗಳನ್ನು ತಿಳಿಯಿರಿ.',
         med:'🩺 ವಿದೇಶದಲ್ಲಿ MBBS', oth:'🌍 ಇತರ ಪದವಿಗಳು', rulesH:'📜 ಪಾಲಿಸಬೇಕಾದ NMC ನಿಯಮಗಳು', cH:'🌏 ಜನಪ್ರಿಯ ದೇಶಗಳು',
         dur:'ಅವಧಿ', cost:'ಒಟ್ಟು ವೆಚ್ಚ (ಅಂದಾಜು)', costY:'ವರ್ಷದ ವೆಚ್ಚ (ಅಂದಾಜು)', lang:'ಬೋಧನಾ ಭಾಷೆ', exam:'ಪರೀಕ್ಷೆಗಳು', intake:'ಪ್ರವೇಶ ಅವಧಿ', work:'ಓದಿನ ನಂತರ ಕೆಲಸ',
         stepsH:'🗓️ ಹಂತಗಳು ಮತ್ತು ಸಮಯ', steps:['11–12ನೇ ತರಗತಿ: ಕೋರ್ಸ್ ಮತ್ತು ದೇಶ ನಿರ್ಧರಿಸಿ; ಅಂಕ ಹೆಚ್ಚಾಗಿರಲಿ (ಬಹುತೇಕ ವಿಶ್ವವಿದ್ಯಾಲಯಗಳು ಪಿಯು ಅಂಕ ನೋಡುತ್ತವೆ).','12–18 ತಿಂಗಳು ಮೊದಲು: ವಿಶ್ವವಿದ್ಯಾಲಯಗಳನ್ನು ಹುಡುಕಿ, ಮಾನ್ಯತೆ ಪರಿಶೀಲಿಸಿ (MBBS ಗೆ NMC / WDOMS, ಇತರಕ್ಕೆ ಶ್ರೇಣಿ).','ಪರೀಕ್ಷೆ ಬರೆಯಿರಿ: MBBS ಗೆ NEET; ಬೇಕಾದಲ್ಲಿ IELTS/TOEFL ಮತ್ತು SAT.','ಅಂಕಪಟ್ಟಿ, ಪಾಸ್‌ಪೋರ್ಟ್, ಉದ್ದೇಶ ಪತ್ರ ಮತ್ತು ಶಿಫಾರಸು ಪತ್ರಗಳೊಂದಿಗೆ ಅರ್ಜಿ ಹಾಕಿ.','ಆಫರ್ ಪತ್ರ ಪಡೆದು, ಹಣ ವ್ಯವಸ್ಥೆ ಮಾಡಿ (ವಿದ್ಯಾರ್ಥಿವೇತನ + ಸಾಲ), ವೀಸಾಗೆ ಹಣದ ಪುರಾವೆ ತೋರಿಸಿ.','ವಿದ್ಯಾರ್ಥಿ ವೀಸಾಗೆ ಅರ್ಜಿ, ಪ್ರಯಾಣ ಬುಕ್ ಮಾಡಿ, ತಲುಪಿದ ನಂತರ ಭಾರತೀಯ ರಾಯಭಾರ ಕಚೇರಿಯಲ್ಲಿ ನೋಂದಾಯಿಸಿ.'],
         exH:'📝 ಬೇಕಾಗಬಹುದಾದ ಪರೀಕ್ಷೆಗಳು', schH:'🎓 ವಿದೇಶ ಶಿಕ್ಷಣಕ್ಕೆ ವಿದ್ಯಾರ್ಥಿವೇತನ', loanH:'🏦 ವಿದೇಶ ಶಿಕ್ಷಣಕ್ಕೆ ಸಾಲ',
         loan:'SBI Global Ed-Vantage, ಬ್ಯಾಂಕ್ ಆಫ್ ಬರೋಡಾ Baroda Scholar, PNB Udaan ಮತ್ತು ಇತರ ಬ್ಯಾಂಕ್‌ಗಳು ವಿದೇಶ ಶಿಕ್ಷಣಕ್ಕೆ ಸಾಲ ನೀಡುತ್ತವೆ. ₹7.5 ಲಕ್ಷಕ್ಕಿಂತ ಹೆಚ್ಚಿಗೆ ಸಾಮಾನ್ಯವಾಗಿ ಅಡಮಾನ ಬೇಕು; 15% ಮಾರ್ಜಿನ್ ನೀವು ಕಟ್ಟಬೇಕು.',
         loanBtn:'ಶಿಕ್ಷಣ ಸಾಲ ನೋಡಿ',
         safeH:'⚠️ ಸುರಕ್ಷಿತವಾಗಿರಿ', safe:['ವಿಶ್ವವಿದ್ಯಾಲಯದ ಅಧಿಕೃತ ಆಫರ್ ಪತ್ರ ಸಿಗುವ ಮೊದಲು ಏಜೆಂಟರಿಗೆ ದೊಡ್ಡ ಮೊತ್ತ ಕೊಡಬೇಡಿ.','ವಿಶ್ವವಿದ್ಯಾಲಯವನ್ನು NMC ಸೂಚನೆಗಳಲ್ಲಿ (MBBS) ಅಥವಾ ಅಧಿಕೃತ ಶ್ರೇಣಿಯಲ್ಲಿ ಪರಿಶೀಲಿಸಿ; ಭಾರತೀಯ ವಿದ್ಯಾರ್ಥಿಗಳ ಅನುಭವ ಓದಿ.','ಅರೆಕಾಲಿಕ ಕೆಲಸದ ನಿಯಮ ನೋಡಿ — ಶುಲ್ಕ ಕಟ್ಟಲು ಅರೆಕಾಲಿಕ ಕೆಲಸವನ್ನು ನಂಬಬೇಡಿ.','ಎಲ್ಲಾ ದಾಖಲೆಗಳ ಪ್ರತಿಗಳನ್ನು ಇಟ್ಟುಕೊಳ್ಳಿ; MADAD ಪೋರ್ಟಲ್ / ಭಾರತೀಯ ರಾಯಭಾರ ಕಚೇರಿಯಲ್ಲಿ ನೋಂದಾಯಿಸಿ.'],
         note:'ವೆಚ್ಚಗಳು ಜೀವನ ವೆಚ್ಚ ಸೇರಿದ ಅಂದಾಜು ಮೊತ್ತ, ಶುಲ್ಕ ಮತ್ತು ವಿನಿಮಯ ದರದೊಂದಿಗೆ ಪ್ರತಿ ವರ್ಷ ಬದಲಾಗುತ್ತವೆ. ನಿಯಮಗಳೂ ಬದಲಾಗುತ್ತವೆ: ನಿರ್ಧರಿಸುವ ಮೊದಲು NMC, ವಿಶ್ವವಿದ್ಯಾಲಯ ಮತ್ತು ರಾಯಭಾರ ಕಚೇರಿಯಲ್ಲಿ ದೃಢಪಡಿಸಿ.' },
    hi:{ btnT:'विदेश में पढ़ाई', btnS:'विदेश में MBBS और अन्य डिग्री: देश, खर्च, नियम, परीक्षा, स्कॉलरशिप और लोन',
         h:'✈️ विदेश में पढ़ाई', sub:'विदेश में पढ़ाई बड़ा फ़ैसला है। चुनने से पहले नियम, असली खर्च और जोखिम जान लें।',
         med:'🩺 विदेश में MBBS', oth:'🌍 अन्य डिग्री', rulesH:'📜 मानने ज़रूरी NMC नियम', cH:'🌏 लोकप्रिय देश',
         dur:'अवधि', cost:'कुल खर्च (अनुमान)', costY:'सालाना खर्च (अनुमान)', lang:'पढ़ाई की भाषा', exam:'परीक्षाएँ', intake:'प्रवेश सत्र', work:'पढ़ाई के बाद काम',
         stepsH:'🗓️ कदम और समय', steps:['कक्षा 11–12: कोर्स और देश तय करें; अंक ऊँचे रखें (ज़्यादातर यूनिवर्सिटी पीयू अंक देखती हैं)।','12–18 महीने पहले: यूनिवर्सिटी खोजें, मान्यता जाँचें (MBBS के लिए NMC / WDOMS, अन्य के लिए रैंकिंग)।','परीक्षाएँ दें: MBBS के लिए NEET; ज़रूरत हो तो IELTS/TOEFL और SAT।','मार्कशीट, पासपोर्ट, उद्देश्य पत्र और सिफ़ारिश पत्रों के साथ आवेदन करें।','ऑफ़र लेटर लें, पैसों का इंतज़ाम करें (स्कॉलरशिप + लोन) और वीज़ा के लिए फ़ंड दिखाएँ।','स्टूडेंट वीज़ा के लिए आवेदन करें, यात्रा बुक करें और पहुँचकर भारतीय दूतावास में रजिस्टर करें।'],
         exH:'📝 ज़रूरी हो सकने वाली परीक्षाएँ', schH:'🎓 विदेश पढ़ाई के लिए स्कॉलरशिप', loanH:'🏦 विदेश पढ़ाई के लिए लोन',
         loan:'SBI Global Ed-Vantage, बैंक ऑफ़ बड़ौदा Baroda Scholar, PNB Udaan और अन्य बैंक विदेश पढ़ाई के लिए लोन देते हैं। ₹7.5 लाख से ऊपर आमतौर पर गिरवी चाहिए; 15% मार्जिन आपको भरना होता है।',
         loanBtn:'एजुकेशन लोन देखें',
         safeH:'⚠️ सुरक्षित रहें', safe:['यूनिवर्सिटी का आधिकारिक ऑफ़र लेटर मिलने से पहले एजेंट को बड़ी रकम न दें।','यूनिवर्सिटी को NMC सूचनाओं (MBBS) या आधिकारिक रैंकिंग में जाँचें; भारतीय छात्रों के अनुभव पढ़ें।','पार्ट-टाइम काम के नियम देखें — फ़ीस भरने के लिए पार्ट-टाइम काम पर भरोसा न करें।','सभी दस्तावेज़ों की कॉपी रखें; MADAD पोर्टल / भारतीय दूतावास में रजिस्टर करें।'],
         note:'खर्च रहने सहित अनुमानित कुल राशि है, जो फ़ीस और विनिमय दर के साथ हर साल बदलती है। नियम भी बदलते हैं: फ़ैसले से पहले NMC, यूनिवर्सिटी और दूतावास से पक्का करें।' }
  }
};
