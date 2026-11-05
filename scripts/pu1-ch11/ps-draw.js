/* Photosynthesis drawing kit for PU-I Ch11 (built on notes/src/draw.js → window.D).
   Chloroplasts, grana, membranes, protein complexes, molecules, plants and graphs — used by the
   diagrams, slides, notes, worksheets and the animated deck. */
(function(){
  const D = window.D;
  const K = {
    LEAF: '#5aa83c', GRANA: '#2f8f3a', LAM: '#4f9a3f', STROMA: '#e9f5d3', OUT: '#86c760',
    PS2: '#7b5bd6', PS1: '#d0573d', CYT: '#e3a33b', PQ: '#c9a227', PC: '#3aa6a0', NR: '#3a8fd6', ATPS: '#b8467a',
    WATER: '#4aa3df', O2: '#e05f5f', H: '#f2b33d', ATP: '#e8952f', NADPH: '#3f7fc5', CO2: '#6f7f8f', SUGAR: '#e9c046', E: '#f4c20d',
    MES: '#8cc56a', BS: '#3f8f3a'
  };
  const P = { K };
  P.marker = c => { const id = 'ah' + c.slice(1); D.defs[id] = `<marker id="${id}" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${c}"/></marker>`; return `url(#${id})`; };
  /* path with an arrow head; d is any SVG path */
  P.parrow = (d, c, w, o) => { o = o || {}; c = c || '#1b1b1b'; return `<path d="${d}" stroke="${c}" stroke-width="${w || 4}" fill="none" stroke-linecap="round" stroke-linejoin="round" ${o.dash ? `stroke-dasharray="${o.dash}"` : ''} marker-end="${P.marker(c)}" ${o.both ? `marker-start="${P.marker(c)}"` : ''}/>`; };
  /* arc arrow on a circle, angles in degrees (0 = top, clockwise) */
  P.pt = (cx, cy, r, a) => [cx + r * Math.sin(a * Math.PI / 180), cy - r * Math.cos(a * Math.PI / 180)];
  P.arc = (cx, cy, r, a0, a1, c, w, o) => { const [x0, y0] = P.pt(cx, cy, r, a0), [x1, y1] = P.pt(cx, cy, r, a1); const big = Math.abs(a1 - a0) > 180 ? 1 : 0, sw = a1 > a0 ? 1 : 0;
    return P.parrow(`M${x0.toFixed(1)},${y0.toFixed(1)} A${r},${r} 0 ${big} ${sw} ${x1.toFixed(1)},${y1.toFixed(1)}`, c, w, o); };
  /* quadratic curve arrow */
  P.curve = (x1, y1, cx, cy, x2, y2, c, w, o) => P.parrow(`M${x1},${y1} Q${cx},${cy} ${x2},${y2}`, c, w, o);
  /* smooth line through points (Catmull-Rom) */
  P.smooth = pts => { let d = `M${pts[0][0]},${pts[0][1]}`; for (let i = 0; i < pts.length - 1; i++){ const p0 = pts[i - 1] || pts[i], p1 = pts[i], p2 = pts[i + 1], p3 = pts[i + 2] || p2;
    d += ` C${(p1[0] + (p2[0] - p0[0]) / 6).toFixed(1)},${(p1[1] + (p2[1] - p0[1]) / 6).toFixed(1)} ${(p2[0] - (p3[0] - p1[0]) / 6).toFixed(1)},${(p2[1] - (p3[1] - p1[1]) / 6).toFixed(1)} ${p2[0]},${p2[1]}`; } return d; };
  P.rrect = (x, y, w, h, r) => `M${x + r},${y} H${x + w - r} A${r},${r} 0 0 1 ${x + w},${y + r} V${y + h - r} A${r},${r} 0 0 1 ${x + w - r},${y + h} H${x + r} A${r},${r} 0 0 1 ${x},${y + h - r} V${y + r} A${r},${r} 0 0 1 ${x + r},${y} Z`;
  P.ellipse = (cx, cy, rx, ry, fill, st, sw, ex) => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="${st || 'none'}" stroke-width="${sw || 0}" ${ex || ''}/>`;
  /* text drawn in the painted layer (moves with groups in the animated deck) */
  P.t = (x, y, t, fs, c, o) => { o = o || {}; return `<text x="${x}" y="${y}" text-anchor="${o.a || 'middle'}" font-family="${o.hand ? D.FONT : "Inter,'Noto Sans Kannada','Noto Sans Devanagari',sans-serif"}" font-size="${fs || 26}" font-weight="${o.w || 700}" fill="${c || '#1d2b22'}" ${o.halo ? 'stroke="#fffdf6" stroke-width="' + (fs || 26) * .28 + '" stroke-linejoin="round" paint-order="stroke"' : ''}>${String(t).split('\n').map((l, i) => `<tspan x="${x}" dy="${i ? (fs || 26) * 1.15 : 0}">${l}</tspan>`).join('')}</text>`; };
  /* capsule with a molecule name */
  P.pill = (x, y, t, c, o) => { o = o || {}; const fs = o.fs || 26, w = o.w || (String(t).replace(/<[^>]+>/g, '').length * fs * .56 + fs * 1.3), h = fs * 1.55;
    return `<path d="${P.rrect(x - w / 2, y - h / 2, w, h, h / 2)}" fill="${D.lg(c)}" stroke="${D.dk(c, .35)}" stroke-width="2"/>` + `<ellipse cx="${x - w * .18}" cy="${y - h * .26}" rx="${w * .24}" ry="${h * .12}" fill="#fff" opacity=".3"/>` + P.t(x, y + fs * .36, t, fs, o.tc || '#fff'); };
  P.box = (x, y, w, h, c, o) => { o = o || {}; return `<path d="${P.rrect(x, y, w, h, o.r || 18)}" fill="${o.flat ? c : D.lg(c)}" stroke="${o.st || D.dk(c, .3)}" stroke-width="${o.sw || 2.5}" ${o.dash ? `stroke-dasharray="${o.dash}"` : ''}/>`; };
  P.hp = (x, y, r) => D.ball(x, y, r, K.H) + P.t(x, y + r * .42, 'H⁺', r * 1.05, '#5a3a00');
  P.el = (x, y, r) => D.ball(x, y, r, '#ffd84a') + P.t(x, y + r * .4, 'e⁻', r * 1.05, '#5a4300');
  /* wavy light ray ending in an arrow head */
  P.ray = (x1, y1, x2, y2, c, o) => { o = o || {}; c = c || '#f0a400'; const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy), ux = dx / L, uy = dy / L, nx = -uy, ny = ux, amp = o.amp || 12, waves = o.n || Math.max(3, Math.round(L / 46));
    let d = ''; const N = waves * 12, Lw = L - 22; for (let i = 0; i <= N; i++){ const t = i / N, a = Math.sin(t * waves * Math.PI * 2) * amp * (t < .9 ? 1 : (1 - t) * 10); const px = x1 + ux * Lw * t + nx * a, py = y1 + uy * Lw * t + ny * a; d += (i ? 'L' : 'M') + px.toFixed(1) + ',' + py.toFixed(1); }
    return `<path d="${d}" stroke="${c}" stroke-width="${o.w || 5}" fill="none" stroke-linecap="round"/>` + D.arrow(x1 + ux * (Lw - 4), y1 + uy * (Lw - 4), x2, y2, c, o.w || 5); };
  P.sun = (x, y, r) => { let s = ''; for (let i = 0; i < 12; i++){ const a = i * 30, [x1, y1] = P.pt(x, y, r * 1.22, a), [x2, y2] = P.pt(x, y, r * (i % 2 ? 1.52 : 1.7), a); s += D.line(x1, y1, x2, y2, '#f2a900', r * .13); } return s + D.ball(x, y, r, '#ffcf3a'); };
  P.bubbles = (x, y, n, r, seed) => { const R = D.rnd(seed || 5); let s = ''; for (let i = 0; i < n; i++){ const bx = x + (R() - .5) * r * 5, by = y - i * r * 2.4 - R() * r, br = r * (.55 + R() * .6); s += `<circle cx="${bx.toFixed(1)}" cy="${by.toFixed(1)}" r="${br.toFixed(1)}" fill="#ffffff" fill-opacity=".55" stroke="#4a90c2" stroke-width="${Math.max(1.5, br / 5)}"/><circle cx="${(bx - br * .35).toFixed(1)}" cy="${(by - br * .35).toFixed(1)}" r="${(br * .25).toFixed(1)}" fill="#fff"/>`; } return s; };

  /* ---------- leaves and plants ---------- */
  P.leaf = (x, y, len, ang, c, o) => { o = o || {}; c = c || K.LEAF; const w = len * (o.w || .32);
    let s = `<g transform="translate(${x} ${y}) rotate(${ang || 0})"><path d="M0,0 C${len * .25},${-w} ${len * .78},${-w * .95} ${len},0 C${len * .78},${w * .95} ${len * .25},${w} 0,0 Z" fill="${D.lg(c)}" stroke="${D.dk(c, .38)}" stroke-width="${Math.max(1.5, len / 90)}"/>`;
    s += `<path d="M0,0 L${len * .96},0" stroke="${D.dk(c, .35)}" stroke-width="${Math.max(1.2, len / 110)}"/>`;
    if (!o.noVeins) for (let i = 1; i <= 4; i++){ const px = len * i / 5.2; s += `<path d="M${px},0 Q${px + len * .07},${-w * .35} ${px + len * .14},${-w * .62}" stroke="${D.dk(c, .3)}" stroke-width="${Math.max(1, len / 160)}" fill="none"/><path d="M${px},0 Q${px + len * .07},${w * .35} ${px + len * .14},${w * .62}" stroke="${D.dk(c, .3)}" stroke-width="${Math.max(1, len / 160)}" fill="none"/>`; }
    return s + '</g>'; };
  /* potted plant; (x,y) = base centre of the pot */
  P.plant = (x, y, k, o) => { o = o || {}; k = k || 1; const c = o.c || K.LEAF;
    let s = D.tube(`M${x},${y - 60 * k} C${x - 8 * k},${y - 140 * k} ${x + 8 * k},${y - 200 * k} ${x},${y - 270 * k}`, '#4c8a2c', 12 * k);
    [[-150, 0, 130, -18], [-205, 0, 120, 200], [-245, 0, 105, -40], [-110, 0, 115, 190], [-270, 0, 80, -95]].forEach(([dy, , L, a]) => { s += P.leaf(x, y + dy * k, L * k, a, c); });
    s += `<path d="M${x - 70 * k},${y - 70 * k} L${x + 70 * k},${y - 70 * k} L${x + 52 * k},${y} L${x - 52 * k},${y} Z" fill="${D.lg('#c8693a')}" stroke="#7a3a1a" stroke-width="${3 * k}"/>`;
    s += `<rect x="${x - 78 * k}" y="${y - 84 * k}" width="${156 * k}" height="${20 * k}" rx="${6 * k}" fill="${D.lg('#d9804e')}" stroke="#7a3a1a" stroke-width="${3 * k}"/>`;
    return s; };
  /* maize / sugarcane style grass plant */
  P.grass = (x, y, k, o) => { o = o || {}; k = k || 1; let s = D.tube(`M${x},${y} L${x},${y - 330 * k}`, '#6a9a2a', 14 * k);
    [[-60, -60], [-120, 235], [-180, -62], [-240, 240], [-300, -70]].forEach(([dy, a]) => { s += P.leaf(x, y + dy * k, 190 * k, a, o.c || '#6fb03c', { w: .1, noVeins: true }); });
    if (o.cob) s += `<ellipse cx="${x + 22 * k}" cy="${y - 170 * k}" rx="${16 * k}" ry="${46 * k}" fill="${D.lg('#f2c94c')}" stroke="#a87d14" stroke-width="${2 * k}" transform="rotate(18 ${x + 22 * k} ${y - 170 * k})"/>`;
    return s; };
  /* ---------- Priestley set-up ---------- */
  P.jar = (x, y, w, h) => { const r = w / 2; return `<path d="M${x - r},${y} L${x - r},${y - h + r} A${r},${r} 0 0 1 ${x + r},${y - h + r} L${x + r},${y}" fill="#dff1ff" fill-opacity=".35" stroke="#6f9cc0" stroke-width="5"/>` +
    `<path d="M${x - r * .7},${y - h * .25} L${x - r * .7},${y - h + r * 1.1}" stroke="#fff" stroke-width="8" opacity=".7" stroke-linecap="round"/>` + D.ball(x, y - h - 8, 14, '#9ab8d0') +
    `<rect x="${x - r - 24}" y="${y}" width="${w + 48}" height="18" rx="6" fill="${D.lg('#9a7b55')}" stroke="#5e4529" stroke-width="2"/>`; };
  P.candle = (x, y, k, lit) => { k = k || 1; let s = `<rect x="${x - 16 * k}" y="${y - 90 * k}" width="${32 * k}" height="${90 * k}" rx="${5 * k}" fill="${D.lg('#f6efd8', 1)}" stroke="#b9a979" stroke-width="2"/>` + D.line(x, y - 90 * k, x, y - 104 * k, '#333', 3 * k);
    if (lit !== false) s += `<path d="M${x},${y - 140 * k} C${x + 14 * k},${y - 118 * k} ${x + 12 * k},${y - 100 * k} ${x},${y - 98 * k} C${x - 12 * k},${y - 100 * k} ${x - 14 * k},${y - 118 * k} ${x},${y - 140 * k} Z" fill="${D.rg('#ffb52e')}" stroke="#e46a12" stroke-width="2"/>`;
    else s += `<path d="M${x},${y - 106 * k} C${x - 10 * k},${y - 130 * k} ${x + 12 * k},${y - 140 * k} ${x - 4 * k},${y - 166 * k}" stroke="#9aa0a6" stroke-width="${4 * k}" fill="none" opacity=".7"/>`;
    return s; };
  P.mouse = (x, y, k, dead) => { k = k || 1; const c = '#9aa0a8';
    let s = `<path d="M${x + 50 * k},${y - 12 * k} C${x + 100 * k},${y - 10 * k} ${x + 110 * k},${y - 50 * k} ${x + 140 * k},${y - 34 * k}" stroke="#c9a3a3" stroke-width="${4 * k}" fill="none"/>`;
    s += `<ellipse cx="${x}" cy="${y - 30 * k}" rx="${60 * k}" ry="${34 * k}" fill="${D.rg(c)}" stroke="${D.dk(c, .4)}" stroke-width="2"/>` + D.ball(x - 58 * k, y - 40 * k, 24 * k, c) + D.ball(x - 46 * k, y - 66 * k, 13 * k, '#e3b5b5');
    s += dead ? `<path d="M${x - 72 * k},${y - 48 * k} l8,8 m0,-8 l-8,8" stroke="#222" stroke-width="3"/>` : D.ball(x - 68 * k, y - 44 * k, 4 * k, '#111');
    if (dead) s = `<g transform="rotate(180 ${x} ${y - 30 * k})">${s}</g>`;
    return s; };

  /* ---------- chloroplast ---------- */
  P.cpLayout = (cx, cy, rx, ry) => { const xs = [-.6, -.3, 0, .3, .6], ys = [.06, -.14, .1, -.1, .08], ns = [5, 7, 8, 7, 5], w = rx * .2, h = w * .13;
    return { w, h, grana: xs.map((f, i) => [cx + f * rx, cy + ys[i] * ry + ns[i] * h * .6, ns[i]]) }; };
  P.granum = (x, y, w, n, c) => { const h = w * .13; let s = ''; for (let i = 0; i < n; i++) s += D.coin(x, y - i * h * 1.32, w / 2, w * .17, h, c || K.GRANA); return s; };
  P.chloroplast = (cx, cy, rx, ry, o) => { o = o || {}; const L = P.cpLayout(cx, cy, rx, ry), k = ry / 150;
    let s = P.ellipse(cx, cy, rx, ry, D.lg(K.OUT), D.dk(K.OUT, .45), 4 * k) + P.ellipse(cx, cy, rx - 11 * k, ry - 11 * k, o.stromaCol || K.STROMA, '#6aa64a', 3 * k);
    if (!o.noInner){
      /* starch, lipid, DNA, ribosomes */
      s += P.ellipse(cx - rx * .12, cy + ry * .55, rx * .11, ry * .1, D.rg('#fbf2d6'), '#c4b07a', 2 * k);
      s += D.ball(cx + rx * .44, cy + ry * .5, 10 * k, '#e7b84a') + D.ball(cx + rx * .52, cy + ry * .38, 7 * k, '#e7b84a');
      s += `<path d="M${cx + rx * .1},${cy - ry * .58} c${12 * k},${-10 * k} ${24 * k},${10 * k} ${36 * k},0 s${24 * k},${10 * k} ${36 * k},0" stroke="#c0392b" stroke-width="${3 * k}" fill="none"/>`;
      const R = D.rnd(17); for (let i = 0; i < 46; i++){ const a = R() * Math.PI * 2, rr = Math.sqrt(R()) * .86; const x = cx + Math.cos(a) * rx * rr * .92, y = cy + Math.sin(a) * ry * rr * .86; if (Math.abs(y - cy) < ry * .3 && Math.abs(x - cx) < rx * .75) continue; s += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${(2.6 * k).toFixed(1)}" fill="#7a5a2a"/>`; }
    }
    /* stroma lamellae between neighbouring grana */
    for (let i = 0; i < L.grana.length - 1; i++){ const [x1, y1, n1] = L.grana[i], [x2, y2, n2] = L.grana[i + 1];
      [.3, .7].forEach(f => { const ya = y1 - n1 * L.h * 1.32 * f, yb = y2 - n2 * L.h * 1.32 * (1 - f) ; s += D.tube(`M${x1 + L.w * .45},${ya} C${(x1 + x2) / 2},${ya} ${(x1 + x2) / 2},${yb} ${x2 - L.w * .45},${yb}`, K.LAM, 5 * k); }); }
    { const [x0, y0, n0] = L.grana[0], [x4, y4, n4] = L.grana[4]; s += D.tube(`M${x0 - L.w * .45},${y0 - n0 * L.h * .6} Q${x0 - L.w * .9},${y0 - n0 * L.h * .3} ${cx - rx * .86},${cy + ry * .06}`, K.LAM, 5 * k) + D.tube(`M${x4 + L.w * .45},${y4 - n4 * L.h * .6} Q${x4 + L.w * .9},${y4 - n4 * L.h * .3} ${cx + rx * .86},${cy + ry * .04}`, K.LAM, 5 * k); }
    L.grana.forEach(([x, y, n]) => { s += P.granum(x, y, L.w, n); });
    return s; };
  /* small chloroplast for inside cells */
  P.mini = (x, y, rx, ry, ang, c) => { c = c || '#4fa33d'; return `<g transform="rotate(${ang || 0} ${x} ${y})">` + P.ellipse(x, y, rx, ry, D.lg(c), D.dk(c, .4), 1.5) + [-.45, 0, .45].map(f => `<rect x="${x + f * rx - rx * .12}" y="${y - ry * .45}" width="${rx * .24}" height="${ry * .9}" rx="${rx * .06}" fill="${D.dk(c, .35)}"/>`).join('') + '</g>'; };
  /* plant cell (rounded box) with chloroplasts along the wall; o.cp = number, o.wall = thickness */
  P.cell = (x, y, w, h, o) => { o = o || {}; const wall = o.wall || 7, c = o.c || '#d9eab6', r = Math.min(w, h) * (o.round || .22);
    let s = `<path d="${P.rrect(x, y, w, h, r)}" fill="${c}" stroke="${o.st || '#6c8f3a'}" stroke-width="${wall}"/>` + `<path d="${P.rrect(x + wall, y + wall, w - wall * 2, h - wall * 2, Math.max(4, r - wall))}" fill="${o.inner || '#f3f9e6'}" stroke="none"/>`;
    const n = o.cp || 0, cr = o.cpr || Math.min(w, h) * .09; if (n){ const per = 2 * (w + h) - 8 * cr; for (let i = 0; i < n; i++){ let d = (i + .5) / n * per, px, py, a;
      const iw = w - 2 * wall - 2.6 * cr, ih = h - 2 * wall - 2.6 * cr, x0 = x + wall + 1.3 * cr, y0 = y + wall + 1.3 * cr; const p = (i + .5) / n * 2 * (iw + ih);
      if (p < iw){ px = x0 + p; py = y0; a = 0; } else if (p < iw + ih){ px = x0 + iw; py = y0 + p - iw; a = 90; } else if (p < 2 * iw + ih){ px = x0 + iw - (p - iw - ih); py = y0 + ih; a = 0; } else { px = x0; py = y0 + ih - (p - 2 * iw - ih); a = 90; }
      s += P.mini(px, py, cr, cr * .55, a, o.cpc); } }
    if (o.nucleus) s += D.ball(x + w * .5, y + h * .55, Math.min(w, h) * .14, '#b69ad6');
    return s; };

  /* ---------- membranes and complexes (stroma above, lumen below) ---------- */
  P.membrane = (x1, x2, y, th, o) => { o = o || {}; const r = o.r || 8, step = r * 2.05; let s = `<rect x="${x1}" y="${y + r}" width="${x2 - x1}" height="${th - 2 * r}" fill="#fbe7b5"/>`;
    for (let x = x1 + r; x <= x2 - r; x += step){ s += D.line(x - r * .3, y + r, x - r * .3, y + th / 2 - 2, '#d39c4a', 1.6) + D.line(x + r * .3, y + r, x + r * .3, y + th / 2 - 2, '#d39c4a', 1.6) + D.line(x - r * .3, y + th - r, x - r * .3, y + th / 2 + 2, '#d39c4a', 1.6) + D.line(x + r * .3, y + th - r, x + r * .3, y + th / 2 + 2, '#d39c4a', 1.6);
      s += `<circle cx="${x}" cy="${y + r}" r="${r}" fill="#efb35a" stroke="#b07a2a" stroke-width="1.2"/><circle cx="${x}" cy="${y + th - r}" r="${r}" fill="#efb35a" stroke="#b07a2a" stroke-width="1.2"/>`; }
    return s; };
  P.complex = (x, y, w, h, c, t, o) => { o = o || {}; return `<path d="${P.rrect(x - w / 2, y - h / 2, w, h, Math.min(w, h) * .42)}" fill="${D.rg(c)}" stroke="${D.dk(c, .4)}" stroke-width="3"/>` + (t ? P.t(x, y + (o.fs || 26) * .36 - (String(t).includes('\n') ? (o.fs || 26) * .58 : 0), t, o.fs || 26, '#fff') : ''); };
  /* ATP synthase: CF0 in the membrane (y..y+th), stalk and CF1 head above in the stroma */
  P.atpSynthase = (x, y, th, k) => { k = k || 1; const c = K.ATPS; let s = `<rect x="${x - 38 * k}" y="${y - 4}" width="${76 * k}" height="${th + 8}" rx="${12 * k}" fill="${D.lg(c, 1)}" stroke="${D.dk(c, .4)}" stroke-width="3"/>`;
    s += `<rect x="${x - 10 * k}" y="${y - 70 * k}" width="${20 * k}" height="${72 * k}" fill="${D.lg('#9a3a66', 1)}" stroke="${D.dk(c, .5)}" stroke-width="2"/>`;
    [[-44, -104], [0, -118], [44, -104], [-30, -146], [30, -146], [0, -170]].forEach(([dx, dy], i) => { s += D.ball(x + dx * k, y + dy * k, 30 * k, i % 2 ? '#e295b6' : '#c95689'); });
    return s; };

  /* ---------- graphs ---------- */
  P.axes = (x0, y0, w, h, xl, yl, o) => { o = o || {}; let s = D.arrow(x0, y0, x0 + w, y0, '#222', 4) + D.arrow(x0, y0, x0, y0 - h, '#222', 4);
    if (xl) s += P.t(x0 + w / 2, y0 + (o.xoff || 58), xl, o.fs || 28, '#222', { w: 600 }); if (yl) s += `<g transform="rotate(-90 ${x0 - (o.yoff || 40)} ${y0 - h / 2})">${P.t(x0 - (o.yoff || 40), y0 - h / 2, yl, o.fs || 28, '#222', { w: 600 })}</g>`;
    return s; };
  P.line = (pts, c, w, o) => { o = o || {}; return `<path d="${P.smooth(pts)}" stroke="${c}" stroke-width="${w || 6}" fill="none" stroke-linecap="round" ${o.dash ? `stroke-dasharray="${o.dash}"` : ''}/>`; };
  /* gaussian sum curve helper for spectra: peaks [[nm, height, width]] mapped into a box */
  P.spec = (x0, y0, w, h, peaks, nm0, nm1) => { const pts = []; for (let nm = nm0; nm <= nm1; nm += 6){ let v = 0; peaks.forEach(([m, a, s]) => { v += a * Math.exp(-((nm - m) ** 2) / (2 * s * s)); }); pts.push([x0 + (nm - nm0) / (nm1 - nm0) * w, y0 - Math.min(1, v) * h]); } return pts; };
  P.rainbow = (x, y, w, h) => { const id = 'rb' + Math.round(w); D.defs[id] = `<linearGradient id="${id}" x1="0" x2="1"><stop offset="0" stop-color="#7a2bd0"/><stop offset=".17" stop-color="#2d3fe0"/><stop offset=".33" stop-color="#18a0e0"/><stop offset=".47" stop-color="#2fbf4a"/><stop offset=".6" stop-color="#e6e02a"/><stop offset=".72" stop-color="#f5a623"/><stop offset=".85" stop-color="#e8401c"/><stop offset="1" stop-color="#a0101a"/></linearGradient>`;
    return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 3}" fill="url(#${id})" stroke="#333" stroke-width="1.5"/>`; };
  /* little icons */
  P.drop = (x, y, r, c) => `<path d="M${x},${y - r * 1.6} C${x + r * .4},${y - r * .9} ${x + r},${y - r * .3} ${x + r},${y + r * .2} A${r},${r} 0 0 1 ${x - r},${y + r * .2} C${x - r},${y - r * .3} ${x - r * .4},${y - r * .9} ${x},${y - r * 1.6} Z" fill="${D.rg(c || K.WATER)}" stroke="${D.dk(c || K.WATER, .4)}" stroke-width="2"/>`;
  P.thermo = (x, y, k, lvl) => { k = k || 1; return `<rect x="${x - 14 * k}" y="${y - 160 * k}" width="${28 * k}" height="${150 * k}" rx="${14 * k}" fill="#fff" stroke="#555" stroke-width="3"/>` + `<rect x="${x - 7 * k}" y="${y - (20 + 120 * (lvl == null ? .6 : lvl)) * k}" width="${14 * k}" height="${(20 + 120 * (lvl == null ? .6 : lvl)) * k}" rx="${7 * k}" fill="#e0453a"/>` + D.ball(x, y, 26 * k, '#e0453a'); };
  P.co2 = (x, y, k) => { k = k || 1; return D.ball(x, y, 22 * k, '#555') + D.ball(x - 34 * k, y, 17 * k, '#e05f5f') + D.ball(x + 34 * k, y, 17 * k, '#e05f5f'); };
  P.o2 = (x, y, k) => { k = k || 1; return D.ball(x - 14 * k, y, 18 * k, K.O2) + D.ball(x + 14 * k, y, 18 * k, K.O2); };
  P.h2o = (x, y, k) => { k = k || 1; return D.ball(x - 26 * k, y + 14 * k, 12 * k, '#f2f2f2') + D.ball(x + 26 * k, y + 14 * k, 12 * k, '#f2f2f2') + D.ball(x, y, 22 * k, K.O2); };
  window.P = P;
})();
