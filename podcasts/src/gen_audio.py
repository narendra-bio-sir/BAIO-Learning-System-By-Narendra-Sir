#!/usr/bin/env python3
"""Generate BAIO podcast audio with real neural voices (Kokoro v1.0 via sherpa-onnx, offline).
Usage: TTS_DIR=/path/with/sherpa+kokoro python3 podcasts/src/gen_audio.py en|hi [episode-id ...]
Output: podcasts/audio/<lang>/<id>.mp3 and podcasts/audio/<lang>/<id>.json (start time of every line)."""
import json, os, re, subprocess, sys, tempfile, wave, struct, concurrent.futures as cf

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
TTS = os.environ.get('TTS_DIR', '/tmp/tts')
BIN = f'{TTS}/sherpa-onnx-v1.12.15-linux-x64-shared/bin/sherpa-onnx-offline-tts'
K = f'{TTS}/kokoro-multi-lang-v1_0'
ENV = dict(os.environ, LD_LIBRARY_PATH=f'{TTS}/sherpa-onnx-v1.12.15-linux-x64-shared/lib')
# Kokoro speaker ids: af_heart 3, af_bella 2, bf_emma 21, bm_george 26, bm_lewis 27, hf_alpha 31, hf_beta 32, hm_omega 33, hm_psi 34
VOICES = {
  'en': {'S': 26, 'P': 3, 'N': 21, 'Rf': 2, 'Rm': 27},
  'hi': {'S': 33, 'P': 31, 'Nf': 32, 'Nm': 34, 'Rf': 32, 'Rm': 34},
}
GAP = 0.35  # seconds between lines

def load(lang):
    js = open(f'{ROOT}/podcasts/eps.js', encoding='utf-8').read()
    node = "global.window=global;" + js + ";" 
    if lang != 'en': node += open(f'{ROOT}/podcasts/eps-{lang}.js', encoding='utf-8').read()
    node += ";console.log(JSON.stringify({P:PODS,L:(window.PODS_I18N||{})['%s']||{}}))" % lang
    out = subprocess.check_output(['node', '-e', node], text=True)
    return json.loads(out)

def speakable(t, lang):
    t = t.replace('’', "'").replace('‘', "'").replace('—', ', ').replace('…', '... ')
    t = re.sub(r'CO₂', 'C O 2', t); t = t.replace('₂', ' 2').replace('⁺', ' plus ')
    t = re.sub(r'\b([mtr])RNA\b', lambda m: m.group(1) + ' R N A', t)
    t = re.sub(r'\bIg([AEGMD])\b', r'I g \1', t)
    t = re.sub(r'\bF([12])\b', r'F \1', t)
    t = re.sub(r'(?<![A-Za-z])I A and I B(?![A-Za-z])', 'I-A and I-B', t)
    if lang == 'en': t = t.replace('Rubi', 'Ruby')
    return t.strip()

def synth(args):
    text, sid, lang, out = args
    if os.path.exists(out) and os.path.getsize(out) > 1000: return out
    cmd = [BIN, f'--kokoro-model={K}/model.onnx', f'--kokoro-voices={K}/voices.bin', f'--kokoro-tokens={K}/tokens.txt',
           f'--kokoro-data-dir={K}/espeak-ng-data', f'--kokoro-lexicon={K}/lexicon-us-en.txt', f'--kokoro-lang={lang}',
           '--num-threads=1', f'--sid={sid}', f'--output-filename={out}', text]
    subprocess.run(cmd, env=ENV, check=True, capture_output=True)
    return out

def wav_info(p):
    with wave.open(p) as w: return w.getframerate(), w.getnframes() / w.getframerate()

def build(lang, ids):
    D = load(lang); outdir = f'{ROOT}/podcasts/audio/{lang}'; os.makedirs(outdir, exist_ok=True)
    work = f'{TTS}/work/{lang}'; os.makedirs(work, exist_ok=True)
    V = VOICES[lang]
    for e in D['P']:
        if ids and e['id'] not in ids: continue
        L = D['L'].get(e['id'], {}) if lang != 'en' else {}
        g = e.get('g', '')
        jobs, plan = [], []
        for i, (spk, txt) in enumerate(e['l']):
            if spk == '~': plan.append(('pause', float(txt))); continue
            text = (L.get('l') or [None] * len(e['l']))[i] or txt
            if spk == 'R': sid = V['Rf'] if g == 'f' else V['Rm']
            elif spk == 'N': sid = V.get('N') if 'N' in V else (V['Nm'] if g == 'f' else V['Nf'])
            else: sid = V[spk]
            out = f'{work}/{e["id"]}-{i:02d}-{sid}.wav'
            jobs.append((speakable(text, lang), sid, lang, out)); plan.append(('wav', out))
        with cf.ThreadPoolExecutor(max_workers=2) as ex: list(ex.map(synth, jobs))
        # concatenate with gaps, record line start times
        rate = wav_info(plan[[k for k, p in enumerate(plan) if p[0] == 'wav'][0]][1])[0]
        starts, t, parts = [], 0.0, []
        for kind, v in plan:
            starts.append(round(t, 2))
            if kind == 'pause': dur = v
            else: dur = wav_info(v)[1]; parts.append(('file', v, t))
            t += dur + GAP
        total = t
        # build with ffmpeg: silence base + overlay is heavy; instead write a concat list with silence files
        sil = {}
        def silence(sec):
            k = round(sec, 2)
            if k not in sil:
                p = f'{work}/sil-{k}.wav'
                if not os.path.exists(p):
                    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'lavfi', '-i', f'anullsrc=r={rate}:cl=mono', '-t', str(k), '-c:a', 'pcm_s16le', p], check=True)
                sil[k] = p
            return sil[k]
        lst = f'{work}/{e["id"]}.txt'
        with open(lst, 'w') as f:
            for kind, v in plan:
                f.write(f"file '{silence(v) if kind == 'pause' else v}'\n")
                f.write(f"file '{silence(GAP)}'\n")
        mp3 = f'{outdir}/{e["id"]}.mp3'
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', lst, '-ac', '1', '-ar', '24000', '-c:a', 'libmp3lame', '-b:a', '48k', mp3], check=True)
        json.dump({'starts': starts, 'dur': round(total, 2)}, open(f'{outdir}/{e["id"]}.json', 'w'))
        print(lang, e['id'], f'{total/60:.1f} min', flush=True)

if __name__ == '__main__':
    build(sys.argv[1], set(sys.argv[2:]))
