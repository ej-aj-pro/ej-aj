// Topic illustrations for article cards and lists: a line icon on a tinted band.
// Icons are drawn on a 24x24 grid as stroke paths (stroke = currentColor), so they follow the
// theme. Each topic has a tone, one of the colours in src/styles/grafike.css (--t-<ton>).
//
// An article gets its topic from `motiv` in the front matter or, without it, from the first
// rule below that matches its file name; tedenski pregled and clanek fall back to "novice".

export const MOTIVI = {
  zakon: { ton: 'modra', d: ['M12 3v18', 'M7 21h10', 'M4 7h16', 'M6 7l-3 6a3 3 0 0 0 6 0z', 'M18 7l-3 6a3 3 0 0 0 6 0z'] },
  varnost: { ton: 'zelena', d: ['M12 3l7 3v5c0 4.4-3 8.3-7 9.5C8 19.3 5 15.4 5 11V6z', 'M9 12l2 2 4-4'] },
  ljudje: { ton: 'roza', d: ['M6 8a3 3 0 1 0 6 0a3 3 0 1 0-6 0', 'M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6', 'M15 5.2a3 3 0 0 1 0 5.6', 'M17.5 14.4c2 .8 3.5 2.9 3.5 5.6'] },
  sola: { ton: 'rumena', d: ['M2 9l10-5 10 5-10 5z', 'M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5', 'M22 9v6'] },
  stavba: { ton: 'oranzna', d: ['M3 21h18', 'M4 10h16', 'M12 3l8 5H4z', 'M6 10v8', 'M10 10v8', 'M14 10v8', 'M18 10v8'] },
  dokument: { ton: 'modra', d: ['M6 3h8l4 4v14H6z', 'M14 3v4h4', 'M9 12h6', 'M9 16h6'] },
  kalkulator: { ton: 'zelena', d: ['M6 3h12v18H6z', 'M9 7h6', 'M9 12h.01', 'M12 12h.01', 'M15 12h.01', 'M9 16h.01', 'M12 16h.01', 'M15 16h.01'] },
  klepet: { ton: 'oranzna', d: ['M3 5h12v9H8l-4 3v-3H3z', 'M15 9h6v8h-1v3l-3-3h-6v-3'] },
  jezik: { ton: 'roza', d: ['M3 6h9', 'M7.5 4v2', 'M5 6c0 4 2.2 7 5.5 8', 'M10 6c0 3.5-2.5 6.5-6.5 8', 'M13 20l4-10 4 10', 'M14.5 17h5'] },
  slika: { ton: 'rumena', d: ['M3 5h18v14H3z', 'M3 16l5-5 4 4 2-2 7 7', 'M15 8.5a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0-3 0'] },
  predvajanje: { ton: 'oranzna', d: ['M3 5h18v14H3z', 'M10 9l5 3-5 3z'] },
  koda: { ton: 'zelena', d: ['M8 7l-5 5 5 5', 'M16 7l5 5-5 5', 'M14 4l-4 16'] },
  novice: { ton: 'modra', d: ['M3 5h14v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z', 'M17 9h4v10a2 2 0 0 1-2 2', 'M6 9h8', 'M6 13h8', 'M6 17h5'] },
  cip: { ton: 'roza', d: ['M7 7h10v10H7z', 'M10 10h4v4h-4z', 'M9 3v4', 'M15 3v4', 'M9 17v4', 'M15 17v4', 'M3 9h4', 'M3 15h4', 'M17 9h4', 'M17 15h4'] },
  kljukica: { ton: 'zelena', d: ['M12 3a9 9 0 1 0 0 18a9 9 0 1 0 0-18', 'M8 12l3 3 5-6'] },
  zvezek: { ton: 'rumena', d: ['M5 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H5z', 'M9 3v18', 'M12 8h3', 'M12 12h3'] },
  denar: { ton: 'zelena', d: ['M3 6h18v12H3z', 'M12 9.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 1 0 0-5', 'M6.5 12h.01', 'M17.5 12h.01'] },
};

// First match wins. Patterns are tested against the article id (file name without .md).
const RULES = [
  [/ai-act|predloga-pravil|pravnike/, 'zakon'],
  [/varna-raba|zaznavalniki/, 'varnost'],
  [/pismenost|kadrovski/, 'ljudje'],
  [/v-soli|tecaji/, 'sola'],
  [/javni-upravi/, 'stavba'],
  [/racunovodstvu/, 'kalkulator'],
  [/excelu|kontekst-podjetja/, 'dokument'],
  [/prevajalniki|zna-slovensko/, 'jezik'],
  [/ustvarjanje-slik/, 'slika'],
  [/video/, 'predvajanje'],
  [/notebook/, 'zvezek'],
  [/odpoved-narocnine/, 'denar'],
  [/preveriti-ali-ai-deluje/, 'kljukica'],
  [/kateri-model|kaj-je-umetna|sonnet/, 'cip'],
  [/claude-code|hooki|skills|subagenti|rutine|githubu|lasten-ai-agent/, 'koda'],
  [/chatgpt|claude|gemini|copilot|orodj|agenta/, 'klepet'],
];

export function motivZa(post) {
  if (post.data.motiv && MOTIVI[post.data.motiv]) return post.data.motiv;
  for (const [re, motiv] of RULES) if (re.test(post.id)) return motiv;
  return post.data.type === 'vodnik' ? 'dokument' : 'novice';
}
