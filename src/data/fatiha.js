// Al-Fātiḥa — the opening surah.
//
// Data is organized by verse. Each verse carries its words, the Quranic
// translation we show under the Arabic, and a short label. Roots, their
// occurrences, and the per-word tafsir are shared across verses (a root
// that appears in 1:1 and 1:2 is only listed once).
//
// Root glosses follow Lane's Arabic-English Lexicon for the core semantic
// range. Tafsir excerpts are editorial paraphrases of positions widely
// attributed to each scholar — not verbatim translations.

export const verseOrder = ["1:1", "1:2", "1:3", "1:4", "1:5", "1:6", "1:7"];

export const verses = {
  "1:1": {
    ref: "1:1",
    label: "the opening",
    translation: "In the name of Allah, the Most Gracious, the Most Merciful.",
    words: [
      { ar: "بِسْمِ",       tr: "bismi",      gloss: "in the name of",    root: "س م و", rootTr: "s-m-w" },
      { ar: "اللَّهِ",       tr: "Allāh",      gloss: "Allah (God)",       root: "أ ل ه", rootTr: "ʾ-l-h" },
      { ar: "الرَّحْمَٰنِ",  tr: "ar-Raḥmān",  gloss: "the Most Gracious", root: "ر ح م", rootTr: "r-ḥ-m" },
      { ar: "الرَّحِيمِ",    tr: "ar-Raḥīm",   gloss: "the Most Merciful", root: "ر ح م", rootTr: "r-ḥ-m" },
    ],
  },
  "1:2": {
    ref: "1:2",
    label: "praise and lordship",
    translation: "All praise belongs to Allah, Lord of all the worlds.",
    words: [
      { ar: "الْحَمْدُ",      tr: "al-ḥamdu",    gloss: "all praise",          root: "ح م د", rootTr: "ḥ-m-d" },
      { ar: "لِلَّهِ",         tr: "li-llāhi",    gloss: "belongs to Allah",    root: "أ ل ه", rootTr: "ʾ-l-h" },
      { ar: "رَبِّ",          tr: "rabbi",       gloss: "Lord of",             root: "ر ب ب", rootTr: "r-b-b" },
      { ar: "الْعَالَمِينَ",   tr: "al-ʿālamīn",  gloss: "all the worlds",      root: "ع ل م", rootTr: "ʿ-l-m" },
    ],
  },
  "1:3": {
    ref: "1:3",
    label: "the names, again",
    translation: "The Most Gracious, the Most Merciful.",
    words: [
      // Same names as 1:1 positions 2 and 3. Both words reuse existing tafsir entries
      // (keyed by word.tr), so the scholarly analysis repeats consistently.
      { ar: "الرَّحْمَٰنِ",  tr: "ar-Raḥmān",  gloss: "the Most Gracious", root: "ر ح م", rootTr: "r-ḥ-m" },
      { ar: "الرَّحِيمِ",    tr: "ar-Raḥīm",   gloss: "the Most Merciful", root: "ر ح م", rootTr: "r-ḥ-m" },
    ],
  },
  "1:4": {
    ref: "1:4",
    label: "the day of judgment",
    translation: "Master of the Day of Judgment.",
    words: [
      { ar: "مَالِكِ",  tr: "māliki",  gloss: "Master of",       root: "م ل ك", rootTr: "m-l-k" },
      { ar: "يَوْمِ",   tr: "yawmi",   gloss: "the Day of",      root: "ي و م", rootTr: "y-w-m" },
      { ar: "الدِّينِ", tr: "ad-dīn",  gloss: "Judgment",        root: "د ي ن", rootTr: "d-y-n" },
    ],
  },
  "1:5": {
    ref: "1:5",
    label: "the turning of the address",
    translation: "You alone we worship, and You alone we ask for help.",
    words: [
      // iyyāka is a particle of exclusivity / specification. Classical grammarians
      // treat it as a pronominal particle rather than a word derived from a trilateral
      // root. We hold a placeholder root ʾ-y-y so the panel has something to show,
      // and explain the particle construction in the morphology note.
      { ar: "إِيَّاكَ",      tr: "iyyāka",     gloss: "You alone",         root: "أ ي ي", rootTr: "ʾ-y-y" },
      { ar: "نَعْبُدُ",      tr: "naʿbudu",    gloss: "we worship",        root: "ع ب د", rootTr: "ʿ-b-d" },
      { ar: "وَإِيَّاكَ",    tr: "wa-iyyāka",  gloss: "and You alone",     root: "أ ي ي", rootTr: "ʾ-y-y" },
      { ar: "نَسْتَعِينُ",   tr: "nastaʿīn",   gloss: "we ask for help",   root: "ع و ن", rootTr: "ʿ-w-n" },
    ],
  },
  "1:6": {
    ref: "1:6",
    label: "the prayer for guidance",
    translation: "Guide us to the straight path.",
    words: [
      { ar: "اهْدِنَا",       tr: "ihdinā",       gloss: "guide us",       root: "ه د ي", rootTr: "h-d-y" },
      { ar: "الصِّرَاطَ",      tr: "aṣ-ṣirāṭa",    gloss: "the path",       root: "ص ر ط", rootTr: "ṣ-r-ṭ" },
      { ar: "الْمُسْتَقِيمَ",   tr: "al-mustaqīm",  gloss: "the straight",   root: "ق و م", rootTr: "q-w-m" },
    ],
  },
  "1:7": {
    ref: "1:7",
    label: "whose path, and whose not",
    translation: "The path of those whom You have favored, not of those who have incurred anger, nor of those who have gone astray.",
    words: [
      { ar: "صِرَاطَ",           tr: "ṣirāṭa",       gloss: "the path of",                    root: "ص ر ط", rootTr: "ṣ-r-ṭ" },
      // alladhīna: the relative pronoun. Grammarians treat it as a particle-like
      // compound (al-la-dhī with the plural -na ending), not as a derivative of a
      // trilateral root. Placeholder root l-dh-y for lookup consistency.
      { ar: "الَّذِينَ",         tr: "alladhīna",    gloss: "those whom",                     root: "ل ذ ي", rootTr: "l-dh-y" },
      { ar: "أَنْعَمْتَ",        tr: "anʿamta",      gloss: "You have favored",               root: "ن ع م", rootTr: "n-ʿ-m" },
      { ar: "عَلَيْهِمْ",        tr: "ʿalayhim",     gloss: "upon them",                      root: "ع ل ي", rootTr: "ʿ-l-y" },
      // ghayri is left intentionally without a tafsir entry to demonstrate the
      // ScholarlyPanel empty-state fallback as a product voice choice. See
      // INTENTIONAL_EMPTY_TAFSIR in scripts/check-corpus.mjs.
      { ar: "غَيْرِ",            tr: "ghayri",       gloss: "other than",                     root: "غ ي ر", rootTr: "gh-y-r" },
      { ar: "الْمَغْضُوبِ",       tr: "al-maghḍūb",   gloss: "those who have incurred anger",  root: "غ ض ب", rootTr: "gh-ḍ-b" },
      // Second occurrence of ʿalayhim shares the tafsir entry with the first.
      { ar: "عَلَيْهِمْ",        tr: "ʿalayhim",     gloss: "upon them",                      root: "ع ل ي", rootTr: "ʿ-l-y" },
      { ar: "وَلَا الضَّالِّينَ",  tr: "wa-lā-ḍ-ḍāllīn", gloss: "and not those who have gone astray", root: "ض ل ل", rootTr: "ḍ-l-l" },
    ],
  },
};

export const rootMeanings = {
  "s-m-w": "naming, elevation",
  "ʾ-l-h": "worship, the deity",
  "r-ḥ-m": "mercy, womb-closeness",
  "ḥ-m-d": "praise owed to excellence",
  "r-b-b": "lordship, raising, sustaining",
  "ʿ-l-m": "knowing, the sign by which a thing is known",
  "m-l-k": "ownership, sovereignty, dominion",
  "y-w-m": "day, a bounded period of time",
  "d-y-n": "judgment, recompense, a binding obligation",
  "ʾ-y-y": "a particle of specification; iyyā frontloads the object for emphasis",
  "ʿ-b-d": "worship, servitude, the posture of the slave before the master",
  "ʿ-w-n": "help, assistance sought and given",
  "h-d-y": "guidance, showing the way",
  "ṣ-r-ṭ": "a wide, plain path; a road already cleared",
  "q-w-m": "standing upright, being established, straightness",
  "l-dh-y": "the relative pronoun; a particle-like compound, not a trilateral root",
  "n-ʿ-m": "favor, blessing bestowed",
  "ʿ-l-y": "height, being upon or above",
  "gh-y-r": "other than, a particle of exception",
  "gh-ḍ-b": "anger, the heat of displeasure",
  "ḍ-l-l": "straying, losing the way, going astray",
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
    { ref: "1:2",    text: "الْحَمْدُ لِلَّهِ",                      note: "'all praise belongs to Allah'" },
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
  "ḥ-m-d": [
    { ref: "1:2",    text: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",   note: "the opening declaration of praise" },
    { ref: "6:1",    text: "الْحَمْدُ لِلَّهِ الَّذِي خَلَقَ",        note: "Sūrat al-Anʿām opens the same way" },
    { ref: "10:10",  text: "وَآخِرُ دَعْوَاهُمْ أَنِ الْحَمْدُ لِلَّهِ", note: "the closing prayer of the people of paradise returns to 1:2" },
    { ref: "17:111", text: "وَقُلِ الْحَمْدُ لِلَّهِ",                note: "a command: 'say: all praise belongs to Allah'" },
  ],
  "r-b-b": [
    { ref: "1:2",    text: "رَبِّ الْعَالَمِينَ",                    note: "'Lord of the worlds'" },
    { ref: "2:21",   text: "اعْبُدُوا رَبَّكُمُ",                     note: "'worship your Lord, who created you'" },
    { ref: "96:1",   text: "اقْرَأْ بِاسْمِ رَبِّكَ",                note: "the first revelation — 'read in the name of your Lord'" },
    { ref: "114:1",  text: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",          note: "the final surah appeals to 'the Lord of mankind'" },
  ],
  "ʿ-l-m": [
    { ref: "1:2",    text: "رَبِّ الْعَالَمِينَ",                    note: "'Lord of all the worlds'" },
    { ref: "21:107", text: "رَحْمَةً لِّلْعَالَمِينَ",                note: "the Prophet sent 'as a mercy to the worlds'" },
    { ref: "25:1",   text: "لِيَكُونَ لِلْعَالَمِينَ نَذِيرًا",      note: "the Furqān revealed 'as a warner to the worlds'" },
    { ref: "96:5",   text: "عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ",  note: "same root ʿ-l-m — 'taught man what he did not know'" },
  ],
  "m-l-k": [
    { ref: "1:4",    text: "مَالِكِ يَوْمِ الدِّينِ",                note: "'Master of the Day of Judgment'" },
    { ref: "3:26",   text: "قُلِ اللَّهُمَّ مَالِكَ الْمُلْكِ",      note: "'Say: O Allah, Owner of all dominion'" },
    { ref: "20:114", text: "فَتَعَالَى اللَّهُ الْمَلِكُ الْحَقُّ",  note: "'exalted is Allah, the true King'" },
    { ref: "114:2",  text: "مَلِكِ النَّاسِ",                        note: "'the King of mankind' (closing surah)" },
  ],
  "y-w-m": [
    { ref: "1:4",    text: "يَوْمِ الدِّينِ",                        note: "'the Day of Judgment'" },
    { ref: "2:281",  text: "وَاتَّقُوا يَوْمًا تُرْجَعُونَ فِيهِ",   note: "'fear a day on which you will be returned'" },
    { ref: "82:17",  text: "وَمَا أَدْرَاكَ مَا يَوْمُ الدِّينِ",   note: "'what will make you realize what the Day of Judgment is?'" },
    { ref: "101:1",  text: "الْقَارِعَةُ",                           note: "a name for the Day among many the Quran uses" },
  ],
  "d-y-n": [
    { ref: "1:4",    text: "يَوْمِ الدِّينِ",                        note: "'Day of Judgment' / 'Day of Recompense'" },
    { ref: "3:19",   text: "إِنَّ الدِّينَ عِندَ اللَّهِ الْإِسْلَامُ", note: "'the dīn with Allah is Islam' — here dīn as religion" },
    { ref: "109:6",  text: "لَكُمْ دِينُكُمْ وَلِيَ دِينِ",          note: "'to you your dīn, and to me my dīn'" },
    { ref: "51:6",   text: "وَإِنَّ الدِّينَ لَوَاقِعٌ",              note: "'and indeed the Recompense will come to pass'" },
  ],
  "ʾ-y-y": [
    { ref: "1:5",    text: "إِيَّاكَ نَعْبُدُ",                      note: "'You alone we worship' — the particle fronts the object" },
    { ref: "1:5",    text: "وَإِيَّاكَ نَسْتَعِينُ",                 note: "the construction is repeated: worship and help both named exclusively" },
    { ref: "2:40",   text: "وَإِيَّايَ فَارْهَبُونِ",                note: "'and Me alone fear'" },
    { ref: "29:17",  text: "فَابْتَغُوا عِندَ اللَّهِ الرِّزْقَ وَاعْبُدُوهُ", note: "compare: normal object placement without iyyā" },
  ],
  "ʿ-b-d": [
    { ref: "1:5",    text: "إِيَّاكَ نَعْبُدُ",                      note: "'You alone we worship'" },
    { ref: "51:56",  text: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ", note: "'I created jinn and humans only to worship Me'" },
    { ref: "2:21",   text: "اعْبُدُوا رَبَّكُمُ",                     note: "'worship your Lord, who created you'" },
    { ref: "19:93",  text: "إِلَّا آتِي الرَّحْمَٰنِ عَبْدًا",        note: "'every one in the heavens and earth comes to ar-Raḥmān as a servant'" },
  ],
  "ʿ-w-n": [
    { ref: "1:5",    text: "وَإِيَّاكَ نَسْتَعِينُ",                 note: "'and You alone we ask for help' — the verb form istaʿīn from the root" },
    { ref: "2:45",   text: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ", note: "'seek help through patience and prayer'" },
    { ref: "5:2",    text: "وَتَعَاوَنُوا عَلَى الْبِرِّ",           note: "'help one another in righteousness'" },
  ],
  "h-d-y": [
    { ref: "1:6",    text: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",     note: "'guide us to the straight path'" },
    { ref: "2:2",    text: "هُدًى لِّلْمُتَّقِينَ",                  note: "the Quran itself named 'guidance for the mindful'" },
    { ref: "28:56",  text: "إِنَّكَ لَا تَهْدِي مَنْ أَحْبَبْتَ",    note: "'you do not guide whom you love — Allah guides whom He wills'" },
    { ref: "93:7",   text: "وَوَجَدَكَ ضَالًّا فَهَدَى",             note: "'He found you wandering and guided'" },
  ],
  "ṣ-r-ṭ": [
    { ref: "1:6",    text: "الصِّرَاطَ الْمُسْتَقِيمَ",              note: "'the straight path'" },
    { ref: "1:7",    text: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ", note: "the path specified: that of those favored" },
    { ref: "6:153",  text: "وَأَنَّ هَٰذَا صِرَاطِي مُسْتَقِيمًا",   note: "'this is My straight path, so follow it'" },
    { ref: "36:4",   text: "عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ",             note: "the Prophet described as being 'on a straight path'" },
  ],
  "q-w-m": [
    { ref: "1:6",    text: "الصِّرَاطَ الْمُسْتَقِيمَ",              note: "mustaqīm: participle of istaqāma, 'to be straight / upright'" },
    { ref: "4:5",    text: "قِيَامًا",                                note: "qiyām: 'that which keeps you standing' — sustenance" },
    { ref: "11:56",  text: "إِنَّ رَبِّي عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ", note: "'my Lord is on a straight path'" },
    { ref: "72:16",  text: "وَأَن لَّوِ اسْتَقَامُوا عَلَى الطَّرِيقَةِ", note: "'had they been steadfast on the way'" },
  ],
  "l-dh-y": [
    { ref: "1:7",    text: "الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",        note: "'those whom You have favored' — the relative clause qualifying the path" },
    { ref: "2:2",    text: "لِلْمُتَّقِينَ الَّذِينَ يُؤْمِنُونَ",   note: "'for the mindful who believe'" },
    { ref: "4:69",   text: "مَعَ الَّذِينَ أَنْعَمَ اللَّهُ عَلَيْهِم", note: "a direct echo of 1:7: the favored are named" },
  ],
  "n-ʿ-m": [
    { ref: "1:7",    text: "أَنْعَمْتَ عَلَيْهِمْ",                  note: "'those whom You have favored'" },
    { ref: "4:69",   text: "مَعَ الَّذِينَ أَنْعَمَ اللَّهُ عَلَيْهِم", note: "the favored named: prophets, the truthful, the martyrs, the righteous" },
    { ref: "14:7",   text: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",      note: "'if you are grateful, I will increase you' — the niʿma response" },
    { ref: "93:11",  text: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",   note: "'as for the favor of your Lord, proclaim it'" },
  ],
  "ʿ-l-y": [
    { ref: "1:7",    text: "أَنْعَمْتَ عَلَيْهِمْ",                  note: "ʿalā as the preposition 'upon' — the favor descends" },
    { ref: "2:255",  text: "وَهُوَ الْعَلِيُّ الْعَظِيمُ",           note: "ar-Rabb named al-ʿAliyy al-ʿAẓīm — 'the High, the Supreme'" },
    { ref: "7:143",  text: "فَلَمَّا تَجَلَّىٰ رَبُّهُ لِلْجَبَلِ",  note: "an account of divine manifestation, the mountain laid low" },
  ],
  "gh-y-r": [
    { ref: "1:7",    text: "غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ",         note: "'other than those with whom You are angry'" },
    { ref: "4:95",   text: "غَيْرُ أُولِي الضَّرَرِ",                 note: "ghayr used as 'other than' in specifying the exception" },
  ],
  "gh-ḍ-b": [
    { ref: "1:7",    text: "الْمَغْضُوبِ عَلَيْهِمْ",                note: "passive participle: 'those upon whom anger has been placed'" },
    { ref: "7:152",  text: "غَضَبٌ مِّن رَّبِّهِمْ",                 note: "'a wrath from their Lord' — of those who took the calf" },
    { ref: "20:81",  text: "فَيَحِلَّ عَلَيْكُمْ غَضَبِي",           note: "'lest My wrath descend upon you'" },
  ],
  "ḍ-l-l": [
    { ref: "1:7",    text: "وَلَا الضَّالِّينَ",                      note: "'and not those who have gone astray' — the other side of the contrast" },
    { ref: "93:7",   text: "وَوَجَدَكَ ضَالًّا فَهَدَى",             note: "'He found you wandering and guided' — ḍāll and its opposite, hidāya" },
    { ref: "39:23",  text: "مَن يُضْلِلِ اللَّهُ فَمَا لَهُ مِنْ هَادٍ", note: "'whom Allah leaves to stray has no guide'" },
    { ref: "6:125",  text: "وَمَن يُرِدْ أَن يُضِلَّهُ",              note: "straying and guidance presented as a divine decision" },
  ],
};

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

  "al-ḥamdu": {
    morphology: "The definite article al- joined to the verbal noun ḥamd. Classical grammarians read the al- here as al-istighrāq — the 'totalizing' article: all praise, of every kind, for every reason. The sentence itself is nominal (ismiyya) — a statement of being, not an imperative.",
    excerpts: [
      {
        source: "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
        url: null,
        body: "Ibn Kathīr draws the classical distinction between ḥamd, shukr, and madḥ. Madḥ is praise offered for any quality, good or indifferent. Shukr is gratitude tied to a received favor. Ḥamd is praise owed to the excellence of the praised one — offered freely, not in exchange. When the verse opens with al-ḥamdu li-llāhi, it names the posture that the whole Quran will return to again and again.",
      },
      {
        source: "al-Rāzī · Mafātīḥ al-Ghayb",
        url: null,
        body: "al-Rāzī reads the totalizing al- as a theological claim: all praise, wherever it is directed, finally belongs to Allah. When one human praises another, the qualities being praised are themselves gifts from the one true source. The verse leaves no praise unaccounted for.",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "ḥ-m-d denotes praise owed to the excellence of the one praised, not elicited from the praiser. It is distinguished from shukr (gratitude for a received favor) in classical Arabic usage.",
    },
  },

  "li-llāhi": {
    morphology: "The preposition li- ('to, for, belonging to') attached to the Name. Classical grammarians call the li- here lām al-milk — the lām of possession. The verse is not saying that praise is given TO Allah; it is saying praise BELONGS to Him, as property belongs to its owner.",
    excerpts: [
      {
        source: "al-Ṭabarī · Jāmiʿ al-Bayān",
        url: null,
        body: "al-Ṭabarī reads the li- as asserting rightful ownership rather than mere direction. Praise is not a compliment one might or might not extend; it is already Allah's, and the believer is only acknowledging what is.",
      },
      {
        source: "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
        url: null,
        body: "Ibn Kathīr notes that the verse returns to the Name just invoked in the Basmala. The repetition is deliberate: the reader is kept in direct address to the Named, not diverted to an attribute. See the full treatment of the Name under 'Allāh' in 1:1.",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "lām al-milk, the lām of possession, is stronger than the lām of purpose or benefit. It marks what rightfully belongs to the one named.",
    },
  },

  "rabbi": {
    morphology: "Rabb in the genitive, as the first term of a construct (iḍāfa) with al-ʿālamīn. The root r-b-b carries more than ownership: rabb is the one who takes something and raises it — a master who cultivates, a guardian who brings to maturity.",
    excerpts: [
      {
        source: "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
        url: null,
        body: "Ibn Kathīr summarizes three senses combined in rabb: master (mālik), the one who raises and sustains (murabbī), and the one from whom a thing originates. To call Allah rabbi l-ʿālamīn is to affirm all three over every realm of creation without partner.",
      },
      {
        source: "al-Ṭabarī · Jāmiʿ al-Bayān",
        url: null,
        body: "al-Ṭabarī records that the Arabs used rabb for the head of a household or the owner of a thing, but when used of Allah the word takes its absolute sense — the one who owns, raises, and sustains, with no share given to another.",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "r-b-b: 'to raise, nurture, bring up.' Rabb is the one who does the raising. The same root yields tarbiya (upbringing, education) in later Arabic.",
    },
  },

  "al-ʿālamīn": {
    morphology: "Definite al- + ʿālam ('world') + the sound masculine plural ending -īn in the genitive. ʿĀlam itself is from ʿ-l-m, 'to know': a world is a realm BY WHICH something is known. The plural here is inclusive — all created realms, without restriction.",
    excerpts: [
      {
        source: "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
        url: null,
        body: "Ibn Kathīr cites early authorities — including Ibn ʿAbbās — on the scope of ʿālamīn. Some took it to mean humans and jinn (those capable of address); the majority read it inclusively: every separate realm of creation, humans and jinn and angels and every kind of created being.",
      },
      {
        source: "al-Qurṭubī · al-Jāmiʿ li-Aḥkām al-Qurʾān",
        url: null,
        body: "al-Qurṭubī discusses the -īn ending, which in Arabic is ordinarily used only for rational beings. He weighs what this implies about which realms of creation the word encompasses, and concludes with the inclusive reading the majority hold.",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "ʿālam is 'a sign by which something is known' — the same root as ʿalam (flag) and ʿalāma (mark). The world itself is the sign by which its Maker is known.",
    },
  },

  // ------------------------------------------------------------------
  // Verses 1:4 through 1:7.
  //
  // Scholarly excerpts below are paraphrased from positions as reported
  // in Nasr et al., The Study Quran (HarperCollins, 2015), pp. 11-19.
  // The Study Quran is a curated synthesis of classical tafsir; each
  // attribution here matches a scholar whose position the Study Quran's
  // editors assigned the corresponding tafsir code to.
  //
  // Morphology content is factual Arabic grammar. Lexicon entries are
  // Lane's Arabic-English Lexicon (public domain).
  //
  // Scholar attribution legend (for future additions):
  //   Q = al-Qurṭubī     Ṭ = al-Ṭabarī      IK = Ibn Kathīr
  //   R = al-Rāzī        Z = al-Zamakhsharī Ṭb = Ṭabāṭabāʾī
  //   Aj = Ibn ʿAjība    Qu = al-Qushayrī   Bq = al-Baqlī
  //   Ṭs = al-Ṭabrisī    JJ = Jalālayn      Ni = al-Nīsābūrī
  // ------------------------------------------------------------------

  // Verse 1:4 — Master of the Day of Judgment
  "māliki": {
    morphology: "The active participle of malaka ('to own, to rule'), on the fāʿil pattern. Grammatically the first term of a construct (iḍāfa) with yawmi; genitive case marked by kasra. The canonical readings of the Quran differ here: Ḥafṣ reads mālik (with the alif, 'owner, master'), ʿĀṣim and others read malik (without the alif, 'king'). Both are from the same root.",
    excerpts: [
      {
        source: "al-Qurṭubī · al-Jāmiʿ li-Aḥkām al-Qurʾān",
        url: null,
        body: "al-Qurṭubī records both canonical readings — mālik (master, owner) and malik (king, sovereign) — as traced to the Prophet himself. He weighs the two senses against each other: some argue that malik is the more intensive term, since every king is a master but not every master is a king. Others hold that malik is more comprehensive, because kingship carries the power of disposal over all things.",
      },
      {
        source: "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
        url: null,
        body: "Ibn Kathīr reads the verse's specification of the Day of Judgment as a reminder rather than a limitation: God is owner and king of every day, but on that day no contending claim remains. He cites the Prophet's report that God will grasp the earth and fold the sky with His Right Hand and proclaim, 'I am the King — where are the kings of the earth? Where are the tyrants?'",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "mālik names the one who owns and exercises authority over a thing. The fāʿil pattern marks the doer: the active possessor. Malik — on the pattern faʿil — names the sovereign by office. The two readings sharpen different facets of the same relationship.",
    },
  },

  "yawmi": {
    morphology: "The verbal noun yawm ('day') in the genitive, second term of the construct māliki yawmi. In Quranic usage yawm names a bounded span: sometimes a literal day, sometimes an epoch, often — with context — the Day of Resurrection or of Judgment.",
    excerpts: [
      {
        source: "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
        url: null,
        body: "Ibn Kathīr reads the Day of Judgment as the day on which the account of jinn and human beings comes due, and the meeting with God becomes inevitable. He ties the specification of Allah as Master of this day to the broader Quranic motif that all are returning to Him, and that the finality of the day makes the reckoning unavoidable.",
      },
      {
        source: "al-Ṭabarī · Jāmiʿ al-Bayān",
        url: null,
        body: "al-Ṭabarī takes the Day of Judgment as the day of requital and reckoning for deeds performed in this world, citing the Quranic declaration that on that Day every soul shall be recompensed for that which it has earned (40:17). The word yawm is a bounded span in classical Arabic usage; here the second term of the construct — dīn — specifies which day and what it accomplishes.",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "yawm: a day; any period with a beginning and an end. The plural ayyām ranges from literal days to eras ('the days of the Arabs'). Here the word opens into eschatology by its second term: yawm al-dīn, the Day of the Reckoning.",
    },
  },

  "ad-dīn": {
    morphology: "Definite article al- + the verbal noun dīn, in the genitive as the second term of a construct (yawmi d-dīn). The root d-y-n holds several threads at once: obedience, debt, obligation, judgment, religion. Classical tafsirs read the dīn here as the recompense — the day on which what is owed is settled.",
    excerpts: [
      {
        source: "al-Qurṭubī · al-Jāmiʿ li-Aḥkām al-Qurʾān",
        url: null,
        body: "al-Qurṭubī draws attention to the close linguistic relation between dīn and dayn ('debt'). Where dayn names a debt contracted between people, dīn names the repayment owed to God for the conduct of a life. He notes that al-Dayyān is itself a Divine Name, meaning 'The One Who Repays.' The Day of the dīn is the day of this settlement.",
      },
      {
        source: "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
        url: null,
        body: "Ibn Kathīr, drawing on Ibn ʿAbbās and others, reads dīn here as al-ḥisāb — the accounting — and as the requital for deeds performed in this world. He adds that the word elsewhere in the Quran carries the wider sense of 'religion' or 'way of life,' but in 1:4 the narrower eschatological reading predominates: the day on which what was done is weighed.",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "dīn covers a remarkable range: obedience and submission; a binding obligation; a debt; the recompense of an action; and the whole system of practice we translate 'religion.' On the Day of the dīn, all of these converge — the debts of a life are reckoned under a single law.",
    },
  },

  // Verse 1:5 — You alone we worship, and You alone we ask for help
  "iyyāka": {
    morphology: "A particle of specification. Classical grammarians debate whether iyyā is itself a noun with -ka as a suffixed pronoun, or whether iyyā is the pronoun and the -ka-type endings are added pronominal markers. What everyone agrees on: placing iyyāka at the front of the sentence — before the verb naʿbudu — restricts the object to the one named. The sense is not 'we worship you' but 'it is You, and You alone, that we worship.'",
    excerpts: [
      {
        source: "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
        url: null,
        body: "Ibn Kathīr, with al-Qurṭubī, marks the shift at 1:5 from the third-person praise and description of God in the first four verses to direct second-person address. The worshipper who spoke of God as 'Lord of the worlds' is now brought close enough to speak to Him: 'You alone.' The turn is one of the great pivots in the surah and in Quranic rhetoric more broadly.",
      },
      {
        source: "Ṭabāṭabāʾī · al-Mīzān fī Tafsīr al-Qurʾān",
        url: null,
        body: "Ṭabāṭabāʾī observes that placing the direct object (iyyāka) before the verb (naʿbudu) is itself a grammatical marker of complete servitude: the one being addressed is foregrounded before the action. The sentence structure mirrors the posture of worship — the worshipper turning wholly toward the Worshipped before speaking of the act itself.",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "iyyā — a particle used as a support for the object pronoun when the object is to be foregrounded. Its presence changes a neutral statement into an exclusive one. The construction is rare elsewhere in the Quran and marks a shift at this point in the surah from speaking about God to speaking to Him.",
    },
  },

  "naʿbudu": {
    morphology: "Imperfect verb in form I (faʿala pattern), first person plural: 'we worship.' The imperfect tense here carries both habitual and continuous senses — the worship is both a practice and a posture. The first person plural is significant: the worshipper speaks as part of a community, not alone.",
    excerpts: [
      {
        source: "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
        url: null,
        body: "Ibn Kathīr reads the verb naʿbudu — 'we worship' — as naming the state of complete servitude that all created beings in fact stand in before God, citing 19:93: 'There is none in the heavens and on the earth, but that it comes unto the Compassionate as a servant.' The act of worship is not the creation of this relation but the acknowledgment of it.",
      },
      {
        source: "Ṭabāṭabāʾī · al-Mīzān fī Tafsīr al-Qurʾān",
        url: null,
        body: "Ṭabāṭabāʾī reports the saying attributed to Jaʿfar al-Ṣādiq that worship is of three kinds: the worship of slaves, out of fear; the worship of hirelings, for reward; and the worship of those who are free, out of love. The third is the most excellent. Ṭabāṭabāʾī also reads the plural naʿbudu — 'we' rather than 'I' — as an act of humility: one acknowledges that ultimately only God has the right to say 'I.'",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "ʿabada — to serve, to submit in worship. The ʿabd is the slave whose will is given over to another. When used of God, the word retains the full sense of submission, not mere respect or admiration. A worshipper is not a fan; an ʿabd is property.",
    },
  },

  "wa-iyyāka": {
    morphology: "The coordinating conjunction wa- ('and') prefixed to iyyāka, repeating the exclusive-object construction for the second verb. The repetition is not decorative. Grammarians note that repeating iyyāka rather than using a simpler 'and we ask help from you' (wa-nastaʿīnu bika) keeps the emphasis on exclusivity: You alone we worship, and You alone we ask for help.",
    excerpts: [
      {
        source: "Ibn ʿAjība · al-Baḥr al-Madīd",
        url: null,
        body: "Ibn ʿAjība reads the ordering of the two exclusivities as deliberate: the expression of servitude necessarily precedes the statement that one seeks help. One does not knock on the king's door to ask for anything without first acknowledging the king's sovereignty. The repetition of iyyāka for both verbs keeps the acknowledgment and the petition each whole, neither bleeding into the other.",
      },
      {
        source: "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
        url: null,
        body: "Ibn Kathīr, with Ibn ʿAjība, reads the verse's second phrase — 'You alone we ask for help' — as a request for continued aid in the very worship just named, and in all of the worshipper's other affairs. The paired verbs name religion as a whole: what is owed (worship) and what is sought (help).",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "The particle iyyā is repeated with the wa- conjunction because Arabic coordinate sentences ordinarily share their subject but not their object-fronting. By repeating iyyāka, the verse insists that exclusivity applies twice: to the worship and to the appeal for help, separately and absolutely.",
    },
  },

  "nastaʿīn": {
    morphology: "Imperfect verb, form X (istafʿala pattern), first person plural, from the root ʿ-w-n. Form X standardly means 'to seek the action of the root.' From ʿ-w-n ('to help'), istaʿāna is 'to seek help.' Nastaʿīn: 'we seek help.' The form itself encodes asking, not receiving.",
    excerpts: [
      {
        source: "al-Baqlī · ʿArāʾis al-Bayān",
        url: null,
        body: "al-Baqlī grounds the asking for help in the acknowledgment that one is never independent of God: it is only through His assistance that one can worship Him, not through one's own power or strength. The verb nastaʿīn — 'we seek help' — thus encodes the limit of the worshipper and the source of every act of worship in a single breath.",
      },
      {
        source: "Ṭabāṭabāʾī · al-Mīzān fī Tafsīr al-Qurʾān",
        url: null,
        body: "Ṭabāṭabāʾī observes that the worshipper's request for help rests on the acknowledgment that one is never independent of God. The paired phrases 'You alone we worship' and 'You alone we ask for help' together describe a single posture: servitude turned toward its source, seeking from that source the capacity for the turning itself.",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "istaʿāna — to seek help. Form X of ʿ-w-n. The word does not mean 'to be helped'; it means 'to ask.' The verse pairs the two postures of a worshipper: service given (naʿbudu) and help requested (nastaʿīn). Both are active.",
    },
  },

  // Verse 1:6 — Guide us to the straight path
  "ihdinā": {
    morphology: "Imperative verb in form I, from the root h-d-y, with the attached object pronoun -nā ('us'): 'guide us.' The imperative in a prayer is not a command but a request — Arabic does not use a separate mood for supplication. Context determines the tone. Here the tone is the posture of a suppliant.",
    excerpts: [
      {
        source: "al-Ṭabarī · Jāmiʿ al-Bayān",
        url: null,
        body: "al-Ṭabarī reads ihdinā, following the preceding request for God's help, as a prayer for perseverance in the path already begun. The petition is not only to be shown the road but to be held upon it — each step needing the same guidance as the first. In his reading, the verse is continuous with the plea for help in the verse before it.",
      },
      {
        source: "al-Qurṭubī · al-Jāmiʿ li-Aḥkām al-Qurʾān",
        url: null,
        body: "al-Qurṭubī extends the request for guidance beyond the correction of conduct: to ask for hidāya is also to ask for intimacy with God, nearness to Him, knowledge of Him, and love for Him. The prayer does not end at receiving directions; it reaches toward the One who gives them.",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "hadā — to guide, to lead the way. The Quran extends the word's ordinary sense of physical direction to moral and spiritual direction. To ask for hidāya is to ask to be shown where to place the next step.",
    },
  },

  "aṣ-ṣirāṭa": {
    morphology: "Definite article al- + ṣirāṭ, in the accusative (fatḥa on the final consonant) as the direct object of ihdinā. The word ṣirāṭ itself, some grammarians note, has an irregular derivation: it is sometimes traced to sirāṭ with a sīn, which by sound-shift became ṣirāṭ. The etymology is less important than the sense: a clear, wide road.",
    excerpts: [
      {
        source: "al-Ṭabarī · Jāmiʿ al-Bayān",
        url: null,
        body: "al-Ṭabarī defines the straight path as a clear road with no crookedness and no deviation. He collects views from the early generations — that the ṣirāṭ is the Quran itself, that it is Islam, that it refers to the Prophet — and treats them as partial descriptions of a single road rather than competing claims: the Quran describing it, Islam walking it, the Prophet embodying it.",
      },
      {
        source: "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
        url: null,
        body: "Ibn Kathīr cites the Prophetic parable: 'God has set forth a parable: a straight path surrounded by two walls on both sides, with several open doors covered by curtains. A caller on the gate of the path calls out, O people! Stay on the path and do not deviate from it. Another caller, above the path, warns any who would open a curtained door, Woe unto you! Do not open it, for if you open it you will fall through.' The straight path is Islam; the walls are the limits set by God; the caller at the gate is the Book of God; the caller above is the admonishment in the heart.",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "ṣirāṭ — a plain open road, the kind you can see from a distance. Contrasted with ṭarīq (a way, possibly narrow or winding) and sabīl (a means or channel). The ṣirāṭ is the road that does not require interpretation to find.",
    },
  },

  "al-mustaqīm": {
    morphology: "Active participle of istaqāma (form X of q-w-m), 'to be straight, to be upright, to stand firm.' The pattern mustafʿil names the one in whom the action has settled. Mustaqīm: 'that which has been made straight and stays that way.' Not a path that happens to be straight today but the path whose straightness is constitutive.",
    excerpts: [
      {
        source: "Ibn ʿAjība · al-Baḥr al-Madīd",
        url: null,
        body: "Ibn ʿAjība reads the straight path as a middle way that combines the outward way of the Law with the inward way of the spirit. It avoids worldliness on one side and extreme asceticism on the other. The outward nature of the traveler is in servitude while the inner nature is free — straightness being, for him, the meeting of the two postures rather than a tilt to either side.",
      },
      {
        source: "al-Qurṭubī · al-Jāmiʿ li-Aḥkām al-Qurʾān",
        url: null,
        body: "al-Qurṭubī, together with al-Ṭabarī, records the Sunni reading that the straight path refers to the Prophet and to his two first Companions — the Caliphs Abū Bakr and ʿUmar — as the road of prophetic guidance carried on by those who walked closest to him. Other readings identify the path with the Quran, with Islam, or with the Prophet alone; each names something by which the believer may be kept upon the road.",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "mustaqīm stands opposed to muʿawwaj (crooked). A straight line between two points; a column that has not tilted; an account that balances. The Quran's use reaches upward from the physical sense into moral and theological territory.",
    },
  },

  // Verse 1:7 — The path of those whom You have favored, not the others
  "ṣirāṭa": {
    morphology: "The word ṣirāṭ repeated from 1:6, now in the accusative as the first term of a new construct with alladhīna ('the path of those who...'). The definite article drops because the word is now defined by what follows rather than by al-. The repetition across verses is structurally deliberate: 1:6 asks for the path; 1:7 specifies it.",
    excerpts: [
      {
        source: "al-Ṭabarī · Jāmiʿ al-Bayān",
        url: null,
        body: "al-Ṭabarī reads 1:7 as the clarification of 1:6: having asked for the straight path, the surah immediately specifies whose path, cross-referenced to the fuller account in 4:69. The second mention of ṣirāṭ is explanatory rather than introductory of a new road. The path already named is now shown in the company that walks it.",
      },
      {
        source: "al-Ṭabrisī · Majmaʿ al-Bayān",
        url: null,
        body: "al-Ṭabrisī treats the repetition of ṣirāṭ as a grammatical construct: 'path of those whom You have favored' is an appositive specification, giving the same road a second designation. The verse does not enumerate two paths but one, first described by its straightness and then by its travelers.",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "See the entry for aṣ-ṣirāṭa in 1:6. The repeated noun is identical; only the grammatical frame has shifted from direct-object-of-imperative to first-term-of-construct. The meaning is unchanged; the specification is new.",
    },
  },

  "alladhīna": {
    morphology: "The plural masculine relative pronoun. Grammarians analyze alladhī as a compound: the definite article al- + a demonstrative stem (ladhī). The plural adds -na. It cannot take tanwīn (nunation) and cannot be declined in the usual case-endings. What it does is open a relative clause that qualifies what came before.",
    excerpts: [
      {
        source: "al-Qurṭubī · al-Jāmiʿ li-Aḥkām al-Qurʾān",
        url: null,
        body: "al-Qurṭubī ties the relative clause to 4:69, where the favored are named explicitly: the prophets, the truthful (ṣiddīqūn), the witnesses, and the righteous — 'what beautiful companions are they.' That verse tells who is on the road; this verse asks to be placed with them. The Quran answers its own question across the distance between the surahs.",
      },
      {
        source: "al-Ṭabrisī · Majmaʿ al-Bayān",
        url: null,
        body: "al-Ṭabrisī, with al-Qurṭubī and al-Ṭabarī, reads alladhīna anʿamta ʿalayhim as identified by 4:69. The favored are not a hidden category but an attested one: prophets, the truthful, the witnesses, the righteous. The Fatiha's prayer is for inclusion in a visible and named company, not into a private exception.",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "alladhī / alladhīna are not ordinary nouns derived from a trilateral root. They are particle-like, classed in grammar with other demonstratives. Their function is syntactic: they mark the start of a relative clause that identifies who the 'favored' are.",
    },
  },

  "anʿamta": {
    morphology: "Perfect verb, form IV (afʿala pattern), second person masculine singular, from the root n-ʿ-m. Form IV standardly means 'to cause the action of the root.' From naʿama ('to be in favor, to live in ease'), anʿama is 'to place someone in favor.' Anʿamta: 'You have favored.' The second person is a direct address to God, continuous with the turn of 1:5.",
    excerpts: [
      {
        source: "al-Qushayrī · Laṭāʾif al-Ishārāt",
        url: null,
        body: "al-Qushayrī reads those whom God has favored as those whom He has purified, enabling them to attain unto Him, and whom He has blessed by making them attentive to the observances of the Law. In his reading, the niʿma extends beyond outward favor into inward capacity: the grace to know, to practice, and to remain.",
      },
      {
        source: "al-Qurṭubī · al-Jāmiʿ li-Aḥkām al-Qurʾān",
        url: null,
        body: "al-Qurṭubī treats the perfect tense anʿamta as enclosing a completed act: the favor has already been given to those named in 4:69, and the one who prays the Fatiha is asking to be joined to the company on whom that past grace already rests. The prayer does not originate the favor; it asks for inclusion.",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "niʿma (pl. niʿam / anʿum) — a favor, a blessing; anything given freely. The verb anʿama names the bestower's action; the word shukr (gratitude) names the response. The Quran repeatedly pairs the two.",
    },
  },

  "ʿalayhim": {
    morphology: "The preposition ʿalā ('upon, over') with the attached pronoun -him ('them'). The preposition marks the direction in which the divine favor of anʿamta descends. The same preposition in the next phrase (ʿalayhim in al-maghḍūb ʿalayhim) carries the opposite valence: the direction in which anger is placed. Same word, two different moral directions.",
    excerpts: [],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "ʿalā — the preposition of 'upon' or 'over.' Its range covers physical position, moral responsibility, and the direction of a gift or a burden. Context decides which.",
    },
  },

  "al-maghḍūb": {
    morphology: "Passive participle of ghaḍiba ('to be angry'), on the pattern mafʿūl. Maghḍūb: 'the one against whom anger is directed.' Paired here with ʿalayhim, the construction is passive-with-agent: anger has been placed upon them. The agent is not named — grammatically a passive construction, theologically the anger of God.",
    excerpts: [
      {
        source: "al-Qurṭubī · al-Jāmiʿ li-Aḥkām al-Qurʾān",
        url: null,
        body: "al-Qurṭubī records a range of readings of those who incur wrath: some authorities read them as the idolaters, others as those whose disbelief warrants divine wrath distinct from lesser sin. The passive construction — 'those upon whom anger has been placed' — names the condition rather than an actor, and this grammatical restraint shapes the category being described.",
      },
      {
        source: "Ibn Kathīr · Tafsīr al-Qurʾān al-ʿAẓīm",
        url: null,
        body: "Ibn Kathīr, with a number of commentators, records the reading — based on a saying attributed to the Prophet though not considered of the highest grade of authenticity — that identifies al-maghḍūb ʿalayhim with one historical community and aḍ-ḍāllīn with another, and cites Quranic verses on divine wrath coming upon those who turn from belief (16:106; 42:16; 48:6). He presents this as one transmitted application of the verse, not an exclusive reading; the category in the Arabic is defined by condition, not by label.",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "ghaḍab — anger; the heat of displeasure. When predicated of God, classical theologians take care not to anthropomorphize: the word names the effect, the consequence that falls on the one angered-at, more than a divine emotion in the human sense.",
    },
  },

  "wa-lā-ḍ-ḍāllīn": {
    morphology: "The coordinating conjunction wa- + negative particle lā + definite al- + ḍāllīn, the sound masculine plural of ḍāll ('one who strays'), on the active participle pattern of ḍalla. The full phrase: 'and not those who have gone astray.' The verse sets up a contrast between two kinds of failure: one active (incurring anger by what you do) and one passive (losing the way).",
    excerpts: [
      {
        source: "Ibn ʿAjība · al-Baḥr al-Madīd",
        url: null,
        body: "Ibn ʿAjība reads the state of being astray as arising from either intention or mistake. The Quran itself records that the prophet Moses called himself one of those astray (26:20) before the beginning of his mission, and addresses the Prophet Muhammad with 'Did He not find thee astray and guide?' (93:7). Straying in Quranic usage therefore names a condition that guidance meets, not only a moral fall that judgment follows.",
      },
      {
        source: "al-Qushayrī · Laṭāʾif al-Ishārāt",
        url: null,
        body: "al-Qushayrī reads the two groups named in the verse — those who incur wrath and those who are astray — together as the full range of those spiritually debased, lost, and preoccupied with the fortunes of this world rather than with God. The closing prayer of the Fatiha, in his reading, is a request to be kept from each mode of that descent: from the active offense and from the drifting away alike.",
      },
    ],
    lexicon: {
      source: "Lane · Arabic-English Lexicon",
      body: "ḍalla — to lose the way, to be lost. The active participle ḍāll describes the one currently off the road, whether deliberately or otherwise. The verse pairs ḍalāl (being lost) with ghaḍab (incurring anger) to close the surah on a prayer to avoid both.",
    },
  },
};
