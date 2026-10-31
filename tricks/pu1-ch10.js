/* Short Notes & Tricks — I PUC Biology, Chapter 10: Cell Cycle and Cell Division (NCERT). */
window.TRICKS = window.TRICKS || {};
window.TRICKS['pu1-ch10'] = {
  title: 'Cell Cycle and Cell Division', cls: 'I PUC', ch: 10, page: 'pu1-ch10.html',
  topics: [
    {
      t: 'The cell cycle',
      notes: [
        'The cell cycle is the series of events by which a cell copies its DNA and divides into two.',
        'A typical <b>human cell</b> divides about once in <b>24 hours</b>; <b>yeast</b> takes about <b>90 minutes</b>.',
        'Two phases: <b>interphase</b> (resting/preparing phase, <b>more than 95%</b> of the cycle) and <b>M phase</b> (actual division, about 1 hour in human cells).',
        'M phase = <b>karyokinesis</b> (nucleus divides) + <b>cytokinesis</b> (cytoplasm divides).',
        'Cells that stop dividing enter the <b>G₀ (quiescent) stage</b>; they stay active but do not divide unless needed. E.g. heart cells.'
      ],
      tricks: [
        ['Order', '"<b>G₁ S G₂ M</b> = <b>G</b>row, <b>S</b>ynthesise DNA, <b>G</b>row again, <b>M</b>ake two".'],
        ['Time', '"Human <b>24 h</b>, yeast <b>90 min</b>, M phase only <b>1 h</b>".']
      ],
      traps: ['Interphase is not a "resting" phase in reality; the cell is very busy preparing.'],
      kn: 'ಕೋಶ ಚಕ್ರ: ಇಂಟರ್‌ಫೇಸ್ (95% ಕ್ಕಿಂತ ಹೆಚ್ಚು) ಮತ್ತು M ಹಂತ; ಮಾನವ ಕೋಶ 24 ಗಂಟೆ.',
      hi: 'कोशिका चक्र: अंतरावस्था (95% से अधिक) और M अवस्था; मानव कोशिका 24 घंटे।'
    },
    {
      t: 'Interphase: G₁, S and G₂',
      notes: [
        '<b>G₁ phase</b>: cell grows and is metabolically active; DNA is <b>not</b> copied yet.',
        '<b>S phase</b> (synthesis): <b>DNA doubles</b> (2C → 4C), but the <b>chromosome number stays the same</b> (2n stays 2n).',
        'In animal cells the <b>centriole duplicates</b> in the cytoplasm during S phase.',
        '<b>G₂ phase</b>: proteins are made for mitosis; the cell keeps growing.'
      ],
      tricks: [
        ['S phase rule', '"<b>DNA doubles, number doesn\'t</b>": 2C → 4C, but 2n stays 2n.'],
        ['S = Synthesis', '"<b>S</b> phase = <b>S</b>ynthesis of DNA (and centriole copy)".']
      ],
      traps: ['After S phase, DNA amount is 4C but chromosome number is still 2n.'],
      kn: 'S ಹಂತದಲ್ಲಿ DNA ದ್ವಿಗುಣಗೊಳ್ಳುತ್ತದೆ, ಆದರೆ ವರ್ಣತಂತುಗಳ ಸಂಖ್ಯೆ ಬದಲಾಗುವುದಿಲ್ಲ.',
      hi: 'S अवस्था में DNA दोगुना होता है, पर गुणसूत्रों की संख्या नहीं बदलती।'
    },
    {
      t: 'Mitosis: prophase and metaphase',
      notes: [
        '<b>Prophase</b>: chromatin <b>condenses</b> into chromosomes, each with two <b>chromatids</b> joined at the centromere. Centrosomes move to opposite poles and form spindle fibres.',
        'At the <b>end of prophase</b>, the <b>Golgi, ER, nucleolus and nuclear envelope disappear</b>.',
        '<b>Metaphase</b>: spindle fibres attach to the <b>kinetochores</b>; chromosomes line up at the <b>equator</b> (the <b>metaphase plate</b>).',
        'Metaphase is the <b>best stage to study chromosome shape</b> (most condensed).'
      ],
      tricks: [
        ['Mitosis order', '"<b>P M A T</b> = <b>P</b>lease <b>M</b>ake <b>A</b> <b>T</b>ea".'],
        ['Metaphase', '"<b>M</b>etaphase = <b>M</b>iddle line-up; best for <b>M</b>orphology".']
      ],
      traps: ['The nuclear envelope disappears at the end of prophase, not in metaphase.'],
      kn: 'ಪ್ರೊಫೇಸ್‌ನಲ್ಲಿ ವರ್ಣತಂತುಗಳು ಗಟ್ಟಿಯಾಗುತ್ತವೆ; ಮೆಟಾಫೇಸ್‌ನಲ್ಲಿ ಸಮಭಾಜಕದಲ್ಲಿ ಸಾಲಾಗುತ್ತವೆ.',
      hi: 'प्रोफ़ेज़ में गुणसूत्र संघनित होते हैं; मेटाफ़ेज़ में वे मध्य रेखा पर लगते हैं।'
    },
    {
      t: 'Mitosis: anaphase, telophase, cytokinesis',
      notes: [
        '<b>Anaphase</b>: <b>centromeres split</b>; sister chromatids (now daughter chromosomes) move to <b>opposite poles</b>.',
        '<b>Telophase</b>: chromosomes reach the poles and loosen; <b>nuclear envelope, nucleolus, Golgi and ER reform</b>.',
        '<b>Cytokinesis in animal cells</b>: a <b>furrow</b> forms in the membrane and deepens until the cell splits.',
        '<b>Cytokinesis in plant cells</b>: a <b>cell plate</b> forms in the centre and grows outward; it becomes the <b>middle lamella</b>.',
        'If the nucleus divides but cytoplasm does not, a <b>multinucleate</b> cell called a <b>syncytium</b> forms, e.g. <b>liquid endosperm of coconut</b>.',
        'Mitosis gives <b>two identical diploid cells</b>; it helps growth, repair and keeps the nucleus-to-cytoplasm ratio. Also called <b>equational division</b>.'
      ],
      tricks: [
        ['Anaphase', '"<b>A</b>naphase = <b>A</b>part" (chromatids pull apart).'],
        ['Telophase', '"<b>T</b>elophase = <b>T</b>wo nuclei rebuilt" (reverse of prophase).'],
        ['Plant vs animal', '"Animal <b>Furrows</b> in, Plant <b>Plates</b> out" (centre to edge).']
      ],
      traps: ['Plant cell plate grows from the centre outward; animal furrow goes from outside inward.', 'Coconut liquid endosperm is a syncytium.'],
      kn: 'ಅನಾಫೇಸ್‌ನಲ್ಲಿ ಕ್ರೊಮ್ಯಾಟಿಡ್‌ಗಳು ಬೇರೆಯಾಗುತ್ತವೆ; ಸಸ್ಯದಲ್ಲಿ ಕೋಶಫಲಕ, ಪ್ರಾಣಿಯಲ್ಲಿ ಕಂದಕ.',
      hi: 'एनाफ़ेज़ में क्रोमैटिड अलग होते हैं; पौधों में कोशिका पट्टिका, जंतुओं में खाँच बनती है।'
    },
    {
      t: 'Meiosis I: prophase I',
      notes: [
        'Meiosis makes <b>four haploid cells</b> from one diploid cell: <b>two divisions</b> but <b>only one DNA copying</b>. It happens in gamete formation.',
        '<b>Leptotene</b>: chromosomes become visible.',
        '<b>Zygotene</b>: homologous chromosomes pair (<b>synapsis</b>) with the help of the <b>synaptonemal complex</b>; a pair is called a <b>bivalent</b> or <b>tetrad</b>.',
        '<b>Pachytene</b>: <b>crossing over</b> between non-sister chromatids, helped by the enzyme <b>recombinase</b>; <b>recombination nodules</b> appear.',
        '<b>Diplotene</b>: synaptonemal complex dissolves; homologues separate except at X-shaped points called <b>chiasmata</b>. In oocytes of some vertebrates diplotene can last <b>months or years</b>.',
        '<b>Diakinesis</b>: <b>terminalisation of chiasmata</b>; chromosomes fully condensed; spindle forms; nucleolus and nuclear envelope disappear.'
      ],
      tricks: [
        ['Prophase I order', '"<b>L</b>ittle <b>Z</b>ebras <b>P</b>lay <b>D</b>andiya <b>D</b>aily": <b>L</b>eptotene, <b>Z</b>ygotene, <b>P</b>achytene, <b>D</b>iplotene, <b>D</b>iakinesis.'],
        ['What happens', '"<b>Z</b>ip (synapsis) → <b>P</b>atch-swap (crossing over) → <b>D</b>etach showing <b>X</b> (chiasmata) → <b>D</b>one (terminalisation)".']
      ],
      traps: ['Crossing over happens in pachytene; chiasmata become visible in diplotene.', 'Synapsis is in zygotene, not leptotene.'],
      kn: 'ಪ್ರೊಫೇಸ್ I: ಲೆಪ್ಟೋಟೀನ್, ಜೈಗೋಟೀನ್ (ಜೋಡಣೆ), ಪ್ಯಾಕಿಟೀನ್ (ಕ್ರಾಸಿಂಗ್ ಓವರ್), ಡಿಪ್ಲೋಟೀನ್ (ಕಯಾಸ್ಮಾ), ಡಯಾಕೈನೆಸಿಸ್.',
      hi: 'प्रोफ़ेज़ I: लेप्टोटीन, ज़ाइगोटीन (युग्मन), पैकिटीन (क्रॉसिंग ओवर), डिप्लोटीन (काइज़्मा), डायकाइनेसिस।'
    },
    {
      t: 'Rest of meiosis I and meiosis II',
      notes: [
        '<b>Metaphase I</b>: <b>bivalents</b> line up at the equator.',
        '<b>Anaphase I</b>: <b>homologous chromosomes separate</b>; sister chromatids <b>stay together</b> at their centromeres.',
        '<b>Telophase I</b>: two cells (dyad) form, each with <b>half</b> the chromosome number. This is why meiosis I is the <b>reductional division</b>.',
        '<b>Interkinesis</b>: short gap; <b>no DNA replication</b>.',
        '<b>Meiosis II</b> is like mitosis: in <b>anaphase II</b> the <b>centromeres split</b> and sister chromatids separate. Result: <b>four haploid cells</b>.',
        'Importance: keeps the chromosome number constant from generation to generation; crossing over and random separation create <b>variation</b>, which helps evolution.'
      ],
      tricks: [
        ['Which separates', '"<b>I</b> = <b>I</b>n-laws part (homologues); <b>II</b> = <b>Twins</b> part (sister chromatids)".'],
        ['No copying', '"Inter<b>kinesis</b> = <b>no</b> photocopy of DNA".']
      ],
      traps: ['Centromeres split in anaphase II (and in mitotic anaphase), not anaphase I.', 'Meiosis I is reductional; meiosis II is equational.'],
      kn: 'ಅನಾಫೇಸ್ I ನಲ್ಲಿ ಸಮಜಾತ ವರ್ಣತಂತುಗಳು, ಅನಾಫೇಸ್ II ನಲ್ಲಿ ಸೋದರ ಕ್ರೊಮ್ಯಾಟಿಡ್‌ಗಳು ಬೇರೆಯಾಗುತ್ತವೆ.',
      hi: 'एनाफ़ेज़ I में समजात गुणसूत्र, एनाफ़ेज़ II में सिस्टर क्रोमैटिड अलग होते हैं।'
    }
  ],
  numbers: [
    ['Human cell cycle', '≈ 24 hours'],
    ['Yeast cell cycle', '≈ 90 minutes'],
    ['Interphase', '> 95% of the cycle'],
    ['M phase (human)', '≈ 1 hour'],
    ['Cells after mitosis', '2 (diploid, identical)'],
    ['Cells after meiosis', '4 (haploid)'],
    ['DNA replications in meiosis', '1'],
    ['Stages of prophase I', '5']
  ],
  last: [
    'Cell cycle: G₁ → S → G₂ → M; G₀ = quiescent stage.',
    'S phase: DNA doubles, chromosome number stays the same.',
    'Centriole duplicates in S phase (animal cells).',
    'Metaphase is best for studying chromosome shape.',
    'Anaphase: centromeres split, chromatids move apart.',
    'Animal cytokinesis: furrow; plant: cell plate → middle lamella.',
    'Coconut liquid endosperm is a syncytium.',
    'Prophase I: Leptotene, Zygotene, Pachytene, Diplotene, Diakinesis.',
    'Crossing over in pachytene (recombinase); chiasmata in diplotene.',
    'Anaphase I: homologues separate; anaphase II: chromatids separate.'
  ]
};
