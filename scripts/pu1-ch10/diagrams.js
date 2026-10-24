/* PU-I Ch10 labelled diagrams (SVG strings). Each function returns a full <svg>. Also reused as
   building blocks (stage(...)) by the slides, notes and animated deck. */
(function(){
  const D = window.D, C = window.C, R = C.RED, B = C.BLUE;
  const T = (x, y, t, fs, o) => D.text(x, y, t, Object.assign({ fs: fs || 30, b: true, head: true, c: '#1d3b2f' }, o || {}));
  /* backgrounds stay crisp: moved out of the painted (filtered) layer */
  const SVG = (w, h, fn) => { const bg = []; return D.svg(w, h, fn).replace(/<g data-bg="1">[\s\S]*?<\/g>/g, m => { bg.push(m); return ''; }).replace('</defs>', () => '</defs>' + bg.join('')); };
  const card = (x, y, w, h, c) => `<g data-bg="1"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="26" fill="${c || '#fffdf6'}" stroke="#e0d6bd" stroke-width="3"/></g>`;

  /* ---------- stage drawings: draw one cell at (cx,cy) with radius rx,ry ---------- */
  const CH = [ // [length, colour, y offset] — two homologous pairs (long & short), red = maternal, blue = paternal
    [118, R, -84], [118, B, -28], [76, R, 22], [76, B, 66]
  ];
  const S = {};
  S.interphase = (cx, cy, k) => { k = k || 1; return C.cell(cx, cy, 175 * k, 140 * k, { seed: 3 }) + C.nucleus(cx - 10 * k, cy + 5 * k, 70 * k, { chromatin: true }) + C.centriole(cx + 95 * k, cy - 70 * k, .8 * k) + C.centriole(cx + 112 * k, cy - 52 * k, .7 * k); };
  S.prophase = (cx, cy, k) => { k = k || 1; let s = C.cell(cx, cy, 175 * k, 140 * k, { seed: 4 }) + C.nucleus(cx, cy, 82 * k, { dashed: true, nucleolus: false });
    [[-30, -28, -25], [28, -32, 30], [-26, 34, 60], [30, 30, -15]].forEach(([dx, dy, a], i) => { s += C.chromosome(cx + dx * k, cy + dy * k, CH[i][0] * .62 * k, a, CH[i][1], { w: 11 * k }); });
    s += C.aster(cx - 120 * k, cy - 70 * k, 46 * k, 12) + C.aster(cx + 120 * k, cy + 70 * k, 46 * k, 12); return s; };
  S.metaphase = (cx, cy, k) => { k = k || 1; const xl = cx - 150 * k, xr = cx + 150 * k; let s = C.cell(cx, cy, 175 * k, 140 * k, { seed: 6, dots: 10 }) + C.spindle(xl, xr, cy, 220 * k, 9);
    CH.forEach(([L, col, dy]) => { const y = cy + dy * .9 * k; s += C.fibre(xl, cy, cx - 16 * k, y) + C.fibre(xr, cy, cx + 16 * k, y); });
    CH.forEach(([L, col, dy]) => { s += C.chromosome(cx, cy + dy * .9 * k, L * .32 * k, 0, col, { w: 12 * k, kin: true, cpos: .5 }); });
    return s + C.aster(xl, cy, 40 * k, 12) + C.aster(xr, cy, 40 * k, 12); };
  S.anaphase = (cx, cy, k) => { k = k || 1; const xl = cx - 150 * k, xr = cx + 150 * k; let s = C.cell(cx, cy, 182 * k, 136 * k, { seed: 7, dots: 10 }) + C.spindle(xl, xr, cy, 200 * k, 7);
    CH.forEach(([L, col, dy]) => { const y = cy + dy * .9 * k; s += C.fibre(xl, cy, cx - 70 * k, y) + C.fibre(xr, cy, cx + 70 * k, y);
      s += C.daughter(cx - 70 * k, y, L * .55 * k, 180, col, { w: 11 * k }) + C.daughter(cx + 70 * k, y, L * .55 * k, 0, col, { w: 11 * k }); });
    return s + C.aster(xl, cy, 40 * k, 12) + C.aster(xr, cy, 40 * k, 12); };
  S.telophase = (cx, cy, k) => { k = k || 1; let s = C.cell(cx, cy, 190 * k, 130 * k, { pinch: .35 });
    [-1, 1].forEach(i => { s += C.nucleus(cx + i * 105 * k, cy, 52 * k, { dashed: true }); for (let j = 0; j < 4; j++) s += C.squiggle(cx + i * 105 * k - 20 * k + j * 13 * k, cy + 8 * k, 58 * k, 20 * j - 30, CH[j][1], 9 + j, 4 * k); s += C.centriole(cx + i * 168 * k, cy - 20 * k, .6 * k); });
    return s; };
  S.cytokinesis = (cx, cy, k) => { k = k || 1; let s = '';
    [-1, 1].forEach(i => { s += C.cell(cx + i * 100 * k, cy, 92 * k, 108 * k, { seed: 8 + i, dots: 8 }) + C.nucleus(cx + i * 100 * k, cy, 45 * k, { chromatin: true }); });
    return s; };

  /* meiosis model: chromosomes as bivalents */
  const PAIRS = [[110, -45], [72, 45]];
  S.leptotene = (cx, cy, k) => { k = k || 1; let s = C.cell(cx, cy, 165 * k, 130 * k, { seed: 11 }) + C.nucleus(cx, cy, 92 * k, { nucleolus: true });
    [[-40, -10, -30, R, 120], [-5, 15, 20, B, 120], [35, -20, 60, R, 80], [10, 40, -60, B, 80]].forEach(([dx, dy, a, c, L], i) => { s += C.squiggle(cx + dx * k, cy + dy * k, L * k, a, c, 21 + i, 4 * k); }); return s; };
  S.zygotene = (cx, cy, k) => { k = k || 1; let s = C.cell(cx, cy, 165 * k, 130 * k, { seed: 12 }) + C.nucleus(cx, cy, 92 * k, { nucleolus: true });
    PAIRS.forEach(([L, dx], i) => { const x = cx + dx * k * .9, a = i ? 20 : -15;
      for (let j = -3; j <= 3; j++){ const [x1, y1] = C.rot(-7 * k, j * 12 * k, a, x, cy), [x2, y2] = C.rot(7 * k, j * 12 * k, a, x, cy); s += D.line(x1, y1, x2, y2, '#9a7b2a', 2); }
      s += C.chromosome(x - 7 * k, cy, L * .9 * k, a, R, { single: true, w: 7 * k, bands: false }) + C.chromosome(x + 7 * k, cy, L * .9 * k, a, B, { single: true, w: 7 * k, bands: false }); }); return s; };
  S.pachytene = (cx, cy, k) => { k = k || 1; let s = C.cell(cx, cy, 165 * k, 130 * k, { seed: 13 }) + C.nucleus(cx, cy, 92 * k, { nucleolus: false });
    PAIRS.forEach(([L, dx], i) => { const x = cx + dx * k * .9, a = i ? 15 : -10, w = 9 * k;
      s += C.chromosome(x - 14 * k, cy, L * .95 * k, a, R, { w, gap: w * .5, cols: [R, R], swap: [{ c: 1, from: .62, to: 1, col: B }] });
      s += C.chromosome(x + 14 * k, cy, L * .95 * k, a, B, { w, gap: w * .5, cols: [B, B], swap: [{ c: 0, from: .62, to: 1, col: R }] });
      const [nx, ny] = C.rot(0, L * .95 * k * .3, a, x, cy); s += D.ball(nx, ny, 9 * k, '#f2c94c'); }); return s; };
  S.diplotene = (cx, cy, k) => { k = k || 1; let s = C.cell(cx, cy, 165 * k, 130 * k, { seed: 14 }) + C.nucleus(cx, cy, 92 * k, { nucleolus: false });
    PAIRS.forEach(([L, dx], i) => { const x = cx + dx * k * .9, w = 9 * k, base = i ? 10 : -8;
      s += C.chromosome(x - 6 * k, cy, L * .95 * k, base - 14, R, { w, gap: w * .5, cols: [R, R], swap: [{ c: 1, from: .62, to: 1, col: B }], cpos: .35 });
      s += C.chromosome(x + 6 * k, cy, L * .95 * k, base + 14, B, { w, gap: w * .5, cols: [B, B], swap: [{ c: 0, from: .62, to: 1, col: R }], cpos: .35 }); }); return s; };
  S.diakinesis = (cx, cy, k) => { k = k || 1; let s = C.cell(cx, cy, 165 * k, 130 * k, { seed: 15 }) + C.nucleus(cx, cy, 95 * k, { dashed: true, nucleolus: false });
    PAIRS.forEach(([L, dx], i) => { const x = cx + dx * k * .9, w = 11 * k;
      s += C.chromosome(x - 14 * k, cy - 6 * k, L * .7 * k, -25, R, { w, cols: [R, R], swap: [{ c: 1, from: .8, to: 1, col: B }], cpos: .45 });
      s += C.chromosome(x + 14 * k, cy - 6 * k, L * .7 * k, 25, B, { w, cols: [B, B], swap: [{ c: 0, from: .8, to: 1, col: R }], cpos: .45 }); });
    return s + C.aster(cx - 125 * k, cy - 60 * k, 34 * k, 10) + C.aster(cx + 125 * k, cy + 60 * k, 34 * k, 10); };
  S.metaphase1 = (cx, cy, k) => { k = k || 1; const xl = cx - 150 * k, xr = cx + 150 * k; let s = C.cell(cx, cy, 175 * k, 140 * k, { seed: 16, dots: 10 }) + C.spindle(xl, xr, cy, 200 * k, 7);
    PAIRS.forEach(([L], i) => { const y = cy + (i ? 52 : -52) * k, w = 11 * k; s += C.fibre(xl, cy, cx - 30 * k, y) + C.fibre(xr, cy, cx + 30 * k, y);
      s += C.chromosome(cx - 22 * k, y, L * .55 * k, 0, R, { w, cols: [R, R], swap: [{ c: 1, from: .78, to: 1, col: B }] }) + C.chromosome(cx + 22 * k, y, L * .55 * k, 0, B, { w, cols: [B, B], swap: [{ c: 0, from: .78, to: 1, col: R }] }); });
    return s + C.aster(xl, cy, 40 * k, 12) + C.aster(xr, cy, 40 * k, 12); };
  S.anaphase1 = (cx, cy, k) => { k = k || 1; const xl = cx - 150 * k, xr = cx + 150 * k; let s = C.cell(cx, cy, 182 * k, 136 * k, { seed: 17, dots: 10 }) + C.spindle(xl, xr, cy, 200 * k, 7);
    PAIRS.forEach(([L], i) => { const y = cy + (i ? 52 : -52) * k, w = 11 * k; s += C.fibre(xl, cy, cx - 85 * k, y) + C.fibre(xr, cy, cx + 85 * k, y);
      s += C.chromosome(cx - 85 * k, y, L * .55 * k, 0, R, { w, cols: [R, R], swap: [{ c: 1, from: .78, to: 1, col: B }], bow: 9 * k }) + C.chromosome(cx + 85 * k, y, L * .55 * k, 0, B, { w, cols: [B, B], swap: [{ c: 0, from: .78, to: 1, col: R }], bow: 9 * k }); });
    return s + C.aster(xl, cy, 40 * k, 12) + C.aster(xr, cy, 40 * k, 12); };
  S.telophase1 = (cx, cy, k) => { k = k || 1; let s = C.cell(cx, cy, 190 * k, 130 * k, { pinch: .55 });
    [-1, 1].forEach(i => { const col = i < 0 ? R : B, oth = i < 0 ? B : R; s += C.nucleus(cx + i * 105 * k, cy, 58 * k, { dashed: true, nucleolus: false });
      s += C.chromosome(cx + i * 105 * k - 16 * k, cy, 62 * k, 10, col, { w: 9 * k, cols: [col, col], swap: [{ c: 1, from: .78, to: 1, col: oth }] }) + C.chromosome(cx + i * 105 * k + 18 * k, cy + 4 * k, 42 * k, -15, col, { w: 9 * k, cols: [col, col], swap: [{ c: 0, from: .78, to: 1, col: oth }] }); });
    return s; };
  /* meiosis II: one haploid cell (red set) */
  const HP = (col, oth) => [[64, col, oth, -34], [44, col, oth, 30]];
  S.prophase2 = (cx, cy, k, col) => { k = k || 1; col = col || R; const oth = col === R ? B : R; let s = C.cell(cx, cy, 120 * k, 110 * k, { seed: 18, dots: 8 }) + C.nucleus(cx, cy, 62 * k, { dashed: true, nucleolus: false });
    HP(col, oth).forEach(([L, c, o, dy], i) => { s += C.chromosome(cx + (i ? 18 : -18) * k, cy + dy * .4 * k, L * k, i ? 30 : -20, c, { w: 9 * k, cols: [c, c], swap: [{ c: 1 - i, from: .78, to: 1, col: o }] }); });
    return s + C.aster(cx - 82 * k, cy - 56 * k, 26 * k, 9) + C.aster(cx + 82 * k, cy + 56 * k, 26 * k, 9); };
  S.metaphase2 = (cx, cy, k, col) => { k = k || 1; col = col || R; const oth = col === R ? B : R, xl = cx - 100 * k, xr = cx + 100 * k; let s = C.cell(cx, cy, 120 * k, 110 * k, { seed: 19, dots: 6 }) + C.spindle(xl, xr, cy, 150 * k, 6);
    HP(col, oth).forEach(([L, c, o, dy], i) => { const y = cy + dy * k; s += C.fibre(xl, cy, cx - 12 * k, y) + C.fibre(xr, cy, cx + 12 * k, y) + C.chromosome(cx, y, L * .6 * k, 0, c, { w: 9 * k, cols: [c, c], swap: [{ c: 1 - i, from: .8, to: 1, col: o }], kin: true, cpos: .5 }); });
    return s + C.aster(xl, cy, 28 * k, 9) + C.aster(xr, cy, 28 * k, 9); };
  S.anaphase2 = (cx, cy, k, col) => { k = k || 1; col = col || R; const oth = col === R ? B : R, xl = cx - 100 * k, xr = cx + 100 * k; let s = C.cell(cx, cy, 124 * k, 108 * k, { seed: 20, dots: 6 }) + C.spindle(xl, xr, cy, 150 * k, 6);
    HP(col, oth).forEach(([L, c, o, dy], i) => { const y = cy + dy * k; s += C.fibre(xl, cy, cx - 50 * k, y) + C.fibre(xr, cy, cx + 50 * k, y) + C.daughter(cx - 50 * k, y, L * .55 * k, 180, i ? o : c, { w: 8 * k }) + C.daughter(cx + 50 * k, y, L * .55 * k, 0, c, { w: 8 * k }); });
    return s + C.aster(xl, cy, 28 * k, 9) + C.aster(xr, cy, 28 * k, 9); };
  S.tetrad = (cx, cy, k) => { k = k || 1; let s = ''; [[-1, -1, R], [1, -1, R], [-1, 1, B], [1, 1, B]].forEach(([i, j, c], n) => { const x = cx + i * 72 * k, y = cy + j * 62 * k; s += C.cell(x, y, 66 * k, 58 * k, { seed: 30 + n, dots: 4 }) + C.nucleus(x, y, 28 * k, { nucleolus: true }) + C.squiggle(x - 6 * k, y + 4 * k, 30 * k, 30, c, 40 + n, 3 * k) + C.squiggle(x + 8 * k, y + 2 * k, 22 * k, -40, n % 2 ? R : B, 50 + n, 3 * k); }); return s; };
  window.STAGE = S;

  const L = (x, y, t, tx, ty, fs) => D.label(x, y, t, tx, ty, { fs: fs || 22 });
  const W = {};
  /* 1. cell cycle wheel */
  W['diag-cell-cycle'] = () => SVG(1600, 1000, () => {
    const cx = 560, cy = 545, r = 320, ri = 145;
    const seg = [['G₁', 60, 210, '#7fb7e6'], ['S', 210, 310, '#f2b75b'], ['G₂', 310, 390, '#9ad08b'], ['M', 30, 60, '#e7748a']];
    let s = card(20, 20, 1560, 960, '#fffaf0');
    const pt = (a, rr) => [cx + rr * Math.sin(a * Math.PI / 180), cy - rr * Math.cos(a * Math.PI / 180)];
    seg.forEach(([n, a0, a1, c]) => { const [x0, y0] = pt(a0, r), [x1, y1] = pt(a1, r), [x2, y2] = pt(a1, ri), [x3, y3] = pt(a0, ri), big = a1 - a0 > 180 ? 1 : 0;
      s += `<path d="M${x0},${y0} A${r},${r} 0 ${big} 1 ${x1},${y1} L${x2},${y2} A${ri},${ri} 0 ${big} 0 ${x3},${y3} Z" fill="${D.lg(c)}" stroke="#fff" stroke-width="8"/>`;
      const [tx, ty] = pt((a0 + a1) / 2, (r + ri) / 2); s += T(tx, ty + 16, n, n === 'M' ? 40 : 58, { c: '#16322a' }); });
    s += `<circle cx="${cx}" cy="${cy}" r="${ri - 6}" fill="${D.rg('#fff6e0')}" stroke="#e3cf9d" stroke-width="4"/>` + T(cx, cy - 16, 'CELL', 38) + T(cx, cy + 28, 'CYCLE', 38);
    let d = ''; for (let a = 63; a <= 387; a += 4){ const [x, y] = pt(a, r + 34); d += (a === 63 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1); }
    s += `<path d="${d}" stroke="#2f7d6a" stroke-width="7" fill="none" stroke-linecap="round"/>`;
    const [gx, gy] = pt(128, r + 4); s += D.arrow(gx, gy, 955, 815, '#6b5aa6', 5) + `<circle cx="1010" cy="840" r="58" fill="${D.rg('#cfc4f0')}" stroke="#6b5aa6" stroke-width="4"/>` + T(1010, 855, 'G₀', 44, { c: '#3b2a78' });
    s += card(1080, 110, 470, 400, '#fff') + T(1315, 162, 'M phase', 34, { c: '#b2304c' });
    s += D.arrow(pt(45, r + 6)[0], pt(45, r + 6)[1], 1074, 250, '#b2304c', 4);
    ['Prophase', 'Metaphase', 'Anaphase', 'Telophase'].forEach((n, i) => { s += `<g data-bg="1"><rect x="1110" y="${192 + i * 54}" width="410" height="44" rx="10" fill="${['#fde3e8', '#fdeedd', '#e5f3e2', '#e3eefb'][i]}"/></g>` + T(1315, 223 + i * 54, (i + 1) + '. ' + n, 27, { b: false }); });
    s += T(1315, 438, '+ Cytokinesis', 30, { c: '#b2304c' }) + T(1315, 476, 'karyokinesis, then cytokinesis', 22, { b: false, c: '#555' });
    s += T(800, 78, 'The Cell Cycle — Phases', 46);
    s += L(300, 130, 'Interphase (> 95% of the cycle)', pt(340, r + 34)[0], pt(340, r + 34)[1]);
    s += L(1290, 620, 'G₁ – growth,\nno DNA replication', pt(100, r - 40)[0], pt(100, r - 40)[1]);
    s += L(200, 925, 'S – DNA replication\n2C → 4C (still 2n)', pt(250, r - 60)[0], pt(250, r - 60)[1]);
    s += L(140, 420, 'G₂ – proteins\nfor mitosis', pt(330, r - 60)[0], pt(330, r - 60)[1]);
    s += L(1330, 850, 'G₀ – quiescent stage\n(exit from G₁)', 1072, 845);
    return s; });

  /* 2. stages of mitosis */
  W['diag-mitosis'] = () => SVG(1600, 1180, () => {
    let s = card(20, 20, 1560, 1140, '#fffaf0') + T(800, 78, 'Stages of Mitosis (Animal Cell)', 46);
    const cells = [['interphase', 'Late Interphase (G₂)'], ['prophase', 'Prophase'], ['metaphase', 'Metaphase'], ['anaphase', 'Anaphase'], ['telophase', 'Telophase'], ['cytokinesis', 'Cytokinesis']];
    cells.forEach(([f, n], i) => { const cx = 290 + (i % 3) * 510, cy = 330 + Math.floor(i / 3) * 520; s += S[f](cx, cy, 1.05) + T(cx, cy + 205, (i ? i + '. ' : '') + n, 32); });
    s += L(150, 150, 'Nucleus', 270, 300) + L(445, 175, 'Centrioles', 390, 255);
    s += L(640, 145, 'Aster', 683, 252) + L(935, 145, 'Condensing\nchromosome', 845, 300);
    s += L(1460, 150, 'Spindle fibre', 1440, 300) + L(1050, 300, 'Metaphase\nplate', 1300, 360) + L(1475, 470, 'Kinetochore', 1325, 260);
    s += L(140, 680, 'Daughter\nchromosomes', 215, 790) + L(420, 660, 'Centromere leads', 360, 750);
    s += L(705, 655, 'Nuclear envelope\nreforming', 690, 790) + L(930, 960, 'Furrow', 800, 900);
    s += L(1460, 655, 'Daughter cells', 1430, 760);
    return s; });

  /* 3. prophase I */
  W['diag-prophase1'] = () => SVG(1600, 1180, () => {
    let s = card(20, 20, 1560, 1140, '#fffaf0') + T(800, 78, 'Sub-stages of Prophase I (Meiosis)', 46);
    const st = [['leptotene', 'Leptotene', 'chromosomes become visible'], ['zygotene', 'Zygotene', 'synapsis'], ['pachytene', 'Pachytene', 'crossing over'], ['diplotene', 'Diplotene', 'chiasmata'], ['diakinesis', 'Diakinesis', 'terminalisation']];
    st.forEach(([f, n, d], i) => { const cx = i < 3 ? 290 + i * 510 : 545 + (i - 3) * 510, cy = i < 3 ? 320 : 830; s += S[f](cx, cy, 1.1) + T(cx, cy + 195, (i + 1) + '. ' + n, 32) + T(cx, cy + 232, '(' + d + ')', 24, { b: false, c: '#555' }); });
    s += L(150, 150, 'Thin thread-like\nchromosomes', 245, 300);
    s += L(640, 140, 'Synaptonemal\ncomplex', 698, 300) + L(940, 160, 'Homologous pair', 850, 270);
    s += L(1460, 140, 'Recombination\nnodule', 1265, 344) + L(1470, 590, 'Bivalent / tetrad\n(4 chromatids)', 1385, 385);
    s += L(255, 690, 'Chiasma\n(X-shaped)', 470, 820) + L(1360, 650, 'Chiasmata move\nto the ends', 1100, 800) + L(1380, 1000, 'Nuclear envelope\nbreaking down', 1140, 900);
    return s; });

  /* 4. meiosis I */
  W['diag-meiosis1'] = () => SVG(1600, 700, () => {
    let s = card(20, 20, 1560, 660, '#fffaf0') + T(800, 78, 'Meiosis I (Reductional Division)', 46);
    [['metaphase1', 'Metaphase I'], ['anaphase1', 'Anaphase I'], ['telophase1', 'Telophase I (Dyad)']].forEach(([f, n], i) => { const cx = 290 + i * 510, cy = 340; s += S[f](cx, cy, 1.05) + T(cx, cy + 205, n, 32); });
    s += L(150, 160, 'Bivalents on the\nequatorial plate', 268, 290) + L(455, 600, 'Spindle', 400, 430);
    s += L(800, 160, 'Homologues separate\n(chromatids stay joined)', 710, 290) + L(1420, 160, 'Two cells,\neach n', 1415, 300);
    return s; });

  /* 5. meiosis II */
  W['diag-meiosis2'] = () => SVG(1600, 760, () => {
    let s = card(20, 20, 1560, 720, '#fffaf0') + T(800, 78, 'Meiosis II (Equational Division)', 46);
    [['prophase2', 'Prophase II'], ['metaphase2', 'Metaphase II'], ['anaphase2', 'Anaphase II'], ['tetrad', 'Telophase II (Tetrad)']].forEach(([f, n], i) => { const cx = 215 + i * 390, cy = 360; s += S[f](cx, cy, 1.15) + T(cx, cy + 200, n, 30); });
    s += L(220, 160, 'Nuclear membrane\ndisappears', 230, 300) + L(600, 640, 'Chromosomes at\nthe equator', 605, 410) + L(1000, 160, 'Centromeres split;\nchromatids move apart', 960, 330) + L(1380, 160, 'Four haploid\ncells', 1360, 290);
    return s; });

  /* 6. cytokinesis */
  W['diag-cytokinesis'] = () => SVG(1600, 900, () => {
    let s = card(20, 20, 1560, 860, '#fffaf0') + T(800, 78, 'Cytokinesis — Animal Cell vs Plant Cell', 46);
    s += T(400, 150, 'Animal cell: furrowing (centripetal)', 30, { c: '#b2304c' });
    [0, .45, .9].forEach((p, i) => { const cx = 170 + i * 230, cy = 330; s += C.cell(cx, cy, 100, 80, { pinch: p }) + C.nucleus(cx - 46, cy, 24, { nucleolus: false }) + C.nucleus(cx + 46, cy, 24, { nucleolus: false }); if (i < 2) s += D.arrow(cx + 104, cy, cx + 126, cy, '#333', 4); });
    s += T(1180, 150, 'Plant cell: cell plate (centrifugal)', 30, { c: '#2f7d32' });
    [.25, .6, 1].forEach((p, i) => { const x = 860 + i * 230, y = 230; s += C.plantCell(x, y, 200, 200) + C.nucleus(x + 100, y + 50, 22, { nucleolus: false }) + C.nucleus(x + 100, y + 150, 22, { nucleolus: false });
      const w = 182 * p; s += `<rect x="${x + 100 - w / 2}" y="${y + 96}" width="${w}" height="9" rx="4" fill="#4f8a2e"/>`; if (p < 1) s += D.arrow(x + 100 + w / 2 + 4, y + 100, x + 100 + w / 2 + 30, y + 100, '#4f8a2e', 3) + D.arrow(x + 100 - w / 2 - 4, y + 100, x + 100 - w / 2 - 30, y + 100, '#4f8a2e', 3); if (i < 2) s += D.arrow(x + 204, y + 100, x + 226, y + 100, '#333', 4); });
    s += L(400, 560, 'Furrow in plasma membrane deepens\nand joins in the centre', 400, 360);
    s += L(980, 560, 'Cell plate forms in the centre\n(= middle lamella)', 960, 330) + L(1400, 560, 'Meets the existing\nlateral walls', 1335, 330);
    s += card(120, 660, 1360, 180, '#fff') + T(800, 712, 'Syncytium — when cytokinesis does not follow karyokinesis', 30, { c: '#6b4a95' });
    s += C.cell(400, 775, 150, 50, { dots: 0 }); for (let i = 0; i < 6; i++) s += C.nucleus(300 + i * 40, 775, 14, { nucleolus: false });
    s += T(1000, 790, 'Many free nuclei in one cytoplasm — e.g. liquid endosperm of coconut', 24, { b: false, c: '#333' });
    return s; });

  /* 7. metaphase chromosome */
  W['diag-chromosome'] = () => SVG(1600, 900, () => {
    let s = card(20, 20, 1560, 860, '#fffaf0') + T(800, 78, 'Metaphase Chromosome & Kinetochore', 46);
    s += C.aster(230, 470, 90, 16) + C.aster(1370, 470, 90, 16);
    for (let i = -3; i <= 3; i++){ s += C.fibre(230, 470, 735, 470 + i * 6, { w: 3, bend: i * 22 }) + C.fibre(1370, 470, 865, 470 + i * 6, { w: 3, bend: i * 22 }); }
    s += C.chromosome(800, 470, 520, 0, R, { w: 62, cols: [R, '#e86a5c'], kin: true, cpos: .42, gap: 34, bow: 20 });
    s += L(470, 190, 'Sister chromatid 1', 760, 300) + L(1140, 190, 'Sister chromatid 2', 845, 300);
    s += L(470, 760, 'Centromere\n(primary constriction)', 790, 480) + L(1150, 740, 'Kinetochore\n(disc on centromere)', 875, 470);
    s += L(230, 300, 'Spindle pole\n(centriole + aster)', 230, 440) + L(1370, 300, 'Spindle fibres from\nthe opposite pole', 1100, 450);
    return s; });

  /* 8. mitosis vs meiosis */
  W['diag-mitosis-vs-meiosis'] = () => SVG(1600, 1000, () => {
    let s = card(20, 20, 1560, 960, '#fffaf0') + T(800, 78, 'Mitosis vs Meiosis — the Outcome', 46);
    const parent = (x, y) => C.cell(x, y, 110, 95, { dots: 6, seed: 61 }) + C.chromosome(x - 40, y, 70, 0, R, { w: 12 }) + C.chromosome(x - 12, y, 70, 0, B, { w: 12 }) + C.chromosome(x + 18, y, 46, 0, R, { w: 12 }) + C.chromosome(x + 44, y, 46, 0, B, { w: 12 });
    const kid = (x, y, cols, k) => { let t = C.cell(x, y, 90 * k, 78 * k, { dots: 4, seed: 70 + x % 9 }) + C.nucleus(x, y, 46 * k, { nucleolus: false }); cols.forEach((c, i) => { t += C.chromosome(x - 24 * k + i * 16 * k, y, (i < cols.length / 2 || cols.length === 2 && i === 0 ? 46 : 32) * k, 0, c, { single: true, w: 9 * k, bands: false }); }); return t; };
    s += T(400, 160, 'MITOSIS (equational)', 34, { c: '#2f7d6a' }) + parent(400, 320);
    s += D.arrow(360, 420, 260, 560, '#2f7d6a', 6) + D.arrow(440, 420, 540, 560, '#2f7d6a', 6);
    s += kid(230, 650, [R, B, R, B], 1) + kid(570, 650, [R, B, R, B], 1);
    s += T(400, 800, '2 cells · 2n · identical', 30) + T(400, 845, 'Growth, repair, vegetative reproduction', 24, { b: false, c: '#444' });
    s += T(1170, 160, 'MEIOSIS (reductional)', 34, { c: '#b2304c' }) + parent(1170, 320);
    s += D.arrow(1130, 420, 1010, 500, '#b2304c', 6) + D.arrow(1210, 420, 1330, 500, '#b2304c', 6);
    s += T(1170, 495, 'Meiosis I + Meiosis II', 24, { c: '#b2304c' });
    [[900, R, B], [1060, R, R], [1280, B, B], [1440, B, R]].forEach(([x, a, b], i) => { s += kid(x, 640, [a, b], .78); });
    s += T(1170, 800, '4 cells · n · genetically different', 30) + T(1170, 845, 'Gametes; crossing over gives variation', 24, { b: false, c: '#444' });
    s += T(800, 330, 'Parent cell · 2n = 4', 26, { b: false, c: '#444' });
    return s; });
  window.DIAGRAMS = W;
})();
