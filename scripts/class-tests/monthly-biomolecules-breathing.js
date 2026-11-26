// Monthly test (20 marks, 60 min): I PUC Biology, Ch 9 Biomolecules + Ch 14 Breathing and Exchange of Gases.
// Chapter pattern as per the official I PUC Biology Blue Print 2026-27: Ch 9 gives only the 1-mark and 5-mark
// questions, Ch 14 only the 2-mark and 3-mark questions (see bio-breathing-bank.js).
//   Part A: 4 MCQ + 2 fill-ups (Ch 9, all) · Part B: any 3 of 4 × 2 (Ch 14) · Part C: any 1 of 2 × 3 (Ch 14)
//   · Part D: any 1 of 2 × 5 (Ch 9) = 20 marks (Ch 9 : Ch 14 = 11 : 9).
// Builds 3 PDFs into exam-corner/pu-board-2026-27/: …-20m.pdf (question paper), …-20m-answer-key.pdf, …-20m-blueprint.pdf
// Run: NODE_PATH=<global node_modules with playwright> node scripts/class-tests/monthly-biomolecules-breathing.js
const {build, writePdfs} = require('./bio-breathing-bank');

const MONTHLY = {
  kind: 'MONTHLY TEST', base: 'biology-i-puc-monthly-test-biomolecules-and-breathing-20m', time: '60 minutes', total: 20,
  parts: {
    mcq: ['rubisco', 'ester', 'compet', 'adenosine'],
    fib: ['water', 'cellulose'],
    B: {ids: ['vctlc', 'tidal', 'emphysema', 'ppressure'], n: 3},
    C: {ids: ['mechanism', 'haemoglobin'], n: 1},
    D: {ids: ['enzymes', 'proteins'], n: 1}
  },
  words: ['Cellulose', 'Lipids', 'Water'], extraWord: 'Lipids', keyImages: true
};
module.exports = MONTHLY;

if (require.main === module) writePdfs(MONTHLY, build(MONTHLY));
