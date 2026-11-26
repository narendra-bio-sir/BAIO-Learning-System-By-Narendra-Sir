/* Measures each SCENE's drawn bounding box and writes vis.js (V[name](lang) → cropped <svg>). node make-vis.js */
const { chromium } = require('playwright'); const fs = require('fs'), path = require('path');
(async () => {
  const srv = require('./serve.js')();
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1600, height: 1000 } });
  await p.goto(srv.url + 'scripts/pu1-ch12/harness.html'); await p.evaluate(() => document.fonts.ready);
  const crop = await p.evaluate(() => { const out = {};
    for (const n of Object.keys(SCENE)){ let box = null;
      for (const L of ['en', 'kn', 'hi']){ P.L = L; const o = document.getElementById('out'); o.innerHTML = D.svg(1600, 1000, () => SCENE[n]()).replace('<svg', '<svg width="1600" height="1000"');
        const bb = o.querySelector('svg').getBBox(); const r = [bb.x, bb.y, bb.x + bb.width, bb.y + bb.height];
        box = box ? [Math.min(box[0], r[0]), Math.min(box[1], r[1]), Math.max(box[2], r[2]), Math.max(box[3], r[3])] : r; }
      const pad = 24, x = Math.max(0, Math.floor(box[0] - pad)), y = Math.max(0, Math.floor(box[1] - pad)), x2 = Math.min(1600, Math.ceil(box[2] + pad)), y2 = Math.min(1000, Math.ceil(box[3] + pad));
      out[n] = [x, y, x2 - x, y2 - y]; }
    return out; });
  const js = `/* pictures used on slides, colour notes, worksheets and handwritten notes (needs draw.js, ps-draw.js, diagrams.js).
   V[name](lang) returns an <svg> of SCENE[name], cropped to the drawing. Crop boxes are measured by make-vis.js. */
window.V = {};
const CROP = ${JSON.stringify(crop)};
Object.keys(CROP).forEach(n => { V[n] = (lang) => { P.L = lang || 'en'; const [x, y, w, h] = CROP[n]; return D.svg(1600, 1000, () => SCENE[n]()).replace('viewBox="0 0 1600 1000"', \`viewBox="\${x} \${y} \${w} \${h}"\`); }; });
`;
  fs.writeFileSync(path.join(__dirname, 'vis.js'), js); console.log(crop);
  await b.close(); srv.close();
})();
