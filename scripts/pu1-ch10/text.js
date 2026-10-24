/* Shared text helpers for PU-I Ch10 assets: plain text, speakable text, sentence split (same rule as the app). */
const ENT = { '&mdash;': ' — ', '&ndash;': '–', '&rarr;': '→', '&larr;': '←', '&amp;': '&', '&lt;': '<', '&gt;': '>', '&lsquo;': '‘', '&rsquo;': '’', '&ldquo;': '“', '&rdquo;': '”', '&divide;': '÷', '&nbsp;': ' ', '&middot;': '·', '&#8596;': '↔' };
const SUB = { '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4' };
function plain(h){
  return String(h).replace(/<sub>(.*?)<\/sub>/g, '$1').replace(/<[^>]+>/g, '').replace(/&[a-z#0-9]+;/gi, m => ENT[m] != null ? ENT[m] : ' ').replace(/[₀-₄]/g, c => SUB[c]).replace(/\s+/g, ' ').trim();
}
const TO = { en: ' to ', kn: ' ನಂತರ ', hi: ' फिर ' };
const WORDS = {
  en: [[/\be\.g\.\s*/g, 'for example, '], [/\bi\.e\.\s*/g, 'that is, '], [/\betc\./g, 'and so on.'], [/~\s*/g, 'about '], [/>\s*95%/g, 'more than 95%'], [/>\s*1000/g, 'more than 1000'], [/\bvs\.?\b/g, 'versus'], [/\bDa\b/g, 'daltons'], [/\bmin\b/g, 'minutes'], [/\bh\b(?=[ ,.;)]|$)/g, 'hours']],
  kn: [[/ಉದಾ\.\s*/g, 'ಉದಾಹರಣೆಗೆ, '], [/~\s*/g, 'ಸುಮಾರು '], [/>\s*95%/g, '95% ಕ್ಕಿಂತ ಹೆಚ್ಚು']],
  hi: [[/जैसे\s*/g, 'जैसे '], [/~\s*/g, 'लगभग '], [/>\s*95%/g, '95% से अधिक']]
};
/* speakable: no symbols the voice would stumble on, and no internal ". " that would split a sentence */
function speak(h, L){
  let t = plain(h);
  (WORDS[L] || WORDS.en).forEach(([a, b]) => { t = t.replace(a, b); });
  t = t.replace(/\((i{1,3}|iv|v|vi)\)\s*/g, '').replace(/\s*[→⇌↔]\s*/g, TO[L] || TO.en).replace(/\s*[—–]\s*/g, ', ').replace(/[“”"‘’]/g, '').replace(/\s*·\s*/g, ', ').replace(/\s*:\s*/g, ': ').replace(/\s*;\s*/g, '; ')
       .replace(/\s*\+\s*/g, L === 'kn' ? ' ಮತ್ತು ' : L === 'hi' ? ' और ' : ' plus ').replace(/\s*=\s*/g, L === 'kn' ? ' ಎಂದರೆ ' : L === 'hi' ? ' यानी ' : ' means ')
       .replace(/\s*\(\s*/g, ', ').replace(/\s*\)/g, ',').replace(/,\s*([,.!?।])/g, '$1').replace(/,\s*,/g, ',').replace(/\s+/g, ' ').trim().replace(/,$/, '');
  return t;
}
const SPLIT = t => (t || '').split(/(?<=[.!?।])\s+/).map(x => x.trim()).filter(Boolean);
function endP(t, L){ return /[.!?।]$/.test(t) ? t : t + (L === 'hi' ? '।' : '.'); }
/* sentences of a block of html, each guaranteed to end in punctuation */
function sentences(h, L){ return SPLIT(speak(h, L)).map(x => endP(x, L)); }
/* split display html into sentences (keeps markup; never splits after e.g./i.e./ಉದಾ.) */
function displaySentences(h){
  const out = []; let cur = '';
  const parts = String(h).split(/(?<=[.!?।](?:<\/b>)?)\s+/);
  parts.forEach(p => { cur = cur ? cur + ' ' + p : p; if (!/(\be\.g\.|\bi\.e\.|ಉದಾ\.|\bvs\.|\bNo\.)(<\/b>)?$/.test(cur)) { out.push(cur); cur = ''; } });
  if (cur) out.push(cur);
  return out;
}
module.exports = { plain, speak, SPLIT, endP, sentences, displaySentences };
