---
title: 'Tedenski pregled #5: OpenAI in Claude v Google Cloud, Agent Skills v Linux Foundation, Mistral Voxtral 3 in Large 4'
description: 'Modele OpenAI in Claude bo mogoče kupiti prek Google Cloud, Agent Skills dobiva neodvisnega skrbnika, Mistral je izdal Voxtral 3 za govor, EU projekt LLM-BRIDGE pa išče podjetja.'
date: 2026-10-23
type: tedenski-pregled
period: '17. do 23. oktober 2026'
---

V petem tedenskem pregledu sta dve novici o nakupu modelov prek Google Cloud, prenos standarda Agent Skills v neodvisno fundacijo, dva nova Mistralova modela, stalno preverjanje kode v Claude Security in evropski razpis za podjetja z generativno AI.

> **Na kratko:** podjetja, ki že plačujejo Google Cloud, bodo lahko modele OpenAI in Claude plačevala na računu pri Googlu in jih vštevala v dogovorjeno porabo. Pri izbiri različice se splača pogledati, kdo je obdelovalec podatkov in kje se podatki obdelujejo.

## 1. Modeli OpenAI prihajajo v Google Cloud

OpenAI je 21. oktobra napovedal, da bodo njegovi najzmogljivejši modeli in Codex, OpenAI-jevo orodje za programiranje z agenti, na voljo v Model Garden, Googlovem katalogu modelov v oblaku Google Cloud. Podjetja jih bodo kupovala prek Google Cloud Marketplace, tista z dogovorjeno porabo v Google Cloud pa bodo lahko te nakupe vštela vanjo. Modeli OpenAI bodo kmalu na voljo tudi v Google Antigravity in v Gemini Agent. Splošna dostopnost je po poročanju načrtovana v nekaj tednih, datuma OpenAI ni objavil; do takrat je treba dostop zaprositi. Microsoft po navedbah OpenAI ostaja njegov glavni partner za oblak.

**Kaj to pomeni za vas:** podjetje, ki že dela v Google Cloud, bo lahko modele GPT uporabljalo prek obstoječega računa pri Googlu in dogovorjene porabe. Za zdaj gre za napoved, cen in regij OpenAI še ni objavil.

Vir: [OpenAI, OpenAI models are coming to Google Cloud](https://openai.com/index/openai-models-google-cloud/)

## 2. Claude v Google Cloud tudi z Anthropicom kot upravljavcem

Anthropic je 22. oktobra sporočil, da je splošno dostopna storitev Claude Models on Google Cloud (Anthropic managed). Pri tej različici storitev upravlja Anthropic, ki je tudi obdelovalec podatkov, podjetje pa se prijavi s poverilnicami Google Cloud, plača na enem Googlovem računu in porabo všteje v dogovorjeno porabo pri Googlu. Na voljo so Claude Fable 5.1, Opus 5.5, Sonnet 5.5 in Haiku 5.5, za zdaj le prek ameriške in globalne končne točke (naslova, na katerega aplikacija pošilja zahteve). Še naprej obstaja tudi različica, ki jo upravlja Google in pri kateri je obdelovalec podatkov Google. Anthropic jo navaja kot primerno za stranke s strogimi zahtevami glede regije, v kateri se podatki hranijo.

**Kaj to pomeni za vas:** različica z Anthropicom dobi nove funkcije isti dan kot Anthropicova lastna platforma, različica z Googlom pa je po Anthropicovih navedbah prava izbira, če morajo podatki ostati v določeni regiji. Pred odločitvijo preverite, s kom boste sklenili pogodbo o obdelavi osebnih podatkov.

Vir: [Claude, Claude Models on Google Cloud (Anthropic managed)](https://claude.com/resources/articles/claude-models-on-google-cloud-anthropic-managed)

## 3. Mistral izdal Voxtral 3 za prepis in sintezo govora

Mistral je 20. oktobra izdal Voxtral 3, družino modelov za govor. Trije modeli pretvarjajo govor v besedilo, eden od njih sproti z zamikom pod pol sekunde, četrti pa besedilo pretvarja v govor. Prepis podpira 50 jezikov, med njimi vseh 24 uradnih jezikov EU, sinteza govora pa več kot 35 jezikov. Prepis stane od 0,0035 do 0,008 USD na minuto, sinteza govora 13 USD za milijon znakov, orodje za glasovne agente (programe, ki se z uporabnikom pogovarjajo po telefonu ali v aplikaciji) pa 0,04 ali 0,08 USD na minuto. Modeli so na voljo prek Mistralovega API-ja z evropsko, ameriško in globalno končno točko ali za namestitev na lastni infrastrukturi.

**Kaj to pomeni za vas:** ura posnetka sestanka z največjim modelom za prepis stane 0,24 USD. Z evropsko končno točko je Voxtral smiselno preizkusiti za prepise sestankov in klicev v slovenščini, kakovost prepisa pa preverite na svojih posnetkih, saj so objavljeni rezultati Mistralovi.

Vir: [Mistral, Voxtral 3](https://mistral.ai/news/voxtral-3/)

## 4. Mistral Large 4: javni predogled, uteži so zdaj objavljene

Mistral je 21. oktobra ob objavi sodelovanja z Nvidio pri AI za inženirsko načrtovanje (letalstvo, avtomobilska industrija in polprevodniki) opisal model Mistral Large 4, ki je bil takrat v javnem predogledu. Model ima približno bilijon parametrov, od katerih jih je dejavnih 49 milijard. Naučili so ga na 3.800 grafičnih procesorjih Nvidia Grace Blackwell v Mistralovih podatkovnih centrih v Evropi. Uteži je Mistral napovedal za konec oktobra in jih objavil 29. oktobra, kar je opisano v [pregledu #6](/novice/2026-10-30-tedenski-pregled-6/).

**Kaj to pomeni za vas:** razlika med skupnim in dejavnim številom parametrov je značilna za zasnovo mešanice strokovnjakov, pri kateri model za vsak odgovor uporabi le del sebe. Tak model je cenejši za delovanje, kot nakazuje njegova velikost, a za namestitev na lastnem strežniku bo kljub temu potrebna zelo zmogljiva oprema, zato bo večina podjetij uporabljala API.

Viri: [Mistral, Mistral Advances AI for Engineering with NVIDIA](https://mistral.ai/news/mistral-nvidia-ai-for-industrial-engineering/), [Mistral, Large 4 z odprtimi utežmi](https://mistral.ai/news/mistral-large-4-oss/)

## 5. Agent Skills gre pod okrilje Linux Foundation

Anthropic je 22. oktobra standard Agent Skills podaril fundaciji Agentic AI Foundation (AAIF), ki deluje pod okriljem Linux Foundation. Skill je mapa z navodili in po potrebi skriptami, ki jih AI agent uporabi pri določeni nalogi. Anthropic je standard objavil decembra 2025, po njegovih podatkih pa ga je vgradilo več kot 70 platform, med njimi ChatGPT, Cursor, GitHub Copilot in VS Code, objavljenih je milijon skillov s skoraj 280 milijoni namestitev. Standard bodo vzdrževali inženirji iz Anthropica, Googla, OpenAI in drugih podjetij, v načrtu pa so oštevilčene različice, formalen postopek za predloge sprememb in varnostna navodila za avtorje in uporabnike skillov. Fundaciji AAIF je Anthropic že prej podaril protokol MCP.

**Kaj to pomeni za vas:** skill, ki ga podjetje napiše za Claude, lahko deluje tudi v drugih orodjih, ki podpirajo standard, zato ga ob menjavi ponudnika ni treba pisati znova. Dokler varnostna navodila niso objavljena, določite, kdo v podjetju pregleda skille iz zunanjih virov, preden jih zaposleni namestijo.

Vir: [Anthropic, Donating Agent Skills to the Agentic AI Foundation](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation)

## 6. Claude Security zdaj stalno preverja kodo

Anthropic je 21. oktobra nadgradil Claude Security, storitev, v kateri Claude v programski kodi išče ranljivosti, torej napake, ki jih lahko izkoristi napadalec. Po začetnem poglobljenem pregledu Claude redno preverja spremembe kode, glede na njihovo tveganost in zapletenost. Najdbo zapre, ko je popravek vnesen v kodo, in jo samodejno znova odpre, če se ista težava vrne. Nova različica je v javnem preizkusu za stranke Claude Enterprise, vklopi jo skrbnik. Organizacije dva meseca prejmejo po 25.000 USD brezplačnega dobropisa na mesec, za porabo do 31. decembra 2026, po navedbah Anthropica pa je od aprila več tisoč organizacij s storitvijo našlo več kot milijon ranljivosti.

**Kaj to pomeni za vas:** novica je zanimiva za podjetja, ki razvijajo lastno programsko opremo in že imajo Claude Enterprise. Z dobropisom lahko storitev do konca leta preizkusijo na svojih repozitorijih in primerjajo najdbe z obstoječimi varnostnimi orodji.

Vir: [Claude, Claude Security now scans continuously and tracks fixes](https://claude.com/resources/articles/claude-security-now-scans-continuously-and-tracks-fixes)

## 7. EU projekt LLM-BRIDGE išče podjetja z generativno AI

Ministrstvo za notranje zadeve in javno upravo je 22. oktobra opozorilo na razpise evropskega projekta LLM-BRIDGE, ki ga koordinira konzorcij za jezikovne tehnologije ALT-EDIC in sofinancira EU iz programa Digitalna Evropa. V 14-tedenski pospeševalni program bo izbranih 16 podjetij, ki imajo za trg pripravljene rešitve generativne AI ali jezikovnih tehnologij (stopnja tehnološke zrelosti TRL 8 do 9), rok za prijavo je 18. novembra 2026 ob 17.00. Po strani projekta program ponuja svetovanje, dostop do evropskih superračunalnikov ter pomoč pri regulativi in pripravi na naložbo, denarnih sredstev pa ne omenja. Ena podporna organizacija bo izbrana za izvedbo 12-tedenskega inkubacijskega programa za zgodnje zagonske projekte, z rokom 28. novembra 2026 ob 17.00 in do 60.000 EUR sredstev, informativni spletni seminar za ta razpis pa bo 3. novembra 2026 ob 11.00. Prijavijo se lahko organizacije iz držav EU in držav, pridruženih programu Digitalna Evropa.

**Kaj to pomeni za vas:** slovensko podjetje z delujočim izdelkom na področju generativne AI ali obdelave jezika se lahko prijavi v pospeševalni program, ki je brezplačen, a zahteva čas vsaj enega od ustanoviteljev. Rok je 18. novembra 2026.

Viri: [gov.si, Nove priložnosti za podjetja in podporne organizacije na področju generativne umetne inteligence](https://www.gov.si/novice/2026-10-22-nove-priloznosti-za-podjetja-in-podporne-organizacije-na-podrocju-generativne-umetne-inteligence/), [LLM-BRIDGE, pospeševalni program](https://www.llm-bridge.eu/open-call-acceleration-programme-1st-cohort/), [LLM-BRIDGE, inkubacijski program](https://www.llm-bridge.eu/open-call-for-incubator-2nd-cohort/)

Naslednji pregled izide v petek, 6. novembra.
