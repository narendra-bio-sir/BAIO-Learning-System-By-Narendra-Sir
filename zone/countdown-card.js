/* BAIO "Exam Countdown" share sheet.
   window.baioCountdownShare(s) opens a sheet where the student picks a format (Post 1080x1350 or
   Status 1080x1920) and a language (English / ಕನ್ನಡ / हिंदी). The picture is drawn live with THEIR
   days left, class and today's chapter, and shared together with a ready caption and the app link
   (Web Share with files), or saved / sent as text on WhatsApp / caption copied.
   s = {cls: 1|2|0, days: number|null, chap: 'Biomolecules', provisional: bool} */
(function(){
  var APP_URL = 'https://narendra-bio-sir.github.io/BAIO-Learning-System-By-Narendra-Sir/';
  var LOGO_SRC = 'zone/baio-logo.png?v=2';
  var GOLD='#D4AF37', GOLD1='#E9C45A', GOLD2='#B8912A', NAVY='#14203A', TEAL='#2DD4BF';
  var F = {
    head: "'Space Grotesk', Inter, sans-serif",
    en: "Inter, 'Noto Sans Kannada', 'Noto Sans Devanagari', sans-serif",
    kn: "'Noto Sans Kannada', Inter, sans-serif",
    hi: "'Noto Sans Devanagari', Inter, sans-serif"
  };
  var TX = {
    en: { label:'English', tag:'NEW ON HOME', h1:['Your exam has a date.','Now you have a plan.'], h1b:['Boards are coming.','Start the countdown today.'],
      cd:'EXAM COUNTDOWN', set:'Set your date', left:'days left', noDays:'Set date',
      exam:['Biology exam','I PUC Biology exam','II PUC Biology exam'], prov:'15 Mar 2027 (provisional)',
      plan:['Today: revise ',' → Daily 5 → Quick card'],
      feats:[['Picks your weak chapter',' from your Daily 5 scores'],['7 pm reminder',' so you never miss a day'],['Daily 5 + Quick card',': 3 minutes a day'],['Chapter tests',', Guess It & Memes']],
      free:'Free on the BAIO app', how:'Open the app → Home → Exam Countdown', sir:'Narendra Sir', role:'Biology Lecturer · Founder & CEO, BAIO',
      sIn:'BIOLOGY EXAM IN', sQ:['Is your plan','ready?'], steps:['Set your exam date',"Follow today's plan: chapter → Daily 5 → Quick card",'Turn on the 7 pm reminder'],
      cap:function(s){ return (s.days!=null?'📅 '+s.days+' days to my '+(s.cls===2?'II PUC':'I PUC')+' Biology exam, and I have a plan for every day!':'📅 Biology exam coming up? Get a plan for every day!')+
        ' BAIO\'s Exam Countdown picks my weak chapter → Daily 5 → Quick card, with a 7 pm reminder. Free for all I PUC & II PUC students. Try it 👇\n'+APP_URL+'\n— Narendra Sir, BAIO Learning System'; },
      ui:{title:'📤 Share your exam countdown', post:'Post', status:'Status', caption:'Caption (you can edit it)', share:'Share picture + caption', save:'⬇ Save picture', copy:'📋 Copy caption', wa:'💬 WhatsApp text', copied:'✅ Caption copied', making:'Making your picture…'} },
    kn: { label:'ಕನ್ನಡ', tag:'ಹೊಸತು', h1:['ಪರೀಕ್ಷೆಗೆ ದಿನಾಂಕ ಇದೆ.','ಈಗ ಯೋಜನೆಯೂ ಇದೆ.'], h1b:['ಬೋರ್ಡ್ ಪರೀಕ್ಷೆ ಬರುತ್ತಿದೆ.','ಇಂದೇ ಕೌಂಟ್‌ಡೌನ್ ಆರಂಭಿಸಿ.'],
      cd:'ಪರೀಕ್ಷೆ ಕೌಂಟ್‌ಡೌನ್', set:'ದಿನಾಂಕ ಆರಿಸಿ', left:'ದಿನ ಬಾಕಿ', noDays:'ದಿನಾಂಕ',
      exam:['ಜೀವಶಾಸ್ತ್ರ ಪರೀಕ್ಷೆ','ಪ್ರಥಮ ಪಿಯುಸಿ ಜೀವಶಾಸ್ತ್ರ ಪರೀಕ್ಷೆ','ದ್ವಿತೀಯ ಪಿಯುಸಿ ಜೀವಶಾಸ್ತ್ರ ಪರೀಕ್ಷೆ'], prov:'15 ಮಾರ್ಚ್ 2027 (ತಾತ್ಕಾಲಿಕ)',
      plan:['ಇಂದು: ',' ಪುನರಾವರ್ತಿಸಿ → Daily 5 → Quick card'],
      feats:[['ದುರ್ಬಲ ಅಧ್ಯಾಯ','ವನ್ನು ನಿಮ್ಮ Daily 5 ಅಂಕಗಳಿಂದ ಆರಿಸುತ್ತದೆ'],['ಸಂಜೆ 7 ಗಂಟೆಗೆ ನೆನಪೋಲೆ',': ಒಂದು ದಿನವೂ ತಪ್ಪದು'],['Daily 5 + Quick card',': ದಿನಕ್ಕೆ ಕೇವಲ 3 ನಿಮಿಷ'],['ಅಧ್ಯಾಯ ಪರೀಕ್ಷೆಗಳು',', Guess It ಮತ್ತು Memes']],
      free:'BAIO ಆ್ಯಪ್‌ನಲ್ಲಿ ಉಚಿತ', how:'ಆ್ಯಪ್ ತೆರೆಯಿರಿ → Home → Exam Countdown', sir:'ನರೇಂದ್ರ ಸರ್', role:'ಜೀವಶಾಸ್ತ್ರ ಉಪನ್ಯಾಸಕರು · Founder & CEO, BAIO',
      sIn:'ಜೀವಶಾಸ್ತ್ರ ಪರೀಕ್ಷೆಗೆ', sQ:['ನಿಮ್ಮ ಯೋಜನೆ','ಸಿದ್ಧವೇ?'], steps:['ಪರೀಕ್ಷೆಯ ದಿನಾಂಕ ಆರಿಸಿ','ಇಂದಿನ ಯೋಜನೆ: ಅಧ್ಯಾಯ → Daily 5 → Quick card','ಸಂಜೆ 7 ಗಂಟೆಯ ನೆನಪೋಲೆ ಆನ್ ಮಾಡಿ'],
      cap:function(s){ return (s.days!=null?'📅 ನನ್ನ '+(s.cls===2?'II PUC':'I PUC')+' ಜೀವಶಾಸ್ತ್ರ ಪರೀಕ್ಷೆಗೆ ಇನ್ನು '+s.days+' ದಿನ, ಪ್ರತಿದಿನಕ್ಕೂ ಯೋಜನೆ ಸಿದ್ಧ!':'📅 ಜೀವಶಾಸ್ತ್ರ ಪರೀಕ್ಷೆ ಹತ್ತಿರವಿದೆಯೇ? ಪ್ರತಿದಿನಕ್ಕೂ ಯೋಜನೆ ಪಡೆಯಿರಿ!')+
        ' BAIO ಆ್ಯಪ್‌ನ Exam Countdown ದುರ್ಬಲ ಅಧ್ಯಾಯ → Daily 5 → Quick card ತೋರಿಸುತ್ತದೆ, ಜೊತೆಗೆ ಸಂಜೆ 7 ಗಂಟೆಗೆ ನೆನಪೋಲೆ. ಎಲ್ಲಾ I PUC ಮತ್ತು II PUC ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಉಚಿತ. ಪ್ರಯತ್ನಿಸಿ 👇\n'+APP_URL+'\n— ನರೇಂದ್ರ ಸರ್, BAIO Learning System'; },
      ui:{title:'📤 ನಿಮ್ಮ ಪರೀಕ್ಷೆ ಕೌಂಟ್‌ಡೌನ್ ಹಂಚಿ', post:'ಪೋಸ್ಟ್', status:'ಸ್ಟೇಟಸ್', caption:'ಶೀರ್ಷಿಕೆ (ಬದಲಾಯಿಸಬಹುದು)', share:'ಚಿತ್ರ + ಶೀರ್ಷಿಕೆ ಹಂಚಿ', save:'⬇ ಚಿತ್ರ ಉಳಿಸಿ', copy:'📋 ಶೀರ್ಷಿಕೆ ಕಾಪಿ', wa:'💬 WhatsApp ಸಂದೇಶ', copied:'✅ ಕಾಪಿ ಆಯಿತು', making:'ಚಿತ್ರ ತಯಾರಾಗುತ್ತಿದೆ…'} },
    hi: { label:'हिंदी', tag:'नया', h1:['परीक्षा की तारीख़ तय है।','अब प्लान भी तैयार है।'], h1b:['बोर्ड परीक्षा आ रही है।','आज से काउंटडाउन शुरू करो।'],
      cd:'परीक्षा काउंटडाउन', set:'अपनी तारीख़ चुनो', left:'दिन बाकी', noDays:'तारीख़',
      exam:['बायोलॉजी परीक्षा','I PUC बायोलॉजी परीक्षा','II PUC बायोलॉजी परीक्षा'], prov:'15 मार्च 2027 (अस्थायी)',
      plan:['आज: ',' दोहराओ → Daily 5 → Quick card'],
      feats:[['कमज़ोर अध्याय',' तुम्हारे Daily 5 स्कोर से चुनता है'],['शाम 7 बजे रिमाइंडर',': एक भी दिन मत छोड़ो'],['Daily 5 + Quick card',': रोज़ सिर्फ़ 3 मिनट'],['अध्याय टेस्ट',', Guess It और Memes']],
      free:'BAIO ऐप पर मुफ़्त', how:'ऐप खोलो → Home → Exam Countdown', sir:'नरेंद्र सर', role:'बायोलॉजी लेक्चरर · Founder & CEO, BAIO',
      sIn:'बायोलॉजी परीक्षा में', sQ:['तुम्हारा प्लान','तैयार है?'], steps:['अपनी परीक्षा की तारीख़ चुनो','आज का प्लान: अध्याय → Daily 5 → Quick card','शाम 7 बजे का रिमाइंडर चालू करो'],
      cap:function(s){ return (s.days!=null?'📅 मेरी '+(s.cls===2?'II PUC':'I PUC')+' बायोलॉजी परीक्षा में '+s.days+' दिन बाकी हैं, और हर दिन का प्लान तैयार है!':'📅 बायोलॉजी परीक्षा नज़दीक है? हर दिन का प्लान पाओ!')+
        ' BAIO ऐप का Exam Countdown कमज़ोर अध्याय → Daily 5 → Quick card बताता है, साथ में शाम 7 बजे रिमाइंडर। सभी I PUC और II PUC छात्रों के लिए मुफ़्त। आज़माओ 👇\n'+APP_URL+'\n— नरेंद्र सर, BAIO Learning System'; },
      ui:{title:'📤 अपना परीक्षा काउंटडाउन शेयर करो', post:'पोस्ट', status:'स्टेटस', caption:'कैप्शन (बदल सकते हो)', share:'चित्र + कैप्शन शेयर करो', save:'⬇ चित्र सेव करो', copy:'📋 कैप्शन कॉपी', wa:'💬 WhatsApp संदेश', copied:'✅ कॉपी हुआ', making:'चित्र बन रहा है…'} }
  };

  var fontP=null, logoP=null;
  function loadFonts(){
    if(fontP) return fontP;
    fontP=new Promise(function(res){
      try{
        if(!document.getElementById('baioCdFonts')){ var l=document.createElement('link'); l.id='baioCdFonts'; l.rel='stylesheet';
          l.href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@700&family=Inter:wght@500;600;700;800&family=Noto+Sans+Kannada:wght@500;700;800&family=Noto+Sans+Devanagari:wght@500;700;800&display=swap'; document.head.appendChild(l); }
        var to=setTimeout(res,3000);
        Promise.all(['700 40px "Space Grotesk"','800 40px Inter','500 40px Inter','700 40px "Noto Sans Kannada"','500 40px "Noto Sans Kannada"','700 40px "Noto Sans Devanagari"','500 40px "Noto Sans Devanagari"'].map(function(f){ return document.fonts.load(f,'Aಕक'); })).then(function(){ clearTimeout(to); res(); },function(){ clearTimeout(to); res(); });
      }catch(e){ res(); }
    });
    return fontP;
  }
  function loadLogo(){ if(!logoP) logoP=new Promise(function(res){ var i=new Image(); i.onload=function(){ res(i); }; i.onerror=function(){ res(null); }; i.src=LOGO_SRC; }); return logoP; }
  function rr(x,X,Y,W,H,R){ x.beginPath(); x.moveTo(X+R,Y); x.arcTo(X+W,Y,X+W,Y+H,R); x.arcTo(X+W,Y+H,X,Y+H,R); x.arcTo(X,Y+H,X,Y,R); x.arcTo(X,Y,X+W,Y,R); x.closePath(); }
  function wrap(x,text,maxW){ var words=String(text).split(' '), lines=[], cur=''; words.forEach(function(w){ var t=cur?cur+' '+w:w; if(x.measureText(t).width>maxW&&cur){ lines.push(cur); cur=w; } else cur=t; }); if(cur) lines.push(cur); return lines; }
  function fitFont(x,text,weight,max,min,fam,maxW){ var z=max; for(;z>min;z--){ x.font=weight+' '+z+'px '+fam; if(x.measureText(text).width<=maxW) break; } return z; }
  function bg(x,W,H,cx,cy){ x.fillStyle='#0B1A14'; x.fillRect(0,0,W,H); var g=x.createRadialGradient(cx,cy,0,cx,cy,Math.max(W,H)*0.75); g.addColorStop(0,'#234433'); g.addColorStop(0.55,'#0B1A14'); g.addColorStop(1,'#07110D'); x.fillStyle=g; x.fillRect(0,0,W,H); }
  function brand(x,L,Y,logo){
    if(logo){ x.save(); rr(x,L,Y,64,64,18); x.fillStyle='#fff'; x.fill(); rr(x,L+3,Y+3,58,58,15); x.clip(); x.drawImage(logo,L+3,Y+3,58,58); x.restore(); }
    else { var g=x.createLinearGradient(L,Y,L+64,Y+64); g.addColorStop(0,GOLD1); g.addColorStop(1,GOLD2); rr(x,L,Y,64,64,18); x.fillStyle=g; x.fill(); x.fillStyle=NAVY; x.font='800 36px '+F.head; x.textAlign='center'; x.fillText('B',L+32,Y+45); x.textAlign='left'; }
    x.font='700 22px Inter, sans-serif'; x.fillStyle=GOLD; if('letterSpacing' in x) x.letterSpacing='3px'; x.fillText('BAIO LEARNING SYSTEM',L+82,Y+40); if('letterSpacing' in x) x.letterSpacing='0px';
  }
  /* small stroke icons (24-unit paths) */
  var IC={
    target:function(x){ x.beginPath(); x.arc(12,12,9,0,7); x.stroke(); x.beginPath(); x.arc(12,12,5,0,7); x.stroke(); x.beginPath(); x.arc(12,12,1.5,0,7); x.stroke(); },
    bell:function(x){ if(typeof Path2D==='undefined') return; x.stroke(new Path2D('M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9')); x.stroke(new Path2D('M10.3 21a1.94 1.94 0 0 0 3.4 0')); },
    bolt:function(x){ if(typeof Path2D==='undefined') return; x.stroke(new Path2D('M13 2 4 14h7l-1 8 9-12h-7l1-8z')); },
    check:function(x){ if(typeof Path2D==='undefined') return; x.stroke(new Path2D('M9 11l3 3L22 4')); x.stroke(new Path2D('M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11')); },
    cal:function(x){ rr(x,3,4.5,18,16,2.5); x.stroke(); x.beginPath(); x.moveTo(8,2.5); x.lineTo(8,6.5); x.moveTo(16,2.5); x.lineTo(16,6.5); x.moveTo(3,10); x.lineTo(21,10); x.stroke(); }
  };
  function icon(x,k,X,Y,S,col){ x.save(); x.translate(X,Y); x.scale(S/24,S/24); x.strokeStyle=col; x.lineWidth=2; x.lineCap='round'; x.lineJoin='round'; IC[k](x); x.restore(); }

  function drawPost(s,lang,logo){
    var t=TX[lang], fam=F[lang], W=1080, H=1350, c=document.createElement('canvas'); c.width=W; c.height=H; var x=c.getContext('2d');
    bg(x,W,H,W*0.85,0); var L=76, R=W-76;
    brand(x,L,72,logo);
    x.font='700 '+(lang==='en'?20:24)+'px '+fam; var tw=x.measureText(t.tag).width+44; rr(x,R-tw,78,tw,52,26); x.lineWidth=2; x.strokeStyle=TEAL; x.stroke(); x.fillStyle=TEAL; x.textAlign='center'; x.fillText(t.tag,R-tw/2,112); x.textAlign='left';
    /* headline */
    var h=s.cls===2?t.h1b:t.h1, hs=lang==='en'?88:78, hf=lang==='en'?F.head:fam, hw=lang==='en'?700:800;
    hs=Math.min(fitFont(x,h[0],hw,hs,40,hf,R-L),fitFont(x,h[1],hw,hs,40,hf,R-L)); x.font=hw+' '+hs+'px '+hf;
    x.fillStyle='#fff'; x.fillText(h[0],L,198+hs); x.fillStyle=GOLD; x.fillText(h[1],L,198+hs*2.1);
    /* countdown card */
    var cy=440, ch=330; x.save(); x.shadowColor='rgba(0,0,0,.35)'; x.shadowBlur=50; x.shadowOffsetY=24; rr(x,L,cy,R-L,ch,36); x.fillStyle='#12251C'; x.fill(); x.restore();
    rr(x,L,cy,R-L,ch,36); x.lineWidth=2; x.strokeStyle='rgba(212,175,55,.35)'; x.stroke();
    icon(x,'cal',L+40,cy+38,30,TEAL); x.font='700 '+(lang==='en'?24:28)+'px '+fam; x.fillStyle=TEAL; if(lang==='en'&&'letterSpacing' in x) x.letterSpacing='3px'; x.fillText(t.cd,L+84,cy+64); if('letterSpacing' in x) x.letterSpacing='0px';
    x.font='600 22px '+fam; var sw=x.measureText(t.set).width+44; rr(x,R-40-sw,cy+34,sw,48,24); x.lineWidth=1.5; x.strokeStyle='rgba(244,241,230,.25)'; x.stroke(); x.fillStyle='#F4F1E6'; x.textAlign='center'; x.fillText(t.set,R-40-sw/2,cy+66); x.textAlign='left';
    var tx=L+40, ty=cy+100, tW=240, tH=200, g=x.createLinearGradient(tx,ty,tx+tW,ty+tH); g.addColorStop(0,GOLD1); g.addColorStop(1,GOLD2); rr(x,tx,ty,tW,tH,28); x.fillStyle=g; x.fill();
    x.fillStyle=NAVY; x.textAlign='center';
    if(s.days!=null){ var num=String(s.days); fitFont(x,num,800,112,60,F.head,tW-30); x.fillText(num,tx+tW/2,ty+118); x.font='700 '+(lang==='en'?26:28)+'px '+fam; x.fillText(t.left,tx+tW/2,ty+168); }
    else { icon(x,'cal',tx+tW/2-36,ty+40,72,NAVY); x.font='700 28px '+fam; x.fillText(t.noDays,tx+tW/2,ty+168); }
    x.textAlign='left';
    var px=tx+tW+36, pw=R-40-px, py=ty+20;
    fitFont(x,t.exam[s.cls||0],700,34,22,fam,pw); x.fillStyle='#fff'; x.fillText(t.exam[s.cls||0],px,py+30); py+=48;
    if(s.provisional){ x.font='500 22px '+fam; x.fillStyle='#AEB8B1'; x.fillText(t.prov,px,py+18); py+=36; }
    if(s.chap){ var line=t.plan[0]+s.chap+t.plan[1]; x.font='500 28px '+fam; var pl=wrap(x,line,pw); var z=28; while(pl.length>3&&z>20){ z-=2; x.font='500 '+z+'px '+fam; pl=wrap(x,line,pw); } x.fillStyle='#D7DED8'; pl.slice(0,3).forEach(function(l,i){ x.fillText(l,px,py+z+i*z*1.45); }); }
    /* features */
    var fy=cy+ch+40, fw=(R-L-22)/2, fh=140, icons=['target','bell','bolt','check'];
    t.feats.forEach(function(f,i){ var X=L+(i%2)*(fw+22), Y=fy+Math.floor(i/2)*(fh+22);
      rr(x,X,Y,fw,fh,26); x.fillStyle='rgba(255,255,255,.04)'; x.fill(); x.lineWidth=1; x.strokeStyle='rgba(255,255,255,.08)'; x.stroke();
      icon(x,icons[i],X+24,Y+26,40,GOLD);
      var tw2=fw-24-40-18-22, z=25, words=[], lines;
      for(;z>=18;z--){ x.font='700 '+z+'px '+fam; lines=wrap(x,f[0]+f[1],tw2); if(lines.length<=3) break; }
      /* first part bold white, rest regular */
      var bold=f[0], bx=X+82, by=Y+26+z;
      lines.forEach(function(ln,k){ var yy=by+k*z*1.42, xx=bx;
        ln.split(' ').forEach(function(wd,j){ var isB=bold.length>0 && bold.indexOf(wd)===0; x.font=(isB?'700 ':'500 ')+z+'px '+fam; x.fillStyle=isB?'#fff':'#E8ECE6'; if(isB) bold=bold.slice(wd.length).replace(/^\s/,''); var piece=(j?' ':'')+wd; x.fillText(piece,xx,yy); xx+=x.measureText(piece).width; }); });
    });
    /* footer */
    var by2=H-140; x.fillStyle=GOLD; x.fillRect(0,by2,W,140);
    x.fillStyle=NAVY; fitFont(x,t.free,800,34,22,lang==='en'?F.head:fam,560); x.fillText(t.free,L,by2+60); fitFont(x,t.how,600,22,16,fam,560); x.fillText(t.how,L,by2+98);
    x.textAlign='right'; x.font='800 28px '+fam; x.fillText(t.sir,R,by2+60); fitFont(x,t.role,600,18,14,fam,400); x.fillText(t.role,R,by2+96); x.textAlign='left';
    return c;
  }
  function drawStatus(s,lang,logo){
    var t=TX[lang], fam=F[lang], W=1080, H=1920, c=document.createElement('canvas'); c.width=W; c.height=H; var x=c.getContext('2d');
    bg(x,W,H,W/2,H*0.3);
    x.font='700 22px Inter, sans-serif'; var bwid=82+x.measureText('BAIO LEARNING SYSTEM').width+(('letterSpacing' in x)?60:0); brand(x,(W-bwid)/2,120,logo);
    x.textAlign='center'; x.font='700 '+(lang==='en'?40:44)+'px '+fam; x.fillStyle=TEAL; if(lang==='en'&&'letterSpacing' in x) x.letterSpacing='6px'; x.fillText(t.sIn,W/2,286); if('letterSpacing' in x) x.letterSpacing='0px';
    var cx=W/2, cy=620, r=280;
    x.beginPath(); x.arc(cx,cy,r,0,7); x.fillStyle='rgba(212,175,55,.15)'; x.fill();
    var frac=s.days!=null?Math.max(0.08,Math.min(1,1-s.days/180)):0.83; x.beginPath(); x.moveTo(cx,cy); x.arc(cx,cy,r,-Math.PI/2,-Math.PI/2+frac*Math.PI*2); x.closePath(); x.fillStyle=GOLD; x.fill();
    x.beginPath(); x.arc(cx,cy,r-30,0,7); x.fillStyle='#0E2018'; x.fill();
    if(s.days!=null){ var num=String(s.days); x.fillStyle='#fff'; fitFont(x,num,800,300,120,F.head,440); x.fillText(num,cx,cy+80); x.fillStyle=GOLD; x.font='700 52px '+fam; x.fillText(t.left,cx,cy+170); }
    else { icon(x,'cal',cx-90,cy-130,180,'#fff'); x.fillStyle=GOLD; x.font='700 52px '+fam; x.fillText(t.set,cx,cy+150); }
    var qs=lang==='en'?84:76, qf=lang==='en'?F.head:fam; qs=Math.min(fitFont(x,t.sQ[0],800,qs,40,qf,W-180),fitFont(x,t.sQ[1],800,qs,40,qf,W-180)); x.font=(lang==='en'?700:800)+' '+qs+'px '+qf;
    x.fillStyle='#fff'; x.fillText(t.sQ[0],W/2,1010); x.fillStyle=GOLD; x.fillText(t.sQ[1],W/2,1010+qs*1.15);
    x.textAlign='left';
    var y=1010+qs*1.15+60, L=90, R=W-90;
    t.steps.forEach(function(st,i){ x.font='600 34px '+fam; var lines=wrap(x,st,R-L-36-76-28-36), z=34; while(lines.length>2&&z>24){ z-=2; x.font='600 '+z+'px '+fam; lines=wrap(x,st,R-L-176); }
      var bh=Math.max(136,lines.length*z*1.35+60); rr(x,L,y,R-L,bh,30); x.fillStyle='rgba(255,255,255,.05)'; x.fill(); x.lineWidth=1; x.strokeStyle='rgba(255,255,255,.1)'; x.stroke();
      x.beginPath(); x.arc(L+36+38,y+bh/2,38,0,7); x.fillStyle=GOLD; x.fill(); x.fillStyle=NAVY; x.font='800 38px '+F.head; x.textAlign='center'; x.fillText(String(i+1),L+74,y+bh/2+13); x.textAlign='left';
      x.fillStyle='#fff'; x.font='600 '+z+'px '+fam; var ly=y+bh/2-(lines.length-1)*z*0.675+z*0.35; lines.forEach(function(l,k){ x.fillText(l,L+140,ly+k*z*1.35); }); y+=bh+22; });
    var fy=H-230; x.fillStyle=GOLD; x.fillRect(0,fy,W,230); x.fillStyle=NAVY; x.textAlign='center';
    fitFont(x,t.free,800,50,30,lang==='en'?F.head:fam,W-120); x.fillText(t.free,W/2,fy+78); fitFont(x,t.how,600,30,20,fam,W-120); x.fillText(t.how,W/2,fy+128);
    var sl=t.sir+' · '+t.role; fitFont(x,sl,700,26,16,fam,W-120); x.fillText(sl,W/2,fy+180); x.textAlign='left';
    return c;
  }

  function css(){
    if(document.getElementById('cdCss')) return;
    var s=document.createElement('style'); s.id='cdCss';
    s.textContent='.cd-ov{position:fixed;inset:0;z-index:100000;background:rgba(0,0,0,.62);display:flex;align-items:flex-end;justify-content:center}'+
      '.cd-sh{width:100%;max-width:560px;max-height:94vh;overflow:auto;background:#10261f;color:#fff;border-radius:22px 22px 0 0;padding:16px 16px 22px;font-family:Inter,system-ui,sans-serif}'+
      '[data-theme="light"] .cd-sh{background:#fffdf7;color:#14302a}'+
      '.cd-h{display:flex;justify-content:space-between;align-items:center;font-weight:800;font-size:17px;margin-bottom:10px}'+
      '.cd-x{background:none;border:0;color:inherit;font-size:28px;cursor:pointer;line-height:1;min-width:44px;min-height:44px}'+
      '.cd-seg{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px}.cd-seg button{flex:1;min-height:42px;padding:8px 10px;border-radius:12px;border:1.5px solid rgba(127,127,127,.35);background:none;color:inherit;font:700 14px Inter,"Noto Sans Kannada","Noto Sans Devanagari",sans-serif;cursor:pointer}'+
      '.cd-seg button.on{border-color:#D4AF37;background:rgba(212,175,55,.18)}'+
      '.cd-prev{display:flex;justify-content:center;background:rgba(127,127,127,.12);border-radius:14px;padding:10px;margin:6px 0 10px;min-height:200px;align-items:center}'+
      '.cd-prev img{display:block;max-width:100%;max-height:48vh;border-radius:10px;box-shadow:0 8px 24px rgba(0,0,0,.35)}'+
      '.cd-lbl{font-size:12px;font-weight:700;opacity:.8;margin:4px 2px}'+
      '.cd-cap{width:100%;box-sizing:border-box;min-height:120px;border-radius:12px;border:1px solid rgba(127,127,127,.35);background:rgba(127,127,127,.08);color:inherit;padding:10px;font:500 13.5px/1.45 Inter,"Noto Sans Kannada","Noto Sans Devanagari",sans-serif;resize:vertical}'+
      '.cd-btns{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px}.cd-btns button{min-height:46px;padding:10px;border-radius:12px;border:0;font:700 14px Inter,"Noto Sans Kannada","Noto Sans Devanagari",sans-serif;cursor:pointer;background:rgba(127,127,127,.18);color:inherit}'+
      '.cd-btns .cd-go{grid-column:1/-1;background:linear-gradient(90deg,#E9C45A,#D4AF37);color:#1b1300;font-size:15.5px}';
    document.head.appendChild(s);
  }
  function toBlob(c){ return new Promise(function(res){ c.toBlob(function(b){ res(b); },'image/jpeg',0.92); }); }

  window.baioCountdownShare = function(s){
    css(); s=s||{};
    var lang='en'; try{ var L=localStorage.getItem('baio_lang'); if(TX[L]) lang=L; }catch(e){}
    var fmt='post', cache={}, edited=false;
    var ov=document.createElement('div'); ov.className='cd-ov';
    ov.innerHTML='<div class="cd-sh" role="dialog" aria-modal="true"><div class="cd-h"><span class="cd-t"></span><button type="button" class="cd-x" aria-label="Close">×</button></div>'+
      '<div class="cd-seg cd-fmt"><button type="button" data-f="post"></button><button type="button" data-f="status"></button></div>'+
      '<div class="cd-seg cd-lang">'+Object.keys(TX).map(function(k){ return '<button type="button" data-l="'+k+'">'+TX[k].label+'</button>'; }).join('')+'</div>'+
      '<div class="cd-prev"><span class="cd-load"></span></div>'+
      '<label class="cd-lbl" for="cdCap"></label><textarea class="cd-cap" id="cdCap"></textarea>'+
      '<div class="cd-btns"><button type="button" class="cd-go" disabled></button><button type="button" class="cd-save" disabled></button><button type="button" class="cd-copy"></button><button type="button" class="cd-wa" style="grid-column:1/-1"></button></div></div>';
    document.body.appendChild(ov);
    var $=function(q){ return ov.querySelector(q); };
    function close(){ ov.remove(); }
    ov.addEventListener('click',function(e){ if(e.target===ov) close(); }); $('.cd-x').onclick=close;
    $('#cdCap').addEventListener('input',function(){ edited=true; });
    function labels(){ var u=TX[lang].ui; $('.cd-t').textContent=u.title; $('[data-f="post"]').textContent='🖼 '+u.post+' 4:5'; $('[data-f="status"]').textContent='📱 '+u.status+' 9:16';
      $('.cd-lbl').textContent=u.caption; $('.cd-go').textContent='📤 '+u.share; $('.cd-save').textContent=u.save; $('.cd-copy').textContent=u.copy; $('.cd-wa').textContent=u.wa;
      ov.querySelectorAll('[data-f]').forEach(function(b){ b.classList.toggle('on',b.dataset.f===fmt); }); ov.querySelectorAll('[data-l]').forEach(function(b){ b.classList.toggle('on',b.dataset.l===lang); });
      if(!edited) $('#cdCap').value=TX[lang].cap(s); }
    function render(){
      labels(); var key=fmt+'-'+lang; $('.cd-go').disabled=true; $('.cd-save').disabled=true;
      if(!cache[key]) $('.cd-prev').innerHTML='<span class="cd-load">'+TX[lang].ui.making+'</span>';
      Promise.all([loadFonts(),loadLogo()]).then(function(r){
        if(!cache[key]){ var cv=(fmt==='post'?drawPost:drawStatus)(s,lang,r[1]); cache[key]={cv:cv,url:cv.toDataURL('image/jpeg',0.85)}; }
        if(fmt+'-'+lang!==key) return;
        $('.cd-prev').innerHTML='<img alt="" src="'+cache[key].url+'">'; $('.cd-go').disabled=false; $('.cd-save').disabled=false;
      });
    }
    ov.querySelectorAll('[data-f]').forEach(function(b){ b.onclick=function(){ fmt=b.dataset.f; render(); }; });
    ov.querySelectorAll('[data-l]').forEach(function(b){ b.onclick=function(){ lang=b.dataset.l; edited=false; render(); }; });
    function fname(){ return 'BAIO_Exam_Countdown_'+fmt+'_'+lang+'.jpg'; }
    $('.cd-go').onclick=function(){ var c=cache[fmt+'-'+lang], cap=$('#cdCap').value; if(!c) return;
      toBlob(c.cv).then(function(b){ var file=b&&new File([b],fname(),{type:'image/jpeg'});
        if(file&&navigator.canShare&&navigator.canShare({files:[file]})){ navigator.share({files:[file],text:cap}).catch(function(){}); }
        else if(navigator.share){ navigator.share({text:cap}).catch(function(){}); }
        else window.open('https://wa.me/?text='+encodeURIComponent(cap),'_blank','noopener'); }); };
    $('.cd-save').onclick=function(){ var c=cache[fmt+'-'+lang]; if(!c) return; var a=document.createElement('a'); a.href=c.cv.toDataURL('image/jpeg',0.92); a.download=fname(); document.body.appendChild(a); a.click(); a.remove(); };
    $('.cd-copy').onclick=function(){ var cap=$('#cdCap').value, b=$('.cd-copy'), done=function(){ b.textContent=TX[lang].ui.copied; setTimeout(function(){ b.textContent=TX[lang].ui.copy; },1800); };
      if(navigator.clipboard&&window.isSecureContext) navigator.clipboard.writeText(cap).then(done,function(){ $('#cdCap').select(); });
      else { $('#cdCap').select(); try{ document.execCommand('copy'); done(); }catch(e){} } };
    $('.cd-wa').onclick=function(){ window.open('https://wa.me/?text='+encodeURIComponent($('#cdCap').value),'_blank','noopener'); };
    render();
  };
})();
