/* Personalised career report for careers.html.
   The student enters roll number + report-card password; the matching record in
   careers/student-data.js (built from analytics.html) is found by sha256(ROLL|PASSWORD).
   Exposes window.CareerReport = { render(box, lang, go) }. */
(function(){
  var KEY = 'baio_career_me';
  var T = {
    en:{ h:'🎯 My personal career report', s:'Enter your roll number and report-card password to see where you stand in all your tests, which careers fit your results, and how BAIO can help.',
      roll:'Roll number', pass:'Report-card password', go:'Show my report', busy:'Checking…', bad:'Roll number or password does not match. Use the same password as your report card. Forgot it? Ask Narendra Sir.',
      nodata:'Your results could not be loaded. Please check your internet and try again.',
      hi:'Hi', puc:['','I PUC','II PUC'], out:'Not you? Sign out', print:'🖨️ Save as PDF', share:'📤 Share my report',
      stand:'📊 Where you stand', theory:'Board / theory tests', neet:'NEET mock tests', kpcb:'KCET (PCB) mock tests', kpcm:'KCET (PCM) mock tests', jee:'JEE mock tests',
      rank:function(r,n,l){ return 'Rank '+r+' of '+n+' in '+l; }, latest:function(l,s,m){ return 'Latest: '+l+' · '+s+'/'+m; },
      tests:function(n){ return n+' test'+(n===1?'':'s'); }, up:function(x){ return '↑ up '+x+' pts'; }, down:function(x){ return '↓ down '+x+' pts'; },
      noTest:'No test taken yet', subj:'📚 Subject strength (theory tests average)', strong:'Strongest', weak:'Needs most work',
      band:{ strong:'Strong', competitive:'Competitive', 'needs-work':'Needs work', 'high-risk':'High risk' },
      pband:['Top 10% of class','Top 25% of class','Top half of class','Bottom half of class'],
      sugg:'🧭 Careers that fit your results', open:'Open →',
      steps:'✅ What to do next', baio:'📱 How BAIO helps you reach your goal',
      note:'This report is a guide based on your class tests so far, not a final prediction. Hard work in the coming months can change everything. Talk to Narendra Sir before you decide.',
      sub:{PHY:'Physics',CHE:'Chemistry',BIO:'Biology',MAT:'Maths'} },
    kn:{ h:'🎯 ನನ್ನ ವೈಯಕ್ತಿಕ ವೃತ್ತಿ ವರದಿ', s:'ಎಲ್ಲಾ ಪರೀಕ್ಷೆಗಳಲ್ಲಿ ನೀವು ಎಲ್ಲಿದ್ದೀರಿ, ಯಾವ ವೃತ್ತಿಗಳು ನಿಮ್ಮ ಫಲಿತಾಂಶಕ್ಕೆ ಹೊಂದುತ್ತವೆ ಮತ್ತು BAIO ಹೇಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ ಎಂದು ನೋಡಲು ರೋಲ್ ಸಂಖ್ಯೆ ಮತ್ತು ರಿಪೋರ್ಟ್ ಕಾರ್ಡ್ ಪಾಸ್‌ವರ್ಡ್ ನಮೂದಿಸಿ.',
      roll:'ರೋಲ್ ಸಂಖ್ಯೆ', pass:'ರಿಪೋರ್ಟ್ ಕಾರ್ಡ್ ಪಾಸ್‌ವರ್ಡ್', go:'ನನ್ನ ವರದಿ ತೋರಿಸಿ', busy:'ಪರಿಶೀಲಿಸಲಾಗುತ್ತಿದೆ…', bad:'ರೋಲ್ ಸಂಖ್ಯೆ ಅಥವಾ ಪಾಸ್‌ವರ್ಡ್ ಹೊಂದುತ್ತಿಲ್ಲ. ರಿಪೋರ್ಟ್ ಕಾರ್ಡ್‌ನ ಅದೇ ಪಾಸ್‌ವರ್ಡ್ ಬಳಸಿ. ಮರೆತಿದ್ದರೆ ನರೇಂದ್ರ ಸರ್ ಅವರನ್ನು ಕೇಳಿ.',
      nodata:'ಫಲಿತಾಂಶ ಲೋಡ್ ಆಗಲಿಲ್ಲ. ಇಂಟರ್ನೆಟ್ ಪರಿಶೀಲಿಸಿ ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.',
      hi:'ನಮಸ್ಕಾರ', puc:['','ಪ್ರಥಮ ಪಿಯುಸಿ','ದ್ವಿತೀಯ ಪಿಯುಸಿ'], out:'ನೀವಲ್ಲವೇ? ಸೈನ್ ಔಟ್', print:'🖨️ PDF ಆಗಿ ಉಳಿಸಿ', share:'📤 ನನ್ನ ವರದಿ ಹಂಚಿಕೊಳ್ಳಿ',
      stand:'📊 ನೀವು ಎಲ್ಲಿದ್ದೀರಿ', theory:'ಬೋರ್ಡ್ / ಥಿಯರಿ ಪರೀಕ್ಷೆಗಳು', neet:'NEET ಮಾಕ್ ಟೆಸ್ಟ್‌ಗಳು', kpcb:'KCET (PCB) ಮಾಕ್ ಟೆಸ್ಟ್‌ಗಳು', kpcm:'KCET (PCM) ಮಾಕ್ ಟೆಸ್ಟ್‌ಗಳು', jee:'JEE ಮಾಕ್ ಟೆಸ್ಟ್‌ಗಳು',
      rank:function(r,n,l){ return l+' ನಲ್ಲಿ '+n+' ರಲ್ಲಿ '+r+'ನೇ ರ್‍ಯಾಂಕ್'; }, latest:function(l,s,m){ return 'ಇತ್ತೀಚಿನದು: '+l+' · '+s+'/'+m; },
      tests:function(n){ return n+' ಪರೀಕ್ಷೆ'; }, up:function(x){ return '↑ '+x+' ಅಂಕ ಏರಿಕೆ'; }, down:function(x){ return '↓ '+x+' ಅಂಕ ಇಳಿಕೆ'; },
      noTest:'ಇನ್ನೂ ಪರೀಕ್ಷೆ ಬರೆದಿಲ್ಲ', subj:'📚 ವಿಷಯವಾರು ಸಾಮರ್ಥ್ಯ (ಥಿಯರಿ ಪರೀಕ್ಷೆಗಳ ಸರಾಸರಿ)', strong:'ಅತ್ಯಂತ ಬಲ', weak:'ಹೆಚ್ಚು ಶ್ರಮ ಬೇಕು',
      band:{ strong:'ಬಲಿಷ್ಠ', competitive:'ಸ್ಪರ್ಧಾತ್ಮಕ', 'needs-work':'ಇನ್ನಷ್ಟು ಶ್ರಮ ಬೇಕು', 'high-risk':'ಅಪಾಯದ ಮಟ್ಟ' },
      pband:['ತರಗತಿಯ ಮೊದಲ 10%','ತರಗತಿಯ ಮೊದಲ 25%','ತರಗತಿಯ ಮೇಲಿನ ಅರ್ಧ','ತರಗತಿಯ ಕೆಳಗಿನ ಅರ್ಧ'],
      sugg:'🧭 ನಿಮ್ಮ ಫಲಿತಾಂಶಕ್ಕೆ ಹೊಂದುವ ವೃತ್ತಿಗಳು', open:'ತೆರೆಯಿರಿ →',
      steps:'✅ ಮುಂದೆ ಏನು ಮಾಡಬೇಕು', baio:'📱 ನಿಮ್ಮ ಗುರಿ ತಲುಪಲು BAIO ಹೇಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ',
      note:'ಈ ವರದಿ ಇದುವರೆಗಿನ ತರಗತಿ ಪರೀಕ್ಷೆಗಳ ಆಧಾರದ ಮಾರ್ಗದರ್ಶಿ, ಅಂತಿಮ ಭವಿಷ್ಯವಾಣಿ ಅಲ್ಲ. ಮುಂದಿನ ತಿಂಗಳುಗಳ ಶ್ರಮ ಎಲ್ಲವನ್ನೂ ಬದಲಾಯಿಸಬಹುದು. ನಿರ್ಧರಿಸುವ ಮೊದಲು ನರೇಂದ್ರ ಸರ್ ಜೊತೆ ಮಾತನಾಡಿ.',
      sub:{PHY:'ಭೌತಶಾಸ್ತ್ರ',CHE:'ರಸಾಯನಶಾಸ್ತ್ರ',BIO:'ಜೀವಶಾಸ್ತ್ರ',MAT:'ಗಣಿತ'} },
    hi:{ h:'🎯 मेरी पर्सनल करियर रिपोर्ट', s:'अपना रोल नंबर और रिपोर्ट कार्ड पासवर्ड डालें और देखें कि सभी टेस्ट में आप कहाँ हैं, कौन-से करियर आपके नतीजों के अनुसार सही हैं, और BAIO कैसे मदद करेगा।',
      roll:'रोल नंबर', pass:'रिपोर्ट कार्ड पासवर्ड', go:'मेरी रिपोर्ट दिखाएँ', busy:'जाँच हो रही है…', bad:'रोल नंबर या पासवर्ड मेल नहीं खाता। रिपोर्ट कार्ड वाला ही पासवर्ड डालें। भूल गए? नरेंद्र सर से पूछें।',
      nodata:'नतीजे लोड नहीं हुए। इंटरनेट जाँचें और फिर कोशिश करें।',
      hi:'नमस्ते', puc:['','प्रथम पीयूसी','द्वितीय पीयूसी'], out:'आप नहीं? साइन आउट', print:'🖨️ PDF सेव करें', share:'📤 मेरी रिपोर्ट शेयर करें',
      stand:'📊 आप कहाँ हैं', theory:'बोर्ड / थ्योरी टेस्ट', neet:'NEET मॉक टेस्ट', kpcb:'KCET (PCB) मॉक टेस्ट', kpcm:'KCET (PCM) मॉक टेस्ट', jee:'JEE मॉक टेस्ट',
      rank:function(r,n,l){ return l+' में '+n+' में से '+r+'वाँ रैंक'; }, latest:function(l,s,m){ return 'ताज़ा: '+l+' · '+s+'/'+m; },
      tests:function(n){ return n+' टेस्ट'; }, up:function(x){ return '↑ '+x+' अंक ऊपर'; }, down:function(x){ return '↓ '+x+' अंक नीचे'; },
      noTest:'अभी कोई टेस्ट नहीं दिया', subj:'📚 विषयवार ताक़त (थ्योरी टेस्ट का औसत)', strong:'सबसे मज़बूत', weak:'सबसे ज़्यादा मेहनत चाहिए',
      band:{ strong:'मज़बूत', competitive:'प्रतिस्पर्धी', 'needs-work':'और मेहनत चाहिए', 'high-risk':'जोखिम में' },
      pband:['क्लास के टॉप 10%','क्लास के टॉप 25%','क्लास का ऊपरी आधा','क्लास का निचला आधा'],
      sugg:'🧭 आपके नतीजों के अनुसार करियर', open:'खोलें →',
      steps:'✅ आगे क्या करें', baio:'📱 लक्ष्य तक पहुँचने में BAIO कैसे मदद करता है',
      note:'यह रिपोर्ट अब तक के क्लास टेस्ट पर आधारित एक मार्गदर्शन है, अंतिम भविष्यवाणी नहीं। आने वाले महीनों की मेहनत सब बदल सकती है। फ़ैसले से पहले नरेंद्र सर से बात करें।',
      sub:{PHY:'भौतिकी',CHE:'रसायन',BIO:'जीवविज्ञान',MAT:'गणित'} }
  };
  function bandOf(p){ return p >= 70 ? 'strong' : p >= 50 ? 'competitive' : p >= 30 ? 'needs-work' : 'high-risk'; }
  var BC = { strong:'#2F9E6B', competitive:'#C9A227', 'needs-work':'#E08A1E', 'high-risk':'#D0544B' };
  function pIdx(p){ return p >= 90 ? 0 : p >= 75 ? 1 : p >= 50 ? 2 : 3; }
  function esc(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;'); }
  function M(o, lang){ return typeof o === 'string' ? o : (o[lang] || o.en); }

  /* ---------- Career suggestions from results ---------- */
  /* PCM students: no Biology marks and no NEET mocks on file. */
  function pcmOnly(r){ var s = r.sub || {}; return s.BIO == null && !r.neet; }
  /* PCMB students (Biology + Maths) can choose their goal: medical (default) or engineering. */
  var GKEY = 'baio_career_goal', GOAL = {};
  try{ GOAL = JSON.parse(localStorage.getItem(GKEY) || '{}') || {}; }catch(e){ GOAL = {}; }
  function canEng(r){ var s = r.sub || {}; return !pcmOnly(r) && (s.MAT != null || !!r.kpcm || !!r.jee); }
  function keyOf(r){ return (DATA && me && DATA[me] === r) ? me : null; }
  function engGoal(r){ var k = keyOf(r); return canEng(r) && !!k && GOAL[k] === 'eng'; }
  function isPcm(r){ return pcmOnly(r) || engGoal(r); }
  var G = {
    en:{ l:'🎯 My goal', med:'🩺 Medical', eng:'⚙️ Engineering', note:'You study both Biology and Maths, so both doors are open. Choose your goal to see matching careers and steps.' },
    kn:{ l:'🎯 ನನ್ನ ಗುರಿ', med:'🩺 ವೈದ್ಯಕೀಯ', eng:'⚙️ ಎಂಜಿನಿಯರಿಂಗ್', note:'ನೀವು ಜೀವಶಾಸ್ತ್ರ ಮತ್ತು ಗಣಿತ ಎರಡನ್ನೂ ಓದುತ್ತಿದ್ದೀರಿ, ಎರಡೂ ದಾರಿ ತೆರೆದಿವೆ. ಹೊಂದುವ ವೃತ್ತಿ ಮತ್ತು ಹಂತಗಳನ್ನು ನೋಡಲು ನಿಮ್ಮ ಗುರಿ ಆಯ್ಕೆಮಾಡಿ.' },
    hi:{ l:'🎯 मेरा लक्ष्य', med:'🩺 मेडिकल', eng:'⚙️ इंजीनियरिंग', note:'आप बायोलॉजी और गणित दोनों पढ़ते हैं, इसलिए दोनों रास्ते खुले हैं। मेल खाते करियर और कदम देखने के लिए अपना लक्ष्य चुनें।' }
  };
  function goalHtml(r, lang){
    if(!canEng(r)) return '';
    var g = G[lang] || G.en, e = engGoal(r);
    return '<div class="goal"><b>'+g.l+'</b><div class="gseg"><button type="button" data-goal="med"'+(e ? '' : ' class="on"')+'>'+g.med+'</button><button type="button" data-goal="eng"'+(e ? ' class="on"' : '')+'>'+g.eng+'</button></div><small>'+g.note+'</small></div>';
  }
  function suggestPcm(r, add, list){
    var s = r.sub || {}, mat = s.MAT, kp = r.kpcm ? r.kpcm.p : null, jee = r.jee ? r.jee.p : null, th = r.th ? r.th.p : null;
    if(jee != null && jee >= 50) add('iit', { en:'Your JEE mock scores are strong. Aim for JEE Advanced and the IITs.', kn:'ನಿಮ್ಮ JEE ಅಂಕಗಳು ಬಲಿಷ್ಠ. JEE Advanced ಮತ್ತು IIT ಗುರಿ ಇಡಿ.', hi:'आपके JEE अंक मज़बूत हैं। JEE Advanced और IIT का लक्ष्य रखें।' });
    if(jee != null && jee >= 25) add('nit', { en:'Keep improving in JEE Main: NITs and IIITs are a realistic target.', kn:'JEE Main ನಲ್ಲಿ ಸುಧಾರಿಸುತ್ತಿರಿ: NIT ಮತ್ತು IIT ವಾಸ್ತವಿಕ ಗುರಿ.', hi:'JEE Main में सुधार करते रहें: NIT और IIIT वास्तविक लक्ष्य हैं।' });
    if((kp != null && kp >= 55) || (mat != null && mat >= 75)) add('cse', { en:'Good KCET / Maths scores: Computer Science at a good Karnataka college is within reach.', kn:'ಉತ್ತಮ KCET / ಗಣಿತ ಅಂಕ: ಉತ್ತಮ ಕರ್ನಾಟಕ ಕಾಲೇಜಿನಲ್ಲಿ ಕಂಪ್ಯೂಟರ್ ಸೈನ್ಸ್ ಸಾಧ್ಯ.', hi:'अच्छे KCET / गणित अंक: अच्छे कर्नाटक कॉलेज में कंप्यूटर साइंस संभव।' });
    add('ece', { en:'Electronics and electrical jobs are growing fast (chips, EVs).', kn:'ಎಲೆಕ್ಟ್ರಾನಿಕ್ಸ್ ಮತ್ತು ವಿದ್ಯುತ್ ಉದ್ಯೋಗಗಳು ವೇಗವಾಗಿ ಬೆಳೆಯುತ್ತಿವೆ.', hi:'इलेक्ट्रॉनिक्स और इलेक्ट्रिकल नौकरियाँ तेज़ी से बढ़ रही हैं।' });
    if(kp == null || kp < 55) add('cse', { en:'Raise your KCET score and PU marks (each counts 50%) to get Computer Science.', kn:'ಕಂಪ್ಯೂಟರ್ ಸೈನ್ಸ್‌ಗಾಗಿ KCET ಅಂಕ ಮತ್ತು ಪಿಯು ಅಂಕ (ತಲಾ 50%) ಹೆಚ್ಚಿಸಿ.', hi:'कंप्यूटर साइंस के लिए KCET और पीयू अंक (दोनों 50%) बढ़ाएँ।' });
    add('mech', { en:'Mechanical / Civil have steady jobs and many govt engineer posts.', kn:'ಮೆಕ್ಯಾನಿಕಲ್ / ಸಿವಿಲ್: ಸ್ಥಿರ ಉದ್ಯೋಗ ಮತ್ತು ಸರ್ಕಾರಿ ಎಂಜಿನಿಯರ್ ಹುದ್ದೆಗಳು.', hi:'मैकेनिकल / सिविल: स्थिर नौकरियाँ और कई सरकारी इंजीनियर पद।' });
    if(th != null && th < 50) add('bscpcm', { en:'A strong backup: BSc / BCA on PU marks, then MSc or MCA.', kn:'ಉತ್ತಮ ಬ್ಯಾಕಪ್: ಪಿಯು ಅಂಕಗಳ ಮೇಲೆ BSc / BCA, ನಂತರ MSc ಅಥವಾ MCA.', hi:'मज़बूत बैकअप: पीयू अंकों पर BSc / BCA, फिर MSc या MCA।' });
    add('nda', { en:'If you like discipline and adventure, NDA is open to PCM students (all three services).', kn:'ಶಿಸ್ತು ಮತ್ತು ಸಾಹಸ ಇಷ್ಟವಾದರೆ, PCM ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ NDA (ಮೂರೂ ಪಡೆಗಳು).', hi:'अनुशासन और रोमांच पसंद हो तो PCM छात्रों के लिए NDA (तीनों सेनाएँ)।' });
    return list.slice(0, 5);
  }
  function suggest(r){
    var neet = r.neet ? r.neet.p : null, kp = r.kpcb ? r.kpcb.p : null, s = r.sub || {}, th = r.th ? r.th.p : null;
    var bio = s.BIO, mat = s.MAT, list = [];
    function add(id, why){ if(!list.some(function(x){ return x.id === id; })) list.push({ id:id, why:why }); }
    if(isPcm(r)){
      var L = suggestPcm(r, add, list);
      if(engGoal(r)){
        L = L.filter(function(x){ return x.id !== 'nda'; }).slice(0, 3);
        L.push({ id:'bme', why:{ en:'You know Biology and Maths: biomedical engineering joins medicine and machines.', kn:'ನಿಮಗೆ ಜೀವಶಾಸ್ತ್ರ ಮತ್ತು ಗಣಿತ ಎರಡೂ ಗೊತ್ತು: ಬಯೋಮೆಡಿಕಲ್ ಎಂಜಿನಿಯರಿಂಗ್ ವೈದ್ಯಕೀಯ ಮತ್ತು ಯಂತ್ರಗಳನ್ನು ಜೋಡಿಸುತ್ತದೆ.', hi:'आपको बायोलॉजी और गणित दोनों आते हैं: बायोमेडिकल इंजीनियरिंग चिकित्सा और मशीनों को जोड़ती है।' } });
        L.push({ id:'btbio', why:{ en:'Biotech engineering uses your Biology strength through KCET (PCM).', kn:'ಬಯೋಟೆಕ್ ಎಂಜಿನಿಯರಿಂಗ್ KCET (PCM) ಮೂಲಕ ನಿಮ್ಮ ಜೀವಶಾಸ್ತ್ರ ಶಕ್ತಿಯನ್ನು ಬಳಸುತ್ತದೆ.', hi:'बायोटेक इंजीनियरिंग KCET (PCM) के ज़रिए आपकी बायोलॉजी की ताक़त का उपयोग करती है।' } });
      }
      return L;
    }
    var sc = r.neet ? r.neet.sc : 0;
    if(neet != null && neet >= 70){
      add('mbbs', { en:'Your NEET mock scores are in the strong band ('+sc+'/720). A govt MBBS seat usually needs about 600+, so keep pushing your weakest subject.', kn:'ನಿಮ್ಮ NEET ಅಂಕಗಳು ಬಲಿಷ್ಠ ಮಟ್ಟದಲ್ಲಿವೆ ('+sc+'/720). ಸರ್ಕಾರಿ MBBS ಸೀಟಿಗೆ ಸಾಮಾನ್ಯವಾಗಿ ಸುಮಾರು 600+ ಬೇಕು; ದುರ್ಬಲ ವಿಷಯವನ್ನು ಇನ್ನಷ್ಟು ಸುಧಾರಿಸಿ.', hi:'आपके NEET अंक मज़बूत स्तर पर हैं ('+sc+'/720)। सरकारी MBBS सीट के लिए आमतौर पर लगभग 600+ चाहिए, कमज़ोर विषय पर और मेहनत करें।' });
      add('bds', { en:'Same NEET exam, a great second choice.', kn:'ಅದೇ NEET ಪರೀಕ್ಷೆ, ಉತ್ತಮ ಎರಡನೇ ಆಯ್ಕೆ.', hi:'वही NEET परीक्षा, बढ़िया दूसरा विकल्प।' });
      add('bvsc', { en:'Karnataka seats come through KCET: a good extra chance.', kn:'ಕರ್ನಾಟಕ ಸೀಟುಗಳು KCET ಮೂಲಕ: ಹೆಚ್ಚುವರಿ ಅವಕಾಶ.', hi:'कर्नाटक की सीटें KCET से: एक और मौका।' });
    } else if(neet != null && neet >= 50){
      add('bds', { en:'Your NEET mocks are in the competitive band ('+sc+'/720). BDS is a realistic NEET target.', kn:'ನಿಮ್ಮ NEET ಅಂಕ ಸ್ಪರ್ಧಾತ್ಮಕ ಮಟ್ಟದಲ್ಲಿದೆ ('+sc+'/720). BDS ವಾಸ್ತವಿಕ NEET ಗುರಿ.', hi:'आपके NEET अंक प्रतिस्पर्धी स्तर पर हैं ('+sc+'/720)। BDS एक वास्तविक NEET लक्ष्य है।' });
      add('ayush', { en:'A strong NEET option at your current level.', kn:'ನಿಮ್ಮ ಈಗಿನ ಮಟ್ಟಕ್ಕೆ ಉತ್ತಮ NEET ಆಯ್ಕೆ.', hi:'आपके मौजूदा स्तर पर अच्छा NEET विकल्प।' });
      add('mbbs', { en:'Stretch goal: a govt MBBS seat usually needs about 600+/720, so you need to add roughly '+Math.max(0, 600 - sc)+' marks. Possible with steady work.', kn:'ದೊಡ್ಡ ಗುರಿ: ಸರ್ಕಾರಿ MBBS ಗೆ ಸಾಮಾನ್ಯವಾಗಿ ಸುಮಾರು 600+/720 ಬೇಕು; ಇನ್ನೂ ಸುಮಾರು '+Math.max(0, 600 - sc)+' ಅಂಕ ಹೆಚ್ಚಿಸಬೇಕು. ನಿರಂತರ ಶ್ರಮದಿಂದ ಸಾಧ್ಯ.', hi:'बड़ा लक्ष्य: सरकारी MBBS के लिए आमतौर पर लगभग 600+/720 चाहिए, यानी लगभग '+Math.max(0, 600 - sc)+' अंक और बढ़ाने हैं। लगातार मेहनत से संभव।' });
      add('bvsc', { en:'Karnataka seats come through KCET, so it is a good extra chance.', kn:'ಕರ್ನಾಟಕ ಸೀಟುಗಳು KCET ಮೂಲಕ, ಹಾಗಾಗಿ ಹೆಚ್ಚುವರಿ ಅವಕಾಶ.', hi:'कर्नाटक की सीटें KCET से, इसलिए एक और अच्छा मौका।' });
    } else if(neet != null && neet >= 30){
      add('ayush', { en:'Reachable through NEET if you raise your score steadily.', kn:'NEET ಅಂಕವನ್ನು ಹಂತಹಂತವಾಗಿ ಹೆಚ್ಚಿಸಿದರೆ ಸಾಧ್ಯ.', hi:'NEET स्कोर धीरे-धीरे बढ़ाएँ तो संभव।' });
      add('nursing', { en:'Through KCET; huge job demand in India and abroad.', kn:'KCET ಮೂಲಕ; ಭಾರತ ಮತ್ತು ವಿದೇಶದಲ್ಲಿ ಭಾರಿ ಬೇಡಿಕೆ.', hi:'KCET से; भारत और विदेश में भारी माँग।' });
      add('bpharm', { en:'Through KCET; good if you like Chemistry and medicines.', kn:'KCET ಮೂಲಕ; ರಸಾಯನ ಮತ್ತು ಔಷಧಿ ಇಷ್ಟವಾದರೆ ಉತ್ತಮ.', hi:'KCET से; रसायन और दवाएँ पसंद हों तो अच्छा।' });
      add('bvsc', { en:'Through KCET in Karnataka.', kn:'ಕರ್ನಾಟಕದಲ್ಲಿ KCET ಮೂಲಕ.', hi:'कर्नाटक में KCET से।' });
    } else {
      add('nursing', { en:'Through KCET; a steady career with jobs everywhere.', kn:'KCET ಮೂಲಕ; ಎಲ್ಲೆಡೆ ಉದ್ಯೋಗವಿರುವ ಸ್ಥಿರ ವೃತ್ತಿ.', hi:'KCET से; हर जगह नौकरी वाला स्थिर करियर।' });
      add('ahs', { en:'Every hospital needs lab, imaging and OT experts.', kn:'ಪ್ರತಿ ಆಸ್ಪತ್ರೆಗೆ ಲ್ಯಾಬ್, ಇಮೇಜಿಂಗ್, OT ತಜ್ಞರು ಬೇಕು.', hi:'हर अस्पताल को लैब, इमेजिंग, OT विशेषज्ञ चाहिए।' });
      add('agri', { en:'Through KCET; good govt job options.', kn:'KCET ಮೂಲಕ; ಉತ್ತಮ ಸರ್ಕಾರಿ ಉದ್ಯೋಗ ಅವಕಾಶ.', hi:'KCET से; अच्छे सरकारी नौकरी विकल्प।' });
      add('bsc', { en:'Admission on PU marks; build towards MSc and a stable job.', kn:'ಪಿಯುಸಿ ಅಂಕಗಳ ಮೇಲೆ ಪ್ರವೇಶ; MSc ಮತ್ತು ಸ್ಥಿರ ಉದ್ಯೋಗದತ್ತ.', hi:'पीयूसी अंकों पर प्रवेश; MSc और स्थिर नौकरी की ओर।' });
    }
    if(kp != null && kp >= 50){
      add('bpharm', { en:'Your KCET (PCB) mock score is good, so KCET courses are in reach.', kn:'ನಿಮ್ಮ KCET (PCB) ಅಂಕ ಉತ್ತಮ, KCET ಕೋರ್ಸ್‌ಗಳು ಕೈಗೆಟುಕುತ್ತವೆ.', hi:'आपका KCET (PCB) स्कोर अच्छा है, KCET कोर्स पहुँच में हैं।' });
      add('agri', { en:'Good KCET score: agriculture universities are a solid option.', kn:'ಉತ್ತಮ KCET ಅಂಕ: ಕೃಷಿ ವಿವಿಗಳು ಉತ್ತಮ ಆಯ್ಕೆ.', hi:'अच्छा KCET स्कोर: कृषि विश्वविद्यालय अच्छा विकल्प।' });
    }
    if(bio != null && bio >= 75 && th != null && th >= 75) add('iiser', { en:'Strong Biology and top-quarter class rank: research is a great fit.', kn:'ಬಲಿಷ್ಠ ಜೀವಶಾಸ್ತ್ರ ಮತ್ತು ಉನ್ನತ ರ್‍ಯಾಂಕ್: ಸಂಶೋಧನೆ ಸೂಕ್ತ.', hi:'मज़बूत जीवविज्ञान और ऊँचा रैंक: रिसर्च अच्छा विकल्प।' });
    if((mat != null && mat >= 60) || (r.kpcm && r.kpcm.p >= 50)) add('btbio', { en:'You are good at Maths too, so biotech engineering is open to you.', kn:'ಗಣಿತದಲ್ಲೂ ಉತ್ತಮ, ಬಯೋಟೆಕ್ ಎಂಜಿನಿಯರಿಂಗ್ ನಿಮಗೆ ತೆರೆದಿದೆ.', hi:'गणित में भी अच्छे हैं, बायोटेक इंजीनियरिंग आपके लिए खुला है।' });
    if((r.kpcm && r.kpcm.p >= 55) || (mat != null && mat >= 80)) add('cse', { en:'Your Maths / KCET (PCM) scores also open Computer Science engineering.', kn:'ನಿಮ್ಮ ಗಣಿತ / KCET (PCM) ಅಂಕಗಳು ಕಂಪ್ಯೂಟರ್ ಸೈನ್ಸ್ ಎಂಜಿನಿಯರಿಂಗ್‌ಗೂ ದಾರಿ.', hi:'आपके गणित / KCET (PCM) अंक कंप्यूटर साइंस इंजीनियरिंग भी खोलते हैं।' });
    return list.slice(0, 5);
  }

  /* ---------- Next steps ---------- */
  function stepsPcm(r){
    var out = [], s = r.sub || {}, pu = r.pu;
    if(pu === 2) out.push({ en:'JEE Main is in January and April, KCET in April, boards from late February. Make a daily plan now (Exam Corner has your timetable).', kn:'JEE Main ಜನವರಿ ಮತ್ತು ಏಪ್ರಿಲ್‌ನಲ್ಲಿ, KCET ಏಪ್ರಿಲ್‌ನಲ್ಲಿ, ಬೋರ್ಡ್ ಫೆಬ್ರವರಿ ಕೊನೆಯಿಂದ. ಈಗಲೇ ದೈನಂದಿನ ಯೋಜನೆ ಮಾಡಿ.', hi:'JEE Main जनवरी और अप्रैल में, KCET अप्रैल में, बोर्ड फ़रवरी के अंत से। अभी से रोज़ की योजना बनाएँ।' });
    else out.push({ en:'You have about 1½ years before JEE and KCET. Build strong I PUC Maths and Physics basics now: they carry into II PUC.', kn:'JEE ಮತ್ತು KCET ಗೆ ಸುಮಾರು 1½ ವರ್ಷ ಇದೆ. ಈಗಲೇ ಪ್ರಥಮ ಪಿಯುಸಿ ಗಣಿತ ಮತ್ತು ಭೌತಶಾಸ್ತ್ರದ ತಳಹದಿ ಗಟ್ಟಿ ಮಾಡಿ.', hi:'JEE और KCET में लगभग 1½ साल हैं। अभी से प्रथम पीयूसी गणित और भौतिकी की नींव मज़बूत करें।' });
    var weak = ['PHY','CHE','MAT'].filter(function(k){ return s[k] != null; }).sort(function(a, b){ return s[a] - s[b]; })[0];
    if(weak && s[weak] < 70) out.push({ en:T.en.sub[weak]+' is your weakest subject ('+Math.round(s[weak])+'%). Practise 20 problems a day: PU marks are 50% of your KCET engineering rank.', kn:T.kn.sub[weak]+' ನಿಮ್ಮ ದುರ್ಬಲ ವಿಷಯ ('+Math.round(s[weak])+'%). ದಿನಕ್ಕೆ 20 ಸಮಸ್ಯೆ ಅಭ್ಯಾಸ ಮಾಡಿ: KCET ರ್‍ಯಾಂಕ್‌ನ 50% ಪಿಯು ಅಂಕಗಳಿಂದ.', hi:T.hi.sub[weak]+' आपका सबसे कमज़ोर विषय है ('+Math.round(s[weak])+'%)। रोज़ 20 सवाल हल करें: KCET रैंक का 50% पीयू अंकों से।' });
    if([r.th, r.kpcm, r.jee].some(function(x){ return x && x.tr != null && x.tr <= -5; })) out.push({ en:'Your recent scores have dropped. Revise the chapters of your last test and fix every mistake before the next one.', kn:'ಇತ್ತೀಚಿನ ಅಂಕಗಳು ಇಳಿದಿವೆ. ಕೊನೆಯ ಪರೀಕ್ಷೆಯ ಅಧ್ಯಾಯಗಳನ್ನು ಪುನರಾವರ್ತಿಸಿ, ತಪ್ಪುಗಳನ್ನು ಸರಿಪಡಿಸಿ.', hi:'हाल के अंक गिरे हैं। पिछले टेस्ट के अध्याय दोहराएँ और हर गलती सुधारें।' });
    if(!r.jee) out.push({ en:'Write the JEE mock tests in college too: JEE Main opens NITs and IIITs.', kn:'ಕಾಲೇಜಿನ JEE ಮಾಕ್ ಟೆಸ್ಟ್‌ಗಳನ್ನೂ ಬರೆಯಿರಿ: JEE Main ನಿಂದ NIT ಮತ್ತು IIIT.', hi:'कॉलेज के JEE मॉक टेस्ट भी दें: JEE Main से NIT और IIIT।' });
    out.push({ en:'Register for JEE Main, KCET and COMEDK so you have more than one door open.', kn:'ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ಅವಕಾಶಕ್ಕಾಗಿ JEE Main, KCET ಮತ್ತು COMEDK ಗೆ ನೋಂದಾಯಿಸಿ.', hi:'एक से ज़्यादा रास्ते खुले रखने के लिए JEE Main, KCET और COMEDK में रजिस्टर करें।' });
    return out;
  }
  function steps(r){
    if(isPcm(r)){
      var sp = stepsPcm(r);
      if(engGoal(r)) sp.unshift({ en:'For an engineering seat, your KCET rank uses PU Physics, Chemistry and Maths marks (50%) plus the CET PCM paper (50%). Keep scoring well in Biology too: it counts for your PU result, and NEET stays open as a backup.', kn:'ಎಂಜಿನಿಯರಿಂಗ್ ಸೀಟಿಗೆ KCET ರ‍್ಯಾಂಕ್ ಪಿಯು ಭೌತ, ರಸಾಯನ, ಗಣಿತ ಅಂಕ (50%) ಮತ್ತು CET PCM ಪತ್ರಿಕೆ (50%) ಬಳಸುತ್ತದೆ. ಜೀವಶಾಸ್ತ್ರದಲ್ಲೂ ಉತ್ತಮ ಅಂಕ ಪಡೆಯಿರಿ: ಅದು ಪಿಯು ಫಲಿತಾಂಶಕ್ಕೆ ಸೇರುತ್ತದೆ, NEET ಬ್ಯಾಕಪ್ ಆಗಿ ಉಳಿಯುತ್ತದೆ.', hi:'इंजीनियरिंग सीट के लिए KCET रैंक में पीयू भौतिकी, रसायन, गणित के अंक (50%) और CET PCM पेपर (50%) गिने जाते हैं। बायोलॉजी में भी अच्छे अंक लाएँ: वह पीयू परिणाम में गिनी जाती है, और NEET बैकअप के रूप में खुला रहता है।' });
      return sp;
    }
    var out = [], s = r.sub || {}, pu = r.pu;
    var weakT = Object.keys(s).filter(function(k){ return k !== 'MAT'; }).sort(function(a, b){ return s[a] - s[b]; })[0];
    var neetWeak = null;
    if(r.neet && r.neet.sub && r.neet.sub.length){
      neetWeak = r.neet.sub.map(function(x){ return [x[0], x[1] / x[2]]; }).sort(function(a, b){ return a[1] - b[1]; })[0][0];
    }
    var nm = { Phy:'PHY', Che:'CHE', Bio:'BIO', Mat:'MAT' };
    if(pu === 2) out.push({ en:'Board exam starts late February and NEET is in early May: about 6 months left. Fix a daily timetable now (Exam Corner has yours).', kn:'ಬೋರ್ಡ್ ಪರೀಕ್ಷೆ ಫೆಬ್ರವರಿ ಕೊನೆಯಲ್ಲಿ, NEET ಮೇ ಆರಂಭದಲ್ಲಿ: ಸುಮಾರು 6 ತಿಂಗಳು ಉಳಿದಿದೆ. ಈಗಲೇ ದೈನಂದಿನ ವೇಳಾಪಟ್ಟಿ ಮಾಡಿ (ಪರೀಕ್ಷಾ ಕಾರ್ನರ್‌ನಲ್ಲಿ ನಿಮ್ಮದು ಇದೆ).', hi:'बोर्ड परीक्षा फ़रवरी के अंत में और NEET मई की शुरुआत में: लगभग 6 महीने बचे हैं। अभी से रोज़ का टाइमटेबल बनाएँ (एग्ज़ाम कॉर्नर में आपका है)।' });
    else out.push({ en:'You have about 1½ years before NEET and KCET. Finish each I PUC chapter well now: almost half of NEET comes from I PUC.', kn:'NEET ಮತ್ತು KCET ಗೆ ಸುಮಾರು 1½ ವರ್ಷ ಇದೆ. ಪ್ರಥಮ ಪಿಯುಸಿ ಅಧ್ಯಾಯಗಳನ್ನು ಈಗಲೇ ಚೆನ್ನಾಗಿ ಮುಗಿಸಿ: NEET ನ ಸುಮಾರು ಅರ್ಧ ಪ್ರಥಮ ಪಿಯುಸಿಯಿಂದ.', hi:'NEET और KCET में लगभग 1½ साल हैं। प्रथम पीयूसी के अध्याय अभी अच्छे से पूरे करें: NEET का लगभग आधा प्रथम पीयूसी से आता है।' });
    if(neetWeak){
      var k = nm[neetWeak] || neetWeak;
      out.push({ en:'In NEET mocks, '+T.en.sub[k]+' is pulling your score down. Give it one extra hour daily and solve 30 MCQs a day.', kn:'NEET ಮಾಕ್‌ಗಳಲ್ಲಿ '+T.kn.sub[k]+' ನಿಮ್ಮ ಅಂಕ ಕಡಿಮೆ ಮಾಡುತ್ತಿದೆ. ದಿನಕ್ಕೆ ಒಂದು ಗಂಟೆ ಹೆಚ್ಚು ಕೊಟ್ಟು 30 MCQ ಬಿಡಿಸಿ.', hi:'NEET मॉक में '+T.hi.sub[k]+' आपका स्कोर घटा रहा है। रोज़ एक घंटा ज़्यादा दें और 30 MCQ हल करें।' });
    }
    if(weakT && s[weakT] < 60) out.push({ en:'In class tests, '+T.en.sub[weakT]+' is your weakest ('+Math.round(s[weakT])+'%). Board marks decide eligibility (50% in PCB for NEET courses), so revise its basics first.', kn:'ತರಗತಿ ಪರೀಕ್ಷೆಗಳಲ್ಲಿ '+T.kn.sub[weakT]+' ಅತ್ಯಂತ ದುರ್ಬಲ ('+Math.round(s[weakT])+'%). ಅರ್ಹತೆಗೆ ಬೋರ್ಡ್ ಅಂಕ ಮುಖ್ಯ (NEET ಕೋರ್ಸ್‌ಗಳಿಗೆ PCB ಯಲ್ಲಿ 50%), ಮೊದಲು ಮೂಲಾಂಶ ಪುನರಾವರ್ತಿಸಿ.', hi:'क्लास टेस्ट में '+T.hi.sub[weakT]+' सबसे कमज़ोर है ('+Math.round(s[weakT])+'%)। योग्यता के लिए बोर्ड अंक ज़रूरी हैं (NEET कोर्स के लिए PCB में 50%), पहले बेसिक्स दोहराएँ।' });
    var drop = [r.th, r.neet, r.kpcb].filter(function(x){ return x && x.tr != null && x.tr <= -5; }).length;
    if(drop) out.push({ en:'Your recent scores have dropped. Do not panic: go back to the chapters of your last test, fix the mistakes, and take the next test seriously.', kn:'ಇತ್ತೀಚಿನ ಅಂಕಗಳು ಇಳಿದಿವೆ. ಆತಂಕ ಬೇಡ: ಕೊನೆಯ ಪರೀಕ್ಷೆಯ ಅಧ್ಯಾಯಗಳಿಗೆ ಹಿಂತಿರುಗಿ, ತಪ್ಪುಗಳನ್ನು ಸರಿಪಡಿಸಿ, ಮುಂದಿನ ಪರೀಕ್ಷೆಯನ್ನು ಗಂಭೀರವಾಗಿ ಬರೆಯಿರಿ.', hi:'हाल के अंक गिरे हैं। घबराएँ नहीं: पिछले टेस्ट के अध्याय फिर पढ़ें, गलतियाँ सुधारें, और अगला टेस्ट गंभीरता से दें।' });
    else if([r.th, r.neet, r.kpcb].some(function(x){ return x && x.tr != null && x.tr >= 5; })) out.push({ en:'Your scores are rising. Great work: keep the same routine.', kn:'ನಿಮ್ಮ ಅಂಕಗಳು ಏರುತ್ತಿವೆ. ಅದ್ಭುತ: ಇದೇ ದಿನಚರಿ ಮುಂದುವರಿಸಿ.', hi:'आपके अंक बढ़ रहे हैं। शानदार: यही दिनचर्या जारी रखें।' });
    if(!r.neet) out.push({ en:'You have not written a NEET mock yet. Write every NEET test in college: it is the only way to know your real level.', kn:'ನೀವು ಇನ್ನೂ NEET ಮಾಕ್ ಬರೆದಿಲ್ಲ. ಕಾಲೇಜಿನ ಪ್ರತಿ NEET ಟೆಸ್ಟ್ ಬರೆಯಿರಿ: ನಿಮ್ಮ ನಿಜವಾದ ಮಟ್ಟ ತಿಳಿಯುವ ಏಕೈಕ ದಾರಿ.', hi:'आपने अभी तक NEET मॉक नहीं दिया। कॉलेज का हर NEET टेस्ट दें: अपना असली स्तर जानने का यही तरीका है।' });
    out.push({ en:'Register for both NEET-UG and KCET so you have more than one door open.', kn:'ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ಅವಕಾಶಕ್ಕಾಗಿ NEET-UG ಮತ್ತು KCET ಎರಡಕ್ಕೂ ನೋಂದಾಯಿಸಿ.', hi:'एक से ज़्यादा रास्ते खुले रखने के लिए NEET-UG और KCET दोनों में रजिस्टर करें।' });
    return out;
  }

  /* ---------- How BAIO helps (tailored) ---------- */
  function helps(r){
    var s = r.sub || {}, out = [];
    if(isPcm(r)) return [
      { u:'pcm.html', e:'⚛️', t:{ en:'Physics, Chemistry & Maths', kn:'ಭೌತ, ರಸಾಯನ ಮತ್ತು ಗಣಿತ', hi:'भौतिकी, रसायन और गणित' }, d:{ en:'Notes, solved problems with "Explain simply" and voice, MCQs for JEE and KCET.', kn:'ನೋಟ್ಸ್, "ಸರಳವಾಗಿ ವಿವರಿಸಿ" ಮತ್ತು ಧ್ವನಿ ಸಹಿತ ಸಮಸ್ಯೆಗಳು, JEE ಮತ್ತು KCET MCQ.', hi:'नोट्स, "आसान भाषा" और आवाज़ के साथ हल सवाल, JEE और KCET MCQ।' } },
      { u:'careers.html#pcm', e:'⚙️', t:{ en:'Engineering career guide', kn:'ಎಂಜಿನಿಯರಿಂಗ್ ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶಿ', hi:'इंजीनियरिंग करियर गाइड' }, d:{ en:'Branches, exams, fees and pay for every engineering path.', kn:'ಪ್ರತಿ ಎಂಜಿನಿಯರಿಂಗ್ ದಾರಿಗೆ ಶಾಖೆ, ಪರೀಕ್ಷೆ, ಶುಲ್ಕ, ಸಂಬಳ.', hi:'हर इंजीनियरिंग रास्ते की ब्रांच, परीक्षा, फ़ीस और वेतन।' } },
      { u:'exam-corner.html', e:'📝', t:{ en:'Exam Corner', kn:'ಪರೀಕ್ಷಾ ಕಾರ್ನರ್', hi:'एग्ज़ाम कॉर्नर' }, d:{ en:'Your personal timetable, practice papers and exam tips.', kn:'ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ವೇಳಾಪಟ್ಟಿ, ಅಭ್ಯಾಸ ಪತ್ರಿಕೆಗಳು, ಸಲಹೆಗಳು.', hi:'आपका पर्सनल टाइमटेबल, प्रैक्टिस पेपर और टिप्स।' } },
      { u:'offline.html', e:'📥', t:{ en:'Use BAIO offline', kn:'ಆಫ್‌ಲೈನ್‌ನಲ್ಲಿ BAIO', hi:'ऑफ़लाइन BAIO' }, d:{ en:'Save chapters once and study even without internet.', kn:'ಒಮ್ಮೆ ಉಳಿಸಿ, ಇಂಟರ್ನೆಟ್ ಇಲ್ಲದೆಯೂ ಓದಿ.', hi:'एक बार सेव करें, बिना इंटरनेट के भी पढ़ें।' } }
    ];
    var pk = r.pu === 2 ? 'II PUC' : 'I PUC';
    out.push({ u:'index.html', e:'📖', t:{ en:'Chapter Study Mode + MCQs', kn:'ಅಧ್ಯಾಯ ಸ್ಟಡಿ ಮೋಡ್ + MCQ', hi:'अध्याय स्टडी मोड + MCQ' }, d:{ en:'Learn every '+pk+' Biology chapter step by step, then test yourself with NEET-style MCQs.', kn:'ಪ್ರತಿ '+pk+' ಜೀವಶಾಸ್ತ್ರ ಅಧ್ಯಾಯವನ್ನು ಹಂತಹಂತವಾಗಿ ಕಲಿಯಿರಿ, ನಂತರ NEET ಮಾದರಿ MCQ.', hi:'हर '+pk+' बायोलॉजी अध्याय स्टेप-बाय-स्टेप सीखें, फिर NEET जैसे MCQ।' } });
    if(r.neet || r.pu === 2) out.push({ u:'neet-3-steps.html', e:'🩺', t:{ en:'NEET in 3 steps', kn:'3 ಹಂತಗಳಲ್ಲಿ NEET', hi:'3 स्टेप में NEET' }, d:{ en:'Study → practise → mock test: the routine that lifts NEET scores.', kn:'ಓದು → ಅಭ್ಯಾಸ → ಮಾಕ್ ಟೆಸ್ಟ್: NEET ಅಂಕ ಹೆಚ್ಚಿಸುವ ದಿನಚರಿ.', hi:'पढ़ो → अभ्यास → मॉक टेस्ट: NEET स्कोर बढ़ाने वाली दिनचर्या।' } });
    out.push({ u:'tricks.html', e:'🧠', t:{ en:'Short Notes & Tricks', kn:'ಶಾರ್ಟ್ ನೋಟ್ಸ್ ಮತ್ತು ಟ್ರಿಕ್ಸ್', hi:'शॉर्ट नोट्स और ट्रिक्स' }, d:{ en:'One-page notes, memory tricks and exam traps for fast revision.', kn:'ವೇಗದ ಪುನರಾವರ್ತನೆಗೆ ಒಂದು ಪುಟದ ನೋಟ್ಸ್, ಟ್ರಿಕ್ಸ್, ಪರೀಕ್ಷಾ ಬಲೆಗಳು.', hi:'तेज़ दोहराव के लिए एक पेज के नोट्स, ट्रिक्स, परीक्षा जाल।' } });
    if((s.PHY != null && s.PHY < 60) || (s.CHE != null && s.CHE < 60) || (s.MAT != null && s.MAT < 60))
      out.push({ u:'pcm.html', e:'⚛️', t:{ en:'Physics, Chemistry & Maths', kn:'ಭೌತ, ರಸಾಯನ ಮತ್ತು ಗಣಿತ', hi:'भौतिकी, रसायन और गणित' }, d:{ en:'Solved problems with "Explain simply" and voice explanation for your weaker subjects.', kn:'ದುರ್ಬಲ ವಿಷಯಗಳಿಗೆ "ಸರಳವಾಗಿ ವಿವರಿಸಿ" ಮತ್ತು ಧ್ವನಿ ವಿವರಣೆಯೊಂದಿಗೆ ಬಿಡಿಸಿದ ಸಮಸ್ಯೆಗಳು.', hi:'कमज़ोर विषयों के लिए "आसान भाषा में" और आवाज़ वाली व्याख्या के साथ हल किए सवाल।' } });
    out.push({ u:'reels.html', e:'🎬', t:{ en:'Revision Reels', kn:'ಪುನರಾವರ್ತನೆ ರೀಲ್ಸ್', hi:'रिवीज़न रील्स' }, d:{ en:'One-minute videos of board-important topics, plus shayari and comedy to remember.', kn:'ಬೋರ್ಡ್ ಮುಖ್ಯ ವಿಷಯಗಳ ಒಂದು ನಿಮಿಷದ ವಿಡಿಯೋಗಳು, ಶಾಯರಿ ಮತ್ತು ಹಾಸ್ಯ.', hi:'बोर्ड-ज़रूरी टॉपिक के एक मिनट के वीडियो, शायरी और कॉमेडी।' } });
    out.push({ u:'exam-corner.html', e:'📝', t:{ en:'Exam Corner', kn:'ಪರೀಕ್ಷಾ ಕಾರ್ನರ್', hi:'एग्ज़ाम कॉर्नर' }, d:{ en:'Your personal timetable, practice papers and exam tips.', kn:'ನಿಮ್ಮ ವೈಯಕ್ತಿಕ ವೇಳಾಪಟ್ಟಿ, ಅಭ್ಯಾಸ ಪತ್ರಿಕೆಗಳು, ಪರೀಕ್ಷಾ ಸಲಹೆಗಳು.', hi:'आपका पर्सनल टाइमटेबल, प्रैक्टिस पेपर और टिप्स।' } });
    out.push({ u:'flashcards.html', e:'🃏', t:{ en:'Flash Cards & Quick Cards', kn:'ಫ್ಲ್ಯಾಶ್ ಕಾರ್ಡ್‌ಗಳು', hi:'फ़्लैश कार्ड' }, d:{ en:'10 minutes a day on the bus or before sleep keeps facts fresh.', kn:'ಬಸ್‌ನಲ್ಲಿ ಅಥವಾ ಮಲಗುವ ಮುನ್ನ ದಿನಕ್ಕೆ 10 ನಿಮಿಷ.', hi:'बस में या सोने से पहले रोज़ 10 मिनट।' } });
    out.push({ u:'offline.html', e:'📥', t:{ en:'Use BAIO offline', kn:'ಆಫ್‌ಲೈನ್‌ನಲ್ಲಿ BAIO', hi:'ऑफ़लाइन BAIO' }, d:{ en:'Save chapters once and study even without internet.', kn:'ಒಮ್ಮೆ ಉಳಿಸಿ, ಇಂಟರ್ನೆಟ್ ಇಲ್ಲದೆಯೂ ಓದಿ.', hi:'एक बार सेव करें, बिना इंटरनेट के भी पढ़ें।' } });
    return out;
  }

  /* ---------- UI ---------- */
  var DATA = null, me = null, loading = false;
  try{ me = localStorage.getItem(KEY); }catch(e){}
  /* A shared report link (careers.html#report=<key>) opens that report directly, without saving it on this phone. */
  var LINK = (location.hash.match(/report=([0-9a-f]{64})/) || [])[1] || null;
  if(LINK) me = LINK;
  var PAGE = 'https://narendra-bio-sir.github.io/BAIO-Learning-System-By-Narendra-Sir/careers.html';
  /* Teacher mode: the analytics master code unlocks an encrypted list of every student (CAREER_TEACHER),
     so Narendra Sir can open any report instantly. The code is remembered on his phone until he locks it. */
  var TKEY = 'baio_career_teacher', TLIST = null, tq = '';
  function unlockTeacher(code){
    var T0 = window.CAREER_TEACHER; if(!T0 || !crypto.subtle) return Promise.resolve(null);
    function b64(x){ return Uint8Array.from(atob(x), function(c){ return c.charCodeAt(0); }); }
    return crypto.subtle.importKey('raw', new TextEncoder().encode(String(code).toUpperCase()), 'PBKDF2', false, ['deriveKey'])
      .then(function(base){ return crypto.subtle.deriveKey({ name:'PBKDF2', salt:b64(T0.s), iterations:150000, hash:'SHA-256' }, base, { name:'AES-GCM', length:256 }, false, ['decrypt']); })
      .then(function(k){ return crypto.subtle.decrypt({ name:'AES-GCM', iv:b64(T0.i) }, k, b64(T0.c)); })
      .then(function(buf){ return JSON.parse(new TextDecoder().decode(buf)); })
      .catch(function(){ return null; });
  }
  function teacherList(){
    var q = tq.trim().toLowerCase();
    var rows = TLIST.filter(function(x){ return !q || (x.n + ' ' + x.r + ' ' + (x.s || '')).toLowerCase().indexOf(q) >= 0; });
    return rows.slice(0, 200).map(function(x){
      return '<button type="button" class="sg" data-tk="'+x.k+'"><span class="e">'+(x.pu === 2 ? '🎓' : '📘')+'</span><span><b>'+esc(x.n)+'</b><small>'+x.r+' · '+(x.pu === 2 ? 'II PUC' : 'I PUC')+(x.s ? ' · '+esc(x.s) : '')+'</small></span><span class="op">Open →</span></button>';
    }).join('') || '<p class="sub">No student matches “'+esc(tq)+'”.</p>';
  }
  function teacherHtml(){
    return '<div class="rhead"><div><b>👨‍🏫 Teacher view</b><small>'+TLIST.length+' students · tap a name to open the report</small></div><button type="button" class="lnk" data-rp="tlock">🔒 Lock</button></div>'
      + '<div class="frm" style="margin-top:10px"><input id="cpT" placeholder="Search name, roll number or section…" value="'+esc(tq)+'" style="text-transform:none"></div>'
      + '<div id="cpTL" style="max-height:60vh;overflow:auto;margin-top:4px">'+teacherList()+'</div>';
  }
  function loadData(cb){
    if(window.CAREER_STUDENTS){ DATA = window.CAREER_STUDENTS; cb(true); return; }
    var sc = document.createElement('script'); sc.src = 'careers/student-data.js';
    sc.onload = function(){ DATA = window.CAREER_STUDENTS || null; cb(!!DATA); };
    sc.onerror = function(){ cb(false); };
    document.head.appendChild(sc);
  }
  function sha(s){
    var b = new TextEncoder().encode(s);
    return crypto.subtle.digest('SHA-256', b).then(function(h){ return Array.from(new Uint8Array(h)).map(function(x){ return ('0' + x.toString(16)).slice(-2); }).join(''); });
  }
  function bar(p, color){ p = Math.max(0, Math.min(100, p)); return '<span class="mbar"><i style="width:'+p+'%;background:'+color+'"></i></span>'; }
  function trendTxt(u, tr){ return tr == null ? '' : tr >= 0 ? '<span class="up">'+u.up(tr)+'</span>' : '<span class="dn">'+u.down(Math.abs(tr))+'</span>'; }
  function examRow(u, lang, label, x){
    if(!x) return '<div class="mrow"><div class="mh"><b>'+label+'</b><span class="mut">'+u.noTest+'</span></div></div>';
    var b = bandOf(x.p);
    return '<div class="mrow"><div class="mh"><b>'+label+'</b><span class="pill" style="background:'+BC[b]+'">'+u.band[b]+' · '+Math.round(x.p)+'%</span></div>'
      + bar(x.p, BC[b]) + '<div class="mut">'+esc(u.latest(x.lb, x.sc, x.mx))+' · '+u.tests(x.n)+' '+trendTxt(u, x.tr)+'</div>'
      + (x.sub && x.sub.length ? '<div class="chipsm">'+x.sub.map(function(sb){ return '<span>'+sb[0]+' '+sb[1]+'/'+sb[2]+'</span>'; }).join('')+'</div>' : '') + '</div>';
  }
  function reportHtml(r, lang, D){
    var u = T[lang] || T.en, h = '';
    if(TLIST) h += '<div class="rhead" style="background:var(--panel2);border-radius:12px;padding:8px 10px"><div><b style="font-size:14px">👨‍🏫 Teacher view</b></div><button type="button" class="lnk" data-rp="tback">← All students</button></div>';
    h += '<div class="rhead"><div><b>'+u.hi+', '+esc(r.name)+' 👋</b><small>'+u.puc[r.pu]+' · '+esc(r.sec || '')+'</small></div>'+(TLIST ? '' : '<button type="button" class="lnk" data-rp="out">'+u.out+'</button>')+'</div>';
    h += goalHtml(r, lang);
    h += '<h4>'+u.stand+'</h4>';
    if(r.th){ var pi = pIdx(r.th.p), col = ['#2F9E6B','#C9A227','#E08A1E','#D0544B'][pi];
      h += '<div class="mrow"><div class="mh"><b>'+u.theory+'</b><span class="pill" style="background:'+col+'">'+u.pband[pi]+'</span></div>'+bar(r.th.p, col)
        + '<div class="mut">'+esc(u.rank(r.th.rk, r.th.of, r.th.lb))+' · '+u.tests(r.th.n)+' '+trendTxt(u, r.th.tr)+'</div></div>'; }
    if(pcmOnly(r)) h += examRow(u, lang, u.kpcm, r.kpcm) + examRow(u, lang, u.jee, r.jee);
    else if(engGoal(r)){
      h += examRow(u, lang, u.kpcm, r.kpcm) + examRow(u, lang, u.jee, r.jee);
      if(r.neet) h += examRow(u, lang, u.neet, r.neet);
      if(r.kpcb) h += examRow(u, lang, u.kpcb, r.kpcb);
    }
    else {
      h += examRow(u, lang, u.neet, r.neet) + examRow(u, lang, u.kpcb, r.kpcb);
      if(r.kpcm && (r.sub || {}).MAT != null) h += examRow(u, lang, u.kpcm, r.kpcm);
      if(r.jee) h += examRow(u, lang, u.jee, r.jee);
    }
    var s = r.sub || {}, ks = ['BIO','CHE','PHY','MAT'].filter(function(k){ return s[k] != null; });
    if(ks.length){
      var sorted = ks.slice().sort(function(a, b){ return s[b] - s[a]; });
      h += '<h4>'+u.subj+'</h4>' + ks.map(function(k){ var p = s[k], c = p >= 70 ? BC.strong : p >= 50 ? BC.competitive : p >= 35 ? BC['needs-work'] : BC['high-risk'];
        return '<div class="srow"><span class="sl">'+u.sub[k]+(k === sorted[0] ? ' ⭐' : '')+(k === sorted[sorted.length-1] && ks.length > 1 ? ' ⚠️' : '')+'</span>'+bar(p, c)+'<span class="sv">'+Math.round(p)+'%</span></div>'; }).join('')
        + '<div class="mut">⭐ '+u.strong+': '+u.sub[sorted[0]]+(ks.length > 1 ? ' · ⚠️ '+u.weak+': '+u.sub[sorted[sorted.length-1]] : '')+'</div>';
    }
    h += '<h4>'+u.sugg+'</h4>' + suggest(r).map(function(x){
      var c = D.list.filter(function(k){ return k.id === x.id; })[0]; if(!c) return '';
      return '<button type="button" class="sg" data-go="'+c.id+'"><span class="e">'+c.ic+'</span><span><b>'+esc(c.name)+'</b><small>'+esc(M(x.why, lang))+'</small></span><span class="op">'+u.open+'</span></button>';
    }).join('');
    h += '<h4>'+u.steps+'</h4><ol class="stp">' + steps(r).map(function(x){ return '<li>'+esc(M(x, lang))+'</li>'; }).join('') + '</ol>';
    h += '<h4>'+u.baio+'</h4><div class="hp">' + helps(r).map(function(x){ return '<a href="'+x.u+'"><span class="e">'+x.e+'</span><span><b>'+esc(M(x.t, lang))+'</b><small>'+esc(M(x.d, lang))+'</small></span></a>'; }).join('') + '</div>';
    h += '<div class="qact"><button type="button" class="btn" data-rp="print">'+u.print+'</button><button type="button" class="btn ghost" data-rp="share">'+u.share+'</button></div>';
    h += '<p class="note">'+u.note+'</p>';
    return h;
  }
  function formHtml(lang, err){
    var u = T[lang] || T.en, roll = '';
    try{ var p = JSON.parse(localStorage.getItem('baio_student') || 'null'); if(p && p.roll && /^2[56]MPU\d{4}$/i.test(p.roll)) roll = p.roll.toUpperCase(); }catch(e){}
    return '<p class="sub">'+u.s+'</p><div class="frm"><label>'+u.roll+'<input id="cpRoll" autocomplete="username" placeholder="26MPU0001" value="'+roll+'" autocapitalize="characters"></label>'
      + '<label>'+u.pass+'<input id="cpPass" type="password" autocomplete="current-password"></label>'
      + '<button type="button" class="btn" data-rp="go">'+(loading ? u.busy : u.go)+'</button></div>' + (err ? '<p class="err">'+err+'</p>' : '');
  }
  var lastErr = '', curLang = 'en', box = null, goFn = null, D = null;
  function paint(){
    var u = T[curLang] || T.en;
    var inner = '<h3>'+u.h+'</h3>';
    if(me && DATA && DATA[me]) inner += reportHtml(DATA[me], curLang, D);
    else if(TLIST) inner += teacherHtml();
    else inner += formHtml(curLang, lastErr);
    box.innerHTML = inner;
  }
  function shareText(r){
    var u = T.en, bits = ['🎯 BAIO career report: ' + r.name + ' (' + u.puc[r.pu] + ')'];
    if(r.th) bits.push('Theory: ' + u.pband[pIdx(r.th.p)]);
    if(r.neet) bits.push('NEET mocks: ' + r.neet.sc + '/' + r.neet.mx + ' (' + u.band[bandOf(r.neet.p)] + ')');
    if(r.kpcb) bits.push('KCET (PCB): ' + r.kpcb.sc + '/' + r.kpcb.mx);
    var sg = suggest(r).map(function(x){ var c = D.list.filter(function(k){ return k.id === x.id; })[0]; return c ? c.name : ''; }).filter(Boolean);
    if(sg.length) bits.push('Careers that fit: ' + sg.join(', '));
    bits.push('👉 Tap to open the full report (where you stand, next steps, how BAIO helps):');
    return bits.join('\n');
  }
  function onClick(e){
    var b = e.target.closest('[data-rp],[data-go],[data-tk],[data-goal]'); if(!b) return;
    if(b.dataset.goal){ if(me){ if(b.dataset.goal === 'eng') GOAL[me] = 'eng'; else delete GOAL[me]; try{ localStorage.setItem(GKEY, JSON.stringify(GOAL)); }catch(x){} } paint(); return; }
    if(b.dataset.go){ goFn(b.dataset.go); return; }
    if(b.dataset.tk){ me = b.dataset.tk; paint(); box.scrollIntoView({ block:'start' }); return; }
    if(b.dataset.rp === 'tback'){ me = null; paint(); box.scrollIntoView({ block:'start' }); var i = document.getElementById('cpT'); if(i) i.focus({ preventScroll:true }); return; }
    if(b.dataset.rp === 'tlock'){ TLIST = null; me = null; tq = ''; try{ localStorage.removeItem(TKEY); }catch(x){} paint(); return; }
    var a = b.dataset.rp;
    if(a === 'go'){
      var roll = (document.getElementById('cpRoll').value || '').trim().toUpperCase().replace(/\s+/g, '');
      var pw = (document.getElementById('cpPass').value || '').trim().toUpperCase();
      if(!pw){ lastErr = T[curLang].bad; paint(); return; }
      loading = true; lastErr = ''; paint();
      loadData(function(ok){
        if(!ok){ loading = false; lastErr = T[curLang].nodata; paint(); return; }
        unlockTeacher(pw).then(function(list){
          if(list){
            loading = false; TLIST = list; lastErr = ''; try{ localStorage.setItem(TKEY, pw); }catch(x){}
            var hit = list.filter(function(x){ return x.r === roll; })[0]; me = hit ? hit.k : null;
            paint(); box.scrollIntoView({ behavior:'smooth', block:'start' }); return;
          }
          sha(roll + '|' + pw).then(function(k){
          loading = false;
          if(DATA[k]){ me = k; try{ localStorage.setItem(KEY, k); }catch(x){} lastErr = ''; }
          else lastErr = T[curLang].bad;
          paint();
          if(me) box.scrollIntoView({ behavior:'smooth', block:'start' });
          });
        });
      });
    } else if(a === 'out'){
      if(me === LINK){ LINK = null; try{ history.replaceState(null, '', location.pathname); }catch(x){} me = null; try{ me = localStorage.getItem(KEY); }catch(x){} if(me && !(DATA && DATA[me])) me = null; }
      else { me = null; try{ localStorage.removeItem(KEY); }catch(x){} }
      paint();
    }
    else if(a === 'print'){ document.body.classList.add('print-report'); window.print(); setTimeout(function(){ document.body.classList.remove('print-report'); }, 800); }
    else if(a === 'share'){
      var r = DATA[me], txt = shareText(r), url = PAGE + '#report=' + me;
      if(navigator.share) navigator.share({ title:'My BAIO career report', text:txt, url:url }).catch(function(){});
      else window.open('https://wa.me/?text=' + encodeURIComponent(txt + '\n' + url), '_blank');
    }
  }
  window.CareerReport = {
    render: function(el, lang, go, data){
      var first = !box; box = el; curLang = lang; goFn = go; D = data;
      if(first){
        box.addEventListener('click', onClick);
        box.addEventListener('keydown', function(e){ if(e.key === 'Enter' && e.target.id === 'cpPass'){ var g = box.querySelector('[data-rp="go"]'); if(g) g.click(); } });
        box.addEventListener('input', function(e){ if(e.target.id === 'cpT'){ tq = e.target.value; var l = document.getElementById('cpTL'); if(l) l.innerHTML = teacherList(); } });
        var tcode = null; try{ tcode = localStorage.getItem(TKEY); }catch(x){}
        if(me || tcode){ loadData(function(){
          (tcode ? unlockTeacher(tcode) : Promise.resolve(null)).then(function(list){
            if(list){ TLIST = list; if(me && !LINK){ me = null; } }
            if(me && (!DATA || !DATA[me])) me = null;
            paint();
            if(me && me === LINK) setTimeout(function(){ box.scrollIntoView({ block:'start' }); }, 150);
          });
        }); }
      }
      paint();
    }
  };
})();
