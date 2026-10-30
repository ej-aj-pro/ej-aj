// Markdown copy of each digest and news article at /novice/<id>.md (see postMarkdown in src/lib.ts).
import type { APIRoute, GetStaticPaths } from 'astro';
import { getPosts, postMarkdown } from '../../lib';

export const getStaticPaths = (async () => {
  const posts = (await getPosts()).filter((p) => p.data.type !== 'vodnik');
  return posts.map((post) => ({ params: { slug: post.id }, props: { post } }));
}) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props, site }) =>
  new Response(postMarkdown(props.post, site!), { headers: { 'content-type': 'text/markdown; charset=utf-8' } });
