/* BAIO 3D Biology Lab — model library (three.js r128).
   Each model: {t, pack, ch, emoji, cam, slice:{n:[x,y,z], on}, build(A)}.
   In build(A): A.part(key, name, info, quiz, {shell}) registers a tappable part;
   A.add(key, mesh) adds a mesh to it; A.proxy(key, pos, r) adds an invisible tap target;
   A.anchor(key, [x,y,z]) sets where its label sits; A.tag(text,[x,y,z]) adds a fixed label. */
(function(){
const T = THREE, V = (x,y,z)=>new T.Vector3(x,y,z), PI=Math.PI;
// seeded random so models look the same for every student
let seed=7; const rnd=()=>{ seed=(seed*16807)%2147483647; return (seed-1)/2147483646; };
const R=(a,b)=>a+(b-a)*rnd();
const sph=(r,w=28,h=20)=>new T.SphereGeometry(r,w,h);
const ell=(rx,ry,rz,w=32,h=22)=>{ const g=sph(1,w,h); g.scale(rx,ry,rz); return g; };
const cyl=(rt,rb,h,s=24,open=false)=>new T.CylinderGeometry(rt,rb,h,s,1,open);
const tube=(pts,r,seg,closed=false,rs=8)=>new T.TubeGeometry(new T.CatmullRomCurve3(pts,closed),seg||pts.length*6,r,rs,closed);
const capsule=(r,len,seg=24)=>{ const p=[]; const n=10; for(let i=0;i<=n;i++){ const a=-PI/2+PI/2*i/n; p.push(new T.Vector2(Math.cos(a)*r, -len/2+Math.sin(a)*r)); } for(let i=0;i<=n;i++){ const a=PI/2*i/n; p.push(new T.Vector2(Math.cos(a)*r, len/2+Math.sin(a)*r)); } return new T.LatheGeometry(p,seg); };
const helix=(rad,pitch,turns,phase=0,n=200,axis='y',off=[0,0,0])=>{ const pts=[]; for(let i=0;i<=n;i++){ const t=turns*2*PI*i/n+phase, h=pitch*turns*i/n-pitch*turns/2; const a=Math.cos(t)*rad, b=Math.sin(t)*rad;
  pts.push(axis==='y'?V(a+off[0],h+off[1],b+off[2]):axis==='x'?V(h+off[0],a+off[1],b+off[2]):V(a+off[0],b+off[1],h+off[2])); } return pts; };
const at=(m,x,y,z)=>{ m.position.set(x,y,z); return m; };
const rot=(m,x,y,z)=>{ m.rotation.set(x,y,z); return m; };
const fib=(n,r)=>{ const out=[]; const g=PI*(3-Math.sqrt(5)); for(let i=0;i<n;i++){ const y=1-2*(i+.5)/n, rr=Math.sqrt(1-y*y), th=g*i; out.push(V(Math.cos(th)*rr*r,y*r,Math.sin(th)*rr*r)); } return out; };
const scatterIn=(n,f)=>{ const out=[]; let guard=0; while(out.length<n&&guard++<5000){ const p=V(R(-1,1),R(-1,1),R(-1,1)); const q=f(p); if(q) out.push(q); } return out; };

const MODELS = window.MODELS = {};

/* ================= CELL PACK ================= */
MODELS['animal-cell']={zoom:0.6, t:'Animal cell', pack:'cell', emoji:'🐾', ch:'I PUC Ch 8 · Cell: The Unit of Life', cam:9, slice:{n:[0,0,-1],on:true},
 build(A){ seed=11;
  A.part('mem','Plasma membrane','The outer boundary of the cell — a lipid bilayer with proteins (fluid mosaic model, Singer & Nicolson 1972). It is selectively permeable.','Which part is the selectively permeable outer boundary of an animal cell?',{shell:true});
  A.add('mem',new T.Mesh(sph(3.2,48,32),A.mat('mem','#8fd3c3',{opacity:.2})));
  A.anchor('mem',[0,3.15,0]);
  A.part('nuc','Nucleus','Bounded by a double-membrane nuclear envelope with nuclear pores. It holds the chromatin (DNA) and controls the cell.','Which part holds the chromatin and controls the cell?');
  A.add('nuc',at(new T.Mesh(sph(1.05),A.mat('nuc','#8f63d8',{opacity:.72})),-.3,0,0));
  A.part('nucl','Nucleolus','A spherical body inside the nucleus, not bound by a membrane. It is the site of active ribosomal RNA (rRNA) synthesis.','Where in the cell is rRNA made?');
  A.add('nucl',at(new T.Mesh(sph(.38),A.mat('nucl','#3d2470')),-.15,.25,-.35));
  A.part('rer','Rough endoplasmic reticulum','ER studded with ribosomes on its outer surface. It makes proteins that are secreted or sent to other organelles.','Which part is studded with ribosomes and makes proteins for secretion?');
  const rm=A.mat('rer','#2ec4a6'), rb=A.mat('rer2','#e05d5d');
  [[1.45,0],[1.7,.5],[1.95,-.4]].forEach(([R0,tilt],k)=>{ const m=new T.Mesh(new T.TorusGeometry(R0,.055,8,60,2.3),rm); rot(m,PI/2+tilt*.4,0,1.2+k*.5); at(m,-.3,0,0); A.add('rer',m);
    for(let i=0;i<10;i++){ const a=2.3*i/9; const d=at(new T.Mesh(sph(.05,8,6),rb),Math.cos(a)*R0,Math.sin(a)*R0,0); m.add(d); } });
  A.anchor('rer',[-1.2,1.5,-.6]);
  A.part('ser','Smooth endoplasmic reticulum','ER without ribosomes. It is the major site of lipid (steroid) synthesis.','Which part is the main site of lipid synthesis?');
  const sm=A.mat('ser','#7fe3cf'); for(let k=0;k<3;k++){ const pts=[]; for(let i=0;i<=16;i++){ pts.push(V(.4+i*.09,-1.5-k*.28+Math.sin(i*.9+k)*.12,-.6+Math.cos(i*.7)*.25)); } A.add('ser',new T.Mesh(tube(pts,.06,60),sm)); }
  A.part('golgi','Golgi apparatus','Stacks of flat, disc-shaped cisternae with a cis (forming) and trans (maturing) face. It packages materials and forms glycoproteins and glycolipids.','Which part packages materials and forms glycoproteins?');
  const gm=A.mat('golgi','#e0a93a'); for(let k=0;k<5;k++){ const m=new T.Mesh(ell(.95-k*.09,.06,.42-k*.03),gm); at(m,1.6+k*.02,.55+k*.17,-.6); m.rotation.z=.25; A.add('golgi',m); }
  for(let k=0;k<4;k++) A.add('golgi',at(new T.Mesh(sph(.08,10,8),gm),2.3+R(-.2,.2),.9+R(-.3,.4),-.5+R(-.3,.3)));
  A.part('mito','Mitochondrion','Double-membraned; the inner membrane folds into cristae. It is the site of aerobic respiration and makes ATP — the powerhouse of the cell.','Which part is the powerhouse of the cell?');
  const mm=A.mat('mito','#e08c3c'); [[1.7,-.7,.2,.4],[-1.6,-1.4,-.5,1.2],[-.6,1.9,-.8,-.5],[.6,-.4,-2.1,.2]].forEach(([x,y,z,r])=>{ const m=new T.Mesh(ell(.55,.22,.22),mm); at(m,x,y,z); m.rotation.set(r,r*1.3,r*.7); A.add('mito',m); });
  A.part('lyso','Lysosome','A membrane-bound vesicle made by the Golgi body. It is full of hydrolytic enzymes that work best at acidic pH — the suicide bag.','Which part contains hydrolytic enzymes — the "suicide bag"?');
  const lm=A.mat('lyso','#e05d5d'); [[1.0,1.5,.6],[-2.0,.6,.4],[.3,-1.9,.2]].forEach(p=>A.add('lyso',at(new T.Mesh(sph(.2),lm),...p)));
  A.part('centro','Centrosome','Two cylindrical centrioles lying at right angles to each other. They organise the spindle during cell division in animal cells.','Which part has two centrioles at right angles to each other?');
  const cm=A.mat('centro','#2EE6C5'); const c1=at(new T.Mesh(cyl(.08,.08,.42,12),cm),.9,1.0,-1.6), c2=rot(at(new T.Mesh(cyl(.08,.08,.42,12),cm),1.1,1.0,-1.6),0,0,PI/2); A.add('centro',c1); A.add('centro',c2); A.proxy('centro',[1.0,1.0,-1.6],.35);
  A.part('ribo','Ribosomes','Tiny granules of RNA and protein without any membrane (80S in eukaryotes). They are the site of protein synthesis.','Which particles without any membrane are the site of protein synthesis?');
  const rbm=A.mat('ribo','#ff7b7b'); scatterIn(26,p=>{ const q=p.multiplyScalar(2.9); return q.length()<2.9&&q.distanceTo(V(-.3,0,0))>1.3?q:null; }).forEach(p=>{ A.add('ribo',at(new T.Mesh(sph(.06,8,6),rbm),p.x,p.y,p.z)); A.proxy('ribo',[p.x,p.y,p.z],.16); });
 }};

MODELS['plant-cell']={zoom:0.9, t:'Plant cell', pack:'cell', emoji:'🌿', ch:'I PUC Ch 8 · Cell: The Unit of Life', cam:10, slice:{n:[0,0,-1],on:true},
 build(A){ seed=23;
  A.part('wall','Cell wall','A rigid non-living outer layer made mainly of cellulose. It gives shape and protects the plant cell.','Which non-living layer made of cellulose surrounds a plant cell?',{shell:true});
  A.add('wall',new T.Mesh(new T.BoxGeometry(6.6,4.4,4.4),A.mat('wall','#3fae6a',{opacity:.22})));
  A.anchor('wall',[-3.3,2.2,2.2]);
  A.part('mem','Plasma membrane','A selectively permeable lipid bilayer just inside the cell wall.','Which selectively permeable layer lies just inside the cell wall?',{shell:true});
  A.add('mem',new T.Mesh(new T.BoxGeometry(6.2,4.0,4.0),A.mat('mem','#c8f0dc',{opacity:.15})));
  A.anchor('mem',[3.1,-2.0,1.6]);
  A.part('vac','Central vacuole','A large sap-filled sac bound by a single membrane, the tonoplast. It can occupy up to 90% of the plant cell volume.','Which part can occupy up to 90% of the volume of a plant cell?');
  A.add('vac',at(new T.Mesh(ell(2.0,1.4,1.4),A.mat('vac','#4a8fe0',{opacity:.5})),.4,-.1,0));
  A.part('nuc','Nucleus','The control centre holding chromatin; in plant cells it is often pushed to one side by the big vacuole.','Which part holds the DNA and is pushed to one side by the big vacuole?');
  A.add('nuc',at(new T.Mesh(sph(.72),A.mat('nuc','#8f63d8',{opacity:.75})),-2.25,.9,.5));
  A.part('nucl','Nucleolus','Site of rRNA synthesis inside the nucleus; not bound by a membrane.','Where is rRNA made in a plant cell?');
  A.add('nucl',at(new T.Mesh(sph(.26),A.mat('nucl','#3d2470')),-2.1,1.0,.1));
  A.part('chl','Chloroplast','A double-membraned plastid containing chlorophyll in its grana. It traps light energy and makes food by photosynthesis.','Which part makes food by photosynthesis?');
  const chm=A.mat('chl','#2e9e4f'); [[-1.2,1.65,1.2],[1.6,1.6,-1.1],[2.6,.2,1.3],[1.2,-1.65,1.2],[-1.3,-1.6,-1.2],[2.7,-.9,-1.0],[-.2,1.6,-1.4]].forEach(([x,y,z],k)=>{ const m=new T.Mesh(ell(.45,.18,.28),chm); at(m,x,y,z); m.rotation.set(k,k*.6,k*.3); A.add('chl',m); });
  A.part('mito','Mitochondrion','Double-membraned organelle with cristae; makes ATP by aerobic respiration.','Which part makes ATP by aerobic respiration?');
  const mm=A.mat('mito','#e08c3c'); [[-2.4,-.7,1.3],[2.3,1.2,.9],[-1.0,.2,-1.7]].forEach(([x,y,z],k)=>{ const m=new T.Mesh(ell(.42,.17,.17),mm); at(m,x,y,z); m.rotation.set(k,k*.8,.4); A.add('mito',m); });
  A.part('golgi','Golgi apparatus','Stacks of flat cisternae that package and send out materials (in plants also called dictyosomes).','Which part packages and sends out materials?');
  const gm=A.mat('golgi','#e0a93a'); for(let k=0;k<4;k++) A.add('golgi',at(new T.Mesh(ell(.6-k*.07,.05,.3),gm),-2.3,-1.25+k*.14,-.9));
  A.part('er','Endoplasmic reticulum','A network of membrane tubules around the nucleus; rough ER bears ribosomes and smooth ER makes lipids.','Which network of membrane tubules surrounds the nucleus?');
  const em=A.mat('er','#2ec4a6'); [[1.0,0],[1.2,.6]].forEach(([R0,t])=>{ const m=new T.Mesh(new T.TorusGeometry(R0,.05,8,50,2.2),em); m.rotation.set(PI/2+t,0,2.2); at(m,-2.25,.9,.5); A.add('er',m); });
  A.part('ribo','Ribosomes','Tiny membrane-less particles (80S) that make proteins.','Which tiny particles make proteins in the plant cell?');
  const rbm=A.mat('ribo','#ff7b7b'); scatterIn(22,p=>{ const q=V(p.x*2.9,p.y*1.8,p.z*1.8); const v=q.clone().sub(V(.4,-.1,0)); return (v.x*v.x/4.4+v.y*v.y/2.1+v.z*v.z/2.1)>1?q:null; }).forEach(p=>{ A.add('ribo',at(new T.Mesh(sph(.055,8,6),rbm),p.x,p.y,p.z)); A.proxy('ribo',[p.x,p.y,p.z],.15); });
  A.part('pd','Plasmodesmata','Fine cytoplasmic channels passing through the cell walls that connect neighbouring plant cells.','Which channels through the cell wall connect neighbouring plant cells?');
  const pm=A.mat('pd','#b8f5c9'); [[-.5,1.3],[.8,-1.0],[1.6,.6]].forEach(([y,z])=>{ const m=rot(at(new T.Mesh(cyl(.07,.07,.6,10),pm),3.2,y,z),0,0,PI/2); A.add('pd',m); A.proxy('pd',[3.2,y,z],.25); });
 }};

MODELS['mitochondrion']={t:'Mitochondrion', pack:'cell', emoji:'⚡', ch:'I PUC Ch 8 · Cell: The Unit of Life', cam:8.5, slice:{n:[0,0,-1],on:true},
 build(A){ seed=31;
  A.part('outer','Outer membrane','The smooth outer membrane that forms the continuous boundary of the mitochondrion.','Which smooth membrane forms the outer boundary?',{shell:true});
  A.add('outer',new T.Mesh(ell(3.1,1.35,1.35,48,32),A.mat('outer','#e08c3c',{opacity:.3})));
  A.anchor('outer',[0,1.35,0]);
  A.part('inner','Inner membrane','The inner membrane encloses the matrix and folds inwards to form cristae.','Which membrane folds inwards to form cristae?',{shell:true});
  A.add('inner',new T.Mesh(ell(2.85,1.12,1.12,48,32),A.mat('inner','#f2a65a',{opacity:.35})));
  A.anchor('inner',[-2.6,-.6,0]);
  A.part('cristae','Cristae','Infoldings of the inner membrane towards the matrix. They increase the surface area for ATP production.','Which infoldings increase the surface area for making ATP?');
  const cm=A.mat('cristae','#c8641e'); for(let i=0;i<9;i++){ const x=-2.2+i*.55; const h=2*1.05*Math.sqrt(Math.max(0,1-(x/2.85)**2))*.72; const w=2*1.05*Math.sqrt(Math.max(0,1-(x/2.85)**2))*.85;
   const m=new T.Mesh(new T.BoxGeometry(.09,h,w),cm); at(m,x,(i%2?1:-1)*(1.05-h/2)*.55,0); A.add('cristae',m); }
  A.part('matrix','Matrix','The fluid inside the inner membrane. It contains enzymes, a circular DNA, a few RNA molecules and 70S ribosomes.','Which fluid-filled space contains circular DNA and 70S ribosomes?',{shell:true});
  A.add('matrix',new T.Mesh(ell(2.6,.98,.98,40,28),A.mat('matrix','#ffd9a8',{opacity:.18})));
  A.anchor('matrix',[1.3,.2,.5]);
  A.part('dna','Circular DNA','Mitochondria have their own single circular DNA — that is why they are called semi-autonomous.','What genetic material shows that mitochondria are semi-autonomous?');
  const dm=A.mat('dna','#5b4bd6'); [[-.8,.3,-.4],[1.1,-.35,-.5]].forEach(p=>{ const m=at(new T.Mesh(new T.TorusGeometry(.28,.04,8,40),dm),...p); m.rotation.set(.6,.4,0); A.add('dna',m); A.proxy('dna',p,.35); });
  A.part('ribo','70S ribosomes','Mitochondria contain their own small (70S) ribosomes to make some of their proteins.','Which type of ribosomes do mitochondria contain?');
  const rm=A.mat('ribo','#e05d5d'); scatterIn(18,p=>{ const q=V(p.x*2.4,p.y*.85,p.z*.85); return Math.abs(q.z)<.8?q:null; }).forEach(p=>{ A.add('ribo',at(new T.Mesh(sph(.06,8,6),rm),p.x,p.y,p.z)); A.proxy('ribo',[p.x,p.y,p.z],.14); });
 }};

MODELS['chloroplast']={t:'Chloroplast', pack:'cell', emoji:'🍃', ch:'I PUC Ch 8 · Cell: The Unit of Life', cam:8.5, slice:{n:[0,-1,0],on:true},
 build(A){ seed=41;
  A.part('outer','Outer membrane','The outer membrane of the double-membrane envelope.','Which membrane forms the outer envelope of the chloroplast?',{shell:true});
  A.add('outer',new T.Mesh(ell(3.1,1.05,1.9,48,32),A.mat('outer','#3fae6a',{opacity:.25})));
  A.anchor('outer',[0,0,1.9]);
  A.part('inner','Inner membrane','The inner membrane of the envelope; it encloses the stroma.','Which membrane encloses the stroma?',{shell:true});
  A.add('inner',new T.Mesh(ell(2.9,.92,1.75,48,32),A.mat('inner','#8fe0a8',{opacity:.22})));
  A.anchor('inner',[-2.7,0,.6]);
  A.part('stroma','Stroma','The space inside the inner membrane. It contains enzymes for making carbohydrates and proteins, small circular DNA and ribosomes.','Which space holds the enzymes, circular DNA and ribosomes?',{shell:true});
  A.add('stroma',new T.Mesh(ell(2.75,.8,1.62,40,28),A.mat('stroma','#d9f7c8',{opacity:.14})));
  A.anchor('stroma',[1.9,.3,-1.0]);
  A.part('granum','Granum (stack of thylakoids)','Thylakoids are flattened membrane sacs with chlorophyll; they are stacked like coins to form grana.','Which coin-like stacks of thylakoids carry the chlorophyll?');
  const gm=A.mat('granum','#1f7a3a'); const G=[[-1.9,-.3],[-1.1,.55],[-.3,-.45],[.5,.5],[1.3,-.4],[2.0,.35]];
  G.forEach(([x,z])=>{ for(let k=0;k<6;k++) A.add('granum',at(new T.Mesh(cyl(.36,.36,.08,24),gm),x,-.38+k*.13,z)); });
  A.part('lam','Stroma lamellae','Flat membranous tubules that connect the thylakoids of different grana.','Which membranous tubules connect the different grana?');
  const lm=A.mat('lam','#5cc77a'); for(let i=0;i<G.length-1;i++){ const [x1,z1]=G[i],[x2,z2]=G[i+1]; const m=new T.Mesh(new T.BoxGeometry(Math.hypot(x2-x1,z2-z1),.04,.16),lm); at(m,(x1+x2)/2,-.05+(i%2)*.15,(z1+z2)/2); m.rotation.y=-Math.atan2(z2-z1,x2-x1); A.add('lam',m); }
  A.part('dna','Circular DNA','Chloroplasts have their own small double-stranded circular DNA.','What genetic material is found in the stroma?');
  const dm=A.mat('dna','#5b4bd6'); [[-1.5,.2,1.0],[1.6,-.2,1.05]].forEach(p=>{ const m=at(new T.Mesh(new T.TorusGeometry(.25,.035,8,36),dm),...p); m.rotation.x=1.2; A.add('dna',m); A.proxy('dna',p,.32); });
  A.part('ribo','70S ribosomes','Chloroplast ribosomes are smaller (70S) than the cytoplasmic ones (80S).','Which ribosomes are found in the chloroplast stroma?');
  const rm=A.mat('ribo','#e05d5d'); scatterIn(16,p=>{ const q=V(p.x*2.3,p.y*.6,p.z*1.4); return Math.abs(q.z)>.75?q:null; }).forEach(p=>{ A.add('ribo',at(new T.Mesh(sph(.055,8,6),rm),p.x,p.y,p.z)); A.proxy('ribo',[p.x,p.y,p.z],.14); });
 }};

/* ================= DNA PACK ================= */
const BASECOL={A:'#e05d5d',T:'#e0a93a',G:'#3fae6a',C:'#4a8fe0'}, PAIR={A:'T',T:'A',G:'C',C:'G'};
MODELS['dna-helix']={t:'DNA double helix', pack:'dna', emoji:'🧬', ch:'II PUC Ch 5 · Molecular Basis of Inheritance', cam:10, spin:true,
 build(A){ seed=51;
  const seq='ATGCGTACCAGTTAGCATGC'.split(''), rise=.34, n=seq.length, h0=-rise*(n-1)/2, off=2.3;
  const s1=[], s2=[]; for(let i=0;i<n;i++){ const t=i*2*PI/10; s1.push(V(Math.cos(t),h0+i*rise,Math.sin(t))); s2.push(V(Math.cos(t+off),h0+i*rise,Math.sin(t+off))); }
  A.part('bb1','Sugar–phosphate backbone (strand 1)','Each strand is a chain of deoxyribose sugar and phosphate joined by phosphodiester bonds. This strand runs 5′ → 3′.','What forms the outer "rails" of the DNA ladder?');
  A.part('bb2','Sugar–phosphate backbone (strand 2)','The second strand runs the opposite way, 3′ → 5′ — the two strands are antiparallel.','Which strand runs opposite (3′ → 5′) to the first — showing the strands are antiparallel?');
  const m1=A.mat('bb1','#c9d6e3'), m2=A.mat('bb2','#9fb4c9');
  A.add('bb1',new T.Mesh(tube(s1,.09,200),m1)); A.add('bb2',new T.Mesh(tube(s2,.09,200),m2));
  s1.forEach(p=>A.add('bb1',at(new T.Mesh(sph(.13,12,10),m1),p.x,p.y,p.z))); s2.forEach(p=>A.add('bb2',at(new T.Mesh(sph(.13,12,10),m2),p.x,p.y,p.z)));
  const names={A:'Adenine',T:'Thymine',G:'Guanine',C:'Cytosine'};
  const info={A:'A purine. Adenine always pairs with thymine by 2 hydrogen bonds.',T:'A pyrimidine. Thymine pairs with adenine by 2 hydrogen bonds (in RNA, uracil replaces it).',G:'A purine. Guanine pairs with cytosine by 3 hydrogen bonds.',C:'A pyrimidine. Cytosine pairs with guanine by 3 hydrogen bonds.'};
  const quiz={A:'Which purine pairs with thymine?',T:'Which pyrimidine pairs with adenine (and is replaced by uracil in RNA)?',G:'Which purine pairs with cytosine with three hydrogen bonds?',C:'Which pyrimidine pairs with guanine?'};
  'ATGC'.split('').forEach(b=>A.part(b,names[b],info[b],quiz[b]));
  A.part('hb','Hydrogen bonds','Weak bonds that hold the two strands together: A = T has 2, G ≡ C has 3.','Which bonds hold the two strands of DNA together?');
  const hm=A.mat('hb','#ffffff');
  seq.forEach((b,i)=>{ const a=s1[i], c=s2[i], mid=a.clone().add(c).multiplyScalar(.5); const p2=PAIR[b];
    const seg=(from,to,col,key)=>{ const d=to.clone().sub(from), L=d.length(); const m=new T.Mesh(cyl(.075,.075,L,10),A.mat(key,col)); m.position.copy(from.clone().add(to).multiplyScalar(.5)); m.quaternion.setFromUnitVectors(V(0,1,0),d.normalize()); A.add(key,m); };
    const g=.06, dir=c.clone().sub(a).normalize();
    seg(a,mid.clone().sub(dir.clone().multiplyScalar(g)),BASECOL[b],b); seg(mid.clone().add(dir.clone().multiplyScalar(g)),c,BASECOL[p2],p2);
    const nb=(b==='G'||b==='C')?3:2; const up=V(0,1,0).cross(dir).normalize();
    for(let k=0;k<nb;k++){ const o=(k-(nb-1)/2)*.07; A.add('hb',at(new T.Mesh(sph(.03,6,6),hm),mid.x+up.x*o,mid.y+up.y*o,mid.z+up.z*o)); }
    A.proxy('hb',[mid.x,mid.y,mid.z],.1); });
  A.anchor('bb1',[s1[n-1].x,s1[n-1].y+.3,s1[n-1].z]); A.anchor('bb2',[s2[0].x,s2[0].y-.3,s2[0].z]);
  A.tag("5′",[s1[0].x,s1[0].y-.45,s1[0].z]); A.tag("3′",[s1[n-1].x,s1[n-1].y+.55,s1[n-1].z]);
  A.tag("3′",[s2[0].x,s2[0].y-.55,s2[0].z]); A.tag("5′",[s2[n-1].x,s2[n-1].y+.45,s2[n-1].z]);
  A.note('Watson & Crick (1953) · diameter 2 nm · 10 base pairs per turn · pitch 3.4 nm · 0.34 nm between base pairs');
 }};

MODELS['replication']={t:'DNA replication fork', pack:'dna', emoji:'🔁', ch:'II PUC Ch 5 · Molecular Basis of Inheritance', cam:10,
 build(A){ seed=61;
  const parent1=[], parent2=[]; for(let i=0;i<=60;i++){ const y=-4+i*.06, t=i*.35; parent1.push(V(Math.cos(t)*.45,y,Math.sin(t)*.45)); parent2.push(V(Math.cos(t+PI)*.45,y,Math.sin(t+PI)*.45)); }
  A.part('parent','Parent DNA','The original double helix. It unwinds at the replication fork so each strand can act as a template.','Which part is the original double helix that unwinds?');
  const pm=A.mat('parent','#c9d6e3'); A.add('parent',new T.Mesh(tube(parent1,.09,120),pm)); A.add('parent',new T.Mesh(tube(parent2,.09,120),pm));
  for(let i=0;i<=60;i+=3){ const a=parent1[i], b=parent2[i]; const d=b.clone().sub(a); const m=new T.Mesh(cyl(.04,.04,d.length(),6),A.mat('parent2','#8aa0b8')); m.position.copy(a.clone().add(b).multiplyScalar(.5)); m.quaternion.setFromUnitVectors(V(0,1,0),d.normalize()); A.add('parent',m); }
  const fork=V(0,-.4,0);
  const L=[], Rr=[]; for(let i=0;i<=30;i++){ const s=i/30; L.push(V(-.45-s*2.6,-.4+s*4.2,0)); Rr.push(V(.45+s*2.6,-.4+s*4.2,0)); }
  A.part('tmpl','Template strands','The two separated parent strands. Each one is used as a template to build a new complementary strand.','What are the separated parent strands that guide the new strands called?');
  const tm=A.mat('tmpl','#9fb4c9'); A.add('tmpl',new T.Mesh(tube([parent1[60],...L],.09,80),tm)); A.add('tmpl',new T.Mesh(tube([parent2[60],...Rr],.09,80),tm));
  A.anchor('tmpl',[-3.2,3.9,0]);
  A.part('fork','Replication fork','The Y-shaped point where the parent DNA opens up and replication takes place.','Where does the DNA open up into a Y shape?');
  A.add('fork',at(new T.Mesh(new T.TorusGeometry(.3,.05,8,30),A.mat('fork','#ffffff',{opacity:.8})),fork.x,fork.y,fork.z)); A.proxy('fork',[0,-.4,0],.45);
  A.part('lead','Leading strand','Made continuously, because DNA polymerase can add nucleotides only in the 5′ → 3′ direction and this strand runs towards the fork.','Which new strand is made continuously?');
  const ldm=A.mat('lead','#2EE6C5'); const lead=L.slice(3).map(p=>V(p.x+.32,p.y-.1,.15)); A.add('lead',new T.Mesh(tube(lead,.085,80),ldm));
  A.part('lag','Lagging strand (Okazaki fragments)','Made discontinuously in short pieces called Okazaki fragments, which are later joined by DNA ligase.','Which new strand is made in short Okazaki fragments?');
  const lgm=A.mat('lag','#e0a93a'); [[6,13],[15,22],[24,30]].forEach(([a,b])=>{ const seg=Rr.slice(a,b+1).map(p=>V(p.x-.32,p.y-.1,.15)); A.add('lag',new T.Mesh(tube(seg,.085,40),lgm)); });
  A.anchor('lag',[3.0,3.5,.3]);
  A.part('pol','DNA polymerase','The main enzyme of replication (DNA-dependent DNA polymerase). It adds nucleotides only in the 5′ → 3′ direction.','Which enzyme adds new nucleotides in the 5′ → 3′ direction?');
  const plm=A.mat('pol','#a06edc'); A.add('pol',at(new T.Mesh(sph(.38),plm),-.95,.4,.2)); A.add('pol',at(new T.Mesh(sph(.38),plm),2.2,2.9,.2));
  A.part('lig','DNA ligase','The enzyme that joins the Okazaki fragments of the lagging strand together.','Which enzyme joins the Okazaki fragments?');
  const lim=A.mat('lig','#e05d5d'); [[1.62,1.95],[2.62,3.35]].forEach(([x,y])=>{ A.add('lig',at(new T.Mesh(sph(.2),lim),x,y,.2)); });
  A.tag('5′ → 3′',[-1.9,1.6,.4]);
  A.note('Replication is semi-conservative (Meselson & Stahl, 1958) and needs energy from deoxynucleoside triphosphates.');
 }};

MODELS['nucleosome']={zoom:0.92, t:'Nucleosome & chromatin', pack:'dna', emoji:'📿', ch:'II PUC Ch 5 · Molecular Basis of Inheritance', cam:9.5,
 build(A){ seed=71;
  A.part('oct','Histone octamer','Eight positively charged histone proteins (rich in lysine and arginine) form the core around which DNA wraps.','Which eight positively charged proteins form the core of a nucleosome?');
  A.part('ndna','Nucleosome DNA','The negatively charged DNA wraps around the histone octamer. A nucleosome contains about 200 base pairs of DNA.','About how many base pairs of DNA does one nucleosome contain?');
  A.part('link','Linker DNA','The stretch of DNA joining one nucleosome to the next — giving the "beads-on-string" look of chromatin.','Which DNA joins one nucleosome to the next?');
  const om=A.mat('oct','#e0a93a'), dm=A.mat('ndna','#4a8fe0'), lm=A.mat('link','#7fb4ff');
  const centres=[V(-3.2,-.4,0),V(0,.5,0),V(3.2,-.4,0)]; let prevEnd=null;
  centres.forEach((c,ci)=>{ for(let k=0;k<8;k++){ const a=k%4*PI/2+PI/4, z=k<4?-.32:.32; A.add('oct',at(new T.Mesh(sph(.42,20,16),om),c.x+Math.cos(a)*.42,c.y+Math.sin(a)*.42,c.z+z)); }
    const pts=helix(1.0,.55,1.65,ci,90,'z',[c.x,c.y,c.z]); A.add('ndna',new T.Mesh(tube(pts,.12,120),dm));
    if(prevEnd){ const s=pts[0]; A.add('link',new T.Mesh(tube([prevEnd,V((prevEnd.x+s.x)/2,(prevEnd.y+s.y)/2-.4,(prevEnd.z+s.z)/2+.6),s],.11,30),lm)); }
    prevEnd=pts[pts.length-1]; });
  A.add('link',new T.Mesh(tube([V(-5.2,-1.2,0),V(-4.6,-1,0.3),helix(1.0,.55,1.65,0,90,'z',[-3.2,-.4,0])[0]],.11,20),lm));
  A.anchor('oct',[0,1.8,.4]); A.anchor('ndna',[-3.2,.8,.6]); A.anchor('link',[1.6,-.3,.8]);
  A.note('Chromatin looks like beads on a string under the electron microscope — each bead is a nucleosome.');
 }};

/* ================= REPRODUCTION PACK ================= */
MODELS['flower']={t:'Flower (L.S.)', pack:'repro', emoji:'🌸', ch:'II PUC Ch 1 · Sexual Reproduction in Flowering Plants', cam:9, slice:{n:[0,0,-1],on:true},
 build(A){ seed=81;
  A.part('ped','Pedicel','The stalk of the flower.','What is the stalk of a flower called?');
  A.add('ped',at(new T.Mesh(cyl(.16,.2,2.2,16),A.mat('ped','#3fae6a')),0,-3.2,0));
  A.part('thal','Thalamus','The swollen tip of the pedicel on which all floral parts are arranged.','On which swollen part are all the floral whorls arranged?');
  A.add('thal',at(new T.Mesh(ell(.6,.35,.6),A.mat('thal','#5cc77a')),0,-2.05,0));
  A.part('sepal','Sepal (calyx)','The outermost green whorl; it protects the flower in the bud stage.','Which green outer whorl protects the flower bud?');
  const sm=A.mat('sepal','#2e9e4f'); for(let k=0;k<5;k++){ const a=k*2*PI/5; const m=new T.Mesh(ell(.32,.95,.08),sm); m.position.set(Math.cos(a)*.65,-1.75,Math.sin(a)*.65); m.rotation.set(0,-a,0); m.rotateZ(-.9); A.add('sepal',m); }
  A.part('petal','Petal (corolla)','The brightly coloured whorl that attracts insects for pollination.','Which brightly coloured whorl attracts pollinators?');
  const pm=A.mat('petal','#ec6fa4'); for(let k=0;k<5;k++){ const a=k*2*PI/5+PI/5; const m=new T.Mesh(ell(.6,1.6,.07),pm); m.position.set(Math.cos(a)*1.2,-.6,Math.sin(a)*1.2); m.rotation.set(0,-a,0); m.rotateZ(-.55); A.add('petal',m); }
  A.part('fil','Filament','The long slender stalk of the stamen that holds up the anther.','Which slender stalk holds up the anther?');
  A.part('anther','Anther','The bilobed top of the stamen; it has four microsporangia that make pollen grains.','Which part of the stamen makes pollen grains?');
  const fm=A.mat('fil','#f3e6a8'), am=A.mat('anther','#e0a93a'); for(let k=0;k<6;k++){ const a=k*PI/3; const x=Math.cos(a)*.6, z=Math.sin(a)*.6; const f=new T.Mesh(cyl(.03,.035,1.9,8),fm); f.position.set(x*1.25,-.9,z*1.25); f.rotation.set(Math.sin(a)*.25,0,-Math.cos(a)*.25); A.add('fil',f); A.add('anther',at(new T.Mesh(ell(.13,.26,.13),am),x*1.7,.1,z*1.7)); }
  A.part('ovary','Ovary','The swollen base of the pistil that contains ovules; it becomes the fruit after fertilisation.','Which part of the pistil becomes the fruit?');
  A.add('ovary',at(new T.Mesh(ell(.5,.65,.5),A.mat('ovary','#9be07a',{opacity:.6})),0,-1.25,0));
  A.part('ovule','Ovules','Present inside the ovary; each ovule becomes a seed after fertilisation.','Which structures inside the ovary become seeds?');
  const om=A.mat('ovule','#f7f2c4'); [[-.18,-1.45,.1],[.18,-1.2,.1],[-.15,-1.0,-.12],[.15,-1.5,-.12]].forEach(p=>A.add('ovule',at(new T.Mesh(sph(.11,12,10),om),...p)));
  A.part('style','Style','The slender tube connecting stigma to ovary; the pollen tube grows down through it.','Through which part does the pollen tube grow down to the ovary?');
  A.add('style',at(new T.Mesh(cyl(.06,.08,1.5,12),A.mat('style','#c7e89a')),0,-.1,0));
  A.part('stigma','Stigma','The sticky tip of the pistil that receives the pollen grains.','Which part of the pistil receives pollen grains?');
  A.add('stigma',at(new T.Mesh(sph(.2,16,12),A.mat('stigma','#f2c94c')),0,.75,0));
 }};

MODELS['anther']={t:'Anther T.S.', pack:'repro', emoji:'🌼', ch:'II PUC Ch 1 · Sexual Reproduction in Flowering Plants', cam:8,
 build(A){ seed=91;
  const L=[[-.95,.75],[.95,.75],[-.95,-.75],[.95,-.75]];
  const layer=(key,name,info,q,col,r,h)=>{ A.part(key,name,info,q); const m=A.mat(key,col); L.forEach(([x,z])=>A.add(key,at(new T.Mesh(cyl(r,r,h,32),m),x,h/2-1,z))); };
  layer('epi','Epidermis','The outermost protective layer of the anther wall.','Which is the outermost protective layer of the anther wall?','#3fae6a',.72,.5);
  layer('endo','Endothecium','The layer below the epidermis; it helps the anther to split open (dehiscence) and release pollen.','Which wall layer helps the anther split open to release pollen?','#89c96b',.64,.8);
  layer('mid','Middle layers','Two or three layers of cells between the endothecium and tapetum.','Which 2–3 layers lie between the endothecium and tapetum?','#d8d27a',.56,1.1);
  layer('tap','Tapetum','The innermost wall layer. Its cells have dense cytoplasm, often more than one nucleus, and they nourish the developing pollen grains.','Which innermost wall layer nourishes the developing pollen grains?','#e08c3c',.48,1.4);
  A.part('pollen','Microspores / pollen grains','Formed from microspore mother cells by meiosis (microsporogenesis) — each mother cell gives a tetrad of four microspores.','What does each microspore mother cell form by meiosis?');
  const pl=A.mat('pollen','#f7e27a'); L.forEach(([x,z])=>{ scatterIn(14,p=>{ const q=V(p.x*.36,0,p.z*.36); return q.length()<.36?q:null; }).forEach(q=>A.add('pollen',at(new T.Mesh(sph(.075,10,8),pl),x+q.x,.48+R(0,.12),z+q.z))); A.proxy('pollen',[x,.5,z],.38); });
  A.part('conn','Connective','The sterile central tissue that joins the anther lobes.','Which sterile tissue joins the lobes of the anther?');
  A.add('conn',at(new T.Mesh(new T.BoxGeometry(1.0,.45,2.6),A.mat('conn','#5cc77a')),0,-.78,0));
  A.add('conn',at(new T.Mesh(new T.BoxGeometry(2.6,.45,.8),A.mat('conn','#5cc77a')),0,-.78,0));
  A.note('Each anther is bilobed and dithecous, with four microsporangia — one at each corner. Inner layers are drawn taller so every layer is visible.');
 }};

MODELS['ovule']={zoom:0.72, t:'Ovule & embryo sac', pack:'repro', emoji:'🥚', ch:'II PUC Ch 1 · Sexual Reproduction in Flowering Plants', cam:9.5, slice:{n:[0,0,-1],on:true},
 build(A){ seed=101;
  const shellOpen=(rx,ry,rz,open)=>{ const g=new T.SphereGeometry(1,40,30,0,2*PI,0,PI-open); g.scale(rx,ry,rz); return g; };
  A.part('outer','Outer integument','The outer protective layer of the ovule; it becomes part of the seed coat (testa).','Which outer layer of the ovule becomes the testa?',{shell:true});
  A.add('outer',new T.Mesh(shellOpen(1.75,2.35,1.75,.38),A.mat('outer','#7cc56b',{opacity:.35}))); A.anchor('outer',[1.75,.6,0]);
  A.part('inner','Inner integument','The inner protective layer of the ovule.','Which inner protective layer surrounds the nucellus?',{shell:true});
  A.add('inner',new T.Mesh(shellOpen(1.5,2.1,1.5,.42),A.mat('inner','#b5e39c',{opacity:.3}))); A.anchor('inner',[-1.5,.9,0]);
  A.part('nuc','Nucellus','The mass of cells inside the integuments; it has plenty of reserve food and holds the embryo sac.','Which mass of cells inside the integuments holds the embryo sac?',{shell:true});
  A.add('nuc',new T.Mesh(ell(1.2,1.85,1.2),A.mat('nuc','#f5e7b8',{opacity:.3}))); A.anchor('nuc',[.95,1.2,0]);
  A.part('micro','Micropyle','The small opening at the tip of the ovule where the integuments do not meet — the pollen tube usually enters here.','Through which small opening does the pollen tube usually enter the ovule?');
  A.add('micro',at(rot(new T.Mesh(new T.TorusGeometry(.42,.06,8,32),A.mat('micro','#ffffff')),PI/2,0,0),0,-2.3,0)); A.proxy('micro',[0,-2.35,0],.4);
  A.part('chal','Chalaza','The basal part of the ovule opposite the micropyle, where integuments, nucellus and funicle meet.','Which end of the ovule lies opposite the micropyle?');
  A.add('chal',at(new T.Mesh(ell(.6,.16,.6),A.mat('chal','#a07a3c')),0,2.2,0));
  A.part('fun','Funicle','The stalk that attaches the ovule to the placenta.','Which stalk attaches the ovule to the placenta?');
  A.add('fun',new T.Mesh(tube([V(0,2.25,0),V(.6,2.9,0),V(1.6,3.3,0),V(2.6,3.4,0)],.16,30),A.mat('fun','#3fae6a')));
  A.part('hilum','Hilum','The point where the funicle joins the body of the ovule.','Where does the funicle join the body of the ovule?');
  A.add('hilum',at(new T.Mesh(sph(.2),A.mat('hilum','#e0a93a')),.12,2.35,0));
  A.part('sac','Embryo sac (female gametophyte)','Formed from the functional megaspore by three free-nuclear divisions: 8 nuclei, 7 cells.','How many nuclei and cells does a typical embryo sac have?',{shell:true});
  A.add('sac',at(new T.Mesh(ell(.58,1.3,.58),A.mat('sac','#ffe0f0',{opacity:.28})),0,-.25,0)); A.anchor('sac',[.6,-.2,0]);
  A.part('egg','Egg cell','The female gamete at the micropylar end; it fuses with a male gamete to form the zygote (syngamy).','Which cell fuses with a male gamete to form the zygote?');
  A.add('egg',at(new T.Mesh(sph(.22),A.mat('egg','#e05d5d')),0,-.95,0));
  A.part('syn','Synergids','Two cells beside the egg; their filiform apparatus guides the pollen tube in.','Which two cells guide the pollen tube with their filiform apparatus?');
  const sm=A.mat('syn','#ff9ec4'); [-.2,.2].forEach(x=>A.add('syn',at(new T.Mesh(ell(.16,.24,.16),sm),x,-1.3,0)));
  A.part('polar','Polar nuclei (central cell)','Two polar nuclei in the large central cell; they fuse with the second male gamete to form the triploid primary endosperm nucleus.','Which nuclei fuse with the second male gamete to form the PEN?');
  const pm=A.mat('polar','#a06edc'); [-.13,.13].forEach(x=>A.add('polar',at(new T.Mesh(sph(.12),pm),x,-.15,0)));
  A.part('anti','Antipodal cells','Three cells at the chalazal end of the embryo sac.','Which three cells lie at the chalazal end of the embryo sac?');
  const am=A.mat('anti','#4a8fe0'); [[-.2,.8],[.2,.8],[0,1.05]].forEach(([x,y])=>A.add('anti',at(new T.Mesh(sph(.15),am),x,y,0)));
 }};

MODELS['sperm']={t:'Human sperm', pack:'repro', emoji:'🏊', ch:'II PUC Ch 2 · Human Reproduction', cam:9,
 build(A){ seed=111;
  A.part('acro','Acrosome','A cap-like structure on the front of the head, filled with enzymes that help the sperm enter the ovum.','Which cap on the sperm head has enzymes to help fertilisation?');
  const ac=new T.Mesh(new T.SphereGeometry(1,24,16,0,2*PI,0,PI/2),A.mat('acro','#2EE6C5',{opacity:.85})); ac.scale.set(.62,.9,.48); ac.rotation.z=PI/2; at(ac,-3.65,0,0); A.add('acro',ac);
  A.part('head','Head','The oval head contains an elongated haploid nucleus, capped by the acrosome.','Which part of the sperm contains the haploid nucleus?',{shell:true});
  A.add('head',at(new T.Mesh(ell(1.05,.68,.48),A.mat('head','#c9d6e3',{opacity:.35})),-3.3,0,0)); A.anchor('head',[-3.0,.75,0]);
  A.part('nuc','Haploid nucleus','Carries 23 chromosomes — including either an X or a Y, which decides the sex of the baby.','Which part of the sperm decides the sex of the baby?');
  A.add('nuc',at(new T.Mesh(ell(.8,.5,.32),A.mat('nuc','#8f63d8')),-3.2,0,0));
  A.part('neck','Neck','A short region joining the head to the middle piece.','Which short region joins the head and middle piece?');
  A.add('neck',at(rot(new T.Mesh(cyl(.17,.2,.4,16),A.mat('neck','#9fb4c9')),0,0,PI/2),-2.05,0,0));
  A.part('mid','Middle piece','Contains numerous mitochondria that make energy for the movement of the tail.','Which part of the sperm supplies energy for swimming?');
  A.add('mid',at(rot(new T.Mesh(cyl(.17,.17,2.1,16),A.mat('mid','#b5c4d6')),0,0,PI/2),-.8,0,0));
  A.part('mito','Mitochondria','Wound in a spiral around the middle piece; they produce ATP for the tail.','Which spirally arranged organelles power the tail?');
  A.add('mito',new T.Mesh(tube(helix(.24,.16,13,0,260,'x',[-.8,0,0]),.07,260),A.mat('mito','#e08c3c')));
  A.part('tail','Tail','The long tail moves in a whip-like way and helps the sperm swim towards the ovum.','Which part helps the sperm swim?');
  const tm=A.mat('tail','#dfe7ef'); const tail=new T.Mesh(new T.BufferGeometry(),tm); A.add('tail',tail);
  const pts=t=>{ const a=[]; for(let i=0;i<=40;i++){ const s=i/40; a.push(V(.25+s*6,Math.sin(s*9-t*6)*.45*s,0)); } return a; };
  A.anim(t=>{ tail.geometry.dispose(); tail.geometry=new T.TubeGeometry(new T.CatmullRomCurve3(pts(t)),80,.07,8,false); });
  A.anchor('tail',[4.5,.7,0]);
  A.note('About 200–300 million sperms are released in one ejaculation; at least 60% must have normal shape and 40% vigorous motility for normal fertility.');
 }};

/* ================= MICROBES & IMMUNITY PACK ================= */
MODELS['bacterium']={zoom:0.5, t:'Bacterial cell', pack:'micro', emoji:'🦠', ch:'I PUC Ch 8 · Cell (prokaryotic cell) · Ch 2', cam:10, slice:{n:[0,0,-1],on:true},
 build(A){ seed=121;
  const cap=(r,len)=>{ const g=capsule(r,len,40); g.rotateZ(PI/2); return g; };
  A.part('caps','Capsule (glycocalyx)','A thick, tough outer layer in some bacteria (a loose sheath is called a slime layer). It protects the cell.','Which thick outer glycocalyx layer protects some bacteria?',{shell:true});
  A.add('caps',new T.Mesh(cap(1.55,4.2),A.mat('caps','#c8b6ff',{opacity:.16}))); A.anchor('caps',[0,1.6,.2]);
  A.part('wall','Cell wall','A rigid layer below the glycocalyx that gives shape and prevents bursting.','Which rigid layer gives the bacterium its shape?',{shell:true});
  A.add('wall',new T.Mesh(cap(1.32,4.1),A.mat('wall','#c69a5a',{opacity:.3}))); A.anchor('wall',[-2.6,-1.0,.3]);
  A.part('mem','Plasma membrane','A selectively permeable lipid bilayer, structurally similar to that of eukaryotes.','Which selectively permeable layer lies just inside the bacterial cell wall?',{shell:true});
  A.add('mem',new T.Mesh(cap(1.18,4.0),A.mat('mem','#8fd3c3',{opacity:.25}))); A.anchor('mem',[2.4,-.95,.2]);
  A.part('nucleoid','Nucleoid (genomic DNA)','A single circular chromosome lying naked in the cytoplasm — there is no nuclear membrane.','What is the naked region of genomic DNA in a bacterium called?');
  const np=[]; for(let i=0;i<70;i++){ const t=i/70*2*PI*5; np.push(V(Math.cos(t*.37)*1.3+Math.sin(t*.9)*.3,Math.sin(t*.53)*.55,Math.cos(t*.71)*.45)); } np.push(np[0].clone());
  A.add('nucleoid',new T.Mesh(tube(np,.05,400,true),A.mat('nucleoid','#a06edc')));
  A.part('plasmid','Plasmid','A small circular DNA outside the genomic DNA. It can give the bacterium properties like antibiotic resistance.','Which small extra circular DNA can carry antibiotic resistance?');
  const plm=A.mat('plasmid','#e05d5d'); [[-1.9,.5,.3],[1.8,-.45,-.3]].forEach(p=>{ const m=at(new T.Mesh(new T.TorusGeometry(.2,.045,8,30),plm),...p); m.rotation.set(1,.5,0); A.add('plasmid',m); A.proxy('plasmid',p,.3); });
  A.part('ribo','70S ribosomes','Prokaryotic ribosomes (70S) are attached to the plasma membrane or free; several on one mRNA form a polysome.','Which ribosomes (and polysomes) are found in prokaryotes?');
  const rm=A.mat('ribo','#ff9e9e'); scatterIn(30,p=>{ const q=V(p.x*2.6,p.y*1,p.z*1); return q.y*q.y+q.z*q.z<1&&Math.abs(q.y)>.55?q:null; }).forEach(p=>{ A.add('ribo',at(new T.Mesh(sph(.055,8,6),rm),p.x,p.y,p.z)); A.proxy('ribo',[p.x,p.y,p.z],.14); });
  A.part('meso','Mesosome','An infolding of the plasma membrane; it helps in cell wall formation, DNA replication, respiration and secretion.','Which membrane infolding helps in respiration and DNA replication in bacteria?');
  A.add('meso',at(new T.Mesh(new T.TorusKnotGeometry(.24,.06,60,8,2,3),A.mat('meso','#2EE6C5')),.6,-.9,-.1));
  A.part('flag','Flagellum','A thin whip-like filament used for movement; it has a filament, a hook and a basal body.','Which whip-like structure helps a bacterium move?');
  A.add('flag',new T.Mesh(tube(helix(.22,.55,7,0,200,'x',[5.6,0,0]),.045,200),A.mat('flag','#e0a93a')));
  A.add('flag',new T.Mesh(tube([V(3.4,0,0),V(3.7,.05,0),V(3.85,.15,.1)],.06,20),A.mat('flag','#e0a93a'))); A.anchor('flag',[6.5,.5,0]);
  A.part('pili','Pili','Long tubular protein structures on the surface (not used for motility).','Which elongated tubular surface structures are not used for movement?');
  const pim=A.mat('pili','#7fe3cf'); [[-1.2,1],[.4,1],[1.4,-1],[-.6,-1]].forEach(([x,s],k)=>{ const m=new T.Mesh(cyl(.035,.035,1.4,8),pim); at(m,x,s*1.9,k%2?.3:-.3); m.rotation.z=s*.25; A.add('pili',m); A.proxy('pili',[x,s*2.2,0],.3); });
  A.part('fimb','Fimbriae','Small bristle-like fibres that help bacteria attach to rocks in streams and to host tissues.','Which small bristle-like fibres help bacteria stick to host tissues?');
  const fim=A.mat('fimb','#d9d2ff'); fib(40,1).forEach((d,i)=>{ if(Math.abs(d.x)>.7||Math.abs(d.y)<.3) return; const p=V(d.x*2.6,d.y*1.55,d.z*1.55); const m=new T.Mesh(cyl(.015,.015,.35,5),fim); m.position.copy(p.clone().add(d.clone().multiplyScalar(.15))); m.quaternion.setFromUnitVectors(V(0,1,0),d.clone().normalize()); A.add('fimb',m); });
  A.proxy('fimb',[-1.8,1.65,0],.35);
 }};

MODELS['phage']={t:'Bacteriophage', pack:'micro', emoji:'🛸', ch:'II PUC Ch 5 · Hershey–Chase experiment', cam:9.5,
 build(A){ seed=131;
  A.part('head','Head (protein coat)','An icosahedral protein capsid. In the Hershey–Chase experiment this coat stayed outside the bacterium (labelled with ³⁵S).','Which part was labelled with radioactive sulphur (³⁵S) by Hershey and Chase?',{shell:true});
  const hg=new T.IcosahedronGeometry(1.25,0); hg.scale(1,1.3,1); A.add('head',at(new T.Mesh(hg,A.mat('head','#c9d6e3',{opacity:.4,flat:true})),0,2.3,0)); A.anchor('head',[1.2,3.3,0]);
  A.part('dna','DNA','The genetic material packed inside the head. Hershey and Chase labelled it with ³²P — it entered the bacterium.','Which part entered the bacterium and was labelled with ³²P?');
  const dp=[]; for(let i=0;i<120;i++){ const t=i/120*2*PI*7; dp.push(V(Math.cos(t)*.7*Math.sin(i/120*PI),2.3+Math.cos(i/120*PI)*1.0,Math.sin(t)*.7*Math.sin(i/120*PI))); }
  A.add('dna',new T.Mesh(tube(dp,.05,500),A.mat('dna','#a06edc')));
  A.part('collar','Collar','The short neck region joining the head to the tail.','Which short region joins the head to the tail?');
  A.add('collar',at(new T.Mesh(cyl(.5,.5,.14,24),A.mat('collar','#e0a93a')),0,.65,0));
  A.part('sheath','Tail sheath','A contractile hollow tube. It contracts to push the tail core through the bacterial wall so the DNA can be injected.','Which contractile tube helps inject the DNA?');
  const sh=A.mat('sheath','#9fb4c9'); A.add('sheath',at(new T.Mesh(cyl(.28,.28,2.3,24),sh),0,-.6,0)); for(let k=0;k<9;k++) A.add('sheath',at(rot(new T.Mesh(new T.TorusGeometry(.3,.04,6,24),sh),PI/2,0,0),0,.35-k*.25,0));
  A.part('plate','Base plate','A hexagonal plate at the end of the tail; it attaches to the bacterial cell surface.','Which hexagonal plate attaches to the bacterium?');
  A.add('plate',at(new T.Mesh(cyl(.72,.72,.2,6),A.mat('plate','#e05d5d')),0,-1.85,0));
  A.part('fibres','Tail fibres','Six long jointed fibres that recognise and attach to the host bacterium.','Which long jointed fibres recognise the host cell?');
  const fbm=A.mat('fibres','#2EE6C5'); for(let k=0;k<6;k++){ const a=k*PI/3; const c=Math.cos(a), s=Math.sin(a); A.add('fibres',new T.Mesh(tube([V(c*.7,-1.85,s*.7),V(c*1.6,-1.4,s*1.6),V(c*2.0,-2.8,s*2.0)],.05,30),fbm)); }
  A.anchor('fibres',[2.0,-2.6,0]);
 }};

MODELS['hiv']={zoom:0.7, t:'HIV (Human Immunodeficiency Virus)', pack:'micro', emoji:'🔴', ch:'II PUC Ch 7 · Human Health and Disease', cam:8.5, slice:{n:[0,0,-1],on:true},
 build(A){ seed=141;
  A.part('env','Lipid envelope','An outer lipid layer taken from the host cell membrane when the virus buds out.','Which outer layer comes from the host cell membrane?',{shell:true});
  A.add('env',new T.Mesh(sph(2.2,48,32),A.mat('env','#f2c48d',{opacity:.28}))); A.anchor('env',[-1.6,1.6,0]);
  A.part('spike','Envelope glycoproteins','Surface spikes that bind to receptors on helper T-cells and macrophages so the virus can enter.','Which surface spikes help HIV attach to helper T-cells?');
  const sk=A.mat('spike','#e05d5d'), st=A.mat('spike2','#c94a4a'); fib(42,2.2).forEach(p=>{ const d=p.clone().normalize(); const stalk=new T.Mesh(cyl(.05,.05,.35,6),st); stalk.position.copy(p.clone().add(d.clone().multiplyScalar(.17))); stalk.quaternion.setFromUnitVectors(V(0,1,0),d); A.add('spike',stalk); const kn=new T.Mesh(sph(.16,12,10),sk); kn.position.copy(p.clone().add(d.clone().multiplyScalar(.42))); A.add('spike',kn); });
  A.part('matrix','Matrix protein layer','A protein layer lining the inside of the envelope.','Which protein layer lines the inside of the envelope?',{shell:true});
  A.add('matrix',new T.Mesh(sph(1.95,40,28),A.mat('matrix','#8fd3ff',{opacity:.16}))); A.anchor('matrix',[1.4,-1.2,0]);
  A.part('capsid','Capsid (core)','The cone-shaped protein core that holds the RNA genome and enzymes.','Which cone-shaped protein core holds the RNA?');
  const cp=new T.Mesh(cyl(.42,.95,2.3,28),A.mat('capsid','#a06edc',{opacity:.55})); cp.rotation.z=.5; A.add('capsid',cp); A.anchor('capsid',[-.6,-1.1,0]);
  A.part('rna','RNA genome','HIV is a retrovirus with two copies of single-stranded RNA as its genetic material.','What is the genetic material of HIV?');
  const rm=A.mat('rna','#ff6b9a'); [-.12,.12].forEach((o,k)=>{ const pts=[]; for(let i=0;i<=24;i++){ const y=-.9+i*.075; pts.push(V(o+Math.sin(i*.9+k)*.14,y,Math.cos(i*.9+k)*.14)); } const m=new T.Mesh(tube(pts,.04,80),rm); m.rotation.z=.5; A.add('rna',m); });
  A.part('rt','Reverse transcriptase','The enzyme that copies the viral RNA into DNA inside the host cell; this viral DNA then joins the host DNA.','Which enzyme makes viral DNA from the RNA genome?');
  const rtm=A.mat('rt','#e0a93a'); [[.25,.5,.15],[-.3,-.2,.2],[.1,-.65,.1]].forEach(p=>{ const v=V(...p).applyAxisAngle(V(0,0,1),.5); A.add('rt',at(new T.Mesh(sph(.13,12,10),rtm),v.x,v.y,v.z)); A.proxy('rt',[v.x,v.y,v.z],.22); });
  A.note('HIV first enters macrophages (which become "HIV factories") and then attacks helper T-lymphocytes. ELISA is used to detect infection.');
 }};

MODELS['antibody']={t:'Antibody (H₂L₂)', pack:'micro', emoji:'🛡️', ch:'II PUC Ch 7 · Human Health and Disease', cam:9,
 build(A){ seed=151;
  const seg=(key,mat,a,b,r)=>{ const d=b.clone().sub(a); const m=new T.Mesh(capsule(r,d.length()-2*r,20),mat); m.position.copy(a.clone().add(b).multiplyScalar(.5)); m.quaternion.setFromUnitVectors(V(0,1,0),d.normalize()); A.add(key,m); };
  A.part('heavy','Heavy chains (H)','The two longer polypeptide chains. They form the stem and the inner half of each arm.','How many long heavy chains does an antibody have?');
  A.part('light','Light chains (L)','The two shorter polypeptide chains, one on the outer side of each arm.','Which two shorter chains lie on the outer side of each arm?');
  A.part('ss','Disulphide bonds','Bonds that hold the four chains together — between the two heavy chains and between each light and heavy chain.','Which bonds hold the four chains of an antibody together?');
  A.part('site','Antigen-binding sites','The tips of the two arms; their shape fits one specific antigen, so each antibody is specific.','Where on an antibody does the antigen fit?');
  A.part('ag','Antigen','A foreign molecule (for example on a pathogen) that the antibody recognises and binds.','Which foreign molecule does the antibody bind?');
  const hm=A.mat('heavy','#4a8fe0'), lm=A.mat('light','#e0a93a'), sm=A.mat('ss','#ffffff'), stm=A.mat('site','#2EE6C5'), am=A.mat('ag','#e05d5d');
  seg('heavy',hm,V(-.24,-2.6,0),V(-.24,-.2,0),.22); seg('heavy',hm,V(.24,-2.6,0),V(.24,-.2,0),.22);
  const arm=(s)=>{ const base=V(s*.24,-.1,0), tip=V(s*1.85,2.0,0); seg('heavy',hm,base,tip,.22); const off=V(s*.38,-.29,0); seg('light',lm,base.clone().add(V(s*.35,.55,0)).add(off),tip.clone().add(off),.2);
    A.add('site',at(new T.Mesh(sph(.24,16,12),stm),tip.x+s*.12,tip.y+.22,0));
    const mid=base.clone().add(tip).multiplyScalar(.5); const ssb=new T.Mesh(cyl(.05,.05,.42,8),sm); ssb.position.copy(mid.clone().add(V(s*.2,-.15,0))); ssb.rotation.z=s*(PI/2-.85); A.add('ss',ssb); A.proxy('ss',[mid.x+s*.2,mid.y-.15,0],.2); };
  arm(-1); arm(1);
  [-.35,-.65].forEach(y=>{ const b=rot(new T.Mesh(cyl(.05,.05,.3,8),sm),0,0,PI/2); at(b,0,y,0); A.add('ss',b); });
  A.proxy('ss',[0,-.5,0],.25);
  const ag=new T.Mesh(new T.DodecahedronGeometry(.42,0),am); at(ag,2.25,2.65,0); A.add('ag',ag);
  A.anchor('heavy',[-.5,-1.6,0]); A.anchor('light',[-2.3,1.2,0]); A.anchor('ss',[0,-.5,.3]); A.anchor('site',[-2.0,2.4,0]); A.anchor('ag',[2.3,3.2,0]);
  A.note('Each antibody has four peptide chains — two heavy and two light — so it is written as H₂L₂. Types: IgA, IgM, IgE, IgG.');
 }};

window.PACKS=[['cell','🧫 Cell in 3D','I PUC Ch 8'],['dna','🧬 DNA in 3D','II PUC Ch 5'],['repro','🌸 Reproduction in 3D','II PUC Ch 1 & 2'],['micro','🦠 Microbes & Immunity in 3D','I PUC Ch 2, 8 · II PUC Ch 5, 7']];
})();
