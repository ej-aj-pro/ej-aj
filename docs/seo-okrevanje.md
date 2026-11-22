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
