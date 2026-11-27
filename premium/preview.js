/* Protected preview viewer for paid notes (home "Premium Notes" sheet).
   window.baioPreview({title, sub, imgs:[url], more, feats:[text], cta:{t, h} or {t, fn}})  fn: closes the preview, then runs
   - Pages are drawn on <canvas> (no image to long-press and save) under a live watermark with the
     student's name / roll (from this phone's BAIO profile), the date and time, that slowly drifts so it
     shows on any screenshot or recording.
   - The preview hides itself when the app loses focus or goes to the background, when PrintScreen,
     print or save shortcuts are pressed, and it never prints. Copy, select, drag and the long-press
     menu are blocked.
   NOTE: no website or web app can fully stop a phone's own screenshot or screen recorder. The watermark
   is what keeps the brand and the viewer's identity on any copy that leaks. */
(function(){
  if(window.baioPreview) return;
  var css = ''
    + '.pv-ov{position:fixed;inset:0;z-index:2147483000;background:#0d0a1a;color:#fff;display:flex;flex-direction:column;font-family:Poppins,Inter,"Noto Sans Kannada","Noto Sans Devanagari",system-ui,sans-serif;'
    + '-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}'
    + '.pv-hd{display:flex;align-items:center;gap:10px;padding:12px 14px;background:linear-gradient(120deg,#3B1FA8,#7C2D12);flex:none}'
    + '.pv-hd b{display:block;font-size:15px;line-height:1.25}.pv-hd small{display:block;font-size:11.5px;opacity:.85;margin-top:2px}'
    + '.pv-hd .tg{margin-left:auto;flex:none;font:800 10px Inter,sans-serif;letter-spacing:.08em;padding:4px 8px;border-radius:99px;background:#FCD34D;color:#3b1d00}'
    + '.pv-x{flex:none;width:40px;height:40px;border-radius:12px;border:0;background:rgba(255,255,255,.16);color:#fff;font-size:20px;cursor:pointer}'
    + '.pv-sc{position:relative;flex:1;overflow:auto;-webkit-overflow-scrolling:touch;padding:12px 12px 24px}'
    + '.pv-pg{position:relative;margin:0 auto 12px;max-width:820px;border-radius:10px;overflow:hidden;background:#fff;box-shadow:0 8px 26px rgba(0,0,0,.45)}'
    + '.pv-pg canvas{display:block;width:100%;height:auto;pointer-events:none}'
    + '.pv-pg .ld{padding:60px 0;text-align:center;color:#666;font-size:13px}'
    + '.pv-wm{position:absolute;inset:-30%;pointer-events:none;display:flex;flex-direction:column;justify-content:space-around;transform:rotate(-28deg);animation:pvDrift 14s ease-in-out infinite alternate}'
    + '.pv-wm span{white-space:nowrap;font:800 15px/1 Inter,sans-serif;letter-spacing:.5px;color:rgba(124,58,237,.20);text-shadow:0 0 1px rgba(255,255,255,.4)}'
    + '.pv-wm span:nth-child(2n){color:rgba(234,88,12,.18);margin-left:-120px}'
    + '@keyframes pvDrift{from{transform:rotate(-28deg) translate(-40px,-20px)}to{transform:rotate(-28deg) translate(40px,30px)}}'
    + '.pv-end{max-width:820px;margin:4px auto 0;padding:16px;border-radius:16px;background:linear-gradient(135deg,rgba(251,191,36,.16),rgba(124,58,237,.18));border:1.5px solid rgba(252,211,77,.45);text-align:center}'
    + '.pv-end b{display:block;font-size:15.5px}.pv-end p{margin:6px 0 0;font-size:13px;opacity:.85;line-height:1.5}'
    + '.pv-end ul{text-align:left;margin:10px 0 0;padding-left:20px;font-size:13px;line-height:1.55;opacity:.92}'
    + '.pv-go{display:block;margin:12px auto 0;max-width:340px;padding:13px 16px;border-radius:14px;background:linear-gradient(90deg,#F59E0B,#EA580C);color:#fff!important;font-weight:800;font-size:15px;text-decoration:none}'
    + '.pv-safe{max-width:820px;margin:10px auto 0;font-size:11px;opacity:.6;text-align:center;line-height:1.5}'
    + '.pv-sh{position:absolute;inset:0;z-index:5;display:none;flex-direction:column;align-items:center;justify-content:center;gap:6px;background:#0b1530;text-align:center;font-weight:700;font-size:18px;cursor:pointer}'
    + '.pv-sh span{font-weight:400;font-size:13px;opacity:.8}'
    + '.pv-ov.hid .pv-sc{visibility:hidden}.pv-ov.hid .pv-sh{display:flex}'
    + '@media print{.pv-ov{display:none!important}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  function esc(t){ var d = document.createElement('div'); d.textContent = t == null ? '' : String(t); return d.innerHTML; }
  function who(){
    var n = '', r = '';
    try{ var p = JSON.parse(localStorage.getItem('baio_student') || 'null'); if(p){ n = String(p.name || '').trim(); r = String(p.roll || p.rollNo || '').trim(); } }catch(e){}
    if(!n){ try{ n = String(localStorage.getItem('baio_user_name') || '').trim(); }catch(e){} }
    return { n:n.slice(0, 24), r:r.slice(0, 12) };
  }
  function stamp(){
    var w = who(), d = new Date(), t = d.toLocaleDateString('en-IN', { day:'2-digit', month:'short' }) + ' ' + d.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' });
    return 'BAIO PREVIEW · ' + (w.n ? w.n + (w.r ? ' #' + w.r : '') : 'Narendra Sir') + ' · ' + t;
  }
  /* draw one page on a canvas, with the viewer's stamp burnt into the pixels too */
  function draw(url, box, text){
    var im = new Image(); im.decoding = 'async';
    im.onload = function(){
      var cv = document.createElement('canvas'), W = im.naturalWidth, H = im.naturalHeight; cv.width = W; cv.height = H;
      var x = cv.getContext('2d'); x.drawImage(im, 0, 0);
      x.save(); x.translate(W / 2, H / 2); x.rotate(-28 * Math.PI / 180);
      var fz = Math.max(16, Math.round(W / 34)); x.font = '700 ' + fz + 'px Inter, sans-serif'; x.fillStyle = 'rgba(30,30,60,.13)';
      var tw = x.measureText(text).width + fz * 3, D = Math.sqrt(W * W + H * H);
      for(var yy = -D / 2, row = 0; yy < D / 2; yy += fz * 5, row++) for(var xx = -D / 2 - (row % 2) * tw / 2; xx < D / 2; xx += tw) x.fillText(text, xx, yy);
      x.restore();
      box.innerHTML = ''; box.appendChild(cv);
      var wm = document.createElement('div'); wm.className = 'pv-wm'; var s = '';
      for(var i = 0; i < 14; i++) s += '<span>' + esc(text + '   ·   ' + text) + '</span>';
      wm.innerHTML = s; box.appendChild(wm);
    };
    im.onerror = function(){ box.innerHTML = '<div class="ld">Could not load the preview. Check your internet connection.</div>'; };
    im.src = url;
  }

  window.baioPreview = function(o){
    var ov = document.createElement('div'); ov.className = 'pv-ov'; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-label', 'Preview: ' + o.title);
    var text = stamp();
    ov.innerHTML = '<div class="pv-hd"><div><b>' + esc(o.title) + '</b><small>' + esc(o.sub || '') + '</small></div><span class="tg">PREVIEW</span><button type="button" class="pv-x" aria-label="Close preview">✕</button></div>'
      + '<div class="pv-sc"></div>'
      + '<div class="pv-sh">🔒 Preview hidden<span>Tap here to continue</span></div>';
    var sc = ov.querySelector('.pv-sc');
    (o.imgs || []).forEach(function(u){ var b = document.createElement('div'); b.className = 'pv-pg'; b.innerHTML = '<div class="ld">Loading preview…</div>'; sc.appendChild(b); draw(u, b, text); });
    var end = '<div class="pv-end"><b>🔒 ' + esc(o.more || 'The preview ends here') + '</b>'
      + (o.feats && o.feats.length ? '<ul>' + o.feats.map(function(f){ return '<li>' + esc(f) + '</li>'; }).join('') + '</ul>' : '')
      + '<p>Unlock the full version on this phone with your code.</p>'
      + (o.cta ? (o.cta.fn ? '<button type="button" class="pv-go" style="border:0;width:100%;cursor:pointer;font-family:inherit">' + esc(o.cta.t) + '</button>' : '<a class="pv-go" href="' + esc(o.cta.h) + '">' + esc(o.cta.t) + '</a>') : '') + '</div>'
      + '<p class="pv-safe">Preview is watermarked with your name and the time. Screenshots and recordings carry the watermark. Sharing paid notes is not allowed.</p>';
    sc.insertAdjacentHTML('beforeend', end);
    document.body.appendChild(ov);
    var prevOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden';

    function hide(){ ov.classList.add('hid'); }
    function show(){ ov.classList.remove('hid'); }
    function block(e){ e.preventDefault(); }
    function onVis(){ if(document.hidden) hide(); }
    function onKey(e){
      var k = (e.key || '').toLowerCase(), mod = e.ctrlKey || e.metaKey;
      if(k === 'escape'){ close(); return; }
      if(k === 'printscreen' || (mod && (k === 'p' || k === 's' || k === 'c')) || (e.metaKey && e.shiftKey && /^[345]$/.test(k))){
        hide(); e.preventDefault(); try{ if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText('').catch(function(){}); }catch(_){}
      }
    }
    function close(){
      ov.remove(); document.body.style.overflow = prevOverflow;
      document.removeEventListener('visibilitychange', onVis); window.removeEventListener('blur', hide); window.removeEventListener('pagehide', hide);
      window.removeEventListener('beforeprint', hide); document.removeEventListener('keydown', onKey, true); document.removeEventListener('keyup', onKey, true);
    }
    ['contextmenu', 'dragstart', 'selectstart', 'copy', 'cut'].forEach(function(t){ ov.addEventListener(t, block); });
    document.addEventListener('visibilitychange', onVis); window.addEventListener('blur', hide); window.addEventListener('pagehide', hide);
    window.addEventListener('beforeprint', hide); document.addEventListener('keydown', onKey, true); document.addEventListener('keyup', onKey, true);
    ov.querySelector('.pv-sh').addEventListener('click', show);
    ov.querySelector('.pv-x').addEventListener('click', close);
    if(o.cta && o.cta.fn) ov.querySelector('button.pv-go').addEventListener('click', function(){ close(); o.cta.fn(); });
    ov.querySelector('.pv-x').focus();
    return close;
  };
})();
