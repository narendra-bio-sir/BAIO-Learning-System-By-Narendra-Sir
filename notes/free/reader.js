/* In-app PDF reader for the home "Free Notes" sheet: read a free PDF before downloading it.
   window.baioPdfReader({url, title, sub, fname}) opens a full-screen reader. Pages are drawn with PDF.js
   (loaded on first use from cdnjs, unpkg as a fallback) as you scroll; − / + zoom; ⬇ Download saves the file.
   Android browsers cannot show PDFs inline (they only download them), which is why this reader exists.
   If PDF.js cannot load (no internet), it falls back to the old behaviour: download the file. */
(function(){
  if(window.baioPdfReader) return;
  var PDFJS = ['https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/legacy/build/pdf.min.js', 'https://unpkg.com/pdfjs-dist@3.11.174/legacy/build/pdf.min.js'];
  var WORKER = { 0:'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/legacy/build/pdf.worker.min.js', 1:'https://unpkg.com/pdfjs-dist@3.11.174/legacy/build/pdf.worker.min.js' };
  var libP = null;
  function lib(){
    if(window.pdfjsLib) return Promise.resolve(window.pdfjsLib);
    if(libP) return libP;
    libP = new Promise(function(res, rej){
      (function next(i){
        if(i >= PDFJS.length){ libP = null; return rej(new Error('pdf.js')); }
        var s = document.createElement('script'); s.src = PDFJS[i];
        s.onload = function(){ if(window.pdfjsLib){ window.pdfjsLib.GlobalWorkerOptions.workerSrc = WORKER[i]; res(window.pdfjsLib); } else next(i + 1); };
        s.onerror = function(){ next(i + 1); };
        document.head.appendChild(s);
      })(0);
    });
    return libP;
  }
  var css = ''
    + '.pr-ov{position:fixed;inset:0;z-index:2147483000;background:#2a2740;display:flex;flex-direction:column;font-family:Poppins,Inter,system-ui,sans-serif;color:#fff}'
    + '.pr-hd{display:flex;align-items:center;gap:8px;padding:10px 12px;background:linear-gradient(120deg,#0E9F6E,#0F766E);flex:none}'
    + '.pr-hd .tt{flex:1;min-width:0}.pr-hd b{display:block;font-size:14.5px;line-height:1.25;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.pr-hd small{display:block;font-size:11.5px;opacity:.85}'
    + '.pr-b{flex:none;height:38px;min-width:38px;padding:0 10px;border-radius:11px;border:0;background:rgba(255,255,255,.18);color:#fff;font:700 14px Poppins,Inter,sans-serif;cursor:pointer}'
    + '.pr-b.dl{background:#FFD166;color:#3b2a00}'
    + '.pr-sc{flex:1;overflow:auto;-webkit-overflow-scrolling:touch;padding:12px 10px 30px}'
    + '.pr-pg{margin:0 auto 12px;background:#fff;border-radius:6px;box-shadow:0 6px 20px rgba(0,0,0,.35);overflow:hidden}'
    + '.pr-pg canvas{display:block;width:100%;height:auto}'
    + '.pr-msg{text-align:center;padding:40px 20px;font-size:14px;opacity:.85}'
    + '.pr-ft{flex:none;display:flex;align-items:center;justify-content:center;gap:10px;padding:8px 10px calc(8px + env(safe-area-inset-bottom));background:#1d1a33}'
    + '.pr-ft span{font-size:12.5px;opacity:.8;min-width:90px;text-align:center}'
    + '.pr-end{text-align:center;padding:6px 0 10px}.pr-end .pr-b{height:44px;padding:0 18px}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  function esc(t){ var d = document.createElement('div'); d.textContent = t == null ? '' : String(t); return d.innerHTML; }
  function download(url, fname){
    var a = document.createElement('a'); a.href = url; if(fname) a.download = fname; a.target = '_blank'; a.rel = 'noopener';
    document.body.appendChild(a); a.click(); a.remove();
  }

  window.baioPdfReader = function(o){
    var ov = document.createElement('div'); ov.className = 'pr-ov'; ov.setAttribute('role', 'dialog'); ov.setAttribute('aria-modal', 'true'); ov.setAttribute('aria-label', 'Read: ' + o.title);
    ov.innerHTML = '<div class="pr-hd"><button type="button" class="pr-b pr-x" aria-label="Close">✕</button><div class="tt"><b>' + esc(o.title) + '</b><small>' + esc(o.sub || '') + '</small></div>'
      + '<button type="button" class="pr-b dl">⬇ Download</button></div>'
      + '<div class="pr-sc"><div class="pr-msg">📖 Opening the notes…</div></div>'
      + '<div class="pr-ft"><button type="button" class="pr-b" data-z="-1" aria-label="Zoom out">−</button><span class="pr-pn">…</span><button type="button" class="pr-b" data-z="1" aria-label="Zoom in">+</button></div>';
    document.body.appendChild(ov);
    var prevOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden';
    var sc = ov.querySelector('.pr-sc'), pn = ov.querySelector('.pr-pn'), doc = null, zoom = 1, pages = [], io = null, closed = false;
    function close(){ closed = true; if(io) io.disconnect(); if(doc) doc.destroy(); ov.remove(); document.body.style.overflow = prevOverflow; document.removeEventListener('keydown', onKey); }
    function onKey(e){ if(e.key === 'Escape') close(); }
    document.addEventListener('keydown', onKey);
    ov.querySelector('.pr-x').onclick = close;
    ov.querySelector('.dl').onclick = function(){ download(o.url, o.fname); };

    function width(){ return Math.min(sc.clientWidth - 20, 900) * zoom; }
    function render(p){
      if(p.done === zoom || p.busy) return; p.busy = true; var z = zoom;
      doc.getPage(p.n).then(function(pg){
        var vp1 = pg.getViewport({ scale:1 }), css = width(), dpr = Math.min(window.devicePixelRatio || 1, 2.5);
        var vp = pg.getViewport({ scale: css / vp1.width * dpr }), cv = document.createElement('canvas');
        cv.width = Math.floor(vp.width); cv.height = Math.floor(vp.height);
        return pg.render({ canvasContext: cv.getContext('2d'), viewport: vp }).promise.then(function(){
          if(closed) return; p.el.innerHTML = ''; p.el.appendChild(cv); p.el.style.width = css + 'px'; p.el.style.height = ''; p.done = z; p.busy = false;
          if(z !== zoom) render(p);
        });
      }).catch(function(){ p.busy = false; });
    }
    function layout(){
      var w = width();
      pages.forEach(function(p){ p.el.style.width = w + 'px'; if(p.done !== zoom){ p.el.style.height = Math.round(w * p.ratio) + 'px'; } });
      pages.forEach(function(p){ var r = p.el.getBoundingClientRect(); if(r.bottom > -200 && r.top < innerHeight + 400) render(p); });
    }
    lib().then(function(L){
      return L.getDocument({ url: o.url }).promise;
    }).then(function(d){
      if(closed){ d.destroy(); return; }
      doc = d; sc.innerHTML = '';
      return d.getPage(1).then(function(pg){
        var v = pg.getViewport({ scale:1 }), ratio = v.height / v.width;
        for(var i = 1; i <= d.numPages; i++){
          var el = document.createElement('div'); el.className = 'pr-pg'; el.style.width = width() + 'px'; el.style.height = Math.round(width() * ratio) + 'px'; el.dataset.n = i;
          sc.appendChild(el); pages.push({ n:i, el:el, ratio:ratio, done:0 });
        }
        sc.insertAdjacentHTML('beforeend', '<div class="pr-end"><button type="button" class="pr-b dl">⬇ Download this PDF</button></div>');
        sc.querySelector('.pr-end .dl').onclick = function(){ download(o.url, o.fname); };
        pn.textContent = '1 / ' + d.numPages;
        io = new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ var p = pages[+e.target.dataset.n - 1]; render(p); } }); }, { root: sc, rootMargin: '400px 0px' });
        pages.forEach(function(p){ io.observe(p.el); });
        sc.addEventListener('scroll', function(){
          var mid = sc.getBoundingClientRect().top + sc.clientHeight / 3, cur = 1;
          pages.forEach(function(p){ if(p.el.getBoundingClientRect().top < mid) cur = p.n; }); pn.textContent = cur + ' / ' + d.numPages;
        }, { passive:true });
      });
    }).catch(function(){
      if(closed) return;
      sc.innerHTML = '<div class="pr-msg">Could not open the reader (check your internet).<br><br><button type="button" class="pr-b dl">⬇ Download the PDF instead</button></div>';
      sc.querySelector('.dl').onclick = function(){ download(o.url, o.fname); };
    });
    ov.querySelectorAll('[data-z]').forEach(function(b){ b.onclick = function(){
      if(!doc) return; var f = sc.scrollTop / Math.max(1, sc.scrollHeight);
      zoom = Math.max(1, Math.min(3, Math.round((zoom + 0.5 * +b.dataset.z) * 10) / 10)); layout(); sc.scrollTop = f * sc.scrollHeight;
    }; });
    return close;
  };
})();
