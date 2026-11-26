/* Switches the Ch11 Class Presentation "Large Text · Projector" deck to Narendra Sir's own deck
   (PU1_Ch11_Photosynthesis_Large_Text, 50 slides in pu1-ch11-assets/projector/, English slides in every language,
   narration in EN/KN/HI from projector-narration.js).
   The older 80-slide large deck (pu1-ch11-assets/proj/) still drives the One-Shot revision and the Study-mode
   "Explain" visuals, whose scripts, part boundaries and highlight boxes are tied to its slide numbers; it is kept
   under the deck key "oslarge". Safe to run again. node scripts/pu1-ch11/projector-deck.js */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..'), A = path.join(ROOT, 'pu1-ch11-assets');
const NAR = require('./projector-narration.js');
const N = fs.readdirSync(path.join(A, 'projector')).filter(f => /^slide-\d+\.jpg$/.test(f)).length;
if (NAR.length !== N || NAR.some(x => x.length !== 3 || x.some(t => typeof t !== 'string' || t.length < 20))) throw new Error('narration must have ' + N + ' x [en, kn, hi]');

/* narration.json / spot-cues.json: old deck -> "oslarge", new deck -> "large" */
const nj = path.join(A, 'narration.json'), narr = JSON.parse(fs.readFileSync(nj, 'utf8'));
if (!narr.oslarge) narr.oslarge = narr.large;
narr.large = { en: NAR.map(x => x[0]), kn: NAR.map(x => x[1]), hi: NAR.map(x => x[2]) };
fs.writeFileSync(nj, JSON.stringify(narr));
const cj = path.join(A, 'spot-cues.json'), cues = JSON.parse(fs.readFileSync(cj, 'utf8'));
if (!cues.oslarge && cues.large) cues.oslarge = cues.large;
delete cues.large;   /* no highlight boxes for the new deck: the narration plays without the moving spotlight */
fs.writeFileSync(cj, JSON.stringify(cues));

/* pu1-ch11.html */
const hp = path.join(ROOT, 'pu1-ch11.html');
let s = fs.readFileSync(hp, 'utf8');
const rep = (a, b, all) => { if (!s.includes(a)) { if (s.includes(b)) return; throw new Error('not found: ' + a.slice(0, 90)); } s = all ? s.split(a).join(b) : s.replace(a, () => b); };
const list = (dir, n) => JSON.stringify(Array.from({ length: n }, (_, i) => 'pu1-ch11-assets/' + dir + 'slide-' + String(i + 1).padStart(2, '0') + '.jpg'));
s = s.replace(/^const CLASS_SLIDES_LARGE = .*$/m, () => 'const CLASS_SLIDES_LARGE = ' + list('projector/', N) + ';   /* Narendra Sir\'s Large Text deck (scripts/pu1-ch11/projector-deck.js) */');
if (!/^const CLASS_SLIDES_OS = /m.test(s)) s = s.replace(/^(const CLASS_SLIDES_LARGE = .*)$/m, (m) => m + '\nconst CLASS_SLIDES_OS = ' + list('proj/', 80) + ';   /* older 80-slide large deck: One-Shot revision + Explain visuals */');
rep("  large: {en: CLASS_SLIDES_LARGE, kn: pptDeckList('pu1-ch11-assets/proj/kn/', CLASS_SLIDES_LARGE.length), hi: pptDeckList('pu1-ch11-assets/proj/hi/', CLASS_SLIDES_LARGE.length)}",
    "  large: {en: CLASS_SLIDES_LARGE, kn: CLASS_SLIDES_LARGE, hi: CLASS_SLIDES_LARGE},   /* English slides; Explain narration follows the chosen language */\n  oslarge: {en: CLASS_SLIDES_OS, kn: pptDeckList('pu1-ch11-assets/proj/kn/', CLASS_SLIDES_OS.length), hi: pptDeckList('pu1-ch11-assets/proj/hi/', CLASS_SLIDES_OS.length)}");
/* Explain visuals (Study / Concepts) */
rep("  const lang = PPT_DECKS.large[currentLang] ? currentLang : 'en';\n  const src = PPT_DECKS.large[lang][idx];", "  const lang = PPT_DECKS.oslarge[currentLang] ? currentLang : 'en';\n  const src = PPT_DECKS.oslarge[lang][idx];");
rep("(idx===0 || idx===PPT_DECKS.large[lang].length-1)", "(idx===0 || idx===PPT_DECKS.oslarge[lang].length-1)");
rep("const ss = pptSentences((N.large[lang] || N.large.en)[idx] || '');", "const ss = pptSentences((N.oslarge[lang] || N.oslarge.en)[idx] || '');");
rep("const box = C && C.large && C.large[lang] && C.large[lang][idx] && C.large[lang][idx][bi];", "const box = C && C.oslarge && C.oslarge[lang] && C.oslarge[lang][idx] && C.oslarge[lang][idx][bi];");
/* One-Shot revision */
rep("const last = (PPT_DECKS.large.en || []).length - 1, seq = [{k:'intro', slide:0}];", "const last = (PPT_DECKS.oslarge.en || []).length - 1, seq = [{k:'intro', slide:0}];");
rep("const list = N && N.large && (N.large[L] || N.large.en), all = pptSentences(list ? list[item.slide] : '');", "const list = N && N.oslarge && (N.oslarge[L] || N.oslarge.en), all = pptSentences(list ? list[item.slide] : '');");
rep("  if(osSavedDeck === null){ osSavedDeck = pptDeck; }\n  pptDeck = 'large';", "  if(osSavedDeck === null){ osSavedDeck = pptDeck; }\n  pptDeck = 'oslarge';");
/* fresh copies of the changed JSON */
rep("fetch('pu1-ch11-assets/narration.json?v=1')", "fetch('pu1-ch11-assets/narration.json?v=2')");
s = s.replace(/fetch\('pu1-ch11-assets\/spot-cues\.json\?v=(\d+)'\)/, (m, v) => +v >= 12 ? m : "fetch('pu1-ch11-assets/spot-cues.json?v=12')");
fs.writeFileSync(hp, s);
console.log('projector deck:', N, 'slides; narration en/kn/hi; One-Shot + Explain use oslarge (' + narr.oslarge.en.length + ' slides)');
