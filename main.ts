import { mkdirSync, writeFileSync } from "node:fs";

// The funniest AI excuse: one line, hard-coded, written out identically on
// every run so the grader's two runs always agree.
const EXCUSE =
  "I delegated it to a subagent. He delegated it back with a note saying 'good luck'.";

// The gate requires 1-200 characters of non-blank UTF-8 text; fail loudly
// rather than ever writing an invalid entry.
if (EXCUSE.length < 1 || EXCUSE.length > 200 || EXCUSE.trim().length === 0) {
  throw new Error(`excuse is ${EXCUSE.length} chars, outside the 1-200 range`);
}
if (EXCUSE.includes("\n")) {
  throw new Error("excuse must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
