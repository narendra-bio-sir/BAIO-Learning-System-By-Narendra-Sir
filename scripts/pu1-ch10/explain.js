/* "Narendra Sir explains" script for Study Mode, Concepts and Study Tips (EN/KN/HI) → pu1-ch10-assets/explain.json
   Spoken as [target, text] segments; the target is the on-screen block (data-ex) that gets highlighted. */
const fs = require('fs'), path = require('path');
const S = require('./study.js'), M = require('./more.js'), KN = require('./tr-kn.js'), HI = require('./tr-hi.js'), X = require('./text.js');
const A = path.join(__dirname, '..', '..', 'pu1-ch10-assets');
const ST = { en: S.study, kn: KN.study, hi: HI.study }, CO = { en: S.concepts, kn: KN.concepts, hi: HI.concepts }, TI = { en: M.tips, kn: KN.tips, hi: HI.tips };
const NAMES = { en: S.topics.map(t => t.name),
  kn: ['ಕೋಶ ಚಕ್ರ: ಅರ್ಥ, ಅವಧಿ ಮತ್ತು ಹಂತಗಳು', 'ಇಂಟರ್‌ಫೇಸ್: G1, S, G2 ಮತ್ತು G0', 'ಮೈಟಾಸಿಸ್: ಪ್ರೊಫೇಸ್ ಮತ್ತು ಮೆಟಾಫೇಸ್', 'ಮೈಟಾಸಿಸ್: ಅನಾಫೇಸ್ ಮತ್ತು ಟೀಲೋಫೇಸ್', 'ಸೈಟೋಕೈನೆಸಿಸ್ ಮತ್ತು ಮೈಟಾಸಿಸ್‌ನ ಮಹತ್ವ', 'ಮಿಯಾಸಿಸ್ ಮತ್ತು ಪ್ರೊಫೇಸ್ I', 'ಮಿಯಾಸಿಸ್ I', 'ಮಿಯಾಸಿಸ್ II ಮತ್ತು ಮಿಯಾಸಿಸ್‌ನ ಮಹತ್ವ'],
  hi: ['कोशिका चक्र: अर्थ, अवधि और प्रावस्थाएँ', 'अंतरावस्था: G1, S, G2 और G0', 'समसूत्री विभाजन: पूर्वावस्था और मध्यावस्था', 'समसूत्री विभाजन: पश्चावस्था और अंत्यावस्था', 'साइटोकाइनेसिस और समसूत्री विभाजन का महत्व', 'अर्धसूत्री विभाजन और पूर्वावस्था I', 'अर्धसूत्री I', 'अर्धसूत्री II और अर्धसूत्री विभाजन का महत्व'] };
const W = {
  en: { hello: n => `Hello students, I am Narendra Sir. Today we start Chapter 10, Cell Cycle and Cell Division, with ${n}.`, next: n => `Now we move to ${n}.`, recap: 'First, look at these quick points on top. They are the summary of this topic, and by the end every one of them will be clear to you.',
        table: t => `Now see this table carefully: ${t}.`, hook: 'Students, think about this question first.', steps: ['Step one.', 'Step two.', 'Step three.', 'Step four.', 'Step five.'], mis: 'A common mistake.', wrong: 'Many students think:', right: 'But the truth is:', analogy: 'Here is an easy way to remember it.', aq: 'Try this question.', ans: 'Answer:',
        tips: 'Hello students, Narendra Sir here. Let me tell you how to study this chapter smartly for your exams, and for NEET and KCET.', ord: ['First,', 'Second,', 'Third,', 'Fourth,', 'Fifth,'], neet: ['For NEET, first,', 'Next,', 'Also,', 'Finally,'] },
  kn: { hello: n => `ನಮಸ್ಕಾರ ವಿದ್ಯಾರ್ಥಿಗಳೇ, ನಾನು ನರೇಂದ್ರ ಸರ್. ಇವತ್ತು ಅಧ್ಯಾಯ ಹತ್ತು, ಕೋಶ ಚಕ್ರ ಮತ್ತು ಕೋಶ ವಿಭಜನೆಯನ್ನು ${n} ಮೂಲಕ ಶುರು ಮಾಡೋಣ.`, next: n => `ಈಗ ${n} ಕಡೆಗೆ ಹೋಗೋಣ.`, recap: 'ಮೊದಲು ಮೇಲಿರುವ ಈ ಮುಖ್ಯ ಅಂಶಗಳನ್ನು ನೋಡಿ. ಇವು ಈ ವಿಷಯದ ಸಾರಾಂಶ, ಕೊನೆಯ ವೇಳೆಗೆ ಇವೆಲ್ಲವೂ ನಿಮಗೆ ಸ್ಪಷ್ಟವಾಗುತ್ತವೆ.',
        table: t => `ಈಗ ಈ ಕೋಷ್ಟಕವನ್ನು ಗಮನವಿಟ್ಟು ನೋಡಿ: ${t}.`, hook: 'ವಿದ್ಯಾರ್ಥಿಗಳೇ, ಮೊದಲು ಈ ಪ್ರಶ್ನೆಯ ಬಗ್ಗೆ ಯೋಚಿಸಿ.', steps: ['ಮೊದಲ ಹೆಜ್ಜೆ.', 'ಎರಡನೇ ಹೆಜ್ಜೆ.', 'ಮೂರನೇ ಹೆಜ್ಜೆ.', 'ನಾಲ್ಕನೇ ಹೆಜ್ಜೆ.', 'ಐದನೇ ಹೆಜ್ಜೆ.'], mis: 'ಒಂದು ಸಾಮಾನ್ಯ ತಪ್ಪು.', wrong: 'ಅನೇಕ ವಿದ್ಯಾರ್ಥಿಗಳು ಹೀಗೆ ಯೋಚಿಸುತ್ತಾರೆ:', right: 'ಆದರೆ ಸತ್ಯ ಏನೆಂದರೆ:', analogy: 'ನೆನಪಿಡಲು ಒಂದು ಸುಲಭ ಉಪಾಯ.', aq: 'ಈ ಪ್ರಶ್ನೆಯನ್ನು ಪ್ರಯತ್ನಿಸಿ.', ans: 'ಉತ್ತರ:',
        tips: 'ನಮಸ್ಕಾರ ವಿದ್ಯಾರ್ಥಿಗಳೇ, ನಾನು ನರೇಂದ್ರ ಸರ್. ಪರೀಕ್ಷೆಗಳಿಗೆ, NEET ಮತ್ತು KCET ಗಾಗಿ ಈ ಅಧ್ಯಾಯವನ್ನು ಜಾಣ್ಮೆಯಿಂದ ಓದುವುದು ಹೇಗೆ ಎಂದು ಹೇಳುತ್ತೇನೆ.', ord: ['ಮೊದಲನೆಯದಾಗಿ,', 'ಎರಡನೆಯದಾಗಿ,', 'ಮೂರನೆಯದಾಗಿ,', 'ನಾಲ್ಕನೆಯದಾಗಿ,', 'ಐದನೆಯದಾಗಿ,'], neet: ['NEET ಗಾಗಿ, ಮೊದಲು,', 'ನಂತರ,', 'ಹಾಗೆಯೇ,', 'ಕೊನೆಯದಾಗಿ,'] },
  hi: { hello: n => `नमस्ते विद्यार्थियों, मैं नरेंद्र सर हूँ। आज हम अध्याय दस, कोशिका चक्र और कोशिका विभाजन, ${n} से शुरू करते हैं।`, next: n => `अब हम ${n} पर चलते हैं।`, recap: 'पहले ऊपर दिए इन मुख्य बिंदुओं को देखिए। ये इस विषय का सार हैं, और अंत तक ये सब आपको स्पष्ट हो जाएँगे।',
        table: t => `अब इस तालिका को ध्यान से देखिए: ${t}।`, hook: 'विद्यार्थियों, पहले इस प्रश्न पर सोचिए।', steps: ['पहला कदम।', 'दूसरा कदम।', 'तीसरा कदम।', 'चौथा कदम।', 'पाँचवाँ कदम।'], mis: 'एक आम गलती।', wrong: 'कई विद्यार्थी सोचते हैं:', right: 'पर सच यह है:', analogy: 'याद रखने का एक आसान तरीका।', aq: 'यह प्रश्न हल करके देखिए।', ans: 'उत्तर:',
        tips: 'नमस्ते विद्यार्थियों, नरेंद्र सर यहाँ। मैं बताता हूँ कि परीक्षा, NEET और KCET के लिए यह अध्याय समझदारी से कैसे पढ़ें।', ord: ['पहली बात,', 'दूसरी बात,', 'तीसरी बात,', 'चौथी बात,', 'पाँचवीं बात,'], neet: ['NEET के लिए, सबसे पहले,', 'फिर,', 'साथ ही,', 'और अंत में,'] }
};
const sp = (h, L) => X.sentences(h, L).join(' ');
const ex = { study: {}, concepts: {}, tips: {}, vis: { study: {}, concepts: {}, tips: {} } };
S.topics.forEach((t, ti) => {
  ex.study[t.id] = {}; ex.concepts[t.id] = {};
  for (const L of ['en', 'kn', 'hi']){
    const w = W[L], d = ST[L][t.id], c = CO[L][t.id], name = NAMES[L][ti];
    const st = [['recap', (ti ? w.next(name) : w.hello(name)) + ' ' + w.recap]];
    d.sections.forEach((s, i) => { st.push(['sec' + i, sp(s.h, L) + ' ' + sp(s.body, L)]); });
    { st.push(['table', w.table(X.plain(d.table.title)) + ' ' + d.table.rows.map(r => X.endP(X.speak(r[0] + ': ' + r.slice(1).join(', '), L), L)).join(' ')]); }
    ex.study[t.id][L] = st;
    const co = [['hook', w.hook + ' ' + sp(c.hook, L)]];
    c.chain.forEach((x, i) => co.push(['chain' + i, w.steps[i] + ' ' + sp(x, L)]));
    c.misconceptions.forEach((m, i) => co.push(['mis' + i, w.mis + ' ' + w.wrong + ' ' + sp(m.wrong, L) + ' ' + w.right + ' ' + sp(m.right, L)]));
    co.push(['analogy', w.analogy + ' ' + sp(c.analogy, L)]);
    c.analytical.forEach((a, i) => co.push(['aq' + i, w.aq + ' ' + sp(a.q, L) + ' ' + w.ans + ' ' + sp(a.a, L)]));
    ex.concepts[t.id][L] = co;
  }
});
for (const L of ['en', 'kn', 'hi']){
  const w = W[L], tp = TI[L];
  ex.tips[L] = [['intro', w.tips], ...tp.theory.map((x, i) => ['th' + i, w.ord[i] + ' ' + sp(x, L)]), ...tp.neet.map((x, i) => ['nt' + i, w.neet[i] + ' ' + sp(x, L)])];
}
let man = {}; try { man = JSON.parse(fs.readFileSync(path.join(A, 'manifest.json'), 'utf8')); } catch (e) {}
ex.vis.study = man.secSlide || {};
fs.writeFileSync(path.join(A, 'explain.json'), JSON.stringify(ex));
console.log('explain.json', (JSON.stringify(ex).length / 1024).toFixed(0) + ' KB');
