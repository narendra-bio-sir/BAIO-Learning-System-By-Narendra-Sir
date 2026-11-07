/* PU-I Ch10: KCET, descriptive (Answer Practice / Paper Generator), Board Important, Glossary,
   Tree Explorer, Compare Matrix, Study Tips and Important Diagrams (English). */
const E='Easy', M='Medium', H='Hard';

/* KCET: [format, difficulty, q, [correct, ...wrong], exp, colA?, colB?] */
const kcet = {
  'cycle': [
    ['recall',E,'The duration of the cell cycle in a human cell in culture is about:',['24 hours','90 minutes','12 hours','6 hours'],'About 24 hours.'],
    ['recall',M,'Interphase occupies approximately what percentage of the cell cycle?',['More than 95%','About 50%','About 25%','Less than 5%'],'More than 95%.'],
    ['recall',M,'The M phase of a cell cycle consists of:',['Karyokinesis and cytokinesis','G1 and G2','S and G2','Only karyokinesis'],'Nuclear and cytoplasmic division.'],
    ['matching',M,'Match Column I with Column II:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'Human cell ~24 h; yeast ~90 min.',['A. Human cell','B. Yeast'],['i. ~90 minutes','ii. ~24 hours']],
    ['statement',H,'Which of the following statements is/are correct?\n(i) Interphase is metabolically inactive\n(ii) DNA synthesis occurs only in one stage of the cycle\n(iii) Events of the cell cycle are under genetic control',['(ii) and (iii) only','(i) only','(i), (ii) and (iii)','(i) and (ii) only'],'(i) is wrong; interphase is metabolically active.'],
    ['diagram',M,'In the pie diagram of a cell cycle, the smallest sector represents:',['M phase','G1 phase','S phase','G2 phase'],'M phase is the shortest (about 1 hour of 24).'],
    ['recall',E,'Cytokinesis means division of:',['Cytoplasm','Nucleus','Chromosome','Nucleolus'],'Cyto = cell.'],
    ['diagram',M,'In a cell cycle diagram the arrow after M phase leads back to:',['G1','S','G2','G0'],'Daughter cells enter G1.']
  ],
  'interphase': [
    ['recall',E,'DNA replication takes place in:',['S phase','G1 phase','G2 phase','M phase'],'S = synthesis.'],
    ['recall',M,'The quiescent stage of the cell cycle is:',['G0','G1','G2','S'],'G0.'],
    ['recall',M,'In animal cells, centriole duplication occurs during:',['S phase','G1 phase','Prophase','Telophase'],'S phase (in the cytoplasm).'],
    ['matching',M,'Match the phases with their events:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'G1 = growth; G2 = mitotic proteins.',['A. G1','B. G2'],['i. Proteins for mitosis','ii. Cell growth, no DNA replication']],
    ['statement',H,'Which of the following statements is/are correct?\n(i) S phase doubles the DNA content\n(ii) S phase doubles the chromosome number\n(iii) G0 cells are metabolically active',['(i) and (iii) only','(ii) only','(i), (ii) and (iii)','(i) and (ii) only'],'Chromosome number does not double.'],
    ['recall',H,'A cell with 2n = 24 at G1 will have how many chromosomes in G2?',['24','48','12','96'],'Chromosome number unchanged.'],
    ['diagram',M,'In a graph of DNA content vs time, DNA doubles during the phase labelled:',['S','G1','G2','M'],'S phase.'],
    ['recall',M,'Example of cells that do not divide in adult animals:',['Heart cells','Skin cells','Blood stem cells','Liver cells after injury'],'Heart cells.']
  ],
  'mitosis-early': [
    ['recall',E,'Mitosis was first observed in plant cells by:',['Strasburger','Flemming','Hooke','Brown'],'Strasburger (1870).'],
    ['recall',M,'Kinetochores are found on:',['Centromeres','Centrioles','Nucleolus','Telomeres'],'On the surface of centromeres.'],
    ['recall',E,'The best stage to observe chromosome morphology is:',['Metaphase','Prophase','Anaphase','Telophase'],'Metaphase.'],
    ['matching',M,'Match the stage with its event:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'Prophase: condensation begins; metaphase: alignment at equator.',['A. Prophase','B. Metaphase'],['i. Chromosomes on metaphase plate','ii. Condensation of chromatin begins']],
    ['statement',H,'Which of the following statements is/are correct?\n(i) Asters radiate from centrosomes\n(ii) Nuclear envelope disintegrates completely at the start of metaphase\n(iii) Golgi complex is clearly visible at the end of prophase',['(i) and (ii) only','(iii) only','(i), (ii) and (iii)','(ii) and (iii) only'],'(iii) is wrong.'],
    ['diagram',M,'In a diagram of a metaphase cell, the structures connecting chromosomes to the poles are:',['Spindle fibres','Asters','Cell plate','Chiasmata'],'Spindle fibres attach at kinetochores.'],
    ['recall',M,'Two asters plus spindle fibres form the:',['Mitotic apparatus','Synaptonemal complex','Phragmoplast','Nucleolus'],'Mitotic apparatus.'],
    ['diagram',H,'A diagram shows chromosomes lined up in one plane at the centre, with each chromatid attached to opposite poles. The stage is:',['Metaphase','Anaphase','Prophase','Telophase'],'Metaphase.']
  ],
  'mitosis-late': [
    ['recall',E,'Centromeres split during:',['Anaphase','Metaphase','Prophase','Telophase'],'Anaphase.'],
    ['recall',M,'In anaphase the leading part of a moving chromosome is the:',['Centromere','Arm','Telomere','Satellite'],'Centromere.'],
    ['recall',E,'Nuclear envelope reforms during:',['Telophase','Anaphase','Metaphase','Prophase'],'Telophase.'],
    ['matching',M,'Match the stage with its event:',['A-i, B-ii','A-ii, B-i','Both i','Both ii'],'Anaphase separates chromatids; telophase reforms nuclei.',['A. Anaphase','B. Telophase'],['i. Chromatids move to opposite poles','ii. Daughter nuclei form']],
    ['statement',H,'Which of the following statements is/are correct?\n(i) Telophase is the reverse of prophase\n(ii) Chromosomes lose individuality in telophase\n(iii) Arms lead the chromosome in anaphase',['(i) and (ii) only','(iii) only','(i), (ii) and (iii)','(ii) and (iii) only'],'(iii) is wrong.'],
    ['diagram',M,'A diagram shows V-shaped chromosomes moving towards the two poles. The stage is:',['Anaphase','Telophase','Metaphase','Prophase'],'Anaphase.'],
    ['recall',M,'Which organelles reappear in telophase?',['Nucleolus, Golgi and ER','Centrioles only','Chloroplasts','Lysosomes'],'Nucleolus, Golgi complex and ER.'],
    ['diagram',H,'A diagram shows two nuclei forming at the poles with a constriction appearing at the centre of an animal cell. The stage is:',['Late telophase with cytokinesis starting','Metaphase','Prophase','Anaphase I'],'Telophase followed by cytokinesis.']
  ],
  'cytokinesis': [
    ['recall',E,'Cytokinesis in plant cells occurs by:',['Cell plate formation','Furrowing','Constriction','Budding'],'Cell plate.'],
    ['recall',M,'The cell plate represents the:',['Middle lamella','Secondary wall','Plasma membrane','Nuclear envelope'],'Middle lamella.'],
    ['recall',E,'An example of syncytium is:',['Liquid endosperm of coconut','Onion peel','Human RBC','Bacterium'],'Coconut water.'],
    ['matching',M,'Match the cell with its type of cytokinesis:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'Animal: furrow; plant: cell plate.',['A. Animal cell','B. Plant cell'],['i. Cell plate','ii. Furrow']],
    ['statement',H,'Which of the following statements is/are correct?\n(i) Mitosis restores nucleo-cytoplasmic ratio\n(ii) Mitosis produces genetic variation\n(iii) Vegetative reproduction occurs by mitosis',['(i) and (iii) only','(ii) only','(i), (ii) and (iii)','(i) and (ii) only'],'(ii) is wrong.'],
    ['diagram',M,'A diagram of a dividing plant cell shows a line forming in the centre and growing towards the walls. It is the:',['Cell plate','Cleavage furrow','Metaphase plate','Spindle'],'Cell plate.'],
    ['recall',M,'Continuous growth of plants is due to mitosis in:',['Apical and lateral meristems','Cork','Pith','Xylem vessels'],'Meristems.'],
    ['recall',H,'Multinucleate condition results when:',['Karyokinesis is not followed by cytokinesis','DNA does not replicate','Cells undergo meiosis','Cell wall is absent'],'Syncytium formation.']
  ],
  'meiosis-prophase': [
    ['recall',E,'Crossing over occurs during:',['Pachytene','Zygotene','Diplotene','Diakinesis'],'Pachytene.'],
    ['recall',M,'The enzyme responsible for crossing over is:',['Recombinase','Helicase','Ligase','Polymerase'],'Recombinase.'],
    ['recall',M,'Synaptonemal complex is formed in:',['Zygotene','Leptotene','Pachytene','Diakinesis'],'Zygotene.'],
    ['matching',M,'Match the stage with its event:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'Diplotene: chiasmata; diakinesis: terminalisation.',['A. Diplotene','B. Diakinesis'],['i. Terminalisation of chiasmata','ii. Chiasmata visible']],
    ['statement',H,'Which of the following statements is/are correct?\n(i) A bivalent has four chromatids\n(ii) Crossing over occurs between sister chromatids\n(iii) Chiasmata are seen in diplotene',['(i) and (iii) only','(ii) only','(i), (ii) and (iii)','(i) and (ii) only'],'(ii) is wrong.'],
    ['diagram',M,'A diagram shows X-shaped points joining homologous chromosomes. These points are:',['Chiasmata','Kinetochores','Centromeres','Asters'],'Chiasmata.'],
    ['recall',H,'Diplotene may last for months or years in:',['Oocytes of some vertebrates','Pollen mother cells','Root tip cells','Yeast'],'Vertebrate oocytes.'],
    ['diagram',M,'A diagram of prophase I shows paired homologous chromosomes with a ladder-like structure between them. This structure is the:',['Synaptonemal complex','Cell plate','Spindle','Nuclear envelope'],'Synaptonemal complex.']
  ],
  'meiosis-one': [
    ['recall',E,'Homologous chromosomes separate during:',['Anaphase I','Anaphase II','Metaphase I','Prophase II'],'Anaphase I.'],
    ['recall',M,'The stage between meiosis I and II is:',['Interkinesis','Interphase','Diakinesis','Cytokinesis'],'Interkinesis.'],
    ['recall',M,'At the end of telophase I, the cells formed are called a:',['Dyad','Tetrad','Syncytium','Monad'],'Dyad.'],
    ['matching',M,'Match the stage with its event:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'Metaphase I: bivalents align; anaphase I: homologues separate.',['A. Metaphase I','B. Anaphase I'],['i. Homologues separate','ii. Bivalents align on equator']],
    ['statement',H,'Which of the following statements is/are correct?\n(i) Meiosis I is reductional\n(ii) DNA replicates in interkinesis\n(iii) Sister chromatids remain joined in anaphase I',['(i) and (iii) only','(ii) only','(i), (ii) and (iii)','(i) and (ii) only'],'(ii) is wrong.'],
    ['diagram',M,'A diagram shows paired chromosomes (bivalents) lined up at the centre of a cell. The stage is:',['Metaphase I','Metaphase II','Mitotic metaphase','Anaphase I'],'Bivalents at equator = metaphase I.'],
    ['recall',H,'A cell with 2n = 12 after meiosis I has:',['6 chromosomes with 12 chromatids','12 chromosomes','6 chromosomes with 6 chromatids','24 chromatids'],'n = 6 with 2 chromatids each.'],
    ['diagram',H,'A diagram shows chromosomes, each with two chromatids, moving to opposite poles with no centromere splitting. The stage is:',['Anaphase I','Anaphase II','Mitotic anaphase','Telophase II'],'Anaphase I.']
  ],
  'meiosis-two': [
    ['recall',E,'Centromeres split during meiosis in:',['Anaphase II','Anaphase I','Metaphase I','Prophase I'],'Anaphase II.'],
    ['recall',M,'Meiosis II resembles:',['Mitosis','Meiosis I','Amitosis','Budding'],'Mitosis.'],
    ['recall',E,'Number of cells formed at the end of meiosis:',['Four','Two','Eight','One'],'Four haploid cells.'],
    ['matching',M,'Match the division with its nature:',['A-ii, B-i','A-i, B-ii','Both i','Both ii'],'Meiosis I reductional; II equational.',['A. Meiosis I','B. Meiosis II'],['i. Equational','ii. Reductional']],
    ['statement',H,'Which of the following statements is/are correct?\n(i) Meiosis conserves chromosome number across generations\n(ii) Meiosis produces genetic variation\n(iii) Meiosis is responsible for growth',['(i) and (ii) only','(iii) only','(i), (ii) and (iii)','(ii) and (iii) only'],'(iii) is mitosis.'],
    ['diagram',M,'A diagram shows four haploid cells formed from one cell. This is a:',['Tetrad of cells after meiosis II','Dyad','Syncytium','Mitotic product'],'Tetrad.'],
    ['recall',H,'Number of meiotic divisions to form 80 pollen grains:',['20','40','80','10'],'80 ÷ 4 = 20.'],
    ['diagram',M,'A diagram shows single chromosomes (with two chromatids) aligned at the equator in two separate haploid cells. The stage is:',['Metaphase II','Metaphase I','Anaphase I','Prophase I'],'Metaphase II.']
  ]
};

/* Descriptive questions: [marks, difficulty, q, a] */
const desc = {
  'cycle': [
    [1,E,'Define cell cycle.','The sequence of events by which a cell duplicates its genome, synthesises other cell constituents and eventually divides into two daughter cells.'],
    [1,E,'How long does a human cell in culture take to complete one cell cycle?','About 24 hours.'],
    [2,M,'Name the two basic phases of the cell cycle and state the duration of each in a human cell.','(i) Interphase &mdash; more than 95% of the cycle (about 23 hours). (ii) M phase &mdash; about 1 hour.'],
    [2,M,'Distinguish between karyokinesis and cytokinesis.','(i) Karyokinesis is division of the nucleus (separation of daughter chromosomes). (ii) Cytokinesis is division of the cytoplasm into two daughter cells.'],
    [3,M,'Explain the phases of the cell cycle with a labelled diagram.','The cell cycle has two phases: (i) <b>Interphase</b> &mdash; preparation, more than 95% of the cycle, divided into G<sub>1</sub> (growth), S (DNA replication) and G<sub>2</sub> (proteins for mitosis). (ii) <b>M phase</b> &mdash; karyokinesis (prophase, metaphase, anaphase, telophase) followed by cytokinesis. Diagram: a circle with sectors G<sub>1</sub>, S, G<sub>2</sub> and a small M sector; G<sub>0</sub> drawn as an exit from G<sub>1</sub>.'],
    [3,M,'Why is interphase called the resting phase? Is it really resting? Explain.','(i) It is called resting because no visible division occurs. (ii) It is not really resting: the cell is metabolically very active. (iii) It grows (G<sub>1</sub>), replicates DNA (S) and synthesises proteins for mitosis (G<sub>2</sub>), preparing for division.'],
    [3,H,'"The cell cycle is under genetic control." Explain with reference to the timing of DNA synthesis.','(i) Cell growth (cytoplasmic increase) is continuous, but DNA synthesis occurs only in one specific stage, the S phase. (ii) Replicated chromosomes are distributed to daughter nuclei by an ordered series of events. (iii) This precise ordering &mdash; replicate once, then divide &mdash; is controlled by genes.'],
    [5,H,'Describe the cell cycle. Explain the events of interphase and list the stages of M phase.','<b>Cell cycle</b>: sequence of events by which a cell duplicates its genome, synthesises constituents and divides; under genetic control; ~24 h in human cells, ~90 min in yeast. <b>Interphase</b> (>95%): G<sub>1</sub> &mdash; cell grows, metabolically active, no DNA replication; S &mdash; DNA replicates (2C &rarr; 4C), chromosome number unchanged (2n), centriole duplicates in animal cells; G<sub>2</sub> &mdash; proteins for mitosis made, growth continues. G<sub>0</sub> &mdash; quiescent cells exit G<sub>1</sub>. <b>M phase</b>: karyokinesis (prophase, metaphase, anaphase, telophase) followed by cytokinesis. Diagram of the cell cycle.']
  ],
  'interphase': [
    [1,E,'What is G<sub>0</sub> phase?','The quiescent stage that non-dividing cells enter after exiting G<sub>1</sub>; they stay metabolically active but do not proliferate.'],
    [1,E,'In which phase does DNA replication take place?','S phase (synthesis phase).'],
    [2,M,'What happens to the DNA content and chromosome number during S phase?','(i) DNA content doubles from 2C to 4C. (ii) Chromosome number remains the same (2n), since each chromosome now has two sister chromatids.'],
    [2,M,'Differentiate between G<sub>1</sub> and G<sub>2</sub> phases.','(i) G<sub>1</sub>: between the end of mitosis and start of DNA replication; cell grows, no DNA replication. (ii) G<sub>2</sub>: after S phase; proteins needed for mitosis are synthesised while growth continues.'],
    [3,M,'Describe the three phases of interphase.','(i) <b>G<sub>1</sub></b>: interval between mitosis and DNA replication; cell metabolically active and grows. (ii) <b>S</b>: DNA replicates; DNA 2C &rarr; 4C, chromosome number unchanged; centriole duplicates in animal cells. (iii) <b>G<sub>2</sub></b>: proteins for mitosis synthesised; growth continues.'],
    [3,M,'Write a note on the quiescent stage.','(i) Cells that do not divide further exit G<sub>1</sub> and enter G<sub>0</sub>, the quiescent stage. (ii) They remain metabolically active but do not proliferate unless called on depending on the requirement of the organism. (iii) Example: heart cells of adult animals; other cells divide only occasionally to replace cells lost by injury or death.'],
    [3,H,'In which cells does mitosis occur in animals and plants? Explain.','(i) In animals, mitotic division occurs only in diploid somatic cells. (ii) In plants, mitotic division can occur in both haploid and diploid cells (e.g. haploid cells of the gametophyte). (iii) Thus mitosis is not restricted by ploidy in plants.'],
    [5,H,'A cell has 2n = 8 chromosomes and 10 pg DNA in G<sub>1</sub>. Give the chromosome number and DNA content at G<sub>2</sub>, after mitosis, after meiosis I and after meiosis II. Explain.','<b>G<sub>2</sub></b>: 8 chromosomes, 20 pg (DNA doubled in S; chromosome number unchanged). <b>After mitosis</b> (each daughter): 8 chromosomes, 10 pg (sister chromatids separated). <b>After meiosis I</b> (each cell): 4 chromosomes, 10 pg (homologues separated; each chromosome still has 2 chromatids). <b>After meiosis II</b> (each cell): 4 chromosomes, 5 pg (sister chromatids separated). Hence S phase doubles DNA but not chromosomes; meiosis I halves chromosome number; meiosis II halves DNA again.']
  ],
  'mitosis-early': [
    [1,E,'Why is mitosis called equational division?','Because the chromosome number in the parent and progeny cells remains the same.'],
    [1,E,'What are kinetochores?','Small disc-shaped structures on the surface of centromeres where spindle fibres attach.'],
    [2,M,'Who first observed mitosis in plant and animal cells?','(i) Strasburger (1870) in plant cells. (ii) Flemming (1879) in animal cells; he also coined the term mitosis.'],
    [2,M,'What is the metaphase plate? Why is metaphase best for studying chromosomes?','(i) The plane of alignment of chromosomes at the spindle equator. (ii) Chromosomes are fully condensed and spread in one plane, so their morphology is easily studied.'],
    [3,M,'Describe the events of prophase.','(i) Condensation of chromosomal material begins; chromatin untangles. (ii) Duplicated centrosomes move to opposite poles, each radiating asters; spindle assembly begins (mitotic apparatus). (iii) Golgi, ER, nucleolus and nuclear envelope disappear by the end; each chromosome shows two chromatids joined at the centromere.'],
    [3,M,'Describe the key features of metaphase.','(i) Complete disintegration of nuclear envelope marks its start; chromosomes spread in cytoplasm. (ii) Spindle fibres attach to kinetochores of chromosomes. (iii) Chromosomes move to the spindle equator and align on the metaphase plate, with sister chromatids attached to opposite poles.'],
    [3,H,'Distinguish between prophase and metaphase (any three points).','(i) Condensation begins in prophase; complete in metaphase. (ii) Nuclear envelope starts disappearing in prophase; fully disintegrated in metaphase. (iii) Chromosomes scattered in prophase; aligned on the metaphase plate in metaphase. (iv) Spindle begins assembling in prophase; fibres attached to kinetochores in metaphase.'],
    [5,H,'Describe prophase and metaphase of mitosis with neat labelled diagrams.','<b>Prophase</b>: follows S and G<sub>2</sub>; chromatin condenses into compact chromosomes, each of two chromatids joined at the centromere; centrosomes (duplicated in S) move to opposite poles, radiating asters; asters + spindle fibres form the mitotic apparatus; Golgi, ER, nucleolus and nuclear envelope disappear. <b>Metaphase</b>: nuclear envelope completely disintegrates; condensation complete &mdash; best stage to study morphology; kinetochores on centromeres attach to spindle fibres; chromosomes aligned at the equator (metaphase plate), sister chromatids facing opposite poles. Diagrams with labels: centriole, aster, spindle fibre, chromosome, centromere, kinetochore, metaphase plate.']
  ],
  'mitosis-late': [
    [1,E,'In which stage do centromeres split in mitosis?','Anaphase.'],
    [1,E,'Which stage of mitosis is the reverse of prophase?','Telophase.'],
    [2,M,'Write the two key features of anaphase.','(i) Centromeres split and chromatids separate. (ii) Chromatids (now daughter chromosomes) move to opposite poles, centromere leading and arms trailing.'],
    [2,M,'Mention any two events of telophase.','(i) Chromosomes reach the poles, decondense and lose individuality. (ii) Nuclear envelope forms around each chromosome cluster; nucleolus, Golgi and ER reform.'],
    [3,M,'Describe anaphase of mitosis.','(i) At its onset, each chromosome at the metaphase plate splits simultaneously. (ii) The two daughter chromatids, now chromosomes, migrate to opposite poles. (iii) The centromere remains directed to the pole (leading edge) with arms trailing behind.'],
    [3,M,'Describe the key features of telophase.','(i) Chromosomes cluster at opposite poles and lose their identity as discrete elements. (ii) Nuclear envelope develops around each cluster, forming two daughter nuclei. (iii) Nucleolus, Golgi complex and ER reform.'],
    [3,H,'Why is telophase called the reverse of prophase? Give three comparisons.','(i) Prophase: chromosomes condense; telophase: they decondense. (ii) Prophase: nuclear envelope and nucleolus disappear; telophase: they reappear. (iii) Prophase: Golgi and ER disappear; telophase: they reform.'],
    [5,H,'Describe anaphase and telophase of mitosis with labelled diagrams.','<b>Anaphase</b>: each chromosome at the metaphase plate splits simultaneously; daughter chromatids (now chromosomes) migrate to opposite poles; centromere leads, arms trail. Key features: centromeres split, chromatids move to opposite poles. <b>Telophase</b>: chromosomes reach the poles, decondense and lose individuality; chromatin collects at each pole; nuclear envelope forms around each cluster giving two daughter nuclei; nucleolus, Golgi complex and ER reform. Diagrams labelled: spindle fibres, daughter chromosomes, centromere, poles, new nuclear envelope, nucleolus.']
  ],
  'cytokinesis': [
    [1,E,'What is a syncytium? Give an example.','A multinucleate condition formed when karyokinesis is not followed by cytokinesis, e.g. liquid endosperm of coconut.'],
    [1,E,'What does the cell plate represent?','The middle lamella between the walls of two adjacent cells.'],
    [2,M,'How does cytokinesis differ in plant and animal cells?','(i) Animal cells: a furrow in the plasma membrane deepens and joins in the centre. (ii) Plant cells: a cell plate forms in the centre and grows outwards to the lateral walls.'],
    [2,M,'What is nucleo-cytoplasmic ratio? How does mitosis restore it?','(i) Ratio of the volume of nucleus to the volume of cytoplasm. (ii) Growth increases cytoplasm and disturbs this ratio; mitosis divides the cell and restores it.'],
    [3,M,'Describe cytokinesis in a plant cell.','(i) Plant cells have an inextensible wall, so they cannot furrow. (ii) Wall formation starts in the centre with a precursor called the cell plate, representing the middle lamella, and grows outward to meet the lateral walls. (iii) Organelles like mitochondria and plastids are distributed between daughter cells.'],
    [3,M,'Give the significance of mitosis (any three).','(i) Produces diploid, genetically identical daughter cells; growth of multicellular organisms. (ii) Restores nucleo-cytoplasmic ratio. (iii) Cell repair &mdash; epidermis, gut lining and blood cells constantly replaced. (iv) Continuous plant growth from apical and lateral meristems; vegetative reproduction.'],
    [3,H,'What happens if karyokinesis is not followed by cytokinesis? Explain with an example.','(i) The nuclei divide but the cytoplasm does not, so many nuclei share one cytoplasm. (ii) This multinucleate condition is called a syncytium. (iii) Example: the liquid endosperm of coconut (coconut water) with many free nuclei.'],
    [5,H,'Explain cytokinesis in plant and animal cells and give the significance of mitosis.','<b>Cytokinesis</b>: division of cytoplasm after karyokinesis. <b>Animal cell</b>: a furrow appears in the plasma membrane, deepens and joins in the centre (centripetal). <b>Plant cell</b>: rigid wall; cell plate (middle lamella) forms in the centre and grows outward (centrifugal) to meet lateral walls; mitochondria and plastids distributed. Without cytokinesis &rarr; syncytium (coconut endosperm). <b>Significance of mitosis</b>: diploid identical cells; growth; nucleo-cytoplasmic ratio; cell repair (epidermis, gut lining, blood cells); continuous plant growth from apical and lateral meristems; vegetative reproduction.']
  ],
  'meiosis-prophase': [
    [1,E,'What is synapsis?','Pairing of homologous chromosomes during zygotene.'],
    [1,E,'Name the enzyme involved in crossing over.','Recombinase.'],
    [2,M,'Define meiosis. Why is it called reductional division?','(i) Specialised division that reduces the chromosome number by half, forming haploid cells. (ii) Called reductional because 2n becomes n.'],
    [2,M,'What is crossing over? In which stage does it occur?','(i) Exchange of genetic material between non-sister chromatids of homologous chromosomes, mediated by recombinase. (ii) Pachytene of prophase I.'],
    [3,M,'List the key features of meiosis.','(i) Two sequential divisions (meiosis I and II) but one DNA replication. (ii) Pairing of homologous chromosomes and recombination between non-sister chromatids. (iii) Four haploid cells formed at the end of meiosis II.'],
    [3,M,'Describe leptotene and zygotene.','(i) <b>Leptotene</b>: chromosomes gradually become visible; compaction continues. (ii) <b>Zygotene</b>: homologous chromosomes pair (synapsis), accompanied by formation of the synaptonemal complex. (iii) A pair of synapsed homologues forms a bivalent or tetrad.'],
    [3,H,'Describe diplotene and diakinesis.','(i) <b>Diplotene</b>: synaptonemal complex dissolves; homologues separate except at crossover sites, forming X-shaped chiasmata; may last months/years in vertebrate oocytes. (ii) <b>Diakinesis</b>: terminalisation of chiasmata; chromosomes fully condensed; spindle assembles. (iii) Nucleolus disappears and nuclear envelope breaks down; transition to metaphase I.'],
    [5,H,'Describe the sub-stages of prophase I of meiosis.','Prophase I is long and complex; five sub-stages: <b>Leptotene</b> &mdash; chromosomes become visible and compact. <b>Zygotene</b> &mdash; synapsis of homologues with synaptonemal complex; bivalent/tetrad. <b>Pachytene</b> &mdash; tetrads clear; recombination nodules; crossing over between non-sister chromatids by recombinase; recombination completed. <b>Diplotene</b> &mdash; synaptonemal complex dissolves; homologues separate except at chiasmata (X-shaped). <b>Diakinesis</b> &mdash; terminalisation of chiasmata; spindle assembles; nucleolus and nuclear envelope disappear; transition to metaphase I. Diagram of pachytene (crossing over) and diplotene (chiasmata).']
  ],
  'meiosis-one': [
    [1,E,'What is interkinesis?','The short-lived stage between meiosis I and meiosis II, with no DNA replication.'],
    [1,E,'What separates in anaphase I?','Homologous chromosomes.'],
    [2,M,'Describe metaphase I.','(i) Bivalent chromosomes align on the equatorial plate. (ii) Microtubules from opposite poles attach to the pair of homologous chromosomes.'],
    [2,M,'Describe telophase I.','(i) Nuclear membrane and nucleolus reappear and cytokinesis follows, forming a dyad of cells. (ii) Chromosomes disperse somewhat but do not reach the fully extended interphase state.'],
    [3,M,'Distinguish between anaphase of mitosis and anaphase I.','(i) Mitosis: sister chromatids separate; anaphase I: homologous chromosomes separate. (ii) Mitosis: centromeres split; anaphase I: centromeres do not split. (iii) Mitosis is equational; anaphase I is reductional.'],
    [3,M,'Describe the stages of meiosis I after prophase I.','(i) <b>Metaphase I</b>: bivalents align on the equatorial plate; fibres attach to homologues. (ii) <b>Anaphase I</b>: homologues separate; sister chromatids stay joined at centromeres. (iii) <b>Telophase I</b>: nuclear membrane and nucleolus reappear; cytokinesis gives a dyad; followed by interkinesis.'],
    [3,H,'Why is meiosis I called reductional division? Explain.','(i) In metaphase I homologous pairs (bivalents) align, each homologue attached to one pole. (ii) In anaphase I whole homologues separate, so each pole gets one member of each pair. (iii) Hence chromosome number is halved (2n &rarr; n), making it reductional.'],
    [5,H,'Describe meiosis I with labelled diagrams.','<b>Prophase I</b>: leptotene, zygotene (synapsis, synaptonemal complex), pachytene (crossing over by recombinase), diplotene (chiasmata), diakinesis (terminalisation; nucleolus and envelope disappear). <b>Metaphase I</b>: bivalents on equatorial plate; fibres attach to homologues. <b>Anaphase I</b>: homologues separate; sister chromatids remain attached. <b>Telophase I</b>: nuclear membrane and nucleolus reappear; cytokinesis &rarr; dyad. <b>Interkinesis</b>: short, no DNA replication. Diagrams of metaphase I, anaphase I and telophase I.']
  ],
  'meiosis-two': [
    [1,E,'Which division of meiosis resembles mitosis?','Meiosis II.'],
    [1,E,'What is formed at the end of meiosis II?','A tetrad of cells &mdash; four haploid daughter cells.'],
    [2,M,'Describe anaphase II.','(i) Begins with simultaneous splitting of the centromere of each chromosome. (ii) Sister chromatids move to opposite poles by shortening of kinetochore microtubules.'],
    [2,M,'Give any two significances of meiosis.','(i) Conserves the chromosome number of a species across generations. (ii) Crossing over creates genetic variability, the raw material for evolution.'],
    [3,M,'Describe the stages of meiosis II.','(i) <b>Prophase II</b>: chromosomes compact; nuclear membrane disappears. <b>Metaphase II</b>: chromosomes at equator; fibres to kinetochores of sister chromatids. (ii) <b>Anaphase II</b>: centromeres split; chromatids to opposite poles. (iii) <b>Telophase II</b>: nuclear envelope reforms; cytokinesis &rarr; tetrad of four haploid cells.'],
    [3,M,'Give the significance of meiosis.','(i) Conserves specific chromosome number of each species across generations, though it halves the number in gametes. (ii) Crossing over in pachytene increases genetic variability. (iii) Variations are the raw material for evolution.'],
    [3,H,'Differentiate between mitosis and meiosis (any three points).','(i) Mitosis: equational, one division; meiosis: reductional + equational, two divisions. (ii) Mitosis: 2 diploid identical cells; meiosis: 4 haploid varied cells. (iii) Mitosis: no synapsis or crossing over; meiosis: synapsis and crossing over in prophase I. (iv) Mitosis in somatic cells; meiosis in gametogenesis.'],
    [5,H,'Describe meiosis II and explain the significance of meiosis. How does it differ from mitosis?','<b>Meiosis II</b> starts right after cytokinesis, resembles mitosis. Prophase II: chromosomes compact, nuclear membrane disappears. Metaphase II: chromosomes at equator, fibres to kinetochores of sister chromatids. Anaphase II: centromeres split, chromatids to opposite poles. Telophase II: nuclear envelope reforms; cytokinesis &rarr; tetrad (4 haploid cells). <b>Significance</b>: conserves chromosome number; crossing over gives variation; raw material for evolution. <b>Differences from mitosis</b>: two divisions vs one; 4 haploid vs 2 diploid cells; pairing and crossing over present; reductional vs equational; gametogenesis vs somatic cells.']
  ]
};

const board = {
  intro:'Chapter 10 typically carries <b>8&ndash;10 marks</b> in the Annual PU Board / Class 11 theory paper. Most frequent high-weightage areas: <b>phases of the cell cycle</b>, <b>stages of mitosis</b>, <b>sub-stages of prophase I</b>, <b>significance of mitosis and meiosis</b> and <b>mitosis vs meiosis</b>.',
  parts:[
    {label:'Very Short Answer (VSA — 1 Mark Each)', marks:1, items:[
      {q:'Define cell cycle.', a:'The sequence of events by which a cell duplicates its genome, synthesises other constituents and divides into two daughter cells.'},
      {q:'How long does yeast take to complete a cell cycle?', a:'About 90 minutes.'},
      {q:'What is G<sub>0</sub> phase?', a:'The quiescent stage: cells exit G<sub>1</sub>, remain metabolically active but do not divide unless required.'},
      {q:'What are kinetochores?', a:'Disc-shaped structures on the surface of centromeres where spindle fibres attach.'},
      {q:'Name the stage in which crossing over occurs.', a:'Pachytene of prophase I.'},
      {q:'Name the enzyme that mediates crossing over.', a:'Recombinase.'},
      {q:'What are chiasmata?', a:'X-shaped structures at the sites of crossing over between homologous chromosomes, seen in diplotene.'},
      {q:'What is a syncytium? Give an example.', a:'Multinucleate condition when karyokinesis is not followed by cytokinesis, e.g. liquid endosperm of coconut.'},
      {q:'What is interkinesis?', a:'The short stage between meiosis I and meiosis II with no DNA replication.'},
      {q:'Which stage is best for studying chromosome morphology?', a:'Metaphase.'}
    ]},
    {label:'Short Answer I (SA-I — 2 Marks Each)', marks:2, items:[
      {q:'What happens to DNA content and chromosome number in S phase?', a:'DNA content doubles (2C &rarr; 4C); chromosome number remains the same (2n).'},
      {q:'Distinguish between cytokinesis in plant and animal cells.', a:'Animal: furrow in the plasma membrane deepens to divide the cell. Plant: cell plate forms in the centre and grows outward to the lateral walls.'},
      {q:'Mention the key features of anaphase.', a:'Centromeres split and chromatids separate; chromatids move to opposite poles.'},
      {q:'Why is mitosis called equational and meiosis reductional division?', a:'Mitosis keeps the chromosome number the same in daughter cells; meiosis halves the chromosome number.'},
      {q:'What is synaptonemal complex? When is it formed and dissolved?', a:'Complex structure formed during synapsis of homologous chromosomes; forms in zygotene and dissolves at the start of diplotene.'},
      {q:'Give two significances of meiosis.', a:'Conserves chromosome number across generations; crossing over creates variation, the raw material for evolution.'}
    ]},
    {label:'Short Answer II / Explanatory (SA-II — 3 Marks Each)', marks:3, items:[
      {q:'Describe the phases of interphase.', a:'G<sub>1</sub>: growth, no DNA replication. S: DNA replicates (2C &rarr; 4C), chromosome number unchanged, centriole duplicates. G<sub>2</sub>: proteins for mitosis synthesised, growth continues.'},
      {q:'Describe the events of metaphase.', a:'Nuclear envelope fully disintegrates; chromosomes fully condensed; spindle fibres attach to kinetochores; chromosomes align on the metaphase plate with sister chromatids facing opposite poles.'},
      {q:'Write the significance of mitosis.', a:'Diploid identical daughter cells; growth; restores nucleo-cytoplasmic ratio; cell repair (epidermis, gut lining, blood cells); continuous plant growth from meristems; vegetative reproduction.'},
      {q:'Describe diplotene and diakinesis.', a:'Diplotene: synaptonemal complex dissolves; homologues separate except at chiasmata. Diakinesis: terminalisation of chiasmata; spindle assembles; nucleolus and nuclear envelope disappear.'},
      {q:'Differentiate between mitosis and meiosis (three points).', a:'One vs two divisions; 2 diploid identical vs 4 haploid varied cells; no crossing over vs crossing over in prophase I.'}
    ]},
    {label:'Long Answer (LA — 5 Marks Each)', marks:5, items:[
      {q:'Describe the stages of mitosis with labelled diagrams.', a:'Prophase: condensation, centrosomes to poles, asters and spindle, organelles disappear. Metaphase: envelope gone, kinetochores attach, chromosomes on metaphase plate. Anaphase: centromeres split, chromatids to opposite poles, centromere leads. Telophase: chromosomes decondense, nuclear envelope, nucleolus, Golgi, ER reform. Followed by cytokinesis. Diagrams of all four.'},
      {q:'Describe the sub-stages of prophase I of meiosis.', a:'Leptotene (chromosomes visible, compact), Zygotene (synapsis, synaptonemal complex, bivalent), Pachytene (recombination nodules, crossing over by recombinase), Diplotene (complex dissolves, chiasmata), Diakinesis (terminalisation, spindle, nucleolus and envelope disappear).'},
      {q:'Describe meiosis II and give the significance of meiosis.', a:'Prophase II, metaphase II (fibres to kinetochores of sister chromatids), anaphase II (centromeres split), telophase II (tetrad of four haploid cells). Significance: conserves chromosome number, genetic variability by crossing over, raw material for evolution.'}
    ]}
  ],
  diagrams:[
    {title:'Cell Cycle (Phases)', labels:'G<sub>1</sub>, S, G<sub>2</sub>, M phase, Interphase, G<sub>0</sub> (exit from G<sub>1</sub>), Karyokinesis, Cytokinesis'},
    {title:'Stages of Mitosis (Animal Cell)', labels:'Centriole, Aster, Spindle fibres, Chromosome, Centromere, Kinetochore, Metaphase plate, Nuclear envelope, Daughter nuclei'},
    {title:'Metaphase Chromosome', labels:'Sister chromatids, Centromere, Kinetochore, Spindle fibre attachment'},
    {title:'Cytokinesis in Plant and Animal Cells', labels:'Cell plate, Middle lamella, Cleavage furrow, Daughter nuclei'},
    {title:'Prophase I: Pachytene and Diplotene', labels:'Homologous chromosomes, Bivalent/Tetrad, Recombination nodule, Crossing over, Chiasmata'},
    {title:'Stages of Meiosis I and Meiosis II', labels:'Bivalents at equator, Homologues separating, Dyad, Sister chromatids separating, Tetrad of haploid cells'}
  ]
};

const glossary = [
  ['Cell cycle','The sequence of events by which a cell duplicates its genome, synthesises other cell constituents and divides into two daughter cells.'],
  ['Interphase','The preparation phase of the cell cycle (G<sub>1</sub>, S, G<sub>2</sub>) in which the cell grows and replicates its DNA; more than 95% of the cycle.'],
  ['M phase','The phase of actual cell division: karyokinesis followed by cytokinesis.'],
  ['G1 phase','Gap 1: the interval between the end of mitosis and the start of DNA replication; the cell grows.'],
  ['S phase','Synthesis phase: DNA replicates (2C &rarr; 4C) while chromosome number stays the same.'],
  ['G2 phase','Gap 2: proteins needed for mitosis are synthesised while growth continues.'],
  ['G0 phase','Quiescent stage of cells that exit G<sub>1</sub>; metabolically active but not dividing.'],
  ['Karyokinesis','Division of the nucleus.'],
  ['Cytokinesis','Division of the cytoplasm into two daughter cells.'],
  ['Mitosis','Equational division in which daughter cells have the same chromosome number as the parent.'],
  ['Equational division','A division in which the chromosome number remains unchanged (mitosis, meiosis II).'],
  ['Prophase','First stage of mitosis: chromatin condenses, centrosomes move to poles and the spindle starts to form.'],
  ['Metaphase','Stage in which fully condensed chromosomes align on the metaphase plate with kinetochores attached to spindle fibres.'],
  ['Anaphase','Stage in which centromeres split and chromatids move to opposite poles.'],
  ['Telophase','Last stage of karyokinesis: chromosomes decondense and two daughter nuclei form.'],
  ['Centromere','The region holding the two sister chromatids of a chromosome together.'],
  ['Kinetochore','Disc-shaped structure on the surface of the centromere where spindle fibres attach.'],
  ['Chromatid','One of the two identical halves of a replicated chromosome.'],
  ['Aster','Microtubules radiating from each centrosome during cell division.'],
  ['Spindle fibres','Microtubules that attach to kinetochores and move chromosomes.'],
  ['Mitotic apparatus','The two asters together with the spindle fibres.'],
  ['Metaphase plate','The plane at the spindle equator on which chromosomes align in metaphase.'],
  ['Cell plate','Precursor of the new cell wall in plant cytokinesis; represents the middle lamella.'],
  ['Syncytium','A multinucleate condition formed when karyokinesis is not followed by cytokinesis, e.g. coconut liquid endosperm.'],
  ['Nucleo-cytoplasmic ratio','The ratio of the volume of the nucleus to the volume of the cytoplasm of a cell.'],
  ['Meiosis','Reductional division that halves the chromosome number and forms four haploid cells.'],
  ['Reductional division','A division that reduces the chromosome number by half (meiosis I).'],
  ['Homologous chromosomes','A pair of chromosomes, one from each parent, that pair during meiosis.'],
  ['Leptotene','First sub-stage of prophase I: chromosomes become visible and compact.'],
  ['Zygotene','Second sub-stage of prophase I: homologous chromosomes pair (synapsis).'],
  ['Synapsis','The pairing of homologous chromosomes during zygotene.'],
  ['Synaptonemal complex','The complex structure formed between synapsed homologous chromosomes.'],
  ['Bivalent','A pair of synapsed homologous chromosomes; also called a tetrad (4 chromatids).'],
  ['Pachytene','Third sub-stage of prophase I: crossing over occurs at recombination nodules.'],
  ['Crossing over','Exchange of genetic material between non-sister chromatids of homologous chromosomes.'],
  ['Recombinase','The enzyme that mediates crossing over.'],
  ['Diplotene','Fourth sub-stage of prophase I: synaptonemal complex dissolves and chiasmata appear.'],
  ['Chiasmata','X-shaped points where homologous chromosomes remain joined after crossing over.'],
  ['Diakinesis','Last sub-stage of prophase I: terminalisation of chiasmata; transition to metaphase I.'],
  ['Interkinesis','The short stage between meiosis I and meiosis II with no DNA replication.'],
  ['Dyad','The two cells formed at the end of meiosis I.'],
  ['Tetrad of cells','The four haploid cells formed at the end of meiosis II.']
];

const tree = [
  {kingdom:'Cell Cycle: Meaning, Duration & Phases', groups:[
    {name:'Definition', detail:'Duplicate genome &rarr; synthesise constituents &rarr; divide into <b>two daughter cells</b>; under genetic control.'},
    {name:'Duration', detail:'<b>Human cell</b> ~24 h; <b>yeast</b> ~90 min.'},
    {name:'Interphase', detail:'Preparation; <b>&gt;95%</b> of the cycle; G<sub>1</sub>, S, G<sub>2</sub>.'},
    {name:'M phase', detail:'<b>Karyokinesis</b> (P, M, A, T) + <b>cytokinesis</b>; ~1 h in human cells.'}]},
  {kingdom:'Interphase: G1, S, G2 & G0', groups:[
    {name:'G1', detail:'Growth; metabolically active; <b>no DNA replication</b>.'},
    {name:'S', detail:'DNA <b>2C &rarr; 4C</b>; chromosome number stays <b>2n</b>; centriole duplicates (animal cells).'},
    {name:'G2', detail:'Proteins for mitosis synthesised; growth continues.'},
    {name:'G0', detail:'<b>Quiescent</b>: exit from G<sub>1</sub>; active but non-dividing (e.g. heart cells).'}]},
  {kingdom:'Mitosis: Prophase & Metaphase', groups:[
    {name:'Equational division', detail:'Same chromosome number; Strasburger (1870, plants), Flemming (1879, animals; coined term).'},
    {name:'Prophase', detail:'Condensation begins; centrosomes to poles; asters + spindle = <b>mitotic apparatus</b>; Golgi, ER, nucleolus, envelope vanish.'},
    {name:'Metaphase', detail:'Envelope fully gone; condensation complete; <b>best stage to study chromosomes</b>.'},
    {name:'Kinetochore & plate', detail:'Discs on centromeres attach fibres; chromosomes align on the <b>metaphase plate</b>.'}]},
  {kingdom:'Mitosis: Anaphase & Telophase', groups:[
    {name:'Anaphase', detail:'<b>Centromeres split</b>; chromatids move to opposite poles.'},
    {name:'Movement', detail:'<b>Centromere leads</b>, arms trail (V/J/rod shapes).'},
    {name:'Telophase', detail:'Chromosomes decondense; lose individuality; chromatin at poles.'},
    {name:'Reformation', detail:'Nuclear envelope, nucleolus, Golgi, ER reform &rarr; <b>two daughter nuclei</b>.'}]},
  {kingdom:'Cytokinesis & Significance of Mitosis', groups:[
    {name:'Animal cytokinesis', detail:'<b>Furrow</b> deepens and joins in the centre (centripetal).'},
    {name:'Plant cytokinesis', detail:'<b>Cell plate</b> (middle lamella) from centre outwards (centrifugal).'},
    {name:'Syncytium', detail:'Karyokinesis without cytokinesis; e.g. <b>coconut liquid endosperm</b>.'},
    {name:'Significance', detail:'Growth, repair, nucleo-cytoplasmic ratio, meristem growth, vegetative reproduction.'}]},
  {kingdom:'Meiosis & Prophase I', groups:[
    {name:'Meiosis', detail:'<b>Reductional</b>; two divisions, one DNA replication; four haploid cells.'},
    {name:'Leptotene & Zygotene', detail:'Chromosomes visible; <b>synapsis</b> &amp; <b>synaptonemal complex</b>; bivalent/tetrad.'},
    {name:'Pachytene', detail:'Recombination nodules; <b>crossing over</b> between non-sister chromatids by <b>recombinase</b>.'},
    {name:'Diplotene & Diakinesis', detail:'<b>Chiasmata</b> visible; then <b>terminalisation</b>; spindle forms; envelope breaks.'}]},
  {kingdom:'Meiosis I: Metaphase I to Interkinesis', groups:[
    {name:'Metaphase I', detail:'<b>Bivalents</b> align on the equatorial plate.'},
    {name:'Anaphase I', detail:'<b>Homologues separate</b>; sister chromatids stay joined.'},
    {name:'Telophase I', detail:'Envelope &amp; nucleolus reappear; cytokinesis &rarr; <b>dyad</b>.'},
    {name:'Interkinesis', detail:'Short; <b>no DNA replication</b>; followed by prophase II.'}]},
  {kingdom:'Meiosis II & Significance of Meiosis', groups:[
    {name:'Prophase II & Metaphase II', detail:'Chromosomes compact; fibres attach to kinetochores of sister chromatids.'},
    {name:'Anaphase II', detail:'<b>Centromeres split</b>; chromatids to opposite poles.'},
    {name:'Telophase II', detail:'Envelope reforms; cytokinesis &rarr; <b>tetrad</b> of four haploid cells.'},
    {name:'Significance', detail:'Conserves chromosome number; <b>variation</b> by crossing over; raw material for evolution.'}]}
];

/* Compare Matrix rows: name, organ (category), purpose, structuralChange, keyFeature, example */
const compare = [
  {name:'G1 phase', organ:'Interphase sub-phase', purpose:'Cell growth', structuralChange:'No DNA replication; DNA 2C', keyFeature:'Between end of mitosis and start of S', example:'Cells may exit to G0 from here'},
  {name:'S phase', organ:'Interphase sub-phase', purpose:'DNA replication', structuralChange:'DNA 2C &rarr; 4C; chromosomes stay 2n', keyFeature:'Centriole duplicates (animal cells)', example:'Each chromosome gets 2 sister chromatids'},
  {name:'G2 phase', organ:'Interphase sub-phase', purpose:'Preparation for mitosis', structuralChange:'DNA 4C; growth continues', keyFeature:'Proteins for mitosis synthesised', example:'Leads into prophase'},
  {name:'G0 phase', organ:'Quiescent stage', purpose:'Non-dividing state', structuralChange:'Exit from G1', keyFeature:'Metabolically active, no proliferation', example:'Adult heart cells'},
  {name:'Prophase', organ:'Mitotic stage', purpose:'Condense chromosomes; build spindle', structuralChange:'Chromatin condenses; organelles vanish', keyFeature:'Centrosomes move to poles; asters form', example:'Two chromatids per chromosome visible'},
  {name:'Metaphase', organ:'Mitotic stage', purpose:'Align chromosomes', structuralChange:'Nuclear envelope gone; condensation complete', keyFeature:'Kinetochores attach; metaphase plate', example:'Best stage to count chromosomes'},
  {name:'Anaphase', organ:'Mitotic stage', purpose:'Separate chromatids', structuralChange:'Centromeres split', keyFeature:'Centromere leads, arms trail', example:'V- or J-shaped chromosomes'},
  {name:'Telophase', organ:'Mitotic stage', purpose:'Rebuild nuclei', structuralChange:'Chromosomes decondense', keyFeature:'Envelope, nucleolus, Golgi, ER reform', example:'Two daughter nuclei'},
  {name:'Animal cytokinesis', organ:'Cytoplasm division', purpose:'Separate daughter cells', structuralChange:'Furrow in plasma membrane', keyFeature:'Centripetal (outside in)', example:'Animal cells'},
  {name:'Plant cytokinesis', organ:'Cytoplasm division', purpose:'Separate daughter cells', structuralChange:'Cell plate = middle lamella', keyFeature:'Centrifugal (centre out)', example:'Onion root tip cells'},
  {name:'Pachytene', organ:'Prophase I sub-stage', purpose:'Recombination', structuralChange:'Tetrads clearly visible', keyFeature:'Crossing over by recombinase at recombination nodules', example:'Source of genetic variation'},
  {name:'Diplotene', organ:'Prophase I sub-stage', purpose:'Separation of homologues begins', structuralChange:'Synaptonemal complex dissolves', keyFeature:'X-shaped chiasmata', example:'Can last years in vertebrate oocytes'},
  {name:'Meiosis I', organ:'First meiotic division', purpose:'Halve chromosome number', structuralChange:'Homologues separate (2n &rarr; n)', keyFeature:'Reductional; synapsis &amp; crossing over', example:'Ends with a dyad'},
  {name:'Meiosis II', organ:'Second meiotic division', purpose:'Separate sister chromatids', structuralChange:'Centromeres split (n &rarr; n)', keyFeature:'Equational; resembles mitosis', example:'Ends with a tetrad of 4 haploid cells'},
  {name:'Mitosis', organ:'Type of cell division', purpose:'Growth, repair, vegetative reproduction', structuralChange:'2n &rarr; 2n', keyFeature:'2 identical diploid cells; no crossing over', example:'Root tip, skin, blood cells'},
  {name:'Meiosis', organ:'Type of cell division', purpose:'Gamete formation and variation', structuralChange:'2n &rarr; n', keyFeature:'4 haploid varied cells; crossing over', example:'Anther (pollen), ovary, testis'}
];

const tips = {
  title:'Study Tips &ndash; Cell Cycle and Cell Division',
  intro:'How to study this chapter well, and what to focus on for NEET and KCET.',
  theoryHead:'📘 Theory &mdash; How to Study This Chapter',
  neetHead:'🎯 NEET Strategy for This Chapter',
  theory:[
    'Draw the cell cycle once as a clock: G<sub>1</sub> &rarr; S &rarr; G<sub>2</sub> &rarr; M, with G<sub>0</sub> as a side exit from G<sub>1</sub>. Write one event per sector. Almost every 1-mark question comes from this one picture.',
    'Learn mitosis as a story told by the chromosome: <b>condense</b> (prophase) &rarr; <b>line up</b> (metaphase) &rarr; <b>split</b> (anaphase) &rarr; <b>relax</b> (telophase). Then add the organelles: envelope, nucleolus, Golgi and ER disappear in prophase and come back in telophase.',
    'Track two numbers through every stage: <b>chromosome number</b> and <b>DNA content</b>. 2n/2C (G<sub>1</sub>) &rarr; 2n/4C (G<sub>2</sub>) &rarr; 2n/2C (after mitosis) or n/2C (after meiosis I) &rarr; n/C (after meiosis II).',
    'Prophase I has five sub-stages; tie each to one keyword: Leptotene &ndash; <b>visible</b>, Zygotene &ndash; <b>synapsis</b>, Pachytene &ndash; <b>crossing over</b>, Diplotene &ndash; <b>chiasmata</b>, Diakinesis &ndash; <b>terminalisation</b>. Memory aid: &ldquo;Lazy Zebras Play During Day&rdquo;.',
    'Always compare in pairs: plant vs animal cytokinesis, mitotic anaphase vs anaphase I, meiosis I vs meiosis II, mitosis vs meiosis. Board 3-mark and 5-mark questions are mostly comparisons and labelled diagrams.'
  ],
  neet:[
    'Expect at least one numerical: chromosomes, chromatids or DNA at a given stage, or the number of meioses needed for a given number of pollen grains or seeds (pollen &divide; 4; seed = pollen meioses + egg meioses).',
    'Watch the classic traps: S phase doubles DNA, <b>not</b> chromosome number; kinetochores sit on <b>centromeres</b>, not centrioles; centromeres do <b>not</b> split in anaphase I; there is <b>no</b> DNA replication in interkinesis.',
    'Statement-type questions love exact NCERT lines: 24 hours (human), 90 minutes (yeast), &gt;95% interphase, diplotene lasting months or years in oocytes, cell plate = middle lamella, coconut endosperm = syncytium.',
    'Match-the-column questions usually pair the five prophase I sub-stages with events, or the four mitotic stages with events &mdash; make a 5-row and a 4-row flash table and test yourself daily.'
  ]
};

/* Important diagrams with our own drawn images (pu1-ch10-assets/diag-*.jpg) */
const diagrams = [
  {key:'tier1', fig:'Cell Cycle &mdash; Phases (G<sub>1</sub>, S, G<sub>2</sub>, M &amp; G<sub>0</sub>)', marks:'3 M', pr:'high', prLabel:'★★★ Must Learn', labels:'Interphase, G<sub>1</sub> phase, S phase, G<sub>2</sub> phase, M phase, G<sub>0</sub> (quiescent) exit from G<sub>1</sub>, Karyokinesis, Cytokinesis', src:'diag-cell-cycle.jpg'},
  {key:'tier1', fig:'Stages of Mitosis in an Animal Cell', marks:'5 M', pr:'high', prLabel:'★★★ Must Learn', labels:'Centriole, Aster, Spindle fibres, Chromosome, Centromere, Kinetochore, Metaphase plate, Daughter chromosomes, Nuclear envelope, Nucleolus', src:'diag-mitosis.jpg'},
  {key:'tier1', fig:'Sub-stages of Prophase I (Leptotene to Diakinesis)', marks:'5 M', pr:'high', prLabel:'★★★ Must Learn', labels:'Homologous chromosomes, Synapsis, Synaptonemal complex, Bivalent (tetrad), Recombination nodule, Crossing over, Chiasmata, Terminalisation', src:'diag-prophase1.jpg'},
  {key:'tier2', fig:'Stages of Meiosis I', marks:'3/5 M', pr:'med', prLabel:'★★☆ High Probability', labels:'Bivalents on equatorial plate (Metaphase I), Homologues moving apart (Anaphase I), Dyad (Telophase I), Spindle fibres', src:'diag-meiosis1.jpg'},
  {key:'tier2', fig:'Stages of Meiosis II', marks:'3/5 M', pr:'med', prLabel:'★★☆ High Probability', labels:'Prophase II, Metaphase II (chromosomes at equator), Anaphase II (chromatids separate), Telophase II (tetrad of four haploid cells)', src:'diag-meiosis2.jpg'},
  {key:'tier2', fig:'Cytokinesis in Animal and Plant Cells', marks:'3 M', pr:'med', prLabel:'★★☆ High Probability', labels:'Cleavage furrow, Daughter nuclei, Cell plate, Middle lamella, Existing lateral wall', src:'diag-cytokinesis.jpg'},
  {key:'tier3', fig:'Metaphase Chromosome &amp; Kinetochore', marks:'2 M', pr:'mod', prLabel:'★☆☆ Key Structure', labels:'Sister chromatids, Centromere, Kinetochore, Spindle fibre (from opposite poles)', src:'diag-chromosome.jpg'},
  {key:'tier3', fig:'Mitosis vs Meiosis (Outcome)', marks:'3 M', pr:'mod', prLabel:'★☆☆ Key Comparison', labels:'Parent 2n cell, Two 2n identical cells (mitosis), Four n varied cells (meiosis), Crossing over', src:'diag-mitosis-vs-meiosis.jpg'}
];
const diagramSections = [{key:'tier1',title:'Tier 1 — Highest Priority (5M/3M)'},{key:'tier2',title:'Tier 2 — High Probability'},{key:'tier3',title:'Tier 3 — Key Structures & Comparisons'}];

module.exports = {kcet, desc, board, glossary, tree, compare, tips, diagrams, diagramSections};
