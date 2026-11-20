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
    if(id === 'pu2-ch4'){ try{ var u = JSON.parse(localStorage.getItem('pu2ch4_neettricks_unlock') || 'null'); if(u && u.unlocked) return true; }catch(e){} }
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
})();
