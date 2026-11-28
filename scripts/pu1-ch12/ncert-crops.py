"""Crops of NCERT Class XI Fig. 12.1 and 12.3 (ncert-figs/) for the slide diagram panels.
fig-12-1a: energy-investment steps, 12-1b: the oxidation step (NADH), 12-1c: energy-payoff steps, 12-3a: link reaction."""
import os
from PIL import Image
HERE = os.path.dirname(os.path.abspath(__file__)); D = os.path.join(HERE, 'ncert-figs')
CROPS = {'fig-12-1a': ('fig-12-1', (0, 0, 1434, 1085)), 'fig-12-1b': ('fig-12-1', (0, 880, 1434, 1420)),
         'fig-12-1c': ('fig-12-1', (0, 1195, 1434, 2795)), 'fig-12-3a': ('fig-12-3', (380, 0, 1300, 560))}
for out, (src, box) in CROPS.items():
    Image.open(os.path.join(D, src + '.jpg')).convert('RGB').crop(box).save(os.path.join(D, out + '.jpg'), quality=90)
    print(out, box)
