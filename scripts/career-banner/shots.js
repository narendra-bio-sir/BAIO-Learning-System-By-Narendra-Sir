/* App screenshots used in the career-guidance banner (sample finder profile, no student data).
   NODE_PATH=/opt/node22/lib/node_modules node scripts/career-banner/shots.js */
const { chromium } = require('playwright'), path = require('path');
const OUT = __dirname;
(async () => {
  const srv = await require(path.join(__dirname, '..', 'pu1-ch12', 'serve.js'))();
  const b = await chromium.launch();
  const ctx = await b.newContext({ viewport: { width: 400, height: 900 }, deviceScaleFactor: 2 });
  const pg = await ctx.newPage();
  await pg.addInitScript(() => { localStorage.setItem('baio_lang', 'en'); localStorage.setItem('baio_theme', 'light');
    localStorage.setItem('baio_sch_finder', JSON.stringify({ c:'med', g:'girl', cat:'obc', inc:1, mk:3, govt:'yes', sp:{} })); });
  await pg.goto(srv.url + '/careers.html#mbbs'); await pg.waitForTimeout(1500);
  await pg.evaluate(() => document.fonts.ready);
  await (await pg.$('#mbbs')).screenshot({ path: path.join(OUT, 'shot-career.png') });
  const cap = async (sel, h, f) => { await pg.evaluate(([q, hh]) => { const e = document.querySelector(q); e.style.maxHeight = hh + 'px'; e.style.overflow = 'hidden'; }, [sel, h]); await (await pg.$(sel)).screenshot({ path: path.join(OUT, f) }); };
  await cap('#fres', 560, 'shot-finder.png');
  await pg.click('#loans [data-lid="pm-vidyalaxmi"]'); await pg.waitForTimeout(300);
  await cap('#loans', 620, 'shot-loans.png');
  await pg.evaluate(() => { document.getElementById('colOpen').click(); });
  await pg.waitForTimeout(400);
  await cap('#cols', 760, 'shot-colleges.png');
  await b.close(); srv.close(); console.log('shots done');
})();
