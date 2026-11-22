const {chromium}=require('playwright');const http=require('http'),fs=require('fs'),path=require('path');
const R=path.join(__dirname,'..','..');
const T={'.html':'text/html','.js':'text/javascript','.css':'text/css','.json':'application/json'};
const srv=http.createServer((q,r)=>{let p=decodeURIComponent(q.url.split('?')[0]);const f=path.join(R,p);fs.readFile(f,(e,d)=>{if(e){r.writeHead(404);r.end();return}r.writeHead(200,{'content-type':T[path.extname(f)]||'application/octet-stream'});r.end(d)})}).listen(0,async()=>{
 const port=srv.address().port,b=await chromium.launch();const out={};
 for(const n of [1,2,3,5,6,7,8,10,11,12,13]){
  const c=await b.newContext({serviceWorkers:'block'});await c.route(u=>!u.href.startsWith('http://localhost'),r=>r.abort());
  const p=await c.newPage();await p.goto(`http://localhost:${port}/pu2-ch${n}.html`);await p.waitForTimeout(800);
  out['pu2-ch'+n]=await p.evaluate(()=>{const g=document.querySelector('#mmImg [style*="grid-template-columns"]');
    return [...g.children].map(b=>({title:b.querySelector('div').innerHTML.trim(),pts:(b.querySelectorAll('li').length?[...b.querySelectorAll('li')].map(l=>l.innerHTML.trim()):b.querySelectorAll(':scope>div')[1].innerHTML.split(/<br\s*\/?>/i).map(x=>x.trim()).filter(Boolean))}))});
  console.log(n,out['pu2-ch'+n].length,out['pu2-ch'+n].map(b=>b.title.replace(/<[^>]+>/g,'')).join(' / ').slice(0,200));await c.close();}
 fs.writeFileSync(process.argv[2],JSON.stringify(out,null,1));await b.close();srv.close();});
