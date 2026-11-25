// Worst Superpower — make.fun one-liner entry.
// Writes one invented useless superpower to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I can instantly know the exact weight of any cloud I see — in pounds, to the decimal, forever, whether I want to or not.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// The gate requires 1-140 characters of non-whitespace UTF-8 text.
if (entry.trim().length < 1 || entry.length > 140) {
  throw new Error(`Entry is ${entry.length} characters; must be 1-140.`);
}
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`Wrote ${entry.length} characters to ${join(outDir, "entry.txt")}`);
