/* Cell-division drawing kit for PU-I Ch10 (built on notes/src/draw.js → window.D).
   Chromosomes, cells, spindles, poles — used by the diagrams, slides, notes and worksheets. */
(function(){
  const D = window.D;
  const R = '#d64a4a', B = '#3c6fd6', RL = '#f08a7e', BL = '#7fa6f0';
  const C = {
    RED: R, BLUE: B, RED2: '#e0703c', BLUE2: '#2f9e8f',
    rot(x, y, a, cx, cy){ const r = a * Math.PI / 180, c = Math.cos(r), s = Math.sin(r); return [cx + x * c - y * s, cy + x * s + y * c]; },
    /* replicated chromosome (two sister chromatids joined at the centromere).
       cx,cy = centromere; L = total length; ang = degrees (0 = vertical); cpos = fraction of length above centromere.
       o.cols = [colA, colB] colours of the two chromatids; o.swap = [{c: chromatidIndex, from, to, col}] crossover segments (0..1 along the chromatid). */
    chromosome(cx, cy, L, ang, col, o){
      o = o || {}; const w = o.w || Math.max(6, L * .16), g = o.gap != null ? o.gap : w * .55, bow = o.bow != null ? o.bow : w * .35;
      const cp = o.cpos != null ? o.cpos : .4, a1 = L * cp, a2 = L * (1 - cp);
      let s = '';
      const sides = o.single ? [0] : [-1, 1];
      sides.forEach((i, k) => {
        const colk = (o.cols && o.cols[k]) || col;
        const pts = t => { /* t from 0 (top tip) to 1 (bottom tip) along quadratic halves */
          if (t <= .5){ const u = t * 2; const p0 = [i * g, -a1], p1 = [i * (g + bow), -a1 / 2], p2 = [i * g * .25, 0]; return qb(p0, p1, p2, u); }
          const u = (t - .5) * 2; const p0 = [i * g * .25, 0], p1 = [i * (g + bow), a2 / 2], p2 = [i * g, a2]; return qb(p0, p1, p2, u); };
        const pathOf = (t0, t1) => { let d = ''; const n = 14; for (let j = 0; j <= n; j++){ const t = t0 + (t1 - t0) * j / n; const [x, y] = pts(t); const [X, Y] = C.rot(x, y, ang, cx, cy); d += (j ? 'L' : 'M') + X.toFixed(1) + ',' + Y.toFixed(1); } return d; };
        s += D.tube(pathOf(0, 1), colk, w);
        (o.swap || []).filter(z => z.c === k).forEach(z => { s += D.tube(pathOf(z.from, z.to), z.col, w); });
        if (o.bands !== false){ [.18, .78].forEach(t => { const [x, y] = pts(t); const [X, Y] = C.rot(x, y, ang, cx, cy); s += `<circle cx="${X}" cy="${Y}" r="${w * .18}" fill="#fff" opacity=".35"/>`; }); }
      });
      s += D.ball(cx, cy, w * .55, '#444');
      if (o.kin){ (o.single ? [o.kinSide || 1] : [-1, 1]).forEach(i => { const [X, Y] = C.rot(i * (g + w * .65), 0, ang, cx, cy); s += `<rect x="${X - w * .22}" y="${Y - w * .45}" width="${w * .44}" height="${w * .9}" rx="${w * .15}" fill="#f2c94c" stroke="#7a5a00" stroke-width="1.2" transform="rotate(${ang} ${X} ${Y})"/>`; }); }
      return s;
      function qb(p0, p1, p2, u){ const v = 1 - u; return [v * v * p0[0] + 2 * v * u * p1[0] + u * u * p2[0], v * v * p0[1] + 2 * v * u * p1[1] + u * u * p2[1]]; }
    },
    /* single-chromatid chromosome moving toward a pole: centromere at (cx,cy) leads in direction dirDeg,
       the two arms trail behind (V/J shape). */
    daughter(cx, cy, L, dirDeg, col, o){
      o = o || {}; const w = o.w || Math.max(6, L * .16), cp = o.cpos != null ? o.cpos : .4, a1 = L * cp, a2 = L * (1 - cp), spread = o.spread || 26;
      const back = dirDeg + 180; let s = '';
      [[a1, -spread], [a2, spread]].forEach(([len, sp]) => {
        const a = (back + sp) * Math.PI / 180, m = (back + sp * .5) * Math.PI / 180;
        const mx = cx + Math.cos(m) * len * .5, my = cy + Math.sin(m) * len * .5, ex = cx + Math.cos(a) * len, ey = cy + Math.sin(a) * len;
        s += D.tube(`M${cx},${cy} Q${mx},${my} ${ex},${ey}`, col, w);
      });
      return s + D.ball(cx, cy, w * .5, '#444');
    },
    /* thin chromatin thread (interphase/leptotene) */
    thread(d, col, w){ return D.tube(d, col, w || 4); },
    squiggle(x, y, len, ang, col, seed, w){ const r = D.rnd(seed || 3); let d = ''; const n = 9; for (let i = 0; i <= n; i++){ const t = i / n; const [X, Y] = C.rot((r() - .5) * len * .22, (t - .5) * len, ang, x, y); d += (i ? 'L' : 'M') + X.toFixed(1) + ',' + Y.toFixed(1); } return D.tube(d, col, w || 4); },
    /* animal cell outline + cytoplasm */
    cell(cx, cy, rx, ry, o){ o = o || {};
      if (o.pinch){ const p = o.pinch; /* furrow depth 0..1 */ const d = `M${cx},${cy - ry} C${cx + rx * .58},${cy - ry} ${cx + rx},${cy - ry * .55} ${cx + rx},${cy} C${cx + rx},${cy + ry * .55} ${cx + rx * .58},${cy + ry} ${cx},${cy + ry}`;
        const pin = ry * (1 - p * .92);
        const path = `M${cx - rx * .05},${cy - pin} C${cx - rx * .4},${cy - ry * 1.02} ${cx - rx},${cy - ry * .75} ${cx - rx},${cy} C${cx - rx},${cy + ry * .75} ${cx - rx * .4},${cy + ry * 1.02} ${cx - rx * .05},${cy + pin} L${cx + rx * .05},${cy + pin} C${cx + rx * .4},${cy + ry * 1.02} ${cx + rx},${cy + ry * .75} ${cx + rx},${cy} C${cx + rx},${cy - ry * .75} ${cx + rx * .4},${cy - ry * 1.02} ${cx + rx * .05},${cy - pin} Z`;
        return `<path d="${path}" fill="${o.fill || '#fbe7c6'}" stroke="#b9853a" stroke-width="5"/><path d="${path}" fill="none" stroke="#fff" stroke-width="2" opacity=".5" transform="translate(-2 -2)"/>`; }
      return `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="${D.rg(o.fill || '#f7dfb5')}" stroke="#b9853a" stroke-width="5"/>` + D.dots(o.dots || 18, cx - rx * .7, cy - ry * .7, rx * 1.4, ry * 1.4, Math.max(2.5, rx * .025), '#e8b36a', o.seed || 5); },
    /* plant cell (rectangle with wall) */
    plantCell(x, y, w, h, o){ o = o || {}; return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="10" fill="#bfe3a5" stroke="#4f8a2e" stroke-width="10"/><rect x="${x + 9}" y="${y + 9}" width="${w - 18}" height="${h - 18}" rx="6" fill="${D.lg('#e9f7dc')}" stroke="#7fb65c" stroke-width="2"/>`; },
    nucleus(cx, cy, r, o){ o = o || {}; let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${D.rg(o.fill || '#d9c3f0')}" stroke="${o.dashed ? '#7d5aa6' : '#6b4a95'}" stroke-width="${o.dashed ? 3 : 4}" ${o.dashed ? 'stroke-dasharray="10 9"' : ''}/>`;
      if (o.nucleolus !== false) s += D.ball(cx + r * .3, cy - r * .25, r * .2, '#8a5cc2');
      if (o.chromatin){ for (let i = 0; i < 5; i++) s += C.squiggle(cx - r * .45 + i * r * .2, cy + r * .08, r * .8, 20 * i - 40, i % 2 ? R : B, 5 + i, Math.max(2.5, r * .045)); }
      return s; },
    centriole(x, y, s){ s = s || 1; return `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-9" y="-16" width="18" height="32" rx="5" fill="${D.lg('#3fae86')}" stroke="#1f6b51" stroke-width="2"/><rect x="-16" y="-9" width="32" height="18" rx="5" fill="${D.lg('#57c39b')}" stroke="#1f6b51" stroke-width="2"/></g>`; },
    aster(x, y, r, n){ let s = ''; n = n || 14; for (let i = 0; i < n; i++){ const a = i / n * Math.PI * 2; s += D.line(x + Math.cos(a) * 14, y + Math.sin(a) * 14, x + Math.cos(a) * r, y + Math.sin(a) * r, '#4aa37a', 2.2, 'opacity=".75"'); } return s + C.centriole(x, y, .9); },
    fibre(x1, y1, x2, y2, o){ o = o || {}; return `<path d="M${x1},${y1} Q${(x1 + x2) / 2},${(y1 + y2) / 2 + (o.bend || 0)} ${x2},${y2}" stroke="${o.c || '#3f9a74'}" stroke-width="${o.w || 2.4}" fill="none" opacity="${o.op || .8}"/>`; },
    /* spindle between two poles (left/right) */
    spindle(xl, xr, cy, h, n){ let s = ''; n = n || 9; for (let i = 0; i < n; i++){ const t = n === 1 ? .5 : i / (n - 1); const yy = cy - h / 2 + h * t; s += `<path d="M${xl},${cy} Q${(xl + xr) / 2},${yy + (yy - cy) * .55} ${xr},${cy}" stroke="#57a985" stroke-width="2" fill="none" opacity=".55"/>`; } return s; },
    wrapSvg(w, h, body){ return D.svg(w, h, body); }
  };
  window.C = C;
})();
