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

// Scholarly analysis per word.
//
// Excerpts are editorial paraphrases of positions widely attributed to each
// scholar in the cited work — not verbatim translations. Where a direct quote
// is wanted, the `url` on each excerpt points (eventually) to the original.
// For now `url` is null; the UI surfaces this honestly.

export const tafsir = {
  "bismi": {
    morphology: "bi- (preposition: with / in) + ism (name) + genitive -i. The alif of ism is elided in this fixed opening formula — a sign that the Basmala has, by long use, become a unit rather than a literal construction.",
    excerpts: [
      {
        source: "al-Ṭabarī · Jāmiʿ al-Bayān",
        url: null,
        body: "al-Ṭabarī opens his tafsir with a long treatment of the Basmala itself: whether it is a verse of Al-Fātiḥa, whether it prefaces every surah as revelation or as convention, and whether it should be recited aloud in prayer. He records the major views of the Companions and the schools that followed them without collapsing them into one position.",
      },
      {
        source: "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
        url: null,
        body: "Ibn Kathīr frames the Basmala as the believer's habitual opening — invoked before reading, eating, mounting a ride, entering the home — and notes the prophetic practice of beginning every significant act with it. The preposition bi- carries the sense of seeking help and drawing blessing through the Name.",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "ism (اسم) derives from s-m-w, 'to be high, elevated.' A name raises its bearer into speech and memory; to invoke a name is to place an act under the bearer's authority.",
    },
  },

  "Allāh": {
    morphology: "The divine proper name. Classical grammarians debate whether it is a pure proper name (ʿalam) with no derivation, or a contraction of al-ilāh ('the deity') with the hamza elided. Either way, its usage is unique: it is never pluralized, never feminized, and applies to no one else.",
    excerpts: [
      {
        source: "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
        url: null,
        body: "Ibn Kathīr holds that Allāh is the proper name (ʿalam) of God, known to the Arabs before Islam as the name of the supreme deity. It is the most specific of the divine names — all other names describe attributes, whereas Allāh names the Named.",
      },
      {
        source: "al-Rāzī · Mafātīḥ al-Ghayb",
        url: null,
        body: "al-Rāzī devotes an extended passage to the uniqueness of the name: that it cannot be given to another, that its letters carry weight even when partially pronounced (Allāh → Lāh → Hū), and that it is the name every other name is, in some sense, pointing toward.",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "ilāh (إله) is 'that which is worshiped.' Whether Allāh derives from al-ilāh or stands independent, the semantic field is worship directed to the singular and supreme.",
    },
  },

  "ar-Raḥmān": {
    morphology: "On the pattern faʿlān — an intensive form denoting a quality one is saturated with, a state rather than an action. The pattern suggests mercy so full that it overflows, uncontainable.",
    excerpts: [
      {
        source: "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
        url: null,
        body: "Ibn Kathīr holds that ar-Raḥmān is a name exclusive to Allah — no human may bear it — and that its scope is universal: mercy extended to all of creation, believer and unbeliever, before any response on the creature's part. It is the ground on which existence itself rests.",
      },
      {
        source: "al-Qurṭubī · al-Jāmiʿ li-Aḥkām al-Qurʾān",
        url: null,
        body: "al-Qurṭubī reads the faʿlān pattern as denoting a mercy that cannot be exceeded in its kind, citing the Quranic exchange in 17:110 where God says 'call Him Allah, or call Him ar-Raḥmān — whichever you call, to Him belong the most beautiful names.'",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "r-ḥ-m is the root of both raḥma (mercy) and raḥim (womb). The connection is not incidental: mercy in Arabic is the disposition of the one who holds another close, as a womb holds the unborn.",
    },
  },

  "ar-Raḥīm": {
    morphology: "On the pattern faʿīl — indicating continuity and an active, ongoing quality. Where faʿlān captures the fullness of a state, faʿīl captures its steady exercise over time.",
    excerpts: [
      {
        source: "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
        url: null,
        body: "Ibn Kathīr notes that ar-Raḥīm, unlike ar-Raḥmān, may be applied to creation — the Prophet is called raʾūf raḥīm in 9:128. Its specificity, when applied to God, is the ongoing mercy shown to those who turn toward Him: response, provision, forgiveness, the particular care of the relationship.",
      },
      {
        source: "Ibn al-Qayyim · Badāʾiʿ al-Fawāʾid",
        url: null,
        body: "Ibn al-Qayyim draws the often-cited distinction: ar-Raḥmān is the vast, unconditioned ocean of mercy from which all creatures drink; ar-Raḥīm is the spring that flows to a specific soul in a specific moment. Both are real; neither exhausts the other.",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "Raḥīm (رحيم) on the faʿīl pattern denotes the one in whom the quality persists — compassion not as a flash but as a standing relation.",
    },
  },
};
