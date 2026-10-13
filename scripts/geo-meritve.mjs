// Measures how often AI assistants with web search cite ej-aj.si (GEO, see docs/seo.md).
// Asks every question in scripts/geo-vprasanja.yaml with web search on and an approximate
// location in Slovenia, then records two things per answer: the pages the answer cites, and the
// pages the search found (found but not cited means we rank, but another page answered better).
// Every run costs money (roughly 5 to 15 USD with all four providers, most of it Claude; the
// report lists the tokens used), so run it once a month.
//
//   node scripts/geo-meritve.mjs [--dry-run] [--samo=claude,chatgpt] [--n=5]
//
// A provider runs only when its key is set: ANTHROPIC_API_KEY (Claude), OPENAI_API_KEY (ChatGPT),
// GEMINI_API_KEY (Gemini), PERPLEXITY_API_KEY (Perplexity). Override a model with
// GEO_MODEL_CLAUDE, GEO_MODEL_CHATGPT, GEO_MODEL_GEMINI or GEO_MODEL_PERPLEXITY.
// Output: docs/geo-meritve/<date>.json (every answer with its sources) and <date>.md (summary,
// compared with the previous run).

import Anthropic from '@anthropic-ai/sdk';
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import yaml from 'js-yaml';

const DOMAIN = 'ej-aj.si';
const OUT_DIR = 'docs/geo-meritve';
const LOCATION = { country: 'SI', city: 'Ljubljana', timezone: 'Europe/Ljubljana' };

const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run');
const only = args.find((a) => a.startsWith('--samo='))?.slice(7).split(',');
const limit = Number(args.find((a) => a.startsWith('--n='))?.slice(4)) || Infinity;

const questions = yaml.load(readFileSync('scripts/geo-vprasanja.yaml', 'utf8')).slice(0, limit);

// --- Providers ---------------------------------------------------------------------------------
// Each ask() returns { text, cited: [{url, title}], found: [{url, title}], tokensIn, tokensOut }.

const PROVIDERS = [
  {
    id: 'claude',
    name: 'Claude',
    key: 'ANTHROPIC_API_KEY',
    model: process.env.GEO_MODEL_CLAUDE ?? 'claude-opus-5-5',
    async ask(question) {
      // Fixed base URL: a Claude Code session sets ANTHROPIC_BASE_URL to its own proxy.
      const client = (this.client ??= new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY, baseURL: 'https://api.anthropic.com' }));
      const messages = [{ role: 'user', content: question }];
      const content = [];
      let tokensIn = 0;
      let tokensOut = 0;
      // A long search turn can pause (stop_reason "pause_turn"); sending it back continues it.
      for (let turn = 0; turn < 4; turn++) {
        const res = await client.beta.messages.create({
          model: this.model,
          max_tokens: 16000,
          output_config: { effort: 'medium' },
          // On a safety decline the API re-runs the request on a fallback model.
          betas: ['server-side-fallback-2026-07-01'],
          fallbacks: 'default',
          tools: [{ type: 'web_search_20260209', name: 'web_search', max_uses: 5, user_location: { type: 'approximate', ...LOCATION } }],
          messages,
        });
        content.push(...res.content);
        tokensIn += res.usage.input_tokens ?? 0;
        tokensOut += res.usage.output_tokens ?? 0;
        if (res.stop_reason !== 'pause_turn') break;
        messages.push({ role: 'assistant', content: res.content });
      }
      const out = { text: '', cited: [], found: [], tokensIn, tokensOut };
      for (const block of content) {
        // A failed search returns an error object instead of a list of results.
        if (block.type === 'web_search_tool_result' && Array.isArray(block.content)) {
          for (const r of block.content) out.found.push({ url: r.url, title: r.title });
        }
        if (block.type === 'text') {
          out.text += block.text;
          for (const c of block.citations ?? []) if (c.url) out.cited.push({ url: c.url, title: c.title });
        }
      }
      return out;
    },
  },
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    key: 'OPENAI_API_KEY',
    model: process.env.GEO_MODEL_CHATGPT ?? 'gpt-6-sol',
    async ask(question) {
      const res = await postJson('https://api.openai.com/v1/responses', { Authorization: `Bearer ${process.env.OPENAI_API_KEY}` }, {
        model: this.model,
        input: question,
        tools: [{ type: 'web_search', user_location: { type: 'approximate', ...LOCATION } }],
        include: ['web_search_call.action.sources'],
      });
      const out = { text: '', cited: [], found: [], tokensIn: res.usage?.input_tokens ?? 0, tokensOut: res.usage?.output_tokens ?? 0 };
      for (const item of res.output ?? []) {
        if (item.type === 'web_search_call') {
          for (const s of item.action?.sources ?? []) if (s.url) out.found.push({ url: s.url, title: s.title });
        }
        if (item.type === 'message') {
          for (const part of item.content ?? []) {
            if (part.type !== 'output_text') continue;
            out.text += part.text;
            for (const a of part.annotations ?? []) if (a.type === 'url_citation') out.cited.push({ url: a.url, title: a.title });
          }
        }
      }
      return out;
    },
  },
  {
    id: 'gemini',
    name: 'Gemini',
    key: 'GEMINI_API_KEY',
    model: process.env.GEO_MODEL_GEMINI ?? 'gemini-3.8-flash',
    async ask(question) {
      const res = await postJson(
        `https://generativelanguage.googleapis.com/v1beta/models/${this.model}:generateContent`,
        { 'x-goog-api-key': process.env.GEMINI_API_KEY },
        { contents: [{ role: 'user', parts: [{ text: question }] }], tools: [{ google_search: {} }] },
      );
      const cand = res.candidates?.[0];
      const meta = cand?.groundingMetadata ?? {};
      // Grounding links are redirects through vertexaisearch.cloud.google.com; resolve them.
      const chunks = await Promise.all(
        (meta.groundingChunks ?? []).map(async (c) => ({ url: await resolveRedirect(c.web?.uri), title: c.web?.title })),
      );
      const citedIdx = new Set((meta.groundingSupports ?? []).flatMap((s) => s.groundingChunkIndices ?? []));
      return {
        text: (cand?.content?.parts ?? []).map((p) => p.text ?? '').join(''),
        cited: chunks.filter((_, i) => citedIdx.has(i)),
        found: chunks,
        tokensIn: res.usageMetadata?.promptTokenCount ?? 0,
        tokensOut: res.usageMetadata?.candidatesTokenCount ?? 0,
      };
    },
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    key: 'PERPLEXITY_API_KEY',
    model: process.env.GEO_MODEL_PERPLEXITY ?? 'sonar',
    async ask(question) {
      const res = await postJson('https://api.perplexity.ai/chat/completions', { Authorization: `Bearer ${process.env.PERPLEXITY_API_KEY}` }, {
        model: this.model,
        messages: [{ role: 'user', content: question }],
        web_search_options: { user_location: { country: LOCATION.country } },
      });
      const found = (res.search_results ?? []).map((r) => ({ url: r.url, title: r.title }));
      return {
        text: res.choices?.[0]?.message?.content ?? '',
        cited: (res.citations ?? []).map((url) => ({ url, title: found.find((f) => f.url === url)?.title })),
        found,
        tokensIn: res.usage?.prompt_tokens ?? 0,
        tokensOut: res.usage?.completion_tokens ?? 0,
      };
    },
  },
];

// --- Helpers -----------------------------------------------------------------------------------

async function postJson(url, headers, body) {
  for (let attempt = 1; ; attempt++) {
    const res = await fetch(url, { method: 'POST', headers: { 'content-type': 'application/json', ...headers }, body: JSON.stringify(body) });
    if (res.ok) return res.json();
    const retry = res.status === 429 || res.status >= 500;
    if (!retry || attempt === 3) throw new Error(`${res.status} ${(await res.text()).slice(0, 300)}`);
    await new Promise((r) => setTimeout(r, 5000 * attempt));
  }
}

async function resolveRedirect(url) {
  if (!url || !url.includes('vertexaisearch.cloud.google.com')) return url;
  try {
    const res = await fetch(url, { method: 'HEAD', redirect: 'manual' });
    return res.headers.get('location') ?? url;
  } catch {
    return url;
  }
}

function domainOf(url) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '?';
  }
}

const isOurs = (url) => domainOf(url) === DOMAIN;
const pathOf = (url) => new URL(url).pathname;
const unique = (list) => [...new Map(list.map((s) => [s.url, s])).values()];

// --- Run ---------------------------------------------------------------------------------------

const active = PROVIDERS.filter((p) => (!only || only.includes(p.id)) && process.env[p.key]);
const skipped = PROVIDERS.filter((p) => (!only || only.includes(p.id)) && !process.env[p.key]);

console.log(`Vprašanj: ${questions.length}`);
for (const p of active) console.log(`  ${p.name}: ${p.model}`);
for (const p of skipped) console.log(`  ${p.name}: preskočen, ni ${p.key}`);

if (dryRun) {
  // After a build, also check that every target page exists.
  const built = existsSync('dist');
  for (const q of questions) {
    const missing = built && !existsSync(`dist${q.cilj}index.html`) ? '  (STRAN NE OBSTAJA)' : '';
    console.log(`- [${q.id}] ${q.vprasanje} -> ${q.cilj}${missing}`);
  }
  process.exit(0);
}
if (!active.length) {
  console.error('Noben ponudnik nima ključa. Nastavi vsaj enega od: ' + PROVIDERS.map((p) => p.key).join(', '));
  process.exit(1);
}

const date = new Date().toISOString().slice(0, 10);
const results = [];
// Providers in parallel, questions one after another per provider (rate limits).
await Promise.all(
  active.map(async (p) => {
    for (const q of questions) {
      const row = { ponudnik: p.id, model: p.model, id: q.id, vprasanje: q.vprasanje, cilj: q.cilj };
      try {
        const r = await p.ask(q.vprasanje);
        Object.assign(row, { citirano: unique(r.cited), najdeno: unique(r.found), odgovor: r.text, tokeniVhod: r.tokensIn, tokeniIzhod: r.tokensOut });
      } catch (err) {
        row.napaka = String(err.message ?? err);
      }
      const mark = row.napaka ? 'napaka' : row.citirano.some((s) => isOurs(s.url)) ? 'CITIRAN' : row.najdeno.some((s) => isOurs(s.url)) ? 'najden' : '-';
      console.log(`${p.name.padEnd(10)} ${q.id.padEnd(24)} ${mark}${row.napaka ? `: ${row.napaka}` : ''}`);
      results.push(row);
    }
  }),
);

mkdirSync(OUT_DIR, { recursive: true });
const previousFile = readdirSync(OUT_DIR)
  .filter((f) => /^\d{4}-\d{2}-\d{2}\.json$/.test(f) && f !== `${date}.json`)
  .sort()
  .pop();
const previous = previousFile ? JSON.parse(readFileSync(`${OUT_DIR}/${previousFile}`, 'utf8')) : null;

writeFileSync(`${OUT_DIR}/${date}.json`, JSON.stringify({ datum: date, vprasanj: questions.length, rezultati: results }, null, 2) + '\n');
writeFileSync(`${OUT_DIR}/${date}.md`, report());
console.log(`\nZapisano: ${OUT_DIR}/${date}.json in ${OUT_DIR}/${date}.md`);

// --- Report (Slovenian, read by Anže) ---------------------------------------------------------

function report() {
  const ok = results.filter((r) => !r.napaka);
  const cited = (r) => r.citirano.some((s) => isOurs(s.url));
  const found = (r) => r.najdeno.some((s) => isOurs(s.url));
  const lines = [`# Meritev citatov v AI odgovorih, ${date}`, ''];
  lines.push(
    `Vprašanja iz \`scripts/geo-vprasanja.yaml\` (${questions.length}), spletno iskanje vklopljeno, lokacija Slovenija. ` +
      '"Citiran" pomeni, da odgovor navaja stran z ej-aj.si kot vir, "najden" pa, da je iskanje stran našlo, odgovor pa je ni navedel.',
    '',
  );
  if (previousFile) lines.push(`Primerjava s prejšnjo meritvijo: ${previousFile.replace('.json', '')}.`, '');

  lines.push('## ej-aj.si po ponudnikih', '', '| Ponudnik | Model | Citiran | Najden | Prejšnjič citiran | Napake | Tokeni (vhod/izhod) |', '|---|---|---|---|---|---|---|');
  for (const p of active) {
    const mine = results.filter((r) => r.ponudnik === p.id);
    const good = mine.filter((r) => !r.napaka);
    const prev = previous?.rezultati.filter((r) => r.ponudnik === p.id && !r.napaka);
    const prevCited = prev?.length ? `${prev.filter(cited).length} od ${prev.length}` : '';
    const tin = good.reduce((s, r) => s + (r.tokeniVhod ?? 0), 0);
    const tout = good.reduce((s, r) => s + (r.tokeniIzhod ?? 0), 0);
    lines.push(
      `| ${p.name} | ${p.model} | ${good.filter(cited).length} od ${good.length} | ${good.filter(found).length} od ${good.length} | ${prevCited} | ${mine.length - good.length} | ${tin.toLocaleString('sl-SI')} / ${tout.toLocaleString('sl-SI')} |`,
    );
  }

  lines.push('', '## Po vprašanjih', '', 'C = citiran, N = najden, ne citiran, prazno = ni ga, ! = napaka. V oklepaju je citirana stran, če ni ciljna.', '');
  lines.push(`| Vprašanje | ${active.map((p) => p.name).join(' | ')} |`, `|---|${active.map(() => '---').join('|')}|`);
  for (const q of questions) {
    const cells = active.map((p) => {
      const r = results.find((x) => x.ponudnik === p.id && x.id === q.id);
      if (!r || r.napaka) return '!';
      if (cited(r)) {
        const paths = [...new Set(r.citirano.filter((s) => isOurs(s.url)).map((s) => pathOf(s.url)))];
        return paths.includes(q.cilj) ? 'C' : `C (${paths.join(', ')})`;
      }
      return found(r) ? 'N' : '';
    });
    lines.push(`| ${q.vprasanje} | ${cells.join(' | ')} |`);
  }

  // Who gets cited instead of us: the competition for these questions.
  const counts = new Map();
  for (const r of ok) for (const d of new Set(r.citirano.map((s) => domainOf(s.url)))) counts.set(d, (counts.get(d) ?? 0) + 1);
  const top = [...counts].sort((a, b) => b[1] - a[1]).slice(0, 20);
  lines.push('', '## Najpogosteje citirane domene', '', 'Število odgovorov (vprašanje in ponudnik), ki domeno navajajo vsaj enkrat.', '', '| Domena | Odgovorov |', '|---|---|');
  for (const [d, n] of top) lines.push(`| ${d === DOMAIN ? `**${d}**` : d} | ${n} |`);

  const errors = results.filter((r) => r.napaka);
  if (errors.length) {
    lines.push('', '## Napake', '');
    for (const r of errors) lines.push(`- ${r.ponudnik}, ${r.id}: ${r.napaka}`);
  }
  return lines.join('\n') + '\n';
}
