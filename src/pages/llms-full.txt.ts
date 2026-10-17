// llms-full.txt: every article in full as Markdown in one file, for AI assistants and agents that
// want the whole site as context instead of following the links in /llms.txt. Glossary at the end.
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';
import { getPosts, postMarkdown } from '../lib';
import { SITE } from '../site';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getPosts();
  // Guides first (evergreen answers), then news, newest first within each group.
  const ordered = [...posts.filter((p) => p.data.type === 'vodnik'), ...posts.filter((p) => p.data.type !== 'vodnik')];
  const terms = (await getCollection('slovar')).sort((a, b) => a.data.izraz.localeCompare(b.data.izraz, 'sl'));

  const parts = [
    [
      `# ${SITE.name} (${SITE.domain}): vsa vsebina`,
      '',
      `> ${SITE.tagline}. ${SITE.description} Kratek pregled strani je v ${new URL('/llms.txt', site)}.`,
      '',
      `Vsebuje ${posts.length} člankov in AI slovar. Vsak članek ima v glavi datum objave in povezavo do izvirnika na spletu.`,
      '',
    ].join('\n'),
    ...ordered.map((p) => postMarkdown(p, site!)),
    [
      '# AI slovar',
      '',
      ...terms.map((t) => `- **${t.data.izraz}**${t.data.angl ? ` (angl. ${t.data.angl})` : ''}: ${t.data.razlaga} ${new URL(`/slovar/${t.id}/`, site)}`),
      '',
    ].join('\n'),
  ];

  return new Response(parts.join('\n---\n\n'), {
    headers: { 'content-type': 'text/plain; charset=utf-8' },
  });
};
