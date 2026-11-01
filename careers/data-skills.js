/* "Skills" stream for careers.html: diplomas, certificates and skill courses. Extends window.CAREERS.
   Groups/careers/exams carry st:'skills'. Fees and pay are approximate. Checked Nov 2026:
   DGCA Remote Pilot Certificate (age 18+, 10th pass, DGCA-approved RPTO), SWAYAM/NPTEL free courses
   with a paid proctored exam for the certificate, Skill India Digital Hub / PMKVY free training. */
(function(){
  var D = window.CAREERS; if(!D || !D.streams) return;
  D.streams.push({ id:'skills', ic:'🛠️', t:{en:'Skills', kn:'ಕೌಶಲ್ಯ', hi:'स्किल्स'}, s:{en:'Diplomas, certificates…', kn:'ಡಿಪ್ಲೊಮಾ, ಪ್ರಮಾಣಪತ್ರ…', hi:'डिप्लोमा, सर्टिफ़िकेट…'} });
  [].push.apply(D.groups, [
    { id:'hdip', st:'skills', ic:'🏥', t:{en:'Health & pharmacy diplomas', kn:'ಆರೋಗ್ಯ ಮತ್ತು ಫಾರ್ಮಸಿ ಡಿಪ್ಲೊಮಾ', hi:'हेल्थ और फ़ार्मेसी डिप्लोमा'}, s:{en:'D.Pharm, lab, X-ray, OT technician', kn:'D.Pharm, ಲ್ಯಾಬ್, X-ray, OT ತಂತ್ರಜ್ಞ', hi:'D.Pharm, लैब, X-ray, OT तकनीशियन'} },
    { id:'digi', st:'skills', ic:'💻', t:{en:'Digital & IT skills', kn:'ಡಿಜಿಟಲ್ ಮತ್ತು IT ಕೌಶಲ್ಯ', hi:'डिजिटल और IT स्किल्स'}, s:{en:'Coding, data, design, marketing, Tally', kn:'ಕೋಡಿಂಗ್, ಡೇಟಾ, ವಿನ್ಯಾಸ, ಮಾರ್ಕೆಟಿಂಗ್, Tally', hi:'कोडिंग, डेटा, डिज़ाइन, मार्केटिंग, Tally'} },
    { id:'tech', st:'skills', ic:'🔧', t:{en:'Technical & trade skills', kn:'ತಾಂತ್ರಿಕ ಮತ್ತು ವೃತ್ತಿ ಕೌಶಲ್ಯ', hi:'तकनीकी और ट्रेड स्किल्स'}, s:{en:'Drone pilot, EV & solar, electronics repair', kn:'ಡ್ರೋನ್ ಪೈಲಟ್, EV ಮತ್ತು ಸೋಲಾರ್, ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ದುರಸ್ತಿ', hi:'ड्रोन पायलट, EV और सोलर, इलेक्ट्रॉनिक्स रिपेयर'} },
    { id:'free', st:'skills', ic:'🎓', t:{en:'Free govt courses & languages', kn:'ಉಚಿತ ಸರ್ಕಾರಿ ಕೋರ್ಸ್ ಮತ್ತು ಭಾಷೆ', hi:'मुफ़्त सरकारी कोर्स और भाषाएँ'}, s:{en:'SWAYAM, NPTEL, Skill India, English, German', kn:'SWAYAM, NPTEL, ಸ್ಕಿಲ್ ಇಂಡಿಯಾ, ಇಂಗ್ಲಿಷ್, ಜರ್ಮನ್', hi:'SWAYAM, NPTEL, स्किल इंडिया, अंग्रेज़ी, जर्मन'} }
  ]);
  var SHORT = {en:'Weeks to a few months', kn:'ಕೆಲವು ವಾರಗಳಿಂದ ತಿಂಗಳುಗಳು', hi:'कुछ हफ़्तों से कुछ महीने'};
  var ANY = {en:'PU pass (any stream); some need only 10th', kn:'ಪಿಯುಸಿ ಉತ್ತೀರ್ಣ (ಯಾವುದೇ ವಿಭಾಗ); ಕೆಲವಕ್ಕೆ 10ನೇ ತರಗತಿ ಸಾಕು', hi:'पीयूसी पास (कोई भी स्ट्रीम); कुछ के लिए 10वीं काफ़ी'};
  var ALONG = {en:'Do it alongside your degree, in holidays or right after PU', kn:'ಪದವಿಯ ಜೊತೆ, ರಜೆಯಲ್ಲಿ ಅಥವಾ ಪಿಯು ನಂತರ ತಕ್ಷಣ ಮಾಡಿ', hi:'डिग्री के साथ, छुट्टियों में या पीयू के तुरंत बाद करें'};
  [].push.apply(D.list, [
    { id:'dpharm', g:'hdip', ic:'💊', name:'D.Pharm (Diploma in Pharmacy)', t:['chem','quick','patient'],
      sub:{en:'Registered pharmacist: run a medical shop', kn:'ನೋಂದಾಯಿತ ಫಾರ್ಮಸಿಸ್ಟ್: ಮೆಡಿಕಲ್ ಶಾಪ್ ನಡೆಸಿ', hi:'रजिस्टर्ड फ़ार्मासिस्ट: मेडिकल शॉप चलाएँ'},
      dur:{en:'2 years + practical training', kn:'2 ವರ್ಷ + ಪ್ರಾಯೋಗಿಕ ತರಬೇತಿ', hi:'2 साल + प्रैक्टिकल ट्रेनिंग'},
      what:{en:'Medicines, dispensing, drug storage and pharmacy law. Lets you register as a pharmacist.', kn:'ಔಷಧಿಗಳು, ವಿತರಣೆ, ಸಂಗ್ರಹಣೆ, ಫಾರ್ಮಸಿ ಕಾನೂನು. ಫಾರ್ಮಸಿಸ್ಟ್ ಆಗಿ ನೋಂದಾಯಿಸಬಹುದು.', hi:'दवाएँ, डिस्पेंसिंग, भंडारण और फ़ार्मेसी क़ानून। फ़ार्मासिस्ट के रूप में रजिस्टर हो सकते हैं।'},
      exam:{en:'Admission on PU marks (check the Karnataka notice each year)', kn:'ಪಿಯು ಅಂಕಗಳ ಮೇಲೆ ಪ್ರವೇಶ (ಪ್ರತಿ ವರ್ಷ ಕರ್ನಾಟಕ ಸೂಚನೆ ನೋಡಿ)', hi:'पीयू अंकों पर प्रवेश (हर साल कर्नाटक सूचना देखें)'},
      elig:{en:'PU with Physics, Chemistry and Biology or Maths', kn:'ಭೌತ, ರಸಾಯನ ಮತ್ತು ಜೀವಶಾಸ್ತ್ರ ಅಥವಾ ಗಣಿತ', hi:'भौतिकी, रसायन और जीवविज्ञान या गणित'},
      fee:{en:'Low to moderate', kn:'ಕಡಿಮೆಯಿಂದ ಮಧ್ಯಮ', hi:'कम से मध्यम'},
      pay:{en:'About ₹12,000–25,000/month; own shop can earn more', kn:'ಸುಮಾರು ₹12,000–25,000/ತಿಂಗಳು; ಸ್ವಂತ ಅಂಗಡಿಯಲ್ಲಿ ಹೆಚ್ಚು', hi:'लगभग ₹12,000–25,000/माह; अपनी दुकान में ज़्यादा'},
      scope:{en:'Medical shops, hospital pharmacy, own business; can later join B.Pharm (lateral entry).', kn:'ಮೆಡಿಕಲ್ ಶಾಪ್, ಆಸ್ಪತ್ರೆ ಫಾರ್ಮಸಿ, ಸ್ವಂತ ವ್ಯವಹಾರ; ನಂತರ B.Pharm (ಲ್ಯಾಟರಲ್).', hi:'मेडिकल शॉप, अस्पताल फ़ार्मेसी, अपना व्यवसाय; बाद में B.Pharm (लेटरल एंट्री)।'} },
    { id:'coding', g:'digi', ic:'👩‍💻', name:'Coding & AI certificates', t:['code','quick','tech'],
      sub:{en:'Python, web development, AI tools', kn:'ಪೈಥಾನ್, ವೆಬ್ ಅಭಿವೃದ್ಧಿ, AI ಉಪಕರಣಗಳು', hi:'पायथन, वेब डेवलपमेंट, AI टूल्स'},
      dur:SHORT,
      what:{en:'Learn to build websites and apps and use AI tools; build a small portfolio of projects.', kn:'ವೆಬ್‌ಸೈಟ್, ಆ್ಯಪ್ ನಿರ್ಮಾಣ ಮತ್ತು AI ಬಳಕೆ ಕಲಿಯಿರಿ; ಸಣ್ಣ ಪ್ರಾಜೆಕ್ಟ್ ಸಂಗ್ರಹ ಮಾಡಿ.', hi:'वेबसाइट और ऐप बनाना, AI टूल्स चलाना सीखें; छोटे प्रोजेक्ट्स का पोर्टफ़ोलियो बनाएँ।'},
      exam:{en:'No entrance: free courses on SWAYAM/NPTEL, Google, Microsoft and freeCodeCamp', kn:'ಪ್ರವೇಶ ಪರೀಕ್ಷೆ ಇಲ್ಲ: SWAYAM/NPTEL, Google, Microsoft, freeCodeCamp ನಲ್ಲಿ ಉಚಿತ', hi:'कोई प्रवेश नहीं: SWAYAM/NPTEL, Google, Microsoft, freeCodeCamp पर मुफ़्त'},
      elig:ANY, fee:{en:'Many are free; certificate exams cost a little', kn:'ಹಲವು ಉಚಿತ; ಪ್ರಮಾಣಪತ್ರ ಪರೀಕ್ಷೆಗೆ ಸ್ವಲ್ಪ ಶುಲ್ಕ', hi:'कई मुफ़्त; सर्टिफ़िकेट परीक्षा का थोड़ा शुल्क'},
      pay:{en:'Internships and freelance work while studying; helps every career', kn:'ಓದುವಾಗಲೇ ಇಂಟರ್ನ್‌ಶಿಪ್ ಮತ್ತು ಫ್ರೀಲ್ಯಾನ್ಸ್; ಎಲ್ಲಾ ವೃತ್ತಿಗೆ ಸಹಾಯಕ', hi:'पढ़ाई के साथ इंटर्नशिप और फ़्रीलांस; हर करियर में मदद'},
      scope:{en:ALONG.en+'. Even doctors and biologists use coding today (bioinformatics).', kn:ALONG.kn+'. ಇಂದು ವೈದ್ಯರು, ಜೀವಶಾಸ್ತ್ರಜ್ಞರೂ ಕೋಡಿಂಗ್ ಬಳಸುತ್ತಾರೆ.', hi:ALONG.hi+'। आज डॉक्टर और जीवविज्ञानी भी कोडिंग करते हैं।'} },
    { id:'data', g:'digi', ic:'📊', name:'Data analytics', t:['code','money','tech'],
      sub:{en:'Excel, SQL, Python, Power BI', kn:'Excel, SQL, ಪೈಥಾನ್, Power BI', hi:'Excel, SQL, पायथन, Power BI'},
      dur:{en:'3–6 months', kn:'3–6 ತಿಂಗಳು', hi:'3–6 महीने'},
      what:{en:'Clean data, make charts and dashboards, and find answers in numbers.', kn:'ಡೇಟಾ ಸ್ವಚ್ಛಗೊಳಿಸುವುದು, ಚಾರ್ಟ್-ಡ್ಯಾಶ್‌ಬೋರ್ಡ್, ಸಂಖ್ಯೆಗಳಲ್ಲಿ ಉತ್ತರ ಹುಡುಕುವುದು.', hi:'डेटा साफ़ करना, चार्ट और डैशबोर्ड बनाना, आँकड़ों में जवाब खोजना।'},
      exam:{en:'No entrance: online certificates (Google, Microsoft, NPTEL)', kn:'ಪ್ರವೇಶ ಇಲ್ಲ: ಆನ್‌ಲೈನ್ ಪ್ರಮಾಣಪತ್ರ (Google, Microsoft, NPTEL)', hi:'कोई प्रवेश नहीं: ऑनलाइन सर्टिफ़िकेट (Google, Microsoft, NPTEL)'},
      elig:ANY, fee:{en:'Free to moderate', kn:'ಉಚಿತದಿಂದ ಮಧ್ಯಮ', hi:'मुफ़्त से मध्यम'},
      pay:{en:'Junior analyst about ₹3–5 lakh/yr (with a degree)', kn:'ಜೂನಿಯರ್ ವಿಶ್ಲೇಷಕ ಸುಮಾರು ₹3–5 ಲಕ್ಷ/ವರ್ಷ (ಪದವಿ ಸಹಿತ)', hi:'जूनियर एनालिस्ट लगभग ₹3–5 लाख/साल (डिग्री के साथ)'},
      scope:{en:'Every company needs data skills: banks, hospitals, retail, IT.', kn:'ಪ್ರತಿ ಕಂಪನಿಗೆ ಡೇಟಾ ಕೌಶಲ್ಯ ಬೇಕು: ಬ್ಯಾಂಕ್, ಆಸ್ಪತ್ರೆ, ಚಿಲ್ಲರೆ, IT.', hi:'हर कंपनी को डेटा स्किल चाहिए: बैंक, अस्पताल, रिटेल, IT।'} },
    { id:'dmkt', g:'digi', ic:'📣', name:'Digital marketing & social media', t:['create','money','people'],
      sub:{en:'SEO, ads, Instagram/YouTube growth', kn:'SEO, ಜಾಹೀರಾತು, Instagram/YouTube ಬೆಳವಣಿಗೆ', hi:'SEO, विज्ञापन, Instagram/YouTube ग्रोथ'},
      dur:{en:'1–4 months', kn:'1–4 ತಿಂಗಳು', hi:'1–4 महीने'},
      what:{en:'Grow brands online: content planning, ads, analytics and influencer marketing.', kn:'ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಬ್ರ್ಯಾಂಡ್ ಬೆಳೆಸುವುದು: ಕಂಟೆಂಟ್ ಯೋಜನೆ, ಜಾಹೀರಾತು, ವಿಶ್ಲೇಷಣೆ.', hi:'ब्रांड को ऑनलाइन बढ़ाना: कंटेंट प्लानिंग, विज्ञापन, एनालिटिक्स।'},
      exam:{en:'No entrance: free Google and Meta certificates, institute courses', kn:'ಪ್ರವೇಶ ಇಲ್ಲ: ಉಚಿತ Google, Meta ಪ್ರಮಾಣಪತ್ರ, ಸಂಸ್ಥೆ ಕೋರ್ಸ್', hi:'कोई प्रवेश नहीं: मुफ़्त Google, Meta सर्टिफ़िकेट, संस्थान कोर्स'},
      elig:ANY, fee:{en:'Free to moderate', kn:'ಉಚಿತದಿಂದ ಮಧ್ಯಮ', hi:'मुफ़्त से मध्यम'},
      pay:{en:'About ₹15,000–30,000/month to start; freelancing possible', kn:'ಆರಂಭ ಸುಮಾರು ₹15,000–30,000/ತಿಂಗಳು; ಫ್ರೀಲ್ಯಾನ್ಸ್ ಸಾಧ್ಯ', hi:'शुरुआत लगभग ₹15,000–30,000/माह; फ़्रीलांसिंग संभव'},
      scope:{en:'Agencies, shops and clinics going online, your own channel.', kn:'ಏಜೆನ್ಸಿ, ಆನ್‌ಲೈನ್‌ಗೆ ಬರುವ ಅಂಗಡಿ-ಕ್ಲಿನಿಕ್, ಸ್ವಂತ ಚಾನೆಲ್.', hi:'एजेंसियाँ, ऑनलाइन आने वाली दुकानें-क्लिनिक, अपना चैनल।'} },
    { id:'gdes', g:'digi', ic:'🎨', name:'Graphic design & video editing', t:['create','quick','code'],
      sub:{en:'Canva, Photoshop, Premiere, CapCut', kn:'Canva, Photoshop, Premiere, CapCut', hi:'Canva, Photoshop, Premiere, CapCut'},
      dur:{en:'1–6 months', kn:'1–6 ತಿಂಗಳು', hi:'1–6 महीने'},
      what:{en:'Posters, social media posts, reels, thumbnails and short videos.', kn:'ಪೋಸ್ಟರ್, ಸಾಮಾಜಿಕ ಮಾಧ್ಯಮ ಪೋಸ್ಟ್, ರೀಲ್ಸ್, ಥಂಬ್‌ನೇಲ್, ಕಿರು ವಿಡಿಯೋ.', hi:'पोस्टर, सोशल मीडिया पोस्ट, रील्स, थंबनेल और छोटे वीडियो।'},
      exam:{en:'No entrance: online or institute courses', kn:'ಪ್ರವೇಶ ಇಲ್ಲ: ಆನ್‌ಲೈನ್ ಅಥವಾ ಸಂಸ್ಥೆ ಕೋರ್ಸ್', hi:'कोई प्रवेश नहीं: ऑनलाइन या संस्थान कोर्स'},
      elig:ANY, fee:{en:'Free to moderate', kn:'ಉಚಿತದಿಂದ ಮಧ್ಯಮ', hi:'मुफ़्त से मध्यम'},
      pay:{en:'Freelance per project; editors and designers are in demand', kn:'ಪ್ರತಿ ಪ್ರಾಜೆಕ್ಟ್‌ಗೆ ಫ್ರೀಲ್ಯಾನ್ಸ್; ಎಡಿಟರ್-ವಿನ್ಯಾಸಕರಿಗೆ ಬೇಡಿಕೆ', hi:'प्रोजेक्ट के हिसाब से फ़्रीलांस; एडिटर और डिज़ाइनर की माँग'},
      scope:{en:'Creators, agencies, coaching centres and businesses all need them.', kn:'ಕ್ರಿಯೇಟರ್, ಏಜೆನ್ಸಿ, ಕೋಚಿಂಗ್ ಕೇಂದ್ರ, ವ್ಯವಹಾರಗಳಿಗೆ ಬೇಕು.', hi:'क्रिएटर, एजेंसियाँ, कोचिंग सेंटर और व्यवसाय सबको चाहिए।'} },
    { id:'tally', g:'digi', ic:'🧾', name:'Tally, GST & office skills', t:['money','quick'],
      sub:{en:'Accounting software, GST filing, MS Office', kn:'ಲೆಕ್ಕಪತ್ರ ಸಾಫ್ಟ್‌ವೇರ್, GST, MS Office', hi:'अकाउंटिंग सॉफ़्टवेयर, GST, MS Office'},
      dur:{en:'2–4 months', kn:'2–4 ತಿಂಗಳು', hi:'2–4 महीने'},
      what:{en:'Bookkeeping in Tally, GST returns, Excel and office work.', kn:'Tally ಯಲ್ಲಿ ಲೆಕ್ಕಪತ್ರ, GST ರಿಟರ್ನ್, Excel, ಕಚೇರಿ ಕೆಲಸ.', hi:'Tally में हिसाब-किताब, GST रिटर्न, Excel और ऑफ़िस का काम।'},
      exam:{en:'No entrance: local institutes, Tally Education certificates', kn:'ಪ್ರವೇಶ ಇಲ್ಲ: ಸ್ಥಳೀಯ ಸಂಸ್ಥೆಗಳು, Tally ಪ್ರಮಾಣಪತ್ರ', hi:'कोई प्रवेश नहीं: स्थानीय संस्थान, Tally सर्टिफ़िकेट'},
      elig:ANY, fee:{en:'Low', kn:'ಕಡಿಮೆ', hi:'कम'},
      pay:{en:'About ₹12,000–25,000/month to start', kn:'ಆರಂಭ ಸುಮಾರು ₹12,000–25,000/ತಿಂಗಳು', hi:'शुरुआत लगभग ₹12,000–25,000/माह'},
      scope:{en:'Every shop, hospital and office needs an accounts person; good with a BCom.', kn:'ಪ್ರತಿ ಅಂಗಡಿ, ಆಸ್ಪತ್ರೆ, ಕಚೇರಿಗೆ ಲೆಕ್ಕಪತ್ರ ವ್ಯಕ್ತಿ ಬೇಕು; BCom ಜೊತೆ ಉತ್ತಮ.', hi:'हर दुकान, अस्पताल, ऑफ़िस को अकाउंट्स वाला चाहिए; BCom के साथ अच्छा।'} },
    { id:'drone', g:'tech', ic:'🚁', name:'Drone pilot (DGCA certificate)', t:['fly','tech','quick'],
      sub:{en:'Remote Pilot Certificate for farming, survey, filming', kn:'ಕೃಷಿ, ಸರ್ವೆ, ಚಿತ್ರೀಕರಣಕ್ಕೆ ರಿಮೋಟ್ ಪೈಲಟ್ ಪ್ರಮಾಣಪತ್ರ', hi:'खेती, सर्वे, फ़िल्मिंग के लिए रिमोट पायलट सर्टिफ़िकेट'},
      dur:{en:'About 1–2 weeks of training', kn:'ಸುಮಾರು 1–2 ವಾರ ತರಬೇತಿ', hi:'लगभग 1–2 हफ़्ते की ट्रेनिंग'},
      what:{en:'Fly drones safely and legally: rules, flying practice and a DGCA test.', kn:'ಡ್ರೋನ್ ಸುರಕ್ಷಿತ ಮತ್ತು ಕಾನೂನುಬದ್ಧವಾಗಿ ಹಾರಿಸುವುದು: ನಿಯಮ, ಅಭ್ಯಾಸ, DGCA ಪರೀಕ್ಷೆ.', hi:'ड्रोन सुरक्षित और क़ानूनी तरीके से उड़ाना: नियम, अभ्यास और DGCA टेस्ट।'},
      exam:{en:'Training at a DGCA-approved Remote Pilot Training Organisation', kn:'DGCA ಅನುಮೋದಿತ ರಿಮೋಟ್ ಪೈಲಟ್ ತರಬೇತಿ ಸಂಸ್ಥೆಯಲ್ಲಿ', hi:'DGCA-मान्य रिमोट पायलट ट्रेनिंग संस्थान में'},
      elig:{en:'Age 18+, 10th pass', kn:'ವಯಸ್ಸು 18+, 10ನೇ ತರಗತಿ ಉತ್ತೀರ್ಣ', hi:'आयु 18+, 10वीं पास'},
      fee:{en:'Moderate (approx. tens of thousands)', kn:'ಮಧ್ಯಮ (ಅಂದಾಜು ಹತ್ತಾರು ಸಾವಿರ)', hi:'मध्यम (अनुमानित दसियों हज़ार)'},
      pay:{en:'Per-job or monthly; agri-spraying and survey work are growing', kn:'ಪ್ರತಿ ಕೆಲಸ ಅಥವಾ ತಿಂಗಳ ಸಂಬಳ; ಕೃಷಿ ಸಿಂಪಡಣೆ, ಸರ್ವೆ ಬೆಳೆಯುತ್ತಿದೆ', hi:'काम के हिसाब से या मासिक; खेती में छिड़काव और सर्वे बढ़ रहे हैं'},
      scope:{en:'Agriculture spraying, land survey, mapping, film and wedding shoots, defence.', kn:'ಕೃಷಿ ಸಿಂಪಡಣೆ, ಭೂ ಸರ್ವೆ, ನಕ್ಷೆ, ಸಿನಿಮಾ-ಮದುವೆ ಚಿತ್ರೀಕರಣ, ರಕ್ಷಣೆ.', hi:'खेती में छिड़काव, भूमि सर्वे, मैपिंग, फ़िल्म-शादी शूट, रक्षा।'} },
    { id:'evtech', g:'tech', ic:'🔋', name:'EV, solar & electronics technician', t:['elec','build','quick'],
      sub:{en:'Electric vehicles, solar panels, phone/laptop repair, CCTV', kn:'ವಿದ್ಯುತ್ ವಾಹನ, ಸೋಲಾರ್, ಫೋನ್/ಲ್ಯಾಪ್‌ಟಾಪ್ ದುರಸ್ತಿ, CCTV', hi:'इलेक्ट्रिक वाहन, सोलर पैनल, फ़ोन/लैपटॉप रिपेयर, CCTV'},
      dur:{en:'3 months – 2 years (short course or ITI)', kn:'3 ತಿಂಗಳು – 2 ವರ್ಷ (ಕಿರು ಕೋರ್ಸ್ ಅಥವಾ ITI)', hi:'3 महीने – 2 साल (छोटा कोर्स या ITI)'},
      what:{en:'Install, test and repair electrical and electronic systems with hands-on practice.', kn:'ವಿದ್ಯುತ್-ಎಲೆಕ್ಟ್ರಾನಿಕ್ ವ್ಯವಸ್ಥೆಗಳ ಅಳವಡಿಕೆ, ಪರೀಕ್ಷೆ, ದುರಸ್ತಿ — ಕೈಯಾರೆ ಅಭ್ಯಾಸ.', hi:'बिजली-इलेक्ट्रॉनिक सिस्टम लगाना, जाँचना और ठीक करना — हाथों से अभ्यास।'},
      exam:{en:'ITI admission or Skill India / Kaushalya Karnataka training centres', kn:'ITI ಪ್ರವೇಶ ಅಥವಾ ಸ್ಕಿಲ್ ಇಂಡಿಯಾ / ಕೌಶಲ್ಯ ಕರ್ನಾಟಕ ತರಬೇತಿ ಕೇಂದ್ರ', hi:'ITI प्रवेश या स्किल इंडिया / कौशल्या कर्नाटक प्रशिक्षण केंद्र'},
      elig:ANY, fee:{en:'Govt centres: free or low', kn:'ಸರ್ಕಾರಿ ಕೇಂದ್ರ: ಉಚಿತ ಅಥವಾ ಕಡಿಮೆ', hi:'सरकारी केंद्र: मुफ़्त या कम'},
      pay:{en:'About ₹12,000–25,000/month to start; own service shop grows', kn:'ಆರಂಭ ಸುಮಾರು ₹12,000–25,000/ತಿಂಗಳು; ಸ್ವಂತ ಸೇವಾ ಅಂಗಡಿ ಬೆಳೆಯುತ್ತದೆ', hi:'शुरुआत लगभग ₹12,000–25,000/माह; अपनी सर्विस शॉप बढ़ती है'},
      scope:{en:'EV and solar are booming; steady local work and self-employment.', kn:'EV ಮತ್ತು ಸೋಲಾರ್ ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತಿವೆ; ಸ್ಥಳೀಯ ಕೆಲಸ ಮತ್ತು ಸ್ವಉದ್ಯೋಗ.', hi:'EV और सोलर तेज़ी से बढ़ रहे हैं; स्थानीय काम और स्वरोज़गार।'} },
    { id:'swayam', g:'free', ic:'🎓', name:'SWAYAM · NPTEL (free online courses)', t:['lab','code','long'],
      sub:{en:'Courses by IITs, IISc and top universities', kn:'IIT, IISc ಮತ್ತು ಉನ್ನತ ವಿವಿಗಳ ಕೋರ್ಸ್‌ಗಳು', hi:'IIT, IISc और शीर्ष विश्वविद्यालयों के कोर्स'},
      dur:{en:'4–12 weeks per course', kn:'ಪ್ರತಿ ಕೋರ್ಸ್ 4–12 ವಾರ', hi:'हर कोर्स 4–12 हफ़्ते'},
      what:{en:'Learn anything — biology, coding, maths, communication — from top professors, online.', kn:'ಉನ್ನತ ಪ್ರಾಧ್ಯಾಪಕರಿಂದ ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಏನನ್ನಾದರೂ ಕಲಿಯಿರಿ — ಜೀವಶಾಸ್ತ್ರ, ಕೋಡಿಂಗ್, ಗಣಿತ.', hi:'शीर्ष प्रोफ़ेसरों से ऑनलाइन कुछ भी सीखें — बायोलॉजी, कोडिंग, गणित।'},
      exam:{en:'Free to learn; a small fee for the proctored certificate exam', kn:'ಕಲಿಯುವುದು ಉಚಿತ; ಪ್ರಮಾಣಪತ್ರ ಪರೀಕ್ಷೆಗೆ ಸಣ್ಣ ಶುಲ್ಕ', hi:'सीखना मुफ़्त; सर्टिफ़िकेट परीक्षा का छोटा शुल्क'},
      elig:{en:'Anyone', kn:'ಯಾರಾದರೂ', hi:'कोई भी'},
      fee:{en:'Free (exam about ₹1,000)', kn:'ಉಚಿತ (ಪರೀಕ್ಷೆ ಸುಮಾರು ₹1,000)', hi:'मुफ़्त (परीक्षा लगभग ₹1,000)'},
      pay:{en:'Adds credits and certificates to your degree and résumé', kn:'ನಿಮ್ಮ ಪದವಿ ಮತ್ತು ಸ್ವವಿವರಕ್ಕೆ ಕ್ರೆಡಿಟ್, ಪ್ರಮಾಣಪತ್ರ', hi:'आपकी डिग्री और रिज़्यूमे में क्रेडिट और सर्टिफ़िकेट'},
      scope:{en:'Many universities accept SWAYAM credits; great for any student.', kn:'ಹಲವು ವಿವಿಗಳು SWAYAM ಕ್ರೆಡಿಟ್ ಸ್ವೀಕರಿಸುತ್ತವೆ; ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿಗೆ ಉತ್ತಮ.', hi:'कई विश्वविद्यालय SWAYAM क्रेडिट मानते हैं; हर छात्र के लिए बढ़िया।'} },
    { id:'skillind', g:'free', ic:'🇮🇳', name:'Skill India · Kaushalya Karnataka', t:['quick','build','people'],
      sub:{en:'Free govt skill training with certificates', kn:'ಪ್ರಮಾಣಪತ್ರ ಸಹಿತ ಉಚಿತ ಸರ್ಕಾರಿ ಕೌಶಲ್ಯ ತರಬೇತಿ', hi:'सर्टिफ़िकेट के साथ मुफ़्त सरकारी स्किल ट्रेनिंग'},
      dur:SHORT,
      what:{en:'Short job-oriented courses: healthcare assistant, electrician, retail, IT, beauty and more.', kn:'ಉದ್ಯೋಗ ಆಧಾರಿತ ಕಿರು ಕೋರ್ಸ್: ಆರೋಗ್ಯ ಸಹಾಯಕ, ಎಲೆಕ್ಟ್ರಿಷಿಯನ್, ಚಿಲ್ಲರೆ, IT, ಸೌಂದರ್ಯ.', hi:'नौकरी वाले छोटे कोर्स: हेल्थकेयर असिस्टेंट, इलेक्ट्रीशियन, रिटेल, IT, ब्यूटी।'},
      exam:{en:'Register on Skill India Digital Hub or at a district skill centre', kn:'ಸ್ಕಿಲ್ ಇಂಡಿಯಾ ಡಿಜಿಟಲ್ ಹಬ್ ಅಥವಾ ಜಿಲ್ಲಾ ಕೌಶಲ್ಯ ಕೇಂದ್ರದಲ್ಲಿ ನೋಂದಾಯಿಸಿ', hi:'स्किल इंडिया डिजिटल हब या ज़िला कौशल केंद्र पर रजिस्टर करें'},
      elig:ANY, fee:{en:'Free (govt schemes)', kn:'ಉಚಿತ (ಸರ್ಕಾರಿ ಯೋಜನೆ)', hi:'मुफ़्त (सरकारी योजना)'},
      pay:{en:'Entry jobs and placement help after training', kn:'ತರಬೇತಿಯ ನಂತರ ಉದ್ಯೋಗ ಮತ್ತು ನೇಮಕಾತಿ ಸಹಾಯ', hi:'ट्रेनिंग के बाद नौकरी और प्लेसमेंट मदद'},
      scope:{en:'Good for earning early or adding a practical skill to your degree.', kn:'ಬೇಗ ಸಂಪಾದನೆಗೆ ಅಥವಾ ಪದವಿಗೆ ಪ್ರಾಯೋಗಿಕ ಕೌಶಲ್ಯ ಸೇರಿಸಲು ಉತ್ತಮ.', hi:'जल्दी कमाने या डिग्री के साथ प्रैक्टिकल स्किल जोड़ने के लिए अच्छा।'} },
    { id:'lang', g:'free', ic:'🗣️', name:'English & foreign languages', t:['people','travel','write'],
      sub:{en:'Spoken English, IELTS, German, Japanese', kn:'ಮಾತನಾಡುವ ಇಂಗ್ಲಿಷ್, IELTS, ಜರ್ಮನ್, ಜಪಾನೀಸ್', hi:'स्पोकन इंग्लिश, IELTS, जर्मन, जापानी'},
      dur:{en:'3 months – 1 year per level', kn:'ಪ್ರತಿ ಹಂತ 3 ತಿಂಗಳು – 1 ವರ್ಷ', hi:'हर लेवल 3 महीने – 1 साल'},
      what:{en:'Confident English opens every interview; German and Japanese open jobs abroad (nurses, technicians, engineers).', kn:'ಆತ್ಮವಿಶ್ವಾಸದ ಇಂಗ್ಲಿಷ್ ಪ್ರತಿ ಸಂದರ್ಶನಕ್ಕೆ ದಾರಿ; ಜರ್ಮನ್, ಜಪಾನೀಸ್ ವಿದೇಶಿ ಉದ್ಯೋಗಕ್ಕೆ ದಾರಿ.', hi:'आत्मविश्वास वाली अंग्रेज़ी हर इंटरव्यू खोलती है; जर्मन और जापानी विदेश में नौकरी।'},
      exam:{en:'Goethe (German), JLPT (Japanese), IELTS/PTE (English) certificates', kn:'Goethe (ಜರ್ಮನ್), JLPT (ಜಪಾನೀಸ್), IELTS/PTE (ಇಂಗ್ಲಿಷ್)', hi:'Goethe (जर्मन), JLPT (जापानी), IELTS/PTE (अंग्रेज़ी)'},
      elig:{en:'Anyone', kn:'ಯಾರಾದರೂ', hi:'कोई भी'},
      fee:{en:'Free apps to moderate institute fees', kn:'ಉಚಿತ ಆ್ಯಪ್‌ಗಳಿಂದ ಮಧ್ಯಮ ಶುಲ್ಕ', hi:'मुफ़्त ऐप से मध्यम शुल्क तक'},
      pay:{en:'Boosts pay in India and opens jobs abroad', kn:'ಭಾರತದಲ್ಲಿ ಸಂಬಳ ಹೆಚ್ಚಿಸುತ್ತದೆ, ವಿದೇಶಿ ಉದ್ಯೋಗ ತೆರೆಯುತ್ತದೆ', hi:'भारत में वेतन बढ़ाता है और विदेश में नौकरी खोलता है'},
      scope:{en:'Pairs perfectly with nursing, allied health or engineering.', kn:'ನರ್ಸಿಂಗ್, ಅಲೈಡ್ ಹೆಲ್ತ್, ಎಂಜಿನಿಯರಿಂಗ್ ಜೊತೆ ಅತ್ಯುತ್ತಮ.', hi:'नर्सिंग, एलाइड हेल्थ या इंजीनियरिंग के साथ बेहतरीन।'} }
  ]);
  var also = { para:['hdip'] };
  D.alsoIn = D.alsoIn || {};
  Object.keys(also).forEach(function(k){ D.alsoIn[k] = [].concat(D.alsoIn[k] || [], also[k]); });

  D.quizSkills = [
    { t:'code', q:{en:'I like computers and want to learn coding or AI.', kn:'ಕಂಪ್ಯೂಟರ್ ಇಷ್ಟ, ಕೋಡಿಂಗ್ ಅಥವಾ AI ಕಲಿಯಬೇಕು.', hi:'मुझे कंप्यूटर पसंद है, कोडिंग या AI सीखना है।'} },
    { t:'create', q:{en:'I enjoy making posters, reels or videos.', kn:'ಪೋಸ್ಟರ್, ರೀಲ್ಸ್ ಅಥವಾ ವಿಡಿಯೋ ಮಾಡುವುದು ಇಷ್ಟ.', hi:'मुझे पोस्टर, रील्स या वीडियो बनाना पसंद है।'} },
    { t:'money', q:{en:'Numbers, accounts or business interest me.', kn:'ಸಂಖ್ಯೆ, ಲೆಕ್ಕಪತ್ರ ಅಥವಾ ವ್ಯವಹಾರ ಆಸಕ್ತಿ.', hi:'आँकड़े, हिसाब या बिज़नेस में रुचि है।'} },
    { t:'elec', q:{en:'I like fixing gadgets and electrical things.', kn:'ಗ್ಯಾಜೆಟ್ ಮತ್ತು ವಿದ್ಯುತ್ ವಸ್ತುಗಳನ್ನು ಸರಿಪಡಿಸುವುದು ಇಷ್ಟ.', hi:'मुझे गैजेट और बिजली की चीज़ें ठीक करना पसंद है।'} },
    { t:'fly', q:{en:'Flying drones sounds exciting.', kn:'ಡ್ರೋನ್ ಹಾರಿಸುವುದು ರೋಮಾಂಚಕ.', hi:'ड्रोन उड़ाना रोमांचक लगता है।'} },
    { t:'chem', q:{en:'Medicines and pharmacy interest me.', kn:'ಔಷಧಿ ಮತ್ತು ಫಾರ್ಮಸಿ ಆಸಕ್ತಿ.', hi:'दवाएँ और फ़ार्मेसी में रुचि है।'} },
    { t:'travel', q:{en:'I would like to work abroad one day.', kn:'ಒಂದು ದಿನ ವಿದೇಶದಲ್ಲಿ ಕೆಲಸ ಮಾಡಬೇಕು.', hi:'मैं एक दिन विदेश में काम करना चाहता/चाहती हूँ।'} },
    { t:'people', q:{en:'I like talking to people and helping them.', kn:'ಜನರೊಂದಿಗೆ ಮಾತನಾಡಿ ಸಹಾಯ ಮಾಡುವುದು ಇಷ್ಟ.', hi:'मुझे लोगों से बात करना और मदद करना पसंद है।'} },
    { t:'quick', q:{en:'I need to start earning soon.', kn:'ಬೇಗ ಸಂಪಾದನೆ ಆರಂಭಿಸಬೇಕು.', hi:'मुझे जल्दी कमाना शुरू करना है।'} },
    { t:'lab', q:{en:'I want to keep learning new subjects online.', kn:'ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಹೊಸ ವಿಷಯ ಕಲಿಯುತ್ತಲೇ ಇರಬೇಕು.', hi:'मैं ऑनलाइन नए विषय सीखते रहना चाहता/चाहती हूँ।'} }
  ];
  [].push.apply(D.exams, [
    { st:'skills', n:'SWAYAM · NPTEL', by:'Govt of India', m:{en:'Jan and Jul semesters; exams at the end', kn:'ಜನವರಿ ಮತ್ತು ಜುಲೈ ಸೆಮಿಸ್ಟರ್; ಕೊನೆಯಲ್ಲಿ ಪರೀಕ್ಷೆ', hi:'जनवरी और जुलाई सेमेस्टर; अंत में परीक्षा'}, f:{en:'Free online courses with certificates', kn:'ಪ್ರಮಾಣಪತ್ರ ಸಹಿತ ಉಚಿತ ಆನ್‌ಲೈನ್ ಕೋರ್ಸ್', hi:'सर्टिफ़िकेट के साथ मुफ़्त ऑनलाइन कोर्स'} },
    { st:'skills', n:'Skill India Digital Hub', by:'MSDE', m:{en:'Open all year', kn:'ವರ್ಷವಿಡೀ ತೆರೆದಿದೆ', hi:'पूरे साल खुला'}, f:{en:'Free skill courses and govt training centres', kn:'ಉಚಿತ ಕೌಶಲ್ಯ ಕೋರ್ಸ್ ಮತ್ತು ಸರ್ಕಾರಿ ತರಬೇತಿ ಕೇಂದ್ರ', hi:'मुफ़्त स्किल कोर्स और सरकारी प्रशिक्षण केंद्र'} },
    { st:'skills', n:'ITI admissions', by:'Karnataka DET', m:{en:'Usually May–July', kn:'ಸಾಮಾನ್ಯವಾಗಿ ಮೇ–ಜುಲೈ', hi:'आम तौर पर मई–जुलाई'}, f:{en:'Electrician, electronics and other trades', kn:'ಎಲೆಕ್ಟ್ರಿಷಿಯನ್, ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಮತ್ತು ಇತರ ಟ್ರೇಡ್', hi:'इलेक्ट्रीशियन, इलेक्ट्रॉनिक्स और अन्य ट्रेड'} },
    { st:'skills', n:'D.Pharm · paramedical', by:'Karnataka', m:{en:'After PU results (June–August)', kn:'ಪಿಯು ಫಲಿತಾಂಶದ ನಂತರ (ಜೂನ್–ಆಗಸ್ಟ್)', hi:'पीयू परिणाम के बाद (जून–अगस्त)'}, f:{en:'Pharmacy and hospital technician diplomas', kn:'ಫಾರ್ಮಸಿ ಮತ್ತು ಆಸ್ಪತ್ರೆ ತಂತ್ರಜ್ಞ ಡಿಪ್ಲೊಮಾ', hi:'फ़ार्मेसी और अस्पताल तकनीशियन डिप्लोमा'} }
  ]);
})();
