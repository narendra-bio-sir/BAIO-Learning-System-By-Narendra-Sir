/* BAIO · Chapter Quick Card widget
   Shows the chapter's Board + NEET quick card (important-cards/<id>.jpg) at the top of the
   Board Important tab, with Share (sends the image itself where the phone supports it),
   Download and a link to all chapter cards.
   QuickCard.mount(containerEl, {id:'pu2-ch5', base:'' | '../', title:'Molecular Basis of Inheritance', cls:'II PUC', ch:5}) */
(function(){
  if(window.QuickCard) return;
  const SITE='https://narendra-bio-sir.github.io/BAIO-Learning-System-By-Narendra-Sir/';
  const V='?v=2';
  function css(){
    if(document.getElementById('qcwCss')) return;
    const s=document.createElement('style'); s.id='qcwCss';
    s.textContent=`.qcw{margin:0 0 16px;padding:12px;border-radius:16px;border:1px solid rgba(212,175,55,.45);background:linear-gradient(135deg,rgba(255,61,119,.08),rgba(123,47,247,.08),rgba(0,180,216,.08))}
.qcw-h{display:flex;align-items:center;gap:8px;margin-bottom:10px;font:800 13px 'Space Grotesk','Inter',sans-serif;letter-spacing:.04em}
.qcw-h span{font:800 9.5px 'Inter',sans-serif;letter-spacing:.08em;color:#fff;background:linear-gradient(90deg,#ff3d77,#7b2ff7);padding:3px 8px;border-radius:999px}
.qcw-img{display:block;width:100%;max-width:420px;margin:0 auto;border-radius:12px;box-shadow:0 6px 18px rgba(0,0,0,.25);cursor:zoom-in}
.qcw-acts{display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:10px}
.qcw-acts a,.qcw-acts button{flex:1 1 120px;max-width:200px;text-align:center;padding:9px 12px;border-radius:12px;border:1px solid rgba(127,127,127,.35);background:rgba(127,127,127,.1);color:inherit;text-decoration:none;font:700 13px 'Inter',sans-serif;cursor:pointer}
.qcw-acts .pri{background:linear-gradient(135deg,#ff8a00,#ff3d77);color:#fff;border-color:transparent}
.qcw-zoom{position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,.88);display:grid;place-items:center;padding:12px}
.qcw-zoom img{max-width:100%;max-height:100%;border-radius:12px}`;
    document.head.appendChild(s);
  }
  async function share(o){
    const text=`📝 ${o.cls} Biology · Ch ${o.ch} ${o.title}: board-important topics & NEET high-yield facts by Narendra Sir (BAIO Learning System).`;
    const url=SITE+'important-cards.html#'+o.id;
    try{
      const blob=await (await fetch(o.base+'important-cards/'+o.id+'.jpg'+V)).blob();
      const file=new File([blob],'BAIO_'+o.id+'_quick_card.jpg',{type:'image/jpeg'});
      if(navigator.canShare && navigator.canShare({files:[file]})){ await navigator.share({files:[file], text:text+'\n'+url}); return; }
    }catch(e){ if(e && e.name==='AbortError') return; }
    if(navigator.share){ try{ await navigator.share({title:'BAIO · '+o.title, text, url}); }catch(e){} return; }
    window.open('https://wa.me/?text='+encodeURIComponent(text+'\n'+url),'_blank','noopener');
  }
  function mount(el, o){
    if(!el || el.querySelector('.qcw')) return;
    css();
    const src=o.base+'important-cards/'+o.id+'.jpg'+V;
    const w=document.createElement('div'); w.className='qcw';
    w.innerHTML=`<div class="qcw-h">🃏 Chapter Quick Card <span>BOARD + NEET</span></div>
      <img class="qcw-img" src="${src}" alt="${o.title} quick card: board important and NEET high-yield points" loading="lazy">
      <div class="qcw-acts"><button type="button" class="pri" data-qc="share">📤 Share card</button>
      <a href="${src}" download="BAIO_${o.title.replace(/[^A-Za-z0-9]+/g,'_')}_Quick_Card.jpg">⬇ Download</a>
      <a href="${o.base}important-cards.html">🃏 All chapters</a></div>`;
    w.querySelector('[data-qc="share"]').addEventListener('click', ()=>share(o));
    w.querySelector('.qcw-img').addEventListener('click', ()=>{ const z=document.createElement('div'); z.className='qcw-zoom'; z.innerHTML=`<img src="${src}" alt="">`; z.addEventListener('click',()=>z.remove()); document.body.appendChild(z); });
    el.insertBefore(w, el.firstChild);
  }
  window.QuickCard={mount, share};
})();
