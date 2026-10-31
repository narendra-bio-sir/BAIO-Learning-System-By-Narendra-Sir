/* BAIO Exam Scorer — original labelled diagrams (drawn for BAIO, theme-aware SVG).
   window.ES_DIAGRAMS[chapter][index] -> SVG string, matching EXAM_SCORER[ch].dia[index]. */
(function(){
  function P(cx, cy, r, deg){ var a = (deg - 90) * Math.PI / 180; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; }
  function r1(n){ return Math.round(n * 10) / 10; }
  /* label: leader line from (x,y) to (tx,ty) and text */
  function L(x, y, tx, ty, t, anchor){
    anchor = anchor || (tx >= x ? 'start' : 'end');
    var dx = anchor === 'start' ? 4 : anchor === 'end' ? -4 : 0;
    return '<line class="l" x1="'+r1(x)+'" y1="'+r1(y)+'" x2="'+r1(tx)+'" y2="'+r1(ty)+'"/><circle class="dot" cx="'+r1(x)+'" cy="'+r1(y)+'" r="1.8"/>'
      + '<text x="'+r1(tx+dx)+'" y="'+r1(ty+4)+'" text-anchor="'+anchor+'">'+t+'</text>';
  }
  function T(x, y, t, cls, anchor){ return '<text x="'+x+'" y="'+y+'" class="'+(cls||'')+'" text-anchor="'+(anchor||'middle')+'">'+t+'</text>'; }
  function svg(w, h, label, body, x0){ return '<svg class="dg" viewBox="'+(x0||0)+' 0 '+w+' '+h+'" role="img" aria-label="'+label+'"><defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" class="arh"/></marker></defs>'+body+'</svg>'; }
  function ring(cx, cy, r, n, rr, cls){ var s = ''; for(var i = 0; i < n; i++){ var p = P(cx, cy, r, i * 360 / n); s += '<circle class="'+cls+'" cx="'+r1(p[0])+'" cy="'+r1(p[1])+'" r="'+rr+'"/>'; } return s; }

  var D = {};

  /* ---------- Ch 1 ---------- */
  D[1] = [
    (function(){ var cx = 125, cy = 125, s = '';
      s += '<circle class="o" cx="'+cx+'" cy="'+cy+'" r="102"/>';
      s += '<circle class="band" cx="'+cx+'" cy="'+cy+'" r="94" style="stroke-width:11"/>';
      s += '<circle class="o thin" cx="'+cx+'" cy="'+cy+'" r="86"/><circle class="o thin" cx="'+cx+'" cy="'+cy+'" r="79"/><circle class="o thin" cx="'+cx+'" cy="'+cy+'" r="72"/>';
      s += ring(cx, cy, 64, 26, 6.5, 'fb o thin');
      [[0,0],[-26,-22],[26,-22],[-26,22],[26,22],[0,-38],[0,38],[-40,0],[40,0]].forEach(function(o){ var x = cx+o[0], y = cy+o[1];
        s += '<circle class="fa o thin" cx="'+(x-5)+'" cy="'+(y-5)+'" r="5"/><circle class="fa o thin" cx="'+(x+5)+'" cy="'+(y-5)+'" r="5"/><circle class="fa o thin" cx="'+(x-5)+'" cy="'+(y+5)+'" r="5"/><circle class="fa o thin" cx="'+(x+5)+'" cy="'+(y+5)+'" r="5"/>'; });
      var e = P(cx,cy,102,60), en = P(cx,cy,94,78), m = P(cx,cy,79,98), tp = P(cx,cy,64,118), sp = [cx+30, cy+28];
      s += L(e[0],e[1],250,58,'Epidermis') + L(en[0],en[1],250,90,'Endothecium') + L(m[0],m[1],250,122,'Middle layers') + L(tp[0],tp[1],250,154,'Tapetum') + L(sp[0],sp[1],250,186,'Microspore tetrads');
      s += T(125, 248, 'One microsporangium (T.S.)', 'cap');
      /* whole anther inset */
      var ax = 345, ay = 226; s += '<g transform="translate(0,0)"><ellipse class="o fa" cx="'+ax+'" cy="'+ay+'" rx="8" ry="12"/>';
      [[-20,-12],[20,-12],[-20,12],[20,12]].forEach(function(o){ s += '<circle class="o fb" cx="'+(ax+o[0])+'" cy="'+(ay+o[1])+'" r="10"/>'; });
      s += '</g>' + L(ax, ay, 312, 250, 'Connective', 'end') + T(345, 262, 'Whole anther', 'cap');
      return svg(390, 270, 'T.S. of anther showing wall layers', s); })(),

    (function(){ var s = '';
      s += '<ellipse class="o fd" cx="190" cy="110" rx="160" ry="72"/>';
      s += '<path class="o fb" d="M44 100 q18 -20 44 -10 q-6 14 -10 22 q-18 4 -34 -12z"/><path class="o fb" d="M44 120 q18 20 44 10 q-6 -14 -10 -22 q-18 -4 -34 12z"/>';
      s += '<path class="l" d="M32 104 l12 2 M32 110 l12 0 M32 116 l12 -2"/>';
      s += '<circle class="o fa" cx="100" cy="110" r="15"/><circle class="nuc" cx="100" cy="110" r="4"/>';
      s += '<circle class="nuc" cx="182" cy="104" r="5"/><circle class="nuc" cx="196" cy="116" r="5"/>';
      s += '<circle class="o fc" cx="318" cy="88" r="11"/><circle class="o fc" cx="330" cy="112" r="11"/><circle class="o fc" cx="314" cy="132" r="11"/>';
      s += L(62,96,22,22,'Synergids','start') + L(36,110,20,190,'Filiform apparatus','start') + L(104,116,128,205,'Egg','start')
        + L(189,110,190,22,'Central cell with 2 polar nuclei','middle') + L(325,100,340,22,'Antipodals','middle');
      s += T(40, 245, '◀ Micropylar end', 'cap', 'start') + T(352, 245, 'Chalazal end ▶', 'cap', 'end');
      return svg(380, 256, 'Mature 7-celled, 8-nucleate embryo sac', s); })(),

    (function(){ var s = '';
      s += '<path class="o fa" d="M191 214 A74 96 0 1 1 209 214"/>';
      s += '<path class="o fd" d="M193 200 A62 82 0 1 1 207 200"/>';
      s += '<ellipse class="o fb" cx="200" cy="112" rx="48" ry="68"/>';
      s += '<ellipse class="o fc" cx="200" cy="150" rx="14" ry="28"/>';
      s += '<path class="o" d="M176 210 Q160 236 162 262 M190 214 Q178 240 182 262"/>';
      s += L(200,212,268,236,'Micropyle') + L(184,214,110,236,'Hilum') + L(170,248,110,262,'Funicle')
        + L(200,22,280,22,'Chalaza') + L(128,96,62,96,'Outer integument','end') + L(140,140,62,140,'Inner integument','end')
        + L(236,90,300,80,'Nucellus') + L(212,150,300,160,'Embryo sac');
      return svg(380, 272, 'Anatropous ovule', s); })(),

    (function(){ var s = '';
      s += '<rect class="o fb" x="184" y="54" width="16" height="158" rx="8"/>';
      s += '<path class="o fa" d="M192 104 C120 60 70 100 92 150 C110 176 170 150 192 120z"/>';
      s += '<path class="o fa" d="M192 104 C264 60 314 100 292 150 C274 176 214 150 192 120z"/>';
      s += '<path class="o fc" d="M192 36 c-10 6 -10 16 0 20 c10 -4 10 -14 0 -20z"/>';
      s += '<path class="o fc" d="M184 208 q8 18 16 0z"/>';
      s += L(192,40,250,26,'Plumule') + L(110,128,20,210,'Cotyledons','start') + L(196,82,318,40,'Epicotyl')
        + L(196,160,318,176,'Hypocotyl') + L(192,196,318,204,'Radicle') + L(192,214,318,232,'Root cap');
      return svg(380, 246, 'Typical dicot embryo', s); })()
  ];

  /* ---------- Ch 2 ---------- */
  D[2] = [
    (function(){ var cx = 150, cy = 130, s = '';
      s += '<circle class="o fd" cx="'+cx+'" cy="'+cy+'" r="104" style="stroke-width:3"/>';
      s += ring(cx, cy, 94, 22, 6, 'fb o thin');
      s += ring(cx, cy, 78, 16, 8, 'fa o thin');
      s += ring(cx, cy, 60, 18, 4.5, 'fc o thin');
      for(var i = 0; i < 12; i++){ var a = P(cx, cy, 44, i * 30), b = P(cx, cy, 16, i * 30 + 12);
        s += '<ellipse class="nuc" cx="'+r1(a[0])+'" cy="'+r1(a[1])+'" rx="3" ry="2"/><path class="l" d="M'+r1(a[0])+' '+r1(a[1])+' Q'+r1((a[0]+b[0])/2+5)+' '+r1((a[1]+b[1])/2)+' '+r1(b[0])+' '+r1(b[1])+'"/>'; }
      [40, 160, 280].forEach(function(d){ var a = P(cx, cy, 103, d), b = P(cx, cy, 52, d + 4); s += '<path class="o fe" d="M'+r1(a[0])+' '+r1(a[1])+' L'+r1(b[0])+' '+r1(b[1])+'" style="stroke-width:7;stroke-linecap:round"/>'; });
      [[22,24],[276,30],[30,236]].forEach(function(o){ s += '<circle class="o fc" cx="'+o[0]+'" cy="'+o[1]+'" r="7"/><circle class="o fc" cx="'+(o[0]+12)+'" cy="'+(o[1]+6)+'" r="7"/>'; });
      var sg = P(cx,cy,94,60), ps = P(cx,cy,78,80), st = P(cx,cy,60,100), sm = P(cx,cy,40,120), se = P(cx,cy,80,160);
      s += L(sg[0],sg[1],278,70,'Spermatogonia') + L(ps[0],ps[1],278,100,'Primary spermatocyte') + L(st[0],st[1],278,130,'Spermatids')
        + L(sm[0],sm[1],278,160,'Sperms (in lumen)') + L(se[0],se[1],278,196,'Sertoli cell') + L(288,32,320,240,'Interstitial (Leydig) cells','end');
      return svg(420, 262, 'Section of a seminiferous tubule', s); })(),

    (function(){ var s = '';
      s += '<ellipse class="o fd" cx="190" cy="130" rx="170" ry="108" style="stroke-width:2.4"/>';
      s += '<circle class="o fb" cx="70" cy="120" r="12"/><circle class="o fa" cx="70" cy="120" r="6"/>';
      s += '<circle class="o fb" cx="112" cy="70" r="20"/><circle class="o fa" cx="112" cy="70" r="8"/>';
      s += '<circle class="o fb" cx="160" cy="190" r="28"/><path class="o fd" d="M150 178 q20 -6 26 16 q-14 10 -26 -16z"/><circle class="o fa" cx="152" cy="200" r="8"/>';
      s += '<circle class="o fb" cx="268" cy="96" r="52"/><path class="o fd" d="M236 78 q40 -26 66 10 q8 40 -40 46 q-40 -10 -26 -56z"/><circle class="o fa" cx="242" cy="126" r="11"/>';
      s += '<circle class="o fa" cx="350" cy="134" r="8"/><path class="l" d="M318 112 L344 128" marker-end="url(#ar)"/>';
      s += '<path class="o fg" d="M236 196 q20 -24 44 -8 q14 26 -12 36 q-34 4 -32 -28z"/>';
      s += '<path class="vein" d="M190 238 q-10 -20 6 -34 q16 -14 -2 -30 M204 238 q8 -22 -6 -34"/>';
      s += L(64,112,14,26,'Primary follicle','start') + L(122,58,150,26,'Secondary follicle','start') + L(176,212,96,252,'Tertiary follicle (antrum)','end')
        + L(300,60,320,26,'Graafian follicle','start') + L(350,142,396,226,'Ovum released','end') + L(258,212,300,252,'Corpus luteum','start') + L(200,226,212,262,'Blood vessels','start');
      return svg(400, 270, 'Section of an ovary', s); })(),

    (function(){ var s = '';
      s += '<ellipse class="o fb" cx="60" cy="80" rx="34" ry="22"/><path class="o fa" d="M34 66 q-16 14 0 28 q-8 -14 0 -28z"/><ellipse class="nuc2" cx="66" cy="80" rx="18" ry="12"/>';
      s += '<rect class="o fd" x="94" y="74" width="12" height="12" rx="3"/>';
      s += '<rect class="o fc" x="106" y="70" width="70" height="20" rx="8"/>';
      for(var i = 0; i < 6; i++){ s += '<path class="l" d="M'+(112+i*11)+' 72 q6 8 0 16"/>'; }
      s += '<path class="o" d="M176 80 q20 -10 40 0 t40 0 t40 0 t40 0 t30 0"/>';
      s += L(28,74,6,22,'Acrosome','start') + L(70,74,100,22,'Head with nucleus','start') + L(100,80,108,132,'Neck','start') + L(140,90,150,132,'Middle piece (mitochondria)','start') + L(300,82,320,132,'Tail','start');
      return svg(380, 150, 'Structure of a sperm', s); })()
  ];

  /* ---------- Ch 3 ---------- */
  D[3] = [
    (function(){ var s = '';
      s += '<path class="o fd" d="M80 50 q100 -24 200 0" style="stroke-width:8;stroke-linecap:round"/>';
      s += '<path class="o" d="M180 40 L180 190" style="stroke-width:8;stroke-linecap:round"/>';
      for(var y = 70; y < 170; y += 7){ s += '<ellipse class="cu" cx="180" cy="'+y+'" rx="9" ry="3"/>'; }
      s += '<path class="l" d="M176 192 q-10 30 -6 54 M184 192 q10 30 6 54"/>';
      s += L(270,46,300,24,'Plastic T-frame') + L(188,120,260,120,'Copper wire') + L(188,224,260,224,'Threads');
      return svg(380, 258, 'Copper T intra-uterine device', s); })()
  ];

  /* ---------- Ch 4 ---------- */
  function grid(x, y, n, size, heads, cells, colors){
    var s = '';
    heads.forEach(function(h, i){ s += T(x + size*(i+0.5), y - 8, h, 'b'); s += T(x - 14, y + size*(i+0.5) + 4, h, 'b'); });
    for(var r = 0; r < n; r++) for(var c = 0; c < n; c++){
      var k = cells[r][c]; s += '<rect class="o '+(colors[k.cls]||'fd')+'" x="'+(x+c*size)+'" y="'+(y+r*size)+'" width="'+size+'" height="'+size+'"/>' + T(x+c*size+size/2, y+r*size+size/2+4, k.t, n > 2 ? 'sm' : 'b');
    }
    return s;
  }
  D[4] = [
    (function(){ var s = '';
      s += T(190, 20, 'P:  Tall TT  ×  Dwarf tt', 'b') + T(190, 40, 'F1: all Tall (Tt)  →  self  Tt × Tt', 'b');
      var g = ['T','t'], cells = [[{t:'TT',cls:'d'},{t:'Tt',cls:'d'}],[{t:'Tt',cls:'d'},{t:'tt',cls:'r'}]];
      s += grid(140, 74, 2, 52, g, cells, {d:'fb', r:'fc'});
      s += T(330, 96, 'F2 ratio', 'cap') + T(330, 116, '3 Tall : 1 Dwarf', 'b') + T(330, 136, '1 TT : 2 Tt : 1 tt', 'b');
      s += T(118, 70, '♀ gametes →', 'cap', 'end');
      return svg(420, 190, 'Monohybrid cross Punnett square', s); })(),

    (function(){ var s = '', g = ['RY','Ry','rY','ry'], cells = [];
      for(var r = 0; r < 4; r++){ cells.push([]); for(var c = 0; c < 4; c++){
        var a = g[r], b = g[c], R = (a[0]+b[0]).split('').sort().join(''), Y = (a[1]+b[1]).split('').sort().join('');
        var cls = (R.indexOf('R') >= 0 ? 'R' : 'r') + (Y.indexOf('Y') >= 0 ? 'Y' : 'y');
        cells[r].push({t:R+Y, cls:cls}); } }
      s += T(190, 18, 'F1 RrYy × RrYy (Round Yellow)', 'b');
      s += grid(70, 44, 4, 42, g, cells, {RY:'fa', Ry:'fb', rY:'fe', ry:'fc'});
      s += '<rect class="o fa" x="270" y="60" width="14" height="14"/>' + T(290, 72, 'Round Yellow  9', 'b', 'start')
        + '<rect class="o fb" x="270" y="86" width="14" height="14"/>' + T(290, 98, 'Round Green  3', 'b', 'start')
        + '<rect class="o fe" x="270" y="112" width="14" height="14"/>' + T(290, 124, 'Wrinkled Yellow  3', 'b', 'start')
        + '<rect class="o fc" x="270" y="138" width="14" height="14"/>' + T(290, 150, 'Wrinkled Green  1', 'b', 'start');
      return svg(420, 220, 'Dihybrid cross Punnett square, 9:3:3:1', s); })()
  ];

  /* ---------- Ch 5 ---------- */
  D[5] = [
    (function(){ var s = '';
      function dna(y){ var x = 20, t = '';
        t += '<line class="o" x1="10" y1="'+y+'" x2="410" y2="'+y+'" style="stroke-width:2"/>';
        [['i',20,34,'fc'],['p',70,26,'fd'],['o',98,26,'fe'],['z',140,78,'fb'],['y',222,70,'fb'],['a',296,70,'fb']].forEach(function(b){ t += '<rect class="o '+b[3]+'" x="'+b[1]+'" y="'+(y-12)+'" width="'+b[2]+'" height="24" rx="4"/>' + T(b[1]+b[2]/2, y+4, b[0], 'b'); });
        return t; }
      s += T(10, 16, 'Lactose ABSENT → genes OFF', 'b', 'start') + dna(64);
      s += '<path class="o fg" d="M96 34 h30 v18 h-6 l-4 -6 l-4 6 h-16z"/>' + L(126,40,236,30,'Repressor bound to operator');
      s += '<ellipse class="o fd" cx="44" cy="96" rx="22" ry="11"/>' + T(44, 100, 'RNA pol', 'sm') + T(72, 112, '✕ blocked by repressor', 'sm', 'start');
      s += T(10, 142, 'Lactose PRESENT (inducer) → genes ON', 'b', 'start') + dna(186);
      s += '<path class="o fg" d="M330 148 h30 v18 h-6 l-4 -6 l-4 6 h-16z"/><circle class="o fa" cx="366" cy="152" r="5"/>' + L(330,158,300,162,'Inducer + repressor (inactive)','end');
      s += '<ellipse class="o fd" cx="160" cy="216" rx="22" ry="11"/>' + T(160, 220, 'RNA pol', 'sm');
      s += '<path class="o" d="M150 238 q12 -8 24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0 t24 0"/>' + T(350, 244, 'lac mRNA', 'sm', 'start');
      s += T(200, 268, 'z → β-galactosidase · y → permease · a → transacetylase', 'cap');
      return svg(420, 278, 'Lac operon off and on', s); })(),

    (function(){ var s = '';
      [['Generation 0',70,[[100,'h']]],['After 20 min',190,[[130,'m']]],['After 40 min',310,[[130,'m'],[160,'l']]]].forEach(function(t){
        var x = t[1]; s += '<path class="o fd" d="M'+(x-22)+' 40 v140 a22 22 0 0 0 44 0 v-140"/>';
        t[2].forEach(function(b){ s += '<rect class="'+(b[1]==='h'?'bh':b[1]==='m'?'bm':'bl')+'" x="'+(x-20)+'" y="'+b[0]+'" width="40" height="7" rx="2"/>'; });
        s += T(x, 26, t[0], 'b'); });
      s += T(410, 104, '¹⁵N/¹⁵N heavy', 'sm', 'end') + T(410, 134, '¹⁵N/¹⁴N hybrid', 'sm', 'end') + T(410, 164, '¹⁴N/¹⁴N light', 'sm', 'end');
      s += '<line class="l dash" x1="92" y1="103" x2="340" y2="103"/><line class="l dash" x1="212" y1="133" x2="340" y2="133"/><line class="l dash" x1="332" y1="163" x2="340" y2="163"/>';
      s += T(190, 228, 'CsCl density-gradient bands → semi-conservative replication', 'cap');
      return svg(420, 240, 'Meselson and Stahl experiment results', s); })()
  ];

  /* ---------- Ch 6 ---------- */
  D[6] = [
    (function(){ var s = '';
      s += '<circle class="o fd" cx="300" cy="80" r="56"/>';
      s += '<path class="o" d="M266 40 l20 26 M334 40 l-20 26" style="stroke-width:3"/><path class="spark" d="M290 70 l6 -6 l2 8 l8 -8"/>';
      s += '<path class="o" d="M250 104 C200 120 160 60 120 60 L90 60 L90 160" style="stroke-width:2"/>';
      s += '<path class="o" d="M300 136 L300 160" style="stroke-width:2"/>';
      s += '<rect class="o fb" x="290" y="160" width="20" height="60" rx="4"/><path class="o" d="M300 160 v60" style="stroke-width:2"/>';
      s += '<path class="o fd" d="M300 220 v12 q0 18 -18 18 h-12 q-14 0 -14 -14"/>';
      s += '<path class="o" d="M256 236 C220 236 190 230 160 210"/>';
      s += '<circle class="o fb" cx="120" cy="200" r="34"/><path class="flame" d="M110 252 q10 -18 10 -6 q4 -14 10 6z"/>';
      s += '<path class="o" d="M90 160 L104 176"/>';
      s += T(300, 76, 'CH₄  NH₃', 'sm') + T(300, 92, 'H₂  H₂O', 'sm');
      s += L(276,48,380,22,'Electrodes (spark)','end') + L(310,190,340,190,'Condenser') + L(268,248,330,258,'Trap: amino acids collect') + L(120,200,30,120,'Boiling water','end') + L(116,248,60,256,'Heat','end');
      return svg(460, 268, 'Miller–Urey apparatus', s, -50); })()
  ];

  /* ---------- Ch 7 ---------- */
  D[7] = [
    (function(){ var s = '', steps = [['Mosquito bite:','sporozoites enter blood',200,36],['Liver cells:','sporozoites multiply',350,100],['RBCs burst:','haemozoin → fever',350,190],['Gametocytes','form in RBCs',200,250],['Mosquito gut:','fertilisation',50,190],['Salivary glands:','sporozoites',50,100]];
      steps.forEach(function(p){ s += '<rect class="o '+(p[2]>200||(p[2]===200&&p[3]<100)?'fb':'fe')+'" x="'+(p[2]-66)+'" y="'+(p[3]-20)+'" width="132" height="40" rx="10"/>' + T(p[2], p[3]-3, p[0], 'b') + T(p[2], p[3]+12, p[1], 'sm'); });
      var arrows = [[266,40,330,78],[350,120,350,168],[330,212,266,244],[134,244,70,212],[50,168,50,122],[70,78,134,40]];
      arrows.forEach(function(a){ s += '<path class="l arr" d="M'+a[0]+' '+a[1]+' L'+a[2]+' '+a[3]+'" marker-end="url(#ar)"/>'; });
      s += T(200, 128, 'Human host', 'cap') + T(200, 146, '(right side)', 'sm') + T(200, 176, 'Mosquito host (left side)', 'sm');
      return svg(420, 280, 'Life cycle of Plasmodium', s); })(),

    (function(){ var s = '';
      s += '<path class="o fb" d="M184 230 L184 130 L120 60 L104 74 L168 140 L168 230z"/>';
      s += '<path class="o fb" d="M196 230 L196 130 L260 60 L276 74 L212 140 L212 230z"/>';
      s += '<path class="o fa" d="M94 84 L136 128 L124 140 L82 96z"/><path class="o fa" d="M286 84 L244 128 L256 140 L298 96z"/>';
      s += '<path class="ss" d="M176 160 h28 M176 172 h28 M150 118 l-10 10 M230 118 l10 10"/>';
      s += '<path class="o fc" d="M78 70 q-8 -16 10 -20 q18 4 18 18 M302 70 q8 -16 -10 -20 q-18 4 -18 18"/>';
      s += L(176,200,30,220,'Heavy chain','start') + L(90,90,14,140,'Light chain','start') + L(86,56,10,22,'Antigen-binding site','start')
        + L(204,166,392,196,'Disulphide bonds (S–S)','end') + L(296,58,392,22,'Antigen-binding site','end');
      return svg(400, 244, 'Structure of an antibody molecule', s); })()
  ];

  /* ---------- Ch 8 ---------- */
  D[8] = [
    (function(){ var s = '';
      s += '<path class="ground" d="M10 110 H410"/>';
      s += '<rect class="o fd" x="140" y="110" width="140" height="120" rx="6"/>';
      s += '<rect class="slurry" x="142" y="140" width="136" height="88"/>';
      s += '<path class="o fa" d="M150 140 v-60 h120 v60" style="stroke-width:2.4"/>';
      s += '<path class="o" d="M210 80 v-40 h60" style="stroke-width:3"/>';
      s += '<path class="o fd" d="M40 70 h70 v40 h-70z"/><path class="o" d="M90 110 L150 200" style="stroke-width:6;stroke-linecap:round"/>';
      s += '<path class="o fd" d="M310 110 h80 v40 h-80z"/><path class="o" d="M270 200 L320 130" style="stroke-width:6;stroke-linecap:round"/>';
      s += L(270,40,330,26,'Gas outlet (to kitchen)') + L(250,96,330,72,'Floating gas holder') + L(74,90,40,40,'Dung + water (inlet)','start')
        + L(210,200,210,252,'Digester: methanogens act on slurry','middle') + L(350,130,350,180,'Sludge (manure)','middle') + T(406, 102, 'Ground level', 'sm', 'end');
      return svg(420, 266, 'Biogas plant', s); })()
  ];

  /* ---------- Ch 9 ---------- */
  D[9] = [
    (function(){ var cx = 200, cy = 130, R = 82, s = '';
      function arc(a1, a2, cls){ var p1 = P(cx,cy,R,a1), p2 = P(cx,cy,R,a2); return '<path class="'+cls+'" d="M'+r1(p1[0])+' '+r1(p1[1])+' A'+R+' '+R+' 0 '+((a2-a1)>180?1:0)+' 1 '+r1(p2[0])+' '+r1(p2[1])+'"/>'; }
      s += '<circle class="o" cx="'+cx+'" cy="'+cy+'" r="'+R+'" style="stroke-width:3"/>';
      s += arc(28, 150, 'gene g1') + arc(250, 335, 'gene g2') + arc(220, 236, 'gene g3') + arc(178, 196, 'gene g4');
      function site(deg, name, out){ var a = P(cx,cy,R,deg), b = P(cx,cy,R+(out||34),deg); return L(a[0],a[1],b[0],b[1],name,(b[0] < cx-4 ? 'end' : b[0] > cx+4 ? 'start' : 'middle')); }
      s += site(0,'EcoRI',30) + site(10,'ClaI',44) + site(20,'Hind III',38) + site(48,'BamHI') + site(78,'Sal I') + site(292,'Pvu I') + site(316,'Pst I');
      var t1 = P(cx,cy,R-24,90), t2 = P(cx,cy,R-26,292), t3 = P(cx,cy,R-24,228), t4 = P(cx,cy,R-22,187);
      s += T(r1(t1[0]), r1(t1[1]), 'tetᴿ', 'b') + T(r1(t2[0]), r1(t2[1]), 'ampᴿ', 'b') + T(r1(t3[0]), r1(t3[1]), 'ori', 'b') + T(r1(t4[0]), r1(t4[1]), 'rop', 'b');
      s += T(cx, cy+4, 'pBR322', 'b');
      return svg(400, 262, 'E. coli cloning vector pBR322', s); })(),

    (function(){ var s = '';
      function strands(x, y, top, bot, gap){ return '<line class="st1" x1="'+x+'" y1="'+y+'" x2="'+(x+100)+'" y2="'+y+'"/><line class="st2" x1="'+x+'" y1="'+(y+gap)+'" x2="'+(x+100)+'" y2="'+(y+gap)+'"/>'; }
      s += T(66, 22, '1. Denaturation', 'b') + T(66, 38, 'heat separates strands', 'sm');
      s += strands(16, 70, 0, 0, 40);
      s += T(206, 22, '2. Annealing', 'b') + T(206, 38, 'primers bind', 'sm');
      s += strands(156, 70, 0, 0, 40) + '<rect class="pr" x="156" y="74" width="22" height="6"/><rect class="pr" x="234" y="98" width="22" height="6"/>';
      s += T(346, 22, '3. Extension', 'b') + T(346, 38, 'Taq polymerase', 'sm');
      s += strands(296, 70, 0, 0, 40) + '<line class="newst" x1="296" y1="78" x2="396" y2="78"/><line class="newst" x1="296" y1="102" x2="396" y2="102"/>';
      s += '<path class="l arr" d="M120 90 L150 90" marker-end="url(#ar)"/><path class="l arr" d="M260 90 L290 90" marker-end="url(#ar)"/>';
      s += '<path class="l arr" d="M346 130 Q346 170 206 170 Q66 170 66 130" marker-end="url(#ar)"/>' + T(206, 190, 'Repeat ~30 cycles → about a billion copies', 'cap');
      s += '<line class="st1" x1="20" y1="214" x2="44" y2="214"/>' + T(50, 218, 'template', 'sm', 'start') + '<rect class="pr" x="130" y="211" width="22" height="6"/>' + T(158, 218, 'primer', 'sm', 'start') + '<line class="newst" x1="230" y1="214" x2="254" y2="214"/>' + T(260, 218, 'new DNA', 'sm', 'start');
      return svg(410, 230, 'Polymerase chain reaction', s); })()
  ];

  /* ---------- Ch 10 ---------- */
  D[10] = [
    (function(){ var s = '';
      s += T(100, 20, 'Pro-insulin', 'b') + T(310, 20, 'Mature insulin', 'b');
      s += '<rect class="o fb" x="40" y="60" width="120" height="14" rx="6"/>' + T(100, 52, 'B chain', 'sm');
      s += '<rect class="o fa" x="56" y="120" width="88" height="14" rx="6"/>' + T(100, 152, 'A chain', 'sm');
      s += '<path class="o fc" d="M160 67 C200 70 200 128 144 127" style="stroke-width:6;fill:none"/>' + T(204, 100, 'C peptide', 'sm', 'start');
      s += '<path class="ss" d="M80 74 v46 M120 74 v46"/>' + L(120,98,40,180,'Disulphide bonds','start');
      s += '<path class="l arr" d="M210 120 L250 120" marker-end="url(#ar)"/>' + T(230, 140, 'C removed', 'sm');
      s += '<rect class="o fb" x="250" y="60" width="120" height="14" rx="6"/><rect class="o fa" x="266" y="120" width="88" height="14" rx="6"/><path class="ss" d="M290 74 v46 M330 74 v46"/>';
      s += T(310, 160, 'Chains A and B made separately in E. coli,', 'sm') + T(310, 176, 'then joined by S–S bonds (Humulin)', 'sm');
      return svg(410, 196, 'Maturation of pro-insulin to insulin', s); })()
  ];

  /* ---------- Ch 11 ---------- */
  D[11] = [
    (function(){ var s = '';
      s += '<path class="ax" d="M50 20 V220 H390" marker-end="url(#ar)"/><path class="ax" d="M50 220 V20" marker-end="url(#ar)"/>';
      s += '<path class="cj" d="M54 216 C200 214 250 170 290 30"/>';
      s += '<path class="cs" d="M54 216 C150 214 170 100 230 80 C280 66 320 64 380 64"/>';
      s += '<line class="l dash" x1="50" y1="62" x2="390" y2="62"/>' + T(56, 56, 'Carrying capacity (K)', 'sm', 'start');
      s += T(300, 40, 'a: J-shaped (exponential) dN/dt = rN', 'sm', 'start') + T(240, 110, 'b: S-shaped (logistic)', 'sm', 'start');
      s += T(220, 244, 'Time (t) →', 'b') + '<text x="24" y="120" class="b" text-anchor="middle" transform="rotate(-90 24 120)">Population density (N) →</text>';
      return svg(410, 254, 'Population growth curves', s); })(),

    (function(){ var s = '';
      function pyr(x, pts, name){ var t = '', cls = ['fc','fb','fa'];
        /* pts: half-widths at y = 60, 110, 160, 210 (bottom) */
        var ys = [60, 110, 160, 210];
        for(var i = 0; i < 3; i++){ var a = pts[i], b = pts[i+1];
          t += '<path class="o '+cls[i]+'" d="M'+(x-a)+' '+ys[i]+' L'+(x+a)+' '+ys[i]+' L'+(x+b)+' '+ys[i+1]+' L'+(x-b)+' '+ys[i+1]+'z"/>'; }
        return t + T(x, 236, name, 'b'); }
      s += pyr(80, [8, 26, 46, 66], 'Expanding') + pyr(210, [20, 46, 58, 60], 'Stable') + pyr(340, [34, 54, 56, 40], 'Declining');
      s += '<rect class="o fc" x="20" y="10" width="12" height="12"/>' + T(36, 20, 'Post-reproductive', 'sm', 'start') + '<rect class="o fb" x="150" y="10" width="12" height="12"/>' + T(166, 20, 'Reproductive', 'sm', 'start') + '<rect class="o fa" x="260" y="10" width="12" height="12"/>' + T(276, 20, 'Pre-reproductive', 'sm', 'start');
      return svg(420, 248, 'Age pyramids of human populations', s); })()
  ];

  /* ---------- Ch 12 ---------- */
  D[12] = [
    (function(){ var s = '', levels = [['Tertiary consumer (TC)','1 J','fc',32],['Secondary consumer (SC)','10 J','fe',66],['Primary consumer (PC)','100 J','fb',100],['Primary producer (PP)','1000 J','fa',134]];
      levels.forEach(function(l, i){ var y = 30 + i * 48, top = i ? levels[i-1][3] : 0, bot = l[3];
        s += '<path class="o '+l[2]+'" d="M'+(150-top)+' '+y+' L'+(150+top)+' '+y+' L'+(150+bot)+' '+(y+44)+' L'+(150-bot)+' '+(y+44)+'z"/>' + T(150, y+27, l[1], 'b') + T(298, y+27, l[0], 'sm', 'start'); });
      s += T(210, 238, 'Only about 10% passes to the next level (always upright)', 'cap');
      return svg(436, 250, 'Pyramid of energy', s); })(),

    (function(){ var s = '';
      s += '<rect class="o fe" x="80" y="40" width="240" height="56" rx="4"/>' + T(200, 74, 'Consumers: zooplankton, fish (more biomass)', 'b');
      s += '<rect class="o fa" x="150" y="96" width="100" height="56" rx="4"/>' + T(200, 124, 'Producers:', 'b') + T(200, 140, 'phytoplankton', 'b');
      s += T(200, 178, 'Inverted pyramid of biomass in the sea', 'cap') ;
      return svg(400, 206, 'Inverted pyramid of biomass in sea', s); })()
  ];

  /* ---------- Ch 13 ---------- */
  D[13] = [
    (function(){ var s = '';
      s += '<path class="ax" d="M50 220 H250" marker-end="url(#ar)"/><path class="ax" d="M50 220 V30" marker-end="url(#ar)"/>';
      s += '<path class="cs" d="M54 210 C70 120 120 80 240 64"/>';
      s += T(150, 244, 'Area →', 'b') + '<text x="26" y="126" class="b" text-anchor="middle" transform="rotate(-90 26 126)">Species richness →</text>';
      s += '<rect class="o fd" x="270" y="40" width="130" height="130" rx="8"/>';
      s += '<path class="ax" d="M290 156 H390 M290 156 V54"/><path class="cj" d="M292 150 L382 70"/>';
      s += T(335, 184, 'log A', 'sm') + T(282, 104, 'log S', 'sm', 'end') + T(352, 120, 'slope = Z', 'sm', 'start');
      s += T(335, 206, 'log S = log C + Z log A', 'sm');
      return svg(410, 256, 'Species–area relationship', s); })()
  ];

  window.ES_DIAGRAMS = D;
  window.ES_NCERT = { /* official NCERT Class XII Biology chapter PDFs */
    1:'lebo101',2:'lebo102',3:'lebo103',4:'lebo104',5:'lebo105',6:'lebo106',7:'lebo107',8:'lebo108',9:'lebo109',10:'lebo110',11:'lebo111',12:'lebo112',13:'lebo113' };
})();
