# TODOS

Captured during /plan-eng-review on 2026-04-24 against the "Complete Al-Fātiḥa end-to-end as prototype validation" design doc.

---

## 1. Amiri font FOUT audit

**What:** Verify Arabic text doesn't flash in a fallback system font on first paint.

**Why:** The editorial aesthetic of Tadabbur depends on the Arabic rendering in Amiri from the very first moment the page loads. A FOUT (flash of unstyled text) where Arabic briefly renders in Times-Arabic or a system fallback breaks the "quiet companion" feel.

**Pros:**
- Catches a visual regression real users will notice on slow connections
- One-time audit; fix is stable once done

**Cons:**
- Fix might require `font-display: swap` → `optional` trade-offs, or self-hosting Amiri instead of CDN
- Low priority if current deployment already handles this cleanly

**Context:** Check the current font loading strategy in `index.html` / Tailwind config / `index.css`. Open tadabbur-sigma.vercel.app in Chrome DevTools with network throttled to "Slow 3G" and observe first paint behavior.

**Depends on / blocked by:** Nothing.

---

## 2. Accessibility sweep of Hero word buttons

**What:** Keyboard navigation, focus ring visibility, screen-reader labels for Arabic words, verify ESC-to-close on ScholarlyPanel.

**Why:** Solo builder inevitably misses a11y details without a checklist. Tadabbur's readership includes people who read the Quran with screen readers; shipping an inaccessible word-tap experience would silently exclude them.

**Pros:**
- Low effort; most of the scaffolding is already there (buttons are real `<button>` elements, ESC handler exists)
- Accessibility improvements are permanent

**Cons:**
- Arabic screen-reader labels are non-trivial (what should the label be — the Arabic word, transliteration, gloss?)
- Focus ring design needs to respect the editorial aesthetic

**Context:** Open the site, tab through the verse in Hero. Check if each word button receives focus. Check focus ring visibility against the vellum background. Check if word buttons have `aria-label` or descriptive text for screen readers. Test with VoiceOver (macOS) or NVDA.

**Depends on / blocked by:** Nothing.

---

## 3. Clickable cross-references in WordStudy (future)

**What:** Make `rootOccurrences[i].ref` strings (e.g., "27:30", "96:1") clickable so tapping a reference eventually navigates to that verse.

**Why:** The whole point of cross-verse root linking is to let the reader follow the root across the Quran. Right now those refs are descriptive-only text. Once multi-surah corpus exists, making them navigable unlocks the Reader path's full depth.

**Pros:**
- Completes the word-study → cross-verse navigation product promise
- Small UX change once data exists

**Cons:**
- Meaningless until at least a few non-Fatiha surahs have data
- Introduces navigation state complexity (how do we navigate to 27:30 when we're in surah 1? Reader mode vs. Study mode?)

**Context:** Currently `rootOccurrences` entries look like `{ ref: "27:30", text: "...", note: "..." }`. The `ref` is rendered as plain text in `WordStudy.jsx:29`. Add click handler once bulk corpus exists; navigation path depends on the app's multi-surah routing decision.

**Depends on / blocked by:** Bulk-ingest design doc; multi-surah routing/navigation design.

---

## 4. Implement real Three Paths modes (Reader / Student / Seeker)

**What:** Make the Three Paths cards do something distinct. Today all three lead to the same target (`#verse`) — an honest unified entry point but no actual path differentiation.

**Why:** The landing page promises "three paths through the book" with three named modes. Right now the promise is decorative. Each mode should change the UX in a real way: pacing indicators (Reader), default-open scholarly panel (Student), translation-first/jargon-soft layout (Seeker), perhaps Ask question prioritization, etc.

**Pros:**
- Delivers on a positioning promise that's already on the landing page
- Creates real product differentiation; each mode is its own experience
- Mode preference is the right thing to persist in localStorage — the most natural state to remember per-visitor

**Cons:**
- Real product design work — needs `/office-hours` to spec what each mode actually changes
- Multiplies the surface area: each component now needs to consider mode
- Risk of building modes nobody uses

**Context:** Today `Paths.jsx` renders three `<a href="#verse">` cards. To go further, introduce a `useMode()` hook (Context + localStorage), have each card setMode(...) before scrolling, and have downstream components branch on mode. Capture the spec in a design doc via `/office-hours`.

**Depends on / blocked by:** Product spec — what does each mode actually do.

Captured by /qa on 2026-04-24 — the cards' click affordance was confusing because nothing happened. ISSUE-003 fixed the dead-click symptom; this TODO captures the underlying feature gap.

---

## 5. Differentiate "Study" nav target from "The Quran"

**What:** Today both `Study` and `The Quran` nav items point to `#verse`. They should land somewhere distinct.

**Why:** Two nav items pointing to the same place is a small UX smell — users wonder if they missed something, or if one is a redirect, or if the labels are placeholders.

**Pros:**
- Tightens the information architecture
- Once Three Paths modes exist (#4), `Study` is the natural deep link to Student mode

**Cons:**
- Until #4 ships, there's no distinct `Study` target to point at — could rebind to a sub-section of the page (e.g., the WordStudy panel anchor) but that's filler

**Context:** When TODO #4 lands, change `Study` href to a query param or a `#student` anchor that triggers Student mode. Until then, consider hiding `Study` from the nav, or rename `The Quran` to make the duplication less obvious.

**Depends on / blocked by:** TODO #4.

Captured by /qa on 2026-04-24.
