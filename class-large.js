/* BAIO Learning System · Large Text (projector) class presentation
   One shared engine for every chapter. Slides are built live from the chapter's
   Study Mode notes (English / ಕನ್ನಡ / हिंदी), drawn on a 1920×1080 canvas with big
   type for the last bench, and scaled to fit the phone, laptop or projector.

   Light and dark themes are real themes (not an image filter): by default the deck
   follows the app's ☀️/🌙 switch live, and the teacher can pin Light or Dark.

   API
     ClassLarge.mount(hostEl, {
       key, chapterNo, cls:'PU-I'|'PU-II', chapterName:{en,kn,hi},
       topics:[{id, name:{en,kn,hi}}],
       getStudy:(id, lang) => ({recap:[...], sections:[{h, body(html)}], table:{title, headers, rows}}) | null,
       lang:() => 'en'|'kn'|'hi'
     })
     ClassLarge.fromHtml({title, chips, html})  -> {recap, sections, table}   (for one-block-per-topic notes)
     ClassLarge.unmount()
*/
(function(){
  'use strict';
  if(window.ClassLarge) return;

  const W = 1920, H = 1080;
  const TXT = {
    en:{bio:'BIOLOGY', ch:'CHAPTER', part:'PART', of:'of', recap:'Quick recap', inThis:'In this chapter', cont:'contd.',
        endT:'Thank you', endS:'Revise the notes · Draw the diagrams · Practise MCQs in the BAIO app', topics:'topics',
        prev:'Prev', next:'Next', fs:'Fullscreen', theme:{auto:'Auto', light:'Light', dark:'Dark'}, jump:'Jump to topic', by:'Narendra Sir · Biology Lecturer'},
    kn:{bio:'ಜೀವಶಾಸ್ತ್ರ', ch:'ಅಧ್ಯಾಯ', part:'ಭಾಗ', of:'/', recap:'ತ್ವರಿತ ಪುನರಾವಲೋಕನ', inThis:'ಈ ಅಧ್ಯಾಯದಲ್ಲಿ', cont:'ಮುಂದುವರಿದಿದೆ',
        endT:'ಧನ್ಯವಾದಗಳು', endS:'ಟಿಪ್ಪಣಿ ಓದಿ · ಚಿತ್ರಗಳನ್ನು ಬಿಡಿಸಿ · BAIO ಆ್ಯಪ್‌ನಲ್ಲಿ MCQ ಅಭ್ಯಾಸ ಮಾಡಿ', topics:'ವಿಷಯಗಳು',
        prev:'ಹಿಂದೆ', next:'ಮುಂದೆ', fs:'ಪೂರ್ಣ ಪರದೆ', theme:{auto:'ಸ್ವಯಂ', light:'ಬೆಳಕು', dark:'ಕತ್ತಲು'}, jump:'ವಿಷಯಕ್ಕೆ ಹೋಗಿ', by:'ನರೇಂದ್ರ ಸರ್ · ಜೀವಶಾಸ್ತ್ರ ಉಪನ್ಯಾಸಕರು'},
    hi:{bio:'जीवविज्ञान', ch:'अध्याय', part:'भाग', of:'/', recap:'झटपट दोहराव', inThis:'इस अध्याय में', cont:'जारी',
        endT:'धन्यवाद', endS:'नोट्स दोहराएँ · चित्र बनाएँ · BAIO ऐप में MCQ का अभ्यास करें', topics:'विषय',
        prev:'पिछला', next:'अगला', fs:'फ़ुल स्क्रीन', theme:{auto:'ऑटो', light:'लाइट', dark:'डार्क'}, jump:'विषय पर जाएँ', by:'नरेंद्र सर · जीवविज्ञान व्याख्याता'}
  };
  const LANGS = [['en','English','EN'],['kn','ಕನ್ನಡ','ಕ'],['hi','हिंदी','हि']];
  const store = { get(k){ try{ return localStorage.getItem(k); }catch(e){ return null; } }, set(k,v){ try{ localStorage.setItem(k,v); }catch(e){} } };

  /* ---------------- styles ---------------- */
  const CSS = `
.clg{--bg:#faf7f0;--ink:#0f1b2d;--muted:#5b6676;--teal:#0f7b6c;--tealbg:#e7f4f1;--tealline:#9fd3c9;--gold:#a87908;--goldbg:#fbf1d6;--goldline:#e6cf8a;--card:#ffffff;--line:#e4dccb;--div1:#0f5f55;--div2:#0b3d47;}
.clg.dk{--bg:#0e1621;--ink:#eef3f7;--muted:#9fb0c2;--teal:#4fd1b5;--tealbg:#123a37;--tealline:#1f6b61;--gold:#f2c94c;--goldbg:#3a3118;--goldline:#7a6424;--card:#16212e;--line:#26364a;--div1:#0b2a33;--div2:#0d1b2a;}
.clg-wrap{margin-top:6px}
.clg-stage{position:relative;width:100%;aspect-ratio:16/9;overflow:hidden;border-radius:14px;background:var(--bg);box-shadow:0 2px 14px rgba(0,0,0,.18);touch-action:pan-y;user-select:none;-webkit-user-select:none}
.clg-slide{position:absolute;left:0;top:0;width:${W}px;height:${H}px;transform-origin:0 0;display:flex;flex-direction:column;padding:58px 96px 40px;background:var(--bg);color:var(--ink);font-family:Inter,'Noto Sans Kannada','Noto Sans Devanagari','Segoe UI',system-ui,sans-serif;overflow:hidden;transition:background .25s,color .25s}
.clg-slide *{box-sizing:border-box}
.clg-bar{position:absolute;left:0;top:0;right:0;height:12px;background:linear-gradient(90deg,var(--teal) 0 58%,var(--gold) 58% 100%)}
.clg-kick{flex:none;font:700 30px/1.2 Inter,'Noto Sans Kannada','Noto Sans Devanagari',sans-serif;letter-spacing:.09em;color:var(--gold);text-transform:uppercase;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.clg-h{flex:none;margin-top:12px;font:800 74px/1.12 'Space Grotesk',Inter,'Noto Sans Kannada','Noto Sans Devanagari',sans-serif;letter-spacing:-.01em;color:var(--ink)}
.clg-h em{font-style:normal;color:var(--teal)}
.clg-h small{font:700 34px Inter,sans-serif;color:var(--muted);margin-left:14px;letter-spacing:0}
.clg-body{flex:1 1 auto;min-height:0;margin:26px 0 20px;display:flex;flex-direction:column;justify-content:center;gap:var(--gap,22px)}
.clg-pt{position:relative;background:var(--card);border:2px solid var(--line);border-left:12px solid var(--teal);border-radius:20px;padding:20px 30px;font-size:var(--fs,48px);line-height:1.32;font-weight:500;color:var(--ink)}
.clg-pt:nth-child(even){border-left-color:var(--gold)}
.clg-pt b,.clg-pt strong{font-weight:800;color:var(--teal)}
.clg-pt:nth-child(even) b,.clg-pt:nth-child(even) strong{color:var(--gold)}
.clg-pt i,.clg-pt em{font-style:italic}
.clg-foot{flex:none;margin-top:auto;display:flex;justify-content:space-between;font:600 26px Inter,sans-serif;color:var(--muted)}
.clg-foot b{color:var(--teal)}
/* cover */
.clg-cover .clg-big{position:absolute;left:96px;right:96px;top:300px;font:800 150px/1.02 'Space Grotesk',Inter,'Noto Sans Kannada','Noto Sans Devanagari',sans-serif;color:var(--ink);letter-spacing:-.02em}
.clg-cover .clg-pill{position:absolute;left:96px;top:190px;padding:14px 30px;border-radius:999px;background:var(--goldbg);border:2px solid var(--goldline);font:800 34px Inter,'Noto Sans Kannada','Noto Sans Devanagari',sans-serif;letter-spacing:.08em;color:var(--gold)}
.clg-cover .clg-sub{position:absolute;left:96px;right:96px;bottom:150px;font:600 40px Inter,'Noto Sans Kannada','Noto Sans Devanagari',sans-serif;color:var(--muted)}
.clg-cover .clg-sub b{color:var(--teal)}
.clg-cover .clg-num{position:absolute;right:70px;bottom:-60px;font:800 560px/1 'Space Grotesk',Inter,sans-serif;color:var(--tealbg);letter-spacing:-.04em;pointer-events:none}
.clg-cover .clg-tc{position:absolute;left:96px;top:660px;display:flex;gap:16px;flex-wrap:wrap;right:700px}
.clg-cover .clg-tc span{padding:12px 26px;border-radius:999px;border:2px solid var(--tealline);background:var(--card);font:700 32px Inter,'Noto Sans Kannada','Noto Sans Devanagari',sans-serif;color:var(--teal)}
.clg-brand{position:absolute;right:96px;top:56px;display:flex;align-items:center;gap:16px;font:800 34px 'Space Grotesk',Inter,sans-serif;color:var(--ink)}
.clg-brand i{font-style:normal;width:64px;height:64px;border-radius:16px;background:#0f1b2d;color:#d4af37;display:grid;place-items:center;font:800 38px 'Space Grotesk',sans-serif}
/* agenda */
.clg-agenda{flex:1 1 auto;min-height:0;margin:26px 0 20px;display:grid;grid-template-columns:1fr 1fr;grid-auto-rows:min-content;align-content:center;gap:20px 40px}
.clg-agenda.one{grid-template-columns:1fr}
.clg-ag{display:flex;align-items:center;gap:24px;font:600 var(--fs,44px)/1.2 Inter,'Noto Sans Kannada','Noto Sans Devanagari',sans-serif;color:var(--ink);background:var(--card);border:2px solid var(--line);border-radius:18px;padding:16px 24px}
.clg-ag i{font-style:normal;flex:none;width:70px;height:70px;border-radius:16px;background:var(--tealbg);color:var(--teal);display:grid;place-items:center;font:800 36px 'Space Grotesk',sans-serif}
/* divider */
.clg-div{background:linear-gradient(135deg,var(--div1),var(--div2))!important;color:#fff}
.clg-div .clg-pn{position:absolute;left:0;right:0;top:330px;text-align:center;font:800 40px Inter,'Noto Sans Kannada','Noto Sans Devanagari',sans-serif;letter-spacing:.14em;color:#f2d27a}
.clg-div .clg-tn{position:absolute;left:120px;right:120px;top:400px;text-align:center;font:800 110px/1.1 'Space Grotesk',Inter,'Noto Sans Kannada','Noto Sans Devanagari',sans-serif;color:#fff}
.clg-div .clg-foot{color:#c9e6df}.clg-div .clg-foot b{color:#f2d27a}
/* recap */
.clg-chips{flex:1 1 auto;min-height:0;margin:26px 0 20px;display:flex;flex-wrap:wrap;align-content:center;justify-content:center;gap:24px}
.clg-chips span{padding:18px 34px;border-radius:999px;background:var(--tealbg);border:3px solid var(--tealline);font:700 var(--fs,46px)/1.2 Inter,'Noto Sans Kannada','Noto Sans Devanagari',sans-serif;color:var(--ink)}
.clg-chips span:nth-child(3n+2){background:var(--goldbg);border-color:var(--goldline)}
/* table */
.clg-tbl{flex:1 1 auto;min-height:0;margin:26px 0 20px;display:flex;align-items:center}
.clg-tbl table{width:100%;border-collapse:separate;border-spacing:0;border:2px solid var(--line);border-radius:18px;overflow:hidden;background:var(--card);font-size:var(--fs,38px);line-height:1.25}
.clg-tbl th{background:var(--teal);color:#fff;text-align:left;padding:16px 22px;font-weight:800}
.clg.dk .clg-tbl th{color:#0e1621}
.clg-tbl td{padding:14px 22px;border-top:2px solid var(--line);color:var(--ink);vertical-align:top}
.clg-tbl td:first-child{font-weight:800;color:var(--teal)}
.clg-tbl tr:nth-child(even) td{background:var(--tealbg)}
/* end */
.clg-end .clg-big{position:absolute;left:96px;right:96px;top:330px;text-align:center;font:800 150px 'Space Grotesk',Inter,'Noto Sans Kannada','Noto Sans Devanagari',sans-serif;color:var(--teal)}
.clg-end .clg-sub{position:absolute;left:150px;right:150px;top:560px;text-align:center;font:600 46px/1.35 Inter,'Noto Sans Kannada','Noto Sans Devanagari',sans-serif;color:var(--ink)}
/* tap zones */
.clg-tap{position:absolute;top:0;bottom:0;width:30%;z-index:2;cursor:pointer}
.clg-tap.l{left:0}.clg-tap.r{right:0}
/* controls */
.clg-ctl{display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:8px;margin-top:10px}
.clg-ctl button,.clg-ctl select{font:600 14px Inter,sans-serif;border-radius:12px;padding:9px 14px;border:1px solid var(--line,#d9d2c3);background:var(--panel2,#fff);color:var(--ink,#13202e);cursor:pointer}
.clg-ctl button.on{background:#0f7b6c;color:#fff;border-color:#0f7b6c}
.clg-ctl select{max-width:100%;min-width:0;flex:1 1 220px;text-overflow:ellipsis}
.clg-ctl .clg-count{font:700 14px Inter,sans-serif;min-width:70px;text-align:center;color:var(--ink,#13202e)}
.clg-ctl .grp{display:inline-flex;gap:4px}
.clg-prog{height:5px;border-radius:5px;background:rgba(127,127,127,.2);margin-top:8px;overflow:hidden}
.clg-prog i{display:block;height:100%;background:linear-gradient(90deg,#0f7b6c,#d4af37);width:0;transition:width .25s}
.clg-hint{font-size:12px;color:var(--text-dim,var(--muted,#7a8593));text-align:center;margin-top:8px;line-height:1.5}
/* fullscreen */
.clg-stage.fs{position:fixed!important;inset:0;z-index:99999;width:100vw;height:100vh;aspect-ratio:auto;border-radius:0;background:#000}
.clg-stage:fullscreen{width:100vw;height:100vh;aspect-ratio:auto;border-radius:0;background:#000}
.clg-fsbar{position:absolute;right:16px;bottom:16px;z-index:5;display:none;gap:8px;opacity:.25;transition:opacity .2s}
.clg-fsbar:hover,.clg-fsbar.show{opacity:1}
.clg-stage.fs .clg-fsbar,.clg-stage:fullscreen .clg-fsbar{display:flex}
.clg-fsbar button{font:700 16px Inter,sans-serif;min-width:46px;height:46px;border-radius:12px;border:0;background:rgba(15,27,45,.8);color:#fff;cursor:pointer;padding:0 12px}
`;
  function injectCss(){ if(document.getElementById('clgCss')) return; const s = document.createElement('style'); s.id = 'clgCss'; s.textContent = CSS; document.head.appendChild(s); }

  /* ---------------- text helpers ---------------- */
  const tmp = document.createElement('div');
  const esc = s=>String(s==null?'':s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  function plain(html){ tmp.innerHTML = String(html||''); return (tmp.textContent||'').replace(/\s+/g,' ').trim(); }
  function clean(html){
    tmp.innerHTML = String(html||'');
    tmp.querySelectorAll('*').forEach(el=>{ if(!/^(B|STRONG|I|EM|SUB|SUP|BR)$/.test(el.tagName)) el.replaceWith(...el.childNodes); else [...el.attributes].forEach(a=>el.removeAttribute(a.name)); });
    return tmp.innerHTML.replace(/(<br>\s*)+$/,'').replace(/\s+/g,' ').trim();
  }
  /* section body html -> list of point htmls (nested lists flattened) */
  function points(body){
    const box = document.createElement('div'); box.innerHTML = String(body||'');
    const out = [];
    const walkList = ul=>{ [...ul.children].forEach(li=>{ if(li.tagName!=='LI') return;
      const c = li.cloneNode(true); c.querySelectorAll('ul,ol').forEach(u=>u.remove());
      const h = clean(c.innerHTML); if(plain(h)) out.push(h);
      li.querySelectorAll(':scope > ul, :scope > ol').forEach(walkList); }); };
    const pushText = html=>{ String(html).split(/<br\s*\/?>/i).forEach(ch=>{ const h = clean(ch); if(plain(h)) out.push(h); }); };
    let buf = '';
    [...box.childNodes].forEach(n=>{
      if(n.nodeType===1 && /^(UL|OL)$/.test(n.tagName)){ if(buf){ pushText(buf); buf=''; } walkList(n); }
      else if(n.nodeType===1 && /^(P|DIV|H\d)$/.test(n.tagName)){ if(buf){ pushText(buf); buf=''; } pushText(n.innerHTML); }
      else buf += n.nodeType===1 ? n.outerHTML : esc(n.textContent);
    });
    if(buf) pushText(buf);
    return out;
  }
  /* heading: colour the part after a dash / colon */
  function headHtml(h){
    const t = esc(plain(h));
    const m = t.match(/^(.{3,}?)(\s[—–-]\s|:\s)(.+)$/);
    return m ? `${m[1]}${m[2]}<em>${m[3]}</em>` : t;
  }
  const stripNum = s=>String(s||'').replace(/^\s*\d+\.\s*/,'');

  /* one-block-per-topic notes ({title, chips, html}) -> {recap, sections, table} */
  function fromHtml(t){
    if(!t) return null;
    const box = document.createElement('div'); box.innerHTML = t.html || '';
    const sections = []; let table = null;
    let cur = {h: stripNum(plain(t.title)), html: ''};
    const push = ()=>{ if(plain(cur.html)) sections.push({h:cur.h, body:cur.html}); };
    [...box.childNodes].forEach(el=>{
      if(el.nodeType!==1){ cur.html += esc(el.textContent); return; }
      if(el.classList.contains('subhead') || /^H[3-6]$/.test(el.tagName)){ push(); cur = {h: plain(el.textContent), html: ''}; return; }
      const tb = el.tagName==='TABLE' ? el : el.querySelector && el.querySelector('table');
      if(tb){
        const rows = [...tb.querySelectorAll('tr')].map(r=>[...r.children].map(c=>clean(c.innerHTML)));
        if(!table && rows.length > 1) table = {title: cur.h, headers: rows[0], rows: rows.slice(1)};
        else rows.slice(1).forEach(r=>{ cur.html += '<p><b>'+r[0]+'</b>: '+r.slice(1).join(' | ')+'</p>'; });
        return;
      }
      cur.html += el.outerHTML;
    });
    push();
    return {recap: (t.chips||[]).map(plain), sections, table};
  }

  /* ---------------- state ---------------- */
  let C = null, host = null, lang = 'en', slides = [], idx = 0, theme = 'auto', stage = null, slideEl = null, ro = null, mo = null, keyH = null, measurer = null;
  const T = ()=>TXT[lang] || TXT.en;
  const K = s=>C.key+'_clg_'+s;
  const appDark = ()=>document.documentElement.getAttribute('data-theme') !== 'light';
  const isDark = ()=> theme==='dark' || (theme==='auto' && appDark());

  /* ---------------- build slide list (measured pagination) ---------------- */
  function kicker(){ const t = T(), nm = C.chapterName[lang] || C.chapterName.en; return `${C.cls} ${t.bio} · ${t.ch} ${C.chapterNo} · ${nm}`; }
  function foot(n){ return `<div class="clg-foot"><span><b>BAIO Learning System</b> · Narendra Sir</span><span>${n}</span></div>`; }

  function fits(htmlInner, cls){
    measurer.className = 'clg-slide ' + (cls||'');
    measurer.innerHTML = `<div class="clg-kick">${esc(kicker())}</div>` + htmlInner + foot('00 / 00');
    const b = measurer.querySelector('.clg-body,.clg-chips,.clg-tbl,.clg-agenda');
    if(!b) return true;
    return contentOk(b);
  }
  function tblHtml(headers, rows, fs){ return `<div class="clg-tbl" style="--fs:${fs}px"><table>${headers.length?`<tr>${headers.map(x=>`<th>${x}</th>`).join('')}</tr>`:''}${rows.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</table></div>`; }
  /* true when everything inside the block fits its box (centred flex content can overflow at the top too) */
  function contentOk(b){
    const kids = [...b.children]; if(!kids.length) return true;
    const br = b.getBoundingClientRect(); let top = Infinity, bot = -Infinity, right = -Infinity;
    kids.forEach(k=>{ const r = k.getBoundingClientRect(); top = Math.min(top, r.top); bot = Math.max(bot, r.bottom); right = Math.max(right, r.right); });
    return (bot - top) <= br.height + 2 && right <= br.right + 2 && top >= br.top - 2 && b.scrollWidth <= b.clientWidth + 2;
  }
  window.__clgContentOk = contentOk;
  const capOf = arr=> arr.every(p=>plain(p).length < 70) ? 6 : 4;
  function ptsHtml(pts, fs){ return `<div class="clg-body" style="--fs:${fs}px;--gap:${fs>=44?22:16}px">${pts.map(p=>`<div class="clg-pt">${p}</div>`).join('')}</div>`; }

  function build(){
    const t = T(), out = [];
    const nm = C.chapterName[lang] || C.chapterName.en;
    const topicName = tp=> (tp.name && (tp.name[lang] || tp.name.en)) || tp.id;
    out.push({k:'cover', title:nm});
    // agenda: up to 10 per slide
    const names = C.topics.map(topicName);
    for(let i=0;i<names.length;i+=10) out.push({k:'agenda', items:names.slice(i,i+10).map((n,j)=>[i+j+1,n])});
    C.topics.forEach((tp, pi)=>{
      const st = C.getStudy(tp.id, lang) || C.getStudy(tp.id, 'en') || {sections:[]};
      const tn = topicName(tp);
      out.push({k:'div', part:pi, n:C.topics.length, name:tn});
      (st.sections||[]).forEach(sec=>{
        const pts = points(sec.body); if(!pts.length) return;
        const h = sec.h ? plain(sec.h) : tn;
        // greedy packing at the largest size that fits; max 4 points per slide
        const pages = []; let cur = [];
        const tryFit = arr=> fits(`<div class="clg-h">${headHtml(h)}</div>`+ptsHtml(arr, 46));
        pts.forEach(p=>{
          const next = cur.concat([p]);
          if(cur.length && (next.length > capOf(next) || !tryFit(next))){ pages.push(cur); cur = [p]; }
          else cur = next;
        });
        if(cur.length) pages.push(cur);
        // even out the pages (no lonely last point): same page count, points spread evenly
        if(pages.length > 1){
          const k = pages.length, n = pts.length, even = [];
          let ok = true, at = 0;
          for(let j=0;j<k;j++){ const take = Math.floor(n/k) + (j < n%k ? 1 : 0); const pg = pts.slice(at, at+take); at += take; if(pg.length > capOf(pg) || !tryFit(pg)){ ok = false; break; } even.push(pg); }
          if(ok) pages.splice(0, pages.length, ...even);
        }
        pages.forEach((pg, j)=> out.push({k:'pts', part:pi, h, pts:pg, page:j+1, pages:pages.length}));
      });
      if(st.table && st.table.rows && st.table.rows.length){
        const rows = st.table.rows, hdr = st.table.headers||[], th = plain(st.table.title) || tn;
        const tfits = rr=> fits(`<div class="clg-h">${headHtml(th)}</div>`+tblHtml(hdr, rr, 30));
        const pages = []; let cur = [];
        rows.forEach(r=>{ const next = cur.concat([r]); if(cur.length && (next.length > 6 || !tfits(next))){ pages.push(cur); cur = [r]; } else cur = next; });
        if(cur.length) pages.push(cur);
        if(pages.length > 1){ const k = pages.length, n = rows.length, even = []; let ok = true, at = 0;
          for(let j=0;j<k;j++){ const take = Math.floor(n/k) + (j < n%k ? 1 : 0); const pg = rows.slice(at, at+take); at += take; if(!tfits(pg)){ ok = false; break; } even.push(pg); }
          if(ok) pages.splice(0, pages.length, ...even); }
        pages.forEach((pg, j)=> out.push({k:'tbl', part:pi, h: th, headers: hdr, rows: pg, page:j+1, pages:pages.length}));
      }
      const rec = (st.recap||[]).map(plain).filter(Boolean);
      if(rec.length) out.push({k:'recap', part:pi, name:tn, items:rec});
    });
    out.push({k:'end'});
    return out;
  }

  /* largest font size (from list) at which the block fits */
  function bestSize(make, sizes, cls){ for(const s of sizes){ if(fits(make(s), cls)) return s; } return sizes[sizes.length-1]; }

  function slideHtml(s, n){
    const t = T();
    const num = `${n} / ${slides.length}`;
    if(s.k==='cover') return {cls:'clg-cover', html:`<div class="clg-num">${C.chapterNo}</div><div class="clg-bar"></div><div class="clg-brand"><i>B</i>BAIO</div>
      <div class="clg-tc"><span>${C.topics.length} ${esc(t.topics)}</span><span>${slides.length} slides</span></div>
      <div class="clg-pill">${esc(C.cls)} ${esc(t.bio)} · ${esc(t.ch)} ${C.chapterNo}</div>
      <div class="clg-big" id="clgBig">${esc(s.title)}</div>
      <div class="clg-sub"><b>${esc(t.by)}</b><br>S.R.N. Mehta PU Science College, Kalaburagi</div>`};
    if(s.k==='agenda'){
      const one = s.items.length <= 5;
      const inner = fs=>`<div class="clg-h">${esc(t.inThis)}</div><div class="clg-agenda${one?' one':''}" style="--fs:${fs}px">${s.items.map(([i,nm])=>`<div class="clg-ag"><i>${i}</i><span>${esc(nm)}</span></div>`).join('')}</div>`;
      const fs = bestSize(inner, [46,42,38,34,30]);
      return {cls:'', html:`<div class="clg-bar"></div><div class="clg-kick">${esc(kicker())}</div>${inner(fs)}${foot(num)}`};
    }
    if(s.k==='div') return {cls:'clg-div', html:`<div class="clg-pn">${esc(t.part)} ${s.part+1} ${esc(t.of)} ${s.n}</div><div class="clg-tn">${esc(s.name)}</div>${foot(num)}`};
    if(s.k==='pts'){
      const more = s.pages > 1 ? `<small>${s.page}/${s.pages}</small>` : '';
      const head = `<div class="clg-h">${headHtml(s.h)}${more}</div>`;
      const fs = bestSize(f=>head+ptsHtml(s.pts, f), [60,56,52,48,44,40,36,32,30]);
      return {cls:'', html:`<div class="clg-bar"></div><div class="clg-kick">${esc(kicker())}</div>${head}${ptsHtml(s.pts, fs)}${foot(num)}`};
    }
    if(s.k==='tbl'){
      const more = s.pages > 1 ? `<small>${s.page}/${s.pages}</small>` : '';
      const head = `<div class="clg-h">${headHtml(s.h)}${more}</div>`;
      const tb = fs=>tblHtml(s.headers, s.rows, fs);
      const fs = bestSize(f=>head+tb(f), [40,36,32,28,25,22]);
      return {cls:'', html:`<div class="clg-bar"></div><div class="clg-kick">${esc(kicker())}</div>${head}${tb(fs)}${foot(num)}`};
    }
    if(s.k==='recap'){
      const head = `<div class="clg-h">✓ ${esc(t.recap)} <small>${esc(s.name)}</small></div>`;
      const ch = fs=>`<div class="clg-chips" style="--fs:${fs}px">${s.items.map(x=>`<span>${esc(x)}</span>`).join('')}</div>`;
      const fs = bestSize(f=>head+ch(f), [48,44,40,36,32]);
      return {cls:'', html:`<div class="clg-bar"></div><div class="clg-kick">${esc(kicker())}</div>${head}${ch(fs)}${foot(num)}`};
    }
    return {cls:'clg-end', html:`<div class="clg-bar"></div><div class="clg-kick">${esc(kicker())}</div><div class="clg-big">${esc(t.endT)}</div><div class="clg-sub">${esc(t.endS)}</div>${foot(num)}`};
  }

  /* ---------------- render ---------------- */
  function applyTheme(){
    const root = host && host.querySelector('.clg'); if(!root) return;
    root.classList.toggle('dk', isDark());
    if(measurer) measurer.parentElement.classList.toggle('dk', isDark());
    const b = host.querySelector('#clgTheme'); if(b) b.textContent = (theme==='auto' ? '🌓 ' : theme==='dark' ? '🌙 ' : '☀️ ') + T().theme[theme];
    const fb = host.querySelector('#clgFsTheme'); if(fb) fb.textContent = isDark() ? '🌙' : '☀️';
  }
  function scale(){
    if(!stage || !slideEl) return;
    const r = stage.getBoundingClientRect();
    const s = Math.min(r.width / W, r.height / H);
    slideEl.style.transform = `translate(${(r.width - W*s)/2}px, ${(r.height - H*s)/2}px) scale(${s})`;
  }
  function show(i){
    if(!slides.length) return;
    idx = Math.max(0, Math.min(slides.length-1, i));
    const s = slides[idx], sh = slideHtml(s, idx+1);
    slideEl.className = 'clg-slide ' + sh.cls;
    slideEl.innerHTML = sh.html;
    if(s.k==='cover'){ const big = slideEl.querySelector('#clgBig'); let f = 150; while(big && big.scrollHeight > 420 && f > 80){ f -= 10; big.style.fontSize = f+'px'; } }
    const c = host.querySelector('#clgCount'); if(c) c.textContent = `${idx+1} / ${slides.length}`;
    const p = host.querySelector('#clgProg'); if(p) p.style.width = ((idx+1)/slides.length*100)+'%';
    const sel = host.querySelector('#clgJump'); if(sel){ const part = s.part!=null ? s.part : -1; if(String(sel.value) !== String(part)) sel.value = part >= 0 ? String(part) : ''; }
    store.set(K('pos'), String(idx));
    scale();
  }
  function rebuild(keepPart){
    const curPart = slides[idx] && slides[idx].part;
    slides = build();
    let to = 0;
    if(keepPart != null && curPart != null){ const j = slides.findIndex(x=>x.part===curPart); if(j >= 0) to = j; }
    else { const saved = parseInt(store.get(K('pos'))||'0', 10); if(saved > 0 && saved < slides.length && store.get(K('lang'))===lang) to = saved; }
    store.set(K('lang'), lang);
    const sel = host.querySelector('#clgJump');
    if(sel) sel.innerHTML = `<option value="">${esc(T().jump)}…</option>` + C.topics.map((tp,i)=>`<option value="${i}">${i+1}. ${esc((tp.name && (tp.name[lang]||tp.name.en)) || tp.id)}</option>`).join('');
    show(to);
  }
  function setLang(l){
    if(!TXT[l] || l===lang) return; lang = l; store.set(K('lang'), l);
    host.querySelectorAll('[data-clg-l]').forEach(b=>b.classList.toggle('on', b.getAttribute('data-clg-l')===l));
    const fl = host.querySelector('#clgFsLang'); if(fl) fl.textContent = (LANGS.find(x=>x[0]===l)||LANGS[0])[2];
    labels();
    rebuild(true);
  }
  function labels(){
    const t = T();
    const set = (id, v)=>{ const e = host.querySelector(id); if(e) e.textContent = v; };
    set('#clgPrev', '← ' + t.prev); set('#clgNext', t.next + ' →'); set('#clgFs', '⛶ ' + t.fs);
    applyTheme();
  }
  function cycleTheme(){ theme = theme==='auto' ? (appDark() ? 'light' : 'dark') : theme==='light' ? 'dark' : theme==='dark' ? 'auto' : 'auto'; store.set('baio_ppt_theme', theme); applyTheme(); }
  function isFs(){ return !!stage && (document.fullscreenElement === stage || stage.classList.contains('fs')); }
  function toggleFs(){
    if(isFs()){ if(document.fullscreenElement) document.exitFullscreen().catch(()=>{}); stage.classList.remove('fs'); document.body.style.overflow=''; setTimeout(scale, 60); return; }
    const done = ()=>{ try{ screen.orientation && screen.orientation.lock && screen.orientation.lock('landscape').catch(()=>{}); }catch(e){} setTimeout(scale, 80); };
    if(stage.requestFullscreen){ stage.requestFullscreen().then(done).catch(()=>{ stage.classList.add('fs'); document.body.style.overflow='hidden'; done(); }); }
    else { stage.classList.add('fs'); document.body.style.overflow='hidden'; done(); }
  }
  const visible = ()=> !!(stage && host && host.isConnected && (host.offsetParent !== null || isFs()));

  function mount(el, cfg){
    unmount();
    injectCss();
    C = cfg; host = el;
    const appLang = cfg.lang ? cfg.lang() : 'en';
    lang = store.get(K('lang')) || (TXT[appLang] ? appLang : 'en'); if(!TXT[lang]) lang = 'en';
    theme = store.get('baio_ppt_theme') || 'auto';
    const t = T();
    host.innerHTML = `<div class="clg clg-wrap">
      <div class="clg-stage" id="clgStage">
        <div class="clg-slide" id="clgSlide"></div>
        <div class="clg-tap l" id="clgTapL" title="Previous"></div><div class="clg-tap r" id="clgTapR" title="Next"></div>
        <div class="clg-fsbar" id="clgFsBar"><button id="clgFsPrev">❮</button><button id="clgFsNext">❯</button><button id="clgFsTheme">☀️</button><button id="clgFsLang">${(LANGS.find(x=>x[0]===lang)||LANGS[0])[2]}</button><button id="clgFsExit">✕</button></div>
      </div>
      <div class="clg-prog"><i id="clgProg"></i></div>
      <div class="clg-ctl">
        <button id="clgPrev"></button><span class="clg-count" id="clgCount"></span><button id="clgNext"></button><button id="clgFs"></button>
      </div>
      <div class="clg-ctl">
        <span class="grp">${LANGS.map(([id,lb])=>`<button data-clg-l="${id}" class="${id===lang?'on':''}">${lb}</button>`).join('')}</span>
        <button id="clgTheme"></button>
        <select id="clgJump" aria-label="Jump to topic"></select>
      </div>
      <div class="clg-hint">Large text for the projector · built from the chapter's Study Mode notes · ← → keys, swipe or tap the slide edges · F = fullscreen · T = theme · E / K / H = language</div>
    </div>`;
    // hidden measuring slide (same theme/fonts, real size)
    const mwrap = document.createElement('div'); mwrap.className = 'clg'; mwrap.setAttribute('aria-hidden','true');
    mwrap.style.cssText = `position:fixed;left:-99999px;top:0;width:${W}px;height:${H}px;visibility:hidden;pointer-events:none;`;
    measurer = document.createElement('div'); measurer.className = 'clg-slide'; measurer.style.position = 'relative';
    mwrap.appendChild(measurer); document.body.appendChild(mwrap);

    stage = host.querySelector('#clgStage'); slideEl = host.querySelector('#clgSlide');
    const on = (id, fn)=>{ const e = host.querySelector(id); if(e) e.addEventListener('click', ev=>{ ev.stopPropagation(); fn(); }); };
    on('#clgPrev', ()=>show(idx-1)); on('#clgNext', ()=>show(idx+1)); on('#clgTapL', ()=>show(idx-1)); on('#clgTapR', ()=>show(idx+1));
    on('#clgFs', toggleFs); on('#clgFsExit', toggleFs); on('#clgFsPrev', ()=>show(idx-1)); on('#clgFsNext', ()=>show(idx+1));
    on('#clgTheme', cycleTheme); on('#clgFsTheme', cycleTheme);
    on('#clgFsLang', ()=>{ const i = LANGS.findIndex(x=>x[0]===lang); setLang(LANGS[(i+1)%LANGS.length][0]); });
    host.querySelectorAll('[data-clg-l]').forEach(b=>b.addEventListener('click', ()=>setLang(b.getAttribute('data-clg-l'))));
    host.querySelector('#clgJump').addEventListener('change', e=>{ const v = e.target.value; if(v==='') return; const j = slides.findIndex(x=>x.k==='div' && x.part===+v); if(j>=0) show(j); });
    // swipe
    let sx = null, sy = null;
    stage.addEventListener('touchstart', e=>{ const p = e.touches[0]; sx = p.clientX; sy = p.clientY; }, {passive:true});
    stage.addEventListener('touchend', e=>{ if(sx==null) return; const p = e.changedTouches[0], dx = p.clientX - sx, dy = p.clientY - sy; sx = null; if(Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)*1.3) show(idx + (dx < 0 ? 1 : -1)); }, {passive:true});
    // show fullscreen bar briefly on touch
    stage.addEventListener('pointerdown', ()=>{ const fb = host.querySelector('#clgFsBar'); if(!fb) return; fb.classList.add('show'); clearTimeout(fb._t); fb._t = setTimeout(()=>fb.classList.remove('show'), 2500); });
    keyH = e=>{
      if(!visible()) return;
      const tg = e.target; if(tg && (/^(INPUT|TEXTAREA|SELECT)$/.test(tg.tagName) || tg.isContentEditable)) return;
      const k = e.key;
      if(k==='ArrowRight' || k==='PageDown' || k===' '){ e.preventDefault(); e.stopImmediatePropagation(); show(idx+1); }
      else if(k==='ArrowLeft' || k==='PageUp'){ e.preventDefault(); e.stopImmediatePropagation(); show(idx-1); }
      else if(k==='Home'){ show(0); } else if(k==='End'){ show(slides.length-1); }
      else if(k==='f' || k==='F'){ toggleFs(); }
      else if(k==='t' || k==='T'){ cycleTheme(); }
      else if(k==='e' || k==='E'){ setLang('en'); } else if(k==='k' || k==='K'){ setLang('kn'); } else if(k==='h' || k==='H'){ setLang('hi'); }
      else if(k==='Escape' && stage.classList.contains('fs')){ toggleFs(); }
    };
    window.addEventListener('keydown', keyH, true);
    ro = new ResizeObserver(scale); ro.observe(stage);
    document.addEventListener('fullscreenchange', onFsChange);
    // follow the app theme live
    mo = new MutationObserver(()=>{ if(theme==='auto') applyTheme(); });
    mo.observe(document.documentElement, {attributes:true, attributeFilter:['data-theme','class']});
    window.addEventListener('storage', onStorage);
    labels(); applyTheme();
    const go = ()=>{ if(!C) return; rebuild(null); };
    go();
    if(document.fonts && document.fonts.ready) document.fonts.ready.then(()=>{ if(C) rebuild(true); });
  }
  function onFsChange(){ if(!document.fullscreenElement && stage) stage.classList.remove('fs'); setTimeout(scale, 60); }
  function onStorage(e){ if(e.key==='baio_ppt_theme' && e.newValue){ theme = e.newValue; applyTheme(); } else if(e.key==='baio_theme' && theme==='auto') applyTheme(); }
  function unmount(){
    if(keyH) window.removeEventListener('keydown', keyH, true); keyH = null;
    if(ro) ro.disconnect(); ro = null; if(mo) mo.disconnect(); mo = null;
    document.removeEventListener('fullscreenchange', onFsChange); window.removeEventListener('storage', onStorage);
    if(measurer && measurer.parentElement) measurer.parentElement.remove(); measurer = null;
    if(stage && stage.classList.contains('fs')){ stage.classList.remove('fs'); document.body.style.overflow=''; }
    C = null; host = null; stage = null; slideEl = null; slides = [];
  }
  window.ClassLarge = { mount, unmount, fromHtml, _slides:()=>slides, _show:i=>show(i) };
})();
