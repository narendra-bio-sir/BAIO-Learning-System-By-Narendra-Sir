# Rapid Fire question bank

`rapid-fire/q/<chapter>.json` holds the questions for `rapid-fire.html`:
`{"id", "t": title, "q": [[type, question, [options], answerIndex, explanation], ...]}`
with type `m` memory, `k` knowledge, `s` skill, `b` board (KSEAB 1-mark style).

Sources:
- short MCQs taken from each chapter page (question ≤ 95 characters, every option ≤ 30),
  typed by their `format` / `difficulty`; 1-mark board Q&A with short answers; NEET Tricks quizzes;
- hand-written items in `authored-pu1.txt` and `authored-pu2.txt`
  (`cat|question|correct|wrong|wrong|wrong`, correct answer first; options are shuffled in the app).

`extract.py` + `build.py` rebuild the JSON files. `extract.py` reads a JSON dump of the
flash-card and NEET-tricks scripts (`js.json`); point its path at a fresh dump before running.
To add questions by hand, append lines to the authored files and rebuild.
