#!/usr/bin/env python3
"""Figures for the Ch12 diagram-based KCET questions: NCERT Class XI Fig. 12.1-12.6 (ncert-figs/) with the
answer label hidden under a red "?" (like the Ch11 diagram questions). Writes diagram-q-assets/pu1-ch12-*.jpg and
kcet-figs.json (question start -> img, caption, size), which build.js attaches to KCET_QUESTIONS.
Needs Pillow. Run from the repo root: python3 scripts/pu1-ch12/kcet-figs.py  (then node scripts/pu1-ch12/kcet-figs.js
for the two drawn figures, then node scripts/pu1-ch12/build.js)."""
import json, os, hashlib
from PIL import Image, ImageDraw, ImageFont
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(os.path.dirname(HERE))
OUT = os.path.join(ROOT, 'diagram-q-assets'); FONT = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'

def bg(im, box):
    """most common colour just outside the box = the label's background"""
    x0, y0, x1, y1 = box; px = []
    for x in range(max(0, x0 - 6), min(im.width, x1 + 6), 3):
        for y in (max(0, y0 - 5), min(im.height - 1, y1 + 4)): px.append(im.getpixel((x, y)))
    return max(set(px), key=px.count)

def mask(im, boxes, mark=True):
    d = ImageDraw.Draw(im); X0 = min(b[0] for b in boxes); Y0 = min(b[1] for b in boxes); X1 = max(b[2] for b in boxes); Y1 = max(b[3] for b in boxes)
    for b in boxes: d.rectangle([b[0] - 4, b[1] - 3, b[2] + 4, b[3] + 3], fill=bg(im, b))
    if mark:
        h = Y1 - Y0; r = max(22, min(h, X1 - X0) * .62); cx, cy = (X0 + X1) / 2, (Y0 + Y1) / 2
        d.ellipse([cx - r, cy - r, cx + r, cy + r], fill='#ffffff', outline='#d0342c', width=max(3, int(r / 8)))
        f = ImageFont.truetype(FONT, int(r * 1.45)); d.text((cx, cy + r * .04), '?', font=f, fill='#d0342c', anchor='mm')

# question start -> (figure, boxes to hide, crop (x0,y0,x1,y1) or None, caption)
F = {
 'In this part of NCERT Fig. 12.1 (glycolysis), the 6C sugar': (1, [(81, 715, 745, 770), (362, 767, 467, 819)], (0, 60, 1434, 1150), 'NCERT Class XI Fig. 12.1 · Steps of glycolysis (part)'),
 'In this part of NCERT Fig. 12.1, the molecule marked ?': (1, [(88, 2090, 228, 2176)], (0, 1560, 1434, 2600), 'NCERT Class XI Fig. 12.1 · Steps of glycolysis (part)'),
 'In NCERT Fig. 12.2, the products marked ?': (2, [(527, 834, 768, 877)], None, 'NCERT Class XI Fig. 12.2 · Major pathways of anaerobic respiration'),
 'In NCERT Fig. 12.2, the product marked ?': (2, [(532, 251, 650, 289), (532, 292, 650, 336)], None, 'NCERT Class XI Fig. 12.2 · Major pathways of anaerobic respiration'),
 'In NCERT Fig. 12.3, the 5-carbon acid marked ?': (3, [(1037, 985, 1566, 1043)], None, 'NCERT Class XI Fig. 12.3 · The citric acid cycle'),
 'In NCERT Fig. 12.3, the reduced coenzyme marked ?': (3, [(109, 1300, 301, 1364)], None, 'NCERT Class XI Fig. 12.3 · The citric acid cycle'),
 'In NCERT Fig. 12.4, protons flow back': (4, [(244, 970, 275, 998)], None, 'NCERT Class XI Fig. 12.4 · Electron transport system (ETS)'),
 'In NCERT Fig. 12.4, the complex marked ?': (4, [(366, 654, 394, 680)], None, 'NCERT Class XI Fig. 12.4 · Electron transport system (ETS)'),
 'In NCERT Fig. 12.6, fatty acids enter': (6, [(750, 764, 914, 797)], None, 'NCERT Class XI Fig. 12.6 · Interrelationship among metabolic pathways'),
 'In NCERT Fig. 12.6, amino acids from proteins': (6, [(748, 690, 931, 722)], None, 'NCERT Class XI Fig. 12.6 · Interrelationship among metabolic pathways'),
}
# labels hidden without a ? mark (the ? goes on the shape instead)
EXTRA = {'In NCERT Fig. 12.4, the complex marked ?': [(437, 599, 640, 644)]}
os.makedirs(OUT, exist_ok=True); meta = {}
for q, (n, boxes, crop, cap) in F.items():
    im = Image.open(os.path.join(HERE, 'ncert-figs', 'fig-12-%d.jpg' % n)).convert('RGB')
    for b in EXTRA.get(q, []): mask(im, [tuple(b)], mark=False)
    mask(im, boxes)
    if crop: im = im.crop(crop)
    if im.width > 1000: im = im.resize((1000, round(im.height * 1000 / im.width)), Image.LANCZOS)
    name = 'pu1-ch12-xi-12-%d-%s.jpg' % (n, hashlib.md5(q.encode()).hexdigest()[:6])
    im.save(os.path.join(OUT, name), quality=86, optimize=True)
    meta[q] = {'img': 'diagram-q-assets/' + name, 'imgCap': cap, 'imgW': im.width, 'imgH': im.height}
jp = os.path.join(HERE, 'kcet-figs.json')
old = json.load(open(jp)) if os.path.exists(jp) else {}
old.update(meta); json.dump(old, open(jp, 'w'), ensure_ascii=False, indent=1)
print(len(meta), 'NCERT figures')
