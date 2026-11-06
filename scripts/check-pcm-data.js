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
console.log(bad?bad+' problem(s)':'PCM data OK');process.exit(bad?1:0);
