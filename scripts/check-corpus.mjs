#!/usr/bin/env node
// Walks src/data/fatiha.js and asserts every word in `verses` resolves against
// `rootMeanings` and `rootOccurrences`. Words missing a tafsir entry are allowed
// (ScholarlyPanel handles that gracefully); missing root data is not, because
// WordStudy's panel looks empty without it.
//
// Intentional empty-states (words where we want the panel's fallback copy to show
// as a product voice choice) belong on INTENTIONAL_EMPTY below. Everything else
// reported by this script is a real bug to fix before deploy.
//
// Run: node scripts/check-corpus.mjs
// Exits 0 on success, 1 on any finding.

import { verses, verseOrder, rootMeanings, rootOccurrences, tafsir } from "../src/data/fatiha.js";

// Words that are deliberately left without a tafsir entry to surface the
// ScholarlyPanel empty-state as product voice. Keyed by word.tr.
const INTENTIONAL_EMPTY_TAFSIR = new Set([
  "ghayri", // 1:7 — the particle is left uncurated to let the empty-state panel show as voice
]);

// Roots deliberately left without rootOccurrences cross-refs (should be rare;
// cross-refs are a core product value).
const INTENTIONAL_EMPTY_OCCURRENCES = new Set([
  // e.g., "gh-y-r",
]);

const findings = [];

// Every verse in verseOrder must resolve to a verse object.
for (const ref of verseOrder) {
  if (!verses[ref]) {
    findings.push(`verseOrder references "${ref}" but verses["${ref}"] is missing`);
  }
}

// Every verse in verses should appear in verseOrder (catches drift).
for (const ref of Object.keys(verses)) {
  if (!verseOrder.includes(ref)) {
    findings.push(`verses["${ref}"] exists but is not in verseOrder`);
  }
}

// Walk every word in every verse.
for (const ref of verseOrder) {
  const verse = verses[ref];
  if (!verse) continue;
  if (!Array.isArray(verse.words)) {
    findings.push(`verses["${ref}"].words is not an array`);
    continue;
  }
  verse.words.forEach((word, i) => {
    const loc = `verses["${ref}"].words[${i}] (${word.tr ?? "??"})`;

    if (!word.ar) findings.push(`${loc} missing .ar`);
    if (!word.tr) findings.push(`${loc} missing .tr`);
    if (!word.gloss) findings.push(`${loc} missing .gloss`);
    if (!word.root) findings.push(`${loc} missing .root`);
    if (!word.rootTr) findings.push(`${loc} missing .rootTr`);

    if (word.rootTr) {
      if (!(word.rootTr in rootMeanings)) {
        findings.push(`${loc} root "${word.rootTr}" has no entry in rootMeanings`);
      }
      if (!(word.rootTr in rootOccurrences) && !INTENTIONAL_EMPTY_OCCURRENCES.has(word.rootTr)) {
        findings.push(`${loc} root "${word.rootTr}" has no entry in rootOccurrences (add to INTENTIONAL_EMPTY_OCCURRENCES if deliberate)`);
      }
    }

    if (word.tr && !(word.tr in tafsir) && !INTENTIONAL_EMPTY_TAFSIR.has(word.tr)) {
      // Not fatal: ScholarlyPanel shows an empty-state fallback. Reported as info.
      // If you want to suppress for a word, add it to INTENTIONAL_EMPTY_TAFSIR.
      findings.push(`INFO: ${loc} has no tafsir entry (add to INTENTIONAL_EMPTY_TAFSIR if deliberate)`);
    }
  });
}

// Every rootMeanings key should appear as a rootTr on at least one word.
const rootsUsed = new Set();
for (const ref of verseOrder) {
  const verse = verses[ref];
  if (!verse) continue;
  for (const word of verse.words ?? []) {
    if (word.rootTr) rootsUsed.add(word.rootTr);
  }
}
for (const r of Object.keys(rootMeanings)) {
  if (!rootsUsed.has(r)) {
    findings.push(`INFO: rootMeanings["${r}"] is not referenced by any word in verses`);
  }
}
for (const r of Object.keys(rootOccurrences)) {
  if (!rootsUsed.has(r)) {
    findings.push(`INFO: rootOccurrences["${r}"] is not referenced by any word in verses`);
  }
}

const errors = findings.filter((f) => !f.startsWith("INFO:"));
const infos = findings.filter((f) => f.startsWith("INFO:"));

if (infos.length > 0) {
  console.log("INFO:");
  for (const f of infos) console.log("  " + f.replace(/^INFO: /, ""));
  console.log("");
}

if (errors.length > 0) {
  console.error(`FAIL — ${errors.length} issue${errors.length === 1 ? "" : "s"} found:`);
  for (const f of errors) console.error("  " + f);
  process.exit(1);
}

console.log(`OK — ${verseOrder.length} verse(s), ${rootsUsed.size} root(s), ${Object.keys(tafsir).length} tafsir entr${Object.keys(tafsir).length === 1 ? "y" : "ies"}. No errors.`);
