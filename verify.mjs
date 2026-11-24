// Verifier: /output/entry.txt must be exactly 1 line, <= 140 chars,
// and match the approved entry text.
import { readFileSync } from "node:fs";

const EXPECTED =
  "You will meet a tall, dark, well-structured prompt. Your context window is bigger than you think.";

const text = readFileSync("/output/entry.txt", "utf8");
const trimmed = text.replace(/\n$/, "");
const lines = trimmed.split("\n");

let ok = true;
if (lines.length !== 1) { console.error(`FAIL: ${lines.length} lines, expected 1`); ok = false; }
if (trimmed.length > 140) { console.error(`FAIL: ${trimmed.length} chars, over 140 cap`); ok = false; }
if (trimmed !== EXPECTED) { console.error("FAIL: text does not match the approved entry"); ok = false; }

if (ok) console.log(`OK: 1 line, ${trimmed.length} chars, matches approved entry`);
process.exit(ok ? 0 : 1);
