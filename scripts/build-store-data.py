"""Builds store/store-data.js for store.html (the BAIO Store) from the app's own pages and data.
Run after changing a price, a payment link, or adding a chapter page / podcast / flash cards / NEET Tricks chapter / mind map."""
import json, re, os
R = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) + '/'
def rd(f): return open(R + f, encoding='utf-8').read()
W = rd('pyq/pyq-weightage.js'); CH = json.loads(re.search(r'ch:(\{.*\})\s*\n\};', W, re.S).group(1))
def const(s, name):
    m = re.search(r"(?:const|var|let)\s+" + name + r"\s*=\s*('([^']*)'|(\d+))", s)
    return None if not m else (m.group(2) if m.group(2) is not None else int(m.group(3)))
def link(v): return v if v and re.match(r'(https://|upi://)', v) else None
out = {'ch': {}, 'pod': [], 'nt': [], 'fc': []}
for cid, c in CH.items():
    e = {'t': c['t'], 'i': c['i'], 'c': c['c'], 'h': c['h']}
    if c['h']:
        s = rd(c['h'] + ('index.html' if c['h'].endswith('/') else ''))
        p = const(s, 'PREMIUM_PRICE_RUPEES'); l = link(const(s, 'RAZORPAY_PREMIUM_LINK'))
        if p and l: e['prem'] = [p, l, const(s, 'PREMIUM_PRICE_ORIGINAL') or p, const(s, 'PREMIUM_KEY')]
        hp = const(s, 'HW_UNLOCK_PRICE_RUPEES'); hl = link(const(s, 'RAZORPAY_PAYMENT_LINK')) or link(const(s, 'HW_RAZORPAY_LINK'))
        if hp and hl: e['hw'] = [hp, hl, const(s, 'HW_UNLOCK_KEY')]
        cp = const(s, 'CN_PRICE_RUPEES'); cl = link(const(s, 'CN_RAZORPAY_LINK'))
        if cp and cl: e['cn'] = [cp, cl, const(s, 'CN_UNLOCK_KEY')]
    out['ch'][cid] = e
pod = rd('audio-podcasts.html'); i = pod.index('const POD = '); out['pod'] = re.findall(r'"(pu[12]-ch\d+)":\{"t"', pod[i:pod.index('\nconst ', i + 5)])
out['podPrice'] = const(pod, 'PRICE'); out['podB'] = {k: int(v) for k, v in re.findall(r"'(pu[12]-all)': \{price:(\d+)", pod)}
nt = rd('neet-tricks.html'); out['ntPrice'] = const(nt, 'PRICE'); out['ntB'] = {k: int(v) for k, v in re.findall(r"'(pu[12]-all)': \{price:(\d+)", nt)}
for f in ['neet-tricks/nt-pu1.js', 'neet-tricks/nt-pu2.js']: out['nt'] += re.findall(r"^\s*(?:NT\[)?'(pu[12]-ch\d+)'\]?\s*[:=]", rd(f), re.M)
mm = rd('mind-maps.html'); out['mmPrice'] = const(mm, 'PRICE'); out['mmB'] = {k: int(v) for k, v in re.findall(r"'((?:pu[12]-)?all)': \{price:(\d+)", mm)}
out['mm'] = re.findall(r'"(pu[12]-ch\d+)":\[', rd('mind-maps/mm-data.js'))
fc = rd('flashcards.html'); out['fcPrice'] = const(fc, 'FC_PRICE')
out['fcLink'] = const(fc, 'FC_RAZORPAY_LINK'); out['fcLinks'] = json.loads(re.search(r"const FC_RAZORPAY_LINKS = (\{[^}]*\})", fc).group(1).replace("'", '"'))
for f in ['flashcards/fc-pu1.js', 'flashcards/fc-pu2.js']: out['fc'] += re.findall(r"FC\['(pu[12]-ch\d+)'\]\s*=", rd(f))
cart = rd('pu2-cart.html'); out['bundle'] = [const(cart, 'BUNDLE_PRICE'), 'https://rzp.io/rzp/AEFNemg9', const(cart, 'PRICE_PER_CHAPTER') * 13]
mcn = rd('pu2-maths-colour-notes.html'); out['mathsCn'] = [const(mcn, 'CN_PRICE_RUPEES'), const(mcn, 'CN_RAZORPAY_LINK')]
js = '/* BAIO Store data: built by scripts/build-store-data.py from the app pages. Do not edit by hand. */\nwindow.STORE_DATA = ' + json.dumps(out, ensure_ascii=False, separators=(',', ':')).replace('},"', '},\n"') + ';\n'
open(R + 'store/store-data.js', 'w', encoding='utf-8').write(js)
print('chapters', len(out['ch']), 'premium', sum('prem' in e for e in out['ch'].values()), 'hw', sum('hw' in e for e in out['ch'].values()), 'cn', sum('cn' in e for e in out['ch'].values()),
      'pod', len(out['pod']), 'nt', len(out['nt']), 'fc', len(out['fc']), 'mm', len(out['mm']), out['mmB'], out['podB'], out['ntB'], out['bundle'], out['mathsCn'][0], out['fcLinks'])
