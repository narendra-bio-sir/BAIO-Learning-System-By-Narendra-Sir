/* BAIO AI Assistant — home page entry card + narrated spotlight tour of the real home page.
   Starts from the "Tour the home page" button, or when the page is opened with #baio-tour. */
(function(){
  const LANG = (() => { try { const l = localStorage.getItem('baio_lang'); return ['en','kn','hi'].includes(l) ? l : 'en'; } catch (e) { return 'en'; } })();
  const UI = {
    en:{ title:'BAIO AI Assistant', sub:'Lost? Ask me anything about the app — I explain every feature with narrated slides.', open:'🦉 Ask the Assistant', tour:'🧭 Tour this page', next:'Next ▶', prev:'◀', done:'Finish ✓', skip:'✕', mute:'🔇', unmute:'🔊', step:'Step' },
    kn:{ title:'BAIO AI ಸಹಾಯಕ', sub:'ದಾರಿ ತಪ್ಪಿದಿರಾ? ಆ್ಯಪ್ ಬಗ್ಗೆ ಏನು ಬೇಕಾದರೂ ಕೇಳಿ — ಪ್ರತಿ ವೈಶಿಷ್ಟ್ಯವನ್ನು ನಿರೂಪಿತ ಸ್ಲೈಡ್‌ಗಳಿಂದ ವಿವರಿಸುತ್ತೇನೆ.', open:'🦉 ಸಹಾಯಕನನ್ನು ಕೇಳಿ', tour:'🧭 ಈ ಪುಟದ ಪ್ರವಾಸ', next:'ಮುಂದೆ ▶', prev:'◀', done:'ಮುಗಿಯಿತು ✓', skip:'✕', mute:'🔇', unmute:'🔊', step:'ಹಂತ' },
    hi:{ title:'BAIO AI असिस्टेंट', sub:'रास्ता भूल गए? ऐप के बारे में कुछ भी पूछो — मैं हर फ़ीचर को बोलती स्लाइड से समझाता हूँ।', open:'🦉 असिस्टेंट से पूछो', tour:'🧭 इस पेज का टूर', next:'आगे ▶', prev:'◀', done:'पूरा ✓', skip:'✕', mute:'🔇', unmute:'🔊', step:'क़दम' }
  }[LANG];
  // [selector, en, kn, hi]
  const STEPS = [
    ['header', 'This is BAIO — Biology All In One — your PU Biology app by Narendra Sir. Let me show you around the home page.', 'ಇದು BAIO — Biology All In One — ನರೇಂದ್ರ ಸರ್ ಅವರ PU ಜೀವಶಾಸ್ತ್ರ ಆ್ಯಪ್. ಮುಖಪುಟವನ್ನು ತೋರಿಸುತ್ತೇನೆ ಬನ್ನಿ.', 'यह है BAIO — Biology All In One — नरेंद्र सर का PU बायोलॉजी ऐप। चलो होम पेज घुमाता हूँ।'],
    ['#pu1ChapterJumpBtn,#pu2ChapterJumpBtn', 'These two buttons jump straight to a chapter: 🎓 for I PUC and 🏆 for II PUC.', 'ಈ ಎರಡು ಬಟನ್‌ಗಳು ನೇರವಾಗಿ ಅಧ್ಯಾಯಕ್ಕೆ ಕರೆದೊಯ್ಯುತ್ತವೆ: ಪ್ರಥಮ ಪಿಯುಸಿಗೆ 🎓, ದ್ವಿತೀಯ ಪಿಯುಸಿಗೆ 🏆.', 'ये दो बटन सीधे अध्याय पर ले जाते हैं: प्रथम वर्ष PUC के लिए 🎓 और द्वितीय वर्ष के लिए 🏆।'],
    ['#studyTimerBtn,#shareAppBtn', '⏰ opens the study timer for focused sessions, and 📤 shows the QR code to share BAIO with friends.', '⏰ ಏಕಾಗ್ರ ಓದಿಗಾಗಿ ಸ್ಟಡಿ ಟೈಮರ್ ತೆರೆಯುತ್ತದೆ; 📤 ಗೆಳೆಯರೊಂದಿಗೆ BAIO ಹಂಚಲು QR ಕೋಡ್ ತೋರಿಸುತ್ತದೆ.', '⏰ फ़ोकस पढ़ाई के लिए स्टडी टाइमर खोलता है, और 📤 दोस्तों से BAIO शेयर करने का QR कोड दिखाता है।'],
    ['#continueWidget', 'Continue Studying takes you back to the chapter you were reading.', 'Continue Studying ನೀವು ಓದುತ್ತಿದ್ದ ಅಧ್ಯಾಯಕ್ಕೆ ಹಿಂದಿರುಗಿಸುತ್ತದೆ.', 'Continue Studying आपको उसी अध्याय पर लौटाता है जो आप पढ़ रहे थे।'],
    ['#statWidgets', 'Your day streak, chapters started and average score — keep them growing!', 'ನಿಮ್ಮ ದಿನಗಳ ಸ್ಟ್ರೀಕ್, ಆರಂಭಿಸಿದ ಅಧ್ಯಾಯಗಳು ಮತ್ತು ಸರಾಸರಿ ಅಂಕ — ಬೆಳೆಸುತ್ತಾ ಇರಿ!', 'आपकी दिनों की स्ट्रीक, शुरू किए अध्याय और औसत स्कोर — इन्हें बढ़ाते रहो!'],
    ['#hz', 'Every day: the Daily Bio Challenge, a fact of the day and your exam countdown with a 7 pm reminder.', 'ಪ್ರತಿದಿನ: Daily Bio Challenge, ದಿನದ ಸಂಗತಿ ಮತ್ತು ಸಂಜೆ 7 ರ ಜ್ಞಾಪನೆಯೊಂದಿಗೆ ಪರೀಕ್ಷಾ ಕೌಂಟ್‌ಡೌನ್.', 'हर दिन: Daily Bio Challenge, आज का तथ्य और शाम 7 बजे के रिमाइंडर के साथ परीक्षा काउंटडाउन।'],
    ['#baioAssist', 'I live here! Tap Ask the Assistant whenever you want any feature explained with slides.', 'ನಾನು ಇಲ್ಲೇ ಇರುತ್ತೇನೆ! ಯಾವುದೇ ವೈಶಿಷ್ಟ್ಯವನ್ನು ಸ್ಲೈಡ್‌ಗಳಿಂದ ವಿವರಿಸಬೇಕಾದರೆ ಸಹಾಯಕನನ್ನು ಕೇಳಿ ಒತ್ತಿ.', 'मैं यहीं रहता हूँ! किसी भी फ़ीचर को स्लाइड से समझना हो तो असिस्टेंट से पूछो दबाओ।'],
    ['.quick-actions-row', 'Quick buttons to every BAIO feature: Exam Corner, Reels, Game Zone, Storybooks, Flash Cards, Notes and more.', 'ಎಲ್ಲ BAIO ವೈಶಿಷ್ಟ್ಯಗಳ ತ್ವರಿತ ಬಟನ್‌ಗಳು: Exam Corner, Reels, Game Zone, ಕಥಾ ಪುಸ್ತಕಗಳು, ಫ್ಲ್ಯಾಶ್ ಕಾರ್ಡ್‌ಗಳು, ಟಿಪ್ಪಣಿಗಳು ಮತ್ತು ಇನ್ನಷ್ಟು.', 'हर BAIO फ़ीचर के झटपट बटन: Exam Corner, Reels, Game Zone, कहानी की किताबें, फ़्लैश कार्ड, नोट्स और भी बहुत कुछ।'],
    ['#catalogSections', 'All the chapters live here. Tap Open Chapter to start studying.', 'ಎಲ್ಲ ಅಧ್ಯಾಯಗಳು ಇಲ್ಲಿವೆ. ಓದಲು Open Chapter ಒತ್ತಿ.', 'सारे अध्याय यहाँ हैं। पढ़ाई शुरू करने के लिए Open Chapter दबाओ।'],
    ['#faqChatBtn', 'Have a quick question? This chat bubble answers common questions. That’s the tour — happy learning!', 'ತ್ವರಿತ ಪ್ರಶ್ನೆಯೇ? ಈ ಚಾಟ್ ಬಬಲ್ ಸಾಮಾನ್ಯ ಪ್ರಶ್ನೆಗಳಿಗೆ ಉತ್ತರಿಸುತ್ತದೆ. ಪ್ರವಾಸ ಮುಗಿಯಿತು — ಸಂತೋಷದಿಂದ ಕಲಿಯಿರಿ!', 'कोई छोटा सवाल? यह चैट बबल आम सवालों के जवाब देता है। टूर पूरा — मज़े से सीखो!']
  ];
  const LI = { en:1, kn:2, hi:3 }[LANG];

  /* ---------- entry card on the home page ---------- */
  const css = document.createElement('style');
  css.textContent = `
  .baio-assist{display:flex;gap:12px;align-items:center;margin:14px 0;padding:14px;border-radius:18px;border:2px solid var(--gold);background:linear-gradient(120deg,rgba(212,175,55,.16),rgba(46,230,197,.08)),var(--panel);box-shadow:0 8px 24px rgba(0,0,0,.18)}
  .baio-assist .ow{flex:0 0 54px;height:54px;border-radius:50%;display:grid;place-items:center;font-size:30px;background:radial-gradient(circle at 35% 30%,#fff6d6,#e9c45a 60%,#b8912a);box-shadow:0 4px 12px rgba(0,0,0,.25);animation:baioBob 3s ease-in-out infinite}
  @keyframes baioBob{50%{transform:translateY(-4px)}}
  .baio-assist b{display:block;font-size:15px;color:var(--ink)}
  .baio-assist p{margin:2px 0 8px;font-size:12px;line-height:1.45;color:var(--ink-dim)}
  .baio-assist .bt{display:flex;gap:6px;flex-wrap:wrap}
  .baio-assist a,.baio-assist button{font:700 12.5px inherit;padding:8px 12px;border-radius:10px;cursor:pointer;text-decoration:none;border:1px solid var(--line);background:var(--panel2);color:var(--ink)}
  .baio-assist a.pri{background:linear-gradient(135deg,var(--gold),var(--gold2,#B8912A));color:#1a1406;border-color:var(--gold)}
  .baio-assist .nw{font-size:9.5px;font-weight:800;background:#e0457b;color:#fff;border-radius:6px;padding:2px 6px;margin-left:6px;vertical-align:2px}
  #baioTourMask{position:fixed;inset:0;z-index:99990;pointer-events:auto}
  #baioTourRing{position:fixed;z-index:99991;border-radius:14px;box-shadow:0 0 0 9999px rgba(5,12,9,.72),0 0 0 3px #e9c45a,0 0 22px 6px rgba(233,196,90,.7);transition:all .35s ease;pointer-events:none}
  #baioTourTip{position:fixed;z-index:99992;left:12px;right:12px;max-width:420px;margin:0 auto;background:#fffdf6;color:#14203a;border-radius:16px;padding:14px 14px 12px;box-shadow:0 14px 40px rgba(0,0,0,.4);font:500 14.5px/1.5 Inter,'Noto Sans Kannada','Noto Sans Devanagari',sans-serif;transition:top .35s ease}
  #baioTourTip .h{display:flex;align-items:center;gap:8px;margin-bottom:6px;font:800 12px Inter,sans-serif;color:#b8912a;letter-spacing:.5px}
  #baioTourTip .h i{font-style:normal;font-size:22px}
  #baioTourTip .h button{margin-left:auto;border:0;background:#f1ede2;border-radius:50%;width:30px;height:30px;cursor:pointer;font-size:14px}
  #baioTourTip .r{display:flex;gap:8px;justify-content:flex-end;margin-top:10px}
  #baioTourTip .r button{border:0;border-radius:10px;padding:8px 14px;font:700 13px Inter,sans-serif;cursor:pointer;background:#f1ede2;color:#14203a}
  #baioTourTip .r button.p{background:linear-gradient(135deg,#e9c45a,#b8912a);color:#1a1406}
  #baioTourTip .r span{margin-right:auto;align-self:center;font:700 12px Inter;color:#8a8f99}`;
  document.head.appendChild(css);

  function card(){
    if (document.getElementById('baioAssist')) return;
    const c = document.createElement('div'); c.className = 'baio-assist'; c.id = 'baioAssist';
    c.innerHTML = `<div class="ow">🦉</div><div><b>${UI.title}<span class="nw">NEW</span></b><p>${UI.sub}</p><div class="bt"><a class="pri" href="assistant.html">${UI.open}</a><button type="button" id="baioTourGo">${UI.tour}</button></div></div>`;
    const hero = document.querySelector('.hero');
    if (hero) hero.after(c); else document.body.prepend(c);
    c.querySelector('#baioTourGo').onclick = start;
  }

  /* ---------- spotlight tour ---------- */
  let i = 0, mask, ring, tip, muted = false, steps = [];
  const visible = el => { if (!el) return false; const r = el.getBoundingClientRect(); const cs = getComputedStyle(el); return r.width > 4 && r.height > 4 && cs.display !== 'none' && cs.visibility !== 'hidden'; };
  const els = sel => [...document.querySelectorAll(sel)].filter(visible);
  function union(list){ const rs = list.map(e => e.getBoundingClientRect()); const l = Math.min(...rs.map(r => r.left)), t = Math.min(...rs.map(r => r.top)), r = Math.max(...rs.map(x => x.right)), b = Math.max(...rs.map(x => x.bottom)); return { left:l, top:t, width:r - l, height:b - t }; }
  function voice(){ if (!('speechSynthesis' in window)) return null; const v = speechSynthesis.getVoices(); return v.find(x => new RegExp('^' + LANG + '[-_]IN', 'i').test(x.lang)) || v.find(x => new RegExp('^' + LANG, 'i').test(x.lang)) || null; }
  function speak(t){ if (muted || !('speechSynthesis' in window)) return; try { speechSynthesis.cancel(); const u = new SpeechSynthesisUtterance(t.replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{FE0F}\u{200D}]/gu, '')); const v = voice(); if (v) u.voice = v; u.lang = v ? v.lang : ({ en:'en-IN', kn:'kn-IN', hi:'hi-IN' })[LANG]; u.rate = .97; speechSynthesis.speak(u); } catch (e) {} }
  function place(){
    const st = steps[i], list = els(st[0]); if (!list.length) return;
    const R = union(list), pad = 8, vh = innerHeight;
    ring.style.left = (R.left - pad) + 'px'; ring.style.top = (R.top - pad) + 'px'; ring.style.width = (R.width + pad * 2) + 'px'; ring.style.height = Math.min(R.height + pad * 2, vh - 20) + 'px';
    const th = tip.offsetHeight || 160, below = R.top + Math.min(R.height, vh * .55) + pad + 12;
    tip.style.top = (below + th < vh - 8 ? below : Math.max(8, R.top - pad - th - 12)) + 'px';
    if (R.top - pad - th - 12 < 8 && below + th >= vh - 8) tip.style.top = (vh - th - 10) + 'px';
  }
  function go(n){
    i = n; const st = steps[i], list = els(st[0]);
    tip.innerHTML = `<div class="h"><i>🦉</i>BAIO AI ASSISTANT<button type="button" data-a="mute" aria-label="Sound">${muted ? UI.unmute : UI.mute}</button><button type="button" data-a="x" aria-label="Close">${UI.skip}</button></div><div>${st[LI]}</div><div class="r"><span>${UI.step} ${i + 1} / ${steps.length}</span>${i ? `<button type="button" data-a="p">${UI.prev}</button>` : ''}<button type="button" class="p" data-a="n">${i === steps.length - 1 ? UI.done : UI.next}</button></div>`;
    list[0].scrollIntoView({ block: list.length > 1 || list[0].getBoundingClientRect().height > innerHeight * .6 ? 'start' : 'center', behavior: 'smooth' });
    setTimeout(place, 420); place(); speak(st[LI]);
  }
  function end(){ try { speechSynthesis.cancel(); } catch (e) {} [mask, ring, tip].forEach(e => e && e.remove()); mask = ring = tip = null; removeEventListener('resize', place); removeEventListener('scroll', place); if (location.hash === '#baio-tour') try { history.replaceState(null, '', location.pathname); } catch (e) {} }
  function start(){
    const ov = document.getElementById('announcementModalOverlay'); if (ov && visible(ov)) { const x = document.getElementById('announceModalCloseBtn'); if (x) x.click(); else ov.style.display = 'none'; }
    steps = STEPS.filter(s => els(s[0]).length); if (!steps.length) return;
    mask = document.createElement('div'); mask.id = 'baioTourMask';
    ring = document.createElement('div'); ring.id = 'baioTourRing';
    tip = document.createElement('div'); tip.id = 'baioTourTip'; tip.setAttribute('role', 'dialog');
    document.body.append(mask, ring, tip);
    tip.addEventListener('click', e => { const a = e.target.closest('[data-a]'); if (!a) return; const k = a.dataset.a;
      if (k === 'x') end(); else if (k === 'n') { i < steps.length - 1 ? go(i + 1) : end(); } else if (k === 'p') go(i - 1);
      else if (k === 'mute') { muted = !muted; a.textContent = muted ? UI.unmute : UI.mute; if (muted) try { speechSynthesis.cancel(); } catch (e) {} else speak(steps[i][LI]); } });
    mask.addEventListener('click', () => { i < steps.length - 1 ? go(i + 1) : end(); });
    addEventListener('resize', place); addEventListener('scroll', place, { passive: true });
    document.addEventListener('keydown', function k(e){ if (!tip) return document.removeEventListener('keydown', k); if (e.key === 'Escape') end(); if (e.key === 'ArrowRight') tip.querySelector('[data-a="n"]').click(); if (e.key === 'ArrowLeft' && i) go(i - 1); });
    go(0);
  }
  window.BAIOTour = { start };
  const boot = () => { card(); if (location.hash === '#baio-tour') setTimeout(start, 700); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
