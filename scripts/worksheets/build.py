"""Free worksheets (worksheets.html): builds worksheets/data/<puc>-<ch>.json for all 32 chapters.

Questions come from the PU Question Bank already in the app (board-question-assignment-builder.html).
Each question is placed in one topic of scripts/worksheets/topics.py by keyword match. Per chapter we build:
  - one whole-chapter worksheet in the board-paper pattern (Part A-I MCQ, A-II fill in the blanks with a
    word box, B 2-mark, C 3-mark, D 5-mark) plus a diagram-practice section, and
  - one worksheet per topic (same parts, fewer questions) with its own diagram practice.
Questions that need a picture we do not have ("given below", "identify A, B ...") are left out;
"draw / labelled diagram" questions get a drawing box instead of answer lines.
Run: python3 scripts/worksheets/build.py
"""
import json, os, re, sys
sys.path.insert(0, os.path.dirname(__file__))
from topics import T

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
OUT = os.path.join(ROOT, 'worksheets', 'data')

TITLES = ["The Living World", "Biological Classification", "Plant Kingdom", "Animal Kingdom", "Morphology of Flowering Plants",
  "Anatomy of Flowering Plants", "Structural Organisation in Animals", "Cell: The Unit of Life", "Biomolecules",
  "Cell Cycle and Cell Division", "Photosynthesis in Higher Plants", "Respiration in Plants", "Plant Growth and Development",
  "Breathing and Exchange of Gases", "Body Fluids and Circulation", "Excretory Products and their Elimination",
  "Locomotion and Movement", "Neural Control and Coordination", "Chemical Coordination and Integration",
  "Sexual Reproduction in Flowering Plants", "Human Reproduction", "Reproductive Health", "Principles of Inheritance and Variation",
  "Molecular Basis of Inheritance", "Evolution", "Human Health and Disease", "Microbes in Human Welfare",
  "Biotechnology: Principles and Processes", "Biotechnology and its Applications", "Organisms and Populations", "Ecosystem",
  "Biodiversity and Conservation"]
ICONS = ["🌍", "🦠", "🌿", "🐾", "🌺", "🔬", "🐸", "🧫", "🧪", "🔄", "☀️", "💨", "🌱", "🫁", "❤️", "🫘", "💪", "🧠", "⚗️",
  "🌸", "👶", "🩺", "🧬", "🧬", "🦕", "🛡️", "🍞", "✂️", "🌾", "🐝", "🌳", "🐅"]

# Board weightage (marks out of 105, choices included).
# I PUC: Blue Print 2026-27 -> (marks, 1-mark Qs, 2-mark, 3-mark, 5-mark)
BP1 = [(2,2,0,0,0),(4,1,0,1,0),(6,1,1,1,0),(8,1,1,0,1),(5,0,0,0,1),(4,2,1,0,0),(3,0,0,1,0),(10,3,1,0,1),(6,1,0,0,1),
  (5,0,1,1,0),(6,1,0,0,1),(6,1,0,0,1),(7,2,1,1,0),(5,0,1,1,0),(6,1,0,0,1),(6,1,0,0,1),(6,1,0,0,1),(4,1,0,1,0),(6,1,0,0,1)]
# II PUC: Model Question Paper blueprint 2024-25 -> marks per chapter
BP2 = [11, 10, 6, 13, 13, 7, 11, 7, 7, 6, 6, 4, 4]

FIG = re.compile(r"(given|shown) (below|above)|(in|with reference to|with respect to|refer(ring)? to|from|observe|study|look at) the (above |given |following )?(diagram|figure|graph|table|chart|picture|image)|"
                 r"the (diagram|figure|graph|table|chart) (below|above|given|shown)|(diagram|figure) below|following (diagram|figure|graph|flow ?chart|table|chart|pathway)|"
                 r"shown in the (figure|diagram)|identify (the )?(parts|labels|structures|labelled|stage)|replace the symbols|fill (in )?the boxes|"
                 r"complete the (following )?(table|chart|flow|diagram)|pathway of food ingested|identify ['‘’\"]|following pedigree|observe the|pedigree (given|shown)", re.I)
FIG_CS = re.compile(r"labell?ed from [A-E]|\b[A-E]\s*[–-]\s*[A-F]\b|label?l?ed (as )?['‘]?[A-E]\b|marked (as )?['‘]?[A-E]\b|\b[A-E]\s*,\s*[A-E]\s*(,|and)\s*[A-E]\b")
OK = re.compile(r"(?<!observe the )(?<!observe )two statements|statement i\b|characters (are )?given below|read them|given below[:.]? *(i\)|a\))", re.I)   # text-only, no picture needed
DRAW = re.compile(r"\b(draw|sketch)\b|schematic(ally)?|punnet|work out the cross|pedigree chart|flow ?chart|graphical(ly)? represent|diagrammatic view|labell?ed diagram|diagrammatic(ally)? represent|with (a )?(neat )?diagram|schematic (diagram|representation)", re.I)


def clean(t):
    t = re.sub(r'\s+', ' ', (t or '')).strip()
    t = re.sub(r'…+|\.{4,}', '________', t)
    t = re.sub(r'\s*PART\s*[–-]\s*[A-E]\b.*$', '', t)
    m = re.search(r'\s\d{1,2}\.\s+(?=[A-Z]|[a-d]\))', t)          # two questions merged by the OCR ("... 4. Describe ...")
    if m and m.start() > 15:
        t = t[:m.start()].strip()
    return t


def parse_mcq(q):
    if q.get('stem') and q.get('options') and len(q['options']) == 4:
        return clean(q['stem']), [clean(o) for o in q['options']]
    t = clean(q['text'])
    pos, start = [], 0
    for L in 'abcd':
        m = re.compile(r'(?:^|\s)\(?' + L + r'\)\s*', re.I).search(t, start)
        if not m:
            return None
        pos.append((m.start(), m.end())); start = m.end()
    stem = t[:pos[0][0]].strip()
    opts = [t[pos[i][1]:(pos[i + 1][0] if i < 3 else len(t))].strip(' ;,') for i in range(4)]
    if len(stem) < 8 or any(not o for o in opts):
        return None
    return stem, opts


def kw_re(k):
    return re.compile(r'(?<![a-z0-9])' + re.escape(k.lower()))


def classify(text, topics, df=None):
    """Best topic for a question. Keywords that occur in many questions of the chapter (e.g. 'Mendel',
    'biodiversity') count less than specific ones (e.g. 'dihybrid', 'hotspot')."""
    low = text.lower()
    best, bi = 0, None
    for i, tp in enumerate(topics):
        s = 0
        for k, rx in tp['rx']:
            if rx.search(low):
                s += (1.5 if ' ' in k else 1.0) / (max(1, (df or {}).get((i, k), 1)) ** 0.5)
        if s > best + 1e-9:
            best, bi = s, i
    return bi


def tag_all(items, topics):
    df = {}
    lows = [it['_x'].lower() for it in items]
    for i, tp in enumerate(topics):
        for k, rx in tp['rx']:
            df[(i, k)] = sum(1 for l in lows if rx.search(l))
    for it in items:
        it['k'] = classify(it.pop('_x'), topics, df)


def spread(pool, n):
    """n items spread evenly across pool (keeps a mix of easy and hard questions)."""
    if len(pool) <= n:
        return list(pool)
    return [pool[int(i * len(pool) / n)] for i in range(n)]


def clean_bank(words):
    out, seen = [], set()
    for w in re.split(r',\s*', words or ''):
        w = w.strip(' .;')
        if len(w) < 3 or not re.search(r'[A-Za-z]{2}', w) or w.lower() in ('gy',):
            if not re.match(r'^\d', w):
                continue
        if w.lower() in seen:
            continue
        seen.add(w.lower()); out.append(w)
    return out


def main():
    s = open(os.path.join(ROOT, 'board-question-assignment-builder.html'), encoding='utf-8').read()
    D = json.loads(re.search(r'<script[^>]*id="qbData"[^>]*>([\s\S]*?)</script>', s).group(1))
    os.makedirs(OUT, exist_ok=True)
    index, report = [], []
    for ch in D:
        n = ch['num']; puc = 1 if n <= 19 else 2; cn = n if puc == 1 else n - 19
        cid = f'{puc}-{cn}'
        topics = [{'name': a, 'rx': [(k, kw_re(k)) for k in b], 'dia': c} for a, b, c in T[n]]
        pools = {'mcq': [], 'fill': [], 'short2': [], 'short3': [], 'long5': []}
        bank, dropped = [], 0
        for sec in ch['sections']:
            kind = 'long5' if sec['kind'] == 'long5d' else sec['kind']
            if sec['kind'] == 'fill' and sec.get('wordbank'):
                bank = clean_bank(sec['wordbank'])
            for q in sec['questions']:
                if kind == 'mcq':
                    p = parse_mcq(q)
                    if not p and re.search(r'_{2,}|…|\.{4,}', q['text']) and not re.search(r'(?:^|\s)\(?[a-d]\)', q['text']):
                        kind_ = 'fill'
                    else:
                        kind_ = None
                    if kind_:
                        t = clean(q['text'])
                        if t[:1].isalpha() and t[:1].islower():
                            dropped += 1; continue
                        pools['fill'].append({'t': t, '_x': t}); continue
                    if not p or ((FIG.search(p[0]) or FIG_CS.search(p[0])) and not OK.search(p[0])):
                        dropped += 1; continue
                    item = {'t': p[0], 'o': p[1]}
                    text = p[0] + ' ' + ' '.join(p[1])
                else:
                    t = clean(q['text'])
                    if len(t) < 12 or ((FIG.search(t) or FIG_CS.search(t)) and not OK.search(t)):
                        dropped += 1; continue
                    if kind == 'fill' and t[:1].isalpha() and t[:1].islower():
                        dropped += 1; continue
                    if kind == 'fill' and not re.search(r'_{2,}', t):
                        t = t.rstrip('.') + ' ________.'
                    item = {'t': t}
                    if DRAW.search(t):
                        item['d'] = 1
                    text = t
                item['_x'] = text
                pools[kind].append(item)
        tag_all([q for v in pools.values() for q in v], topics)
        used = set()
        def take(kind, n_, k=None, prefer_new=False, draw_first=False):
            pool = [q for q in pools[kind] if k is None or q['k'] == k]
            if prefer_new:
                fresh = [q for q in pool if id(q) not in used]
                if len(fresh) >= n_:
                    pool = fresh
                else:
                    pool = fresh + [q for q in pool if id(q) in used]
            if k is None and not prefer_new:
                pass
            if k is None:   # whole chapter: round-robin over topics for coverage
                by = {}
                for q in pool:
                    by.setdefault(q['k'], []).append(q)
                order, keys = [], sorted(by, key=lambda x: (x is None, x if x is not None else 99))
                while len(order) < min(n_, len(pool)):
                    for kk in keys:
                        if by[kk]:
                            order.append(by[kk].pop(0 if len(by[kk]) % 2 else -1))
                            if len(order) >= n_:
                                break
                pick = order
            else:
                pick = spread(pool, n_)
            if draw_first:
                d = [q for q in pool if q.get('d')]
                if d and not any(q.get('d') for q in pick):
                    pick = [d[0]] + [q for q in pick if q is not d[0]][:n_ - 1]
            for q in pick:
                used.add(id(q))
            return [{kk: vv for kk, vv in q.items() if kk != 'k'} for q in pick]

        def parts(nm, nf, n2, n3, n5, k=None, prefer_new=False):
            P = []
            mc = take('mcq', nm, k, prefer_new)
            if mc: P.append({'p': 'A-I', 'kind': 'mcq', 'm': 1, 'q': mc})
            fb = take('fill', nf, k, prefer_new)
            if fb: P.append({'p': 'A-II', 'kind': 'fill', 'm': 1, 'q': fb})
            s2 = take('short2', n2, k, prefer_new)
            if s2: P.append({'p': 'B', 'kind': 'short2', 'm': 2, 'q': s2})
            s3 = take('short3', n3, k, prefer_new)
            if s3: P.append({'p': 'C', 'kind': 'short3', 'm': 3, 'q': s3})
            l5 = take('long5', n5, k, prefer_new, draw_first=True)
            if l5: P.append({'p': 'D', 'kind': 'long5', 'm': 5, 'q': l5})
            return P

        sheets = []
        for i, tp in enumerate(topics):
            P = parts(5, 3, 3, 2, 2, k=i)
            dia = tp['dia'] or ['Make a neat, labelled flow chart (concept map) of this topic from memory.']
            nq = sum(len(p['q']) for p in P)
            if nq == 0 or (nq < 3 and not tp['dia']):
                continue
            sheets.append({'id': f't{i + 1}', 'title': tp['name'], 'parts': P, 'dia': dia,
                           'marks': sum(p['m'] * len(p['q']) for p in P)})
        full = parts(10, 5, 5, 5, 3, prefer_new=True)
        fdia = []
        for tp in topics:                                     # one diagram from every topic first, then the rest
            if tp['dia']: fdia.append(tp['dia'][0])
        for tp in topics:
            fdia += [d for d in tp['dia'][1:]]
        fdia = fdia[:4] or ['Make a neat, labelled flow chart (concept map) of the whole chapter from memory.']
        sheets.insert(0, {'id': 'full', 'title': 'Whole Chapter', 'parts': full, 'dia': fdia,
                          'marks': sum(p['m'] * len(p['q']) for p in full)})
        bp = {'marks': BP1[cn - 1][0], 'q': list(BP1[cn - 1][1:])} if puc == 1 else {'marks': BP2[cn - 1]}
        data = {'id': cid, 'puc': puc, 'ch': cn, 'title': TITLES[n - 1], 'ic': ICONS[n - 1], 'bp': bp, 'bank': bank,
                'sheets': sheets}
        with open(os.path.join(OUT, cid + '.json'), 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, separators=(',', ':'))
        index.append({'id': cid, 'puc': puc, 'ch': cn, 'title': TITLES[n - 1], 'ic': ICONS[n - 1], 'bp': bp['marks'],
                      'sheets': [[x['id'], x['title'], x['marks']] for x in sheets]})
        tc = [0] * len(topics); none = 0
        for kind in pools:
            for q in pools[kind]:
                if q['k'] is None: none += 1
                else: tc[q['k']] += 1
        report.append(f"{cid:5} {TITLES[n-1][:28]:28} kept {sum(len(v) for v in pools.values()):3} dropped {dropped:2} "
                      f"untagged {none:2} topics {tc} sheets {len(sheets)}")
    with open(os.path.join(ROOT, 'worksheets', 'index.js'), 'w', encoding='utf-8') as f:
        f.write('/* generated by scripts/worksheets/build.py */\nwindow.WS_INDEX = ' + json.dumps(index, ensure_ascii=False, separators=(',', ':')) + ';\n')
    print('\n'.join(report))


if __name__ == '__main__':
    main()
