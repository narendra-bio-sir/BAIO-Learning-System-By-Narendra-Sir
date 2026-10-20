/* BAIO "Bio Fact of the Day" share card.
   window.baioFactShare(fact) opens a sheet with Dark and Light versions of a
   1080x1350 social-media picture (logo, brand, fact, Narendra Sir's credentials,
   a "Join BAIO" call to action and social handles). The student picks a theme
   and shares the picture (Web Share with files) or downloads it.
   fact = {t: 'text (may contain simple HTML)', c: 'pu2-ch3'} */
(function(){
  var APP_URL = 'https://narendra-bio-sir.github.io/BAIO-Learning-System-By-Narendra-Sir/';
  var LOGO_SRC = 'zone/baio-logo.png?v=2', SIR_SRC = 'zone/narendra-sir.jpg?v=1', QR_SRC = 'zone/baio-qr.png?v=2'; /* QR opens APP_URL */
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

  /* Real platform icons (Simple Icons, CC0 licence; 24x24 paths) */
  var ICON = {"instagram": "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077", "youtube": "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z", "telegram": "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z", "whatsapp": "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"};
  function drawIcon(x,k,X,Y,S){
    if(typeof Path2D==='undefined'){ x.beginPath(); x.arc(X+S/2,Y+S/2,S/2,0,7); x.fillStyle={ig:'#E4405F',yt:'#FF0000',tg:'#26A5E4',wa:'#25D366'}[k]; x.fill(); return; }
    var sc=S/24; x.save(); x.translate(X,Y);
    /* white backing so the logo's cut-outs (play arrow, plane, phone) show white like the real logos */
    x.fillStyle='#ffffff';
    if(k==='yt'){ x.fillRect(S*0.3,S*0.3,S*0.45,S*0.4); }
    else if(k==='tg'||k==='wa'){ x.beginPath(); x.arc(S/2,S/2,S*0.44,0,7); x.fill(); }
    else if(k==='ig'){ rr(x,0,0,S,S,S*0.28); x.fill(); }
    x.scale(sc,sc);
    var path=new Path2D({ig:ICON.instagram,yt:ICON.youtube,tg:ICON.telegram,wa:ICON.whatsapp}[k]);
    if(k==='ig'){ var g=x.createLinearGradient(0,24,24,0); g.addColorStop(0,'#FEDA75'); g.addColorStop(0.3,'#FA7E1E'); g.addColorStop(0.55,'#D62976'); g.addColorStop(0.8,'#962FBF'); g.addColorStop(1,'#4F5BD5'); x.fillStyle=g; }
    else x.fillStyle={yt:'#FF0000',tg:'#26A5E4',wa:'#25D366'}[k];
    x.fill(path);
    x.restore();
  }
  function draw(fact, theme, im){
    var logo=im&&im.logo, T=THEMES[theme], W=1080, H=1350, c=document.createElement('canvas'); c.width=W; c.height=H;
    var x=c.getContext('2d');
    var g=x.createLinearGradient(0,0,W*0.55,H); g.addColorStop(0,T.bg[0]); g.addColorStop(0.55,T.bg[1]); g.addColorStop(1,T.bg[2]); x.fillStyle=g; x.fillRect(0,0,W,H);
    var r1=x.createRadialGradient(W*0.85,-H*0.08,0,W*0.85,-H*0.08,820); r1.addColorStop(0,T.glowA); r1.addColorStop(1,'rgba(0,0,0,0)'); x.fillStyle=r1; x.fillRect(0,0,W,H);
    var r2=x.createRadialGradient(-W*0.1,H*1.1,0,-W*0.1,H*1.1,820); r2.addColorStop(0,T.glowB); r2.addColorStop(1,'rgba(0,0,0,0)'); x.fillStyle=r2; x.fillRect(0,0,W,H);
    x.fillStyle=T.dots; for(var dy=18;dy<H;dy+=36) for(var dx=18;dx<W;dx+=36){ x.beginPath(); x.arc(dx,dy,2,0,7); x.fill(); }
    var L=70, R=W-70;
    /* header: logo + brand */
    x.save(); x.shadowColor='rgba(0,0,0,0.30)'; x.shadowBlur=22; x.shadowOffsetY=8; rr(x,L+2,54,146,146,36); x.fillStyle='#ffffff'; x.fill(); x.restore();
    if(logo){ x.save(); rr(x,L+8,60,134,134,30); x.clip(); x.drawImage(logo,L+8,60,134,134); x.restore(); }
    else { rr(x,L+8,60,134,134,30); x.fillStyle='#118c75'; x.fill(); x.fillStyle='#fff'; x.font='800 84px Georgia, serif'; x.textAlign='center'; x.fillText('B',L+75,157); x.textAlign='left'; }
    x.textBaseline='alphabetic';
    x.font='800 50px '+FONT; x.fillStyle=T.ink; x.fillText('BAIO',L+176,124); var bw=x.measureText('BAIO ').width; x.fillStyle=T.gold; x.fillText('Learning System',L+176+bw,124);
    x.font='500 23px '+FONT; x.fillStyle=T.sub; x.fillText('Biology All In One · Learn. Analyse. Improve. Achieve.',L+176,165);
    /* tag + date */
    var tg=x.createLinearGradient(L,0,L+480,0); tg.addColorStop(0,'#f2c14e'); tg.addColorStop(1,'#ff9f43');
    rr(x,L,242,482,74,37); x.fillStyle=tg; x.fill();
    x.font='800 30px '+FONT; x.fillStyle='#1b1300'; if('letterSpacing' in x) x.letterSpacing='3px'; x.fillText('💡 BIO FACT OF THE DAY',L+30,290); if('letterSpacing' in x) x.letterSpacing='0px';
    x.font='500 24px '+FONT; x.fillStyle=T.dim; x.textAlign='right'; x.fillText(dateStr(),R,288); x.textAlign='left';
    /* fact card */
    var cy=344, ch=440;
    rr(x,L,cy,R-L,ch,40); x.fillStyle=T.cardFill; x.fill(); x.lineWidth=2; x.strokeStyle=T.cardLine; x.stroke();
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
    /* fill the whole green box: each line is sized to the box width */
    function fit(t,w,max,min){ var z=max; for(;z>min;z--){ x.font=w+' '+z+'px '+FONT; if(x.measureText(t).width<=cw-60) break; } return z; }
    fit('🚀 Join BAIO today!','800',52,36); x.fillStyle='#ffffff'; x.fillText('🚀 Join BAIO today!',L+30,ay+60);
    fit('Learn Biology the smart way','700',38,26); x.fillStyle='#fff6d6'; x.fillText('Learn Biology the smart way',L+30,ay+110);
    fit('Daily challenges · NEET/KCET practice · notes','500',26,18); x.fillStyle='#e6fff7'; x.fillText('Daily challenges · NEET/KCET practice · notes',L+30,ay+148);
    fit('reels – free to start  👉 scan the QR','700',26,18); x.fillStyle='#ffffff'; x.fillText('reels – free to start  👉 scan the QR',L+30,ay+180);
    var qx=R-qw; rr(x,qx,ay,qw,ah,24); x.fillStyle='#ffffff'; x.fill(); x.lineWidth=3; x.strokeStyle='#f2c14e'; x.stroke();
    if(im&&im.qr){ x.save(); rr(x,qx+4,ay+4,qw-8,qw-30,20); x.clip(); x.drawImage(im.qr,qx+12,ay+2,qw-24,qw-24); x.restore(); }
    x.font='800 19px '+FONT; x.fillStyle='#0d2b23'; x.textAlign='center'; x.fillText('SCAN TO JOIN',qx+qw/2,ay+186); x.textAlign='left';
    /* socials */
    var so=[['ig','@new_gen_bioguru'],['yt','@biogurunarendrasir'],['tg','t.me/BAIO_Learning_System'],['wa','BioGuru Narendra Sir']];
    so.forEach(function(s,i){
      var sx=L+(i%2)*483, syy=ay+ah+18+Math.floor(i/2)*54;
      drawIcon(x,s[0],sx,syy,44);
      x.font='600 24px '+FONT; x.fillStyle=T.ink; x.fillText(s[1],sx+58,syy+31);
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
    var txt='Learn Biology the smart way with Narendra Sir – join BAIO Learning System 👇\n'+APP_URL;
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
