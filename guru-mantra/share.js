/* Guru Mantra share sheet (guru-mantra.html).
   window.gmShare(item, lang, opts) draws today's mantra as a social-media banner in the chosen size
   (Post 4:5 1080x1350, Status 9:16 1080x1920, Square 1:1 1080x1080), with the BAIO logo and the page link
   printed on it, plus an editable caption with the clickable link. Share picture + link (Web Share with
   files), save picture, copy caption or send WhatsApp text.
   item = {s:{ic,t}, x:{m,d}}; opts = {date, url, by, how, today, h1}. */
(function(){
  var LOGO_SRC = 'zone/baio-logo.png?v=2';
  var SHOW_URL = 'narendra-bio-sir.github.io/BAIO-Learning-System-By-Narendra-Sir/guru-mantra.html';
  var F = { head:"'Space Grotesk', Inter, 'Noto Sans Kannada', 'Noto Sans Devanagari', sans-serif",
            en:"Inter, 'Noto Sans Kannada', 'Noto Sans Devanagari', sans-serif",
            kn:"'Noto Sans Kannada', Inter, sans-serif", hi:"'Noto Sans Devanagari', Inter, sans-serif",
            emo:"'Noto Color Emoji', 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif" };
  var TX = {
    en:{ kick:'GURU MANTRA', foot:'Get a new mantra every day', open:'Open BAIO app → Guru Mantra', sir:'Narendra Sir', role:'Founder & CEO, BAIO',
      ui:{ title:'📤 Share today’s mantra', post:'Post 4:5', status:'Status 9:16', sq:'Square 1:1', caption:'Caption with link (you can edit it)', share:'Share picture + link', save:'⬇ Save picture', copy:'📋 Copy caption', wa:'💬 WhatsApp text', copied:'✅ Copied', making:'Making your picture…' },
      cap:function(it, L, o){ return '🪔 ' + o.today + ' · ' + o.date + '\n\n' + quoted(L(it.x.m)) + '\n\n' + o.how + ': ' + L(it.x.d) + '\n\n' + o.by + '\n\n👉 Get a new mantra every day in the BAIO app:\n' + o.url; } },
    kn:{ kick:'ಗುರು ಮಂತ್ರ', foot:'ಪ್ರತಿದಿನ ಒಂದು ಹೊಸ ಮಂತ್ರ', open:'BAIO ಆ್ಯಪ್ ತೆರೆಯಿರಿ → ಗುರು ಮಂತ್ರ', sir:'ನರೇಂದ್ರ ಸರ್', role:'Founder & CEO, BAIO',
      ui:{ title:'📤 ಇಂದಿನ ಮಂತ್ರ ಹಂಚಿ', post:'ಪೋಸ್ಟ್ 4:5', status:'ಸ್ಟೇಟಸ್ 9:16', sq:'ಚೌಕ 1:1', caption:'ಲಿಂಕ್ ಸಹಿತ ಶೀರ್ಷಿಕೆ (ಬದಲಾಯಿಸಬಹುದು)', share:'ಚಿತ್ರ + ಲಿಂಕ್ ಹಂಚಿ', save:'⬇ ಚಿತ್ರ ಉಳಿಸಿ', copy:'📋 ಶೀರ್ಷಿಕೆ ಕಾಪಿ', wa:'💬 WhatsApp ಪಠ್ಯ', copied:'✅ ಕಾಪಿ ಆಯಿತು', making:'ಚಿತ್ರ ತಯಾರಾಗುತ್ತಿದೆ…' },
      cap:function(it, L, o){ return '🪔 ' + o.today + ' · ' + o.date + '\n\n' + quoted(L(it.x.m)) + '\n\n' + o.how + ': ' + L(it.x.d) + '\n\n' + o.by + '\n\n👉 BAIO ಆ್ಯಪ್‌ನಲ್ಲಿ ಪ್ರತಿದಿನ ಹೊಸ ಮಂತ್ರ:\n' + o.url; } },
    hi:{ kick:'गुरु मंत्र', foot:'हर दिन एक नया मंत्र', open:'BAIO ऐप खोलें → गुरु मंत्र', sir:'नरेंद्र सर', role:'Founder & CEO, BAIO',
      ui:{ title:'📤 आज का मंत्र शेयर करें', post:'पोस्ट 4:5', status:'स्टेटस 9:16', sq:'स्क्वेयर 1:1', caption:'लिंक सहित कैप्शन (बदल सकते हैं)', share:'चित्र + लिंक शेयर करें', save:'⬇ चित्र सेव करें', copy:'📋 कैप्शन कॉपी', wa:'💬 WhatsApp टेक्स्ट', copied:'✅ कॉपी हो गया', making:'चित्र बन रहा है…' },
      cap:function(it, L, o){ return '🪔 ' + o.today + ' · ' + o.date + '\n\n' + quoted(L(it.x.m)) + '\n\n' + o.how + ': ' + L(it.x.d) + '\n\n' + o.by + '\n\n👉 BAIO ऐप में हर दिन नया मंत्र:\n' + o.url; } }
  };

  var fontP = null, logoP = null;
  function loadFonts(){
    if(fontP) return fontP;
    fontP = new Promise(function(res){
      try{
        var to = setTimeout(res, 3000);
        Promise.all(['700 40px "Space Grotesk"','800 40px Inter','700 40px Inter','600 40px Inter','500 40px Inter','600 40px "Noto Sans Kannada"','600 40px "Noto Sans Devanagari"','40px "Noto Color Emoji"'].map(function(f){ return document.fonts.load(f, 'Aಕक🪔'); }))
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
  function fitLines(x, text, weight, fam, max, min, maxW, maxLines){
    var z = max, lines;
    for(; z >= min; z--){ x.font = weight + ' ' + z + 'px ' + fam; lines = wrap(x, text, maxW); if(lines.length <= maxLines) return { z:z, lines:lines }; }
    z = min; x.font = weight + ' ' + z + 'px ' + fam; lines = wrap(x, text, maxW).slice(0, maxLines);
    var last = lines[maxLines - 1] || ''; while(last && x.measureText(last + '…').width > maxW) last = last.replace(/\s*\S+$/, '');
    lines[maxLines - 1] = last + '…'; return { z:z, lines:lines };
  }
  function emoji(x, e, cx, cy, size){ x.save(); x.fillStyle = '#000'; x.font = size + 'px ' + F.emo; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText(e, cx, cy + size * 0.05); x.restore(); }
  /* add quotes unless the mantra already has them (memory tricks do) */
  function quoted(m){ return /^[“"]/.test(m) ? m : '“' + m + '”'; }
  function spaced(x, on){ if('letterSpacing' in x) x.letterSpacing = on ? on + 'px' : '0px'; }

  /* fmt: 'post' 1080x1350 · 'status' 1080x1920 · 'sq' 1080x1080 */
  function draw(it, lang, o, logo, fmt){
    var t = TX[lang] || TX.en, fam = F[lang] || F.en, Lx = function(v){ return v ? (v[lang] || v.en) : ''; };
    var W = 1080, H = fmt === 'status' ? 1920 : fmt === 'sq' ? 1080 : 1350, cv = document.createElement('canvas'); cv.width = W; cv.height = H; var x = cv.getContext('2d');
    var big = fmt === 'status', sq = fmt === 'sq', L = 72, R = W - 72;

    /* background: saffron → deep purple, with a warm glow behind the lamp */
    var g = x.createLinearGradient(0, 0, W * 0.6, H); g.addColorStop(0, '#7C2D12'); g.addColorStop(0.38, '#9A3412'); g.addColorStop(1, '#3B0F7A'); x.fillStyle = g; x.fillRect(0, 0, W, H);
    [[W * 0.92, H * 0.12, W * 0.62, 'rgba(255,190,80,.42)'], [W * 0.02, H * 0.92, W * 0.6, 'rgba(236,72,153,.22)']].forEach(function(b){
      var r = x.createRadialGradient(b[0], b[1], 0, b[0], b[1], b[2]); r.addColorStop(0, b[3]); r.addColorStop(1, 'rgba(0,0,0,0)'); x.fillStyle = r; x.fillRect(0, 0, W, H); });
    /* faint dot grain */
    x.fillStyle = 'rgba(255,255,255,.045)'; for(var gy = 20; gy < H; gy += 30) for(var gx = 20; gx < W; gx += 30) { x.beginPath(); x.arc(gx, gy, 1.4, 0, 6.3); x.fill(); }

    /* top bar: logo + brand, kicker pill */
    var y = big ? 110 : 60, b = 64;
    if(logo){ x.save(); rr(x, L, y, b, b, 17); x.fillStyle = '#fff'; x.fill(); rr(x, L + 3, y + 3, b - 6, b - 6, 14); x.clip(); x.drawImage(logo, L + 3, y + 3, b - 6, b - 6); x.restore(); }
    else { var lg = x.createLinearGradient(L, y, L + b, y + b); lg.addColorStop(0, '#FFE07A'); lg.addColorStop(1, '#F2B632'); rr(x, L, y, b, b, 17); x.fillStyle = lg; x.fill(); x.fillStyle = '#2A0B4E'; x.font = '800 36px ' + F.head; x.textAlign = 'center'; x.fillText('B', L + b / 2, y + b * 0.7); x.textAlign = 'left'; }
    x.font = '700 22px Inter, sans-serif'; x.fillStyle = '#FFD580'; spaced(x, 3); x.fillText('BAIO LEARNING SYSTEM', L + b + 18, y + 30); spaced(x, 0);
    x.font = '600 20px Inter, sans-serif'; x.fillStyle = '#FDE7C8'; x.fillText('by Narendra Sir', L + b + 18, y + 56);
    x.font = '800 ' + (lang === 'en' ? 22 : 25) + 'px ' + fam; spaced(x, lang === 'en' ? 2 : 0); var kw = x.measureText(t.kick).width + 48;
    rr(x, R - kw, y + 8, kw, 50, 25); x.fillStyle = '#FFD580'; x.fill(); x.fillStyle = '#4A1D05'; x.textAlign = 'center'; x.fillText(t.kick, R - kw / 2, y + 41); x.textAlign = 'left'; spaced(x, 0);

    /* lamp + "today" label + date */
    y += big ? 170 : sq ? 112 : 130;
    var ls = big ? 210 : sq ? 130 : 170;
    x.save(); x.shadowColor = 'rgba(255,170,60,.65)'; x.shadowBlur = 60; emoji(x, '🪔', R - ls / 2, y + ls * 0.38, ls); x.restore();
    x.font = '800 ' + (big ? 30 : 26) + 'px ' + fam; x.fillStyle = '#FFD580'; spaced(x, lang === 'en' ? 3 : 0); x.fillText((lang === 'en' ? o.today.toUpperCase() : o.today), L, y + 26); spaced(x, 0);
    x.font = '600 ' + (big ? 28 : 24) + 'px ' + fam; x.fillStyle = '#FDE7C8'; x.fillText(o.date, L, y + (big ? 70 : 62));
    /* topic chip */
    var chip = it.s.ic + '  ' + Lx(it.s.t); x.font = '700 ' + (big ? 26 : 23) + 'px ' + fam; var cw = x.measureText(chip).width + 44, ch = big ? 52 : 46, cy0 = y + (big ? 100 : 86);
    rr(x, L, cy0, cw, ch, ch / 2); x.fillStyle = 'rgba(255,255,255,.16)'; x.fill(); x.fillStyle = '#fff'; x.fillText(chip, L + 22, cy0 + ch * 0.68);
    y = cy0 + ch + (big ? 70 : sq ? 40 : 54);

    /* footer block size first, so the mantra gets the space that is left */
    var foot = big ? 300 : sq ? 170 : 200, footY = H - foot;
    /* mantra (big, in quotes) + how box + by-line as one block, sized to fill the space and centred in it */
    var tw = R - L, avail = footY - (big ? 60 : sq ? 34 : 44) - y, M, D, mh, hh, bz, gap1 = big ? 50 : 34, gap2 = big ? 34 : 26;
    for(var s = 1; s >= 0.5; s -= 0.03){
      M = fitLines(x, quoted(Lx(it.x.m)), '700', F.head, Math.round((big ? 104 : sq ? 66 : 84) * s), Math.round((big ? 104 : sq ? 66 : 84) * s), tw, big ? 6 : 5);
      D = fitLines(x, Lx(it.x.d), '500', fam, Math.round((big ? 40 : sq ? 30 : 35) * s), Math.round((big ? 40 : sq ? 30 : 35) * s), tw - 40, big ? 5 : 4);
      mh = M.lines.length * M.z * 1.18; hh = D.lines.length * D.z * 1.45 + 44 + (big ? 26 : 20); bz = Math.max(22, Math.round((big ? 34 : 28) * Math.min(1, s + 0.2)));
      if(mh + gap1 + hh + gap2 + bz <= avail) break;
    }
    var used = mh + gap1 + hh + gap2 + bz, top = y + Math.max(0, (avail - used) / 2);
    x.fillStyle = '#fff'; M.lines.forEach(function(l, i){ x.font = '700 ' + M.z + 'px ' + F.head; x.fillText(l, L, top + M.z * 0.95 + i * M.z * 1.18); });
    var hy = top + mh + gap1;
    rr(x, L, hy, tw, hh, 26); x.fillStyle = 'rgba(255,255,255,.11)'; x.fill(); x.fillStyle = '#FFD580'; rr(x, L, hy, 8, hh, 4); x.fill();
    var hl = (big ? 26 : 22); x.font = '800 ' + hl + 'px ' + fam; x.fillStyle = '#FFD580'; spaced(x, lang === 'en' ? 2 : 0); x.fillText(lang === 'en' ? o.how.toUpperCase() : o.how, L + 34, hy + 22 + hl * 0.9); spaced(x, 0);
    x.fillStyle = '#FFF4E4'; D.lines.forEach(function(l, i){ x.font = '500 ' + D.z + 'px ' + fam; x.fillText(l, L + 34, hy + 22 + hl + 14 + D.z * 0.95 + i * D.z * 1.45); });
    x.font = '700 ' + bz + 'px ' + fam; x.fillStyle = '#FDE7C8'; x.fillText(o.by, L, hy + hh + gap2 + bz * 0.85);

    /* footer: gold strip with call to action and the printed link */
    var fg = x.createLinearGradient(0, footY, W, footY + foot); fg.addColorStop(0, '#FFE08A'); fg.addColorStop(0.55, '#FBBF24'); fg.addColorStop(1, '#F59E0B'); x.fillStyle = fg; x.fillRect(0, footY, W, foot);
    x.fillStyle = '#2A0B4E'; x.textAlign = 'center';
    var f1 = fitLines(x, '🪔 ' + t.foot, '800', fam, big ? 50 : 38, 24, W - 120, 1); x.fillText(f1.lines[0], W / 2, footY + (big ? 86 : sq ? 56 : 62));
    var f2 = fitLines(x, t.open, '700', fam, big ? 32 : 26, 18, W - 120, 1); x.fillText(f2.lines[0], W / 2, footY + (big ? 142 : sq ? 98 : 108));
    /* link pill */
    x.font = '700 ' + (big ? 24 : 21) + 'px Inter, sans-serif'; var uw = Math.min(W - 100, x.measureText('🔗 ' + SHOW_URL).width + 44), uh = big ? 54 : 46, uy = footY + (big ? 182 : sq ? 116 : 130);
    var ul = fitLines(x, '🔗 ' + SHOW_URL, '700', 'Inter, sans-serif', big ? 24 : 21, 14, uw - 36, 1);
    rr(x, (W - uw) / 2, uy, uw, uh, uh / 2); x.fillStyle = '#2A0B4E'; x.fill(); x.fillStyle = '#FFD580'; x.font = '700 ' + ul.z + 'px Inter, sans-serif'; x.fillText(ul.lines[0], W / 2, uy + uh * 0.66);
    if(big){ x.fillStyle = '#2A0B4E'; x.font = '700 24px ' + fam; x.fillText(t.sir + ' · ' + t.role, W / 2, footY + 274); }
    x.textAlign = 'left';
    return cv;
  }

  function css(){
    if(document.getElementById('gmsCss')) return;
    var s = document.createElement('style'); s.id = 'gmsCss';
    s.textContent = '.gs-ov{position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,.62);display:flex;align-items:flex-end;justify-content:center}' +
      '.gs-sh{width:100%;max-width:560px;max-height:94vh;overflow:auto;background:#fffdf7;color:#2a160a;border-radius:22px 22px 0 0;padding:16px 16px 22px;font-family:Inter,"Noto Sans Kannada","Noto Sans Devanagari",system-ui,sans-serif}' +
      '[data-theme="dark"] .gs-sh{background:#1d1426;color:#fff}' +
      '.gs-h{display:flex;justify-content:space-between;align-items:center;font-weight:800;font-size:17px;margin-bottom:10px}' +
      '.gs-x{background:none;border:0;color:inherit;font-size:28px;cursor:pointer;line-height:1;min-width:44px;min-height:44px}' +
      '.gs-seg{display:flex;gap:6px;margin-bottom:8px}.gs-seg button{flex:1;min-height:42px;padding:8px 6px;border-radius:12px;border:1.5px solid rgba(127,127,127,.35);background:none;color:inherit;font:700 13px Inter,"Noto Sans Kannada","Noto Sans Devanagari",sans-serif;cursor:pointer}' +
      '.gs-seg button.on{border-color:#EA580C;background:rgba(234,88,12,.14)}' +
      '.gs-prev{display:flex;justify-content:center;align-items:center;background:rgba(127,127,127,.12);border-radius:14px;padding:10px;margin:6px 0 10px;min-height:220px}' +
      '.gs-prev img{display:block;max-width:100%;max-height:50vh;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.35)}' +
      '.gs-lbl{display:block;font-size:12px;font-weight:700;opacity:.8;margin:4px 2px}' +
      '.gs-cap{width:100%;box-sizing:border-box;min-height:130px;border-radius:12px;border:1px solid rgba(127,127,127,.35);background:rgba(127,127,127,.08);color:inherit;padding:10px;font:500 13.5px/1.45 Inter,"Noto Sans Kannada","Noto Sans Devanagari",sans-serif;resize:vertical}' +
      '.gs-btns{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}.gs-btns button{min-height:46px;padding:10px;border-radius:12px;border:0;font:700 14px Inter,"Noto Sans Kannada","Noto Sans Devanagari",sans-serif;cursor:pointer;background:rgba(127,127,127,.18);color:inherit}' +
      '.gs-btns .gs-go{grid-column:1/-1;background:linear-gradient(90deg,#F59E0B,#EA580C);color:#fff;font-size:15.5px}.gs-btns button:disabled{opacity:.5}';
    document.head.appendChild(s);
  }
  function toBlob(cv){ return new Promise(function(res){ cv.toBlob(function(b){ res(b); }, 'image/jpeg', 0.92); }); }

  window.gmShare = function(it, lang, o){
    css(); lang = TX[lang] ? lang : 'en';
    var t = TX[lang], fmt = 'post', cache = {}, Lx = function(v){ return v ? (v[lang] || v.en) : ''; };
    var ov = document.createElement('div'); ov.className = 'gs-ov';
    ov.innerHTML = '<div class="gs-sh" role="dialog" aria-modal="true" aria-label="' + t.ui.title + '"><div class="gs-h"><span>' + t.ui.title + '</span><button type="button" class="gs-x" aria-label="Close">×</button></div>' +
      '<div class="gs-seg"><button type="button" data-f="post">🖼 ' + t.ui.post + '</button><button type="button" data-f="status">📱 ' + t.ui.status + '</button><button type="button" data-f="sq">⬛ ' + t.ui.sq + '</button></div>' +
      '<div class="gs-prev"></div>' +
      '<label class="gs-lbl" for="gsCap">' + t.ui.caption + '</label><textarea class="gs-cap" id="gsCap"></textarea>' +
      '<div class="gs-btns"><button type="button" class="gs-go" disabled>📤 ' + t.ui.share + '</button><button type="button" class="gs-save" disabled>' + t.ui.save + '</button><button type="button" class="gs-copy">' + t.ui.copy + '</button><button type="button" class="gs-wa" style="grid-column:1/-1">' + t.ui.wa + '</button></div></div>';
    document.body.appendChild(ov);
    var $ = function(q){ return ov.querySelector(q); };
    function close(){ ov.remove(); document.removeEventListener('keydown', onKey); }
    function onKey(e){ if(e.key === 'Escape') close(); }
    document.addEventListener('keydown', onKey);
    ov.addEventListener('click', function(e){ if(e.target === ov) close(); }); $('.gs-x').onclick = close;
    $('#gsCap').value = t.cap(it, Lx, o);
    function render(){
      ov.querySelectorAll('[data-f]').forEach(function(b){ b.classList.toggle('on', b.dataset.f === fmt); });
      var key = fmt; $('.gs-go').disabled = true; $('.gs-save').disabled = true;
      if(!cache[key]) $('.gs-prev').innerHTML = '<span>' + t.ui.making + '</span>';
      Promise.all([loadFonts(), loadLogo()]).then(function(r){
        if(!cache[key]){ var cv = draw(it, lang, o, r[1], fmt); cache[key] = { cv:cv, url:cv.toDataURL('image/jpeg', 0.85) }; }
        if(fmt !== key) return;
        $('.gs-prev').innerHTML = '<img alt="" src="' + cache[key].url + '">'; $('.gs-go').disabled = false; $('.gs-save').disabled = false;
      });
    }
    ov.querySelectorAll('[data-f]').forEach(function(b){ b.onclick = function(){ fmt = b.dataset.f; render(); }; });
    function fname(){ return 'BAIO_Guru_Mantra_' + o.ymd + '_' + fmt + '_' + lang + '.jpg'; }
    $('.gs-go').onclick = function(){
      var k = cache[fmt], cap = $('#gsCap').value; if(!k) return;
      toBlob(k.cv).then(function(b){
        var file = b && new File([b], fname(), { type:'image/jpeg' });
        if(file && navigator.canShare && navigator.canShare({ files:[file] })) navigator.share({ files:[file], text:cap }).catch(function(){});
        else if(navigator.share) navigator.share({ title:'BAIO Guru Mantra', text:cap }).catch(function(){});
        else window.open('https://wa.me/?text=' + encodeURIComponent(cap), '_blank', 'noopener');
      });
    };
    $('.gs-save').onclick = function(){ var k = cache[fmt]; if(!k) return; var a = document.createElement('a'); a.href = k.cv.toDataURL('image/jpeg', 0.92); a.download = fname(); document.body.appendChild(a); a.click(); a.remove(); };
    $('.gs-copy').onclick = function(){
      var cap = $('#gsCap').value, b = $('.gs-copy'), done = function(){ b.textContent = t.ui.copied; setTimeout(function(){ b.textContent = t.ui.copy; }, 1800); };
      if(navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(cap).then(done, function(){ $('#gsCap').select(); });
      else { $('#gsCap').select(); try{ document.execCommand('copy'); done(); }catch(e){} }
    };
    $('.gs-wa').onclick = function(){ window.open('https://wa.me/?text=' + encodeURIComponent($('#gsCap').value), '_blank', 'noopener'); };
    render();
  };
  window.__gmBanner = function(it, lang, o, fmt){ return Promise.all([loadFonts(), loadLogo()]).then(function(r){ return draw(it, lang, o, r[1], fmt); }); }; /* for testing */
})();
