/* Renders the career-guidance announcement banner (dark + light, 1080x1350) into exam-corner/.
   Run shots.js first if the app screens changed.  NODE_PATH=/opt/node22/lib/node_modules node scripts/career-banner/render.js */
const { chromium } = require('playwright'), path = require('path');
const ROOT = path.join(__dirname, '..', '..');
(async () => {
  const srv = await require(path.join(ROOT, 'scripts', 'pu1-ch12', 'serve.js'))();
  const b = await chromium.launch();
  for (const t of ['dark', 'light']) {
    const pg = await b.newPage({ viewport: { width: 1080, height: 1350 }, deviceScaleFactor: 1 });
    await pg.goto(srv.url + '/scripts/career-banner/banner.html?t=' + t, { waitUntil: 'load' });
    await pg.evaluate(() => document.fonts.ready); await pg.waitForTimeout(400);
    const info = await pg.evaluate(() => { const w = document.querySelector('.wrap'), f = w.lastElementChild.getBoundingClientRect(), g = document.querySelector('.banks').getBoundingClientRect(), c = document.querySelector('.cta').getBoundingClientRect(); return [Math.round(f.bottom), Math.round(g.bottom), Math.round(c.top)]; });
    console.log(t, 'footer bottom / banks bottom / cta top', info.join(' / '));
    await pg.screenshot({ path: path.join(ROOT, 'exam-corner', 'baio-career-guidance-2026' + (t === 'light' ? '-light' : '') + '.jpg'), type: 'jpeg', quality: 90 });
  }
  await b.close(); srv.close();
})();
