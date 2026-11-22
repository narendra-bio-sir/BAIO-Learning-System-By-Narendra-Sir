/* Builds one-page mind map images (2400 px wide JPG) for the II PUC chapters
   that only had a text-box mind map, in the same look as the I PUC maps
   (scripts/pu1-ch10/mindmap.html).

   Input : scripts/mind-maps/pu2-boxes.json  (made by extract.js from the chapter pages)
           scripts/mind-maps/authored-boxes.json (II PUC Ch 4 and Ch 9, written from NCERT)
   Output: mind-maps/pu2-ch<N>.jpg (Ch 4 and Ch 9: over the old map in the chapter's own assets)

   Run:  NODE_PATH=<global node_modules with playwright> node scripts/mind-maps/build.js [pu2-ch1 ...]
*/
const {chromium} = require('playwright');
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const DATA = Object.assign(JSON.parse(fs.readFileSync(path.join(__dirname, 'pu2-boxes.json'), 'utf8')),
  JSON.parse(fs.readFileSync(path.join(__dirname, 'authored-boxes.json'), 'utf8')));   /* written from NCERT for chapters whose old map was hand-drawn */
/* these replace the old hand-drawn map at the same path, so the chapter page, the PPT generator and mind-maps.html all pick them up */
const OUT = {'pu2-ch4': 'pu2-ch4-assets/mindmap.jpg', 'pu2-ch9': 'ch9/assets/mindmap.jpg'};
const CH = {
  'pu2-ch1': ['Sexual Reproduction in Flowering Plants', '🌸'], 'pu2-ch2': ['Human Reproduction', '👶'],
  'pu2-ch3': ['Reproductive Health', '🏥'], 'pu2-ch4': ['Principles of Inheritance and Variation', '🧬'], 'pu2-ch5': ['Molecular Basis of Inheritance', '🧬'],
  'pu2-ch6': ['Evolution', '🐒'], 'pu2-ch7': ['Human Health and Disease', '🦠'],
  'pu2-ch8': ['Microbes in Human Welfare', '🧫'], 'pu2-ch9': ['Biotechnology: Principles and Processes', '✂️'], 'pu2-ch10': ['Biotechnology and its Applications', '💉'],
  'pu2-ch11': ['Organisms and Populations', '🦁'], 'pu2-ch12': ['Ecosystem', '🌳'],
  'pu2-ch13': ['Biodiversity and Conservation', '🦋']
};
const COLORS = ['#0e7f71', '#9a730f', '#6c48d6', '#c24f28', '#1f6fb0', '#2f7d32'];
/* rows: [top, [left, right] beside the hub, bottom] */
const LAYOUT = {5: [3, [0, 0], 2], 6: [3, [0, 0], 3], 7: [3, [1, 1], 2], 8: [3, [1, 1], 3], 9: [4, [1, 1], 3], 10: [4, [1, 1], 4]};
const ACR = ['DNA', 'RNA', 'tRNA', 'mRNA', 'HGP', 'RCH', 'MTP', 'IUD', 'IUDs', 'STD', 'STI', 'AIDS', 'HIV', 'GM', 'RNAi', 'GEAC', 'Bt', 'BOD'];

function cleanTitle(t){
  t = t.replace(/^\s*\d+\s*(\.|&middot;|·)\s*/, '').trim();
  const plain = t.replace(/&[a-z]+;/g, '');
  if(/[a-z]/.test(plain.replace(/tRNA|mRNA|RNAi/g, ''))) return t;          /* already mixed case */
  return t.split(' ').map((w, i) => {                                         /* ALL CAPS → Title Case */
    const a = ACR.find(x => x.toUpperCase() === w.toUpperCase()); if(a) return a;
    if(i && /^(OF|AND|THE|IN|ON|TO|FOR)$/.test(w)) return w.toLowerCase();
    return w.split('-').map(p => p.charAt(0) + p.slice(1).toLowerCase()).join('-');
  }).join(' ');
}

function page(id){
  const n = id.split('-ch')[1], [name, icon] = CH[id], boxes = DATA[id];
  const L = LAYOUT[boxes.length]; if(!L) throw new Error(id + ': no layout for ' + boxes.length + ' boxes');
  const [top, [ml, mr], bot] = L, span = k => 12 / k;
  let i = 0, cells = [];
  const card = (row, col, w) => { const b = boxes[i], c = COLORS[i % COLORS.length]; i++;
    cells.push(`<div class="card" style="grid-row:${row};grid-column:${col} / span ${w};--c:${c}" data-row="${row}"><div class="hd"><b>${i}</b><span>${cleanTitle(b.title)}</span></div><ul>${b.pts.map(p => `<li>${p}</li>`).join('')}</ul></div>`); };
  for(let k = 0; k < top; k++) card(1, 1 + k * span(top), span(top));
  const side = span(top);
  if(ml) card(2, 1, side);
  const hubCol = ml ? 1 + side : 1, hubSpan = ml ? 12 - 2 * side : 12;
  cells.push(`<div class="hubcell" style="grid-row:2;grid-column:${hubCol} / span ${hubSpan}"><div class="hub" id="hub"><div class="i">${icon}</div><div class="t">${name}</div><div class="s">${boxes.length} topics · Board · NEET · KCET</div></div></div>`);
  if(mr) card(2, 13 - side, side);
  for(let k = 0; k < bot; k++) card(3, 1 + k * span(bot), span(bot));
  const big = name.length > 30;
  return `<!doctype html><html><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700;800&display=swap" rel="stylesheet">
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{width:2400px;background:#f6f3ea;font-family:Inter,'Noto Color Emoji',sans-serif;color:#1b2333;position:relative;padding:42px 60px 90px}
.kick{font:800 23px Inter;letter-spacing:5px;color:#9a7417}
.top{display:flex;justify-content:space-between;align-items:flex-end;gap:40px;margin-top:10px}
h1{flex:1;min-width:0;font:800 ${big ? 60 : 66}px/1.1 Inter;letter-spacing:-1.5px;color:#15203a}
h1 em{font-style:normal;color:#0d7f70}
.by{text-align:right;font:700 28px Inter;color:#9a7417;white-space:nowrap}.by span{display:block;font:500 23px Inter;color:#5d6577;margin-top:4px}
.grid{position:relative;display:grid;grid-template-columns:repeat(12,1fr);column-gap:60px;row-gap:80px;margin-top:44px;align-items:stretch}
.card{position:relative;z-index:2;background:#fff;border-radius:22px;border:2px solid #e3dccb;box-shadow:0 4px 0 rgba(0,0,0,.04);overflow:hidden}
.card[data-row="2"]{align-self:center}
.card .hd{display:flex;align-items:center;gap:16px;padding:16px 24px;color:#fff;font:800 31px/1.2 Inter;background:var(--c)}
.card .hd b{flex:0 0 42px;width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.25);display:flex;align-items:center;justify-content:center;font:800 24px Inter}
.card ul{list-style:none;padding:18px 24px 22px}
.card li{position:relative;padding-left:26px;font:500 21.5px/1.45 Inter;color:#1d2433;margin-top:8px}
.card li:first-child{margin-top:0}
.card li::before{content:'';position:absolute;left:2px;top:12px;width:10px;height:10px;border-radius:50%;background:var(--c)}
.card li b,.card li strong{color:#0f1a30}
.hubcell{position:relative;z-index:3;display:flex;align-items:center;justify-content:center;min-height:400px}
.hub{width:360px;height:360px;border-radius:50%;background:radial-gradient(circle at 38% 32%,#3fd3bd,#0f8f7e 70%,#0a6f62);box-shadow:0 0 0 26px rgba(214,206,170,.35);display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-align:center;padding:30px}
.hub .i{font-size:64px}.hub .t{font:800 ${name.length > 28 ? 32 : 40}px/1.12 Inter;margin-top:6px}.hub .s{font:600 20px Inter;opacity:.92;margin-top:10px}
svg{position:absolute;left:0;top:0;z-index:1;overflow:visible}
.ft{position:absolute;bottom:30px;font:500 21px Inter;color:#6b7280}.ft.l{left:60px}.ft.r{right:60px;color:#9a7417;font-weight:700}.ft.r span{color:#6b7280;font-weight:500}
</style></head><body>
<div class="kick">PU-II BIOLOGY · CHAPTER ${n} · ONE-PAGE MIND MAP</div>
<div class="top"><h1>${name} — <em>the whole chapter at a glance</em></h1><div class="by">Narendra Sir<span>Biology Lecturer · Founder/CEO, BAIO</span></div></div>
<div class="grid" id="grid"><svg id="lines"></svg>${cells.join('')}</div>
<div class="ft l">BAIO Learning System · PU-II Ch ${n} (NCERT Class XII)</div><div class="ft r">BAIO Learning System <span>· Narendra Sir</span></div>
<script>
function draw(){
const h1=document.querySelector('h1'),by=document.querySelector('.by');let fs=parseFloat(getComputedStyle(h1).fontSize);
while(h1.scrollHeight>fs*1.25&&fs>40){fs-=2;h1.style.fontSize=fs+'px';}
const g=document.getElementById('grid'),G=g.getBoundingClientRect(),hub=document.getElementById('hub').getBoundingClientRect(),svg=document.getElementById('lines');
svg.setAttribute('width',G.width);svg.setAttribute('height',G.height);
const hx=hub.left+hub.width/2-G.left,hy=hub.top+hub.height/2-G.top;let s='';
document.querySelectorAll('.card').forEach(c=>{const r=c.getBoundingClientRect(),row=+c.dataset.row,col=getComputedStyle(c).getPropertyValue('--c');
  let x,y; if(row===1){x=r.left+r.width/2;y=r.bottom;} else if(row===3){x=r.left+r.width/2;y=r.top;} else {x=r.left+r.width/2<hx+G.left?r.right:r.left;y=r.top+r.height/2;}
  x-=G.left;y-=G.top; const mx=(x+hx)/2,my=row===2?y:(y+hy)/2;
  s+='<path d="M'+hx+' '+hy+' Q'+(row===2?mx:x)+' '+my+' '+x+' '+y+'" fill="none" stroke="'+col+'" stroke-width="5" stroke-opacity=".5"/><circle cx="'+x+'" cy="'+y+'" r="8" fill="'+col+'"/>';});
svg.innerHTML=s;
}
</script></body></html>`;
}

(async () => {
  const want = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(CH);
  const b = await chromium.launch();
  for(const id of want){
    const p = await b.newPage({viewport: {width: 2400, height: 1200}, deviceScaleFactor: 1});
    await p.setContent(page(id), {waitUntil: 'networkidle'});
    await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(200); await p.evaluate(() => draw()); await p.waitForTimeout(100);
    const out = path.join(ROOT, OUT[id] || path.join('mind-maps', id + '.jpg'));
    await p.screenshot({path: out, fullPage: true, type: 'jpeg', quality: 86});
    const h = await p.evaluate(() => document.documentElement.scrollHeight);
    console.log(id, '2400x' + h, Math.round(fs.statSync(out).size / 1024) + ' KB'); await p.close();
  }
  await b.close();
})();
