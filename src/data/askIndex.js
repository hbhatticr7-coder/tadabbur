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
  {
    id: "hamd-vs-shukr",
    tags: [
      "hamd", "ḥamd", "shukr", "praise", "gratitude", "alhamdulillah",
      "difference", "between", "distinguish",
    ],
    question: "What's the difference between ḥamd and shukr?",
    answer: "Classical Arabic usage distinguishes them carefully. Shukr is gratitude tied to a received favor — it responds to something given. Ḥamd is praise owed to the excellence of the praised one, offered freely whether or not you personally received a benefit. Madḥ is a third word, praise for any quality, good or neutral. When the Quran opens with al-ḥamdu li-llāhi, it names a posture that is fuller than gratitude: acknowledgment of Allah's excellence as a standing truth, not a transaction.",
    sources: [
      "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
      "Lane · Arabic-English Lexicon",
    ],
  },
  {
    id: "what-does-rabb-mean",
    tags: [
      "rabb", "lord", "sustainer", "master", "meaning",
      "what does rabb mean", "rabbi", "lord of the worlds",
    ],
    question: "What does 'Rabb' mean when the Quran calls Allah rabbi l-ʿālamīn?",
    answer: "The Arabic root r-b-b carries more than 'lord' in the English sense of owner or master. Rabb is the one who raises something up — a master who cultivates, a guardian who brings to maturity, a source from whom a thing originates. Ibn Kathīr summarizes three senses combined in the word: ownership, ongoing care, and origination. When the Quran says rabbi l-ʿālamīn, it affirms all three over every realm of creation, with no partner.",
    sources: [
      "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
      "al-Ṭabarī · Jāmiʿ al-Bayān",
      "Lane · Arabic-English Lexicon",
    ],
  },
  {
    id: "alamin-worlds",
    tags: [
      "alamin", "ʿālamīn", "worlds", "creation", "universe",
      "lord of the worlds", "what are the worlds",
    ],
    question: "What are 'the worlds' (al-ʿālamīn) in 'Lord of the worlds'?",
    answer: "ʿĀlam comes from the root ʿ-l-m, 'to know.' A world, in this sense, is a realm BY WHICH something is known — creation as the sign of its Maker. Classical tafsirs record two readings of the plural al-ʿālamīn. Some early scholars, noting that the -īn ending is ordinarily used for rational beings, took it to mean specifically humans and jinn. The majority reading, reported by Ibn Kathīr from Ibn ʿAbbās and others, is inclusive: every separate realm of creation — humans, jinn, angels, and every kind of created being.",
    sources: [
      "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
      "al-Qurṭubī · al-Jāmiʿ li-Aḥkām al-Qurʾān",
      "Lane · Arabic-English Lexicon",
    ],
  },
];
