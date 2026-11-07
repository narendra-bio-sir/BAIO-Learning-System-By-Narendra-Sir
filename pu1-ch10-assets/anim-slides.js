/* PU-I Ch10 Animated deck: 12 step-by-step topics (EN/KN/HI). Drawn live with the BAIO drawing kit
   (anim/draw.js, anim/cc-draw.js, anim/diagrams.js). Each step shows/hides groups with in{n}/out{n} classes. */
(function(){
const D = window.D, C = window.C, S = window.STAGE, R = C.RED, B = C.BLUE;
/* art wrapper: collect gradient defs used by the drawing */
const ART = f => L => { D.defs = {}; const body = f(L); return `<defs>${Object.values(D.defs).join('')}</defs>` + body; };
const F = (a, b, s) => `<g class="in${a}${b != null ? ' out' + b : ''}">${s}</g>`;
const tx = (x, y, t, fs, c, o) => `<text x="${x}" y="${y}" text-anchor="${(o && o.a) || 'middle'}" font-size="${fs || 46}" fill="${c || '#0c1830'}">${t}</text>`;
const lab = (x, y, t, c) => `<text x="${x}" y="${y}" font-size="46" fill="${c || '#0b7f72'}" stroke="#fffdf6" stroke-width="12" stroke-linejoin="round" paint-order="stroke">${t}</text>`;
const ARW = (x1, y1, x2, y2, c) => D.arrow(x1, y1, x2, y2, c || '#0c1830', 6);

const SL = [];
/* 1. cell cycle wheel */
SL.push({ title: T('The <em>cell cycle</em> wheel', '<em>ಕೋಶ ಚಕ್ರ</em>ದ ಗಡಿಯಾರ', '<em>कोशिका चक्र</em> का पहिया'),
  css: `#wh{transform:scale(.6);transform-origin:960px 500px} .s1 #wh{transform:scale(1)}`,
  art: ART(L => { const cx = 760, cy = 500, r = 330, ri = 150; const pt = (a, rr) => [cx + rr * Math.sin(a * Math.PI / 180), cy - rr * Math.cos(a * Math.PI / 180)];
    const seg = (a0, a1, c, n, cls) => { const [x0, y0] = pt(a0, r), [x1, y1] = pt(a1, r), [x2, y2] = pt(a1, ri), [x3, y3] = pt(a0, ri), big = a1 - a0 > 180 ? 1 : 0; const [tx_, ty_] = pt((a0 + a1) / 2, (r + ri) / 2);
      return `<g class="${cls}"><path d="M${x0},${y0} A${r},${r} 0 ${big} 1 ${x1},${y1} L${x2},${y2} A${ri},${ri} 0 ${big} 0 ${x3},${y3} Z" fill="${D.lg(c)}" stroke="#fff" stroke-width="8"/>${tx(tx_, ty_ + 18, n, n === 'M' ? 46 : 62)}</g>`; };
    let s = `<g id="wh" class="g">` + seg(60, 210, '#7fb7e6', 'G₁', 'in1') + seg(210, 310, '#f2b75b', 'S', 'in1') + seg(310, 390, '#9ad08b', 'G₂', 'in1') + seg(30, 60, '#e7748a', 'M', 'in2');
    s += `<circle cx="${cx}" cy="${cy}" r="${ri - 6}" fill="${D.rg('#fff6e0')}" stroke="#e3cf9d" stroke-width="4"/>` + C.cell(cx, cy, 80, 66, { dots: 4 }) + C.nucleus(cx, cy, 30, {}) + '</g>';
    s += F(1, null, lab(1220, 320, T('Interphase: G₁ → S → G₂', 'ಇಂಟರ್‌ಫೇಸ್: G₁ → S → G₂', 'अंतरावस्था: G₁ → S → G₂')[L]) + lab(1220, 400, T('more than 95% of the time', '95% ಕ್ಕಿಂತ ಹೆಚ್ಚು ಸಮಯ', '95% से अधिक समय')[L], '#8a6508'));
    s += F(2, null, lab(1220, 520, T('M phase: about 1 hour', 'M ಹಂತ: ಸುಮಾರು 1 ಗಂಟೆ', 'M प्रावस्था: लगभग 1 घंटा')[L], '#b3261e'));
    const [gx, gy] = pt(128, r); s += F(3, null, ARW(gx, gy, 1180, 760, '#6b5aa6') + `<circle cx="1240" cy="770" r="62" fill="${D.rg('#cfc4f0')}" stroke="#6b5aa6" stroke-width="5"/>` + tx(1240, 788, 'G₀', 50, '#3b2a78') + lab(1330, 790, T('quiescent', 'ನಿಶ್ಚಲ', 'शांत')[L], '#6b5aa6'));
    return s; }),
  steps: [
    T('Every dividing cell goes round and round a cycle. This is the cell cycle.', 'ವಿಭಜನೆಯಾಗುವ ಪ್ರತಿ ಕೋಶವೂ ಒಂದು ಚಕ್ರದಲ್ಲಿ ಸುತ್ತುತ್ತದೆ. ಇದೇ ಕೋಶ ಚಕ್ರ.', 'हर विभाजित होने वाली कोशिका एक चक्र में घूमती है। यही कोशिका चक्र है।'),
    T('Most of the time is interphase: G one, S and G two. It takes more than ninety five percent of the cycle.', 'ಹೆಚ್ಚಿನ ಸಮಯ ಇಂಟರ್‌ಫೇಸ್: G ಒಂದು, S ಮತ್ತು G ಎರಡು. ಇದು ಚಕ್ರದ ತೊಂಬತ್ತೈದು ಶೇಕಡಾಕ್ಕಿಂತ ಹೆಚ್ಚು ಸಮಯ.', 'अधिकांश समय अंतरावस्था है: G एक, S और G दो। यह चक्र का पंचानबे प्रतिशत से अधिक समय लेती है।'),
    T('The actual division, the M phase, is short. In a human cell it lasts only about one hour of twenty four.', 'ನಿಜವಾದ ವಿಭಜನೆ, M ಹಂತ, ಚಿಕ್ಕದು. ಮಾನವ ಕೋಶದಲ್ಲಿ ಇಪ್ಪತ್ನಾಲ್ಕು ಗಂಟೆಗಳಲ್ಲಿ ಕೇವಲ ಸುಮಾರು ಒಂದು ಗಂಟೆ.', 'वास्तविक विभाजन, M प्रावस्था, छोटी है। मानव कोशिका में चौबीस में से केवल लगभग एक घंटा।'),
    T('Cells that stop dividing leave G one and enter G zero, the quiescent stage, like heart cells.', 'ವಿಭಜನೆ ನಿಲ್ಲಿಸುವ ಕೋಶಗಳು G ಒಂದರಿಂದ ಹೊರಬಂದು G ಸೊನ್ನೆ, ನಿಶ್ಚಲ ಹಂತಕ್ಕೆ ಹೋಗುತ್ತವೆ, ಹೃದಯದ ಕೋಶಗಳಂತೆ.', 'जो कोशिकाएँ बँटना बंद करती हैं, वे G एक से निकलकर G शून्य, शांत अवस्था में जाती हैं, जैसे हृदय कोशिकाएँ।')
  ] });

/* 2. S phase */
SL.push({ title: T('S phase: <em>DNA doubles</em>, chromosomes don\'t', 'S ಹಂತ: <em>DNA ದ್ವಿಗುಣ</em>, ವರ್ಣತಂತುಗಳಲ್ಲ', 'S प्रावस्था: <em>DNA दोगुना</em>, गुणसूत्र नहीं'),
  css: `#cpy{transform:translate(-150px,0);opacity:0} .s1 #cpy{transform:translate(0,0);opacity:1}`,
  art: ART(L => {
    let s = C.chromosome(760, 480, 420, 0, R, { single: true, w: 52, bands: false, gap: 0 }).replace(/^/, '<g class="out1">') + '</g>';
    s += `<g id="cpy" class="g">` + C.chromosome(760, 480, 420, 0, R, { w: 52, cols: [R, '#e86a5c'], gap: 32 }) + '</g>';
    s += F(0, 1, lab(1080, 360, 'G₁ : 2C · 2n'));
    s += F(1, null, lab(1080, 360, 'G₂ : 4C · 2n', '#b3261e'));
    s += F(2, null, lab(1080, 470, T('2 sister chromatids', '2 ಸಹೋದರ ಕ್ರೊಮ್ಯಾಟಿಡ್‌ಗಳು', '2 सहोदर अर्धगुणसूत्र')[L]) + lab(1080, 560, T('1 centromere = 1 chromosome', '1 ಸೆಂಟ್ರೊಮಿಯರ್ = 1 ವರ್ಣತಂತು', '1 गुणसूत्रबिंदु = 1 गुणसूत्र')[L], '#8a6508') + ARW(1070, 540, 800, 482, '#8a6508'));
    return s; }),
  steps: [
    T('In G one, each chromosome has a single DNA molecule. The DNA content is two C.', 'G ಒಂದರಲ್ಲಿ ಪ್ರತಿ ವರ್ಣತಂತುವಿನಲ್ಲಿ ಒಂದೇ DNA ಅಣು. DNA ಪ್ರಮಾಣ ಎರಡು C.', 'G एक में हर गुणसूत्र में एक ही DNA अणु होता है। DNA मात्रा दो C है।'),
    T('In S phase the DNA is copied. The DNA content becomes four C.', 'S ಹಂತದಲ್ಲಿ DNA ನಕಲಾಗುತ್ತದೆ. DNA ಪ್ರಮಾಣ ನಾಲ್ಕು C ಆಗುತ್ತದೆ.', 'S प्रावस्था में DNA की प्रतिलिपि बनती है। DNA मात्रा चार C हो जाती है।'),
    T('But the copy stays joined at the centromere as a sister chromatid. So the chromosome number is still two n.', 'ಆದರೆ ನಕಲು ಸಹೋದರ ಕ್ರೊಮ್ಯಾಟಿಡ್ ಆಗಿ ಸೆಂಟ್ರೊಮಿಯರ್‌ನಲ್ಲಿ ಜೋಡಿಸಿಕೊಂಡೇ ಇರುತ್ತದೆ. ಆದ್ದರಿಂದ ವರ್ಣತಂತು ಸಂಖ್ಯೆ ಇನ್ನೂ ಎರಡು n.', 'पर प्रतिलिपि सहोदर अर्धगुणसूत्र के रूप में गुणसूत्रबिंदु पर जुड़ी रहती है। इसलिए गुणसूत्र संख्या अब भी दो n है।')
  ] });

/* 3-6 mitosis, using the stage drawings, cross-fading */
const big = (f, k) => S[f](960, 500, k || 1.75);
SL.push({ title: T('Prophase: <em>chromosomes appear</em>', 'ಪ್ರೊಫೇಸ್: <em>ವರ್ಣತಂತುಗಳು ಕಾಣಿಸುತ್ತವೆ</em>', 'पूर्वावस्था: <em>गुणसूत्र दिखते हैं</em>'), css: '',
  art: ART(L => F(0, 1, big('interphase')) + F(1, null, big('prophase')) + F(2, null, lab(1420, 300, T('asters', 'ಆಸ್ಟರ್‌ಗಳು', 'तारक')[L]) + ARW(1410, 290, 1180, 360)) + F(3, null, lab(1420, 760, T('envelope breaks down', 'ಹೊದಿಕೆ ಒಡೆಯುತ್ತದೆ', 'आवरण टूटता है')[L], '#6b4a95') + ARW(1410, 740, 1100, 620, '#6b4a95'))),
  steps: [
    T('Here is a cell at the end of interphase. The chromatin is long and thin inside the nucleus.', 'ಇಂಟರ್‌ಫೇಸ್ ಕೊನೆಯಲ್ಲಿರುವ ಕೋಶ ಇದು. ಕೋಶಕೇಂದ್ರದಲ್ಲಿ ಕ್ರೊಮ್ಯಾಟಿನ್ ಉದ್ದ ಮತ್ತು ತೆಳು.', 'यह अंतरावस्था के अंत की कोशिका है। केंद्रक में क्रोमैटिन लंबा और पतला है।'),
    T('In prophase the chromatin condenses. Each chromosome now shows two chromatids joined at the centromere.', 'ಪ್ರೊಫೇಸ್‌ನಲ್ಲಿ ಕ್ರೊಮ್ಯಾಟಿನ್ ಸಾಂದ್ರಗೊಳ್ಳುತ್ತದೆ. ಪ್ರತಿ ವರ್ಣತಂತು ಸೆಂಟ್ರೊಮಿಯರ್‌ನಲ್ಲಿ ಜೋಡಿಸಿದ ಎರಡು ಕ್ರೊಮ್ಯಾಟಿಡ್‌ಗಳನ್ನು ತೋರಿಸುತ್ತದೆ.', 'पूर्वावस्था में क्रोमैटिन संघनित होता है। हर गुणसूत्र में गुणसूत्रबिंदु पर जुड़े दो अर्धगुणसूत्र दिखते हैं।'),
    T('The centrosomes move to opposite poles. Their radiating microtubules are the asters.', 'ಸೆಂಟ್ರೋಸೋಮ್‌ಗಳು ವಿರುದ್ಧ ಧ್ರುವಗಳತ್ತ ಚಲಿಸುತ್ತವೆ. ಅವುಗಳಿಂದ ಹೊರಹೊಮ್ಮುವ ಸೂಕ್ಷ್ಮನಳಿಕೆಗಳೇ ಆಸ್ಟರ್‌ಗಳು.', 'तारककेंद्र विपरीत ध्रुवों की ओर जाते हैं। उनसे निकलने वाली सूक्ष्मनलिकाएँ तारक हैं।'),
    T('The nuclear envelope, nucleolus, Golgi and E R disappear by the end of prophase.', 'ಪ್ರೊಫೇಸ್ ಕೊನೆಗೆ ಕೋಶಕೇಂದ್ರ ಹೊದಿಕೆ, ನ್ಯೂಕ್ಲಿಯೋಲಸ್, ಗಾಲ್ಗಿ ಮತ್ತು ER ಕಣ್ಮರೆಯಾಗುತ್ತವೆ.', 'पूर्वावस्था के अंत तक केंद्रक आवरण, केंद्रिका, गॉल्जी और ER लुप्त हो जाते हैं।')
  ] });
SL.push({ title: T('Metaphase: <em>line up at the centre</em>', 'ಮೆಟಾಫೇಸ್: <em>ಮಧ್ಯದಲ್ಲಿ ಸಾಲು</em>', 'मध्यावस्था: <em>बीच में पंक्ति</em>'), css: '',
  art: ART(L => F(0, 1, big('prophase')) + F(1, null, big('metaphase')) + F(2, null, `<line x1="960" y1="230" x2="960" y2="770" stroke="#D4AF37" stroke-width="6" stroke-dasharray="18 12"/>` + lab(1300, 220, T('metaphase plate', 'ಮೆಟಾಫೇಸ್ ಫಲಕ', 'मध्यावस्था पट्टिका')[L], '#8a6508')) + F(3, null, lab(1290, 830, T('kinetochore', 'ಕೈನೆಟೋಕೋರ್', 'काइनेटोकोर')[L]) + ARW(1280, 800, 1000, 470))),
  steps: [
    T('At the start of metaphase the nuclear envelope has completely gone.', 'ಮೆಟಾಫೇಸ್ ಆರಂಭದಲ್ಲಿ ಕೋಶಕೇಂದ್ರ ಹೊದಿಕೆ ಸಂಪೂರ್ಣ ಕಣ್ಮರೆಯಾಗಿದೆ.', 'मध्यावस्था के आरंभ में केंद्रक आवरण पूरी तरह लुप्त हो चुका है।'),
    T('Spindle fibres from both poles catch the chromosomes and bring them to the centre.', 'ಎರಡೂ ಧ್ರುವಗಳ ಸ್ಪಿಂಡಲ್ ತಂತುಗಳು ವರ್ಣತಂತುಗಳನ್ನು ಹಿಡಿದು ಮಧ್ಯಕ್ಕೆ ತರುತ್ತವೆ.', 'दोनों ध्रुवों के तर्कु तंतु गुणसूत्रों को पकड़कर बीच में लाते हैं।'),
    T('They line up on the metaphase plate. This is the best stage to count and study chromosomes.', 'ಅವು ಮೆಟಾಫೇಸ್ ಫಲಕದ ಮೇಲೆ ಸಾಲಾಗುತ್ತವೆ. ವರ್ಣತಂತುಗಳನ್ನು ಎಣಿಸಲು ಮತ್ತು ಅಧ್ಯಯನಕ್ಕೆ ಇದು ಅತ್ಯುತ್ತಮ ಹಂತ.', 'वे मध्यावस्था पट्टिका पर संरेखित होते हैं। गुणसूत्र गिनने और अध्ययन की यह सबसे अच्छी अवस्था है।'),
    T('Each sister chromatid is attached by its kinetochore to fibres from the opposite pole.', 'ಪ್ರತಿ ಸಹೋದರ ಕ್ರೊಮ್ಯಾಟಿಡ್ ತನ್ನ ಕೈನೆಟೋಕೋರ್ ಮೂಲಕ ವಿರುದ್ಧ ಧ್ರುವದ ತಂತುಗಳಿಗೆ ಜೋಡಣೆಯಾಗಿದೆ.', 'हर सहोदर अर्धगुणसूत्र अपने काइनेटोकोर से विपरीत ध्रुव के तंतुओं से जुड़ा है।')
  ] });
SL.push({ title: T('Anaphase: <em>pulled apart</em>', 'ಅನಾಫೇಸ್: <em>ಬೇರ್ಪಡುವಿಕೆ</em>', 'पश्चावस्था: <em>अलग खिंचना</em>'),
  css: `#lft,#rgt{transition:transform 1.4s cubic-bezier(.3,.7,.2,1)} .s1 #lft{transform:translate(-120px,0)} .s1 #rgt{transform:translate(120px,0)}`,
  art: ART(L => { const k = 1.75, cx = 960, cy = 500; let s = C.cell(cx, cy, 182 * k, 136 * k, { seed: 7, dots: 10 }) + C.spindle(cx - 150 * k, cx + 150 * k, cy, 200 * k, 7);
    const CH = [[118, R, -84], [118, B, -28], [76, R, 22], [76, B, 66]];
    let l = '', r = ''; CH.forEach(([Ln, col, dy]) => { const y = cy + dy * .9 * k; l += C.daughter(cx - 20 * k, y, Ln * .55 * k, 180, col, { w: 11 * k }); r += C.daughter(cx + 20 * k, y, Ln * .55 * k, 0, col, { w: 11 * k }); });
    s += `<g id="lft" class="g">${l}</g><g id="rgt" class="g">${r}</g>` + C.aster(cx - 150 * k, cy, 40 * k, 12) + C.aster(cx + 150 * k, cy, 40 * k, 12);
    s += F(2, null, lab(1180, 230, T('centromere leads', 'ಸೆಂಟ್ರೊಮಿಯರ್ ಮುಂದೆ', 'गुणसूत्रबिंदु आगे')[L]) + ARW(1220, 240, 1238, 335));
    return s; }),
  steps: [
    T('At the start of anaphase, every centromere splits at the same moment.', 'ಅನಾಫೇಸ್ ಆರಂಭದಲ್ಲಿ ಎಲ್ಲಾ ಸೆಂಟ್ರೊಮಿಯರ್‌ಗಳು ಒಂದೇ ಕ್ಷಣದಲ್ಲಿ ಸೀಳುತ್ತವೆ.', 'पश्चावस्था के आरंभ में हर गुणसूत्रबिंदु एक साथ विभाजित होता है।'),
    T('The sister chromatids, now daughter chromosomes, move to opposite poles.', 'ಸಹೋದರ ಕ್ರೊಮ್ಯಾಟಿಡ್‌ಗಳು, ಈಗ ಮರಿ ವರ್ಣತಂತುಗಳು, ವಿರುದ್ಧ ಧ್ರುವಗಳತ್ತ ಚಲಿಸುತ್ತವೆ.', 'सहोदर अर्धगुणसूत्र, अब संतति गुणसूत्र, विपरीत ध्रुवों की ओर जाते हैं।'),
    T('The centromere leads and the arms trail behind, so each pole gets one copy of every chromosome.', 'ಸೆಂಟ್ರೊಮಿಯರ್ ಮುಂದೆ, ತೋಳುಗಳು ಹಿಂದೆ; ಹೀಗೆ ಪ್ರತಿ ಧ್ರುವಕ್ಕೂ ಪ್ರತಿ ವರ್ಣತಂತುವಿನ ಒಂದು ಪ್ರತಿ ಸಿಗುತ್ತದೆ.', 'गुणसूत्रबिंदु आगे और भुजाएँ पीछे रहती हैं, इसलिए हर ध्रुव को हर गुणसूत्र की एक प्रति मिलती है।')
  ] });
SL.push({ title: T('Telophase & <em>animal cytokinesis</em>', 'ಟೀಲೋಫೇಸ್ ಮತ್ತು <em>ಪ್ರಾಣಿ ಸೈಟೋಕೈನೆಸಿಸ್</em>', 'अंत्यावस्था और <em>जंतु साइटोकाइनेसिस</em>'), css: '',
  art: ART(L => F(0, 1, big('anaphase')) + F(1, 2, big('telophase')) + F(2, null, big('cytokinesis')) + F(1, 2, lab(1360, 830, T('furrow', 'ತೋಡು', 'खाँच')[L], '#b3261e') + ARW(1350, 805, 990, 720, '#b3261e'))),
  steps: [
    T('The two sets of chromosomes reach the poles.', 'ವರ್ಣತಂತುಗಳ ಎರಡು ಗುಂಪುಗಳು ಧ್ರುವಗಳನ್ನು ತಲುಪುತ್ತವೆ.', 'गुणसूत्रों के दोनों समूह ध्रुवों पर पहुँचते हैं।'),
    T('In telophase they decondense, and a nuclear envelope forms around each set. A furrow starts in the membrane.', 'ಟೀಲೋಫೇಸ್‌ನಲ್ಲಿ ಅವು ಸಡಿಲಗೊಂಡು ಪ್ರತಿ ಗುಂಪಿನ ಸುತ್ತ ಕೋಶಕೇಂದ್ರ ಹೊದಿಕೆ ರೂಪುಗೊಳ್ಳುತ್ತದೆ. ಪೊರೆಯಲ್ಲಿ ತೋಡು ಆರಂಭವಾಗುತ್ತದೆ.', 'अंत्यावस्था में वे विसंघनित होते हैं और हर समूह के चारों ओर केंद्रक आवरण बनता है। झिल्ली में खाँच शुरू होती है।'),
    T('The furrow deepens and joins in the centre. Two identical daughter cells are formed.', 'ತೋಡು ಆಳವಾಗಿ ಮಧ್ಯದಲ್ಲಿ ಸೇರುತ್ತದೆ. ಎರಡು ಒಂದೇ ರೀತಿಯ ಮರಿಕೋಶಗಳು ರೂಪುಗೊಳ್ಳುತ್ತವೆ.', 'खाँच गहरी होकर बीच में मिल जाती है। दो समान संतति कोशिकाएँ बनती हैं।')
  ] });
/* 7. plant cytokinesis */
SL.push({ title: T('Plant cytokinesis: <em>the cell plate</em>', 'ಸಸ್ಯ ಸೈಟೋಕೈನೆಸಿಸ್: <em>ಕೋಶ ಫಲಕ</em>', 'पादप साइटोकाइनेसिस: <em>कोशिका पट्टिका</em>'),
  css: `#plate{transform:scaleX(.05);transform-origin:960px 500px} .s1 #plate{transform:scaleX(.5)} .s2 #plate{transform:scaleX(1)}`,
  art: ART(L => C.plantCell(660, 180, 600, 640) + C.nucleus(960, 330, 60, {}) + C.nucleus(960, 670, 60, {}) + `<rect id="plate" class="g" x="672" y="490" width="576" height="20" rx="8" fill="#4f8a2e"/>` +
    F(1, null, lab(1320, 470, T('cell plate', 'ಕೋಶ ಫಲಕ', 'कोशिका पट्टिका')[L], '#2f7d32')) + F(2, null, lab(1320, 560, T('= middle lamella', '= ಮಧ್ಯ ಪಟಲ', '= मध्य पटलिका')[L], '#2f7d32'))),
  steps: [
    T('A plant cell has a rigid wall, so it cannot pinch in like an animal cell.', 'ಸಸ್ಯ ಕೋಶಕ್ಕೆ ಗಟ್ಟಿ ಭಿತ್ತಿ ಇರುವುದರಿಂದ ಪ್ರಾಣಿ ಕೋಶದಂತೆ ಹಿಸುಕಲಾಗದು.', 'पादप कोशिका की कठोर भित्ति होती है, इसलिए यह जंतु कोशिका की तरह नहीं दब सकती।'),
    T('Instead, a cell plate forms in the centre and grows outwards.', 'ಬದಲಿಗೆ, ಮಧ್ಯದಲ್ಲಿ ಕೋಶ ಫಲಕ ರೂಪುಗೊಂಡು ಹೊರಮುಖವಾಗಿ ಬೆಳೆಯುತ್ತದೆ.', 'इसके बजाय, केंद्र में कोशिका पट्टिका बनकर बाहर की ओर बढ़ती है।'),
    T('It meets the side walls. The cell plate becomes the middle lamella between the two new cells.', 'ಅದು ಪಕ್ಕದ ಭಿತ್ತಿಗಳನ್ನು ತಲುಪುತ್ತದೆ. ಕೋಶ ಫಲಕ ಎರಡು ಹೊಸ ಕೋಶಗಳ ನಡುವಿನ ಮಧ್ಯ ಪಟಲವಾಗುತ್ತದೆ.', 'यह पार्श्व भित्तियों से मिल जाती है। कोशिका पट्टिका दोनों नई कोशिकाओं के बीच मध्य पटलिका बनती है।')
  ] });
/* 8-10 prophase I */
SL.push({ title: T('Leptotene & zygotene: <em>pairing up</em>', 'ಲೆಪ್ಟೋಟೀನ್ ಮತ್ತು ಜೈಗೋಟೀನ್: <em>ಜೋಡಣೆ</em>', 'लेप्टोटीन और जाइगोटीन: <em>जोड़े बनना</em>'), css: '',
  art: ART(L => F(0, 1, big('leptotene', 1.9)) + F(1, null, big('zygotene', 1.9)) + F(2, null, lab(1340, 260, T('synaptonemal complex', 'ಸಿನಾಪ್ಟೋನಿಮಲ್ ಸಂಕೀರ್ಣ', 'सिनेप्टोनिमल सम्मिश्र')[L], '#8a6508') + ARW(1330, 250, 870, 420, '#8a6508'))),
  steps: [
    T('Meiosis begins with prophase one. In leptotene, thin chromosomes become visible.', 'ಮಿಯಾಸಿಸ್ ಪ್ರೊಫೇಸ್ ಒಂದರಿಂದ ಆರಂಭ. ಲೆಪ್ಟೋಟೀನ್‌ನಲ್ಲಿ ತೆಳು ವರ್ಣತಂತುಗಳು ಕಾಣಿಸುತ್ತವೆ.', 'अर्धसूत्री विभाजन पूर्वावस्था एक से शुरू होता है। लेप्टोटीन में पतले गुणसूत्र दिखने लगते हैं।'),
    T('In zygotene, homologous chromosomes, one red and one blue, pair up. This is synapsis.', 'ಜೈಗೋಟೀನ್‌ನಲ್ಲಿ ಸಮಜಾತ ವರ್ಣತಂತುಗಳು, ಒಂದು ಕೆಂಪು ಮತ್ತು ಒಂದು ನೀಲಿ, ಜೋಡಿಯಾಗುತ್ತವೆ. ಇದೇ ಸಿನಾಪ್ಸಿಸ್.', 'जाइगोटीन में समजात गुणसूत्र, एक लाल और एक नीला, जोड़े बनाते हैं। यही सूत्रयुग्मन है।'),
    T('A ladder like synaptonemal complex holds each pair together. The pair is called a bivalent.', 'ಏಣಿಯಂತಹ ಸಿನಾಪ್ಟೋನಿಮಲ್ ಸಂಕೀರ್ಣ ಪ್ರತಿ ಜೋಡಿಯನ್ನು ಹಿಡಿದಿಡುತ್ತದೆ. ಈ ಜೋಡಿಯನ್ನು ಬೈವೇಲೆಂಟ್ ಎನ್ನುತ್ತಾರೆ.', 'सीढ़ी जैसा सिनेप्टोनिमल सम्मिश्र हर जोड़े को बाँधे रखता है। इस जोड़े को द्विसंयोजक कहते हैं।')
  ] });
SL.push({ title: T('Pachytene: <em>crossing over</em>', 'ಪ್ಯಾಕಿಟೀನ್: <em>ಕ್ರಾಸಿಂಗ್ ಓವರ್</em>', 'पैकिटीन: <em>जीन विनिमय</em>'),
  css: `#xs{opacity:0} .s2 #xs{opacity:1} .s2 #pre{opacity:0}`,
  art: ART(L => { const w = 40, x = 960, y = 500, Ln = 520; const pair = sw => C.chromosome(x - 62, y, Ln, 0, R, { w, gap: 22, cols: [R, R], swap: sw ? [{ c: 1, from: .62, to: 1, col: B }] : [] }) + C.chromosome(x + 62, y, Ln, 0, B, { w, gap: 22, cols: [B, B], swap: sw ? [{ c: 0, from: .62, to: 1, col: R }] : [] });
    return `<g id="pre" class="g">${pair(false)}</g><g id="xs" class="g">${pair(true)}</g>` + F(1, null, D.ball(x, y + 120, 22, '#f2c94c') + lab(1180, 640, T('recombination nodule', 'ಪುನರ್‌ಸಂಯೋಜನಾ ಗಂಟು', 'पुनर्योजन ग्रंथिका')[L], '#8a6508') + ARW(1170, 610, 985, 625, '#8a6508')) +
      F(2, null, lab(1180, 300, T('recombinase', 'ರೀಕಾಂಬಿನೇಸ್', 'रिकॉम्बिनेज़')[L], '#b3261e')) + F(3, null, lab(240, 300, T('4 chromatids = tetrad', '4 ಕ್ರೊಮ್ಯಾಟಿಡ್ = ಟೆಟ್ರಾಡ್', '4 अर्धगुणसूत्र = चतुष्क')[L])); }),
  steps: [
    T('In pachytene, each bivalent clearly shows four chromatids, a tetrad.', 'ಪ್ಯಾಕಿಟೀನ್‌ನಲ್ಲಿ ಪ್ರತಿ ಬೈವೇಲೆಂಟ್ ನಾಲ್ಕು ಕ್ರೊಮ್ಯಾಟಿಡ್‌ಗಳನ್ನು, ಅಂದರೆ ಟೆಟ್ರಾಡ್ ಅನ್ನು, ಸ್ಪಷ್ಟವಾಗಿ ತೋರಿಸುತ್ತದೆ.', 'पैकिटीन में हर द्विसंयोजक चार अर्धगुणसूत्र, यानी चतुष्क, स्पष्ट दिखाता है।'),
    T('Recombination nodules appear where crossing over will happen.', 'ಕ್ರಾಸಿಂಗ್ ಓವರ್ ನಡೆಯುವ ಸ್ಥಳಗಳಲ್ಲಿ ಪುನರ್‌ಸಂಯೋಜನಾ ಗಂಟುಗಳು ಕಾಣಿಸುತ್ತವೆ.', 'जहाँ जीन विनिमय होगा, वहाँ पुनर्योजन ग्रंथिकाएँ प्रकट होती हैं।'),
    T('The enzyme recombinase swaps segments between non sister chromatids. Look, red and blue pieces have exchanged.', 'ರೀಕಾಂಬಿನೇಸ್ ಕಿಣ್ವ ಸಹೋದರವಲ್ಲದ ಕ್ರೊಮ್ಯಾಟಿಡ್‌ಗಳ ನಡುವೆ ಭಾಗಗಳನ್ನು ಅದಲುಬದಲು ಮಾಡುತ್ತದೆ. ನೋಡಿ, ಕೆಂಪು ಮತ್ತು ನೀಲಿ ಭಾಗಗಳು ವಿನಿಮಯವಾಗಿವೆ.', 'रिकॉम्बिनेज़ एंजाइम असहोदर अर्धगुणसूत्रों के बीच खंडों की अदला-बदली करता है। देखिए, लाल और नीले टुकड़े बदल गए हैं।'),
    T('This crossing over gives new combinations of genes. It is the source of variation.', 'ಈ ಕ್ರಾಸಿಂಗ್ ಓವರ್ ಜೀನ್‌ಗಳ ಹೊಸ ಸಂಯೋಜನೆಗಳನ್ನು ನೀಡುತ್ತದೆ. ಇದೇ ವ್ಯತ್ಯಾಸದ ಮೂಲ.', 'यह जीन विनिमय जीनों के नए संयोजन देता है। यही विविधता का स्रोत है।')
  ] });
SL.push({ title: T('Diplotene & diakinesis: <em>chiasmata</em>', 'ಡಿಪ್ಲೋಟೀನ್ ಮತ್ತು ಡಯಾಕೈನೆಸಿಸ್: <em>ಕಯಾಸ್ಮಾಟಾ</em>', 'डिप्लोटीन और डायकाइनेसिस: <em>काएज़्मेटा</em>'), css: '',
  art: ART(L => F(0, 1, big('pachytene', 1.9)) + F(1, 2, big('diplotene', 1.9)) + F(2, null, big('diakinesis', 1.9)) + F(1, 2, lab(1340, 240, T('chiasma (X)', 'ಕಯಾಸ್ಮಾ (X)', 'काएज़्मा (X)')[L], '#b3261e') + ARW(1330, 250, 820, 450, '#b3261e')) + F(2, null, lab(1340, 840, T('terminalisation', 'ಟರ್ಮಿನಲೈಸೇಶನ್', 'उपांतीभवन')[L], '#6b4a95'))),
  steps: [
    T('After crossing over in pachytene, the homologues are linked at the crossover points.', 'ಪ್ಯಾಕಿಟೀನ್‌ನ ಕ್ರಾಸಿಂಗ್ ಓವರ್ ನಂತರ ಸಮಜಾತಗಳು ಕ್ರಾಸ್‌ಓವರ್ ತಾಣಗಳಲ್ಲಿ ಜೋಡಿಸಿಕೊಂಡಿರುತ್ತವೆ.', 'पैकिटीन में जीन विनिमय के बाद समजात विनिमय स्थलों पर जुड़े रहते हैं।'),
    T('In diplotene the synaptonemal complex dissolves. The homologues pull apart except at X shaped chiasmata.', 'ಡಿಪ್ಲೋಟೀನ್‌ನಲ್ಲಿ ಸಿನಾಪ್ಟೋನಿಮಲ್ ಸಂಕೀರ್ಣ ಕರಗುತ್ತದೆ. X ಆಕಾರದ ಕಯಾಸ್ಮಾಟಾ ಹೊರತುಪಡಿಸಿ ಸಮಜಾತಗಳು ದೂರ ಸರಿಯುತ್ತವೆ.', 'डिप्लोटीन में सिनेप्टोनिमल सम्मिश्र घुल जाता है। X आकार के काएज़्मेटा को छोड़कर समजात अलग होते हैं।'),
    T('In diakinesis the chiasmata move to the ends. This is terminalisation. The spindle forms and the nuclear envelope breaks down.', 'ಡಯಾಕೈನೆಸಿಸ್‌ನಲ್ಲಿ ಕಯಾಸ್ಮಾಟಾ ತುದಿಗಳತ್ತ ಸರಿಯುತ್ತವೆ. ಇದೇ ಟರ್ಮಿನಲೈಸೇಶನ್. ಸ್ಪಿಂಡಲ್ ರೂಪುಗೊಳ್ಳುತ್ತದೆ, ಕೋಶಕೇಂದ್ರ ಹೊದಿಕೆ ಒಡೆಯುತ್ತದೆ.', 'डायकाइनेसिस में काएज़्मेटा सिरों की ओर खिसकते हैं। यही उपांतीभवन है। तर्कु बनता है और केंद्रक आवरण टूटता है।')
  ] });
/* 11. meiosis I */
SL.push({ title: T('Meiosis I: <em>homologues separate</em>', 'ಮಿಯಾಸಿಸ್ I: <em>ಸಮಜಾತಗಳ ಬೇರ್ಪಡುವಿಕೆ</em>', 'अर्धसूत्री I: <em>समजात अलग</em>'), css: '',
  art: ART(L => F(0, 1, big('metaphase1')) + F(1, 2, big('anaphase1')) + F(2, null, big('telophase1')) + F(2, null, lab(1380, 830, T('dyad · each n', 'ಡಯಾಡ್ · ಪ್ರತಿಯೊಂದು n', 'द्विक · प्रत्येक n')[L], '#b3261e'))),
  steps: [
    T('In metaphase one, the bivalents line up on the equatorial plate.', 'ಮೆಟಾಫೇಸ್ ಒಂದರಲ್ಲಿ ಬೈವೇಲೆಂಟ್‌ಗಳು ಸಮಭಾಜಕ ಫಲಕದ ಮೇಲೆ ಸಾಲಾಗುತ್ತವೆ.', 'मध्यावस्था एक में द्विसंयोजक विषुवतीय पट्टिका पर संरेखित होते हैं।'),
    T('In anaphase one, the homologous chromosomes separate, but sister chromatids stay joined.', 'ಅನಾಫೇಸ್ ಒಂದರಲ್ಲಿ ಸಮಜಾತ ವರ್ಣತಂತುಗಳು ಬೇರ್ಪಡುತ್ತವೆ, ಆದರೆ ಸಹೋದರ ಕ್ರೊಮ್ಯಾಟಿಡ್‌ಗಳು ಜೊತೆಯಾಗಿಯೇ ಇರುತ್ತವೆ.', 'पश्चावस्था एक में समजात गुणसूत्र अलग होते हैं, पर सहोदर अर्धगुणसूत्र जुड़े रहते हैं।'),
    T('Telophase one gives two cells, a dyad. Each cell now has half the chromosome number.', 'ಟೀಲೋಫೇಸ್ ಒಂದು ಎರಡು ಕೋಶಗಳನ್ನು, ಡಯಾಡ್ ಅನ್ನು ನೀಡುತ್ತದೆ. ಪ್ರತಿ ಕೋಶದಲ್ಲಿ ಈಗ ಅರ್ಧ ವರ್ಣತಂತು ಸಂಖ್ಯೆ.', 'अंत्यावस्था एक से दो कोशिकाएँ, यानी द्विक बनता है। अब हर कोशिका में आधी गुणसूत्र संख्या है।')
  ] });
/* 12. meiosis II + significance */
SL.push({ title: T('Meiosis II: <em>four haploid cells</em>', 'ಮಿಯಾಸಿಸ್ II: <em>ನಾಲ್ಕು ಏಕಗುಣಿತ ಕೋಶಗಳು</em>', 'अर्धसूत्री II: <em>चार अगुणित कोशिकाएँ</em>'), css: '',
  art: ART(L => F(0, 1, S.metaphase2(960, 500, 2.2)) + F(1, 2, S.anaphase2(960, 500, 2.2)) + F(2, null, S.tetrad(960, 500, 2.3)) + F(3, null, lab(1400, 300, '2n → n → 2n', '#0b7f72') + lab(1400, 390, T('fertilisation restores', 'ಫಲೀಕರಣ ಮರುಸ್ಥಾಪಿಸುತ್ತದೆ', 'निषेचन वापस लाता है')[L], '#8a6508'))),
  steps: [
    T('Meiosis two is like mitosis. The chromosomes line up at the equator of each cell.', 'ಮಿಯಾಸಿಸ್ ಎರಡು ಮೈಟಾಸಿಸ್‌ನಂತೆ. ಪ್ರತಿ ಕೋಶದ ಸಮಭಾಜಕದಲ್ಲಿ ವರ್ಣತಂತುಗಳು ಸಾಲಾಗುತ್ತವೆ.', 'अर्धसूत्री दो समसूत्री जैसा है। हर कोशिका के विषुवत पर गुणसूत्र संरेखित होते हैं।'),
    T('In anaphase two, the centromeres split and the sister chromatids move apart.', 'ಅನಾಫೇಸ್ ಎರಡರಲ್ಲಿ ಸೆಂಟ್ರೊಮಿಯರ್‌ಗಳು ಸೀಳಿ ಸಹೋದರ ಕ್ರೊಮ್ಯಾಟಿಡ್‌ಗಳು ದೂರ ಸರಿಯುತ್ತವೆ.', 'पश्चावस्था दो में गुणसूत्रबिंदु विभाजित होते हैं और सहोदर अर्धगुणसूत्र अलग होते हैं।'),
    T('Telophase two gives a tetrad: four haploid cells, each genetically different.', 'ಟೀಲೋಫೇಸ್ ಎರಡು ಟೆಟ್ರಾಡ್ ನೀಡುತ್ತದೆ: ನಾಲ್ಕು ಏಕಗುಣಿತ ಕೋಶಗಳು, ಪ್ರತಿಯೊಂದೂ ಆನುವಂಶಿಕವಾಗಿ ಭಿನ್ನ.', 'अंत्यावस्था दो से चतुष्क बनता है: चार अगुणित कोशिकाएँ, हर एक आनुवंशिक रूप से भिन्न।'),
    T('At fertilisation two gametes fuse and the diploid number is restored. So meiosis keeps the chromosome number constant.', 'ಫಲೀಕರಣದಲ್ಲಿ ಎರಡು ಲಿಂಗಾಣುಗಳು ಸೇರಿ ದ್ವಿಗುಣಿತ ಸಂಖ್ಯೆ ಮರುಸ್ಥಾಪನೆಯಾಗುತ್ತದೆ. ಹೀಗೆ ಮಿಯಾಸಿಸ್ ವರ್ಣತಂತು ಸಂಖ್ಯೆಯನ್ನು ಸ್ಥಿರವಾಗಿಡುತ್ತದೆ.', 'निषेचन में दो युग्मक मिलते हैं और द्विगुणित संख्या वापस आ जाती है। इस तरह अर्धसूत्री विभाजन गुणसूत्र संख्या स्थिर रखता है।')
  ] });

window.ANIM_SLIDES = SL;
})();
