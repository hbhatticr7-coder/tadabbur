# Tadabbur

**تدبر** — deep reflection. A quiet companion for the Quran.

> Read the Quran *slowly*. Understand it **deeply**.

Tadabbur is an early-stage prototype of a Quran study companion. It aims to
do one thing that chat apps don't: surface classical scholarship — with every
claim cited, and honest silence where sources run out.

## What's in the prototype today

- **Per-word study of Al-Fātiḥa 1:1–2.** Tap any Arabic word in the verse
  to see its root, gloss, and other verses where the root appears in the
  Quran.
- **Scholarly analysis panel.** "Open full scholarly analysis" on any word
  surfaces morphology, attributed tafsir excerpts (Ibn Kathīr, al-Ṭabarī,
  al-Rāzī, al-Qurṭubī, Ibn al-Qayyim), and a Lane's Lexicon note.
- **Cited Q&A.** The Ask section answers questions using a seed library of
  Q&As keyed to the tafsir data. Queries outside the library get an explicit
  "we don't have an annotated answer for this" response — never a
  fabrication.

## Honesty principles

Tadabbur's pitch is that every claim is cited. In this prototype that means:

- **Excerpts are editorial paraphrases**, not verbatim translations of the
  cited works. Every excerpt says so plainly and marks where the original
  text is not yet linked.
- **Scope is disclosed**. The current library covers Al-Fātiḥa 1:1–2 and
  the questions that open naturally around its eight words. This is stated
  in the UI, not buried.
- **Empty states are explicit**. A question we can't answer produces a clear
  "no annotated answer" card, not a hallucinated one.

## Running locally

Requirements: Node 18+, npm.

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:5173`.

## Stack

- Vite 5 + React 18
- Tailwind CSS 3
- No backend yet

## Project layout

```
src/
├── App.jsx                    thin shell
├── index.css                  Tailwind + global styles (fonts, palette)
├── components/                Nav, Hero, WordStudy, ScholarlyPanel,
│                              Ask, Paths, Closing, Footer
├── data/
│   ├── fatiha.js              verse-keyed word/root/tafsir data
│   └── askIndex.js            seed Q&As for the Ask section
└── lib/
    └── askSearch.js           dumb keyword search over askIndex
```

## License

MIT — see [LICENSE](LICENSE).
