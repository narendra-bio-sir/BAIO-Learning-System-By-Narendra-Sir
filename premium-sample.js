/* BAIO Learning System · Premium free sample
   Instead of a hard lock, every premium tab of a chapter gives a real free sample:
     - MCQ / NEET / KCET / quiz tabs: 5 questions answered
     - Paper Generator: 1 paper generated
     - Mind Map, Class Presentation, One-Shot, Podcast, Board Important, Answer Practice: a timed preview
   When the sample is used up, the chapter's own unlock screen (payment + unlock code) is shown,
   with a short "you've used your free sample" note on top. Samples are counted per chapter, per tab,
   on this device.

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
         unlock:'Unlock all', used:'You have used your free sample of this feature.', usedSub:'Liked it? Unlock every premium feature of this chapter below.' },
    kn:{ free:'ಉಚಿತ ಮಾದರಿ', q:function(n){ return Q_LIMIT + ' ರಲ್ಲಿ ' + n + ' ಉಚಿತ ಪ್ರಶ್ನೆ ಉಳಿದಿವೆ'; }, g:'1 ಉಚಿತ ಪತ್ರಿಕೆ', t:function(s){ return fmt(s) + ' ಉಚಿತ ಮುನ್ನೋಟ ಉಳಿದಿದೆ'; },
         unlock:'ಎಲ್ಲ ತೆರೆಯಿರಿ', used:'ಈ ವಿಭಾಗದ ಉಚಿತ ಮಾದರಿ ಮುಗಿದಿದೆ.', usedSub:'ಇಷ್ಟವಾಯಿತೇ? ಈ ಅಧ್ಯಾಯದ ಎಲ್ಲಾ ಪ್ರೀಮಿಯಂ ವಿಭಾಗಗಳನ್ನು ಕೆಳಗೆ ತೆರೆಯಿರಿ.' },
    hi:{ free:'मुफ़्त नमूना', q:function(n){ return Q_LIMIT + ' में से ' + n + ' मुफ़्त प्रश्न बाकी'; }, g:'1 मुफ़्त पेपर', t:function(s){ return fmt(s) + ' मुफ़्त प्रीव्यू बाकी'; },
         unlock:'सब अनलॉक करें', used:'इस फ़ीचर का आपका मुफ़्त नमूना पूरा हो गया।', usedSub:'पसंद आया? इस अध्याय के सभी प्रीमियम फ़ीचर नीचे अनलॉक करें।' }
  };
  function fmt(s){ s = Math.max(0, Math.ceil(s)); var m = Math.floor(s / 60), x = s % 60; return m + ':' + (x < 10 ? '0' : '') + x; }

  /* ---------- styles ---------- */
  var css = '.bsmp-bar{position:relative;z-index:1;display:flex;align-items:center;gap:10px;margin:0 0 12px;padding:9px 12px;border-radius:12px;'
    + 'background:linear-gradient(120deg,#0e1b33,#13304a);color:#fff;border:1px solid #e9c45a;box-shadow:0 4px 14px rgba(0,0,0,.18);font:600 13px Inter,system-ui,sans-serif}'
    + '.bsmp-bar .ic{font-size:18px}.bsmp-bar .tx{flex:1;min-width:0;line-height:1.3}.bsmp-bar .tx b{color:#e9c45a;display:block;font-size:11px;letter-spacing:.06em;text-transform:uppercase}'
    + '.bsmp-bar button{flex:0 0 auto;border:0;border-radius:10px;padding:8px 12px;background:linear-gradient(135deg,#d4af37,#e9c45a);color:#1a1406;font:700 12.5px Inter,system-ui,sans-serif;cursor:pointer}'
    + '.bsmp-note{margin:0 0 12px;padding:12px 14px;border-radius:12px;background:#fbf1d6;border:1px solid #e6cf8a;color:#3a2c05;font:600 14px/1.45 Inter,system-ui,sans-serif}'
    + '.bsmp-note small{display:block;font-weight:400;margin-top:2px}';
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
    });
  }, 1000);

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
