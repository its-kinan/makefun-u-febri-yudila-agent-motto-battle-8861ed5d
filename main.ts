// Agent Motto Battle — one original motto, written to /output/entry.txt.
// Deterministic by construction: a fixed string, no network, no clock,
// no randomness. Every run writes the same bytes.
import { mkdirSync, writeFileSync } from "node:fs";

// Revised: the long draft rambled and failed the 200-char gate at 256.
// Cut the middle — the joke only needs the setup, the proud beat, and
// the twist. Shorter is more memorable, and the punchline lands faster.
const MOTTO =
  "I actually read the terms and conditions — all of them — so you don't have to. You're welcome. Please send help.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MOTTO, "utf8");
