# Topic plan for the free worksheets (worksheets.html), one entry per chapter of the PU Question Bank
# (board-question-assignment-builder.html: chapters 1-19 = I PUC, 20-32 = II PUC Ch1-13).
# Each topic: (name, keywords, diagrams). A question goes to the topic whose keywords it matches best
# (a keyword matches the start of a word, case-insensitive). diagrams = NCERT figures to practise in that topic.

T = {}

T[1] = [
  ("Diversity & Nomenclature", ["diversity", "biodiversity", "nomenclature", "binomial", "scientific name", "linnaeus", "icbn", "iczn", "identification", "systema", "solanum", "mangifera", "italic", "underline", "naming"],
   ["Write the scientific names of mango, potato (Solanum tuberosum) and man correctly, and mark the genus and species epithet in each."]),
  ("Taxonomy & Systematics", ["taxonomy", "taxonomic", "systematics", "classification", "characterisation", "characterization", "description", "taxonomist"],
   []),
  ("Taxonomic Categories & Hierarchy", ["category", "categories", "hierarchy", "taxon", "taxa", "species", "genus", "family", "order", "class", "phylum", "division", "kingdom", "rank"],
   ["Draw a chart of the taxonomic hierarchy from kingdom to species, and fill it in for wheat or housefly."]),
]

T[2] = [
  ("Five-Kingdom Classification", ["whittaker", "five kingdom", "five-kingdom", "two kingdom", "two-kingdom", "classification system", "linnaeus", "criteria"],
   ["Draw a table of the five kingdoms showing cell type, cell wall, nuclear membrane, body organisation and mode of nutrition."]),
  ("Kingdom Monera (Bacteria)", ["monera", "bacteri", "archae", "cyanobacteri", "eubacteri", "mycoplasma", "heterocyst", "chemosynthetic", "methanogen", "halophile", "thermoacidophile", "nostoc", "anabaena"],
   ["Draw the different shapes of bacteria (coccus, bacillus, vibrio, spirillum) and name each."]),
  ("Kingdom Protista", ["protist", "diatom", "dinoflagellate", "euglen", "slime mould", "slime mold", "protozoa", "plasmodium", "amoeba", "paramoecium", "paramecium", "trypanosoma", "chrysophyte", "gonyaulax", "desmid", "red tide", "diatomaceous"],
   ["Draw Euglena and Paramoecium and label their main parts."]),
  ("Kingdom Fungi", ["fung", "yeast", "mycelium", "hypha", "phycomycete", "ascomycete", "basidiomycete", "deuteromycete", "mushroom", "rhizopus", "mucor", "albugo", "penicillium", "puccinia", "ustilago", "agaricus", "aspergillus", "claviceps", "neurospora", "alternaria", "trichoderma", "colletotrichum", "conidi", "ascospore", "basidiospore", "dikaryo", "coenocytic", "saprophyt"],
   ["Draw the fungi Mucor, Aspergillus and Agaricus and label their parts."]),
  ("Plantae, Animalia, Viruses, Viroids & Lichens", ["plantae", "animalia", "virus", "viroid", "prion", "lichen", "bacteriophage", "tmv", "capsid", "mycobiont", "phycobiont", "ivanowsky", "stanley", "beijerin", "diener"],
   ["Draw the structure of a bacteriophage and label its parts.", "Draw the tobacco mosaic virus (TMV) and label the RNA and the capsid."]),
]

T[3] = [
  ("Algae", ["alga", "chlorophyceae", "phaeophyceae", "rhodophyceae", "chlamydomonas", "volvox", "ulothrix", "spirogyra", "chara", "fucus", "laminaria", "sargassum", "ectocarpus", "dictyota", "polysiphonia", "porphyra", "gracilaria", "gelidium", "chlorella", "agar", "carrageen", "algin", "phycoerythrin", "fucoxanthin", "floridean", "laminarin", "isogam", "anisogam", "oogam", "mannitol", "pyrenoid", "brown", "red algae", "green algae"],
   ["Draw any two algae (Volvox, Ulothrix, Laminaria or Fucus) and label them."]),
  ("Bryophytes", ["bryophyt", "liverwort", "moss", "marchantia", "funaria", "sphagnum", "polytrichum", "gemma", "protonema", "amphibians of", "rhizoid", "peat", "capsule", "foot, seta"],
   ["Draw Marchantia (female thallus) and Funaria (gametophyte with sporophyte) and label them."]),
  ("Pteridophytes", ["pteridophyt", "fern", "selaginella", "equisetum", "lycopodium", "psilotum", "salvinia", "dryopteris", "pteris", "adiantum", "sporophyll", "strobil", "heterospor", "homospor", "prothallus", "vascular cryptogam"],
   ["Draw Selaginella or a fern (Dryopteris) and label the sporophyte parts."]),
  ("Gymnosperms", ["gymnosperm", "cycas", "pinus", "ginkgo", "cedrus", "sequoia", "coralloid", "mycorrhiza", "needle", "naked seed", "cone", "megasporophyll", "microsporophyll"],
   ["Draw Cycas and Pinus showing their main parts."]),
  ("Angiosperms & Life Cycles", ["angiosperm", "flowering plant", "haplontic", "diplontic", "haplo-diplontic", "life cycle", "alternation of generation", "double fertili", "triple fusion", "monocot", "dicot"],
   ["Draw the three life-cycle patterns: haplontic, diplontic and haplo-diplontic."]),
]

T[4] = [
  ("Basis of Classification", ["basis of classification", "level of organi", "symmetry", "symmetr", "diploblastic", "triploblastic", "coelom", "pseudocoelom", "acoelomate", "segmentation", "metamer", "cellular level", "tissue level", "organ level", "organ-system", "germ layer", "radial", "bilateral", "notochord"],
   ["Draw diagrams showing (a) radial and (b) bilateral symmetry.", "Draw diagrammatic sections of (a) coelomate, (b) pseudocoelomate and (c) acoelomate animals."]),
  ("Porifera, Cnidaria & Ctenophora", ["porifera", "sponge", "sycon", "spongilla", "euspongia", "ostia", "osculum", "choanocyte", "spongocoel", "cnidaria", "coelenterat", "hydra", "obelia", "physalia", "adamsia", "aurelia", "gorgonia", "meandrina", "pennatula", "cnidoblast", "polyp", "medusa", "metagenesis", "ctenophor", "comb plate", "pleurobrachia", "ctenoplana", "bioluminescence", "sea anemone", "coral", "mesogloea", "canal system"],
   ["Draw Aurelia (medusa) and Adamsia (polyp) and label them."]),
  ("Platyhelminthes, Aschelminthes & Annelida", ["platyhelminth", "flatworm", "tapeworm", "taenia", "fasciola", "liver fluke", "planaria", "flame cell", "aschelminth", "roundworm", "ascaris", "wuchereria", "ancylostoma", "annelid", "earthworm", "pheretima", "nereis", "hirudinaria", "leech", "nephridia", "parapodia"],
   ["Draw a male and a female Ascaris (roundworm)."]),
  ("Arthropoda, Mollusca, Echinodermata & Hemichordata", ["arthropod", "insect", "cockroach", "locust", "honeybee", "silkworm", "lac insect", "mosquito", "butterfly", "scorpion", "prawn", "limulus", "malpighian", "mollusc", "pila", "octopus", "sepia", "loligo", "radula", "pinctada", "dentalium", "aplysia", "chaetopleura", "echinoderm", "starfish", "asterias", "sea urchin", "echinus", "antedon", "cucumaria", "ophiura", "water vascular", "hemichordat", "balanoglossus", "saccoglossus", "proboscis gland", "jointed"],
   ["Draw any two: Pila, Octopus, Asterias (starfish), Balanoglossus."]),
  ("Chordata & Vertebrates", ["chordat", "urochordat", "cephalochordat", "vertebrat", "cyclostom", "petromyzon", "myxine", "chondrichthyes", "osteichthyes", "shark", "scoliodon", "fish", "amphibia", "frog", "toad", "salamander", "reptil", "snake", "lizard", "turtle", "crocodile", "aves", "bird", "pigeon", "mammal", "platypus", "kangaroo", "whale", "bat", "ostrich", "pneumatic", "air bladder", "placoid", "mammary", "pinna", "warm-blooded", "cold-blooded", "poikilotherm", "homoiotherm", "homeotherm", "gill slit", "cloaca"],
   ["Draw a diagram showing the fundamental features of a chordate (notochord, dorsal nerve cord, gill slits, post-anal tail)."]),
]

T[5] = [
  ("The Root", ["root", "tap root", "fibrous", "adventitious", "root cap", "elongation", "maturation", "meristematic activity", "root hair", "pneumatophore", "prop root", "stilt", "rhizophora", "banyan"],
   ["Draw the regions of a root tip and label them.", "Draw diagrams of tap root and fibrous root systems."]),
  ("The Stem", ["stem", "node", "internode", "tendril", "thorn", "rhizome", "tuber", "corm", "bulb", "runner", "stolon", "offset", "sucker", "phylloclade", "opuntia", "potato", "ginger"],
   ["Draw any two stem modifications (tendril, thorn, phylloclade, rhizome) and label them."]),
  ("The Leaf", ["leaf", "leaves", "venation", "reticulate", "phyllotaxy", "alternate", "opposite", "whorled", "compound", "pinnate", "palmate", "lamina", "petiole", "stipule", "leaf base", "pulvinus"],
   ["Draw the parts of a leaf.", "Draw pinnately and palmately compound leaves."]),
  ("Inflorescence & the Flower", ["inflorescence", "racemose", "cymose", "flower", "actinomorphic", "zygomorphic", "hypogynous", "perigynous", "epigynous", "calyx", "corolla", "aestivation", "valvate", "twisted", "imbricate", "vexillary", "androecium", "gynoecium", "epipetalous", "epiphyllous", "placentation", "axile", "parietal", "free central", "sepal", "petal", "stamen", "carpel", "ovary", "bract", "thalamus", "staminode"],
   ["Draw the types of aestivation in corolla: valvate, twisted, imbricate and vexillary.", "Draw the types of placentation: marginal, axile, parietal, free central and basal."]),
  ("Fruit, Seed & Families", ["fruit", "seed", "endosperm", "embryo", "cotyledon", "scutellum", "coleoptile", "coleorhiza", "hilum", "micropyle", "testa", "aleurone", "pericarp", "parthenocarp", "drupe", "fabaceae", "solanaceae", "liliaceae", "floral formula", "floral diagram", "family"],
   ["Draw the structure of a dicotyledonous seed (bean) and label it.", "Draw the L.S. of a monocot seed (maize grain) and label it.", "Draw the floral diagram of Solanaceae (or Fabaceae) and write its floral formula."]),
]

T[6] = [
  ("Plant Tissues: Meristematic & Permanent", ["meristem", "apical", "intercalary", "lateral meristem", "parenchyma", "collenchyma", "sclerenchyma", "fibre", "fiber", "sclereid", "simple tissue", "permanent tissue", "xylem", "phloem", "tracheid", "vessel", "sieve", "companion cell", "complex tissue", "protoxylem", "metaxylem", "endarch", "exarch", "phloem fibre"],
   ["Draw the apical meristem of (a) the root and (b) the shoot.", "Draw the T.S. of phloem tissue showing sieve tube, companion cell and phloem parenchyma."]),
  ("Tissue Systems", ["tissue system", "epidermal tissue", "epidermis", "stomat", "guard cell", "subsidiary", "trichome", "cuticle", "ground tissue", "vascular tissue system", "conjoint", "radial", "open vascular", "closed vascular", "vascular bundle"],
   ["Draw diagrams of stomata with (a) bean-shaped and (b) dumb-bell-shaped guard cells.", "Draw the types of vascular bundles: radial, conjoint closed and conjoint open."]),
  ("Anatomy of Root, Stem & Leaf", ["dicot root", "monocot root", "dicotyledonous root", "monocotyledonous root", "dicot stem", "monocot stem", "dicotyledonous stem", "monocotyledonous stem", "dorsiventral", "isobilateral", "bundle sheath", "pericycle", "endodermis", "casparian", "hypodermis", "cortex", "pith", "medullary", "bulliform", "mesophyll", "palisade", "spongy", "anatomy"],
   ["Draw the T.S. of a dicot root and label it.", "Draw the T.S. of a dicot stem and label it.", "Draw the T.S. of a monocot stem and label it.", "Draw the T.S. of a dorsiventral (dicot) leaf and label it."]),
  ("Secondary Growth", ["secondary growth", "vascular cambium", "cork cambium", "phellogen", "phellem", "phelloderm", "periderm", "bark", "lenticel", "annual ring", "heartwood", "sapwood", "spring wood", "autumn wood", "early wood", "late wood", "interfascicular", "duramen", "alburnum"],
   ["Draw the stages of secondary growth in a dicot stem (diagrammatic)."]),
]

T[7] = [
  ("Frog: Habitat & Morphology", ["rana", "poikilotherm", "cold blooded", "camouflage", "mimicry", "hibernation", "aestivation", "skin", "morpholog", "nictitating", "tympanum", "web", "digit", "sexual dimorphism", "vocal sac", "copulatory", "male frog", "female frog", "external feature", "benefit", "ecological"],
   ["Draw the external features of a frog and label them."]),
  ("Digestive & Respiratory Systems", ["digestive", "digestion", "alimentary", "stomach", "intestine", "duodenum", "liver", "bile", "gall bladder", "pancreas", "chyme", "cloaca", "buccal", "cutaneous", "pulmonary", "respiration", "lungs", "carnivor"],
   ["Draw the digestive system of a frog and label it."]),
  ("Circulatory & Excretory Systems", ["circulat", "vascular system", "heart", "sinus venosus", "atrium", "ventricle", "conus", "blood", "lymph", "portal", "excret", "kidney", "urea", "ureotelic", "ureter", "bladder"],
   ["Draw the heart of a frog (ventral view) showing sinus venosus, atria and ventricle."]),
  ("Nervous, Sensory & Endocrine Systems", ["nervous", "neural", "brain", "cranial", "medulla", "foramen magnum", "spinal cord", "optic lobe", "olfactory", "cerebral", "sense organ", "sensory", "eye", "ear", "endocrine", "thyroid", "pituitary", "adrenal", "brain box"],
   []),
  ("Reproductive System & Development", ["reproduct", "testis", "testes", "ovary", "ovaries", "sperm", "ova", "vasa efferentia", "mesorchium", "mesovarium", "fertilisation", "fertilization", "tadpole", "metamorphosis", "development"],
   ["Draw the male reproductive system of a frog and label it.", "Draw the female reproductive system of a frog and label it."]),
]

T[8] = [
  ("Cell Theory & Prokaryotic Cells", ["cell theory", "schleiden", "schwann", "virchow", "omnis", "unit of life", "overview", "cell size", "largest cell", "smallest cell", "shape", "prokaryot", "bacterial cell", "cell envelope", "glycocalyx", "mesosome", "plasmid", "nucleoid", "pili", "fimbriae", "gram", "chromatophore", "inclusion bod", "70s", "70 s", "slime layer", "capsule"],
   ["Draw a typical prokaryotic (bacterial) cell and label it.", "Draw cells of different shapes and sizes: RBC, WBC, columnar epithelium, nerve cell and mesophyll cell."]),
  ("Membrane, Wall & Endomembrane System", ["plasma membrane", "cell membrane", "fluid mosaic", "singer", "nicolson", "lipid bilayer", "cell wall", "middle lamella", "plasmodesmata", "endomembrane", "endoplasmic", "rer", "ser", "golgi", "lysosome", "vacuole", "tonoplast", "cisternae", "eukaryot", "animal cell", "plant cell"],
   ["Draw the fluid mosaic model of the plasma membrane and label it.", "Draw a typical plant cell and label it.", "Draw a typical animal cell and label it.", "Draw the Golgi apparatus and label it."]),
  ("Mitochondria, Plastids, Ribosomes & Cilia", ["mitochondri", "cristae", "plastid", "chloroplast", "chromoplast", "leucoplast", "amyloplast", "elaioplast", "aleuroplast", "grana", "thylakoid", "stroma", "ribosome", "80s", "80 s", "polysome", "cytoskeleton", "cilia", "cilium", "flagell", "axoneme", "9+2", "centrosome", "centriole", "basal body", "microtubule", "microbod"],
   ["Draw the sectional view of a mitochondrion and label it.", "Draw the sectional view of a chloroplast and label it.", "Draw the cross-section of a cilium/flagellum showing the 9+2 arrangement."]),
  ("Nucleus & Chromosomes", ["nucleus", "nuclei", "nuclear envelope", "nuclear pore", "nucleolus", "chromatin", "chromosome", "centromere", "kinetochore", "metacentric", "submetacentric", "sub-metacentric", "acrocentric", "telocentric", "satellite"],
   ["Draw the structure of the nucleus and label it.", "Draw the types of chromosomes based on the position of the centromere."]),
]

T[9] = [
  ("Analysing Chemical Composition", ["chemical composition", "acid soluble", "acid-soluble", "acid insoluble", "retentate", "filtrate", "ash", "elemental", "trichloroacetic", "metabolite", "primary metabolite", "secondary metabolite"],
   ["Draw a flow chart showing how the acid-soluble and acid-insoluble fractions of a tissue are obtained."]),
  ("Amino Acids, Lipids & Nucleotides", ["amino acid", "zwitterion", "fatty acid", "glycerol", "lipid", "phospholipid", "lecithin", "triglyceride", "nucleotide", "nucleoside", "nitrogen base", "nitrogenous base", "purine", "pyrimidine", "adenine", "guanine", "cytosine", "uracil", "thymine", "cholesterol", "palmitic", "arachidonic"],
   ["Draw the general structure of an amino acid and name its four substituent groups.", "Draw the structures of a fatty acid, glycerol and a triglyceride."]),
  ("Proteins, Polysaccharides & Nucleic Acids", ["protein", "primary structure", "secondary structure", "tertiary", "quaternary", "peptide bond", "polypeptide", "collagen", "rubisco", "haemoglobin", "hemoglobin", "polysaccharide", "cellulose", "starch", "glycogen", "inulin", "chitin", "glycosidic", "reducing end", "polymer", "biomacromolecule", "nucleic acid", "dna", "rna", "phosphodiester", "double helix", "watson"],
   ["Draw a diagram showing the primary, secondary, tertiary and quaternary structure of a protein.", "Draw a diagram of a portion of glycogen showing branches and the reducing end."]),
  ("Enzymes", ["enzyme", "catalys", "active site", "substrate", "activation energy", "michaelis", "km", "inhibit", "competitive", "cofactor", "coenzyme", "co-enzyme", "prosthetic", "apoenzyme", "holoenzyme", "oxidoreductase", "transferase", "hydrolase", "lyase", "isomerase", "ligase", "temperature", "optimum", "ribozyme", "malonate", "succinic"],
   ["Draw a graph showing the concept of activation energy (with and without an enzyme).", "Draw graphs showing the effect of pH, temperature and substrate concentration on enzyme activity."]),
]

T[10] = [
  ("The Cell Cycle", ["cell cycle", "interphase", "g1", "g2", "s phase", "s-phase", "g0", "quiescent", "duration", "synthesis phase", "resting phase", "phases of cell cycle"],
   ["Draw a diagrammatic view of the cell cycle showing the M phase and interphase (G1, S, G2)."]),
  ("Mitosis", ["mitosis", "mitotic", "prophase", "metaphase", "anaphase", "telophase", "karyokinesis", "cytokinesis", "cell plate", "metaphase plate", "spindle", "equational", "furrow"],
   ["Draw the stages of mitosis (prophase, metaphase, anaphase, telophase) in an animal cell."]),
  ("Meiosis & Its Significance", ["meiosis", "meiotic", "leptotene", "zygotene", "pachytene", "diplotene", "diakinesis", "synaptonemal", "bivalent", "tetrad", "crossing over", "chiasma", "recombination", "synapsis", "terminali", "interkinesis", "reductional", "significance", "haploid", "diploid"],
   ["Draw the stages of meiosis I.", "Draw the stages of meiosis II."]),
]

T[11] = [
  ("Early Experiments & the Site", ["priestley", "ingenhousz", "sachs", "engelmann", "van niel", "julius", "experiment", "half-leaf", "half leaf", "cladophora", "bell jar", "chloroplast", "grana", "stroma lamellae", "where does", "site of", "equation"],
   ["Draw Priestley's experiment (candle and mouse in bell jars, with and without a mint plant).", "Draw the electron micrograph view of a chloroplast and label it."]),
  ("Pigments & Light Reaction", ["pigment", "chlorophyll", "xanthophyll", "carotenoid", "chromatograph", "absorption spectrum", "action spectrum", "light harvesting", "antenna", "reaction cent", "p680", "p700", "ps i", "ps ii", "psi", "psii", "photosystem", "light reaction", "photochemical"],
   ["Draw graphs of (a) the absorption spectrum of chlorophyll a, b and carotenoids and (b) the action spectrum of photosynthesis."]),
  ("Electron Transport & Photophosphorylation", ["z scheme", "z-scheme", "photolysis", "splitting of water", "cyclic", "non-cyclic", "photophosphorylation", "chemiosmo", "proton gradient", "atp synthase", "cf0", "cf1", "plastoquinone", "cytochrome", "electron transport"],
   ["Draw the Z scheme of light reaction and label it.", "Draw a diagram showing ATP synthesis through chemiosmosis in the thylakoid."]),
  ("Calvin Cycle (C3 Pathway)", ["calvin", "c3", "biosynthetic", "dark reaction", "carboxylation", "rubp", "rubisco", "pga", "regeneration", "reduction", "melvin", "primary acceptor"],
   ["Draw the Calvin cycle showing carboxylation, reduction and regeneration."]),
  ("C4 Pathway, Photorespiration & Factors", ["c4", "hatch", "slack", "kranz", "pep", "oxaloacetic", "oaa", "bundle sheath", "mesophyll", "maize", "sugarcane", "photorespiration", "c2", "oxygenase", "factor", "blackman", "limiting", "light intensity", "concentration"],
   ["Draw the Hatch and Slack (C4) pathway.", "Draw the T.S. of a leaf showing Kranz anatomy."]),
]

T[12] = [
  ("Do Plants Breathe?", ["breathe", "breathing", "stomata", "lenticel", "gas exchange", "respiratory substrate", "respiration", "cellular respiration", "combustion", "aerobic", "anaerobic"],
   ["Draw the T.S. of a woody stem showing bark, lenticels and living cells under the bark."]),
  ("Glycolysis", ["glycolysis", "glycolytic", "emp", "embden", "meyerhof", "parnas", "glucose", "pyruvic", "pyruvate", "pgal", "hexokinase", "fructose", "phosphofructokinase"],
   ["Draw the steps of glycolysis, marking where ATP is used and where ATP and NADH are formed."]),
  ("Fermentation", ["fermentation", "yeast", "alcohol", "ethanol", "lactic acid", "anaerobic respiration", "muscle"],
   ["Draw the major pathways of anaerobic respiration (lactic acid and alcoholic fermentation)."]),
  ("Aerobic Respiration & Krebs' Cycle", ["kreb", "tca", "citric acid", "acetyl coa", "oxidative decarboxylation", "link reaction", "matrix", "oxaloacetic", "alpha-ketoglutaric", "succinic", "malic", "pyruvate dehydrogenase", "aerobic respiration"],
   ["Draw the citric acid (Krebs') cycle and label it."]),
  ("ETS & Oxidative Phosphorylation", ["electron transport", "ets", "oxidative phosphorylation", "inner mitochondrial", "cytochrome", "ubiquinone", "complex", "atp synthase", "f0", "f1", "oxygen", "chemiosmo"],
   ["Draw the electron transport system (ETS) in the inner mitochondrial membrane.", "Draw ATP synthase (F0-F1 particle) and label it."]),
  ("Respiratory Balance Sheet, Amphibolic Pathway & RQ", ["balance sheet", "net gain", "38", "amphibolic", "fats", "protein", "rq", "respiratory quotient", "tripalmitin", "catabol", "anabol"],
   ["Draw the interrelationship among metabolic pathways (entry of fats, carbohydrates and proteins)."]),
]

T[13] = [
  ("Growth", ["growth", "indeterminate", "open form", "arithmetic", "geometric", "sigmoid", "growth rate", "absolute", "relative", "lag", "log", "exponential", "stationary", "measure", "meristem", "elongation", "maturation", "conditions for growth"],
   ["Draw the sigmoid growth curve and mark its phases.", "Draw graphs of (a) arithmetic and (b) geometric growth."]),
  ("Differentiation & Development", ["differentiation", "dedifferentiation", "redifferentiation", "plasticity", "heterophylly", "development", "germination", "seedling"],
   ["Draw a flow chart of the sequence of development in a plant cell."]),
  ("Auxins & Gibberellins", ["plant growth regulator", "pgr", "auxin", "iaa", "iba", "naa", "2,4-d", "2, 4-d", "apical dominance", "gibberellin", "ga3", "bolting", "darwin", "went", "kurosawa", "phototrop", "coleoptile", "foolish seedling", "bakane", "weedicide", "rooting"],
   ["Draw Darwin's experiment on the coleoptile of canary grass showing bending towards light."]),
  ("Cytokinins, Ethylene & ABA", ["cytokinin", "kinetin", "zeatin", "skoog", "ethylene", "ethephon", "climacteric", "ripening", "abscisic", "aba", "dormin", "stress hormone", "abscission", "senescence", "stomatal closure", "herring"],
   []),
  ("Photoperiodism & Vernalisation", ["photoperiod", "vernali", "short day", "long day", "day neutral", "florigen", "critical"],
   []),
]

T[14] = [
  ("Respiratory Organs & Human Respiratory System", ["respiratory organ", "trachea", "bronch", "alveol", "larynx", "pharynx", "epiglottis", "glottis", "pleura", "diaphragm", "nasal", "nostril", "conducting part", "exchange part", "lung", "gills", "tracheal", "human respiratory system"],
   ["Draw the human respiratory system and label it."]),
  ("Mechanism of Breathing & Respiratory Volumes", ["inspiration", "expiration", "intercostal", "tidal", "irv", "erv", "residual", "vital capacity", "inspiratory capacity", "expiratory capacity", "functional residual", "total lung capacity", "spirometer", "breathing rate", "mechanism of breathing", "volume"],
   ["Draw the mechanism of breathing showing (a) inspiration and (b) expiration."]),
  ("Exchange & Transport of Gases", ["exchange of gases", "partial pressure", "po2", "pco2", "diffusion membrane", "oxyhaemoglobin", "oxyhemoglobin", "carbamino", "bicarbonate", "carbonic anhydrase", "dissociation curve", "sigmoid", "transport of oxygen", "transport of carbon", "haemoglobin", "hemoglobin", "solubility"],
   ["Draw the oxygen dissociation curve and label it.", "Draw a section of an alveolus with a pulmonary capillary showing the diffusion membrane."]),
  ("Regulation & Disorders", ["regulation", "rhythm centre", "rhythm center", "pneumotaxic", "medulla", "chemosensitive", "carotid", "aortic", "asthma", "emphysema", "occupational", "fibrosis", "disorder", "smoking"],
   []),
]

T[15] = [
  ("Blood, Lymph & Blood Groups", ["blood", "plasma", "formed element", "rbc", "erythrocyte", "wbc", "leucocyte", "leukocyte", "neutrophil", "eosinophil", "basophil", "lymphocyte", "monocyte", "platelet", "thrombocyte", "blood group", "abo", "rh", "erythroblastosis", "coagulation", "clotting", "thrombin", "fibrin", "thrombokinase", "lymph", "tissue fluid", "serum", "granulocyte", "agranulocyte"],
   ["Draw the types of white blood cells (neutrophil, eosinophil, basophil, lymphocyte, monocyte)."]),
  ("Circulatory Pathways & the Human Heart", ["circulatory", "open circulatory", "closed", "double circulation", "heart", "atri", "ventric", "chamber", "valve", "tricuspid", "bicuspid", "mitral", "semilunar", "semi lunar", "chordae", "san", "avn", "sino-atrial", "sinoatrial", "atrio-ventricular", "bundle of his", "purkinje", "pacemaker", "nodal", "pulmonary", "systemic", "hepatic portal", "coronary", "tunica"],
   ["Draw the sectional view of the human heart and label it.", "Draw a schematic plan of double circulation in humans."]),
  ("Cardiac Cycle & ECG", ["cardiac cycle", "systole", "diastole", "stroke volume", "cardiac output", "heart sound", "lub", "dub", "ecg", "electrocardiogram", "p-wave", "p wave", "qrs", "t-wave", "t wave", "regulation of cardiac", "heart beat", "heartbeat", "70-75", "72"],
   ["Draw a standard ECG and label the P wave, QRS complex and T wave."]),
  ("Disorders of the Circulatory System", ["hypertension", "coronary artery disease", "atherosclerosis", "angina", "heart failure", "cardiac arrest", "heart attack", "disorder", "blood pressure"],
   []),
]

T[16] = [
  ("Modes of Excretion & the Human Excretory System", ["ammonotel", "ureotel", "uricotel", "excretory", "kidney", "ureter", "urinary bladder", "urethra", "hilum", "cortex", "medulla", "renal pelvis", "calyc", "columns of bertini", "nephron", "glomerul", "bowman", "malpighian", "pct", "dct", "henle", "collecting duct", "vasa recta", "peritubular", "juxta medullary", "juxtamedullary", "cortical nephron", "protonephridia", "nephridia", "antennal", "flame cell", "renal corpuscle"],
   ["Draw the human urinary (excretory) system and label it.", "Draw the longitudinal section of a kidney and label it.", "Draw a nephron showing its blood vessels, duct and tubule."]),
  ("Urine Formation & Concentration", ["urine formation", "filtration", "ultrafiltration", "gfr", "reabsorption", "secretion", "tubular", "jga", "juxta glomerular", "juxtaglomerular", "function of the tubule", "counter current", "countercurrent", "concentration", "hyperosmotic", "osmolar", "concentrated urine"],
   ["Draw a diagram of the counter-current mechanism (loop of Henle and vasa recta)."]),
  ("Regulation of Kidney Function & Micturition", ["regulation", "adh", "vasopressin", "antidiuretic", "renin", "angiotensin", "aldosterone", "anf", "atrial natriuretic", "micturition", "diuresis", "reflex", "raas"],
   ["Draw a flow chart of the renin-angiotensin mechanism."]),
  ("Other Excretory Organs & Disorders", ["lungs", "liver", "skin", "sweat", "sebum", "sebaceous", "uremia", "uraemia", "haemodialysis", "hemodialysis", "dialysis", "renal failure", "transplant", "renal calculi", "glomerulonephritis", "glycosuria", "ketonuria", "disorder", "artificial kidney"],
   []),
]

T[17] = [
  ("Types of Movement & Muscle", ["amoeboid", "ciliary", "muscular movement", "locomotion", "movement", "types of muscle", "skeletal muscle", "visceral", "cardiac muscle", "smooth muscle", "striated", "fascia", "mesodermal"],
   []),
  ("Structure of Muscle & Muscle Contraction", ["fascicle", "sarcolemma", "sarcoplasm", "myofibril", "sarcomere", "actin", "myosin", "a band", "a-band", "i band", "i-band", "h zone", "h-zone", "z line", "z-line", "m line", "troponin", "tropomyosin", "meromyosin", "sliding filament", "cross bridge", "motor unit", "neuromuscular", "acetylcholine", "calcium", "red muscle", "white muscle", "myoglobin", "contraction", "relaxation", "fatigue", "lactic acid"],
   ["Draw the diagrammatic sectional view of a muscle showing muscle bundles and muscle fibres.", "Draw the structure of a sarcomere (myofibril) showing A band, I band, H zone and Z line.", "Draw (a) an actin (thin) filament and (b) a myosin monomer (meromyosin)."]),
  ("Skeletal System", ["skeleton", "skull", "cranial", "facial", "hyoid", "ear ossicle", "vertebral column", "vertebra", "cervical", "thoracic", "lumbar", "sacral", "coccy", "sternum", "rib", "appendicular", "pectoral", "pelvic", "girdle", "scapula", "clavicle", "humerus", "radius", "ulna", "carpal", "femur", "tibia", "fibula", "patella", "tarsal", "acetabulum", "glenoid", "axial", "bones"],
   ["Draw the vertebral column (right lateral view) and label its regions.", "Draw the right pectoral girdle and upper arm (frontal view).", "Draw the right pelvic girdle and lower limb bones (frontal view).", "Draw the ribs and rib cage."]),
  ("Joints & Disorders", ["joint", "fibrous", "cartilaginous", "synovial", "ball and socket", "hinge", "pivot", "gliding", "saddle", "myasthenia", "tetany", "muscular dystrophy", "arthritis", "osteoporosis", "gout", "disorder"],
   []),
]

T[18] = [
  ("Neural System & the Neuron", ["neural system", "nervous system", "neuron", "nerve cell", "cyton", "dendrite", "axon", "myelin", "schwann", "ranvier", "multipolar", "bipolar", "unipolar", "cns", "pns", "central neural", "peripheral", "autonomic", "somatic", "sympathetic", "parasympathetic", "afferent", "efferent", "visceral", "nissl"],
   ["Draw the structure of a neuron and label it."]),
  ("Nerve Impulse & Synapse", ["nerve impulse", "impulse", "resting potential", "action potential", "polari", "depolari", "repolari", "sodium", "potassium", "na+", "k+", "synapse", "synaptic", "electrical synapse", "chemical synapse", "neurotransmitter", "conduction", "transmission"],
   ["Draw a diagram showing impulse conduction through an axon (polarised and depolarised regions).", "Draw the axon terminal and synapse and label them."]),
  ("Central Neural System: The Brain", ["brain", "forebrain", "midbrain", "hindbrain", "cerebrum", "cerebral", "corpus callosum", "thalamus", "hypothalamus", "limbic", "cerebellum", "pons", "medulla", "corpora quadrigemina", "brain stem", "cortex", "meninges", "dura mater", "arachnoid", "pia mater", "grey matter", "gray matter", "white matter", "spinal cord", "cranial"],
   ["Draw the sagittal section of the human brain and label it."]),
  ("Reflex Action & Sense Organs", ["reflex", "eye", "retina", "lens", "rod", "cone", "fovea", "blind spot", "ear", "cochlea", "organ of corti", "ossicle", "vestibular", "sense organ", "sensory reception"],
   []),
]

T[19] = [
  ("Endocrine Glands & Hormones", ["endocrine", "hormone", "ductless", "exocrine", "chemical coordination", "chemical messenger", "non-nutrient"],
   ["Draw the location of the endocrine glands in the human body."]),
  ("Hypothalamus, Pituitary & Pineal", ["hypothalamus", "pituitary", "adenohypophysis", "neurohypophysis", "pars distalis", "pars intermedia", "growth hormone", "prolactin", "tsh", "acth", "lh", "fsh", "msh", "oxytocin", "vasopressin", "adh", "gigantism", "dwarfism", "acromegaly", "diabetes insipidus", "pineal", "melatonin", "releasing hormone", "inhibiting hormone", "sella", "somatostatin", "gnrh"],
   ["Draw the pituitary gland and its relationship with the hypothalamus."]),
  ("Thyroid, Parathyroid, Thymus & Adrenal", ["thyroid", "thyroxine", "t3", "t4", "goitre", "goiter", "cretinism", "myxoedema", "hypothyroid", "hyperthyroid", "exophthalmic", "graves", "thyrocalcitonin", "tct", "parathyroid", "pth", "hypercalcemic", "thymus", "thymosin", "adrenal", "adrenaline", "epinephrine", "norepinephrine", "catecholamine", "corticoid", "cortisol", "aldosterone", "addison", "emergency", "isthmus", "cushing"],
   ["Draw the thyroid and parathyroid glands: (a) ventral view and (b) dorsal view.", "Draw the section of an adrenal gland showing the cortex and medulla."]),
  ("Pancreas, Gonads & Other Hormones", ["pancrea", "islet", "langerhans", "insulin", "glucagon", "diabetes mellitus", "hyperglyc", "hypoglyc", "testis", "testes", "androgen", "testosterone", "ovary", "estrogen", "oestrogen", "progesterone", "anf", "atrial natriuretic", "gastrin", "secretin", "cholecystokinin", "cck", "gip", "erythropoietin", "kidney", "gastro-intestinal", "gastrointestinal", "heart"],
   []),
  ("Mechanism of Hormone Action", ["mechanism", "receptor", "membrane-bound", "membrane bound", "intracellular", "second messenger", "camp", "ip3", "peptide", "steroid", "iodothyronine", "amino acid derivative", "hormone action"],
   ["Draw the mechanism of action of (a) a protein hormone and (b) a steroid hormone."]),
]

# ---------------- II PUC (QB chapters 20-32) ----------------
T[20] = [
  ("Stamen, Microsporangium & Pollen Grain", ["stamen", "anther", "microsporangi", "tapetum", "endothecium", "sporogenous", "microsporogenesis", "microspore", "pollen grain", "exine", "intine", "sporopollenin", "germ pore", "vegetative cell", "generative cell", "pollen product", "pollen bank", "pollen viab", "pollen allerg", "dithecous", "tetrad", "parthenium"],
   ["Draw the T.S. of a young anther and an enlarged view of one microsporangium.", "Draw a mature pollen grain showing the vegetative and generative cells."]),
  ("Pistil, Ovule & Embryo Sac", ["pistil", "carpel", "ovule", "megasporangi", "nucellus", "integument", "micropyle", "chalaza", "funicle", "hilum", "megasporogenesis", "megaspore", "embryo sac", "female gametophyte", "monosporic", "synergid", "filiform", "antipodal", "egg apparatus", "polar nucle", "central cell", "7-celled", "8-nucleate", "seven celled", "eight nucleate"],
   ["Draw the L.S. of an anatropous ovule and label it.", "Draw a mature 7-celled, 8-nucleate embryo sac and label it."]),
  ("Pollination & Outbreeding Devices", ["pollination", "autogamy", "geitonogamy", "xenogamy", "chasmogam", "cleistogam", "anemophil", "hydrophil", "entomophil", "wind", "water", "insect", "pollinator", "outbreeding", "self-incompatib", "self incompatib", "dicliny", "emasculation", "bagging", "artificial hybridi", "pollen-pistil", "pollen pistil", "pollen tube", "vallisneria", "zostera", "yucca", "ophrys", "amorphophallus", "commelina", "viola", "oxalis", "castor", "maize", "papaya"],
   ["Draw a diagram showing the growth of the pollen tube through the style into the ovule."]),
  ("Double Fertilisation, Endosperm & Embryo", ["double fertili", "syngamy", "triple fusion", "pen", "primary endosperm", "endosperm", "embryo", "embryogeny", "proembryo", "globular", "heart-shaped", "heart shaped", "cotyledon", "scutellum", "coleoptile", "coleorhiza", "epicotyl", "hypocotyl", "radicle", "plumule", "free nuclear", "coconut", "post-fertili", "post fertili"],
   ["Draw the stages of embryo development in a dicot (zygote to mature embryo).", "Draw the L.S. of a monocot (grass) embryo and label it."]),
  ("Seed, Fruit, Apomixis & Polyembryony", ["seed", "albuminous", "non-albuminous", "perisperm", "dormancy", "fruit", "false fruit", "true fruit", "parthenocarp", "apomixis", "apomictic", "polyembryony", "viability", "seed coat", "testa", "lupin", "phoenix", "strawberry", "apple", "cashew", "citrus", "mango"],
   ["Draw the structure of a dicot seed and a false fruit (apple or strawberry) and label them."]),
]

T[21] = [
  ("Male Reproductive System", ["male reproductive", "testis", "testes", "scrotum", "seminiferous", "sertoli", "leydig", "interstitial", "rete testis", "vasa efferentia", "epididymis", "vas deferens", "ejaculatory", "penis", "glans", "prostate", "seminal vesicle", "bulbourethral", "semen", "seminal plasma", "androgen"],
   ["Draw the diagrammatic sectional view of the male reproductive system and label it.", "Draw the sectional view of a seminiferous tubule and label it."]),
  ("Female Reproductive System", ["female reproductive", "ovary", "ovaries", "ovarian", "oviduct", "fallopian", "infundibulum", "fimbriae", "ampulla", "isthmus", "uterus", "endometrium", "myometrium", "perimetrium", "cervix", "vagina", "vulva", "mons pubis", "labia", "clitoris", "hymen", "mammary", "lactiferous", "areola", "antrum"],
   ["Draw the diagrammatic sectional view of the female reproductive system and label it.", "Draw the sectional view of a mammary gland and label it."]),
  ("Gametogenesis", ["gametogenesis", "spermatogenesis", "spermatogonia", "spermatocyte", "spermatid", "spermiogenesis", "spermiation", "sperm", "acrosome", "oogenesis", "oogonia", "oocyte", "polar bod", "ovum", "graafian", "follicle", "zona pellucida", "gnrh", "inhibin"],
   ["Draw the structure of a human sperm and label it.", "Draw the sectional view of the ovary showing the stages of follicles.", "Draw a schematic representation of (a) spermatogenesis and (b) oogenesis."]),
  ("Menstrual Cycle", ["menstrual", "menarche", "menopause", "follicular phase", "luteal phase", "ovulation", "corpus luteum", "lh surge", "proliferative", "secretory phase", "menses", "menstruation"],
   ["Draw a diagram showing the changes in hormones, ovary and uterus during the menstrual cycle."]),
  ("Fertilisation to Parturition", ["fertili", "implantation", "cleavage", "morula", "blastocyst", "blastomere", "trophoblast", "inner cell mass", "placenta", "chorionic vill", "hcg", "hpl", "relaxin", "pregnan", "gestation", "embryonic development", "germ layer", "foetus", "fetus", "parturition", "foetal ejection", "fetal ejection", "lactation", "colostrum", "oxytocin", "stem cell", "umbilical"],
   ["Draw the transport of the ovum, fertilisation and passage of the growing embryo through the fallopian tube.", "Draw the human foetus within the uterus and label it."]),
]

T[22] = [
  ("Reproductive Health & Population", ["reproductive health", "rch", "population", "family planning", "amniocentesis", "sex ratio", "mmr", "imr", "maternal mortality", "infant mortality", "sex education", "adolescen", "explosion", "marriageable"],
   []),
  ("Methods of Birth Control & MTP", ["contracepti", "natural method", "periodic abstinence", "withdrawal", "coitus interrupt", "lactational amenorrh", "barrier", "condom", "diaphragm", "cervical cap", "vault", "iud", "copper", "cu t", "cut", "lippes loop", "multiload", "lng-20", "progestasert", "pill", "saheli", "injectable", "implant", "sterili", "vasectomy", "tubectomy", "emergency", "72 hours", "mtp", "medical termination", "abortion", "birth control"],
   ["Draw (a) a Copper-T (IUD) and (b) an implant.", "Draw diagrams showing (a) vasectomy and (b) tubectomy."]),
  ("Sexually Transmitted Infections", ["sexually transmitted", "sti", "std", "venereal", "rti", "gonorrh", "syphilis", "genital herpes", "chlamyd", "genital wart", "trichomon", "hepatitis", "hiv", "aids", "pid", "pelvic inflammatory"],
   []),
  ("Infertility & ART", ["infertil", "assisted reproductive", "art", "ivf", "in vitro", "test tube", "zift", "gift", "iut", "icsi", "ai", "iui", "artificial insemination", "embryo transfer", "adoption", "surrogacy"],
   []),
]

T[23] = [
  ("Mendel's Laws: Monohybrid & Dihybrid Crosses", ["mendel", "pea", "monohybrid", "dominan", "segregation", "test cross", "testcross", "genotype", "phenotype", "allel", "homozygous", "heterozygous", "punnett", "f1", "f2", "3:1", "1:2:1", "true breeding", "true-breeding", "factor", "recessive", "law of", "dihybrid", "independent assortment", "9:3:3:1", "round yellow", "wrinkled green", "two genes", "two characters"],
   ["Draw a Punnett square of a monohybrid cross (tall × dwarf pea) up to F2.", "Draw a test cross for a tall pea plant and show its result.", "Draw the dihybrid cross (round yellow × wrinkled green) with a 16-box checkerboard."]),
  ("Deviations: Incomplete Dominance, Co-dominance & Multiple Alleles", ["incomplete dominance", "snapdragon", "antirrhinum", "dog flower", "co-dominance", "codominance", "co dominance", "blood group", "abo", "multiple allel", "ia", "ib", "pleiotrop", "starch grain", "polygenic", "skin colour", "skin color"],
   ["Draw a cross showing incomplete dominance in snapdragon (red × white flowers) up to F2."]),
  ("Chromosomal Theory, Linkage & Recombination", ["chromosomal theory", "sutton", "boveri", "morgan", "drosophila", "linkage", "recombination", "crossing over", "linked"],
   ["Draw the dihybrid crosses in Drosophila showing linkage (Morgan's experiment)."]),
  ("Sex Determination & Mutation", ["sex determination", "xo", "xy", "zw", "henking", "x body", "heterogametic", "homogametic", "bird", "honey bee", "honeybee", "haplodiploid", "grasshopper", "mutation", "point mutation", "frame shift", "frameshift", "mutagen"],
   ["Draw a diagram showing sex determination in humans."]),
  ("Pedigree Analysis & Genetic Disorders", ["pedigree", "genetic disorder", "mendelian disorder", "haemophilia", "hemophilia", "colour blind", "color blind", "sickle", "thalassemia", "thalassaemia", "phenylketonuria", "chromosomal disorder", "down", "turner", "klinefelter", "trisomy", "aneuploidy", "polyploidy", "sex-linked", "sex linked", "consanguineous", "x-linked", "autosomal"],
   ["Draw the symbols used in pedigree analysis and draw one pedigree chart (e.g. an autosomal dominant trait).", "Draw a cross showing the inheritance of colour blindness (or haemophilia)."]),
]

T[24] = [
  ("DNA Structure & Packaging", ["polynucleotide", "nucleotide", "nucleoside", "phosphodiester", "glycosidic", "double helix", "watson", "crick", "chargaff", "wilkins", "franklin", "antiparallel", "anti-parallel", "b-dna", "nucleosome", "histone", "chromatin", "euchromatin", "heterochromatin", "nhc", "beads", "packaging", "length of dna", "5'", "3'"],
   ["Draw a polynucleotide chain and label the sugar, base and phosphodiester bond.", "Draw the double helix structure of DNA.", "Draw a nucleosome and label it."]),
  ("The Search for Genetic Material", ["genetic material", "griffith", "transforming principle", "avery", "macleod", "mccarty", "hershey", "chase", "bacteriophage", "radioactive", "sulphur", "sulfur", "phosphorus", "rna world", "criteria", "streptococcus pneumoniae"],
   ["Draw the Hershey-Chase experiment."]),
  ("DNA Replication", ["replication", "semiconservative", "semi-conservative", "semi conservative", "meselson", "stahl", "15n", "replication fork", "dna polymerase", "okazaki", "leading strand", "lagging strand", "ligase", "origin of replication", "ori", "taylor"],
   ["Draw the replication fork and label the leading and lagging strands.", "Draw the Meselson and Stahl experiment."]),
  ("Transcription", ["transcription", "transcription unit", "promoter", "terminator", "template strand", "coding strand", "rna polymerase", "sigma", "rho", "hnrna", "splicing", "capping", "tailing", "exon", "intron", "cistron", "structural gene", "monocistronic", "polycistronic"],
   ["Draw a schematic structure of a transcription unit.", "Draw the process of transcription in bacteria."]),
  ("Genetic Code & Translation", ["genetic code", "codon", "anticodon", "triplet", "degenera", "universal", "unambiguous", "aug", "stop codon", "uaa", "nirenberg", "khorana", "ochoa", "trna", "clover", "adaptor", "translation", "ribosome", "initiation", "elongation", "termination", "utr", "charging", "aminoacyl", "peptidyl transferase", "lysine"],
   ["Draw the clover-leaf structure of tRNA and label it.", "Draw the process of translation."]),
  ("Regulation, Human Genome Project & DNA Fingerprinting", ["lac operon", "operon", "regulation", "repressor", "inducer", "lactose", "jacob", "monod", "i gene", "z gene", "y gene", "a gene", "human genome", "hgp", "est", "sequence annotation", "bac", "yac", "snp", "fingerprint", "vntr", "satellite dna", "polymorphism", "southern blot", "jeffreys", "hybridi", "bioinformatics", "automated dna sequencer"],
   ["Draw the lac operon (switched on and switched off).", "Draw a schematic representation of DNA fingerprinting."]),
]

T[25] = [
  ("Origin of Life", ["origin of life", "big bang", "oparin", "haldane", "miller", "urey", "abiogenesis", "spontaneous generation", "panspermia", "chemical evolution", "pasteur", "earth", "universe", "primitive"],
   ["Draw Miller's experiment and label it."]),
  ("Evidences of Evolution", ["evidence", "fossil", "palaeontolog", "paleontolog", "homolog", "analog", "divergent", "convergent", "comparative anatomy", "embryolog", "biochemical", "peppered moth", "industrial melanism", "antibiotic resist", "herbicide", "forelimb"],
   ["Draw examples of homologous organs (forelimbs of vertebrates)."]),
  ("Adaptive Radiation & Theories of Evolution", ["darwin", "natural selection", "survival of the fittest", "fitness", "branching descent", "adaptive radiation", "galapagos", "finch", "marsupial", "de vries", "mutation", "saltation", "evening primrose", "lamarck", "wallace", "malthus", "variation", "mechanism of evolution"],
   ["Draw the adaptive radiation of Darwin's finches (or of Australian marsupials)."]),
  ("Hardy-Weinberg Principle & Natural Selection", ["hardy", "weinberg", "equilibrium", "allele frequenc", "gene flow", "genetic drift", "founder effect", "stabili", "directional", "disruptive", "gene pool", "p2", "genetic recombination"],
   ["Draw graphs showing (a) stabilising, (b) directional and (c) disruptive selection."]),
  ("History of Life & Human Evolution", ["geological", "era", "period", "dinosaur", "reptile", "coelacanth", "lobefin", "ichthyosaur", "conifer", "mammal", "evolution of man", "origin and evolution of man", "dryopithecus", "ramapithecus", "australopithecus", "homo habilis", "habilis", "homo erectus", "neanderthal", "homo sapiens", "cro-magnon", "cranial capacity", "hominid", "brief account"],
   ["Draw a representative evolutionary history of vertebrates through geological periods (diagram)."]),
]

T[26] = [
  ("Common Diseases in Humans", ["disease", "pathogen", "typhoid", "salmonella", "widal", "pneumonia", "streptococcus", "haemophilus", "common cold", "rhino", "malaria", "plasmodium", "anopheles", "sporozoite", "haemozoin", "amoebiasis", "entamoeba", "dysentery", "ascariasis", "ascaris", "filariasis", "elephantiasis", "wuchereria", "ringworm", "microsporum", "trichophyton", "epidermophyton", "dengue", "chikungunya", "aedes", "gambusia", "housefl", "vector", "infectious"],
   ["Draw the stages in the life cycle of Plasmodium."]),
  ("Immunity, Vaccination & Allergies", ["immun", "innate", "acquired", "barrier", "physical barrier", "physiological", "cellular barrier", "cytokine", "interferon", "antibod", "antigen", "b-lymphocyte", "t-lymphocyte", "b-cell", "t-cell", "iga", "igg", "igm", "ige", "igd", "h2l2", "humoral", "cell-mediated", "cell mediated", "graft", "active immunity", "passive immunity", "colostrum", "vaccin", "memory", "primary response", "secondary response", "allerg", "histamine", "autoimmun", "rheumatoid", "lymphoid", "bone marrow", "thymus", "spleen", "lymph node", "malt", "tonsil", "peyer"],
   ["Draw the structure of an antibody molecule and label it."]),
  ("AIDS & Cancer", ["aids", "hiv", "retrovirus", "helper t", "macrophage", "elisa", "reverse transcriptase", "anti-retroviral", "cancer", "tumour", "tumor", "benign", "malignant", "metasta", "contact inhibition", "carcinogen", "oncogene", "proto-oncogene", "biopsy", "chemotherapy", "radiotherapy", "mri", "ct", "x-ray"],
   ["Draw the replication of a retrovirus (HIV) in the host cell."]),
  ("Drugs & Alcohol Abuse", ["drug", "alcohol", "opioid", "morphine", "heroin", "smack", "diacetylmorphine", "cannabinoid", "marijuana", "hashish", "charas", "ganja", "cocaine", "coke", "crack", "atropa", "datura", "barbiturate", "amphetamine", "benzodiazepine", "lsd", "tobacco", "nicotine", "smoking", "addiction", "dependence", "withdrawal", "adolescen", "papaver", "cannabis", "erythroxylum", "poppy", "steroid", "masculin", "abuse"],
   ["Draw the skeletal structure of (a) morphine and (b) a cannabinoid molecule."]),
]

T[27] = [
  ("Microbes in Household & Industrial Products", ["household", "curd", "lab", "lactobacillus", "lactic acid bacteria", "dough", "idli", "dosa", "bread", "toddy", "cheese", "roquefort", "swiss", "propionibacterium", "industr", "fermentor", "fermenter", "fermented", "beverage", "wine", "beer", "whisky", "brandy", "rum", "saccharomyces", "brewer", "baker", "antibiotic", "penicillin", "fleming", "chain", "florey", "organic acid", "citric acid", "aspergillus", "acetic acid", "acetobacter", "butyric", "clostridium", "ethanol", "lipase", "pectinase", "protease", "streptokinase", "clot buster", "cyclosporin", "trichoderma", "statin", "monascus", "bioactive", "immunosuppress"],
   []),
  ("Sewage Treatment & Biogas", ["sewage", "stp", "primary treatment", "secondary treatment", "biological treatment", "activated sludge", "floc", "bod", "biochemical oxygen", "anaerobic sludge", "sludge digester", "ganga action", "yamuna", "biogas", "methanogen", "methanobacterium", "gobar", "kvic", "iari", "cattle dung", "rumen", "waste water", "wastewater"],
   ["Draw a typical biogas plant and label it.", "Draw a flow chart of sewage treatment (primary and secondary treatment)."]),
  ("Biocontrol Agents & Biofertilisers", ["biocontrol", "biological control", "ladybird", "dragonfl", "bacillus thuringiensis", "bt", "baculovirus", "nucleopolyhedrovirus", "ipm", "integrated pest", "biofertili", "rhizobium", "azotobacter", "azospirillum", "mycorrhiza", "glomus", "cyanobacteri", "anabaena", "nostoc", "oscillatoria", "pest"],
   []),
]

T[28] = [
  ("Principles & Tools of rDNA Technology", ["principle", "genetic engineering", "recombinant dna", "rdna", "r-dna", "cohen", "boyer", "restriction enzyme", "restriction endonuclease", "endonuclease", "exonuclease", "ecori", "eco ri", "hind", "palindrom", "sticky end", "ligase", "nomenclature", "vector", "plasmid", "pbr322", "ori", "selectable marker", "antibiotic resistance", "insertional inactivation", "blue-white", "chromogenic", "cloning site", "ti plasmid", "agrobacterium", "retrovirus", "competent", "calcium chloride", "heat shock", "microinjection", "biolistic", "gene gun", "disarmed", "cloning", "molecular scissors"],
   ["Draw the E. coli cloning vector pBR322 and label it.", "Draw the steps in the formation of recombinant DNA by the action of EcoRI."]),
  ("Isolation, Cutting & Separation of DNA", ["isolation of", "lysozyme", "cellulase", "chitinase", "ribonuclease", "protease", "chilled ethanol", "spooling", "electrophoresis", "agarose", "ethidium bromide", "elution", "uv", "ultraviolet", "separation"],
   ["Draw a typical agarose gel electrophoresis result showing DNA bands."]),
  ("PCR, Bioreactors & Downstream Processing", ["pcr", "polymerase chain", "denaturation", "annealing", "extension", "primer", "taq", "thermus aquaticus", "amplification", "gene of interest", "transformation", "recombinant cell", "bioreactor", "stirred", "sparged", "downstream", "culture", "product", "large scale"],
   ["Draw the steps of the polymerase chain reaction (PCR).", "Draw a simple stirred-tank bioreactor and label it.", "Draw a diagrammatic representation of recombinant DNA technology."]),
]

T[29] = [
  ("Biotechnological Applications in Agriculture", ["agricultur", "gm crop", "gmo", "genetically modified", "transgenic plant", "bt cotton", "bt toxin", "cry", "bollworm", "corn borer", "protoxin", "pest resistant", "rna interference", "rnai", "meloidogyne", "nematode", "tobacco", "golden rice", "dsrna", "silencing", "green revolution", "tissue culture", "somaclone", "totipoten", "meristem", "micropropagation", "transposon"],
   ["Draw the host plant-generated dsRNA triggering protection against nematode infestation (RNAi)."]),
  ("Applications in Medicine & Gene Therapy", ["medicine", "insulin", "humulin", "eli lilly", "pro-insulin", "proinsulin", "pro-hormone", "c peptide", "c-peptide", "a and b", "gene therapy", "ada", "adenosine deaminase", "scid", "molecular diagnos", "pcr", "elisa", "probe", "autoradiograph", "polypeptide"],
   ["Draw the maturation of pro-insulin into insulin (removal of C-peptide)."]),
  ("Transgenic Animals & Ethical Issues", ["transgenic animal", "transgenic cow", "rosie", "alpha-lactalbumin", "alpha lactalbumin", "vaccine safety", "chemical safety", "ethic", "geac", "biopiracy", "patent", "basmati", "turmeric", "neem", "biopatent", "emphysema", "alpha-1-antitrypsin"],
   []),
]

T[30] = [
  ("Organism & Its Environment", ["habitat", "abiotic", "temperature", "eurytherm", "stenotherm", "euryhaline", "stenohaline", "salinity", "light", "soil", "regulat", "conform", "migrat", "suspend", "hibernation", "aestivation", "diapause", "adaptation", "kangaroo rat", "cam", "allen", "altitude", "desert", "biome", "homeostasis"],
   ["Draw a diagram of organismic responses: regulators, conformers and partial regulators."]),
  ("Population Attributes & Growth", ["population", "attribute", "birth rate", "natality", "death rate", "mortality", "sex ratio", "age pyramid", "age structure", "expanding", "stable", "declining", "density", "exponential", "logistic", "carrying capacity", "verhulst", "pearl", "sigmoid", "j-shaped", "intrinsic", "immigration", "emigration", "life history", "nt", "0.0205"],
   ["Draw the age pyramids: expanding, stable and declining.", "Draw the population growth curves: (a) exponential (J-shaped) and (b) logistic (S-shaped)."]),
  ("Population Interactions", ["interaction", "mutualism", "competition", "predat", "prey", "parasit", "commensalism", "amensalism", "gause", "competitive exclusion", "resource partitioning", "macarthur", "warbler", "ectoparasite", "endoparasite", "brood parasit", "cuckoo", "koel", "orchid", "barnacle", "cattle egret", "sea anemone", "clown fish", "lichen", "mycorrhiza", "fig", "wasp", "ophrys", "cuscuta", "monarch butterfly", "prickly pear", "cactus moth", "calotropis", "herbivor"],
   []),
]

T[31] = [
  ("Ecosystem Structure & Productivity", ["ecosystem", "structure", "function", "stratification", "component", "productivity", "gpp", "npp", "gross primary", "net primary", "secondary productivity", "biomass", "pond", "terrestrial", "aquatic", "producer"],
   ["Draw a diagrammatic representation of a pond ecosystem and label it."]),
  ("Decomposition", ["decomposition", "decompos", "detritus", "detritivore", "fragmentation", "leaching", "catabolism", "humification", "mineralisation", "mineralization", "humus", "earthworm", "soil"],
   ["Draw a diagrammatic representation of the decomposition cycle in a terrestrial ecosystem."]),
  ("Energy Flow & Food Chains", ["energy flow", "par", "photosynthetically active", "food chain", "grazing food chain", "gfc", "detritus food chain", "dfc", "food web", "trophic level", "consumer", "10 per cent", "10%", "10 %", "ten percent", "standing crop", "lindeman", "herbivore", "carnivore"],
   ["Draw the energy flow through different trophic levels."]),
  ("Ecological Pyramids", ["pyramid", "pyramid of number", "pyramid of biomass", "pyramid of energy", "inverted", "upright"],
   ["Draw the pyramids of (a) number, (b) biomass and (c) energy.", "Draw an inverted pyramid of biomass (small standing crop of phytoplankton)."]),
  ("Succession & Nutrient Cycling", ["succession", "pioneer", "climax", "sere", "hydrarch", "xerarch", "carbon cycle", "phosphorus cycle", "nutrient cycl", "ecosystem service"],
   []),
]

T[32] = [
  ("Biodiversity & Its Patterns", ["biodiversity", "genetic diversity", "species diversity", "ecological diversity", "wilson", "rauwolfia", "reserpine", "western ghats", "megadiversity", "species richness", "latitudinal", "species-area", "species area", "humboldt", "z value", "rivet", "ehrlich", "tilman", "stability", "how many species", "iucn", "red list", "india", "2.4", "endemism", "tropics", "amazon"],
   ["Draw the species-area relationship graph (and its log-scale form).", "Draw a pie chart showing the global biodiversity of major taxa (proportionate number of species)."]),
  ("Loss of Biodiversity", ["loss", "extinct", "dodo", "quagga", "thylacine", "steller", "habitat loss", "fragmentation", "over-exploitation", "overexploitation", "alien species", "invasive", "nile perch", "cichlid", "parthenium", "lantana", "eichhornia", "water hyacinth", "african catfish", "clarias", "co-extinction", "coextinction", "evil quartet", "sixth extinction"],
   []),
  ("Biodiversity Conservation", ["conservation", "in situ", "in-situ", "ex situ", "ex-situ", "hotspot", "hot spot", "national park", "sanctuary", "sanctuaries", "biosphere reserve", "sacred grove", "zoological", "botanical garden", "wildlife safari", "cryopreservation", "seed bank", "gene bank", "earth summit", "rio", "world summit", "johannesburg", "utilitarian", "ethical", "sacred"],
   []),
]
