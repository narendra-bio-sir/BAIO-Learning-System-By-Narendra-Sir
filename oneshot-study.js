/* BAIO One-Shot Revision — study-mode edition
   Plays a chapter's Study Mode notes as one continuous, narrated "video":
   a title card for every topic, one slide per study section (long sections are split),
   a quick-recap slide per topic, spoken in English / ಕನ್ನಡ / हिंदी with the point being
   read highlighted on screen. Uses the phone's own text-to-speech voices.

   Usage (inside a chapter page):
     OneShotStudy.render({ key, chapterName:{en,kn,hi}, chapterNo, cls:'PU-I',
                           topics:[{id, name:{en,kn,hi}}], getStudy:(id,lang)=>({recap,sections,table}),
                           container:()=>el, lang:()=>'en' })
     OneShotStudy.stop()   // call when the user leaves the tab
*/
(function(){
  'use strict';
  const LANGS = [{id:'en', label:'English', short:'EN', tag:'en-IN'}, {id:'kn', label:'ಕನ್ನಡ', short:'ಕ', tag:'kn-IN'}, {id:'hi', label:'हिंदी', short:'हि', tag:'hi-IN'}];
  const TXT = {
    en:{title:'One-Shot Revision', sub:'The full chapter in one go · Narendra Sir explains every point', part:'Part', of:'of', recap:'Quick recap',
        start:'Start revision', resume:'Resume', pause:'Pause', again:'Start again', speed:'Speed', caps:'Captions', fs:'Full Screen', prev:'Previous part', next:'Next part',
        left:'min left', total:'min in total', done:'Revision complete! 🎉', contd:'continued',
        noVoice:'No voice for this language on this phone — captions will still play. Install a Kannada/Hindi voice in the phone\'s text-to-speech settings to hear it.',
        intro:(c,n,p)=>`Hello students. I am Narendra Sir, and this is the one-shot revision of Chapter ${n}, ${c}. We will revise the whole chapter in one go, in ${p} parts. Keep your notes ready, and pause whenever you want to write something down. Let us begin.`,
        recapSay:'Let us quickly recap.',
        outro:(c)=>`That completes the one-shot revision of ${c}. Read the recap points once more, draw the important diagrams, and practise the MCQs in the app. All the best for your exams.`},
    kn:{title:'ಒನ್-ಶಾಟ್ ಪುನರಾವರ್ತನೆ', sub:'ಇಡೀ ಅಧ್ಯಾಯ ಒಂದೇ ಬಾರಿಗೆ · ಪ್ರತಿ ಅಂಶವನ್ನು ನರೇಂದ್ರ ಸರ್ ವಿವರಿಸುತ್ತಾರೆ', part:'ಭಾಗ', of:'/', recap:'ತ್ವರಿತ ಪುನರಾವಲೋಕನ',
        start:'ಪುನರಾವರ್ತನೆ ಆರಂಭಿಸಿ', resume:'ಮುಂದುವರಿಸಿ', pause:'ವಿರಾಮ', again:'ಮತ್ತೆ ಆರಂಭಿಸಿ', speed:'ವೇಗ', caps:'ಶೀರ್ಷಿಕೆಗಳು', fs:'ಪೂರ್ಣ ಪರದೆ', prev:'ಹಿಂದಿನ ಭಾಗ', next:'ಮುಂದಿನ ಭಾಗ',
        left:'ನಿಮಿಷ ಉಳಿದಿದೆ', total:'ನಿಮಿಷ ಒಟ್ಟು', done:'ಪುನರಾವರ್ತನೆ ಮುಗಿಯಿತು! 🎉', contd:'ಮುಂದುವರಿದಿದೆ',
        noVoice:'ಈ ಫೋನ್‌ನಲ್ಲಿ ಕನ್ನಡ ಧ್ವನಿ ಇಲ್ಲ — ಶೀರ್ಷಿಕೆಗಳು ಮಾತ್ರ ಕಾಣಿಸುತ್ತವೆ. ಕೇಳಲು ಫೋನ್‌ನ text-to-speech ಸೆಟ್ಟಿಂಗ್‌ನಲ್ಲಿ ಕನ್ನಡ ಧ್ವನಿ ಸ್ಥಾಪಿಸಿ.',
        intro:(c,n,p)=>`ನಮಸ್ಕಾರ ವಿದ್ಯಾರ್ಥಿಗಳೇ. ನಾನು ನರೇಂದ್ರ ಸರ್. ಇದು ಅಧ್ಯಾಯ ${n}, ${c} ಇದರ ಒನ್-ಶಾಟ್ ಪುನರಾವರ್ತನೆ. ಇಡೀ ಅಧ್ಯಾಯವನ್ನು ${p} ಭಾಗಗಳಲ್ಲಿ ಒಂದೇ ಬಾರಿಗೆ ಪುನರಾವರ್ತಿಸೋಣ. ನಿಮ್ಮ ನೋಟ್ಸ್ ಸಿದ್ಧವಾಗಿಟ್ಟುಕೊಳ್ಳಿ, ಬರೆದುಕೊಳ್ಳಬೇಕಾದಾಗ ವಿರಾಮ ಮಾಡಿ. ಆರಂಭಿಸೋಣ.`,
        recapSay:'ಬೇಗ ಪುನರಾವಲೋಕನ ಮಾಡೋಣ.',
        outro:(c)=>`ಇದರೊಂದಿಗೆ ${c} ಅಧ್ಯಾಯದ ಒನ್-ಶಾಟ್ ಪುನರಾವರ್ತನೆ ಮುಗಿಯಿತು. ಪುನರಾವಲೋಕನದ ಅಂಶಗಳನ್ನು ಮತ್ತೊಮ್ಮೆ ಓದಿ, ಮುಖ್ಯ ಚಿತ್ರಗಳನ್ನು ಬಿಡಿಸಿ, ಆ್ಯಪ್‌ನಲ್ಲಿ ಎಂಸಿಕ್ಯೂಗಳನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿ. ನಿಮ್ಮ ಪರೀಕ್ಷೆಗಳಿಗೆ ಶುಭಾಶಯಗಳು.`},
    hi:{title:'वन-शॉट रिवीज़न', sub:'पूरा अध्याय एक बार में · हर बिंदु नरेंद्र सर समझाते हैं', part:'भाग', of:'/', recap:'झटपट दोहराव',
        start:'रिवीज़न शुरू करें', resume:'जारी रखें', pause:'रोकें', again:'फिर से शुरू करें', speed:'गति', caps:'कैप्शन', fs:'पूर्ण स्क्रीन', prev:'पिछला भाग', next:'अगला भाग',
        left:'मिनट बाकी', total:'मिनट कुल', done:'रिवीज़न पूरा हुआ! 🎉', contd:'जारी',
        noVoice:'इस फ़ोन में हिंदी आवाज़ नहीं है — केवल कैप्शन चलेंगे। सुनने के लिए फ़ोन की text-to-speech सेटिंग में हिंदी आवाज़ इंस्टॉल कीजिए।',
        intro:(c,n,p)=>`नमस्ते विद्यार्थियों। मैं नरेंद्र सर हूँ। यह अध्याय ${n}, ${c}, का वन-शॉट रिवीज़न है। हम पूरे अध्याय को ${p} भागों में एक ही बार में दोहराएँगे। अपने नोट्स तैयार रखिए, और कुछ लिखना हो तो रोक लीजिए। चलिए शुरू करते हैं।`,
        recapSay:'चलिए झटपट दोहरा लेते हैं।',
        outro:(c)=>`इसके साथ ${c} का वन-शॉट रिवीज़न पूरा हुआ। दोहराव के बिंदु एक बार फिर पढ़िए, महत्वपूर्ण चित्र बनाइए, और ऐप में MCQ का अभ्यास कीजिए। आपकी परीक्षाओं के लिए शुभकामनाएँ।`}
  };
  const MAXPTS = 4;              // points per slide; longer sections continue on the next slide
  let C = null, lang = 'en', seq = [], pos = 0, sent = 0, run = 0, playing = false, wake = null, cps = 14, shown = -1;
  let rate = 1, caps = true, fsOn = false;
  const TTS = ('speechSynthesis' in window) ? window.speechSynthesis : null;
  const store = { get(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }, set(k,v){ try{ localStorage.setItem(k,v); }catch(e){} } };
  const T = ()=>TXT[lang] || TXT.en;
  const K = s=>C.key+'_os_'+s;

  /* ---------- text helpers ---------- */
  const tmp = document.createElement('div');
  function plain(html){ tmp.innerHTML = String(html||''); return (tmp.textContent||'').replace(/\s+/g,' ').trim(); }
  function cleanHtml(html){ // keep only light inline emphasis
    tmp.innerHTML = String(html||'');
    tmp.querySelectorAll('*').forEach(el=>{ if(!/^(B|STRONG|I|EM|SUB|SUP)$/.test(el.tagName)){ el.replaceWith(...el.childNodes); } else { [...el.attributes].forEach(a=>el.removeAttribute(a.name)); } });
    return tmp.innerHTML.replace(/\s+/g,' ').trim();
  }
  function splitSentences(t){
    const prot = t.replace(/\b(e\.g|i\.e|etc|viz|vs|Dr|St|No|Fig|approx)\./gi, m=>m.replace(/\./g,'§')).replace(/(ಉದಾ|ಇತ್ಯಾದಿ|ಉದಾಹರಣೆಗೆ|उदा|इत्यादि|आदि|डॉ)\./g, m=>m.replace(/\./g,'§')).replace(/(\d)\.(\d)/g,'$1§$2').replace(/\b([A-Z])\.(?=[A-Z]\.|\s[a-z])/g,'$1§');
    return prot.split(/(?<=[.!?।])\s+(?=\S)/).map(s=>s.replace(/§/g,'.').trim()).filter(s=>s.length>1);
  }
  /* a study section's body -> list of points [{html, say}] */
  function points(body){
    const html = String(body||'');
    tmp.innerHTML = html;
    const lis = tmp.querySelectorAll('li');
    const out = [];
    if(lis.length){
      // any text before the first list counts as a point too
      const lead = []; for(const n of [...tmp.childNodes]){ if(n.nodeType===1 && /^(UL|OL)$/.test(n.tagName)) break; lead.push(n.nodeType===1 ? n.outerHTML : n.textContent); }
      const leadHtml = lead.join('').trim(); if(plain(leadHtml)) splitByBreaks(leadHtml).forEach(p=>out.push(p));
      [...tmp.querySelectorAll('li')].forEach(li=>{ const h = cleanHtml(li.innerHTML); const s = plain(h); if(s) out.push({html:h, say:s}); });
      return out;
    }
    return splitByBreaks(html);
  }
  function splitByBreaks(html){
    const out = [];
    String(html).split(/<br\s*\/?>/i).forEach(chunk=>{
      const s = plain(chunk); if(!s) return;
      const ss = splitSentences(s);
      if(ss.length <= 1){ out.push({html:cleanHtml(chunk), say:s}); }
      else ss.forEach(x=>out.push({html:escapeHtml(x), say:x}));
    });
    return out;
  }
  function escapeHtml(s){ return String(s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
  function sayable(s){
    let t = String(s);
    const thenW = {en:', then ', kn:' ನಂತರ ', hi:' फिर '}[lang] || ', ';
    t = t.replace(/\s*(→|&rarr;|⟶|->)\s*/g, thenW).replace(/\s*↔\s*/g, ' and ').replace(/≈/g,' about ').replace(/×/g,' into ').replace(/\s*[—–]\s*/g, ', ').replace(/[“”"]/g,'');
    if(lang==='en'){ t = t.replace(/\be\.g\.,?/gi,'for example,').replace(/\bi\.e\.,?/gi,'that is,').replace(/\bvs\.?\b/gi,'versus').replace(/\s*\/\s*/g,' or ').replace(/\bT\.S\./g,'T S'); }
    else t = t.replace(/\s*\/\s*/g, ' ');
    return t.replace(/\s+/g,' ').trim();
  }

  /* ---------- running order ---------- */
  function build(){
    const L = lang, out = [];
    const chName = C.chapterName[L] || C.chapterName.en;
    out.push({k:'intro', part:-1, pts:[{say:T().intro(chName, C.chapterNo, C.topics.length)}]});
    C.topics.forEach((tp, pi)=>{
      const st = C.getStudy(tp.id, L) || C.getStudy(tp.id, 'en') || {sections:[]};
      const name = tp.name[L] || tp.name.en;
      out.push({k:'part', part:pi, title:name, pts:[{say:`${T().part} ${pi+1}. ${name}.`}]});
      (st.sections||[]).forEach(sec=>{
        const pts = points(sec.body);
        if(!pts.length) return;
        const pages = Math.ceil(pts.length / MAXPTS);
        for(let g = 0; g < pages; g++){
          const chunk = pts.slice(g*MAXPTS, (g+1)*MAXPTS);
          const head = plain(sec.h);
          // say the heading before its first point, so students know where we are
          const say = chunk.map((p, i)=>({html:p.html, say:(g===0 && i===0 ? head+'. ' : '')+p.say, oi:i}));
          out.push({k:'slide', part:pi, topic:name, h:sec.h, page:g, pages, pts:say});
        }
      });
      if(st.table && st.table.rows && st.table.rows.length){
        const rows = st.table.rows; const hdr = st.table.headers || [];
        for(let g = 0; g < rows.length; g += 6){
          const part = rows.slice(g, g+6);
          out.push({k:'table', part:pi, topic:name, h:st.table.title || '', headers:hdr, rows:part,
            pts:part.map((r, i)=>({say:r.map(c=>plain(c)).filter(Boolean).join(', ')+'.', oi:i}))});
        }
      }
      const rec = (st.recap||[]).map(plain).filter(Boolean);
      if(rec.length) out.push({k:'recap', part:pi, topic:name, items:rec, pts:[{say:T().recapSay, oi:-1}].concat(rec.map((r, i)=>({say:r+'.', oi:i})))});
    });
    out.push({k:'outro', part:C.topics.length-1, pts:[{say:T().outro(chName)}]});
    seq = out;
  }
  const charsOf = it=>it.pts.reduce((a, p)=>a + p.say.length, 0) + (it.k==='part' ? 30 : 15);
  function minutesLeft(from){ let c = 0; for(let i = from; i < seq.length; i++) c += charsOf(seq[i]); return Math.max(1, Math.round(c/(cps*rate)/60 + (seq.length-from)*1.2/60)); }
  function save(){ store.set(K('pos'), JSON.stringify({pos, lang, n:seq.length})); }
  function savedPos(){ try{ const o = JSON.parse(store.get(K('pos'))||'null'); return o && o.lang===lang && o.n===seq.length && o.pos>0 && o.pos<seq.length-1 ? o.pos : 0; }catch(e){ return 0; } }

  /* ---------- voices ---------- */
  let voices = [];
  function loadVoices(){ if(TTS) voices = TTS.getVoices() || []; }
  if(TTS){ loadVoices(); try{ TTS.addEventListener('voiceschanged', loadVoices); }catch(e){ TTS.onvoiceschanged = loadVoices; } }
  function voiceFor(l){
    const tag = (LANGS.find(x=>x.id===l)||LANGS[0]).tag, base = tag.slice(0,2);
    const list = voices.filter(v=>(v.lang||'').replace('_','-').toLowerCase().startsWith(base));
    return list.find(v=>(v.lang||'').replace('_','-').toLowerCase()===tag.toLowerCase()) || list[0] || null;
  }

  /* ---------- UI ---------- */
  const CSS = `
.osx-card{position:relative}
.osx-sub{opacity:.75;font-size:13px;margin:0 0 12px}
.osx-langs{display:flex;gap:8px;margin:0 0 12px;flex-wrap:wrap}
.osx-langs button{flex:1;min-width:84px;padding:10px 12px;border-radius:12px;border:1.5px solid #0f7a68;background:transparent;color:inherit;font:700 15px inherit;cursor:pointer}
.osx-langs button.on{background:#0f7a68;color:#fff}
.osx-stage{position:relative;width:100%;aspect-ratio:16/9;border-radius:14px;overflow:hidden;background:#f6f3ea;border:2px solid #0c1830;box-shadow:0 8px 24px rgba(0,0,0,.18);--u:6px}
.osx-slide{position:absolute;inset:0;padding:calc(var(--u)*3.2) calc(var(--u)*4.2) calc(var(--u)*4);color:#0c1830;font-family:Inter,'Noto Sans Kannada','Noto Sans Devanagari',system-ui,sans-serif;display:flex;flex-direction:column;animation:osxIn .45s ease}
@keyframes osxIn{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
.osx-kick{font-size:calc(var(--u)*1.55);font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#a57c10}
.osx-h{font-size:calc(var(--u)*3.9);font-weight:800;line-height:1.15;margin:calc(var(--u)*.6) 0 calc(var(--u)*1.6);color:#0c1830}
.osx-h small{font-size:.55em;font-weight:700;color:#0f7a68;margin-left:.4em}
.osx-pts{list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:calc(var(--u)*1.1)}
.osx-pts li{position:relative;font-size:calc(var(--u)*2.45);line-height:1.38;padding:calc(var(--u)*.7) calc(var(--u)*1.2) calc(var(--u)*.7) calc(var(--u)*3.4);border-radius:calc(var(--u)*1.2);transition:background .3s,box-shadow .3s,transform .3s;color:#24324a}
.osx-pts li::before{content:'';position:absolute;left:calc(var(--u)*1.2);top:calc(var(--u)*1.45);width:calc(var(--u)*1.1);height:calc(var(--u)*1.1);border-radius:50%;background:#0f7a68}
.osx-pts li b,.osx-pts li strong{color:#0c1830}
.osx-pts li.hl{background:#fff4cf;box-shadow:0 0 0 calc(var(--u)*.35) #d4af37;transform:translateX(calc(var(--u)*.4))}
.osx-pts li.done{opacity:.62}
.osx-foot{position:absolute;left:calc(var(--u)*4.2);right:calc(var(--u)*4.2);bottom:calc(var(--u)*1.4);display:flex;justify-content:space-between;font-size:calc(var(--u)*1.25);color:#6b7486;font-weight:600}
.osx-card-slide{background:linear-gradient(140deg,#0b2822,#0f7a68);color:#fff;align-items:center;justify-content:center;text-align:center}
.osx-card-slide .osx-k{font-size:calc(var(--u)*2);letter-spacing:.16em;text-transform:uppercase;color:#f3d77a;font-weight:800}
.osx-card-slide .osx-t{font-size:calc(var(--u)*5.2);font-weight:800;line-height:1.15;margin-top:calc(var(--u)*1.2);max-width:90%}
.osx-card-slide .osx-s{font-size:calc(var(--u)*2);opacity:.85;margin-top:calc(var(--u)*1.4)}
.osx-chips{display:flex;flex-wrap:wrap;gap:calc(var(--u)*1.1)}
.osx-chips span{font-size:calc(var(--u)*2.3);font-weight:700;padding:calc(var(--u)*.9) calc(var(--u)*1.8);border-radius:999px;background:#e8f3f1;border:calc(var(--u)*.2) solid #b9ddd6;transition:all .3s}
.osx-chips span.hl{background:#fff4cf;border-color:#d4af37;transform:scale(1.04)}
.osx-tbl{width:100%;border-collapse:collapse;font-size:calc(var(--u)*1.75)}
.osx-tbl th{background:#0f7a68;color:#fff;text-align:left;padding:calc(var(--u)*.7) calc(var(--u)*1)}
.osx-tbl td{padding:calc(var(--u)*.6) calc(var(--u)*1);border-bottom:1px solid #d9e2e1;color:#24324a;vertical-align:top}
.osx-tbl tr.hl td{background:#fff4cf}
.osx-big{position:absolute;left:50%;top:50%;translate:-50% -50%;z-index:5;width:76px;height:76px;border-radius:50%;border:3px solid #fff;background:rgba(15,122,104,.9);color:#fff;font-size:30px;cursor:pointer;box-shadow:0 8px 24px rgba(0,0,0,.35);display:flex;align-items:center;justify-content:center;padding-left:6px}
.osx-big[hidden]{display:none}
.osx-cap{position:absolute;left:6%;right:6%;bottom:5%;z-index:4;background:rgba(12,24,48,.86);color:#fff;border-radius:10px;padding:6px 12px;font:600 clamp(11px,1.7vw,19px)/1.35 Inter,'Noto Sans Kannada','Noto Sans Devanagari',sans-serif;text-align:center;pointer-events:none}
.osx-cap[hidden]{display:none}
.osx-fsbtns{display:none;position:absolute;right:10px;top:10px;z-index:6;gap:8px}
.osx-fsbtns button{width:44px;height:44px;border-radius:50%;border:0;background:rgba(255,255,255,.92);color:#0c1830;font:700 16px Inter,sans-serif;cursor:pointer;box-shadow:0 2px 8px rgba(0,0,0,.3)}
.osx-fsbtns button.pri{background:#0f7a68;color:#fff}
.osx-fsbar{display:none;position:absolute;left:0;right:0;bottom:0;height:5px;background:rgba(255,255,255,.2);z-index:6}
.osx-fsbar i{display:block;height:100%;width:0;background:#d4af37;transition:width .4s}
.osx-fs{position:fixed!important;inset:0!important;z-index:2147483000!important;width:100vw!important;height:100vh!important;height:100dvh!important;aspect-ratio:auto!important;border-radius:0!important;border:0!important;background:#000!important;display:flex;align-items:center;justify-content:center}
.osx-fs .osx-inner{position:relative;width:min(100vw,calc(100dvh*16/9));aspect-ratio:16/9;background:#f6f3ea;overflow:hidden}
.osx-fs .osx-fsbtns,.osx-fs .osx-fsbar{display:flex}
.osx-inner{position:absolute;inset:0}
.osx-fs .osx-inner{position:relative;inset:auto}
.osx-timeline{display:flex;gap:4px;margin:12px 0 6px}
.osx-seg{flex:1 1 0;min-width:6px;height:12px;border-radius:6px;border:1px solid rgba(127,127,127,.35);background:rgba(127,127,127,.12);padding:0;cursor:pointer;overflow:hidden;position:relative}
.osx-seg.cur{border-color:#d4af37;box-shadow:0 0 0 2px rgba(212,175,55,.35)}
.osx-seg i{position:absolute;left:0;top:0;bottom:0;width:0;background:#0f7a68;transition:width .4s}
.osx-meta{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap;font-size:13px;opacity:.85;margin-bottom:12px}
.osx-meta b{opacity:1}
.osx-ctrl{display:flex;flex-wrap:wrap;gap:10px;align-items:center;justify-content:center;margin:4px 0 12px}
.osx-main{min-width:190px;padding:12px 20px;border-radius:14px;border:0;background:linear-gradient(135deg,#c99a1e,#9c7414);color:#fff;font:800 17px Inter,'Noto Sans Kannada','Noto Sans Devanagari',sans-serif;cursor:pointer;box-shadow:0 4px 12px rgba(0,0,0,.2)}
.osx-sq{min-width:52px;padding:12px 14px;border-radius:14px;border:1px solid rgba(127,127,127,.35);background:rgba(127,127,127,.1);color:inherit;font:700 15px Inter,sans-serif;cursor:pointer}
.osx-opts{display:flex;flex-wrap:wrap;gap:16px;align-items:center;justify-content:center;margin-bottom:10px;font-size:14px}
.osx-opts select{padding:6px 8px;border-radius:8px;font:600 14px Inter,sans-serif}
.osx-link{background:none;border:0;color:#0f7a68;font-weight:700;cursor:pointer;font-size:14px}
.osx-warn{margin:8px 0;padding:10px 12px;border-radius:10px;background:#fff4cf;color:#6b4a00;font-size:13px}
.osx-warn[hidden]{display:none}
.osx-parts{list-style:none;margin:14px 0 0;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(210px,1fr));gap:8px}
.osx-parts button{width:100%;text-align:left;padding:9px 12px;border-radius:10px;border:1px solid rgba(127,127,127,.35);background:rgba(127,127,127,.08);color:inherit;cursor:pointer;font-size:13px}
.osx-parts button b{display:inline-grid;place-items:center;min-width:22px;height:22px;border-radius:50%;background:#d4af37;color:#0b1b14;margin-right:6px;font-size:12px}
.osx-parts button.cur{border-color:#d4af37}
`;
  function injectCss(){ if(document.getElementById('osxCss')) return; const st = document.createElement('style'); st.id = 'osxCss'; st.textContent = CSS; document.head.appendChild(st); }

  function render(cfg){
    C = cfg; injectCss();
    const pl = (cfg.lang && cfg.lang()) || store.get(K('lang')) || 'en';
    lang = ['en','kn','hi'].includes(store.get(K('lang'))) ? store.get(K('lang')) : (['en','kn','hi'].includes(pl) ? pl : 'en');
    rate = parseFloat(store.get(K('rate'))) || 1; caps = store.get(K('caps')) === '1';
    stopSpeech(); playing = false;
    build(); pos = savedPos(); sent = 0; shown = -1;
    paint();
  }
  function paint(){
    const t = T(), el = C.container(); if(!el) return;
    const saved = pos > 0;
    el.innerHTML = `<div class="setup-card osx-card">
      <h3 style="color:var(--gold,#c99a1e);margin:0 0 4px">🎬 ${t.title}</h3>
      <div class="osx-sub">${t.sub}</div>
      <div class="osx-langs" role="group" aria-label="Language">${LANGS.map(l=>`<button type="button" data-l="${l.id}" class="${l.id===lang?'on':''}">${l.label}</button>`).join('')}</div>
      <div class="osx-stage" id="osxStage">
        <div class="osx-inner" id="osxInner"><div id="osxSlide"></div>
          <div class="osx-cap" id="osxCap" hidden></div>
          <button type="button" class="osx-big" id="osxBig" aria-label="${t.start}">▶</button>
          <div class="osx-fsbtns"><button type="button" data-a="prev" title="${t.prev}">⏮</button><button type="button" class="pri" data-a="toggle" id="osxFsPlay">▶</button><button type="button" data-a="next" title="${t.next}">⏭</button><button type="button" data-a="cc" title="${t.caps}">CC</button><button type="button" data-a="lang" id="osxFsLang">${(LANGS.find(x=>x.id===lang)||LANGS[0]).short}</button><button type="button" data-a="exit" title="Exit">✕</button></div>
          <div class="osx-fsbar"><i id="osxFsFill"></i></div>
        </div>
      </div>
      <div class="osx-timeline" id="osxTimeline">${C.topics.map((tp, i)=>`<button type="button" class="osx-seg" data-p="${i}" title="${t.part} ${i+1}: ${escapeHtml(tp.name[lang]||tp.name.en)}"><i></i></button>`).join('')}</div>
      <div class="osx-meta"><b id="osxNow"></b><span id="osxTime"></span></div>
      <div class="osx-ctrl">
        <button type="button" class="osx-sq" data-a="prev" title="${t.prev}">⏮</button>
        <button type="button" class="osx-main" id="osxMain" data-a="toggle">▶ ${saved ? t.resume : t.start}</button>
        <button type="button" class="osx-sq" data-a="next" title="${t.next}">⏭</button>
        <button type="button" class="osx-sq" data-a="fs">⛶ ${t.fs}</button>
      </div>
      <div class="osx-opts">
        <label>${t.speed} <select id="osxRate">${['0.9','1','1.1','1.25'].map(v=>`<option value="${v}" ${String(rate)===v?'selected':''}>${v}×</option>`).join('')}</select></label>
        <label><input type="checkbox" id="osxCaps" ${caps?'checked':''}> ${t.caps}</label>
        ${saved ? `<button type="button" class="osx-link" data-a="restart">↺ ${t.again}</button>` : ''}
      </div>
      <div class="osx-warn" id="osxWarn" hidden></div>
      <ol class="osx-parts" id="osxParts">${C.topics.map((tp, i)=>`<li><button type="button" data-p="${i}"><b>${i+1}</b>${escapeHtml(tp.name[lang]||tp.name.en)}</button></li>`).join('')}</ol>
    </div>`;
    const card = el.querySelector('.osx-card');
    card.addEventListener('click', onClick);
    card.querySelector('#osxRate').addEventListener('change', e=>{ rate = parseFloat(e.target.value)||1; store.set(K('rate'), String(rate)); ui(); });
    card.querySelector('#osxCaps').addEventListener('change', e=>{ caps = e.target.checked; store.set(K('caps'), caps?'1':'0'); if(!caps) caption(''); });
    fit(); show(true); ui();
  }
  function onClick(e){
    const b = e.target.closest('button'); if(!b) return;
    if(b.dataset.l) return setLang(b.dataset.l);
    if(b.dataset.p !== undefined) return jumpPart(+b.dataset.p);
    if(b.id === 'osxBig') return toggle();
    const a = b.dataset.a;
    if(a==='toggle') toggle(); else if(a==='prev') part(-1); else if(a==='next') part(1);
    else if(a==='fs') enterFs(); else if(a==='exit') exitFs(); else if(a==='restart') restart();
    else if(a==='cc'){ caps = !caps; store.set(K('caps'), caps?'1':'0'); const c = document.getElementById('osxCaps'); if(c) c.checked = caps; if(!caps) caption(''); }
    else if(a==='lang'){ const i = LANGS.findIndex(x=>x.id===lang); setLang(LANGS[(i+1)%LANGS.length].id); }
  }
  function fit(){
    const inner = document.getElementById('osxInner'); if(!inner) return;
    const w = inner.getBoundingClientRect().width || 600;
    inner.style.setProperty('--u', (w/100)+'px');
  }
  window.addEventListener('resize', ()=>setTimeout(fit, 120));

  /* ---------- slide drawing ---------- */
  function slideHtml(it){
    const t = T(), L = lang, ch = (C.chapterName[L]||C.chapterName.en);
    const foot = `<div class="osx-foot"><span>BAIO Learning System · Narendra Sir</span><span>${escapeHtml(C.cls||'PU-I')} · ${escapeHtml(ch)}</span></div>`;
    if(it.k==='intro') return `<div class="osx-slide osx-card-slide"><div class="osx-k">${escapeHtml(C.cls||'PU-I')} Biology · ${t.title}</div><div class="osx-t">${escapeHtml(ch)}</div><div class="osx-s">${t.part} 1–${C.topics.length} · Narendra Sir</div></div>`;
    if(it.k==='outro') return `<div class="osx-slide osx-card-slide"><div class="osx-k">${escapeHtml(ch)}</div><div class="osx-t">${t.done}</div><div class="osx-s">BAIO Learning System · Narendra Sir</div></div>`;
    if(it.k==='part') return `<div class="osx-slide osx-card-slide"><div class="osx-k">${t.part} ${it.part+1} ${t.of} ${C.topics.length}</div><div class="osx-t">${escapeHtml(it.title)}</div></div>`;
    const kick = `<div class="osx-kick">${t.part} ${it.part+1} · ${escapeHtml(it.topic)}</div>`;
    if(it.k==='recap') return `<div class="osx-slide">${kick}<div class="osx-h">✓ ${t.recap}</div><div class="osx-chips">${it.items.map((r,i)=>`<span data-i="${i}">${escapeHtml(r)}</span>`).join('')}</div>${foot}</div>`;
    if(it.k==='table') return `<div class="osx-slide">${kick}<div class="osx-h" style="font-size:calc(var(--u)*2.8)">${it.h}</div><table class="osx-tbl"><tr>${it.headers.map(h=>`<th>${h}</th>`).join('')}</tr>${it.rows.map((r,i)=>`<tr data-i="${i}">${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</table>${foot}</div>`;
    const n = it.pts.length, size = n >= 4 ? 2.55 : (n === 3 ? 2.85 : 3.15);
    return `<div class="osx-slide">${kick}<div class="osx-h">${it.h}${it.pages>1 ? `<small>${it.page+1}/${it.pages}</small>` : ''}</div><ul class="osx-pts" style="--fs:${size}">${it.pts.map((p,i)=>`<li data-i="${i}" style="font-size:calc(var(--u)*${size})">${p.html}</li>`).join('')}</ul>${foot}</div>`;
  }
  function show(force){
    const it = seq[pos]; if(!it) return;
    if(!force && shown === pos) return; shown = pos;
    const box = document.getElementById('osxSlide'); if(box) box.innerHTML = slideHtml(it);
    autoShrink();
  }
  function autoShrink(){
    // make sure long slides fit: shrink the points until the slide stops overflowing
    const s = document.querySelector('#osxSlide .osx-slide'); if(!s) return;
    let k = 1; const lis = s.querySelectorAll('.osx-pts li, .osx-tbl, .osx-chips span');
    for(let tries = 0; tries < 8 && s.scrollHeight > s.clientHeight + 2; tries++){
      k *= 0.9; lis.forEach(li=>{ li.style.zoom = String(k); });
    }
  }
  function mark(i){
    const s = document.querySelector('#osxSlide .osx-slide'); if(!s) return;
    s.querySelectorAll('[data-i]').forEach(el=>{ const j = +el.dataset.i; el.classList.toggle('hl', j===i); el.classList.toggle('done', i>=0 && j<i); });
  }
  function caption(text){
    const c = document.getElementById('osxCap'); if(!c) return;
    const on = !!text && caps; c.hidden = !on; c.textContent = on ? text : '';
  }
  function ui(){
    const t = T(), it = seq[pos] || seq[0];
    const b = document.getElementById('osxMain'); if(b) b.textContent = playing ? '⏸ '+t.pause : '▶ '+(pos>0 ? t.resume : t.start);
    const fb = document.getElementById('osxFsPlay'); if(fb) fb.textContent = playing ? '⏸' : '▶';
    const big = document.getElementById('osxBig'); if(big) big.hidden = playing;
    const now = document.getElementById('osxNow');
    if(now && it){ now.textContent = it.k==='intro' ? '★ '+t.title : `${t.part} ${(it.part||0)+1} ${t.of} ${C.topics.length} · ${(C.topics[it.part]||{name:{}}).name[lang] || (C.topics[it.part]||{name:{en:''}}).name.en}`; }
    const tm = document.getElementById('osxTime'); if(tm){ const m = minutesLeft(pos); tm.textContent = (pos===0 && !playing ? '≈ '+m+' '+t.total : '≈ '+m+' '+t.left); }
    document.querySelectorAll('#osxTimeline .osx-seg').forEach(seg=>{
      const pi = +seg.dataset.p; let tot = 0, done = 0;
      seq.forEach((x, i)=>{ if(x.part===pi && x.k!=='intro'){ const c = charsOf(x); tot += c; if(i < pos) done += c; } });
      seg.style.flexGrow = String(Math.max(1, tot)); seg.querySelector('i').style.width = (tot ? Math.round(100*done/tot) : 0)+'%';
      seg.classList.toggle('cur', it && it.part===pi && it.k!=='intro');
    });
    document.querySelectorAll('#osxParts button').forEach(x=>x.classList.toggle('cur', it && +x.dataset.p===it.part && it.k!=='intro'));
    const fill = document.getElementById('osxFsFill'); if(fill) fill.style.width = (100*pos/Math.max(1, seq.length-1))+'%';
  }

  /* ---------- playback ---------- */
  function stopSpeech(){ ++run; try{ if(TTS) TTS.cancel(); }catch(e){} }
  function toggle(){ playing ? pause() : play(); }
  function play(){
    if(pos >= seq.length){ pos = 0; sent = 0; }
    try{ if(typeof window.exStop==='function' && window.exOn) window.exStop(); }catch(e){}
    stopSpeech(); playing = true; const id = run; ui();
    try{ if(navigator.wakeLock && !wake) navigator.wakeLock.request('screen').then(w=>{ wake = w; }).catch(()=>{}); }catch(e){}
    const w = document.getElementById('osxWarn'); if(w){ const miss = TTS && lang!=='en' && !voiceFor(lang); w.hidden = !miss; if(miss) w.textContent = T().noVoice; }
    step(id);
  }
  function pause(){ playing = false; stopSpeech(); if(wake){ try{ wake.release(); }catch(e){} wake = null; } ui(); save(); }
  function stop(){ if(playing) pause(); caption(''); exitFs(); }
  function step(id){
    if(id !== run || !playing) return;
    const it = seq[pos];
    if(!it){ playing = false; pos = 0; sent = 0; save(); ui(); caption(T().done); if(wake){ try{ wake.release(); }catch(e){} wake = null; } return; }
    show(false);
    if(sent >= it.pts.length){ pos++; sent = 0; save(); ui(); setTimeout(()=>step(id), it.k==='part' ? 400 : 700); return; }
    const p = it.pts[sent];
    let shownCap = false;
    const showCap = ()=>{ if(shownCap || id!==run) return; shownCap = true; caption(p.say); mark(typeof p.oi==='number' ? p.oi : -1); };
    const next = wait=>setTimeout(()=>{ if(id!==run) return; sent++; step(id); }, wait);
    const v = TTS ? voiceFor(lang) : null;
    if(!TTS || (!v && lang!=='en')){ showCap(); next(Math.max(2200, p.say.length*65/rate)); return; }
    const u = new SpeechSynthesisUtterance(sayable(p.say));
    u.lang = (LANGS.find(x=>x.id===lang)||LANGS[0]).tag; if(v){ try{ u.voice = v; }catch(e){} }
    u.rate = rate; const t0 = Date.now();
    u.onstart = showCap; setTimeout(showCap, 1200);
    u.onend = ()=>{ if(id!==run) return; showCap(); const ms = Date.now()-t0;
      if(ms > 800){ const c = p.say.length/(ms/1000)/rate; cps = cps*0.85 + Math.min(30, Math.max(6, c))*0.15; }
      next(it.k==='part' ? 600 : 180); };
    u.onerror = ()=>{ if(id!==run) return; showCap(); next(Math.min(6000, p.say.length*55)); };
    try{ TTS.speak(u); }catch(e){ showCap(); next(Math.max(2200, p.say.length*65)); }
  }
  function jumpPart(pi){
    const at = seq.findIndex(x=>x.k==='part' && x.part===pi); if(at < 0) return;
    const was = playing; stopSpeech(); pos = at; sent = 0; show(true); caption(''); save(); ui();
    if(was){ playing = false; play(); }
  }
  function part(d){ const it = seq[pos] || {}; const cur = it.k==='intro' ? -1 : (it.part||0); jumpPart(Math.max(0, Math.min(C.topics.length-1, cur + d))); }
  function restart(){ const was = playing; stopSpeech(); pos = 0; sent = 0; show(true); caption(''); save(); paint(); if(was){ playing = false; play(); } }
  function setLang(l){
    if(l===lang) return;
    const was = playing; stopSpeech(); playing = false;
    // keep the same place: same topic, same kind of step
    const it = seq[pos] || {}; const pi = it.part, kind = it.k;
    lang = l; store.set(K('lang'), l); build();
    let at = seq.findIndex(x=>x.part===pi && (x.k===kind || kind==='slide' && x.k==='slide')); if(kind==='intro' || at < 0) at = kind==='intro' ? 0 : Math.max(0, seq.findIndex(x=>x.k==='part' && x.part===pi));
    pos = at; sent = 0; shown = -1;
    if(fsOn){ const fl = document.getElementById('osxFsLang'); if(fl) fl.textContent = (LANGS.find(x=>x.id===lang)||LANGS[0]).short; document.querySelectorAll('.osx-langs button').forEach(b=>b.classList.toggle('on', b.dataset.l===lang)); show(true); ui(); }
    else paint();
    if(was) play();
  }

  /* ---------- full screen ---------- */
  function enterFs(){
    const st = document.getElementById('osxStage'); if(!st) return;
    st.classList.add('osx-fs'); fsOn = true; document.body.style.overflow = 'hidden';
    try{ (st.requestFullscreen ? st.requestFullscreen() : st.webkitRequestFullscreen && st.webkitRequestFullscreen()); }catch(e){}
    try{ screen.orientation && screen.orientation.lock && screen.orientation.lock('landscape').catch(()=>{}); }catch(e){}
    setTimeout(()=>{ fit(); autoShrinkReset(); }, 250);
  }
  function exitFs(){
    const st = document.getElementById('osxStage'); if(!fsOn) return;
    fsOn = false; if(st) st.classList.remove('osx-fs'); document.body.style.overflow = '';
    try{ if(document.fullscreenElement && document.exitFullscreen) document.exitFullscreen(); else if(document.webkitFullscreenElement && document.webkitExitFullscreen) document.webkitExitFullscreen(); }catch(e){}
    try{ screen.orientation && screen.orientation.unlock && screen.orientation.unlock(); }catch(e){}
    setTimeout(()=>{ fit(); autoShrinkReset(); }, 250);
  }
  function autoShrinkReset(){ shown = -1; show(true); if(playing){ const it = seq[pos]; if(it) mark((it.pts[sent]||{}).oi ?? -1); } }
  document.addEventListener('fullscreenchange', ()=>{ if(!document.fullscreenElement && fsOn) exitFs(); });
  document.addEventListener('keydown', e=>{ if(!document.getElementById('osxStage')) return; if(e.key==='Escape' && fsOn) exitFs(); });
  document.addEventListener('visibilitychange', ()=>{ if(document.hidden && playing){ /* keep reading in background where the browser allows */ } });

  window.OneShotStudy = { render, stop, toggle, play, pause };
})();
