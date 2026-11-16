/* I PUC Biology · Slip-test mock (40 marks): Ch 8 Cell: The Unit of Life (excluding 8.4 Prokaryotic Cells)
   and Ch 10 Cell Cycle and Cell Division. Every question is from the official I PUC Biology
   Question Bank 2026-27; answers follow the current NCERT text.
   Pattern: Part A 10 MCQ + 5 fill-ups (15) · Part B any 3 of 5 × 2 (6) · Part C any 3 of 5 × 3 (9)
            · Part D any 2 of 4 × 5 (10) = 40. Used by cell-mock-practice.html. */
window.MT = {
 chapters: ['','','','','','','','','Cell: The Unit of Life','','Cell Cycle & Cell Division'],
 page: ['','','','','','','','','pu1-ch8.html','','pu1-ch10.html'],
 marks: [0,0,0,0,0,0,0,0,40,0,20],

 /* ---------- Part A · I. MCQs (10) ---------- */
 mcq: [
  {ch:8,q:'Plastids which store protein are called',o:['Chloroplast','Chromoplast','Amyloplast','Aleuroplast'],a:3,e:'Leucoplasts are colourless plastids that store food: amyloplasts store starch, elaioplasts store oils and fats, and aleuroplasts store proteins.'},
  {ch:8,q:'Fluid mosaic model of plasma membrane was proposed by',o:['Matthias Schleiden','Theodore Schwann','Singer and Nicolson','Robert Brown'],a:2,e:'The fluid mosaic model was proposed by Singer and Nicolson (1972): the quasi-fluid lipid layer lets proteins move laterally within the bilayer.'},
  {ch:8,q:'Middle lamella of cell wall is mainly composed of',o:['Cellulose','Calcium pectate','Magnesium silicate','Lignin'],a:1,e:'The middle lamella is a layer mainly of calcium pectate that holds or glues the neighbouring cells together.'},
  {ch:8,q:'Animal cells undergo self-degradation after death whereas the plant cells generally do not. Which cell organelle is responsible for this?',o:['Vacuoles','Chloroplast','Lysosomes','Ribosomes'],a:2,e:'Lysosomes are rich in hydrolytic enzymes (lipases, proteases, carbohydrases) active at acidic pH that can digest the cell\'s own material.'},
  {ch:8,q:'The two cylindrical structures which constitute the centrosome are',o:['Chromosomes','Centrioles','Centromeres','Chromatin'],a:1,e:'The centrosome usually contains two cylindrical structures called centrioles, lying perpendicular to each other.'},
  {ch:8,q:'Glycolipids and glycoproteins are synthesised at',o:['SER','RER','Golgi apparatus','Mitochondria'],a:2,e:'The Golgi apparatus is the important site of formation of glycoproteins and glycolipids.'},
  {ch:8,q:'A number of organised flattened membranous sacs found in chloroplasts are called',o:['Grana','Stroma','Thylakoids','Cisternae'],a:2,e:'Thylakoids are flattened membranous sacs in the stroma; stacks of thylakoids are called grana.'},
  {ch:10,q:'The correct sequence of phases of cell cycle is',o:['G1 → S → G2 → M','M → G1 → G2 → S','G1 → G2 → S → M','S → G1 → G2 → M'],a:0,e:'Interphase has G1 (gap 1), S (synthesis) and G2 (gap 2) phases, followed by the M phase (mitosis).'},
  {ch:10,q:'Homologous chromosomes separate while sister chromatids remain associated at their centromeres during',o:['Prophase I','Anaphase I','Anaphase II','Prophase II'],a:1,e:'In anaphase I the homologous chromosomes separate; the sister chromatids stay together at their centromeres until anaphase II.'},
  {ch:10,q:'During cell growth, DNA synthesis takes place in',o:['S phase','G1 phase','G2 phase','M phase'],a:0,e:'DNA synthesis or replication takes place during the S (synthesis) phase; the amount of DNA doubles from 2C to 4C.'}
 ],

 /* ---------- Part A · II. Fill in the blanks (5) ---------- */
 fibWords: ['Interkinesis','Tonoplast','Interphase','Cell plate','Plasmodesmata','Polysomes'],
 fib: [
  {ch:8,q:'The cytoplasmic connections between neighbouring plant cells are ______.',a:'Plasmodesmata',e:'Plasmodesmata traverse the cell walls and middle lamella and connect the cytoplasm of neighbouring cells.'},
  {ch:8,q:'The vacuole in a plant cell is bound by ______.',a:'Tonoplast',e:'The vacuole is bound by a single membrane called the tonoplast.'},
  {ch:8,q:'Many ribosomes attached on to an mRNA are called ______.',a:'Polysomes',e:'Several ribosomes may attach to a single mRNA to form a chain called a polyribosome or polysome.'},
  {ch:10,q:'The stage between the two meiotic divisions is called ______.',a:'Interkinesis',e:'Interkinesis is the short stage between meiosis I and meiosis II; there is no DNA replication.'},
  {ch:10,q:'In a cell cycle, ______ represents the phase between two successive M phases.',a:'Interphase',e:'Interphase lasts more than 95% of the cell cycle; the cell prepares for division by growing and replicating its DNA.'}
 ],

 /* ---------- Part B · 2 marks (any 3 of 5) ---------- */
 B: [
  {id:'B1',ch:8,q:'Mention any four functions of cell wall.',
   p:[['Gives shape to the cell',0.5],['Protects the cell from mechanical damage and infection',0.5],['Helps in cell-to-cell interaction',0.5],['Provides a barrier to undesirable macromolecules',0.5]],
   m:'<p>The <b>cell wall</b>:</p><ul><li>gives <b>shape</b> to the cell;</li><li><b>protects</b> the cell from mechanical damage and infection;</li><li>helps in <b>cell-to-cell interaction</b>;</li><li>provides a <b>barrier to undesirable macromolecules</b>.</li></ul>'},
  {id:'B2',ch:8,q:'State the cell theory.',
   p:[['All living organisms are composed of cells and products of cells',1],['All cells arise from pre-existing cells (Omnis cellula-e cellula)',1]],
   m:'<p>Cell theory was formulated by <b>Schleiden and Schwann</b> and modified by <b>Rudolf Virchow</b> (1855). It states:</p><ul><li>All living organisms are composed of <b>cells and products of cells</b>.</li><li>All cells arise from <b>pre-existing cells</b> (<i>Omnis cellula-e cellula</i>).</li></ul>'},
  {id:'B3',ch:10,q:'Write the key features of metaphase of mitosis.',
   p:[['Nuclear envelope has disintegrated; condensation of chromosomes is complete (morphology easiest to study)',0.5],['Each chromosome has two sister chromatids held by the centromere, with kinetochores on it',0.5],['Spindle fibres attach to the kinetochores of chromosomes',0.5],['Chromosomes align at the equator on the metaphase plate',0.5]],
   m:'<ul><li>Complete disintegration of the <b>nuclear envelope</b> marks the start; chromosome condensation is complete, so <b>morphology of chromosomes</b> is most easily studied.</li><li>Each chromosome has <b>two sister chromatids</b> held by the <b>centromere</b>; disc-shaped <b>kinetochores</b> lie on the centromere.</li><li><b>Spindle fibres attach to kinetochores</b> of chromosomes.</li><li>Chromosomes are moved to the spindle equator and aligned along the <b>metaphase plate</b>.</li></ul>'},
  {id:'B4',ch:8,q:'Differentiate smooth endoplasmic reticulum from rough endoplasmic reticulum.',
   p:[['RER bears ribosomes on its outer surface; SER has no ribosomes',1],['RER: protein synthesis and secretion; SER: major site of lipid synthesis (steroidal hormones in animal cells)',1]],
   m:'<table class="bp"><tr><th>Rough ER (RER)</th><th>Smooth ER (SER)</th></tr><tr><td>Ribosomes attached to its outer surface</td><td>No ribosomes</td></tr><tr><td>Protein synthesis and secretion</td><td>Major site for synthesis of lipids; steroidal hormones in animal cells</td></tr><tr><td>Extensive, continuous with the outer membrane of the nucleus</td><td>—</td></tr></table>'},
  {id:'B5',ch:10,q:'Mitosis is called an equational division. Justify.',
   p:[['The number of chromosomes in the parent and progeny cells is the same',1],['Daughter cells receive an identical set of chromosomes (diploid → diploid, haploid → haploid)',1]],
   m:'<p>Mitosis is called <b>equational division</b> because the <b>number of chromosomes in the parent and progeny cells is the same</b>. Each daughter cell gets an identical set of chromosomes: diploid cells give diploid daughter cells, and haploid cells (e.g. in male honey bees) give haploid daughter cells.</p>'}
 ],

 /* ---------- Part C · 3 marks (any 3 of 5) ---------- */
 C: [
  {id:'C1',ch:8,q:'What is endomembrane system? Mention the cell organelles that form its components.',
   p:[['Membranous organelles whose functions are coordinated are considered together as the endomembrane system',1],['Endoplasmic reticulum and Golgi complex',1],['Lysosomes and vacuoles',1]],
   m:'<p>Many membranous organelles, though distinct in structure and function, are considered together as the <b>endomembrane system</b> because their <b>functions are coordinated</b>.</p><p>Components: <b>endoplasmic reticulum (ER)</b>, <b>Golgi complex</b>, <b>lysosomes</b> and <b>vacuoles</b>. Mitochondria, chloroplasts and peroxisomes are not part of it.</p>'},
  {id:'C2',ch:10,q:'Enumerate the significance of mitosis.',
   p:[['Produces diploid daughter cells with an identical genetic complement; growth of multicellular organisms',1],['Restores the nucleo-cytoplasmic ratio; cell repair (epidermis, gut lining, blood cells)',1],['Mitosis in meristems (apical and lateral cambium) gives continuous growth of plants',1]],
   m:'<ul><li>Produces <b>diploid daughter cells</b> with an <b>identical genetic complement</b>.</li><li><b>Growth</b> of multicellular organisms.</li><li>Restores the <b>nucleo-cytoplasmic ratio</b>.</li><li><b>Cell repair</b>: cells of the upper epidermis, gut lining and blood cells are constantly replaced.</li><li>Mitotic divisions in the <b>meristems</b> (apical and lateral cambium) give continuous growth of plants throughout their life.</li></ul>'},
  {id:'C3',ch:8,q:'Draw a neat labelled diagram of nucleus.',img:'exam-corner/diagrams/ncert-nucleus-fig8-11.jpg',labels:['Nuclear membrane','Nuclear pore','Nucleoplasm','Nucleolus'],
   p:[['Neat diagram of the nucleus',1],['Labels: nuclear membrane and nuclear pore',1],['Labels: nucleoplasm and nucleolus',1]],
   m:'<p>Draw as in <b>NCERT Figure 8.11 (Structure of nucleus)</b>, with the labels nuclear membrane, nuclear pore, nucleoplasm and nucleolus.</p>'},
  {id:'C4',ch:10,q:'Write the significance of meiosis.',
   p:[['Conserves the specific chromosome number of each species across generations in sexually reproducing organisms',1],['This happens even though meiosis itself reduces the chromosome number by half',1],['Increases genetic variability from one generation to the next; variations are important for evolution',1]],
   m:'<ul><li>Meiosis is the mechanism by which <b>conservation of the specific chromosome number</b> of each species is achieved across generations in sexually reproducing organisms,</li><li>even though the process itself <b>reduces the chromosome number by half</b>.</li><li>It <b>increases genetic variability</b> in the population from one generation to the next; <b>variations are important for evolution</b>.</li></ul>'},
  {id:'C5',ch:8,q:'What is cytoskeleton? Write any two functions.',
   p:[['An elaborate network of filamentous proteinaceous structures (microtubules, microfilaments, intermediate filaments) in the cytoplasm',1],['Function: mechanical support',1],['Function: motility / maintenance of the shape of the cell',1]],
   m:'<p>The <b>cytoskeleton</b> is an elaborate network of filamentous <b>proteinaceous</b> structures in the cytoplasm, made of <b>microtubules, microfilaments and intermediate filaments</b>.</p><p>Functions: <b>mechanical support</b>, <b>motility</b> and <b>maintenance of the shape</b> of the cell.</p>'}
 ],

 /* ---------- Part D · 5 marks (any 2 of 4) ---------- */
 D: [
  {id:'D1',ch:10,q:'Describe the events of Prophase I of Meiosis I.',
   p:[['Leptotene: chromosomes become gradually visible; compaction continues',1],['Zygotene: synapsis of homologous chromosomes with the synaptonemal complex; bivalent or tetrad formed',1],['Pachytene: crossing over between non-sister chromatids at recombination nodules (enzyme recombinase)',1],['Diplotene: synaptonemal complex dissolves; homologues separate except at the X-shaped chiasmata',1],['Diakinesis: terminalisation of chiasmata; spindle assembled; nucleolus disappears and nuclear envelope breaks down',1]],
   m:'<ul><li><b>Leptotene:</b> chromosomes become gradually visible under the light microscope; compaction continues.</li><li><b>Zygotene:</b> homologous chromosomes start pairing (<b>synapsis</b>), with the <b>synaptonemal complex</b>; a pair of synapsed homologues is a <b>bivalent</b> or tetrad.</li><li><b>Pachytene:</b> <b>crossing over</b> between non-sister chromatids of homologous chromosomes at <b>recombination nodules</b>, with the enzyme <b>recombinase</b>.</li><li><b>Diplotene:</b> the synaptonemal complex dissolves; the recombined homologues separate except at the sites of crossover, the X-shaped <b>chiasmata</b> (may last months or years in oocytes of some vertebrates).</li><li><b>Diakinesis:</b> <b>terminalisation of chiasmata</b>; chromosomes fully condensed; meiotic spindle assembled; nucleolus disappears and nuclear envelope breaks down.</li></ul>'},
  {id:'D2',ch:8,q:'Explain the structure of mitochondria with a neat labelled diagram.',img:'exam-corner/diagrams/ncert-mitochondrion-fig8-7.jpg',labels:['Outer membrane','Inner membrane','Inter-membrane space','Matrix','Crista'],
   p:[['Neat diagram with at least four correct labels (outer membrane, inner membrane, inter-membrane space, matrix, crista)',2],['Shape and size; double membrane, outer smooth, inner folded into cristae that increase surface area',1],['Matrix: single circular DNA, a few RNA molecules, 70S ribosomes; divides by fission',1],['Function: site of aerobic respiration, produces ATP ("power house" of the cell)',1]],
   m:'<ul><li>Sausage-shaped or cylindrical; diameter 0.2–1.0 µm (average 0.5 µm), length 1.0–4.1 µm.</li><li><b>Double-membrane-bound</b>: the outer membrane is smooth; the inner membrane forms infoldings called <b>cristae</b> towards the matrix, which increase the surface area.</li><li>The two membranes divide the lumen into an outer compartment and the inner compartment, the <b>matrix</b>.</li><li>The matrix has a single <b>circular DNA</b>, a few RNA molecules, <b>70S ribosomes</b> and components for protein synthesis; mitochondria divide by <b>fission</b>.</li><li><b>Function:</b> site of <b>aerobic respiration</b>; produces cellular energy as <b>ATP</b>, so it is the "power house" of the cell.</li></ul><p class="hint">Diagram: NCERT Figure 8.7.</p>'},
  {id:'D3',ch:8,q:'Draw a neat labelled diagram of animal cell.',img:'exam-corner/diagrams/ncert-animal-cell-fig8-3b.jpg',labels:['Plasma membrane','Microvilli','Cytoplasm','Nucleus','Nucleolus','Nuclear envelope','Golgi apparatus','Centriole','Peroxisome','Lysosome','Ribosomes','Mitochondrion','Rough ER','Smooth ER'],
   p:[['Neat outline of an animal cell (no cell wall, no plastids, no large central vacuole; centrioles shown)',2],['Any two correct labels',1],['Two more correct labels',1],['Two more correct labels (six in all)',1]],
   m:'<p>Draw as in <b>NCERT Figure 8.3 (b): Diagram showing an animal cell</b>. Label any six: plasma membrane, microvilli, cytoplasm, nucleus, nucleolus, nuclear envelope, Golgi apparatus, centriole, peroxisome, lysosome, ribosomes, mitochondrion, rough ER, smooth ER.</p><p class="hint">No cell wall or chloroplasts in an animal cell.</p>'},
  {id:'D4',ch:8,q:'Describe the structure of chromosome.',img:'exam-corner/diagrams/ncert-chromosome-types-fig8-13.jpg',labels:['Centromere','Short arm','Long arm','Satellite','Secondary constriction'],
   p:[['Chromatin: DNA, histones, non-histone proteins and RNA; human cell has about 2 m of DNA in 46 chromosomes',1],['Primary constriction (centromere) holds the two chromatids; disc-shaped kinetochores on its sides',1],['Metacentric (middle centromere, equal arms) and sub-metacentric (slightly away from the middle)',1],['Acrocentric (close to one end) and telocentric (terminal centromere)',1],['Satellite: non-staining secondary constriction at a constant location',1]],
   m:'<ul><li><b>Chromatin</b> contains DNA, basic proteins called <b>histones</b>, non-histone proteins and RNA; a human cell has about <b>2 m of DNA</b> in its <b>46 chromosomes</b>.</li><li>Every chromosome has a <b>primary constriction</b> or <b>centromere</b>, which holds the two chromatids; disc-shaped <b>kinetochores</b> lie on its sides.</li><li>By position of the centromere: <b>metacentric</b> (middle; two equal arms), <b>sub-metacentric</b> (slightly away from the middle; one shorter and one longer arm), <b>acrocentric</b> (close to one end; one extremely short and one very long arm), <b>telocentric</b> (terminal centromere).</li><li>Some chromosomes have a non-staining <b>secondary constriction</b> giving a small fragment called the <b>satellite</b>.</li></ul><p class="hint">Diagram: NCERT Figure 8.13.</p>'}
 ],
 D2: [],

 /* ---------- diagrams to master ---------- */
 diagrams: [
  {t:'Animal cell (NCERT Fig. 8.3 b)',ch:8,img:'exam-corner/diagrams/ncert-animal-cell-fig8-3b.jpg',labels:['Plasma membrane','Microvilli','Cytoplasm','Nucleus','Nucleolus','Nuclear envelope','Golgi apparatus','Centriole','Peroxisome','Lysosome','Ribosomes','Mitochondrion','Rough ER','Smooth ER']},
  {t:'Mitochondrion (NCERT Fig. 8.7)',ch:8,img:'exam-corner/diagrams/ncert-mitochondrion-fig8-7.jpg',labels:['Outer membrane','Inner membrane','Inter-membrane space','Matrix','Crista']},
  {t:'Nucleus (NCERT Fig. 8.11)',ch:8,img:'exam-corner/diagrams/ncert-nucleus-fig8-11.jpg',labels:['Nuclear membrane','Nuclear pore','Nucleoplasm','Nucleolus']},
  {t:'Types of chromosomes (NCERT Fig. 8.13)',ch:8,img:'exam-corner/diagrams/ncert-chromosome-types-fig8-13.jpg',labels:['Metacentric','Sub-metacentric','Acrocentric','Telocentric','Centromere','Short arm','Long arm','Satellite','Secondary constriction']},
  {t:'Cell cycle',ch:10,img:'exam-corner/diagrams/ncert-cell-cycle.jpg',labels:['Interphase','G₁','S','G₂','G₀','M phase','Prophase','Metaphase','Anaphase','Telophase','Cytokinesis']}
 ]
};
