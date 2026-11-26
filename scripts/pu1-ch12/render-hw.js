/* handwritten-style notes → pu1-ch12-assets/pdf-handwritten_notes.pdf */
const { chromium } = require('playwright'); const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
(async () => { const srv = require('./serve.js')(); const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1240, height: 1754 } });
  const tmp = require('path').join(require('os').tmpdir(), 'ch12-hw'); fs.mkdirSync(tmp, { recursive: true }); let N = 1; const files = [];
  for (let i = 1; i <= N; i++){ await p.goto(srv.url + 'scripts/pu1-ch12/handwritten.html?p=' + i); await p.evaluate(() => document.fonts.ready);
    await p.waitForFunction(() => [...document.images].every(im => im.complete)); const over = await p.evaluate(() => FIT()); N = await p.evaluate(() => NP);
    const f = path.join(tmp, 'p' + String(i).padStart(2, '0') + '.jpg'); await p.screenshot({ path: f, type: 'jpeg', quality: 82 }); files.push(f); console.log('page', i, over ? 'OVERFLOW' : 'ok'); }
  await b.close(); srv.close();
  execFileSync(process.env.PY || 'python3', ['-c', `import sys;from PIL import Image;ims=[Image.open(f).convert('RGB') for f in sys.argv[2:]];ims[0].save(sys.argv[1],save_all=True,append_images=ims[1:],resolution=150)`, path.join(__dirname, '..', '..', 'pu1-ch12-assets', 'pdf-handwritten_notes.pdf'), ...files]);
  const mf = path.join(__dirname, '..', '..', 'pu1-ch12-assets', 'manifest.json'); const M = JSON.parse(fs.readFileSync(mf, 'utf8')); M.hwPages = N; fs.writeFileSync(mf, JSON.stringify(M, null, 1));
})();
