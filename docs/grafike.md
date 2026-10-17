# Grafike v člankih in motivi na karticah

Two visual aids, both without image files and without third-party images.

## Grafika v članku

Write a fenced code block with the language `grafika` and a YAML description. The Markdown
plugin `src/markdown/grafike.mjs` turns it into HTML (styles: `src/styles/grafike.css`), so the
visual is text: it reads well on phones, follows dark mode, search engines and screen readers
read it, and every fact in it stays in the article file where the fact-checker sees it.

Three kinds:

````
```grafika
vrsta: casovnica
naslov: Kdaj začnejo veljati pravila AI Act (stanje oktobra 2026)
tocke:
  - datum: 2. februar 2025
    besedilo: Prepovedane prakse in obveznost AI pismenosti.
    stanje: velja        # velja | prihaja (optional, shown as a label)
vir: AI Act, člen 113    # optional
```

```grafika
vrsta: odlocitev
naslov: Ali je vaše orodje visoko tvegano?
koraki:
  - vprasanje: Ali orodje uporabljate pri zaposlovanju?
    ne: Ni visoko tvegana raba.          # empty da/ne = go on to the next step
  - vprasanje: Ali orodje profilira ljudi?
    da: Visoko tvegano.
konec: Visoko tvegano, veljajo obveznosti uvajalca.   # result when every step is passed
```

```grafika
vrsta: kartice
naslov: Kateri podatki smejo v AI orodje
kartice:
  - naslov: Nikoli
    ton: rdeca           # rdeca | rumena | zelena get a symbol (✕ ! ✓); modra | siva
    opis: Kratko besedilo.   # opis and/or tocke
    tocke:
      - Gesla in dostopni ključi.
```
````

Rules:

- One or two visuals per article, where they replace or summarise something the reader would
  otherwise have to piece together: dates (časovnica), a yes/no decision (odlocitev), groups
  or options side by side (kartice, two to four).
- Every fact in a visual comes from the article's sources, and the fact-checker checks the
  visual like the text. A visual may replace a table or a list, but never adds unsourced facts.
- Plain text only; `**bold**` works, links do not. Quote values that contain a colon.
- Meaning never depends on colour alone: traffic-light cards carry a symbol, the timeline a
  label, decision branches the words Da and Ne.
- Invalid YAML or an unknown `vrsta` fails the build with a message naming the problem.

## Motiv na kartici

Cards on the front page and the entries in `/novice/` and `/vodniki/` show a topic icon on a
tinted band (`src/components/Motiv.astro`, icons and colours in `src/data/motivi.mjs`). The
topic comes from rules on the file name; set `motiv:` in the front matter to override it
(allowed values are listed in `src/content.config.ts`). A new topic needs a 24x24 line icon
and a tone in `motivi.mjs`.

## Development note

Worktrees share `node_modules` (a symlink to the main checkout), and Astro keeps its content
cache in `node_modules/.astro`; the dev server also keeps `.astro/data-store.json` in the
worktree. After changing a Markdown plugin, delete both, or the build and the dev server reuse
the old rendering of unchanged articles.
