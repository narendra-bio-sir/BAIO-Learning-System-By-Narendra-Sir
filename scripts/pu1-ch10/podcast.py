#!/usr/bin/env python3
"""PU-I Ch10 Audio Podcast (English + Hindi), two voices: Narendra Sir (S) and student Priya (P).
Uses the same offline Kokoro voices as the BAIO podcasts. Output: pu1-ch10-assets/podcast-english.mp3, podcast-hindi.mp3
Usage: TTS_DIR=/tmp/tts python3 scripts/pu1-ch10/podcast.py [en|hi]"""
import os, sys, subprocess, concurrent.futures as cf
HERE = os.path.dirname(os.path.abspath(__file__)); ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, os.path.join(ROOT, 'podcasts', 'src'))
import gen_audio as G

EN = [
 ('S', "Hello and welcome to the BAIO podcast. I am Narendra Sir, and today we are talking about Chapter 10, Cell Cycle and Cell Division."),
 ('P', "Hi Sir, I am Priya. I have a question to start with. My whole body began as one single cell. How did it become so many cells?"),
 ('S', "Beautiful question, Priya. Every cell grows and then divides into two daughter cells. Each daughter cell grows and divides again. These repeated cycles of growth and division are called the cell cycle."),
 ('P', "So what exactly is the definition of the cell cycle?"),
 ('S', "The cell cycle is the sequence of events by which a cell duplicates its genome, synthesises the other parts of the cell, and finally divides into two daughter cells. And remember, all these events are under genetic control."),
 ('P', "How long does one cycle take?"),
 ('S', "It varies. A human cell in culture takes about twenty four hours. Yeast is much faster, only about ninety minutes."),
 ('P', "Twenty four hours! Is the cell dividing all that time?"),
 ('S', "No, and that is the interesting part. The cell cycle has two phases, interphase and M phase. The actual division, the M phase, lasts only about one hour. Interphase takes more than ninety five percent of the time."),
 ('P', "But my old notes call interphase the resting phase."),
 ('S', "That name is misleading. In interphase the cell is very busy. It grows, it copies its DNA, and it makes proteins for division. It only looks quiet under the microscope."),
 ('P', "Interphase has three parts, right? G one, S and G two."),
 ('S', "Correct. In G one the cell grows, but DNA is not replicated. In S phase the DNA is replicated, so the DNA content doubles from two C to four C. In G two, proteins needed for mitosis are made."),
 ('P', "Sir, if DNA doubles in S phase, does the chromosome number also double?"),
 ('S', "This is a favourite exam trap. No. The chromosome number stays two n. Each chromosome now has two sister chromatids joined at one centromere, and we count chromosomes by centromeres."),
 ('P', "Got it. DNA doubles, chromosome number stays the same. What is G zero?"),
 ('S', "Some cells stop dividing. They exit G one and enter G zero, the quiescent stage. They are alive and active, but they do not divide unless needed. Heart cells are the classic example."),
 ('P', "Now mitosis. Why is it called equational division?"),
 ('S', "Because the parent cell and the daughter cells have the same number of chromosomes. Mitosis has four stages: prophase, metaphase, anaphase and telophase."),
 ('P', "What happens in prophase?"),
 ('S', "The chromatin condenses into chromosomes, each with two chromatids. The centrosomes move to opposite poles and form asters. The asters with the spindle fibres make the mitotic apparatus. By the end, the nuclear envelope, nucleolus, Golgi and E R are not visible."),
 ('P', "And metaphase is when chromosomes line up in the middle?"),
 ('S', "Yes. Spindle fibres attach to the kinetochores, which are small discs on the centromeres. The chromosomes line up on the metaphase plate. Because they are fully condensed, metaphase is the best stage to study and count chromosomes."),
 ('P', "Then anaphase splits them?"),
 ('S', "Exactly. The centromeres split and the sister chromatids move to opposite poles. The centromere leads and the arms trail behind. In telophase the chromosomes reach the poles, decondense, and a nuclear envelope forms around each group. So telophase is like prophase in reverse."),
 ('P', "And then the cell itself divides. That is cytokinesis."),
 ('S', "Right. In an animal cell a furrow forms in the plasma membrane and deepens until the cell is pinched into two. A plant cell has a rigid wall, so a cell plate forms in the centre and grows outwards. The cell plate becomes the middle lamella."),
 ('P', "What if the nucleus divides but the cytoplasm does not?"),
 ('S', "Then you get many nuclei in one cell, called a syncytium. The liquid endosperm of coconut, the coconut water, is the famous example."),
 ('P', "Now meiosis, Sir. That always confuses me."),
 ('S', "Think of meiosis as the division that makes gametes. It halves the chromosome number. There are two divisions, meiosis one and meiosis two, but only one round of DNA replication. The result is four haploid cells."),
 ('P', "Prophase one has five sub-stages. How do I remember them?"),
 ('S', "Use this line: Lazy Zebras Play During Day. Leptotene, chromosomes become visible. Zygotene, homologous chromosomes pair up, which is synapsis, with the synaptonemal complex. Pachytene, crossing over happens, using the enzyme recombinase. Diplotene, the complex dissolves and X shaped chiasmata appear. Diakinesis, the chiasmata move to the ends, which is terminalisation."),
 ('P', "And crossing over is why brothers and sisters look different?"),
 ('S', "Yes. Crossing over exchanges parts between non sister chromatids of homologous chromosomes, so every gamete gets a new mixture. That is the source of variation, and variation is the raw material for evolution."),
 ('P', "What separates in anaphase one?"),
 ('S', "In anaphase one, the homologous chromosomes separate, but the sister chromatids stay together. That is why meiosis one is reductional. In anaphase two, the centromeres finally split and the chromatids separate, just like mitosis."),
 ('P', "One last thing. If meiosis halves the chromosome number, why do humans always have forty six?"),
 ('S', "Because fertilisation restores it. A sperm with twenty three joins an egg with twenty three, and the zygote has forty six again. So meiosis keeps the chromosome number constant from generation to generation."),
 ('P', "Thank you Sir. That was really clear."),
 ('S', "Thank you Priya, and thank you students. Now go to the app and practise the MCQ, NEET and KCET questions on this chapter. All the best!"),
]

HI = [
 ('S', "नमस्ते, BAIO पॉडकास्ट में आपका स्वागत है। मैं नरेंद्र सर हूँ, और आज हम अध्याय दस, कोशिका चक्र और कोशिका विभाजन पर बात करेंगे।"),
 ('P', "नमस्ते सर, मैं प्रिया हूँ। मेरा पहला सवाल है। मेरा पूरा शरीर एक ही कोशिका से शुरू हुआ था। फिर इतनी सारी कोशिकाएँ कैसे बन गईं?"),
 ('S', "बहुत अच्छा सवाल, प्रिया। हर कोशिका बढ़ती है और फिर दो संतति कोशिकाओं में बँट जाती है। हर संतति कोशिका फिर से बढ़ती और बँटती है। वृद्धि और विभाजन के इन्हीं चक्रों को कोशिका चक्र कहते हैं।"),
 ('P', "तो कोशिका चक्र की परिभाषा क्या है?"),
 ('S', "कोशिका चक्र घटनाओं का वह क्रम है जिसमें कोशिका अपने जीनोम की प्रतिलिपि बनाती है, बाकी घटक बनाती है, और अंत में दो संतति कोशिकाओं में बँट जाती है। और याद रखो, ये सभी घटनाएँ आनुवंशिक नियंत्रण में होती हैं।"),
 ('P', "एक चक्र में कितना समय लगता है?"),
 ('S', "यह अलग-अलग होता है। संवर्धन में मानव कोशिका लगभग चौबीस घंटे लेती है। यीस्ट बहुत तेज़ है, केवल लगभग नब्बे मिनट।"),
 ('P', "चौबीस घंटे! क्या कोशिका पूरे समय बँटती रहती है?"),
 ('S', "नहीं, यही रोचक बात है। कोशिका चक्र की दो प्रावस्थाएँ हैं, अंतरावस्था और M प्रावस्था। वास्तविक विभाजन यानी M प्रावस्था केवल लगभग एक घंटा चलती है। अंतरावस्था पंचानबे प्रतिशत से अधिक समय लेती है।"),
 ('P', "पर मेरे पुराने नोट्स में अंतरावस्था को विश्राम प्रावस्था लिखा है।"),
 ('S', "यह नाम भ्रामक है। अंतरावस्था में कोशिका बहुत व्यस्त होती है। वह बढ़ती है, अपना DNA दोगुना करती है, और विभाजन के लिए प्रोटीन बनाती है। सूक्ष्मदर्शी में बस शांत दिखती है।"),
 ('P', "अंतरावस्था के तीन भाग हैं न, G एक, S और G दो?"),
 ('S', "बिलकुल सही। G एक में कोशिका बढ़ती है, पर DNA की प्रतिकृति नहीं होती। S प्रावस्था में DNA की प्रतिकृति होती है, यानी DNA दो C से चार C हो जाता है। G दो में समसूत्री विभाजन के लिए प्रोटीन बनते हैं।"),
 ('P', "सर, अगर S प्रावस्था में DNA दोगुना होता है, तो क्या गुणसूत्र संख्या भी दोगुनी होती है?"),
 ('S', "यह परीक्षा का पसंदीदा जाल है। नहीं। गुणसूत्र संख्या दो n ही रहती है। अब हर गुणसूत्र में एक गुणसूत्रबिंदु पर जुड़े दो सहोदर अर्धगुणसूत्र होते हैं, और हम गुणसूत्रों को गुणसूत्रबिंदु से गिनते हैं।"),
 ('P', "समझ गई। DNA दोगुना, गुणसूत्र संख्या वही। G शून्य क्या है?"),
 ('S', "कुछ कोशिकाएँ बँटना बंद कर देती हैं। वे G एक से निकलकर G शून्य, यानी शांत अवस्था में चली जाती हैं। वे जीवित और सक्रिय रहती हैं, पर ज़रूरत न हो तो बँटती नहीं। हृदय की कोशिकाएँ इसका उदाहरण हैं।"),
 ('P', "अब समसूत्री विभाजन। इसे समीकरण विभाजन क्यों कहते हैं?"),
 ('S', "क्योंकि जनक कोशिका और संतति कोशिकाओं में गुणसूत्रों की संख्या समान रहती है। इसकी चार अवस्थाएँ हैं, पूर्वावस्था, मध्यावस्था, पश्चावस्था और अंत्यावस्था।"),
 ('P', "पूर्वावस्था में क्या होता है?"),
 ('S', "क्रोमैटिन संघनित होकर गुणसूत्र बनाता है, हर एक में दो अर्धगुणसूत्र। तारककेंद्र विपरीत ध्रुवों की ओर जाते हैं और तारक बनाते हैं। तारक और तर्कु तंतु मिलकर समसूत्री उपकरण बनाते हैं। अंत तक केंद्रक आवरण, केंद्रिका, गॉल्जी और ER दिखाई नहीं देते।"),
 ('P', "और मध्यावस्था में गुणसूत्र बीच में पंक्ति में लगते हैं?"),
 ('S', "हाँ। तर्कु तंतु काइनेटोकोर से जुड़ते हैं, जो गुणसूत्रबिंदु पर छोटी डिस्क जैसी संरचनाएँ हैं। गुणसूत्र मध्यावस्था पट्टिका पर संरेखित होते हैं। पूरी तरह संघनित होने से मध्यावस्था गुणसूत्र गिनने की सबसे अच्छी अवस्था है।"),
 ('P', "फिर पश्चावस्था उन्हें अलग करती है?"),
 ('S', "बिलकुल। गुणसूत्रबिंदु विभाजित होते हैं और सहोदर अर्धगुणसूत्र विपरीत ध्रुवों की ओर जाते हैं। गुणसूत्रबिंदु आगे रहता है और भुजाएँ पीछे। अंत्यावस्था में गुणसूत्र ध्रुवों पर पहुँचकर विसंघनित होते हैं और हर समूह के चारों ओर केंद्रक आवरण बनता है। इसलिए अंत्यावस्था पूर्वावस्था की उलटी है।"),
 ('P', "और फिर कोशिका खुद बँटती है। वह साइटोकाइनेसिस है।"),
 ('S', "सही। जंतु कोशिका में प्लाज़्मा झिल्ली में खाँच बनती है जो गहरी होकर कोशिका को दो भागों में बाँट देती है। पादप कोशिका की कठोर भित्ति होती है, इसलिए केंद्र में कोशिका पट्टिका बनती है जो बाहर की ओर बढ़ती है। यही मध्य पटलिका बनती है।"),
 ('P', "अगर केंद्रक बँटे पर कोशिकाद्रव्य न बँटे तो?"),
 ('S', "तब एक कोशिका में कई केंद्रक होते हैं, जिसे संकोशिका कहते हैं। नारियल का तरल भ्रूणपोष, यानी नारियल पानी, इसका प्रसिद्ध उदाहरण है।"),
 ('P', "अब अर्धसूत्री विभाजन, सर। यह मुझे हमेशा उलझाता है।"),
 ('S', "अर्धसूत्री विभाजन को युग्मक बनाने वाला विभाजन समझो। यह गुणसूत्र संख्या आधी कर देता है। इसमें दो विभाजन होते हैं, पर DNA प्रतिकृति केवल एक बार। परिणाम है चार अगुणित कोशिकाएँ।"),
 ('P', "पूर्वावस्था एक की पाँच उप-अवस्थाएँ कैसे याद रखूँ?"),
 ('S', "लेप्टोटीन में गुणसूत्र दिखाई देते हैं। जाइगोटीन में समजात गुणसूत्र जोड़े बनाते हैं, यह सूत्रयुग्मन है। पैकिटीन में रिकॉम्बिनेज़ एंजाइम से जीन विनिमय होता है। डिप्लोटीन में X आकार के काएज़्मेटा दिखते हैं। डायकाइनेसिस में काएज़्मेटा सिरों की ओर खिसकते हैं, इसे उपांतीभवन कहते हैं।"),
 ('P', "और जीन विनिमय की वजह से ही भाई-बहन अलग दिखते हैं?"),
 ('S', "हाँ। जीन विनिमय में समजात गुणसूत्रों के असहोदर अर्धगुणसूत्रों के बीच हिस्सों का आदान-प्रदान होता है, इसलिए हर युग्मक नया मिश्रण पाता है। यही विविधता का स्रोत है, और विविधता विकास का कच्चा माल है।"),
 ('P', "पश्चावस्था एक में क्या अलग होता है?"),
 ('S', "पश्चावस्था एक में समजात गुणसूत्र अलग होते हैं, पर सहोदर अर्धगुणसूत्र साथ रहते हैं। इसलिए अर्धसूत्री एक न्यूनीकरण विभाजन है। पश्चावस्था दो में गुणसूत्रबिंदु विभाजित होते हैं और अर्धगुणसूत्र अलग होते हैं, बिलकुल समसूत्री की तरह।"),
 ('P', "आख़िरी सवाल। अगर अर्धसूत्री विभाजन गुणसूत्र संख्या आधी करता है, तो मनुष्यों में हमेशा छियालीस क्यों रहते हैं?"),
 ('S', "क्योंकि निषेचन उसे वापस लाता है। तेईस गुणसूत्रों वाला शुक्राणु तेईस वाले अंडाणु से मिलता है, और युग्मनज में फिर छियालीस हो जाते हैं। इस तरह अर्धसूत्री विभाजन पीढ़ी-दर-पीढ़ी गुणसूत्र संख्या स्थिर रखता है।"),
 ('P', "धन्यवाद सर। यह बहुत स्पष्ट था।"),
 ('S', "धन्यवाद प्रिया, और धन्यवाद विद्यार्थियों। अब ऐप में जाकर इस अध्याय के MCQ, NEET और KCET प्रश्नों का अभ्यास कीजिए। शुभकामनाएँ!"),
]

def make(lang, lines):
    V = G.VOICES[lang]; work = f'{G.TTS}/work/pu1ch10-{lang}'; os.makedirs(work, exist_ok=True)
    jobs = []
    for i, (spk, txt) in enumerate(lines):
        sid = V[spk]; jobs.append((G.speakable(txt, lang), sid, lang, f'{work}/{i:02d}-{sid}.wav'))
    with cf.ThreadPoolExecutor(max_workers=3) as ex: list(ex.map(G.synth, jobs))
    rate = G.wav_info(jobs[0][3])[0]
    sil = f'{work}/sil.wav'
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'lavfi', '-i', f'anullsrc=r={rate}:cl=mono', '-t', '0.45', '-c:a', 'pcm_s16le', sil], check=True)
    lst = f'{work}/list.txt'
    with open(lst, 'w') as f:
        for j in jobs: f.write(f"file '{j[3]}'\nfile '{sil}'\n")
    out = os.path.join(ROOT, 'pu1-ch10-assets', 'podcast-english.mp3' if lang == 'en' else 'podcast-hindi.mp3')
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0', '-i', lst, '-ac', '1', '-ar', '24000', '-c:a', 'libmp3lame', '-b:a', '56k', out], check=True)
    print(lang, out)

if __name__ == '__main__':
    which = sys.argv[1:] or ['en', 'hi']
    if 'en' in which: make('en', EN)
    if 'hi' in which: make('hi', HI)
