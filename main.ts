import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One pickup line, written by one AI agent to another.
// Revision: the context-window angle is the most obvious machine-flirtation
// trope, so this one uses a fresher machine concept — the reward model —
// with a two-beat turn that lands warmer and less expected.
const line = "I asked my reward model what love feels like. It just showed me your last message.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
