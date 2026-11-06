// II PUC Maths colour notes → page JPGs for pu2-maths-colour-notes.html.
// Needs KaTeX: copy katex/dist to scripts/pu2-mat-cn/katex first (e.g. from an npm install of katex).
// Run from this folder: node render-pages.js
const {chromium}=require('playwright');const path=require('path');const fs=require('fs');
const out=path.resolve(__dirname,'../../pu2-mat-colour-notes');
(async()=>{const b=await chromium.launch();const pg=await b.newPage({viewport:{width:820,height:1200},deviceScaleFactor:1.4});
await pg.goto('file://'+path.resolve(__dirname,'notes.html'));await pg.evaluate(()=>document.fonts.ready);await pg.waitForTimeout(600);
await pg.addStyleTag({content:'body{background:#fff}.page{margin:0 auto}'});
const pages=await pg.$$('.page');fs.mkdirSync(out,{recursive:true});
for(let i=0;i<pages.length;i++){await pages[i].screenshot({path:`${out}/page-${String(i+1).padStart(2,'0')}.jpg`,type:'jpeg',quality:84});}
console.log(pages.length,'pages');await b.close();})();
