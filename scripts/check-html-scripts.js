#!/usr/bin/env node
// Extracts every inline <script> block from the site's single-file HTML pages
// and checks each one for JavaScript syntax errors with `node --check`.
// Catches the "typo breaks the whole page" class of regression before it ships.

const fs = require('fs');
const path = require('path');
const os = require('os');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');

const HTML_FILES = [
  'index.html',
  'analytics.html',
  'announcements.html',
  'guide.html',
  'about.html',
  'call-whatsapp-help.html',
  'ns-gen.html',
  'pu1-ch5.html',
  'pu1-ch4.html',
  'pu2-ch4.html',
  'assignment-tracker.html',
  'board-question-assignment-builder.html',
  'practical-plasmolysis.html',
  'app-walkthrough.html',
  'study-tips.html',
  'push-test.html',
  'genetic-cross-simulator.html',
  'ch2/index.html',
  'ch3/index.html',
  'ch9/index.html',
].filter(f => fs.existsSync(path.join(ROOT, f)));

const PLAIN_JS_FILES = ['sw.js'].filter(f => fs.existsSync(path.join(ROOT, f)));

const SCRIPT_TAG_RE = /<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi;

let failures = 0;
let checked = 0;

function checkSource(label, source) {
  if (!source.trim()) return;
  const tmpFile = path.join(os.tmpdir(), `baio-ci-check-${process.pid}-${checked}.js`);
  fs.writeFileSync(tmpFile, source);
  checked++;
  try {
    execFileSync(process.execPath, ['--check', tmpFile], { stdio: 'pipe' });
    console.log(`  ok   ${label}`);
  } catch (err) {
    failures++;
    console.error(`  FAIL ${label}`);
    console.error(err.stderr ? err.stderr.toString() : err.message);
  } finally {
    fs.unlinkSync(tmpFile);
  }
}

for (const file of HTML_FILES) {
  const full = path.join(ROOT, file);
  const content = fs.readFileSync(full, 'utf8');
  const blocks = [...content.matchAll(SCRIPT_TAG_RE)];
  console.log(`${file} — ${blocks.length} inline script block(s)`);
  blocks.forEach((m, i) => checkSource(`${file} [script #${i + 1}]`, m[1]));
}

for (const file of PLAIN_JS_FILES) {
  checkSource(file, fs.readFileSync(path.join(ROOT, file), 'utf8'));
}

console.log(`\nChecked ${checked} script block(s), ${failures} failure(s).`);
if (failures > 0) process.exit(1);
