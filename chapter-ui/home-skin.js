/* BAIO chapter pages: home-screen look. Adds the floating chapter icon to the hero, a quick-start tile grid
   that opens the chapter's own tabs, and the home-style bottom nav. Everything else is the page's own. */
(function(){
  if(window.__hsDone) return; window.__hsDone = true;
  var me = document.currentScript, icon = (me && me.getAttribute('data-icon')) || '📗';
  var cid = (me && me.getAttribute('data-ch')) || '';
  var ROOT = me && me.src ? me.src.replace(/chapter-ui\/home-skin\.js.*$/, '') : '';
  /* two kinds of chapter page: static .tab-btn[data-tab] buttons (II PUC) or a rendered tab bar with switchTab() (I PUC) */
  var RENDERED = !document.querySelector('.tab-btn[data-tab]') && typeof window.switchTab === 'function';
  function has(id){
    if(!RENDERED) return !!tab(id);
    try{ return TABS.some(function(t){ return t.id === id; }); }catch(e){ return false; }
  }
  function tab(id){ return document.querySelector('.tab-btn[data-tab="' + id + '"]'); }
  function go(id){
    if(RENDERED){
      try{ if(typeof switchCategory === 'function' && TAB_CLUSTER_OF[id]) switchCategory(TAB_CLUSTER_OF[id]); }catch(e){}
      window.switchTab(id);
      var w = document.querySelector('.tabbar-wrap');
      setTimeout(function(){ if(w) w.scrollIntoView({behavior: 'smooth', block: 'start'}); }, 30);
      return;
    }
    var b = tab(id); if(!b) return;
    /* the tab bar shows one category at a time: switch to the category that holds this tab */
    if(b.style.display === 'none'){
      var items = document.querySelectorAll('#catDdMenu [data-cluster]');
      for(var i = 0; i < items.length && b.style.display === 'none'; i++) items[i].click();
    }
    b.click();
    var bar = document.querySelector('.tabbar-wrap');
    setTimeout(function(){ (bar || b).scrollIntoView({behavior: 'smooth', block: 'start'}); }, 30);
  }
  function build(){
    var header = document.querySelector('.app > .header'); if(!header) return;
    if(!header.querySelector('.hs-art')){ var a = document.createElement('span'); a.className = 'hs-art'; a.setAttribute('aria-hidden', 'true'); a.textContent = icon; header.appendChild(a); }
    RENDERED = !document.querySelector('.tab-btn[data-tab]') && typeof window.switchTab === 'function';
    var app = document.querySelector('.app');
    if(app && parseFloat(getComputedStyle(app).paddingLeft) < 4) document.documentElement.classList.add('hs-pad');
    var tiles = [
      ['study', '📖', 'Study Notes', 'Topic by topic', 'hs-y'],
      [RENDERED ? 'mcq' : 'quiz', '📝', 'MCQ Quiz', 'Test yourself', 'hs-pk'],
      [RENDERED ? 'neet' : 'adv', '🎯', 'NEET Practice', 'NEET-level MCQs', 'hs-g'],
      ['kcet', '🎓', 'KCET Practice', 'KCET-style MCQs', 'hs-v'],
      [RENDERED ? 'flashcards' : 'flash', '🧠', 'Flashcards', 'Quick recall', 'hs-b'],
      ['podcast', '🎧', 'Audio Podcast', 'Listen & revise', 'hs-o']
    ].filter(function(t){ return has(t[0]); });
    var anchor = document.querySelector('.desktop-row') || document.querySelector('.tabbar-wrap');
    if(tiles.length && anchor && !document.getElementById('hsQuick')){
      var w = document.createElement('div'); w.id = 'hsQuick';
      w.innerHTML = '<div class="hs-sec"><h2>Start learning</h2><span>' + tiles.length + ' ways to study</span></div><div class="hs-grid">' +
        tiles.map(function(t){ return '<button type="button" class="hs-tile ' + t[4] + '" data-hs="' + t[0] + '"><span class="ic">' + t[1] + '</span><b>' + t[2] + '</b><small>' + t[3] + '</small></button>'; }).join('') + '</div>';
      anchor.parentNode.insertBefore(w, anchor);
      w.addEventListener('click', function(e){ var b = e.target.closest('[data-hs]'); if(b) go(b.getAttribute('data-hs')); });
    }
    if(!document.querySelector('.hs-nav')){
      var n = document.createElement('nav'); n.className = 'hs-nav'; n.setAttribute('aria-label', 'BAIO');
      n.innerHTML = '<a href="' + ROOT + 'index.html"><em>🏠</em>Home</a>' +
        '<button type="button" class="on" id="hsNavCh"><em>📚</em>Chapters</button>' +
        '<a href="' + ROOT + 'pyq.html' + (cid ? '#' + cid : '') + '"><em>📝</em>PYQs</a>' +
        '<a href="' + ROOT + 'store.html"><em>🛍️</em>Store</a>';
      document.body.appendChild(n);
      document.getElementById('hsNavCh').addEventListener('click', function(){ var j = document.getElementById('chapterJumpBtn'); if(j) j.click(); else location.href = ROOT + 'index.html#catalogSections'; });
    }
  }
  /* show the page once it is complete: after build() and every other DOMContentLoaded handler, two frames later */
  function reveal(){ requestAnimationFrame(function(){ requestAnimationFrame(function(){ document.documentElement.classList.remove('hs-wait'); }); }); }
  function boot(){ try{ build(); }catch(e){} reveal(); }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
