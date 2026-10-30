// Markdown copy of each guide at /vodniki/<slug>.md (see postMarkdown in src/lib.ts).
import type { APIRoute, GetStaticPaths } from 'astro';
import { getPosts, guideSlug, postMarkdown } from '../../lib';

export const getStaticPaths = (async () => {
  const guides = (await getPosts()).filter((p) => p.data.type === 'vodnik');
  return guides.map((post) => ({ params: { slug: guideSlug(post.id) }, props: { post } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props, site }) =>
  new Response(postMarkdown(props.post, site!), { headers: { 'content-type': 'text/markdown; charset=utf-8' } });
