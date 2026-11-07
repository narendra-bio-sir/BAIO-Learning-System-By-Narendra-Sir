const {chromium}=require('playwright');const path=require('path');
(async()=>{const b=await chromium.launch();const pg=await b.newPage();
await pg.goto('file://'+path.resolve('notes.html'));await pg.evaluate(()=>document.fonts.ready);await pg.waitForTimeout(600);
await pg.addStyleTag({content:'body{background:#fff}.page{margin:0}'});
await pg.pdf({path:'BAIO-II-PUC-Maths-Colour-Notes.pdf',preferCSSPageSize:true,printBackground:true});
await b.close();})();
