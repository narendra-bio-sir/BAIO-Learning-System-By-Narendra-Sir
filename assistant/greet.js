/* BAIO home greeting.
   - First open: a welcome sheet asks the student's name (stored in localStorage 'baio_user_name').
   - Once a day, on the first open of the day: a greeting card, e.g. "Good morning, Priya! 👋".
   - Tapping the name in the home header lets the student change it.
   A name already saved on a chapter page ('baio_student') is used as-is, so those students are never asked twice.
   'baio_student' is only updated when it already exists, because chapter pages treat that profile as complete. */
(function(){
  if (window.__baioGreet) return; window.__baioGreet = 1;
  var LANG = (function(){ try { var l = localStorage.getItem('baio_lang'); return ['en','kn','hi'].indexOf(l) >= 0 ? l : 'en'; } catch (e) { return 'en'; } })();
  var T = {
    en:{ welcome:'Welcome to BAIO! 👋', ask:'What should we call you?', ph:'Type your first name', go:"Let's go 🚀", later:'Maybe later', save:'Save ✓', edit:'Change your name',
         gm:'Good morning', ga:'Good afternoon', ge:'Good evening', fresh:'Welcome to the BAIO family! 🎉',
         subs:['Ready to score more today? 💪', "Let's make today count! 🎯", "One chapter at a time — you've got this! 📘", 'Board, NEET and KCET — one step closer today 🚀'],
         tap:'Tap anywhere to start', say:function(g, n){ return g + ', ' + n + '! Welcome to BAIO.'; } },
    kn:{ welcome:'BAIO ಗೆ ಸ್ವಾಗತ! 👋', ask:'ನಿಮ್ಮ ಹೆಸರೇನು?', ph:'ನಿಮ್ಮ ಹೆಸರನ್ನು ಟೈಪ್ ಮಾಡಿ', go:'ಶುರು ಮಾಡೋಣ 🚀', later:'ನಂತರ', save:'ಉಳಿಸಿ ✓', edit:'ಹೆಸರು ಬದಲಿಸಿ',
         gm:'ಶುಭೋದಯ', ga:'ಶುಭ ಮಧ್ಯಾಹ್ನ', ge:'ಶುಭ ಸಂಜೆ', fresh:'BAIO ಕುಟುಂಬಕ್ಕೆ ಸ್ವಾಗತ! 🎉',
         subs:['ಇಂದು ಹೆಚ್ಚು ಅಂಕ ಗಳಿಸಲು ಸಿದ್ಧರಾ? 💪', 'ಇಂದಿನ ದಿನವನ್ನು ಸಾರ್ಥಕಗೊಳಿಸೋಣ! 🎯', 'ಒಂದೊಂದೇ ಅಧ್ಯಾಯ — ನೀವು ಗೆಲ್ಲುತ್ತೀರಿ! 📘', 'ಬೋರ್ಡ್, NEET ಮತ್ತು KCET — ಇಂದು ಒಂದು ಹೆಜ್ಜೆ ಮುಂದೆ 🚀'],
         tap:'ಶುರು ಮಾಡಲು ಎಲ್ಲಿಯಾದರೂ ಒತ್ತಿ', say:function(g, n){ return g + ', ' + n + '! BAIO ಗೆ ಸ್ವಾಗತ.'; } },
    hi:{ welcome:'BAIO में आपका स्वागत है! 👋', ask:'आपका नाम क्या है?', ph:'अपना नाम लिखें', go:'चलो शुरू करें 🚀', later:'बाद में', save:'सेव करें ✓', edit:'नाम बदलें',
         gm:'सुप्रभात', ga:'शुभ दोपहर', ge:'शुभ संध्या', fresh:'BAIO परिवार में आपका स्वागत है! 🎉',
         subs:['आज ज़्यादा अंक लाने के लिए तैयार? 💪', 'चलो आज का दिन ख़ास बनाएँ! 🎯', 'एक-एक अध्याय — आप कर सकते हो! 📘', 'बोर्ड, NEET और KCET — आज एक क़दम और आगे 🚀'],
         tap:'शुरू करने के लिए कहीं भी टैप करें', say:function(g, n){ return g + ', ' + n + '! BAIO में आपका स्वागत है।'; } }
  }[LANG];

  var NAME_KEY = 'baio_user_name', SEEN_KEY = 'baio_greeted', DAY_KEY = 'baio_greeted_day';
  function today(){ var d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }
  function markDay(){ try { sessionStorage.setItem(SEEN_KEY, '1'); localStorage.setItem(DAY_KEY, today()); } catch (e) {} }
  function clean(s){ return String(s || '').replace(/\s+/g, ' ').trim().slice(0, 30); }
  function first(s){ var w = clean(s).split(' ')[0] || ''; return w.charAt(0).toUpperCase() + w.slice(1); }
  function profile(){ try { return JSON.parse(localStorage.getItem('baio_student') || 'null'); } catch (e) { return null; } }
  function getName(){
    var p = profile(); if (p && clean(p.name)) return clean(p.name);
    try { return clean(localStorage.getItem(NAME_KEY)); } catch (e) { return ''; }
  }
  function setName(n){
    try { localStorage.setItem(NAME_KEY, n); } catch (e) {}
    var p = profile();
    if (p && typeof p === 'object') { p.name = n; try { localStorage.setItem('baio_student', JSON.stringify(p)); } catch (e) {} }
  }
  function partOfDay(){ var h = new Date().getHours(); return h < 12 ? T.gm : h < 17 ? T.ga : T.ge; }

  var css = '' +
    '.bg-ov{position:fixed;inset:0;z-index:2147483000;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(14,8,40,.55);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);opacity:0;transition:opacity .3s ease}' +
    '.bg-ov.in{opacity:1}' +
    '.bg-card{position:relative;width:min(380px,100%);border-radius:28px;padding:26px 22px 20px;text-align:center;color:#fff;overflow:hidden;' +
      'background:radial-gradient(circle at 85% 15%,rgba(255,120,200,.55),transparent 45%),linear-gradient(140deg,#3D17B8 0%,#5B2EE0 55%,#9B6BFF 100%);' +
      'box-shadow:0 24px 60px rgba(20,0,70,.55);transform:translateY(24px) scale(.94);transition:transform .45s cubic-bezier(.2,1.4,.4,1);font-family:Poppins,Inter,-apple-system,sans-serif}' +
    '.bg-ov.in .bg-card{transform:none}' +
    '.bg-wave{display:inline-block;font-size:54px;line-height:1;transform-origin:70% 70%;animation:bgWave 1.6s ease-in-out 2}' +
    '@keyframes bgWave{0%,100%{transform:rotate(0)}15%,45%{transform:rotate(16deg)}30%,60%{transform:rotate(-10deg)}}' +
    '.bg-k{font-size:13px;font-weight:600;letter-spacing:.06em;opacity:.85;margin-top:10px}' +
    '.bg-h{font-size:27px;font-weight:800;line-height:1.15;margin-top:4px;word-break:break-word}' +
    '.bg-h em{font-style:normal;background:linear-gradient(90deg,#FFE27A,#FFB347 60%,#FF9ECF);-webkit-background-clip:text;background-clip:text;color:transparent}' +
    '.bg-s{font-size:14px;opacity:.92;margin-top:8px;line-height:1.4}' +
    '.bg-tap{font-size:11.5px;opacity:.65;margin-top:14px}' +
    '.bg-in{width:100%;margin-top:16px;padding:14px 16px;border-radius:16px;border:2px solid rgba(255,255,255,.35);background:rgba(255,255,255,.96);color:#1E1B4B;font:600 17px Poppins,Inter,sans-serif;outline:none;text-align:center}' +
    '.bg-in:focus{border-color:#FFD25A;box-shadow:0 0 0 4px rgba(255,210,90,.35)}' +
    '.bg-go{width:100%;margin-top:12px;padding:14px;border:0;border-radius:16px;background:#FFC93C;color:#3A2600;font:800 16px Poppins,Inter,sans-serif;cursor:pointer;box-shadow:0 8px 18px rgba(0,0,0,.22)}' +
    '.bg-go:disabled{opacity:.6;cursor:default}' +
    '.bg-later{margin-top:10px;border:0;background:none;color:#fff;opacity:.8;font:600 13px Poppins,Inter,sans-serif;cursor:pointer;padding:6px 10px}' +
    '.bg-x{position:absolute;top:10px;right:12px;width:34px;height:34px;border-radius:50%;border:0;background:rgba(255,255,255,.18);color:#fff;font-size:16px;cursor:pointer}' +
    '.bg-dots i{position:absolute;border-radius:50%;opacity:.5;pointer-events:none;z-index:0}' +
    '.bg-card>*:not(.bg-dots):not(.bg-x){position:relative;z-index:1}' +
    '#bhName.bg-editable{cursor:pointer;border-bottom:2px dashed rgba(164,123,255,.55)}' +
    '@media (prefers-reduced-motion:reduce){.bg-ov,.bg-card{transition:none}.bg-wave{animation:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  function el(tag, cls, txt){ var e = document.createElement(tag); if (cls) e.className = cls; if (txt != null) e.textContent = txt; return e; }
  function overlay(){
    var ov = el('div', 'bg-ov'); ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true');
    var card = el('div', 'bg-card'); ov.appendChild(card);
    var dots = el('div', 'bg-dots'); [['#FFD25A', 14, '12%', '18%'], ['#7FF0D2', 10, '86%', '70%'], ['#FF9ECF', 18, '8%', '78%']].forEach(function(d){ var i = el('i'); i.style.cssText = 'background:' + d[0] + ';width:' + d[1] + 'px;height:' + d[1] + 'px;left:' + d[2] + ';top:' + d[3]; dots.appendChild(i); });
    card.appendChild(dots);
    document.body.appendChild(ov);
    requestAnimationFrame(function(){ requestAnimationFrame(function(){ ov.classList.add('in'); }); });
    return { ov: ov, card: card, close: function(cb){ ov.classList.remove('in'); setTimeout(function(){ if (ov.parentNode) ov.parentNode.removeChild(ov); if (cb) cb(); }, 300); } };
  }

  function updateHeader(){
    var n = first(getName()), b = document.getElementById('bhName');
    if (b) { if (n) b.textContent = 'Hi, ' + n; b.classList.add('bg-editable'); b.setAttribute('title', T.edit); b.setAttribute('role', 'button'); b.setAttribute('tabindex', '0'); }
  }

  function speak(text){
    try {
      if (!('speechSynthesis' in window)) return;
      var u = new SpeechSynthesisUtterance(text); u.lang = LANG === 'kn' ? 'kn-IN' : LANG === 'hi' ? 'hi-IN' : 'en-IN'; u.rate = 1;
      speechSynthesis.cancel(); speechSynthesis.speak(u);
    } catch (e) {}
  }

  function greet(isNew){
    var n = first(getName()); if (!n) return;
    markDay();
    var o = overlay();
    o.ov.setAttribute('aria-label', partOfDay() + ', ' + n);
    o.card.appendChild(el('div', 'bg-wave', '👋'));
    o.card.appendChild(el('div', 'bg-k', partOfDay()));
    var h = el('div', 'bg-h'); var em = el('em', null, n); h.appendChild(em); h.appendChild(document.createTextNode('!')); o.card.appendChild(h);
    o.card.appendChild(el('div', 'bg-s', isNew ? T.fresh : T.subs[Math.floor(Math.random() * T.subs.length)]));
    o.card.appendChild(el('div', 'bg-tap', T.tap));
    var done = false, timer;
    function shut(){ if (done) return; done = true; clearTimeout(timer); o.close(); document.removeEventListener('keydown', onKey); }
    function onKey(e){ if (e.key === 'Escape' || e.key === 'Enter') shut(); }
    o.ov.addEventListener('click', shut); document.addEventListener('keydown', onKey);
    timer = setTimeout(shut, isNew ? 3600 : 3000);
  }

  function ask(opts){
    opts = opts || {};
    var o = overlay();
    o.ov.setAttribute('aria-label', T.ask);
    if (opts.edit) { var x = el('button', 'bg-x', '✕'); x.type = 'button'; x.setAttribute('aria-label', 'Close'); x.onclick = function(){ o.close(); }; o.card.appendChild(x); }
    o.card.appendChild(el('div', 'bg-wave', '🦉'));
    o.card.appendChild(el('div', 'bg-h', opts.edit ? T.edit : T.welcome));
    o.card.appendChild(el('div', 'bg-s', T.ask));
    var inp = el('input', 'bg-in'); inp.type = 'text'; inp.maxLength = 30; inp.placeholder = T.ph; inp.autocomplete = 'given-name'; inp.setAttribute('aria-label', T.ask); inp.setAttribute('enterkeyhint', 'go');
    if (opts.edit) inp.value = getName();
    o.card.appendChild(inp);
    var go = el('button', 'bg-go', opts.edit ? T.save : T.go); go.type = 'button'; o.card.appendChild(go);
    function sync(){ go.disabled = !clean(inp.value); }
    inp.addEventListener('input', sync); sync();
    function submit(){
      var n = clean(inp.value); if (!n) { inp.focus(); return; }
      setName(n); updateHeader();
      o.close(function(){ greet(!opts.edit); });
      speak(T.say(partOfDay(), first(n)));
    }
    go.addEventListener('click', submit);
    inp.addEventListener('keydown', function(e){ if (e.key === 'Enter') { e.preventDefault(); submit(); } });
    if (!opts.edit) {
      var later = el('button', 'bg-later', T.later); later.type = 'button';
      later.onclick = function(){ markDay(); o.close(); };
      o.card.appendChild(later);
    }
    setTimeout(function(){ try { inp.focus({ preventScroll: true }); } catch (e) {} }, 350);
  }

  function boot(){
    updateHeader();
    var b = document.getElementById('bhName');
    if (b) {
      var edit = function(){ ask({ edit: true }); };
      b.addEventListener('click', edit);
      b.addEventListener('keydown', function(e){ if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); edit(); } });
    }
    if (location.hash === '#baio-tour') return;
    /* greet (or ask the name) at most once a day */
    var seen = false; try { seen = sessionStorage.getItem(SEEN_KEY) === '1' || localStorage.getItem(DAY_KEY) === today(); } catch (e) {}
    if (seen) return;
    if (getName()) greet(false); else ask();
  }
  window.BAIOGreet = { ask: function(){ ask({ edit: !!getName() }); }, greet: function(){ greet(false); } };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
