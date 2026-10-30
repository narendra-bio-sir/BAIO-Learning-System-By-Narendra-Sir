/* BAIO Learning System · Premium free sample
   Instead of a hard lock, every premium tab of a chapter gives a real free sample:
     - MCQ / NEET / KCET / quiz tabs: 5 questions answered
     - Paper Generator: 1 paper generated
     - Mind Map, Class Presentation, One-Shot, Podcast, Board Important, Answer Practice: a timed preview
   When the sample is used up, the chapter's own unlock screen (payment + unlock code) is shown,
   with a short "you've used your free sample" note on top. Samples are counted per chapter, per tab,
   on this device.
   While a sample is running, the content is protected: share / download / print / copy / PDF buttons
   are blocked, long-press, text selection and right-click are off, a "FREE SAMPLE · name · roll"
   watermark sits over the content, and the content blurs when the app loses focus or PrintScreen is pressed.

   API (called from each chapter app):
     BaioSample.allow(tab)                    -> true while the sample for this tab is not used up
     BaioSample.start(tab, containerEl, join, key)  -> run the sample inside containerEl; join() shows the unlock screen
     BaioSample.notice(tab, containerEl)      -> put the "sample used" note at the top of the unlock screen
     BaioSample.clear()                       -> forget the active single-container sample (call before re-render)
*/
(function(){
  'use strict';
  if(window.BaioSample) return;

  var Q_TABS = { mcq:1, neet:1, kcet:1, quiz:1, adv:1 };
  var Q_LIMIT = 5, GEN_LIMIT = 1;
  var TIME = { mindmap:90, classppt:120, oneshot:120, podcast:90, boardimp:90, writeit:120 };
  var DEFAULT_TIME = 90;
  var STORE = 'baio_sample_v1';

  function kind(tab){ return Q_TABS[tab] ? 'q' : (tab === 'papergen' ? 'g' : 't'); }
  function chapterKey(k){
    if(k) return k;
    try{ if(typeof PREMIUM_KEY !== 'undefined') return PREMIUM_KEY; }catch(e){}
    return location.pathname.replace(/[^a-z0-9]+/gi, '_');
  }
  function load(){ try{ return JSON.parse(localStorage.getItem(STORE) || '{}') || {}; }catch(e){ return {}; } }
  function save(d){ try{ localStorage.setItem(STORE, JSON.stringify(d)); }catch(e){} }
  function rec(key, tab){ var d = load(); d[key] = d[key] || {}; d[key][tab] = d[key][tab] || { q:0, g:0, t:0 }; return { d:d, r:d[key][tab] }; }
  function usedUp(key, tab){
    var r = ((load()[key] || {})[tab]) || { q:0, g:0, t:0 };
    var k = kind(tab);
    if(k === 'q') return r.q >= Q_LIMIT;
    if(k === 'g') return r.g >= GEN_LIMIT;
    return r.t >= (TIME[tab] || DEFAULT_TIME);
  }
  function lang(){ try{ if(typeof currentLang !== 'undefined' && (currentLang === 'kn' || currentLang === 'hi')) return currentLang; }catch(e){} return 'en'; }
  var T = {
    en:{ free:'Free sample', q:function(n){ return n + ' of ' + Q_LIMIT + ' free questions left'; }, g:'1 free paper', t:function(s){ return fmt(s) + ' free preview left'; },
         unlock:'Unlock all', used:'You have used your free sample of this feature.', usedSub:'Liked it? Unlock every premium feature of this chapter below.',
         prot:'🔒 Share, download and screenshots are available after you unlock this chapter.', wm:'FREE SAMPLE' },
    kn:{ free:'ಉಚಿತ ಮಾದರಿ', q:function(n){ return Q_LIMIT + ' ರಲ್ಲಿ ' + n + ' ಉಚಿತ ಪ್ರಶ್ನೆ ಉಳಿದಿವೆ'; }, g:'1 ಉಚಿತ ಪತ್ರಿಕೆ', t:function(s){ return fmt(s) + ' ಉಚಿತ ಮುನ್ನೋಟ ಉಳಿದಿದೆ'; },
         unlock:'ಎಲ್ಲ ತೆರೆಯಿರಿ', used:'ಈ ವಿಭಾಗದ ಉಚಿತ ಮಾದರಿ ಮುಗಿದಿದೆ.', usedSub:'ಇಷ್ಟವಾಯಿತೇ? ಈ ಅಧ್ಯಾಯದ ಎಲ್ಲಾ ಪ್ರೀಮಿಯಂ ವಿಭಾಗಗಳನ್ನು ಕೆಳಗೆ ತೆರೆಯಿರಿ.',
         prot:'🔒 ಹಂಚಿಕೆ, ಡೌನ್‌ಲೋಡ್ ಮತ್ತು ಸ್ಕ್ರೀನ್‌ಶಾಟ್ ಈ ಅಧ್ಯಾಯವನ್ನು ತೆರೆದ ನಂತರ ಲಭ್ಯ.', wm:'FREE SAMPLE' },
    hi:{ free:'मुफ़्त नमूना', q:function(n){ return Q_LIMIT + ' में से ' + n + ' मुफ़्त प्रश्न बाकी'; }, g:'1 मुफ़्त पेपर', t:function(s){ return fmt(s) + ' मुफ़्त प्रीव्यू बाकी'; },
         unlock:'सब अनलॉक करें', used:'इस फ़ीचर का आपका मुफ़्त नमूना पूरा हो गया।', usedSub:'पसंद आया? इस अध्याय के सभी प्रीमियम फ़ीचर नीचे अनलॉक करें।',
         prot:'🔒 शेयर, डाउनलोड और स्क्रीनशॉट इस अध्याय को अनलॉक करने के बाद उपलब्ध हैं।', wm:'FREE SAMPLE' }
  };
  function fmt(s){ s = Math.max(0, Math.ceil(s)); var m = Math.floor(s / 60), x = s % 60; return m + ':' + (x < 10 ? '0' : '') + x; }

  /* ---------- styles ---------- */
  var css = '.bsmp-bar{position:relative;z-index:1;display:flex;align-items:center;gap:10px;margin:0 0 12px;padding:9px 12px;border-radius:12px;'
    + 'background:linear-gradient(120deg,#0e1b33,#13304a);color:#fff;border:1px solid #e9c45a;box-shadow:0 4px 14px rgba(0,0,0,.18);font:600 13px Inter,system-ui,sans-serif}'
    + '.bsmp-bar .ic{font-size:18px}.bsmp-bar .tx{flex:1;min-width:0;line-height:1.3}.bsmp-bar .tx b{color:#e9c45a;display:block;font-size:11px;letter-spacing:.06em;text-transform:uppercase}'
    + '.bsmp-bar button{flex:0 0 auto;border:0;border-radius:10px;padding:8px 12px;background:linear-gradient(135deg,#d4af37,#e9c45a);color:#1a1406;font:700 12.5px Inter,system-ui,sans-serif;cursor:pointer}'
    + '.bsmp-note{margin:0 0 12px;padding:12px 14px;border-radius:12px;background:#fbf1d6;border:1px solid #e6cf8a;color:#3a2c05;font:600 14px/1.45 Inter,system-ui,sans-serif}'
    + '.bsmp-note small{display:block;font-weight:400;margin-top:2px}'
    + '.bsmp-guard{-webkit-user-select:none!important;user-select:none!important;-webkit-touch-callout:none!important}'
    + '.bsmp-guard input,.bsmp-guard textarea,.bsmp-guard [contenteditable]{-webkit-user-select:text!important;user-select:text!important}'
    + '.bsmp-guard img,.bsmp-guard canvas,.bsmp-guard svg{-webkit-user-drag:none;-webkit-touch-callout:none}'
    + '.bsmp-wm{position:absolute;inset:0;z-index:30;pointer-events:none;background-repeat:repeat;opacity:.16}'
    + '.bsmp-blocked{opacity:.45!important;filter:grayscale(1)!important;cursor:not-allowed!important}'
    + 'body.bsmp-hide .bsmp-guard{filter:blur(18px)!important}'
    + '.bsmp-toast{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:2147483600;max-width:min(92vw,440px);padding:11px 16px;border-radius:12px;'
    + 'background:#0e1b33;color:#fff;border:1px solid #e9c45a;box-shadow:0 8px 24px rgba(0,0,0,.3);font:600 13.5px/1.4 Inter,system-ui,sans-serif;text-align:center}'
    + '@media print{.bsmp-guard{display:none!important}}';
  function addCss(){ if(document.getElementById('bsmpCss')) return; var s = document.createElement('style'); s.id = 'bsmpCss'; s.textContent = css; (document.head || document.documentElement).appendChild(s); }

  /* ---------- active samples ---------- */
  var active = [];   /* {tab, el, join, key, bar, handler} */
  function stopMedia(){
    try{ document.querySelectorAll('audio,video').forEach(function(m){ try{ m.pause(); }catch(e){} }); }catch(e){}
    try{ if(window.speechSynthesis) speechSynthesis.cancel(); }catch(e){}
    ['osStop','pptStopTalk','exStop'].forEach(function(f){ try{ if(typeof window[f] === 'function') window[f](); }catch(e){} });
    try{ if(document.fullscreenElement && document.exitFullscreen) document.exitFullscreen(); }catch(e){}
    try{ document.querySelectorAll('.runner-fullscreen,.is-fullscreen,.osx-fs,.fs-on').forEach(function(n){ n.classList.remove('runner-fullscreen','is-fullscreen','osx-fs','fs-on'); }); }catch(e){}
    try{ document.body.style.overflow = ''; }catch(e){}
  }
  function finish(a){
    detach(a);
    stopMedia();
    try{ a.join(a.tab); }catch(e){}
    setTimeout(function(){ api.notice(a.tab, a.noticeEl ? a.noticeEl() : a.el); try{ (a.noticeEl ? a.noticeEl() : a.el).scrollIntoView({block:'start'}); }catch(e){} }, 30);
  }
  function detach(a){
    guardOff(a);
    if(a.handler) a.el.removeEventListener('click', a.handler, true);
    if(a.bar && a.bar.parentNode) a.bar.parentNode.removeChild(a.bar);
    var i = active.indexOf(a); if(i >= 0) active.splice(i, 1);
  }
  function paintBar(a){
    var L = T[lang()], r = rec(a.key, a.tab).r, k = kind(a.tab), msg;
    if(k === 'q') msg = L.q(Math.max(0, Q_LIMIT - r.q));
    else if(k === 'g') msg = L.g;
    else msg = L.t((TIME[a.tab] || DEFAULT_TIME) - r.t);
    if(!a.bar){
      a.bar = document.createElement('div'); a.bar.className = 'bsmp-bar';
      a.bar.innerHTML = '<span class="ic">🎁</span><span class="tx"><b></b><span class="m"></span></span><button type="button"></button>';
      a.bar.querySelector('button').addEventListener('click', function(){ finish(a); });
    }
    a.bar.querySelector('b').textContent = L.free;
    a.bar.querySelector('.m').textContent = msg;
    a.bar.querySelector('button').textContent = '🔓 ' + L.unlock;
    if(a.bar.parentNode !== a.el || a.el.firstChild !== a.bar) a.el.insertBefore(a.bar, a.el.firstChild);
  }
  function visible(el){ return !!(el && el.isConnected && (el.offsetParent !== null || el.getClientRects().length) && document.visibilityState !== 'hidden'); }

  /* one ticker for timed previews and keeping the bar in place after re-renders */
  setInterval(function(){
    active.slice().forEach(function(a){
      if(!a.el.isConnected){ detach(a); return; }
      if(!visible(a.el)) return;
      if(kind(a.tab) === 't'){
        var o = rec(a.key, a.tab); o.r.t += 1; save(o.d);
        if(o.r.t >= (TIME[a.tab] || DEFAULT_TIME)){ finish(a); return; }
      }
      paintBar(a);
      if(a.guard) markGuard(a);
    });
  }, 1000);

  /* ---------- content protection while a sample runs ---------- */
  var BLOCK_RE = /share|download|export|print|pdf|save ?as|save ?image|whatsapp|copy|screenshot|\.png|html2canvas/i;
  function guarding(){ return active.some(function(a){ return visible(a.el); }); }
  function guardedEl(node){ for(var i = 0; i < active.length; i++){ if(active[i].el.contains(node)) return active[i]; } return null; }
  function isBlockedCtl(t){
    if(!t || (t.closest && t.closest('.bsmp-bar'))) return false;
    var s = (t.textContent || '').slice(0, 80) + ' ' + (t.getAttribute('onclick') || '') + ' ' + (t.id || '') + ' ' + (typeof t.className === 'string' ? t.className : '') + ' ' + (t.getAttribute('aria-label') || '') + ' ' + (t.getAttribute('title') || '');
    return BLOCK_RE.test(s) || (t.tagName === 'A' && t.hasAttribute('download'));
  }
  var toastT = null;
  function toast(){
    addCss();
    var n = document.getElementById('bsmpToast');
    if(!n){ n = document.createElement('div'); n.id = 'bsmpToast'; n.className = 'bsmp-toast'; document.body.appendChild(n); }
    n.textContent = T[lang()].prot; n.style.display = 'block';
    clearTimeout(toastT); toastT = setTimeout(function(){ n.style.display = 'none'; }, 3200);
  }
  function studentTag(){
    var p = null; try{ p = JSON.parse(localStorage.getItem('baio_student') || 'null'); }catch(e){}
    var bits = [T.en.wm, 'BAIO']; if(p && p.name) bits.push(String(p.name).slice(0, 24)); if(p && p.roll) bits.push(String(p.roll).slice(0, 14));
    return bits.join(' · ');
  }
  function wmUrl(){
    var txt = studentTag().replace(/[<>&"']/g, '');
    var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="190"><text x="150" y="100" text-anchor="middle" transform="rotate(-28 150 95)" '
      + 'font-family="Inter,Arial,sans-serif" font-size="15" font-weight="700" fill="#c0392b">' + txt + '</text></svg>';
    return 'url("data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg) + '")';
  }
  function guardOn(a){
    a.el.classList.add('bsmp-guard');
    if(getComputedStyle(a.el).position === 'static'){ a.el.style.position = 'relative'; a.posSet = true; }
    a.guard = function(e){
      if(!a.el.isConnected) return;
      var t = e.target && e.target.closest ? e.target.closest('button,a,[onclick],[role="button"],label,input[type="button"]') : null;
      if(t && a.el.contains(t) && isBlockedCtl(t)){ e.preventDefault(); e.stopImmediatePropagation(); toast(); }
    };
    a.stopEv = function(e){ var tg = e.target; if(e.type === 'selectstart' && tg && (tg.closest ? tg.closest('input,textarea,[contenteditable]') : null)) return; e.preventDefault(); if(e.type !== 'selectstart') toast(); };
    a.el.addEventListener('click', a.guard, true);
    ['contextmenu','copy','cut','dragstart'].forEach(function(ev){ a.el.addEventListener(ev, a.stopEv, true); });
    a.el.addEventListener('selectstart', a.stopEv, true);
    markGuard(a);
  }
  function guardOff(a){
    if(!a.guard) return;
    a.el.removeEventListener('click', a.guard, true);
    ['contextmenu','copy','cut','dragstart','selectstart'].forEach(function(ev){ a.el.removeEventListener(ev, a.stopEv, true); });
    a.el.classList.remove('bsmp-guard');
    if(a.posSet) a.el.style.position = '';
    if(a.wm && a.wm.parentNode) a.wm.parentNode.removeChild(a.wm);
    try{ a.el.querySelectorAll('.bsmp-blocked').forEach(function(b){ b.classList.remove('bsmp-blocked'); }); }catch(e){}
    a.guard = null;
    if(!active.some(function(x){ return x !== a && x.guard; })) document.body.classList.remove('bsmp-hide');
  }
  /* keep watermark and dimmed buttons in place after the chapter re-renders its content */
  function markGuard(a){
    if(!a.wm){ a.wm = document.createElement('div'); a.wm.className = 'bsmp-wm'; a.wm.setAttribute('aria-hidden', 'true'); a.wm.style.backgroundImage = wmUrl(); }
    if(a.wm.parentNode !== a.el) a.el.appendChild(a.wm);
    try{ a.el.querySelectorAll('button,a,[onclick],[role="button"]').forEach(function(b){ if(isBlockedCtl(b)) b.classList.add('bsmp-blocked'); }); }catch(e){}
  }

  /* page-wide: block the browser's share / print / download paths while a sample is on screen */
  (function(){
    try{
      if(navigator.share){ var sh = navigator.share.bind(navigator); navigator.share = function(){ if(guarding()){ toast(); return Promise.reject(new Error('sample')); } return sh.apply(null, arguments); }; }
    }catch(e){}
    try{ var pr = window.print; window.print = function(){ if(guarding()){ toast(); return; } return pr.apply(window, arguments); }; }catch(e){}
    try{
      var ac = HTMLAnchorElement.prototype.click;
      HTMLAnchorElement.prototype.click = function(){ if(guarding() && (this.hasAttribute('download') || /^(blob|data):/i.test(this.href || ''))){ toast(); return; } return ac.apply(this, arguments); };
    }catch(e){}
    try{
      var wo = window.open;
      window.open = function(u){ if(guarding() && /^(blob|data):|wa\.me|whatsapp|facebook\.com\/sharer|twitter\.com\/intent|t\.me\/share/i.test(String(u || ''))){ toast(); return null; } return wo.apply(window, arguments); };
    }catch(e){}
    document.addEventListener('click', function(e){
      if(!guarding()) return;
      var t = e.target && e.target.closest ? e.target.closest('a[download]') : null;
      if(t){ e.preventDefault(); e.stopImmediatePropagation(); toast(); }
    }, true);
    document.addEventListener('keydown', function(e){
      if(!guarding()) return;
      var k = (e.key || '').toLowerCase(), mod = e.ctrlKey || e.metaKey;
      if(k === 'printscreen' || (mod && (k === 'p' || k === 's' || k === 'c')) || (e.metaKey && e.shiftKey && /[345]/.test(k))){
        e.preventDefault();
        if(k === 'printscreen'){ try{ navigator.clipboard && navigator.clipboard.writeText(''); }catch(x){} document.body.classList.add('bsmp-hide'); setTimeout(function(){ document.body.classList.remove('bsmp-hide'); }, 1500); }
        toast();
      }
    }, true);
    document.addEventListener('keyup', function(e){ if(guarding() && (e.key || '').toLowerCase() === 'printscreen'){ try{ navigator.clipboard && navigator.clipboard.writeText(''); }catch(x){} toast(); } }, true);
    /* blur the sample when the app goes to the background / loses focus (app switcher, snipping tools) */
    function hide(){
      if(!active.some(function(a){ return a.guard; })) return;
      var f = document.activeElement; if(f && f.tagName === 'IFRAME' && guardedEl(f)) return;
      document.body.classList.add('bsmp-hide');
    }
    function show(){ document.body.classList.remove('bsmp-hide'); }
    window.addEventListener('blur', hide);
    window.addEventListener('focus', show);
    document.addEventListener('visibilitychange', function(){ if(document.visibilityState === 'hidden') hide(); else setTimeout(show, 250); });
    window.addEventListener('beforeprint', function(){ if(guarding()) toast(); });
  })();

  var api = {
    allow: function(tab, key){ return !usedUp(chapterKey(key), tab); },
    clear: function(){ active.filter(function(a){ return a.single; }).forEach(detach); },
    start: function(tab, el, join, key, opts){
      if(!el || typeof join !== 'function') return;
      addCss();
      key = chapterKey(key);
      active.filter(function(a){ return a.el === el; }).forEach(detach);
      if(usedUp(key, tab)){ join(tab); api.notice(tab, el); return; }
      var a = { tab:tab, el:el, join:join, key:key, single: !!(opts && opts.single), noticeEl: opts && opts.noticeEl };
      var k = kind(tab);
      if(k === 'q' || k === 'g'){
        a.handler = function(e){
          if(!a.el.isConnected) return;
          var t = e.target && e.target.closest ? e.target.closest('button,.qz-opt,.opt,[onclick]') : null;
          if(!t || !a.el.contains(t)) return;
          var o = rec(a.key, a.tab);
          if(k === 'q'){
            var isOpt = t.classList.contains('qz-opt') || t.classList.contains('opt') || /Answer\(/.test(t.getAttribute('onclick') || '');
            if(!isOpt || t.disabled || t.classList.contains('correct') || t.classList.contains('wrong')) return;
            var grp = t.parentElement; if(grp && grp.querySelector('.correct,.wrong,.selected,.right,.incorrect,.sel,[disabled]')) return;
            if(o.r.q >= Q_LIMIT){ e.preventDefault(); e.stopImmediatePropagation(); finish(a); return; }
            o.r.q += 1; save(o.d); setTimeout(function(){ paintBar(a); }, 0);
          } else {
            var txt = (t.textContent || '') + ' ' + (t.getAttribute('onclick') || '');
            if(!/generate|paperGen|pgGenerate|genPaper/i.test(txt)) return;
            if(o.r.g >= GEN_LIMIT){ e.preventDefault(); e.stopImmediatePropagation(); finish(a); return; }
            o.r.g += 1; save(o.d); setTimeout(function(){ paintBar(a); }, 0);
          }
        };
        el.addEventListener('click', a.handler, true);
      }
      active.push(a);
      paintBar(a);
      guardOn(a);
    },
    notice: function(tab, el){
      if(!el) return; addCss();
      var key = chapterKey(); if(!usedUp(key, tab)) return;
      if(el.querySelector(':scope > .bsmp-note')) return;
      var L = T[lang()], n = document.createElement('div'); n.className = 'bsmp-note';
      n.innerHTML = '🎁 ' + L.used + '<small>' + L.usedSub + '</small>';
      el.insertBefore(n, el.firstChild);
    },
    /* for testing / support: give a student their samples back on this device */
    reset: function(){ try{ localStorage.removeItem(STORE); }catch(e){} }
  };
  window.BaioSample = api;
})();
