/* Render a BAIO "board topics in 60 seconds" revision reel to MP4 (1080x1920, 30 fps) + cover, into reels/.
   node scripts/pu1-ch12/reels/render.js pu1ch12 | pu2ch9      (PY=<python with numpy+scipy> for the music) */
const { chromium } = require('playwright'); const { spawn, execFileSync } = require('child_process'); const fs = require('fs'), path = require('path'), os = require('os');
const r = process.argv[2], D = path.join(__dirname, '..', '..', '..', 'reels'), TMP = path.join(os.tmpdir(), 'baio-reels'); fs.mkdirSync(TMP, { recursive: true });
(async () => {
  const srv = require('../serve.js')(); const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1080, height: 1920 } });
  await p.goto(srv.url + `scripts/pu1-ch12/reels/reel.html?r=${r}`); await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(800);
  const info = await p.evaluate(() => ({ dur: DUR, events: EVENTS, kind: REEL_DATA[new URLSearchParams(location.search).get('r')].kind }));
  const out = await p.evaluate(r => REEL_DATA[r].out, r);
  const ev = path.join(TMP, out + '.json'), wav = path.join(TMP, out + '.wav'); fs.writeFileSync(ev, JSON.stringify(info));
  execFileSync(process.env.PY || 'python3', [path.join(__dirname, 'audio.py'), ev, wav], { stdio: 'inherit' });
  const FPS = 30, n = Math.ceil(info.dur * FPS);
  const ff = spawn('ffmpeg', ['-y', '-v', 'error', '-f', 'image2pipe', '-framerate', String(FPS), '-c:v', 'mjpeg', '-i', '-', '-i', wav, '-c:v', 'libx264', '-preset', 'medium', '-crf', '23', '-pix_fmt', 'yuv420p', '-c:a', 'aac', '-b:a', '128k', '-shortest', '-movflags', '+faststart', path.join(D, out + '.mp4')], { stdio: ['pipe', 'inherit', 'inherit'] });
  for (let i = 0; i < n; i++) { await p.evaluate(t => frame(t), i / FPS); const buf = await p.screenshot({ type: 'jpeg', quality: 90 }); if (!ff.stdin.write(buf)) await new Promise(res => ff.stdin.once('drain', res)); if (i % 300 === 0) process.stdout.write(`${out} ${i}/${n}\n`); }
  ff.stdin.end(); await new Promise(res => ff.on('close', res));
  await p.evaluate(t => frame(t), 3.2); await p.screenshot({ path: path.join(D, out + '-cover.jpg'), type: 'jpeg', quality: 85 });
  console.log('done', out, info.dur.toFixed(1) + 's'); await b.close(); srv.close();
})();
