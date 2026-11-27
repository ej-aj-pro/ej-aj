# Načrt okrevanja v Googlu

Pripravljeno 13. novembra 2026. Nadaljuje razdelek "Padec v Googlu 19. oktobra 2026" v
`docs/seo.md` (PR #106 in #108). Naslednji pregled: 27. novembra in 15. decembra 2026.

## Stanje 13. 11. 2026 (Search Console, zadnji trije meseci)

| Obdobje | Prikazi na dan | Kliki | Povprečno mesto |
|---|---|---|---|
| 25. 9. do 18. 10. | 14 do 94, običajno 45 do 90 | 22 | 5 do 17 |
| 19. 10. do 10. 11. | 0 do 4, večina dni 0 | 2 | 2 do 78 |

- Padec je oster, čez noč z 18. na 19. 10. (94 prikazov, nato 0). Pri postopnem slabšanju
  kakovosti bi bil počasnejši.
- Indeksiranih je 117 strani, `site:ej-aj.si` jih vrne okoli 119. Pregled URL-ja `/cene/claude/`:
  "URL je v Googlu", HTTPS in drobtinice brez napak.
- Za "claude cena" (prej 4. mesto) stran 13. 11. ni med prvimi devetimi zadetki. Ime strani
  ("ej aj") se še pojavi na 1. do 2. mestu. Google strani torej pozna, a jih ne pokaže.
- Neindeksirani razlogi so neškodljivi: 71 starih naslovov `http://` (zdaj preusmerjeni, 301),
  19 preusmeritev, 26 "odkrito ali preiskano, trenutno ni indeksirano".

## Kaj je izključeno

- Ročni ukrep, varnostne težave, odstranitve: nič (1. 11.).
- `robots.txt`, kanonični URL-ji, glave: pravilni tudi za Googlebot (13. 11.).
- HTTPS: `http://ej-aj.si` zdaj vrne 301 na `https://` (točka 0 v `docs/stanje-projekta.md` je
  rešena), `www` prav tako.
- Googlova posodobitev proti spamu iz septembra 2026 se je končala 8. 10., posodobitve jedra
  oktobra ni bilo. Padec 11 dni pozneje se s tem ne ujema.
- Kopija na `ej-aj.anze999.workers.dev` ni v Googlovem indeksu (`site:` nič), a je bila celotna
  stran brez `noindex`. Ta PR jo izklopi.

## Diagnoza

Najverjetneje je Googlov samodejni sistem (SpamBrain, pravilo o "množično ustvarjeni vsebini")
stran označil kot množično ustvarjeno. Za Google so to ugotovljivi signali:

1. **Obseg in hitrost.** V štirih tednih okoli 200 URL-jev nove domene, 16. in 17. 10. naenkrat
   8 vodnikov, 2 orodji in 12 spremenjenih naslovov. Dva dni pozneje padec.
2. **Tanke strani.** 56 od 62 gesel v slovarju ima manj kot 60 besed, kar je bila polovica
   sitemapa. K temu še kratki vodniki priročnika (500 do 650 besed), ki obravnavajo ozko temo.
3. **Ponovljene novice.** Tedenski pregledi in članki povzemajo objave drugih podjetij.
4. **Sami povemo, da je stran avtomatizirana.** Stran O projektu je pisala "stran je tudi poskus:
   koliko dela lahko AI opravi sam" in "večino vsebine pripravi Claude Code". Javni repo s
   skilli za pisanje to potrjuje.
5. **Brez zunanjih signalov zaupanja.** Ni povratnih povezav, ni avtorja, nova domena.

Samo eden od teh signalov težave ne bi povzročil. Skupaj so verjetno zadostovali.

Znižanje je samodejno, zato zahteve za ponoven pregled ni. Okrevanje pride, ko Google stran
ponovno oceni. Po izkušnjah drugih strani je to po več tednih do mesecih, pogosto ob naslednji
večji posodobitvi. Pogoj je, da se signali zares spremenijo, ne samo naslovi.

## Načrt

### 1. Ta teden: počisti indeks (PR #106, #108 in ta PR)

Vrstni red združevanja (vsak PR ločeno, ko je CI zelen):

1. **#106**: `noindex` za novice, tedenske preglede, kopije `.md` in `llms`.
2. **#108**: preusmeri na `main`, nato združi. `noindex` za 55 kratkih gesel in `/iskanje/`,
   pravila za tempo objav v `AGENTS.md`.
3. **Ta PR** (`tehnicno/seo-okrevanje`, zložen na #108):
   - `noindex` za 7 vodnikov, ki so kratki, ozki ali se prekrivajo: subagenti, hooki, lasten
     agent, rutine, Claude Code ali klepet, kontekst na GitHubu (priročnik ostane na strani in v
     navigaciji) ter "Kako nastaja pregled razpisov". Polje `noindex: true` v front matterju.
   - `noindex` za `/videi/` (seznam tujih videov brez lastne vsebine).
   - `workers_dev: false`: produkcija samo na `ej-aj.si`, predogledi PR ostanejo.
   - Naslovnica: najprej orodja in lastni podatki (cene, kalkulator, AI Act, razpisi, statistika,
     modeli), nato šest vodnikov, ki odgovarjajo na iskanja, novice na koncu. Nov naslov
     naslovnice brez "AI novice", ker novice niso več v indeksu.
   - O projektu: odgovornost urednika na prvem mestu, raba AI pojasnjena pošteno, a ne kot
     "poskus, koliko zmore AI sam"; e-naslov za popravke.

Rezultat: v sitemapu ostane okoli 60 URL-jev (prej 136), vsak z lastnim razlogom za obstoj.

Po združitvi v Search Console (Anže ali agent v profilu anze999):

- Sitemapi: znova oddaj `sitemap-index.xml`.
- Pregled URL-ja, "Zahtevaj indeksiranje" za največ 10 strani: `/`, `/modeli/`, `/cene/claude/`,
  `/cene/chatgpt/`, `/cene/kalkulator/`, `/ai-act-preverjanje/`, `/statistika/`,
  `/vodniki/chatgpt-v-slovenscini/`, `/vodniki/brezplacna-ai-orodja/`, `/o-projektu/`.
  To pospeši ponovno preiskovanje, znižanja pa samo po sebi ne odpravi.

### 2. Do sredine decembra: manj, a boljših strani

- **Brez novih indeksiranih strani** do prvega znaka okrevanja. Tedenski pregledi in razpisi
  lahko izhajajo (pregledi imajo `noindex`, razpisi so osvežitev obstoječe strani), a ne več
  PR-jev isti dan.
- **Združitve vodnikov** s preusmeritvijo 301 (seznam v `docs/seo.md`, skupine 1 do 4), en PR na
  skupino, najmanj teden dni narazen. Prvi kandidat: "ChatGPT, Claude ali Gemini" in "Kako
  izbrati AI orodje za podjetje" v en vodnik.
- **Poglobitev strani, ki so imele prikaze**: `/cene/claude/`, `/cene/chatgpt/`, `/cene/gemini/`,
  `/cene/copilot/` (iskanja "claude cena", "gemini cena", "copilot cena") in vodnik "ChatGPT v
  slovenščini" (iskanje "chat gpt v slovenščini" je imelo 37 prikazov, največ od vseh). Kaj dodati: kaj paket dejansko omogoča v praksi,
  omejitve, ki jih ponudnik ne izpostavi, primerjava s cenami lani, odgovori na pogosta vprašanja.
- **Lastna izkušnja, ki je drugje ni.** To je največja razlika med "AI povzetkom" in stranjo, ki
  jo Google ceni. Anže naj ob vsakem večjem vodniku narekuje nekaj minut o tem, kaj vidi pri
  delu (skill `nov-vodnik`, brez strank in imen): kje ljudje zataknejo, kaj se ne obnese, koliko
  časa kaj vzame. Primerni so lastni posnetki zaslona in lastni preizkusi (npr. isti slovenski
  dokument v treh orodjih).
- **7 indeksiranih gesel** (gpt, prompt, vibe coding, agent, token, veliki jezikovni model, mcp)
  razširiti na 300 do 500 besed ali jim tudi dati `noindex`.

### 3. Zunanji signali (Anže, brez imena in LinkedIna)

Nova domena brez povratnih povezav ima malo zaupanja, kar znižanje podaljša. Cilj je 5 do 10
naravnih omemb do konca januarja:

- **Zgodba za medije:** Slovenija ima med 48 državami najvišji delež ChatGPT med AI klepetalniki
  (`/statistika/klepetalniki-po-drzavah/`). Kratek mail z grafom tehnološkim rubrikam (rtvslo.si,
  n1info.si, Delo, Računalniške novice, slo-tech). Podatek mora biti pred pošiljanjem osvežen.
- **Viri za podjetja:** predloga pravil rabe AI (Word), preverjanje po AI Act in kalkulator
  stroškov ponuditi GZS, OZS, regionalnim zbornicam, DIH Slovenija in SPIRIT kot brezplačen vir
  za njihove strani z gradivi.
- **Šole in knjižnice:** vodnik "AI v šoli" in zaznavalniki AI besedila za Arnes, ZRSŠ in
  šolske knjižnice.
- **Forumi:** odgovori na slo-tech in r/Slovenia, kjer povezava res odgovori na vprašanje.

Predloga maila (s `pozdrav@ej-aj.si`, prilagodi prejemniku):

> Pozdravljeni,
>
> na ej-aj.si zbiramo brezplačne vire o AI za slovenska podjetja. Pripravili smo [orodje ali
> vodnik], ki [kaj reši, v enem stavku]. Pri vsaki ceni in trditvi je vir, podatke osvežujemo
> vsak mesec. Če se vam zdi koristno za vaše člane, ga lahko dodate med gradiva: [povezava].
>
> Lep pozdrav,
> uredništvo ej-aj.si

### 4. Merjenje

- Vsak petek: prikazi v Search Console za zadnjih 7 dni in poizvedbe z mestom pod 20.
- Prvi znak okrevanja: več dni zapored nad 10 prikazov, ne glede na kanal. Šele takrat znova
  največ dve novi indeksirani strani na teden (pravilo v `AGENTS.md`).
- Če do konca januarja 2027 ni premika: `noindex` še za ves priročnik in vse vodnike pod 1.000
  besed, ostane samo jedro (cene, orodja, statistika, 10 do 15 najboljših vodnikov). Selitev na
  novo domeno ni rešitev, ker ocena sledi vsebini.
- Bing (Webmaster Tools) preveri vzporedno: če tam promet raste, je težava Googlova ocena, ne
  vsebina ali tehnika.

## Pregled 22. 11. 2026

- Search Console: od 12. 11. skoraj vsak dan 1 do 4 prikazi (prej večinoma 0), povprečno mesto
  od 9 do 65. Znižanje še traja, prvi premik je majhen.
- Zunanje povezave: 1 (Search Console, poročilo Povezave). To je največja vrzel; razdelek 3
  zgoraj ostaja prednostna naloga za Anžeta.
- Hitrost: strani HTML imajo 7 do 11 KB (stisnjeno), CSS 3 KB, odziv strežnika 0,1 do 0,17 s,
  brez zamikov postavitve. Edina izboljšava: dolgo predpomnjenje datotek v `/_astro/` (#115).
- Novo: odštevalnik do naslednjega roka AI Act (`src/components/AiActRoki.astro`, podatki v
  `src/data/ai-act-roki.yaml`) na naslovnici, v obeh vodnikih o AI Act in na
  `/ai-act-preverjanje/`. Brez novega URL-ja, torej brez nove indeksirane strani. Krepi strani,
  ki so že v indeksu, in je primerna vsebina za predlogo maila zbornicam (razdelek 3).
- Zamisel o odštevalniku do "napada AI in robotov" je opuščena: izmišljen datum je click bait,
  kar je signal, zaradi katerega je bila stran znižana, AI asistenti pa takih strani ne citirajo.

## Pregled 27. 11. 2026

- Search Console, zadnjih 28 dni (29. 10. do 25. 11.): 50 prikazov, 4 kliki, povprečno mesto
  27,7. Od 12. 11. večinoma 1 do 4 prikazi na dan, največ 7 (22. 11.). Klike prinaša samo
  ime strani ("ej aj", mesto 1,8). Znižanje še traja; pogoja za okrevanje (več dni zapored nad
  10 prikazov) ni.
- Indeksiranje: 110 indeksiranih, 115 neindeksiranih. Google je 24. 11. poslal mail "New reasons
  preventing your pages from being indexed: Excluded by 'noindex' tag". To je pričakovano: vseh
  10 naštetih URL-jev ima `noindex` namenoma (novice, kratka gesla, vodniki priročnika iz PR
  #106, #108 in #112). Število bo raslo, ko bo Google znova obiskal preostale strani z
  `noindex`, indeksiranih pa bo manj (cilj je okoli 60, kolikor jih je v sitemapu). Ostali
  razlogi so nespremenjeni in neškodljivi: 71 starih naslovov `http://` (kanonični je
  `https://`), 19 preusmeritev, 11 "preiskano, ni indeksirano", 3 "odkrito, ni indeksirano",
  1 dvojnik.
- Sitemap `sitemap-index.xml`: oddan 13. 11., prebran 27. 11., 60 strani, brez napak.
- Ta PR: `noindex` tudi za 7 preostalih indeksiranih gesel v slovarju (gpt, prompt, vibe coding,
  agent, token, veliki jezikovni model, mcp). Imajo 35 do 56 besed, zato so tanke strani, ki jih
  ta načrt navaja kot enega od vzrokov za znižanje. Geslo dobi `indeks: true` nazaj, ko je
  razširjeno na 300 do 500 besed z lastno vsebino (primeri v slovenščini, povezave na vodnike).
- Naslednji pregled: 15. 12. 2026.
