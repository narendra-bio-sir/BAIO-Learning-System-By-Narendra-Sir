/* PU-I Chapter 10 — Cell Cycle and Cell Division: topics, Study Mode and Concepts (English).
   Source: Narendra Sir's typed notes + NCERT Class 11 Ch 10. Built into pu1-ch10.html by build.js. */
const topics = [
  {id:'cycle', name:'Cell Cycle: Meaning, Duration & Phases'},
  {id:'interphase', name:'Interphase: G1, S, G2 & G0'},
  {id:'mitosis-early', name:'Mitosis: Prophase & Metaphase'},
  {id:'mitosis-late', name:'Mitosis: Anaphase & Telophase'},
  {id:'cytokinesis', name:'Cytokinesis & Significance of Mitosis'},
  {id:'meiosis-prophase', name:'Meiosis & Prophase I'},
  {id:'meiosis-one', name:'Meiosis I: Metaphase I to Interkinesis'},
  {id:'meiosis-two', name:'Meiosis II & Significance of Meiosis'}
];

const study = {
  'cycle': {
    recap: [
      'Every organism, even the largest, starts life as a <b>single cell</b>',
      '<b>Cell cycle</b> = the sequence of events by which a cell duplicates its genome, synthesises other cell constituents and divides into two daughter cells',
      'All events of the cell cycle are under <b>genetic control</b>',
      'Duration: about <b>24 hours</b> in a human cell, about <b>90 minutes</b> in yeast',
      'Two basic phases: <b>Interphase</b> (more than 95% of the time) and <b>M phase</b> (about 1 hour in a human cell)'
    ],
    sections: [
      {h:'From One Cell to Millions', body:'Are you aware that all organisms, even the largest, start their life from a <b>single cell</b>? Growth and reproduction are characteristics of cells, indeed of all living organisms. All cells reproduce by <b>dividing into two daughter cells</b>. Each daughter cell can itself grow and divide, giving rise to a new cell population formed by the growth and division of a single parental cell and its progeny. Such repeated <b>cycles of growth and division</b> allow a single cell to form a structure consisting of millions of cells.'},
      {h:'What Is the Cell Cycle?', body:'The sequence of events by which a cell <b>duplicates its genome</b>, <b>synthesises the other constituents</b> of the cell and eventually <b>divides into two daughter cells</b> is termed the <b>cell cycle</b>. Although cell growth (in terms of cytoplasmic increase) is a continuous process, <b>DNA synthesis occurs only during one specific stage</b> of the cycle. The replicated chromosomes (DNA) are then distributed to the daughter nuclei by a complex series of events. All these events are under <b>genetic control</b>.'},
      {h:'How Long Does One Cycle Take?', body:'The duration of the cell cycle <b>varies from organism to organism and from cell to cell</b>. A typical eukaryotic cell, such as a <b>human cell in culture</b>, divides about once in <b>24 hours</b>. <b>Yeast</b> can progress through the cell cycle in only about <b>90 minutes</b>. Of the 24 hours of a human cell, the actual division (M phase) lasts only about <b>one hour</b>; the rest is interphase.'},
      {h:'The Two Basic Phases', body:'The cell cycle is divided into two basic phases: <b>(1) Interphase</b> &mdash; the period of preparation, during which the cell grows and its DNA is replicated in an orderly manner; it lasts <b>more than 95%</b> of the duration of the cell cycle. <b>(2) M phase (Mitosis phase)</b> &mdash; the phase when the actual cell division takes place. Interphase is often called the &lsquo;resting phase&rsquo;, but this is misleading: the cell is <b>metabolically very active</b>, preparing for division.'},
      {h:'Inside the M Phase', body:'The M phase starts with <b>karyokinesis</b> (nuclear division: separation of daughter chromosomes) and usually ends with <b>cytokinesis</b> (division of the cytoplasm). Karyokinesis has four stages &mdash; <b>Prophase &rarr; Metaphase &rarr; Anaphase &rarr; Telophase</b>. So the full cell cycle can be drawn as: Interphase (G<sub>1</sub> &rarr; S &rarr; G<sub>2</sub>) &rarr; M phase (Karyokinesis + Cytokinesis) &rarr; back to G<sub>1</sub> of the next cycle.'}
    ],
    table: {title:'The Cell Cycle at a Glance', headers:['Phase','Sub-phase','What happens'], rows:[
      ['Interphase','G<sub>1</sub> (Gap 1)','Cell grows, metabolically active; no DNA replication'],
      ['Interphase','S (Synthesis)','DNA replicates (2C &rarr; 4C); centriole duplicates'],
      ['Interphase','G<sub>2</sub> (Gap 2)','Proteins for mitosis made; growth continues'],
      ['M phase','Karyokinesis','Prophase, Metaphase, Anaphase, Telophase'],
      ['M phase','Cytokinesis','Cytoplasm divides &rarr; two daughter cells']
    ]},
    keyList: {title:'Numbers to Remember', items:[
      'Human cell in culture: one division in about 24 hours',
      'Yeast: about 90 minutes per cycle',
      'Interphase: more than 95% of the cycle',
      'M phase in a human cell: about 1 hour'
    ]}
  },

  'interphase': {
    recap: [
      'Interphase = preparation phase: cell grows and DNA is replicated',
      '<b>G<sub>1</sub></b>: between the end of mitosis and the start of DNA replication; cell grows',
      '<b>S</b>: DNA replicates, DNA content doubles <b>2C &rarr; 4C</b>, but chromosome number stays <b>2n</b>',
      'In animal cells the <b>centriole duplicates</b> in the cytoplasm during S phase',
      '<b>G<sub>2</sub></b>: proteins needed for mitosis are made; <b>G<sub>0</sub></b> = quiescent stage of cells that stop dividing'
    ],
    sections: [
      {h:'Interphase Is Not Really &ldquo;Resting&rdquo;', body:'Interphase represents the phase during which the cell <b>prepares itself for division</b> by undergoing both <b>cell growth and DNA replication</b> in an orderly manner. It occupies <b>more than 95%</b> of the cell cycle. It is divided into three phases: <b>G<sub>1</sub> phase (Gap 1)</b>, <b>S phase (Synthesis)</b> and <b>G<sub>2</sub> phase (Gap 2)</b>.'},
      {h:'G<sub>1</sub> Phase (Gap 1)', body:'G<sub>1</sub> corresponds to the interval <b>between the end of mitosis and the initiation of DNA replication</b>. During G<sub>1</sub> the cell is <b>metabolically active</b> and <b>continuously grows</b>, but it does <b>not replicate its DNA</b>.'},
      {h:'S Phase (Synthesis)', body:'S phase marks the period during which <b>DNA synthesis or replication</b> takes place. The amount of DNA per cell <b>doubles</b>: if the initial amount is denoted as <b>2C</b>, it increases to <b>4C</b>. However, there is <b>no increase in the chromosome number</b>: if the cell had a diploid (<b>2n</b>) number of chromosomes at G<sub>1</sub>, even after S phase the number remains <b>2n</b> &mdash; each chromosome now simply has two sister chromatids. In animal cells, DNA replication begins in the nucleus, and the <b>centriole duplicates in the cytoplasm</b> during S phase.'},
      {h:'G<sub>2</sub> Phase (Gap 2)', body:'During G<sub>2</sub>, the <b>proteins needed for mitosis are synthesised</b> while <b>cell growth continues</b>. The cell is now ready to enter the M phase.'},
      {h:'G<sub>0</sub> &mdash; The Quiescent Stage', body:'Some cells in the adult animal do not appear to divide (for example, <b>heart cells</b>), and many other cells divide only occasionally, as needed to replace cells lost by injury or cell death. Cells that do not divide further <b>exit the G<sub>1</sub> phase</b> to enter an inactive stage called the <b>quiescent stage (G<sub>0</sub>)</b>. Cells in G<sub>0</sub> remain <b>metabolically active</b> but <b>no longer proliferate</b> unless called on to do so depending on the requirement of the organism.'},
      {h:'Where Does Mitosis Occur?', body:'In animals, mitotic cell division is seen only in the <b>diploid somatic cells</b>. Plants are different: they can show mitotic divisions in <b>both haploid and diploid cells</b>.'}
    ],
    table: {title:'Chromosome Number vs DNA Content (a 2n cell)', headers:['Stage','Chromosome number','DNA content'], rows:[
      ['G<sub>1</sub>','2n','2C'],
      ['After S phase / G<sub>2</sub>','2n (each with 2 chromatids)','4C'],
      ['Each daughter cell after mitosis','2n','2C'],
      ['Each cell after meiosis I','n','2C'],
      ['Each cell after meiosis II','n','C']
    ]},
    keyList: {title:'G<sub>1</sub>, S, G<sub>2</sub>, G<sub>0</sub> in One Line Each', items:[
      'G<sub>1</sub> &rarr; growth, no DNA replication',
      'S &rarr; DNA doubles (2C &rarr; 4C), chromosome number unchanged (2n), centriole duplicates',
      'G<sub>2</sub> &rarr; proteins for mitosis synthesised, growth continues',
      'G<sub>0</sub> &rarr; quiescent: metabolically active but not dividing (e.g. heart cells)'
    ]}
  },

  'mitosis-early': {
    recap: [
      'Mitosis = <b>equational division</b>: parent and daughter cells have the same chromosome number',
      'First observed by <b>Strasburger (1870)</b> in plant cells and by <b>Flemming (1879)</b> in animal cells; Flemming coined the term <b>mitosis</b>',
      'Karyokinesis has 4 stages: <b>Prophase, Metaphase, Anaphase, Telophase</b>',
      '<b>Prophase</b>: chromatin condenses, centrosomes move to opposite poles, spindle starts forming',
      '<b>Metaphase</b>: chromosomes fully condensed, kinetochores attach to spindle fibres, chromosomes line up on the <b>metaphase plate</b>'
    ],
    sections: [
      {h:'Mitosis &mdash; the Equational Division', body:'The M phase is the most dramatic period of the cell cycle, involving a major reorganisation of virtually all components of the cell. Because the number of chromosomes in the parent and the progeny cells is <b>the same</b>, mitosis is also called <b>equational division</b>. Mitosis was first observed by <b>Strasburger (1870)</b> in plant cells and later by <b>Flemming (1879)</b> in animal cells; Flemming also coined the term <b>mitosis</b>. For convenience, karyokinesis is divided into four stages: <b>Prophase &rarr; Metaphase &rarr; Anaphase &rarr; Telophase</b>. These stages are continuous; one merges smoothly into the next.'},
      {h:'Prophase &mdash; the First Stage', body:'Prophase follows the S and G<sub>2</sub> phases of interphase. In S and G<sub>2</sub> the new DNA molecules are not distinct but intertwined. Prophase is marked by the <b>initiation of condensation of chromosomal material</b>; the chromatin becomes <b>untangled</b> during this condensation. The <b>centrosome</b>, which had duplicated during the S phase, now begins to <b>move towards opposite poles</b> of the cell.'},
      {h:'Completion of Prophase', body:'The completion of prophase is marked by: (i) chromosomal material condensing to form <b>compact mitotic chromosomes</b>, each seen to be composed of <b>two chromatids attached together at the centromere</b>; (ii) initiation of the assembly of the <b>mitotic spindle</b> &mdash; the microtubules (proteinaceous components of the cytoplasm) help in this process. Each centrosome radiates microtubules called <b>asters</b>; the two asters together with the spindle fibres form the <b>mitotic apparatus</b>. At the end of prophase, the <b>Golgi complexes, endoplasmic reticulum, nucleolus and nuclear envelope</b> are no longer seen under the microscope.'},
      {h:'Metaphase &mdash; the Best Stage to Study Chromosomes', body:'The <b>complete disintegration of the nuclear envelope</b> marks the start of metaphase; the chromosomes spread through the cytoplasm. By now, condensation of chromosomes is <b>complete</b> and they can be observed clearly under the microscope &mdash; this is the stage at which the <b>morphology of chromosomes is most easily studied</b>. A metaphase chromosome is made up of <b>two sister chromatids held together by the centromere</b>.'},
      {h:'Kinetochores and the Metaphase Plate', body:'Small <b>disc-shaped structures at the surface of the centromeres</b> are called <b>kinetochores</b>. They serve as the <b>sites of attachment of spindle fibres</b> to the chromosomes. The chromosomes are moved to the spindle equator: <b>one chromatid</b> of each chromosome is connected by its kinetochore to spindle fibres from <b>one pole</b>, and its <b>sister chromatid</b> to spindle fibres from the <b>opposite pole</b>. The plane of alignment of the chromosomes at metaphase is called the <b>metaphase plate</b>.'}
    ],
    table: {title:'Prophase vs Metaphase', headers:['Feature','Prophase','Metaphase'], rows:[
      ['Chromosome condensation','Begins','Complete'],
      ['Nuclear envelope','Starts disintegrating; not seen by the end','Completely disintegrated'],
      ['Centrosomes / centrioles','Move towards opposite poles','At the two poles'],
      ['Spindle','Begins to assemble (asters appear)','Fully formed; fibres attached to kinetochores'],
      ['Chromosome position','Scattered in the nucleus','Aligned on the metaphase plate (equator)']
    ]},
    keyList: {title:'Key Features of Metaphase', items:[
      'Spindle fibres attach to the kinetochores of chromosomes',
      'Chromosomes are moved to the spindle equator and aligned on the metaphase plate',
      'Each sister chromatid faces the opposite pole',
      'Best stage to count and study chromosome morphology'
    ]}
  },

  'mitosis-late': {
    recap: [
      '<b>Anaphase</b>: centromeres split, sister chromatids separate and become daughter chromosomes',
      'Daughter chromosomes move to opposite poles &mdash; <b>centromere leads, arms trail</b>',
      '<b>Telophase</b>: chromosomes reach the poles, decondense and lose their individuality',
      'Nuclear envelope reforms around each chromosome cluster &rarr; <b>two daughter nuclei</b>',
      'Nucleolus, Golgi complex and ER <b>reappear</b>; telophase is the reverse of prophase'
    ],
    sections: [
      {h:'Anaphase &mdash; Chromatids Part Ways', body:'At the onset of anaphase, each chromosome arranged at the metaphase plate is <b>split simultaneously</b>, and the two <b>daughter chromatids</b>, now referred to as <b>chromosomes</b> of the future daughter nuclei, begin their migration towards the <b>two opposite poles</b>.'},
      {h:'Centromere Leads, Arms Follow', body:'As each chromosome moves away from the equatorial plate, the <b>centromere</b> of each chromosome remains directed towards the pole and hence is at the <b>leading edge</b>, with the <b>arms of the chromosome trailing behind</b>. This is why anaphase chromosomes look V-, J- or rod-shaped depending on where the centromere lies.'},
      {h:'Key Features of Anaphase', body:'Anaphase stage is characterised by two key events: (i) <b>centromeres split and chromatids separate</b>; (ii) <b>chromatids move to opposite poles</b>. Because each pole receives one copy of every chromosome, both future nuclei get an identical set.'},
      {h:'Telophase &mdash; the Last Stage', body:'At the beginning of telophase, the chromosomes that have reached their respective poles <b>decondense and lose their individuality</b>. Individual chromosomes can no longer be seen, and the <b>chromatin material collects</b> in a mass at each of the two poles.'},
      {h:'Key Features of Telophase', body:'Telophase is characterised by: (i) chromosomes <b>cluster at opposite spindle poles</b> and their identity as discrete elements is lost; (ii) a <b>nuclear envelope develops around the chromosome clusters</b> at each pole, forming <b>two daughter nuclei</b>; (iii) the <b>nucleolus, Golgi complex and ER reform</b>. Telophase is followed by cytokinesis, and the cells then enter the interphase of the next cycle. In many ways telophase is the <b>reverse of prophase</b>.'}
    ],
    table: {title:'Anaphase vs Telophase', headers:['Feature','Anaphase','Telophase'], rows:[
      ['Main event','Centromeres split; chromatids separate','Chromosomes reach poles and decondense'],
      ['Chromosome movement','Move towards opposite poles','Movement over; cluster at poles'],
      ['Chromosome identity','Distinct, V/J/rod shaped','Lost &mdash; chromatin mass'],
      ['Nuclear envelope, nucleolus','Absent','Reappear &rarr; two daughter nuclei'],
      ['Golgi complex, ER','Not seen','Reform']
    ]},
    keyList: {title:'The Four Stages in One Line Each', items:[
      'Prophase &rarr; condense, centrosomes to poles, spindle starts',
      'Metaphase &rarr; line up on the metaphase plate',
      'Anaphase &rarr; split centromeres, chromatids to opposite poles',
      'Telophase &rarr; decondense, nuclear envelope and nucleolus reform'
    ]}
  },

  'cytokinesis': {
    recap: [
      '<b>Cytokinesis</b> = division of the cytoplasm; follows karyokinesis',
      'Animal cell: a <b>furrow</b> in the plasma membrane deepens and divides the cell',
      'Plant cell: a <b>cell plate</b> (future middle lamella) forms in the centre and grows <b>outwards</b>',
      'Karyokinesis without cytokinesis &rarr; multinucleate <b>syncytium</b> (e.g. liquid endosperm of coconut)',
      'Mitosis gives <b>diploid, genetically identical</b> daughter cells: growth, repair, nucleo-cytoplasmic ratio'
    ],
    sections: [
      {h:'Cytokinesis &mdash; Dividing the Cytoplasm', body:'Mitosis accomplishes the segregation of duplicated chromosomes into daughter nuclei (<b>karyokinesis</b>), but the cell itself is divided into two daughter cells by a separate process called <b>cytokinesis</b> (cyto = cell, kinesis = movement/division), at the end of which cell division is complete.'},
      {h:'Cytokinesis in an Animal Cell', body:'In an animal cell, cytokinesis is achieved by the appearance of a <b>furrow in the plasma membrane</b>. The furrow gradually <b>deepens and ultimately joins in the centre</b>, dividing the cell cytoplasm into two. This is called <b>cleavage</b> and proceeds from the <b>periphery to the centre</b> (centripetal).'},
      {h:'Cytokinesis in a Plant Cell', body:'Plant cells are enclosed by a relatively inextensible <b>cell wall</b>, so they undergo cytokinesis by a different mechanism. Wall formation starts in the <b>centre of the cell</b> and grows <b>outward</b> to meet the existing lateral walls (centrifugal). The formation of the new cell wall begins with a simple precursor called the <b>cell plate</b>, which represents the <b>middle lamella</b> between the walls of two adjacent cells. At the time of cytoplasmic division, organelles like <b>mitochondria and plastids</b> get distributed between the two daughter cells.'},
      {h:'When Cytokinesis Does Not Follow &mdash; Syncytium', body:'In some organisms, karyokinesis is <b>not followed by cytokinesis</b>. As a result, a <b>multinucleate</b> condition arises, leading to the formation of a <b>syncytium</b>. Example: the <b>liquid endosperm in coconut</b> (the coconut water), which has many free nuclei.'},
      {h:'Significance of Mitosis', body:'Mitosis usually results in the production of <b>diploid daughter cells with an identical genetic complement</b>. Its importance: (i) <b>Growth</b> of multicellular organisms is due to mitosis. (ii) Cell growth disturbs the ratio between the nucleus and the cytoplasm; mitosis restores the <b>nucleo-cytoplasmic ratio</b> (the ratio of the volume of the nucleus to that of the cytoplasm). (iii) <b>Cell repair</b>: cells of the upper layer of the epidermis, cells of the lining of the gut and blood cells are constantly replaced. (iv) Mitotic divisions in the <b>meristematic tissues &mdash; the apical and the lateral cambium</b> &mdash; result in continuous growth of plants throughout their life. (v) <b>Vegetative reproduction</b> in plants takes place by mitosis.'}
    ],
    table: {title:'Cytokinesis: Animal Cell vs Plant Cell', headers:['Feature','Animal cell','Plant cell'], rows:[
      ['Method','Furrowing (cleavage)','Cell plate formation'],
      ['Direction','Periphery &rarr; centre (centripetal)','Centre &rarr; periphery (centrifugal)'],
      ['Starts at','Plasma membrane','Centre of the cell'],
      ['What forms','Constriction that pinches the cell into two','Cell plate &rarr; middle lamella &rarr; new wall'],
      ['Reason','No cell wall; membrane is flexible','Rigid, inextensible cell wall']
    ]},
    keyList: {title:'Significance of Mitosis', items:[
      'Diploid, genetically identical daughter cells',
      'Growth of multicellular organisms',
      'Restores the nucleo-cytoplasmic ratio',
      'Cell repair and replacement (epidermis, gut lining, blood cells)',
      'Continuous plant growth from apical and lateral meristems',
      'Vegetative reproduction in plants'
    ]}
  },

  'meiosis-prophase': {
    recap: [
      'Meiosis = <b>reductional division</b>: chromosome number is halved &rarr; <b>haploid</b> cells (gametes)',
      '<b>Two</b> sequential divisions (meiosis I and II) but only <b>one</b> round of DNA replication',
      'Prophase I is <b>long and complex</b>: Leptotene &rarr; Zygotene &rarr; Pachytene &rarr; Diplotene &rarr; Diakinesis',
      'Zygotene: <b>synapsis</b> and the <b>synaptonemal complex</b> &rarr; bivalent (tetrad); Pachytene: <b>crossing over</b> by <b>recombinase</b>',
      'Diplotene: synaptonemal complex dissolves, <b>chiasmata</b> seen; Diakinesis: <b>terminalisation</b> of chiasmata'
    ],
    sections: [
      {h:'What Is Meiosis?', body:'The production of offspring by sexual reproduction includes the fusion of two gametes, each with a complete <b>haploid</b> set of chromosomes. Gametes are formed from specialised diploid cells. The specialised kind of cell division that <b>reduces the chromosome number by half</b>, resulting in haploid daughter cells, is called <b>meiosis</b> (reductional division). Meiosis ensures the production of the <b>haploid phase</b> in the life cycle of sexually reproducing organisms, while <b>fertilisation restores the diploid phase</b>. Meiosis occurs during <b>gametogenesis</b> in plants and animals.'},
      {h:'Key Features of Meiosis', body:'(i) Meiosis involves <b>two sequential cycles</b> of nuclear and cell division, called <b>meiosis I and meiosis II</b>, but only a <b>single cycle of DNA replication</b>. (ii) Meiosis I is initiated after the parental chromosomes have replicated to produce identical sister chromatids at the <b>S phase</b>. (iii) Meiosis involves <b>pairing of homologous chromosomes</b> and <b>recombination between non-sister chromatids</b> of homologous chromosomes. (iv) <b>Four haploid cells</b> are formed at the end of meiosis II. Meiosis I has four phases: <b>Prophase I, Metaphase I, Anaphase I and Telophase I</b>.'},
      {h:'Prophase I &mdash; Long and Complex', body:'Prophase of the first meiotic division is typically <b>longer and more complex</b> than the prophase of mitosis. Based on chromosomal behaviour it is subdivided into <b>five phases</b>: <b>Leptotene, Zygotene, Pachytene, Diplotene and Diakinesis</b>. (Memory aid: &ldquo;<b>L</b>azy <b>Z</b>ebras <b>P</b>lay <b>D</b>uring <b>D</b>ay&rdquo;.)'},
      {h:'Leptotene', body:'During leptotene, the chromosomes become <b>gradually visible</b> under the light microscope. <b>Compaction</b> of chromosomes continues throughout leptotene, so the chromosomes become distinct and compact (thin, long threads).'},
      {h:'Zygotene &mdash; Synapsis', body:'In zygotene, chromosomes start <b>pairing together</b>; this process of association is called <b>synapsis</b>. Such paired chromosomes are called <b>homologous chromosomes</b>. Electron micrographs show that synapsis is accompanied by the formation of a complex structure called the <b>synaptonemal complex</b>. The complex formed by a pair of synapsed homologous chromosomes is called a <b>bivalent</b> or a <b>tetrad</b> (it is more clearly visible at the next stage).'},
      {h:'Pachytene &mdash; Crossing Over', body:'Pachytene is <b>longer than leptotene and zygotene</b>. The four chromatids of each bivalent become distinct and clearly appear as <b>tetrads</b>. This stage is characterised by the appearance of <b>recombination nodules</b>, the sites at which <b>crossing over</b> occurs between <b>non-sister chromatids</b> of homologous chromosomes. Crossing over is the <b>exchange of genetic material</b> between two homologous chromosomes. It is an <b>enzyme-mediated</b> process, and the enzyme involved is called <b>recombinase</b>. Crossing over leads to <b>recombination</b> of genetic material on the two chromosomes &mdash; the actual reason for the genetic difference in progenies. Recombination is completed by the end of pachytene, leaving the chromosomes linked at the sites of crossing over.'},
      {h:'Diplotene &mdash; Chiasmata', body:'The beginning of diplotene is recognised by the <b>dissolution of the synaptonemal complex</b> and the tendency of the recombined homologous chromosomes of the bivalents to <b>separate from each other except at the sites of crossovers</b>. These X-shaped structures are called <b>chiasmata</b> (singular: chiasma). In the oocytes of some vertebrates, diplotene can last for <b>months or years</b>.'},
      {h:'Diakinesis &mdash; Transition to Metaphase', body:'The final stage of meiotic prophase I is diakinesis. It is marked by <b>terminalisation of chiasmata</b> (chiasmata move towards the ends of the chromosomes). The chromosomes are <b>fully condensed</b> and the <b>meiotic spindle is assembled</b> to prepare the homologous chromosomes for separation. By the end of diakinesis, the <b>nucleolus disappears</b> and the <b>nuclear envelope breaks down</b>. Diakinesis represents the transition to metaphase.'}
    ],
    table: {title:'The Five Sub-stages of Prophase I', headers:['Sub-stage','Hallmark event'], rows:[
      ['Leptotene','Chromosomes become visible; compaction begins'],
      ['Zygotene','Synapsis of homologues; synaptonemal complex; bivalent formed'],
      ['Pachytene','Tetrads clear; recombination nodules; crossing over (recombinase)'],
      ['Diplotene','Synaptonemal complex dissolves; X-shaped chiasmata'],
      ['Diakinesis','Terminalisation of chiasmata; spindle forms; nucleolus &amp; nuclear envelope disappear']
    ]},
    keyList: {title:'Exam Traps in Prophase I', items:[
      'Synaptonemal complex: <b>forms</b> in zygotene, <b>dissolves</b> in diplotene',
      'Crossing over: <b>pachytene</b>, between <b>non-sister</b> chromatids, enzyme <b>recombinase</b>',
      'Chiasmata: <b>seen</b> in diplotene, <b>terminalise</b> in diakinesis',
      'Bivalent = tetrad = 2 homologous chromosomes = 4 chromatids'
    ]}
  },

  'meiosis-one': {
    recap: [
      '<b>Metaphase I</b>: bivalents align on the equatorial plate; spindle fibres attach to the homologous pair',
      '<b>Anaphase I</b>: <b>homologous chromosomes separate</b>; sister chromatids stay joined at the centromere',
      '<b>Telophase I</b>: nuclear membrane and nucleolus reappear; cytokinesis &rarr; <b>dyad</b> of cells',
      'Meiosis I is the <b>reductional</b> division: 2n &rarr; n',
      '<b>Interkinesis</b>: short gap between meiosis I and II with <b>no DNA replication</b>'
    ],
    sections: [
      {h:'Metaphase I', body:'In metaphase I, the <b>bivalent chromosomes align on the equatorial plate</b>. The microtubules from the opposite poles of the spindle attach to the <b>pair of homologous chromosomes</b> &mdash; one homologue faces one pole and its partner faces the other. (Compare: in mitotic metaphase, single chromosomes line up and the two sister chromatids face opposite poles.)'},
      {h:'Anaphase I &mdash; Homologues Separate', body:'In anaphase I, the <b>homologous chromosomes separate</b> and move to opposite poles, while the <b>sister chromatids remain associated at their centromeres</b>. Because whole homologues (not chromatids) are pulled apart, each pole receives only <b>one member of each pair</b> &mdash; the chromosome number is <b>halved</b> here. This is why meiosis I is called the <b>reductional division</b>.'},
      {h:'Telophase I', body:'In telophase I, the <b>nuclear membrane and nucleolus reappear</b>, and <b>cytokinesis follows</b>; this is called the <b>dyad of cells</b> (two cells). Although in many cases the chromosomes undergo some dispersion, they do <b>not reach the extremely extended state</b> of the interphase nucleus.'},
      {h:'Interkinesis', body:'The stage between the two meiotic divisions is called <b>interkinesis</b>, and it is generally <b>short-lived</b>. There is <b>no replication of DNA</b> during interkinesis &mdash; this is the key difference from a normal interphase. Interkinesis is followed by <b>prophase II</b>, a much simpler prophase.'},
      {h:'Mitotic Metaphase vs Metaphase I', body:'A common exam comparison: in <b>mitotic metaphase</b>, individual chromosomes line up and <b>sister chromatids</b> are attached to opposite poles, so anaphase separates chromatids (equational). In <b>metaphase I</b>, <b>bivalents</b> (homologous pairs) line up and <b>homologues</b> are attached to opposite poles, so anaphase I separates homologues (reductional).'}
    ],
    table: {title:'Anaphase of Mitosis vs Anaphase I', headers:['Feature','Mitotic anaphase','Anaphase I'], rows:[
      ['What separates','Sister chromatids','Homologous chromosomes'],
      ['Centromere','Splits','Does not split'],
      ['Each pole receives','Full set (2n) of single-chromatid chromosomes','Half set (n), each still with 2 chromatids'],
      ['Type of division','Equational','Reductional']
    ]},
    keyList: {title:'Meiosis I in One Line Each', items:[
      'Prophase I &rarr; pair, cross over, chiasmata',
      'Metaphase I &rarr; bivalents on the equatorial plate',
      'Anaphase I &rarr; homologues separate (chromatids stay joined)',
      'Telophase I &rarr; dyad of cells; interkinesis with no DNA replication'
    ]}
  },

  'meiosis-two': {
    recap: [
      'Meiosis II starts right after cytokinesis and <b>resembles mitosis</b> (equational)',
      '<b>Anaphase II</b>: centromeres split, sister chromatids move to opposite poles',
      '<b>Telophase II</b> + cytokinesis &rarr; <b>tetrad</b> of cells = <b>four haploid</b> daughter cells',
      'Meiosis <b>conserves the chromosome number</b> of a species across generations',
      'Crossing over in pachytene creates <b>genetic variation</b> &mdash; the raw material for <b>evolution</b>'
    ],
    sections: [
      {h:'Meiosis II Resembles Mitosis', body:'Meiosis II is initiated immediately after cytokinesis, usually <b>before the chromosomes have fully elongated</b>. In contrast to meiosis I, meiosis II <b>resembles a normal mitosis</b>: the sister chromatids are separated, so the chromosome number (n) does not change &mdash; it is an <b>equational</b> division.'},
      {h:'Prophase II and Metaphase II', body:'<b>Prophase II:</b> the nuclear membrane disappears by the end of prophase II, and the chromosomes again become <b>compact</b>. <b>Metaphase II:</b> the chromosomes <b>align at the equator</b>, and the microtubules from opposite poles of the spindle get attached to the <b>kinetochores of sister chromatids</b>.'},
      {h:'Anaphase II and Telophase II', body:'<b>Anaphase II</b> begins with the <b>simultaneous splitting of the centromere</b> of each chromosome (which was holding the sister chromatids together), allowing them to <b>move toward opposite poles</b> of the cell by shortening of the microtubules attached to the kinetochores. <b>Telophase II</b> ends meiosis: the two groups of chromosomes once again get <b>enclosed by a nuclear envelope</b>, and cytokinesis follows, resulting in the formation of a <b>tetrad of cells</b>, i.e. <b>four haploid daughter cells</b>.'},
      {h:'Significance of Meiosis', body:'(i) Meiosis is the mechanism by which the <b>specific chromosome number of each species is conserved</b> across generations in sexually reproducing organisms, even though the process itself, paradoxically, <b>reduces the chromosome number by half</b> in gametes; the number doubles again at fertilisation. (ii) <b>Crossing over</b> in the pachytene stage of meiosis I is a source of <b>genetic variability</b> in the population from one generation to the next. (iii) These <b>variations</b> are very important as the <b>raw material for evolution</b>.'},
      {h:'Mitosis vs Meiosis &mdash; the Big Picture', body:'<b>Mitosis</b>: one division, occurs in somatic cells, 2 daughter cells, diploid and genetically identical, no pairing or crossing over, equational. <b>Meiosis</b>: two divisions with one DNA replication, occurs in reproductive (meiocyte) cells, 4 daughter cells, haploid and genetically varied, synapsis and crossing over in prophase I, meiosis I reductional + meiosis II equational.'}
    ],
    table: {title:'Mitosis vs Meiosis', headers:['Feature','Mitosis','Meiosis'], rows:[
      ['Type of division','Equational','Reductional (I) + Equational (II)'],
      ['Number of divisions','One','Two (one DNA replication)'],
      ['Occurs in','Somatic cells (plants: haploid &amp; diploid)','Reproductive cells (gametogenesis)'],
      ['Daughter cells','2, diploid (2n)','4, haploid (n)'],
      ['Synapsis &amp; crossing over','Absent','Present (prophase I)'],
      ['Genetic make-up','Identical to parent','Different (variation)'],
      ['Role','Growth, repair, vegetative reproduction','Gamete formation, variation, constant chromosome number']
    ]},
    keyList: {title:'Meiosis II in One Line Each', items:[
      'Prophase II &rarr; chromosomes compact, nuclear membrane disappears',
      'Metaphase II &rarr; chromosomes at equator; fibres to kinetochores of sister chromatids',
      'Anaphase II &rarr; centromeres split, chromatids to opposite poles',
      'Telophase II &rarr; nuclear envelope reforms; cytokinesis &rarr; tetrad of 4 haploid cells'
    ]}
  }
};

const concepts = {
  'cycle': {
    hook:'You began life as one single cell. Today your body has trillions. How did one cell become so many &mdash; and why do they not all divide at the same speed?',
    chain:[
      'A cell can only grow so much; to make more cells it must divide into two daughter cells.',
      'Before it divides it must copy its genome exactly once and build enough of everything else.',
      'So the cell follows an ordered sequence: grow and copy (interphase), then divide (M phase) &mdash; this is the cell cycle.',
      'Most of the time goes into preparation: interphase takes more than 95% of the cycle, while the visible division lasts only about an hour in a human cell.',
      'Each daughter cell can start the cycle again, so repeated cycles turn one cell into millions &mdash; all under genetic control.'
    ],
    misconceptions:[
      {wrong:'Interphase is a resting phase where the cell does nothing.', right:'Interphase is the busiest preparation period: the cell grows, replicates its DNA and makes proteins for division. It only looks quiet under the microscope.'},
      {wrong:'All cells take 24 hours to complete one cell cycle.', right:'Duration varies from organism to organism and cell to cell: about 24 hours for a human cell in culture, but only about 90 minutes for yeast.'},
      {wrong:'M phase means mitosis only, i.e. nuclear division.', right:'M phase includes karyokinesis (nuclear division) and cytokinesis (division of the cytoplasm).'}
    ],
    analogy:'The cell cycle is like preparing for and holding a wedding. Months go into preparation &mdash; shopping, cooking, invitations (interphase, more than 95% of the time) &mdash; while the actual ceremony (M phase) is over in about an hour.',
    analytical:[
      {q:'A human cell in culture takes 24 hours for one cycle. If interphase is 95% of the cycle, about how long is the M phase?', a:'5% of 24 hours = 1.2 hours, i.e. roughly one hour &mdash; which matches the NCERT statement that M phase lasts only about an hour in a 24-hour human cell cycle.'},
      {q:'Why do we say the cell cycle is under genetic control? What would happen if this control failed?', a:'Each step &mdash; when to replicate DNA, when to divide &mdash; is regulated by genes. If control fails, cells may divide without check (as in cancer) or stop dividing when they should, disturbing growth and repair.'}
    ]
  },
  'interphase': {
    hook:'If a cell doubles its DNA in S phase, why does the chromosome count not double too?',
    chain:[
      'In G<sub>1</sub> a diploid cell has 2n chromosomes, each with a single DNA molecule: DNA content 2C.',
      'In S phase every DNA molecule is copied, so DNA content becomes 4C.',
      'But each copy stays attached to the original at the centromere, forming two sister chromatids of the same chromosome.',
      'Chromosomes are counted by centromeres, so the number is still 2n &mdash; just each chromosome is now double.',
      'Only when the chromatids separate in anaphase does each become an independent chromosome.'
    ],
    misconceptions:[
      {wrong:'In S phase the chromosome number doubles from 2n to 4n.', right:'Only the DNA content doubles (2C &rarr; 4C). Chromosome number stays 2n because sister chromatids share one centromere.'},
      {wrong:'G<sub>0</sub> cells are dead or metabolically inactive.', right:'G<sub>0</sub> (quiescent) cells are metabolically active; they simply do not proliferate unless the organism needs them to.'},
      {wrong:'Mitosis occurs only in diploid cells in all organisms.', right:'In animals, mitosis is seen only in diploid somatic cells, but plants can show mitosis in both haploid and diploid cells.'}
    ],
    analogy:'S phase is like photocopying a book and clipping the copy to the original with a single binder clip. You now have twice the pages (4C), but on the shelf it still counts as one book (2n) until the clip is opened in anaphase.',
    analytical:[
      {q:'A cell in G<sub>1</sub> has 20 chromosomes and 10 pg of DNA. What will be the chromosome number and DNA content in G<sub>2</sub>?', a:'Chromosome number remains 20 (2n unchanged); DNA content doubles to 20 pg (2C &rarr; 4C) because DNA replicated in S phase.'},
      {q:'Heart muscle cells of an adult rarely divide. Which phase are they in, and are they alive and working?', a:'They have exited G<sub>1</sub> into the quiescent G<sub>0</sub> stage. They are fully alive and metabolically active (they keep the heart beating) but do not proliferate.'}
    ]
  },
  'mitosis-early': {
    hook:'Why do cytogeneticists count chromosomes in metaphase and not in prophase or anaphase?',
    chain:[
      'In prophase, chromatin only begins to condense; chromosomes are long, thin and tangled.',
      'By metaphase, condensation is complete, so each chromosome is short, thick and clearly visible.',
      'The nuclear envelope has disappeared, so the chromosomes are free in the cytoplasm.',
      'They are all arranged in one plane, the metaphase plate, with sister chromatids facing opposite poles.',
      'So metaphase gives the clearest, best-spread view: ideal for counting and studying chromosome morphology.'
    ],
    misconceptions:[
      {wrong:'Kinetochores are found on the centrioles.', right:'Kinetochores are small disc-shaped structures on the surface of the centromeres of chromosomes; they are where spindle fibres attach.'},
      {wrong:'The metaphase plate is a real plate or membrane in the cell.', right:'It is only the imaginary plane (the spindle equator) on which chromosomes line up.'},
      {wrong:'The nuclear envelope disappears completely right at the start of prophase.', right:'It begins to break down in prophase; its complete disintegration marks the start of metaphase.'}
    ],
    analogy:'Metaphase is a tug-of-war team photo: every chromosome stands exactly on the centre line, one sister chromatid holding a rope to the left pole and the other holding a rope to the right pole, waiting for the whistle.',
    analytical:[
      {q:'A drug prevents formation of spindle fibres. At which stage will mitosis be arrested, and why?', a:'At metaphase. Without spindle fibres, kinetochores cannot attach and chromosomes cannot be pulled apart, so cells cannot enter anaphase. (Colchicine works this way, which is also why it is used to see metaphase chromosomes.)'},
      {q:'A cell at metaphase shows 46 chromosomes. How many chromatids and how many kinetochores (centromeres) are present?', a:'92 chromatids (each chromosome has two sister chromatids) and 46 centromeres; each centromere carries kinetochores facing both poles.'}
    ]
  },
  'mitosis-late': {
    hook:'At anaphase, how does a cell make sure each daughter nucleus gets exactly one copy of every chromosome?',
    chain:[
      'At metaphase, the two sister chromatids of every chromosome are attached to opposite poles.',
      'At anaphase, all centromeres split at the same moment.',
      'Each chromatid, now a daughter chromosome, is pulled to the pole it was attached to, centromere first.',
      'So each pole receives exactly one copy of every chromosome &mdash; an identical set.',
      'In telophase the sets decondense and a nuclear envelope forms around each, giving two identical daughter nuclei.'
    ],
    misconceptions:[
      {wrong:'In anaphase the arms of chromosomes lead the movement to the poles.', right:'The centromere leads, attached to spindle fibres; the arms trail behind.'},
      {wrong:'In telophase, chromosomes become more condensed.', right:'In telophase chromosomes decondense and lose their individuality; chromatin collects at the poles.'},
      {wrong:'Telophase ends with two daughter cells.', right:'Telophase ends with two daughter nuclei; the cell becomes two only after cytokinesis.'}
    ],
    analogy:'Anaphase is like two teams pulling a row of paired dancers apart. Each dancer is pulled by the hand (centromere) with legs and arms trailing behind, and every team ends with one dancer from each pair.',
    analytical:[
      {q:'A diploid cell with 2n = 8 is in anaphase. How many chromosomes are present in the whole cell at that moment?', a:'16. The 8 chromosomes have split into 16 daughter chromosomes (8 moving to each pole), so for a short time the cell has 16 single-chromatid chromosomes.'},
      {q:'Why is telophase described as the reverse of prophase?', a:'Prophase: chromosomes condense; nuclear envelope, nucleolus, Golgi and ER disappear. Telophase: chromosomes decondense; nuclear envelope, nucleolus, Golgi and ER reappear.'}
    ]
  },
  'cytokinesis': {
    hook:'A coconut has many nuclei swimming in its water, but no walls between them. How can nuclei divide without the cell dividing?',
    chain:[
      'Karyokinesis (nuclear division) and cytokinesis (cytoplasm division) are two separate processes.',
      'Normally cytokinesis follows karyokinesis, giving two separate cells.',
      'If nuclei keep dividing but cytokinesis does not occur, many nuclei share one cytoplasm.',
      'This multinucleate mass is called a syncytium.',
      'The liquid endosperm of coconut (coconut water) is a syncytium of free nuclei.'
    ],
    misconceptions:[
      {wrong:'Plant cells divide by furrowing like animal cells.', right:'Plant cells have a rigid wall, so a cell plate forms in the centre and grows outwards; furrowing is seen in animal cells.'},
      {wrong:'The cell plate becomes the primary cell wall directly.', right:'The cell plate represents the middle lamella between the walls of the two adjacent cells.'},
      {wrong:'Mitosis is only useful for growth.', right:'Mitosis also restores the nucleo-cytoplasmic ratio, repairs and replaces cells, keeps meristems growing and gives vegetative reproduction.'}
    ],
    analogy:'Animal cytokinesis is like tightening a belt around a balloon until it pinches into two. Plant cytokinesis is like building a new brick wall from the middle of a room outwards until it touches both side walls.',
    analytical:[
      {q:'Why is the direction of cytokinesis centripetal in animal cells but centrifugal in plant cells?', a:'In animal cells the flexible plasma membrane furrows inward from the periphery to the centre (centripetal). Plant cells cannot furrow because of the rigid cell wall, so a cell plate begins at the centre and grows outwards (centrifugal) to meet the lateral walls.'},
      {q:'A cell keeps growing in size without dividing. Which ratio is disturbed and how does mitosis help?', a:'The nucleo-cytoplasmic ratio (volume of nucleus : volume of cytoplasm) falls as cytoplasm increases. Mitosis divides the cell, restoring a proper ratio so the nucleus can control the cytoplasm effectively.'}
    ]
  },
  'meiosis-prophase': {
    hook:'Brothers and sisters have the same two parents. Why do they never look exactly alike?',
    chain:[
      'Each child forms from gametes made by meiosis in the parents.',
      'In zygotene, homologous chromosomes (one from each grandparent) pair up by synapsis.',
      'In pachytene, non-sister chromatids exchange segments at recombination nodules: crossing over, by recombinase.',
      'So the chromatids that go into gametes are new mixtures, different in every meiosis.',
      'This recombination is the actual reason for genetic difference in progenies.'
    ],
    misconceptions:[
      {wrong:'Crossing over happens between sister chromatids.', right:'Crossing over occurs between non-sister chromatids of homologous chromosomes; sister chromatids are identical, so exchange between them gives no new combination.'},
      {wrong:'Chiasmata are formed in pachytene.', right:'Crossing over occurs in pachytene; chiasmata (X-shaped crossover sites) become visible in diplotene and terminalise in diakinesis.'},
      {wrong:'A bivalent has two chromatids.', right:'A bivalent (tetrad) is a pair of homologous chromosomes = 4 chromatids.'}
    ],
    analogy:'Crossing over is like two friends with similar recipe notebooks swapping a few pages. Each notebook still has every recipe, but now in a new mixture of the two friends\' versions.',
    analytical:[
      {q:'An organism has 2n = 24. How many bivalents and how many chromatids are seen in pachytene?', a:'12 bivalents (24 chromosomes &divide; 2), and each bivalent has 4 chromatids, so 48 chromatids.'},
      {q:'In which sub-stage of prophase I would you expect to see the synaptonemal complex, and when does it disappear?', a:'It forms during zygotene (along with synapsis), is present through pachytene and dissolves at the beginning of diplotene.'}
    ]
  },
  'meiosis-one': {
    hook:'Both mitosis and meiosis I have an anaphase. So why does only meiosis I halve the chromosome number?',
    chain:[
      'In mitotic metaphase, single chromosomes line up and sister chromatids face opposite poles.',
      'In metaphase I, homologous pairs (bivalents) line up and the homologues face opposite poles.',
      'In anaphase I, homologues are pulled apart while sister chromatids stay joined at the centromere.',
      'So each pole gets only one member of every pair: n chromosomes, each still with two chromatids.',
      'That is why meiosis I is reductional (2n &rarr; n) while mitosis is equational.'
    ],
    misconceptions:[
      {wrong:'In anaphase I, the centromere splits.', right:'In anaphase I the centromere does not split; homologues separate. Centromeres split in anaphase II (and in mitotic anaphase).'},
      {wrong:'DNA replicates again during interkinesis.', right:'There is no DNA replication during interkinesis; that is why meiosis halves the chromosome number.'},
      {wrong:'Telophase I produces four cells.', right:'Telophase I with cytokinesis produces a dyad (two cells); four cells (tetrad) form only after meiosis II.'}
    ],
    analogy:'Metaphase I is a dance floor of couples. In anaphase I each couple splits, one partner walking to each side &mdash; but each partner still holds their own twin hand-in-hand (sister chromatids stay together).',
    analytical:[
      {q:'A meiocyte has 2n = 16 and 4C DNA after S phase. What are the chromosome number and DNA content in each cell after telophase I?', a:'n = 8 chromosomes and 2C DNA in each cell; the homologues have separated, but each chromosome still has two chromatids.'},
      {q:'Why is interkinesis not considered a true interphase?', a:'A true interphase includes an S phase in which DNA replicates. Interkinesis is a short gap with no DNA replication; the cells go directly into prophase II.'}
    ]
  },
  'meiosis-two': {
    hook:'Meiosis halves the chromosome number, so why does the chromosome number of humans stay 46 generation after generation?',
    chain:[
      'A human meiocyte with 46 chromosomes undergoes meiosis to form gametes with 23 chromosomes each.',
      'Meiosis II separates sister chromatids, so the four cells stay at n = 23.',
      'At fertilisation, a sperm (23) fuses with an egg (23), restoring 46 in the zygote.',
      'Halving and restoring every generation keeps the species number constant.',
      'Without meiosis, chromosome number would double every generation.'
    ],
    misconceptions:[
      {wrong:'Meiosis II is a reductional division.', right:'Meiosis II is equational: it separates sister chromatids, like mitosis; chromosome number stays n.'},
      {wrong:'Meiosis produces two daughter cells.', right:'Meiosis produces four haploid daughter cells (a tetrad of cells).'},
      {wrong:'Variation in offspring comes only from mutation.', right:'Crossing over in pachytene (and the random separation of homologues) create new combinations; these variations are the raw material for evolution.'}
    ],
    analogy:'Meiosis is like a library splitting one complete two-volume set (2n) into four single-volume sets (n), so that when two libraries merge (fertilisation) you again get exactly one full two-volume set, never a three- or four-volume pile.',
    analytical:[
      {q:'How many meiotic divisions are needed to produce 100 pollen grains? And 100 seeds in a flowering plant?', a:'Each meiosis gives 4 pollen grains, so 100 &divide; 4 = 25 meioses. For 100 seeds you need 100 pollen grains (25 meioses) and 100 eggs (each egg needs one meiosis in a megaspore mother cell = 100 meioses), so 125 meioses.'},
      {q:'Compare the outcome of mitosis and meiosis of a cell with 2n = 4.', a:'Mitosis: 2 daughter cells, each 2n = 4, genetically identical. Meiosis: 4 daughter cells, each n = 2, genetically different due to crossing over and separation of homologues.'}
    ]
  }
};

module.exports = {topics, study, concepts};
