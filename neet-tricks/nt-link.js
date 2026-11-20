/* BAIO · "NEET Tricks for this chapter" banner on every chapter page.
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
    if(document.getElementById('ntLinkBanner')) return;
    var anchor = document.querySelector('.desktop-row') || document.querySelector('.tabbar-wrap');
    if(!anchor || !anchor.parentNode) return;
    var css = document.createElement('style');
    css.textContent =
      '#ntLinkBanner{display:flex;align-items:center;gap:12px;margin:10px 0 12px;padding:11px 14px;border-radius:16px;text-decoration:none;color:inherit;'
      + 'border:1.5px solid rgba(212,175,55,.65);background:linear-gradient(120deg,rgba(212,175,55,.16),rgba(46,198,160,.10));font-family:inherit;cursor:pointer;-webkit-tap-highlight-color:transparent}'
      + '#ntLinkBanner .nti{flex:none;width:42px;height:42px;border-radius:13px;display:grid;place-items:center;font-size:24px;background:rgba(212,175,55,.22)}'
      + '#ntLinkBanner .ntt{flex:1;min-width:0}'
      + '#ntLinkBanner b{display:block;font-size:14.5px;font-weight:800;line-height:1.25}'
      + '#ntLinkBanner small{display:block;font-size:11.5px;opacity:.78;margin-top:2px;line-height:1.35}'
      + '#ntLinkBanner .ntp{flex:none;font-size:12.5px;font-weight:800;padding:7px 12px;border-radius:99px;background:#D4AF37;color:#2A1F00;white-space:nowrap}'
      + '#ntLinkBanner .ntp.ok{background:#1E8E52;color:#fff}';
    document.head.appendChild(css);
    var a = document.createElement('a');
    a.id = 'ntLinkBanner';
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
    anchor.parentNode.insertBefore(a, anchor);
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', build); else build();
  /* ---------- Downloads tab: revision notes come from the ₹50 Exam Scorer e-book ----------
     Chapters that already have their own Revision Notes PDF keep it (free); for the others the
     page's Revision Notes row (which points to a missing PDF) is hidden and the e-book row shown instead. */
  var OWN_NOTES = ['pu1-ch2', 'pu2-ch4', 'pu2-ch5', 'pu2-ch6', 'pu2-ch7'];
  var cls = id.indexOf('pu1-') === 0 ? 'pu1' : 'pu2';
  var bookPage;
  try{ bookPage = new URL('../biology-prep-books.html#' + cls, me.src).href; }catch(e){ bookPage = 'biology-prep-books.html#' + cls; }
  function ebookRow(){
    var r = document.createElement('a');
    r.id = 'ebkNotesRow';
    r.href = bookPage;
    r.innerHTML = '<span class="ebi" aria-hidden="true">📕</span><span class="ebt"><b>Revision notes for this chapter</b>'
      + '<small>In the ' + (cls === 'pu1' ? 'I PUC' : 'II PUC') + ' Exam Scorer e-book · every chapter’s notes, NCERT diagram practice &amp; practice papers with solutions</small></span>'
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
