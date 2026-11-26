#!/usr/bin/env python3
"""Adds PU-I Ch12 to NCERT Diagram MCQs (diagram-mcq.html): NCERT Class XI Fig. 12.3 (citric acid cycle) and
Fig. 12.4 (ETS) with four labels replaced by A-D badges (diagram-mcq-assets/1-12-3.jpg, 1-12-4.jpg) and two questions
on each figure. Idempotent. Run from the repo root: python3 scripts/pu1-ch12/diagram-mcq.py"""
import json, os, re
from PIL import Image, ImageDraw, ImageFont
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(os.path.dirname(HERE)); os.chdir(ROOT)
FONT = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf'

def bg(im, b):
    px = [im.getpixel((x, y)) for x in range(max(0, b[0] - 6), min(im.width, b[2] + 6), 3) for y in (max(0, b[1] - 5), min(im.height - 1, b[3] + 4))]
    return max(set(px), key=px.count)

def label(im, boxes, letter, at=None):
    d = ImageDraw.Draw(im)
    for b in boxes: d.rectangle([b[0] - 4, b[1] - 3, b[2] + 4, b[3] + 3], fill=bg(im, b))
    b = boxes[0]; cx, cy = at or ((b[0] + b[2]) / 2, (b[1] + b[3]) / 2); r = max(20, im.width / 42)
    d.ellipse([cx - r, cy - r, cx + r, cy + r], fill='#111111')
    d.text((cx, cy + 1), letter, font=ImageFont.truetype(FONT, int(r * 1.15)), fill='#ffffff', anchor='mm')

FIGS = {
 '1-12-3': (3, 'The citric acid cycle', [('A', [(551, 370, 733, 427), (732, 371, 1082, 428)], 'Acetyl coenzyme A'), ('B', [(928, 714, 1216, 763)], 'Citric acid'),
            ('C', [(1037, 985, 1566, 1043)], '&alpha;-Ketoglutaric acid'), ('D', [(623, 1416, 1000, 1463)], 'Succinic acid')]),
 '1-12-4': (4, 'Electron transport system (ETS)', [('A', [(470, 268, 572, 295), (440, 296, 660, 317)], 'Complex I (NADH dehydrogenase)'),
            ('B', [(471, 502, 583, 524), (460, 525, 621, 547)], 'Complex III (cytochrome bc<sub>1</sub>)'), ('C', [(493, 888, 608, 915), (465, 918, 638, 936)], 'Complex IV (cytochrome c oxidase)'),
            ('D', [(335, 1009, 401, 1035), (351, 988, 385, 1010)], 'ATP synthase (complex V)')]),
}
for key, (n, title, labs) in FIGS.items():
    im = Image.open(os.path.join(HERE, 'ncert-figs', 'fig-12-%d.jpg' % n)).convert('RGB')
    for L, boxes, _ in labs: label(im, boxes, L)
    if im.width > 820: im = im.resize((820, round(im.height * 820 / im.width)), Image.LANCZOS)
    im.save('diagram-mcq-assets/%s.jpg' % key, quality=86, optimize=True)

D = ' &middot; '
def ex(labs): return D.join('<b>%s</b> &ndash; %s' % (L, t) for L, _, t in labs)
def base(key, n, title): return {'cls': 1, 'ch': 12, 'chTitle': 'Respiration in Plants', 'fig': '12.%d' % n, 'img': key + '.jpg', 'src': 'NCERT Class XI Fig. 12.%d &middot; %s' % (n, title)}
def match_opts(labs, perms):
    names = [t for _, _, t in labs]
    return [', '.join('%s &ndash; %s' % ('ABCD'[i], names[j]) for i, j in enumerate(p)) for p in perms]
Q = []
k3 = FIGS['1-12-3']; labs3 = k3[2]
Q.append(dict(id='1-12-3-m', type='match', q='Identify the parts labelled A, B, C and D in this NCERT diagram (The citric acid cycle).',
  opts=match_opts(labs3, [(0, 2, 1, 3), (0, 1, 2, 3), (1, 0, 2, 3), (3, 1, 2, 0)]), ans=1, explain=ex(labs3), **base('1-12-3', 3, k3[1])))
Q.append(dict(id='1-12-3-f', type='func', q='In this NCERT diagram (The citric acid cycle), identify the part labelled <b>C</b> and its function.',
  opts=['<b>Citric acid</b> &ndash; the 5-carbon acid formed when CO<sub>2</sub> is released', '<b>Succinic acid</b> &ndash; formed first when acetyl CoA joins oxaloacetic acid',
        '<b>&alpha;-Ketoglutaric acid</b> &ndash; 5-carbon acid formed from citric acid with release of CO<sub>2</sub> and NADH', '<b>&alpha;-Ketoglutaric acid</b> &ndash; joins acetyl CoA to start the cycle'],
  ans=2, explain=ex(labs3) + '<br><b>C &ndash; &alpha;-Ketoglutaric acid</b>: oxidative decarboxylation of the 6C acid gives this 5C acid, CO<sub>2</sub> and NADH + H<sup>+</sup>.', **base('1-12-3', 3, k3[1])))
k4 = FIGS['1-12-4']; labs4 = k4[2]
Q.append(dict(id='1-12-4-m', type='match', q='Identify the parts labelled A, B, C and D in this NCERT diagram (Electron transport system).',
  opts=match_opts(labs4, [(1, 0, 2, 3), (0, 2, 1, 3), (3, 1, 2, 0), (0, 1, 2, 3)]), ans=3, explain=ex(labs4), **base('1-12-4', 4, k4[1])))
Q.append(dict(id='1-12-4-f', type='func', q='In this NCERT diagram (Electron transport system), identify the part labelled <b>C</b> and its function.',
  opts=['<b>Complex IV (cytochrome c oxidase)</b> &ndash; passes electrons to O<sub>2</sub>, the final acceptor, forming water', '<b>Complex III (cytochrome bc<sub>1</sub>)</b> &ndash; passes electrons to O<sub>2</sub>, forming water',
        '<b>Complex IV (cytochrome c oxidase)</b> &ndash; oxidises succinate to fumarate', '<b>ATP synthase</b> &ndash; passes electrons to O<sub>2</sub>, forming water'],
  ans=0, explain=ex(labs4) + '<br><b>C &ndash; Complex IV</b>: contains cytochromes a and a<sub>3</sub> and two copper centres; O<sub>2</sub> accepts the electrons and H<sub>2</sub>O forms.', **base('1-12-4', 4, k4[1])))

p = 'diagram-mcq.html'; s = open(p, encoding='utf-8').read()
if '"id":"1-12-3-m"' in s: print('diagram-mcq: already has Ch12'); raise SystemExit
js = ','.join(json.dumps(q, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/') for q in Q) + ','
i = s.index('{"id":"1-14-1-m"'); s = s[:i] + js + s[i:]
open(p, 'w', encoding='utf-8').write(s); print('diagram-mcq: +', len(Q))
