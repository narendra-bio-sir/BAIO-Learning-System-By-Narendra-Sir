import json, re, collections, os
exec(open('extract.py').read().split("print(stat)")[0])   # rebuilds `items` with the same filters
CAT={'m':'memory','k':'knowledge','s':'skill','b':'board','a':'application'}
for fn in ['authored-pu1.txt','authored-pu2.txt','/home/user/BAIO-Learning-System-By-Narendra-Sir/scripts/rapid-fire/authored-app.txt']:
    ch=None
    for line in open(fn, encoding='utf-8'):
        line=line.rstrip('\n')
        if not line or line.startswith('#'): continue
        if line.startswith('@'): ch=line[1:].strip(); continue
        p=line.split('|'); assert len(p)==6, line
        n0=len(items); add(ch, CAT[p[0]], p[1], p[2:], 0)
        if len(items)==n0: print('REJECTED', ch, line, stat.most_common(3))
J=json.load(open('../rep/js.json'))
titles={'pu2-ch9':'Biotechnology: Principles and Processes'}
for f in ['flashcards/fc-pu1.js','flashcards/fc-pu2.js']:
    for cid,c in J[f]['FC'].items(): titles.setdefault(cid, c['title']) if cid=='pu2-ch9' else titles.__setitem__(cid, c['title'])
out=collections.defaultdict(list)
for i in items: out[i['ch']].append([i['c'][0], i['q'], i['o'], i['a'], i['x']])
OUTD='/home/user/BAIO-Learning-System-By-Narendra-Sir/rapid-fire/q'; os.makedirs(OUTD, exist_ok=True)
index=[]
order=sorted(out, key=lambda x:(x[:3], int(x.split('ch')[1])))
for ch in order:
    L=out[ch]; c=collections.Counter(x[0] for x in L)
    json.dump({'id':ch,'t':titles.get(ch,ch),'q':L}, open(f'{OUTD}/{ch}.json','w',encoding='utf-8'), ensure_ascii=False, separators=(',',':'))
    index.append({'id':ch,'t':titles.get(ch,ch),'n':len(L),'m':c['m'],'k':c['k'],'s':c['s'],'b':c['b'],'a':c['a']})
    print(ch, titles.get(ch), len(L), dict(c))
json.dump(index, open(f'{OUTD}/index.json','w',encoding='utf-8'), ensure_ascii=False, separators=(',',':'))
print('total', sum(x['n'] for x in index))
