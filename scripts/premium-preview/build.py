"""Build preview images for the home "Premium Notes" sheet (index.html → premium/preview.js).

For every chapter with paid notes it writes, under premium/preview/:
  hw-<chapter>-1.jpg, hw-<chapter>-2.jpg  first two pages of the handwritten-notes PDF, 900 px wide
  mm-<chapter>.jpg                         the mind map scaled down to 1000 px wide (the HD map stays paid)
Every generated image has a diagonal "BAIO · PREVIEW" mark baked in, so the file itself is marked even if
someone opens its URL. Colour-notes pages and class slides are already free to view in the chapter pages,
so they are referenced as they are. Writes premium/preview-data.js with the list per chapter.

Run: <venv>/bin/python -I scripts/premium-preview/build.py   (needs PyMuPDF and Pillow)
"""
import io, json, math, os, re, sys
import fitz
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
OUT = os.path.join(ROOT, 'premium', 'preview')
os.makedirs(OUT, exist_ok=True)

def load_js(path, var):
    s = open(os.path.join(ROOT, path), encoding='utf-8').read()
    m = re.search(r'window\.' + var + r'\s*=\s*(\{.*\})\s*;?\s*$', s, re.S)
    return json.loads(m.group(1))

STORE = load_js('store/store-data.js', 'STORE_DATA')
HWN = load_js('handwritten-notes/hw-data.js', 'HWN')
MM = load_js('mind-maps/mm-data.js', 'MM')

FONT = None
for f in ['/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf', '/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf']:
    if os.path.exists(f): FONT = f; break

def mark(im):
    """Tile a soft diagonal 'BAIO · PREVIEW' over the image."""
    im = im.convert('RGB'); W, H = im.size
    layer = Image.new('RGBA', (W * 2, H * 2), (0, 0, 0, 0)); d = ImageDraw.Draw(layer)
    fz = max(22, W // 22); font = ImageFont.truetype(FONT, fz) if FONT else ImageFont.load_default()
    text = 'BAIO · PREVIEW · Narendra Sir'
    tw = d.textlength(text, font=font)
    for y in range(0, H * 2, int(fz * 4.2)):
        off = (y // int(fz * 4.2)) % 2 * tw / 2
        x = -off
        while x < W * 2:
            d.text((x, y), text, font=font, fill=(120, 120, 120, 70)); x += tw + fz * 2
    layer = layer.rotate(28, resample=Image.BICUBIC)
    l, t = (layer.width - W) // 2, (layer.height - H) // 2
    im.paste(layer.crop((l, t, l + W, t + H)), (0, 0), layer.crop((l, t, l + W, t + H)))
    return im

def save(im, name):
    p = os.path.join(OUT, name); im.save(p, 'JPEG', quality=78, optimize=True, progressive=True); return 'premium/preview/' + name

def base_of(cid):
    h = STORE['ch'][cid].get('h') or ''
    return h + 'assets/' if h.endswith('/') else cid + '-assets/'

data = {}
for cid, c in STORE['ch'].items():
    if not c.get('h'): continue
    e = {}
    if cid in HWN:
        doc = fitz.open(os.path.join(ROOT, HWN[cid]['f'])); e['hw'] = []; e['hwN'] = doc.page_count
        for i in range(min(2, doc.page_count)):
            pg = doc[i]; z = 900 / pg.rect.width
            pix = pg.get_pixmap(matrix=fitz.Matrix(z, z))
            im = Image.open(io.BytesIO(pix.tobytes('png')))
            e['hw'].append(save(mark(im), 'hw-%s-%d.jpg' % (cid, i + 1)))
    if MM.get(cid):
        src = Image.open(os.path.join(ROOT, MM[cid][0]['f'])); w = 1000
        im = src.convert('RGB').resize((w, round(src.height * w / src.width)), Image.LANCZOS)
        e['mm'] = save(mark(im), 'mm-%s.jpg' % cid)
    b = base_of(cid)
    cn = [b + 'colour-notes/page-%02d.jpg' % i for i in (1, 2) if os.path.exists(os.path.join(ROOT, b, 'colour-notes/page-%02d.jpg' % i))]
    if cn and c.get('cn'): e['cn'] = cn
    sl = [b + 'slide-%02d.jpg' % i for i in (1, 2) if os.path.exists(os.path.join(ROOT, b, 'slide-%02d.jpg' % i))]
    if sl: e['sl'] = sl
    if e: data[cid] = e

with open(os.path.join(ROOT, 'premium', 'preview-data.js'), 'w', encoding='utf-8') as f:
    f.write('/* Preview images for the home Premium Notes sheet. Built by scripts/premium-preview/build.py; do not edit by hand.\n'
            '   chapter -> {hw: first handwritten pages, hwN: total pages, mm: small mind map, cn: colour-notes pages, sl: class slides} */\n')
    f.write('window.PREM_PREVIEW = ' + json.dumps(data, separators=(',', ':')) + ';\n')
print(len(data), 'chapters;', len(os.listdir(OUT)), 'images')
