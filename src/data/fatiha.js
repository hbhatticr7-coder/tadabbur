// Al-Fātiḥa 1:1 — the Basmala, broken into its four words with trilateral roots
// and the other Quranic verses where each root surfaces.
//
// Root glosses follow Lane's Arabic-English Lexicon for the core semantic range.

export const words = [
  { ar: "بِسْمِ",       tr: "bismi",      gloss: "in the name of",    root: "س م و", rootTr: "s-m-w" },
  { ar: "اللَّهِ",       tr: "Allāh",      gloss: "Allah (God)",       root: "أ ل ه", rootTr: "ʾ-l-h" },
  { ar: "الرَّحْمَٰنِ",  tr: "ar-Raḥmān",  gloss: "the Most Gracious", root: "ر ح م", rootTr: "r-ḥ-m" },
  { ar: "الرَّحِيمِ",    tr: "ar-Raḥīm",   gloss: "the Most Merciful", root: "ر ح م", rootTr: "r-ḥ-m" },
];

export const rootMeanings = {
  "s-m-w": "naming, elevation",
  "ʾ-l-h": "worship, the deity",
  "r-ḥ-m": "mercy, womb-closeness",
};

export const rootOccurrences = {
  "s-m-w": [
    { ref: "1:1",    text: "بِسْمِ اللَّهِ",                         note: "the opening invocation" },
    { ref: "27:30",  text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", note: "Solomon's letter opens the same way" },
    { ref: "96:1",   text: "اقْرَأْ بِاسْمِ رَبِّكَ",                note: "the first revelation — 'read in the name of your Lord'" },
    { ref: "55:78",  text: "تَبَارَكَ اسْمُ رَبِّكَ",                note: "'blessed is the name of your Lord'" },
  ],
  "ʾ-l-h": [
    { ref: "1:1",    text: "بِسْمِ اللَّهِ",                         note: "the opening invocation" },
    { ref: "112:1",  text: "قُلْ هُوَ اللَّهُ أَحَدٌ",               note: "Sūrat al-Ikhlāṣ — 'He is Allah, One'" },
    { ref: "2:255",  text: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ",        note: "Āyat al-Kursī — 'no deity but He'" },
    { ref: "20:14",  text: "إِنَّنِي أَنَا اللَّهُ",                 note: "God's self-introduction to Mūsā at the fire" },
  ],
  "r-ḥ-m": [
    { ref: "1:1",    text: "الرَّحْمَٰنِ الرَّحِيمِ",                note: "the opening invocation" },
    { ref: "55:1",   text: "الرَّحْمَٰنُ",                           note: "a surah named for this attribute" },
    { ref: "19:18",  text: "أَعُوذُ بِالرَّحْمَٰنِ",                 note: "Maryam's appeal for refuge" },
    { ref: "17:110", text: "ادْعُوا اللَّهَ أَوِ ادْعُوا الرَّحْمَٰنَ", note: "'call Him Allah, or call Him ar-Raḥmān' — names of equal standing" },
  ],
};
