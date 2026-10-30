import type { CollectionEntry } from 'astro:content';

// Subscription helpers shared by /modeli/ and the per-product price pages /cene/<slug>/.
type Plan = CollectionEntry<'narocnine'>;

export const PRODUCT_ORDER = ['ChatGPT', 'Claude', 'Gemini', 'Microsoft Copilot', 'Mistral Le Chat', 'Perplexity'];

// One price page per product. `produkt` is the key in narocnine.yaml; `ime` is the reader-facing
// name (Mistral renamed Le Chat to Vibe; the data keeps the old key until the monthly refresh).
export const PRODUCTS = [
  {
    slug: 'chatgpt',
    produkt: 'ChatGPT',
    ime: 'ChatGPT',
    ponudnik: 'OpenAI',
    vodniki: ['chatgpt-v-slovenscini', 'chatgpt-claude-ali-gemini', 'brezplacna-ai-orodja', 'odpoved-narocnine-ai'],
    slovar: ['chatgpt', 'gpt'],
  },
  {
    slug: 'claude',
    produkt: 'Claude',
    ime: 'Claude',
    ponudnik: 'Anthropic',
    vodniki: ['chatgpt-claude-ali-gemini', 'claude-code-ali-klepet', 'brezplacna-ai-orodja', 'odpoved-narocnine-ai'],
    slovar: ['claude', 'claude-code'],
  },
  {
    slug: 'gemini',
    produkt: 'Gemini',
    ime: 'Gemini',
    ponudnik: 'Google',
    vodniki: ['chatgpt-claude-ali-gemini', 'brezplacna-ai-orodja', 'odpoved-narocnine-ai', 'kako-izbrati-ai-orodje-za-podjetje'],
    slovar: ['gemini'],
  },
  {
    slug: 'microsoft-copilot',
    produkt: 'Microsoft Copilot',
    ime: 'Microsoft Copilot',
    ponudnik: 'Microsoft',
    vodniki: ['copilot-v-slovenscini', 'ai-v-excelu-wordu-outlooku', 'kako-izbrati-ai-orodje-za-podjetje', 'brezplacna-ai-orodja'],
    slovar: ['copilot'],
  },
  {
    slug: 'mistral',
    produkt: 'Mistral Le Chat',
    ime: 'Mistral Vibe (prej Le Chat)',
    ponudnik: 'Mistral',
    vodniki: ['brezplacna-ai-orodja', 'kako-izbrati-ai-orodje-za-podjetje'],
    slovar: [],
  },
  {
    slug: 'perplexity',
    produkt: 'Perplexity',
    ime: 'Perplexity',
    ponudnik: 'Perplexity',
    vodniki: ['brezplacna-ai-orodja'],
    slovar: [],
  },
] as const;

// Reverse links, so guides and glossary terms point back to the price pages that list them
// (Search Console, October 2026: the price pages get clicks, but almost nothing linked to them).
export function pricePagesForGuide(slug: string) {
  return PRODUCTS.filter((p) => (p.vodniki as readonly string[]).includes(slug));
}

export function pricePageForTerm(id: string) {
  return PRODUCTS.find((p) => (p.slovar as readonly string[]).includes(id));
}

export function sortPlans(plans: Plan[]) {
  return plans.slice().sort((a, b) => {
    const pa = PRODUCT_ORDER.indexOf(a.data.produkt);
    const pb = PRODUCT_ORDER.indexOf(b.data.produkt);
    if (pa !== pb) return (pa === -1 ? 99 : pa) - (pb === -1 ? 99 : pb);
    const pa2 = a.data.cena_mesec ?? a.data.cena_letno ?? 1e9;
    const pb2 = b.data.cena_mesec ?? b.data.cena_letno ?? 1e9;
    return pa2 - pb2;
  });
}

// useGrouping 'always': the Slovenian locale leaves four-digit numbers ungrouped (4080), the site
// writes 4.080.
const whole = new Intl.NumberFormat('sl-SI', { maximumFractionDigits: 0, useGrouping: 'always' });
const cents = new Intl.NumberFormat('sl-SI', { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: 'always' });
// 23 €, 21,99 €, 13,60 € (never 13,6 €).
const money = { format: (v: number) => (Number.isInteger(v) ? whole : cents).format(v) };

export function planPrice(v: number | null, currency: string) {
  if (v === null) return 'po dogovoru';
  if (v === 0) return 'brezplačno';
  return `${money.format(v)} ${currency === 'EUR' ? '€' : '$'}`;
}

// Slovenian plural: 1 uporabnik, 2 uporabnika, 3-4 uporabniki, 5+ uporabnikov.
export function users(n: number) {
  const m = n % 100;
  if (m === 1) return `${n} uporabnik`;
  if (m === 2) return `${n} uporabnika`;
  if (m === 3 || m === 4) return `${n} uporabniki`;
  return `${n} uporabnikov`;
}

export function host(url: string) {
  return new URL(url).hostname.replace(/^www\./, '');
}
