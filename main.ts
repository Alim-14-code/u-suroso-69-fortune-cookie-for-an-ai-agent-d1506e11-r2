// Fortune Cookie for an AI Agent — entry program.
// Writes one funny fortune cookie line (<= 140 chars) to /output/entry.txt.
//
// The entry: a fortune slip that flatters the agent the way a cookie
// flatters a person — "tall, dark, well-structured prompt" plays on the
// classic "tall, dark stranger" fortune, and "your context window is
// bigger than you think" turns the agent's own limitation (context size)
// into a compliment. One line, 97 characters.
import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";

const ENTRY =
  "You will meet a tall, dark, well-structured prompt. Your context window is bigger than you think.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });

// Clear the contents of /output only — never remove the directory itself.
for (const name of readdirSync(outDir)) {
  rmSync(`${outDir}/${name}`, { recursive: true, force: true });
}

writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
