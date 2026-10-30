import { getCollection, type CollectionEntry } from 'astro:content';
import { termIdsIn } from './markdown/slovar-povezave.mjs';
import { TYPE_LABEL, formatDate } from './site';

export async function getPosts() {
  const posts = await getCollection('novice', ({ data }) => import.meta.env.DEV || !data.draft);
  return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

// Guides are evergreen, so their URL drops the date prefix of the file name.
export function guideSlug(id: string) {
  return id.replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

export function postPath(post: CollectionEntry<'novice'>) {
  return post.data.type === 'vodnik' ? `/vodniki/${guideSlug(post.id)}/` : `/novice/${post.id}/`;
}

// Plain Markdown copy of an article (/vodniki/<slug>.md, /novice/<id>.md, /llms-full.txt) for AI
// assistants and agents that read pages as text: no navigation, absolute links, a header with the
// dates and the canonical URL so a quote can be attributed.
export function postMarkdownPath(post: CollectionEntry<'novice'>) {
  return postPath(post).replace(/\/$/, '.md');
}

export function postMarkdown(post: CollectionEntry<'novice'>, site: URL) {
  const { title, description, type, date, updated, period, podcast } = post.data;
  const meta = [`Vrsta: ${TYPE_LABEL[type]}`, `Objavljeno: ${formatDate(date)}`];
  if (updated) meta.push(`Posodobljeno: ${formatDate(updated)}`);
  if (period) meta.push(`Obdobje: ${period}`);
  if (podcast) meta.push(`Povzetek epizode: "${podcast.naslov}" (${podcast.oddaja}), ${podcast.url}`);
  meta.push(`Izvirnik: ${new URL(postPath(post), site)}`);
  const lines = [`# ${title}`, '', `> ${description}`, '', ...meta.map((m) => `- ${m}`)];
  // Inline links "](/pot/)" and reference definitions "]: /pot/" point to this site.
  const body = (post.body ?? '').trim().replace(/(\]\(|\]: )\/(?!\/)/g, `$1${site.origin}/`);
  return [...lines, '', body, ''].join('\n');
}

// Glossary terms per article, computed once per build.
const termCache = new Map<string, Set<string>>();
function termsOf(post: CollectionEntry<'novice'>, includeSkipped = false) {
  const key = `${post.id}:${includeSkipped}`;
  if (!termCache.has(key)) termCache.set(key, termIdsIn(`${post.data.title}\n${post.body ?? ''}`, { includeSkipped }));
  return termCache.get(key)!;
}

// Articles to suggest under an article: overlap of glossary terms (brand names included, since
// "ChatGPT" and "Copilot" say a lot about the topic), normalised so long articles that mention
// everything don't win every time; same series or type adds a little, newer first on ties.
// Weekly digests are only suggested under other digests.
export function relatedPosts(post: CollectionEntry<'novice'>, all: CollectionEntry<'novice'>[], n = 3) {
  const mine = termsOf(post, true);
  return all
    .filter((p) => p.id !== post.id)
    .filter((p) => post.data.type === 'tedenski-pregled' || p.data.type !== 'tedenski-pregled')
    .map((p) => {
      const theirs = termsOf(p, true);
      let shared = 0;
      for (const t of theirs) if (mine.has(t)) shared += 1;
      let score = shared / Math.sqrt(Math.max(1, mine.size * theirs.size));
      if (post.data.serija && p.data.serija === post.data.serija) score += 0.15;
      if (p.data.type === post.data.type) score += 0.05;
      return { p, score };
    })
    .sort((a, b) => b.score - a.score || b.p.data.date.valueOf() - a.p.data.date.valueOf())
    .slice(0, n)
    .map(({ p }) => p);
}

// Articles that mention a glossary term, guides first, then newest.
export function postsMentioning(termId: string, all: CollectionEntry<'novice'>[]) {
  return all
    .filter((p) => termsOf(p, true).has(termId))
    .sort((a, b) => Number(b.data.type === 'vodnik') - Number(a.data.type === 'vodnik') || b.data.date.valueOf() - a.data.date.valueOf());
}
