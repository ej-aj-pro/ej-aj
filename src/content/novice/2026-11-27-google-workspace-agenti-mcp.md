---
title: 'Google Workspace in AI agenti: kaj se spremeni 1. februarja 2027 in kaj naj preveri skrbnik'
description: 'Agenti bodo do Gmaila, Drive in koledarja v Google Workspace dostopali prek MCP strežnikov. Kaj to pomeni za slovenska podjetja, katere nastavitve so nove in kdaj se začne plačevanje.'
date: 2026-11-27
type: clanek
motiv: varnost
---

Google je 24. novembra spremenil pravila, po katerih AI agenti dostopajo do podatkov v Google Workspace. Agent je program z umetno inteligenco, ki nalogo opravi v več korakih in pri tem sam uporablja orodja, na primer prebere e-pošto, pripravi odgovor in ga shrani kot osnutek. Od 1. februarja 2027 bodo morali taki agenti do Gmaila, Drive, koledarja in drugih aplikacij dostopati prek Googlovih strežnikov MCP ali orodja Workspace CLI. Skrbnik Workspace pa dobi nove nastavitve, s katerimi določi, kaj sme agent narediti sam in kdaj mora vprašati človeka.

> **Na kratko:** če v podjetju ne uporabljate nobenega AI agenta, ki bi bil povezan z Gmailom ali Drive, se za vas ne spremeni nič. Če ga uporabljate ali vam ga je postavil zunanji izvajalec, ga do januarja vprašajte, ali povezava teče prek novih strežnikov MCP. Skrbnik naj v konzoli za skrbnike pregleda nove nastavitve za agente, ki jih Google uvaja v približno dveh tednih od 24. novembra.

## Kaj je Google objavil

MCP (Model Context Protocol) je odprt standard, prek katerega AI orodja dostopajo do drugih programov. Namesto da bi vsak ponudnik agenta pisal svojo povezavo do Gmaila, Google zdaj ponuja svoje strežnike MCP, ki so splošno dostopni. Pokrivajo Gmail, Drive, Docs, Sheets, Slides, Calendar, Chat in Tasks. Za Keep Google piše, da prihaja. Za Classroom in iskanje po vseh aplikacijah Workspace sta strežnika šele v predogledu za razvijalce.

Za agente, ki tečejo v ukazni vrstici računalnika (na primer Claude Code ali Codex), je Google izdal še uradno orodje Workspace CLI (`gwscli`). Uporaba orodja po Googlovih navedbah nima ločene cene, zahteve pa se štejejo v raven porabe in omejitve projekta Google Cloud, prek katerega orodje deluje.

Google med programi, ki se lahko povežejo s strežniki MCP, posebej opiše svoje orodje Antigravity in Claude, povezati pa se da tudi drug program, ki podpira MCP. Za Claude navaja, da je oddaljeni strežnik MCP mogoče dodati v paketih Pro, Max, Team in Enterprise, v nastavitvah pod Konektorji kot konektor po meri. Cene teh paketov so v [primerjavi naročnin Claude](/cene/claude/).

Viri: [Google Workspace Updates, MCP servers, CLI, standardized usage tiers now available](http://workspaceupdates.googleblog.com/2026/11/mcp-servers-cli-standardized-usage-tiers-now-available.html), [Google for Developers, Configure the Google Workspace MCP servers](https://developers.google.com/workspace/guides/configure-mcp-servers), [Google for Developers, Workspace CLI](https://developers.google.com/workspace/guides/workspace-cli)

## Kaj se zgodi 1. februarja 2027

Google piše, da morajo AI agenti in podobna orodja za dostop do podatkov Workspace uporabljati strežnike MCP ali Workspace CLI, ne pa neposrednih klicev API (programskega vmesnika, prek katerega programi med seboj izmenjujejo podatke). Tehnično bo to začel uveljavljati 1. februarja 2027. Na strani za razvijalce je natančneje zapisano, kaj to pomeni v praksi: agent, ki bo še naprej klical API neposredno, bo omejen na najnižjo, brezplačno raven porabe, ne glede na to, katero raven je izbral njegov razvijalec. Na isti dan začne veljati tudi nov dodatek k pogodbenim pogojem za AI orodja, ki med drugim prepoveduje dolgotrajno shranjevanje nekaterih podatkov, pridobljenih prek API Workspace, in strganje podatkov z agenti.

Google ne piše, kaj šteje za "podobno orodje". Navadne povezave brez umetne inteligence, kot so sinhronizacija koledarja ali izvoz računov iz knjigovodskega programa, v objavi niso omenjene. Zapier in ChatGPT tudi ne.

Viri: [Google Workspace Updates](http://workspaceupdates.googleblog.com/2026/11/mcp-servers-cli-standardized-usage-tiers-now-available.html), [Google for Developers, Workspace tools safety](https://developers.google.com/workspace/tools-safety)

## Nove nastavitve za skrbnika

Nastavitve za agente so v konzoli za skrbnike pod Agenti, Nastavitve (Menu > Agents > Settings), dostop aplikacij pa pod Varnost, Nadzor dostopa in podatkov, Nadzor API (Security > Access and data control > API controls). Google večino novosti uvaja v približno dveh tednih od 24. novembra. Spremembe nastavitev začnejo veljati v največ 24 urah, običajno prej. Pravila veljajo samo za zunanje agente, ki do Workspace dostopajo prek Googlovih strežnikov MCP ali orodja Workspace CLI in se prijavijo z računom uporabnika (prek OAuth, standardnega načina, s katerim program dobi dovoljenje za dostop do vašega računa). Za običajne povezave aplikacij ne veljajo.

Skrbnik za štiri vrste dejanj izbere, ali agent dejanje sme opraviti, mora prej vprašati uporabnika ali ga ne sme:

| Vrsta dejanja | Privzeta nastavitev |
|---|---|
| Sodelovanje z zunanjimi osebami (na primer pošiljanje e-pošte strankam) | zahtevaj potrditev uporabnika |
| Sodelovanje znotraj podjetja | zahtevaj potrditev uporabnika |
| Dostop do zunanjih podatkov | zahtevaj potrditev uporabnika |
| Dostop do podatkov znotraj podjetja | dovoli |

Nekaj pravil velja ne glede na nastavitve. Dejanja, ki zadevajo samo prijavljenega uporabnika, na primer osnutek e-pošte, agent opravi brez vprašanja. Premik v koš vedno zahteva potrditev. Trajno brisanje zunanjim agentom ni dovoljeno. Če skrbnik to dopusti, lahko uporabnik izbere "vedno dovoli". Ta odobritev po 90 dneh poteče, pregledati ali preklicati pa je uporabnik ne more.

Za agente veljajo tudi obstoječa pravila za preprečevanje uhajanja podatkov (DLP), zaščita občutljivih osebnih podatkov pa je za agente privzeto vklopljena. V dnevniku revizije so dejanja agentov označena z oznakami "By an agent", "Agent ID" in "User approved", tako da skrbnik vidi, kaj je naredil agent in kaj je potrdil človek.

Viri: [Google Workspace Admin Help, Control which apps access Google Workspace data](https://knowledge.workspace.google.com/admin/apps/control-which-apps-access-google-workspace-data), [Google for Developers, Configure the Google Workspace MCP servers](https://developers.google.com/workspace/guides/configure-mcp-servers)

## Koliko stane

Google je uvedel dve ravni porabe za projekte, ki dostopajo do Workspace. Raven Standard je brezplačna in ima objavljene omejitve: za strežnike MCP 5.000 zahtev na dan, za vsak projekt in vsako aplikacijo posebej. Nekatera orodja MCP štejejo kot več zahtev. Raven Scaled je za projekte, ki potrebujejo več, in jo bo Google za Gmail, Calendar in Drive začel zaračunavati 1. aprila 2027. Pri strežnikih MCP na ravni Scaled po strani za razvijalce ni brezplačne dnevne količine, plača se od prve zahteve. Cen na enoto v objavi ni.

Google pričakuje, da bo raven Standard presegel manj kot 1 % aktivnih razvijalcev Workspace. Projekt z višjimi omejitvami, za katerega do 1. aprila 2027 nihče ne izbere ravni, se samodejno vrne na omejitve ravni Standard. Glavni skrbnik lahko projekt, ki ga podjetje uporablja samo interno in ga ne deli z zunanjimi ponudniki, označi kot internega. To zviša omejitve za neposredne klice API, za strežnike MCP pa ne.

Vir: [Google for Developers, Workspace tools safety](https://developers.google.com/workspace/tools-safety)

## Kaj to pomeni za slovenska podjetja

Večina majhnih podjetij na Google Workspace uporablja Gmail, Drive in koledar brez agentov. Zanje ta sprememba nima posledic, razen da je dobro, če skrbnik ve za nove nastavitve, preden kdo v podjetju poveže prvega agenta.

Drugače je, če vam je zunanji izvajalec postavil avtomatizacijo z umetno inteligenco, ki bere ali piše e-pošto, ureja dokumente na Drive ali vpisuje sestanke. Take rešitve so pogosto narejene z neposrednimi klici API. Izvajalca vprašajte tri stvari: ali vaša rešitev šteje kot agent, ali bo do 1. februarja prešla na strežnike MCP in ali ji bo dovolj brezplačna raven Standard. Dogovorite se tudi, kdo bo plačal Googlu, če bo rešitev od 1. aprila 2027 potrebovala raven Scaled.

Agent prek strežnika MCP dostopa do istih podatkov kot prej, zato še naprej velja vse, kar ste zapisali v [pravilih za varno rabo AI v podjetju](/vodniki/varna-raba-ai-v-podjetju/). Novi so dodatek k pogodbenim pogojem za AI orodja, ravni porabe in možnost, da skrbnik vidi in omeji, kaj agent naredi.

**Kaj to pomeni za vas:** po našem mnenju je za večino podjetij najbolj uporabna nova nastavitev potrditve za sodelovanje z zunanjimi osebami. Privzeto je vklopljena, zato agent, povezan prek strežnikov MCP ali CLI, pred pošiljanjem pošte stranki vpraša za potrditev, razen če je uporabnik izbral "vedno dovoli". Če želite potrditev vsakič, naj skrbnik odkljuka možnost "Except when user always allows". Tako naj ostane vsaj, dokler agenta ne preizkusite na lastnih nalogah.
