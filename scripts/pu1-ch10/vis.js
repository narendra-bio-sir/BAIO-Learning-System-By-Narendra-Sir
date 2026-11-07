/* small label-free pictures used on slides, colour notes and worksheets (needs draw.js, cc-draw.js, diagrams.js) */
window.V = {};
const svgBox = (w, h, f) => D.svg(w, h, f);
V.interphase = () => svgBox(420, 340, () => STAGE.interphase(210, 170, 1.05));
['prophase','metaphase','anaphase','telophase','cytokinesis','leptotene','zygotene','pachytene','diplotene','diakinesis','metaphase1','anaphase1','telophase1','prophase2','metaphase2','anaphase2','tetrad'].forEach(n => { V[n] = () => svgBox(420, 340, () => STAGE[n](210, 170, n === 'tetrad' ? 1.35 : (/2$/.test(n) ? 1.4 : 1.05))); });
V.mitosisRow = () => svgBox(840, 680, () => STAGE.prophase(210, 170, 1.05) + STAGE.metaphase(630, 170, 1.05) + STAGE.anaphase(210, 510, 1.05) + STAGE.telophase(630, 510, 1));
V.meiosisRow = () => svgBox(840, 680, () => STAGE.metaphase1(210, 170, 1.05) + STAGE.anaphase1(630, 170, 1.05) + STAGE.metaphase2(210, 510, 1.4) + STAGE.tetrad(630, 510, 1.35));
V.cells = () => svgBox(840, 500, () => { let s = C.cell(110, 250, 80, 70, { seed: 2, dots: 6 }) + C.nucleus(110, 250, 32, { chromatin: true }) + D.arrow(200, 250, 250, 250, '#333', 5);
  [[340, 180], [340, 320]].forEach(([x, y], i) => { s += C.cell(x, y, 66, 58, { seed: 3 + i, dots: 4 }) + C.nucleus(x, y, 26, {}); }); s += D.arrow(420, 250, 470, 250, '#333', 5);
  [[560, 110], [560, 250], [560, 390], [700, 180], [700, 320]].forEach(([x, y], i) => { s += C.cell(x, y, 58, 52, { seed: 6 + i, dots: 3 }) + C.nucleus(x, y, 22, {}); }); return s; });
V.wheel = (hl) => svgBox(600, 600, () => { const cx = 300, cy = 300, r = 250, ri = 112; const pt = (a, rr) => [cx + rr * Math.sin(a * Math.PI / 180), cy - rr * Math.cos(a * Math.PI / 180)];
  let s = ''; [['G₁', 60, 210, '#7fb7e6'], ['S', 210, 310, '#f2b75b'], ['G₂', 310, 390, '#9ad08b'], ['M', 30, 60, '#e7748a']].forEach(([n, a0, a1, c]) => { const [x0, y0] = pt(a0, r), [x1, y1] = pt(a1, r), [x2, y2] = pt(a1, ri), [x3, y3] = pt(a0, ri), big = a1 - a0 > 180 ? 1 : 0;
    s += `<path d="M${x0},${y0} A${r},${r} 0 ${big} 1 ${x1},${y1} L${x2},${y2} A${ri},${ri} 0 ${big} 0 ${x3},${y3} Z" fill="${D.lg(c)}" stroke="#fff" stroke-width="7"/>`; const [tx, ty] = pt((a0 + a1) / 2, (r + ri) / 2); s += D.text(tx, ty + 14, n, { fs: n === 'M' ? 34 : 50, b: true, head: true, c: '#16322a' }); });
  s += `<circle cx="${cx}" cy="${cy}" r="${ri - 5}" fill="${D.rg('#fff6e0')}" stroke="#e3cf9d" stroke-width="4"/>` + C.cell(cx, cy, 64, 54, { dots: 3 }) + C.nucleus(cx, cy, 24, {});
  if (hl === 'g0') { const [gx, gy] = pt(128, r); s += D.arrow(gx, gy, 520, 545, '#6b5aa6', 5) + `<circle cx="545" cy="560" r="40" fill="${D.rg('#cfc4f0')}" stroke="#6b5aa6" stroke-width="4"/>` + D.text(545, 572, 'G₀', { fs: 34, b: true, head: true, c: '#3b2a78' }); }
  return s; });
V.g0 = () => V.wheel('g0');
V.dna = () => svgBox(700, 420, () => C.chromosome(170, 210, 230, 0, C.RED, { single: true, w: 34, bands: false }) + D.arrow(260, 210, 380, 210, '#333', 7) + C.chromosome(530, 210, 230, 0, C.RED, { w: 34, cols: [C.RED, '#e86a5c'] }) + D.text(170, 380, '2C · 2n', { fs: 40, b: true, head: true }) + D.text(530, 380, '4C · 2n', { fs: 40, b: true, head: true }) + D.text(320, 180, 'S', { fs: 52, b: true, head: true, c: '#b07a10' }));
V.kinetochore = () => svgBox(700, 440, () => { let s = C.aster(80, 220, 60, 14) + C.aster(620, 220, 60, 14); for (let i = -3; i <= 3; i++) s += C.fibre(80, 220, 312, 220 + i * 5, { w: 3, bend: i * 16 }) + C.fibre(620, 220, 388, 220 + i * 5, { w: 3, bend: i * 16 }); return s + C.chromosome(350, 220, 330, 0, C.RED, { w: 42, cols: [C.RED, '#e86a5c'], kin: true, gap: 24, bow: 14 }); });
V.furrow = () => svgBox(840, 300, () => [0, .45, .9].map((p, i) => { const cx = 140 + i * 280, cy = 150; return C.cell(cx, cy, 120, 96, { pinch: p }) + C.nucleus(cx - 54, cy, 28, { nucleolus: false }) + C.nucleus(cx + 54, cy, 28, { nucleolus: false }); }).join(''));
V.plate = () => svgBox(840, 320, () => [.25, .6, 1].map((p, i) => { const x = 20 + i * 280, y = 40, w = 240 * 0 + 182 * p; return C.plantCell(x, y, 240, 240) + C.nucleus(x + 120, y + 60, 26, { nucleolus: false }) + C.nucleus(x + 120, y + 180, 26, { nucleolus: false }) + `<rect x="${x + 120 - w * .6}" y="${y + 115}" width="${w * 1.2}" height="10" rx="5" fill="#4f8a2e"/>`; }).join(''));
V.syncytium = () => svgBox(840, 360, () => { let s = C.cell(420, 180, 380, 140, { dots: 10 }); for (let i = 0; i < 9; i++) s += C.nucleus(140 + (i % 5) * 140 + (i > 4 ? 70 : 0), i > 4 ? 230 : 130, 34, { nucleolus: i % 2 === 0 }); return s; });
V.mitVsMei = () => svgBox(840, 600, () => { const kid = (x, y, k) => C.cell(x, y, 70 * k, 60 * k, { dots: 3 }) + C.nucleus(x, y, 30 * k, {}); let s = C.cell(420, 90, 90, 70, { dots: 4 }) + C.nucleus(420, 90, 34, { chromatin: true });
  s += D.arrow(380, 160, 210, 290, '#2f7d6a', 6) + D.arrow(460, 160, 630, 290, '#b2304c', 6) + kid(130, 400, 1) + kid(290, 400, 1) + D.text(210, 520, '2 × 2n', { fs: 40, b: true, head: true, c: '#2f7d6a' });
  [[520, 360], [660, 360], [520, 480], [660, 480]].forEach(([x, y]) => { s += kid(x, y, .8); }); s += D.text(590, 575, '4 × n', { fs: 40, b: true, head: true, c: '#b2304c' }); return s; });

