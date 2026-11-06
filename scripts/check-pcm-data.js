// Checks every subject-apps/*-data.js: MCQ-type questions must have exactly 4 options
// (split on "|") and a valid answer index. Use ∣ (U+2223) for modulus / determinant bars.
const fs=require('fs'),path=require('path');let bad=0;
for(const f of fs.readdirSync(path.join(__dirname,'../subject-apps')).filter(f=>f.endsWith('-data.js'))){
  global.window={}; delete require.cache[require.resolve('../subject-apps/'+f)]; require('../subject-apps/'+f);
  const A=window.SUBJECT_APP;
  for(const k of ['mcq','neet','kcet'])(A[k]||[]).forEach((q,i)=>{const o=String(q[1]).split('|');
    if(o.length!==4||!(q[2]>=0&&q[2]<4)){bad++;console.log(f,k,i+1,'options:',o.length,'answer:',q[2]);}});
  for(const n of A.numericals||[]) if(!n.q||!Array.isArray(n.s)||!n.a){bad++;console.log(f,'numerical malformed');}
  for(const b of A.board||[]) if(![1,2,3,4,5,6].includes(b[0])||!Array.isArray(b[2])){bad++;console.log(f,'board malformed',b[1]);}
}
console.log(bad?bad+' problem(s)':'PCM data OK');if(bad)process.exit(1);
// Translations: subject-apps/<id>-kn.js / -hi.js must match the English item counts.
let tbad=0;
for(const f of fs.readdirSync(path.join(__dirname,'../subject-apps')).filter(f=>/-(kn|hi)\.js$/.test(f))){
  const id=f.replace(/-(kn|hi)\.js$/,''), l=f.match(/-(kn|hi)\.js$/)[1];
  global.window={}; for(const g of [id+'-data.js',f]){ delete require.cache[require.resolve('../subject-apps/'+g)]; require('../subject-apps/'+g); }
  const A=window.SUBJECT_APP, T=(window.SUBJECT_TR||{})[l]; if(!T){tbad++;console.log(f,'no SUBJECT_TR.'+l);continue;}
  for(const k of ['notes','formulas','numericals','mcq','neet','kcet','board']) if(T[k]&&T[k].length!==(A[k]||[]).length){tbad++;console.log(f,k,'count',T[k].length,'vs',(A[k]||[]).length);}
  for(const k of ['mcq','neet','kcet'])(T[k]||[]).forEach((q,i)=>{ if(q[1]&&q[1].split('|').length!==4){tbad++;console.log(f,k,i+1,'options',q[1].split('|').length);} });
  (T.notes||[]).forEach((n,i)=>{ if(n.b.length!==A.notes[i].b.length) console.log('note',f,'notes',i+1,'bullets',n.b.length,'vs',A.notes[i].b.length); });
  (T.board||[]).forEach((b,i)=>{ if(!Array.isArray(b[1])){tbad++;console.log(f,'board',i+1,'malformed');} });
}
console.log(tbad?tbad+' translation problem(s)':'Translations OK'); if(tbad) process.exit(1);
