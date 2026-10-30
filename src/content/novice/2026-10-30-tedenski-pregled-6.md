---
title: 'Tedenski pregled #6: Mistral Large 4 z odprtimi utežmi, Genie 4, poročila o rabi Claude in GPT-6.1 Terra'
description: 'Mistral je odprl uteži modela Large 4, Google je predstavil Genie 4, Claude Enterprise dobi poročila o rabi, OpenAI pa model GPT-6.1 Terra. Za Slovenijo: prijave na sejem AdoptAI do 9. novembra.'
date: 2026-10-30
type: tedenski-pregled
period: '24. do 30. oktober 2026'
---

V šestem tedenskem pregledu so odprti model Mistral Large 4, Googlov model za simulacijo svetov Genie 4, nova poročila o rabi Clauda za podjetja, OpenAI-jev model GPT-6.1 Terra in brezplačni krediti za API, Microsoftov diagnostični sistem ter prijave za slovensko delegacijo na pariškem sejmu AdoptAI.

> **Na kratko:** Mistral je javno objavil uteži (datoteke z naučenim modelom, ki jih lahko podjetje namesti na lastne strežnike) modela s 1.000 milijardami parametrov, Anthropic pa je skrbnikom Claude Enterprise dal poročila o tem, kako ekipe uporabljajo Claude. Za podjetje, ki AI že uporablja, je to teden, ko se splača vprašati, kaj se je v resnici spremenilo pri delu, ne le kateri model je na voljo.

## 1. Mistral je objavil uteži modela Large 4

Mistral je 29. oktobra odprl uteži modela Large 4, ki ga imenuje tudi Le Chonk. Gre za večmodalen model (obdeluje več vrst vsebin) s 1.000 milijardami parametrov. Podpira več kot 160 jezikov in ima tri stopnje razmišljanja: nizko, srednjo in visoko. Uteži so na voljo na Hugging Face, model pa je tudi v Mistralovem API-ju (programskem vmesniku za povezavo lastnih aplikacij z modelom) po ceni 0,70 USD za milijon vhodnih in 2,10 USD za milijon izhodnih tokenov. Licenca je prilagojena različica MIT: podjetje, ki model kot storitev ponuja drugim, potrebuje posebno komercialno licenco.

**Kaj to pomeni za vas:** če podatkov ne smete pošiljati zunanjemu ponudniku, lahko model poganjate na lastni infrastrukturi, a pri tolikšni velikosti to verjetno zahteva zelo zmogljivo strojno opremo. Za večino manjših podjetij je bolj smiseln API s cenami iz tega odstavka.

Viri: [Mistral, Large 4 z odprtimi utežmi](https://mistral.ai/news/mistral-large-4-oss/), [TechCrunch, 29. oktober](https://techcrunch.com/2026/10/29/mistral-releases-weights-for-its-trillion-parameter-ai-model-targeting-cybersecurity/)

## 2. Google je predstavil Genie 4

Google DeepMind je 27. oktobra predstavil Genie 4, model, ki v realnem času ustvarja interaktivna okolja, v katerih se lahko uporabnik giblje. Po navedbah podjetja je to njegov prvi tak model, ki zvok ustvarja izvorno, torej sam. Okolja so skladna le v kratkih sejah, pri daljših se podrobnosti začnejo spreminjati. Ustvarjen video in zvok bosta imela nevidni vodni žig SynthID. Model je za zdaj raziskovalni predogled za izbrane preizkuševalce, pozneje bo na voljo naročnikom Google AI Ultra v aplikaciji Project Genie ter izbranim partnerjem v Gemini API in Google AI Studio. Cena ni objavljena.

**Kaj to pomeni za vas:** za večino podjetij je to za zdaj raziskovalna novica. Uporabnejša bo, ko bo na voljo prek Gemini API, na primer za izobraževalne simulacije ali predstavitve izdelkov.

Vir: [Google DeepMind, Genie 4](https://deepmind.google/blog/genie-4-a-new-generation-of-world-simulation/)

## 3. Claude Enterprise dobi pametna poročila, ankete in skupne proračune

Anthropic je 28. oktobra za naročnike paketa Claude Enterprise splošno omogočil tri novosti. Pametna poročila analizirajo vzorec pogovorov izbrane ekipe, delo razvrstijo v tokove, pokažejo porabo, izdelke in ovire (na primer manjkajoč konektor) ter predlagajo, katera ponavljajoča se opravila bi bilo vredno spremeniti v skill, torej shranjena navodila za Claude. Anthropic izrecno navaja, da poročila niso namenjena ocenjevanju posameznikov. Ankete v aplikaciji privzeto vsebujejo štiri vprašanja: kaj je bilo s Claudom nedavno najbolj dragoceno, kako je Claude spremenil čas dela, katero rabo naj sodelavec kopira in kaj bi se ustavilo, če bi dostop izgubili; skrbnik lahko vprašanja, prejemnike in čas prilagodi. Skupni proračuni skupini dajo en mesečni znesek poleg osebnih omejitev, član pa se ustavi pri tistem, ki ga prej porabi.

**Kaj to pomeni za vas:** tudi če Enterprise ni vaš paket, so štiri privzeta vprašanja ankete dober vzorec za lastno merjenje uvajanja AI po nekaj tednih rabe.

Vir: [Claude, Smart reports, surveys, and pooled group budgets](https://claude.com/resources/articles/smart-reports-surveys-pooled-budgets)

## 4. OpenAI: model GPT-6.1 Terra in do 500 USD kreditov za API

OpenAI je 26. oktobra v API dodal model gpt-6.1-terra, ki ga v dnevniku sprememb opisuje kot hiter in učinkovit model za vizualno sklepanje, natančno upravljanje računalnika in naravno pisanje. Cena v dnevniku ni navedena. Dva dni pozneje je objavil, da lahko upravičeni naročniki ChatGPT Pro in Business zahtevajo do 500 USD brezplačnih kreditov za API na mesec. Zahtevajo jih v ChatGPT ali na platformi API, tako da povežejo organizacijo API, katere lastniki so.

**Kaj to pomeni za vas:** če imate paket ChatGPT Business, preverite, ali ste upravičeni do kreditov: z njimi lahko brez dodatnega stroška preizkusite lastno povezavo z modelom prek API-ja. Za GPT-6.1 Terra cen še ni, zato primerjava s starejšimi modeli za zdaj ni mogoča.

Vir: [OpenAI, dnevnik sprememb za razvijalce](https://developers.openai.com/changelog)

## 5. Microsoftov sistem MAI-DxO pri diagnozah prekaša zdravnike

N1 poroča, da je bila v reviji Science objavljena študija o Microsoftovem diagnostičnem sistemu MAI-DxO. Sistem simulira skupino kliničnih strokovnjakov in sproti posodablja hipoteze. Pri najtežjih primerih je bil več kot dvakrat natančnejši od splošnih zdravnikov, ki so smeli uporabljati učbenike in internet, ter skoraj štirikrat natančnejši od zdravnikov brez pripomočkov. Testirali so ga na več kot 300 nenavadnih in zapletenih primerih. Zaradi manj preiskav naj bi bili stroški po navedbah agencije Reuters za približno polovico do dve tretjini nižji. Raziskovalci naslednje načrtujejo preizkus triaže na urgenci.

**Kaj to pomeni za vas:** gre za raziskavo, ne za izdelek, ki bi bil na voljo v zdravstvu. Za podjetja je poučen vzorec: več sodelujočih vlog, ki preverjajo druga drugo, je dalo boljše rezultate kot en sam odgovor.

Vir: [N1, Microsoftova umetna inteligenca pri diagnozah prekaša zdravnike](https://n1info.si/magazin/digitalno/microsoftova-umetna-inteligenca-pri-diagnozah-prekasa-zdravnike-kaze-studija/)

## 6. KCUI zbira prijave za slovensko delegacijo na sejmu AdoptAI v Parizu

Kompetenčni center za umetno inteligenco (KCUI) pri GZS organizira slovensko gospodarsko delegacijo na sejmu AdoptAI, ki bo 3. in 4. decembra 2026 v Grand Palais v Parizu. Prijave so odprte do 9. novembra za podjetja, raziskovalne in druge organizacije, prejšnje sodelovanje s KCUI ni pogoj. Izbrani dobijo skupni slovenski razstavni prostor, možnost 15-minutne predstavitve in 5-minutnega pitcha (kratke predstavitve ideje) ter eno brezplačno vstopnico na organizacijo (skupaj približno 50 vstopnic). Brezplačen odstop je mogoč do 20. novembra, nato stane 200 EUR brez DDV. Potne stroške in nastanitev krijejo udeleženci, mikro, mala in srednja podjetja pa lahko zaprosijo za vavčer SPS, ki krije do 60 % upravičenih stroškov, v znesku od 300 do 2.000 EUR na udeleženca. Za vavčer je potrebna ločena vloga.

**Kaj to pomeni za vas:** če iščete mednarodne stike za AI izdelek ali storitev, je rok kratek. Najprej preverite pogoje vavčerja SPS, saj ti odločajo o dejanskem strošku.

Vir: [KCUI, AdoptAI 2026](https://kcui.si/adoptai-2026)

Naslednji pregled izide v petek, 6. novembra.
