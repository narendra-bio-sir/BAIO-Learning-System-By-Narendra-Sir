/* BAIO · promo strip on every chapter page: NEET Tricks for this chapter + the class Exam Scorer e-book + free KCET PYQs.
   Usage: <script src="neet-tricks/nt-link.js?v=1" data-ch="pu1-ch10" defer></script>
   (pages in a sub-folder use "../neet-tricks/nt-link.js"). It sits between the chapter header and the tab bar,
   shows ₹99 or "✅ Open" and links to neet-tricks.html#<chapter>. On a page that has its own NEET Tricks tab
   (pu2-ch4) it opens that tab instead. */
(function(){
  var me = document.currentScript;
  if(!me) return;
  var id = me.getAttribute('data-ch');
  if(!id) return;
  var page;
  try{ page = new URL('../neet-tricks.html', me.src).href; }catch(e){ page = 'neet-tricks.html'; }
  var cls = id.indexOf('pu1-') === 0 ? 'pu1' : 'pu2';
  var bookPage, coverSrc;
  try{ bookPage = new URL('../biology-prep-books.html#' + cls, me.src).href; }catch(e){ bookPage = 'biology-prep-books.html#' + cls; }
  try{ coverSrc = new URL('../prep-books-assets/' + cls + '/cover.jpg', me.src).href; }catch(e){ coverSrc = 'prep-books-assets/' + cls + '/cover.jpg'; }
  /* free KCET PYQs per chapter (pyq.html); counts match pyq/pyq-kcet.js */
  var PYQ_N = {'pu1-ch1':7,'pu1-ch10':19,'pu1-ch11':13,'pu1-ch12':13,'pu1-ch13':11,'pu1-ch14':9,'pu1-ch15':18,'pu1-ch16':7,'pu1-ch17':11,'pu1-ch18':7,'pu1-ch19':19,'pu1-ch2':21,'pu1-ch3':20,'pu1-ch4':19,'pu1-ch5':23,'pu1-ch6':12,'pu1-ch7':12,'pu1-ch8':27,'pu1-ch9':16,'pu2-ch1':50,'pu2-ch10':22,'pu2-ch11':29,'pu2-ch12':17,'pu2-ch13':25,'pu2-ch2':37,'pu2-ch3':27,'pu2-ch4':48,'pu2-ch5':62,'pu2-ch6':30,'pu2-ch7':39,'pu2-ch8':24,'pu2-ch9':32};
  var pyqPage;
  try{ pyqPage = new URL('../pyq.html#' + id, me.src).href; }catch(e){ pyqPage = 'pyq.html#' + id; }

  function owned(){
    try{
      var s = JSON.parse(localStorage.getItem('baio_neettricks_unlock') || '{}') || {};
      if(s['*'] || s[id] || s[id.slice(0, 3) + '-all']) return true;
    }catch(e){}
    if(id === 'pu2-ch4'){ try{ var u = JSON.parse(localStorage.getItem('pu2ch4_neettricks_unlock') || 'null'); if(u && u.unlocked && !(u.method === 'master' && localStorage.getItem('baio_nt_owner_locked') === '1')) return true; }catch(e){} }
    /* chapter Premium bought with a real code also includes NEET Tricks (not demo / trial) */
    var pk = {'pu1-ch2':'ch2','pu1-ch3':'ch3','pu2-ch9':'ch9'}[id] || id.replace('-', '');
    try{ var p = JSON.parse(localStorage.getItem(pk + '_premium_unlock') || 'null'); var ol = false; try{ ol = localStorage.getItem('baio_nt_owner_locked') === '1'; }catch(e){}
    if(p && p.unlocked && (p.method === 'code' || (p.method === 'master' && !ol))) return true; }catch(e){}
    return false;
  }

  function build(){
    if(document.getElementById('ntPromo')) return;
    var anchor = document.querySelector('.desktop-row') || document.querySelector('.tabbar-wrap');
    if(!anchor || !anchor.parentNode) return;
    var css = document.createElement('style');
    css.textContent =
      '#ntPromo{margin:10px 0 12px}'
      + '#ntPromo .trk{display:flex;gap:10px;overflow-x:auto;scroll-snap-type:x mandatory;scroll-behavior:smooth;scrollbar-width:none;-webkit-overflow-scrolling:touch}'
      + '#ntPromo .trk::-webkit-scrollbar{display:none}'
      + '#ntPromo .sl{flex:0 0 100%;box-sizing:border-box;scroll-snap-align:center;scroll-snap-stop:always;display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:16px;text-decoration:none;color:inherit;font-family:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent;min-height:68px}'
      + '#ntLinkBanner{border:1.5px solid rgba(212,175,55,.65);background:linear-gradient(120deg,rgba(212,175,55,.16),rgba(46,198,160,.10))}'
      + '#ebkBanner{border:1.5px solid rgba(200,90,70,.55);background:linear-gradient(120deg,rgba(255,214,130,.20),rgba(200,90,70,.10))}'
      + '#pyqBanner{border:1.5px solid rgba(46,150,200,.55);background:linear-gradient(120deg,rgba(46,150,200,.16),rgba(46,198,160,.10))}'
      + '#ntPromo .nti.pq{background:rgba(46,150,200,.22)}'
      + '#ntPromo .nti{flex:none;width:42px;height:42px;border-radius:13px;display:grid;place-items:center;font-size:24px;background:rgba(212,175,55,.22)}'
      + '#ntPromo .cv{flex:none;width:38px;height:50px;object-fit:cover;border-radius:4px 7px 7px 4px;box-shadow:0 4px 10px rgba(0,0,0,.25);transform:rotate(-4deg)}'
      + '#ntPromo .ntt{flex:1;min-width:0}'
      + '#ntPromo b{display:block;font-size:14.5px;font-weight:800;line-height:1.25}'
      + '#ntPromo small{display:block;font-size:11.5px;opacity:.78;margin-top:2px;line-height:1.35}'
      + '#ntPromo .ntp{flex:none;font-size:12.5px;font-weight:800;padding:7px 12px;border-radius:99px;background:#D4AF37;color:#2A1F00;white-space:nowrap}'
      + '#ntPromo .ntp.ok{background:#1E8E52;color:#fff}'
      + '#ntPromo .dots{display:flex;justify-content:center;gap:6px;margin-top:6px}'
      + '#ntPromo .dots button{width:7px;height:7px;padding:0;border:0;border-radius:99px;background:rgba(150,150,150,.4);cursor:pointer;transition:width .25s}'
      + '#ntPromo .dots button[aria-selected="true"]{width:18px;background:#D4AF37}';
    document.head.appendChild(css);
    var wrap = document.createElement('div');
    wrap.id = 'ntPromo';
    wrap.setAttribute('role', 'region'); wrap.setAttribute('aria-roledescription', 'carousel'); wrap.setAttribute('aria-label', 'NEET Tricks, e-book and PYQs');
    var trk = document.createElement('div'); trk.className = 'trk';
    /* slide 1: NEET Tricks */
    var a = document.createElement('a');
    a.id = 'ntLinkBanner'; a.className = 'sl';
    a.href = page + '#' + id;
    var ok = owned();
    a.innerHTML = '<span class="nti" aria-hidden="true">🎯</span>'
      + '<span class="ntt"><b>NEET Tricks &amp; Tips for this chapter</b><small>Shortcuts, memory tables, NEET traps &amp; practice questions</small></span>'
      + '<span class="ntp' + (ok ? ' ok' : '') + '">' + (ok ? '✅ Open →' : '₹99 →') + '</span>';
    /* pu2-ch4 has its own NEET Tricks tab: open it in place */
    if(document.querySelector('.tab-btn[data-tab="neettricks"]') && typeof window.goToTab === 'function'){
      a.href = '#';
      a.addEventListener('click', function(e){ e.preventDefault(); window.goToTab('neettricks'); });
    }
    /* slide 2: Exam Scorer e-book of this class */
    var e = document.createElement('a');
    e.id = 'ebkBanner'; e.className = 'sl';
    e.href = bookPage;
    e.innerHTML = '<img class="cv" src="' + coverSrc + '" alt="" loading="lazy">'
      + '<span class="ntt"><b>' + (cls === 'pu1' ? 'I PUC' : 'II PUC') + ' Biology Exam Scorer e&#8209;book</b><small>NCERT diagram practice · ' + (cls === 'pu1' ? '12' : '10') + ' practice papers with solutions</small></span>'
      + '<span class="ntp">₹50 →</span>';
    trk.appendChild(a); trk.appendChild(e);
    /* slide 3: free KCET + NEET previous year questions of this chapter */
    var labels = ['NEET Tricks', 'E-book'];
    if(PYQ_N[id]){
      var pq = document.createElement('a');
      pq.id = 'pyqBanner'; pq.className = 'sl';
      pq.href = pyqPage;
      pq.innerHTML = '<span class="nti pq" aria-hidden="true">📝</span>'
        + '<span class="ntt"><b>NEET &amp; KCET PYQs of this chapter</b><small>' + PYQ_N[id] + ' previous year question' + (PYQ_N[id] > 1 ? 's' : '') + ' · KCET 2015–21 · NEET 2013–16</small></span>'
        + '<span class="ntp ok">Free →</span>';
      trk.appendChild(pq); labels.push('NEET and KCET PYQs');
    }
    var dots = document.createElement('div'); dots.className = 'dots'; dots.setAttribute('role', 'tablist');
    labels.forEach(function(l, i){ var d = document.createElement('button'); d.type = 'button'; d.setAttribute('role', 'tab'); d.setAttribute('aria-label', l); d.setAttribute('aria-selected', i ? 'false' : 'true'); dots.appendChild(d); });
    wrap.appendChild(trk); wrap.appendChild(dots);
    anchor.parentNode.insertBefore(wrap, anchor);
    /* swipe, dots and gentle auto-advance (pauses while touched, off for reduced motion) */
    var slides = trk.children, btns = dots.children, cur = 0, paused = false;
    var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    function mark(i){ cur = i; for(var k = 0; k < btns.length; k++) btns[k].setAttribute('aria-selected', k === i ? 'true' : 'false'); }
    function go(i){ i = (i + slides.length) % slides.length; trk.scrollTo({left: slides[i].offsetLeft - trk.offsetLeft, behavior: reduce ? 'auto' : 'smooth'}); mark(i); }
    function nearest(){ var L = trk.scrollLeft, best = 0, d = Infinity; for(var k = 0; k < slides.length; k++){ var dd = Math.abs((slides[k].offsetLeft - trk.offsetLeft) - L); if(dd < d){ d = dd; best = k; } } return best; }
    var raf = 0; trk.addEventListener('scroll', function(){ if(!raf) raf = requestAnimationFrame(function(){ raf = 0; var k = nearest(); if(k !== cur) mark(k); }); }, {passive:true});
    for(var k = 0; k < btns.length; k++) (function(k){ btns[k].addEventListener('click', function(){ go(k); }); })(k);
    ['touchstart', 'pointerdown', 'mouseenter', 'focusin'].forEach(function(ev){ trk.addEventListener(ev, function(){ paused = true; }, {passive:true}); });
    ['touchend', 'touchcancel', 'mouseleave', 'focusout'].forEach(function(ev){ trk.addEventListener(ev, function(){ paused = false; }, {passive:true}); });
    if(!reduce) setInterval(function(){ if(!paused && !document.hidden && trk.offsetParent) go(cur + 1); }, 6000);
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
  /* ---------- Downloads tab: link to the ₹50 Exam Scorer e-book ----------
     Chapters that already have their own Revision Notes PDF keep it (free); for the others the
     page's Revision Notes row (which points to a missing PDF) is hidden and the e-book row shown instead. */
  var OWN_NOTES = ['pu1-ch2', 'pu2-ch4', 'pu2-ch5', 'pu2-ch6', 'pu2-ch7'];
  function ebookRow(){
    var r = document.createElement('a');
    r.id = 'ebkNotesRow';
    r.href = bookPage;
    r.innerHTML = '<span class="ebi" aria-hidden="true">📕</span><span class="ebt"><b>' + (cls === 'pu1' ? 'I PUC' : 'II PUC') + ' Biology Exam Scorer e&#8209;book</b>'
      + '<small>NCERT diagram practice · practice papers with worked solutions</small></span>'
      + '<span class="ebp">₹50 →</span>';
    return r;
  }
  function ebookCss(){
    if(document.getElementById('ebkNotesCss')) return;
    var c = document.createElement('style'); c.id = 'ebkNotesCss';
    c.textContent = '#ebkNotesRow{display:flex;align-items:center;gap:12px;margin:10px 0;padding:11px 14px;border-radius:14px;text-decoration:none;color:inherit;'
      + 'border:1.5px solid rgba(212,175,55,.6);background:linear-gradient(120deg,rgba(212,175,55,.14),rgba(200,90,70,.08))}'
      + '#ebkNotesRow .ebi{flex:none;font-size:26px}#ebkNotesRow .ebt{flex:1;min-width:0}'
      + '#ebkNotesRow b{display:block;font-size:14px;font-weight:800}#ebkNotesRow small{display:block;font-size:11.5px;opacity:.78;line-height:1.35;margin-top:2px}'
      + '#ebkNotesRow .ebp{flex:none;font-size:12.5px;font-weight:800;padding:7px 12px;border-radius:99px;background:#D4AF37;color:#2A1F00;white-space:nowrap}'
      + (OWN_NOTES.indexOf(id) === -1 ? '#revNotesRowContainer{display:none!important}' : '');
    document.head.appendChild(c);
  }
  function placeEbook(){
    if(document.getElementById('ebkNotesRow')) return;
    var rev = document.getElementById('revNotesRowContainer');
    if(rev && rev.parentNode){ ebookCss(); rev.parentNode.insertBefore(ebookRow(), rev.nextSibling); return; }
    /* pages that build the Downloads view into #content: put the row under "Study Material" */
    var titles = document.querySelectorAll('#content .dl-section-title');
    for(var i = 0; i < titles.length; i++){
      if(/study material/i.test(titles[i].textContent)){ ebookCss(); titles[i].parentNode.insertBefore(ebookRow(), titles[i].nextSibling); return; }
    }
  }
  function watchEbook(){
    placeEbook();
    var host = document.getElementById('content');
    if(host && window.MutationObserver){ new MutationObserver(function(){ placeEbook(); }).observe(host, {childList:true}); }
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', watchEbook); else watchEbook();
})();
