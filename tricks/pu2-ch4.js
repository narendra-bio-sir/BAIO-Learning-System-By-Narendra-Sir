/* Short Notes & Tricks — II PUC Biology, Chapter 4: Principles of Inheritance and Variation (NCERT). */
window.TRICKS = window.TRICKS || {};
window.TRICKS['pu2-ch4'] = {
  title: 'Principles of Inheritance and Variation', cls: 'II PUC', ch: 4, page: 'pu2-ch4.html',
  topics: [
    {
      t: 'Mendel and the monohybrid cross',
      notes: [
        '<b>Gregor Mendel</b> did hybridisation experiments on <b>garden pea</b> for <b>7 years (1856–1863)</b> and studied <b>7 pairs of contrasting traits</b>.',
        'Pea is good for experiments: short life, many seeds, clear contrasting traits, self-pollinating but can be cross-pollinated.',
        'Monohybrid cross (tall TT × dwarf tt): F₁ all <b>tall (Tt)</b>; F₂ phenotype ratio <b>3 : 1</b>, genotype ratio <b>1 : 2 : 1</b> (TT : Tt : tt).',
        '<b>Law of Dominance</b>: in a heterozygote, only the dominant trait shows.',
        '<b>Law of Segregation</b>: the two alleles separate during gamete formation, so each gamete gets <b>only one</b> allele.',
        '<b>Test cross</b>: cross with the <b>homozygous recessive</b>. Monohybrid test cross of a heterozygote gives <b>1 : 1</b>.'
      ],
      tricks: [
        ['Ratios', '"<b>3:1</b> you <b>see</b>, <b>1:2:1</b> is what you <b>be</b>" (phenotype vs genotype).'],
        ['Test cross', '"Test with the <b>weakest</b> (recessive) to find the hidden one".'],
        ['Mendel', '"<b>7</b> years, <b>7</b> traits" (1856–1863).']
      ],
      traps: ['Law of segregation is universal; law of dominance has exceptions.', 'Test cross is always with the homozygous recessive.'],
      kn: 'ಏಕತಳಿ ಸಂಕರಣ: F₂ ರೂಪ ಅನುಪಾತ 3:1, ಜೀನ್ ಅನುಪಾತ 1:2:1; ಪರೀಕ್ಷಾ ಸಂಕರಣ 1:1.',
      hi: 'एकसंकर संकरण: F₂ लक्षणप्रारूप 3:1, जीनप्रारूप 1:2:1; परीक्षार्थ संकरण 1:1।'
    },
    {
      t: 'Incomplete dominance, codominance and multiple alleles',
      notes: [
        '<b>Incomplete dominance</b>: the F₁ is in between the parents. <b>Snapdragon (Antirrhinum)</b>: red × white → <b>pink</b>; F₂ phenotype ratio = genotype ratio = <b>1 : 2 : 1</b>.',
        '<b>Codominance</b>: both alleles show fully in the heterozygote. Example: <b>ABO blood groups</b> — I<sup>A</sup> and I<sup>B</sup> are codominant; both dominant over <b>i</b>.',
        'ABO is also an example of <b>multiple alleles</b> (three alleles I<sup>A</sup>, I<sup>B</sup>, i in the population; a person has only two).',
        'ABO gives <b>6 genotypes</b> and <b>4 phenotypes</b> (A, B, AB, O).',
        'One gene, many effects = <b>pleiotropy</b> (e.g. phenylketonuria). Many genes, one trait = <b>polygenic inheritance</b> (e.g. human <b>skin colour</b>, height).',
        '<b>Starch grain size</b> in pea: <b>incomplete dominance</b>, though round/wrinkled seed shape shows complete dominance.'
      ],
      tricks: [
        ['Pink flower', '"<b>Snap</b>dragon makes a <b>pink snap</b>" (1:2:1).'],
        ['ABO numbers', '"<b>3</b> alleles, <b>6</b> genotypes, <b>4</b> blood groups — <b>3-6-4</b>".'],
        ['Codominance', '"<b>AB</b> = <b>A</b>ll <b>B</b>oth show" (I<sup>A</sup> I<sup>B</sup>).']
      ],
      traps: ['In incomplete dominance the F₂ phenotype ratio is 1:2:1, not 3:1.', 'Blood group AB is codominance, not incomplete dominance.'],
      kn: 'ಸ್ನ್ಯಾಪ್‌ಡ್ರ್ಯಾಗನ್‌ನಲ್ಲಿ ಅಪೂರ್ಣ ಪ್ರಾಬಲ್ಯ (ಗುಲಾಬಿ ಬಣ್ಣ); ABO ರಕ್ತ ಗುಂಪಿನಲ್ಲಿ ಸಹಪ್ರಾಬಲ್ಯ ಮತ್ತು ಬಹು ಅಲೀಲ್.',
      hi: 'स्नैपड्रैगन में अपूर्ण प्रभाविता (गुलाबी फूल); ABO रक्त समूह में सहप्रभाविता और बहुविकल्पी एलील।'
    },
    {
      t: 'Dihybrid cross and independent assortment',
      notes: [
        'Dihybrid cross: two traits together, e.g. seed shape and colour: <b>RRYY</b> (round yellow) × <b>rryy</b> (wrinkled green).',
        'F₁: all <b>round yellow (RrYy)</b>. F₂ phenotype ratio: <b>9 : 3 : 3 : 1</b>.',
        '<b>Law of Independent Assortment</b>: when two pairs of traits are combined, the alleles of one pair separate <b>independently</b> of the other pair.',
        'A dihybrid test cross (RrYy × rryy) gives <b>1 : 1 : 1 : 1</b>.',
        'An F₁ (RrYy) makes <b>4 kinds of gametes</b> (RY, Ry, rY, ry) in equal numbers.'
      ],
      tricks: [
        ['Dihybrid ratio', '"<b>9 3 3 1</b> = <b>16</b> boxes: 9 both dominant, 3 + 3 one dominant, 1 both recessive".'],
        ['Test cross', '"Mono test <b>1:1</b>, Di test <b>1:1:1:1</b>".'],
        ['Gametes', '"Types of gametes = <b>2ⁿ</b>" (n = number of heterozygous gene pairs).']
      ],
      traps: ['Independent assortment fails for genes that are linked on the same chromosome.'],
      kn: 'ದ್ವಿತಳಿ ಸಂಕರಣ F₂ ಅನುಪಾತ 9:3:3:1; ಸ್ವತಂತ್ರ ವಿಂಗಡಣೆಯ ನಿಯಮ.',
      hi: 'द्विसंकर संकरण का F₂ अनुपात 9:3:3:1; स्वतंत्र अपव्यूहन का नियम।'
    },
    {
      t: 'Chromosomal theory, linkage and recombination',
      notes: [
        'Mendel\'s work was rediscovered in <b>1900</b> by <b>de Vries, Correns and von Tschermak</b>.',
        '<b>Sutton and Boveri</b> gave the <b>chromosomal theory of inheritance</b>: genes are on chromosomes, and chromosomes segregate and assort independently.',
        '<b>Thomas Hunt Morgan</b> proved it using the fruit fly <b>Drosophila melanogaster</b> (short life cycle, many offspring, easy to grow, clear male/female differences).',
        '<b>Linkage</b>: genes on the same chromosome tend to be inherited together. <b>Recombination</b>: new combinations formed by crossing over.',
        'Tightly linked genes show little recombination; loosely linked genes show more.',
        '<b>Alfred Sturtevant</b> used recombination frequency to make <b>chromosome maps</b> (gene distance).'
      ],
      tricks: [
        ['Rediscovery', '"<b>1900</b>: <b>d C T</b> = <b>de</b> Vries, <b>C</b>orrens, <b>T</b>schermak".'],
        ['Mapping', '"<b>St</b>urtevant drew the <b>St</b>reet map of genes".']
      ],
      traps: ['Morgan coined linkage and recombination using Drosophila, not pea.', 'More distance between genes = more recombination.'],
      kn: 'ಸಟನ್ ಮತ್ತು ಬೊವೆರಿ ವರ್ಣತಂತು ಸಿದ್ಧಾಂತ; ಮಾರ್ಗನ್ ಡ್ರೊಸೊಫಿಲಾದಲ್ಲಿ ಸಹಲಗ್ನತೆ ಕಂಡುಹಿಡಿದರು.',
      hi: 'सटन और बोवेरी का गुणसूत्र सिद्धांत; मॉर्गन ने ड्रोसोफ़िला में सहलग्नता खोजी।'
    },
    {
      t: 'Sex determination',
      notes: [
        '<b>Henking</b> saw a special nuclear structure in insects and called it the <b>X body</b> (later called the X chromosome).',
        '<b>XX–XO</b> type: <b>grasshopper</b> — males have only one X (XO).',
        '<b>XX–XY</b> type: <b>humans and Drosophila</b> — males are XY. Here the <b>male is heterogametic</b>.',
        '<b>ZW–ZZ</b> type: <b>birds</b> — <b>females are ZW</b> (heterogametic), males ZZ.',
        '<b>Honey bee</b>: <b>haplodiploidy</b>. Fertilised egg → female (queen or worker, <b>32</b> chromosomes); unfertilised egg → male drone (<b>16</b> chromosomes) by parthenogenesis.',
        'In humans, the <b>sperm</b> (X or Y) decides the sex; the chance of a boy or girl is <b>50%</b>.'
      ],
      tricks: [
        ['Who is heterogametic', '"<b>Birds</b> are <b>opposite</b>: the <b>female</b> is ZW; in humans the <b>male</b> is XY".'],
        ['Grasshopper', '"Grasshopper male lost an X: <b>XO</b>".'],
        ['Honey bee', '"<b>Drone = Done alone</b>: no father, 16 chromosomes".']
      ],
      traps: ['In birds the female decides the sex of the chick.', 'A drone has no father but has a grandfather.'],
      kn: 'ಮಿಡತೆ XO, ಮಾನವ XY (ಗಂಡು ಭಿನ್ನಜನ್ಯ), ಪಕ್ಷಿಗಳು ZW (ಹೆಣ್ಣು ಭಿನ್ನಜನ್ಯ); ಜೇನುನೊಣ ಹ್ಯಾಪ್ಲೋಡಿಪ್ಲಾಯ್ಡಿ.',
      hi: 'टिड्डा XO, मानव XY (नर विषमयुग्मकी), पक्षी ZW (मादा विषमयुग्मकी); मधुमक्खी में अगुणित-द्विगुणिता।'
    },
    {
      t: 'Mutation and Mendelian disorders',
      notes: [
        '<b>Mutation</b>: a change in DNA sequence. <b>Point mutation</b>: change in a single base pair (e.g. sickle-cell anaemia). Deletions and insertions cause <b>frame-shift</b> mutations. Agents that cause mutation are <b>mutagens</b> (e.g. UV radiation).',
        '<b>Pedigree analysis</b> tracks a trait through generations of a family.',
        '<b>Haemophilia</b>: <b>X-linked recessive</b>; blood does not clot properly. Usually affects males; carrier females pass it on. Queen Victoria\'s family is a famous example.',
        '<b>Sickle-cell anaemia</b>: <b>autosomal recessive</b>; <b>glutamic acid → valine</b> at the <b>6th position</b> of the β-globin chain (codon <b>GAG → GUG</b>). RBCs become sickle-shaped at low oxygen.',
        '<b>Phenylketonuria</b>: autosomal recessive; enzyme missing to convert phenylalanine to tyrosine; phenylalanine builds up and harms the brain (mental retardation).',
        '<b>Colour blindness</b>: X-linked recessive; red/green defect; about <b>8% of males</b> and <b>0.4% of females</b>.',
        '<b>Thalassemia</b>: <b>autosomal recessive</b>; too little globin made. <b>α-thalassemia</b>: genes HBA1, HBA2 on <b>chromosome 16</b>; <b>β-thalassemia</b>: gene HBB on <b>chromosome 11</b>.'
      ],
      tricks: [
        ['X-linked recessive', '"<b>H</b>aemophilia and <b>C</b>olour blindness ride on <b>X</b>: <b>H C X</b>".'],
        ['Sickle cell', '"<b>G</b>lu → <b>V</b>al at <b>6</b>: <b>GAG → GUG</b>" — only the A becomes U.'],
        ['Thalassemia chromosomes', '"<b>α</b> = <b>16</b> (alpha is sweet sixteen), <b>β</b> = <b>11</b>".']
      ],
      traps: ['Thalassemia is quantitative (too little globin); sickle-cell is qualitative (wrong globin).', 'Both haemophilia and colour blindness are more common in males.'],
      kn: 'ಹೀಮೋಫಿಲಿಯಾ ಮತ್ತು ವರ್ಣಾಂಧತೆ X-ಸಂಬಂಧಿತ ಅಪ್ರಬಲ; ಸಿಕಲ್ ಸೆಲ್‌ನಲ್ಲಿ 6ನೇ ಸ್ಥಾನದಲ್ಲಿ ಗ್ಲುಟಾಮಿಕ್ ಆಮ್ಲ → ವ್ಯಾಲಿನ್.',
      hi: 'हीमोफ़ीलिया और वर्णांधता X-सहलग्न अप्रभावी; सिकल सेल में छठे स्थान पर ग्लूटैमिक अम्ल → वैलीन।'
    },
    {
      t: 'Chromosomal disorders',
      notes: [
        'Caused by missing, extra or abnormal chromosomes. Failure of chromatids to separate (<b>non-disjunction</b>) gives <b>aneuploidy</b>. A full extra set is <b>polyploidy</b> (common in plants).',
        '<b>Down\'s syndrome</b>: <b>trisomy 21</b> (extra chromosome 21). Short, small round head, furrowed tongue, partly open mouth, broad palm with a characteristic crease, slow physical and mental development.',
        '<b>Klinefelter\'s syndrome</b>: <b>47, XXY</b>. Male, but with breast development (gynaecomastia) and sterility.',
        '<b>Turner\'s syndrome</b>: <b>45, XO</b>. Female, sterile, ovaries rudimentary, lack of secondary sexual characters.'
      ],
      tricks: [
        ['Down', '"<b>Down</b> = <b>three copies of 21</b>" (trisomy 21).'],
        ['Klinefelter vs Turner', '"<b>K</b>linefelter has an <b>extra X</b> (47, XXY: <b>K</b>ing with extra); <b>T</b>urner has <b>too few</b> (45, XO)".']
      ],
      traps: ['Klinefelter is a male; Turner is a female.', 'Down\'s syndrome is an autosomal trisomy, not a sex-chromosome disorder.'],
      kn: 'ಡೌನ್ ಸಿಂಡ್ರೋಮ್ ಟ್ರೈಸೋಮಿ 21; ಕ್ಲೈನ್‌ಫೆಲ್ಟರ್ 47 XXY; ಟರ್ನರ್ 45 XO.',
      hi: 'डाउन सिंड्रोम ट्राइसोमी 21; क्लाइनफ़ेल्टर 47 XXY; टर्नर 45 XO।'
    }
  ],
  numbers: [
    ['Mendel\'s experiments', '1856–1863, 7 traits'],
    ['Monohybrid F₂', '3:1 (1:2:1 genotype)'],
    ['Dihybrid F₂', '9:3:3:1'],
    ['Test crosses', '1:1 and 1:1:1:1'],
    ['ABO', '3 alleles, 6 genotypes, 4 phenotypes'],
    ['Honey bee', 'female 32, drone 16'],
    ['Colour blindness', '≈ 8% males, 0.4% females'],
    ['Sickle cell', 'Glu → Val at position 6 (GAG → GUG)'],
    ['Thalassemia genes', 'α: chr 16; β: chr 11'],
    ['Down / Klinefelter / Turner', 'trisomy 21 / 47 XXY / 45 XO']
  ],
  last: [
    'Laws: dominance, segregation, independent assortment.',
    'Snapdragon: incomplete dominance (pink), F₂ 1:2:1.',
    'ABO blood groups: codominance and multiple alleles.',
    'Skin colour is polygenic; phenylketonuria shows pleiotropy.',
    'Sutton & Boveri: chromosomal theory; Morgan: linkage in Drosophila.',
    'Grasshopper XO; humans XY; birds ZW (female heterogametic).',
    'Haemophilia and colour blindness: X-linked recessive.',
    'Sickle-cell: Glu → Val, GAG → GUG.',
    'Thalassemia: autosomal recessive; α on 16, β on 11.',
    'Down: trisomy 21; Klinefelter: XXY; Turner: XO.'
  ]
};
