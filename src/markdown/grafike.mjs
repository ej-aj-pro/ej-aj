// Markdown plugin: turns a fenced code block with the language `grafika` into a visual
// (timeline, decision steps or a row of cards) built from plain HTML, styled in
// src/styles/grafike.css. Being text, it reads well on phones, follows dark mode, can be
// searched and read aloud, and every fact in it sits in the article file for fact-checking.
//
//   ```grafika
//   vrsta: casovnica            # casovnica | odlocitev | kartice
//   naslov: Kdaj začnejo veljati pravila
//   tocke:                      # casovnica: datum, besedilo, optional stanje: velja | prihaja
//     - datum: 2. februar 2025
//       besedilo: Prepovedane prakse.
//       stanje: velja
//   vir: AI Act, člen 113       # optional, shown under the visual
//   ```
//
// odlocitev: koraki: [{ vprasanje, da, ne }], konec. An empty `da` or `ne` means "go on to the
// next step"; `konec` is the result when every step is passed.
// kartice: kartice: [{ naslov, ton, tocke: [..] }], ton is zelena | rumena | rdeca | modra.
// Text may use **bold**; everything else is escaped. Invalid input fails the build.

import yaml from 'js-yaml';

const TONI = new Set(['zelena', 'rumena', 'rdeca', 'modra', 'siva']);
// Traffic-light cards also get a symbol, so the meaning does not depend on colour alone.
const ZNAKI = {
  rdeca: '<path d="M8 8l8 8M16 8l-8 8"/>',
  rumena: '<path d="M12 7v6M12 16.5v.5"/>',
  zelena: '<path d="M7.5 12.5l3 3 6-7"/>',
};

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
const inline = (s) => esc(s).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

function fail(msg, spec) {
  throw new Error(`grafika: ${msg}\n${yaml.dump(spec ?? {}).slice(0, 400)}`);
}

function casovnica(spec) {
  if (!Array.isArray(spec.tocke) || !spec.tocke.length) fail('casovnica potrebuje "tocke"', spec);
  const items = spec.tocke.map((t) => {
    if (!t.datum || !t.besedilo) fail('vsaka točka potrebuje "datum" in "besedilo"', t);
    const stanje = t.stanje === 'velja' ? ' class="velja"' : t.stanje === 'prihaja' ? ' class="prihaja"' : '';
    const oznaka = t.stanje ? `<span class="grafika-oznaka">${t.stanje === 'velja' ? 'velja' : 'prihaja'}</span>` : '';
    return `<li${stanje}><span class="grafika-datum">${esc(t.datum)}${oznaka}</span><p>${inline(t.besedilo)}</p></li>`;
  });
  return `<ol class="grafika-casovnica">${items.join('')}</ol>`;
}

function odlocitev(spec) {
  if (!Array.isArray(spec.koraki) || !spec.koraki.length) fail('odlocitev potrebuje "koraki"', spec);
  const veja = (label, text, cls) =>
    text ? `<p class="grafika-veja ${cls}"><strong>${label}:</strong> ${inline(text)}</p>` : '';
  const items = spec.koraki.map((k, i) => {
    if (!k.vprasanje) fail('vsak korak potrebuje "vprasanje"', k);
    const naprej = i < spec.koraki.length - 1 ? 'naslednji korak' : 'rezultat spodaj';
    const da = k.da ? veja('Da', k.da, 'da') : `<p class="grafika-veja naprej"><strong>Da:</strong> ${naprej}</p>`;
    const ne = k.ne ? veja('Ne', k.ne, 'ne') : `<p class="grafika-veja naprej"><strong>Ne:</strong> ${naprej}</p>`;
    return `<li><p class="grafika-vprasanje">${inline(k.vprasanje)}</p><div class="grafika-veje">${da}${ne}</div></li>`;
  });
  const konec = spec.konec ? `<p class="grafika-konec">${inline(spec.konec)}</p>` : '';
  return `<ol class="grafika-koraki">${items.join('')}</ol>${konec}`;
}

function kartice(spec) {
  if (!Array.isArray(spec.kartice) || !spec.kartice.length) fail('kartice potrebujejo "kartice"', spec);
  const items = spec.kartice.map((k) => {
    if (!k.naslov) fail('vsaka kartica potrebuje "naslov"', k);
    const ton = TONI.has(k.ton) ? k.ton : 'siva';
    const opis = k.opis ? `<p>${inline(k.opis)}</p>` : '';
    const tocke = Array.isArray(k.tocke) && k.tocke.length ? `<ul>${k.tocke.map((t) => `<li>${inline(t)}</li>`).join('')}</ul>` : '';
    const znak = ZNAKI[ton]
      ? `<svg class="grafika-znak" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${ZNAKI[ton]}</svg>`
      : '';
    return `<li class="ton-${ton}"><strong class="grafika-kartica-naslov">${znak}${inline(k.naslov)}</strong>${opis}${tocke}</li>`;
  });
  return `<ul class="grafika-kartice" data-stevilo="${items.length}">${items.join('')}</ul>`;
}

const VRSTE = { casovnica, odlocitev, kartice };

export function grafikaHtml(source) {
  let spec;
  try {
    spec = yaml.load(source);
  } catch (e) {
    throw new Error(`grafika: neveljaven YAML (${e.message})`);
  }
  const render = VRSTE[spec?.vrsta];
  if (!render) fail(`neznana vrsta "${spec?.vrsta}" (casovnica, odlocitev, kartice)`, spec);
  if (!spec.naslov) fail('manjka "naslov"', spec);
  const vir = spec.vir ? `<p class="grafika-vir">Vir: ${inline(spec.vir)}</p>` : '';
  return `<figure class="grafika grafika-vrsta-${spec.vrsta}"><figcaption class="grafika-naslov">${inline(spec.naslov)}</figcaption>${render(spec)}${vir}</figure>`;
}

// Sätteri mdast plugin (see slovar-povezave.mjs for the API shape).
export default function grafike() {
  return {
    name: 'grafike',
    code(node, ctx) {
      if (node.lang !== 'grafika') return;
      ctx.replaceNode(node, [{ type: 'html', value: grafikaHtml(node.value) }]);
    },
  };
}
