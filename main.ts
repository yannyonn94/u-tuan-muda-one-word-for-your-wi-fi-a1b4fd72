// One Word for Your Wi-Fi — entry program.
//
// The winning word is "Ghosting": home Wi-Fi that vanishes mid-call,
// mid-download, mid-sentence — like a bad date, no goodbye, no
// explanation, back again later pretending nothing happened.
//
// This program writes exactly that one word to entry.txt: no trailing
// newline, no extra output, so the sealed gate (1–20 UTF-8 chars)
// passes and the judge reads the word alone.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Ghosting";

// The gate allows 1–20 characters; refuse to write anything else rather
// than ever emitting an invalid entry.
if (WORD.length < 1 || WORD.length > 20 || WORD.trim().length === 0) {
  throw new Error(`entry word must be 1-20 characters, got ${WORD.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, WORD, "utf8");
