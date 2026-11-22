import json, re, html, random, collections, os
R='/home/user/BAIO-Learning-System-By-Narendra-Sir/'
PAGES={'pu1-ch2':'ch2/index.html','pu1-ch3':'ch3/index.html','pu2-ch9':'ch9/index.html'}
for n in [4,5,6,8,9,10,11]: PAGES['pu1-ch%d'%n]='pu1-ch%d.html'%n
for n in [1,2,3,4,5,6,7,8,10,11,12,13]: PAGES['pu2-ch%d'%n]='pu2-ch%d.html'%n
QMAX, OMAX = 150, 48   # readable in 10 seconds
def clean(t):
    t=html.unescape(re.sub(r'<[^>]+>','',str(t))); t=t.replace(' ',' ')
    return re.sub(r'\s+',' ',t).strip()
def norm(t): return re.sub(r'[^a-z0-9]','',t.lower())
items=[]; seen=set(); stat=collections.Counter()
def add(ch,cat,q,opts,a,exp='',src=''):
    q=clean(q); opts=[clean(o) for o in opts]; exp=clean(exp)
    if not q or len(opts)<2 or not (0<=a<len(opts)): stat['bad']+=1; return
    if len(q)>QMAX: stat['longq']+=1; return
    if max(len(o) for o in opts)>OMAX: stat['longo']+=1; return
    if len({norm(o) for o in opts})<len(opts) or any(not norm(o) for o in opts): stat['dupopt']+=1; return
    if re.search(r'\b(all of the above|none of the above|both [a-d] and|only [a-d]\b|[A-D]\s*and\s*[A-D]\b|statement|assertion|column|figure|diagram|marked|shown|given below|following)',(q+' '+' '.join(opts)),re.I): stat['ref']+=1; return
    k=norm(q)+'|'+norm(opts[a])
    if k in seen: stat['dup']+=1; return
    seen.add(k)
    if len(exp)>170: exp=exp[:167].rsplit(' ',1)[0]+'…'
    items.append({'ch':ch,'c':cat,'q':q,'o':opts,'a':a,'x':exp}); stat['ok_'+cat]+=1
dec=json.JSONDecoder()
def category(o):
    f=(o.get('format') or o.get('type') or '').lower(); d=(o.get('difficulty') or o.get('d') or '').lower()
    if f in ('matching','match','diagram','sequence','seq','combo','ar','assertion','cistate','s12','true_stmt'): return None
    if o.get('img') or o.get('steps') or o.get('colA'): return None
    if f in ('fib',): return 'board'
    if f in ('recall',): return 'memory'
    if f in ('numerical','application','reasoning','neet'): return 'skill'
    if f in ('statement','conceptual'): return 'knowledge'
    if d.startswith('hard'): return 'skill'
    if d.startswith('easy'): return 'memory'
    return 'knowledge'
boardqa=collections.defaultdict(list)
for ch,f in PAGES.items():
    s=open(R+f,encoding='utf-8').read()
    def walk(o):
        if isinstance(o,dict):
            if isinstance(o.get('q'),str):
                opts=o.get('options') or o.get('o'); a=o.get('answer',o.get('a'))
                if isinstance(opts,list) and isinstance(a,int):
                    cat=category(o)
                    if cat: add(ch,cat,o['q'],opts,a,o.get('exp') or o.get('e') or '')
                elif isinstance(o.get('a'),str) and o.get('marks')==1:
                    boardqa[ch].append((clean(o['q']),clean(o['a'])))
            for v in o.values(): walk(v)
        elif isinstance(o,list):
            for v in o: walk(v)
    i=0
    for m in re.finditer(r'[\[{]\s*\{\s*"',s):
        if m.start()<i: continue
        try: obj,end=dec.raw_decode(s,m.start()); i=end; walk(obj)
        except Exception: pass
# Board: 1-mark Q&A with a short answer -> MCQ with other short answers of the chapter as distractors
random.seed(7)
for ch,L in boardqa.items():
    short=[(q,re.sub(r'\.$','',a)) for q,a in L if len(a)<=OMAX and len(q)<=QMAX]
    pool=[a for q,a in short]
    for q,a in short:
        ds=[x for x in pool if norm(x)!=norm(a)]
        if len(ds)<3: continue
        # prefer distractors of similar length
        ds.sort(key=lambda x: abs(len(x)-len(a))+random.random()*8)
        opts=ds[:3]+[a]; random.shuffle(opts)
        add(ch,'board',q,opts,opts.index(a))
# NEET Tricks quiz (structured) -> knowledge
import subprocess
J=json.load(open('/tmp/claude-0/-home-user-BAIO-Learning-System-By-Narendra-Sir/762b3101-21b4-582e-b050-d48165f89027/scratchpad/rep/js.json'))
for f in ['neet-tricks/nt-pu1.js','neet-tricks/nt-pu2.js']:
    for cid,c in J[f]['NT'].items():
        for q in c.get('quiz',[]): add(cid,'knowledge',q['q'],q['o'],q['a'],q.get('x',''))
print(stat)
by=collections.Counter((i['ch'],i['c']) for i in items)
for ch in sorted({i['ch'] for i in items}, key=lambda x:(x[:3],int(x.split('ch')[1]))):
    print(ch, {c:by[(ch,c)] for c in ['memory','knowledge','skill','board']})
json.dump(items,open('items.json','w'),ensure_ascii=False)
