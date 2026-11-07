/* Career share sheet for careers.html.
   window.careerShare(c, lang, labels, url) opens a sheet with a colourful banner for one career
   (Post 4:5, Status 9:16 or Square 1:1), drawn live in the chosen language, plus a ready caption
   with the link. Share picture + link (Web Share with files), save picture, copy, or WhatsApp text.
   labels = {dur, exam, elig, fee, pay, scope} from the page's UI strings.
   Light or dark banner: follows the page theme, and the student can switch it in the sheet. */
(function(){
  var LOGO_SRC = 'zone/baio-logo.png?v=2';
  var GOLD = '#D4AF37', GOLD1 = '#E9C45A', GOLD2 = '#B8912A', NAVY = '#14203A', INK = '#F4F1E6', DIM = '#B9C6BF';
  var F = { head:"'Space Grotesk', Inter, 'Noto Sans Kannada', 'Noto Sans Devanagari', sans-serif",
            en:"Inter, 'Noto Sans Kannada', 'Noto Sans Devanagari', sans-serif",
            kn:"'Noto Sans Kannada', Inter, sans-serif", hi:"'Noto Sans Devanagari', Inter, sans-serif",
            emo:"'Noto Color Emoji', 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif" };
  /* banner colour themes */
  var TH = {
    dark:{ bg:['#0A1712','#12352A','#0B1E18','#141032'], blobs:['rgba(45,212,191,.22)','rgba(167,139,250,.18)','rgba(244,114,182,.14)'],
      brand:GOLD, kickBg:'rgba(45,212,191,.14)', kickLine:'#2DD4BF', kickTx:'#5EEAD4', name:'#fff', sub:GOLD1, shadow:'rgba(0,0,0,.45)',
      strip:'rgba(255,255,255,.06)', stripTx:INK, row:'rgba(255,255,255,.045)', rowLine:.35, val:'#fff', lab:null },
    light:{ bg:['#FFFBF0','#FFF8E6','#EEF8F3','#F3EEFD'], blobs:['rgba(45,212,191,.20)','rgba(167,139,250,.16)','rgba(244,114,182,.12)'],
      brand:'#9A7614', kickBg:'rgba(13,148,136,.10)', kickLine:'#0D9488', kickTx:'#0F766E', name:'#14302A', sub:'#9A7614', shadow:'rgba(120,90,10,.28)',
      strip:'rgba(255,255,255,.75)', stripTx:'#22413A', row:'rgba(255,255,255,.82)', rowLine:.5, val:'#14302A',
      lab:{ dur:'#0D9488', exam:'#2563EB', elig:'#4D7C0F', fee:'#B45309', pay:'#DB2777', scope:'#7C3AED' } }
  };
  /* one colour per info row */
  var ROWS = [
    { k:'dur',   ic:'⏱️', col:'#2DD4BF' },
    { k:'exam',  ic:'📝', col:'#60A5FA' },
    { k:'elig',  ic:'✅', col:'#A3E635' },
    { k:'fee',   ic:'💰', col:'#FBBF24' },
    { k:'pay',   ic:'💼', col:'#F472B6' },
    { k:'scope', ic:'🚀', col:'#A78BFA' }
  ];
  var TX = {
    en:{ kick:'CAREER GUIDANCE', free:'Free career guidance on the BAIO app', how:'Open BAIO → Career Guidance', sir:'Narendra Sir', role:'Biology Lecturer · Founder & CEO, BAIO',
      ui:{ title:'📤 Share this career', post:'Post 4:5', status:'Status 9:16', sq:'Square 1:1', caption:'Caption with link (you can edit it)', share:'Share picture + link', save:'⬇ Save picture', copy:'📋 Copy caption', wa:'💬 WhatsApp text', copied:'✅ Copied', making:'Making your picture…', light:'Light', dark:'Dark' },
      cap:function(c, L, lb, url){ return '🎓 ' + c.name + ' — ' + L(c.sub) + '\n\n' + L(c.what) + '\n\n⏱️ ' + lb.dur + ': ' + L(c.dur) + '\n📝 ' + lb.exam + ': ' + L(c.exam) + '\n💼 ' + lb.pay + ': ' + L(c.pay) + '\n\n👉 Full details, fees and future scope:\n' + url + '\n\n— BAIO Learning System · Narendra Sir'; } },
    kn:{ kick:'ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ', free:'BAIO ಆ್ಯಪ್‌ನಲ್ಲಿ ಉಚಿತ ವೃತ್ತಿ ಮಾರ್ಗದರ್ಶನ', how:'BAIO ತೆರೆಯಿರಿ → Career Guidance', sir:'ನರೇಂದ್ರ ಸರ್', role:'ಜೀವಶಾಸ್ತ್ರ ಉಪನ್ಯಾಸಕರು · Founder & CEO, BAIO',
      ui:{ title:'📤 ಈ ವೃತ್ತಿ ಹಂಚಿ', post:'ಪೋಸ್ಟ್ 4:5', status:'ಸ್ಟೇಟಸ್ 9:16', sq:'ಚೌಕ 1:1', caption:'ಲಿಂಕ್ ಸಹಿತ ಶೀರ್ಷಿಕೆ (ಬದಲಾಯಿಸಬಹುದು)', share:'ಚಿತ್ರ + ಲಿಂಕ್ ಹಂಚಿ', save:'⬇ ಚಿತ್ರ ಉಳಿಸಿ', copy:'📋 ಶೀರ್ಷಿಕೆ ಕಾಪಿ', wa:'💬 WhatsApp ಪಠ್ಯ', copied:'✅ ಕಾಪಿ ಆಯಿತು', making:'ಚಿತ್ರ ತಯಾರಾಗುತ್ತಿದೆ…', light:'ಬೆಳಕು', dark:'ಗಾಢ' },
      cap:function(c, L, lb, url){ return '🎓 ' + c.name + ' — ' + L(c.sub) + '\n\n' + L(c.what) + '\n\n⏱️ ' + lb.dur + ': ' + L(c.dur) + '\n📝 ' + lb.exam + ': ' + L(c.exam) + '\n💼 ' + lb.pay + ': ' + L(c.pay) + '\n\n👉 ಪೂರ್ಣ ವಿವರ, ಶುಲ್ಕ ಮತ್ತು ಭವಿಷ್ಯ:\n' + url + '\n\n— BAIO Learning System · ನರೇಂದ್ರ ಸರ್'; } },
    hi:{ kick:'करियर मार्गदर्शन', free:'BAIO ऐप पर मुफ़्त करियर मार्गदर्शन', how:'BAIO खोलें → Career Guidance', sir:'नरेंद्र सर', role:'बायोलॉजी लेक्चरर · Founder & CEO, BAIO',
      ui:{ title:'📤 यह करियर शेयर करें', post:'पोस्ट 4:5', status:'स्टेटस 9:16', sq:'स्क्वेयर 1:1', caption:'लिंक सहित कैप्शन (बदल सकते हैं)', share:'चित्र + लिंक शेयर करें', save:'⬇ चित्र सेव करें', copy:'📋 कैप्शन कॉपी', wa:'💬 WhatsApp टेक्स्ट', copied:'✅ कॉपी हो गया', making:'चित्र बन रहा है…', light:'लाइट', dark:'डार्क' },
      cap:function(c, L, lb, url){ return '🎓 ' + c.name + ' — ' + L(c.sub) + '\n\n' + L(c.what) + '\n\n⏱️ ' + lb.dur + ': ' + L(c.dur) + '\n📝 ' + lb.exam + ': ' + L(c.exam) + '\n💼 ' + lb.pay + ': ' + L(c.pay) + '\n\n👉 पूरी जानकारी, फ़ीस और भविष्य:\n' + url + '\n\n— BAIO Learning System · नरेंद्र सर'; } }
  };

  var fontP = null, logoP = null;
  function loadFonts(){
    if(fontP) return fontP;
    fontP = new Promise(function(res){
      try{
        var to = setTimeout(res, 3000);
        Promise.all(['700 40px "Space Grotesk"','800 40px Inter','600 40px Inter','500 40px Inter','600 40px "Noto Sans Kannada"','600 40px "Noto Sans Devanagari"','40px "Noto Color Emoji"'].map(function(f){ return document.fonts.load(f, 'Aಕक🎓'); }))
          .then(function(){ clearTimeout(to); res(); }, function(){ clearTimeout(to); res(); });
      }catch(e){ res(); }
    });
    return fontP;
  }
  function loadLogo(){ if(!logoP) logoP = new Promise(function(res){ var i = new Image(); i.onload = function(){ res(i); }; i.onerror = function(){ res(null); }; i.src = LOGO_SRC; }); return logoP; }
  function rr(x, X, Y, W, H, R){ x.beginPath(); x.moveTo(X+R, Y); x.arcTo(X+W, Y, X+W, Y+H, R); x.arcTo(X+W, Y+H, X, Y+H, R); x.arcTo(X, Y+H, X, Y, R); x.arcTo(X, Y, X+W, Y, R); x.closePath(); }
  function wrap(x, text, maxW){
    var words = String(text).split(' '), lines = [], cur = '';
    words.forEach(function(w){ var t = cur ? cur + ' ' + w : w; if(x.measureText(t).width > maxW && cur){ lines.push(cur); cur = w; } else cur = t; });
    if(cur) lines.push(cur); return lines;
  }
  /* largest size (max → min) at which text fits in maxLines; ellipsis on the last line if it still does not */
  function fitLines(x, text, weight, fam, max, min, maxW, maxLines){
    var z = max, lines;
    for(; z >= min; z--){ x.font = weight + ' ' + z + 'px ' + fam; lines = wrap(x, text, maxW); if(lines.length <= maxLines) return { z:z, lines:lines }; }
    z = min; x.font = weight + ' ' + z + 'px ' + fam; lines = wrap(x, text, maxW).slice(0, maxLines);
    var last = lines[maxLines - 1] || ''; while(last && x.measureText(last + '…').width > maxW) last = last.replace(/\s*\S+$/, '');
    lines[maxLines - 1] = last + '…'; return { z:z, lines:lines };
  }
  function alpha(hex, a){ var n = parseInt(hex.slice(1), 16); return 'rgba(' + (n >> 16) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a + ')'; }

  function background(x, W, H, P){
    x.fillStyle = P.bg[0]; x.fillRect(0, 0, W, H);
    var g = x.createLinearGradient(0, 0, W, H); g.addColorStop(0, P.bg[1]); g.addColorStop(0.55, P.bg[2]); g.addColorStop(1, P.bg[3]); x.fillStyle = g; x.fillRect(0, 0, W, H);
    /* soft colour blobs */
    [[W * 0.95, H * 0.04, W * 0.55, P.blobs[0]], [W * -0.05, H * 0.42, W * 0.5, P.blobs[1]], [W * 0.9, H * 0.78, W * 0.5, P.blobs[2]]].forEach(function(b){
      var r = x.createRadialGradient(b[0], b[1], 0, b[0], b[1], b[2]); r.addColorStop(0, b[3]); r.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = r; x.fillRect(0, 0, W, H); });
  }
  function brand(x, L, Y, logo, s, P){
    var b = 60 * s;
    if(logo){ x.save(); rr(x, L, Y, b, b, 16 * s); x.fillStyle = '#fff'; x.fill(); if(P.name !== '#fff'){ x.lineWidth = 2; x.strokeStyle = 'rgba(20,48,42,.15)'; x.stroke(); } rr(x, L + 3, Y + 3, b - 6, b - 6, 13 * s); x.clip(); x.drawImage(logo, L + 3, Y + 3, b - 6, b - 6); x.restore(); }
    else { var g = x.createLinearGradient(L, Y, L + b, Y + b); g.addColorStop(0, GOLD1); g.addColorStop(1, GOLD2); rr(x, L, Y, b, b, 16 * s); x.fillStyle = g; x.fill(); x.fillStyle = NAVY; x.font = '800 ' + (34 * s) + 'px ' + F.head; x.textAlign = 'center'; x.fillText('B', L + b / 2, Y + b * 0.7); x.textAlign = 'left'; }
    x.font = '700 ' + (21 * s) + 'px Inter, sans-serif'; x.fillStyle = P.brand; if('letterSpacing' in x) x.letterSpacing = (3 * s) + 'px';
    x.fillText('BAIO LEARNING SYSTEM', L + b + 18 * s, Y + b * 0.62); if('letterSpacing' in x) x.letterSpacing = '0px';
  }
  function emoji(x, e, cx, cy, size){ x.save(); x.globalAlpha = 1; x.fillStyle = '#000'; x.font = size + 'px ' + F.emo; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(e, cx, cy + size * 0.05); x.restore(); }

  /* fmt: 'post' 1080x1350 · 'status' 1080x1920 · 'sq' 1080x1080 */
  function draw(c, lang, lb, logo, fmt, theme){
    var P = TH[theme] || TH.dark;
    var t = TX[lang] || TX.en, fam = F[lang] || F.en, Lx = function(o){ return o ? (o[lang] || o.en) : ''; };
    var W = 1080, H = fmt === 'status' ? 1920 : fmt === 'sq' ? 1080 : 1350, cv = document.createElement('canvas'); cv.width = W; cv.height = H; var x = cv.getContext('2d');
    var big = fmt === 'status', sq = fmt === 'sq', L = 64, R = W - 64;
    background(x, W, H, P);
    var y = big ? 110 : 56; brand(x, L, y, logo, 1, P);
    /* kicker pill (right) */
    x.font = '700 ' + (lang === 'en' ? 21 : 24) + 'px ' + fam; var kw = x.measureText(t.kick).width + 44;
    rr(x, R - kw, y + 6, kw, 48, 24); x.fillStyle = P.kickBg; x.fill(); x.lineWidth = 2; x.strokeStyle = P.kickLine; x.stroke();
    x.fillStyle = P.kickTx; x.textAlign = 'center'; x.fillText(t.kick, R - kw / 2, y + 38); x.textAlign = 'left';
    y += big ? 130 : 100;

    /* hero: icon badge + name + subtitle */
    var bs = big ? 190 : sq ? 128 : 150, bx = L, by = y;
    x.save(); x.shadowColor = P.shadow; x.shadowBlur = 40; x.shadowOffsetY = 16;
    var bg = x.createLinearGradient(bx, by, bx + bs, by + bs); bg.addColorStop(0, GOLD1); bg.addColorStop(1, GOLD2); rr(x, bx, by, bs, bs, bs * 0.28); x.fillStyle = bg; x.fill(); x.restore();
    rr(x, bx + 8, by + 8, bs - 16, bs - 16, bs * 0.22); x.fillStyle = 'rgba(255,255,255,.18)'; x.fill();
    emoji(x, c.ic, bx + bs / 2, by + bs / 2, bs * 0.56);
    var tx = bx + bs + 34, tw = R - tx;
    var nm = fitLines(x, c.name, '700', F.head, big ? 70 : sq ? 54 : 62, 34, tw, 2);
    x.fillStyle = P.name; nm.lines.forEach(function(l, i){ x.font = '700 ' + nm.z + 'px ' + F.head; x.fillText(l, tx, by + nm.z * 0.95 + i * nm.z * 1.12); });
    var ny = by + nm.z * 0.95 + (nm.lines.length - 1) * nm.z * 1.12 + 18;
    var sb = fitLines(x, Lx(c.sub), '600', fam, big ? 34 : 30, 22, tw, 2);
    x.fillStyle = P.sub; sb.lines.forEach(function(l, i){ x.font = '600 ' + sb.z + 'px ' + fam; x.fillText(l, tx, ny + sb.z + i * sb.z * 1.3); });
    y = Math.max(by + bs, ny + sb.z + (sb.lines.length - 1) * sb.z * 1.3) + (big ? 50 : 34);

    /* layout: rows are as tall as their text needs; if everything does not fit, the
       "what you do" strip is dropped (it is also in the caption) and fonts shrink */
    var rows = sq ? ROWS.filter(function(r){ return r.k !== 'elig' && r.k !== 'scope'; }) : ROWS;
    var foot = big ? 250 : 150, gap = big ? 16 : 12, bottom = H - foot - (big ? 60 : 30);
    var lz = big ? 24 : 19, cs0 = big ? 88 : 66, maxLines = big ? 3 : 2, pw = R - L - 22 - cs0 - 24 - 24;
    var PT = big ? 18 : 13, PB = big ? 16 : 12, LG = 6, LH = 1.25;
    function plan(avail, vmax, vmin){
      for(var vz = vmax; vz >= vmin; vz--){
        x.font = '600 ' + vz + 'px ' + fam;
        var need = rows.map(function(r){ var n = Math.min(maxLines, wrap(x, Lx(c[r.k]), pw).length); return Math.max(cs0 + 18, PT + lz + LG + n * vz * LH + PB); });
        if(need.reduce(function(a, b){ return a + b; }, 0) + gap * (rows.length - 1) <= avail) return { vz:vz, need:need };
      }
      return null;
    }
    var wq = null, wh = 0, wgap = big ? 34 : 22, PL = null;
    if(!sq){
      for(var wz = big ? 36 : 30; wz >= 22 && !PL; wz -= 2){
        wq = fitLines(x, Lx(c.what), '500', fam, wz, wz, R - L - 60, big ? 4 : 3); wh = wq.lines.length * wq.z * 1.38 + 34;
        PL = plan(bottom - y - wh - wgap, big ? 36 : 30, big ? 26 : 22);
      }
    }
    if(!PL){ wq = null; wh = 0; wgap = 0; PL = plan(bottom - y, big ? 36 : 30, big ? 22 : 18) || { vz: big ? 22 : 18, need: rows.map(function(){ return (bottom - y - gap * (rows.length - 1)) / rows.length; }) }; }
    if(wq){
      rr(x, L, y, R - L, wh, 24); x.fillStyle = P.strip; x.fill();
      x.fillStyle = GOLD; rr(x, L, y, 8, wh, 4); x.fill();
      x.fillStyle = P.stripTx; wq.lines.forEach(function(l, i){ x.font = '500 ' + wq.z + 'px ' + fam; x.fillText(l, L + 36, y + 17 + wq.z * 1.02 + i * wq.z * 1.38); });
      y += wh + wgap;
    }
    var vz = PL.vz, need = PL.need, spare = Math.max(0, bottom - y - gap * (rows.length - 1) - need.reduce(function(a, b){ return a + b; }, 0)) / rows.length, Y = y;
    rows.forEach(function(r, i){
      var rh = need[i] + spare, cs = Math.min(rh - 18, cs0);
      rr(x, L, Y, R - L, rh, 22); x.fillStyle = P.row; x.fill(); x.lineWidth = 1.5; x.strokeStyle = alpha(r.col, P.rowLine); x.stroke();
      var cx = L + 22, cy = Y + (rh - cs) / 2, g2 = x.createLinearGradient(cx, cy, cx + cs, cy + cs); g2.addColorStop(0, r.col); g2.addColorStop(1, alpha(r.col, .6));
      rr(x, cx, cy, cs, cs, cs * 0.3); x.fillStyle = g2; x.fill();
      emoji(x, r.ic, cx + cs / 2, cy + cs / 2, cs * 0.52);
      var px = cx + cs0 + 24, v = fitLines(x, Lx(c[r.k]), '600', fam, vz, vz, pw, maxLines);
      var block = lz + LG + v.lines.length * v.z * LH, top = Y + (rh - block) / 2;
      x.font = '800 ' + lz + 'px ' + fam; x.fillStyle = (P.lab && P.lab[r.k]) || r.col; if(lang === 'en' && 'letterSpacing' in x) x.letterSpacing = '2px';
      x.fillText(String(lb[r.k] || '').toUpperCase(), px, top + lz * 0.85); if('letterSpacing' in x) x.letterSpacing = '0px';
      x.fillStyle = P.val; v.lines.forEach(function(l, k){ x.font = '600 ' + v.z + 'px ' + fam; x.fillText(l, px, top + lz + LG + v.z * 0.95 + k * v.z * LH); });
      Y += rh + gap;
    });

    /* footer */
    var fy = H - foot; x.fillStyle = GOLD; x.fillRect(0, fy, W, foot);
    var fg = x.createLinearGradient(0, fy, W, fy); fg.addColorStop(0, GOLD1); fg.addColorStop(1, GOLD2); x.fillStyle = fg; x.fillRect(0, fy, W, foot);
    x.fillStyle = NAVY;
    if(big){
      x.textAlign = 'center';
      fitLines(x, t.free, '800', fam, 46, 28, W - 120, 1); x.fillText(t.free, W / 2, fy + 78);
      fitLines(x, t.how, '600', fam, 30, 20, W - 120, 1); x.fillText(t.how, W / 2, fy + 130);
      var sl = t.sir + ' · ' + t.role; fitLines(x, sl, '700', fam, 26, 16, W - 120, 1); x.fillText(sl, W / 2, fy + 186); x.textAlign = 'left';
    } else {
      fitLines(x, t.free, '800', fam, 32, 20, 600, 1); x.fillText(t.free, L, fy + 62);
      fitLines(x, t.how, '600', fam, 22, 16, 600, 1); x.fillText(t.how, L, fy + 100);
      x.textAlign = 'right'; fitLines(x, t.sir, '800', fam, 28, 20, 340, 1); x.fillText(t.sir, R, fy + 62);
      fitLines(x, t.role, '600', fam, 17, 13, 360, 1); x.fillText(t.role, R, fy + 98); x.textAlign = 'left';
    }
    return cv;
  }

  function css(){
    if(document.getElementById('csCss')) return;
    var s = document.createElement('style'); s.id = 'csCss';
    s.textContent = '.cs-ov{position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,.62);display:flex;align-items:flex-end;justify-content:center}' +
      '.cs-sh{width:100%;max-width:560px;max-height:94vh;overflow:auto;background:#10261f;color:#fff;border-radius:22px 22px 0 0;padding:16px 16px 22px;font-family:Inter,"Noto Sans Kannada","Noto Sans Devanagari",system-ui,sans-serif}' +
      '[data-theme="light"] .cs-sh{background:#fffdf7;color:#14302a}' +
      '.cs-h{display:flex;justify-content:space-between;align-items:center;font-weight:800;font-size:17px;margin-bottom:10px}' +
      '.cs-x{background:none;border:0;color:inherit;font-size:28px;cursor:pointer;line-height:1;min-width:44px;min-height:44px}' +
      '.cs-seg{display:flex;gap:6px;margin-bottom:8px}.cs-seg button{flex:1;min-height:42px;padding:8px 6px;border-radius:12px;border:1.5px solid rgba(127,127,127,.35);background:none;color:inherit;font:700 13px Inter,"Noto Sans Kannada","Noto Sans Devanagari",sans-serif;cursor:pointer}' +
      '.cs-seg button.on{border-color:#D4AF37;background:rgba(212,175,55,.18)}' +
      '.cs-prev{display:flex;justify-content:center;align-items:center;background:rgba(127,127,127,.12);border-radius:14px;padding:10px;margin:6px 0 10px;min-height:220px}' +
      '.cs-prev img{display:block;max-width:100%;max-height:50vh;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.35)}' +
      '.cs-lbl{display:block;font-size:12px;font-weight:700;opacity:.8;margin:4px 2px}' +
      '.cs-cap{width:100%;box-sizing:border-box;min-height:130px;border-radius:12px;border:1px solid rgba(127,127,127,.35);background:rgba(127,127,127,.08);color:inherit;padding:10px;font:500 13.5px/1.45 Inter,"Noto Sans Kannada","Noto Sans Devanagari",sans-serif;resize:vertical}' +
      '.cs-btns{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}.cs-btns button{min-height:46px;padding:10px;border-radius:12px;border:0;font:700 14px Inter,"Noto Sans Kannada","Noto Sans Devanagari",sans-serif;cursor:pointer;background:rgba(127,127,127,.18);color:inherit}' +
      '.cs-btns .cs-go{grid-column:1/-1;background:linear-gradient(90deg,#E9C45A,#D4AF37);color:#1b1300;font-size:15.5px}.cs-btns button:disabled{opacity:.5}';
    document.head.appendChild(s);
  }
  function toBlob(cv){ return new Promise(function(res){ cv.toBlob(function(b){ res(b); }, 'image/jpeg', 0.92); }); }

  window.careerShare = function(c, lang, lb, url){
    css(); lang = TX[lang] ? lang : 'en';
    var theme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
    try{ var st = localStorage.getItem('baio_career_banner_theme'); if(st === 'dark' || st === 'light') theme = st; }catch(e){}
    var t = TX[lang], fmt = 'post', cache = {}, Lx = function(o){ return o ? (o[lang] || o.en) : ''; };
    var ov = document.createElement('div'); ov.className = 'cs-ov';
    ov.innerHTML = '<div class="cs-sh" role="dialog" aria-modal="true" aria-label="' + t.ui.title + '"><div class="cs-h"><span>' + t.ui.title + '</span><button type="button" class="cs-x" aria-label="Close">×</button></div>' +
      '<div class="cs-seg"><button type="button" data-f="post">🖼 ' + t.ui.post + '</button><button type="button" data-f="status">📱 ' + t.ui.status + '</button><button type="button" data-f="sq">⬛ ' + t.ui.sq + '</button></div>' +
      '<div class="cs-seg"><button type="button" data-th="light">☀️ ' + t.ui.light + '</button><button type="button" data-th="dark">🌙 ' + t.ui.dark + '</button></div>' +
      '<div class="cs-prev"></div>' +
      '<label class="cs-lbl" for="csCap">' + t.ui.caption + '</label><textarea class="cs-cap" id="csCap"></textarea>' +
      '<div class="cs-btns"><button type="button" class="cs-go" disabled>📤 ' + t.ui.share + '</button><button type="button" class="cs-save" disabled>' + t.ui.save + '</button><button type="button" class="cs-copy">' + t.ui.copy + '</button><button type="button" class="cs-wa" style="grid-column:1/-1">' + t.ui.wa + '</button></div></div>';
    document.body.appendChild(ov);
    var $ = function(q){ return ov.querySelector(q); };
    function close(){ ov.remove(); document.removeEventListener('keydown', onKey); }
    function onKey(e){ if(e.key === 'Escape') close(); }
    document.addEventListener('keydown', onKey);
    ov.addEventListener('click', function(e){ if(e.target === ov) close(); }); $('.cs-x').onclick = close;
    $('#csCap').value = t.cap(c, Lx, lb, url);
    function render(){
      ov.querySelectorAll('[data-f]').forEach(function(b){ b.classList.toggle('on', b.dataset.f === fmt); });
      ov.querySelectorAll('[data-th]').forEach(function(b){ b.classList.toggle('on', b.dataset.th === theme); });
      var key = fmt + '-' + theme; $('.cs-go').disabled = true; $('.cs-save').disabled = true;
      if(!cache[key]) $('.cs-prev').innerHTML = '<span>' + t.ui.making + '</span>';
      Promise.all([loadFonts(), loadLogo()]).then(function(r){
        if(!cache[key]){ var cv = draw(c, lang, lb, r[1], fmt, theme); cache[key] = { cv:cv, url:cv.toDataURL('image/jpeg', 0.85) }; }
        if(fmt + '-' + theme !== key) return;
        $('.cs-prev').innerHTML = '<img alt="' + c.name.replace(/"/g, '') + '" src="' + cache[key].url + '">'; $('.cs-go').disabled = false; $('.cs-save').disabled = false;
      });
    }
    ov.querySelectorAll('[data-f]').forEach(function(b){ b.onclick = function(){ fmt = b.dataset.f; render(); }; });
    ov.querySelectorAll('[data-th]').forEach(function(b){ b.onclick = function(){ theme = b.dataset.th; try{ localStorage.setItem('baio_career_banner_theme', theme); }catch(e){} render(); }; });
    function fname(){ return 'BAIO_Career_' + c.id + '_' + fmt + '_' + theme + '_' + lang + '.jpg'; }
    $('.cs-go').onclick = function(){
      var k = cache[fmt + '-' + theme], cap = $('#csCap').value; if(!k) return;
      toBlob(k.cv).then(function(b){
        var file = b && new File([b], fname(), { type:'image/jpeg' });
        if(file && navigator.canShare && navigator.canShare({ files:[file] })) navigator.share({ files:[file], text:cap }).catch(function(){});
        else if(navigator.share) navigator.share({ title:'BAIO · ' + c.name, text:cap }).catch(function(){});
        else window.open('https://wa.me/?text=' + encodeURIComponent(cap), '_blank', 'noopener');
      });
    };
    $('.cs-save').onclick = function(){ var k = cache[fmt + '-' + theme]; if(!k) return; var a = document.createElement('a'); a.href = k.cv.toDataURL('image/jpeg', 0.92); a.download = fname(); document.body.appendChild(a); a.click(); a.remove(); };
    $('.cs-copy').onclick = function(){
      var cap = $('#csCap').value, b = $('.cs-copy'), done = function(){ b.textContent = t.ui.copied; setTimeout(function(){ b.textContent = t.ui.copy; }, 1800); };
      if(navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(cap).then(done, function(){ $('#csCap').select(); });
      else { $('#csCap').select(); try{ document.execCommand('copy'); done(); }catch(e){} }
    };
    $('.cs-wa').onclick = function(){ window.open('https://wa.me/?text=' + encodeURIComponent($('#csCap').value), '_blank', 'noopener'); };
    render();
  };
  window.__careerBanner = draw; /* for testing */
})();
