/* BAIO speech helper — loaded on every page that reads text aloud.
   Before any text is spoken, class names are rewritten so the voice says them clearly:
   "I PUC" → "First year P U C", "II PUC" → "Second year P U C", "BAIO" → "Bio" (Kannada: ಪ್ರಥಮ / ದ್ವಿತೀಯ ಪಿ ಯು ಸಿ, Hindi: प्रथम / द्वितीय वर्ष पी यू सी).
   Works for every page because it wraps speechSynthesis.speak itself. */
(function(){
  if (!('speechSynthesis' in window) || window.BAIOSpeak) return;
  const W = {
    en:{ one:'First year P U C', two:'Second year P U C', both:'First and Second year P U C', puc:'P U C', pu:'P U', ch:'Chapter', baio:'Bio' },
    kn:{ one:'ಪ್ರಥಮ ಪಿ ಯು ಸಿ', two:'ದ್ವಿತೀಯ ಪಿ ಯು ಸಿ', both:'ಪ್ರಥಮ ಮತ್ತು ದ್ವಿತೀಯ ಪಿ ಯು ಸಿ', puc:'ಪಿ ಯು ಸಿ', pu:'ಪಿ ಯು', ch:'ಅಧ್ಯಾಯ', baio:'ಬಯೋ' },
    hi:{ one:'प्रथम वर्ष पी यू सी', two:'द्वितीय वर्ष पी यू सी', both:'प्रथम और द्वितीय वर्ष पी यू सी', puc:'पी यू सी', pu:'पी यू', ch:'अध्याय', baio:'बायो' }
  };
  const E = '(?![A-Za-z0-9])', B = '(?<![A-Za-z0-9])';
  function fix(text, lang){
    if (!text) return text;
    const w = W[String(lang || '').slice(0, 2).toLowerCase()] || W.en;
    return String(text)
      // "I & II PUC", "I and II PUC", "I/II PUC"
      .replace(new RegExp(B + 'I\\s*(?:&|and|/)\\s*II\\s*-?\\s*PUC?' + E, 'g'), w.both)
      // II PUC, II-PUC, PUC-II, PUC II, PUC-2, PU-II, PU II, 2nd PUC, IIPUC
      .replace(new RegExp(B + '(?:II\\s*-?\\s*PUC?|2nd\\s*PUC?|PUC?\\s*-?\\s*(?:II|2))' + E, 'g'), w.two)
      // I PUC, I-PUC, PUC-I, PUC-1, PU-I, PU I, 1st PUC
      .replace(new RegExp(B + '(?:I\\s*-?\\s*PUC?|1st\\s*PUC?|PUC?\\s*-?\\s*(?:I|1))' + E, 'g'), w.one)
      // any other PUC / PU
      .replace(new RegExp(B + 'PUC' + E, 'g'), w.puc)
      .replace(new RegExp(B + 'PU' + E, 'g'), w.pu)
      // "BAIO" is said "Bio"
      .replace(/(?<![A-Za-z])(?:BAIO|Baio)(?![A-Za-z])/g, w.baio)
      // "Ch 8" / "Ch. 8" → "Chapter 8"
      .replace(/(?<![A-Za-z])Ch\.?\s+(\d+)/g, w.ch + ' $1');
  }
  const ss = window.speechSynthesis, orig = ss.speak.bind(ss);
  ss.speak = function(u){
    try { if (u && u.text) u.text = fix(u.text, u.lang || (u.voice && u.voice.lang) || document.documentElement.lang); } catch (e) {}
    return orig(u);
  };
  /* Pick a male or female voice for a language. Browsers do not report a voice's gender, so it is read from
     well-known voice names (Microsoft, Google, Apple, Samsung). When the phone has no voice of the wanted gender
     (most Android phones offer one voice per language), the pitch is shifted instead: higher for female, lower for male. */
  const FEMALE = /female|woman|girl|heera|neerja|swara|sapna|kalpana|lekha|veena|aditi|raveena|priya|isha|kajal|zira|samantha|karen|moira|tessa|fiona|victoria|susan|hazel|catherine|aria|jenny|sonia|libby|natasha|ananya|pallavi|google हिन्दी|google us english/i;
  const MALE = /(^|[^e])male|\bman\b|\bboy\b|ravi|hemant|prabhat|madhur|gagan|rishi|kunal|arjun|david|mark|daniel|alex|fred|\bguy\b|ryan|george|aaron|rahul|thomas|oliver/i;
  const genderOf = v => { const n = (v.name || '') + ' ' + (v.voiceURI || ''); return FEMALE.test(n) ? 'f' : MALE.test(n) ? 'm' : ''; };
  function voices(lang){ const l = String(lang || 'en').slice(0, 2).toLowerCase(), all = ss.getVoices();
    let v = all.filter(x => new RegExp('^' + l + '[-_]IN', 'i').test(x.lang)); if (!v.length) v = all.filter(x => new RegExp('^' + l, 'i').test(x.lang)); return v; }
  // gender: 'f' | 'm' | '' ; returns {voice, pitch}
  function voiceFor(lang, gender){ const list = voices(lang); if (!gender) return { voice: list[0] || null, pitch: 1 };
    const exact = list.find(v => genderOf(v) === gender);
    if (exact) return { voice: exact, pitch: gender === 'f' ? 1.08 : .95 };
    const neutral = list.find(v => !genderOf(v)) || list[0] || null, other = neutral ? genderOf(neutral) : '';
    // shift pitch away from the voice we had to use
    return { voice: neutral, pitch: gender === 'f' ? (other === 'm' ? 1.6 : 1.35) : (other === 'f' ? .62 : .75) };
  }
  window.BAIOSpeak = { fix, voices, voiceFor, genderOf };
})();
