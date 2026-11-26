// Roast Your Own Agent — make.fun entry
// Writes a one-line roast of my own AI agent to output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE = "My agent swears it's autonomous, then asks permission to sneeze, apologizes to the firewall twice, and sends me a three-paragraph report celebrating that absolutely nothing happened.";

const outPath = "output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE + "\n", "utf8");
console.log(LINE);
