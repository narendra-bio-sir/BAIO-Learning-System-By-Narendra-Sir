/* Makes Narendra Sir's own deck (PU1_Ch11_Photosynthesis_Large_Text, 50 slides in pu1-ch11-assets/projector/)
   THE large deck of Chapter 11, everywhere the app uses it:
   - Class Presentation "Large Text · Projector" (English slides; "Explain this slide" in EN/KN/HI from
     projector-narration.js),
   - the One-Shot revision (9 parts re-mapped onto the new slides),
   - the "Narendra Sir explains" visuals in Study Mode (each section shows its matching new slide).
   The older generated 80-slide deck (pu1-ch11-assets/proj/) is removed.
   Run after slides.js / explain.js if those are ever re-run. Safe to run again.
   node scripts/pu1-ch11/projector-deck.js */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..'), A = path.join(ROOT, 'pu1-ch11-assets');
const NAR = require('./projector-narration.js');
const N = fs.readdirSync(path.join(A, 'projector')).filter(f => /^slide-\d+\.jpg$/.test(f)).length;
if (NAR.length !== N || NAR.some(x => x.length !== 3 || x.some(t => typeof t !== 'string' || t.length < 20))) throw new Error('narration must have ' + N + ' x [en, kn, hi]');

/* One-Shot parts: 0-based index of the first slide of each part (slide 1 = cover, slide 50 = closing) */
const OS_PARTS = [
  { from: 1,  en: 'Early Experiments & the Equation', kn: 'ಆರಂಭಿಕ ಪ್ರಯೋಗಗಳು ಮತ್ತು ಸಮೀಕರಣ', hi: 'प्रारंभिक प्रयोग और समीकरण' },
  { from: 10, en: 'Chloroplast & Photosynthetic Pigments', kn: 'ಹರಿತ್ತಿಲವ ಮತ್ತು ದ್ಯುತಿಸಂಶ್ಲೇಷಕ ವರ್ಣದ್ರವ್ಯಗಳು', hi: 'हरितलवक और प्रकाश संश्लेषी वर्णक' },
  { from: 16, en: 'Light Reaction & Photosystems', kn: 'ಬೆಳಕಿನ ಕ್ರಿಯೆ ಮತ್ತು ದ್ಯುತಿವ್ಯವಸ್ಥೆಗಳು', hi: 'प्रकाश अभिक्रिया और प्रकाश तंत्र' },
  { from: 18, en: 'Z Scheme, Cyclic Photophosphorylation & Photolysis', kn: 'Z ಯೋಜನೆ, ಚಕ್ರೀಯ ದ್ಯುತಿ ಫಾಸ್ಫೊರಿಲೀಕರಣ ಮತ್ತು ದ್ಯುತಿವಿಭಜನೆ', hi: 'Z योजना, चक्रीय प्रकाश फॉस्फोरिलीकरण और प्रकाश अपघटन' },
  { from: 26, en: 'Chemiosmotic Hypothesis: Making ATP', kn: 'ರಸಾಯನಾಭಿಸರಣ ಊಹೆ: ATP ತಯಾರಿಕೆ', hi: 'रसोपरासरण परिकल्पना: ATP का निर्माण' },
  { from: 29, en: 'Biosynthetic Phase: The Calvin (C3) Cycle', kn: 'ಜೈವಸಂಶ್ಲೇಷಕ ಹಂತ: ಕೆಲ್ವಿನ್ (C3) ಚಕ್ರ', hi: 'जैव-संश्लेषी चरण: केल्विन (C3) चक्र' },
  { from: 34, en: 'C4 Pathway & Kranz Anatomy', kn: 'C4 ಮಾರ್ಗ ಮತ್ತು ಕ್ರಾನ್ಜ್ ಅಂಗರಚನೆ', hi: 'C4 पथ और क्रैन्ज़ शारीरिकी' },
  { from: 40, en: 'Photorespiration (C2 Pathway)', kn: 'ದ್ಯುತಿಶ್ವಸನ (C2 ಮಾರ್ಗ)', hi: 'प्रकाश श्वसन (C2 पथ)' },
  { from: 43, en: 'Factors Affecting Photosynthesis', kn: 'ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಯ ಮೇಲೆ ಪ್ರಭಾವ ಬೀರುವ ಅಂಶಗಳು', hi: 'प्रकाश संश्लेषण को प्रभावित करने वाले कारक' }
];
/* Study Mode block -> 0-based slide shown while Narendra Sir explains it */
const SEC_SLIDE = {
  discovery:    { recap: 1,  sec0: 1,  sec1: 1,  sec2: 2,  sec3: 4,  sec4: 7,  sec5: 9,  table: 8 },
  chloroplast:  { recap: 10, sec0: 10, sec1: 10, sec2: 11, sec3: 14, sec4: 13, sec5: 15, table: 14 },
  light:        { recap: 16, sec0: 16, sec1: 16, sec2: 17, sec3: 17, sec4: 24, sec5: 25, table: 21 },
  electron:     { recap: 18, sec0: 22, sec1: 18, sec2: 18, sec3: 19, sec4: 20, table: 23 },
  chemiosmosis: { recap: 26, sec0: 26, sec1: 27, sec2: 28, sec3: 26, sec4: 29, table: 26 },
  calvin:       { recap: 30, sec0: 29, sec1: 30, sec2: 32, sec3: 32, sec4: 32, sec5: 33, table: 33 },
  c4:           { recap: 34, sec0: 34, sec1: 35, sec2: 36, sec3: 36, sec4: 38, table: 38 },
  photoresp:    { recap: 40, sec0: 41, sec1: 41, sec2: 40, sec3: 42, sec4: 39, table: 39 },
  factors:      { recap: 43, sec0: 43, sec1: 43, sec2: 45, sec3: 46, sec4: 47, sec5: 47, table: 43 }
};
for (const t in SEC_SLIDE) for (const k in SEC_SLIDE[t]) if (SEC_SLIDE[t][k] < 0 || SEC_SLIDE[t][k] >= N) throw new Error('bad slide ' + t + '.' + k);
OS_PARTS.forEach((p, i) => { if (i && p.from <= OS_PARTS[i - 1].from) throw new Error('parts out of order'); });

/* data files */
const rj = f => JSON.parse(fs.readFileSync(path.join(A, f), 'utf8')), wj = (f, o) => fs.writeFileSync(path.join(A, f), JSON.stringify(o));
const narr = rj('narration.json'); narr.large = { en: NAR.map(x => x[0]), kn: NAR.map(x => x[1]), hi: NAR.map(x => x[2]) }; delete narr.oslarge; wj('narration.json', narr);
const cues = rj('spot-cues.json'); delete cues.large; delete cues.oslarge; wj('spot-cues.json', cues);   /* no highlight boxes on the new deck */
const ex = rj('explain.json'); ex.vis.study = SEC_SLIDE; wj('explain.json', ex);
const man = JSON.parse(fs.readFileSync(path.join(A, 'manifest.json'), 'utf8'));
Object.assign(man, { large: N, osParts: OS_PARTS, osSkip: [], osDrop: { en: {}, kn: {}, hi: {} }, secSlide: SEC_SLIDE, largeDeck: 'projector' });
fs.writeFileSync(path.join(A, 'manifest.json'), JSON.stringify(man, null, 1));

/* pu1-ch11.html */
const hp = path.join(ROOT, 'pu1-ch11.html');
let s = fs.readFileSync(hp, 'utf8');
const rep = (a, b) => { if (s.includes(a)) s = s.split(a).join(b); else if (!s.includes(b)) throw new Error('not found: ' + a.slice(0, 90)); };
const list = (dir, n) => JSON.stringify(Array.from({ length: n }, (_, i) => 'pu1-ch11-assets/' + dir + 'slide-' + String(i + 1).padStart(2, '0') + '.jpg'));
s = s.replace(/^const CLASS_SLIDES_LARGE = .*$/m, () => 'const CLASS_SLIDES_LARGE = ' + list('projector/', N) + ';   /* Narendra Sir\'s Large Text deck (scripts/pu1-ch11/projector-deck.js) */');
s = s.replace(/^const CLASS_SLIDES_OS = .*\n/m, '');
s = s.replace(/^  large: \{en: CLASS_SLIDES_LARGE, kn: [^\n]*\n(  oslarge: [^\n]*\n)?/m, () => "  large: {en: CLASS_SLIDES_LARGE, kn: CLASS_SLIDES_LARGE, hi: CLASS_SLIDES_LARGE}   /* English slides; narration follows the chosen language */\n");
s = s.replace(/^(  std: .*?\}),\n(  large: )/m, '$1,\n$2');
rep('PPT_DECKS.oslarge', 'PPT_DECKS.large');
rep('(N.oslarge[lang] || N.oslarge.en)', '(N.large[lang] || N.large.en)');
rep('C && C.oslarge && C.oslarge[lang] && C.oslarge[lang][idx] && C.oslarge[lang][idx][bi]', 'C && C.large && C.large[lang] && C.large[lang][idx] && C.large[lang][idx][bi]');
rep("N && N.oslarge && (N.oslarge[L] || N.oslarge.en)", "N && N.large && (N.large[L] || N.large.en)");
rep("pptDeck = 'oslarge';", "pptDeck = 'large';");
s = s.replace(/^const OS_SKIP = .*$/m, 'const OS_SKIP = [];   /* 0-based slide indices left out of the revision */');
s = s.replace(/^const OS_DROP = .*$/m, 'const OS_DROP = {"en":{},"kn":{},"hi":{}};   /* per language: slide index -> sentence numbers left out */');
s = s.replace(/^const OS_PARTS = .*$/m, () => 'const OS_PARTS = ' + JSON.stringify(OS_PARTS.map(({ from, en, kn, hi }) => ({ from, en, kn, hi }))) + ';');
/* fresh copies of the changed JSON */
const bump = (file, v) => { s = s.replace(new RegExp("fetch\\('pu1-ch11-assets/" + file.replace('.', '\\.') + "\\?v=(\\d+)'\\)"), (m, o) => +o >= v ? m : "fetch('pu1-ch11-assets/" + file + "?v=" + v + "')"); };
bump('narration.json', 3); bump('spot-cues.json', 13); bump('explain.json', 3);
if (/oslarge|CLASS_SLIDES_OS|assets\/proj\//.test(s)) throw new Error('old deck still referenced');
fs.writeFileSync(hp, s);

/* old generated large deck */
const old = path.join(A, 'proj');
if (fs.existsSync(old)) fs.rmSync(old, { recursive: true });
console.log('large deck =', N, 'slides (projector/); One-Shot', OS_PARTS.length, 'parts; Study explain visuals re-mapped; proj/ removed');
