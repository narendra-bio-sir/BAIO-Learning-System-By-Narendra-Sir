/* PU-I Ch12 drawings (Respiration in Plants). SCENE.* draw one picture into a 1600-wide canvas
   (words follow P.L = en|kn|hi); DIAGRAMS['diag-*'] add a title and callout labels for the labelled
   board diagrams. Built on notes/src/draw.js (D) and the shared kit scripts/pu1-ch11/ps-draw.js (P).
   The slides, colour notes, worksheets, handwritten notes and animated deck reuse the scenes. */
(function(){
  const D = window.D, P = window.P;
  const C = { GLU: '#e9a92b', PYR: '#d9822b', ACE: '#c0612b', TCA: '#2f8f6a', NADH: '#3f7fc5', FAD: '#7b5bd6', ATP: '#e8952f', CO2: '#6f7f8f', O2: '#e05f5f',
    MITO: '#f6c7a6', MAT: '#fde9d8', IMS: '#fff6ea', CYTO: '#eef6e4', ETH: '#a85bb8', LAC: '#3aa6a0', FAT: '#e6b422', PRO: '#c2557a', CARB: '#4a9a4a' };
  const TR = {
    'Glucose': ['ಗ್ಲೂಕೋಸ್', 'ग्लूकोज'], 'Glucose-6-phosphate': ['ಗ್ಲೂಕೋಸ್-6-ಫಾಸ್ಫೇಟ್', 'ग्लूकोज-6-फॉस्फेट'], 'Fructose-6-phosphate': ['ಫ್ರಕ್ಟೋಸ್-6-ಫಾಸ್ಫೇಟ್', 'फ्रक्टोज-6-फॉस्फेट'],
    'Fructose 1,6-bisphosphate': ['ಫ್ರಕ್ಟೋಸ್ 1,6-ಬೈಸ್ಫಾಸ್ಫೇಟ್', 'फ्रक्टोज 1,6-बिसफॉस्फेट'], 'Pyruvic acid': ['ಪೈರುವಿಕ್ ಆಮ್ಲ', 'पाइरुविक अम्ल'], '2 × Pyruvic acid': ['2 × ಪೈರುವಿಕ್ ಆಮ್ಲ', '2 × पाइरुविक अम्ल'],
    'Lactic acid': ['ಲ್ಯಾಕ್ಟಿಕ್ ಆಮ್ಲ', 'लैक्टिक अम्ल'], 'Ethanol + CO₂': ['ಎಥೆನಾಲ್ + CO₂', 'एथेनॉल + CO₂'], 'Acetyl CoA': ['ಅಸಿಟೈಲ್ CoA', 'ऐसीटिल CoA'],
    'Oxaloacetic acid': ['ಆಕ್ಸಲೋಅಸಿಟಿಕ್ ಆಮ್ಲ', 'ऑक्सैलोऐसीटिक अम्ल'], 'Citric acid': ['ಸಿಟ್ರಿಕ್ ಆಮ್ಲ', 'सिट्रिक अम्ल'], 'α-Ketoglutaric acid': ['α-ಕೀಟೋಗ್ಲುಟಾರಿಕ್ ಆಮ್ಲ', 'α-कीटोग्लूटैरिक अम्ल'],
    'Succinic acid': ['ಸಕ್ಸಿನಿಕ್ ಆಮ್ಲ', 'सक्सिनिक अम्ल'], 'Malic acid': ['ಮ್ಯಾಲಿಕ್ ಆಮ್ಲ', 'मैलिक अम्ल'], 'Pyruvate': ['ಪೈರುವೇಟ್', 'पाइरुवेट'],
    'KREBS\nCYCLE': ['ಕ್ರೆಬ್ಸ್\nಚಕ್ರ', 'क्रेब्स\nचक्र'], 'Krebs cycle': ['ಕ್ರೆಬ್ಸ್ ಚಕ್ರ', 'क्रेब्स चक्र'], 'Glycolysis': ['ಗ್ಲೈಕಾಲಿಸಿಸ್', 'ग्लाइकोलाइसिस'], 'Link reaction': ['ಸಂಪರ್ಕ ಕ್ರಿಯೆ', 'संयोजक अभिक्रिया'],
    'Cytoplasm': ['ಕೋಶದ್ರವ್ಯ', 'कोशिकाद्रव्य'], 'Matrix': ['ಮ್ಯಾಟ್ರಿಕ್ಸ್', 'आधात्री'], 'Inner membrane': ['ಒಳಪೊರೆ', 'भीतरी झिल्ली'], 'Outer membrane': ['ಹೊರಪೊರೆ', 'बाहरी झिल्ली'], 'Mitochondrion': ['ಮೈಟೋಕಾಂಡ್ರಿಯ', 'माइटोकॉन्ड्रिया'],
    'Intermembrane space': ['ಅಂತರಪೊರೆ ಅವಕಾಶ', 'अंतराझिल्ली स्थान'], 'MATRIX': ['ಮ್ಯಾಟ್ರಿಕ್ಸ್', 'आधात्री'], 'INTERMEMBRANE SPACE': ['ಅಂತರಪೊರೆ ಅವಕಾಶ', 'अंतराझिल्ली स्थान'],
    'Succinate': ['ಸಕ್ಸಿನೇಟ್', 'सक्सिनेट'], 'Fumarate': ['ಫ್ಯೂಮರೇಟ್', 'फ्यूमैरेट'], 'Sun': ['ಸೂರ್ಯ', 'सूर्य'], 'Food (glucose)': ['ಆಹಾರ (ಗ್ಲೂಕೋಸ್)', 'भोजन (ग्लूकोज)'], 'Work': ['ಕೆಲಸ', 'कार्य'],
    'Photosynthesis': ['ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆ', 'प्रकाश संश्लेषण'], 'Respiration': ['ಉಸಿರಾಟ', 'श्वसन'], 'Energy currency': ['ಶಕ್ತಿ ನಾಣ್ಯ', 'ऊर्जा मुद्रा'], 'Energy': ['ಶಕ್ತಿ', 'ऊर्जा'],
    'Stomata': ['ಪತ್ರರಂಧ್ರಗಳು', 'रंध्र'], 'Lenticels': ['ವಾತರಂಧ್ರಗಳು', 'वातरंध्र'], 'Bark': ['ತೊಗಟೆ', 'छाल'], 'Living cells': ['ಜೀವಂತ ಕೋಶಗಳು', 'जीवित कोशिकाएँ'], 'Dead wood': ['ಸತ್ತ ಮರ', 'मृत काष्ठ'],
    'Lenticel': ['ವಾತರಂಧ್ರ', 'वातरंध्र'], 'Air spaces': ['ಗಾಳಿ ಅವಕಾಶಗಳು', 'वायु-स्थान'], 'Combustion': ['ದಹನ', 'दहन'], 'Cellular respiration': ['ಜೀವಕೋಶೀಯ ಉಸಿರಾಟ', 'कोशिकीय श्वसन'],
    'Heat': ['ಶಾಖ', 'ऊष्मा'], 'one step': ['ಒಂದೇ ಹಂತ', 'एक चरण'], 'many small steps': ['ಅನೇಕ ಸಣ್ಣ ಹಂತಗಳು', 'कई छोटे चरण'], 'Sucrose': ['ಸುಕ್ರೋಸ್', 'सुक्रोज'], 'Fructose': ['ಫ್ರಕ್ಟೋಸ್', 'फ्रक्टोज'],
    'Invertase': ['ಇನ್‌ವರ್ಟೇಸ್', 'इनवर्टेज'], 'Hexokinase': ['ಹೆಕ್ಸೋಕೈನೇಸ್', 'हेक्सोकाइनेज'], 'Lactic acid\nfermentation': ['ಲ್ಯಾಕ್ಟಿಕ್ ಆಮ್ಲ\nಹುದುಗುವಿಕೆ', 'लैक्टिक अम्ल\nकिण्वन'],
    'Alcoholic\nfermentation': ['ಆಲ್ಕೋಹಾಲ್\nಹುದುಗುವಿಕೆ', 'ऐल्कोहॉली\nकिण्वन'], 'Aerobic\nrespiration': ['ವಾಯುವಿಕ\nಉಸಿರಾಟ', 'वायवीय\nश्वसन'], 'no O₂': ['O₂ ಇಲ್ಲ', 'O₂ नहीं'], 'O₂ present': ['O₂ ಇದೆ', 'O₂ उपस्थित'],
    'Yeast': ['ಯೀಸ್ಟ್', 'यीस्ट'], 'Muscle, bacteria': ['ಸ್ನಾಯು, ಬ್ಯಾಕ್ಟೀರಿಯಾ', 'पेशी, जीवाणु'], 'Glyceraldehyde\n3-phosphate': ['ಗ್ಲಿಸರಾಲ್ಡಿಹೈಡ್\n3-ಫಾಸ್ಫೇಟ್', 'ग्लिसरैल्डिहाइड\n3-फॉस्फेट'],
    '3-Phosphoglyceric\nacid': ['3-ಫಾಸ್ಫೊಗ್ಲಿಸರಿಕ್\nಆಮ್ಲ', '3-फॉस्फोग्लिसरिक\nअम्ल'], 'Phosphoenol\npyruvic acid': ['ಫಾಸ್ಫೊಈನಾಲ್\nಪೈರುವಿಕ್ ಆಮ್ಲ', 'फॉस्फोईनोल\nपाइरुविक अम्ल'],
    'NAD⁺ regenerated': ['NAD⁺ ಮರುಉತ್ಪಾದನೆ', 'NAD⁺ पुनर्जनन'], 'Glycolysis\ncontinues': ['ಗ್ಲೈಕಾಲಿಸಿಸ್\nಮುಂದುವರಿಕೆ', 'ग्लाइकोलाइसिस\nजारी'], 'Fermentation': ['ಹುದುಗುವಿಕೆ', 'किण्वन'],
    'Aerobic respiration': ['ವಾಯುವಿಕ ಉಸಿರಾಟ', 'वायवीय श्वसन'], 'ATP per glucose': ['ಪ್ರತಿ ಗ್ಲೂಕೋಸ್‌ಗೆ ATP', 'प्रति ग्लूकोज ATP'], 'Link\nreaction': ['ಸಂಪರ್ಕ\nಕ್ರಿಯೆ', 'संयोजक\nअभिक्रिया'],
    'ETS': ['ETS', 'ETS'], 'Total': ['ಒಟ್ಟು', 'कुल'], 'Fats': ['ಕೊಬ್ಬು', 'वसा'], 'Carbohydrates': ['ಕಾರ್ಬೋಹೈಡ್ರೇಟ್', 'कार्बोहाइड्रेट'], 'Proteins': ['ಪ್ರೋಟೀನ್', 'प्रोटीन'],
    'Fatty acids\nand glycerol': ['ಕೊಬ್ಬಿನಾಮ್ಲ\nಮತ್ತು ಗ್ಲಿಸರಾಲ್', 'वसा अम्ल\nऔर ग्लिसरॉल'], 'Simple sugars\n(glucose)': ['ಸರಳ ಸಕ್ಕರೆ\n(ಗ್ಲೂಕೋಸ್)', 'सरल शर्करा\n(ग्लूकोज)'], 'Amino acids': ['ಅಮೈನೋ ಆಮ್ಲಗಳು', 'ऐमीनो अम्ल'],
    'PGAL': ['PGAL', 'PGAL'], 'Breakdown': ['ವಿಭಜನೆ', 'विखंडन'], 'Synthesis': ['ಸಂಶ್ಲೇಷಣೆ', 'संश्लेषण'], 'Carbohydrate': ['ಕಾರ್ಬೋಹೈಡ್ರೇಟ್', 'कार्बोहाइड्रेट'], 'Fat': ['ಕೊಬ್ಬು', 'वसा'], 'Protein': ['ಪ್ರೋಟೀನ್', 'प्रोटीन'],
    'CO₂ evolved': ['ಬಿಡುಗಡೆಯಾದ CO₂', 'मुक्त CO₂'], 'O₂ consumed': ['ಬಳಕೆಯಾದ O₂', 'उपभुक्त O₂'], 'Wheat seed': ['ಗೋಧಿ ಬೀಜ', 'गेहूँ का बीज'], 'Groundnut seed': ['ನೆಲಗಡಲೆ ಬೀಜ', 'मूँगफली का बीज'],
    'starch': ['ಪಿಷ್ಟ', 'मंड'], 'oil': ['ಎಣ್ಣೆ', 'तेल'], 'Theory: one orderly line': ['ಸಿದ್ಧಾಂತ: ಒಂದೇ ಕ್ರಮಬದ್ಧ ಸಾಲು', 'सिद्धांत: एक क्रमबद्ध रेखा'], 'Real cell: all at once': ['ನಿಜ ಕೋಶ: ಎಲ್ಲವೂ ಒಟ್ಟಿಗೆ', 'वास्तविक कोशिका: सब साथ-साथ'],
    'withdrawn for\nsynthesis': ['ಸಂಶ್ಲೇಷಣೆಗೆ\nಹೊರತೆಗೆಯುವಿಕೆ', 'संश्लेषण हेतु\nनिकाला गया'], 'other\nsubstrates in': ['ಇತರ\nಆಧಾರವಸ್ತುಗಳು ಒಳಗೆ', 'अन्य\nक्रियाधार अंदर'],
    'Photophosphorylation': ['ದ್ಯುತಿ ಫಾಸ್ಫೊರಿಲೀಕರಣ', 'प्रकाश-फॉस्फोरिलीकरण'], 'Oxidative phosphorylation': ['ಆಕ್ಸಿಡೇಟಿವ್ ಫಾಸ್ಫೊರಿಲೀಕರಣ', 'ऑक्सीकारी फॉस्फोरिलीकरण'],
    'light energy': ['ಬೆಳಕಿನ ಶಕ್ತಿ', 'प्रकाश ऊर्जा'], 'redox energy': ['ರೆಡಾಕ್ಸ್ ಶಕ್ತಿ', 'रेडॉक्स ऊर्जा'], 'Matrix (low H⁺)': ['ಮ್ಯಾಟ್ರಿಕ್ಸ್ (ಕಡಿಮೆ H⁺)', 'आधात्री (कम H⁺)'],
    'Intermembrane space (high H⁺)': ['ಅಂತರಪೊರೆ ಅವಕಾಶ (ಹೆಚ್ಚು H⁺)', 'अंतराझिल्ली स्थान (अधिक H⁺)'], 'Outer side': ['ಹೊರಭಾಗ', 'बाहरी ओर']
  };
  const w = s => { const L = P.L || 'en'; if (L === 'en' || !TR[s]) return s; return TR[s][L === 'kn' ? 0 : 1]; };
  const S = {};
  const box = (x, y, bw, bh, c, st) => P.box(x, y, bw, bh, c, { flat: true, st: st || D.dk(c, .35) });
  /* ATP synthase with its F1 head in the matrix BELOW the membrane (mirror of P.atpSynthase) */
  const atpDown = (x, yTop, th, k) => `<g transform="translate(0,${2 * yTop + th}) scale(1,-1)">${P.atpSynthase(x, yTop, th, k)}</g>`;

  /* ---------- 1. glycolysis ladder (NCERT Fig 12.1 style) ---------- */
  S.glycolysis = (o) => { o = o || {}; const x = 640; let s = `<rect x="430" y="80" width="740" height="900" rx="30" fill="#f2f8ea" stroke="#cfe0b8" stroke-width="3"/>`;
    const steps = [[w('Glucose'), '(6C)'], [w('Glucose-6-phosphate'), '(6C)'], [w('Fructose-6-phosphate'), '(6C)'], [w('Fructose 1,6-bisphosphate'), '(6C)'], ['2 × PGAL', '(3C)'], ['2 × BPGA', '(3C)'], ['2 × 3-PGA', '(3C)'], ['2 × 2-PGA', '(3C)'], ['2 × PEP', '(3C)'], [w('2 × Pyruvic acid'), '(3C)']];
    const Y = i => 130 + i * 92;
    steps.forEach(([t, c], i) => { s += P.t(x + 160, Y(i) + 10, t + ' ' + c, 28, i === 0 || i === 9 ? '#7a3d00' : '#1d3b2f'); if (i < 9) s += D.arrow(x + 160, Y(i) + 28, x + 160, Y(i + 1) - 30, '#2b6fa8', 7); });
    const side = (i, a, b, c) => { const y0 = Y(i) + 42; s += P.curve(x + 280, y0 - 10, x + 360, y0, x + 280, y0 + 14, c, 4) + P.t(x + 300, y0 - 14, a, 22, c, { a: 'start' }) + P.t(x + 300, y0 + 34, b, 22, c, { a: 'start' }); };
    const sideL = (i, a, b, c) => { const y0 = Y(i) + 42; s += P.curve(x + 40, y0 - 10, x - 40, y0, x + 40, y0 + 14, c, 4) + P.t(x + 20, y0 - 14, a, 22, c, { a: 'end' }) + P.t(x + 20, y0 + 34, b, 22, c, { a: 'end' }); };
    sideL(0, 'ATP', 'ADP', '#c96d10'); sideL(2, 'ATP', 'ADP', '#c96d10');
    side(4, 'NAD⁺', 'NADH + H⁺', '#2b6fa8'); side(5, 'ADP', 'ATP', '#c96d10'); sideL(7, ' ', 'H₂O', '#4a90c2'); side(8, 'ADP', 'ATP', '#c96d10');
    s += P.t(1300, 520, 'DHAP\n(3C)', 24, '#5a4a10') + P.parrow('M1210,505 L1255,505', '#8a7a40', 4, { both: true });
    return s; };

  /* ---------- 2. Krebs cycle (NCERT Fig 12.3 style) ---------- */
  S.krebs = (o) => { o = o || {}; const cx = 800, cy = 600, r = 260; let s = `<circle cx="${cx}" cy="${cy}" r="${r + 60}" fill="#f0f8f3"/>`;
    [[40, 105], [105, 180], [180, 255], [255, 320], [320, 400]].forEach(([a0, a1]) => { s += P.arc(cx, cy, r, a0 + 22, a1 - 22, C.TCA, 10); });
    const node = (a, t, c) => { const [px, py] = P.pt(cx, cy, r, a); return P.pill(px, py, t, '#2f8f6a', { fs: 24 }) + (c ? P.t(px, py + 46, c, 20, '#1d5a3d', { halo: true }) : ''); };
    s += node(-40, w('Oxaloacetic acid'), '(4C)') + node(40, w('Citric acid'), '(6C)') + node(105, w('α-Ketoglutaric acid'), '(5C)') + node(180, w('Succinic acid'), '(4C)') + node(255, w('Malic acid'), '(4C)');
    s += P.t(cx, cy - 4, w('KREBS\nCYCLE'), 40, '#1d4f3a');
    /* acetyl CoA in from the top */
    s += P.pill(cx, 120, w('Pyruvate') + ' (3C)', C.PYR, { fs: 26 }) + D.arrow(cx, 146, cx, 214, '#555', 6) + P.pill(cx, 240, w('Acetyl CoA') + ' (2C)', C.ACE, { fs: 26 }) + D.arrow(cx, 266, cx, cy - r - 6, '#555', 6);
    s += P.t(cx + 30, 190, 'NAD⁺ → NADH + CO₂', 22, C.NADH, { a: 'start' });
    /* outputs */
    const out = (a, t, c, dx, dy) => { const [px, py] = P.pt(cx, cy, r + 10, a); const tx = px + dx, ty = py + dy; return P.parrow(`M${px.toFixed(0)},${py.toFixed(0)} Q${((px + tx) / 2 + dy * .2).toFixed(0)},${((py + ty) / 2 - dx * .2).toFixed(0)} ${tx},${ty}`, c, 4) + P.t(tx + (dx > 0 ? 8 : -8), ty + 8, t, 23, c, { a: dx > 0 ? 'start' : 'end', halo: true }); };
    s += out(72, 'CO₂ + NADH', C.NADH, 170, -40) + out(142, 'CO₂ + NADH', C.NADH, 170, 40) + P.parrow('M905,866 Q965,895 990,925', C.ATP, 4) + P.t(998, 940, 'GDP → GTP → ATP', 23, C.ATP, { a: 'start', halo: true }) + out(218, 'FADH₂', C.FAD, -170, 90) + out(288, 'NADH', C.NADH, -170, -40);
    return s; };

  /* ---------- 3. ETS on the inner mitochondrial membrane ---------- */
  S.ets = (o) => { o = o || {}; const y = 470, th = 90; let s = '';
    s += `<rect x="60" y="140" width="1480" height="${y - 140}" rx="24" fill="${C.IMS}"/><rect x="60" y="${y + th}" width="1480" height="${930 - y - th}" rx="24" fill="${C.MAT}"/>`;
    s += P.t(90, 186, w('Intermembrane space (high H⁺)'), 26, '#8a5a00', { a: 'start' }) + P.t(90, 910, w('Matrix (low H⁺)'), 26, '#7a3d1a', { a: 'start' });
    s += P.membrane(60, 1540, y, th);
    s += P.complex(230, y + th / 2, 150, 200, '#3f7fc5', 'I', { fs: 40 }) + P.complex(430, y + th / 2 + 40, 120, 130, '#7b5bd6', 'II', { fs: 34 });
    s += D.ball(560, y + th / 2, 30, '#e3a33b') + P.t(560, y + th / 2 + 9, 'UQ', 20, '#4a3a00');
    s += P.complex(720, y + th / 2, 160, 200, '#2f8f6a', 'III', { fs: 38 }) + D.ball(870, y - 34, 30, '#d0573d') + P.t(870, y - 25, 'cyt c', 17, '#fff');
    s += P.complex(1010, y + th / 2, 170, 200, '#c2557a', 'IV', { fs: 38 });
    const e = '#d89a00', dsh = '14 10';
    s += P.parrow(`M305,${y + th / 2} Q440,${y - 10} 528,${y + th / 2 - 8}`, e, 6, { dash: dsh }) + P.parrow(`M480,${y + 80} Q520,${y + 90} 540,${y + 64}`, e, 5, { dash: dsh }) + P.parrow(`M592,${y + th / 2} L640,${y + th / 2}`, e, 6, { dash: dsh });
    s += P.parrow(`M770,${y - 20} Q810,${y - 60} 840,${y - 44}`, e, 6, { dash: dsh }) + P.parrow(`M900,${y - 40} Q940,${y - 50} 950,${y - 6}`, e, 6, { dash: dsh });
    /* NADH, FADH2, O2 in the matrix */
    s += P.pill(230, y + th + 150, 'NADH → NAD⁺', '#3f7fc5', { fs: 24 }) + D.arrow(230, y + th + 124, 230, y + th + 70, '#3f7fc5', 5);
    s += P.t(500, y + th + 250, w('Succinate') + ' → ' + w('Fumarate'), 22, '#5a3fae') + P.t(500, y + th + 280, '(FADH₂)', 22, '#5a3fae') + D.arrow(470, y + th + 220, 440, y + th + 112, '#5a3fae', 4);
    s += P.pill(1010, y + th + 150, '½O₂ + 2H⁺ → H₂O', '#e05f5f', { fs: 24 }) + D.arrow(1010, y + th + 70, 1010, y + th + 124, '#e05f5f', 5);
    /* H+ pumped up through I, III, IV */
    [230, 720, 1010].forEach(x => { s += D.arrow(x + 60, y + th + 20, x + 60, y - 70, '#c98a10', 5) + P.hp(x + 60, y - 92, 16); });
    s += atpDown(1320, y, th, 1.05);
    s += D.arrow(1320, 190, 1320, y - 8, '#c98a10', 7) + P.hp(1320, 170, 16);
    s += P.box(1395, 760, 150, 60, '#fde8c8', { flat: true, st: C.ATP }) + P.t(1470, 800, 'ATP', 30, '#7a4300') + P.t(1470, 740, 'ADP + Pi', 22, '#7a4300');
    return s; };

  /* ---------- 4. ATP synthase alone (NCERT Fig 12.5 style) ---------- */
  S.atpSynth = (o) => { o = o || {}; let s = `<rect x="200" y="150" width="1200" height="290" rx="24" fill="${C.IMS}"/><rect x="200" y="560" width="1200" height="360" rx="24" fill="${C.MAT}"/>`;
    s += P.membrane(200, 1400, 440, 120);
    s += P.t(230, 196, w('Outer side'), 30, '#8a5a00', { a: 'start' }) + P.t(230, 900, w('Matrix'), 30, '#7a3d1a', { a: 'start' });
    s += atpDown(800, 440, 120, 1.5);
    s += P.t(800, 512, 'F₀', 40, '#fff') + P.t(800, 790, 'F₁', 44, '#fff');
    s += P.hp(560, 260, 22) + P.hp(620, 330, 22) + P.hp(990, 270, 22) + P.hp(1060, 340, 22) + D.arrow(800, 210, 800, 420, '#c98a10', 8) + P.t(860, 250, '4H⁺', 34, '#8a5a00', { a: 'start' });
    s += P.box(1080, 720, 230, 70, '#fde8c8', { flat: true, st: C.ATP }) + P.t(1195, 766, 'ADP + Pi', 28, '#7a4300') + D.arrow(1080, 755, 960, 755, '#c96d10', 6);
    s += P.box(330, 720, 180, 70, '#fde8c8', { flat: true, st: C.ATP }) + P.t(420, 766, 'ATP', 32, '#7a4300') + D.arrow(640, 755, 520, 755, '#c96d10', 6);
    return s; };

  /* ---------- 5. anaerobic pathways (NCERT Fig 12.2 style) ---------- */
  S.fermentation = (o) => { o = o || {}; let s = `<rect x="120" y="80" width="1360" height="880" rx="30" fill="#fbf6e8" stroke="#ecdcb4" stroke-width="3"/>`;
    const X = 420; const stp = [[w('Glucose'), 150], [w('Glyceraldehyde\n3-phosphate'), 300], [w('3-Phosphoglyceric\nacid'), 520], [w('Phosphoenol\npyruvic acid'), 730]];
    stp.forEach(([t, y], i) => { s += P.t(X, y, t, 30, '#3a2a10'); if (i < 3) s += `<path d="M${X - 14},${y + (i ? 60 : 22)} L${X - 14},${stp[i + 1][1] - 52} L${X - 26},${stp[i + 1][1] - 52} L${X},${stp[i + 1][1] - 28} L${X + 26},${stp[i + 1][1] - 52} L${X + 14},${stp[i + 1][1] - 52} L${X + 14},${y + (i ? 60 : 22)} Z" fill="#fff" stroke="#3a2a10" stroke-width="3"/>`; });
    s += P.curve(X + 30, 380, X + 170, 400, X + 40, 470, '#2b6fa8', 4) + P.t(X + 150, 382, 'NAD⁺', 24, '#2b6fa8', { a: 'start' }) + P.t(X + 160, 480, 'NADH + H⁺', 24, '#2b6fa8', { a: 'start' });
    s += `<path d="M${X + 120},790 L1000,600" stroke="#3a2a10" stroke-width="18" stroke-linecap="round"/><path d="M${X + 120},790 L1000,600" stroke="#fff" stroke-width="11" stroke-linecap="round"/>` + D.arrow(980, 606, 1010, 598, '#3a2a10', 8);
    s += P.pill(1100, 580, w('Pyruvic acid'), C.PYR, { fs: 28 });
    s += D.arrow(1060, 548, 1000, 330, C.LAC, 6) + P.pill(980, 300, w('Lactic acid'), C.LAC, { fs: 28 }) + P.curve(1080, 470, 1160, 420, 1080, 380, '#2b6fa8', 4) + P.t(1150, 470, 'NADH + H⁺', 22, '#2b6fa8', { a: 'start' }) + P.t(1150, 380, 'NAD⁺', 22, '#2b6fa8', { a: 'start' });
    s += D.arrow(1150, 612, 1250, 820, C.ETH, 6) + P.pill(1270, 860, w('Ethanol + CO₂'), C.ETH, { fs: 28 }) + P.curve(1150, 700, 1270, 720, 1200, 780, '#2b6fa8', 4) + P.t(1260, 690, 'NADH + H⁺', 22, '#2b6fa8', { a: 'start' }) + P.t(1100, 790, 'NAD⁺', 22, '#2b6fa8', { a: 'end' });
    s += P.t(860, 210, w('Muscle, bacteria'), 24, '#1e6b66') + P.t(1290, 950, w('Yeast'), 24, '#6a2a7a');
    return s; };

  /* ---------- 6. amphibolic interrelationship (NCERT Fig 12.6 style) ---------- */
  S.amphibolic = (o) => { o = o || {}; let s = '';
    const top = [[w('Fats'), 330, C.FAT], [w('Carbohydrates'), 800, C.CARB], [w('Proteins'), 1270, C.PRO]];
    s += D.line(330, 120, 1270, 120, '#555', 4);
    top.forEach(([t, x, c]) => { s += D.line(x, 120, x, 150, '#555', 4) + box(x - 140, 150, 280, 66, D.lt(c, .7), c) + P.t(x, 194, t, 28, D.dk(c, .45)); });
    s += box(190, 260, 280, 90, D.lt(C.FAT, .78), C.FAT) + P.t(330, 297, w('Fatty acids\nand glycerol'), 24, '#6b5200') + D.arrow(330, 216, 330, 258, '#555', 4);
    s += box(660, 260, 280, 90, D.lt(C.CARB, .8), C.CARB) + P.t(800, 297, w('Simple sugars\n(glucose)'), 24, '#1d5a1d') + D.arrow(800, 216, 800, 258, '#555', 4);
    s += box(1130, 260, 280, 66, D.lt(C.PRO, .8), C.PRO) + P.t(1270, 304, w('Amino acids'), 26, '#6a1a3a') + D.arrow(1270, 216, 1270, 258, '#555', 4);
    s += P.t(800, 420, w('Glucose-6-phosphate'), 26, '#1d3b2f') + D.arrow(800, 352, 800, 396, '#555', 4) + D.arrow(800, 432, 800, 480, '#555', 4);
    s += P.t(800, 512, w('Fructose 1,6-bisphosphate'), 26, '#1d3b2f') + D.arrow(800, 526, 800, 572, '#555', 4);
    s += P.t(800, 604, 'PGAL', 30, '#1d3b2f') + P.t(560, 604, 'DHAP', 26, '#5a4a10') + P.parrow('M600,596 L740,596', '#8a7a40', 4, { both: true });
    s += D.arrow(800, 620, 800, 676, '#555', 4) + P.pill(800, 706, w('Pyruvic acid'), C.PYR, { fs: 26 }) + D.arrow(800, 732, 800, 780, '#555', 4) + P.pill(800, 808, w('Acetyl CoA'), C.ACE, { fs: 26 });
    s += D.arrow(800, 834, 800, 862, '#555', 4) + `<circle cx="800" cy="920" r="54" fill="#f0f8f3" stroke="${C.TCA}" stroke-width="6"/>` + P.arc(800, 920, 54, 30, 320, C.TCA, 5) + P.t(800, 914, w('Krebs cycle').replace(' ', '\n'), 18, '#1d4f3a');
    s += D.arrow(856, 930, 950, 930, '#555', 4) + P.t(1010, 940, 'CO₂', 28, '#555') + D.arrow(744, 930, 650, 930, '#555', 4) + P.t(600, 940, 'H₂O', 28, '#4a90c2');
    /* fat entries: glycerol → PGAL, fatty acids → acetyl CoA */
    s += P.parrow('M260,352 C240,520 420,600 520,604', C.FAT, 5) + P.parrow('M300,352 C200,700 520,808 720,808', C.FAT, 5);
    /* amino acids → pyruvate / acetyl CoA / Krebs */
    s += P.parrow('M1270,330 C1300,560 1000,700 880,706', C.PRO, 5) + P.parrow('M1300,330 C1380,700 1000,808 880,808', C.PRO, 5) + P.parrow('M1330,330 C1450,800 1000,920 856,912', C.PRO, 5);
    return s; };

  /* ---------- 7. sites of respiration in a cell ---------- */
  S.cellSites = (o) => { o = o || {}; let s = `<path d="${P.rrect(90, 110, 1420, 820, 120)}" fill="${C.CYTO}" stroke="#7aa34a" stroke-width="10"/>`;
    s += P.t(250, 190, w('Cytoplasm'), 34, '#3d6a1e', { a: 'start' });
    s += P.pill(380, 400, w('Glucose'), C.GLU, { fs: 28 }) + D.arrow(380, 430, 380, 560, '#2b6fa8', 8) + P.t(470, 505, w('Glycolysis'), 30, '#2b6fa8', { a: 'start' }) + P.pill(380, 600, w('2 × Pyruvic acid'), C.PYR, { fs: 26 });
    /* mitochondrion */
    const mx = 1030, my = 560; s += P.ellipse(mx, my, 420, 270, C.MITO, '#b9653a', 10) + P.ellipse(mx, my, 370, 220, C.MAT, '#d0855a', 6);
    for (let i = 0; i < 6; i++){ const x = mx - 260 + i * 104, up = i % 2 === 0; s += `<path d="M${x},${up ? my - 222 : my + 222} L${x},${up ? my - 40 : my + 40}" stroke="#d0855a" stroke-width="20" stroke-linecap="round"/><path d="M${x},${up ? my - 222 : my + 222} L${x},${up ? my - 40 : my + 40}" stroke="${C.IMS}" stroke-width="8" stroke-linecap="round"/>`; }
    s += P.parrow('M520,600 C620,600 640,560 700,560', C.PYR, 7);
    s += `<circle cx="${mx}" cy="${my}" r="70" fill="#f0f8f3" stroke="${C.TCA}" stroke-width="6"/>` + P.arc(mx, my, 70, 30, 320, C.TCA, 5) + P.t(mx, my + 8, w('Krebs cycle').replace(' ', '\n'), 20, '#1d4f3a');
    s += P.t(mx, 870, w('Mitochondrion'), 30, '#8a3a1a');
    return s; };

  /* ---------- 8. RQ bars ---------- */
  S.rqBars = (o) => { o = o || {}; const x0 = 300, y0 = 820; let s = P.axes(x0, y0, 1100, 620, '', 'RQ', { yoff: 70, fs: 32 });
    const bars = [[w('Carbohydrate'), 1.0, C.CARB], [w('Protein'), 0.9, C.PRO], [w('Fat'), 0.7, C.FAT]], H = 520;
    s += D.line(x0, y0 - H, x0 + 1080, y0 - H, '#9a9a9a', 3, 'stroke-dasharray="12 10"') + P.t(x0 - 26, y0 - H + 10, '1.0', 26, '#555', { a: 'end' }) + P.t(x0 - 26, y0 + 10, '0', 26, '#555', { a: 'end' });
    bars.forEach(([t, v, c], i) => { const bx = x0 + 140 + i * 330, h = H * v; s += `<rect x="${bx}" y="${y0 - h}" width="200" height="${h}" rx="14" fill="${D.lg(c)}" stroke="${D.dk(c, .35)}" stroke-width="3"/>` + P.t(bx + 100, y0 - h - 20, String(v.toFixed(1)), 40, D.dk(c, .4)) + P.t(bx + 100, y0 + 50, t, 30, '#333'); });
    s += P.t(800, 150, 'RQ = ' + w('CO₂ evolved') + ' / ' + w('O₂ consumed'), 34, '#1d3b2f');
    return s; };

  /* ---------- 9. RQ seeds (wheat vs groundnut) ---------- */
  S.rqSeeds = (o) => { o = o || {}; let s = '';
    const seed = (x, c, t, sub, rq) => `<ellipse cx="${x}" cy="420" rx="150" ry="100" fill="${D.rg(c)}" stroke="${D.dk(c, .4)}" stroke-width="4"/>` + D.shine(x - 50, 380, 40, 18) + P.t(x, 590, t, 32, '#333') + P.t(x, 636, '(' + sub + ')', 26, '#666') + P.pill(x, 740, 'RQ ≈ ' + rq, rq === '1.0' ? C.CARB : C.FAT, { fs: 32 });
    s += seed(480, '#e7c27a', w('Wheat seed'), w('starch'), '1.0') + seed(1120, '#c98a4a', w('Groundnut seed'), w('oil'), '0.7');
    s += P.co2(330, 220, .9) + P.o2(620, 220, .9) + P.co2(980, 220, .9) + P.o2(1270, 220, .9) + D.ball(1340, 220, 18, '#e05f5f');
    return s; };

  /* ---------- 10. energy flow: sun → food → ATP → work ---------- */
  S.energyFlow = (o) => { o = o || {}; let s = P.sun(220, 300, 90);
    s += P.ray(330, 330, 560, 430, '#f0a400') + P.plant(700, 760, 1.5);
    s += P.t(700, 830, w('Photosynthesis'), 28, '#2d5512') + P.parrow('M840,520 C900,470 960,470 1010,500', '#555', 6);
    s += P.pill(1090, 520, w('Food (glucose)'), C.GLU, { fs: 26 }) + P.parrow('M1090,550 L1090,640', '#555', 6) + P.t(1180, 600, w('Respiration'), 26, '#8a3a1a', { a: 'start' });
    s += D.ball(1090, 700, 52, C.ATP) + P.t(1090, 712, 'ATP', 30, '#5a2a00') + P.parrow('M1150,700 L1290,700', '#555', 6) + P.t(1380, 712, w('Work') + ' ⚙️', 30, '#333');
    return s; };

  /* ---------- 11. ATP as energy currency ---------- */
  S.atpCoin = (o) => { o = o || {}; let s = '';
    s += P.pill(320, 300, w('Food (glucose)'), C.GLU, { fs: 30 }) + P.t(320, 380, w('Energy') + ' 💰💰💰', 30, '#7a4300');
    s += P.parrow('M480,320 C620,320 620,500 760,500', '#555', 7) + P.t(620, 300, w('Respiration'), 26, '#8a3a1a');
    for (let i = 0; i < 6; i++) s += D.ball(840 + (i % 3) * 130, 460 + Math.floor(i / 3) * 130, 52, C.ATP) + P.t(840 + (i % 3) * 130, 472 + Math.floor(i / 3) * 130, 'ATP', 26, '#5a2a00');
    s += P.t(970, 760, w('Energy currency'), 34, '#7a4300');
    return s; };

  /* ---------- 12. plant gas exchange: stomata and lenticels ---------- */
  S.plantGas = (o) => { o = o || {}; let s = P.plant(560, 900, 2.2);
    s += P.o2(980, 300, 1) + D.arrow(930, 320, 760, 380, '#e05f5f', 5) + P.t(1010, 250, 'O₂', 30, '#e05f5f') + P.co2(1080, 480, .9) + D.arrow(760, 460, 1000, 480, '#6f7f8f', 5) + P.t(1110, 430, 'CO₂', 30, '#555');
    s += P.t(1250, 360, w('Stomata'), 34, '#2d5512', { a: 'start' }) + P.t(1250, 700, w('Lenticels'), 34, '#6b4a1a', { a: 'start' }) + P.parrow('M1240,690 C1000,700 800,760 620,780', '#6b4a1a', 5);
    return s; };

  /* ---------- 13. woody stem cross-section ---------- */
  S.woodyStem = (o) => { o = o || {}; const cx = 640, cy = 520; let s = `<circle cx="${cx}" cy="${cy}" r="360" fill="#8a5a2a" stroke="#5a3a1a" stroke-width="8"/>`;
    s += `<circle cx="${cx}" cy="${cy}" r="320" fill="#9fd07a" stroke="#5a8a3a" stroke-width="4"/><circle cx="${cx}" cy="${cy}" r="270" fill="#e8d4a8" stroke="#b89a60" stroke-width="4"/>`;
    for (let r = 60; r < 270; r += 42) s += `<circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#c9ad74" stroke-width="3"/>`;
    s += `<path d="M${cx + 300},${cy - 120} l70,-10 l0,40 l-70,-10 z" fill="#3a2a10"/>`;
    s += P.parrow(`M1300,${cy - 140} C1200,${cy - 140} 1100,${cy - 130} ${cx + 380},${cy - 110}`, '#555', 5) + P.t(1320, cy - 130, w('Lenticel'), 30, '#3a2a10', { a: 'start' });
    s += P.t(1320, cy - 10, w('Bark'), 30, '#5a3a1a', { a: 'start' }) + D.line(1310, cy - 20, cx + 350, cy - 20, '#5a3a1a', 3);
    s += P.t(1320, cy + 90, w('Living cells'), 30, '#3d6a1e', { a: 'start' }) + D.line(1310, cy + 80, cx + 296, cy + 80, '#3d6a1e', 3);
    s += P.t(1320, cy + 200, w('Dead wood'), 30, '#8a6a2a', { a: 'start' }) + D.line(1310, cy + 190, cx + 180, cy + 150, '#8a6a2a', 3);
    return s; };

  /* ---------- 14. combustion vs step-wise oxidation ---------- */
  S.burnVsStep = (o) => { o = o || {}; let s = '';
    s += P.t(400, 160, w('Combustion'), 36, '#b0331a') + P.pill(400, 260, w('Glucose'), C.GLU, { fs: 26 });
    s += `<path d="M400,820 C300,760 290,640 360,560 C370,620 400,640 410,600 C400,520 440,460 480,430 C470,520 520,560 520,640 C540,600 560,600 560,560 C600,640 560,760 400,820 Z" fill="${D.lg('#f2722b')}" stroke="#b0331a" stroke-width="4"/>`;
    s += D.arrow(400, 290, 400, 420, '#b0331a', 8) + P.t(400, 870, w('Heat') + ' (' + w('one step') + ')', 28, '#b0331a');
    s += P.t(1150, 160, w('Cellular respiration'), 36, '#1d5a3d') + P.pill(880, 260, w('Glucose'), C.GLU, { fs: 26 });
    for (let i = 0; i < 6; i++){ const x = 880 + i * 96, y = 320 + i * 90; s += `<rect x="${x - 40}" y="${y}" width="140" height="22" rx="6" fill="#cfe7d8" stroke="#2f8f6a" stroke-width="3"/>`; if (i % 2 === 1) s += D.ball(x + 130, y - 20, 24, C.ATP) + P.t(x + 130, y - 12, 'ATP', 14, '#5a2a00'); }
    s += P.t(1150, 900, w('many small steps'), 28, '#1d5a3d');
    return s; };

  /* ---------- 15. sucrose → glucose-6-phosphate ---------- */
  S.sucrose = (o) => { o = o || {}; let s = '';
    s += P.pill(800, 150, w('Sucrose'), '#c9a227', { fs: 30 }) + D.arrow(800, 180, 560, 330, '#555', 6) + D.arrow(800, 180, 1040, 330, '#555', 6) + P.t(800, 270, w('Invertase'), 26, '#6b4e00', { halo: true });
    s += P.pill(520, 370, w('Glucose'), C.GLU, { fs: 28 }) + P.pill(1080, 370, w('Fructose'), '#d98a3a', { fs: 28 });
    s += D.arrow(560, 400, 760, 560, '#555', 6) + D.arrow(1040, 400, 840, 560, '#555', 6) + P.t(500, 500, 'ATP → ADP', 24, '#c96d10') + P.t(800, 470, w('Hexokinase'), 26, '#6b4e00', { halo: true });
    s += P.pill(800, 600, w('Glucose-6-phosphate'), '#2b6fa8', { fs: 26 }) + D.arrow(800, 630, 800, 740, '#555', 6) + P.pill(800, 780, w('Fructose-6-phosphate'), '#2b6fa8', { fs: 26 });
    return s; };

  /* ---------- 16. three fates of pyruvate ---------- */
  S.pyrFate = (o) => { o = o || {}; let s = P.pill(800, 200, w('Pyruvic acid'), C.PYR, { fs: 32 });
    const br = [[w('Lactic acid\nfermentation'), 300, C.LAC, w('no O₂')], [w('Alcoholic\nfermentation'), 800, C.ETH, w('no O₂')], [w('Aerobic\nrespiration'), 1300, C.TCA, w('O₂ present')]];
    br.forEach(([t, x, c, n]) => { s += P.parrow(`M800,232 C800,360 ${x},360 ${x},500`, c, 7) + box(x - 190, 520, 380, 150, D.lt(c, .8), c) + P.t(x, 584, t, 30, D.dk(c, .45)) + P.t(x, 740, n, 28, '#555'); });
    s += P.t(300, 810, w('Lactic acid'), 26, C.LAC) + P.t(800, 810, w('Ethanol + CO₂'), 26, C.ETH) + P.t(1300, 810, 'CO₂ + H₂O + 38 ATP', 26, C.TCA);
    return s; };

  /* ---------- 17. NAD+/NADH loop between glycolysis and fermentation ---------- */
  S.nadLoop = (o) => { o = o || {}; const cx = 800, cy = 520; let s = `<circle cx="${cx}" cy="${cy}" r="230" fill="#eef4fb"/>`;
    s += P.arc(cx, cy, 230, 20, 160, '#2b6fa8', 9) + P.arc(cx, cy, 230, 200, 340, '#2b6fa8', 9);
    s += P.pill(cx, cy - 230, 'NAD⁺', '#8fb3d9', { fs: 32 }) + P.pill(cx, cy + 230, 'NADH + H⁺', '#3f7fc5', { fs: 32 });
    s += box(1080, 440, 400, 150, '#eef7df', '#2f8f3a') + P.t(1280, 500, w('Glycolysis'), 32, '#1d5a1d') + P.t(1280, 548, 'PGAL → BPGA', 24, '#1d5a1d');
    s += box(120, 440, 400, 150, '#f6eefb', C.ETH) + P.t(320, 500, w('Fermentation'), 32, '#5a2a6a') + P.t(320, 548, w('Pyruvate') + ' → ' + w('Lactic acid'), 22, '#5a2a6a');
    s += P.t(cx, cy - 10, w('NAD⁺ regenerated'), 28, '#1d3b5f') + P.t(cx, cy + 40, w('Glycolysis\ncontinues'), 24, '#1d3b5f');
    return s; };

  /* ---------- 18. link reaction ---------- */
  S.link = (o) => { o = o || {}; let s = `<path d="${P.rrect(560, 120, 920, 780, 160)}" fill="${C.MAT}" stroke="#d0855a" stroke-width="8"/>`;
    s += P.t(1020, 180, w('Matrix'), 30, '#7a3d1a');
    s += P.pill(300, 500, w('Pyruvic acid') + ' (3C)', C.PYR, { fs: 28 }) + P.parrow('M460,500 L740,500', '#555', 8);
    s += P.pill(1000, 500, w('Acetyl CoA') + ' (2C)', C.ACE, { fs: 28 }) + P.parrow('M1150,500 L1300,500', '#555', 8) + P.t(1370, 510, w('Krebs cycle').replace(' ', '\n'), 26, C.TCA);
    s += P.t(820, 380, 'CoA + NAD⁺', 26, '#2b6fa8') + D.arrow(820, 400, 820, 470, '#2b6fa8', 5);
    s += D.arrow(860, 530, 860, 640, '#555', 5) + P.co2(860, 680, .9) + D.arrow(780, 530, 780, 640, '#2b6fa8', 5) + P.pill(760, 690, 'NADH + H⁺', '#3f7fc5', { fs: 24 });
    s += P.t(820, 820, 'Pyruvate dehydrogenase · Mg²⁺', 24, '#5a3a1a');
    return s; };

  /* ---------- 19. ATP balance bars ---------- */
  S.balanceBars = (o) => { o = o || {}; const x0 = 260, y0 = 820; let s = P.axes(x0, y0, 1180, 640, '', w('ATP per glucose'), { yoff: 80, fs: 30 });
    const bars = [[w('Glycolysis'), 8, '#2b6fa8'], [w('Link\nreaction'), 6, C.ACE], [w('Krebs cycle'), 24, C.TCA], [w('Total'), 38, '#c0392b']], k = 14;
    bars.forEach(([t, v, c], i) => { const bx = x0 + 90 + i * 280, h = v * k; s += `<rect x="${bx}" y="${y0 - h}" width="180" height="${h}" rx="12" fill="${D.lg(c)}" stroke="${D.dk(c, .35)}" stroke-width="3"/>` + P.t(bx + 90, y0 - h - 18, String(v), 44, D.dk(c, .35)) + P.t(bx + 90, y0 + 46, t, 26, '#333'); });
    return s; };

  /* ---------- 20. fermentation vs aerobic ATP ---------- */
  S.fermVsAer = (o) => { o = o || {}; let s = '';
    s += box(140, 180, 560, 640, '#f6eefb', C.ETH) + P.t(420, 250, w('Fermentation'), 36, '#5a2a6a');
    for (let i = 0; i < 2; i++) s += D.ball(340 + i * 160, 480, 60, C.ATP) + P.t(340 + i * 160, 492, 'ATP', 28, '#5a2a00');
    s += P.t(420, 700, '2 ATP · < 7%', 34, '#5a2a6a');
    s += box(900, 180, 560, 640, '#eef7f1', C.TCA) + P.t(1180, 250, w('Aerobic respiration'), 34, '#1d5a3d');
    for (let i = 0; i < 38; i++) s += D.ball(980 + (i % 8) * 58, 330 + Math.floor(i / 8) * 64, 24, C.ATP);
    s += P.t(1180, 760, '38 ATP', 40, '#1d5a3d');
    return s; };

  /* ---------- 21. theory pipeline vs real cell ---------- */
  S.pipeline = (o) => { o = o || {}; let s = P.t(800, 150, w('Theory: one orderly line'), 32, '#1d3b2f');
    const st = [[w('Glycolysis'), '#2b6fa8'], [w('Link\nreaction'), C.ACE], [w('Krebs cycle'), C.TCA], ['ETS', '#c2557a']];
    st.forEach(([t, c], i) => { const x = 220 + i * 390; s += box(x - 140, 200, 280, 120, D.lt(c, .8), c) + P.t(x, 255, t, 28, D.dk(c, .45)); if (i < 3) s += D.arrow(x + 145, 260, x + 245, 260, '#555', 6); });
    s += P.t(800, 480, w('Real cell: all at once'), 32, '#7a3d1a');
    st.forEach(([t, c], i) => { const x = 380 + i * 280, y = 620 + (i % 2) * 90; s += `<circle cx="${x}" cy="${y}" r="90" fill="${D.lt(c, .82)}" stroke="${c}" stroke-width="5"/>` + P.t(x, y + 8, t, 22, D.dk(c, .45)); });
    s += P.parrow('M150,880 C300,800 330,760 300,700', '#8a7a40', 5) + P.t(160, 920, w('other\nsubstrates in'), 22, '#5a4a10');
    s += P.parrow('M1300,640 C1400,700 1430,780 1450,860', '#8a7a40', 5) + P.t(1460, 900, w('withdrawn for\nsynthesis'), 22, '#5a4a10');
    return s; };

  /* ---------- 22. photophosphorylation vs oxidative phosphorylation ---------- */
  S.phosCompare = (o) => { o = o || {}; let s = '';
    s += box(120, 200, 620, 600, '#eef7df', '#2f8f3a') + P.t(430, 270, w('Photophosphorylation'), 30, '#1d5a1d') + P.sun(430, 470, 90) + P.t(430, 690, w('light energy') + ' → H⁺ → ATP', 28, '#1d5a1d');
    s += box(860, 200, 620, 600, C.MAT, '#c0612b') + P.t(1170, 270, w('Oxidative phosphorylation'), 30, '#7a3d1a');
    s += P.pill(1050, 420, 'NADH', '#3f7fc5', { fs: 30 }) + P.parrow('M1110,440 C1190,500 1230,520 1290,540', '#d89a00', 6, { dash: '14 10' }) + P.o2(1340, 560, 1);
    s += P.t(1170, 690, w('redox energy') + ' → H⁺ → ATP', 28, '#7a3d1a');
    return s; };

  window.SCENE = S;

  /* ---------- labelled board diagrams ---------- */
  const T = (x, y, t, fs, o) => D.text(x, y, t, Object.assign({ fs: fs || 30, b: true, head: true, c: '#1d3b2f' }, o || {}));
  const L = (x, y, t, tx, ty, fs) => D.label(x, y, t, tx, ty, { fs: fs || 22 });
  const SVG = (w_, h, fn) => { const bg = []; P.L = 'en'; return D.svg(w_, h, fn).replace(/<g data-bg="1">[\s\S]*?<\/g>/g, m => { bg.push(m); return ''; }).replace('</defs>', () => '</defs>' + bg.join('')); };
  const card = (x, y, w_, h, c) => `<g data-bg="1"><rect x="${x}" y="${y}" width="${w_}" height="${h}" rx="26" fill="${c || '#fffdf6'}" stroke="#e0d6bd" stroke-width="3"/></g>`;
  const W = {};
  W['diag-glycolysis'] = () => SVG(1600, 1060, () => card(20, 20, 1560, 1020, '#fffaf0') + T(800, 62, 'Steps of Glycolysis (EMP Pathway)', 44) + `<g transform="translate(0,20)">${S.glycolysis()}</g>` +
    L(230, 190, 'ATP used (hexokinase)', 560, 172) + L(230, 380, 'ATP used', 560, 356) + L(1380, 470, 'Splits into two\ntriose phosphates', 1050, 446) +
    L(1400, 640, 'NADH formed\n(PGAL → BPGA)', 1060, 590) + L(1400, 760, 'ATP formed', 1080, 682) + L(230, 800, 'Water removed', 580, 780) + L(1400, 920, 'ATP formed;\nnet gain 2 ATP', 1080, 866));
  W['diag-krebs'] = () => SVG(1600, 1000, () => card(20, 20, 1560, 960, '#fffaf0') + T(800, 62, 'The Citric Acid (Krebs’) Cycle', 44) + `<g transform="translate(0,20)">${S.krebs()}</g>` +
    L(300, 230, 'Link reaction:\npyruvate dehydrogenase', 760, 210) + L(250, 420, 'First member (4C)\naccepts acetyl CoA', 516, 421) + L(1360, 300, 'First product (6C)', 1090, 418) +
    L(1420, 860, 'Substrate-level\nphosphorylation', 1240, 960) + L(250, 900, 'FADH₂ formed', 600, 870));
  W['diag-ets'] = () => SVG(1600, 1040, () => card(20, 20, 1560, 1000, '#fffaf0') + T(800, 70, 'Electron Transport System (ETS)', 44) + `<g transform="translate(0,30)">${S.ets()}</g>` +
    L(230, 140, 'Complex I\n(NADH dehydrogenase)', 230, 420) + L(560, 140, 'Ubiquinone\n(mobile carrier)', 560, 490) + L(870, 140, 'Cytochrome c\n(mobile carrier)', 870, 440) +
    L(1150, 140, 'Complex IV\n(cytochrome c oxidase)', 1050, 420) + L(1450, 990, 'Complex V\n(ATP synthase)', 1330, 610) + L(700, 990, 'Complex III\n(cytochrome bc₁)', 720, 640));
  W['diag-fermentation'] = () => SVG(1600, 1000, () => card(20, 20, 1560, 960, '#fffaf0') + T(800, 62, 'Major Pathways of Anaerobic Respiration', 44) + `<g transform="translate(0,20)">${S.fermentation()}</g>` +
    L(1400, 200, 'Lactate\ndehydrogenase', 1010, 400) + L(1420, 520, 'Pyruvic acid\ndecarboxylase +\nalcohol dehydrogenase', 1230, 700) + L(200, 420, 'NADH formed in\nglycolysis', 560, 470));
  W['diag-atp-synthase'] = () => SVG(1600, 1000, () => card(20, 20, 1560, 960, '#fffaf0') + T(800, 70, 'ATP Synthesis in Mitochondria (ATP Synthase)', 42) + S.atpSynth() +
    L(1430, 420, 'Inner mitochondrial\nmembrane', 1300, 500) + L(260, 560, 'F₀: proton channel\n(integral protein)', 740, 500) + L(260, 900, 'F₁: headpiece,\nATP made here', 700, 820) + L(1300, 210, '4H⁺ per ATP\n(down the gradient)', 900, 300));
  W['diag-amphibolic'] = () => SVG(1600, 1060, () => card(20, 20, 1560, 1020, '#fffaf0') + T(800, 62, 'Interrelationship Among Metabolic Pathways', 42) + `<g transform="translate(0,40)">${S.amphibolic()}</g>` +
    L(150, 520, 'Glycerol enters\nas PGAL', 470, 640) + L(150, 880, 'Fatty acids enter\nas acetyl CoA', 600, 842) + L(1440, 560, 'Amino acids enter\nas pyruvate, acetyl CoA\nor Krebs’ intermediates', 1000, 745) + L(1350, 1000, 'Same intermediates are\nwithdrawn for synthesis', 860, 860));
  W['diag-sites'] = () => SVG(1600, 1000, () => card(20, 20, 1560, 960, '#fffaf0') + T(800, 70, 'Sites of Respiration in the Cell', 44) + `<g transform="translate(0,30)">${S.cellSites()}</g>` +
    L(270, 830, 'Glycolysis: cytoplasm', 380, 560) + L(1400, 170, 'Outer membrane', 1250, 360) + L(1430, 900, 'Inner membrane (cristae):\nETS and ATP synthase', 1200, 760) + L(700, 220, 'Matrix: link reaction\nand Krebs’ cycle', 980, 520));
  W['diag-rq'] = () => SVG(1600, 960, () => card(20, 20, 1560, 920, '#fffaf0') + T(800, 70, 'Respiratory Quotient of Different Substrates', 42) + `<g transform="translate(0,20)">${S.rqBars()}</g>` +
    L(1400, 300, 'Carbohydrate:\n6CO₂ / 6O₂ = 1.0', 640, 320) + L(1420, 520, 'Fat (tripalmitin):\n102CO₂ / 145O₂ = 0.7', 1200, 470));
  window.DIAGRAMS = W;
})();
