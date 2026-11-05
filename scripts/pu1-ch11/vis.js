/* pictures used on slides, colour notes, worksheets and handwritten notes (needs draw.js, ps-draw.js, diagrams.js).
   V[name](lang) returns an <svg> of SCENE[name], cropped to the drawing. */
window.V = {};
const CROP = {
  zscheme: [20, 110, 1560, 880], calvin: [150, 130, 1330, 890], c4: [40, 90, 1520, 880], chemi: [50, 130, 1500, 810], chloroplast: [140, 200, 1320, 690],
  kranz: [30, 120, 1540, 810], cyclic: [150, 140, 1400, 640], lhc: [160, 120, 1300, 770], spectrum: [40, 140, 1460, 790], lightgraph: [120, 150, 1320, 720],
  leafSun: [150, 100, 1300, 880], halfLeaf: [60, 320, 1500, 420], belljar: [150, 120, 1400, 820], engelmann: [160, 180, 1300, 520], vanniel: [120, 200, 1360, 680],
  equation: [60, 120, 1480, 640], leafCells: [100, 100, 1400, 800], split: [120, 180, 1320, 740], chromatogram: [460, 160, 700, 760], accessory: [30, 100, 1300, 800],
  twoPhases: [100, 240, 1400, 520], photolysis: [150, 250, 1000, 620], hill: [260, 170, 1100, 840], atp: [100, 280, 1200, 420], atpase: [180, 130, 1240, 780],
  glucose: [100, 120, 1350, 560], maize: [100, 80, 1450, 880], rubisco: [150, 200, 1350, 700], photoresp: [40, 150, 1500, 620], factors: [150, 140, 1300, 800],
  barrel: [380, 140, 860, 780], co2graph: [120, 150, 1320, 760], tempgraph: [120, 150, 1320, 760], wilt: [350, 220, 1100, 800]
};
Object.keys(CROP).forEach(n => { V[n] = (lang) => { P.L = lang || 'en'; const [x, y, w, h] = CROP[n]; return D.svg(1600, 1000, () => SCENE[n]()).replace('viewBox="0 0 1600 1000"', `viewBox="${x} ${y} ${w} ${h}"`); }; });
