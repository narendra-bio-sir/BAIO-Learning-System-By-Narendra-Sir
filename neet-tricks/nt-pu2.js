/* BAIO NEET Tricks · II PUC chapters.
   Each chapter: tricks [{t: title, h: html}], traps [html], quiz [{q, o:[4], a: index, x: shortcut}].
   Written from the current (rationalised) NCERT Class XII text. */
window.NT = window.NT || {};
Object.assign(window.NT, {
'pu2-ch1': {
  title:'Sexual Reproduction in Flowering Plants', ch:'II PUC · Chapter 1', icon:'🌸', color:'#AD1457', href:'pu2-ch1.html',
  intro:'Ploidy of every part, the 7-celled 8-nucleate embryo sac and pollination devices: guaranteed NEET marks.',
  tricks:[
    {t:'Ploidy map of a flower', h:'<div class="tb"><table><tr><th>Structure</th><th>Ploidy</th></tr><tr><td>Microspore / megaspore mother cell, nucellus, integuments, seed coat, fruit wall</td><td>2n</td></tr><tr><td>Pollen grain, megaspore, embryo sac cells (egg, synergids, antipodals)</td><td>n</td></tr><tr><td>Zygote → embryo</td><td>2n</td></tr><tr><td>Primary endosperm nucleus → endosperm</td><td><b>3n</b></td></tr></table></div><p>Trick: <b>everything maternal (nucellus, integuments → seed coat, ovary wall → pericarp) is 2n</b>.</p>'},
    {t:'Embryo sac: 7 cells, 8 nuclei', h:'<p>Functional megaspore → 3 mitotic divisions → 8 nuclei (<b>monosporic</b> development).</p><ul><li>Micropylar end: <b>egg apparatus</b> = 2 synergids + 1 egg</li><li>Chalazal end: 3 antipodals</li><li>Centre: 1 central cell with <b>2 polar nuclei</b></li></ul><p>Synergids have a <b>filiform apparatus</b> that guides the pollen tube.</p>'},
    {t:'Anther & pollen facts', h:'<ul><li>Anther: tetrasporangiate, dithecous. Wall: epidermis, endothecium, middle layers, <b>tapetum</b> (innermost; nourishes; often multinucleate).</li><li>Exine: <b>sporopollenin</b> — most resistant organic material; absent at germ pores. Intine: cellulose + pectin.</li><li>In over <b>60%</b> of angiosperms pollen is shed at the <b>2-celled</b> stage (vegetative + generative cell).</li><li>Rice and wheat pollen lose viability in <b>30 min</b>; pollen is stored at <b>−196 °C</b> in liquid nitrogen.</li></ul>'},
    {t:'Pollination & outbreeding devices', h:'<ul><li><b>Autogamy</b>: cleistogamous flowers (<i>Viola, Oxalis, Commelina</i>) — assured seed set.</li><li><b>Geitonogamy</b>: another flower of the same plant — functionally cross, genetically self.</li><li><b>Xenogamy</b>: different plant — genetic variety.</li></ul><p>Outbreeding devices: pollen release and stigma receptivity not synchronised; anther and stigma at different positions; self-incompatibility; unisexual flowers. <b>Monoecious</b> (castor, maize) prevents autogamy only; <b>dioecious</b> (papaya) prevents both autogamy and geitonogamy.</p>'},
    {t:'Wind vs water vs insects', h:'<div class="tb"><table><tr><th>Agent</th><th>Clues</th></tr><tr><td>Wind</td><td>Light, non-sticky pollen; exposed stamens; large feathery stigma; one ovule per ovary (grasses, maize)</td></tr><tr><td>Water</td><td><i>Vallisneria, Hydrilla</i> (fresh water), <i>Zostera</i> (marine; long ribbon-like pollen)</td></tr><tr><td>Insects</td><td>Large colourful, fragrant flowers with nectar; <i>Yucca</i>–moth obligate mutualism</td></tr></table></div><p>Water hyacinth and water lily are aquatic but pollinated by <b>insects or wind</b>.</p>'},
    {t:'Double fertilisation & after', h:'<ul><li><b>Syngamy</b>: male gamete + egg → zygote (2n). <b>Triple fusion</b>: male gamete + 2 polar nuclei → PEN (3n).</li><li>Endosperm develops <b>before</b> the embryo. Coconut water = free-nuclear endosperm; white kernel = cellular endosperm.</li><li>Persisting nucellus = <b>perisperm</b> (black pepper, beet).</li><li><b>Apomixis</b>: seeds without fertilisation (Asteraceae, grasses). <b>Polyembryony</b>: nucellar cells form embryos (<i>Citrus</i>, mango).</li><li>Seed longevity: <i>Lupinus arcticus</i> ~10,000 years; date palm <i>Phoenix dactylifera</i> ~2000 years.</li></ul>'}
  ],
  traps:['The <b>synergids</b>, not the egg, carry the filiform apparatus.','Castor seed is endospermic; pea, groundnut and beans are non-endospermic.','Perisperm is residual <b>nucellus</b>, not endosperm.','Geitonogamy needs a pollinator but is genetically like autogamy.','Parthenocarpy = fruit without fertilisation (banana); apomixis = seed without fertilisation.'],
  quiz:[
    {q:'The ploidy of endosperm in angiosperms is:', o:['n','2n','3n','4n'], a:2, x:'Triple fusion: n + n + n = 3n.'},
    {q:'A mature embryo sac has:', o:['8 cells, 8 nuclei','7 cells, 8 nuclei','7 cells, 7 nuclei','8 cells, 7 nuclei'], a:1, x:'Central cell has 2 polar nuclei → 7 cells, 8 nuclei.'},
    {q:'The exine of pollen is made of:', o:['Cellulose','Pectin','Sporopollenin','Lignin'], a:2, x:'Sporopollenin — most resistant organic material.'},
    {q:'Cleistogamous flowers ensure:', o:['Xenogamy','Geitonogamy','Autogamy','Apomixis'], a:2, x:'Closed flowers → self-pollination (<i>Commelina</i>).'},
    {q:'A water-pollinated plant is:', o:['Water hyacinth','Vallisneria','Water lily','Maize'], a:1, x:'<i>Vallisneria</i>, <i>Hydrilla</i>, <i>Zostera</i>.'},
    {q:'Perisperm is found in:', o:['Castor','Black pepper','Maize','Pea'], a:1, x:'Black pepper and beet.'},
    {q:'Polyembryony from nucellar cells occurs in:', o:['Citrus','Wheat','Pea','Castor'], a:0, x:'<i>Citrus</i> and mango.'},
    {q:'The filiform apparatus is present in:', o:['Egg cell','Synergids','Antipodals','Central cell'], a:1, x:'Synergids guide the pollen tube.'},
    {q:'Which condition prevents both autogamy and geitonogamy?', o:['Monoecy (castor)','Dioecy (papaya)','Cleistogamy','Self-compatibility'], a:1, x:'Male and female flowers on different plants.'}
  ]
},
'pu2-ch2': {
  title:'Human Reproduction', ch:'II PUC · Chapter 2', icon:'👶', color:'#C62828', href:'pu2-ch2.html',
  intro:'Sperm pathway, hormones, gametogenesis counts and the month-by-month development of the foetus.',
  tricks:[
    {t:'Sperm pathway: "SEVEN UP"', h:'<p><b>S</b>eminiferous tubules → rete testis → vasa <b>E</b>fferentia → epididymis → <b>V</b>as deferens → <b>E</b>jaculatory duct → <b>U</b>rethra → <b>P</b>enis (urethral meatus).</p><ul><li>Each testis ≈ 250 lobules, each with 1–3 seminiferous tubules.</li><li>Sertoli cells nourish germ cells; <b>Leydig (interstitial) cells</b> secrete androgens.</li><li>Accessory glands: paired seminal vesicles, prostate, paired bulbourethral glands.</li></ul>'},
    {t:'Hormone control in one flow', h:'<p>Hypothalamus <b>GnRH</b> → pituitary <b>LH + FSH</b>.</p><ul><li>Male: LH → Leydig cells → androgens; FSH → Sertoli cells → spermiogenesis factors.</li><li>Female: follicular phase (FSH, LH, estrogen rise) → <b>LH surge ≈ day 14 → ovulation</b> → luteal phase (corpus luteum → progesterone) → if no fertilisation, corpus luteum degenerates → menstruation.</li></ul><p>Days: 1–5 menses · 6–13 follicular · 14 ovulation · 15–28 luteal.</p>'},
    {t:'Gametogenesis counting', h:'<div class="tb"><table><tr><th>Male</th><th>Female</th></tr><tr><td>1 primary spermatocyte → <b>4 sperms</b></td><td>1 primary oocyte → <b>1 ovum</b> + polar bodies</td></tr><tr><td>Starts at puberty</td><td>Oogonia formed in foetal life; no new ones after birth</td></tr><tr><td>Spermiation = release of sperms</td><td>Primary oocyte arrested in prophase I; secondary oocyte released at ovulation; meiosis II completes <b>after sperm entry</b></td></tr></table></div><p>Spermatogonium (46) → primary spermatocyte (46) → secondary spermatocytes (23) → spermatids (23) → sperms.</p>'},
    {t:'Semen numbers', h:'<ul><li>One ejaculation: <b>200–300 million</b> sperms.</li><li>Normal fertility: at least <b>60%</b> with normal shape and size and at least <b>40%</b> with vigorous motility.</li><li>Sperm: head (acrosome with enzymes), middle piece (mitochondria for energy), tail.</li></ul>'},
    {t:'Fertilisation → implantation → placenta', h:'<ul><li>Fertilisation in the <b>ampullary region</b> of the fallopian tube; zona pellucida blocks extra sperms.</li><li>Cleavage → <b>morula</b> (8–16 blastomeres) → <b>blastocyst</b> (trophoblast + inner cell mass) → implantation in endometrium.</li><li>Inner cell mass → embryo (stem cells); trophoblast → chorionic villi.</li><li>Pregnancy-only hormones: <b>hCG, hPL, relaxin</b>; placenta also makes estrogens and progestogens.</li></ul>'},
    {t:'Month-by-month development', h:'<ul><li>1 month: <b>heart</b> forms.</li><li>2 months: limbs and digits.</li><li>3 months (end of 1st trimester): major organ systems and external genitalia.</li><li>5 months: first movements; hair on head.</li><li>24 weeks (end of 2nd trimester): fine body hair, eyelids separate, eyelashes.</li><li>About 9 months: birth (foetal ejection reflex → oxytocin → contractions). First milk <b>colostrum</b> has <b>IgA</b>.</li></ul>'}
  ],
  traps:['At ovulation the <b>secondary oocyte</b> is released, not the ovum.','Sex of the baby is decided by the <b>sperm</b> (X or Y).','Primary oocytes are formed <b>before birth</b>.','hCG, hPL and relaxin are made only during pregnancy.','Morula, not blastocyst, has 8–16 blastomeres.'],
  quiz:[
    {q:'Leydig cells secrete:', o:['FSH','Androgens','Inhibin','LH'], a:1, x:'Interstitial cells → androgens (testosterone).'},
    {q:'Sperms formed from one primary spermatocyte:', o:['1','2','4','8'], a:2, x:'Meiosis gives 4 spermatids → 4 sperms.'},
    {q:'Ovulation is triggered by:', o:['FSH surge','LH surge','Progesterone peak','Oxytocin'], a:1, x:'Mid-cycle LH surge.'},
    {q:'Fertilisation normally occurs in the:', o:['Uterus','Ampullary region of oviduct','Isthmus','Cervix'], a:1, x:'Ampullary region of the fallopian tube.'},
    {q:'Meiosis II of the oocyte is completed:', o:['Before birth','At puberty','At ovulation','After sperm entry'], a:3, x:'Sperm entry triggers completion → ovum + second polar body.'},
    {q:'An embryo with 8–16 blastomeres is called:', o:['Zygote','Morula','Blastocyst','Gastrula'], a:1, x:'Morula.'},
    {q:'A hormone made only during pregnancy:', o:['Estrogen','hCG','Progesterone','FSH'], a:1, x:'hCG, hPL, relaxin.'},
    {q:'The foetal heart forms after about:', o:['1 month','2 months','3 months','5 months'], a:0, x:'Heart at 1 month; limbs at 2 months.'},
    {q:'Colostrum is rich in:', o:['IgG','IgA','IgE','IgM'], a:1, x:'IgA protects the newborn.'}
  ]
},
'pu2-ch3': {
  title:'Reproductive Health', ch:'II PUC · Chapter 3', icon:'🏥', color:'#00838F', href:'pu2-ch3.html',
  intro:'Contraceptives, STIs and ART acronyms: sort each into its box and the MCQs answer themselves.',
  tricks:[
    {t:'Contraceptives in 6 boxes', h:'<div class="tb"><table><tr><th>Type</th><th>Examples · how</th></tr><tr><td>Natural</td><td>Periodic abstinence (days 10–17), withdrawal, lactational amenorrhoea (up to 6 months)</td></tr><tr><td>Barrier</td><td>Condoms (Nirodh), diaphragms, cervical caps, vaults, spermicides</td></tr><tr><td>IUDs</td><td>Non-medicated: Lippes loop · Copper: CuT, Cu7, Multiload 375 (Cu ions cut sperm motility) · Hormonal: Progestasert, LNG-20 (uterus unsuitable, cervix hostile)</td></tr><tr><td>Oral pills</td><td>Progestogen ± estrogen, 21 days; block ovulation/implantation. <b>Saheli</b>: once a week, non-steroidal, CDRI Lucknow</td></tr><tr><td>Injections / implants / emergency</td><td>Emergency pills or IUD within <b>72 hours</b></td></tr><tr><td>Surgical</td><td>Vasectomy (vas deferens), tubectomy (fallopian tube)</td></tr></table></div>'},
    {t:'ART acronyms: the 8-blastomere rule', h:'<ul><li><b>ZIFT</b>: zygote or embryo with <b>up to 8</b> blastomeres → fallopian tube.</li><li><b>IUT</b>: embryo with <b>more than 8</b> blastomeres → uterus.</li><li><b>GIFT</b>: ovum from a donor → fallopian tube of a female who cannot produce ova.</li><li><b>ICSI</b>: sperm injected directly into the ovum.</li><li><b>AI / IUI</b>: semen into vagina or uterus (low sperm count).</li></ul><p>Trick: <b>≤ 8 → tube; &gt; 8 → uterus.</b></p>'},
    {t:'STIs you must list', h:'<p>Gonorrhoea, syphilis, genital herpes, chlamydiasis, genital warts, trichomoniasis, hepatitis-B, HIV/AIDS.</p><p><b>Not completely curable: hepatitis-B, genital herpes, HIV.</b> They also spread by shared needles, transfusion and from mother to foetus.</p>'},
    {t:'MTP quick facts', h:'<ul><li>Legalised in India in <b>1971</b> with strict conditions.</li><li>Relatively safe in the <b>first trimester</b> (up to 12 weeks).</li><li>About 45–50 million MTPs a year worldwide (≈ 1/5 of all pregnancies).</li><li>Misuse of amniocentesis for sex determination is banned.</li></ul>'},
    {t:'Ideal contraceptive checklist', h:'<p>User-friendly, easily available, effective, <b>reversible</b>, few or no side effects, does not interfere with sexual drive or the act.</p>'},
    {t:'Population & RCH', h:'<ul><li>RCH (Reproductive and Child Health Care) programmes promote awareness and facilities.</li><li>Statutory marriageable age: <b>18 years for females, 21 for males</b>.</li><li>Amniocentesis checks foetal chromosomes — banned for sex determination.</li></ul>'}
  ],
  traps:['Lactational amenorrhoea works only up to <b>6 months</b> after birth with full breastfeeding.','Hormone-releasing IUDs make the <b>uterus unsuitable</b> for implantation and the cervix hostile to sperm.','Saheli is <b>non-steroidal</b> and taken once a week.','Infertility can be due to the <b>male</b> partner as well.','ZIFT ≤ 8 cells → tube; IUT > 8 cells → uterus.'],
  quiz:[
    {q:'Saheli is a:', o:['Copper IUD','Once-a-week non-steroidal pill','Hormonal implant','Daily estrogen pill'], a:1, x:'Developed at CDRI, Lucknow.'},
    {q:'A copper-releasing IUD is:', o:['Lippes loop','Progestasert','Multiload 375','LNG-20'], a:2, x:'CuT, Cu7, Multiload 375.'},
    {q:'An embryo with more than 8 blastomeres is transferred by:', o:['ZIFT','GIFT','IUT','ICSI'], a:2, x:'IUT → uterus.'},
    {q:'An STI that is NOT completely curable:', o:['Gonorrhoea','Syphilis','Hepatitis-B','Trichomoniasis'], a:2, x:'Hepatitis-B, genital herpes, HIV.'},
    {q:'Lactational amenorrhoea is effective up to:', o:['2 months','6 months','12 months','24 months'], a:1, x:'Up to 6 months after parturition.'},
    {q:'MTP is relatively safe up to:', o:['6 weeks','12 weeks','20 weeks','24 weeks'], a:1, x:'First trimester.'},
    {q:'Injecting a sperm directly into an ovum is:', o:['IUI','GIFT','ICSI','ZIFT'], a:2, x:'Intra-cytoplasmic sperm injection.'},
    {q:'Progestasert and LNG-20 are:', o:['Copper IUDs','Hormone-releasing IUDs','Barrier methods','Oral pills'], a:1, x:'Hormone-releasing IUDs.'},
    {q:'Emergency contraception must be used within:', o:['24 hours','48 hours','72 hours','7 days'], a:2, x:'Within 72 hours of coitus.'}
  ]
},
'pu2-ch4': {
  title:'Principles of Inheritance and Variation', ch:'II PUC · Chapter 4', icon:'🧬', color:'#7B1FA2', href:'pu2-ch4.html',
  intro:'Genetics shortcuts: gametes, ratios and probabilities with simple maths instead of big Punnett squares.',
  tricks:[
    {t:'Binomial expansion (ax + by)²', h:'<p>For Tt × Tt each gamete (T or t) has frequency <b>½</b>. With a = b = ½, x = T, y = t:</p><div class="mt">(½T + ½t)² = ¼TT + ¼Tt + ¼Tt + ¼tt<br>= ¼TT + 2(¼Tt) + ¼tt<br>= <b>¼TT + ½Tt + ¼tt</b> → 1 : 2 : 1</div><p>NEET use: the coefficient is the answer. Fraction heterozygous = <b>½</b>; fraction tall = ¼ + ½ = <b>¾</b>.</p>'},
    {t:'Kinds of gametes = 2ⁿ', h:'<p><b>n = number of heterozygous gene pairs</b>; homozygous pairs are skipped.</p><div class="tb"><table><tr><th>Genotype</th><th>n</th><th>Gametes</th></tr><tr><td>AaBb</td><td>2</td><td>4</td></tr><tr><td>AaBBCc</td><td>2</td><td>4</td></tr><tr><td>AaBbCc</td><td>3</td><td>8</td></tr><tr><td>AaBbCcDd</td><td>4</td><td>16</td></tr><tr><td>AABBcc</td><td>0</td><td>1</td></tr></table></div><p>Write them out like a polynomial: (A + a)(B + b)(C + c) = ABC + ABc + AbC + Abc + aBC + aBc + abC + abc.</p>'},
    {t:'The master n-formula table', h:'<div class="tb"><table><tr><th>F₁ heterozygous for n genes, selfed</th><th>Formula</th></tr><tr><td>Kinds of gametes</td><td>2ⁿ</td></tr><tr><td>Punnett boxes</td><td>4ⁿ</td></tr><tr><td>Phenotypes in F₂</td><td>2ⁿ</td></tr><tr><td>Genotypes in F₂</td><td>3ⁿ</td></tr><tr><td>Phenotypic ratio</td><td>(3 : 1)ⁿ</td></tr><tr><td>Genotypic ratio</td><td>(1 : 2 : 1)ⁿ</td></tr><tr><td>Fully recessive offspring</td><td>(¼)ⁿ</td></tr></table></div><p>Memory: <b>2 – 4 – 2 – 3</b>.</p>'},
    {t:'Dihybrid and trihybrid ratios', h:'<p>RrYy × RrYy: <b>9 : 3 : 3 : 1</b> phenotypes; 9 genotypes in 1 : 2 : 1 : 2 : 4 : 2 : 1 : 2 : 1. Most common genotype RrYy = 4/16.</p><p>Trihybrid: (3 + 1)³ → <b>27 : 9 : 9 : 9 : 3 : 3 : 3 : 1</b>; 27 genotypes; AaBbCc = 8/64.</p>'},
    {t:'Product rule: one gene at a time', h:'<div class="tb"><table><tr><th>Question</th><th>Working</th><th>Answer</th></tr><tr><td>AaBbCc × AaBbCc → AABbcc</td><td>¼ × ½ × ¼</td><td>1/32</td></tr><tr><td>AaBbCc × AaBbCc → A–bbC–</td><td>¾ × ¼ × ¾</td><td>9/64</td></tr><tr><td>AaBbCc × AaBbcc → genotypes</td><td>3 × 3 × 2</td><td>18</td></tr><tr><td>AaBbCc × AaBbcc → phenotypes</td><td>2 × 2 × 2</td><td>8</td></tr></table></div>'},
    {t:'Test cross & NEET traps', h:'<p>Test cross ratio = <b>gamete ratio</b> of the unknown parent: Aa × aa → 1 : 1; AaBb × aabb → 1 : 1 : 1 : 1.</p><ul><li>Linked genes give far more parental types (Morgan, <i>Drosophila</i>).</li><li>Incomplete dominance (snapdragon): F₂ phenotypic = genotypic = <b>1 : 2 : 1</b>.</li><li>Codominance (ABO, I<sup>A</sup>I<sup>B</sup>): both alleles show.</li></ul>'}
  ],
  traps:['2ⁿ, 9 : 3 : 3 : 1 and the product rule assume <b>independent assortment</b>.','Dihybrid F₂: 9 genotypes but only 4 phenotypes.','3 : 1 means ¾ show the dominant trait (not ⅓).','Homozygous pairs add no variety to gametes (AABbCC → 2 gametes).','Male honey bees (drones) are haploid — they develop from unfertilised eggs.'],
  quiz:[
    {q:'Kinds of gametes from AaBbCCDd:', o:['4','6','8','16'], a:2, x:'n = 3 (Aa, Bb, Dd) → 2³ = 8.'},
    {q:'AaBbCc × AaBbCc → fraction AABBCC:', o:['1/8','1/16','1/32','1/64'], a:3, x:'¼ × ¼ × ¼.'},
    {q:'Trihybrid F₂ showing all three dominant traits:', o:['9/64','27/64','1/64','3/64'], a:1, x:'¾ × ¾ × ¾.'},
    {q:'AaBb × aabb gives the phenotypic ratio:', o:['9:3:3:1','3:1','1:1:1:1','1:2:1'], a:2, x:'Test cross = gamete ratio.'},
    {q:'Genotypes in F₂ for 4 independently assorting genes:', o:['16','64','81','256'], a:2, x:'3⁴ = 81.'},
    {q:'AaBb × AaBb → fraction A–bb:', o:['1/16','3/16','9/16','1/4'], a:1, x:'¾ × ¼.'},
    {q:'Genotypes from AaBbCc × AaBbcc:', o:['8','12','18','27'], a:2, x:'3 × 3 × 2.'},
    {q:'Snapdragon Rr × Rr phenotypic ratio:', o:['3:1','1:2:1','1:1','9:3:3:1'], a:1, x:'Incomplete dominance.'},
    {q:'In (½T + ½t)², the fraction of Tt is:', o:['1/4','1/2','3/4','1/3'], a:1, x:'Coefficient of Tt = ½.'}
  ]
},
'pu2-ch5': {
  title:'Molecular Basis of Inheritance', ch:'II PUC · Chapter 5', icon:'🔬', color:'#283593', href:'pu2-ch5.html',
  intro:'DNA numbers, Chargaff maths, the key experiments and the transcription–translation machinery.',
  tricks:[
    {t:'DNA numbers to memorise', h:'<ul><li>B-DNA: <b>10 bp per turn</b>, pitch <b>3.4 nm</b>, <b>0.34 nm</b> between base pairs, diameter 2 nm.</li><li>Length = bp × 0.34 nm. Human diploid 6.6 × 10⁹ bp → <b>≈ 2.2 m</b>. <i>E. coli</i> 4.6 × 10⁶ bp → <b>1.36 mm</b>.</li><li>Bacteriophage φ×174: 5386 nucleotides; lambda phage: 48,502 bp.</li></ul>'},
    {t:'Chargaff maths in 10 seconds', h:'<p>A = T and G = C, so A + G = T + C (purines = pyrimidines).</p><ul><li>A = 20% → T = 20%, G = C = 30%.</li><li>G = 18% → C = 18%, A = T = 32%.</li></ul><p>Trick: <b>A + G = 50%</b> always.</p>'},
    {t:'Experiments ladder', h:'<div class="tb"><table><tr><th>Who</th><th>Showed</th></tr><tr><td>Griffith (1928)</td><td>Transforming principle (S and R <i>Streptococcus pneumoniae</i>, mice)</td></tr><tr><td>Avery, MacLeod, McCarty</td><td>DNA is the transforming principle</td></tr><tr><td>Hershey &amp; Chase (1952)</td><td>³²P (DNA) entered bacteria, ³⁵S (protein) did not → DNA is genetic material</td></tr><tr><td>Meselson &amp; Stahl (1958)</td><td>¹⁵N + CsCl gradient → <b>semi-conservative</b> replication</td></tr><tr><td>Taylor (1958)</td><td>Same in <i>Vicia faba</i> with radioactive thymidine</td></tr></table></div>'},
    {t:'Nucleosome & chromatin', h:'<ul><li>Histone octamer: <b>2 each of H2A, H2B, H3, H4</b>; ~200 bp DNA per nucleosome; "beads on string".</li><li>Histones are rich in <b>lysine and arginine</b> (positive charge).</li><li>Euchromatin: loosely packed, active. Heterochromatin: densely packed, inactive.</li></ul>'},
    {t:'Transcription machinery', h:'<ul><li>Template strand 3′→5′; <b>coding strand</b> has the same sequence as mRNA (T → U) but does not code.</li><li>Promoter upstream, terminator downstream.</li><li>Bacteria: one RNA polymerase; σ factor (initiation), ρ factor (termination).</li><li>Eukaryotes: <b>RNA pol I → rRNA (28S, 18S, 5.8S); II → hnRNA; III → tRNA, 5S rRNA, snRNA</b>.</li><li>hnRNA processing: splicing (introns out), capping (methyl guanosine triphosphate, 5′), tailing (poly-A, 3′).</li></ul>'},
    {t:'Genetic code, translation & lac operon', h:'<ul><li>64 codons: 61 code amino acids; <b>UAA, UAG, UGA</b> stop; <b>AUG</b> start (methionine).</li><li>Code: triplet, unambiguous, degenerate, nearly universal, comma-less.</li><li>Peptidyl transferase in bacteria = <b>23S rRNA</b> (ribozyme). UTRs at both ends of mRNA.</li><li>lac operon: <b>z</b> → β-galactosidase, <b>y</b> → permease, <b>a</b> → transacetylase; i gene → repressor; lactose = inducer (negative regulation).</li><li>HGP: 3164.7 million bp; dystrophin largest gene (2.4 million bases); chromosome 1 most genes (2968), Y fewest (231); &lt; 2% codes protein; 99.9% bases identical; ~1.4 million SNPs.</li></ul>'}
  ],
  traps:['The coding strand does <b>not</b> code; it matches mRNA.','In bacteria transcription and translation can be coupled; in eukaryotes they are separated.','RNA was probably the first genetic material; DNA is more stable (no 2′-OH, has thymine).','DNA fingerprinting uses <b>VNTRs</b> (satellite DNA) — they do not code for proteins.','Okazaki fragments are on the <b>lagging</b> strand, joined by DNA ligase.'],
  quiz:[
    {q:'Length of DNA with 6.6 × 10⁹ bp is about:', o:['1.36 mm','2.2 m','3.4 nm','22 m'], a:1, x:'6.6 × 10⁹ × 0.34 × 10⁻⁹ m ≈ 2.2 m.'},
    {q:'If A = 30% in a DNA, G is:', o:['30%','20%','40%','70%'], a:1, x:'A + G = 50% → G = 20%.'},
    {q:'Semi-conservative replication was proved by:', o:['Hershey & Chase','Meselson & Stahl','Griffith','Watson & Crick'], a:1, x:'¹⁵N and CsCl density gradient.'},
    {q:'In Hershey–Chase, ³⁵S labelled the:', o:['DNA','Protein coat','RNA','Lipid'], a:1, x:'Sulphur is in protein, not DNA.'},
    {q:'Okazaki fragments are formed on the:', o:['Leading strand','Lagging strand','Template of RNA','Coding strand of mRNA'], a:1, x:'Discontinuous synthesis on the lagging strand.'},
    {q:'RNA polymerase III transcribes:', o:['rRNA 28S','hnRNA','tRNA, 5S rRNA, snRNA','mRNA only'], a:2, x:'I → rRNA, II → hnRNA, III → tRNA, 5S rRNA, snRNA.'},
    {q:'Which is a stop codon?', o:['AUG','UAA','UUU','GUG'], a:1, x:'UAA, UAG, UGA.'},
    {q:'In bacteria, peptidyl transferase activity is due to:', o:['A protein','23S rRNA','16S rRNA','tRNA'], a:1, x:'23S rRNA — a ribozyme.'},
    {q:'lac z codes for:', o:['Permease','Transacetylase','β-galactosidase','Repressor'], a:2, x:'z → β-galactosidase.'},
    {q:'The histone octamer contains two each of:', o:['H1, H2A, H2B, H3','H2A, H2B, H3, H4','H1, H3, H4, H5','H2A, H3, H4, H5'], a:1, x:'H1 is the linker histone, not in the octamer.'}
  ]
},
'pu2-ch6': {
  title:'Evolution', ch:'II PUC · Chapter 6', icon:'🐒', color:'#6D4C41', href:'pu2-ch6.html',
  intro:'Homologous vs analogous, Hardy–Weinberg maths and the human evolution brain-size ladder.',
  tricks:[
    {t:'Homologous vs analogous', h:'<div class="tb"><table><tr><th>Homologous (divergent)</th><th>Analogous (convergent)</th></tr><tr><td>Same structure/origin, different function</td><td>Different structure, same function</td></tr><tr><td>Forelimbs of whale, bat, cheetah, human; vertebrate hearts and brains; thorn of <i>Bougainvillea</i> &amp; tendril of <i>Cucurbita</i></td><td>Wings of butterfly &amp; bird; eye of octopus &amp; mammal; flippers of penguin &amp; dolphin; sweet potato (root) &amp; potato (stem)</td></tr></table></div><p>Trick: <b>HOMologous = same HOMe (origin)</b>.</p>'},
    {t:'Origin of life one-liners', h:'<ul><li>Earth ≈ <b>4.5 billion years</b> old; life appeared about 500 million years later.</li><li>Oparin &amp; Haldane: chemical evolution from non-living organic molecules.</li><li><b>S.L. Miller (1953)</b>: CH₄, H₂, NH₃ and water vapour at 800 °C + electric discharge → amino acids.</li></ul>'},
    {t:'Natural selection examples', h:'<ul><li><b>Industrial melanism</b>: <i>Biston betularia</i> in England — dark moths increased after industrialisation (soot-covered trunks, no lichens).</li><li>Antibiotic-resistant bacteria, herbicide/pesticide resistance.</li><li><b>Adaptive radiation</b>: Darwin\'s finches (Galapagos), Australian marsupials.</li><li>Convergent evolution: placental mammals in Australia resemble marsupials.</li></ul>'},
    {t:'Hardy–Weinberg in 3 steps', h:'<p>p + q = 1 and p² + 2pq + q² = 1.</p><ol><li>Recessive phenotype = q². If q² = 0.16 → q = 0.4.</li><li>p = 1 − q = 0.6.</li><li>Carriers 2pq = 2 × 0.6 × 0.4 = <b>0.48</b>.</li></ol><p>Five disturbing factors: gene migration (gene flow), genetic drift, mutation, recombination, natural selection. Founder effect = drift in a new small population.</p>'},
    {t:'Types of selection', h:'<ul><li><b>Stabilising</b>: average favoured.</li><li><b>Directional</b>: one extreme favoured.</li><li><b>Disruptive</b>: both extremes favoured.</li></ul><p>Lamarck: use and disuse (giraffe neck). Darwin: natural selection, fitness = reproductive fitness. Hugo de Vries: mutation, <b>saltation</b> (evening primrose).</p>'},
    {t:'Human evolution: brain-size ladder', h:'<div class="tb"><table><tr><th>Form</th><th>Remember</th></tr><tr><td><i>Dryopithecus, Ramapithecus</i></td><td>~15 mya</td></tr><tr><td>Australopithecines</td><td>~2 mya, East African grasslands</td></tr><tr><td><i>Homo habilis</i></td><td>650–800 cc; probably did not eat meat</td></tr><tr><td><i>Homo erectus</i></td><td>~900 cc; ate meat (~1.5 mya)</td></tr><tr><td>Neanderthal man</td><td>1400 cc; buried the dead (Near East, Central Asia)</td></tr><tr><td><i>Homo sapiens</i></td><td>Arose in Africa; cave art ~18,000 years ago; agriculture ~10,000 years ago</td></tr></table></div><p>Lobefins (coelacanth, caught in 1938 in South Africa) → first amphibians.</p>'}
  ],
  traps:['Thorn of <i>Bougainvillea</i> and tendril of <i>Cucurbita</i> are <b>homologous</b>.','Sweet potato and potato are <b>analogous</b>.','Saltation = de Vries, not Darwin.','<i>Homo habilis</i> did not eat meat; <i>Homo erectus</i> did.','Neanderthals buried their dead.'],
  quiz:[
    {q:'Thorn of Bougainvillea and tendril of Cucurbita are:', o:['Analogous','Homologous','Vestigial','Convergent'], a:1, x:'Same origin (axillary bud), different function.'},
    {q:'Wings of a butterfly and a bird show:', o:['Divergent evolution','Convergent evolution','Adaptive radiation','Saltation'], a:1, x:'Analogous organs → convergent.'},
    {q:'Industrial melanism was seen in:', o:['Drosophila','Biston betularia','Darwin\'s finches','Oenothera'], a:1, x:'Peppered moth in England.'},
    {q:'If q² = 0.09, the heterozygote frequency is:', o:['0.21','0.42','0.49','0.09'], a:1, x:'q = 0.3, p = 0.7 → 2pq = 0.42.'},
    {q:'Brain capacity of about 900 cc belongs to:', o:['Homo habilis','Homo erectus','Neanderthal man','Australopithecus'], a:1, x:'650–800 → 900 → 1400.'},
    {q:'The term saltation was used by:', o:['Darwin','Lamarck','Hugo de Vries','Wallace'], a:2, x:'Single-step large mutation.'},
    {q:'Miller made amino acids from:', o:['CO₂, O₂, N₂','CH₄, H₂, NH₃, water vapour','Glucose and water','Proteins'], a:1, x:'At 800 °C with electric discharge.'},
    {q:'The first amphibians evolved from:', o:['Jawless fish','Lobefins','Sharks','Reptiles'], a:1, x:'Lobefins (e.g., coelacanth).'},
    {q:'Selection favouring both extremes is:', o:['Stabilising','Directional','Disruptive','Artificial'], a:2, x:'Disruptive selection.'}
  ]
},
'pu2-ch7': {
  title:'Human Health and Disease', ch:'II PUC · Chapter 7', icon:'🦠', color:'#D84315', href:'pu2-ch7.html',
  intro:'Disease–pathogen–vector table, immunity types and drugs: match-the-column made simple.',
  tricks:[
    {t:'Disease → pathogen → clue', h:'<div class="tb"><table><tr><th>Disease</th><th>Pathogen</th><th>Clue</th></tr><tr><td>Typhoid</td><td><i>Salmonella typhi</i></td><td><b>Widal test</b></td></tr><tr><td>Pneumonia</td><td><i>Streptococcus pneumoniae, Haemophilus influenzae</i></td><td>Lips/nails turn grey to bluish</td></tr><tr><td>Common cold</td><td>Rhinoviruses</td><td>Nose and respiratory passage</td></tr><tr><td>Malaria</td><td><i>Plasmodium</i> (falciparum most serious)</td><td>Female <i>Anopheles</i></td></tr><tr><td>Amoebiasis</td><td><i>Entamoeba histolytica</i></td><td>Houseflies carry it</td></tr><tr><td>Ascariasis</td><td><i>Ascaris</i></td><td>Contaminated food/water</td></tr><tr><td>Filariasis (elephantiasis)</td><td><i>Wuchereria</i></td><td>Female <i>Culex</i></td></tr><tr><td>Ringworm</td><td><i>Microsporum, Trichophyton, Epidermophyton</i></td><td>Fungi; skin folds</td></tr><tr><td>Dengue, chikungunya</td><td>Viruses</td><td><i>Aedes</i></td></tr></table></div>'},
    {t:'Plasmodium life cycle', h:'<p>Female <i>Anopheles</i> bite → <b>sporozoites</b> → liver (multiply) → RBCs (multiply, burst) → <b>haemozoin</b> released → chills and high fever every 3–4 days → gametocytes taken up by mosquito → fertilisation and development in the mosquito <b>stomach wall</b> → sporozoites stored in <b>salivary glands</b>.</p>'},
    {t:'Immunity in boxes', h:'<ul><li><b>Innate</b>: physical (skin, mucus), physiological (HCl, saliva, tears), cellular (neutrophils, monocytes, NK cells, macrophages), cytokine (interferons).</li><li><b>Acquired</b>: primary response (weak) and secondary/anamnestic (strong). B-cells → antibodies (humoral); T-cells → cell-mediated (graft rejection).</li><li>Antibody = H₂L₂ (2 heavy + 2 light chains): IgA, IgM, IgE, IgG.</li><li><b>Active</b> (vaccine, slow, long-lasting) vs <b>passive</b> (ready antibodies: colostrum IgA, placenta IgG, anti-tetanus serum, snake antivenom).</li><li>Primary lymphoid organs: <b>bone marrow, thymus</b>. Secondary: spleen, lymph nodes, tonsils, Peyer\'s patches, appendix. MALT ≈ 50% of lymphoid tissue.</li></ul>'},
    {t:'Allergy, autoimmunity, AIDS', h:'<ul><li>Allergy: <b>IgE</b>; mast cells release histamine and serotonin; treated with antihistamines, adrenalin, steroids.</li><li>Autoimmune: rheumatoid arthritis.</li><li>HIV: retrovirus; RNA → reverse transcriptase → viral DNA → into host DNA. <b>Macrophages = "HIV factory"</b>; helper T-cells decrease. Test: <b>ELISA</b>. Anti-retroviral drugs are only partly effective.</li></ul>'},
    {t:'Cancer quick list', h:'<ul><li>Cancer cells lose <b>contact inhibition</b>. Benign (stays) vs malignant (metastasis).</li><li>Carcinogens: ionising (X-rays, γ-rays), non-ionising (UV), chemicals (tobacco smoke), oncogenic viruses (viral oncogenes); proto-oncogenes / c-onc in normal cells.</li><li>Detection: biopsy, histopathology, X-ray, CT, MRI, monoclonal antibodies.</li><li>Treatment: surgery, radiation, chemotherapy, immunotherapy (α-interferon).</li></ul>'},
    {t:'Drugs: source → effect', h:'<div class="tb"><table><tr><th>Drug</th><th>Source</th><th>Effect</th></tr><tr><td>Heroin (smack) = diacetylmorphine</td><td>Morphine from poppy (<i>Papaver somniferum</i>) latex</td><td>Depressant; slows body functions</td></tr><tr><td>Cannabinoids (marijuana, hashish, charas, ganja)</td><td><i>Cannabis sativa</i></td><td>Affect cardiovascular system</td></tr><tr><td>Cocaine (coke, crack)</td><td><i>Erythroxylum coca</i></td><td>Interferes with dopamine transport; euphoria, hallucinations</td></tr><tr><td>Hallucinogens</td><td><i>Atropa belladonna, Datura</i></td><td>Hallucinations</td></tr></table></div><p>Adolescence: 12–18 years.</p>'}
  ],
  traps:['Haemozoin causes the chills and fever of malaria.','T-cells do not make antibodies.','HIV does not spread by touch or casual contact.','Interferons protect <b>non-infected</b> cells from viruses.','Morphine is medically used as a sedative and painkiller.'],
  quiz:[
    {q:'The Widal test confirms:', o:['Malaria','Typhoid','Pneumonia','Dengue'], a:1, x:'Typhoid — <i>Salmonella typhi</i>.'},
    {q:'The vector of filariasis is:', o:['Female Anopheles','Female Culex','Aedes','Housefly'], a:1, x:'<i>Wuchereria</i> spread by female <i>Culex</i>.'},
    {q:'Haemozoin is released when:', o:['Liver cells burst','Infected RBCs burst','Mosquito bites','Gametocytes form'], a:1, x:'Ruptured RBCs → chills and fever.'},
    {q:'The antibody involved in allergy is:', o:['IgA','IgG','IgE','IgM'], a:2, x:'IgE.'},
    {q:'Primary lymphoid organs are:', o:['Spleen and lymph nodes','Bone marrow and thymus','Tonsils and appendix','Peyer\'s patches'], a:1, x:'Bone marrow and thymus.'},
    {q:'Antibodies in colostrum provide:', o:['Active immunity','Passive immunity','Innate immunity','Autoimmunity'], a:1, x:'Ready-made IgA → passive.'},
    {q:'HIV mainly reduces:', o:['B-cells','Helper T-cells','RBCs','Platelets'], a:1, x:'Helper T-lymphocytes decrease.'},
    {q:'Heroin is chemically:', o:['Diacetylmorphine','Cocaine','Cannabinol','Atropine'], a:0, x:'Acetylation of morphine.'},
    {q:'Cancer cells have lost:', o:['DNA','Contact inhibition','Mitochondria','Cell membrane'], a:1, x:'Uncontrolled division.'}
  ]
},
'pu2-ch8': {
  title:'Microbes in Human Welfare', ch:'II PUC · Chapter 8', icon:'🧫', color:'#558B2F', href:'pu2-ch8.html',
  intro:'Microbe → product pairs, sewage steps and biocontrol: memorise the table and score.',
  tricks:[
    {t:'Microbe → product table', h:'<div class="tb"><table><tr><th>Microbe</th><th>Product / use</th></tr><tr><td><i>Lactobacillus</i> (LAB)</td><td>Curd; raises vitamin B₁₂; lactic acid</td></tr><tr><td><i>Saccharomyces cerevisiae</i></td><td>Bread; ethanol (brewer\'s yeast)</td></tr><tr><td><i>Propionibacterium sharmanii</i></td><td>Large holes in <b>Swiss cheese</b></td></tr><tr><td><i>Aspergillus niger</i></td><td>Citric acid</td></tr><tr><td><i>Acetobacter aceti</i></td><td>Acetic acid</td></tr><tr><td><i>Clostridium butylicum</i></td><td>Butyric acid</td></tr><tr><td><i>Streptococcus</i></td><td><b>Streptokinase</b> — clot buster</td></tr><tr><td><i>Trichoderma polysporum</i></td><td><b>Cyclosporin A</b> — immunosuppressant</td></tr><tr><td><i>Monascus purpureus</i></td><td><b>Statins</b> — lower cholesterol</td></tr></table></div><p>Trick: <b>"Statins–Monascus, Cyclosporin–Trichoderma, Streptokinase–Streptococcus, Citric–Aspergillus".</b></p>'},
    {t:'Penicillin story', h:'<p>Alexander Fleming saw <i>Penicillium notatum</i> stop <i>Staphylococci</i>. Chain and Florey made it a drug; used widely in World War II; Nobel Prize 1945.</p>'},
    {t:'Sewage treatment steps', h:'<ul><li><b>Primary</b> (physical): filtration and sedimentation → primary sludge.</li><li><b>Secondary</b> (biological): aeration tanks; aerobic microbes form <b>flocs</b> (bacteria + fungal filaments); <b>BOD</b> falls.</li><li>Activated sludge → <b>anaerobic sludge digesters</b> → biogas (methane, H₂S, CO₂).</li></ul><p>BOD = oxygen consumed if all organic matter in 1 L of water were oxidised by bacteria. Higher BOD → more polluting. Ganga and Yamuna Action Plans.</p>'},
    {t:'Biogas', h:'<p><b>Methanogens</b> (e.g., <i>Methanobacterium</i>) grow anaerobically in sludge and in the <b>rumen</b> of cattle. Cattle dung (gobar) → biogas. Technology developed by <b>IARI and KVIC</b>.</p>'},
    {t:'Biocontrol agents', h:'<ul><li><i>Bacillus thuringiensis</i> (Bt): butterfly caterpillars.</li><li><i>Trichoderma</i>: free-living fungi; biocontrol of plant pathogens.</li><li><b>Baculoviruses</b> (genus <i>Nucleopolyhedrovirus</i>): species-specific, narrow spectrum — ideal for IPM.</li><li>Ladybird beetles → aphids; dragonflies → mosquitoes.</li></ul>'},
    {t:'Biofertilisers', h:'<ul><li><i>Rhizobium</i>: symbiotic, root nodules of legumes.</li><li><i>Azospirillum, Azotobacter</i>: free-living in soil.</li><li>Cyanobacteria (<i>Anabaena, Nostoc, Oscillatoria</i>): paddy fields.</li><li>Mycorrhiza (<i>Glomus</i>): phosphorus absorption; drought and pathogen resistance.</li></ul>'}
  ],
  traps:['<i>Trichoderma polysporum</i> → cyclosporin A; other <i>Trichoderma</i> → biocontrol.','Swiss cheese holes = <i>Propionibacterium</i> (a bacterium); Roquefort cheese is ripened by fungi.','Primary treatment is <b>physical</b>, not biological.','Distilled: whisky, brandy, rum. Undistilled: wine, beer.','Toddy is made by fermenting palm sap.'],
  quiz:[
    {q:'Large holes in Swiss cheese are made by:', o:['Penicillium','Propionibacterium sharmanii','Lactobacillus','Saccharomyces'], a:1, x:'CO₂ from <i>Propionibacterium</i>.'},
    {q:'Statins are produced by:', o:['Monascus purpureus','Trichoderma polysporum','Aspergillus niger','Streptococcus'], a:0, x:'<i>Monascus</i> yeast.'},
    {q:'The "clot buster" streptokinase comes from:', o:['Streptomyces','Streptococcus','Staphylococcus','Salmonella'], a:1, x:'<i>Streptococcus</i>.'},
    {q:'Cyclosporin A is obtained from:', o:['Monascus','Trichoderma polysporum','Penicillium','Clostridium'], a:1, x:'Used as an immunosuppressant.'},
    {q:'The main gas in biogas is:', o:['CO₂','H₂S','Methane','Hydrogen'], a:2, x:'Methane from methanogens.'},
    {q:'Flocs are formed during:', o:['Primary treatment','Secondary treatment','Sludge digestion','Chlorination'], a:1, x:'Aeration tanks.'},
    {q:'Baculoviruses used in biocontrol belong to the genus:', o:['Nucleopolyhedrovirus','Bacillus','Trichoderma','Glomus'], a:0, x:'Narrow-spectrum insecticides.'},
    {q:'Citric acid is produced by:', o:['Acetobacter aceti','Aspergillus niger','Clostridium butylicum','Lactobacillus'], a:1, x:'<i>Aspergillus niger</i>.'},
    {q:'A free-living nitrogen-fixing bacterium is:', o:['Rhizobium','Azotobacter','Glomus','Frankia only'], a:1, x:'<i>Azotobacter</i>, <i>Azospirillum</i>.'}
  ]
},
'pu2-ch9': {
  title:'Biotechnology: Principles and Processes', ch:'II PUC · Chapter 9', icon:'🧬', color:'#0277BD', href:'ch9/',
  intro:'Enzymes, vectors, selection tricks, gel electrophoresis and PCR: the rDNA toolkit in order.',
  tricks:[
    {t:'Scissors, glue, carrier', h:'<ul><li><b>Restriction endonucleases</b> = molecular scissors. First: <b>Hind II</b> (always cuts at a specific 6-bp sequence).</li><li><b>DNA ligase</b> = molecular glue.</li><li><b>Vectors</b> = plasmids, bacteriophages.</li></ul><p>Naming <b>EcoRI</b>: E = <i>Escherichia</i>, co = <i>coli</i>, R = strain RY13, I = first enzyme isolated. Palindrome: 5′-GAATTC-3′ reads the same on both strands. Cutting a little away from the centre gives <b>sticky ends</b>.</p>'},
    {t:'Vector must-haves', h:'<ul><li><b>ori</b>: controls copy number.</li><li><b>Selectable marker</b>: antibiotic resistance (ampicillin, chloramphenicol, tetracycline, kanamycin).</li><li><b>Cloning sites</b>: preferably a single recognition site per enzyme.</li></ul><p><b>pBR322</b>: amp<sup>R</sup>, tet<sup>R</sup>, ori, rop. Insert into BamHI site of tet<sup>R</sup> → recombinants lose <b>tetracycline</b> resistance (insertional inactivation).</p>'},
    {t:'Blue-white selection', h:'<p>Insert DNA into the <b>lacZ (β-galactosidase)</b> gene. With a chromogenic substrate:</p><ul><li><b>Blue</b> colonies → no insert (non-recombinant).</li><li><b>White</b> (colourless) colonies → recombinant.</li></ul><p>Plant vector: disarmed <b>Ti plasmid</b> of <i>Agrobacterium tumefaciens</i>. Animal vectors: disarmed retroviruses.</p>'},
    {t:'Getting DNA in and out', h:'<ul><li>Break cells: lysozyme (bacteria), cellulase (plants), chitinase (fungi); remove RNA (ribonuclease) and protein (protease); <b>chilled ethanol</b> precipitates DNA (spooling).</li><li>Competent host: <b>Ca²⁺</b> treatment + heat shock (ice → 42 °C → ice).</li><li>Micro-injection (animal nucleus); <b>biolistics / gene gun</b> (gold or tungsten particles, plants); disarmed pathogen vectors.</li></ul>'},
    {t:'Gel electrophoresis', h:'<p>DNA is negatively charged → moves to the <b>anode</b> through <b>agarose</b> (from seaweed). <b>Smaller fragments move farther.</b> Stain: ethidium bromide → <b>orange bands</b> under UV. Bands are cut out and eluted.</p>'},
    {t:'PCR & bioreactors', h:'<p>PCR cycle: <b>Denaturation → Annealing (primers) → Extension</b> by thermostable <b>Taq polymerase</b> (<i>Thermus aquaticus</i>). ~30 cycles → about a billion copies.</p><p>Bioreactors: stirred-tank (100–1000 L) with agitator, oxygen delivery, foam control, temperature and pH control, sampling ports. Downstream processing = separation, purification, formulation, clinical trials, quality control.</p><p>rDNA order: isolate DNA → cut with RE → isolate fragment → ligate into vector → transfer to host → culture → extract product.</p>'}
  ],
  traps:['Endonucleases cut <b>inside</b> DNA; exonucleases remove nucleotides from the ends.','In gels, <b>smaller</b> fragments travel farther.','DNA moves towards the <b>anode</b> (positive).','A disarmed Ti plasmid still transfers genes but causes no tumour.','Blue colonies are <b>non-recombinant</b>.'],
  quiz:[
    {q:'The first restriction endonuclease isolated was:', o:['EcoRI','Hind II','BamHI','Taq'], a:1, x:'Hind II.'},
    {q:'In EcoRI, "R" stands for:', o:['Restriction','Strain RY13','Recombinant','Resistance'], a:1, x:'Strain RY13.'},
    {q:'During electrophoresis DNA moves towards the:', o:['Cathode','Anode','Well','Centre'], a:1, x:'Negatively charged DNA → anode.'},
    {q:'Taq polymerase is obtained from:', o:['E. coli','Thermus aquaticus','Agrobacterium','Bacillus thuringiensis'], a:1, x:'Thermostable.'},
    {q:'Insertion at the BamHI site of pBR322 inactivates resistance to:', o:['Ampicillin','Tetracycline','Kanamycin','Chloramphenicol'], a:1, x:'BamHI site lies in tet<sup>R</sup>.'},
    {q:'With a chromogenic substrate, blue colonies are:', o:['Recombinant','Non-recombinant','Dead','Mutant'], a:1, x:'Intact lacZ → blue → no insert.'},
    {q:'The gene gun uses particles of:', o:['Silver or copper','Gold or tungsten','Iron or zinc','Calcium'], a:1, x:'Biolistics.'},
    {q:'Ethidium-bromide-stained DNA under UV appears:', o:['Blue','Orange','Green','Colourless'], a:1, x:'Bright orange bands.'},
    {q:'Chilled ethanol is used to:', o:['Cut DNA','Precipitate DNA','Denature DNA','Stain DNA'], a:1, x:'DNA comes out as fine threads.'}
  ]
},
'pu2-ch10': {
  title:'Biotechnology and its Applications', ch:'II PUC · Chapter 10', icon:'💉', color:'#00695C', href:'pu2-ch10.html',
  intro:'Bt genes, RNAi, insulin, gene therapy and transgenic animals: each with its one-line NEET hook.',
  tricks:[
    {t:'Bt toxin: gene → pest', h:'<p><i>Bacillus thuringiensis</i> makes Cry proteins as inactive <b>protoxin</b>. In the insect\'s <b>alkaline gut</b> it becomes active → binds midgut cells → pores → swelling, lysis, death.</p><ul><li><b>cryIAc and cryIIAb</b> → cotton bollworms</li><li><b>cryIAb</b> → corn borer</li></ul>'},
    {t:'RNA interference against nematodes', h:'<p><i>Meloidogyne incognita</i> infects <b>tobacco roots</b>. Nematode-specific genes are put in via <i>Agrobacterium</i> → sense + antisense RNA → <b>dsRNA</b> → silences the parasite\'s mRNA → parasite cannot survive.</p>'},
    {t:'Genetically engineered insulin', h:'<p>Insulin = chains <b>A and B</b> linked by <b>disulphide bridges</b>. Pro-insulin has an extra <b>C-peptide</b> that is removed. <b>Eli Lilly (1983)</b> made DNA for chains A and B, put them in <i>E. coli</i> plasmids and joined the chains. Earlier insulin from cattle and pigs caused allergies.</p>'},
    {t:'Gene therapy (ADA)', h:'<p>First clinical gene therapy: <b>1990</b>, a 4-year-old girl with <b>adenosine deaminase (ADA) deficiency</b>. Lymphocytes were grown, given functional ADA cDNA by a retroviral vector and returned. Not permanent — needs repeat infusions. A permanent cure needs the gene in cells at early embryonic stages.</p>'},
    {t:'Diagnosis & transgenic animals', h:'<ul><li><b>PCR</b>: detects very low amounts of bacteria/viruses (HIV) and mutations.</li><li><b>ELISA</b>: antigen–antibody interaction.</li><li>Radioactive probe + autoradiography: a mutated gene does not show up.</li><li><b>Rosie (1997)</b>: first transgenic cow; milk with human <b>α-lactalbumin</b> (2.4 g/L).</li><li>Transgenic mice: α-1-antitrypsin (emphysema), polio vaccine safety testing. Over 95% of transgenic animals are mice.</li></ul>'},
    {t:'Ethics: GEAC & biopiracy', h:'<ul><li><b>GEAC</b> = Genetic Engineering Approval Committee (India) — checks GM research and safety.</li><li>Biopiracy cases: <b>basmati rice</b> (India has 27 documented varieties; US patent 1997), turmeric, neem.</li><li>India amended its Patents Bill to protect such resources.</li></ul>'}
  ],
  traps:['The Bt protoxin does <b>not</b> kill the bacterium itself.','RNAi works by <b>dsRNA</b> blocking translation of a specific mRNA.','ADA lymphocyte therapy is <b>not</b> a permanent cure.','Rosie\'s milk had <b>human α-lactalbumin</b>, not insulin.','Over 95% of transgenic animals are <b>mice</b>.'],
  quiz:[
    {q:'Bt genes against cotton bollworms are:', o:['cryIAb only','cryIAc and cryIIAb','cryIIIAa','cry1F'], a:1, x:'cryIAb → corn borer.'},
    {q:'Nematode resistance in tobacco was produced by:', o:['Bt toxin','RNA interference','Gene therapy','Antisense DNA vaccine'], a:1, x:'dsRNA silencing.'},
    {q:'Meloidogyne incognita infects the roots of:', o:['Cotton','Tobacco','Rice','Maize'], a:1, x:'Tobacco.'},
    {q:'The first clinical gene therapy treated:', o:['Diabetes','ADA deficiency','Haemophilia','Sickle-cell anaemia'], a:1, x:'1990, a 4-year-old girl.'},
    {q:'Rosie\'s milk contained human:', o:['Insulin','α-lactalbumin','α-1-antitrypsin','Growth hormone'], a:1, x:'2.4 g per litre.'},
    {q:'GEAC stands for:', o:['Gene Expression Analysis Centre','Genetic Engineering Approval Committee','Genome Editing Advisory Council','General Environment Approval Committee'], a:1, x:'Indian regulatory body.'},
    {q:'Insulin chains A and B are joined by:', o:['Peptide bonds','Disulphide bridges','Hydrogen bonds','Ester bonds'], a:1, x:'Disulphide bridges.'},
    {q:'Bt protoxin becomes active due to:', o:['Acidic pH of gut','Alkaline pH of insect gut','High temperature','Light'], a:1, x:'Alkaline midgut.'},
    {q:'Very low concentrations of HIV are detected by:', o:['ELISA only','PCR','Biopsy','X-ray'], a:1, x:'PCR amplifies nucleic acid.'}
  ]
},
'pu2-ch11': {
  title:'Organisms and Populations', ch:'II PUC · Chapter 11', icon:'🦁', color:'#EF6C00', href:'pu2-ch11.html',
  intro:'Growth equations, per-capita rates and the +/– interaction table that settles every example question.',
  tricks:[
    {t:'Interaction sign table', h:'<div class="tb"><table><tr><th>Interaction</th><th>Signs</th><th>Examples</th></tr><tr><td>Mutualism</td><td>+ +</td><td>Lichens, mycorrhiza, fig–wasp, <i>Ophrys</i> bee (sexual deceit)</td></tr><tr><td>Competition</td><td>− −</td><td>Abingdon tortoise vs goats; <i>Balanus</i> vs <i>Chthamalus</i>; flamingoes vs fish for zooplankton</td></tr><tr><td>Predation</td><td>+ −</td><td>Prickly pear cactus in Australia controlled by a cactus-feeding moth</td></tr><tr><td>Parasitism</td><td>+ −</td><td><i>Cuscuta</i>, lice, liver fluke; cuckoo (brood parasitism)</td></tr><tr><td>Commensalism</td><td>+ 0</td><td>Orchid on mango branch, barnacles on whale, cattle egret &amp; cattle, sea anemone &amp; clown fish</td></tr><tr><td>Amensalism</td><td>− 0</td><td>One harmed, other unaffected</td></tr></table></div>'},
    {t:'Growth models', h:'<ul><li><b>Exponential</b>: dN/dt = rN → N<sub>t</sub> = N<sub>0</sub>e<sup>rt</sup> → <b>J-shaped</b>.</li><li><b>Logistic</b> (Verhulst–Pearl): dN/dt = rN (K − N)/K → <b>S-shaped (sigmoid)</b>; K = carrying capacity. More realistic.</li><li>r values: Norway rat 0.015; flour beetle 0.12; India (1981) 0.0205.</li></ul>'},
    {t:'Per-capita rate calculation', h:'<p>Birth rate = new individuals ÷ starting population.</p><ul><li>20 lotus plants, 8 new → <b>0.4</b> per plant per year.</li><li>40 fruit flies, 4 die → death rate <b>0.1</b> per fly per week.</li></ul><p>N<sub>t+1</sub> = N<sub>t</sub> + [(B + I) − (D + E)].</p>'},
    {t:'Population attributes', h:'<ul><li>Birth rate, death rate, sex ratio, age pyramid — <b>expanding</b> (triangle), <b>stable</b> (bell), <b>declining</b> (urn).</li><li>Density measured by: numbers, percent cover or biomass (big trees), <b>pug marks and faecal pellets</b> (tigers), fish caught per trap.</li></ul>'},
    {t:'Competition principles', h:'<ul><li><b>Gause\'s competitive exclusion principle</b>: two closely related species competing for the same resource cannot co-exist indefinitely.</li><li><b>Resource partitioning</b>: MacArthur\'s warblers feed on the same tree at different positions/times.</li></ul>'},
    {t:'Prey and plant defences', h:'<ul><li>Camouflage (cryptic colouring) in insects and frogs.</li><li><b>Monarch butterfly</b> is distasteful — it takes a chemical from <b>milkweed</b> it ate as a caterpillar.</li><li>Plants: thorns (<i>Acacia</i>, cactus); <i>Calotropis</i> cardiac glycosides; nicotine, caffeine, quinine, strychnine, opium.</li></ul>'}
  ],
  traps:['Sea anemone and clown fish is <b>commensalism</b> (anemone gets nothing).','Cuckoo laying eggs in a crow\'s nest = <b>brood parasitism</b>.','Each fig species is pollinated only by its own wasp species.','Logistic growth is more realistic than exponential.','<i>Cuscuta</i> is a parasitic plant with no chlorophyll.'],
  quiz:[
    {q:'The logistic growth equation is:', o:['dN/dt = rN','dN/dt = rN (K − N)/K','N = rt','dN/dt = K/N'], a:1, x:'Verhulst–Pearl; S-shaped curve.'},
    {q:'One species benefits, the other is unaffected:', o:['Mutualism','Commensalism','Amensalism','Parasitism'], a:1, x:'+ 0.'},
    {q:'Cattle egret and grazing cattle show:', o:['Mutualism','Commensalism','Predation','Competition'], a:1, x:'Egret gains, cattle unaffected.'},
    {q:'Ophrys gets pollinated by:', o:['Wind','Sexual deceit of a bee','Water','Birds'], a:1, x:'Petal looks like a female bee.'},
    {q:'Competitive exclusion principle was given by:', o:['MacArthur','Gause','Connell','Verhulst'], a:1, x:'Gause.'},
    {q:'Monarch butterfly is distasteful because of a chemical from:', o:['Calotropis seeds','Milkweed eaten as a caterpillar','Its own glands','Nectar'], a:1, x:'Milkweed.'},
    {q:'20 lotus plants produce 8 new plants. Birth rate:', o:['0.2','0.4','0.8','8'], a:1, x:'8 ÷ 20 = 0.4.'},
    {q:'A cuckoo laying eggs in a crow\'s nest is:', o:['Commensalism','Brood parasitism','Mutualism','Predation'], a:1, x:'Brood parasitism.'},
    {q:'A J-shaped growth curve represents:', o:['Logistic growth','Exponential growth','Zero growth','Declining population'], a:1, x:'Unlimited resources.'}
  ]
},
'pu2-ch12': {
  title:'Ecosystem', ch:'II PUC · Chapter 12', icon:'🌳', color:'#33691E', href:'pu2-ch12.html',
  intro:'Productivity numbers, decomposition steps and pyramids: the rules that never change.',
  tricks:[
    {t:'Productivity formulas & numbers', h:'<ul><li><b>NPP = GPP − R</b> (R = respiration losses).</li><li>Annual NPP of the whole biosphere ≈ <b>170 billion tons</b> (dry weight).</li><li>Oceans cover ~70% of the surface but give only <b>55 billion tons</b>.</li><li>Secondary productivity = rate of new organic matter formed by consumers.</li></ul>'},
    {t:'Decomposition in 5 steps', h:'<p><b>Fragmentation</b> (detritivores like earthworm) → <b>leaching</b> (water-soluble nutrients into soil) → <b>catabolism</b> (bacterial and fungal enzymes) → <b>humification</b> (humus: dark, amorphous, resistant, slow to decay) → <b>mineralisation</b> (release of inorganic nutrients).</p><p>Faster: nitrogen- and sugar-rich detritus, warm and moist. Slower: lignin and chitin, cold, anaerobic.</p>'},
    {t:'Energy flow rules', h:'<ul><li>PAR is about <b>50%</b> of incident solar radiation; plants capture only <b>2–10% of PAR</b>.</li><li>Energy flow is <b>unidirectional</b>.</li><li>Only about <b>10%</b> of energy passes to the next trophic level.</li><li>Grazing food chain starts with producers; detritus food chain starts with dead organic matter.</li></ul>'},
    {t:'Pyramids: which can invert?', h:'<div class="tb"><table><tr><th>Pyramid</th><th>Shape</th></tr><tr><td>Energy</td><td><b>Always upright</b></td></tr><tr><td>Biomass</td><td>Usually upright; <b>inverted in the sea</b> (small standing crop of phytoplankton)</td></tr><tr><td>Numbers</td><td>Usually upright (e.g., grassland)</td></tr></table></div><p>Limitations: a species may belong to two levels; saprophytes are not shown; simple food chains assumed.</p>'},
    {t:'Standing crop & trophic levels', h:'<ul><li><b>Standing crop</b> = mass of living material at a trophic level at a given time (biomass or number).</li><li>Producers → primary consumers (herbivores) → secondary consumers (carnivores) → tertiary consumers.</li><li>Food web = interconnected food chains.</li></ul>'},
    {t:'Ecosystem components', h:'<p>Biotic (producers, consumers, decomposers) + abiotic. Functional aspects: <b>productivity, decomposition, energy flow, nutrient cycling</b>. Vertical distribution of species at different levels = <b>stratification</b> (trees, shrubs, herbs, grasses).</p>'}
  ],
  traps:['The pyramid of <b>energy</b> is never inverted.','Earthworm = detritivore (fragmentation), not a decomposer microbe.','Humus is <b>resistant</b> to microbial action.','Only 2–10% of PAR is captured, not 2–10% of all sunlight.','Ocean productivity is low despite large area.'],
  quiz:[
    {q:'Annual NPP of the whole biosphere is about:', o:['55 billion tons','170 billion tons','1700 billion tons','17 billion tons'], a:1, x:'Oceans alone ≈ 55 billion tons.'},
    {q:'Which pyramid is always upright?', o:['Numbers','Biomass','Energy','All of these'], a:2, x:'Energy decreases at each level.'},
    {q:'Percentage of PAR captured by plants:', o:['50%','10–20%','2–10%','1%'], a:2, x:'2–10% of PAR.'},
    {q:'Release of inorganic nutrients from humus is:', o:['Leaching','Humification','Mineralisation','Fragmentation'], a:2, x:'Mineralisation.'},
    {q:'Water-soluble nutrients moving into soil is called:', o:['Leaching','Catabolism','Humification','Fragmentation'], a:0, x:'Leaching.'},
    {q:'An inverted pyramid of biomass is seen in:', o:['Grassland','Forest','Sea','Desert'], a:2, x:'Phytoplankton standing crop is small.'},
    {q:'NPP equals:', o:['GPP + R','GPP − R','R − GPP','GPP × R'], a:1, x:'Net = gross minus respiration.'},
    {q:'Decomposition is slow when detritus is rich in:', o:['Nitrogen','Sugars','Lignin and chitin','Water'], a:2, x:'Lignin and chitin resist decay.'},
    {q:'Energy passed to the next trophic level is about:', o:['1%','10%','50%','90%'], a:1, x:'10% rule.'}
  ]
},
'pu2-ch13': {
  title:'Biodiversity and Conservation', ch:'II PUC · Chapter 13', icon:'🦋', color:'#1B5E20', href:'pu2-ch13.html',
  intro:'Numbers, the species–area equation, the "Evil Quartet" and in situ vs ex situ: fact-heavy, made memorable.',
  tricks:[
    {t:'Numbers to memorise', h:'<ul><li>IUCN (2004): over <b>1.5 million</b> species described. Robert May\'s estimate: about <b>7 million</b> globally.</li><li>India: <b>2.4%</b> of world land, <b>8.1%</b> of species diversity — one of 12 megadiversity countries.</li><li>India: over 50,000 rice and 1000 mango varieties (genetic diversity). <i>Rauvolfia vomitoria</i> varies in reserpine.</li></ul>'},
    {t:'Species–area relationship', h:'<p>Alexander von Humboldt: <b>log S = log C + Z log A</b>.</p><ul><li>Z = 0.1–0.2 for most groups and regions.</li><li>Very large areas (continents): Z = 0.6–1.2.</li><li>Frugivorous birds and mammals in tropical forests across continents: <b>Z = 1.15</b>.</li></ul>'},
    {t:'Latitudinal gradient', h:'<p>Diversity decreases from the equator to the poles. Birds: Colombia ~1400, New York 105, Greenland 56; India over 1200.</p><p>Amazon: over 40,000 plants, 3000 fishes, 1300 birds, 427 mammals, 427 amphibians, 378 reptiles, over 1,25,000 invertebrates.</p><p>Why tropics: undisturbed for millions of years, less seasonal, more solar energy.</p>'},
    {t:'The Evil Quartet (HOAC)', h:'<ol><li><b>H</b>abitat loss and fragmentation — most important. Rain forests: 14% of land once, now 6%. Amazon = "lungs of the planet".</li><li><b>O</b>ver-exploitation — Steller\'s sea cow, passenger pigeon.</li><li><b>A</b>lien species — Nile perch in Lake Victoria (200+ cichlids lost); <i>Parthenium</i>, <i>Lantana</i>, water hyacinth; African catfish <i>Clarias gariepinus</i>.</li><li><b>C</b>o-extinctions — host and parasite; plant and pollinator.</li></ol>'},
    {t:'In situ vs ex situ', h:'<div class="tb"><table><tr><th>In situ (on site)</th><th>Ex situ (off site)</th></tr><tr><td>Biodiversity hotspots (34 in the world; India: Western Ghats &amp; Sri Lanka, Indo-Burma, Himalaya)</td><td>Zoological parks, botanical gardens, wildlife safari parks</td></tr><tr><td>14 biosphere reserves, 90 national parks, 448 wildlife sanctuaries</td><td>Seed banks, cryopreservation of gametes</td></tr><tr><td>Sacred groves: Khasi &amp; Jaintia Hills (Meghalaya), Aravalli (Rajasthan), Western Ghats (Karnataka, Maharashtra), Sarguja, Chanda, Bastar</td><td>Tissue culture</td></tr></table></div><p>Earth Summit: <b>Rio de Janeiro 1992</b>. World Summit on Sustainable Development: <b>Johannesburg 2002</b>.</p>'},
    {t:'Stability & extinctions', h:'<ul><li><b>Rivet popper hypothesis</b>: Paul Ehrlich.</li><li><b>David Tilman</b>: plots with more species show less year-to-year variation in total biomass.</li><li>Recent extinctions: dodo (Mauritius), quagga (Africa), thylacine (Australia), Steller\'s sea cow (Russia), three tiger subspecies (Bali, Javan, Caspian).</li><li>Last 500 years: 784 extinctions (338 vertebrates, 359 invertebrates, 87 plants).</li></ul>'}
  ],
  traps:['Hotspots cover less than 2% of land but hold very high species richness.','Sacred groves are <b>in situ</b>; cryopreservation is <b>ex situ</b>.','Z ≈ 0.1–0.2 regardless of taxonomic group or region (for small areas).','Habitat loss is the <b>most important</b> cause of extinction.','The Amazon is called the "lungs of the planet".'],
  quiz:[
    {q:'The species–area relationship was given by:', o:['Robert May','Alexander von Humboldt','Paul Ehrlich','David Tilman'], a:1, x:'log S = log C + Z log A.'},
    {q:'Z for frugivorous birds and mammals in tropical forests across continents:', o:['0.1','0.2','1.15','0.6'], a:2, x:'1.15.'},
    {q:'Number of biodiversity hotspots in the world:', o:['12','25','34','14'], a:2, x:'34; three cover India.'},
    {q:'The Nile perch caused extinction of cichlid fish in:', o:['Lake Victoria','Lake Baikal','Chilika Lake','Lake Tanganyika'], a:0, x:'Over 200 cichlid species lost.'},
    {q:'The rivet popper hypothesis was proposed by:', o:['David Tilman','Paul Ehrlich','Robert May','Humboldt'], a:1, x:'Paul Ehrlich.'},
    {q:'Which is ex situ conservation?', o:['National park','Sacred grove','Cryopreservation','Biosphere reserve'], a:2, x:'Off-site storage of gametes.'},
    {q:'India\'s share of global species diversity is:', o:['2.4%','8.1%','12%','5%'], a:1, x:'2.4% of land, 8.1% of species.'},
    {q:'The most important cause of biodiversity loss is:', o:['Over-exploitation','Alien species','Habitat loss and fragmentation','Co-extinction'], a:2, x:'First of the Evil Quartet.'},
    {q:'Sacred groves of Meghalaya are in the:', o:['Aravalli hills','Khasi and Jaintia Hills','Western Ghats','Bastar'], a:1, x:'Khasi and Jaintia Hills.'},
    {q:'The Earth Summit was held in:', o:['Johannesburg 2002','Rio de Janeiro 1992','Kyoto 1997','Stockholm 1972'], a:1, x:'Rio de Janeiro, 1992.'}
  ]
}
});
