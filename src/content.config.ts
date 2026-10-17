import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

const novice = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/novice' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(200),
    date: z.coerce.date(),
    // Date of the last substantive update (facts, prices, sections), not typo fixes.
    updated: z.coerce.date().optional(),
    type: z.enum(['tedenski-pregled', 'clanek', 'vodnik']),
    // Obdobje, ki ga pokriva tedenski pregled, npr. "17. do 26. september 2026".
    period: z.string().optional(),
    draft: z.boolean().default(false),
    // Series of guides with a hub page, e.g. "prirocnik" -> /prirocnik/; korak orders them.
    serija: z.enum(['prirocnik']).optional(),
    korak: z.number().optional(),
    // Topic illustration on cards and lists (src/data/motivi.mjs); chosen from the file name when
    // left out.
    motiv: z
      .enum(['zakon', 'varnost', 'ljudje', 'sola', 'stavba', 'dokument', 'kalkulator', 'klepet', 'jezik', 'slika', 'predvajanje', 'koda', 'novice', 'cip', 'kljukica', 'zvezek', 'denar'])
      .optional(),
    // YouTube ids from src/data/videi.yaml, shown as recommended videos under the article.
    videi: z.array(z.string()).default([]),
    // Podcast episode the article summarises, shown as a card with its cover above the text.
    // slika is the thumbnail_url from the platform's oEmbed (loaded from its CDN, like YouTube).
    podcast: z
      .object({
        oddaja: z.string(),
        naslov: z.string(),
        datum: z.coerce.date(),
        trajanje: z.string().optional(),
        url: z.url(),
        // Locative, used as "Poslušajte na {platforma}", e.g. "Spotifyju".
        platforma: z.string(),
        slika: z.url(),
      })
      .optional(),
  }),
});

const videi = defineCollection({
  loader: file('src/data/videi.yaml'),
  schema: z.object({
    // id is the 11-character YouTube video id.
    naslov: z.string(),
    kanal: z.string(),
    datum: z.coerce.date(),
    trajanje: z.string().optional(),
    // Slovenian summary in our words, 2 to 3 sentences; facts from the episode page.
    opis: z.string(),
    // One sentence: why it is worth the time for a Slovenian business reader.
    zakaj: z.string(),
    izpostavljen: z.boolean().default(false),
    vir: z.url(),
    preverjeno: z.coerce.date(),
  }),
});

const slovar = defineCollection({
  loader: file('src/data/slovar.yaml'),
  schema: z.object({
    izraz: z.string(),
    angl: z.string().optional(),
    razlaga: z.string(),
    primer: z.string().optional(),
    glej: z.array(z.string()).default([]),
  }),
});

const modeli = defineCollection({
  loader: file('src/data/modeli.yaml'),
  schema: z.object({
    ponudnik: z.string(),
    ime: z.string(),
    api_id: z.string().nullable().default(null),
    izid: z.string().nullable().default(null),
    // USD na milijon tokenov, standardna cena (brez paketnih popustov).
    cena_vhod: z.number().nullable(),
    cena_izhod: z.number().nullable(),
    kontekst: z.number().nullable(),
    odprte_utezi: z.boolean(),
    dostop: z.string(),
    za_kaj: z.string(),
    opomba: z.string().optional(),
    viri: z.array(z.url()).min(1),
    preverjeno: z.coerce.date(),
  }),
});

const narocnine = defineCollection({
  loader: file('src/data/narocnine.yaml'),
  schema: z.object({
    produkt: z.string(),
    paket: z.string(),
    za: z.enum(['posameznik', 'podjetje']),
    // Cena na uporabnika na mesec pri mesečnem plačilu; null = cena po dogovoru ali brezplačno.
    cena_mesec: z.number().nullable(),
    // Cena na uporabnika na mesec pri letnem plačilu.
    cena_letno: z.number().nullable().default(null),
    valuta: z.enum(['EUR', 'USD']),
    ddv: z.string().nullable().default(null),
    min_uporabnikov: z.number().nullable().default(null),
    kaj_dobite: z.string(),
    opomba: z.string().optional(),
    vir: z.url(),
    preverjeno: z.coerce.date(),
  }),
});

// Prompt templates for /prompti/ (src/data/prompti.yaml).
const prompti = defineCollection({
  loader: file('src/data/prompti.yaml'),
  schema: z.object({
    kategorija: z.enum(['pisanje', 'dokumenti', 'podatki', 'ucenje', 'ai']),
    naslov: z.string(),
    za_kaj: z.string(),
    prompt: z.string(),
    nasvet: z.string().optional(),
  }),
});

// Public funding for AI in Slovenia for /razpisi/ (src/data/razpisi.yaml). Every fact comes from
// the funder's own page in `vir`; the monthly refresh (skill posodobi-modele) re-checks each entry.
const razpisi = defineCollection({
  loader: file('src/data/razpisi.yaml'),
  schema: z.object({
    naziv: z.string(),
    izvajalec: z.string(),
    vrsta: z.enum(['vavcer', 'razpis', 'poziv', 'storitev']),
    // odprt: applications are open; napovedan: the funder announced it, not open yet; stalno: a
    // service without a deadline; zaprt: deadline passed (kept a few months, then dropped).
    status: z.enum(['odprt', 'napovedan', 'stalno', 'zaprt']),
    kdo: z.string(),
    kaj: z.string(),
    sredstva: z.string(),
    // Deadline as the funder states it, in words.
    rok: z.string(),
    // Final deadline as a date. Past it, the page shows the entry as closed even before the
    // monthly refresh changes `status`.
    rok_datum: z.coerce.date().optional(),
    // How the call mentions AI, or that it only covers digitalisation in general.
    ai: z.string(),
    opomba: z.string().optional(),
    vir: z.url(),
    viri: z.array(z.url()).default([]),
    preverjeno: z.coerce.date(),
  }),
});

export const collections = { novice, slovar, modeli, narocnine, videi, prompti, razpisi };
