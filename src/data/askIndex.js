// Seed Q&A for the Ask section.
//
// Every entry is a composed editorial answer drawn from the tafsir library
// in `fatiha.js`. Tags feed a dumb keyword matcher — no retrieval model,
// no LLM, no fabrication surface. If none of these tag sets match the
// user's query, the UI says so plainly rather than inventing an answer.

export const entries = [
  {
    id: "rahman-vs-rahim",
    tags: [
      "rahman", "raḥmān", "rahman", "rahim", "raḥīm",
      "difference", "between", "both", "versus", "vs", "compare", "same",
      "mercy", "gracious", "merciful",
    ],
    question: "Why does Allah describe Himself as both ar-Raḥmān and ar-Raḥīm? Aren't they the same thing?",
    answer: "They share a root, but classical scholars draw a careful distinction. Ar-Raḥmān is often described as mercy that is vast and universal — extended to all of creation, believer and otherwise. Ar-Raḥīm is more particular — a special, ongoing mercy for those who turn toward Him. The first is the ocean; the second is the spring that flows to you personally.",
    sources: [
      "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
      "al-Ṭabarī · Jāmiʿ al-Bayān",
      "Lane · Arabic-English Lexicon",
    ],
  },
  {
    id: "what-is-basmala",
    tags: [
      "bismillah", "bismi", "basmala", "opening", "invocation",
      "in the name of allah", "in the name", "name of allah",
      "why say bismillah", "before",
    ],
    question: "What is the Basmala, and why does it open almost every surah?",
    answer: "The Basmala — 'bi-smi Llāhi r-Raḥmāni r-Raḥīm' — is the believer's habitual opening. Classical tafsirs treat it as more than a formula: it places an act under the Name it invokes, asking help and blessing before speech, reading, or undertaking anything of weight. Whether it counts as the first verse of every surah is itself an old scholarly question; al-Ṭabarī records the major views without flattening them into one answer.",
    sources: [
      "al-Ṭabarī · Jāmiʿ al-Bayān",
      "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
    ],
  },
  {
    id: "what-does-allah-mean",
    tags: [
      "allah", "god", "name", "meaning", "proper name",
      "what does allah mean", "ilah", "deity", "uniqueness",
    ],
    question: "What does the name 'Allah' mean?",
    answer: "Classical grammarians disagree on whether Allāh is a pure proper name (ʿalam) with no derivation, or a contraction of al-ilāh ('the deity'). Either way the usage is unique: the name is never pluralized, never feminized, and applies to no one else. Ibn Kathīr holds that it is the most specific of the divine names — other names describe attributes, whereas Allāh names the Named.",
    sources: [
      "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
      "al-Rāzī · Mafātīḥ al-Ghayb",
      "Lane · Arabic-English Lexicon",
    ],
  },
  {
    id: "root-rhm-womb",
    tags: [
      "womb", "rahim", "root", "raḥma", "mercy", "etymology",
      "connection", "related", "why womb",
    ],
    question: "Why is the word for 'mercy' related to the word for 'womb'?",
    answer: "In Arabic, raḥma (mercy) and raḥim (womb) share the same trilateral root, r-ḥ-m. Classical lexicographers treat the connection as conceptual, not accidental: mercy is the disposition of the one who holds another close, as a womb holds the unborn. When the Quran names God ar-Raḥmān, it draws on that same intimacy — not mercy at a distance, but mercy that encloses.",
    sources: [
      "Lane · Arabic-English Lexicon",
      "al-Qurṭubī · al-Jāmiʿ li-Aḥkām al-Qurʾān",
    ],
  },
];
