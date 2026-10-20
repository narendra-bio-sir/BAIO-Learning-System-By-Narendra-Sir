/* BAIO "Bio Fact of the Day" share card.
   window.baioFactShare(fact) opens a sheet with Dark and Light versions of a
   1080x1350 social-media picture (logo, brand, fact, Narendra Sir's credentials,
   a "Join BAIO" call to action and social handles). The student picks a theme
   and shares the picture (Web Share with files) or downloads it.
   fact = {t: 'text (may contain simple HTML)', c: 'pu2-ch3'} */
(function(){
  var APP_URL = 'https://narendra-bio-sir.github.io/BAIO-Learning-System-By-Narendra-Sir/';
  var LOGO_SRC = 'zone/baio-logo.png?v=1', SIR_SRC = 'zone/narendra-sir.jpg?v=1', QR_SRC = 'zone/baio-qr.png?v=1'; /* QR opens APP_URL */
  var CH = {
    'pu1-ch2':'Biological Classification','pu1-ch3':'Plant Kingdom','pu1-ch4':'Animal Kingdom',
    'pu1-ch5':'Morphology of Flowering Plants','pu1-ch6':'Anatomy of Flowering Plants','pu1-ch7':'Structural Organisation in Animals',
    'pu1-ch8':'Cell: The Unit of Life','pu1-ch9':'Biomolecules',
    'pu2-ch1':'Sexual Reproduction in Flowering Plants','pu2-ch2':'Human Reproduction','pu2-ch3':'Reproductive Health',
    'pu2-ch4':'Principles of Inheritance and Variation','pu2-ch5':'Molecular Basis of Inheritance','pu2-ch6':'Evolution',
    'pu2-ch7':'Human Health and Disease','pu2-ch8':'Microbes in Human Welfare','pu2-ch10':'Biotechnology and its Applications',
    'pu2-ch11':'Organisms and Populations','pu2-ch12':'Ecosystem','pu2-ch13':'Biodiversity and Conservation'
  };
  var THEMES = {
    dark: { bg:['#0c2a22','#0a1f1a','#071612'], glowA:'rgba(232,186,72,0.28)', glowB:'rgba(32,190,150,0.30)', dots:'rgba(255,255,255,0.06)',
      ink:'#ffffff', sub:'#9fe3cf', dim:'#cfe9e0', gold:'#f2c14e', accent:'#7ee0c3', cardFill:'rgba(255,255,255,0.07)', cardLine:'rgba(242,193,78,0.55)',
      chipBg:'#7ee0c3', chipInk:'#0a1f1a', sirFill:'rgba(0,0,0,0.28)', sirLine:'rgba(255,255,255,0.10)', ring:'#e8ba48' },
    light: { bg:['#fffaf0','#f4fbf8','#e7f6f0'], glowA:'rgba(242,193,78,0.35)', glowB:'rgba(32,190,150,0.22)', dots:'rgba(10,60,45,0.07)',
      ink:'#0d2b23', sub:'#11806a', dim:'#3d5a52', gold:'#c98a00', accent:'#0f8f72', cardFill:'rgba(255,255,255,0.85)', cardLine:'rgba(201,138,0,0.55)',
      chipBg:'#d6f5ea', chipInk:'#0b5e4b', sirFill:'rgba(13,43,35,0.05)', sirLine:'rgba(13,43,35,0.12)', ring:'#e8ba48' }
  };
  var FONT = "Poppins, 'Segoe UI', Roboto, system-ui, sans-serif";
  var logoP = null, fontP = null;
  function img(src){ return new Promise(function(res){ var i=new Image(); i.onload=function(){res(i);}; i.onerror=function(){res(null);}; i.src=src; }); }
  function loadLogo(){ if(!logoP) logoP = Promise.all([img(LOGO_SRC),img(SIR_SRC),img(QR_SRC)]).then(function(a){ return {logo:a[0],sir:a[1],qr:a[2]}; }); return logoP; }
  function loadFont(){
    if(fontP) return fontP;
    fontP = new Promise(function(res){
      try{
        if(!document.getElementById('baioPoppins')){ var l=document.createElement('link'); l.id='baioPoppins'; l.rel='stylesheet'; l.href='https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&display=swap'; document.head.appendChild(l); }
        var to=setTimeout(res,2500);
        Promise.all(['500','600','700','800'].map(function(w){ return document.fonts.load(w+' 40px Poppins'); })).then(function(){ clearTimeout(to); res(); }, function(){ clearTimeout(to); res(); });
      }catch(e){ res(); }
    });
    return fontP;
  }
  function plain(html){ var d=document.createElement('div'); d.innerHTML=html; return (d.textContent||'').replace(/\s+/g,' ').trim(); }
  function rr(x,X,Y,W,H,R){ x.beginPath(); x.moveTo(X+R,Y); x.arcTo(X+W,Y,X+W,Y+H,R); x.arcTo(X+W,Y+H,X,Y+H,R); x.arcTo(X,Y+H,X,Y,R); x.arcTo(X,Y,X+W,Y,R); x.closePath(); }
  function wrap(x,text,maxW){ var words=text.split(' '), lines=[], cur=''; words.forEach(function(w){ var t=cur?cur+' '+w:w; if(x.measureText(t).width>maxW && cur){ lines.push(cur); cur=w; } else cur=t; }); if(cur) lines.push(cur); return lines; }
  function dateStr(){ try{ return new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short',year:'numeric',timeZone:'Asia/Kolkata'}); }catch(e){ return new Date().toDateString(); } }

  function draw(fact, theme, im){
    var logo=im&&im.logo, T=THEMES[theme], W=1080, H=1350, c=document.createElement('canvas'); c.width=W; c.height=H;
    var x=c.getContext('2d');
    var g=x.createLinearGradient(0,0,W*0.55,H); g.addColorStop(0,T.bg[0]); g.addColorStop(0.55,T.bg[1]); g.addColorStop(1,T.bg[2]); x.fillStyle=g; x.fillRect(0,0,W,H);
    var r1=x.createRadialGradient(W*0.85,-H*0.08,0,W*0.85,-H*0.08,820); r1.addColorStop(0,T.glowA); r1.addColorStop(1,'rgba(0,0,0,0)'); x.fillStyle=r1; x.fillRect(0,0,W,H);
    var r2=x.createRadialGradient(-W*0.1,H*1.1,0,-W*0.1,H*1.1,820); r2.addColorStop(0,T.glowB); r2.addColorStop(1,'rgba(0,0,0,0)'); x.fillStyle=r2; x.fillRect(0,0,W,H);
    x.fillStyle=T.dots; for(var dy=18;dy<H;dy+=36) for(var dx=18;dx<W;dx+=36){ x.beginPath(); x.arc(dx,dy,2,0,7); x.fill(); }
    var L=70, R=W-70;
    /* header: logo + brand */
    x.save(); x.shadowColor='rgba(0,0,0,0.35)'; x.shadowBlur=24; x.shadowOffsetY=8; x.beginPath(); x.arc(L+75,127,81,0,7); x.fillStyle=T.ring; x.fill(); x.restore();
    if(logo){ x.save(); x.beginPath(); x.arc(L+75,127,75,0,7); x.clip(); x.drawImage(logo,L,52,150,150); x.restore(); }
    else { x.beginPath(); x.arc(L+75,127,75,0,7); x.fillStyle='#fff'; x.fill(); x.fillStyle='#14324a'; x.font='800 54px '+FONT; x.textAlign='center'; x.fillText('BAIO',L+75,145); x.textAlign='left'; }
    x.textBaseline='alphabetic';
    x.font='800 50px '+FONT; x.fillStyle=T.ink; x.fillText('BAIO',L+176,124); var bw=x.measureText('BAIO ').width; x.fillStyle=T.gold; x.fillText('Learning System',L+176+bw,124);
    x.font='500 23px '+FONT; x.fillStyle=T.sub; x.fillText('Biology All In One · Maximum Results. Zero Wasted Effort.',L+176,165);
    /* tag + date */
    var tg=x.createLinearGradient(L,0,L+480,0); tg.addColorStop(0,'#f2c14e'); tg.addColorStop(1,'#ff9f43');
    rr(x,L,242,482,74,37); x.fillStyle=tg; x.fill();
    x.font='800 30px '+FONT; x.fillStyle='#1b1300'; if('letterSpacing' in x) x.letterSpacing='3px'; x.fillText('💡 BIO FACT OF THE DAY',L+30,290); if('letterSpacing' in x) x.letterSpacing='0px';
    x.font='500 24px '+FONT; x.fillStyle=T.dim; x.textAlign='right'; x.fillText(dateStr(),R,288); x.textAlign='left';
    /* fact card */
    var cy=344, ch=440;
    rr(x,L,cy,R-L,ch,40); x.fillStyle=T.cardFill; x.fill(); x.lineWidth=2; x.strokeStyle=T.cardLine; x.stroke();
    x.save(); x.globalAlpha=0.85; x.font='700 200px Georgia, serif'; x.fillStyle=T.gold; x.textAlign='right'; x.fillText('”',R-40,cy+165); x.restore();
    x.font='700 30px '+FONT; x.fillStyle=T.accent; x.fillText('DID YOU KNOW?',L+66,cy+92);
    var text=plain(fact.t), chap=CH[fact.c]||'', maxW=R-L-132, top=cy+118, bottom=cy+ch-(chap?100:44), size=56, lines, lh;
    for(;size>=28;size-=2){ x.font='700 '+size+'px '+FONT; lines=wrap(x,text,maxW); lh=Math.round(size*1.26); if(lines.length*lh<=bottom-top) break; }
    x.fillStyle=T.ink; var ty=top+size; lines.forEach(function(ln,i){ x.fillText(ln,L+66,ty+i*lh); });
    if(chap){
      var label=(fact.c.indexOf('pu1')===0?'I PUC':'II PUC')+' · '+chap; x.font='600 24px '+FONT; var lw=x.measureText(label).width+44;
      rr(x,L+66,cy+ch-84,Math.min(lw,R-L-132),50,25); x.fillStyle=T.chipBg; x.fill(); x.fillStyle=T.chipInk; x.fillText(label,L+88,cy+ch-50);
    }
    /* Narendra Sir with photo */
    var sy=cy+ch+22, sh=176, pr=66, pcx=L+24+pr, pcy=sy+sh/2;
    rr(x,L,sy,R-L,sh,28); x.fillStyle=T.sirFill; x.fill(); x.lineWidth=1.5; x.strokeStyle=T.sirLine; x.stroke();
    var av=x.createLinearGradient(pcx-pr,pcy-pr,pcx+pr,pcy+pr); av.addColorStop(0,'#f2c14e'); av.addColorStop(1,'#ff9f43');
    x.beginPath(); x.arc(pcx,pcy,pr+5,0,7); x.fillStyle=av; x.fill();
    if(im&&im.sir){ x.save(); x.beginPath(); x.arc(pcx,pcy,pr,0,7); x.clip(); x.drawImage(im.sir,pcx-pr,pcy-pr,pr*2,pr*2); x.restore(); }
    else { x.font='60px '+FONT; x.textAlign='center'; x.fillText('🧬',pcx,pcy+20); x.textAlign='left'; }
    var tx=pcx+pr+28;
    x.font='800 38px '+FONT; x.fillStyle=T.ink; x.fillText('Narendra Sir',tx,sy+62);
    x.font='500 23px '+FONT; x.fillStyle=T.dim; x.fillText('M.Sc Biochemistry · B.Ed · KSET (Life Science)',tx,sy+104); x.fillText('Biology Lecturer · Founder/CEO, BAIO Learning System',tx,sy+138);
    /* call to action + QR */
    var ay=sy+sh+20, ah=194, qw=194, cw=R-L-qw-18, ag=x.createLinearGradient(L,0,L+cw,0); ag.addColorStop(0,'#20be96'); ag.addColorStop(1,'#13a37f');
    rr(x,L,ay,cw,ah,28); x.fillStyle=ag; x.fill();
    x.font='800 42px '+FONT; x.fillStyle='#ffffff'; x.fillText('🚀 Join BAIO today!',L+34,ay+62);
    x.font='700 29px '+FONT; x.fillStyle='#fff6d6'; x.fillText('Learn Biology the smart way',L+34,ay+108);
    x.font='500 21px '+FONT; x.fillStyle='#e6fff7'; x.fillText('Daily challenges · NEET/KCET practice',L+34,ay+146); x.fillText('notes · reels – free to start  👉 scan the QR',L+34,ay+174);
    var qx=R-qw; rr(x,qx,ay,qw,ah,24); x.fillStyle='#ffffff'; x.fill(); x.lineWidth=3; x.strokeStyle='#f2c14e'; x.stroke();
    if(im&&im.qr){ x.imageSmoothingEnabled=false; x.drawImage(im.qr,qx+24,ay+14,146,146); x.imageSmoothingEnabled=true; }
    x.font='800 19px '+FONT; x.fillStyle='#0d2b23'; x.textAlign='center'; x.fillText('SCAN TO JOIN',qx+qw/2,ay+182); x.textAlign='left';
    /* socials */
    var so=[['ig','IG','@new_gen_bioguru'],['yt','▶','@biogurunarendrasir'],['tg','✈','t.me/BAIO_Learning_System'],['wa','✆','BAIO WhatsApp Channel']];
    var col={ig:null,yt:'#e53935',tg:'#29a9eb',wa:'#25d366'};
    so.forEach(function(s,i){
      var sx=L+(i%2)*483, syy=ay+ah+18+Math.floor(i/2)*54;
      rr(x,sx,syy,44,44,12);
      if(s[0]==='ig'){ var ig=x.createLinearGradient(sx,syy+44,sx+44,syy); ig.addColorStop(0,'#f9a825'); ig.addColorStop(0.5,'#e91e63'); ig.addColorStop(1,'#8e24aa'); x.fillStyle=ig; } else x.fillStyle=col[s[0]];
      x.fill(); x.fillStyle='#fff'; x.font='800 20px '+FONT; x.textAlign='center'; x.fillText(s[1],sx+22,syy+30); x.textAlign='left';
      x.font='600 24px '+FONT; x.fillStyle=T.ink; x.fillText(s[2],sx+58,syy+31);
    });
    return c;
  }

  function toBlob(c){ return new Promise(function(res){ c.toBlob(function(b){ res(b); },'image/png'); }); }
  function css(){
    if(document.getElementById('fcCss')) return;
    var s=document.createElement('style'); s.id='fcCss';
    s.textContent='.fc-ov{position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,.62);display:flex;align-items:flex-end;justify-content:center}'+
      '.fc-sh{width:100%;max-width:560px;max-height:94vh;overflow:auto;background:#10261f;color:#fff;border-radius:22px 22px 0 0;padding:18px 16px 22px;font-family:system-ui,sans-serif}'+
      '[data-theme="light"] .fc-sh{background:#fffdf7;color:#14302a}'+
      '.fc-h{display:flex;justify-content:space-between;align-items:center;font-weight:700;font-size:17px;margin-bottom:12px}'+
      '.fc-x{background:none;border:0;color:inherit;font-size:26px;cursor:pointer;line-height:1}'+
      '.fc-pick{display:grid;grid-template-columns:1fr 1fr;gap:12px}'+
      '.fc-opt{border:3px solid transparent;border-radius:14px;padding:0;background:none;cursor:pointer;color:inherit;font:inherit;text-align:center}'+
      '.fc-opt.on{border-color:#f2c14e}.fc-opt img{display:block;width:100%;border-radius:11px}.fc-opt span{display:block;font-size:13px;font-weight:700;padding:6px 0 4px}'+
      '.fc-load{grid-column:1/-1;text-align:center;padding:40px 0;opacity:.8}'+
      '.fc-btns{display:flex;gap:10px;margin-top:14px}.fc-btns button{flex:1;padding:13px;border-radius:12px;border:0;font-weight:700;font-size:15px;cursor:pointer}'+
      '.fc-go{background:linear-gradient(90deg,#f2c14e,#ff9f43);color:#1b1300}.fc-dl{background:rgba(127,127,127,.18);color:inherit}';
    document.head.appendChild(s);
  }
  window.baioFactCanvas = function(fact, theme){ return Promise.all([loadLogo(),loadFont()]).then(function(r){ return draw(fact, theme, r[0]); }); };
  window.baioFactShare = function(fact){
    css();
    var pref='dark'; try{ pref=localStorage.getItem('baio_fact_card_theme')||((localStorage.getItem('baio_theme')||'light')==='light'?'light':'dark'); }catch(e){}
    var ov=document.createElement('div'); ov.className='fc-ov';
    ov.innerHTML='<div class="fc-sh" role="dialog" aria-label="Share fact"><div class="fc-h"><span>📤 Share today\'s fact</span><button class="fc-x" aria-label="Close">×</button></div>'+
      '<div class="fc-pick"><div class="fc-load">Making your picture…</div></div>'+
      '<div class="fc-btns"><button class="fc-go" disabled>Share picture</button><button class="fc-dl" disabled>⬇ Save</button></div></div>';
    document.body.appendChild(ov);
    function close(){ ov.remove(); }
    ov.addEventListener('click',function(e){ if(e.target===ov) close(); });
    ov.querySelector('.fc-x').onclick=close;
    var canv={}, sel=pref, pick=ov.querySelector('.fc-pick');
    Promise.all([loadLogo(),loadFont()]).then(function(r){
      canv.dark=draw(fact,'dark',r[0]); canv.light=draw(fact,'light',r[0]);
      pick.innerHTML=['dark','light'].map(function(t){ return '<button type="button" class="fc-opt'+(t===sel?' on':'')+'" data-t="'+t+'"><img alt="'+t+' theme" src="'+canv[t].toDataURL('image/jpeg',0.8)+'"><span>'+(t==='dark'?'🌙 Dark':'☀️ Light')+'</span></button>'; }).join('');
      pick.querySelectorAll('.fc-opt').forEach(function(b){ b.onclick=function(){ sel=b.getAttribute('data-t'); try{ localStorage.setItem('baio_fact_card_theme',sel); }catch(e){} pick.querySelectorAll('.fc-opt').forEach(function(o){ o.classList.toggle('on',o===b); }); }; });
      ov.querySelector('.fc-go').disabled=false; ov.querySelector('.fc-dl').disabled=false;
    });
    var txt='💡 Bio Fact of the Day: '+plain(fact.t)+'\n\nLearn Biology the smart way with Narendra Sir – join BAIO Learning System 👇\n'+APP_URL;
    ov.querySelector('.fc-go').onclick=function(){
      toBlob(canv[sel]).then(function(b){
        var file=new File([b],'BAIO_Fact_of_the_Day.png',{type:'image/png'});
        if(navigator.canShare && navigator.canShare({files:[file]})){ navigator.share({files:[file],text:txt}).catch(function(){}); }
        else if(navigator.share){ navigator.share({text:txt}).catch(function(){}); }
        else window.open('https://wa.me/?text='+encodeURIComponent(txt),'_blank','noopener');
      });
    };
    ov.querySelector('.fc-dl').onclick=function(){ var a=document.createElement('a'); a.href=canv[sel].toDataURL('image/png'); a.download='BAIO_Fact_of_the_Day_'+sel+'.png'; document.body.appendChild(a); a.click(); a.remove(); };
  };
})();
