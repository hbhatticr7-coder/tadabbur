import { entries } from "../data/askIndex.js";

const STOPWORDS = new Set([
  "a", "an", "the", "is", "are", "was", "were", "be", "been",
  "of", "to", "in", "on", "at", "for", "and", "or", "but",
  "do", "does", "did", "what", "why", "how", "when", "where",
  "i", "me", "my", "we", "us", "our", "you", "your",
  "this", "that", "it", "its", "them", "they", "he", "she",
  "about", "tell", "explain", "mean", "means",
]);

function tokenize(text) {
  return text
    .toLowerCase()
    .normalize("NFD")                  // strip Arabic/Latin diacritics
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((t) => t && !STOPWORDS.has(t));
}

function scoreEntry(queryTokens, tags) {
  // Exact single-word tags: the entry's core subject is that term.
  const exactTags = new Set(tags.flatMap((t) => {
    const toks = tokenize(t);
    return toks.length === 1 ? toks : [];
  }));
  // Sub-tokens from multi-word phrase tags: the term appears but isn't primary.
  const phraseTokens = new Set(tags.flatMap((t) => {
    const toks = tokenize(t);
    return toks.length > 1 ? toks : [];
  }));

  let score = 0;
  for (const tok of queryTokens) {
    if (exactTags.has(tok)) score += 2;
    else if (phraseTokens.has(tok)) score += 1;
  }
  return score;
}

export function findAnswer(query) {
  const tokens = tokenize(query);
  if (tokens.length === 0) return null;

  let best = null;
  let bestScore = 0;
  for (const entry of entries) {
    const s = scoreEntry(tokens, entry.tags);
    if (s > bestScore) {
      best = entry;
      bestScore = s;
    }
  }
  return bestScore > 0 ? best : null;
}
