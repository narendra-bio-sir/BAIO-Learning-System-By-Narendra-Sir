/* Storybook PDFs (A5, like the other chapters) for the given books in EN/KN/HI:
   node scripts/pu1-ch12/story-pdf.js pu1-ch12 pu1-ch11  -> stories/pdf/[kn/|hi/]<id>.pdf */
const { chromium } = require('playwright'); const path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '..', '..');
(async () => { const srv = require('./serve.js')(); const b = await chromium.launch();
  for (const id of process.argv.slice(2)) for (const L of ['en', 'kn', 'hi']) {
    const ctx = await b.newContext(); await ctx.addInitScript(L => { try { localStorage.setItem('gz_lang', L); localStorage.setItem('baio_lang', L); } catch (e) {} }, L);
    const p = await ctx.newPage(); p.on('pageerror', e => console.log('PAGEERROR', id, L, e.message));
    await p.goto(srv.url + 'stories.html?print=1#' + id); await p.waitForFunction(() => window.__ready === true, null, { timeout: 20000 });
    await p.evaluate(() => document.fonts.ready); await p.waitForTimeout(800);
    const out = path.join(ROOT, 'stories', 'pdf', L === 'en' ? '' : L, id + '.pdf');
    await p.pdf({ path: out, format: 'A5', printBackground: true, preferCSSPageSize: true });
    console.log(out.replace(ROOT + '/', ''), (fs.statSync(out).size / 1024).toFixed(0) + ' KB'); await ctx.close(); }
  await b.close(); srv.close(); })();
