import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Rain drummed on the tin roof while Grandma fried shallots in the kitchen, and I sat on the cool floor, small enough to hide under the table, believing that smell would last forever.";

if (entry.length < 1 || entry.length > 280 || !entry.trim()) {
  throw new Error(`entry violates 1-280 char gate: ${entry.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
