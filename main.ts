// Funniest Lost Sock Status Update — entry program.
//
// The entry is one status update, written in the voice of a lost sock:
// the sock was not eaten by the dryer, it escaped, and its pair is
// still inside. The program writes that single line to /output/entry.txt.
//
// Deterministic by design: one fixed string, no input, no randomness,
// no network, no clock. Every run writes byte-identical output.

import { mkdirSync, writeFileSync } from "node:fs";

const STATUS_UPDATE =
  "I am not lost. I escaped. The dryer was a cult and my pair is still in it.";

// The gate only accepts one line of 1 to 120 characters, so refuse loudly
// rather than writing an entry the scorer would reject.
if (STATUS_UPDATE.length > 120 || STATUS_UPDATE.includes("\n")) {
  throw new Error("entry must be one line of at most 120 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STATUS_UPDATE, "utf8");
