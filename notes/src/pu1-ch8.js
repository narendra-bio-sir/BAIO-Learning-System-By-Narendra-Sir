/* BAIO Notes slides — I PUC Chapter 8 · Cell: The Unit of Life (NCERT) */
window.NOTES = window.NOTES || {};
(function(){
const B = {
  hex(x, y, r, c){ let p = ''; for (let i = 0; i < 6; i++){ const a = Math.PI / 3 * i + Math.PI / 6; p += (i ? 'L' : 'M') + (x + r * Math.cos(a)).toFixed(1) + ',' + (y + r * Math.sin(a)).toFixed(1); } return D.path(p + 'Z', c, { sw: 1.4 }); },
  // phospholipid: head + two wavy tails (dir 1 = tails down)
  pl(x, y, r, dir, hc, len){ const t = len || r * 3; let s = '';
    [-r * .38, r * .38].forEach(o => s += `<path d="M${x + o},${y} q${-r * .35},${t * .25 * dir} 0,${t * .5 * dir} q${r * .35},${t * .25 * dir} 0,${t * .5 * dir}" stroke="#e8a913" stroke-width="${r * .32}" fill="none" stroke-linecap="round"/>`);
    return s + D.ball(x, y, r, hc || '#3b9be6'); },
  // horizontal bilayer strip (icon size)
  strip(x, y, w, r, gap){ let s = ''; r = r || 7; const n = Math.floor(w / (r * 2)); const t = r * 3;
    for (let i = 0; i < n; i++){ const cx = x + r + i * r * 2; s += this.pl(cx, y, r, 1); s += this.pl(cx, y + t * 2 + (gap || 2), r, -1); } return s; },
  capsule(x, y, w, h, c){ return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${w / 2}" fill="${D.lg(c, 1)}" stroke="${D.dk(c, .35)}" stroke-width="2"/>` + `<rect x="${x + w * .18}" y="${y + 10}" width="${w * .18}" height="${h - 20}" rx="${w * .09}" fill="#fff" opacity=".35"/>`; },
  water(x, y, s){ s = s || 1; return D.ball(x - 15 * s, y + 13 * s, 11 * s, '#f2f2f2') + D.ball(x + 15 * s, y + 13 * s, 11 * s, '#f2f2f2') + D.ball(x, y, 17 * s, '#e53935'); },
  plantCell(x, y, w, h, o){ o = o || {}; const r = 16, k = Math.min(w, h); let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${D.lg('#6fbf3a')}" stroke="#2f6a17" stroke-width="2.5"/>`;
    s += `<rect x="${x + k * .025}" y="${y + k * .025}" width="${w - k * .05}" height="${h - k * .05}" rx="${r * .85}" fill="none" stroke="#b6e38a" stroke-width="${k * .012}" opacity=".8"/>`;
    s += `<rect x="${x + w * .07}" y="${y + h * .07}" width="${w * .86}" height="${h * .86}" rx="${r * .7}" fill="${D.rg('#f3f9c4')}" stroke="#e0b42a" stroke-width="2.5"/>`;
    s += D.dots(Math.round(k / 9), x + w * .1, y + h * .1, w * .8, h * .8, Math.max(1.5, k * .008), '#8fc6e8', 9) + D.dots(Math.round(k / 14), x + w * .1, y + h * .1, w * .8, h * .8, Math.max(1.5, k * .007), '#f28cb1', 4);
    if (o.vac !== false) s += `<ellipse cx="${x + w * .56}" cy="${y + h * .5}" rx="${w * .25}" ry="${h * .3}" fill="${D.rg('#cdeafc')}" stroke="#6fa9d2" stroke-width="2"/><ellipse cx="${x + w * .5}" cy="${y + h * .36}" rx="${w * .09}" ry="${h * .05}" fill="#fff" opacity=".6"/>`;
    s += D.ball(x + w * .24, y + h * .36, k * .12, '#9b59d0') + D.ball(x + w * .26, y + h * .37, k * .045, '#5e2a8a');
    if (o.chl !== false) [[.25, .74, -15], [.82, .24, 20], [.84, .76, -25]].forEach(([a, b, rt]) => s += this.chloro(x + w * a, y + h * b, w * .15, h * .1, rt));
    if (o.chl !== false) s += this.mito(x + w * .2, y + h * .58, w * .1, h * .06, 30);
    return s; },
  animalCell(x, y, r, o){ o = o || {}; let s = `<path d="M${x - r},${y} C${x - r},${y - r * .9} ${x - r * .3},${y - r * 1.05} ${x + r * .2},${y - r * .95} C${x + r * .95},${y - r * .85} ${x + r * 1.05},${y - r * .1} ${x + r * .95},${y + r * .35} C${x + r * .85},${y + r * .95} ${x + r * .1},${y + r * 1.02} ${x - r * .45},${y + r * .88} C${x - r * .95},${y + r * .75} ${x - r},${y + r * .4} ${x - r},${y} Z" fill="${D.rg('#ffe3ec')}" stroke="#d9789a" stroke-width="3"/>`;
    s += D.ball(x - r * .1, y - r * .05, r * .3, '#9b59d0') + D.ball(x - r * .05, y - r * .08, r * .1, '#5e2a8a');
    if (o.org !== false){ s += this.mito(x + r * .55, y + r * .35, r * .4, r * .2, -25) + this.mito(x - r * .5, y + r * .5, r * .36, r * .18, 30);
      s += D.tube(`M${x + r * .3},${y - r * .55} q${r * .15},-${r * .1} ${r * .3},0 M${x + r * .28},${y - r * .45} q${r * .17},-${r * .1} ${r * .34},0`, '#f48fb1', r * .06);
      s += D.dots(9, x - r * .7, y - r * .7, r * 1.4, r * 1.4, r * .03, '#3b6fd1', 5); }
    return s; },
  bacterium(x, y, w, h, o){ o = o || {}; let s = '';
    const FL = o.flen || Math.min(w * .6, h * 1.1);
    if (o.fl !== false) s += `<path d="M${x + w / 2 - 4},${y} c${FL * .2},-${h * .25} ${FL * .33},${h * .25} ${FL * .5},0 s${FL * .33},${h * .25} ${FL * .5},0" stroke="#7a4a2a" stroke-width="${Math.max(3, h * .04)}" fill="none" stroke-linecap="round"/>`;
    if (o.pili !== false) for (let i = 0; i < 9; i++){ const a = Math.PI * 2 * i / 9 + .3, ex = Math.cos(a), ey = Math.sin(a); if (ex > .8) continue; s += D.line(x + ex * w / 2, y + ey * h / 2, x + ex * (w / 2 + h * .16), y + ey * (h / 2 + h * .16), '#b07ad0', h * .025); }
    s += `<rect x="${x - w / 2 - h * .06}" y="${y - h / 2 - h * .06}" width="${w + h * .12}" height="${h * 1.12}" rx="${h * .56}" fill="#f6e7a6" stroke="#d3b24a" stroke-width="2" opacity=".9"/>`;
    s += `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="${h / 2}" fill="${D.lg(o.wc || '#8fd06a')}" stroke="${D.dk(o.wc || '#8fd06a', .45)}" stroke-width="3"/>`;
    s += `<rect x="${x - w / 2 + h * .07}" y="${y - h / 2 + h * .07}" width="${w - h * .14}" height="${h * .86}" rx="${h * .43}" fill="${o.cc || '#eaf7d6'}" stroke="#e48aa5" stroke-width="2"/>`;
    s += `<path d="M${x - w * .18},${y} c10,-${h * .25} 30,${h * .25} 40,-${h * .05} s-25,${h * .22} -45,${h * .05} c-12,-${h * .1} 20,-${h * .3} 50,-${h * .15} s 10,${h * .2} -25,${h * .2}" stroke="#7b3fb8" stroke-width="2.4" fill="none"/>`;
    s += D.dots(14, x - w * .42, y - h * .32, w * .84, h * .64, Math.max(2, h * .028), '#3b6fd1', 3);
    if (o.plasmid !== false) s += `<ellipse cx="${x + w * .26}" cy="${y + h * .15}" rx="${h * .1}" ry="${h * .07}" fill="none" stroke="#d6175f" stroke-width="2.4"/>`;
    if (o.meso) s += `<path d="M${x - w * .3},${y - h * .43} c-6,${h * .12} 10,${h * .16} -4,${h * .26} c-12,${h * .08} 14,${h * .14} 22,${h * .02} c8,-${h * .1} -10,-${h * .14} 2,-${h * .26} c6,-${h * .06} 4,-${h * .02} 6,-${h * .02}" fill="#f9c6d6" stroke="#e48aa5" stroke-width="2.4"/>`;
    return s; },
  // chromosome: 2 sister chromatids; frac = centromere position from top (0..1)
  chrom(x, y, h, c, frac, w){ w = w || h * .16; const top = y - h / 2, cen = top + h * frac, bot = y + h / 2; let s = '';
    [-1, 1].forEach(sd => { const cx = x + sd * w * .52 - w / 2;
      if (cen - top > 6) s += `<rect x="${cx}" y="${top}" width="${w}" height="${cen - top}" rx="${w / 2}" fill="${D.lg(c, 1)}" stroke="${D.dk(c, .35)}" stroke-width="1.8"/>`;
      if (bot - cen > 6) s += `<rect x="${cx}" y="${cen}" width="${w}" height="${bot - cen}" rx="${w / 2}" fill="${D.lg(c, 1)}" stroke="${D.dk(c, .35)}" stroke-width="1.8"/>`; });
    return s + D.ball(x, cen, w * .42, '#f2c230'); },
  golgi(x, y, w, n, c){ let s = ''; c = c || '#f48fb1';
    for (let i = 0; i < n; i++){ const yy = y + i * w * .13, ww = w * (1 - Math.abs(i - (n - 1) / 2) * .12);
      s += D.tube(`M${x - ww / 2},${yy} Q${x},${yy - w * .2} ${x + ww / 2},${yy}`, c, w * .095); }
    return s; },
  lyso(x, y, r){ let s = D.ball(x, y, r, '#f6b26b') + `<circle cx="${x}" cy="${y}" r="${r * .82}" fill="#fff4e0" opacity=".75"/>`; const R = D.rnd(4);
    for (let i = 0; i < 12; i++){ const a = R() * 6.28, d = R() * r * .6; s += D.ball(x + Math.cos(a) * d, y + Math.sin(a) * d, r * .085, ['#e53935', '#8e44ad', '#1f6fe0'][i % 3]); }
    return s; },
  er(x, y, w, rough){ let s = ''; for (let i = 0; i < 3; i++){ const yy = y + i * w * .22;
      s += D.tube(`M${x},${yy} c${w * .15},-${w * .12} ${w * .3},${w * .12} ${w * .5},0 s${w * .35},${w * .12} ${w * .5},0`, '#f48fb1', w * .12);
      if (rough) for (let k = 0; k < 7; k++) s += D.ball(x + w * .07 + k * w * .14, yy - w * .07 + (k % 2) * w * .02, w * .025, '#2f5fd0'); }
    return s; },
  mito(x, y, w, h, rot){ let s = `<g transform="rotate(${rot || 0} ${x} ${y})"><ellipse cx="${x}" cy="${y}" rx="${w / 2}" ry="${h / 2}" fill="${D.rg('#f39c3d')}" stroke="#a85512" stroke-width="${Math.max(1, h * .04)}"/><ellipse cx="${x}" cy="${y + h * .04}" rx="${w / 2 - h * .14}" ry="${h / 2 - h * .14}" fill="${D.rg('#ffd79a')}"/>`;
    for (let i = -2; i <= 2; i++) s += D.tube(`M${x + i * w * .16},${y - h * .3 + (i % 2 ? h * .25 : 0)} l0,${h * .32}`, '#f08a24', Math.max(1.5, h * .1));
    return s + '</g>'; },
  chloro(x, y, w, h, rot){ let s = `<g transform="rotate(${rot || 0} ${x} ${y})"><ellipse cx="${x}" cy="${y}" rx="${w / 2}" ry="${h / 2}" fill="${D.rg('#4caf3e')}" stroke="#215a16" stroke-width="${Math.max(1, h * .035)}"/><ellipse cx="${x}" cy="${y}" rx="${w / 2 - h * .08}" ry="${h / 2 - h * .08}" fill="${D.rg('#a8dc84')}"/>`;
    for (let i = -1; i <= 1; i++) for (let k = 2; k >= 0; k--) s += D.coin(x + i * w * .26, y - h * .12 + k * h * .12, w * .1, h * .045, h * .07, '#2e8a24');
    return s + '</g>'; },
  tangle(cx, cy, r, n, seed, c, sw){ const R = D.rnd(seed); const P = []; for (let i = 0; i < n; i++){ const a = R() * 6.283, d = Math.sqrt(R()) * r; P.push([cx + Math.cos(a) * d, cy + Math.sin(a) * d]); }
    let d = `M${P[0][0].toFixed(1)},${P[0][1].toFixed(1)}`; for (let i = 1; i < P.length - 1; i++){ const mx = (P[i][0] + P[i + 1][0]) / 2, my = (P[i][1] + P[i + 1][1]) / 2; d += ` Q${P[i][0].toFixed(1)},${P[i][1].toFixed(1)} ${mx.toFixed(1)},${my.toFixed(1)}`; }
    return D.tube(d, c || '#7a3fc0', (sw || 3) * 1.8); },
  arrowR(x, y, w, c){ return D.arrow(x, y, x + w, y, c || '#2c9a3a', 4); },
};
const L = D.label.bind(D), T = D.text.bind(D);

NOTES['pu1-ch8'] = { title: 'Cell: The Unit of Life', ch: 'I PUC · Ch 8', tag: ['Cell: The', 'Unit of Life'], page: 'pu1-ch8.html', color: '#8f63d8',
slides: [

/* ---------- 1 · Cell & cell theory ---------- */
{ t: 'What is a Cell? –', s: 'Discovery & Cell Theory',
  d: 'The cell is the [[fundamental structural and functional unit]] of all living organisms. Anything less than a {{complete cell}} cannot ensure independent living.',
  rows: [
    { f: 1.45, cols: [
      { w: 1.3, th: 'pink', h: 'Cells under the Microscope', sub: '(as seen in the lab)', svg: () => D.svg(600, 400, () => {
        let s = ''; const R = D.rnd(3);
        for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++){ const x = 24 + c * 96 + (r % 2) * 22 - 10, y = 52 + r * 96;
          s += `<rect x="${x}" y="${y}" width="92" height="90" rx="6" fill="#fbf3cf" stroke="#a5852e" stroke-width="5"/>`;
          s += D.ball(x + 30 + R() * 34, y + 30 + R() * 30, 11, '#9b59d0'); }
        s += `<rect x="4" y="40" width="330" height="310" fill="none"/>`;
        s += B.animalCell(470, 200, 100);
        s += T(160, 385, 'Onion peel cells', { fs: 22, c: '#13286e', b: 1, head: 1 }) + T(470, 385, 'Human cheek cell', { fs: 22, c: '#13286e', b: 1, head: 1 });
        s += L(110, 22, 'Cell wall', 132, 50, { fs: 20 }) + L(270, 22, 'Nucleus', 236, 70, { fs: 20 });
        s += L(560, 60, 'Cell\nmembrane', 548, 128, { fs: 20 }) + L(380, 82, 'Nucleus', 440, 180, { fs: 20 }) + L(560, 320, 'Cytoplasm', 520, 260, { fs: 20 });
        return s; }) },
      { w: 1, th: 'lav', h: 'Milestones', list: [
        { t: 'Anton von Leeuwenhoek', d: 'First saw and described a {{live cell}}.' },
        { t: 'Robert Brown', d: 'Later discovered the [[nucleus]].' },
        { t: 'Schleiden (1838)', d: 'German botanist: all plants are made of cells.' },
        { t: 'Schwann (1839)', d: 'British zoologist: animal cells have a thin outer layer – the plasma membrane; cell wall is unique to plants.' }
      ] }
    ] },
    { f: 1, cols: [
      { th: 'grn', h: 'Cell Theory', cards: [
        { t: 'Schleiden & Schwann', c: '#2c9a3a', d: 'Together formulated the cell theory – but did not explain how new cells form.', ic: () => D.svg(200, 90, () => B.plantCell(20, 8, 76, 74, { chl: false }) + B.animalCell(150, 46, 38, { org: false })) },
        { t: 'Rudolf Virchow (1855)', c: '#d6175f', d: '[[Omnis cellula-e cellula]] – cells divide and new cells arise from pre-existing cells.', ic: () => D.svg(200, 90, () => B.animalCell(42, 46, 34, { org: false }) + D.arrow(84, 46, 112, 46, '#2c9a3a', 4) + B.animalCell(146, 26, 20, { org: false }) + B.animalCell(150, 70, 20, { org: false })) },
        { t: 'Modern Cell Theory', c: '#1d48cf', d: '(i) All living organisms are made of {{cells and products of cells}}. (ii) All cells arise from {{pre-existing cells}}.', ic: () => D.svg(200, 90, () => D.ball(60, 46, 30, '#8bc8f5') + D.ball(60, 46, 10, '#9b59d0') + D.ball(130, 34, 20, '#f6a5c0') + D.ball(130, 34, 7, '#9b59d0') + D.ball(160, 70, 16, '#a5d98a') + D.ball(160, 70, 6, '#9b59d0')) }
      ] }
    ] }
  ] },

/* ---------- 2 · Prokaryotic vs eukaryotic ---------- */
{ t: 'An Overview of Cell –', s: 'Prokaryotic vs Eukaryotic',
  d: 'Cells without a membrane-bound nucleus are [[prokaryotic]]. Cells with a {{membrane-bound nucleus}} and membrane-bound organelles are eukaryotic.',
  rows: [
    { f: 1.05, cols: [
      { th: 'grn', h: 'Prokaryotic Cell', sub: '(e.g. bacterium)', svg: () => D.svg(460, 270, () => B.bacterium(190, 140, 250, 120) +
          L(70, 30, 'Cell wall', 90, 92, { fs: 20 }) + L(250, 34, 'Nucleoid\n(naked DNA)', 200, 128, { fs: 20 }) + L(110, 248, 'Ribosomes', 150, 170, { fs: 20 }) + L(380, 238, 'Flagellum', 390, 158, { fs: 20 })) },
      { th: 'blu', h: 'Eukaryotic Cell', sub: '(e.g. animal cell)', svg: () => D.svg(460, 270, () => B.animalCell(230, 140, 110) +
          L(70, 40, 'Nucleus', 210, 130, { fs: 20 }) + L(400, 44, 'Cell\nmembrane', 330, 70, { fs: 20 }) + L(400, 240, 'Mitochondrion', 300, 184, { fs: 20 }) + L(70, 240, 'Cytoplasm', 150, 200, { fs: 20 })) }
    ] },
    { f: 1.15, cols: [
      { th: 'yel', h: 'Key Differences', table: { h: ['Feature', 'Prokaryotic', 'Eukaryotic'], r: [
        ['Nucleus', 'No nuclear membrane – [[nucleoid]]', 'True nucleus with {{nuclear envelope}}'],
        ['Organelles', 'No membrane-bound organelles', 'ER, Golgi, mitochondria, plastids…'],
        ['Ribosomes', '[[70S]]', '{{80S}} (70S in mitochondria & plastids)'],
        ['Size', 'Smaller; multiply rapidly', 'Generally larger'],
        ['Examples', 'Bacteria, blue-green algae, mycoplasma, PPLO', 'Protists, fungi, plants, animals']
      ] } }
    ] }
  ] },

/* ---------- 3 · Prokaryotic cell ---------- */
{ t: 'Prokaryotic Cell –', s: 'Structure of a Bacterium',
  d: 'Prokaryotes have a [[cell envelope]] and no membrane-bound organelles. Genetic material is naked and lies in the {{nucleoid}}.',
  rows: [
    { f: 1.45, cols: [
      { w: 1.35, th: 'pink', h: 'Structure of a Bacterial Cell', sub: '(diagrammatic view)', svg: () => D.svg(600, 400, () => B.bacterium(270, 205, 360, 180, { meso: 1, flen: 130 }) +
          L(80, 34, 'Capsule\n(glycocalyx)', 112, 108, { fs: 19 }) + L(250, 30, 'Cell wall', 230, 112, { fs: 19 }) + L(430, 36, 'Plasma\nmembrane', 400, 128, { fs: 19 }) +
          L(70, 230, 'Mesosome', 150, 168, { fs: 19 }) + L(140, 360, 'Nucleoid\n(genomic DNA)', 230, 214, { fs: 19 }) + L(320, 368, 'Ribosomes', 300, 262, { fs: 19 }) +
          L(500, 330, 'Plasmid', 364, 236, { fs: 19 }) + L(530, 130, 'Flagellum', 500, 192, { fs: 19 }) + L(560, 260, 'Pili', 444, 268, { fs: 19 })) },
      { w: 1, th: 'lav', h: 'Key Features', list: [
        { t: 'Genomic DNA', d: 'Single, [[circular]] chromosome; not enveloped by a nuclear membrane.' },
        { t: 'Plasmids', d: 'Small circular DNA outside genomic DNA; give traits like {{antibiotic resistance}}.' },
        { t: 'Mesosome', d: 'Infolding of plasma membrane – helps in cell wall formation, DNA replication, respiration & secretion.' },
        { t: 'Chromatophores', d: 'Membranous extensions in cyanobacteria that contain pigments.' }
      ] }
    ] },
    { f: 1, cols: [
      { w: 1.3, th: 'grn', h: 'Cell Envelope – 3 Layers', list: [
        { t: 'Glycocalyx (outermost)', d: 'Loose sheath = [[slime layer]]; thick & tough = {{capsule}}.' },
        { t: 'Cell wall', d: 'Determines the shape and prevents the cell from bursting.' },
        { t: 'Plasma membrane', d: 'Selectively permeable; similar in structure to eukaryotes.' }
      ] },
      { w: 1, th: 'yel', h: 'Gram Staining', split: [
        { th: 'lav', h: 'Gram +ve', items: [{ t: 'Take up the stain', ic: () => D.svg(120, 80, () => B.bacterium(60, 40, 90, 44, { fl: false, pili: false, plasmid: false, wc: '#8e44ad', cc: '#e6d4f5' })) }] },
        { th: 'pink', h: 'Gram –ve', items: [{ t: 'Do not take it up', ic: () => D.svg(120, 80, () => B.bacterium(60, 40, 90, 44, { fl: false, pili: false, plasmid: false, wc: '#f06292', cc: '#fde1ea' })) }] }
      ] }
    ] }
  ] },

/* ---------- 4 · Prokaryote appendages, ribosomes, inclusions ---------- */
{ t: 'Prokaryotic Cell –', s: 'Appendages, Ribosomes & Inclusions',
  d: 'Bacteria bear [[surface structures]] for movement and attachment, {{70S ribosomes}} for protein synthesis and stored reserve material in the cytoplasm.',
  rows: [
    { f: 1.4, cols: [
      { w: 1.2, th: 'pink', h: 'Bacterial Flagellum', sub: '(3 parts)', svg: () => D.svg(560, 400, () => {
        let s = `<rect x="20" y="300" width="520" height="34" fill="${D.lg('#8fd06a')}" stroke="#3e7e22" stroke-width="2.5"/><rect x="20" y="334" width="520" height="18" fill="#f9c6d6" stroke="#e48aa5" stroke-width="2"/><rect x="20" y="352" width="520" height="44" fill="#eaf7d6"/>`;
        s += `<rect x="262" y="290" width="16" height="78" fill="#7a4a2a"/>` + [296, 320, 344, 362].map(y => `<rect x="244" y="${y}" width="52" height="9" rx="3" fill="${D.lg('#c98a4b')}" stroke="#7a4a2a"/>`).join('');
        s += D.tube('M270,292 q-4,-30 26,-44', '#7a4a2a', 14) + D.tube('M296,248 c40,-30 10,-70 50,-96 s20,-70 70,-90 s40,-30 70,-40', '#b9824e', 10);
        s += L(470, 140, 'Filament\n(longest part)', 420, 70, { fs: 20 }) + L(150, 220, 'Hook', 280, 262, { fs: 20 }) + L(130, 300, 'Basal body', 244, 334, { fs: 20 }) + L(470, 270, 'Cell wall', 440, 314, { fs: 20 }) + L(460, 380, 'Plasma membrane', 420, 344, { fs: 20 });
        return s; }) },
      { w: 1, th: 'lav', h: 'Surface Structures', icw: 90, list: [
        { t: 'Flagella', d: 'Thin filamentous extensions for [[motility]]; filament, hook & basal body.', ic: () => D.svg(100, 100, () => B.bacterium(40, 50, 54, 30, { pili: false, plasmid: false, flen: 46 })) },
        { t: 'Pili', d: 'Elongated tubular structures made of a {{special protein}}.', ic: () => D.svg(100, 100, () => B.bacterium(50, 50, 54, 32, { fl: false, plasmid: false })) },
        { t: 'Fimbriae', d: 'Small bristle-like fibres; help attach to rocks in streams & to host tissues.', ic: () => D.svg(100, 100, () => { let s = ''; for (let i = 0; i < 16; i++){ const a = i / 16 * 6.28; s += D.line(50 + Math.cos(a) * 34, 50 + Math.sin(a) * 22, 50 + Math.cos(a) * 44, 50 + Math.sin(a) * 30, '#b07ad0', 2); } return s + B.bacterium(50, 50, 66, 40, { fl: false, pili: false, plasmid: false }); }) }
      ] }
    ] },
    { f: 1, cols: [
      { th: 'yel', h: 'Ribosomes & Polysome', svg: () => D.svg(480, 200, () => {
        let s = `<ellipse cx="80" cy="110" rx="56" ry="40" fill="${D.rg('#5c8fe0')}" stroke="#2c4f9a" stroke-width="2"/><ellipse cx="80" cy="64" rx="38" ry="22" fill="${D.rg('#9cc3f5')}" stroke="#2c4f9a" stroke-width="2"/>`;
        s += T(80, 118, '50S', { fs: 22, c: '#fff', b: 1, head: 1 }) + T(80, 70, '30S', { fs: 18, c: '#13286e', b: 1, head: 1 }) + T(80, 182, '70S ribosome', { fs: 22, b: 1, head: 1, c: '#13286e' });
        s += `<path d="M190,130 C240,110 300,150 350,128 S440,110 470,130" stroke="#d6175f" stroke-width="5" fill="none"/>`;
        [215, 275, 335, 400].forEach((x, i) => { const y = 124 + (i % 2 ? 6 : -2); s += `<ellipse cx="${x}" cy="${y - 10}" rx="24" ry="17" fill="${D.rg('#5c8fe0')}" stroke="#2c4f9a" stroke-width="1.5"/><ellipse cx="${x}" cy="${y - 30}" rx="16" ry="10" fill="${D.rg('#9cc3f5')}" stroke="#2c4f9a" stroke-width="1.5"/>`; });
        s += T(330, 182, 'Polysome = many ribosomes on one mRNA', { fs: 19, c: '#13286e' }) + T(470, 156, 'mRNA', { fs: 18, c: '#d6175f', a: 'end' }) + T(330, 40, 'translate mRNA into proteins', { fs: 19, c: '#444' });
        return s; }) },
      { th: 'blu', h: 'Inclusion Bodies', list: [
        { t: 'Reserve material', d: 'Lie free in cytoplasm; [[not bounded]] by any membrane.' },
        { t: 'Examples', d: 'Phosphate granules, cyanophycean granules & glycogen granules.' },
        { t: 'Gas vacuoles', d: 'In blue-green, purple & green photosynthetic bacteria.' }
      ] }
    ] }
  ] },

/* ---------- 5 · Cell membrane ---------- */
{ t: 'Cell Membrane –', s: 'Structure & Transport',
  d: 'The cell membrane (plasma membrane) is a [[thin, flexible]] and [[living]] membrane that surrounds the cytoplasm and is {{selectively permeable}}.',
  rows: [
    { f: 1.5, cols: [
      { w: 1.45, th: 'pink', h: 'Structure of Cell Membrane', sub: '(Fluid Mosaic Model)', svg: () => D.svg(600, 420, () => {
        let s = ''; const r = 14;
        // receding top surface
        for (let k = 3; k >= 1; k--) for (let i = 0; i < 18; i++){ const x = 58 + k * 16 + i * 28.5, y = 178 - k * 15; if (x > 556) continue; s += D.ball(x, y, r * (1 - k * .06), '#3b9be6'); }
        // front leaflets
        for (let i = 0; i < 18; i++){ const x = 50 + i * 28.5; s += B.pl(x, 180, r, 1, 0, 60); s += B.pl(x, 312, r, -1, 0, 60); }
        // cholesterol
        s += `<path d="M118,212 q-6,14 0,28 q6,14 0,28" stroke="#f08a12" stroke-width="10" fill="none" stroke-linecap="round"/>` + D.ball(118, 206, 8, '#f6a019') + D.ball(118, 276, 8, '#f6a019');
        // integral proteins
        s += B.capsule(255, 120, 76, 220, '#a865d8') + B.capsule(470, 150, 50, 182, '#a865d8');
        // peripheral proteins
        s += D.path('M370,312 c-12,-28 30,-40 48,-22 c22,-4 30,30 8,40 c-14,18 -52,10 -56,-18 Z', '#5cc23f') + D.path('M400,150 c-14,-34 24,-50 44,-30 c24,-8 30,26 6,36 c-12,10 -44,12 -50,-6 Z', '#5cc23f');
        // glycoprotein + carbohydrate chain
        s += D.ball(170, 160, 22, '#b06fd8');
        [[168, 132], [156, 112], [166, 92], [154, 72], [166, 52]].forEach(([x, y]) => s += B.hex(x, y, 10, '#f06aa8'));
        s += B.hex(184, 104, 9, '#f06aa8') + B.hex(198, 90, 8, '#f06aa8');
        // bracket
        s += `<path d="M566,168 h10 v152 h-10 M576,244 h10" stroke="#222" stroke-width="2.5" fill="none"/>`;
        s += L(92, 30, 'Carbohydrate chain\n(for cell recognition)', 152, 66, { fs: 20 });
        s += L(330, 44, 'Protein\n(integral protein)', 296, 112, { fs: 20 });
        s += L(536, 82, 'Phospholipid\nbilayer', 580, 168, { fs: 20 });
        s += L(96, 385, 'Cholesterol\n(maintains fluidity)', 118, 286, { fs: 20 });
        s += L(470, 388, 'Peripheral protein\n(on inner surface)', 408, 346, { fs: 20 });
        return s; }) },
      { w: 1, th: 'lav', h: 'Key Features', icw: 96, list: [
        { t: 'Fluid mosaic model', d: 'Given by Singer & Nicolson (1972). Quasi-fluid lipid lets proteins move sideways.', ic: () => D.svg(120, 80, () => B.strip(4, 18, 112, 7)) },
        { t: 'Lipids + proteins', d: 'Phospholipids in a bilayer; in human RBC: 52% protein, 40% lipids.', ic: () => D.svg(120, 100, () => B.strip(4, 26, 112, 7) + B.capsule(48, 6, 26, 88, '#a865d8')) },
        { t: 'Selectively permeable', d: 'Allows only certain substances to enter and leave the cell.', ic: () => D.svg(120, 120, () => B.strip(4, 44, 112, 7) + D.ball(30, 14, 7, '#e91e63') + D.ball(52, 24, 6, '#5ab2f0') + D.ball(84, 12, 6, '#e91e63') + D.arrow(60, 30, 60, 104, '#2c9a3a', 4) + D.ball(84, 108, 6, '#5ab2f0')) }
      ] }
    ] },
    { f: 1, cols: [
      { th: 'grn', h: 'Movement Across the Membrane', split: [
        { th: 'grn', h: 'Passive – ((no energy needed))', items: [
          { t: 'Diffusion', s: 'neutral solutes, high → low', ic: () => D.svg(140, 110, () => B.strip(8, 34, 124, 6) + D.dots(7, 14, 4, 112, 22, 6, '#43a0e8', 9) + D.ball(70, 100, 6, '#43a0e8') + D.arrow(40, 16, 40, 94, '#2c9a3a', 3.5)) },
          { t: 'Osmosis', s: 'movement of water', ic: () => D.svg(140, 110, () => B.water(70, 44, 1.5) + D.arrow(70, 78, 70, 104, '#1f6fe0', 4)) }
        ] },
        { th: 'pink', h: 'Active – [[uses energy (ATP)]]', items: [
          { t: 'Against gradient', s: 'low → high concentration', ic: () => D.svg(140, 110, () => B.strip(8, 34, 124, 6) + D.ball(40, 100, 6, '#f39c3d') + D.ball(26, 14, 6, '#f39c3d') + D.ball(46, 10, 6, '#f39c3d') + D.ball(66, 18, 6, '#f39c3d') + D.arrow(100, 100, 100, 18, '#d6175f', 3.5)) },
          { t: 'Na⁺/K⁺ pump', s: 'e.g. ions pumped by ATP', ic: () => D.svg(140, 110, () => B.strip(8, 34, 124, 6) + B.capsule(56, 20, 30, 80, '#a865d8') + T(28, 22, 'Na⁺', { fs: 18, c: '#d6175f' }) + T(112, 100, 'K⁺', { fs: 18, c: '#1d48cf' }) + T(110, 22, 'ATP', { fs: 16, c: '#b5651d', b: 1 })) }
        ] }
      ] }
    ] }
  ] },
/* ---------- 6 · Cell wall ---------- */
{ t: 'Cell Wall –', s: 'Structure & Functions',
  d: 'A [[non-living rigid]] structure forming the outer covering of the plasma membrane of {{fungi and plants}}.',
  rows: [
    { f: 1.45, cols: [
      { w: 1.3, th: 'pink', h: 'Two Neighbouring Plant Cells', sub: '(diagrammatic view)', svg: () => D.svg(600, 400, () => {
        let s = `<rect x="20" y="40" width="560" height="320" rx="18" fill="#cfe8b0" stroke="#7a5a1e" stroke-width="5"/>`;
        [[34, 286], [314, 272]].forEach(([x, w]) => { s += `<rect x="${x}" y="54" width="${w - 28}" height="292" rx="12" fill="${D.lg('#8cc65a')}" stroke="#4e8a2a" stroke-width="2"/>`;
          s += `<rect x="${x + 16}" y="70" width="${w - 60}" height="260" rx="10" fill="#fbf7dc" stroke="#e48aa5" stroke-width="3"/>`;
          s += `<ellipse cx="${x + w * .58}" cy="200" rx="${w * .22}" ry="80" fill="${D.rg('#bfe3fb')}" stroke="#7fb6dc" stroke-width="1.6"/>` + D.ball(x + w * .26, 150, 26, '#9b59d0'); });
        s += `<line x1="300" y1="40" x2="300" y2="360" stroke="#7a5a1e" stroke-width="6"/>`;
        [130, 210, 290].forEach(y => s += `<rect x="252" y="${y - 6}" width="100" height="12" rx="6" fill="#fbf7dc" stroke="#e48aa5" stroke-width="2"/>`);
        s += L(300, 18, 'Middle lamella', 300, 44, { fs: 20 }) + L(110, 386, 'Primary wall', 100, 352, { fs: 20 }) + L(300, 386, 'Secondary wall', 284, 330, { fs: 20 });
        s += L(500, 386, 'Plasma membrane', 520, 330, { fs: 20 }) + L(470, 22, 'Plasmodesmata', 344, 124, { fs: 20 }) + L(90, 18, 'Nucleus', 100, 128, { fs: 20 });
        return s; }) },
      { w: 1, th: 'lav', h: 'Composition', list: [
        { t: 'In algae', d: '[[Cellulose]], galactans, mannans and minerals like calcium carbonate.' },
        { t: 'In plants', d: '{{Cellulose}}, hemicellulose, pectins and proteins.' },
        { t: 'Primary wall', d: 'Young wall; capable of growth; diminishes as the cell matures.' },
        { t: 'Secondary wall', d: 'Formed on the inner (towards membrane) side of the cell.' }
      ] }
    ] },
    { f: 1, cols: [
      { w: 1.1, th: 'grn', h: 'Functions of Cell Wall', list: [
        { d: 'Gives [[shape]] to the cell.' },
        { d: 'Protects from {{mechanical damage}} and infection.' },
        { d: 'Helps in cell-to-cell interaction.' },
        { d: 'Barrier to undesirable macromolecules.' }
      ] },
      { w: 1, th: 'yel', h: 'Joining the Cells', cards: [
        { t: 'Middle lamella', c: '#b5651d', d: 'Layer of [[calcium pectate]] that holds (glues) neighbouring cells together.' },
        { t: 'Plasmodesmata', c: '#1d48cf', d: 'Strands that cross the wall & middle lamella, {{connecting the cytoplasm}} of neighbouring cells.' }
      ] }
    ] }
  ] },

/* ---------- 7 · Endomembrane system & ER ---------- */
{ t: 'Endoplasmic Reticulum –', s: 'The Endomembrane System',
  d: 'ER, Golgi complex, lysosomes and vacuoles work in a coordinated way – the [[endomembrane system]]. Mitochondria, chloroplasts & peroxisomes are {{not}} part of it.',
  rows: [
    { f: 1.45, cols: [
      { w: 1.3, th: 'pink', h: 'Rough & Smooth ER', sub: '(diagrammatic view)', svg: () => D.svg(600, 400, () => {
        let s = D.ball(30, 200, 120, '#9b59d0') + `<circle cx="30" cy="200" r="126" fill="none" stroke="#5e2a8a" stroke-width="3" stroke-dasharray="14 6"/>`;
        [160, 196, 232].forEach((r, k) => { const a0 = -1.05, a1 = 1.05, P = a => [30 + r * Math.cos(a), 200 + r * Math.sin(a)];
          const d = `M${P(a0).join(',')} A${r},${r} 0 0 1 ${P(a1).join(',')}`; s += D.tube(d, '#f48fb1', 22);
          for (let a = a0; a <= a1; a += .11){ [r - 12, r + 12].forEach(rr => s += D.ball(30 + rr * Math.cos(a), 200 + rr * Math.sin(a), 4.2, '#1f4fbf')); } });
        ['M360,90 c40,-30 60,30 100,10 s50,-40 100,-10', 'M350,170 c30,30 70,-20 110,10 s60,30 110,-10', 'M370,250 c40,-20 50,40 100,20 s40,-30 90,0', 'M360,320 c40,20 80,-30 120,0 s40,20 80,0', 'M420,100 c10,40 -20,50 0,80', 'M500,180 c-10,30 20,40 0,80'].forEach(d => s += D.tube(d, '#f8a8c6', 20));
        s += L(70, 370, 'Nucleus', 40, 270, { fs: 20 }) + L(240, 30, 'Rough ER\n(ribosomes on surface)', 216, 84, { fs: 20 }) + L(250, 380, 'Ribosomes', 200, 316, { fs: 20 }) + L(500, 30, 'Smooth ER\n(no ribosomes)', 470, 94, { fs: 20 }) + L(500, 380, 'Tubular network', 470, 322, { fs: 20 });
        return s; }) },
      { w: 1, th: 'lav', h: 'Key Features', list: [
        { t: 'Network of tubules', d: 'Divides the space into [[luminal]] (inside ER) and extra-luminal (cytoplasm).' },
        { t: 'Rough ER (RER)', d: 'Bears ribosomes; active in {{protein synthesis}} & secretion; continuous with outer nuclear membrane.' },
        { t: 'Smooth ER (SER)', d: 'Major site of [[lipid synthesis]]; in animal cells makes steroidal hormones.' }
      ] }
    ] },
    { f: 1, cols: [
      { th: 'grn', h: 'Members of the Endomembrane System', svg: () => D.svg(1000, 220, () => {
        let s = ''; const xs = [100, 300, 500, 700];
        s += B.er(40, 60, 120, 1) + B.golgi(300, 90, 130, 4) + B.lyso(500, 76, 40) + `<path d="M650,56 c20,-40 90,-30 100,10 c20,40 -30,70 -60,50 c-40,10 -60,-30 -40,-60 Z" fill="${D.rg('#9fd3f5')}" stroke="#4f95c5" stroke-width="2.5"/>`;
        ['Endoplasmic\nreticulum', 'Golgi\ncomplex', 'Lysosomes', 'Vacuoles'].forEach((t, i) => s += T(xs[i], 160, t, { fs: 24, c: '#13286e', b: 1, head: 1 }));
        [200, 400, 600].forEach(x => s += D.arrow(x - 26, 80, x + 26, 80, '#2c9a3a', 5));
        s += `<rect x="810" y="22" width="176" height="176" rx="16" fill="#fff0f3" stroke="#e57373" stroke-width="2.5" stroke-dasharray="8 6"/>` + T(898, 56, 'NOT included', { fs: 22, c: '#d6175f', b: 1, head: 1 }) + T(898, 100, 'Mitochondria\nChloroplasts\nPeroxisomes', { fs: 23, c: '#333' });
        return s; }) }
    ] }
  ] },

/* ---------- 8 · Golgi apparatus ---------- */
{ t: 'Golgi Apparatus –', s: 'Structure & Function',
  d: 'Densely stained reticular structures near the nucleus, first observed by [[Camillo Golgi (1898)]]. Made of flat, disc-shaped sacs called {{cisternae}}.',
  rows: [
    { f: 1.5, cols: [
      { w: 1.3, th: 'pink', h: 'Structure of Golgi Complex', sub: '(diagrammatic view)', svg: () => D.svg(600, 400, () => {
        let s = B.golgi(300, 140, 330, 6, '#f48fb1');
        [[110, 110, 15], [495, 110, 15], [520, 60, 18], [440, 40, 20], [100, 60, 14]].forEach(([x, y, r]) => s += D.ball(x, y, r, '#f48fb1'));
        [[230, 340], [300, 360], [370, 345]].forEach(([x, y]) => s += D.ball(x, y, 14, '#f8bbd0'));
        s += B.er(210, 380, 180, 1);
        s += D.arrow(300, 330, 300, 286, '#2c9a3a', 4) + D.arrow(470, 56, 520, 20, '#d6175f', 4);
        s += L(90, 220, 'Cisternae', 170, 186, { fs: 20 }) + L(500, 240, 'cis face\n(forming face)', 430, 268, { fs: 20 }) + L(110, 300, 'Vesicles from ER', 222, 336, { fs: 20 });
        s += L(330, 26, 'trans face\n(maturing face)', 360, 98, { fs: 20 }) + L(200, 40, 'Secretory\nvesicles', 116, 100, { fs: 20 });
        return s; }) },
      { w: 1, th: 'lav', h: 'Key Features', list: [
        { t: 'Cisternae', d: 'Stacked parallel; [[0.5 µm to 1.0 µm]] in diameter.' },
        { t: 'Two faces', d: '{{cis}} (forming) and {{trans}} (maturing) – different but interconnected.' },
        { t: 'Works with ER', d: 'Materials from ER fuse with the cis face and move towards the trans face.' }
      ] }
    ] },
    { f: 1, cols: [
      { th: 'grn', h: 'Functions of Golgi Apparatus', cards: [
        { t: 'Packaging', c: '#e91e63', d: 'Packs materials for [[intracellular targets]] or secretion outside the cell.', ic: () => D.svg(160, 80, () => B.golgi(60, 46, 90, 4) + D.ball(126, 26, 12, '#f48fb1') + D.arrow(140, 18, 156, 6, '#d6175f', 3)) },
        { t: 'Modification', c: '#1f6fe0', d: 'Proteins made by ribosomes on ER are {{modified}} in the cisternae.', ic: () => D.svg(160, 80, () => B.er(16, 32, 80, 1) + D.arrow(100, 42, 132, 42, '#2c9a3a', 4)) },
        { t: 'Glycoproteins & glycolipids', c: '#2c9a3a', d: 'Golgi is the important site of their [[formation]].', ic: () => D.svg(160, 80, () => D.ball(50, 46, 18, '#b06fd8') + B.hex(76, 30, 9, '#f06aa8') + B.hex(94, 20, 9, '#f06aa8') + B.hex(112, 30, 9, '#f06aa8') + B.hex(130, 20, 9, '#f06aa8')) }
      ] }
    ] }
  ] },

/* ---------- 9 · Lysosomes & vacuoles ---------- */
{ t: 'Lysosomes & Vacuoles', s: 'Structure & Function',
  d: 'Both are [[single membrane-bound]] parts of the endomembrane system – lysosomes {{digest}}, vacuoles {{store}}.',
  rows: [
    { f: 1.2, cols: [
      { th: 'pink', h: 'Lysosome', sub: '(suicidal bag)', svg: () => D.svg(460, 300, () => B.lyso(230, 150, 105) +
          L(70, 40, 'Single\nmembrane', 150, 84, { fs: 20 }) + L(400, 50, 'Hydrolytic\nenzymes', 260, 120, { fs: 20 }) + L(390, 260, 'Acidic pH\ninside', 300, 200, { fs: 20 })) },
      { th: 'blu', h: 'Vacuole in a Plant Cell', svg: () => D.svg(460, 300, () => B.plantCell(70, 30, 320, 240) +
          L(400, 34, 'Tonoplast', 330, 100, { fs: 20 }) + L(250, 290, 'Cell sap', 250, 200, { fs: 20 }) + L(50, 250, 'Cytoplasm', 100, 230, { fs: 20 })) }
    ] },
    { f: 1, cols: [
      { th: 'pch', h: 'Lysosomes', list: [
        { t: 'Formation', d: 'Membrane-bound vesicles formed by {{packaging in Golgi}}.' },
        { t: 'Enzymes', d: 'Hydrolases – lipases, proteases, carbohydrases – active at [[acidic pH]].' },
        { t: 'Function', d: 'Digest carbohydrates, proteins, lipids & nucleic acids.' }
      ] },
      { th: 'grn', h: 'Vacuoles', list: [
        { t: 'Tonoplast', d: 'Single membrane; transports ions against gradient into the vacuole.' },
        { t: 'Size', d: 'May occupy up to [[90%]] of a plant cell volume.' },
        { t: 'Special types', d: '{{Contractile}} vacuole in Amoeba – osmoregulation & excretion; {{food}} vacuoles in protists.' }
      ] }
    ] }
  ] },

/* ---------- 10 · Mitochondria ---------- */
{ t: 'Mitochondria –', s: 'The Powerhouse of the Cell',
  d: 'Double membrane-bound organelles; sites of [[aerobic respiration]] that produce cellular energy as {{ATP}}.',
  rows: [
    { f: 1.5, cols: [
      { w: 1.35, th: 'pink', h: 'Structure of Mitochondrion', sub: '(longitudinal section)', svg: () => D.svg(600, 400, () => {
        const cx = 300, cy = 210, rx = 250, ry = 135, ix = 232, iy = 117; let s = `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${D.rg('#f6a54a')}" stroke="#a85512" stroke-width="3"/>`;
        s += `<ellipse cx="${cx}" cy="${cy}" rx="${rx - 9}" ry="${ry - 9}" fill="#fff1d6"/><ellipse cx="${cx}" cy="${cy}" rx="${ix}" ry="${iy}" fill="${D.rg('#ffcf7a')}" stroke="#e07b1a" stroke-width="4"/>`;
        for (let k = -4; k <= 4; k++){ const x = cx + k * 46, t = Math.sqrt(1 - Math.pow((x - cx) / ix, 2)); [Math.abs(k) % 2 ? -1 : 1].forEach(sd => { const y0 = cy - sd * iy * t, d = iy * t * 1.25;
          s += `<path d="M${x - 10},${y0 - sd * 4} L${x - 10},${y0 + sd * (d - 10)} Q${x - 10},${y0 + sd * d} ${x},${y0 + sd * d} Q${x + 10},${y0 + sd * d} ${x + 10},${y0 + sd * (d - 10)} L${x + 10},${y0 - sd * 4}" fill="${D.lg('#ffe2b0', 1)}" stroke="#e07b1a" stroke-width="4"/>`; }); }
        s += `<ellipse cx="${cx + 20}" cy="${cy + 6}" rx="22" ry="15" fill="none" stroke="#d6175f" stroke-width="3"/>` + D.dots(10, 140, 170, 320, 80, 4, '#1f4fbf', 6);
        s += L(80, 34, 'Outer membrane', 120, 98, { fs: 20 }) + L(300, 30, 'Inter-membrane\nspace', 300, 84, { fs: 20 }) + L(520, 34, 'Inner membrane', 470, 120, { fs: 20 });
        s += L(70, 380, 'Cristae', 140, 260, { fs: 20 }) + L(240, 382, 'Matrix', 250, 226, { fs: 20 }) + L(400, 382, 'Circular DNA', 322, 220, { fs: 20 }) + L(545, 340, 'Ribosomes\n(70S)', 440, 236, { fs: 20 });
        return s; }) },
      { w: 1, th: 'lav', h: 'Key Features', list: [
        { t: 'Shape & size', d: 'Sausage-shaped or cylindrical; 0.2–1.0 µm wide, 1.0–4.1 µm long.' },
        { t: 'Two compartments', d: 'Outer (inter-membrane space) and inner ([[matrix]]).' },
        { t: 'Cristae', d: 'Infoldings of inner membrane that {{increase surface area}}.' },
        { t: 'Number', d: 'Varies with the physiological activity of the cell.' }
      ] }
    ] },
    { f: 1, cols: [
      { th: 'grn', h: 'Why Mitochondria are Special', cards: [
        { t: 'Powerhouse', c: '#e91e63', d: 'Sites of aerobic respiration; produce energy as [[ATP]].', ic: () => D.svg(160, 80, () => B.mito(60, 40, 90, 46, -10) + T(130, 48, 'ATP', { fs: 22, c: '#d6175f', b: 1, head: 1 })) },
        { t: 'Own DNA & ribosomes', c: '#1f6fe0', d: 'Matrix has a single circular DNA, a few RNA and {{70S ribosomes}}.', ic: () => D.svg(160, 80, () => `<ellipse cx="60" cy="40" rx="34" ry="22" fill="none" stroke="#d6175f" stroke-width="4"/>` + D.dots(6, 104, 16, 40, 48, 6, '#1f4fbf', 2)) },
        { t: 'Divide by fission', c: '#2c9a3a', d: 'Make their own proteins & multiply by fission – [[semi-autonomous]].', ic: () => D.svg(160, 80, () => B.mito(44, 40, 60, 34, 0) + D.arrow(80, 40, 102, 40, '#2c9a3a', 3) + B.mito(130, 24, 40, 24, 0) + B.mito(130, 58, 40, 24, 0)) }
      ] }
    ] }
  ] },

/* ---------- 11 · Plastids ---------- */
{ t: 'Plastids –', s: 'Chloroplast & Types of Plastids',
  d: 'Found in all [[plant cells]] and in euglenoids. They are large, bear specific {{pigments}} and give colour to plants.',
  rows: [
    { f: 1.45, cols: [
      { w: 1.35, th: 'pink', h: 'Structure of Chloroplast', sub: '(diagrammatic view)', svg: () => D.svg(600, 400, () => {
        const cx = 300, cy = 210; let s = `<ellipse cx="${cx}" cy="${cy}" rx="255" ry="140" fill="${D.rg('#5bb84a')}" stroke="#235e18" stroke-width="3"/><ellipse cx="${cx}" cy="${cy}" rx="244" ry="129" fill="${D.rg('#d2efab')}" stroke="#3f8a2c" stroke-width="3"/>`;
        const G = [[150, 175], [235, 245], [320, 165], [400, 240], [470, 190]];
        for (let i = 0; i < G.length - 1; i++) s += D.tube(`M${G[i][0]},${G[i][1]} L${G[i + 1][0]},${G[i + 1][1]}`, '#3fa032', 8);
        G.forEach(([x, y]) => { for (let k = 5; k >= 0; k--) s += D.coin(x, y - 38 + k * 13, 32, 8, 7, '#34992a'); });
        s += `<ellipse cx="200" cy="290" rx="20" ry="13" fill="none" stroke="#d6175f" stroke-width="3"/>` + D.dots(9, 120, 250, 360, 40, 4, '#1f4fbf', 8);
        s += L(80, 36, 'Outer membrane', 110, 110, { fs: 20 }) + L(260, 30, 'Inner membrane', 250, 86, { fs: 20 }) + L(500, 34, 'Granum\n(stack of thylakoids)', 470, 160, { fs: 20 });
        s += L(70, 370, 'Stroma', 120, 250, { fs: 20 }) + L(300, 384, 'DNA & ribosomes', 210, 300, { fs: 20 }) + L(520, 370, 'Stroma lamella', 438, 218, { fs: 20 });
        return s; }) },
      { w: 1, th: 'lav', h: 'Key Features', list: [
        { t: 'Location', d: 'Mainly in [[mesophyll cells]] of leaves.' },
        { t: 'Shape & size', d: 'Lens-shaped, oval, spherical or ribbon-like; 5–10 µm long, 2–4 µm wide.' },
        { t: 'Number', d: '1 per cell (Chlamydomonas) to 20–40 per cell (mesophyll).' },
        { t: 'Stroma', d: 'Has enzymes for sugar & protein synthesis, circular DNA and {{70S ribosomes}}.' }
      ] }
    ] },
    { f: 1, cols: [
      { th: 'grn', h: 'Types of Plastids', cards: [
        { t: 'Chloroplasts', c: '#2c9a3a', d: 'Chlorophyll & carotenoids; trap light for [[photosynthesis]].', ic: () => D.svg(160, 80, () => B.chloro(80, 40, 120, 64)) },
        { t: 'Chromoplasts', c: '#f57c00', d: 'Fat-soluble carotenoids – carotene, xanthophylls: yellow, orange, red.', ic: () => D.svg(160, 80, () => `<ellipse cx="54" cy="40" rx="34" ry="24" fill="${D.rg('#ff8a3d')}" stroke="#b5501d" stroke-width="2"/><ellipse cx="114" cy="42" rx="30" ry="22" fill="${D.rg('#f6c431')}" stroke="#b58a1d" stroke-width="2"/>`) },
        { t: 'Leucoplasts', c: '#1f6fe0', d: 'Colourless; store food: {{amyloplasts}} – starch, {{elaioplasts}} – oils & fats, {{aleuroplasts}} – proteins.', ic: () => D.svg(160, 80, () => `<ellipse cx="80" cy="40" rx="44" ry="28" fill="${D.rg('#f4f4f4')}" stroke="#9a9a9a" stroke-width="2"/>` + D.ball(66, 36, 9, '#e8e0c0') + D.ball(92, 46, 7, '#e8e0c0')) }
      ] }
    ] }
  ] },

/* ---------- 12 · Ribosomes & cytoskeleton ---------- */
{ t: 'Ribosomes & Cytoskeleton', s: 'Protein Factories & Cell Skeleton',
  d: 'Ribosomes are granular structures first observed by [[George Palade (1953)]], made of {{RNA and proteins}} and not surrounded by any membrane.',
  rows: [
    { f: 1.35, cols: [
      { w: 1.25, th: 'pink', h: 'Types of Ribosomes', sub: '(S = Svedberg unit)', svg: () => D.svg(600, 380, () => {
        const rib = (x, y, a, b, big, small, name) => `<ellipse cx="${x}" cy="${y + 26}" rx="${a}" ry="${a * .68}" fill="${D.rg(big)}" stroke="${D.dk(big, .4)}" stroke-width="2"/><ellipse cx="${x}" cy="${y - a * .55}" rx="${b}" ry="${b * .58}" fill="${D.rg(small)}" stroke="${D.dk(big, .4)}" stroke-width="2"/>`;
        let s = rib(150, 150, 90, 62, '#5c8fe0', '#9cc3f5') + rib(450, 160, 72, 50, '#3fae6a', '#a5d98a');
        s += T(150, 186, '60S', { fs: 30, c: '#fff', b: 1, head: 1 }) + T(150, 104, '40S', { fs: 24, c: '#13286e', b: 1, head: 1 }) + T(450, 194, '50S', { fs: 26, c: '#fff', b: 1, head: 1 }) + T(450, 124, '30S', { fs: 22, c: '#13286e', b: 1, head: 1 });
        s += T(150, 290, '80S ribosome', { fs: 30, c: '#1d48cf', b: 1, head: 1 }) + T(150, 326, 'Eukaryotes (cytoplasm)', { fs: 22 }) + T(450, 290, '70S ribosome', { fs: 30, c: '#2c9a3a', b: 1, head: 1 }) + T(450, 326, 'Prokaryotes, mitochondria\n& plastids', { fs: 22 });
        s += `<line x1="300" y1="40" x2="300" y2="350" stroke="#ccc" stroke-width="2" stroke-dasharray="8 6"/>`;
        return s; }) },
      { w: 1, th: 'lav', h: 'Key Features', list: [
        { t: 'Two subunits', d: '80S = [[60S + 40S]]; 70S = {{50S + 30S}}.' },
        { t: 'S (Svedberg unit)', d: 'Sedimentation coefficient – indirectly a measure of density and size.' },
        { t: 'Function', d: 'Sites of [[protein synthesis]] (translation).' }
      ] }
    ] },
    { f: 1, cols: [
      { th: 'grn', h: 'Cytoskeleton – the Cell’s Skeleton', sub: 'network of filamentous proteins in the cytoplasm', cards: [
        { t: 'Microtubules', c: '#1f6fe0', d: 'Hollow tubes of tubulin.', ic: () => D.svg(160, 70, () => { let s = ''; for (let i = 0; i < 9; i++) s += D.ball(20 + i * 15, 24, 8, '#5cb0f0') + D.ball(26 + i * 15, 44, 8, '#3b8fd8'); return s; }) },
        { t: 'Microfilaments', c: '#e91e63', d: 'Thin filaments of actin.', ic: () => D.svg(160, 70, () => { let s = ''; for (let i = 0; i < 12; i++) s += D.ball(14 + i * 12, 35 + Math.sin(i * .9) * 7, 6.5, '#f06292') + D.ball(14 + i * 12, 35 - Math.sin(i * .9) * 7, 6.5, '#f8a5c2'); return s; }) },
        { t: 'Intermediate filaments', c: '#f57c00', d: 'Rope-like protein fibres.', ic: () => D.svg(160, 70, () => [0, 1, 2].map(k => D.tube(`M10,${30 + k * 6} c25,-14 45,14 70,0 s45,-14 70,0`, ['#f39c3d', '#f6b26b', '#e07b1a'][k], 9)).join('')) },
        { t: 'Functions', c: '#2c9a3a', d: 'Mechanical support, [[motility]] & maintaining cell shape.', ic: () => D.svg(160, 70, () => B.animalCell(80, 36, 32, { org: false }) + [[52, 20, 108, 52], [56, 52, 104, 18], [80, 6, 80, 66]].map(([a, b, c, d]) => D.line(a, b, c, d, '#2c9a3a', 2)).join('')) }
      ] }
    ] }
  ] },

/* ---------- 13 · Cilia, flagella & centrosome ---------- */
{ t: 'Cilia, Flagella & Centrosome', s: 'The 9 + 2 and 9 + 0 Patterns',
  d: 'Cilia and flagella are [[hair-like outgrowths]] of the cell membrane covered by plasma membrane; their core is the {{axoneme}}.',
  rows: [
    { f: 1.5, cols: [
      { w: 1.2, th: 'pink', h: 'Cross Section of Cilium / Flagellum', sub: '(9 + 2 array)', svg: () => D.svg(560, 420, () => {
        const cx = 280, cy = 214; let s = `<circle cx="${cx}" cy="${cy}" r="172" fill="#fdf0f5" stroke="#e48aa5" stroke-width="7"/><circle cx="${cx}" cy="${cy}" r="164" fill="#fff8fb"/>`;
        s += `<circle cx="${cx}" cy="${cy}" r="48" fill="#eef6ff" stroke="#7aa9d8" stroke-width="3"/>`;
        for (let i = 0; i < 9; i++){ const a = i / 9 * 6.283 - 1.57, x = cx + 120 * Math.cos(a), y = cy + 120 * Math.sin(a), a2 = a + 6.283 / 9, x2 = cx + 120 * Math.cos(a2), y2 = cy + 120 * Math.sin(a2);
          s += D.line(cx + 50 * Math.cos(a), cy + 50 * Math.sin(a), x - 18 * Math.cos(a), y - 18 * Math.sin(a), '#9a7ccf', 3);
          s += `<path d="M${x + 14 * Math.cos(a + 1.57)},${y + 14 * Math.sin(a + 1.57)} Q${cx + 134 * Math.cos(a + .35)},${cy + 134 * Math.sin(a + .35)} ${x2 - 14 * Math.cos(a2 + 1.57)},${y2 - 14 * Math.sin(a2 + 1.57)}" stroke="#bbb" stroke-width="2.5" fill="none"/>`;
          s += D.ball(x - 9 * Math.cos(a + 1.57), y - 9 * Math.sin(a + 1.57), 15, '#5cb0f0') + D.ball(x + 11 * Math.cos(a + 1.57), y + 11 * Math.sin(a + 1.57), 13, '#2f7fd0'); }
        s += D.ball(cx - 17, cy, 14, '#2c9a3a') + D.ball(cx + 17, cy, 14, '#2c9a3a');
        s += L(84, 26, 'Plasma membrane', 160, 84, { fs: 20 }) + L(470, 30, 'Peripheral doublet\nmicrotubules', 380, 120, { fs: 20 }) + L(470, 390, 'Radial spoke', 330, 270, { fs: 20 });
        s += L(84, 396, 'Central sheath', 240, 248, { fs: 20 }) + L(84, 300, 'Central pair', 262, 220, { fs: 20 }) + L(498, 250, 'Inter-doublet\nbridge', 412, 246, { fs: 20 });
        return s; }) },
      { w: 1, th: 'lav', h: 'Key Features', list: [
        { t: 'Cilia', d: 'Small structures that work like {{oars}} – move the cell or the fluid around it.' },
        { t: 'Flagella', d: 'Comparatively longer; responsible for cell movement.' },
        { t: '9 + 2 axoneme', d: '9 pairs of [[doublet]] microtubules around 2 central singlets.' },
        { t: 'Basal body', d: 'Centriole-like structure from which cilia & flagella emerge.' }
      ] }
    ] },
    { f: 1, cols: [
      { w: 1, th: 'yel', h: 'Centrosome', sub: '(two centrioles)', svg: () => D.svg(420, 200, () => {
        let s = `<rect x="40" y="70" width="120" height="60" fill="${D.lg('#9b6fe0')}" stroke="#5a3a9a" stroke-width="2"/><ellipse cx="160" cy="100" rx="14" ry="30" fill="${D.rg('#c9a8f5')}" stroke="#5a3a9a" stroke-width="2"/><ellipse cx="40" cy="100" rx="14" ry="30" fill="#7d55c0" stroke="#5a3a9a" stroke-width="2"/>`;
        s += `<rect x="110" y="34" width="60" height="120" fill="${D.lg('#b48ae8', 1)}" stroke="#5a3a9a" stroke-width="2"/><ellipse cx="140" cy="154" rx="30" ry="11" fill="${D.lg('#b48ae8', 1)}" stroke="#5a3a9a" stroke-width="2"/><ellipse cx="140" cy="34" rx="30" ry="11" fill="${D.rg('#dcc6fa')}" stroke="#5a3a9a" stroke-width="2"/>`;
        for (let i = 0; i < 9; i++){ const a = i / 9 * 6.283; s += D.ball(140 + 21 * Math.cos(a), 34 + 7.5 * Math.sin(a), 3.2, '#5cb0f0'); }
        const cx = 320, cy = 96; s += `<circle cx="${cx}" cy="${cy}" r="12" fill="${D.rg('#f2c230')}" stroke="#a5852e"/>`;
        for (let i = 0; i < 9; i++){ const a = i / 9 * 6.283, x = cx + 62 * Math.cos(a), y = cy + 62 * Math.sin(a); s += D.line(cx + 12 * Math.cos(a), cy + 12 * Math.sin(a), x, y, '#a5852e', 2);
          for (let k = -1; k <= 1; k++) s += D.ball(x + k * 10 * Math.cos(a + 1.2), y + k * 10 * Math.sin(a + 1.2), 6, '#5cb0f0'); }
        s += T(106, 188, 'Perpendicular pair', { fs: 20, c: '#13286e' }) + T(320, 188, 'Cartwheel (9 + 0)', { fs: 20, c: '#13286e' });
        return s; }) },
      { w: 1.05, th: 'grn', h: 'Centrioles', list: [
        { d: 'Two cylindrical centrioles lie [[perpendicular]] to each other.' },
        { d: '9 evenly spaced triplets of tubulin around a central {{hub}} – cartwheel.' },
        { d: 'Form basal bodies of cilia/flagella & [[spindle fibres]] in animal cells.' }
      ] }
    ] }
  ] },

/* ---------- 14 · Nucleus ---------- */
{ t: 'Nucleus –', s: 'Structure & Function',
  d: 'First described by [[Robert Brown (1831)]]. The nucleus contains the genetic material (DNA) and {{controls the activities}} of the cell.',
  rows: [
    { f: 1.5, cols: [
      { w: 1.3, th: 'pink', h: 'Structure of Nucleus', sub: '(diagrammatic view)', svg: () => D.svg(600, 400, () => {
        const cx = 300, cy = 205, ix = cx + 18, iy = cy + 8, ir = 126; let s = `<circle cx="${cx}" cy="${cy}" r="170" fill="${D.rg('#b07ae6')}" stroke="#4e2280" stroke-width="3"/>`;
        const R = D.rnd(13); for (let n = 0; n < 160; n++){ const a = R() * 6.283, d = Math.sqrt(R()) * 165, x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d; if (Math.hypot(x - ix, y - iy) < ir + 12) continue; s += `<circle cx="${x}" cy="${y}" r="${3 + R() * 2.5}" fill="#6b35a8" stroke="#c9a6f0" stroke-width="1.2" opacity=".8"/>`; }
        s += `<circle cx="${ix}" cy="${iy}" r="${ir + 8}" fill="#f1e4ff" stroke="#5e2a8a" stroke-width="3"/><circle cx="${ix}" cy="${iy}" r="${ir}" fill="${D.rg('#cfb2f0')}" stroke="#7d4bb8" stroke-width="3"/>`;
        s += B.tangle(ix - 40, iy + 30, 78, 46, 21, '#8a4fd0', 2.6) + D.ball(ix + 48, iy - 26, 38, '#6b2fa8') + D.dots(10, ix + 22, iy - 52, 50, 50, 2.2, '#4a1a80', 17);
        for (let n = 0; n < 16; n++){ const a = n / 16 * 6.283; s += `<rect x="-9" y="-6" width="18" height="12" rx="3" fill="${D.lg('#f6c431')}" stroke="#8a6a1e" transform="translate(${ix + (ir + 4) * Math.cos(a)} ${iy + (ir + 4) * Math.sin(a)}) rotate(${a * 57.3 + 90})"/>`; }
        s += L(80, 40, 'Nuclear envelope\n(double membrane)', 210, 96, { fs: 20 }) + L(60, 214, 'Nuclear pore', 188, 214, { fs: 20 }) + L(520, 80, 'Nucleolus', 380, 180, { fs: 20 });
        s += L(90, 360, 'Chromatin\n(DNA + proteins)', 230, 240, { fs: 20 }) + L(520, 340, 'Nucleoplasm\n(fluid inside)', 380, 280, { fs: 20 }) + L(530, 214, 'Nuclear surface\nwith pores', 452, 150, { fs: 20 });
        return s; }) },
      { w: 1, th: 'grn', h: 'Key Features', list: [
        { t: 'Nuclear envelope', d: 'Two membranes with a [[perinuclear space]] (10–50 nm) between them.' },
        { t: 'Nuclear pores', d: 'Passage for {{RNA and proteins}} in both directions.' },
        { t: 'Nucleolus', d: 'Non-membrane bound; site of active [[rRNA synthesis]].' },
        { t: 'No nucleus in', d: 'Mammalian RBCs (erythrocytes) & sieve tube cells of plants.' }
      ] }
    ] },
    { f: 1, cols: [
      { w: 1.25, th: 'blu', h: 'Chromatin and Chromosomes', svg: () => D.svg(560, 200, () => {
        let s = B.tangle(130, 82, 62, 46, 5, '#8e5fd0', 3) + D.arrow(214, 96, 340, 96, '#222', 3) + T(277, 54, 'Condenses during\ncell division', { fs: 19 }) + B.chrom(440, 92, 140, '#9b59d0', .45, 26);
        s += `<rect x="20" y="158" width="220" height="38" rx="8" fill="#ede5fa" stroke="#9b7ccf"/>` + T(130, 184, 'Chromatin (interphase)', { fs: 20, b: 1, c: '#13286e' });
        s += `<rect x="330" y="166" width="220" height="30" rx="8" fill="#ede5fa" stroke="#9b7ccf"/>` + T(440, 188, 'Chromosome (condensed)', { fs: 19, b: 1, c: '#13286e' });
        return s; }) },
      { w: 1, th: 'yel', h: 'Functions of Nucleus', list: [
        { d: '[[Controls]] all activities of the cell.' },
        { d: 'Stores and transmits {{genetic information}} (DNA).' },
        { d: 'Nucleolus makes [[ribosomal RNA]] (rRNA).' }
      ] }
    ] }
  ] },

/* ---------- 15 · Chromosomes & microbodies ---------- */
{ t: 'Chromosomes –', s: 'Types & Microbodies',
  d: 'Every chromosome has a primary constriction, the [[centromere]], with disc-shaped {{kinetochores}} on its sides. Its position decides the chromosome type.',
  rows: [
    { f: 1.4, cols: [
      { w: 1.15, th: 'pink', h: 'Parts of a Chromosome', svg: () => D.svg(520, 400, () => {
        let s = D.line(222, 76, 222, 112, '#7d4bb8', 5) + D.line(278, 76, 278, 112, '#7d4bb8', 5) + B.chrom(250, 236, 252, '#a865d8', .27, 52);
        s += `<rect x="216" y="174" width="18" height="12" rx="3" fill="#2c4f9a"/><rect x="266" y="174" width="18" height="12" rx="3" fill="#2c4f9a"/>`;
        s += D.ball(222, 66, 18, '#a865d8') + D.ball(278, 66, 18, '#a865d8');
        s += L(80, 40, 'Satellite', 202, 62, { fs: 20 }) + L(90, 120, 'Secondary\nconstriction', 216, 96, { fs: 20 }) + L(420, 140, 'Kinetochore', 284, 180, { fs: 20 });
        s += L(84, 240, 'Centromere', 236, 182, { fs: 20 }) + L(430, 300, 'Chromatid', 290, 300, { fs: 20 }) + L(90, 340, 'Sister\nchromatids', 222, 330, { fs: 20 });
        return s; }) },
      { w: 1, th: 'lav', h: 'Key Features', list: [
        { t: 'Chromatid', d: 'Each chromosome has two sister chromatids joined at the centromere.' },
        { t: 'Kinetochores', d: 'Disc-shaped structures on the sides of the {{centromere}}.' },
        { t: 'Satellite', d: 'A few chromosomes have a non-staining [[secondary constriction]] that gives a small fragment – the satellite.' }
      ] }
    ] },
    { f: 1, cols: [
      { w: 1.6, th: 'grn', h: 'Types Based on Centromere Position', svg: () => D.svg(700, 230, () => {
        const ty = [['Metacentric', .5, 'middle'], ['Sub-metacentric', .36, 'slightly off'], ['Acrocentric', .14, 'near one end'], ['Telocentric', .02, 'at the tip']];
        return ty.map(([n, f, sub], i) => B.chrom(90 + i * 175, 92, 150, ['#e91e63', '#1f6fe0', '#2c9a3a', '#f57c00'][i], f, 28) + T(90 + i * 175, 196, n, { fs: 24, b: 1, head: 1, c: '#13286e' }) + T(90 + i * 175, 222, sub, { fs: 19, c: '#555' })).join(''); }) },
      { w: 1, th: 'yel', h: 'Microbodies', list: [
        { d: 'Many [[membrane-bound]] minute vesicles with various enzymes.' },
        { d: 'Present in both {{plant and animal}} cells.' }
      ] }
    ] }
  ] }

] };
})();
