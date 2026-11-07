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
  // Pick n items, preferring ones this student has not seen yet; remembers what was shown.
  // When everything has been seen, the oldest-seen items come back first.
  GZ.fresh = function(key, items, n, idOf){
    idOf = idOf || (x => typeof x === 'string' ? x : JSON.stringify(x).slice(0, 80));
    const K = 'baio_seen_' + key; let seen = [];
    try { seen = JSON.parse(localStorage.getItem(K) || '[]'); } catch (e) {}
    const rank = x => { const i = seen.indexOf(idOf(x)); return i < 0 ? -1 : i; }; // -1 = never seen; lower index = seen longer ago
    const unseen = GZ.shuffle(items.filter(x => rank(x) < 0));
    const old = items.filter(x => rank(x) >= 0).sort((a, b) => rank(a) - rank(b));
    const out = unseen.concat(old).slice(0, Math.min(n, items.length));
    const ids = out.map(idOf);
    seen = seen.filter(s => !ids.includes(s)).concat(ids).slice(-400);
    try { localStorage.setItem(K, JSON.stringify(seen)); } catch (e) {}
    return GZ.shuffle(out);
  };
  GZ.stars = (s, max) => { const n = s >= max * .8 ? 3 : s >= max * .55 ? 2 : s >= max * .3 ? 1 : 0; return '★'.repeat(n) + '☆'.repeat(3 - n); };
  // card (optional) = {icon, game, sub, score, max, unit, color:[c1,c2]} → also share a result banner image
  GZ.share = function(text, path, card){
    if (card && card.max) return GZ.shareBanner(text, path, card);
    const url = GZ.BASE + path;
    if (navigator.share) { navigator.share({ title: 'BAIO Game Zone', text: text, url: url }).catch(() => {}); return; }
    window.open('https://wa.me/?text=' + encodeURIComponent(text + ' ' + url), '_blank', 'noopener');
  };

  /* ---------- result banner for social media (1080 × 1350, 4:5) ---------- */
  const BT = {
    en:{eye:'BAIO GAME ZONE · MY RESULT', score:'MY SCORE', beat:'Can you beat my score?', play:'Play free on BAIO', app:'BAIO app', free:'Play free', pts:'pts',
        sheet:'Share your result', dl:'⬇ Download banner', wa:'💬 Share link on WhatsApp', copy:'🔗 Copy link', copied:'✅ Link copied', tip:'Tip: download the banner, then post it with the link on WhatsApp Status, Instagram or Facebook.', close:'Close'},
    kn:{eye:'BAIO ಗೇಮ್ ಝೋನ್ · ನನ್ನ ಫಲಿತಾಂಶ', score:'ನನ್ನ ಅಂಕ', beat:'ನನ್ನ ಅಂಕ ಮೀರಿಸಬಲ್ಲಿರಾ?', play:'BAIO ನಲ್ಲಿ ಉಚಿತವಾಗಿ ಆಡಿ', app:'BAIO ಆ್ಯಪ್', free:'ಉಚಿತವಾಗಿ ಆಡಿ', pts:'ಅಂಕ',
        sheet:'ನಿಮ್ಮ ಫಲಿತಾಂಶ ಹಂಚಿಕೊಳ್ಳಿ', dl:'⬇ ಬ್ಯಾನರ್ ಡೌನ್‌ಲೋಡ್', wa:'💬 WhatsApp ನಲ್ಲಿ ಲಿಂಕ್ ಹಂಚಿ', copy:'🔗 ಲಿಂಕ್ ಕಾಪಿ', copied:'✅ ಲಿಂಕ್ ಕಾಪಿ ಆಯಿತು', tip:'ಸಲಹೆ: ಬ್ಯಾನರ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ, ಲಿಂಕ್ ಜೊತೆ WhatsApp Status, Instagram ಅಥವಾ Facebook ನಲ್ಲಿ ಹಾಕಿ.', close:'ಮುಚ್ಚಿ'},
    hi:{eye:'BAIO गेम ज़ोन · मेरा रिज़ल्ट', score:'मेरा स्कोर', beat:'क्या तुम मेरा स्कोर हरा सकते हो?', play:'BAIO पर मुफ़्त खेलो', app:'BAIO ऐप', free:'मुफ़्त खेलो', pts:'अंक',
        sheet:'अपना रिज़ल्ट शेयर करो', dl:'⬇ बैनर डाउनलोड करो', wa:'💬 WhatsApp पर लिंक भेजो', copy:'🔗 लिंक कॉपी करो', copied:'✅ लिंक कॉपी हुआ', tip:'टिप: बैनर डाउनलोड करो, फिर लिंक के साथ WhatsApp Status, Instagram या Facebook पर डालो।', close:'बंद करो'}};
  const bt = k => (BT[GZ.lang] || BT.en)[k];
  function rr(g, x, y, w, h, r){ g.beginPath(); g.moveTo(x + r, y); g.arcTo(x + w, y, x + w, y + h, r); g.arcTo(x + w, y + h, x, y + h, r); g.arcTo(x, y + h, x, y, r); g.arcTo(x, y, x + w, y, r); g.closePath(); }
  function fitText(g, t, max, font, size){ let s = size; do { g.font = font.replace('{s}', s); s -= 2; } while (g.measureText(t).width > max && s > 18); }
  function wrap2(g, t, x, y, max, lh){ const words = String(t).split(' '); let line = '', lines = []; words.forEach(w => { const tt = line ? line + ' ' + w : w; if (g.measureText(tt).width > max && line) { lines.push(line); line = w; } else line = tt; }); lines.push(line); lines = lines.slice(0, 2); lines.forEach((l, i) => g.fillText(l, x, y + i * lh)); return lines.length; }
  const FT = "'Space Grotesk','Noto Sans Kannada','Noto Sans Devanagari',Inter,sans-serif", FI = "Inter,'Noto Sans Kannada','Noto Sans Devanagari',sans-serif";
  GZ.resultBanner = function(card, url){
    const W = 1080, H = 1350, cv = document.createElement('canvas'); cv.width = W; cv.height = H; const g = cv.getContext('2d');
    const [c1, c2] = card.color || ['#0fa38a', '#1f6fe0'], pct = Math.max(0, Math.min(1, card.score / card.max));
    // background
    g.fillStyle = '#f7f3ea'; g.fillRect(0, 0, W, H);
    g.fillStyle = 'rgba(184,145,42,.10)'; for (let y = 470; y < H - 150; y += 34) for (let x = 20; x < W; x += 34) { g.beginPath(); g.arc(x, y, 2.2, 0, 7); g.fill(); }
    // header
    let gr = g.createLinearGradient(0, 0, W, 430); gr.addColorStop(0, c1); gr.addColorStop(1, c2); g.fillStyle = gr; rr(g, 0, -40, W, 470, 56); g.fill();
    g.fillStyle = 'rgba(255,255,255,.10)'; g.beginPath(); g.arc(W - 120, 60, 230, 0, 7); g.fill(); g.beginPath(); g.arc(W - 330, 430, 150, 0, 7); g.fill();
    g.save(); g.shadowColor = 'rgba(0,0,0,.22)'; g.shadowBlur = 24; g.shadowOffsetY = 8; g.fillStyle = '#fff'; rr(g, 60, 70, 170, 170, 42); g.fill(); g.restore();
    g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = '#000'; g.font = "96px 'Noto Color Emoji','Apple Color Emoji','Segoe UI Emoji',sans-serif"; g.fillText(card.icon || '🧩', 145, 160);
    g.textAlign = 'left'; g.textBaseline = 'alphabetic'; g.fillStyle = 'rgba(255,255,255,.92)'; g.font = '800 30px ' + FI; g.fillText('✨ ' + bt('eye'), 270, 112);
    g.fillStyle = '#fff'; fitText(g, card.game, (W - 330) * 1.8, '800 {s}px ' + FT, 64); const lh = +((g.font.match(/(\d+)px/)||[0,60])[1]) + 4, n = wrap2(g, card.game, 270, 186, W - 330, lh);
    if (card.sub) { g.font = '700 30px ' + FI; const tw = Math.min(W - 330, g.measureText(card.sub).width + 44), y = 186 + (n - 1) * lh + 40; g.fillStyle = 'rgba(255,255,255,.2)'; rr(g, 270, y, tw, 52, 26); g.fill(); g.fillStyle = '#fff'; g.save(); rr(g, 270, y, tw, 52, 26); g.clip(); g.fillText(card.sub, 292, y + 36); g.restore(); }
    // score card
    g.save(); g.shadowColor = 'rgba(20,32,58,.16)'; g.shadowBlur = 40; g.shadowOffsetY = 14; g.fillStyle = '#fff'; rr(g, 70, 400, W - 140, 640, 48); g.fill(); g.restore();
    const cx = W / 2, cy = 640, R = 170;
    g.lineWidth = 34; g.lineCap = 'round'; g.strokeStyle = '#efe8d6'; g.beginPath(); g.arc(cx, cy, R, 0, 7); g.stroke();
    gr = g.createLinearGradient(cx - R, cy - R, cx + R, cy + R); gr.addColorStop(0, c1); gr.addColorStop(1, c2); g.strokeStyle = gr;
    if (pct > 0) { g.beginPath(); g.arc(cx, cy, R, -Math.PI / 2, -Math.PI / 2 + Math.max(.02, pct) * Math.PI * 2); g.stroke(); }
    g.textAlign = 'center'; g.fillStyle = '#7a6a3a'; g.font = '800 26px ' + FI; g.fillText(bt('score'), cx, cy - 62);
    g.fillStyle = '#14203a'; fitText(g, card.score + ' / ' + card.max, 2 * R - 70, '800 {s}px ' + FT, 104); g.fillText(card.score + ' / ' + card.max, cx, cy + 30);
    g.fillStyle = c2; g.font = '800 34px ' + FI; g.fillText(Math.round(pct * 100) + '%' + (card.unit ? ' · ' + card.unit : ''), cx, cy + 86);
    const st = GZ.stars(card.score, card.max); g.font = '64px sans-serif'; g.fillStyle = '#e0a93a'; g.fillText(st, cx, cy + 270);
    g.fillStyle = '#14203a'; fitText(g, GZ.rating(card.score, card.max), W - 220, '800 {s}px ' + FT, 46); g.fillText(GZ.rating(card.score, card.max), cx, cy + 345);
    // challenge + link
    gr = g.createLinearGradient(110, 0, W - 110, 0); gr.addColorStop(0, c1); gr.addColorStop(1, c2); g.fillStyle = gr; rr(g, 110, 1072, W - 220, 108, 54); g.fill();
    g.fillStyle = '#fff'; fitText(g, '🏆 ' + bt('beat'), W - 300, '800 {s}px ' + FT, 40); g.fillText('🏆 ' + bt('beat'), cx, 1120);
    const short = url.replace(/^https?:\/\//, '').split('/')[0];
    fitText(g, '🔗 ' + bt('play') + ' · ' + short, W - 300, '600 {s}px ' + FI, 26); g.fillStyle = 'rgba(255,255,255,.95)'; g.fillText('🔗 ' + bt('play') + ' · ' + short, cx, 1158);
    // footer (same as the quick cards)
    g.fillStyle = '#0d1b33'; g.fillRect(0, H - 128, W, 128);
    gr = g.createLinearGradient(40, H - 104, 120, H - 24); gr.addColorStop(0, '#e9c45a'); gr.addColorStop(1, '#c99a2e'); g.fillStyle = gr; rr(g, 40, H - 104, 80, 80, 18); g.fill();
    g.fillStyle = '#14203a'; g.font = '800 44px ' + FT; g.fillText('B', 80, H - 48);
    g.textAlign = 'left'; g.fillStyle = '#fff'; g.font = '800 34px ' + FI; g.fillText('Narendra Sir', 142, H - 72);
    g.fillStyle = '#b9c3d6'; g.font = '500 22px ' + FI; g.fillText('Biology Lecturer · Founder & CEO, BAIO Learning System', 142, H - 36);
    g.textAlign = 'right'; g.fillStyle = '#e9c45a'; fitText(g, '📲 ' + bt('free'), 190, '800 {s}px ' + FI, 24); g.fillText('📲 ' + bt('free'), W - 40, H - 72);
    g.fillStyle = '#b9c3d6'; g.font = '500 20px ' + FI; g.fillText(bt('app'), W - 40, H - 38);
    g.fillStyle = '#9aa3b2'; g.textAlign = 'right'; g.font = '600 20px ' + FI; g.fillText(new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }), W - 100, 1032);
    return cv;
  };
  GZ.shareBanner = async function(text, path, card){
    try { if (document.fonts && document.fonts.ready) await document.fonts.ready; } catch (e) {}
    const cv = GZ.resultBanner(card, GZ.BASE + path);
    return GZ.shareImage(cv, 'BAIO_result_' + String(card.game).replace(/[^A-Za-z0-9]+/g, '_').slice(0, 30) + '.jpg', text, path);
  };
  // share any canvas as an image + text + link (falls back to a preview with download / WhatsApp / copy)
  GZ.shareImage = async function(cv, fname, text, path, opts){
    opts = opts || {};
    const url = GZ.BASE + path;
    const blob = await new Promise(r => cv.toBlob(r, 'image/jpeg', .92));
    const file = blob && new File([blob], fname, { type: 'image/jpeg' });
    if (file && navigator.canShare && navigator.canShare({ files: [file] })) {
      try { await navigator.share({ files: [file], title: opts.title || 'BAIO Game Zone', text: text + '\n' + url }); return; }
      catch (e) { if (e && e.name === 'AbortError') return; }
    }
    // fallback: preview with download + WhatsApp link + copy
    const href = blob ? URL.createObjectURL(blob) : cv.toDataURL('image/jpeg', .9);
    let box = document.getElementById('gzShare'); if (box) box.remove();
    box = document.createElement('div'); box.id = 'gzShare';
    box.style.cssText = 'position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;padding:16px';
    const B = 'display:block;width:100%;padding:12px;border-radius:12px;border:1.5px solid #e6e0d2;background:#fbf8f1;color:#0c1830;font:700 14px Inter,sans-serif;text-align:center;text-decoration:none;cursor:pointer;margin-top:8px';
    box.innerHTML = '<div style="position:relative;width:100%;max-width:400px;max-height:94vh;overflow:auto;background:#fff;color:#0c1830;border-radius:18px;padding:16px;font-family:Inter,sans-serif">' +
      '<button id="gzX" aria-label="' + bt('close') + '" style="position:absolute;right:10px;top:10px;width:34px;height:34px;border-radius:50%;border:0;background:#f1ede2;cursor:pointer">✕</button>' +
      '<b style="font:800 17px Space Grotesk,Inter,sans-serif">' + (opts.sheet || bt('sheet')) + '</b>' +
      '<img src="' + href + '" alt="" style="display:block;width:100%;border-radius:12px;margin-top:10px;box-shadow:0 6px 18px rgba(0,0,0,.15)">' +
      '<a id="gzDl" href="' + href + '" download="' + fname + '" style="' + B + ';background:linear-gradient(135deg,#D4AF37,#B8912A);border-color:#D4AF37;color:#1a1406">' + (opts.dl || bt('dl')) + '</a>' +
      '<a href="https://wa.me/?text=' + encodeURIComponent(text + ' ' + url) + '" target="_blank" rel="noopener" style="' + B + '">' + bt('wa') + '</a>' +
      '<button id="gzCp" style="' + B + '">' + bt('copy') + '</button>' +
      '<p style="font-size:12px;color:#5f6b80;margin:10px 2px 0;line-height:1.5">' + bt('tip') + '</p></div>';
    document.body.appendChild(box);
    const close = () => box.remove();
    box.addEventListener('click', e => { if (e.target === box) close(); });
    box.querySelector('#gzX').onclick = close;
    box.querySelector('#gzCp').onclick = async function(){ try { await navigator.clipboard.writeText(text + ' ' + url); } catch (e) {} this.textContent = bt('copied'); };
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
