---
title: 'Tedenski pregled #4: Gemini 4 Argon za vse, Meta Muse Wonder, Mistral Timestral, agentna raba ChatGPT v Sloveniji'
description: 'Gemini 4 Argon je na voljo razvijalcem in naročnikom Pro, Meta je izdala Muse Wonder, Mistral model za napovedi, slovenska podjetja pa imajo najnižji delež agentne rabe ChatGPT v EU.'
date: 2026-10-16
type: tedenski-pregled
period: '10. do 16. oktober 2026'
---

V četrtem tedenskem pregledu sta dva nova modela in širša dostopnost Gemini 4 Argon, napoved umika starejših modelov OpenAI, splošna dostopnost pregledovanja kode s Claudom, tri raziskave o tem, kako evropska podjetja uporabljajo AI, in posebno srečanje znanstvenega odbora EU o varnosti najzmogljivejših modelov.

> **Na kratko:** po OpenAI-jevih podatkih pri slovenskih računih ChatGPT Enterprise na agentna orodja, ki naloge opravijo sama, odpade le 22 % izhodnega besedila, kar je najmanj v EU. Hkrati evropska raziskava kaže, da malim in srednjim podjetjem ter srednje velikim družbam pri uvajanju AI najbolj nagajajo stroški, pravna negotovost in pomanjkanje znanja. Za podjetje, ki AI že uporablja za vprašanja in odgovore, je smiseln naslednji korak ena konkretna naloga, ki jo agent opravi od začetka do konca.

## 1. Gemini 4 Argon na voljo razvijalcem in naročnikom Google AI Pro

Google je 13. oktobra Gemini 4 Argon, ki ga je 30. septembra najprej dal le izbranim strokovnjakom za kibernetsko varnost, odprl širšemu krogu. Razvijalci ga lahko uporabljajo v plačljivem paketu Gemini API prek Google AI Studio in Android Studio, naročniki Google AI Pro in Ultra pa v aplikaciji Gemini. Do 30. novembra velja uvodna cena 2 USD za milijon vhodnih in 10 USD za milijon izhodnih tokenov, od 1. decembra pa 4 oziroma 20 USD. Google navaja, da je model v preizkusu rešil vseh 12 simuliranih kibernetskih napadov od začetka do konca, prejšnja generacija pa pet.

**Kaj to pomeni za vas:** Argon ni več rezerviran za izbrane, uporabljate ga lahko z naročnino Google AI Pro ali plačljivim API-jem (v brezplačnem paketu API ga ni). Če ga želite preizkusiti v lastni aplikaciji, je do konca novembra polovico ceneje kot pozneje.

Viri: [Google, Gemini 4 Argon](https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-4-argon/), [Google, Build with Gemini 4 Argon](https://blog.google/innovation-and-ai/technology/developers-tools/build-with-gemini-4-argon/), [Google, Gemini 4 Argon v aplikaciji Gemini](https://blog.google/innovation-and-ai/products/gemini-app/gemini-4-argon-availability/), [Google, cene Gemini API](https://ai.google.dev/gemini-api/docs/pricing), [Google, varnost Gemini 4 Argon](https://blog.google/innovation-and-ai/technology/safety-security/gemini-4-model-safety-security/)

## 2. Meta izdala modela Muse Wonder za agente

Meta je 12. oktobra predstavila Muse Wonder in Muse Wonder Full, ki ju opisuje kot svoja najzmogljivejša modela doslej, namenjena osebnim in poslovnim agentnim nalogam. Muse Wonder je razvijalcem na voljo prek Meta Model API in orodja Muse Code, Muse Wonder Full pa naročnikom Muse Code. Modela imata funkcijo Active Memory, ki prenaša kontekst med pogovori, in Active Focus, pri kateri model vztraja pri zahtevni nalogi in pred pomembnimi dejanji preveri z uporabnikom. Meta na strani ne navaja cen in rezultatov primerjalnih testov, poročilo o varnostnem preverjanju pa je napovedala za pozneje.

**Kaj to pomeni za vas:** brez objavljenih cen in rezultatov Muse Wonder za zdaj ni mogoče primerjati z modeli, ki jih podjetja že uporabljajo. Smiselno je počakati na varnostno poročilo in neodvisne meritve.

Vir: [Meta, Introducing Muse Wonder and Muse Wonder Full](https://about.fb.com/news/2026/10/introducing-muse-wonder-models/)

## 3. Mistral izdal Timestral, odprt model za napovedovanje

Mistral je 15. oktobra izdal Timestral, družino modelov za napovedovanje časovnih vrst, torej podatkov, merjenih skozi čas, kot so prodaja po dnevih ali poraba energije po urah. Na voljo so štiri velikosti, od 5 do 209 milijonov parametrov. Največji model je po Mistralovih navedbah na treh glavnih javnih primerjalnih testih najboljši med vnaprej naučenimi modeli, ki jih niso dodatno prilagajali podatkom, za delovanje pa ne potrebuje grafične kartice. Uteži so na Hugging Face pod prilagojeno licenco MIT, ki podjetjem z več kot 20 milijoni USD mesečnih prihodkov rabo omejuje (zanje je potrebna komercialna licenca). Prek storitve Mistral Forge lahko podjetja model prilagodijo svojim podatkom in ga namestijo na lastne strežnike.

**Kaj to pomeni za vas:** malo ali srednje podjetje, ki napoveduje zaloge, prodajo ali porabo, lahko Timestral preizkusi na svojih zgodovinskih podatkih brez plačila in brez pošiljanja podatkov v oblak.

Viri: [Mistral, Introducing Timestral](https://mistral.ai/news/timestral/), [Hugging Face, licenca Timestral](https://huggingface.co/mistralai/Timestral-209M/blob/main/LICENSE)

## 4. OpenAI bo januarja iz API-ja umaknil GPT-4o in GPT-4.1

OpenAI je 14. oktobra razvijalce obvestil, da bo 14. januarja 2027 iz API-ja odstranil modele GPT-4o, GPT-4o mini, GPT-4.1 in GPT-4.1 mini. Kot zamenjavo za vse štiri priporoča GPT-6 Luna. Po enakem urniku prenehajo delovati tudi prilagojene (fino uglašene) različice teh modelov.

**Kaj to pomeni za vas:** če ima vaše podjetje ali zunanji izvajalec aplikacijo, ki kliče GPT-4o ali GPT-4.1, jo je treba do sredine januarja preklopiti na novejši model in preveriti, ali še daje enake rezultate.

Vir: [OpenAI, Deprecations](https://developers.openai.com/api/docs/deprecations)

## 5. Pregledovanje kode s Claudom je splošno dostopno

Anthropic je 15. oktobra sporočil, da Code Review, funkcija, pri kateri Claude samodejno pregleduje predloge sprememb kode (pull requests) na GitHubu, ni več v preizkusni različici. Na voljo je organizacijam s paketoma Claude Team in Enterprise. Večina pregledov se po navedbah podjetja zdaj konča v 6 do 10 minutah namesto v približno 20, skrbniki pa lahko za vsak repozitorij izberejo hiter, običajen ali poglobljen pregled. Ustrezne organizacije s paketom Enterprise lahko do 15. januarja 2027 prevzamejo najmanj 10.000 USD dobropisa za pregledovanje kode, ki poteče 30 dni po prevzemu.

**Kaj to pomeni za vas:** ekipe, ki razvijajo programsko opremo in že imajo Claude Team ali Enterprise, lahko pregledovanje vklopijo za izbrane repozitorije in preverijo, koliko napak najde, preden kodo pregleda človek.

Viri: [Claude, Code Review is now generally available](https://claude.com/resources/articles/code-review-is-now-generally-available), [Claude Code, dokumentacija Code Review](https://code.claude.com/docs/en/code-review)

## 6. OpenAI: Slovenija ima najnižji delež agentne rabe ChatGPT v EU

OpenAI je 14. oktobra objavil poročilo o rabi agentnih orodij Codex in ChatGPT Work med svojimi poslovnimi strankami v EU. Med računi ChatGPT Enterprise v vzorcu je delež izhodnih tokenov, ustvarjenih s temi orodji, segal od 22 % v Sloveniji do 85 % v Litvi, kar je najnižji in najvišji delež med državami EU. Število tedenskih uporabnikov teh orodij v malih in srednjih podjetjih (do 200 uporabnikov) je od maja zraslo za 8,1-krat, rast pa je bila v vseh državah članicah. Med vodilnimi podjetji po intenzivnosti rabe (zgornjih 10 % po številu izhodnih tokenov na aktivnega uporabnika, računi Enterprise in Business) je bilo po poročilu le 10 % podjetij iz EU. Podatki zajemajo samo OpenAI-jeve stranke in merijo količino ustvarjenega besedila.

**Kaj to pomeni za vas:** slovenska podjetja, ki uporabljajo ChatGPT, ga večinoma uporabljajo za vprašanja in pisanje, redkeje pa za naloge, ki jih AI opravi sam od začetka do konca. Tu je za večino največ neizkoriščenega prostora.

Vir: [OpenAI, The EU's next chapter in AI is agentic](https://openai.com/index/the-eus-next-chapter-in-ai-is-agentic/)

## 7. Evropski raziskavi: AI ali algoritmično upravljanje uporablja 42 % malih in srednjih podjetij

Evropska komisija je 14. oktobra objavila raziskavo Eurobarometer o rabi AI in algoritmičnega upravljanja (računalniškega dodeljevanja in spremljanja dela) v malih in srednjih podjetjih ter srednje velikih družbah. AI in algoritmično upravljanje že uporablja 42 % vprašanih podjetij, večinoma omejeno ali poskusno, 21 % pa to načrtuje. Kot glavne ovire navajajo visoke stroške naložb (50 %), pravno negotovost (49 %) in pomanjkanje znanja (48 %). Isti dan je Skupno raziskovalno središče EU (JRC) objavilo analizo podatkov Eurostata, po kateri je delež podjetij z AI v strateških panogah EU zrasel s 7 % leta 2021 na 18 % leta 2025, v drugih panogah pa z 8 % na 20 %.

**Kaj to pomeni za vas:** ovire, ki jih navajajo evropska podjetja, so v Sloveniji enake. Pri pravni negotovosti pomaga, če najprej zapišete notranja pravila rabe AI, pri pomanjkanju znanja pa usposabljanje zaposlenih, h kateremu AI Act zavezuje podjetja, ki uporabljajo AI.

Viri: [Evropska komisija, Eurobarometer o AI v podjetjih](https://ec.europa.eu/commission/presscorner/detail/en/ip_26_2160), [JRC, AI adoption across EU strategic sectors](https://joint-research-centre.ec.europa.eu/jrc-news-and-updates/ai-adoption-more-doubles-almost-every-eu-strategic-sector-2026-10-14_en)

## 8. Znanstveni odbor EU o izgubi nadzora nad modeli AI

Evropska komisija je 12. oktobra poročala o posebnem srečanju znanstvenega odbora za AI, ki sta ga 9. oktobra sklicala izvršna podpredsednica Henna Virkkunen in predsednik odbora Seán Ó hÉigeartaigh. Srečanje je bilo namenjeno odzivu na nedavne incidente izgube nadzora nad modeli AI. Urad EU za umetno inteligenco je od razvijalcev že zahteval in prejel poročila o resnih incidentih, Komisija pa jim bo poslala še zahteve za informacije. Predsednik in podpredsednik odbora sta priporočila obvladovanje tveganj notranjih modelov že med razvojem in testiranjem, krepitev zmogljivosti EU za odkrivanje in preiskovanje takih incidentov, na primer s posebno delovno skupino, ter mednarodno pobudo za izmenjavo informacij.

**Kaj to pomeni za vas:** za podjetja, ki AI uporabljajo, to neposredno ne prinaša novih obveznosti. Kaže pa, da EU pri največjih razvijalcih modelov pravila iz AI Act že uporablja v praksi.

Vir: [Evropska komisija, Special meeting of the AI Scientific Panel](https://digital-strategy.ec.europa.eu/en/news/special-meeting-ai-scientific-panel)

Naslednji pregled izide v petek, 23. oktobra.
