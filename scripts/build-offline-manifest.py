#!/usr/bin/env python3
"""Builds offline-manifest.json: the list of files each "Use BAIO offline"
pack saves on a student's phone (see offline.html and sw.js).

Run from the repo root after adding or changing pages:
    python3 scripts/build-offline-manifest.py

Each pack starts from a few entry pages and pulls in the local files those
pages reference (scripts, styles, data, images, worksheet pages).
Heavy media (audio, video, PDF, PowerPoint) is left out: it streams online.
"""
import html, json, os, re, sys, hashlib
from urllib.parse import urlsplit, unquote

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

KEEP_EXT = {'.html', '.js', '.css', '.json', '.webp', '.jpg', '.jpeg', '.png', '.svg', '.gif', '.woff2', '.woff'}
MAX_FILE = 1_600_000          # a single image/page bigger than this is skipped (pages are exempt)
SKIP_DIRS = ('.git/', 'functions/', 'scripts/', 'reports/')

PACKS = [
    ('core', ['index.html', 'offline.html', 'manifest.json', 'icon-192.png', 'icon-512.png',
              'apple-touch-icon.png', 'announcements-index.json', 'exam-corner.html', 'exam-scorer.html',
              'study-tips.html', 'timetable.html', 'important-cards.html', 'guide.html', 'about.html',
              'neet-3-steps.html', 'midterm-practice.html', 'offline-sync.js', 'tricks.html']),
    ('pu1', ['ch2/index.html', 'ch3/index.html', 'pu1-ch4.html', 'pu1-ch5.html', 'pu1-ch6.html',
             'pu1-ch8.html', 'pu1-ch9.html', 'pu1-ch10.html']),
    ('pu2', ['pu2-ch%d.html' % i for i in range(1, 14)]),
    ('pcm', ['pcm.html', 'pu1-phy-ch1.html', 'pu1-che-ch1.html', 'pu1-mat-ch1.html',
             'pu2-phy-ch1.html', 'pu2-che-ch1.html', 'pu2-mat-ch1.html']),
    ('extras', ['flashcards.html', 'notes.html', 'ncert-library.html', 'genetic-cross-simulator.html',
                'practical-benedict-test.html', 'practical-biuret-test.html', 'practical-pigment-extraction.html',
                'practical-plasmolysis.html', 'practical-ts-stem.html', 'activities.html']),
]

REF_RE = re.compile(r'''(?:src|href|data-src|poster)\s*=\s*["']([^"'#]+)["']''', re.I)
CSS_URL_RE = re.compile(r'''url\(\s*["']?([^"')]+)["']?\s*\)''', re.I)
JS_STR_RE = re.compile(r'''["']((?:[\w.-]+/)*[\w.-]+\.(?:js|css|json|webp|jpe?g|png|svg|gif|html))(\?[^"'\s]*)?["']''', re.I)


def norm(base_dir, ref):
    """Return (repo-relative path, url-with-query) for a local reference, else None."""
    ref = ref.strip()
    if not ref or ref.startswith(('http:', 'https:', '//', 'data:', 'mailto:', 'tel:', 'javascript:', 'blob:', '{', '$')):
        return None
    parts = urlsplit(ref)
    path = unquote(parts.path)
    if not path:
        return None
    full = os.path.normpath(os.path.join(base_dir, path)).replace(os.sep, '/')
    if full.startswith('..') or not os.path.isfile(full):
        return None
    if full.startswith(SKIP_DIRS) or '/proj/' in full:   # proj/ = large smart-board slide copies
        return None
    ext = os.path.splitext(full)[1].lower()
    if ext not in KEEP_EXT:
        return None
    url = full + ('?' + parts.query if parts.query else '')
    return full, url


def refs_of(path):
    base = os.path.dirname(path)
    try:
        text = open(path, encoding='utf-8', errors='ignore').read()
    except OSError:
        return []
    found = []
    for rx in (REF_RE, CSS_URL_RE):
        for m in rx.finditer(text):
            found.append(m.group(1))
    if path.endswith(('.html', '.js')):
        for m in JS_STR_RE.finditer(text):
            found.append(m.group(1) + (m.group(2) or ''))
    out = []
    for ref in found:
        n = norm(base, ref)
        if n:
            out.append(n)
    return out


def collect(entries, assigned):
    urls, seen, queue = [], set(), []
    for e in entries:
        if os.path.isfile(e):
            queue.append((e, e, True))
    while queue:
        path, url, is_entry = queue.pop(0)
        if url in seen:
            continue
        seen.add(url)
        ext = os.path.splitext(path)[1].lower()
        size = os.path.getsize(path)
        if not is_entry and ext != '.html' and size > MAX_FILE:
            continue
        if path == 'sw.js':
            continue
        if url not in assigned:
            assigned.add(url)
            urls.append((url, size))
        # Follow references from pages, scripts and styles (one level for linked pages
        # outside the entry list, so worksheets come along but the whole site doesn't).
        if ext in ('.js', '.css') or is_entry:
            for p, u in refs_of(path):
                pext = os.path.splitext(p)[1].lower()
                if pext == '.html':
                    # Only worksheet-style pages inside asset folders, not other site pages.
                    if '/' not in p or p.startswith(('ch2/index', 'ch3/index')):
                        continue
                queue.append((p, u, False))
    return urls


def file_hash(path):
    with open(path, 'rb') as f:
        return hashlib.sha1(f.read()).hexdigest()[:8]


TITLE_RE = re.compile(r'<title>(.*?)</title>', re.I | re.S)


TITLE_FIX = {
    'index.html': 'Home page',
    'ch2/index.html': 'Chapter 2: Biological Classification',
    'ch3/index.html': 'Chapter 3: Plant Kingdom',
    'timetable.html': 'Time Table',
}


def page_title(path):
    if path in TITLE_FIX:
        return TITLE_FIX[path]
    m = TITLE_RE.search(open(path, encoding='utf-8', errors='ignore').read(20000))
    t = html.unescape(re.sub(r'\s+', ' ', m.group(1)).strip()) if m else path
    t = t.split(' | ')[0]
    for suffix in (' — PU-I Biology', ' — PU-II Biology', ' — BAIO Learning System', ' · BAIO Learning System'):
        t = t.replace(suffix, '')
    return t.replace(' — PU-II ', ' · II PUC ').replace(' — PU-I ', ' · I PUC ')


def main():
    core_files = set()
    packs = {}
    for pid, entries in PACKS:
        # Core is always downloaded, so other packs skip what core has; packs
        # may share files with each other (each must work on its own).
        assigned = set(core_files)
        files = collect(entries, assigned)
        if pid == 'core':
            core_files = {u for u, _ in files}
        packs[pid] = {
            'bytes': sum(s for _, s in files),
            'pages': [[e, page_title(e)] for e in entries if os.path.isfile(e) and e.endswith('.html') and e != 'offline.html'],
            'files': [[u, s, file_hash(u.split('?')[0])] for u, s in files],
        }
    digest = hashlib.sha1(json.dumps(packs, sort_keys=True).encode()).hexdigest()[:10]
    out = {'version': digest, 'packs': packs}
    with open('offline-manifest.json', 'w', encoding='utf-8') as f:
        f.write('{"version": %s, "packs": {\n' % json.dumps(digest))
        for i, (pid, p) in enumerate(packs.items()):
            f.write(' %s: {"bytes": %d, "pages": %s, "files": [\n' % (json.dumps(pid), p['bytes'], json.dumps(p['pages'], ensure_ascii=False)))
            f.write(',\n'.join('  ' + json.dumps(x, ensure_ascii=False) for x in p['files']))
            f.write('\n ]}' + (',' if i < len(packs) - 1 else '') + '\n')
        f.write('}}\n')
    for pid, p in packs.items():
        print('%-7s %4d files %6.1f MB' % (pid, len(p['files']), p['bytes'] / 1e6))
    print('version', digest)
    return 0


if __name__ == '__main__':
    sys.exit(main())
