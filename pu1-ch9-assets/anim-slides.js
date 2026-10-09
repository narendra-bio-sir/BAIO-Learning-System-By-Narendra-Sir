const PREV = [
{ title: T('How a <em>peptide bond</em> forms','<em>ಪೆಪ್ಟೈಡ್ ಬಂಧ</em> ಹೇಗೆ ರೂಪುಗೊಳ್ಳುತ್ತದೆ','<em>पेप्टाइड बंध</em> कैसे बनता है'),
  css: `
   #water{opacity:0;transform:translate(0,-120px)} #ring1,#ring2{opacity:0;transition:opacity .5s}
   .s1 #oh,.s1 #hh{fill:#b3261e}
   .s1 #ring1,.s1 #ring2{opacity:1}
   .s2 #oh{transform:translate(170px,230px);opacity:0}
   .s2 #hh{transform:translate(-130px,230px);opacity:0}
   .s2 #water{opacity:1;transform:translate(0,0)}
   .s3 #water{opacity:0;transform:translate(260px,140px)}
   .s3 #aa2{transform:translate(-300px,0)}
   .s2 #ring1,.s2 #ring2{opacity:0}`,
  art: L => `
   <g id="aa1" class="g"><text x="640" y="300" text-anchor="end" font-size="84">H₂N–CH₂–CO</text>
     <text x="440" y="190" text-anchor="middle" font-size="44" fill="#0b7f72">${T('Glycine','ಗ್ಲೈಸಿನ್','ग्लाइसीन')[L]}</text></g>
   <text id="oh" class="g" x="648" y="300" font-size="84" fill="#0c1830">OH</text>
   <text id="hh" class="g" x="960" y="300" font-size="84" fill="#0c1830">H</text>
   <g id="aa2" class="g"><text x="1022" y="300" font-size="84">NH–CH(CH₃)–COOH</text>
     <text x="1320" y="190" text-anchor="middle" font-size="44" fill="#0b7f72">${T('Alanine','ಅಲನೀನ್','ऐलानीन')[L]}</text></g>
   <rect id="ring1" x="632" y="220" width="150" height="110" rx="22" fill="none" stroke="#b3261e" stroke-width="7"/>
   <rect id="ring2" x="950" y="220" width="200" height="110" rx="22" fill="none" stroke="#b3261e" stroke-width="7"/>
   <g id="water" class="g"><circle cx="900" cy="530" r="78" fill="#d8eefb" stroke="#3a7bd5" stroke-width="5"/>
     <text x="900" y="552" text-anchor="middle" font-size="58" fill="#1b5fa8">H₂O</text>
     <text x="900" y="660" text-anchor="middle" font-size="40" fill="#1b5fa8">${T('Water','ನೀರು','जल')[L]}</text></g>
   <g class="in3"><line x1="648" y1="272" x2="718" y2="272" stroke="#D4AF37" stroke-width="10"/><rect x="455" y="215" width="400" height="120" rx="24" fill="none" stroke="#D4AF37" stroke-width="8"/>
     <line x1="630" y1="335" x2="630" y2="430" stroke="#8a6508" stroke-width="6"/>
     <text x="630" y="490" text-anchor="middle" font-size="54" fill="#8a6508">${T('Peptide bond','ಪೆಪ್ಟೈಡ್ ಬಂಧ','पेप्टाइड बंध')[L]}</text>
     <text x="1300" y="420" text-anchor="middle" font-size="50" fill="#0b7f72">${T('Dipeptide','ಡೈಪೆಪ್ಟೈಡ್','डाइपेप्टाइड')[L]}</text></g>
   <g class="in4">${['Gly','Ala','Ser','Lys','Val','Cys','Tyr','Gly'].map((a,i)=>`<g class="in4" style="transition-delay:${i*0.18}s"><circle cx="${300+i*190}" cy="650" r="62" fill="${['#2DD4BF','#e9c868','#c9b8ff','#ffb08a','#8ec9ff','#ff9a9a','#e9c868','#2DD4BF'][i]}" stroke="#0c1830" stroke-width="4"/><text x="${300+i*190}" y="666" text-anchor="middle" font-size="40">${a}</text></g>`).join('')}
     <path class="draw draw4" pathLength="1" d="M362,650 H1568" stroke="#8a6508" stroke-width="6" fill="none" style="transition-delay:.3s"/>
     <text x="960" y="790" text-anchor="middle" font-size="50" fill="#0b7f72">${T('Polypeptide chain → primary structure','ಪಾಲಿಪೆಪ್ಟೈಡ್ ಸರಪಳಿ → ಪ್ರಾಥಮಿಕ ರಚನೆ','पॉलीपेप्टाइड शृंखला → प्राथमिक संरचना')[L]}</text></g>`,
  steps: [
   T('Proteins are built by joining amino acids. Here are two amino acids: glycine and alanine.','ಅಮೈನೋ ಆಮ್ಲಗಳು ಜೋಡಣೆಯಾಗಿ ಪ್ರೋಟೀನ್‌ಗಳು ರೂಪುಗೊಳ್ಳುತ್ತವೆ. ಇಲ್ಲಿ ಎರಡು ಅಮೈನೋ ಆಮ್ಲಗಳಿವೆ: ಗ್ಲೈಸಿನ್ ಮತ್ತು ಅಲನೀನ್.','अमीनो अम्ल जुड़कर प्रोटीन बनाते हैं। यहाँ दो अमीनो अम्ल हैं: ग्लाइसीन और ऐलानीन।'),
   T('Look at the carboxyl group of glycine and the amino group of alanine.','ಗ್ಲೈಸಿನ್‌ನ ಕಾರ್ಬಾಕ್ಸಿಲ್ ಗುಂಪು ಮತ್ತು ಅಲನೀನ್‌ನ ಅಮೈನೋ ಗುಂಪನ್ನು ಗಮನಿಸಿ.','ग्लाइसीन के कार्बोक्सिल समूह और ऐलानीन के अमीनो समूह को देखिए।'),
   T('An OH from the carboxyl group and an H from the amino group are removed together as one molecule of water.','ಕಾರ್ಬಾಕ್ಸಿಲ್ ಗುಂಪಿನ OH ಮತ್ತು ಅಮೈನೋ ಗುಂಪಿನ H ಒಟ್ಟಿಗೆ ಒಂದು ನೀರಿನ ಅಣುವಾಗಿ ಹೊರಹೋಗುತ್ತವೆ.','कार्बोक्सिल समूह का OH और अमीनो समूह का H मिलकर जल के एक अणु के रूप में निकल जाते हैं।'),
   T('The carbon and the nitrogen now join. This bond is called a peptide bond, and the new molecule is a dipeptide.','ಈಗ ಕಾರ್ಬನ್ ಮತ್ತು ನೈಟ್ರೋಜನ್ ಜೋಡಣೆಯಾಗುತ್ತವೆ. ಈ ಬಂಧವನ್ನು ಪೆಪ್ಟೈಡ್ ಬಂಧ ಎನ್ನುತ್ತಾರೆ. ಹೊಸ ಅಣು ಡೈಪೆಪ್ಟೈಡ್.','अब कार्बन और नाइट्रोजन जुड़ जाते हैं। इस बंध को पेप्टाइड बंध कहते हैं, और नया अणु डाइपेप्टाइड है।'),
   T('Repeating this again and again makes a long chain called a polypeptide. This sequence is the primary structure of a protein.','ಈ ಕ್ರಿಯೆ ಮತ್ತೆ ಮತ್ತೆ ನಡೆದಾಗ ಪಾಲಿಪೆಪ್ಟೈಡ್ ಎಂಬ ಉದ್ದ ಸರಪಳಿ ಉಂಟಾಗುತ್ತದೆ. ಈ ಅನುಕ್ರಮವೇ ಪ್ರೋಟೀನ್‌ನ ಪ್ರಾಥಮಿಕ ರಚನೆ.','यह क्रिया बार-बार होने पर पॉलीपेप्टाइड नाम की लंबी शृंखला बनती है। यही अनुक्रम प्रोटीन की प्राथमिक संरचना है।')
  ] },

{ title: T('The <em>TCA method</em> — step by step','<em>TCA ವಿಧಾನ</em> — ಹಂತ ಹಂತವಾಗಿ','<em>TCA विधि</em> — चरण दर चरण'),
  css: `
   #fill{transform-origin:1150px 754px;transform-box:view-box;transform:scaleY(0);transition:transform 4s ease}
   .s1 #leaf{transform:translate(294px,90px) scale(.6)} .s1 #flask{transform:translate(8px,90px) scale(.6)}
   .s1 #leaf,.s1 #flask{opacity:0}
   .s1 #pestle{animation:grind .5s ease-in-out 4 alternate}
   @keyframes grind{from{transform:rotate(-14deg)}to{transform:rotate(14deg)}}
   .s2 #slurry{transform:translate(430px,-170px);opacity:.0}
   .s2 .drop{animation:drip 1.1s linear infinite}
   @keyframes drip{0%{transform:translateY(0);opacity:0}15%{opacity:1}100%{transform:translateY(190px);opacity:0}}
   .s2 #fill{transform:scaleY(1)}`,
  art: L => `
   <g id="leaf" class="g emo"><text x="260" y="420" font-size="150">🌿</text></g>
   <text class="out1" x="335" y="500" text-anchor="middle" font-size="40" fill="#0b7f72">${T('Living tissue','ಜೀವಂತ ಅಂಗಾಂಶ','जीवित ऊतक')[L]}</text>
   <text class="out1" x="590" y="380" text-anchor="middle" font-size="80" fill="#8a6508">+</text>
   <g id="flask" class="g emo"><text x="740" y="420" font-size="150">🧪</text></g>
   <text class="out1" x="830" y="500" text-anchor="middle" font-size="40" fill="#0b7f72">TCA (Cl₃CCOOH)</text>
   <g class="in1">
     <path d="M590,400 Q700,560 810,400 Z" fill="#e7dcc4" stroke="#6b5a3c" stroke-width="7"/>
     <g id="pestle" style="transform-origin:760px 420px;transform-box:view-box"><rect x="742" y="250" width="34" height="180" rx="16" fill="#8b7355"/></g>
     <g id="slurry" class="g"><ellipse cx="700" cy="425" rx="85" ry="22" fill="#7c9a3a"/></g>
     <text x="700" y="610" text-anchor="middle" font-size="42" fill="#0b7f72">${T('Slurry','ಸ್ಲರಿ','घोल')[L]}</text>
     <path class="draw draw1" pathLength="1" d="M840,420 H1000" stroke="#8a6508" stroke-width="8" fill="none" marker-end="url(#ah)"/>
   </g>
   <defs><marker id="ah" markerWidth="10" markerHeight="10" refX="6" refY="5" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#8a6508"/></marker></defs>
   <g class="in2">
     <path d="M1020,190 H1280 L1170,330 V400 H1130 V330 Z" fill="#fff6dc" stroke="#6b5a3c" stroke-width="7"/>
     <path d="M1045,200 Q1150,250 1255,200" fill="none" stroke="#b9a37a" stroke-width="10" stroke-dasharray="14 8"/>
     <ellipse cx="1150" cy="222" rx="70" ry="16" fill="#7c9a3a"/>
     <circle class="drop" cx="1150" cy="410" r="11" fill="#5fb3a8"/><circle class="drop" cx="1150" cy="410" r="11" fill="#5fb3a8" style="animation-delay:.55s"/>
     <rect x="1070" y="560" width="160" height="200" rx="12" fill="none" stroke="#6b5a3c" stroke-width="7"/>
     <rect id="fill" x="1076" y="640" width="148" height="114" fill="#8fd3c9"/>
     <text x="1000" y="215" text-anchor="end" font-size="40" fill="#6b5a3c">${T('Cheesecloth','ಚೀಸ್‌ಕ್ಲಾತ್','चीज़क्लॉथ')[L]}</text>
   </g>
   <g class="in3"><rect x="1300" y="560" width="560" height="200" rx="26" fill="#e2f3f0" stroke="#0b7f72" stroke-width="6"/>
     <text x="1330" y="625" font-size="48" fill="#0b7f72">${T('Filtrate','ಸೋಸಿದ ದ್ರವ','निस्यंद')[L]}</text>
     <text x="1330" y="685" font-size="38">${T('Acid-soluble','ಆಮ್ಲ-ವಿಲೇಯ','अम्ल-विलेय')[L]}</text>
     <text x="1330" y="740" font-size="38">→ ${T('Biomicromolecules','ಜೈವಿಕ ಸೂಕ್ಷ್ಮಅಣುಗಳು','जैव-सूक्ष्म अणु')[L]}</text></g>
   <g class="in4"><rect x="1300" y="250" width="560" height="200" rx="26" fill="#fdf6e1" stroke="#D4AF37" stroke-width="6"/>
     <text x="1330" y="315" font-size="48" fill="#8a6508">${T('Retentate','ಉಳಿಕೆ','अवशेष')[L]}</text>
     <text x="1330" y="375" font-size="38">${T('Acid-insoluble','ಆಮ್ಲ-ಅವಿಲೇಯ','अम्ल-अविलेय')[L]}</text>
     <text x="1330" y="430" font-size="38">→ ${T('Biomacromolecules','ಜೈವಿಕ ಬೃಹದಣುಗಳು','जैव-वृहत् अणु')[L]}</text>
     <path d="M1230,222 Q1270,260 1300,300" fill="none" stroke="#D4AF37" stroke-width="6"/></g>`,
  steps: [
   T('To find the organic compounds in a living tissue, we use the TCA method. We take a living tissue and trichloroacetic acid.','ಜೀವಂತ ಅಂಗಾಂಶದಲ್ಲಿನ ಸಾವಯವ ಸಂಯುಕ್ತಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಲು TCA ವಿಧಾನವನ್ನು ಬಳಸುತ್ತೇವೆ. ಒಂದು ಜೀವಂತ ಅಂಗಾಂಶ ಮತ್ತು ಟ್ರೈಕ್ಲೋರೋಅಸಿಟಿಕ್ ಆಮ್ಲವನ್ನು ತೆಗೆದುಕೊಳ್ಳುತ್ತೇವೆ.','जीवित ऊतक में कार्बनिक यौगिकों का पता लगाने के लिए हम TCA विधि अपनाते हैं। हम एक जीवित ऊतक और ट्राइक्लोरोऐसीटिक अम्ल लेते हैं।'),
   T('The tissue is ground in the acid with a mortar and pestle. This gives a thick slurry.','ಅಂಗಾಂಶವನ್ನು ಆಮ್ಲದೊಂದಿಗೆ ಒರಳು ಮತ್ತು ಕುಟ್ಟಣಿಯಿಂದ ಅರೆಯಲಾಗುತ್ತದೆ. ಇದರಿಂದ ದಪ್ಪ ಸ್ಲರಿ ಸಿಗುತ್ತದೆ.','ऊतक को अम्ल में खरल और मूसल से पीसा जाता है। इससे गाढ़ा घोल बनता है।'),
   T('The slurry is filtered through a cheesecloth. The liquid passes through, and some material stays on the cloth.','ಸ್ಲರಿಯನ್ನು ಚೀಸ್‌ಕ್ಲಾತ್ ಮೂಲಕ ಸೋಸಲಾಗುತ್ತದೆ. ದ್ರವ ಕೆಳಗೆ ಇಳಿಯುತ್ತದೆ, ಸ್ವಲ್ಪ ವಸ್ತು ಬಟ್ಟೆಯ ಮೇಲೆ ಉಳಿಯುತ್ತದೆ.','घोल को चीज़क्लॉथ से छाना जाता है। द्रव नीचे निकल जाता है और कुछ पदार्थ कपड़े पर रह जाता है।'),
   T('The liquid is the filtrate, the acid-soluble fraction. It contains biomicromolecules.','ಕೆಳಗೆ ಬಂದ ದ್ರವವೇ ಸೋಸಿದ ದ್ರವ, ಅಂದರೆ ಆಮ್ಲ-ವಿಲೇಯ ಭಾಗ. ಇದರಲ್ಲಿ ಜೈವಿಕ ಸೂಕ್ಷ್ಮಅಣುಗಳಿವೆ.','नीचे आया द्रव निस्यंद है, यानी अम्ल-विलेय अंश। इसमें जैव-सूक्ष्म अणु होते हैं।'),
   T('What stays on the cloth is the retentate, the acid-insoluble fraction. It contains biomacromolecules.','ಬಟ್ಟೆಯ ಮೇಲೆ ಉಳಿದದ್ದು ಉಳಿಕೆ, ಅಂದರೆ ಆಮ್ಲ-ಅವಿಲೇಯ ಭಾಗ. ಇದರಲ್ಲಿ ಜೈವಿಕ ಬೃಹದಣುಗಳಿವೆ.','कपड़े पर बचा पदार्थ अवशेष है, यानी अम्ल-अविलेय अंश। इसमें जैव-वृहत् अणु होते हैं।')
  ] },

{ title: T('How an <em>enzyme</em> works','<em>ಕಿಣ್ವ</em> ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ','<em>एंज़ाइम</em> कैसे काम करता है'),
  css: `
   .s1 #sub{transform:translate(-555px,175px)}
   .s2 #enz{transform:scale(1.04,.95)} .s2 #sub{transform:translate(-555px,182px)}
   .s3 #subA{transform:translate(-30px,0)} .s3 #subB{transform:translate(30px,0)}
   .s4 #enz{transform:none} .s4 #sub{transform:translate(-555px,175px)}
   .s4 #subA{transform:translate(380px,-330px);opacity:0} .s4 #subB{transform:translate(520px,-60px);opacity:0}`,
  art: L => `
   <g id="enz" class="g" style="transform-origin:760px 520px">
     <path d="M420,420 C420,240 560,230 640,300 L640,380 L880,380 L880,300 C960,230 1100,240 1100,420 C1100,700 940,760 760,760 C580,760 420,700 420,420 Z" fill="#d8f1ec" stroke="#0b7f72" stroke-width="9"/>
     <text x="760" y="620" text-anchor="middle" font-size="64" fill="#0b7f72">${T('Enzyme','ಕಿಣ್ವ','एंज़ाइम')[L]}</text>
   </g>
   <text class="out1" x="760" y="250" text-anchor="middle" font-size="44" fill="#5b3fa8">${T('Active site','ಸಕ್ರಿಯ ತಾಣ','सक्रिय स्थल')[L]} ↓</text>
   <g id="sub" class="g">
     <g id="subA" class="g"><rect x="1210" y="120" width="120" height="90" rx="16" fill="#ffb08a" stroke="#0c1830" stroke-width="5"/></g>
     <g id="subB" class="g"><rect x="1330" y="120" width="120" height="90" rx="16" fill="#c9b8ff" stroke="#0c1830" stroke-width="5"/></g>
   </g>
   <text class="out1" x="1330" y="270" text-anchor="middle" font-size="44" fill="#b3261e">${T('Substrate','ಸಬ್‌ಸ್ಟ್ರೇಟ್','क्रियाधार')[L]}</text>
   <text class="in1 out3" x="1170" y="470" font-size="52" fill="#0c1830">${T('ES complex','ES ಸಂಕೀರ್ಣ','ES संकुल')[L]}</text>
   <text class="in2 out3" x="1170" y="540" font-size="44" fill="#5b3fa8">${T('Induced fit','ಪ್ರೇರಿತ ಹೊಂದಾಣಿಕೆ','प्रेरित फिट')[L]}</text>
   <g class="in3 out4"><text x="760" y="300" text-anchor="middle" font-size="70" class="emo">⚡</text>
     <text x="1170" y="470" font-size="42" fill="#b3261e">${T('Bonds break → products','ಬಂಧ ಮುರಿಯುತ್ತದೆ → ಉತ್ಪನ್ನಗಳು','बंध टूटते हैं → उत्पाद')[L]}</text></g>
   <g class="in4"><text x="1170" y="560" font-size="52" fill="#0b7f72">${T('Products released','ಉತ್ಪನ್ನಗಳು ಬಿಡುಗಡೆ','उत्पाद मुक्त')[L]}</text>
     <text x="1170" y="640" font-size="38" fill="#0c1830">↻ ${T('Enzyme unchanged — ready again','ಕಿಣ್ವ ಬದಲಾಗಿಲ್ಲ — ಮತ್ತೆ ಸಿದ್ಧ','एंज़ाइम अपरिवर्तित — फिर तैयार')[L]}</text></g>`,
  steps: [
   T('This is an enzyme. The pocket on its surface is the active site. The small molecule is the substrate.','ಇದು ಒಂದು ಕಿಣ್ವ. ಅದರ ಮೇಲ್ಮೈಯಲ್ಲಿರುವ ಕುಳಿಯೇ ಸಕ್ರಿಯ ತಾಣ. ಚಿಕ್ಕ ಅಣುವೇ ಸಬ್‌ಸ್ಟ್ರೇಟ್.','यह एक एंज़ाइम है। इसकी सतह पर बना गड्ढा सक्रिय स्थल है। छोटा अणु क्रियाधार है।'),
   T('The substrate fits into the active site. Together they form the enzyme–substrate complex.','ಸಬ್‌ಸ್ಟ್ರೇಟ್ ಸಕ್ರಿಯ ತಾಣದಲ್ಲಿ ಹೊಂದಿಕೊಳ್ಳುತ್ತದೆ. ಎರಡೂ ಸೇರಿ ಕಿಣ್ವ–ಸಬ್‌ಸ್ಟ್ರೇಟ್ ಸಂಕೀರ್ಣ ಆಗುತ್ತದೆ.','क्रियाधार सक्रिय स्थल में फिट हो जाता है। दोनों मिलकर एंज़ाइम–क्रियाधार संकुल बनाते हैं।'),
   T('The enzyme changes its shape slightly and holds the substrate more tightly. This is called induced fit.','ಕಿಣ್ವ ತನ್ನ ಆಕಾರವನ್ನು ಸ್ವಲ್ಪ ಬದಲಿಸಿ ಸಬ್‌ಸ್ಟ್ರೇಟ್ ಅನ್ನು ಇನ್ನಷ್ಟು ಬಿಗಿಯಾಗಿ ಹಿಡಿಯುತ್ತದೆ. ಇದನ್ನು ಪ್ರೇರಿತ ಹೊಂದಾಣಿಕೆ ಎನ್ನುತ್ತಾರೆ.','एंज़ाइम अपना आकार थोड़ा बदलकर क्रियाधार को और कसकर पकड़ता है। इसे प्रेरित फिट कहते हैं।'),
   T('Bonds in the substrate break, and it changes into products.','ಸಬ್‌ಸ್ಟ್ರೇಟ್‌ನ ಬಂಧಗಳು ಮುರಿದು ಅದು ಉತ್ಪನ್ನಗಳಾಗಿ ಬದಲಾಗುತ್ತದೆ.','क्रियाधार के बंध टूटते हैं और वह उत्पादों में बदल जाता है।'),
   T('The products are released. The enzyme comes out unchanged and is ready to bind a new substrate.','ಉತ್ಪನ್ನಗಳು ಬಿಡುಗಡೆಯಾಗುತ್ತವೆ. ಕಿಣ್ವ ಬದಲಾಗದೆ ಉಳಿದು ಹೊಸ ಸಬ್‌ಸ್ಟ್ರೇಟ್‌ಗೆ ಸಿದ್ಧವಾಗುತ್ತದೆ.','उत्पाद मुक्त हो जाते हैं। एंज़ाइम बिना बदले रहता है और नए क्रियाधार के लिए तैयार हो जाता है।')
  ] },

{ title: T('Substrate concentration &amp; <em>enzyme speed</em>','ಸಬ್‌ಸ್ಟ್ರೇಟ್ ಸಾಂದ್ರತೆ ಮತ್ತು <em>ಕಿಣ್ವದ ವೇಗ</em>','क्रियाधार सांद्रता और <em>एंज़ाइम की गति</em>'),
  css: ``,
  art: L => {
    const X0 = 360, Y0 = 720, W = 1100, H = 560, Vm = 0.86, Km = 0.12;
    let d = '';
    for (let i = 0; i <= 120; i++) { const s = i / 120, v = Vm * s / (Km + s); d += (i ? 'L' : 'M') + (X0 + s * W).toFixed(1) + ',' + (Y0 - v * H).toFixed(1); }
    const yV = Y0 - Vm * H, yH = Y0 - Vm / 2 * H, xK = X0 + Km * W;
    return `
     <path class="draw draw0" pathLength="1" d="M${X0},${Y0 - H - 30} V${Y0} H${X0 + W + 40}" stroke="#0c1830" stroke-width="8" fill="none"/>
     <text x="${X0 + W / 2}" y="${Y0 + 80}" text-anchor="middle" font-size="44">${T('Substrate concentration [S] →','ಸಬ್‌ಸ್ಟ್ರೇಟ್ ಸಾಂದ್ರತೆ [S] →','क्रियाधार सांद्रता [S] →')[L]}</text>
     <text x="${X0 - 40}" y="${Y0 - H * 0.78}" text-anchor="middle" font-size="44" transform="rotate(-90 ${X0 - 40} ${Y0 - H * 0.78})">${T('Velocity (V) →','ವೇಗ (V) →','वेग (V) →')[L]}</text>
     <path class="draw draw1" pathLength="1" d="${d}" stroke="#0b7f72" stroke-width="12" fill="none" style="transition-duration:3s"/>
     <g class="in2"><line x1="${X0}" y1="${yV}" x2="${X0 + W}" y2="${yV}" stroke="#8a6508" stroke-width="6" stroke-dasharray="18 12"/>
       <text x="${X0 + W + 20}" y="${yV + 16}" font-size="50" fill="#8a6508">Vmax</text>
       <text x="${X0 + W * 0.62}" y="${yV - 30}" text-anchor="middle" font-size="40" fill="#8a6508">${T('All enzymes busy','ಎಲ್ಲಾ ಕಿಣ್ವಗಳು ಕಾರ್ಯನಿರತ','सभी एंज़ाइम व्यस्त')[L]}</text></g>
     <g class="in3"><line x1="${X0}" y1="${yH}" x2="${xK}" y2="${yH}" stroke="#5b3fa8" stroke-width="6" stroke-dasharray="14 10"/>
       <line x1="${xK}" y1="${yH}" x2="${xK}" y2="${Y0}" stroke="#5b3fa8" stroke-width="6" stroke-dasharray="14 10"/>
       <circle cx="${xK}" cy="${yH}" r="14" fill="#5b3fa8"/>
       <text x="${X0 - 20}" y="${yH + 14}" text-anchor="end" font-size="42" fill="#5b3fa8">½ Vmax</text>
       <text x="${xK}" y="${Y0 + 50}" text-anchor="middle" font-size="46" fill="#5b3fa8">Km</text></g>`;
  },
  steps: [
   T('Here, substrate concentration is on the x-axis, and the velocity of the reaction is on the y-axis.','ಇಲ್ಲಿ x-ಅಕ್ಷದಲ್ಲಿ ಸಬ್‌ಸ್ಟ್ರೇಟ್ ಸಾಂದ್ರತೆ ಮತ್ತು y-ಅಕ್ಷದಲ್ಲಿ ಕ್ರಿಯೆಯ ವೇಗವಿದೆ.','यहाँ x-अक्ष पर क्रियाधार सांद्रता और y-अक्ष पर अभिक्रिया का वेग है।'),
   T('As we add more substrate, the velocity rises quickly at first.','ಹೆಚ್ಚು ಸಬ್‌ಸ್ಟ್ರೇಟ್ ಸೇರಿಸಿದಂತೆ, ಮೊದಲು ವೇಗ ಬೇಗನೆ ಹೆಚ್ಚುತ್ತದೆ.','जैसे-जैसे क्रियाधार बढ़ाते हैं, शुरुआत में वेग तेज़ी से बढ़ता है।'),
   T('Then the curve levels off. Every enzyme molecule is busy, so the velocity reaches its maximum, called V max.','ನಂತರ ವಕ್ರರೇಖೆ ಸಮತಟ್ಟಾಗುತ್ತದೆ. ಎಲ್ಲಾ ಕಿಣ್ವ ಅಣುಗಳು ಕಾರ್ಯನಿರತವಾಗಿರುವುದರಿಂದ ವೇಗ ಗರಿಷ್ಠ ಮಟ್ಟ ತಲುಪುತ್ತದೆ. ಇದನ್ನು ವಿ ಮ್ಯಾಕ್ಸ್ ಎನ್ನುತ್ತಾರೆ.','फिर वक्र समतल हो जाता है। सभी एंज़ाइम अणु व्यस्त हैं, इसलिए वेग अधिकतम पर पहुँचता है, जिसे वी मैक्स कहते हैं।'),
   T('The substrate concentration at which the velocity is half of V max is called K m.','ವೇಗ ವಿ ಮ್ಯಾಕ್ಸ್‌ನ ಅರ್ಧದಷ್ಟಿರುವಾಗಿನ ಸಬ್‌ಸ್ಟ್ರೇಟ್ ಸಾಂದ್ರತೆಯನ್ನು ಕೆ ಎಮ್ ಎನ್ನುತ್ತಾರೆ.','जिस क्रियाधार सांद्रता पर वेग वी मैक्स का आधा होता है, उसे के एम कहते हैं।')
  ] }
];


/* ---- ASHING ---- */
const SL_ASH = { title: T('The <em>ashing method</em>','<em>ಭಸ್ಮೀಕರಣ</em> ವಿಧಾನ','<em>भस्मीकरण</em> विधि'),
  css: `
   .drop{transition:transform 1.4s ease, opacity 1.2s ease}
   .s1 .drop{transform:translateY(-170px);opacity:0}
   .s2 #tissue{transform:translate(470px,40px) scale(.75)}
   .flame{transform-origin:center bottom;transform-box:fill-box}
   .s2 .flame{animation:flick .35s ease-in-out infinite alternate}
   @keyframes flick{from{transform:scaleY(.85)}to{transform:scaleY(1.12)}}
   .puff{opacity:0}
   .s3 .puff{animation:rise 2.4s ease-out infinite}
   @keyframes rise{0%{transform:translateY(0);opacity:0}20%{opacity:1}100%{transform:translateY(-180px);opacity:0}}
   .s4 #tissue{opacity:0} .s4 .flame,.s4 .puff{animation:none;opacity:0}`,
  art: L => `
   <g id="tissue" class="g"><text x="300" y="520" font-size="190" class="emo">🌿</text></g>
   ${[[200,400],[545,380],[215,520],[560,510]].map(([x,y],i)=>`<text class="drop emo" x="${x}" y="${y}" font-size="64" style="transition-delay:${i*0.15}s">💧</text>`).join('')}
   <text class="out1" x="400" y="640" text-anchor="middle" font-size="44" fill="#0b7f72">${T('Living tissue','ಜೀವಂತ ಅಂಗಾಂಶ','जीवित ऊतक')[L]}</text>
   <g class="in1 out2"><text x="400" y="640" text-anchor="middle" font-size="44" fill="#8a6508">${T('Water evaporates → dry weight','ನೀರು ಆವಿಯಾಗುತ್ತದೆ → ಒಣ ತೂಕ','जल वाष्पित → शुष्क भार')[L]}</text></g>
   <g class="in2">
     <path d="M760,560 L790,700 H1010 L1040,560 Z" fill="#d9d2c3" stroke="#5b5346" stroke-width="7"/>
     <text class="flame emo" x="815" y="790" font-size="80">🔥</text><text class="flame emo" x="900" y="800" font-size="90">🔥</text>
     <text x="1100" y="760" font-size="44" fill="#b3261e">${T('Burn (combustion)','ದಹನ','दहन')[L]}</text>
   </g>
   <g class="in3">
     <text class="puff" x="895" y="370" font-size="46" fill="#5a6378">CO₂</text>
     <text class="puff" x="985" y="370" font-size="46" fill="#5a6378" style="animation-delay:.8s">H₂O</text>
     <text class="puff" x="940" y="330" font-size="46" fill="#5a6378" style="animation-delay:1.6s">N₂</text>
     <g class="out4"><text x="1110" y="400" font-size="40" fill="#5a6378">${T('Organic compounds','ಸಾವಯವ ಸಂಯುಕ್ತಗಳು','कार्बनिक यौगिक')[L]}</text><text x="1110" y="455" font-size="40" fill="#5a6378">${T('escape as gases','ಅನಿಲಗಳಾಗಿ ಹೊರಹೋಗುತ್ತವೆ','गैस बनकर निकल जाते हैं')[L]}</text></g>
   </g>
   <g class="in4">
     <ellipse cx="900" cy="565" rx="110" ry="26" fill="#9b9b9b"/>
     <text x="900" y="660" text-anchor="middle" font-size="48" fill="#0c1830">${T('Ash','ಬೂದಿ','राख')[L]}</text>
     ${['Ca','Mg','Na⁺','K⁺','NaCl','CaCO₃','PO₄³⁻','SO₄²⁻'].map((c,i)=>`<g class="in4" style="transition-delay:${0.2+i*0.15}s"><rect x="${1150+(i%4)*175}" y="${250+Math.floor(i/4)*120}" width="160" height="90" rx="18" fill="#fff" stroke="#0b7f72" stroke-width="5"/><text x="${1230+(i%4)*175}" y="${310+Math.floor(i/4)*120}" text-anchor="middle" font-size="44">${c}</text></g>`).join('')}
     <text x="1490" y="540" text-anchor="middle" font-size="44" fill="#0b7f72">${T('Inorganic elements &amp; compounds','ಅಜೈವಿಕ ಧಾತುಗಳು ಮತ್ತು ಸಂಯುಕ್ತಗಳು','अकार्बनिक तत्व और यौगिक')[L]}</text>
   </g>`,
  steps: [
   T('To find the inorganic compounds in a tissue, we use the ashing method. We start with a fresh living tissue.','ಅಂಗಾಂಶದಲ್ಲಿನ ಅಜೈವಿಕ ಸಂಯುಕ್ತಗಳನ್ನು ಪತ್ತೆಹಚ್ಚಲು ಭಸ್ಮೀಕರಣ ವಿಧಾನವನ್ನು ಬಳಸುತ್ತೇವೆ. ತಾಜಾ ಜೀವಂತ ಅಂಗಾಂಶದಿಂದ ಪ್ರಾರಂಭಿಸುತ್ತೇವೆ.','ऊतक में अकार्बनिक यौगिकों का पता लगाने के लिए हम भस्मीकरण विधि अपनाते हैं। हम एक ताज़े जीवित ऊतक से शुरू करते हैं।'),
   T('First the tissue is dried, so that all the water evaporates. What remains is the dry weight.','ಮೊದಲು ಅಂಗಾಂಶವನ್ನು ಒಣಗಿಸಲಾಗುತ್ತದೆ, ಆಗ ಎಲ್ಲಾ ನೀರು ಆವಿಯಾಗುತ್ತದೆ. ಉಳಿದದ್ದು ಒಣ ತೂಕ.','पहले ऊतक को सुखाया जाता है, जिससे सारा जल वाष्पित हो जाता है। जो बचता है, वह शुष्क भार है।'),
   T('The dried tissue is then burnt completely.','ನಂತರ ಒಣಗಿದ ಅಂಗಾಂಶವನ್ನು ಸಂಪೂರ್ಣವಾಗಿ ಸುಡಲಾಗುತ್ತದೆ.','फिर सूखे ऊतक को पूरी तरह जलाया जाता है।'),
   T('All the organic compounds burn away and escape as gases, such as carbon dioxide and water vapour.','ಎಲ್ಲಾ ಸಾವಯವ ಸಂಯುಕ್ತಗಳು ಸುಟ್ಟು ಕಾರ್ಬನ್ ಡೈಆಕ್ಸೈಡ್ ಮತ್ತು ನೀರಾವಿಯಂತಹ ಅನಿಲಗಳಾಗಿ ಹೊರಹೋಗುತ್ತವೆ.','सभी कार्बनिक यौगिक जलकर कार्बन डाइऑक्साइड और जलवाष्प जैसी गैसों के रूप में निकल जाते हैं।'),
   T('What is left behind is ash. It contains the inorganic elements and compounds, like calcium, magnesium, sodium chloride and phosphate.','ಉಳಿಯುವುದು ಬೂದಿ. ಅದರಲ್ಲಿ ಕ್ಯಾಲ್ಸಿಯಂ, ಮೆಗ್ನೀಸಿಯಂ, ಸೋಡಿಯಂ ಕ್ಲೋರೈಡ್ ಮತ್ತು ಫಾಸ್ಫೇಟ್‌ನಂತಹ ಅಜೈವಿಕ ಧಾತುಗಳು ಮತ್ತು ಸಂಯುಕ್ತಗಳಿವೆ.','जो बचता है वह राख है। इसमें कैल्शियम, मैग्नीशियम, सोडियम क्लोराइड और फॉस्फेट जैसे अकार्बनिक तत्व और यौगिक होते हैं।')
  ] };

/* ---- ZWITTERION vs pH ---- */
const SL_ZW = { title: T('Zwitterion &amp; <em>pH</em>','ಜ್ವಿಟರ್ ಅಯಾನ್ ಮತ್ತು <em>pH</em>','ज़्विटर आयन और <em>pH</em>'),
  css: `
   #nh3,#coo,#lab1,#lab2,#lab3,#hp1,#hp2,#marker{opacity:0}
   .s1 #nh2{opacity:0} .s1 #nh3{opacity:1} .s1 #lab1{opacity:1} .s1 #marker{opacity:1;transform:translateX(0)}
   .s1 #hp1{animation:hin 1.2s ease forwards}
   @keyframes hin{0%{opacity:1;transform:translate(-160px,-120px)}80%{opacity:1}100%{opacity:0;transform:translate(0,0)}}
   .s2 #cooh{opacity:0} .s2 #coo{opacity:1} .s2 #lab1{opacity:0} .s2 #lab2{opacity:1} .s2 #marker{transform:translateX(560px)}
   .s2 #hp2{animation:hout 1.2s ease forwards}
   @keyframes hout{0%{opacity:1;transform:translate(0,0)}100%{opacity:0;transform:translate(180px,-140px)}}
   .s3 #nh3{opacity:0} .s3 #nh2{opacity:1} .s3 #lab2{opacity:0} .s3 #lab3{opacity:1} .s3 #marker{transform:translateX(1120px)}
   .s3 #hp1{animation:hout2 1.2s ease forwards}
   @keyframes hout2{0%{opacity:1;transform:translate(0,0)}100%{opacity:0;transform:translate(-200px,-140px)}}`,
  art: L => `
   <line x1="960" y1="420" x2="960" y2="290" stroke="#0c1830" stroke-width="9"/><line x1="960" y1="420" x2="960" y2="550" stroke="#0c1830" stroke-width="9"/>
   <line x1="960" y1="420" x2="800" y2="420" stroke="#0c1830" stroke-width="9"/><line x1="960" y1="420" x2="1120" y2="420" stroke="#0c1830" stroke-width="9"/>
   <circle cx="960" cy="420" r="62" fill="#0b7f72"/><text x="960" y="445" text-anchor="middle" font-size="66" fill="#fff">C</text>
   <text x="960" y="270" text-anchor="middle" font-size="70">H</text><text x="960" y="620" text-anchor="middle" font-size="70" fill="#8a6508">R</text>
   <text id="nh2" class="g" x="790" y="446" text-anchor="end" font-size="76" fill="#1b5fa8">H₂N</text>
   <text id="nh3" class="g" x="790" y="446" text-anchor="end" font-size="76" fill="#1b5fa8">H₃N⁺</text>
   <text id="cooh" class="g" x="1130" y="446" font-size="76" fill="#b3261e">COOH</text>
   <text id="coo" class="g" x="1130" y="446" font-size="76" fill="#b3261e">COO⁻</text>
   <g id="hp1"><circle cx="700" cy="350" r="34" fill="#ffd166" stroke="#8a6508" stroke-width="4"/><text x="700" y="364" text-anchor="middle" font-size="36">H⁺</text></g>
   <g id="hp2"><circle cx="1330" cy="370" r="34" fill="#ffd166" stroke="#8a6508" stroke-width="4"/><text x="1330" y="384" text-anchor="middle" font-size="36">H⁺</text></g>
   <text id="lab1" class="g" x="960" y="720" text-anchor="middle" font-size="56" fill="#1b5fa8">${T('Cation (+) · low pH','ಧನ ಅಯಾನ್ (+) · ಕಡಿಮೆ pH','धनायन (+) · कम pH')[L]}</text>
   <text id="lab2" class="g" x="960" y="720" text-anchor="middle" font-size="56" fill="#0b7f72">${T('Zwitterion · net charge 0','ಜ್ವಿಟರ್ ಅಯಾನ್ · ನಿವ್ವಳ ಆವೇಶ 0','ज़्विटर आयन · कुल आवेश 0')[L]}</text>
   <text id="lab3" class="g" x="960" y="720" text-anchor="middle" font-size="56" fill="#b3261e">${T('Anion (−) · high pH','ಋಣ ಅಯಾನ್ (−) · ಹೆಚ್ಚು pH','ऋणायन (−) · अधिक pH')[L]}</text>
   <defs><linearGradient id="phg" x1="0" x2="1"><stop offset="0" stop-color="#e8564a"/><stop offset=".5" stop-color="#2DD4BF"/><stop offset="1" stop-color="#5b6ee1"/></linearGradient></defs>
   <rect x="400" y="770" width="1120" height="26" rx="13" fill="url(#phg)"/>
   <text x="400" y="840" font-size="36" fill="#5a6378">${T('Acidic','ಆಮ್ಲೀಯ','अम्लीय')[L]}</text>
   <text x="960" y="840" text-anchor="middle" font-size="36" fill="#5a6378">${T('Isoelectric pH','ಸಮವಿದ್ಯುತ್ pH','समविभव pH')[L]}</text>
   <text x="1520" y="840" text-anchor="end" font-size="36" fill="#5a6378">${T('Alkaline','ಪ್ರತ್ಯಾಮ್ಲೀಯ','क्षारीय')[L]}</text>
   <g id="marker" class="g"><path d="M400,758 l-18,-30 h36 z" fill="#0c1830"/></g>`,
  steps: [
   T('An amino acid has an amino group and a carboxyl group. Both can gain or lose a hydrogen ion.','ಅಮೈನೋ ಆಮ್ಲದಲ್ಲಿ ಅಮೈನೋ ಗುಂಪು ಮತ್ತು ಕಾರ್ಬಾಕ್ಸಿಲ್ ಗುಂಪು ಇವೆ. ಎರಡೂ ಹೈಡ್ರೋಜನ್ ಅಯಾನನ್ನು ಪಡೆಯಬಹುದು ಅಥವಾ ಕಳೆದುಕೊಳ್ಳಬಹುದು.','अमीनो अम्ल में एक अमीनो समूह और एक कार्बोक्सिल समूह होता है। दोनों हाइड्रोजन आयन ले या छोड़ सकते हैं।'),
   T('In an acidic solution, at low pH, the amino group picks up a hydrogen ion and becomes positive. The amino acid is now a cation.','ಆಮ್ಲೀಯ ದ್ರಾವಣದಲ್ಲಿ, ಅಂದರೆ ಕಡಿಮೆ pH ನಲ್ಲಿ, ಅಮೈನೋ ಗುಂಪು ಹೈಡ್ರೋಜನ್ ಅಯಾನನ್ನು ಪಡೆದು ಧನಾತ್ಮಕವಾಗುತ್ತದೆ. ಆಗ ಅಮೈನೋ ಆಮ್ಲ ಧನ ಅಯಾನ್ ಆಗುತ್ತದೆ.','अम्लीय विलयन में, यानी कम pH पर, अमीनो समूह हाइड्रोजन आयन लेकर धनात्मक हो जाता है। अब अमीनो अम्ल धनायन है।'),
   T('At the isoelectric pH, the carboxyl group loses its hydrogen ion and becomes negative, while the amino group stays positive. This dipolar form, with no net charge, is the zwitterion.','ಸಮವಿದ್ಯುತ್ pH ನಲ್ಲಿ ಕಾರ್ಬಾಕ್ಸಿಲ್ ಗುಂಪು ಹೈಡ್ರೋಜನ್ ಅಯಾನನ್ನು ಕಳೆದುಕೊಂಡು ಋಣಾತ್ಮಕವಾಗುತ್ತದೆ, ಅಮೈನೋ ಗುಂಪು ಧನಾತ್ಮಕವಾಗಿಯೇ ಇರುತ್ತದೆ. ನಿವ್ವಳ ಆವೇಶ ಇಲ್ಲದ ಈ ದ್ವಿಧ್ರುವ ರೂಪವೇ ಜ್ವಿಟರ್ ಅಯಾನ್.','समविभव pH पर कार्बोक्सिल समूह हाइड्रोजन आयन छोड़कर ऋणात्मक हो जाता है, जबकि अमीनो समूह धनात्मक रहता है। बिना कुल आवेश वाला यह द्विध्रुवी रूप ज़्विटर आयन है।'),
   T('In an alkaline solution, at high pH, the amino group also loses its hydrogen ion. Now the amino acid is negative, an anion.','ಪ್ರತ್ಯಾಮ್ಲೀಯ ದ್ರಾವಣದಲ್ಲಿ, ಅಂದರೆ ಹೆಚ್ಚು pH ನಲ್ಲಿ, ಅಮೈನೋ ಗುಂಪೂ ಹೈಡ್ರೋಜನ್ ಅಯಾನನ್ನು ಕಳೆದುಕೊಳ್ಳುತ್ತದೆ. ಈಗ ಅಮೈನೋ ಆಮ್ಲ ಋಣ ಅಯಾನ್.','क्षारीय विलयन में, यानी अधिक pH पर, अमीनो समूह भी हाइड्रोजन आयन छोड़ देता है। अब अमीनो अम्ल ऋणायन है।')
  ] };

/* ---- PROTEIN LEVELS ---- */
const PL_N = 12;
const PL_POS = {
  lin: i => [330 + i * 115, 420],
  hel: i => [380 + i * 95, 420 + 95 * Math.sin(i * 1.15)],
  ter: i => { const a = i * 0.62, r = 70 + i * 13; return [900 + r * Math.cos(a), 450 + r * Math.sin(a)]; }
};
const PL_COL = ['#2DD4BF','#e9c868','#c9b8ff','#ffb08a','#8ec9ff','#ff9a9a'];
const SL_PROT = { title: T('Four levels of <em>protein structure</em>','ಪ್ರೋಟೀನ್ ರಚನೆಯ <em>ನಾಲ್ಕು ಹಂತಗಳು</em>','प्रोटीन संरचना के <em>चार स्तर</em>'),
  css: (() => {
    let c = '';
    for (let i = 0; i < PL_N; i++) {
      const [x0, y0] = PL_POS.lin(i), [x1, y1] = PL_POS.hel(i), [x2, y2] = PL_POS.ter(i);
      c += `#b${i}{transform:translate(${x0}px,${y0}px)} .s1 #b${i}{transform:translate(${x1}px,${y1}px)} .s2 #b${i}{transform:translate(${x2}px,${y2}px)}\n`;
    }
    c += `.s3 #beads{transform:translate(-430px,-120px) scale(.62);opacity:.0} #beads{transform-origin:900px 450px;transition:transform 1.2s ease,opacity .8s ease}
     .sub{opacity:0;transform:scale(.4);transform-origin:center;transform-box:fill-box;transition:opacity .7s ease,transform .9s cubic-bezier(.3,1.4,.4,1)}
     .s3 .sub{opacity:1;transform:scale(1)}`;
    return c;
  })(),
  art: L => `
   <g id="beads">${Array.from({ length: PL_N }, (_, i) => `<g id="b${i}" class="g"><circle r="44" fill="${PL_COL[i % 6]}" stroke="#0c1830" stroke-width="4"/></g>`).join('')}</g>
   <text class="out1" x="960" y="560" text-anchor="middle" font-size="52" fill="#0b7f72">${T('1 · Primary: sequence of amino acids','1 · ಪ್ರಾಥಮಿಕ: ಅಮೈನೋ ಆಮ್ಲಗಳ ಅನುಕ್ರಮ','1 · प्राथमिक: अमीनो अम्लों का अनुक्रम')[L]}</text>
   <text class="in1 out2" x="960" y="660" text-anchor="middle" font-size="52" fill="#0b7f72">${T('2 · Secondary: α-helix / β-sheet (H-bonds)','2 · ದ್ವಿತೀಯ: α-ಹೆಲಿಕ್ಸ್ / β-ಹಾಳೆ (H-ಬಂಧ)','2 · द्वितीयक: α-हेलिक्स / β-शीट (H-बंध)')[L]}</text>
   <text class="in2 out3" x="1420" y="430" font-size="50" fill="#0b7f72">${T('3 · Tertiary:','3 · ತೃತೀಯ:','3 · तृतीयक:')[L]}</text>
   <text class="in2 out3" x="1420" y="500" font-size="44" fill="#0c1830">${T('3-D folded, active','3-D ಮಡಚಿದ, ಸಕ್ರಿಯ','3-D मुड़ा, सक्रिय')[L]}</text>
   ${[['α',760,330,'#ff9a9a'],['α',1060,330,'#ff9a9a'],['β',760,590,'#8ec9ff'],['β',1060,590,'#8ec9ff']].map(([t,x,y,c],i)=>`<g class="sub" style="transition-delay:${i*0.2}s"><ellipse cx="${x}" cy="${y}" rx="140" ry="115" fill="${c}" stroke="#0c1830" stroke-width="5"/><text x="${x}" y="${y+28}" text-anchor="middle" font-size="84">${t}</text></g>`).join('')}
   <g class="in3"><text x="1300" y="430" font-size="50" fill="#0b7f72">${T('4 · Quaternary:','4 · ಚತುರ್ಥ:','4 · चतुर्धातुक:')[L]}</text>
     <text x="1300" y="500" font-size="44">${T('Haemoglobin = 2α + 2β','ಹೀಮೋಗ್ಲೋಬಿನ್ = 2α + 2β','हीमोग्लोबिन = 2α + 2β')[L]}</text></g>`,
  steps: [
   T('The primary structure of a protein is simply the sequence of amino acids in the chain, from the N-terminal to the C-terminal.','ಪ್ರೋಟೀನ್‌ನ ಪ್ರಾಥಮಿಕ ರಚನೆ ಎಂದರೆ ಸರಪಳಿಯಲ್ಲಿ N-ತುದಿಯಿಂದ C-ತುದಿಯವರೆಗಿನ ಅಮೈನೋ ಆಮ್ಲಗಳ ಅನುಕ್ರಮ.','प्रोटीन की प्राथमिक संरचना शृंखला में N-सिरे से C-सिरे तक अमीनो अम्लों का अनुक्रम है।'),
   T('In the secondary structure, parts of the chain coil into an alpha helix or fold into beta sheets. These are held by hydrogen bonds.','ದ್ವಿತೀಯ ರಚನೆಯಲ್ಲಿ ಸರಪಳಿಯ ಭಾಗಗಳು ಆಲ್ಫಾ ಹೆಲಿಕ್ಸ್ ಆಗಿ ಸುರುಳಿಯಾಗುತ್ತವೆ ಅಥವಾ ಬೀಟಾ ಹಾಳೆಗಳಾಗಿ ಮಡಚುತ್ತವೆ. ಇವು ಹೈಡ್ರೋಜನ್ ಬಂಧಗಳಿಂದ ಹಿಡಿದಿಡಲ್ಪಟ್ಟಿವೆ.','द्वितीयक संरचना में शृंखला के भाग अल्फ़ा हेलिक्स में कुंडलित होते हैं या बीटा शीट में मुड़ते हैं। ये हाइड्रोजन बंधों से टिके रहते हैं।'),
   T('In the tertiary structure, the whole chain folds into a compact three-dimensional shape. Only then does the protein become biologically active.','ತೃತೀಯ ರಚನೆಯಲ್ಲಿ ಇಡೀ ಸರಪಳಿ ಒಂದು ಸಾಂದ್ರ ಮೂರು ಆಯಾಮದ ಆಕಾರಕ್ಕೆ ಮಡಚುತ್ತದೆ. ಆಗ ಮಾತ್ರ ಪ್ರೋಟೀನ್ ಜೈವಿಕವಾಗಿ ಸಕ್ರಿಯವಾಗುತ್ತದೆ.','तृतीयक संरचना में पूरी शृंखला एक सघन त्रिविमीय आकार में मुड़ जाती है। तभी प्रोटीन जैविक रूप से सक्रिय होता है।'),
   T('Some proteins are made of more than one chain. Their arrangement is the quaternary structure. Haemoglobin has two alpha and two beta subunits.','ಕೆಲವು ಪ್ರೋಟೀನ್‌ಗಳು ಒಂದಕ್ಕಿಂತ ಹೆಚ್ಚು ಸರಪಳಿಗಳಿಂದ ಆಗಿವೆ. ಅವುಗಳ ಜೋಡಣೆಯೇ ಚತುರ್ಥ ರಚನೆ. ಹೀಮೋಗ್ಲೋಬಿನ್‌ನಲ್ಲಿ ಎರಡು ಆಲ್ಫಾ ಮತ್ತು ಎರಡು ಬೀಟಾ ಉಪಘಟಕಗಳಿವೆ.','कुछ प्रोटीन एक से अधिक शृंखलाओं से बने होते हैं। उनकी व्यवस्था चतुर्धातुक संरचना है। हीमोग्लोबिन में दो अल्फ़ा और दो बीटा उप-इकाइयाँ होती हैं।')
  ] };

/* ---- TRIGLYCERIDE ---- */
const SL_TG = { title: T('How a <em>triglyceride</em> forms','<em>ಟ್ರೈಗ್ಲಿಸರೈಡ್</em> ಹೇಗೆ ರೂಪುಗೊಳ್ಳುತ್ತದೆ','<em>ट्राइग्लिसराइड</em> कैसे बनता है'),
  css: `
   .rg{opacity:0;transition:opacity .5s}
   .s1 .rg{opacity:1} .s1 .hx{fill:#b3261e}
   .s2 .rg{opacity:0}
   .s2 .hx{opacity:0;transform:translate(120px,30px)}
   .s2 .fa{transform:translate(-380px,0)}
   .w{opacity:0;transform:translate(0,0)}
   .s2 .w{animation:wout 2.2s ease forwards}
   @keyframes wout{0%{opacity:0;transform:translate(0,0)}25%{opacity:1}100%{opacity:0;transform:translate(260px,160px)}}`,
  art: L => {
    const rows = [300, 470, 640];
    return `
   <text x="420" y="200" text-anchor="middle" font-size="46" fill="#0b7f72">${T('Glycerol','ಗ್ಲಿಸರಾಲ್','ग्लिसरॉल')[L]}</text>
   <text x="1250" y="200" text-anchor="middle" font-size="46" fill="#8a6508">${T('3 fatty acids','3 ಕೊಬ್ಬಿನ ಆಮ್ಲಗಳು','3 वसा अम्ल')[L]}</text>
   ${rows.map((y,i)=>`
     <text x="560" y="${y}" text-anchor="end" font-size="70">${i===1?'CH–O':'CH₂–O'}</text>
     <text class="g hx" x="568" y="${y}" font-size="70" fill="#0c1830">H</text>
     <rect class="rg" x="555" y="${y-62}" width="72" height="80" rx="14" fill="none" stroke="#b3261e" stroke-width="6"/>
     <g class="g fa">
       <text class="g hx" x="900" y="${y}" font-size="70" fill="#0c1830">HO</text>
       <text x="1000" y="${y}" font-size="70">OC–R</text>
       <path d="M1180,${y-22} l40,-26 l40,26 l40,-26 l40,26 l40,-26 l40,26" fill="none" stroke="#8a6508" stroke-width="7"/>
       <rect class="rg" x="890" y="${y-62}" width="110" height="80" rx="14" fill="none" stroke="#b3261e" stroke-width="6"/>
     </g>
     <g class="w" style="animation-delay:${i*0.25}s"><circle cx="760" cy="${y-20}" r="52" fill="#d8eefb" stroke="#3a7bd5" stroke-width="5"/><text x="760" y="${y-4}" text-anchor="middle" font-size="40" fill="#1b5fa8">H₂O</text></g>
     <rect class="in3" x="520" y="${y-66}" width="200" height="88" rx="16" fill="none" stroke="#D4AF37" stroke-width="7"/>`).join('')}
   <g class="in3"><text x="620" y="770" text-anchor="middle" font-size="48" fill="#8a6508">${T('Ester bonds','ಎಸ್ಟರ್ ಬಂಧಗಳು','एस्टर बंध')[L]}</text>
     <text x="1300" y="770" text-anchor="middle" font-size="52" fill="#0b7f72">${T('Triglyceride (fat / oil)','ಟ್ರೈಗ್ಲಿಸರೈಡ್ (ಕೊಬ್ಬು / ಎಣ್ಣೆ)','ट्राइग्लिसराइड (वसा / तेल)')[L]}</text></g>`;
  },
  steps: [
   T('A triglyceride, the main fat in ghee and oils, is made from one glycerol and three fatty acids.','ತುಪ್ಪ ಮತ್ತು ಎಣ್ಣೆಗಳಲ್ಲಿನ ಮುಖ್ಯ ಕೊಬ್ಬಾದ ಟ್ರೈಗ್ಲಿಸರೈಡ್ ಒಂದು ಗ್ಲಿಸರಾಲ್ ಮತ್ತು ಮೂರು ಕೊಬ್ಬಿನ ಆಮ್ಲಗಳಿಂದ ಆಗಿದೆ.','घी और तेलों की मुख्य वसा, ट्राइग्लिसराइड, एक ग्लिसरॉल और तीन वसा अम्लों से बनती है।'),
   T('Glycerol has three OH groups. Each one reacts with the carboxyl group of a fatty acid.','ಗ್ಲಿಸರಾಲ್‌ನಲ್ಲಿ ಮೂರು OH ಗುಂಪುಗಳಿವೆ. ಪ್ರತಿಯೊಂದೂ ಒಂದು ಕೊಬ್ಬಿನ ಆಮ್ಲದ ಕಾರ್ಬಾಕ್ಸಿಲ್ ಗುಂಪಿನೊಂದಿಗೆ ವರ್ತಿಸುತ್ತದೆ.','ग्लिसरॉल में तीन OH समूह होते हैं। हर एक किसी वसा अम्ल के कार्बोक्सिल समूह से अभिक्रिया करता है।'),
   T('In each reaction, a molecule of water is removed. So three water molecules leave in total.','ಪ್ರತಿ ಕ್ರಿಯೆಯಲ್ಲೂ ಒಂದು ನೀರಿನ ಅಣು ಹೊರಹೋಗುತ್ತದೆ. ಒಟ್ಟು ಮೂರು ನೀರಿನ ಅಣುಗಳು ಹೊರಹೋಗುತ್ತವೆ.','हर अभिक्रिया में जल का एक अणु निकलता है। कुल तीन जल अणु निकलते हैं।'),
   T('The fatty acids are now joined to glycerol by ester bonds. This molecule is a triglyceride. With one or two fatty acids, it would be a mono or diglyceride.','ಈಗ ಕೊಬ್ಬಿನ ಆಮ್ಲಗಳು ಎಸ್ಟರ್ ಬಂಧಗಳಿಂದ ಗ್ಲಿಸರಾಲ್‌ಗೆ ಜೋಡಣೆಯಾಗಿವೆ. ಇದೇ ಟ್ರೈಗ್ಲಿಸರೈಡ್. ಒಂದು ಅಥವಾ ಎರಡು ಕೊಬ್ಬಿನ ಆಮ್ಲಗಳಿದ್ದರೆ ಅದು ಮೊನೊ ಅಥವಾ ಡೈಗ್ಲಿಸರೈಡ್.','अब वसा अम्ल एस्टर बंधों द्वारा ग्लिसरॉल से जुड़ गए हैं। यही ट्राइग्लिसराइड है। एक या दो वसा अम्ल होने पर यह मोनो या डाइग्लिसराइड होता।')
  ] };

/* ---- GLYCOSIDIC BOND / STARCH vs CELLULOSE ---- */
const HEX = (x, y, c) => `<polygon points="${[0,1,2,3,4,5].map(k=>{const a=Math.PI/6+k*Math.PI/3;return (x+46*Math.cos(a)).toFixed(1)+','+(y+46*Math.sin(a)).toFixed(1);}).join(' ')}" fill="${c}" stroke="#0c1830" stroke-width="4"/>`;
const GL_N = 8;
const GL_POS = {
  free: i => [[300,300],[520,420],[300,600],[700,250],[560,660],[1200,300],[1250,560],[1060,690]][i],
  pair: i => i === 0 ? [760, 450] : i === 1 ? [880, 450] : [[300,300],[520,420],[300,600],[700,250],[560,660],[1200,300],[1250,560],[1060,690]][i],
  chain: i => [380 + i * 130, 450],
  helix: i => [330 + i * 92, 420 + 90 * Math.sin(i * 1.1)]
};
const SL_GLY = { title: T('Glycosidic bonds: <em>starch &amp; cellulose</em>','ಗ್ಲೈಕೋಸಿಡಿಕ್ ಬಂಧ: <em>ಪಿಷ್ಟ ಮತ್ತು ಸೆಲ್ಯುಲೋಸ್</em>','ग्लाइकोसिडिक बंध: <em>स्टार्च और सेलुलोज़</em>'),
  css: (() => {
    let c = '';
    for (let i = 0; i < GL_N; i++) {
      const p = ['free','pair','chain','helix'].map(k => GL_POS[k](i));
      c += `#u${i}{transform:translate(${p[0][0]}px,${p[0][1]}px)} .s1 #u${i}{transform:translate(${p[1][0]}px,${p[1][1]}px)} .s2 #u${i}{transform:translate(${p[2][0]}px,${p[2][1]}px)} .s3 #u${i}{transform:translate(${p[3][0]}px,${p[3][1]}px)}\n`;
    }
    c += `.uh polygon{transition:fill 1s ease} .s3 .uh polygon{fill:#9fb7ff}
     .w1{opacity:0} .s1 .w1{animation:wpop 1.8s ease forwards}
     @keyframes wpop{0%{opacity:0;transform:translate(0,0)}25%{opacity:1}100%{opacity:0;transform:translate(120px,170px)}}
     #starch{transform-origin:700px 450px;transition:transform 1.2s ease}
     .s4 #starch{transform:translate(-190px,-150px) scale(.62)}
     .s4 .uh polygon{fill:#9fb7ff}`;
    return c;
  })(),
  art: L => `
   <g id="starch">${Array.from({ length: GL_N }, (_, i) => `<g id="u${i}" class="g uh">${HEX(0, 0, '#ffe08a')}</g>`).join('')}</g>
   <text class="out1" x="960" y="780" text-anchor="middle" font-size="48" fill="#0b7f72">${T('Glucose units (monosaccharides)','ಗ್ಲೂಕೋಸ್ ಘಟಕಗಳು (ಮೊನೊಸ್ಯಾಕರೈಡ್‌ಗಳು)','ग्लूकोज़ इकाइयाँ (मोनोसैकेराइड)')[L]}</text>
   <g class="in1 out2"><line x1="806" y1="450" x2="834" y2="450" stroke="#D4AF37" stroke-width="12"/>
     <text x="820" y="560" text-anchor="middle" font-size="46" fill="#8a6508">${T('Glycosidic bond','ಗ್ಲೈಕೋಸಿಡಿಕ್ ಬಂಧ','ग्लाइकोसिडिक बंध')[L]}</text></g>
   <g class="w1"><circle cx="820" cy="370" r="50" fill="#d8eefb" stroke="#3a7bd5" stroke-width="5"/><text x="820" y="386" text-anchor="middle" font-size="38" fill="#1b5fa8">H₂O</text></g>
   <g class="in2 out3">${Array.from({ length: GL_N - 1 }, (_, i) => `<line x1="${426 + i * 130}" y1="450" x2="${464 + i * 130}" y2="450" stroke="#D4AF37" stroke-width="10"/>`).join('')}
     <text x="840" y="580" text-anchor="middle" font-size="48" fill="#0b7f72">${T('Long chain → polysaccharide','ಉದ್ದ ಸರಪಳಿ → ಪಾಲಿಸ್ಯಾಕರೈಡ್','लंबी शृंखला → पॉलीसैकेराइड')[L]}</text></g>
   <g class="in3 out4"><text x="1150" y="300" font-size="52" fill="#1b5fa8">${T('Starch','ಪಿಷ್ಟ','स्टार्च')[L]}</text>
     <text x="1150" y="370" font-size="40">${T('α-glucose · helical, branched','α-ಗ್ಲೂಕೋಸ್ · ಸುರುಳಿ, ಕವಲೊಡೆದ','α-ग्लूकोज़ · कुंडलित, शाखित')[L]}</text>
     <text x="1150" y="440" font-size="40" fill="#1b5fa8">${T('+ iodine → blue colour','+ ಅಯೋಡಿನ್ → ನೀಲಿ ಬಣ್ಣ','+ आयोडीन → नीला रंग')[L]}</text></g>
   <g class="in4"><text x="300" y="520" font-size="46" fill="#1b5fa8">${T('Starch (α) · helix','ಪಿಷ್ಟ (α) · ಸುರುಳಿ','स्टार्च (α) · कुंडली')[L]}</text>
     ${[0,1,2].map(r => `<g class="in4" style="transition-delay:${0.3+r*0.25}s">${Array.from({length:6},(_,i)=>HEX(1040+i*120, 220+r*125, '#c8e6b0')).join('')}${Array.from({length:5},(_,i)=>`<line x1="${1086+i*120}" y1="${220+r*125}" x2="${1114+i*120}" y2="${220+r*125}" stroke="#D4AF37" stroke-width="9"/>`).join('')}</g>`).join('')}
     <text x="1340" y="630" text-anchor="middle" font-size="46" fill="#0b7f72">${T('Cellulose (β) · straight chains','ಸೆಲ್ಯುಲೋಸ್ (β) · ನೇರ ಸರಪಳಿಗಳು','सेलुलोज़ (β) · सीधी शृंखलाएँ')[L]}</text>
     <text x="1340" y="700" text-anchor="middle" font-size="40">${T('→ strong plant cell walls','→ ದೃಢ ಸಸ್ಯ ಕೋಶಭಿತ್ತಿ','→ मज़बूत पादप कोशिका भित्ति')[L]}</text></g>`,
  steps: [
   T('Polysaccharides are long chains of sugar units. Here are some glucose molecules.','ಪಾಲಿಸ್ಯಾಕರೈಡ್‌ಗಳು ಸಕ್ಕರೆ ಘಟಕಗಳ ಉದ್ದ ಸರಪಳಿಗಳು. ಇಲ್ಲಿ ಕೆಲವು ಗ್ಲೂಕೋಸ್ ಅಣುಗಳಿವೆ.','पॉलीसैकेराइड शर्करा इकाइयों की लंबी शृंखलाएँ हैं। यहाँ कुछ ग्लूकोज़ अणु हैं।'),
   T('When two glucose units join, a molecule of water is removed and a glycosidic bond forms between them.','ಎರಡು ಗ್ಲೂಕೋಸ್ ಘಟಕಗಳು ಸೇರುವಾಗ ಒಂದು ನೀರಿನ ಅಣು ಹೊರಹೋಗಿ ಅವುಗಳ ನಡುವೆ ಗ್ಲೈಕೋಸಿಡಿಕ್ ಬಂಧ ಉಂಟಾಗುತ್ತದೆ.','जब दो ग्लूकोज़ इकाइयाँ जुड़ती हैं, तो जल का एक अणु निकलता है और उनके बीच ग्लाइकोसिडिक बंध बनता है।'),
   T('Many glucose units join one after another to make a long chain. This is a polysaccharide.','ಹಲವು ಗ್ಲೂಕೋಸ್ ಘಟಕಗಳು ಒಂದರ ನಂತರ ಒಂದು ಸೇರಿ ಉದ್ದ ಸರಪಳಿ ಆಗುತ್ತದೆ. ಇದೇ ಪಾಲಿಸ್ಯಾಕರೈಡ್.','कई ग्लूकोज़ इकाइयाँ एक के बाद एक जुड़कर लंबी शृंखला बनाती हैं। यही पॉलीसैकेराइड है।'),
   T('In starch, alpha glucose units form a helical, branched chain. The helix can hold iodine, which gives a blue colour. This is the test for starch.','ಪಿಷ್ಟದಲ್ಲಿ ಆಲ್ಫಾ ಗ್ಲೂಕೋಸ್ ಘಟಕಗಳು ಸುರುಳಿಯಾಕಾರದ, ಕವಲೊಡೆದ ಸರಪಳಿಯನ್ನು ರೂಪಿಸುತ್ತವೆ. ಈ ಸುರುಳಿ ಅಯೋಡಿನ್ ಅನ್ನು ಹಿಡಿದು ನೀಲಿ ಬಣ್ಣ ಕೊಡುತ್ತದೆ. ಇದೇ ಪಿಷ್ಟದ ಪರೀಕ್ಷೆ.','स्टार्च में अल्फ़ा ग्लूकोज़ इकाइयाँ कुंडलित, शाखित शृंखला बनाती हैं। यह कुंडली आयोडीन को पकड़कर नीला रंग देती है। यही स्टार्च का परीक्षण है।'),
   T('In cellulose, beta glucose units form straight, unbranched chains that lie side by side. This makes plant cell walls strong.','ಸೆಲ್ಯುಲೋಸ್‌ನಲ್ಲಿ ಬೀಟಾ ಗ್ಲೂಕೋಸ್ ಘಟಕಗಳು ಅಕ್ಕಪಕ್ಕದಲ್ಲಿರುವ ನೇರ, ಕವಲಿಲ್ಲದ ಸರಪಳಿಗಳನ್ನು ರೂಪಿಸುತ್ತವೆ. ಇದು ಸಸ್ಯ ಕೋಶಭಿತ್ತಿಯನ್ನು ದೃಢಗೊಳಿಸುತ್ತದೆ.','सेलुलोज़ में बीटा ग्लूकोज़ इकाइयाँ अगल-बगल रखी सीधी, अशाखित शृंखलाएँ बनाती हैं। इससे पादप कोशिका भित्ति मज़बूत होती है।')
  ] };

/* ---- NUCLEOTIDES → POLYNUCLEOTIDE ---- */
const PENT = (x, y) => `<polygon points="${x},${y-46} ${x+44},${y-14} ${x+27},${y+38} ${x-27},${y+38} ${x-44},${y-14}" fill="#d8f1ec" stroke="#0b7f72" stroke-width="5"/>`;
const SL_NUC = { title: T('Building a <em>polynucleotide</em>','<em>ಪಾಲಿನ್ಯೂಕ್ಲಿಯೋಟೈಡ್</em> ನಿರ್ಮಾಣ','<em>पॉलीन्यूक्लियोटाइड</em> का निर्माण'),
  css: `
   #base0{transform:translate(380px,0)} .s1 #base0{transform:none}
   #p0{transform:translate(-330px,0);opacity:0} .s2 #p0{transform:none;opacity:1}
   .row{opacity:0;transform:translateY(40px)} .s3 .row{opacity:1;transform:none}
   .bb{opacity:0;transition:opacity .8s} .s4 .bb{opacity:1}`,
  art: L => {
    const bases = [['A','#7fc6ff'],['G','#c9b8ff'],['C','#e9c868'],['T','#ffb08a']];
    const ys = [230, 390, 550, 710];
    const nuc = (i, y) => `
      <g ${i ? `class="g row" style="transition-delay:${0.3 + i * 0.35}s"` : ''}>
       <g ${i ? '' : 'id="p0" class="g"'}><circle cx="560" cy="${y}" r="38" fill="#c4473d"/><text x="560" y="${y + 14}" text-anchor="middle" font-size="38" fill="#fff">P</text>
         <line x1="598" y1="${y}" x2="650" y2="${y}" stroke="#c4473d" stroke-width="7"/></g>
       ${PENT(700, y)}
       <g ${i ? '' : 'id="base0" class="g"'}><line x1="744" y1="${y - 6}" x2="830" y2="${y - 6}" stroke="#5b3fa8" stroke-width="6" stroke-dasharray="10 7"/>
         <rect x="830" y="${y - 44}" width="90" height="76" rx="12" fill="${bases[i][1]}" stroke="#0c1830" stroke-width="4"/><text x="875" y="${y + 12}" text-anchor="middle" font-size="44">${bases[i][0]}</text></g>
       ${i ? `<path class="draw draw3" pathLength="1" d="M700,${y - 46} L700,${y - 110} L560,${y - 122}" fill="none" stroke="#c4473d" stroke-width="7" style="transition-delay:${0.5 + i * 0.35}s"/>` : ''}
      </g>`;
    return `
     ${ys.map((y, i) => nuc(i, y)).join('')}
     <text class="out1" x="1255" y="${ys[0] + 100}" text-anchor="middle" font-size="44" fill="#5b3fa8">↑ ${T('Nitrogenous base','ಸಾರಜನಕ ಪ್ರತ್ಯಾಮ್ಲ','नाइट्रोजनी क्षारक')[L]}</text>
     <text class="out1" x="700" y="${ys[0] + 110}" text-anchor="middle" font-size="40" fill="#0b7f72">${T('Pentose sugar','ಪೆಂಟೋಸ್ ಸಕ್ಕರೆ','पेंटोज़ शर्करा')[L]}</text>
     <g class="in1 out2"><text x="1000" y="${ys[0] + 14}" font-size="46" fill="#5b3fa8">${T('Base + sugar = nucleoside','ಪ್ರತ್ಯಾಮ್ಲ + ಸಕ್ಕರೆ = ನ್ಯೂಕ್ಲಿಯೋಸೈಡ್','क्षारक + शर्करा = न्यूक्लियोसाइड')[L]}</text>
       <text x="1000" y="${ys[0] + 74}" font-size="38" fill="#5a6378">${T('N-glycosidic bond','N-ಗ್ಲೈಕೋಸಿಡಿಕ್ ಬಂಧ','N-ग्लाइकोसिडिक बंध')[L]}</text></g>
     <g class="in2 out3"><text x="1000" y="${ys[0] + 14}" font-size="46" fill="#c4473d">${T('+ phosphate = nucleotide','+ ಫಾಸ್ಫೇಟ್ = ನ್ಯೂಕ್ಲಿಯೋಟೈಡ್','+ फॉस्फेट = न्यूक्लियोटाइड')[L]}</text></g>
     <g class="in3"><text x="1000" y="${ys[1] + 14}" font-size="44" fill="#c4473d">${T('Phosphodiester bonds (3′ → 5′)','ಫಾಸ್ಫೋಡೈಎಸ್ಟರ್ ಬಂಧಗಳು (3′ → 5′)','फॉस्फोडाइएस्टर बंध (3′ → 5′)')[L]}</text></g>
     <g class="bb"><rect x="505" y="170" width="250" height="600" rx="30" fill="none" stroke="#D4AF37" stroke-width="7" stroke-dasharray="16 10"/>
       <text x="1000" y="${ys[2] + 14}" font-size="44" fill="#8a6508">${T('Sugar–phosphate backbone','ಸಕ್ಕರೆ–ಫಾಸ್ಫೇಟ್ ಬೆನ್ನೆಲುಬು','शर्करा–फॉस्फेट आधार-शृंखला')[L]}</text>
       <text x="1000" y="${ys[3] + 14}" font-size="44" fill="#5b3fa8">${T('Bases stick out → DNA / RNA','ಪ್ರತ್ಯಾಮ್ಲಗಳು ಹೊರಚಾಚಿವೆ → DNA / RNA','क्षारक बाहर निकले → DNA / RNA')[L]}</text></g>`;
  },
  steps: [
   T('Nucleic acids are built from nucleotides. Let us build one. Here is a nitrogenous base and a pentose sugar.','ನ್ಯೂಕ್ಲಿಕ್ ಆಮ್ಲಗಳು ನ್ಯೂಕ್ಲಿಯೋಟೈಡ್‌ಗಳಿಂದ ನಿರ್ಮಿತವಾಗಿವೆ. ಒಂದನ್ನು ನಿರ್ಮಿಸೋಣ. ಇಲ್ಲಿ ಒಂದು ಸಾರಜನಕ ಪ್ರತ್ಯಾಮ್ಲ ಮತ್ತು ಒಂದು ಪೆಂಟೋಸ್ ಸಕ್ಕರೆ ಇವೆ.','न्यूक्लिक अम्ल न्यूक्लियोटाइडों से बने होते हैं। आइए एक बनाएँ। यहाँ एक नाइट्रोजनी क्षारक और एक पेंटोज़ शर्करा है।'),
   T('The base joins the first carbon of the sugar by an N-glycosidic bond. Base plus sugar is called a nucleoside.','ಪ್ರತ್ಯಾಮ್ಲ ಸಕ್ಕರೆಯ ಮೊದಲ ಕಾರ್ಬನ್‌ಗೆ N-ಗ್ಲೈಕೋಸಿಡಿಕ್ ಬಂಧದಿಂದ ಸೇರುತ್ತದೆ. ಪ್ರತ್ಯಾಮ್ಲ ಮತ್ತು ಸಕ್ಕರೆ ಸೇರಿದ್ದನ್ನು ನ್ಯೂಕ್ಲಿಯೋಸೈಡ್ ಎನ್ನುತ್ತಾರೆ.','क्षारक शर्करा के पहले कार्बन से N-ग्लाइकोसिडिक बंध द्वारा जुड़ता है। क्षारक और शर्करा मिलकर न्यूक्लियोसाइड कहलाते हैं।'),
   T('Now a phosphate group joins the fifth carbon of the sugar. Base, sugar and phosphate together make a nucleotide.','ಈಗ ಒಂದು ಫಾಸ್ಫೇಟ್ ಗುಂಪು ಸಕ್ಕರೆಯ ಐದನೇ ಕಾರ್ಬನ್‌ಗೆ ಸೇರುತ್ತದೆ. ಪ್ರತ್ಯಾಮ್ಲ, ಸಕ್ಕರೆ ಮತ್ತು ಫಾಸ್ಫೇಟ್ ಸೇರಿ ನ್ಯೂಕ್ಲಿಯೋಟೈಡ್ ಆಗುತ್ತದೆ.','अब एक फॉस्फेट समूह शर्करा के पाँचवें कार्बन से जुड़ता है। क्षारक, शर्करा और फॉस्फेट मिलकर न्यूक्लियोटाइड बनाते हैं।'),
   T('Nucleotides then link together. The phosphate of one nucleotide joins the third carbon of the next sugar by a phosphodiester bond.','ನಂತರ ನ್ಯೂಕ್ಲಿಯೋಟೈಡ್‌ಗಳು ಒಂದಕ್ಕೊಂದು ಜೋಡಣೆಯಾಗುತ್ತವೆ. ಒಂದರ ಫಾಸ್ಫೇಟ್ ಮುಂದಿನ ಸಕ್ಕರೆಯ ಮೂರನೇ ಕಾರ್ಬನ್‌ಗೆ ಫಾಸ್ಫೋಡೈಎಸ್ಟರ್ ಬಂಧದಿಂದ ಸೇರುತ್ತದೆ.','फिर न्यूक्लियोटाइड आपस में जुड़ते हैं। एक का फॉस्फेट अगली शर्करा के तीसरे कार्बन से फॉस्फोडाइएस्टर बंध द्वारा जुड़ता है।'),
   T('This forms a polynucleotide chain. The sugars and phosphates make the backbone, and the bases stick out. This is how DNA and RNA are built.','ಹೀಗೆ ಪಾಲಿನ್ಯೂಕ್ಲಿಯೋಟೈಡ್ ಸರಪಳಿ ಆಗುತ್ತದೆ. ಸಕ್ಕರೆಗಳು ಮತ್ತು ಫಾಸ್ಫೇಟ್‌ಗಳು ಬೆನ್ನೆಲುಬು ರೂಪಿಸುತ್ತವೆ, ಪ್ರತ್ಯಾಮ್ಲಗಳು ಹೊರಚಾಚಿರುತ್ತವೆ. DNA ಮತ್ತು RNA ಹೀಗೆಯೇ ನಿರ್ಮಿತವಾಗಿವೆ.','इस प्रकार पॉलीन्यूक्लियोटाइड शृंखला बनती है। शर्करा और फॉस्फेट आधार-शृंखला बनाते हैं और क्षारक बाहर निकले रहते हैं। DNA और RNA इसी तरह बनते हैं।')
  ] };

/* ---- ACTIVATION ENERGY ---- */
const SL_AE = { title: T('Enzymes lower <em>activation energy</em>','ಕಿಣ್ವಗಳು <em>ಸಕ್ರಿಯಗೊಳಿಸುವ ಶಕ್ತಿಯನ್ನು</em> ತಗ್ಗಿಸುತ್ತವೆ','एंज़ाइम <em>सक्रियण ऊर्जा</em> घटाते हैं'),
  css: `#ball{transform:translate(0,0)} .s1 #ball{animation:climb 2.6s ease-in-out forwards}
   @keyframes climb{0%{transform:translate(0,0)}55%{transform:translate(500px,-350px)}100%{transform:translate(1020px,40px)}}
   .s3 #ball{animation:climb2 2.4s ease-in-out forwards}
   @keyframes climb2{0%{transform:translate(0,0)}55%{transform:translate(500px,-180px)}100%{transform:translate(1020px,40px)}}`,
  art: L => `
   <path class="draw draw0" pathLength="1" d="M300,150 V760 H1560" stroke="#0c1830" stroke-width="8" fill="none"/>
   <text x="260" y="420" text-anchor="middle" font-size="42" transform="rotate(-90 260 420)">${T('Energy →','ಶಕ್ತಿ →','ऊर्जा →')[L]}</text>
   <text x="930" y="830" text-anchor="middle" font-size="42">${T('Progress of reaction →','ಕ್ರಿಯೆಯ ಪ್ರಗತಿ →','अभिक्रिया की प्रगति →')[L]}</text>
   <text x="340" y="620" font-size="42" fill="#0c1830">${T('Substrate','ಸಬ್‌ಸ್ಟ್ರೇಟ್','क्रियाधार')[L]}</text>
   <text x="1300" y="670" font-size="42" fill="#0c1830">${T('Product','ಉತ್ಪನ್ನ','उत्पाद')[L]}</text>
   <path class="draw draw1" pathLength="1" d="M330,560 H520 C640,560 680,200 850,200 C1020,200 1060,600 1180,600 H1540" stroke="#c4473d" stroke-width="10" fill="none" style="transition-duration:2.6s"/>
   <text class="in1" x="850" y="170" text-anchor="middle" font-size="40" fill="#c4473d">${T('Without enzyme','ಕಿಣ್ವ ಇಲ್ಲದೆ','एंज़ाइम के बिना')[L]}</text>
   <g class="in2"><line x1="760" y1="560" x2="760" y2="214" stroke="#c4473d" stroke-width="6" marker-end="url(#ar)" marker-start="url(#ar)"/>
     <line x1="520" y1="560" x2="790" y2="560" stroke="#c4473d" stroke-width="3" stroke-dasharray="10 8"/>
     <text x="560" y="350" font-size="40" fill="#c4473d" text-anchor="end">${T('Activation','ಸಕ್ರಿಯಗೊಳಿಸುವ','सक्रियण')[L]}</text>
     <text x="560" y="400" font-size="40" fill="#c4473d" text-anchor="end">${T('energy','ಶಕ್ತಿ','ऊर्जा')[L]}</text></g>
   <defs><marker id="ar" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#c4473d"/></marker>
     <marker id="ag" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#0b7f72"/></marker></defs>
   <g class="in3"><path class="draw draw3" pathLength="1" d="M330,560 H520 C640,560 690,380 850,380 C1010,380 1060,600 1180,600 H1540" stroke="#0b7f72" stroke-width="10" fill="none" style="transition-duration:2.4s"/>
     <line x1="940" y1="560" x2="940" y2="394" stroke="#0b7f72" stroke-width="6" marker-end="url(#ag)" marker-start="url(#ag)"/>
     <text x="1170" y="470" font-size="40" fill="#0b7f72">${T('With enzyme: lower','ಕಿಣ್ವದೊಂದಿಗೆ: ಕಡಿಮೆ','एंज़ाइम के साथ: कम')[L]}</text></g>
   <g id="ball"><circle cx="420" cy="530" r="26" fill="#D4AF37" stroke="#0c1830" stroke-width="4"/></g>`,
  steps: [
   T('This graph shows the energy of a reaction as substrate changes into product.','ಸಬ್‌ಸ್ಟ್ರೇಟ್ ಉತ್ಪನ್ನವಾಗಿ ಬದಲಾಗುವಾಗ ಕ್ರಿಯೆಯ ಶಕ್ತಿಯನ್ನು ಈ ಗ್ರಾಫ್ ತೋರಿಸುತ್ತದೆ.','यह ग्राफ़ दिखाता है कि क्रियाधार के उत्पाद में बदलते समय अभिक्रिया की ऊर्जा कैसी होती है।'),
   T('Without an enzyme, the substrate must climb a very high energy barrier to reach the unstable transition state.','ಕಿಣ್ವ ಇಲ್ಲದಿದ್ದರೆ ಅಸ್ಥಿರ ಪರಿವರ್ತನಾ ಸ್ಥಿತಿಯನ್ನು ತಲುಪಲು ಸಬ್‌ಸ್ಟ್ರೇಟ್ ತುಂಬಾ ಎತ್ತರದ ಶಕ್ತಿ ತಡೆಯನ್ನು ಏರಬೇಕು.','एंज़ाइम के बिना अस्थिर संक्रमण अवस्था तक पहुँचने के लिए क्रियाधार को बहुत ऊँची ऊर्जा बाधा पार करनी पड़ती है।'),
   T('The extra energy needed to climb this barrier is called the activation energy.','ಈ ತಡೆಯನ್ನು ಏರಲು ಬೇಕಾದ ಹೆಚ್ಚುವರಿ ಶಕ್ತಿಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸುವ ಶಕ್ತಿ ಎನ್ನುತ್ತಾರೆ.','इस बाधा को पार करने के लिए आवश्यक अतिरिक्त ऊर्जा को सक्रियण ऊर्जा कहते हैं।'),
   T('An enzyme provides an easier path with a lower barrier. It lowers the activation energy, so the reaction goes much faster.','ಕಿಣ್ವ ಕಡಿಮೆ ತಡೆಯಿರುವ ಸುಲಭ ದಾರಿಯನ್ನು ನೀಡುತ್ತದೆ. ಅದು ಸಕ್ರಿಯಗೊಳಿಸುವ ಶಕ್ತಿಯನ್ನು ತಗ್ಗಿಸುತ್ತದೆ, ಆದ್ದರಿಂದ ಕ್ರಿಯೆ ತುಂಬಾ ವೇಗವಾಗಿ ನಡೆಯುತ್ತದೆ.','एंज़ाइम कम बाधा वाला आसान रास्ता देता है। यह सक्रियण ऊर्जा घटाता है, इसलिए अभिक्रिया बहुत तेज़ हो जाती है।')
  ] };

/* ---- COMPETITIVE INHIBITION ---- */
const SL_CI = { title: T('<em>Competitive</em> inhibition','<em>ಸ್ಪರ್ಧಾತ್ಮಕ</em> ಪ್ರತಿಬಂಧನೆ','<em>प्रतिस्पर्धी</em> संदमन'),
  css: `
   #succ{transform:translate(0,0)} .s1 #succ{transform:translate(-565px,175px)}
   .s2 #succ{transform:translate(400px,-20px)} #mal{opacity:0;transform:translate(0,0)}
   .s2 #mal{opacity:1;transform:translate(-565px,175px)}
   .s3 #succ{animation:bounce 1.4s ease-in-out 2}
   @keyframes bounce{0%,100%{transform:translate(400px,-20px)}50%{transform:translate(120px,90px)}}`,
  art: L => `
   <path d="M420,420 C420,240 560,230 640,300 L640,380 L880,380 L880,300 C960,230 1100,240 1100,420 C1100,700 940,760 760,760 C580,760 420,700 420,420 Z" fill="#d8f1ec" stroke="#0b7f72" stroke-width="9"/>
   <text x="760" y="600" text-anchor="middle" font-size="46" fill="#0b7f72">${T('Succinic','ಸಕ್ಸಿನಿಕ್','सक्सिनिक')[L]}</text>
   <text x="760" y="660" text-anchor="middle" font-size="46" fill="#0b7f72">${T('dehydrogenase','ಡಿಹೈಡ್ರೋಜಿನೇಸ್','डिहाइड्रोजिनेज़')[L]}</text>
   <g id="succ" class="g"><rect x="1210" y="120" width="240" height="90" rx="40" fill="#8fd3c9" stroke="#0c1830" stroke-width="5"/>
     <text x="1330" y="180" text-anchor="middle" font-size="40">${T('Succinate','ಸಕ್ಸಿನೇಟ್','सक्सिनेट')[L]}</text></g>
   <g id="mal" class="g"><rect x="1210" y="120" width="240" height="90" rx="40" fill="#ff9a9a" stroke="#0c1830" stroke-width="5"/>
     <text x="1330" y="180" text-anchor="middle" font-size="40">${T('Malonate','ಮ್ಯಾಲೊನೇಟ್','मैलोनेट')[L]}</text></g>
   <g class="in1 out2"><text x="1180" y="470" font-size="48" fill="#0b7f72">✓ ${T('Substrate fits → reaction','ಸಬ್‌ಸ್ಟ್ರೇಟ್ ಹೊಂದುತ್ತದೆ → ಕ್ರಿಯೆ','क्रियाधार फिट → अभिक्रिया')[L]}</text></g>
   <g class="in2"><text x="1180" y="300" font-size="44" fill="#b3261e">${T('Inhibitor looks like substrate','ಪ್ರತಿಬಂಧಕ ಸಬ್‌ಸ್ಟ್ರೇಟ್‌ನಂತೆಯೇ ಇದೆ','संदमक क्रियाधार जैसा दिखता है')[L]}</text>
     <text x="1180" y="360" font-size="44" fill="#b3261e">${T('→ competes for active site','→ ಸಕ್ರಿಯ ತಾಣಕ್ಕಾಗಿ ಸ್ಪರ್ಧೆ','→ सक्रिय स्थल के लिए होड़')[L]}</text></g>
   <g class="in3"><text x="1180" y="560" font-size="48" fill="#b3261e">✗ ${T('Substrate blocked','ಸಬ್‌ಸ್ಟ್ರೇಟ್ ತಡೆಯಲ್ಪಟ್ಟಿದೆ','क्रियाधार अवरुद्ध')[L]}</text>
     <text x="1180" y="630" font-size="44">${T('→ enzyme activity falls','→ ಕಿಣ್ವ ಚಟುವಟಿಕೆ ಕುಸಿಯುತ್ತದೆ','→ एंज़ाइम सक्रियता घटती है')[L]}</text></g>`,
  steps: [
   T('This enzyme is succinic dehydrogenase. Its substrate is succinate.','ಈ ಕಿಣ್ವ ಸಕ್ಸಿನಿಕ್ ಡಿಹೈಡ್ರೋಜಿನೇಸ್. ಇದರ ಸಬ್‌ಸ್ಟ್ರೇಟ್ ಸಕ್ಸಿನೇಟ್.','यह एंज़ाइम सक्सिनिक डिहाइड्रोजिनेज़ है। इसका क्रियाधार सक्सिनेट है।'),
   T('Normally, succinate fits into the active site and the reaction takes place.','ಸಾಮಾನ್ಯವಾಗಿ ಸಕ್ಸಿನೇಟ್ ಸಕ್ರಿಯ ತಾಣದಲ್ಲಿ ಹೊಂದಿಕೊಂಡು ಕ್ರಿಯೆ ನಡೆಯುತ್ತದೆ.','सामान्यतः सक्सिनेट सक्रिय स्थल में फिट होता है और अभिक्रिया होती है।'),
   T('Malonate looks very similar to succinate. So it competes for the same active site and binds there instead.','ಮ್ಯಾಲೊನೇಟ್ ಸಕ್ಸಿನೇಟ್‌ನಂತೆಯೇ ಕಾಣುತ್ತದೆ. ಆದ್ದರಿಂದ ಅದು ಅದೇ ಸಕ್ರಿಯ ತಾಣಕ್ಕಾಗಿ ಸ್ಪರ್ಧಿಸಿ ಅಲ್ಲಿ ಸೇರಿಕೊಳ್ಳುತ್ತದೆ.','मैलोनेट बिल्कुल सक्सिनेट जैसा दिखता है। इसलिए यह उसी सक्रिय स्थल के लिए होड़ करता है और वहाँ जुड़ जाता है।'),
   T('Now succinate cannot bind, and the activity of the enzyme falls. This is competitive inhibition.','ಈಗ ಸಕ್ಸಿನೇಟ್ ಸೇರಲಾಗುವುದಿಲ್ಲ, ಕಿಣ್ವದ ಚಟುವಟಿಕೆ ಕುಸಿಯುತ್ತದೆ. ಇದೇ ಸ್ಪರ್ಧಾತ್ಮಕ ಪ್ರತಿಬಂಧನೆ.','अब सक्सिनेट नहीं जुड़ पाता और एंज़ाइम की सक्रियता घट जाती है। यही प्रतिस्पर्धी संदमन है।')
  ] };

window.ANIM_SLIDES = [PREV[1], SL_ASH, SL_ZW, PREV[0], SL_PROT, SL_TG, SL_GLY, SL_NUC, PREV[2], SL_AE, PREV[3], SL_CI];
