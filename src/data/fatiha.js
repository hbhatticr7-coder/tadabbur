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

export const verseOrder = ["1:1", "1:2"];

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
};

export const rootMeanings = {
  "s-m-w": "naming, elevation",
  "ʾ-l-h": "worship, the deity",
  "r-ḥ-m": "mercy, womb-closeness",
  "ḥ-m-d": "praise owed to excellence",
  "r-b-b": "lordship, raising, sustaining",
  "ʿ-l-m": "knowing, the sign by which a thing is known",
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
};
