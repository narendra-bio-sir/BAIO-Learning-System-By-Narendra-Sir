/* PU-I Ch11 class presentation decks (Standard 1600x900 + Large Text 1920x1080, EN/KN/HI),
   narration.json, spot-cues.json and the one-shot/explain slide map. Slides are built from the
   chapter's own Study Mode content (study.js + tr-kn/tr-hi), so every language has the same slides.
   Run: node scripts/pu1-ch11/slides.js   (needs the local server on :8785) */
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const S = require('./study.js'), KN = require('./tr-kn.js'), HI = require('./tr-hi.js'), X = require('./text.js');
const ROOT = path.join(__dirname, '..', '..'), A = path.join(ROOT, 'pu1-ch11-assets');
const LANGS = ['en', 'kn', 'hi'];
const STUDY = { en: S.study, kn: KN.study, hi: HI.study };
const NAMES = require('./names.js');
const UI = {
  en: { kick: 'PU-I BIOLOGY · CHAPTER 11 · PHOTOSYNTHESIS IN HIGHER PLANTS', part: 'Part', key: 'Key points', rem: 'Remember', chap: 'Photosynthesis in Higher Plants', sub: 'PU-I Biology · NCERT Class XI · NEET / KCET', by: 'Narendra Sir', role: 'Lecturer in Biology · Founder/CEO, BAIO Learning System', road: 'What we will learn', thanks: 'Revise · Practise · Excel', foot: 'BAIO Learning System', ch: 'Chapter 11' },
  kn: { kick: 'PU-I ಜೀವಶಾಸ್ತ್ರ · ಅಧ್ಯಾಯ 11 · ಉನ್ನತ ಸಸ್ಯಗಳಲ್ಲಿ ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ', part: 'ಭಾಗ', key: 'ಮುಖ್ಯ ಅಂಶಗಳು', rem: 'ನೆನಪಿಡಿ', chap: 'ಉನ್ನತ ಸಸ್ಯಗಳಲ್ಲಿ ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ', sub: 'PU-I ಜೀವಶಾಸ್ತ್ರ · NCERT 11ನೇ ತರಗತಿ · NEET / KCET', by: 'ನರೇಂದ್ರ ಸರ್', role: 'ಜೀವಶಾಸ್ತ್ರ ಉಪನ್ಯಾಸಕರು · ಸಂಸ್ಥಾಪಕರು/CEO, BAIO ಲರ್ನಿಂಗ್ ಸಿಸ್ಟಮ್', road: 'ನಾವು ಏನು ಕಲಿಯುತ್ತೇವೆ', thanks: 'ಪುನರಾವರ್ತಿಸಿ · ಅಭ್ಯಾಸ ಮಾಡಿ · ಸಾಧಿಸಿ', foot: 'BAIO ಲರ್ನಿಂಗ್ ಸಿಸ್ಟಮ್', ch: 'ಅಧ್ಯಾಯ 11' },
  hi: { kick: 'PU-I जीवविज्ञान · अध्याय 11 · उच्च पादपों में प्रकाश संश्लेषण', part: 'भाग', key: 'मुख्य बिंदु', rem: 'याद रखें', chap: 'उच्च पादपों में प्रकाश संश्लेषण', sub: 'PU-I जीवविज्ञान · NCERT कक्षा 11 · NEET / KCET', by: 'नरेंद्र सर', role: 'जीवविज्ञान व्याख्याता · संस्थापक/CEO, BAIO लर्निंग सिस्टम', road: 'हम क्या सीखेंगे', thanks: 'दोहराएँ · अभ्यास करें · आगे बढ़ें', foot: 'BAIO लर्निंग सिस्टम', ch: 'अध्याय 11' }
};
const SAY = {
  en: { cover: 'Welcome, dear students, to Chapter 11, Photosynthesis in Higher Plants. I am Narendra Sir, and this is the BAIO Learning System. In this chapter we will see how a green leaf traps sunlight and turns carbon dioxide and water into food, and gives us the oxygen we breathe. Let us begin.',
        road: 'Here is our plan for this chapter.', part: (n, t) => `Part ${n}. ${t}.`, keys: 'First, look at the key points of this part.', look: h => `Let us look at ${h}.`, table: t => `Now look at this table: ${t}.`, rem: 'Remember these points.',
        close: 'That brings us to the end of Chapter 11, Photosynthesis in Higher Plants. Revise the Z scheme, the three stages of the Calvin cycle and the C3 versus C4 table. Then practise the MCQ, NEET and KCET questions in the app. All the best!' },
  kn: { cover: 'ಪ್ರೀತಿಯ ವಿದ್ಯಾರ್ಥಿಗಳೇ, ಅಧ್ಯಾಯ ಹನ್ನೊಂದು, ಉನ್ನತ ಸಸ್ಯಗಳಲ್ಲಿ ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಗೆ ಸ್ವಾಗತ. ನಾನು ನರೇಂದ್ರ ಸರ್, ಇದು BAIO ಲರ್ನಿಂಗ್ ಸಿಸ್ಟಮ್. ಹಸಿರು ಎಲೆ ಸೂರ್ಯನ ಬೆಳಕನ್ನು ಹಿಡಿದು ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಮತ್ತು ನೀರನ್ನು ಆಹಾರವಾಗಿ ಹೇಗೆ ಬದಲಿಸುತ್ತದೆ, ಮತ್ತು ನಾವು ಉಸಿರಾಡುವ ಆಮ್ಲಜನಕವನ್ನು ಹೇಗೆ ನೀಡುತ್ತದೆ ಎಂದು ಈ ಅಧ್ಯಾಯದಲ್ಲಿ ನೋಡೋಣ. ಆರಂಭಿಸೋಣ.',
        road: 'ಈ ಅಧ್ಯಾಯದ ನಮ್ಮ ಯೋಜನೆ ಇಲ್ಲಿದೆ.', part: (n, t) => `ಭಾಗ ${n}. ${t}.`, keys: 'ಮೊದಲು ಈ ಭಾಗದ ಮುಖ್ಯ ಅಂಶಗಳನ್ನು ನೋಡಿ.', look: h => `ಈಗ ${h} ನೋಡೋಣ.`, table: t => `ಈಗ ಈ ಕೋಷ್ಟಕವನ್ನು ನೋಡಿ: ${t}.`, rem: 'ಈ ಅಂಶಗಳನ್ನು ನೆನಪಿಡಿ.',
        close: 'ಇದರೊಂದಿಗೆ ಅಧ್ಯಾಯ ಹನ್ನೊಂದು, ಉನ್ನತ ಸಸ್ಯಗಳಲ್ಲಿ ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ ಮುಗಿಯಿತು. Z ಯೋಜನೆ, ಕೆಲ್ವಿನ್ ಚಕ್ರದ ಮೂರು ಹಂತಗಳು ಮತ್ತು C3 ಹಾಗೂ C4 ಸಸ್ಯಗಳ ಕೋಷ್ಟಕವನ್ನು ಪುನರಾವರ್ತಿಸಿ. ನಂತರ ಆ್ಯಪ್‌ನಲ್ಲಿ MCQ, NEET ಮತ್ತು KCET ಪ್ರಶ್ನೆಗಳನ್ನು ಅಭ್ಯಾಸ ಮಾಡಿ. ಶುಭಾಶಯಗಳು!' },
  hi: { cover: 'प्यारे विद्यार्थियों, अध्याय ग्यारह, उच्च पादपों में प्रकाश संश्लेषण में आपका स्वागत है। मैं नरेंद्र सर हूँ, और यह BAIO लर्निंग सिस्टम है। इस अध्याय में हम देखेंगे कि हरी पत्ती सूर्य का प्रकाश पकड़कर कार्बन डाइऑक्साइड और पानी को भोजन में कैसे बदलती है, और हमें साँस लेने के लिए ऑक्सीजन कैसे देती है। चलिए शुरू करते हैं।',
        road: 'इस अध्याय की हमारी योजना यह है।', part: (n, t) => `भाग ${n}। ${t}।`, keys: 'पहले इस भाग के मुख्य बिंदु देखिए।', look: h => `अब ${h} देखते हैं।`, table: t => `अब यह तालिका देखिए: ${t}।`, rem: 'ये बिंदु याद रखिए।',
        close: 'इसके साथ अध्याय ग्यारह, उच्च पादपों में प्रकाश संश्लेषण पूरा हुआ। Z योजना, केल्विन चक्र के तीन चरण और C3 तथा C4 पौधों की तालिका दोहराइए। फिर ऐप में MCQ, NEET और KCET प्रश्नों का अभ्यास कीजिए। शुभकामनाएँ!' }
};
/* a picture for each Study section (null = text only) */
const VIS = {
  'discovery': ['leafSun', 'halfLeaf', 'belljar', 'engelmann', 'vanniel', 'equation'],
  'chloroplast': ['leafCells', 'chloroplast', 'split', 'chromatogram', 'spectrum', 'accessory'],
  'light': ['twoPhases', 'zscheme', 'lhc', 'lhc', 'photolysis', 'hill'],
  'electron': ['atp', 'zscheme', 'zscheme', 'zscheme', 'cyclic'],
  'chemiosmosis': ['chemi', 'chemi', 'atpase', 'atpase', 'twoPhases'],
  'calvin': ['twoPhases', 'calvin', 'calvin', 'calvin', 'calvin', 'glucose'],
  'c4': ['maize', 'kranz', 'c4', 'c4', 'c4'],
  'photoresp': ['rubisco', 'rubisco', 'photoresp', 'c4', null],
  'factors': ['factors', 'barrel', 'lightgraph', 'co2graph', 'tempgraph', 'wilt']
};
const TABLE_VIS = {};

function titleSplit(h){ const t = h.replace(/&mdash;/g, '—'); const i = t.indexOf(' — '); return i > 0 ? [t.slice(0, i), t.slice(i + 3)] : [t, '']; }
/* group display sentences into at most `max` cards (merging the shortest neighbours) */
function cardsOf(html, max){ let c = X.displaySentences(html); while (c.length > max){ let best = 0, bl = 1e9; for (let i = 0; i < c.length - 1; i++){ const l = X.plain(c[i]).length + X.plain(c[i + 1]).length; if (l < bl){ bl = l; best = i; } } c.splice(best, 2, c[best] + ' ' + c[best + 1]); } return c; }

function deck(L, kind){
  const st = STUDY[L], u = UI[L], say = SAY[L], out = [], large = kind === 'large';
  const push = (o, narr) => { o.narr = narr.flatMap(([c, t]) => X.SPLIT(t).map(x => [c, X.endP(x, L)])); out.push(o); };
  const speakAll = (h, cue) => X.sentences(h, L).map(t => [cue, t]);
  push({ type: 'cover' }, X.SPLIT(say.cover).map(t => [0, t]));
  push({ type: 'road', title: u.road, items: NAMES[L] }, [[0, X.endP(say.road, L)], ...NAMES[L].map((n, i) => [i + 1, X.endP(X.speak(say.part(i + 1, n), L), L)])]);
  S.topics.forEach((t, ti) => {
    const d = st[t.id];
    if (large) push({ type: 'part', pn: ti + 1, title: NAMES[L][ti], items: d.recap, topic: t.id, dropN: X.SPLIT(X.endP(X.speak(say.part(ti + 1, NAMES[L][ti]), L), L)).length }, [[0, X.endP(X.speak(say.part(ti + 1, NAMES[L][ti]), L), L)], [0, X.endP(say.keys, L)], ...d.recap.flatMap((r, i) => speakAll(r, i + 1))]);
    d.sections.forEach((sec, si) => {
      const vis = VIS[t.id][si], cards = cardsOf(sec.body, vis ? (large ? 4 : 5) : (large ? 6 : 6));
      const [t1, t2] = titleSplit(sec.h);
      push({ type: 'sec', title: t1, hl: t2, cards, vis, topic: t.id, sec: si }, [[0, X.endP(X.speak(/[?]$/.test(X.plain(sec.h)) ? X.plain(sec.h) : say.look(X.plain(sec.h)), L), L)], ...cards.flatMap((c, i) => speakAll(c, i + 1))]);
    });
    const tb = d.table;
    push({ type: 'table', title: tb.title, table: tb, topic: t.id, vis: TABLE_VIS[t.id] === undefined ? null : TABLE_VIS[t.id] }, [[0, X.endP(X.speak(say.table(X.plain(tb.title)), L), L)], ...tb.rows.map((r, i) => [i + 1, X.endP(X.speak(r[0] + ': ' + r.slice(1).join(', '), L), L)])]);
    if (large) push({ type: 'rem', title: d.keyList.title, items: d.keyList.items, topic: t.id }, [[0, X.endP(say.rem, L)], ...d.keyList.items.flatMap((x, i) => speakAll(x, i + 1))]);
  });
  push({ type: 'close' }, X.SPLIT(say.close).map(t => [0, t]));
  out.forEach((s, i) => { s.n = i + 1; s.total = out.length; s.ui = u; s.lang = L; s.kind = kind; });
  return out;
}

(async () => {
  const only = process.argv[2]; /* optional: en|kn|hi */
  const b = await chromium.launch(); const p = await b.newPage();
  await p.goto('http://localhost:8785/scripts/pu1-ch11/slides.html'); await p.evaluate(() => document.fonts.ready);
  const NARR = { std: {}, large: {} }, CUES = { std: {}, large: {} }, man = {};
  for (const kind of ['std', 'large']){
    const W = kind === 'large' ? 1920 : 1600, H = kind === 'large' ? 1080 : 900;
    await p.setViewportSize({ width: W, height: H });
    for (const L of LANGS){
      const D = deck(L, kind);
      man[kind] = D.length;
      if (L === 'en' && kind === 'large'){
        man.osParts = S.topics.map((t, i) => ({ from: D.findIndex(s => s.type === 'part' && s.topic === t.id), en: NAMES.en[i], kn: NAMES.kn[i], hi: NAMES.hi[i] }));
        man.osSkip = [1];
        man.secSlide = {}; D.forEach((s, i) => { if (s.type === 'sec') (man.secSlide[s.topic] = man.secSlide[s.topic] || {})['sec' + s.sec] = i; if (s.type === 'table') (man.secSlide[s.topic] = man.secSlide[s.topic] || {}).table = i; if (s.type === 'part') (man.secSlide[s.topic] = man.secSlide[s.topic] || {}).recap = i; });
      }
      NARR[kind][L] = D.map(s => s.narr.map(x => x[1]).join(' '));
      if (kind === 'large'){ man.osDrop = man.osDrop || {}; man.osDrop[L] = {}; D.forEach((s, i) => { if (s.dropN) man.osDrop[L][i] = Array.from({ length: s.dropN }, (_, k) => k); }); }
      CUES[kind][L] = [];
      if (only && only !== L){ continue; }
      const dir = path.join(A, (kind === 'large' ? 'proj/' : '') + (L === 'en' ? '' : L + '/')); fs.mkdirSync(dir, { recursive: true });
      for (const s of D){
        const rects = await p.evaluate(s => window.renderSlide(s), s);
        const k = 1920 / W;
        /* one cue per narration sentence, in 1920-wide slide coordinates */
        CUES[kind][L].push(s.narr.map(([c]) => { const r = rects[c] || rects[0]; return r ? r.map(v => Math.round(v * k)) : null; }));
        await p.screenshot({ path: path.join(dir, 'slide-' + String(s.n).padStart(2, '0') + '.jpg'), type: 'jpeg', quality: 84 });
      }
      /* check that the app's own sentence split gives the same count as our cue list */
      NARR[kind][L].forEach((t, i) => { const n = X.SPLIT(t).length, m = D[i].narr.length; if (n !== m) console.log('SPLIT MISMATCH', kind, L, i, n, m); });
      console.log(kind, L, D.length, 'slides');
    }
  }
  await b.close();
  if (!only){
    fs.writeFileSync(path.join(A, 'narration.json'), JSON.stringify(NARR));
    fs.writeFileSync(path.join(A, 'spot-cues.json'), JSON.stringify(CUES));
    const mf = path.join(A, 'manifest.json'); let M = {}; try { M = JSON.parse(fs.readFileSync(mf, 'utf8')); } catch (e) {}
    Object.assign(M, man); fs.writeFileSync(mf, JSON.stringify(M, null, 1));
  }
})();
