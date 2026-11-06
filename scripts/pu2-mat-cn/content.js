/* II PUC Mathematics colour notes — cover + contents. Chapter pages are pushed by ch*.js */
const R = String.raw;
const CHAPTERS = [
  [1,'Relations and Functions',9,9],[2,'Inverse Trigonometric Functions',6,6],[3,'Matrices',9,9],[4,'Determinants',12,12],
  [5,'Continuity and Differentiability',20,17],[6,'Application of Derivatives',10,8],[7,'Integrals',22,18],[8,'Application of Integrals',5,5],
  [9,'Differential Equations',10,8],[10,'Vector Algebra',11,8],[11,'Three Dimensional Geometry',8,6],[12,'Linear Programming',7,6],[13,'Probability',11,8]];
const PAGES = [
 {cls:'cover', raw:R`<div class="grid"></div>
   <div class="sym" style="left:14mm;top:22mm">∫</div><div class="sym" style="right:20mm;top:40mm">∑</div>
   <div class="sym" style="left:26mm;bottom:60mm">dy/dx</div><div class="sym" style="right:18mm;bottom:80mm">|A|</div>
   <div class="sym" style="left:90mm;top:12mm">π</div><div class="sym" style="right:60mm;bottom:28mm">eˣ</div><div class="sym" style="left:60mm;top:120mm">√2</div>
   <div style="position:relative">
    <div style="margin:0 auto;width:36mm;height:36mm;border-radius:50%;background:#fff;border:3mm solid #f2c14e;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#1e1b4b"><b style="font:900 25px 'Inter Display',Inter">BAIO</b><i style="font:600 8.5px Inter;font-style:normal;color:#475569">Learning System</i></div>
    <div style="margin-top:9mm;font:800 13px Inter;letter-spacing:5px;color:#fde047">KARNATAKA BOARD · II PUC</div>
    <div style="margin-top:3mm;font:900 64px/0.95 'Inter Display',Inter;letter-spacing:-2px">MATHEMATICS</div>
    <div style="margin-top:3mm;font:900 40px 'Inter Display',Inter;color:#fde047;letter-spacing:-1px">COLOUR NOTES</div>
    <div style="margin:7mm auto 0;max-width:140mm;font:500 15px/1.5 Inter;color:#e0e7ff">All 13 chapters · every definition, formula, result and exam trick on colour-coded revision pages</div>
    <div style="margin-top:9mm;display:flex;gap:3mm;justify-content:center;flex-wrap:wrap">
      <span style="background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.3);border-radius:6mm;padding:2mm 5mm;font:700 12px Inter">📘 NCERT based</span>
      <span style="background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.3);border-radius:6mm;padding:2mm 5mm;font:700 12px Inter">🎯 Board + KCET + JEE</span>
      <span style="background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.3);border-radius:6mm;padding:2mm 5mm;font:700 12px Inter">🧮 Formula ready</span></div>
    <div style="margin-top:22mm;font:400 30px Kalam;color:#fde047">Narendra Sir</div>
    <div style="font:700 13px Inter;color:#e0e7ff">Founder & CEO · BAIO Learning System</div>
   </div>`},
 {contents:true}
];
function buildContents(){
  const first={}; PAGES.forEach((p,i)=>{ if(p.ch && !first[p.ch]) first[p.ch]=i+1; });
  const rows=CHAPTERS.map(([n,t,h,m])=>`<tr><td><b>${n}</b></td><td>${t}</td><td style="text-align:center">${h}</td><td style="text-align:center"><b>${m}</b></td><td style="text-align:center">${first[n]||''}</td></tr>`).join('');
  PAGES[1]={title:'Contents & <span>Blueprint</span>',pill:'All 13 chapters · marks weightage · how to use these notes',boxes:[
   {c:'i',full:true,h:'Chapters, marks and pages',x:`<table><tr><th style="width:9mm">Ch</th><th>Chapter</th><th style="text-align:center;width:24mm">Teaching hours</th><th style="text-align:center;width:22mm">Marks*</th><th style="text-align:center;width:16mm">Page</th></tr>${rows}<tr><td></td><td><b>Total</b></td><td style="text-align:center"><b>140</b></td><td style="text-align:center"><b>120</b></td><td></td></tr></table>
     <p class="note" style="margin-top:2mm">*Marks are from the 2026-27 II PUC Mathematics blueprint. They add up to 120 including internal choice; the paper itself is for 80 marks. Always check the latest blueprint from your college.</p>`},
   {c:'g',h:'Highest-scoring chapters',x:R`<ul><li><b>Integrals</b> (18) and <b>Continuity &amp; Differentiability</b> (17) — 35 marks together.</li><li><b>Determinants</b> (12), <b>Relations &amp; Functions</b> and <b>Matrices</b> (9 each).</li><li>Finish these five first: they carry over half the blueprint.</li></ul>`},
   {c:'o',h:'How to use these notes',x:R`<ul><li><span class="hl">Yellow</span> = must-remember result.</li><li>Coloured strips = formulas to copy into your formula book.</li><li>💡 boxes = shortcuts &nbsp;·&nbsp; ⚠️ boxes = common mistakes.</li><li>Revise one chapter a day; redo the solved idea in each box without looking.</li></ul>`},
   {c:'p',full:true,h:'Exam pattern at a glance',x:R`<div class="three"><div class="fx l"><b>Part A</b><br>MCQs and fill in the blanks, 1 mark each — mostly direct formulas and definitions.</div><div class="fx l"><b>Part B &amp; C</b><br>2 and 3 mark questions — short proofs, derivatives, matrices, vectors.</div><div class="fx l"><b>Part D &amp; E</b><br>5 and 6 mark questions — integration, area, LPP, determinants, 3D lines, plus a 4-mark question in Part E.</div></div>`}
  ]};
}
