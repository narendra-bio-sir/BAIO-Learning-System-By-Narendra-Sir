/* Top colleges & seats (careers.html). Seat numbers are approximate first-year intakes for 2025-26 from the NMC / MCC /
   JoSAA / KEA seat matrices as reported in Nov 2026; where sources differ a range or "≈" is shown. NIRF = NIRF 2025 rank.
   t: type key (ini = Institute of National Importance, cg = central govt, sg = state govt, pv = private, dm = deemed / private university)
   k: 1 = in Karnataka. Text fields that need translation are {en, kn, hi}; college names stay in English. */
window.TOP_COLLEGES = {
  med: {
    stats: [
      { n:'≈ 1,24,000', l:{en:'MBBS seats in India (2025-26)', kn:'ಭಾರತದಲ್ಲಿ MBBS ಸೀಟುಗಳು (2025-26)', hi:'भारत में MBBS सीटें (2025-26)'},
        s:{en:'Govt ≈ 62,800 · Private ≈ 61,900', kn:'ಸರ್ಕಾರಿ ≈ 62,800 · ಖಾಸಗಿ ≈ 61,900', hi:'सरकारी ≈ 62,800 · निजी ≈ 61,900'} },
      { n:'≈ 2,250', l:{en:'MBBS seats in 20 AIIMS', kn:'20 AIIMS ಗಳಲ್ಲಿ MBBS ಸೀಟುಗಳು', hi:'20 AIIMS में MBBS सीटें'},
        s:{en:'All through NEET · MCC counselling', kn:'ಎಲ್ಲವೂ NEET ಮೂಲಕ · MCC ಕೌನ್ಸೆಲಿಂಗ್', hi:'सब NEET से · MCC काउंसलिंग'} },
      { n:'≈ 11,000+', l:{en:'MBBS seats in Karnataka', kn:'ಕರ್ನಾಟಕದಲ್ಲಿ MBBS ಸೀಟುಗಳು', hi:'कर्नाटक में MBBS सीटें'},
        s:{en:'Govt ≈ 3,800 · rest private & deemed', kn:'ಸರ್ಕಾರಿ ≈ 3,800 · ಉಳಿದವು ಖಾಸಗಿ ಮತ್ತು ಡೀಮ್ಡ್', hi:'सरकारी ≈ 3,800 · बाकी निजी व डीम्ड'} },
      { n:'≈ 9,100', l:{en:'Karnataka seats through KEA', kn:'KEA ಮೂಲಕ ಕರ್ನಾಟಕ ಸೀಟುಗಳು', hi:'KEA से कर्नाटक की सीटें'},
        s:{en:'State quota (85% of govt + private quota)', kn:'ರಾಜ್ಯ ಕೋಟಾ (ಸರ್ಕಾರಿ 85% + ಖಾಸಗಿ ಕೋಟಾ)', hi:'राज्य कोटा (सरकारी 85% + निजी कोटा)'} }
    ],
    groups: [
      { id:'nat', t:{en:'🇮🇳 Top in India (NIRF 2025)', kn:'🇮🇳 ಭಾರತದ ಉನ್ನತ ಕಾಲೇಜುಗಳು (NIRF 2025)', hi:'🇮🇳 भारत के शीर्ष (NIRF 2025)'}, list:[
        { n:'AIIMS New Delhi', c:'Delhi', t:'ini', s:'132', r:1, x:'NEET · MCC' },
        { n:'PGIMER Chandigarh', c:'Chandigarh', t:'ini', s:'PG only', r:2, x:'No MBBS', note:{en:'Postgraduate institute: a goal after MBBS (NEET-PG / INI-CET).', kn:'ಸ್ನಾತಕೋತ್ತರ ಸಂಸ್ಥೆ: MBBS ನಂತರದ ಗುರಿ (NEET-PG / INI-CET).', hi:'पोस्टग्रेजुएट संस्थान: MBBS के बाद का लक्ष्य (NEET-PG / INI-CET)।'} },
        { n:'Christian Medical College (CMC) Vellore', c:'Tamil Nadu', t:'pv', s:'100', r:3, x:'NEET · CMC process' },
        { n:'JIPMER Puducherry', c:'Puducherry', t:'ini', s:'≈ 243', r:4, x:'NEET · MCC', note:{en:'Puducherry + Karaikal campuses.', kn:'ಪುದುಚೇರಿ + ಕಾರೈಕಲ್ ಕ್ಯಾಂಪಸ್‌ಗಳು.', hi:'पुदुचेरी + कराईकल कैंपस।'} },
        { n:'Institute of Medical Sciences, BHU', c:'Varanasi', t:'cg', s:'≈ 100', r:6, x:'NEET · MCC' },
        { n:"King George's Medical University (KGMU)", c:'Lucknow', t:'sg', s:'≈ 250', r:'Top 10', x:'NEET · UP + MCC' },
        { n:'Kasturba Medical College (KMC) Manipal', c:'Karnataka', t:'dm', s:'250', r:10, k:1, x:'NEET · MCC (deemed)' }
      ]},
      { id:'gov', t:{en:'🏛️ Top government colleges', kn:'🏛️ ಉನ್ನತ ಸರ್ಕಾರಿ ಕಾಲೇಜುಗಳು', hi:'🏛️ शीर्ष सरकारी कॉलेज'}, list:[
        { n:'Maulana Azad Medical College (MAMC)', c:'Delhi', t:'sg', s:'250', x:'NEET · MCC + Delhi' },
        { n:'VMMC & Safdarjung Hospital', c:'Delhi', t:'cg', s:'170', x:'NEET · MCC' },
        { n:'University College of Medical Sciences (UCMS)', c:'Delhi', t:'sg', s:'170', x:'NEET · MCC + Delhi' },
        { n:'Lady Hardinge Medical College', c:'Delhi', t:'cg', s:'240', x:'NEET · MCC', note:{en:'Only for girls.', kn:'ವಿದ್ಯಾರ್ಥಿನಿಯರಿಗೆ ಮಾತ್ರ.', hi:'केवल छात्राओं के लिए।'} },
        { n:'Armed Forces Medical College (AFMC)', c:'Pune', t:'cg', s:'150', x:'NEET + AFMC test', note:{en:'Free study; you serve in the Armed Forces after MBBS.', kn:'ಉಚಿತ ಶಿಕ್ಷಣ; MBBS ನಂತರ ಸಶಸ್ತ್ರ ಪಡೆಗಳಲ್ಲಿ ಸೇವೆ.', hi:'मुफ़्त पढ़ाई; MBBS के बाद सशस्त्र बलों में सेवा।'} },
        { n:'Grant Government Medical College', c:'Mumbai', t:'sg', s:'≈ 250', x:'NEET · MCC + Maharashtra' }
      ]},
      { id:'ka', t:{en:'📍 Top in Karnataka', kn:'📍 ಕರ್ನಾಟಕದ ಉನ್ನತ ಕಾಲೇಜುಗಳು', hi:'📍 कर्नाटक के शीर्ष'}, list:[
        { n:'Bangalore Medical College & Research Institute (BMCRI)', c:'Bengaluru', t:'sg', s:'250', k:1, x:'NEET · KEA + MCC', note:{en:'Most sought-after govt college in Karnataka (KEA closing rank ≈ 1,300 in 2025).', kn:'ಕರ್ನಾಟಕದ ಅತ್ಯಂತ ಬೇಡಿಕೆಯ ಸರ್ಕಾರಿ ಕಾಲೇಜು (2025 KEA ಕೊನೆಯ ರ‍್ಯಾಂಕ್ ≈ 1,300).', hi:'कर्नाटक का सबसे ज़्यादा माँग वाला सरकारी कॉलेज (2025 KEA क्लोज़िंग रैंक ≈ 1,300)।'} },
        { n:'Mysore Medical College & Research Institute', c:'Mysuru', t:'sg', s:'150–200', k:1, x:'NEET · KEA + MCC' },
        { n:'Karnataka Institute of Medical Sciences (KIMS)', c:'Hubballi', t:'sg', s:'≈ 200', k:1, x:'NEET · KEA + MCC' },
        { n:"St John's Medical College", c:'Bengaluru', t:'pv', s:'150', k:1, x:'NEET · KEA (minority)' },
        { n:'JSS Medical College', c:'Mysuru', t:'dm', s:'250', k:1, x:'NEET · MCC (deemed)' },
        { n:'MS Ramaiah Medical College', c:'Bengaluru', t:'pv', s:'150–200', k:1, x:'NEET · KEA' },
        { n:'Kasturba Medical College (KMC) Mangaluru', c:'Mangaluru', t:'dm', s:'150–250', k:1, x:'NEET · MCC (deemed)' },
        { n:'Vydehi Institute of Medical Sciences', c:'Bengaluru', t:'pv', s:'250', k:1, x:'NEET · KEA' }
      ]}
    ]
  },
  eng: {
    stats: [
      { n:'62,853', l:{en:'JoSAA seats 2025 (IIT + NIT + IIIT + GFTI)', kn:'JoSAA ಸೀಟುಗಳು 2025 (IIT + NIT + IIIT + GFTI)', hi:'JoSAA सीटें 2025 (IIT + NIT + IIIT + GFTI)'},
        s:{en:'All through JEE (Main / Advanced)', kn:'ಎಲ್ಲವೂ JEE (Main / Advanced) ಮೂಲಕ', hi:'सब JEE (Main / Advanced) से'} },
      { n:'≈ 18,160', l:{en:'Seats in 23 IITs', kn:'23 IIT ಗಳಲ್ಲಿ ಸೀಟುಗಳು', hi:'23 IIT में सीटें'}, s:{en:'JEE Advanced rank', kn:'JEE Advanced ರ‍್ಯಾಂಕ್', hi:'JEE Advanced रैंक'} },
      { n:'≈ 24,525', l:{en:'Seats in 31 NITs', kn:'31 NIT ಗಳಲ್ಲಿ ಸೀಟುಗಳು', hi:'31 NIT में सीटें'}, s:{en:'JEE Main rank · IIIT ≈ 9,940 · GFTI ≈ 10,230', kn:'JEE Main ರ‍್ಯಾಂಕ್ · IIIT ≈ 9,940 · GFTI ≈ 10,230', hi:'JEE Main रैंक · IIIT ≈ 9,940 · GFTI ≈ 10,230'} },
      { n:'≈ 1,51,000', l:{en:'Engineering seats in Karnataka (245 colleges)', kn:'ಕರ್ನಾಟಕದಲ್ಲಿ ಎಂಜಿನಿಯರಿಂಗ್ ಸೀಟುಗಳು (245 ಕಾಲೇಜು)', hi:'कर्नाटक में इंजीनियरिंग सीटें (245 कॉलेज)'},
        s:{en:'KCET govt quota ≈ 71,300 · COMEDK ≈ 31,700', kn:'KCET ಸರ್ಕಾರಿ ಕೋಟಾ ≈ 71,300 · COMEDK ≈ 31,700', hi:'KCET सरकारी कोटा ≈ 71,300 · COMEDK ≈ 31,700'} }
    ],
    groups: [
      { id:'iit', t:{en:'🏛️ IITs (JEE Advanced)', kn:'🏛️ IIT ಗಳು (JEE Advanced)', hi:'🏛️ IIT (JEE Advanced)'}, list:[
        { n:'IIT Madras', c:'Chennai', t:'ini', s:'≈ 1,125', r:1, x:'JEE Adv · JoSAA' },
        { n:'IIT Delhi', c:'Delhi', t:'ini', s:'≈ 1,210–1,240', r:2, x:'JEE Adv · JoSAA' },
        { n:'IIT Bombay', c:'Mumbai', t:'ini', s:'≈ 1,360', r:3, x:'JEE Adv · JoSAA' },
        { n:'IIT Kanpur', c:'Uttar Pradesh', t:'ini', s:'≈ 1,210', r:'Top 10', x:'JEE Adv · JoSAA' },
        { n:'IIT Kharagpur', c:'West Bengal', t:'ini', s:'≈ 1,900', r:'Top 10', x:'JEE Adv · JoSAA', note:{en:'The largest IIT by seats.', kn:'ಸೀಟುಗಳಲ್ಲಿ ಅತಿ ದೊಡ್ಡ IIT.', hi:'सीटों के हिसाब से सबसे बड़ा IIT।'} },
        { n:'IIT Hyderabad', c:'Telangana', t:'ini', s:'≈ 630', r:'Top 10', x:'JEE Adv · JoSAA' },
        { n:'IIT (BHU) Varanasi', c:'Uttar Pradesh', t:'ini', s:'≈ 1,590', r:10, x:'JEE Adv · JoSAA' },
        { n:'IIT Roorkee', c:'Uttarakhand', t:'ini', s:'≈ 1,350', x:'JEE Adv · JoSAA' },
        { n:'IIT Guwahati', c:'Assam', t:'ini', s:'≈ 960', x:'JEE Adv · JoSAA' },
        { n:'IIT Dharwad', c:'Karnataka', t:'ini', s:'≈ 385', k:1, x:'JEE Adv · JoSAA', note:{en:'The IIT in Karnataka.', kn:'ಕರ್ನಾಟಕದ IIT.', hi:'कर्नाटक का IIT।'} }
      ]},
      { id:'nit', t:{en:'🏫 Top NITs (JEE Main)', kn:'🏫 ಉನ್ನತ NIT ಗಳು (JEE Main)', hi:'🏫 शीर्ष NIT (JEE Main)'}, list:[
        { n:'NIT Tiruchirappalli', c:'Tamil Nadu', t:'ini', s:'≈ 930–1,040', r:9, x:'JEE Main · JoSAA' },
        { n:'NITK Surathkal', c:'Karnataka', t:'ini', s:'≈ 950', k:1, x:'JEE Main · JoSAA', note:{en:'The NIT in Karnataka (home-state quota for Karnataka students).', kn:'ಕರ್ನಾಟಕದ NIT (ಕರ್ನಾಟಕ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಗೃಹ-ರಾಜ್ಯ ಕೋಟಾ).', hi:'कर्नाटक का NIT (कर्नाटक के छात्रों के लिए होम-स्टेट कोटा)।'} },
        { n:'NIT Warangal', c:'Telangana', t:'ini', s:'≈ 990', x:'JEE Main · JoSAA' },
        { n:'NIT Calicut', c:'Kerala', t:'ini', s:'≈ 900', x:'JEE Main · JoSAA' }
      ]},
      { id:'pvt', t:{en:'⭐ Top private & deemed', kn:'⭐ ಉನ್ನತ ಖಾಸಗಿ ಮತ್ತು ಡೀಮ್ಡ್', hi:'⭐ शीर्ष निजी व डीम्ड'}, list:[
        { n:'BITS Pilani (Pilani · Goa · Hyderabad)', c:'Rajasthan · Goa · Telangana', t:'dm', s:'≈ 2,970', x:'BITSAT', note:{en:'Pilani ≈ 1,040 · Goa ≈ 850 · Hyderabad ≈ 1,080.', kn:'ಪಿಲಾನಿ ≈ 1,040 · ಗೋವಾ ≈ 850 · ಹೈದರಾಬಾದ್ ≈ 1,080.', hi:'पिलानी ≈ 1,040 · गोवा ≈ 850 · हैदराबाद ≈ 1,080।'} },
        { n:'Manipal Institute of Technology (MIT)', c:'Manipal, Karnataka', t:'dm', s:'≈ 2,500–2,700', k:1, x:'MET', note:{en:'Computer Science alone has about 1,020 seats.', kn:'ಕಂಪ್ಯೂಟರ್ ಸೈನ್ಸ್ ಒಂದರಲ್ಲೇ ಸುಮಾರು 1,020 ಸೀಟುಗಳು.', hi:'अकेले कंप्यूटर साइंस में लगभग 1,020 सीटें।'} }
      ]},
      { id:'ka', t:{en:'📍 Top in Karnataka (KCET / COMEDK)', kn:'📍 ಕರ್ನಾಟಕದ ಉನ್ನತ ಕಾಲೇಜುಗಳು (KCET / COMEDK)', hi:'📍 कर्नाटक के शीर्ष (KCET / COMEDK)'}, list:[
        { n:'RV College of Engineering (RVCE)', c:'Bengaluru', t:'pv', s:'≈ 1,000+', k:1, x:'KCET · COMEDK' },
        { n:'BMS College of Engineering', c:'Bengaluru', t:'pv', s:'≈ 1,600', k:1, x:'KCET · COMEDK' },
        { n:'PES University', c:'Bengaluru', t:'dm', s:'≈ 1,650', k:1, x:'KCET · PESSAT' }
      ]}
    ]
  },
  types: { ini:{en:'National Importance', kn:'ರಾಷ್ಟ್ರೀಯ ಪ್ರಾಮುಖ್ಯ', hi:'राष्ट्रीय महत्व'}, cg:{en:'Central Govt', kn:'ಕೇಂದ್ರ ಸರ್ಕಾರ', hi:'केंद्र सरकार'}, sg:{en:'State Govt', kn:'ರಾಜ್ಯ ಸರ್ಕಾರ', hi:'राज्य सरकार'}, pv:{en:'Private', kn:'ಖಾಸಗಿ', hi:'निजी'}, dm:{en:'Deemed / Pvt Univ', kn:'ಡೀಮ್ಡ್ / ಖಾಸಗಿ ವಿವಿ', hi:'डीम्ड / निजी विवि'} },
  ui: {
    en:{ btnT:'Top colleges & seats', btnS:'Top medical colleges, IITs, NITs, MIT & more, with seats in each college and in India',
         h:'🏛️ Top colleges & seats', sub:'Where the seats are, and which colleges are the best. Your rank decides the college, so aim high and keep a backup.',
         med:'🩺 Medical (NEET)', eng:'⚙️ Engineering (JEE / KCET)', all:'All', gov:'Government', pvt:'Private', ka:'Karnataka',
         seats:'seats', nirf:'NIRF', how:'Admission',
         tips:['A government MBBS seat costs a few lakh rupees in all; a private seat can cost ₹60 lakh–1 crore. Prepare to win a government seat.','Karnataka students get the state quota through KEA (85% of govt seats + private quota); the other 15% of govt seats and AIIMS / JIPMER / deemed seats are through MCC.','For engineering, JEE Main opens NITs, IIITs and GFTIs; JEE Advanced opens IITs. KCET and COMEDK open Karnataka colleges.'],
         note:'Seat numbers are approximate first-year intakes for 2025-26 and change every year. Where sources differ we show a range. Always check the official seat matrix (MCC, KEA, JoSAA, COMEDK) before counselling. Ranks: NIRF 2025.' },
    kn:{ btnT:'ಉನ್ನತ ಕಾಲೇಜುಗಳು ಮತ್ತು ಸೀಟುಗಳು', btnS:'ಉನ್ನತ ವೈದ್ಯಕೀಯ ಕಾಲೇಜುಗಳು, IIT, NIT, MIT ಇತ್ಯಾದಿ — ಪ್ರತಿ ಕಾಲೇಜು ಮತ್ತು ಭಾರತದ ಒಟ್ಟು ಸೀಟುಗಳೊಂದಿಗೆ',
         h:'🏛️ ಉನ್ನತ ಕಾಲೇಜುಗಳು ಮತ್ತು ಸೀಟುಗಳು', sub:'ಸೀಟುಗಳು ಎಲ್ಲಿವೆ, ಯಾವ ಕಾಲೇಜುಗಳು ಉತ್ತಮ. ನಿಮ್ಮ ರ‍್ಯಾಂಕ್ ಕಾಲೇಜನ್ನು ನಿರ್ಧರಿಸುತ್ತದೆ — ಎತ್ತರದ ಗುರಿ ಇಡಿ, ಒಂದು ಬ್ಯಾಕಪ್ ಇಟ್ಟುಕೊಳ್ಳಿ.',
         med:'🩺 ವೈದ್ಯಕೀಯ (NEET)', eng:'⚙️ ಎಂಜಿನಿಯರಿಂಗ್ (JEE / KCET)', all:'ಎಲ್ಲಾ', gov:'ಸರ್ಕಾರಿ', pvt:'ಖಾಸಗಿ', ka:'ಕರ್ನಾಟಕ',
         seats:'ಸೀಟುಗಳು', nirf:'NIRF', how:'ಪ್ರವೇಶ',
         tips:['ಸರ್ಕಾರಿ MBBS ಸೀಟಿಗೆ ಒಟ್ಟು ಕೆಲವು ಲಕ್ಷ ರೂಪಾಯಿ; ಖಾಸಗಿ ಸೀಟಿಗೆ ₹60 ಲಕ್ಷ–1 ಕೋಟಿ ಆಗಬಹುದು. ಸರ್ಕಾರಿ ಸೀಟು ಗೆಲ್ಲಲು ತಯಾರಾಗಿ.','ಕರ್ನಾಟಕ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ KEA ಮೂಲಕ ರಾಜ್ಯ ಕೋಟಾ (ಸರ್ಕಾರಿ ಸೀಟುಗಳ 85% + ಖಾಸಗಿ ಕೋಟಾ); ಉಳಿದ 15% ಸರ್ಕಾರಿ ಸೀಟು ಮತ್ತು AIIMS / JIPMER / ಡೀಮ್ಡ್ ಸೀಟುಗಳು MCC ಮೂಲಕ.','ಎಂಜಿನಿಯರಿಂಗ್‌ಗೆ JEE Main ನಿಂದ NIT, IIIT, GFTI; JEE Advanced ನಿಂದ IIT. KCET ಮತ್ತು COMEDK ನಿಂದ ಕರ್ನಾಟಕದ ಕಾಲೇಜುಗಳು.'],
         note:'ಸೀಟು ಸಂಖ್ಯೆಗಳು 2025-26 ರ ಅಂದಾಜು ಪ್ರಥಮ ವರ್ಷದ ಪ್ರವೇಶ, ಪ್ರತಿ ವರ್ಷ ಬದಲಾಗುತ್ತವೆ. ಮೂಲಗಳು ಬೇರೆಯಾದಲ್ಲಿ ವ್ಯಾಪ್ತಿ ತೋರಿಸಲಾಗಿದೆ. ಕೌನ್ಸೆಲಿಂಗ್ ಮೊದಲು ಅಧಿಕೃತ ಸೀಟ್ ಮ್ಯಾಟ್ರಿಕ್ಸ್ (MCC, KEA, JoSAA, COMEDK) ನೋಡಿ. ಶ್ರೇಣಿ: NIRF 2025.' },
    hi:{ btnT:'शीर्ष कॉलेज और सीटें', btnS:'शीर्ष मेडिकल कॉलेज, IIT, NIT, MIT आदि — हर कॉलेज और पूरे भारत की सीटों के साथ',
         h:'🏛️ शीर्ष कॉलेज और सीटें', sub:'सीटें कहाँ हैं और कौन-से कॉलेज सबसे अच्छे हैं। आपकी रैंक कॉलेज तय करती है — ऊँचा लक्ष्य रखें और एक बैकअप रखें।',
         med:'🩺 मेडिकल (NEET)', eng:'⚙️ इंजीनियरिंग (JEE / KCET)', all:'सभी', gov:'सरकारी', pvt:'निजी', ka:'कर्नाटक',
         seats:'सीटें', nirf:'NIRF', how:'प्रवेश',
         tips:['सरकारी MBBS सीट का कुल खर्च कुछ लाख रुपये है; निजी सीट ₹60 लाख–1 करोड़ तक हो सकती है। सरकारी सीट जीतने की तैयारी करें।','कर्नाटक के छात्रों को KEA से राज्य कोटा मिलता है (सरकारी सीटों का 85% + निजी कोटा); बाकी 15% सरकारी सीटें और AIIMS / JIPMER / डीम्ड सीटें MCC से।','इंजीनियरिंग में JEE Main से NIT, IIIT, GFTI; JEE Advanced से IIT। KCET और COMEDK से कर्नाटक के कॉलेज।'],
         note:'सीटों की संख्या 2025-26 का अनुमानित प्रथम-वर्ष प्रवेश है और हर साल बदलती है। स्रोतों में अंतर होने पर रेंज दिखाई गई है। काउंसलिंग से पहले आधिकारिक सीट मैट्रिक्स (MCC, KEA, JoSAA, COMEDK) ज़रूर देखें। रैंक: NIRF 2025।' }
  }
};
