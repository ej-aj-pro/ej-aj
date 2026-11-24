---
title: 'Tedenski pregled #7: Gemini Omni 1.2 Flash, GPT Image 2.6, Mistral Studio in samodejna povezava aplikacij v Claude'
description: 'Google je pocenil ustvarjanje videa z Gemini Omni 1.2 Flash, OpenAI je izdal GPT Image 2.6, Mistral je razširil Studio, Claude pa članom sam poveže aplikacije. Uber: agenti skoraj brez naročil.'
date: 2026-11-06
type: tedenski-pregled
period: '31. oktober do 6. november 2026'
---

V sedmem tedenskem pregledu so novi modeli za video in slike, platforma Mistral Studio, novosti za skrbnike Claude, študija o rabi Clauda v raziskavah, skupna zbirka skillov v Figmi, Uberjeve številke o naročilih prek agentov, orodjarna EU za javno upravo ter ljubljanska okrogla miza o AI v policiji.

> **Na kratko:** Uber je v najbolj zasedenem tednu oktobra prek AI agentov dobil štiri naročila vožnje in 500 naročil hrane, od približno 320 milijonov vseh. Vožnjo v aplikaciji naročite povprečno v 50 sekundah, zato agent tam verjetno ne prihrani veliko časa. Isto vprašanje si je vredno zastaviti pri vsakem agentu, ki ga načrtujete.

## 1. Google: Gemini Omni 1.2 Flash ustvari do 15 sekund videa

Google je 5. novembra izdal Gemini Omni 1.2 Flash, model za ustvarjanje in urejanje videa. Posnetek je lahko dolg do 15 sekund (pri različici 1.1 je bil do 10), urejate pa ga lahko v pogovoru, z več zaporednimi navodili. V API-ju (programskem vmesniku za povezavo lastnih aplikacij z modelom) stane 0,07 USD na sekundo videa v ločljivosti 720p, kar je 30 % manj kot Omni 1.1. Model je na voljo tudi v Google Vids, kjer 15-sekundni posnetki ne stanejo nič dodatno, v Google Ads in Flow, v aplikaciji Gemini pa se postopno uvaja za naročnike Google AI Ultra. Od 3. decembra bo Google zahteve za Omni 1.1 Flash samodejno preusmeril na novi model in jih obračunal po njegovih cenah.

**Kaj to pomeni za vas:** če že plačujete Google Workspace, kratke predstavitvene posnetke preizkusite v Google Vids. Če Omni 1.1 uporabljate prek API-ja, pred 3. decembrom preverite, kako preusmeritev vpliva na vaš strošek.

Viri: [Google, Gemini Omni 1.2 Flash](https://blog.google/innovation-and-ai/technology/developers-tools/introducing-gemini-omni-1-2-flash/), [Google, dnevnik sprememb Gemini API](https://aistudio.google.com/docs/changelog)

## 2. OpenAI: slikovna modela GPT Image 2.6 in GPT-6-Cyber za varnostne preglede

OpenAI je 4. novembra v API dodal slikovna modela gpt-image-2.6-sunburst in gpt-image-2.6-flare. Modela ustvarjata in urejata slike, z nastavljivo zapletenostjo ter izdelavo vektorskih grafik SVG in animiranih GIF-ov. Dan pozneje je objavil še model gpt-6-cyber, namenjen raziskovanju ranljivosti, njihovi ponovitvi v pooblaščenem testnem okolju in preverjanju popravkov. Za uporabo potrebuje organizacija odobren dostop Daybreak Red.

**Kaj to pomeni za vas:** SVG in GIF sta uporabna za ikone, sheme in preproste animacije na spletni strani, saj SVG lahko pozneje urejate v grafičnem programu. GPT-6-Cyber je namenjen varnostnim ekipam, ki dobijo odobritev, ne splošni pisarniški rabi.

Viri: [OpenAI, dnevnik sprememb za razvijalce](https://developers.openai.com/changelog), [OpenAI, model GPT-6-Cyber](https://developers.openai.com/api/docs/models/gpt-6-cyber)

## 3. Mistral razširil Studio za gradnjo agentov v lastnem okolju

Mistral je 5. novembra predstavil novosti v Studiu, platformi za gradnjo in poganjanje agentov (programov, ki z modelom sami izvajajo več korakov) in delovnih tokov, povezanih s podatki in sistemi podjetja. Novi ali razširjeni so upravljani agenti, delovni tokovi, ki se po prekinitvi nadaljujejo, gostovane aplikacije z nadzorom dostopa ter spremljanje in ocenjevanje agentov. Studio teče v oblaku, v zasebnem oblaku stranke, na lastnih strežnikih ali v kombinaciji teh možnosti. Med strankami in partnerji, ki Studio že uporabljajo v produkciji, Mistral navaja ABANCA, BNP Paribas, Accenture, Capgemini in Tata Consultancy Services. V objavi cen ni.

**Kaj to pomeni za vas:** če podatki ne smejo iz vašega okolja, je to ena od evropskih možnosti, ki jih je vredno primerjati. Cene zasebnih postavitev Mistral sporoča na povpraševanje.

Viri: [Mistral, Le Chonk brings the brains. Studio puts it to work.](https://mistral.ai/news/build-with-studio/), [Mistral, cene](https://mistral.ai/pricing)

## 4. Claude članom sam poveže aplikacije podjetja, Enterprise dobi varnostni center

Anthropic je za pakete Team in Enterprise opisal samodejno povezavo aplikacij: skrbnik konektor (povezavo Clauda z zunanjim orodjem) odobri enkrat, člani pa ga dobijo ob prvi prijavi. Deluje prek enotne prijave (SSO), novi način v beti pa pri podprtih konektorjih deluje brez nje: Claude sam potrdi, da je uporabnik član organizacije, konektor pa ga prepozna po e-naslovu. Kdor odide iz organizacije, se pri novem načinu ne more več prijaviti prek Clauda, že odobren dostop pa velja do izteka in ga je treba v povezani storitvi odstraniti posebej. Za paket Enterprise je Anthropic 5. novembra objavil še varnostni center, ki nastavitve organizacije primerja s priporočenimi (v beti), in prenos pozivov ter klicev orodij v varnostna orodja podjetja v preverjanje (splošno na voljo).

**Kaj to pomeni za vas:** če imate Team ali Enterprise, preverite, ali vaša orodja to že podpirajo, saj odpade prijavljanje vsakega zaposlenega posebej. Odstranjevanje iz povezanih storitev dodajte na seznam opravil ob odhodu zaposlenega, še preden e-naslov dobi kdo drug.

Viri: [Claude, Auto-connect your organization's apps](https://support.claude.com/en/articles/15537633-auto-connect-your-organization-s-apps-to-claude), [Claude, More visibility and control over Claude Enterprise](https://claude.com/resources/articles/claude-enterprise-security-updates)

## 5. Anthropic: raziskovalci Claude največ uporabljajo za analizo podatkov

Ekonomska ekipa Anthropica je 5. novembra objavila študijo 207.000 raziskovalnih sej v Claudu in Claude Code na potrošniških paketih ter anketo med 528 raziskovalci, večinoma iz ved o življenju in zdravju in že aktivnimi uporabniki AI. Analiza podatkov je približno tretjina sej v Claudu in skoraj polovica v Claude Code. Iskanje idej in zbiranje podatkov raziskovalci uvrščajo med najpomembnejša opravila, a ju z AI opravljajo redkeje. Po scenarijskem modelu avtorjev bi široka raba današnjih zmožnosti v nekaterih področjih lahko podvojila raziskovalne rezultate. Približno 40 % anketiranih pričakuje, da bo AI do leta 2030 sam izvajal celotne raziskovalne projekte.

**Kaj to pomeni za vas:** študija je delo ponudnika modela, napovedi zato berite kot scenarij. Uporaben je vzorec: če razvojna ali analitska ekipa AI uporablja samo za analizo, preizkusite še iskanje idej in zbiranje podatkov.

Vir: [Anthropic, AI for scientific discovery](https://www.anthropic.com/research/how-researchers-use-claude)

## 6. Figma: en skupni repozitorij z 31 skilli za produktne vodje

V epizodi podkasta How I AI z 2. novembra je produktni vodja Ezra Mechaber predstavil PM OS, ki ga uporabljajo v Figmi. To ni izdelek, ampak skupni repozitorij (mapa z zgodovino sprememb) z 31 skilli, torej shranjenimi navodili za Claude Code, ki ga po navedbah na strani uporablja več kot 60 produktnih vodij. Nastal je iz Mechaberjeve osebne nastavitve, pri njem pa je sodelovalo še nekaj drugih produktnih vodij. Sestavljajo ga skilli, hooki (samodejna opravila ob določenih dogodkih) in zasebni podrepozitoriji. Med primeri je skill za obvladovanje Slacka, ki ga Mechaber poganja šestkrat na dan.

**Kaj to pomeni za vas:** pri uvajanju AI v ekipo lahko začnete z nastavitvijo enega človeka, ki že dobro deluje, in jo razširite. Vnaprej se dogovorite, kaj je skupno in kaj ostane osebno.

Vir: [Lenny's Newsletter, How Figma's PMs actually use AI every day](https://www.lennysnewsletter.com/p/how-figmas-pms-actually-use-ai-every)

## 7. Uber: prek AI agentov štiri vožnje v tednu z 320 milijoni naročil

TechCrunch 4. novembra poroča s predstavitve Uberjevih četrtletnih rezultatov. V najbolj zasedenem tednu oktobra so bile prek AI agenta naročene štiri vožnje in 500 naročil Uber Eats, od približno 320 milijonov voženj in naročil skupaj. Izvršni direktor Dara Khosrowshahi je odziv opisal kot zelo zgoden in zelo omejen. Povedal je, da vožnjo v aplikaciji naročite povprečno v 50 sekundah, ponovno naročilo hrane pa v 90 sekundah.

**Kaj to pomeni za vas:** preden načrtujete agenta za stranke ali zaposlene, izmerite, koliko časa postopek traja danes. Kjer traja manj kot minuto, mora agent prihraniti več, kot stane njegova nastavitev in preverjanje rezultata.

Vir: [TechCrunch, Almost no one uses AI agents to book their Uber](https://techcrunch.com/2026/11/04/almost-no-one-uses-ai-agents-to-book-their-uber-company-says/)

## 8. EU: orodjarna AI za javno upravo in konzorcij za AI v šolah

Portal Interoperable Europe je 4. novembra predstavil orodjarno za uvajanje AI v javni upravi, ki podpira strategijo Apply AI Evropske komisije. Zajema štiri področja: standarde in orodja, primere uporabe iz evropskih uprav, znanja in usposabljanje ter pravne in naročniške smernice. Med vsebinami sta OpenForm za izpolnjevanje obrazcev in F13, besedilni pomočnik uprave dežele Baden-Württemberg. Komisija je 3. novembra na prošnjo osmih držav članic ustanovila še konzorcij EDU-EDIC, ki bo združeval sredstva za zaupanja vredne AI in digitalne storitve v šolah.

**Kaj to pomeni za vas:** če delate v javni upravi ali ji prodajate, so primeri in naročniške smernice dobro izhodišče. Več o tej temi je v vodniku [AI v javni upravi](/vodniki/ai-v-javni-upravi/).

Viri: [Interoperable Europe, AI toolbox](https://interoperable-europe.ec.europa.eu/interoperable-europe/news/ai-toolbox-support-public-administrations-adopting-ai), [Evropska komisija, paket za izobraževanje in znanja](https://digital-strategy.ec.europa.eu/en/news/commission-launches-education-and-skills-package-tackle-declining-basic-skills-rapid-digital-change)

## 9. Ljubljana: okrogla miza o AI pri pregonu kaznivih dejanj

N1 poroča o okrogli mizi na drugem Krimifestu v Ljubljani (3. do 8. november), ki jo je vodil Aleš Završnik z Inštituta za kriminologijo, sodelovali pa so Lora Briški s Pravne fakultete UL, Maja Modic s Fakultete za varnostne vede UM in dekan FRI UL Danijel Skočaj. N1 navaja, da lahko zgodovinski policijski podatki popačijo napovedovanje kaznivih dejanj, Akt o umetni inteligenci pa prepoveduje napovedovanje kaznivih dejanj posameznikov, ki temelji izključno na profiliranju ali oceni osebnostnih lastnosti. Skočaj je podprl človeški nadzor, pri katerem odgovornost ostane pri človeku. Modic je za N1 povedala, da je zaupanje v AI v policiji po njeni oceni srednje ali celo nizko in da so nekatere programe opustili zaradi prepovedi, nizke napovedne vrednosti ali neekonomičnosti.

**Kaj to pomeni za vas:** enaka past velja zunaj policije. Če AI v podjetju presoja ljudi, na primer pri zaposlovanju, najprej preverite, kakšne odločitve iz preteklosti so v njegovih učnih podatkih.

Vir: [N1, Lahko umetna inteligenca napove zločin?](https://n1info.si/novice/slovenija/lahko-umetna-inteligenca-napove-zlocin-strokovnjaki-opozarjajo-na-nevarne-pasti/)

Naslednji pregled izide v petek, 13. novembra.
