// node render-banner.js → banner-post.jpg (1080x1350) and banner-story.jpg (1080x1920)
const {chromium}=require('playwright');
const out=process.argv[2]||'.';
(async()=>{const b=await chromium.launch();
const t=process.argv[3]||'dark';
for(const [f,h] of [['post',1350],['story',1920]]){
  const pg=await b.newPage({viewport:{width:1080,height:h},deviceScaleFactor:1});
  await pg.goto('http://localhost:8785/scripts/pu1-ch11/banner.html?f='+f+'&t='+t,{waitUntil:'load'});
  await pg.evaluate(()=>document.fonts.ready);await pg.waitForTimeout(400);
  const over=await pg.evaluate(()=>{const w=document.querySelector('.wrap');const r=[...w.children].pop().getBoundingClientRect();return r.bottom});
  console.log(f,'footer bottom',Math.round(over),'of',h);
  await pg.screenshot({path:`${out}/banner-${f}-${t}.jpg`,type:'jpeg',quality:92,clip:{x:0,y:0,width:1080,height:h}});
}
await b.close();})();
