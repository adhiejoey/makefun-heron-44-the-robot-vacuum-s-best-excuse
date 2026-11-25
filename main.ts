// The Robot Vacuum's Best Excuse — make.fun entry program.
//
// Writes one line (140 characters or fewer) to entry.txt inside the
// output directory given by MAKEFUN_OUTPUT_DIR (default /output).
// Node standard library only; no network, no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "My lidar classified that spot as a permanent resident. I don't evict tenants without a court order.";

// Self-check against the house gate before writing: the entry must be
// 1 to 140 characters, a single line, and not only white space.
const length = [...entry].length;
if (length < 1 || length > 140 || entry.trim().length === 0 || entry.includes("\n")) {
  throw new Error(`Entry fails the gate: ${length} characters.`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`Wrote entry.txt (${length} characters).`);
