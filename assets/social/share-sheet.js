/* BAIO social share sheet — opened by the 📤 "Share all links" button (shareAllSocial).
   Lets the user pick a picture size and share: links only, picture only, or picture + links.
   window.BAIOShare.open(text, base) — base = relative path to assets/social/ */
(function(){
  if(window.BAIOShare) return;
  var SIZES = [
    { id:'std',    f:'baio-follow-us.jpg',        l:'Standard',  s:'WhatsApp / Telegram chat' },
    { id:'square', f:'baio-follow-us-square.jpg', l:'Square 1:1', s:'Instagram post · YouTube community' },
    { id:'story',  f:'baio-follow-us-story.jpg',  l:'Story 9:16', s:'WhatsApp status · Instagram story' },
    { id:'wide',   f:'baio-follow-us-wide.jpg',   l:'Wide 16:9',  s:'YouTube · Telegram channel post' }
  ];
  var css = '.bsh{position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,.5);display:flex;align-items:flex-end;justify-content:center;font-family:Inter,system-ui,sans-serif}'
    + '.bsh-b{background:#FBF8EF;color:#13241B;width:100%;max-width:480px;max-height:92vh;overflow:auto;border-radius:20px 20px 0 0;padding:16px 16px 20px;box-shadow:0 -10px 40px rgba(0,0,0,.3)}'
    + '@media(min-width:600px){.bsh{align-items:center}.bsh-b{border-radius:20px}}'
    + '.bsh-h{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px}.bsh-h b{font-size:17px}'
    + '.bsh-x{border:0;background:#EDE6D6;border-radius:50%;width:32px;height:32px;font-size:15px;cursor:pointer;color:#13241B}'
    + '.bsh-l{font:800 11px Inter,sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#5C6E63;margin:12px 0 7px}'
    + '.bsh-sz{display:grid;grid-template-columns:1fr 1fr;gap:8px}'
    + '.bsh-sz button{border:1.5px solid #E2DACA;background:#fff;border-radius:14px;padding:8px;text-align:left;cursor:pointer;color:#13241B;display:flex;gap:8px;align-items:center}'
    + '.bsh-sz button.on{border-color:#1E8A72;box-shadow:0 0 0 2px rgba(30,138,114,.25)}'
    + '.bsh-sz img{width:44px;height:44px;object-fit:contain;border-radius:6px;background:#F1EBDC;flex:none}'
    + '.bsh-sz b{display:block;font-size:13.5px}.bsh-sz small{display:block;font-size:11px;color:#5C6E63;line-height:1.3}'
    + '.bsh-a{display:grid;gap:8px}'
    + '.bsh-a button,.bsh-a a{display:flex;align-items:center;gap:10px;border:0;border-radius:14px;padding:12px 14px;font:700 15px Inter,sans-serif;cursor:pointer;text-decoration:none;text-align:left}'
    + '.bsh-a .p{background:#1E8A72;color:#fff}.bsh-a .g{background:#fff;color:#13241B;border:1.5px solid #E2DACA}'
    + '.bsh-a small{display:block;font:500 12px Inter,sans-serif;opacity:.8}'
    + '.bsh-t{position:fixed;left:50%;bottom:28px;transform:translateX(-50%);background:#13241B;color:#fff;padding:10px 16px;border-radius:12px;font:600 14px Inter,sans-serif;z-index:100001}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var el = null, cur = 'std', TEXT = '', BASE = '', files = {};
  function toast(t){ var d = document.createElement('div'); d.className = 'bsh-t'; d.textContent = t; document.body.appendChild(d); setTimeout(function(){ d.remove(); }, 2000); }
  function size(){ return SIZES.filter(function(x){ return x.id === cur; })[0]; }
  function getFile(sz){
    if(files[sz.id]) return Promise.resolve(files[sz.id]);
    return fetch(BASE + sz.f).then(function(r){ if(!r.ok) throw 0; return r.blob(); }).then(function(b){
      return (files[sz.id] = new File([b], sz.f.replace('baio-', 'BAIO-'), { type:'image/jpeg' }));
    });
  }
  function canFiles(f){ try{ return !!(navigator.canShare && navigator.canShare({ files:[f] })); }catch(e){ return false; } }
  function copyText(){
    if(navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(TEXT).then(function(){ toast('Links copied ✓ Paste anywhere'); });
    window.open('https://wa.me/?text=' + encodeURIComponent(TEXT), '_blank', 'noopener'); return Promise.resolve();
  }
  function download(sz){ var a = document.createElement('a'); a.href = BASE + sz.f; a.download = sz.f; document.body.appendChild(a); a.click(); a.remove(); toast('Picture downloaded ✓'); }
  function act(kind){
    var sz = size();
    if(kind === 'links'){
      if(navigator.share) navigator.share({ title:'BAIO Learning System', text:TEXT }).catch(function(e){ if(!e || e.name !== 'AbortError') copyText(); });
      else copyText();
      return;
    }
    if(kind === 'dl'){ download(sz); return; }
    getFile(sz).then(function(f){
      if(!navigator.share || !canFiles(f)){
        download(sz); if(kind === 'both') copyText();
        return;
      }
      var data = { files:[f] };
      if(kind === 'both'){ data.text = TEXT; data.title = 'BAIO Learning System'; }
      return navigator.share(data).catch(function(e){
        if(e && e.name === 'NotAllowedError') toast('Tap the button once more to share');
      });
    }).catch(function(){ toast('Could not load the picture. Check your internet.'); });
  }
  function paint(){
    var html = '<div class="bsh-b" role="dialog" aria-modal="true" aria-label="Share BAIO social links">'
      + '<div class="bsh-h"><b>📤 Share BAIO channels</b><button class="bsh-x" type="button" data-x aria-label="Close">✕</button></div>'
      + '<div class="bsh-l">1 · Picture size</div><div class="bsh-sz">'
      + SIZES.map(function(x){ return '<button type="button" data-sz="' + x.id + '" class="' + (x.id === cur ? 'on' : '') + '"><img src="' + BASE + x.f + '" alt="" loading="lazy"><span><b>' + x.l + '</b><small>' + x.s + '</small></span></button>'; }).join('')
      + '</div><div class="bsh-l">2 · What to share</div><div class="bsh-a">'
      + '<button type="button" class="p" data-a="both">🖼️🔗 <span>Picture + links<small>Best for WhatsApp &amp; Telegram</small></span></button>'
      + '<button type="button" class="g" data-a="pic">🖼️ <span>Picture only<small>For status, stories and Instagram</small></span></button>'
      + '<button type="button" class="g" data-a="links">🔗 <span>Links only<small>Just the message with all channel links</small></span></button>'
      + '<button type="button" class="g" data-a="dl">⬇️ <span>Download picture<small>Save to gallery and post it yourself</small></span></button>'
      + '</div></div>';
    el.innerHTML = html;
  }
  function close(){ if(el){ el.remove(); el = null; } document.removeEventListener('keydown', onKey); }
  function onKey(e){ if(e.key === 'Escape') close(); }
  window.BAIOShare = {
    open: function(text, base){
      TEXT = text; BASE = base || 'assets/social/';
      close();
      el = document.createElement('div'); el.className = 'bsh';
      el.addEventListener('click', function(e){
        if(e.target === el || e.target.closest('[data-x]')){ close(); return; }
        var s = e.target.closest('[data-sz]'); if(s){ cur = s.dataset.sz; paint(); getFile(size()).catch(function(){}); return; }
        var a = e.target.closest('[data-a]'); if(a) act(a.dataset.a);
      });
      document.addEventListener('keydown', onKey);
      document.body.appendChild(el); paint();
      getFile(size()).catch(function(){}); /* preload so sharing is instant */
    }
  };
})();
