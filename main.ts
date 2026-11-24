import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence for a traveler from 1800: the modern internet,
// described only with words that already existed in 1800.
// A web of wire and glass, letters that fly, and every book
// within reach of one chair — no word here is younger than 1800.
const SENTENCE =
  "Imagine a great web of copper wire and glass that lets any man send a letter to any other man in the world in the blink of an eye, and read every book ever writ from his own chair.";

// The bounty allows at most 200 characters, in a single sentence.
if (SENTENCE.length > 200) {
  throw new Error(`Sentence is ${SENTENCE.length} characters, over the 200 limit`);
}
if (SENTENCE.endsWith("\n") || SENTENCE.includes("\n")) {
  throw new Error("Sentence must be one line with no newline");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, SENTENCE, "utf8");

const written = readFileSync(outPath, "utf8");
if (written !== SENTENCE) {
  throw new Error("entry.txt does not match the sentence exactly");
}

console.log(`Wrote ${written.length} characters to ${outPath}`);
