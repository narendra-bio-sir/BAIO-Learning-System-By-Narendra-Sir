#!/usr/bin/env python3
"""Synthesised background music + sound effects for the Ch11 reels.
python3 audio.py <events.json> <out.wav>   events.json = {"kind": "chat|topic|shayari", "dur": s, "events": [[t, type], ...]}"""
import json, sys, numpy as np
from scipy.io import wavfile
from scipy.signal import butter, lfilter
SR = 44100
spec = json.load(open(sys.argv[1])); dur = spec['dur']; kind = spec['kind']; N = int(SR * (dur + .5))
mix = np.zeros(N); rng = np.random.default_rng(7)
def env(n, a=.005, r=.2):
    t = np.arange(n) / SR; e = np.minimum(1, t / a) * np.exp(-t / r); return e
def add(t, sig, g=1.0):
    i = int(t * SR); j = min(N, i + len(sig))
    if i < N: mix[i:j] += g * sig[:j - i]
def tone(f, d, wave='sine', a=.005, r=.3):
    n = int(d * SR); t = np.arange(n) / SR; ph = 2 * np.pi * f * t
    s = np.sin(ph) if wave == 'sine' else (2 * ((f * t) % 1) - 1 if wave == 'saw' else np.sign(np.sin(ph)) * .6)
    return s * env(n, a, r)
def lp(x, fc):
    b, a = butter(2, fc / (SR / 2)); return lfilter(b, a, x)
def hp(x, fc):
    b, a = butter(2, fc / (SR / 2), 'high'); return lfilter(b, a, x)
def note(m): return 440 * 2 ** ((m - 69) / 12)
def pop(f0=900):
    n = int(.12 * SR); t = np.arange(n) / SR; f = f0 * np.exp(-t * 18) + 300; return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(n, .002, .04)
def whoosh(d=.7):
    n = int(d * SR); w = rng.standard_normal(n); x = np.linspace(0, 1, n); e = np.sin(np.pi * x) ** 2
    return lp(hp(w, 500), 3500) * e * .6
def kick():
    n = int(.35 * SR); t = np.arange(n) / SR; f = 50 + 110 * np.exp(-t * 25); return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(n, .002, .12)
def hat():
    n = int(.06 * SR); return hp(rng.standard_normal(n), 7000) * env(n, .001, .015) * .5
def clap():
    n = int(.18 * SR); return lp(hp(rng.standard_normal(n), 1200), 5000) * env(n, .002, .05) * .7
def bell(f):
    n = int(2.2 * SR); t = np.arange(n) / SR
    return sum(a * np.sin(2 * np.pi * f * k * t) * np.exp(-t * d) for k, a, d in [(1, 1, 1.6), (2.76, .5, 2.8), (5.4, .25, 4), (8.9, .12, 6)]) * np.minimum(1, t / .002)
def pluck(f, d=.5):
    n = int(d * SR); s = tone(f, d, 'saw', .003, .18); return lp(s, 2600)

if kind == 'chat':
    bpm = 96; beat = 60 / bpm; chords = [[60, 64, 67], [55, 59, 62], [57, 60, 64], [53, 57, 60]]
    t = 0; k = 0
    while t < dur - 1:
        ch = chords[(k // 4) % 4]
        for i in range(2): add(t + i * beat / 2, pluck(note(ch[(k + i) % 3] + 12), .45), .16)
        if k % 2 == 0: add(t, tone(note(ch[0] - 12), beat * 2, 'sine', .02, .8), .22)
        if k % 4 == 2: add(t, clap(), .08)
        add(t + beat / 2, hat(), .12)
        t += beat; k += 1
    for tt, ty in spec['events']:
        if ty in ('pop', 'send'): add(tt, pop(1100 if ty == 'send' else 800), .55)
        elif ty == 'react': add(tt, pop(1600), .35)
        elif ty == 'whoosh': add(tt, whoosh(), .5)
        elif ty == 'tick': add(tt, tone(1320, .15, 'sine', .002, .06), .25)
elif kind == 'topic':
    bpm = 112; beat = 60 / bpm; prog = [[57, 60, 64], [53, 57, 60], [48, 52, 55], [55, 59, 62]]
    t = 0; k = 0
    while t < dur - 1.5:
        ch = prog[(k // 8) % 4]
        if k % 2 == 0: add(t, kick(), .5)
        if k % 4 == 2: add(t, clap(), .28)
        add(t, hat(), .16); add(t + beat / 2, hat(), .1)
        add(t, pluck(note(ch[k % 3] + 12), .3), .13); add(t + beat / 2, pluck(note(ch[(k + 1) % 3] + 24), .25), .07)
        if k % 8 == 0: add(t, lp(tone(note(ch[0] - 12), beat * 8, 'saw', .05, 3), 500), .15)
        t += beat; k += 1
    for tt, ty in spec['events']:
        if ty == 'whoosh': add(tt - .25, whoosh(.6), .55)
        elif ty == 'tick': add(tt, tone(1500, .12, 'sine', .002, .05), .18)
else:
    sa = note(50); n = int(SR * (dur + .5)); t = np.arange(n) / SR
    drone = sum(lp(2 * ((f * t) % 1) - 1, 900) * g for f, g in [(sa, .5), (sa * 1.5, .35), (sa * 2, .3), (sa / 2, .4)])
    drone *= (.6 + .4 * np.sin(2 * np.pi * .23 * t) ** 2) * np.minimum(1, t / 2) * np.minimum(1, (dur + .5 - t) / 2.5)
    mix[:n] += drone * .08
    bpm = 78; beat = 60 / bpm
    def bayan():
        m = int(.5 * SR); tt = np.arange(m) / SR; f = 75 + 45 * np.exp(-tt * 8); return np.sin(2 * np.pi * np.cumsum(f) / SR) * env(m, .003, .2)
    def dayan(f=520, r=.18):
        m = int(.4 * SR); tt = np.arange(m) / SR; return (np.sin(2 * np.pi * f * tt) + .4 * np.sin(2 * np.pi * f * 2.02 * tt) + .2 * np.sin(2 * np.pi * f * 3.1 * tt)) * env(m, .001, r)
    pat = [('B', 'D'), (None, 'T'), ('B', 'T'), (None, 'N'), (None, 'T'), ('B', 'D'), (None, 'N'), ('B', 'D')]
    tt = 2.0; k = 0
    while tt < dur - 3:
        b, d = pat[k % 8]
        if b: add(tt, bayan(), .3)
        if d: add(tt, dayan({'D': 480, 'T': 620, 'N': 700}[d], .2 if d == 'D' else .1), .16 if d == 'D' else .1)
        tt += beat / 2; k += 1
    mel = [62, 65, 67, 69, 67, 65, 62, 60]
    for tt2, ty in spec['events']:
        if ty == 'bell': add(tt2, bell(note(74)), .2); [add(tt2 + .9 + i * .45, lp(tone(note(m), .7, 'saw', .02, .35), 1800), .05) for i, m in enumerate(mel[:5])]
        elif ty == 'wah': add(tt2, bell(note(81)), .12)
        elif ty == 'start': add(tt2 + .3, bell(note(69)), .2)
mix = np.tanh(mix * 1.1); mix *= .45 / max(1e-6, np.max(np.abs(mix)))
fade = int(1.2 * SR); mix[-fade:] *= np.linspace(1, 0, fade)
st = np.stack([mix, np.roll(mix, int(.012 * SR)) * .97], 1)
wavfile.write(sys.argv[2], SR, (st * 32767).astype(np.int16))
print('audio', sys.argv[2], round(dur, 1), 's')
