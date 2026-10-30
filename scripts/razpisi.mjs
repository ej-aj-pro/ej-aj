// Helpers for the weekly refresh of /razpisi/ (skill posodobi-razpise).
//
//   node scripts/razpisi.mjs preveri   data checks for src/data/razpisi.yaml (exit 1 on errors)
//   node scripts/razpisi.mjs eu        EU Funding & Tenders portal: open and forthcoming topics on
//                                       AI, digital, cybersecurity and SMEs with a future deadline
//   node scripts/razpisi.mjs spirit    active calls from SPIRIT Slovenija's JSON API
//
// The EU portal's "status" field also returns topics with deadlines from past years, so the eu
// command keeps only topics whose latest deadline is today or later. These lists are leads: every
// call still has to be checked on its own page before it goes into the YAML.
import { readFileSync } from 'node:fs';
import yaml from 'js-yaml';

const today = new Date().toISOString().slice(0, 10);
const cmd = process.argv[2];

function preveri() {
  const rows = yaml.load(readFileSync('src/data/razpisi.yaml', 'utf8'));
  const errors = [];
  const warnings = [];
  const ids = new Set();
  const day = (d) => (d instanceof Date ? d.toISOString().slice(0, 10) : d ? String(d) : null);
  for (const r of rows) {
    if (ids.has(r.id)) errors.push(`${r.id}: podvojen id`);
    ids.add(r.id);
    const rok = day(r.rok);
    const odpre = day(r.odpre);
    const preverjeno = day(r.preverjeno);
    if (r.stanje === 'odprt' && !rok) errors.push(`${r.id}: odprt razpis brez roka`);
    if (r.stanje === 'stalno' && rok) errors.push(`${r.id}: stalna podpora ima rok, stanje naj bo odprt`);
    if (r.stanje === 'odprt' && rok && rok < today) errors.push(`${r.id}: rok ${rok} je potekel, stanje naj bo zaprt`);
    if (r.stanje === 'napovedan' && odpre && odpre <= today) warnings.push(`${r.id}: napovedan za ${odpre}, preveri, ali je že objavljen`);
    if (r.stanje === 'zaprt' && rok) {
      const limit = new Date();
      limit.setFullYear(limit.getFullYear() - 1);
      if (rok < limit.toISOString().slice(0, 10)) warnings.push(`${r.id}: zaprt več kot 12 mesecev, odstrani`);
    }
    const age = (Date.parse(today) - Date.parse(preverjeno)) / 86_400_000;
    if (age > 8) warnings.push(`${r.id}: preverjeno ${preverjeno} (pred ${Math.round(age)} dnevi)`);
    for (const [k, v] of Object.entries(r)) {
      if (typeof v === 'string' && /[–—]/.test(v)) errors.push(`${r.id}.${k}: pomišljaj`);
    }
  }
  for (const w of warnings) console.log(`OPOZORILO ${w}`);
  for (const e of errors) console.log(`NAPAKA ${e}`);
  console.log(`${rows.length} razpisov, ${errors.length} napak, ${warnings.length} opozoril`);
  if (errors.length) process.exit(1);
}

// Digital Europe, Horizon Europe, Single Market Programme.
const PROGRAMMES = { 43152860: 'Digitalna Evropa', 43108390: 'Obzorje Evropa', 43252405: 'Single Market' };
const QUERIES = ['artificial intelligence', 'generative AI', 'digital transformation SME', 'cybersecurity SME', 'EIC Accelerator', 'start-up'];
// Full-text search also matches topics that only mention AI in passing; keep titles on topic.
const RELEVANT = /\bAI\b|artificial|intelligen|digital|cyber|data|SME|start-?up|EIC|robot|cloud|semiconductor|chip|quantum|software/i;

async function eu() {
  const found = new Map();
  for (const text of QUERIES) {
    const form = new FormData();
    const query = {
      bool: {
        must: [
          { terms: { type: ['1', '2', '8'] } },
          { terms: { status: ['31094501', '31094502'] } },
          { terms: { frameworkProgramme: Object.keys(PROGRAMMES) } },
        ],
      },
    };
    form.append('query', new Blob([JSON.stringify(query)], { type: 'application/json' }));
    form.append('languages', new Blob([JSON.stringify(['en'])], { type: 'application/json' }));
    const url = `https://api.tech.ec.europa.eu/search-api/prod/rest/search?apiKey=SEDIA&text=${encodeURIComponent(text)}&pageSize=100&pageNumber=1`;
    const res = await fetch(url, { method: 'POST', body: form });
    if (!res.ok) {
      console.log(`NAPAKA EU portal (${text}): HTTP ${res.status}`);
      continue;
    }
    const data = await res.json();
    for (const r of data.results ?? []) {
      const m = r.metadata ?? {};
      const deadlines = (m.deadlineDate ?? []).map((d) => d.slice(0, 10)).filter((d) => d >= today);
      if (!deadlines.length) continue;
      const id = m.identifier?.[0];
      const title = m.title?.[0] ?? r.summary ?? '';
      if (!id || found.has(id) || !RELEVANT.test(title)) continue;
      found.set(id, {
        rok: deadlines.sort()[0],
        id,
        vrsta: m.type?.[0] === '8' ? 'kaskadni' : 'tema',
        naslov: title.slice(0, 110),
        url: r.url,
      });
    }
  }
  const rows = [...found.values()].sort((a, b) => a.rok.localeCompare(b.rok));
  for (const r of rows) console.log([r.rok, r.id, r.vrsta, r.naslov, r.url].join(' | '));
  console.log(`${rows.length} tem z rokom od ${today} naprej`);
}

async function spirit() {
  const url =
    'https://www.spiritslovenia.si/api/v1/backend/tender/paginatedlist?limit=100&offset=0&sortBy=PUBLISH_DATE&sort=DESC&queryString=&status=ACTIVE&validity=ACTIVE&queryFullContent=true&language=SL';
  const res = await fetch(url);
  if (!res.ok) {
    console.log(`NAPAKA SPIRIT: HTTP ${res.status}`);
    process.exit(1);
  }
  const body = await res.json();
  const data = Array.isArray(body.data) ? body.data : (body.data?.list ?? body.data?.items ?? body.data?.content ?? []);
  for (const t of data) console.log([t.publishDate, t.validTo, t.title, (t.deadline ?? '').slice(0, 120)].join(' | '));
  console.log(`${data.length} aktivnih razpisov`);
}

const commands = { preveri, eu, spirit };
if (!commands[cmd]) {
  console.log('Uporaba: node scripts/razpisi.mjs preveri | eu | spirit');
  process.exit(2);
}
await commands[cmd]();
