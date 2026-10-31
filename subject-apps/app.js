/* BAIO subject chapter app (Physics / Chemistry) — shared shell.
   Reads window.SUBJECT_APP. Premium tabs use the same unlock-code system as the Biology apps
   (FNV-1a student codes with a per-chapter content key, master / staff-demo / one-time demo codes)
   and the BaioSample free preview. */
(function(){
  'use strict';
  var A = window.SUBJECT_APP; if(!A) return;
  var PREMIUM_KEY = A.premiumKey;
  window.PREMIUM_KEY = PREMIUM_KEY;
  var PRICE = 3000;
  var WA = '919008968389';
  var MASTER = 'NS-PREMIUM-2027', STAFF_DEMO = 'NS-STAFFDEMO-2027', DEMO = 'BAIO-DEMO-2027', DEMO_USED_KEY = 'baio_premium_demo_used_global';
  var DEMO_MS = 24 * 60 * 60 * 1000;
  var STUDENT_CODE_EXPIRY = new Date('2027-03-31T23:59:59+05:30').getTime();
  var CODE_SALT = 'BAIO-STUDENT-LOCK-2026', CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  var PREMIUM_TABS = ['mcq','neet','kcet','boardimp'];

  /* ---------- code system (same formula as the Biology chapter apps) ---------- */
  function norm(s){ return (s || '').toString().trim().toUpperCase().replace(/\s+/g, ' '); }
  function fnv(str){ var h = 0x811c9dc5; for(var i = 0; i < str.length; i++){ h ^= str.charCodeAt(i); h = Math.imul(h, 0x01000193); } return h >>> 0; }
  function studentCode(name, roll, section, ck){
    var key = CODE_SALT + '|' + norm(name) + '|' + norm(roll) + '|' + norm(section) + (ck ? '|' + norm(ck) : '');
    var h1 = fnv(key), h2 = fnv(key.split('').reverse().join('') + CODE_SALT);
    var n = (BigInt(h1) << 32n) | BigInt(h2), base = BigInt(CODE_CHARS.length), code = '';
    for(var i = 0; i < 8; i++){ code += CODE_CHARS[Number(n % base)]; n = n / base; }
    return code.slice(0, 4) + '-' + code.slice(4, 8);
  }
  function getUnlock(){ try{ return JSON.parse(localStorage.getItem(PREMIUM_KEY) || 'null'); }catch(e){ return null; } }
  function setUnlock(method, extra){ try{ localStorage.setItem(PREMIUM_KEY, JSON.stringify(Object.assign({unlocked:true, method:method, ts:Date.now()}, extra || {}))); }catch(e){} }
  function qualifies(){
    var u = getUnlock(); if(!u || !u.unlocked) return false;
    if((u.method === 'demo' || u.method === 'masterdemo') && (!u.ts || Date.now() - u.ts > DEMO_MS)){ try{ localStorage.removeItem(PREMIUM_KEY); }catch(e){} return false; }
    if(u.method === 'code' && Date.now() > STUDENT_CODE_EXPIRY){ try{ localStorage.removeItem(PREMIUM_KEY); }catch(e){} return false; }
    return true;
  }

  /* ---------- UI strings ---------- */
  var UI = {
    en:{ tabs:{notes:'📖 Study Notes', formulas:'🧮 Formula Sheet', numericals:'✍️ Numericals', mcq:'MCQ Quiz', neet:'NEET Practice', kcet:'KCET Practice', boardimp:'Board Important'},
         hi_user:function(n){ return 'Hi, '+n; }, show:'Show solution', hide:'Hide solution', ans:'Answer', score:function(a,b,c){ return 'Score: '+a+' / '+b+' answered · '+c+' total'; }, reset:'↺ Start again',
         marks:function(m){ return m+' mark'+(m>1?'s':''); }, lockT:'🔒 Premium content', lockP:function(t){ return t+' is part of this chapter\'s Premium content. Unlock it to practise every question with explanations.'; },
         price:'₹'+PRICE+' · this chapter', pay:'💬 Pay / request unlock on WhatsApp', haveCode:'Already have an unlock code?', name:'Full name', roll:'Roll number (e.g. 25MPU0024)', section:'Section (e.g. CHAMPION)', code:'Unlock code',
         unlock:'🔓 Unlock', bad:'That name / roll / section / code was not recognised. Check with Narendra Sir.', needAll:'Please enter your name, roll number and section with the code (or use a master code alone).', demoUsed:'This trial code has already been used on this device.',
         unlocked:'✅ Premium unlocked on this device', relock:'Lock again', note:'Content is in English (as written in the exam).', free:'FREE', prem:'PREMIUM', back:'← BAIO home' },
    kn:{ tabs:{notes:'📖 ಅಧ್ಯಯನ ಟಿಪ್ಪಣಿ', formulas:'🧮 ಸೂತ್ರ ಹಾಳೆ', numericals:'✍️ ಸಮಸ್ಯೆಗಳು', mcq:'MCQ ರಸಪ್ರಶ್ನೆ', neet:'NEET ಅಭ್ಯಾಸ', kcet:'KCET ಅಭ್ಯಾಸ', boardimp:'ಬೋರ್ಡ್ ಮುಖ್ಯ'},
         hi_user:function(n){ return 'ನಮಸ್ಕಾರ, '+n; }, show:'ಪರಿಹಾರ ತೋರಿಸಿ', hide:'ಪರಿಹಾರ ಮರೆಮಾಡಿ', ans:'ಉತ್ತರ', score:function(a,b,c){ return 'ಅಂಕ: '+a+' / '+b+' ಉತ್ತರಿಸಿದ · ಒಟ್ಟು '+c; }, reset:'↺ ಮತ್ತೆ ಆರಂಭಿಸಿ',
         marks:function(m){ return m+' ಅಂಕ'; }, lockT:'🔒 ಪ್ರೀಮಿಯಂ ವಿಭಾಗ', lockP:function(t){ return t+' ಈ ಅಧ್ಯಾಯದ ಪ್ರೀಮಿಯಂ ವಿಭಾಗ. ವಿವರಣೆಯೊಂದಿಗೆ ಎಲ್ಲ ಪ್ರಶ್ನೆಗಳನ್ನು ಅಭ್ಯಾಸ ಮಾಡಲು ತೆರೆಯಿರಿ.'; },
         price:'₹'+PRICE+' · ಈ ಅಧ್ಯಾಯ', pay:'💬 WhatsApp ನಲ್ಲಿ ಪಾವತಿ / ವಿನಂತಿ', haveCode:'ಅನ್‌ಲಾಕ್ ಕೋಡ್ ಇದೆಯೇ?', name:'ಪೂರ್ಣ ಹೆಸರು', roll:'ರೋಲ್ ಸಂಖ್ಯೆ (ಉದಾ: 25MPU0024)', section:'ವಿಭಾಗ (ಉದಾ: CHAMPION)', code:'ಅನ್‌ಲಾಕ್ ಕೋಡ್',
         unlock:'🔓 ತೆರೆಯಿರಿ', bad:'ಹೆಸರು / ರೋಲ್ / ವಿಭಾಗ / ಕೋಡ್ ಹೊಂದಿಕೆಯಾಗಲಿಲ್ಲ. ನರೇಂದ್ರ ಸರ್ ಅವರನ್ನು ಕೇಳಿ.', needAll:'ಕೋಡ್ ಜೊತೆಗೆ ಹೆಸರು, ರೋಲ್ ಸಂಖ್ಯೆ ಮತ್ತು ವಿಭಾಗ ನಮೂದಿಸಿ.', demoUsed:'ಈ ಪ್ರಾಯೋಗಿಕ ಕೋಡ್ ಈಗಾಗಲೇ ಬಳಸಲಾಗಿದೆ.',
         unlocked:'✅ ಈ ಸಾಧನದಲ್ಲಿ ಪ್ರೀಮಿಯಂ ತೆರೆದಿದೆ', relock:'ಮತ್ತೆ ಲಾಕ್ ಮಾಡಿ', note:'ವಿಷಯ ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿದೆ (ಪರೀಕ್ಷೆಯಲ್ಲಿ ಬರೆಯುವಂತೆ).', free:'ಉಚಿತ', prem:'ಪ್ರೀಮಿಯಂ', back:'← BAIO ಮುಖಪುಟ' },
    hi:{ tabs:{notes:'📖 अध्ययन नोट्स', formulas:'🧮 सूत्र पत्रक', numericals:'✍️ संख्यात्मक प्रश्न', mcq:'MCQ क्विज़', neet:'NEET अभ्यास', kcet:'KCET अभ्यास', boardimp:'बोर्ड महत्वपूर्ण'},
         hi_user:function(n){ return 'नमस्ते, '+n; }, show:'हल दिखाएँ', hide:'हल छिपाएँ', ans:'उत्तर', score:function(a,b,c){ return 'अंक: '+a+' / '+b+' हल किए · कुल '+c; }, reset:'↺ फिर से शुरू करें',
         marks:function(m){ return m+' अंक'; }, lockT:'🔒 प्रीमियम सामग्री', lockP:function(t){ return t+' इस अध्याय की प्रीमियम सामग्री है। व्याख्या सहित सभी प्रश्नों के अभ्यास के लिए अनलॉक करें।'; },
         price:'₹'+PRICE+' · यह अध्याय', pay:'💬 WhatsApp पर भुगतान / अनुरोध', haveCode:'अनलॉक कोड है?', name:'पूरा नाम', roll:'रोल नंबर (जैसे 25MPU0024)', section:'सेक्शन (जैसे CHAMPION)', code:'अनलॉक कोड',
         unlock:'🔓 अनलॉक करें', bad:'नाम / रोल / सेक्शन / कोड मेल नहीं खाया। नरेंद्र सर से पूछें।', needAll:'कोड के साथ नाम, रोल नंबर और सेक्शन डालें।', demoUsed:'यह ट्रायल कोड पहले ही इस्तेमाल हो चुका है।',
         unlocked:'✅ इस डिवाइस पर प्रीमियम अनलॉक है', relock:'फिर से लॉक करें', note:'सामग्री अंग्रेज़ी में है (जैसे परीक्षा में लिखते हैं)।', free:'मुफ़्त', prem:'प्रीमियम', back:'← BAIO होम' }
  };
  var lang = 'en'; try{ lang = localStorage.getItem('baio_lang') || 'en'; }catch(e){} if(!UI[lang]) lang = 'en';
  window.currentLang = lang;
  var TAB_ORDER = ['notes','formulas','numericals','mcq','neet','kcet','boardimp'];
  var cur = 'notes'; var h = (location.hash || '').slice(1); if(TAB_ORDER.indexOf(h) >= 0) cur = h;
  var answered = {}; /* tab -> {i: correct?} */

  function $(id){ return document.getElementById(id); }
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]; }); }

  /* ---------- theme ---------- */
  var tb = $('themeBtn');
  function applyTheme(t){ document.documentElement.setAttribute('data-theme', t === 'dark' ? 'dark' : 'light'); tb.textContent = t === 'dark' ? '☀️' : '🌙'; }
  var th = 'light'; try{ th = localStorage.getItem('baio_theme') || 'light'; }catch(e){} applyTheme(th);
  tb.onclick = function(){ var n = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; applyTheme(n); try{ localStorage.setItem('baio_theme', n); }catch(e){} };

  /* ---------- header ---------- */
  function renderHeader(){
    var u = UI[lang];
    document.documentElement.lang = lang;
    $('langs').innerHTML = [['en','English'],['kn','ಕನ್ನಡ'],['hi','हिंदी']].map(function(l){ return '<button class="lang'+(l[0]===lang?' on':'')+'" data-l="'+l[0]+'">'+l[1]+'</button>'; }).join('');
    $('eyebrow').textContent = A.cls + ' ' + A.subject + ' · NEET / KCET aligned';
    $('title').textContent = 'Chapter ' + A.ch + ': ' + A.title;
    $('intro').textContent = A.intro;
    var p = null; try{ p = JSON.parse(localStorage.getItem('baio_student') || 'null'); }catch(e){}
    $('hello').textContent = p && p.name ? u.hi_user(p.name) + (p.roll ? ' (' + p.roll + ')' : '') : '';
    $('hello').hidden = !(p && p.name);
    $('tabs').innerHTML = TAB_ORDER.map(function(t){
      var prem = PREMIUM_TABS.indexOf(t) >= 0, open = qualifies();
      var icon = prem && !open ? ((window.BaioSample && BaioSample.allow(t, PREMIUM_KEY)) ? '🎁 ' : '🔒 ') : '';
      return '<button class="tab'+(t===cur?' on':'')+'" data-tab="'+t+'">'+icon+u.tabs[t]+'</button>';
    }).join('');
    var on = $('tabs').querySelector('.on'); if(on && on.scrollIntoView) try{ on.scrollIntoView({block:'nearest', inline:'center'}); }catch(e){}
  }

  /* ---------- content renderers ---------- */
  function rNotes(){
    return '<p class="note">'+UI[lang].note+'</p>' + A.notes.map(function(n, i){
      return '<section class="card"><h3><span class="num">'+(i+1)+'</span><span>'+n.t+'</span></h3><ul>'+n.b.map(function(b){ return '<li>'+b+'</li>'; }).join('')+'</ul></section>'; }).join('');
  }
  function rFormulas(){
    return '<section class="card"><div class="ftable">' + A.formulas.map(function(f){
      return '<div class="frow"><div class="fname">'+f[0]+'</div><div class="feq">'+f[1]+'</div>'+(f[2]?'<div class="fnote">'+f[2]+'</div>':'')+'</div>'; }).join('') + '</div></section>';
  }
  function rNumericals(){
    var u = UI[lang];
    return A.numericals.map(function(n, i){
      return '<section class="card num-q"><h3><span class="num">'+(i+1)+'</span><span>'+n.q+'</span></h3>'
        + '<button class="btn ghost" data-sol="'+i+'">'+u.show+'</button>'
        + '<div class="sol" id="sol'+i+'" hidden><ol>'+n.s.map(function(s){ return '<li>'+s+'</li>'; }).join('')+'</ol><div class="ans">'+u.ans+': <b>'+n.a+'</b></div></div></section>'; }).join('');
  }
  function rQuiz(tab){
    var u = UI[lang], list = A[tab === 'mcq' ? 'mcq' : tab], st = answered[tab] || (answered[tab] = {});
    var qk = Object.keys(st).filter(function(k){ return k[0] !== 'p'; }), done = qk.length, right = qk.filter(function(k){ return st[k]; }).length;
    var html = '<div class="scorebar"><span>'+u.score(right, done, list.length)+'</span><button class="btn ghost" data-reset="'+tab+'">'+u.reset+'</button></div>';
    list.forEach(function(q, i){
      var opts = q[1].split('|'), a = st[i];
      html += '<section class="card quiz"><h3><span class="num">'+(i+1)+'</span><span>'+q[0]+'</span></h3><div class="opts" data-q="'+i+'">';
      opts.forEach(function(o, j){
        var cls = 'qz-opt';
        if(a !== undefined){ if(j === q[2]) cls += ' correct'; else if(st['p'+i] === j) cls += ' wrong'; }
        html += '<button class="'+cls+'" data-tab="'+tab+'" data-i="'+i+'" data-j="'+j+'"'+(a!==undefined?' disabled':'')+'><b>'+'ABCD'[j]+'</b> '+o+'</button>';
      });
      html += '</div>' + (a !== undefined ? '<div class="expl">'+(a ? '✅ ' : '❌ ')+q[3]+'</div>' : '') + '</section>';
    });
    return html;
  }
  function rBoard(){
    var u = UI[lang], groups = {};
    A.board.forEach(function(b){ (groups[b[0]] = groups[b[0]] || []).push(b); });
    return Object.keys(groups).sort().map(function(m){
      return '<h2 class="grp">'+u.marks(+m)+'</h2>' + groups[m].map(function(b){
        return '<section class="card"><h3><span class="mk m'+m+'">'+m+'M</span><span>'+b[1]+'</span></h3><ol>'+b[2].map(function(x){ return '<li>'+x+'</li>'; }).join('')+'</ol></section>'; }).join(''); }).join('');
  }

  /* ---------- premium lock ---------- */
  function lockHtml(tab){
    var u = UI[lang], msg = encodeURIComponent('Hi Narendra Sir, I want to unlock Premium for ' + A.cls + ' ' + A.subject + ' Chapter ' + A.ch + ' (' + A.title + ') in the BAIO app (₹' + PRICE + ').');
    return '<section class="card lock"><h2>'+u.lockT+'</h2><p>'+u.lockP(u.tabs[tab])+'</p><div class="price">'+u.price+'</div>'
      + '<a class="btn gold" href="https://wa.me/'+WA+'?text='+msg+'" target="_blank" rel="noopener">'+u.pay+'</a>'
      + '<h3 style="margin-top:18px">'+u.haveCode+'</h3><div class="form">'
      + '<input id="uName" placeholder="'+u.name+'" autocomplete="name"><input id="uRoll" placeholder="'+u.roll+'"><input id="uSec" placeholder="'+u.section+'"><input id="uCode" placeholder="'+u.code+'" autocapitalize="characters">'
      + '<button class="btn teal" id="uGo">'+u.unlock+'</button><div class="msg" id="uMsg"></div></div></section>';
  }
  function tryUnlock(){
    var u = UI[lang], name = $('uName').value.trim(), roll = $('uRoll').value.trim(), sec = $('uSec').value.trim(), code = $('uCode').value.trim().toUpperCase(), msg = $('uMsg');
    if(!code){ msg.textContent = u.needAll; return; }
    if(code === MASTER){ setUnlock('master', {roll: roll || 'master-access'}); return done(); }
    if(code === STAFF_DEMO){ setUnlock('masterdemo', {roll: roll || 'staff-demo'}); return done(); }
    if(code === DEMO){
      var used = false; try{ used = !!localStorage.getItem(DEMO_USED_KEY); }catch(e){}
      if(used){ msg.textContent = u.demoUsed; return; }
      try{ localStorage.setItem(DEMO_USED_KEY, '1'); }catch(e){}
      setUnlock('demo', {roll: roll || 'demo-access'}); return done();
    }
    if(!name || !roll || !sec){ msg.textContent = u.needAll; return; }
    if(studentCode(name, roll, sec, A.codeKey) === code){ setUnlock('code', {name:name, roll:roll, section:sec}); return done(); }
    msg.textContent = u.bad;
  }
  function done(){ if(window.BaioSample) BaioSample.clear(); renderHeader(); renderBody(); }

  /* ---------- body ---------- */
  function renderBody(){
    var el = $('content'), u = UI[lang];
    if(window.BaioSample) BaioSample.clear();
    var prem = PREMIUM_TABS.indexOf(cur) >= 0, open = qualifies();
    if(prem && !open){
      if(window.BaioSample && BaioSample.allow(cur, PREMIUM_KEY)){
        el.innerHTML = body(cur);
        var t = cur; setTimeout(function(){ if(cur === t) BaioSample.start(t, el, function(tt){ el.innerHTML = lockHtml(tt); renderHeader(); }, PREMIUM_KEY, {single:true}); }, 0);
      } else {
        el.innerHTML = lockHtml(cur);
        if(window.BaioSample) BaioSample.notice(cur, el);
      }
    } else {
      el.innerHTML = (prem && open ? '<div class="unl"><span>'+u.unlocked+'</span><button class="btn ghost" id="relock">'+u.relock+'</button></div>' : '') + body(cur);
    }
  }
  function body(t){ return t === 'notes' ? rNotes() : t === 'formulas' ? rFormulas() : t === 'numericals' ? rNumericals() : t === 'boardimp' ? rBoard() : rQuiz(t); }

  /* ---------- events ---------- */
  $('langs').addEventListener('click', function(e){ var b = e.target.closest('button'); if(!b) return; lang = b.dataset.l; window.currentLang = lang; try{ localStorage.setItem('baio_lang', lang); }catch(x){} renderHeader(); renderBody(); });
  $('tabs').addEventListener('click', function(e){ var b = e.target.closest('.tab'); if(!b) return; cur = b.dataset.tab; try{ history.replaceState(null, '', '#' + cur); }catch(x){} renderHeader(); renderBody(); window.scrollTo({top: $('tabs').offsetTop - 70, behavior:'smooth'}); });
  $('content').addEventListener('click', function(e){
    var b = e.target.closest('button'); if(!b) return;
    if(b.id === 'uGo') return tryUnlock();
    if(b.id === 'relock'){ try{ localStorage.removeItem(PREMIUM_KEY); }catch(x){} renderHeader(); renderBody(); return; }
    if(b.dataset.sol !== undefined){ var s = $('sol' + b.dataset.sol), u = UI[lang]; s.hidden = !s.hidden; b.textContent = s.hidden ? u.show : u.hide; return; }
    if(b.dataset.reset){ answered[b.dataset.reset] = {}; renderBody(); return; }
    if(b.classList.contains('qz-opt') && !b.disabled){
      var t = b.dataset.tab, i = +b.dataset.i, j = +b.dataset.j, q = A[t][i], st = answered[t] || (answered[t] = {});
      st[i] = (j === q[2]); st['p' + i] = j;
      var card = b.closest('.card'), opts = card.querySelectorAll('.qz-opt');
      opts.forEach(function(o, k){ o.disabled = true; if(k === q[2]) o.classList.add('correct'); else if(k === j) o.classList.add('wrong'); });
      var ex = document.createElement('div'); ex.className = 'expl'; ex.innerHTML = (st[i] ? '✅ ' : '❌ ') + q[3]; card.appendChild(ex);
      var u2 = UI[lang], keys = Object.keys(st).filter(function(k){ return k[0] !== 'p'; }), right = keys.filter(function(k){ return st[k]; }).length;
      var sb = $('content').querySelector('.scorebar span'); if(sb) sb.textContent = u2.score(right, keys.length, A[t].length);
    }
  });
  $('content').addEventListener('keydown', function(e){ if(e.key === 'Enter' && e.target.id === 'uCode') tryUnlock(); });

  renderHeader(); renderBody();
})();
