/* BAIO Game Zone — shared helpers: nav bar, theme, language, scores. */
(function(){
  const GZ = window.GZ = {};
  const root = document.documentElement;
  // pages inside games/ need '../' to reach the site root
  GZ.ROOT = /\/games\/[^/]*$/.test(location.pathname) ? '../' : '';
  GZ.HUB = GZ.ROOT + 'games.html';
  GZ.BASE = 'https://narendra-bio-sir.github.io/BAIO-Learning-System-By-Narendra-Sir/';
  GZ.lang = 'en';
  const LANGS = [['en','English'],['kn','ಕನ್ನಡ'],['hi','हिंदी']];
  const listeners = [];

  // theme (same key as every BAIO page)
  let t = null; try { t = localStorage.getItem('baio_theme'); } catch (e) {}
  if (t === 'light') root.setAttribute('data-theme', 'light');

  GZ.nav = function(opts){
    opts = opts || {};
    const nav = document.createElement('nav'); nav.className = 'topnav';
    nav.innerHTML = '<div class="topnav-inner"><a class="brand" href="' + GZ.HUB + '"><div class="b">B</div><span>BAIO Game Zone</span></a>' +
      '<div class="tools"><div class="lang-switcher" role="group" aria-label="Language">' +
      LANGS.map(([k, l]) => '<button class="lang-btn" data-l="' + k + '">' + l + '</button>').join('') + '</div>' +
      (opts.hub ? '' : '<a href="' + GZ.HUB + '" class="icon-btn" title="Game Zone" aria-label="Game Zone">🧩</a>') +
      '<a href="' + GZ.ROOT + 'index.html" class="icon-btn" title="BAIO home" aria-label="BAIO home">🏠</a>' +
      '<button class="icon-btn" id="themeToggle" title="Dark / light" aria-label="Toggle dark or light theme"></button></div></div>';
    document.body.prepend(nav);
    const tb = nav.querySelector('#themeToggle');
    const paint = () => { tb.textContent = root.getAttribute('data-theme') === 'light' ? '☀️' : '🌙'; };
    paint();
    tb.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      if (next === 'light') root.setAttribute('data-theme', 'light'); else root.removeAttribute('data-theme');
      try { localStorage.setItem('baio_theme', next); } catch (e) {}
      paint();
    });
    nav.querySelector('.lang-switcher').addEventListener('click', e => { const b = e.target.closest('.lang-btn'); if (b) GZ.setLang(b.dataset.l); });
  };

  // i18n: dict = {en:{key:text}, kn:{...}, hi:{...}}; elements use data-i18n / data-i18n-html
  GZ.T = {};
  GZ.t = k => (GZ.T[GZ.lang] && GZ.T[GZ.lang][k] != null) ? GZ.T[GZ.lang][k] : (GZ.T.en[k] != null ? GZ.T.en[k] : k);
  GZ.i18n = function(dict){ GZ.T = dict; };
  GZ.onLang = fn => listeners.push(fn);
  GZ.setLang = function(l){
    GZ.lang = l;
    document.querySelectorAll('[data-i18n]').forEach(e => { e.textContent = GZ.t(e.dataset.i18n); });
    document.querySelectorAll('[data-i18n-html]').forEach(e => { e.innerHTML = GZ.t(e.dataset.i18nHtml); });
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.l === l));
    root.lang = l;
    try { localStorage.setItem('baio_lang', l); } catch (e) {}
    listeners.forEach(fn => fn(l));
  };
  GZ.startLang = function(){
    let l = 'en'; try { l = localStorage.getItem('baio_lang') || 'en'; } catch (e) {}
    GZ.setLang(['en','kn','hi'].includes(l) ? l : 'en');
  };

  // scores kept on this device
  const KEY = 'baio_game_best';
  GZ.best = function(id){ try { return (JSON.parse(localStorage.getItem(KEY) || '{}'))[id]; } catch (e) { return undefined; } };
  GZ.saveBest = function(id, s){
    let b = {}; try { b = JSON.parse(localStorage.getItem(KEY) || '{}'); } catch (e) {}
    if (!(b[id] >= s)) { b[id] = s; try { localStorage.setItem(KEY, JSON.stringify(b)); } catch (e) {} }
    return b[id];
  };
  GZ.shuffle = function(a){ a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  GZ.pick = a => a[Math.floor(Math.random() * a.length)];
  GZ.stars = (s, max) => { const n = s >= max * .8 ? 3 : s >= max * .55 ? 2 : s >= max * .3 ? 1 : 0; return '★'.repeat(n) + '☆'.repeat(3 - n); };
  GZ.share = function(text, path){
    const url = GZ.BASE + path;
    if (navigator.share) { navigator.share({ title: 'BAIO Game Zone', text: text, url: url }).catch(() => {}); return; }
    window.open('https://wa.me/?text=' + encodeURIComponent(text + ' ' + url), '_blank', 'noopener');
  };
  GZ.esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  // common words used by every game page
  GZ.COMMON = {
    en:{again:'🔁 Play again', share:'📤 Challenge friends', hub:'🧩 Game Zone', next:'Next →', check:'✔ Check', score:'Score', done:'Finish 🏁', best:'Best',
        r3:'Outstanding! 🏆', r2:'Great work! 💪', r1:'Good try — play again! 📘', r0:'Keep practising 🌱', correct:'✅ Correct!', wrong:'❌ Not quite.'},
    kn:{again:'🔁 ಮತ್ತೆ ಆಡಿ', share:'📤 ಗೆಳೆಯರಿಗೆ ಸವಾಲು', hub:'🧩 ಗೇಮ್ ಝೋನ್', next:'ಮುಂದೆ →', check:'✔ ಪರಿಶೀಲಿಸಿ', score:'ಅಂಕ', done:'ಮುಗಿಸಿ 🏁', best:'ಅತ್ಯುತ್ತಮ',
        r3:'ಅದ್ಭುತ! 🏆', r2:'ಉತ್ತಮ ಕೆಲಸ! 💪', r1:'ಒಳ್ಳೆಯ ಪ್ರಯತ್ನ — ಮತ್ತೆ ಆಡಿ! 📘', r0:'ಅಭ್ಯಾಸ ಮುಂದುವರಿಸಿ 🌱', correct:'✅ ಸರಿ!', wrong:'❌ ತಪ್ಪು.'},
    hi:{again:'🔁 फिर से खेलो', share:'📤 दोस्तों को चुनौती', hub:'🧩 गेम ज़ोन', next:'आगे →', check:'✔ जाँचो', score:'स्कोर', done:'खत्म 🏁', best:'बेस्ट',
        r3:'शानदार! 🏆', r2:'बहुत बढ़िया! 💪', r1:'अच्छी कोशिश — फिर खेलो! 📘', r0:'अभ्यास जारी रखो 🌱', correct:'✅ सही!', wrong:'❌ गलत।'}
  };
  GZ.c = k => (GZ.COMMON[GZ.lang] || GZ.COMMON.en)[k];
  GZ.rating = (s, max) => GZ.c(s >= max * .8 ? 'r3' : s >= max * .55 ? 'r2' : s >= max * .3 ? 'r1' : 'r0');
})();
