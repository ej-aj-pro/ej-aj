// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';
import slovarPovezave from './src/markdown/slovar-povezave.mjs';
import grafike from './src/markdown/grafike.mjs';
import { readdirSync, readFileSync } from 'node:fs';
import yaml from 'js-yaml';

// <lastmod> for article URLs in the sitemap: `updated` from the front matter, else `date`.
// Search engines use it to decide what to recrawl, so only articles get one (a date on pages
// like /modeli/ would have to change whenever their data changes).
const lastmod = new Map();
// Pages with noindex stay out of the sitemap. News articles and digests carry noindex (src/layouts/Post.astro): they retell other companies'
// announcements and brought almost no search traffic, so they stay out of the sitemap too.
const noindex = new Set();
for (const file of readdirSync('src/content/novice')) {
  if (!file.endsWith('.md')) continue;
  const fm = yaml.load(readFileSync(`src/content/novice/${file}`, 'utf8').split(/^---$/m)[1]);
  if (fm.draft) continue;
  const id = file.replace(/\.md$/, '');
  const path = fm.type === 'vodnik' ? `/vodniki/${id.replace(/^\d{4}-\d{2}-\d{2}-/, '')}/` : `/novice/${id}/`;
  lastmod.set(`https://ej-aj.si${path}`, new Date(fm.updated ?? fm.date).toISOString());
  if (fm.type !== 'vodnik' || fm.noindex) noindex.add(`https://ej-aj.si${path}`);
}
// Glossary entries without `indeks: true` and the search page carry noindex as well.
for (const entry of yaml.load(readFileSync('src/data/slovar.yaml', 'utf8'))) {
  if (!entry.indeks) noindex.add(`https://ej-aj.si/slovar/${entry.id}/`);
}
noindex.add('https://ej-aj.si/iskanje/');
noindex.add('https://ej-aj.si/videi/');

export default defineConfig({
  site: 'https://ej-aj.si',
  integrations: [
    sitemap({
      filter: (page) => !noindex.has(page),
      serialize(item) {
        const date = lastmod.get(item.url);
        return date ? { ...item, lastmod: date } : item;
      },
    }),
  ],
  markdown: {
    processor: satteri({ mdastPlugins: [grafike, slovarPovezave] }),
  },
});
