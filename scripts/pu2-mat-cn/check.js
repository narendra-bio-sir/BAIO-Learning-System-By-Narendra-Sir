const {chromium}=require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch();const pg=await b.newPage({viewport:{width:800,height:1200}});
const errs=[];pg.on('pageerror',e=>errs.push(e.message));pg.on('console',m=>{if(m.type()==='error')errs.push(m.text())});
await pg.goto('file://'+path.resolve('notes.html'));await pg.evaluate(()=>document.fonts.ready);await pg.waitForTimeout(500);
const r=await pg.evaluate(()=>({c:CHECK(),e:ERRS}));
r.c.forEach(x=>console.log(x.i,x.slack,x.t));console.log('katex errs',r.e,'js',errs);
const shots=(process.argv[2]||'').split(',').filter(Boolean).map(Number);
const pages=await pg.$$('.page');
for(const n of shots){await pages[n-1].screenshot({path:`shot-${n}.png`});}
await b.close();})();
