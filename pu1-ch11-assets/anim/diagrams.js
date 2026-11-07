/* PU-I Ch11 drawings. SCENE.* draw one picture into a 1600-wide canvas (words follow P.L = en|kn|hi);
   DIAGRAMS['diag-*'] add a title and callout labels for the labelled board diagrams.
   The slides, notes, worksheets and animated deck reuse the scenes. */
(function(){
  const D = window.D, P = window.P, K = P.K;
  const TR = {
    'Acceptor': ['ಸ್ವೀಕಾರಕ', 'ग्राही'], 'Light': ['ಬೆಳಕು', 'प्रकाश'], 'Calvin\ncycle': ['ಕೆಲ್ವಿನ್\nಚಕ್ರ', 'केल्विन\nचक्र'], 'Calvin cycle': ['ಕೆಲ್ವಿನ್ ಚಕ್ರ', 'केल्विन चक्र'],
    'Carboxylation': ['ಕಾರ್ಬಾಕ್ಸಿಲೀಕರಣ', 'कार्बोक्सिलीकरण'], 'Reduction': ['ಅಪಕರ್ಷಣ', 'अपचयन'], 'Regeneration': ['ಪುನರುತ್ಪಾದನೆ', 'पुनर्जनन'],
    'Triose phosphate': ['ಟ್ರಯೋಸ್ ಫಾಸ್ಫೇಟ್', 'ट्रायोज़ फॉस्फेट'], 'Sucrose, starch': ['ಸುಕ್ರೋಸ್, ಪಿಷ್ಟ', 'सुक्रोज़, मंड'], 'Sugar': ['ಸಕ್ಕರೆ', 'शर्करा'],
    'Mesophyll cell': ['ಪತ್ರಮಧ್ಯಕ ಕೋಶ', 'पर्णमध्योतक कोशिका'], 'Bundle sheath cell': ['ನಾಳಕಟ್ಟು ಕವಚ ಕೋಶ', 'बंडल आच्छद कोशिका'],
    'Malic acid /\naspartic acid': ['ಮ್ಯಾಲಿಕ್ /\nಆಸ್ಪಾರ್ಟಿಕ್ ಆಮ್ಲ', 'मैलिक /\nएस्पार्टिक अम्ल'], 'C₃ acid\n(pyruvate)': ['C₃ ಆಮ್ಲ\n(ಪೈರುವೇಟ್)', 'C₃ अम्ल\n(पाइरुवेट)'], 'C₄ acid': ['C₄ ಆಮ್ಲ', 'C₄ अम्ल'],
    'STROMA (low H⁺)': ['ಸ್ಟ್ರೋಮಾ (ಕಡಿಮೆ H⁺)', 'स्ट्रोमा (कम H⁺)'], 'LUMEN (high H⁺)': ['ಲ್ಯೂಮೆನ್ (ಹೆಚ್ಚು H⁺)', 'ल्यूमेन (अधिक H⁺)'],
    'Light reaction': ['ಬೆಳಕಿನ ಕ್ರಿಯೆ', 'प्रकाश अभिक्रिया'], 'thylakoids': ['ಥೈಲಕಾಯ್ಡ್‌ಗಳು', 'थायलाकॉइड'], 'stroma': ['ಸ್ಟ್ರೋಮಾ', 'स्ट्रोमा'],
    'Chlorophyll a': ['ಪತ್ರಹರಿತ್ತು a', 'पर्णहरित a'], 'Chlorophyll b': ['ಪತ್ರಹರಿತ್ತು b', 'पर्णहरित b'], 'Xanthophyll': ['ಜ್ಯಾಂಥೋಫಿಲ್', 'ज़ैंथोफिल'], 'Carotene': ['ಕ್ಯಾರೊಟೀನ್', 'कैरोटीन'],
    'Absorption (chl a)': ['ಹೀರಿಕೆ (ಪತ್ರಹರಿತ್ತು a)', 'अवशोषण (पर्णहरित a)'], 'Absorption (chl b)': ['ಹೀರಿಕೆ (ಪತ್ರಹರಿತ್ತು b)', 'अवशोषण (पर्णहरित b)'], 'Action spectrum': ['ಕ್ರಿಯಾ ವರ್ಣಪಟಲ', 'क्रिया स्पेक्ट्रम'],
    'Wavelength (nm)': ['ತರಂಗಾಂತರ (nm)', 'तरंगदैर्ध्य (nm)'], 'Light intensity': ['ಬೆಳಕಿನ ತೀವ್ರತೆ', 'प्रकाश की तीव्रता'], 'Rate of photosynthesis': ['ದ್ಯುತಿಸಂಶ್ಲೇಷಣೆಯ ದರ', 'प्रकाश संश्लेषण की दर'],
    'CO₂ concentration': ['CO₂ ಸಾಂದ್ರತೆ', 'CO₂ सांद्रता'], 'Temperature (°C)': ['ತಾಪ (°C)', 'ताप (°C)'],
    'C₃ plants': ['C₃ ಸಸ್ಯಗಳು', 'C₃ पौधे'], 'C₄ plants': ['C₄ ಸಸ್ಯಗಳು', 'C₄ पौधे'], 'Starch': ['ಪಿಷ್ಟ', 'मंड'], 'No starch': ['ಪಿಷ್ಟ ಇಲ್ಲ', 'मंड नहीं'],
    'Chloroplast': ['ಹರಿತ್ತಿಲವ', 'हरितलवक'], 'Peroxisome': ['ಪೆರಾಕ್ಸಿಸೋಮ್', 'परऑक्सीसोम'], 'Mitochondrion': ['ಮೈಟೋಕಾಂಡ್ರಿಯ', 'माइटोकॉन्ड्रिया'],
    'Light': ['ಬೆಳಕು', 'प्रकाश'], 'Water': ['ನೀರು', 'पानी'], 'Temperature': ['ತಾಪ', 'ताप'], 'Origin': ['ಮೂಲ ಬಿಂದು', 'मूल बिंदु'],
    'Green plants': ['ಹಸಿರು ಸಸ್ಯಗಳು', 'हरे पौधे'], 'Sulphur bacteria': ['ಗಂಧಕ ಬ್ಯಾಕ್ಟೀರಿಯಾ', 'गंधक जीवाणु'], 'water': ['ನೀರು', 'पानी'],
    '6 turns': ['6 ಸುತ್ತು', '6 चक्कर'], 'no NADPH, no O₂': ['NADPH ಇಲ್ಲ, O₂ ಇಲ್ಲ', 'NADPH नहीं, O₂ नहीं'], 'Isolated chloroplasts': ['ಪ್ರತ್ಯೇಕ ಹರಿತ್ತಿಲವಗಳು', 'पृथक हरितलवक'],
    'Stoma closes': ['ಪತ್ರರಂಧ್ರ ಮುಚ್ಚುತ್ತದೆ', 'रंध्र बंद'], 'more negative': ['ಹೆಚ್ಚು ಋಣ', 'अधिक ऋणात्मक'], 'more positive': ['ಹೆಚ್ಚು ಧನ', 'अधिक धनात्मक'], 'Redox potential': ['ರೆಡಾಕ್ಸ್ ವಿಭವ', 'रेडॉक्स विभव']
  };
  const w = s => { const L = P.L || 'en'; if (L === 'en' || !TR[s]) return s; return TR[s][L === 'kn' ? 0 : 1]; };
  P.w = w;
  const S = {};
  const cw = (cx, cy, r) => `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#fffaf0" stroke="#e3d6b6" stroke-width="3"/>`;

  /* ---------- 1. Z scheme ---------- */
  S.zscheme = (o) => { o = o || {}; let s = '';
    s += D.arrow(100, 900, 100, 170, '#555', 5) + P.t(100, 150, w('more negative'), 22, '#555', { w: 600 }) + P.t(100, 940, w('more positive'), 22, '#555', { w: 600 });
    s += `<g transform="rotate(-90 64 540)">${P.t(64, 540, w('Redox potential'), 26, '#555', { w: 600 })}</g>`;
    s += P.box(150, 820, 300, 76, '#d6ecfb', { flat: true, st: '#4a90c2' }) + P.t(300, 868, '2H₂O → 4H⁺ + O₂ + 4e⁻', 25, '#174a6e');
    s += P.bubbles(500, 800, 3, 14, 3);
    s += P.ray(150, 470, 262, 640, '#f0a400') + P.t(170, 440, '680 nm', 24, '#a86b00');
    s += P.complex(340, 700, 180, 120, K.PS2, 'PS II\nP680', { fs: 28 });
    s += D.arrow(320, 812, 334, 770, '#2b6fa8', 5);
    const e = '#e0a000';
    s += D.arrow(372, 636, 440, 300, e, 9);
    s += P.pill(470, 262, w('Acceptor'), '#8a6fd8', { fs: 24 });
    s += D.arrow(510, 292, 585, 352, e, 7) + P.pill(620, 380, 'PQ', K.PQ, { fs: 24 }) + D.arrow(650, 410, 710, 448, e, 7);
    s += P.complex(760, 482, 150, 84, K.CYT, 'Cyt b₆f', { fs: 24 }) + D.arrow(802, 526, 856, 580, e, 7) + P.pill(888, 604, 'PC', K.PC, { fs: 24 }) + D.arrow(918, 630, 950, 650, e, 7);
    s += P.curve(690, 520, 640, 600, 600, 640, '#c96d10', 4) + P.pill(560, 666, 'ATP', K.ATP, { fs: 24 });
    s += P.complex(1040, 700, 180, 120, K.PS1, 'PS I\nP700', { fs: 28 });
    s += P.ray(1280, 900, 1120, 756, '#f0a400') + P.t(1320, 930, '700 nm', 24, '#a86b00');
    s += D.arrow(1060, 636, 1110, 240, e, 9);
    s += P.pill(1140, 200, w('Acceptor'), '#e07a5f', { fs: 24 });
    s += D.arrow(1190, 228, 1268, 300, e, 7);
    s += P.complex(1320, 344, 200, 90, K.NR, 'NADP\nreductase', { fs: 22 });
    s += D.arrow(1340, 392, 1380, 448, e, 7);
    s += P.box(1230, 456, 330, 70, '#e3eefb', { flat: true, st: K.NR }) + P.t(1395, 501, 'NADP⁺ + H⁺ → NADPH', 25, '#1d4f86');
    return s; };

  /* ---------- 2. Calvin cycle ---------- */
  S.calvin = (o) => { o = o || {}; const cx = 800, cy = 560, r = 280; let s = cw(cx, cy, 118);
    s += P.arc(cx, cy, r, -44, 44, '#2f8f3a', 10) + P.arc(cx, cy, r, 76, 164, '#2b6fa8', 10) + P.arc(cx, cy, r, 196, 284, '#b86a12', 10);
    const [ax, ay] = P.pt(cx, cy, r, -60), [bx, by] = P.pt(cx, cy, r, 60), [tx, ty] = P.pt(cx, cy, r, 180);
    s += P.pill(ax, ay, 'RuBP (5C)', '#2f8f3a', { fs: 28 }) + P.pill(bx, by, '3-PGA (3C)', '#2f8f3a', { fs: 28 }) + P.pill(tx, ty, w('Triose phosphate'), '#b88a12', { fs: 26 });
    s += P.box(cx - 120, 150, 240, 66, '#eef2f5', { flat: true, st: '#6f7f8f' }) + P.t(cx, 194, 'CO₂ + H₂O', 30, '#333') + D.arrow(cx, 220, cx, 272, '#555', 6);
    s += P.pill(cx, 330, 'RuBisCO', '#8a5a2a', { fs: 24 });
    { const [x2, y2] = P.pt(cx, cy, 190, 128), [x3, y3] = P.pt(cx, cy, 190, 232); s += P.t(cx, cy - 172, '① ' + w('Carboxylation'), 26, '#2f8f3a') + P.t(x2, y2, '②\n' + w('Reduction'), 26, '#2b6fa8') + P.t(x3, y3, '③\n' + w('Regeneration'), 26, '#b86a12'); }
    s += P.t(cx, cy - 6, w('Calvin\ncycle'), 34, '#1d3b2f');
    /* reduction side inputs */
    const [r1x, r1y] = P.pt(cx, cy, r, 100), [r2x, r2y] = P.pt(cx, cy, r, 140);
    s += P.pill(1330, 470, 'ATP', K.ATP, { fs: 26 }) + P.curve(1300, 494, 1180, 520, r1x + 8, r1y - 6, '#c96d10', 4) + P.curve(r1x + 10, r1y + 10, 1180, 600, 1300, 610, '#c96d10', 4) + P.pill(1340, 620, 'ADP', '#c9a27a', { fs: 24 });
    s += P.pill(1330, 720, 'NADPH', K.NADPH, { fs: 26 }) + P.curve(1280, 742, 1150, 760, r2x + 8, r2y - 4, '#2b6fa8', 4) + P.curve(r2x + 6, r2y + 12, 1120, 860, 1270, 860, '#2b6fa8', 4) + P.pill(1340, 862, 'NADP⁺', '#8fb3d9', { fs: 24 });
    /* regeneration side */
    const [g1x, g1y] = P.pt(cx, cy, r, 250);
    s += P.pill(260, 760, 'ATP', K.ATP, { fs: 26 }) + P.curve(300, 740, 400, 700, g1x - 8, g1y + 6, '#c96d10', 4) + P.curve(g1x - 6, g1y - 10, 420, 600, 300, 600, '#c96d10', 4) + P.pill(250, 590, 'ADP', '#c9a27a', { fs: 24 });
    /* sugar out */
    s += D.arrow(cx, ty + 28, cx, ty + 74, '#b88a12', 6) + P.box(cx - 150, ty + 78, 300, 64, '#fdf1c8', { flat: true, st: '#c49a1a' }) + P.t(cx, ty + 120, w('Sucrose, starch'), 26, '#6b4e00');
    return s; };

  /* ---------- 3. C4 pathway ---------- */
  S.c4 = (o) => { o = o || {}; let s = '';
    s += P.cell(60, 200, 660, 680, { cp: 20, c: '#dcedbb', cpr: 24 }) + P.cell(880, 200, 660, 680, { cp: 30, wall: 18, c: '#bcd690', st: '#4a7a26', cpr: 28 });
    s += P.t(390, 930, w('Mesophyll cell'), 32, '#3d6a1e') + P.t(1210, 930, w('Bundle sheath cell'), 32, '#2d5512');
    s += P.co2(370, 130, 1) + D.arrow(370, 160, 370, 388, '#555', 6);
    s += P.pill(200, 420, 'PEP (3C)', '#2f8f3a', { fs: 26 }) + D.arrow(260, 410, 470, 410, '#2f8f3a', 7);
    s += P.pill(300, 470, 'PEPcase', '#8a5a2a', { fs: 22 });
    s += P.pill(560, 420, 'OAA (4C)', '#2f8f3a', { fs: 26 }) + D.arrow(560, 452, 560, 520, '#2f8f3a', 7);
    s += P.box(430, 528, 260, 96, '#e9f5d3', { flat: true, st: '#2f8f3a' }) + P.t(560, 568, w('Malic acid /\naspartic acid'), 24, '#1d5a1d');
    s += D.arrow(690, 576, 1010, 576, '#2f8f3a', 9) + P.t(800, 540, w('C₄ acid'), 28, '#1d5a1d', { halo: true });
    s += P.co2(1110, 470, .9) + D.arrow(1060, 560, 1100, 500, '#555', 6) + D.arrow(1150, 470, 1210, 470, '#555', 6);
    s += `<circle cx="1320" cy="470" r="100" fill="#fff6dc" stroke="#2f8f3a" stroke-width="6"/>` + P.arc(1320, 470, 100, 20, 330, '#2f8f3a', 6) + P.t(1320, 462, w('Calvin\ncycle'), 26, '#1d3b2f');
    s += D.arrow(1320, 572, 1320, 690, '#b88a12', 6) + P.box(1215, 694, 210, 60, '#fdf1c8', { flat: true, st: '#c49a1a' }) + P.t(1320, 734, w('Sugar'), 26, '#6b4e00');
    s += P.box(960, 640, 210, 96, '#f4f0e0', { flat: true, st: '#8a7a40' }) + P.t(1065, 680, w('C₃ acid\n(pyruvate)'), 24, '#5a4a10') + D.arrow(1040, 600, 1050, 636, '#8a7a40', 5);
    s += P.parrow('M960,700 C800,700 700,800 520,800 C360,800 240,700 210,460', '#8a7a40', 7);
    s += P.pill(400, 760, 'ATP → ADP', K.ATP, { fs: 22 });
    return s; };

  /* ---------- 4. chemiosmosis ---------- */
  S.chemi = (o) => { o = o || {}; const y = 470, th = 90; let s = '';
    s += `<rect x="60" y="140" width="1480" height="${y - 140}" rx="24" fill="#eef7df"/><rect x="60" y="${y + th}" width="1480" height="${930 - y - th}" rx="24" fill="#fff4d6"/>`;
    s += P.t(90, 186, w('STROMA (low H⁺)'), 28, '#2d5512', { a: 'start' }) + P.t(90, 910, w('LUMEN (high H⁺)'), 28, '#8a5a00', { a: 'start' });
    s += P.membrane(60, 1540, y, th);
    s += P.ray(170, 180, 268, 400, '#f0a400') + P.ray(740, 180, 830, 400, '#f0a400');
    s += P.complex(310, y + th / 2, 160, 190, K.PS2, 'PS II', { fs: 28 }) + D.ball(470, y + th / 2, 26, K.PQ) + P.t(470, y + th / 2 + 9, 'PQ', 20, '#4a3a00');
    s += P.complex(610, y + th / 2, 130, 170, K.CYT, 'Cyt\nb₆f', { fs: 24 }) + D.ball(740, y + th + 46, 26, K.PC) + P.t(740, y + th + 55, 'PC', 20, '#fff');
    s += P.complex(880, y + th / 2, 160, 190, K.PS1, 'PS I', { fs: 28 }) + P.complex(1050, y - 60, 170, 80, K.NR, 'NADP\nreductase', { fs: 20 });
    const e = '#d89a00', dsh = '14 10';
    s += P.parrow(`M380,${y + 20} Q430,${y - 20} 452,${y + 20}`, e, 6, { dash: dsh }) + P.parrow(`M496,${y + 46} L540,${y + 46}`, e, 6, { dash: dsh }) + P.parrow(`M640,${y + 130} Q680,${y + 160} 712,${y + 150}`, e, 6, { dash: dsh }) + P.parrow(`M768,${y + 140} Q820,${y + 150} 830,${y + 120}`, e, 6, { dash: dsh }) + P.parrow(`M940,${y - 20} Q980,${y - 60} 990,${y - 62}`, e, 6, { dash: dsh });
    s += P.box(170, 700, 290, 64, '#d6ecfb', { flat: true, st: '#4a90c2' }) + P.t(315, 742, '2H₂O → 4H⁺ + O₂', 25, '#174a6e') + D.arrow(315, 698, 315, 650, '#4a90c2', 5);
    s += P.t(1060, 320, 'NADP⁺ + H⁺ → NADPH', 24, '#1d4f86');
    s += P.hp(610, 250, 18) + D.arrow(610, 272, 610, 372, '#c98a10', 5) + D.arrow(610, 660, 610, 720, '#c98a10', 5) + P.hp(610, 744, 18);
    s += P.atpSynthase(1320, y, th, 1.05);
    s += D.arrow(1320, 860, 1320, y + th + 10, '#c98a10', 7) + D.arrow(1395, 330, 1450, 270, '#c98a10', 6);
    s += P.box(1380, 196, 150, 60, '#fde8c8', { flat: true, st: K.ATP }) + P.t(1455, 236, 'ATP', 30, '#7a4300') + P.t(1380, 172, 'ADP + Pi', 22, '#7a4300');
    const R = D.rnd(9); for (let i = 0; i < 22; i++){ const hx = 120 + R() * 1340, hy = 640 + R() * 220; if (Math.abs(hx - 1320) < 70 || (Math.abs(hx - 315) < 170 && hy < 780) || Math.abs(hx - 610) < 40 || Math.abs(hx - 740) < 40) continue; s += P.hp(hx, hy, 15); }
    [[230, 380], [760, 300], [1210, 410], [1500, 380]].forEach(([hx, hy]) => { s += P.hp(hx, hy, 15); });
    return s; };

  /* ---------- 5. chloroplast ---------- */
  S.chloroplast = (o) => { o = o || {}; return P.chloroplast(800, 540, 640, 320); };
  /* ---------- 6. Kranz anatomy ---------- */
  S.kranz = (o) => { o = o || {}; let s = `<rect x="40" y="130" width="1520" height="790" rx="40" fill="#f6fbea"/>`; const cx = 800, cy = 525;
    for (let x = 50; x < 1550; x += 76){ s += P.cell(x, 140, 72, 62, { c: '#eef6dc', wall: 4, st: '#7a9a4a', round: .3 }); s += P.cell(x, 848, 72, 62, { c: '#eef6dc', wall: 4, st: '#7a9a4a', round: .3 }); }
    s += `<path d="M40,138 H1560" stroke="#c8b46a" stroke-width="6"/>`;
    /* stoma in the lower epidermis */
    s += `<rect x="1120" y="846" width="120" height="70" fill="#f6fbea"/>` + `<path d="M1130,880 C1140,846 1176,846 1178,880 C1176,914 1140,914 1130,880 Z" fill="${D.lg('#7cbf55')}" stroke="#3d6a1e" stroke-width="3"/><path d="M1230,880 C1220,846 1184,846 1182,880 C1184,914 1220,914 1230,880 Z" fill="${D.lg('#7cbf55')}" stroke="#3d6a1e" stroke-width="3"/>`;
    /* loose mesophyll away from the bundle */
    const R = D.rnd(23); for (let x = 120; x < 1500; x += 112) for (let y = 270; y < 820; y += 96){ const d = Math.hypot(x - cx, y - cy); if (d < 360) continue; const ox = (R() - .5) * 26, oy = (R() - .5) * 20;
      s += `<ellipse cx="${x + ox}" cy="${y + oy}" rx="46" ry="38" fill="#dcedbb" stroke="#6c8f3a" stroke-width="4"/>` + P.mini(x + ox - 22, y + oy - 14, 12, 7, 20) + P.mini(x + ox + 18, y + oy + 10, 12, 7, -30) + P.mini(x + ox + 8, y + oy - 22, 11, 6, 0); }
    /* radial mesophyll ring */
    for (let i = 0; i < 18; i++){ const a = i * 20, [x, y] = P.pt(cx, cy, 262, a); s += `<ellipse cx="${x}" cy="${y}" rx="58" ry="34" fill="#dcedbb" stroke="#6c8f3a" stroke-width="4" transform="rotate(${a + 90} ${x} ${y})"/>` + P.mini(x, y, 13, 7, a + 90); }
    /* bundle sheath ring: big cells, thick walls, many chloroplasts */
    for (let i = 0; i < 12; i++){ const a = i * 30 + 15, [x, y] = P.pt(cx, cy, 172, a); s += `<circle cx="${x}" cy="${y}" r="56" fill="#bcd690" stroke="#3f6a1e" stroke-width="10"/>`;
      for (let j = 0; j < 6; j++){ const [mx, my] = P.pt(x, y, 30, j * 60 + a); s += P.mini(mx, my, 13, 8, j * 60 + a + 90, '#2f8a2e'); } }
    /* xylem (top) and phloem (bottom) */
    [[-38, -40, 26], [36, -36, 22], [0, -66, 18], [-6, -14, 14]].forEach(([dx, dy, rr]) => { s += `<circle cx="${cx + dx}" cy="${cy + dy}" r="${rr}" fill="#fbf4e2" stroke="#8a5a2a" stroke-width="7"/>`; });
    [[-34, 44], [0, 52], [34, 44], [-16, 78], [18, 80]].forEach(([dx, dy]) => { s += `<circle cx="${cx + dx}" cy="${cy + dy}" r="16" fill="#e8dcf2" stroke="#7a5a9a" stroke-width="3"/>`; });
    return s; };

  /* ---------- 7. cyclic photophosphorylation ---------- */
  S.cyclic = (o) => { o = o || {}; let s = ''; const e = '#e0a000';
    s += P.ray(220, 440, 430, 640, '#c0392b') + P.t(240, 410, '> 680 nm', 26, '#a8321e');
    s += P.complex(540, 690, 200, 130, K.PS1, 'PS I\nP700', { fs: 30 });
    s += D.arrow(560, 620, 620, 280, e, 10) + P.pill(650, 240, w('Acceptor'), '#e07a5f', { fs: 26 });
    s += P.parrow('M720,250 C900,240 1000,300 1030,380', e, 8) + P.complex(1050, 440, 170, 96, K.CYT, 'Cyt b₆f', { fs: 26 });
    s += P.parrow('M1040,494 C1020,560 980,600 940,620', e, 8) + P.pill(900, 640, 'PC', K.PC, { fs: 26 }) + P.parrow('M860,660 C760,690 700,700 650,700', e, 8);
    s += P.curve(1140, 440, 1220, 440, 1260, 470, '#c96d10', 5) + P.box(1250, 470, 270, 70, '#fde8c8', { flat: true, st: K.ATP }) + P.t(1385, 515, 'ADP + Pi → ATP', 26, '#7a4300');
    s += P.box(1150, 160, 360, 70, '#f1f1f1', { flat: true, st: '#999', dash: '10 8' }) + P.t(1330, 205, w('no NADPH, no O₂'), 26, '#888');
    return s; };

  /* ---------- 8. light harvesting complex ---------- */
  S.lhc = (o) => { o = o || {}; const cx = 760, cy = 520; let s = P.ellipse(cx, cy, 360, 330, D.rg('#f3ead2'), '#d8c8a0', 3);
    [[300, 30, '#f0a030', 20], [235, 24, '#b9d24e', 22], [165, 16, '#5fb04a', 24], [95, 9, '#3f9a3a', 24]].forEach(([r, n, c, br], k) => { for (let i = 0; i < n; i++){ const [x, y] = P.pt(cx, cy, r, i * 360 / n + k * 7); s += D.ball(x, y, br, c); } });
    s += D.ball(cx, cy, 44, '#1f6f2a') + P.t(cx, cy + 9, 'RC', 26, '#fff');
    const [px, py] = P.pt(cx, cy, 300, -60);
    if (!o.noRay) s += P.ray(180, 140, px - 16, py - 12, '#f0a400');
    const path = [[300, -60], [235, -52], [165, -42], [95, -30], [46, -20]].map(([r, a]) => P.pt(cx, cy, r, a));
    if (!o.noRay) s += P.parrow('M' + path.map(p => p.map(v => v.toFixed(1)).join(',')).join(' L'), '#c0392b', 5, { dash: '10 8' });
    if (!o.noOut) s += D.arrow(cx + 40, cy - 20, 1240, 300, '#e0a000', 8) + P.pill(1330, 270, w('Acceptor'), '#8a6fd8', { fs: 28 }) + P.el(1180, 330, 20);
    return s; };

  /* ---------- 9. spectra ---------- */
  S.spectrum = (o) => { o = o || {}; const x0 = 210, y0 = 760, W = 1200, H = 540; let s = P.axes(x0, y0, W + 40, H + 60, '', w('Rate of photosynthesis') + ' / ' + w('Light').toLowerCase(), { yoff: 60, fs: 24 });
    s += P.rainbow(x0, y0 + 14, W, 26);
    [400, 450, 500, 550, 600, 650, 700].forEach((nm, i) => { s += P.t(x0 + i * W / 6, y0 + 74, nm, 24, '#333', { w: 600 }); });
    s += P.t(x0 + W / 2, y0 + 120, w('Wavelength (nm)'), 26, '#222', { w: 600 });
    const a = P.spec(x0, y0, W, H, [[432, .86, 18], [410, .22, 14], [662, .8, 13], [615, .14, 18]], 400, 700), b = P.spec(x0, y0, W, H, [[453, .86, 15], [430, .3, 14], [642, .5, 12]], 400, 700), act = P.spec(x0, y0, W, H, [[438, .92, 32], [676, .78, 22], [550, .2, 45], [600, .15, 30]], 400, 700);
    s += P.line(a, '#2f8f3a', 6) + P.line(b, '#9cb83a', 6) + P.line(act, '#222', 5, { dash: '16 10' });
    s += P.box(1060, 150, 400, 160, '#ffffff', { flat: true, st: '#ccc' });
    [['#2f8f3a', w('Absorption (chl a)'), ''], ['#9cb83a', w('Absorption (chl b)'), ''], ['#222', w('Action spectrum'), '16 10']].forEach(([c, t, d], i) => { s += `<line x1="1085" y1="${190 + i * 44}" x2="1145" y2="${190 + i * 44}" stroke="${c}" stroke-width="6" ${d ? `stroke-dasharray="${d}"` : ''}/>` + P.t(1160, 198 + i * 44, t, 22, '#222', { a: 'start', w: 600 }); });
    return s; };

  /* ---------- 10. light intensity graph ---------- */
  S.lightgraph = (o) => { o = o || {}; const x0 = 230, y0 = 780; let s = P.axes(x0, y0, 1200, 600, w('Light intensity'), w('Rate of photosynthesis'), { yoff: 60, fs: 28 });
    const pts = [[x0, y0], [440, 610], [640, 445], [760, 372], [880, 330], [1050, 312], [1380, 308]];
    s += P.line(pts, '#2f8f3a', 8);
    const dot = (x, y, t, dx, dy) => D.ball(x, y, 14, '#c0392b') + P.t(x + (dx || 0), y + (dy || -26), t, 36, '#a8321e');
    s += dot(440, 610, 'A', -30, -18) + dot(640, 445, 'B', -30, -18) + dot(1180, 310, 'C', 0, -30);
    s += `<line x1="770" y1="${y0}" x2="770" y2="368" stroke="#777" stroke-width="3" stroke-dasharray="12 9"/>` + P.t(770, y0 - 24, 'D', 36, '#a8321e');
    return s; };

  /* ---------- pictures used on slides, notes and the animated deck ---------- */
  S.leafSun = () => { let s = P.sun(260, 240, 90) + P.ray(360, 300, 640, 470, '#f0a400') + P.plant(820, 920, 2.1);
    s += P.co2(1290, 430, 1.1) + D.arrow(1240, 450, 1060, 520, '#555', 6) + P.t(1290, 500, 'CO₂', 34, '#333');
    s += D.arrow(600, 640, 420, 700, K.O2, 6) + P.o2(360, 720, 1.1) + P.t(360, 790, 'O₂', 34, '#a8321e');
    s += D.arrow(820, 880, 820, 770, K.WATER, 6) + P.drop(900, 860, 22) + P.t(960, 872, 'H₂O', 30, '#174a6e', { a: 'start' });
    return s; };
  S.halfLeaf = () => { let s = '';
    s += P.leaf(80, 500, 640, -8, '#3f7a2a', { w: .34 });
    s += `<g opacity=".95"><path d="M170,420 C230,380 300,390 330,430 C300,450 260,470 200,470 Z" fill="#f7f4e6"/><path d="M420,560 C480,520 560,540 600,580 C540,610 470,610 430,600 Z" fill="#f7f4e6"/><path d="M500,420 C540,400 600,410 640,440 C600,460 560,470 520,460 Z" fill="#f7f4e6"/></g>`;
    s += P.t(400, 720, w('Starch') + ' ✓ / ' + w('No starch'), 30, '#333');
    s += P.leaf(860, 500, 620, 0, '#24452a', { w: .32 });
    s += `<path d="M1150,380 H1500 A40,120 0 0 1 1500,620 H1150 Z" fill="#dff1ff" fill-opacity=".45" stroke="#6f9cc0" stroke-width="5"/>`;
    s += `<g opacity=".9"><path d="M1160,430 C1250,410 1380,430 1480,500 C1380,570 1250,590 1160,570 Z" fill="#c8b45a"/></g>`;
    s += `<rect x="1130" y="380" width="34" height="240" rx="8" fill="${D.lg('#b7854a')}" stroke="#6a4520" stroke-width="3"/>`;
    s += `<path d="M1460,560 c20,-30 60,-20 56,10 c20,10 10,48 -20,40 c-10,24 -50,20 -50,-6 c-26,-6 -16,-40 14,-44 Z" fill="#ffffff" stroke="#bbb" stroke-width="3"/>` + P.t(1490, 670, 'KOH', 30, '#333');
    return s; };
  S.belljar = () => { let s = P.jar(400, 820, 420, 560) + P.candle(330, 820, 1.2, false) + P.mouse(500, 820, .9, true);
    s += P.jar(1160, 820, 460, 600) + P.plant(1080, 820, 1.25) + P.candle(1240, 820, 1.1, true) + P.mouse(1310, 820, .75, false);
    s += P.sun(1460, 200, 60) + P.ray(1400, 250, 1260, 330, '#f0a400');
    s += P.t(400, 900, '✗', 70, '#c0392b') + P.t(1160, 900, '✓', 70, '#2f8f3a');
    return s; };
  S.engelmann = () => { let s = P.rainbow(180, 640, 1240, 40);
    for (let i = 0; i < 12; i++){ const x = 190 + i * 102; s += `<rect x="${x}" y="470" width="100" height="80" rx="22" fill="${D.lg('#5fb04a')}" stroke="#2f6a1e" stroke-width="3"/>` + `<path d="M${x + 14},${510} C${x + 34},${490} ${x + 64},${530} ${x + 86},${506}" stroke="#2a7a2a" stroke-width="7" fill="none"/>`; }
    const R = D.rnd(31); const clump = (x, n, sp) => { let t = ''; for (let i = 0; i < n; i++){ const bx = x + (R() - .5) * sp, by = 440 - R() * 220, a = R() * 180; t += `<rect x="${(bx - 11).toFixed(1)}" y="${(by - 5).toFixed(1)}" width="22" height="10" rx="5" fill="#5a6f9a" transform="rotate(${a.toFixed(0)} ${bx.toFixed(1)} ${by.toFixed(1)})"/>`; } return t; };
    s += clump(330, 34, 230) + clump(1200, 30, 230) + clump(760, 5, 300);
    return s; };
  S.vanniel = () => { let s = '';
    s += P.box(140, 220, 1320, 220, '#e9f5d3', { flat: true, st: '#2f8f3a' }) + P.plant(300, 420, .62) + P.t(880, 315, '2H₂O + CO₂ → CH₂O + H₂O + O₂', 46, '#1d3b2f') + P.t(880, 385, w('Green plants'), 30, '#2f8f3a');
    s += P.box(140, 520, 1320, 220, '#f3ecfa', { flat: true, st: '#7a5a9a' });
    const R = D.rnd(7); for (let i = 0; i < 9; i++) s += `<ellipse cx="${250 + (R() - .5) * 140}" cy="${630 + (R() - .5) * 120}" rx="26" ry="12" fill="${D.lg('#9a62c9')}" stroke="#5a2a8a" stroke-width="2" transform="rotate(${R() * 180} ${250} ${630})"/>`;
    s += P.t(880, 615, '2H₂S + CO₂ → CH₂O + H₂O + 2S', 46, '#3b2a58') + P.t(880, 685, w('Sulphur bacteria'), 30, '#7a5a9a');
    s += P.t(800, 840, '2H₂A + CO₂ → 2A + CH₂O + H₂O', 44, '#8a5a00');
    return s; };
  S.equation = () => { let s = P.sun(800, 210, 70);
    s += P.t(800, 520, '6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂', 64, '#1d3b2f');
    s += P.parrow('M470,560 C600,700 1150,720 1330,560', '#4a90c2', 7) + P.t(900, 720, '12 H₂O  →  6 O₂', 40, '#2b6fa8');
    return s; };
  S.leafCells = () => { let s = P.cell(250, 170, 1100, 700, { cp: 30, cpr: 44, c: '#dcedbb', nucleus: true });
    s += `<path d="${P.rrect(420, 320, 760, 400, 120)}" fill="#e6f2fb" stroke="#9cc3df" stroke-width="3" opacity=".8"/>`;
    s += P.ray(120, 120, 330, 260, '#f0a400') + P.ray(1480, 120, 1270, 260, '#f0a400');
    return s; };
  S.split = () => { let s = P.chloroplast(620, 540, 480, 260);
    s += D.arrow(820, 420, 1100, 300, '#2f8f3a', 6) + P.pill(1250, 260, 'ATP + NADPH', K.NADPH, { fs: 32 }) + P.t(1250, 210, w('thylakoids'), 28, '#2f6a1e');
    s += D.arrow(700, 720, 1100, 790, '#b88a12', 6) + P.pill(1250, 800, w('Sugar'), K.SUGAR, { fs: 32, tc: '#5a4300' }) + P.t(1250, 880, w('stroma'), 28, '#6b4e00');
    return s; };
  S.chromatogram = () => { let s = `<path d="M500,900 L500,260 A300,40 0 0 1 1100,260 L1100,900 Z" fill="#dff1ff" fill-opacity=".35" stroke="#6f9cc0" stroke-width="5"/><rect x="500" y="800" width="600" height="100" fill="#cfe6f7" opacity=".7"/>`;
    s += `<rect x="700" y="180" width="200" height="680" fill="#fffef6" stroke="#bbb" stroke-width="3"/>`;
    [[300, '#f29a1e', 'Carotene'], [400, '#f2d02a', 'Xanthophyll'], [540, '#2a8f6a', 'Chlorophyll a'], [640, '#8db83a', 'Chlorophyll b']].forEach(([y, c, n]) => { s += `<rect x="712" y="${y}" width="176" height="30" rx="10" fill="${c}"/>` + P.t(940, y + 26, w(n), 34, '#222', { a: 'start' }); });
    s += D.ball(800, 760, 14, '#2f6a1e') + P.t(940, 772, w('Origin'), 30, '#555', { a: 'start' });
    return s; };
  S.accessory = () => { let s = D.ball(1150, 520, 120, '#2a8f6a') + P.t(1150, 534, w('Chlorophyll a'), 34, '#fff');
    [[300, 300, '#8db83a', 'Chlorophyll b'], [280, 540, '#f2d02a', 'Xanthophyll'], [320, 780, '#f29a1e', 'Carotene']].forEach(([x, y, c, n]) => { s += D.ball(x, y, 72, c) + P.t(x, y + 120, w(n), 30, '#333') + P.parrow(`M${x + 80},${y} Q${(x + 1030) / 2},${(y + 520) / 2 - 40} 1020,${520 + (y - 540) * .35}`, '#c0392b', 6, { dash: '14 10' }); });
    s += P.ray(40, 120, 230, 250, '#f0a400') + P.ray(40, 560, 200, 545, '#f0a400');
    return s; };
  S.twoPhases = () => { let s = P.box(120, 260, 560, 480, '#eef7df', { st: '#2f8f3a', flat: true }) + P.box(920, 260, 560, 480, '#fff6dc', { st: '#b88a12', flat: true });
    s += P.t(400, 330, w('Light reaction'), 38, '#2d5512') + P.t(400, 380, '(' + w('thylakoids') + ')', 28, '#2d5512');
    s += P.sun(220, 520, 50) + P.h2o(400, 600, 1.1) + D.arrow(470, 520, 560, 470, K.O2, 5) + P.o2(610, 450, .9);
    s += P.t(1200, 470, w('Calvin cycle'), 38, '#6b4e00') + P.t(1200, 520, '(' + w('stroma') + ')', 28, '#6b4e00');
    s += P.co2(1060, 640, .9) + D.arrow(1110, 640, 1180, 640, '#555', 5) + P.pill(1330, 640, w('Sugar'), K.SUGAR, { fs: 28, tc: '#5a4300' });
    s += D.arrow(690, 400, 910, 400, K.ATP, 8) + P.pill(800, 360, 'ATP', K.ATP, { fs: 28 }) + D.arrow(690, 560, 910, 560, K.NADPH, 8) + P.pill(800, 520, 'NADPH', K.NADPH, { fs: 28 });
    s += D.arrow(910, 690, 690, 690, '#999', 5) + P.t(800, 680, 'ADP, NADP⁺', 24, '#666');
    return s; };
  S.photolysis = () => { let s = P.complex(1100, 380, 300, 200, K.PS2, 'PS II\nP680', { fs: 40 });
    s += D.ball(1000, 560, 34, '#8a5ab0') + P.t(1000, 570, 'Mn', 24, '#fff') + D.ball(1080, 600, 26, '#4fb35a') + P.t(1080, 608, 'Cl', 22, '#fff');
    s += P.h2o(300, 520, 1.6) + P.h2o(300, 700, 1.6) + D.arrow(420, 610, 600, 610, '#4a90c2', 8);
    s += P.hp(700, 520, 26) + P.hp(760, 520, 26) + P.hp(700, 590, 26) + P.hp(760, 590, 26) + P.o2(730, 700, 1.2) + P.el(860, 470, 22) + P.el(900, 520, 22) + P.el(860, 570, 22) + P.el(900, 620, 22);
    s += D.arrow(930, 540, 1000, 480, '#e0a000', 7) + P.bubbles(740, 820, 3, 16, 4);
    return s; };
  S.hill = () => { let s = `<path d="M640,180 L640,780 A160,110 0 0 0 960,780 L960,180" fill="#dff1ff" fill-opacity=".4" stroke="#6f9cc0" stroke-width="6"/><rect x="646" y="420" width="308" height="440" fill="#cfe9b8" opacity=".8"/>`;
    const R = D.rnd(13); for (let i = 0; i < 26; i++) s += P.mini(670 + R() * 260, 470 + R() * 360, 18, 10, R() * 180);
    s += P.bubbles(800, 420, 6, 16, 8) + P.ray(280, 260, 600, 480, '#f0a400') + P.ray(1320, 260, 1000, 480, '#f0a400');
    s += P.t(800, 990, w('Isolated chloroplasts'), 32, '#2d5512') + P.o2(1150, 260, 1.1) + P.t(1150, 330, 'O₂', 34, '#a8321e');
    return s; };
  S.atp = () => { const mol = (x, y, n) => { let t = D.ball(x, y, 46, '#6c8fd6') + P.t(x, y + 12, 'A', 34, '#fff'); for (let i = 0; i < n; i++) t += D.line(x + 46 + i * 92, y, x + 60 + i * 92, y, '#333', 6) + D.ball(x + 92 + i * 92, y, 32, '#e8952f') + P.t(x + 92 + i * 92, y + 10, 'P', 26, '#fff'); return t; };
    let s = mol(170, 520, 2) + P.t(500, 535, '+', 60, '#333') + D.ball(590, 520, 32, '#e8952f') + P.t(590, 530, 'P', 26, '#fff');
    s += D.arrow(660, 520, 860, 520, '#333', 7) + P.sun(760, 360, 50) + mol(960, 520, 3);
    s += P.t(330, 660, 'ADP', 40, '#333') + P.t(590, 660, 'Pi', 40, '#333') + P.t(1100, 660, 'ATP', 40, '#7a4300');
    return s; };
  S.atpase = () => { let s = `<rect x="200" y="150" width="1200" height="350" rx="24" fill="#eef7df"/><rect x="200" y="590" width="1200" height="300" rx="24" fill="#fff4d6"/>` + P.membrane(200, 1400, 500, 90, { r: 10 });
    s += P.atpSynthase(800, 500, 90, 1.7);
    for (let i = 0; i < 14; i++) s += P.hp(260 + (i % 7) * 160 + (i > 6 ? 60 : 0), 680 + Math.floor(i / 7) * 110, 22);
    s += D.arrow(800, 870, 800, 610, '#c98a10', 9) + D.arrow(900, 260, 1060, 200, '#c98a10', 7) + P.pill(1180, 200, 'ATP', K.ATP, { fs: 36 }) + P.t(1180, 290, 'ADP + Pi', 30, '#7a4300');
    s += P.t(560, 560, 'CF₀', 36, '#5a1a3a') + P.t(560, 300, 'CF₁', 36, '#5a1a3a');
    return s; };
  S.glucose = () => { let s = ''; for (let i = 0; i < 6; i++) s += P.co2(200 + (i % 2) * 140, 230 + Math.floor(i / 2) * 170, .95);
    s += D.arrow(440, 400, 700, 400, '#555', 8);
    const hx = (x, y, r) => { let d = ''; for (let i = 0; i < 6; i++){ const [px, py] = P.pt(x, y, r, i * 60 + 30); d += (i ? 'L' : 'M') + px.toFixed(1) + ',' + py.toFixed(1); } return `<path d="${d}Z" fill="${D.lg(K.SUGAR)}" stroke="#8a6a10" stroke-width="5"/>`; };
    s += hx(900, 400, 140) + P.t(900, 415, 'C₆H₁₂O₆', 34, '#5a4300');
    s += P.pill(1300, 250, w('6 turns'), '#2f8f3a', { fs: 32 }) + P.pill(1300, 400, '18 ATP', K.ATP, { fs: 32 }) + P.pill(1300, 550, '12 NADPH', K.NADPH, { fs: 32 });
    return s; };
  S.maize = () => { let s = P.sun(1380, 190, 80);
    for (let i = 0; i < 4; i++) s += P.grass(250 + i * 300, 940, 1.55 - (i % 2) * .15, { cob: i % 2 === 0 });
    for (let i = 0; i < 3; i++) s += `<path d="M${300 + i * 380},${180} c20,-20 40,20 60,0 s40,20 60,0" stroke="#e88a3a" stroke-width="6" fill="none" opacity=".8"/>`;
    s += P.thermo(1460, 600, 1.2, .85);
    return s; };
  S.rubisco = () => { let s = `<path d="M560,300 C760,180 1040,260 1080,460 C1120,640 900,780 700,760 C560,745 440,650 450,520 L620,520 L520,420 Z" fill="${D.rg('#8a5a2a')}" stroke="#4a2a10" stroke-width="5"/>` + P.t(780, 620, 'RuBisCO', 44, '#fff');
    s += P.co2(260, 330, 1.4) + D.arrow(340, 360, 520, 460, '#2f8f3a', 8) + P.t(260, 250, '✓', 64, '#2f8f3a');
    s += P.o2(260, 720, 1.4) + D.arrow(330, 690, 520, 560, '#c0392b', 8) + P.t(260, 820, '✗', 64, '#c0392b');
    s += P.pill(1330, 380, '2 × 3-PGA', '#2f8f3a', { fs: 32 }) + P.pill(1330, 640, '3-PGA + 2C', '#c0392b', { fs: 32 }) + D.arrow(1090, 420, 1180, 390, '#2f8f3a', 6) + D.arrow(1090, 560, 1180, 620, '#c0392b', 6);
    return s; };
  S.photoresp = () => { let s = P.chloroplast(300, 520, 230, 130, { noInner: true });
    s += P.ellipse(800, 520, 140, 120, D.rg('#e7d38a'), '#a88a2a', 4) + P.t(800, 530, '', 20);
    s += `<ellipse cx="1290" cy="520" rx="230" ry="130" fill="${D.lg('#f08a6a')}" stroke="#a8401e" stroke-width="5"/><path d="M1100,520 C1130,440 1170,600 1200,520 S1270,440 1300,520 S1370,600 1400,520 S1450,460 1470,520" stroke="#a8401e" stroke-width="7" fill="none"/>`;
    s += P.t(300, 720, w('Chloroplast'), 32, '#2d5512') + P.t(800, 720, w('Peroxisome'), 32, '#6b5200') + P.t(1290, 720, w('Mitochondrion'), 32, '#8a2a10');
    s += D.arrow(540, 500, 650, 500, '#555', 7) + D.arrow(950, 500, 1050, 500, '#555', 7) + D.arrow(1290, 380, 1290, 250, '#555', 7) + P.co2(1290, 210, 1.1);
    s += P.o2(300, 300, 1) + D.arrow(300, 330, 300, 380, K.O2, 6) + P.pill(560, 380, 'ATP ↓', K.ATP, { fs: 28 });
    return s; };
  S.factors = () => { let s = P.leaf(560, 520, 480, 0, K.LEAF, { w: .36 });
    s += P.sun(280, 260, 80) + P.t(280, 420, w('Light'), 30, '#8a6508');
    s += P.co2(1290, 260, 1.4) + P.t(1290, 360, 'CO₂', 30, '#333');
    s += P.thermo(300, 880, 1.1) + P.t(420, 840, w('Temperature'), 30, '#a8321e', { a: 'start' });
    s += P.drop(1290, 800, 50) + P.t(1290, 910, w('Water'), 30, '#174a6e');
    return s; };
  S.barrel = () => { let s = ''; const hs = [560, 600, 330, 580, 620, 540], cols = ['#f2c94c', '#9aa5b1', '#e0453a', '#4aa3df', '#8cc56a', '#f29a1e'];
    hs.forEach((h, i) => { const x = 440 + i * 122; s += `<rect x="${x}" y="${880 - h}" width="114" height="${h}" rx="10" fill="${D.lg('#c4874a', 1)}" stroke="#6a4520" stroke-width="3"/>`; });
    s += `<rect x="446" y="556" width="712" height="316" fill="#4aa3df" opacity=".55"/><path d="M684,552 C700,560 720,600 712,660" stroke="#4aa3df" stroke-width="14" fill="none" stroke-linecap="round" opacity=".8"/>`;
    s += `<path d="M430,800 Q800,840 1170,800" stroke="#555" stroke-width="12" fill="none"/><path d="M430,600 Q800,640 1170,600" stroke="#555" stroke-width="12" fill="none"/>`;
    s += P.sun(500, 200, 40) + P.co2(745, 170, .8) + P.thermo(1107, 300, .55) + P.drop(990, 210, 24) + P.t(745, 470, 'CO₂', 30, '#333');
    s += P.parrow('M745,520 L745,600', '#c0392b', 6);
    return s; };
  S.co2graph = () => { const x0 = 230, y0 = 780; let s = P.axes(x0, y0, 1200, 600, w('CO₂ concentration'), w('Rate of photosynthesis'), { yoff: 60, fs: 28, xoff: 96 });
    s += P.line([[x0, y0], [420, 560], [560, 400], [680, 350], [900, 340], [1380, 338]], '#c96d10', 8) + P.line([[x0, y0], [420, 650], [640, 520], [860, 380], [1040, 300], [1200, 270], [1380, 262]], '#2f8f3a', 8);
    s += P.t(1250, 395, w('C₄ plants'), 34, '#c96d10') + P.t(1250, 230, w('C₃ plants'), 34, '#2f8f3a');
    s += `<line x1="680" y1="${y0}" x2="680" y2="350" stroke="#c96d10" stroke-width="3" stroke-dasharray="12 9"/><line x1="1040" y1="${y0}" x2="1040" y2="300" stroke="#2f8f3a" stroke-width="3" stroke-dasharray="12 9"/>`;
    s += P.t(680, y0 + 40, '360', 26, '#c96d10') + P.t(1040, y0 + 40, '450', 26, '#2f8f3a');
    return s; };
  S.tempgraph = () => { const x0 = 230, y0 = 780; let s = P.axes(x0, y0, 1200, 600, w('Temperature (°C)'), w('Rate of photosynthesis'), { yoff: 60, fs: 28, xoff: 96 });
    const bell = (m, a, sd) => { const p = []; for (let t = 0; t <= 55; t += 2.5) p.push([x0 + t / 55 * 1150, y0 - a * Math.exp(-((t - m) ** 2) / (2 * sd * sd)) * 520]); return p; };
    s += P.line(bell(18, .7, 8), '#2f8f3a', 8) + P.line(bell(38, 1, 8), '#c96d10', 8);
    s += P.t(x0 + 18 / 55 * 1150, 360, w('C₃ plants'), 32, '#2f8f3a') + P.t(x0 + 38 / 55 * 1150, 225, w('C₄ plants'), 32, '#c96d10');
    [10, 25, 30, 45].forEach(t => { s += P.t(x0 + t / 55 * 1150, y0 + 38, t, 24, '#444'); });
    return s; };
  S.wilt = () => { let s = D.tube('M500,900 C500,700 520,560 620,470', '#7a8a3a', 16);
    [[620, 470, 200, 120], [560, 600, 180, 150], [520, 720, 160, 160]].forEach(([x, y, L, a]) => { s += P.leaf(x, y, L, a, '#a8a24a'); });
    s += `<path d="M380,900 L620,900 L590,990 L410,990 Z" fill="${D.lg('#c8693a')}" stroke="#7a3a1a" stroke-width="3"/>`;
    s += `<path d="M1000,500 C1020,380 1140,380 1170,500 C1140,620 1020,620 1000,500 Z" fill="${D.lg('#7cbf55')}" stroke="#3d6a1e" stroke-width="4"/><path d="M1340,500 C1320,380 1200,380 1170,500 C1200,620 1320,620 1340,500 Z" fill="${D.lg('#7cbf55')}" stroke="#3d6a1e" stroke-width="4"/>`;
    s += P.co2(1170, 300, 1) + P.t(1170, 250, '✗', 50, '#c0392b') + P.t(1170, 700, w('Stoma closes'), 32, '#2d5512');
    return s; };
  window.SCENE = S;

  /* ---------- labelled board diagrams ---------- */
  const T = (x, y, t, fs, o) => D.text(x, y, t, Object.assign({ fs: fs || 30, b: true, head: true, c: '#1d3b2f' }, o || {}));
  const L = (x, y, t, tx, ty, fs) => D.label(x, y, t, tx, ty, { fs: fs || 22 });
  const SVG = (w_, h, fn) => { const bg = []; P.L = 'en'; return D.svg(w_, h, fn).replace(/<g data-bg="1">[\s\S]*?<\/g>/g, m => { bg.push(m); return ''; }).replace('</defs>', () => '</defs>' + bg.join('')); };
  const card = (x, y, w_, h, c) => `<g data-bg="1"><rect x="${x}" y="${y}" width="${w_}" height="${h}" rx="26" fill="${c || '#fffdf6'}" stroke="#e0d6bd" stroke-width="3"/></g>`;
  const W = {};
  W['diag-z-scheme'] = () => SVG(1600, 1000, () => card(20, 20, 1560, 960, '#fffaf0') + T(800, 78, 'Z Scheme of Light Reaction', 46) + S.zscheme() +
    L(680, 900, 'Water splitting complex\n(Mn, Cl) — O₂ released', 452, 872) + L(300, 560, 'Photosystem II', 300, 640) + L(560, 150, 'Primary electron\nacceptor', 480, 230) +
    L(880, 330, 'Electron transport\nsystem (cytochromes)', 770, 440) + L(860, 770, 'Photosystem I', 980, 720) + L(1460, 120, 'Electron acceptor', 1200, 190) + L(1450, 620, 'NADPH formed\n(stroma side)', 1395, 530));
  W['diag-calvin'] = () => SVG(1600, 1060, () => card(20, 20, 1560, 1020, '#fffaf0') + T(800, 78, 'The Calvin Cycle — Three Stages', 46) + S.calvin() +
    L(300, 220, 'CO₂ acceptor\n(5-carbon ketose)', 470, 420) + L(1300, 250, 'First stable product\n(3-carbon)', 1060, 396) + L(330, 920, 'For each CO₂:\n3 ATP + 2 NADPH', 520, 740) + L(1250, 960, 'Sugar leaves the cycle', 952, 950));
  W['diag-c4'] = () => SVG(1600, 1000, () => card(20, 20, 1560, 960, '#fffaf0') + T(800, 70, 'The C₄ (Hatch and Slack) Pathway', 44) + S.c4() +
    L(150, 140, 'CO₂ from air', 345, 130) + L(160, 560, 'Primary acceptor\n(3C)', 200, 445) + L(700, 300, 'First product (4C)', 590, 400) +
    L(1460, 340, 'CO₂ released here\n(high CO₂ near RuBisCO)', 1140, 450) + L(1290, 820, 'Thick walls, many\nchloroplasts', 1515, 700) + L(780, 960, 'C₃ acid returns;\nPEP regenerated', 620, 790));
  W['diag-chemiosmosis'] = () => SVG(1600, 1000, () => card(20, 20, 1560, 960, '#fffaf0') + T(800, 78, 'ATP Synthesis Through Chemiosmosis', 46) + S.chemi() +
    L(1000, 210, 'Light', 790, 300) + L(1080, 880, 'Proton gradient:\nmany H⁺ in lumen', 1000, 780) + L(1500, 520, 'CF₀ (channel)', 1360, 515) + L(1500, 420, 'CF₁', 1380, 380) + L(470, 360, 'H⁺ pumped in', 600, 330) + L(130, 610, 'Thylakoid\nmembrane', 140, 510));
  W['diag-chloroplast'] = () => SVG(1600, 960, () => { let s = card(20, 20, 1560, 920, '#fffaf0') + T(800, 78, 'Chloroplast (Electron Micrograph Sketch)', 46) + S.chloroplast(); const G = P.cpLayout(800, 540, 640, 320).grana;
    s += L(260, 170, 'Outer membrane', 400, 260) + L(1360, 170, 'Inner membrane', 1220, 268) + L(800, 170, 'Granum (stack of thylakoids)', G[2][0], G[2][1] - 100);
    s += L(1460, 470, 'Stroma lamella', (G[3][0] + G[4][0]) / 2, G[3][1] - 40) + L(150, 640, 'Stroma (matrix)', 290, 700) + L(380, 880, 'Starch granule', 723, 716) + L(1240, 880, 'Lipid droplet', 1082, 702) + L(1460, 760, 'Ribosomes', 1172, 702) + L(1080, 250, 'DNA (circular)', 1000, 352); return s; });
  W['diag-kranz'] = () => SVG(1600, 1000, () => card(20, 20, 1560, 960, '#fffaf0') + T(800, 78, 'Kranz Anatomy — T.S. of a C₄ Leaf', 46) + S.kranz() +
    L(240, 105, 'Upper epidermis', 220, 160) + L(240, 950, 'Lower epidermis', 300, 880) + L(1380, 950, 'Stoma', 1180, 900) + L(1340, 330, 'Mesophyll cells', 1050, 400) +
    L(1340, 640, 'Bundle sheath cells\n("Kranz" = wreath)', 960, 590) + L(480, 330, 'Xylem', 762, 488) + L(480, 720, 'Phloem', 784, 575));
  W['diag-cyclic'] = () => SVG(1600, 900, () => card(20, 20, 1560, 860, '#fffaf0') + T(800, 78, 'Cyclic Photophosphorylation (PS I only)', 46) + S.cyclic() +
    L(320, 800, 'P700 — reaction\ncentre of PS I', 440, 720) + L(380, 200, 'Electron acceptor', 570, 240) + L(1290, 700, 'Electron returns\nto PS I', 760, 690) + L(1340, 360, 'ATP only', 1300, 470));
  W['diag-lhc'] = () => SVG(1600, 1000, () => card(20, 20, 1560, 960, '#fffaf0') + T(800, 78, 'Light Harvesting Complex (Photosystem)', 46) + S.lhc() +
    L(260, 300, 'Photon', 330, 230) + L(1300, 620, 'Antenna pigments\n(chl b, carotenoids, chl a)', 1050, 560) + L(1200, 820, 'Reaction centre\n(one chlorophyll a)', 800, 540) + L(1380, 400, 'Primary electron acceptor', 1330, 300) + L(250, 560, 'Energy passed\ninwards (resonance)', 610, 405));
  W['diag-spectrum'] = () => SVG(1600, 960, () => card(20, 20, 1560, 920, '#fffaf0') + T(800, 78, 'Absorption Spectrum and Action Spectrum', 44) + S.spectrum() +
    L(520, 190, 'Blue peak', 368, 262) + L(1040, 260, 'Red peak', 1245, 345) + L(760, 560, 'Green light: little absorbed', 690, 648));
  W['diag-light-graph'] = () => SVG(1600, 960, () => card(20, 20, 1560, 920, '#fffaf0') + T(800, 78, 'Effect of Light Intensity on Photosynthesis', 44) + S.lightgraph() +
    L(470, 300, 'A, B: light is the\nlimiting factor', 560, 520) + L(960, 190, 'C: another factor limits\n(rate stays flat)', 1165, 296) + L(1000, 560, 'D: other factor\nstarts to limit', 790, 470));
  window.DIAGRAMS = W;
})();
