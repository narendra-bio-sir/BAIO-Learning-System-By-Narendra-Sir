/* BAIO Notes slides — SVG drawing helpers (hand-painted textbook look).
   Every diagram is built from these: glossy balls, gradient blobs, white callout labels with arrows. */
(function(){
  const cv = document.createElement('canvas').getContext('2d');
  function hx(h){ const n = parseInt(h.slice(1), 16); return [n >> 16 & 255, n >> 8 & 255, n & 255]; }
  function mix(h, t, a){ const A = hx(h), B = hx(t); return '#' + A.map((v, i) => Math.round(v + (B[i] - v) * a).toString(16).padStart(2, '0')).join(''); }
  const lt = (h, a) => mix(h, '#ffffff', a), dk = (h, a) => mix(h, '#000000', a);
  const D = {
    defs: {}, FONT: "'Patrick Hand','Kalam',sans-serif", HEAD: "'Kalam','Patrick Hand',sans-serif",
    lt, dk,
    // radial "glossy" gradient
    rg(c){ const id = 'rg' + c.slice(1); this.defs[id] = `<radialGradient id="${id}" cx=".5" cy=".5" r=".62" fx=".34" fy=".28"><stop offset="0" stop-color="${lt(c, .82)}"/><stop offset=".22" stop-color="${lt(c, .4)}"/><stop offset=".62" stop-color="${c}"/><stop offset=".9" stop-color="${dk(c, .28)}"/><stop offset="1" stop-color="${dk(c, .4)}"/></radialGradient>`; return `url(#${id})`; },
    // linear top→bottom gradient
    lg(c, v){ const id = 'lg' + (v ? 'h' : '') + c.slice(1); this.defs[id] = `<linearGradient id="${id}" x1="0" y1="0" x2="${v ? 1 : 0}" y2="${v ? 0 : 1}"><stop offset="0" stop-color="${lt(c, .3)}"/><stop offset=".22" stop-color="${lt(c, .62)}"/><stop offset=".45" stop-color="${c}"/><stop offset=".85" stop-color="${dk(c, .22)}"/><stop offset="1" stop-color="${dk(c, .38)}"/></linearGradient>`; return `url(#${id})`; },
    // 3D tube along a path (ER, Golgi, chromatin, filaments)
    tube(d, c, w, ex){ const o = (k) => `transform="translate(${-w * k} ${-w * k})"`;
      return `<g ${ex || ''}><path d="${d}" stroke="${dk(c, .45)}" stroke-width="${w}" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" stroke="${c}" stroke-width="${w * .74}" fill="none" stroke-linecap="round" stroke-linejoin="round"/><path d="${d}" stroke="${lt(c, .4)}" stroke-width="${w * .42}" fill="none" stroke-linecap="round" stroke-linejoin="round" ${o(.1)}/><path d="${d}" stroke="#fff" stroke-width="${w * .14}" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity=".55" ${o(.18)}/></g>`; },
    // flat 3D coin (thylakoid, disc)
    coin(x, y, rx, ry, h, c){ return `<path d="M${x - rx},${y} v${h} a${rx},${ry} 0 0 0 ${rx * 2},0 v${-h} z" fill="${this.lg(c, 1)}" stroke="${dk(c, .45)}" stroke-width="1.2"/><ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${lt(c, .35)}" stroke="${dk(c, .4)}" stroke-width="1.2"/><ellipse cx="${x - rx * .3}" cy="${y - ry * .2}" rx="${rx * .35}" ry="${ry * .35}" fill="#fff" opacity=".35"/>`; },
    ball(x, y, r, c, ex){ return `<circle cx="${x}" cy="${y}" r="${r}" fill="${this.rg(c)}" stroke="${dk(c, .4)}" stroke-width="${Math.max(.6, r / 11)}" ${ex || ''}/>` + (r > 5 ? `<ellipse cx="${x - r * .36}" cy="${y - r * .42}" rx="${r * .26}" ry="${r * .16}" fill="#fff" opacity=".7" transform="rotate(-30 ${x - r * .36} ${y - r * .42})"/>` : ''); },
    shine(x, y, rx, ry){ return `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="#fff" opacity=".45"/>`; },
    path(d, c, o){ o = o || {}; return `<path d="${d}" fill="${o.flat ? c : (o.v ? this.lg(c, 1) : this.rg(c))}" stroke="${o.st || dk(c, .35)}" stroke-width="${o.sw || 2}" stroke-linejoin="round" ${o.ex || ''}/>`; },
    line(x1, y1, x2, y2, c, w, ex){ return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w || 2}" stroke-linecap="round" ${ex || ''}/>`; },
    text(x, y, t, o){ o = o || {}; return `<g data-l="1"><text x="${x}" y="${y}" font-family="${o.head ? this.HEAD : this.FONT}" font-size="${o.fs || 20}" font-weight="${o.b ? 700 : 400}" fill="${o.c || '#222'}" text-anchor="${o.a || 'middle'}" ${o.ex || ''}>${String(t).split('\n').map((l, i) => `<tspan x="${x}" dy="${i ? (o.fs || 20) * 1.15 : 0}">${l}</tspan>`).join('')}</text></g>`; },
    arrow(x1, y1, x2, y2, c, w){ c = c || '#1b1b1b'; const id = 'ah' + c.slice(1); this.defs[id] = `<marker id="${id}" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="${c}"/></marker>`;
      return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w || 3}" stroke-linecap="round" marker-end="url(#${id})"/>`; },
    // white rounded label box (centre x,y) with an arrow to (tx,ty). txt lines split by \n.
    label(x, y, txt, tx, ty, o){ o = o || {}; const fs = o.fs || 19, L = String(txt).split('\n'); cv.font = `${fs}px ${this.FONT}`;
      const w = Math.max(...L.map(l => cv.measureText(l.replace(/<[^>]+>/g, '')).width)) + fs * 1.1, h = L.length * fs * 1.12 + fs * .62;
      let s = '<g data-l="1">';
      if (tx != null){ const dx = tx - x, dy = ty - y; let sx, sy;
        if (Math.abs(dx) / (w / 2) > Math.abs(dy) / (h / 2)){ sx = x + Math.sign(dx) * w / 2; sy = y; } else { sx = x; sy = y + Math.sign(dy) * h / 2; }
        s += this.arrow(sx, sy, tx, ty, '#1b1b1b', o.aw || 2.6); }
      s += `<rect x="${x - w / 2}" y="${y - h / 2}" width="${w}" height="${h}" rx="${fs * .45}" fill="${o.bg || '#fff'}" stroke="#2a2a2a" stroke-width="1.8"/>`;
      s += `<text font-family="${this.FONT}" font-size="${fs}" fill="#1b1b1b" text-anchor="middle">${L.map((l, i) => `<tspan x="${x}" y="${y - h / 2 + fs * .31 + fs * .9 + i * fs * 1.12}">${l}</tspan>`).join('')}</text>`;
      return s + '</g>'; },
    // little leaf (for header decoration)
    leaf(x, y, s, rot){ const c = '#5fae3c'; return `<g transform="translate(${x} ${y}) rotate(${rot || 0}) scale(${s || 1})"><path d="M0,0 C8,-22 30,-26 40,-30 C36,-14 26,4 0,0 Z" fill="${this.lg(c)}" stroke="${dk(c, .35)}" stroke-width="1.6"/><path d="M0,0 C14,-10 26,-18 38,-28" stroke="${dk(c, .4)}" stroke-width="1.2" fill="none"/></g>`; },
    sprig(x, y, s, rot){ return `<g transform="translate(${x} ${y}) rotate(${rot || 0}) scale(${s || 1})"><path d="M0,40 C4,20 6,8 4,-10" stroke="#4d8f2e" stroke-width="2.4" fill="none"/>${this.leaf(3, 6, .7, -150)}${this.leaf(4, 18, .75, -20)}${this.leaf(4, -8, .8, -70)}</g>`; },
    // painted look: drawing layer gets paper-grain texture + soft shadow; labels stay crisp on top
    svg(vw, vh, body, ex){ this.defs = {}; let b = typeof body === 'function' ? body() : body; const fid = 'pt' + (++this.n);
      const L = []; b = b.replace(/<g data-l="1">[\s\S]*?<\/g>/g, m => { L.push(m); return ''; });
      const k = Math.max(vw, vh) / 600, f = `<filter id="${fid}" filterUnits="userSpaceOnUse" x="0" y="0" width="${vw}" height="${vh}" color-interpolation-filters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="${(.75 / k).toFixed(3)}" numOctaves="3" seed="${this.n}" result="n"/><feColorMatrix in="n" type="saturate" values="0" result="g"/>
        <feBlend in="SourceGraphic" in2="g" mode="soft-light" result="b"/><feComposite in="b" in2="SourceGraphic" operator="in" result="c"/>
        <feComposite in="c" in2="SourceGraphic" operator="arithmetic" k1="0" k2=".76" k3=".24" k4="0" result="t"/>
        <feGaussianBlur in="SourceAlpha" stdDeviation="${3 * k}"/><feOffset dx="${1.5 * k}" dy="${3.5 * k}" result="o"/><feComponentTransfer in="o" result="s"><feFuncA type="linear" slope=".28"/></feComponentTransfer>
        <feMerge><feMergeNode in="s"/><feMergeNode in="t"/></feMerge></filter>`;
      return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vw} ${vh}" preserveAspectRatio="xMidYMid meet" ${ex || ''}><defs>${f}${Object.values(this.defs).join('')}</defs><g filter="url(#${fid})">${b}</g>${L.join('')}</svg>`; },
    n: 0,
    // repeated helpers used by several diagrams
    dots(n, x0, y0, w, h, r, c, seed){ let s = '', k = seed || 7; const R = () => (k = (k * 9301 + 49297) % 233280) / 233280; for (let i = 0; i < n; i++) s += this.ball(x0 + R() * w, y0 + R() * h, r, c); return s; },
    rnd(seed){ let k = seed || 11; return () => (k = (k * 9301 + 49297) % 233280) / 233280; }
  };
  window.D = D;
})();
