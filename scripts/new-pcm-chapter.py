#!/usr/bin/env python3
"""Make a PCM chapter page from that subject's Chapter 1 page and link it on pcm.html + offline pack.
Usage: python3 scripts/new-pcm-chapter.py pu2 phy 3 "Current Electricity" 💡
The data file subject-apps/<id>-data.js must already exist."""
import re, sys
yr, sub, ch, title, icon = sys.argv[1], sys.argv[2], int(sys.argv[3]), sys.argv[4], sys.argv[5]
src, dst = f'{yr}-{sub}-ch1.html', f'{yr}-{sub}-ch{ch}.html'
s = open(src, encoding='utf-8').read()
old_title = re.search(r'<title>Chapter 1: (.*?) — ', s).group(1)
old_icon = s.split('<span class="ic">')[1].split('<')[0]
s = s.replace(f'Chapter 1: {old_title}', f'Chapter {ch}: {title}').replace(f'Chapter 1 ({old_title})', f'Chapter {ch} ({title})')
s = s.replace(f'<span class="ic">{old_icon}</span>', f'<span class="ic">{icon}</span>')
s = re.sub(r'(· Chapter )1(</footer>)', rf'\g<1>{ch}\2', s)
s = s.replace(f'subject-apps/{yr}-{sub}-ch1-data.js?v=1', f'subject-apps/{yr}-{sub}-ch{ch}-data.js?v=1')
s = re.sub(rf'<script src="subject-apps/{yr}-{sub}-ch1-easy[^"]*"></script>\n', '', s)
assert f'Chapter {ch}: {title}' in s and f'{yr}-{sub}-ch{ch}-data.js' in s and f'Chapter {ch}</footer>' in s
open(dst, 'w', encoding='utf-8').write(s)
p = 'pcm.html'; c = open(p, encoding='utf-8').read()
plain = "'" + title.replace("'", "\\'") + "'"
start = c.index(yr + ':['); row = c.index("{k:'" + sub + "'", start); end = c.index('\n', row)
line = c[row:end]
assert plain in line and ('[' + plain) not in line, 'title not found (or already linked) in ' + yr + ' ' + sub + ': ' + title
c = c[:row] + line.replace(plain, '[' + plain + ",'" + dst + "']", 1) + c[end:]
open(p, 'w', encoding='utf-8').write(c)
m = 'scripts/build-offline-manifest.py'; t = open(m).read()
anchor = "'pu2-maths-colour-notes.html'"
if dst not in t:
    t = t.replace(anchor, f"'{dst}', " + anchor, 1); open(m, 'w').write(t)
print('made', dst)
