/* Social banner: post (1080x1350) and story (1080x1920) -> assets/social/career-guidance-{post,story}.jpg
   NODE_PATH=/opt/node22/lib/node_modules node scripts/career-banner/social.js */
const { chromium } = require('playwright'), path = require('path'), fs = require('fs');
const ROOT = path.join(__dirname, '..', '..'), OUT = path.join(ROOT, 'assets', 'social');
(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const srv = await require(path.join(ROOT, 'scripts', 'pu1-ch12', 'serve.js'))();
  const b = await chromium.launch();
  for (const [f, h] of [['post', 1350], ['story', 1920]]) {
    const pg = await b.newPage({ viewport: { width: 1080, height: h }, deviceScaleFactor: 1 });
    await pg.goto(srv.url + 'scripts/career-banner/social.html?f=' + f, { waitUntil: 'load' });
    await pg.evaluate(() => document.fonts.ready); await pg.waitForTimeout(400);
    const r = await pg.evaluate(() => { const g = document.querySelector('.list').getBoundingClientRect(), c = document.querySelector('.cta').getBoundingClientRect(); return [Math.round(g.bottom), Math.round(c.top), Math.round(c.bottom)]; });
    console.log(f, 'list bottom / cta top / cta bottom', r.join(' / '), 'of', h);
    await pg.screenshot({ path: path.join(OUT, 'career-guidance-' + f + '.jpg'), type: 'jpeg', quality: 90 });
  }
  await b.close(); srv.close();
})();
