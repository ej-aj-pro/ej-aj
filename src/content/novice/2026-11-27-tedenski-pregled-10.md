---
title: 'Tedenski pregled #10: MCP strežniki za Google Workspace, skilli v konektorjih, artefakti kot aplikacije in GPT-6.2 v ChatGPT'
description: 'Google bo agente v Workspace usmeril prek MCP strežnikov, Claude konektorji dobijo skille, artefakte lahko namestite kot aplikacije, ChatGPT dobi GPT-6.2.'
date: 2026-11-27
type: tedenski-pregled
period: '21. do 27. november 2026'
---

V desetem tedenskem pregledu so nova pravila za dostop agentov do Google Workspace, tri Anthropicove novosti (skilli v konektorjih, artefakti kot namizne aplikacije in Claude Ship za razvojne ekipe), GPT-6.2 v klepetu ChatGPT, delno branje datotek v Gemini API, Anthropicov opis prepisa lastnega API-ja s pomočjo Clauda in delavnica Urada EU za AI.

> **Na kratko:** ta teden je šlo predvsem za nadzor nad agenti. Google bo od 1. februarja 2027 zahteval, da agenti do Gmaila, Drive in drugih aplikacij Workspace dostopajo prek njegovih MCP strežnikov ali ukaznega orodja CLI, kjer skrbnik vidi dnevnik njihovih dejanj in lahko zahteva človeško potrditev. Pri Anthropicu se lahko konektor v paketih Pro, Max in Ultra med delom ustavi in vas vpraša za potrditev, na primer pred brisanjem.

## 1. Google: agenti bodo do Workspace dostopali prek MCP strežnikov

Google je 24. novembra splošno dostopne naredil MCP strežnike za Google Workspace (MCP je odprt standard, prek katerega AI orodja dostopajo do drugih programov) in uradno ukazno orodje Workspace CLI. Strežniki pokrivajo Gmail, Drive, Docs, Sheets, Slides, Calendar, Chat in Tasks, Keep je v načrtu. Agenti AI bodo morali namesto neposrednih klicev API-jev uporabljati te strežnike ali CLI, tehnično pa bo Google to uveljavil od 1. februarja 2027. Skrbniki bodo v nastavitvah, ki jih Google uvaja v naslednjih dveh tednih, lahko zahtevali človeško potrditev za izbrana dejanja agentov in pregledovali dnevnik dejanj agentov, za agente pa veljajo tudi obstoječa pravila za preprečevanje uhajanja podatkov (DLP). Google uvaja še dva razreda porabe API-ja, brezplačni Standard in Scaled z višjimi omejitvami, ki ga bo za Gmail, Calendar in Drive začel zaračunavati 1. aprila 2027, a le nad dnevno brezplačno količino.

**Kaj to pomeni za vas:** če uporabljate Google Workspace in vam je kdo povezal AI agenta z Gmailom ali Drive, ga do januarja vprašajte, ali povezava že teče prek novih strežnikov. Skrbnik naj si ogleda nove nastavitve za potrditve in dnevnik agentov.

Vir: [Google Workspace Updates, MCP servers, CLI, standardized usage tiers now available](http://workspaceupdates.googleblog.com/2026/11/mcp-servers-cli-standardized-usage-tiers-now-available.html)

Podrobneje: [Google Workspace in AI agenti: kaj se spremeni 1. februarja 2027](/novice/2026-11-27-google-workspace-agenti-mcp/)

## 2. Konektorji v Claudu lahko prinesejo svoje skille

Anthropic je 24. novembra objavil, da lahko MCP strežniki, na katerih temeljijo Claudovi konektorji, poleg orodij objavijo tudi skille, torej zapisana navodila, kako orodja uporabljati. Claude skill naloži šele, ko ga potrebuje, posodobi pa se skupaj s strežnikom. Funkcija je v javni preizkusni različici (beta) v Claudu in Claude Code: v paketih Pro, Max in Ultra je vklopljena privzeto, v paketu Team, ko jo vklopi skrbnik, za Enterprise pa prihaja. V paketih Pro, Max in Ultra sta splošno dostopni postali še dve zmožnosti, v pakete Team in Enterprise pa ju uvajajo: s Tasks strežnik daljše delo opravi v ozadju, z Elicitation pa se med delom ustavi in vas vpraša za podatek ali potrditev, na primer pred brisanjem ali pred stroškom.

**Kaj to pomeni za vas:** ko boste priključili konektor za orodje, ki ga uporabljate, boste morda zraven dobili navodila ponudnika. Na paketu Team naj skrbnik odloči, ali jih vklopi, ekipa pa naj ve, katera navodila so njena in katera ponudnikova.

Vir: [Claude, MCP servers can now ship skills, run tasks, and more](https://claude.com/resources/articles/skills-over-mcp-tasks-and-more)

## 3. Claudove artefakte lahko namestite kot aplikacije za Mac in Windows

Anthropic je 24. novembra začel uvajati možnost, da artefakt (stran ali orodje, ki ga Claude naredi v pogovoru) namestite kot aplikacijo z lastno ikono in oknom. Aplikacija uporablja Claude in vaše konektorje, posodobi se, ko artefakt uredite, lahko pa pošilja tudi obvestila. Funkcija je v preizkusni različici in jo uvajajo v vseh paketih, ni pa na voljo organizacijam z nastavitvijo za HIPAA in hibridnim namestitvam. V paketu Team je vklopljena privzeto, poln dostop do računalnika pa izklopljen; v paketu Enterprise je izklopljena, dokler je ne vklopi lastnik. Poln dostop (zaganjanje programov, branje, spreminjanje in brisanje datotek) lahko dobijo le aplikacije, ki ste jih naredili sami, v paketih Team in Enterprise pa tudi tiste, ki jih je naredil kdo iz vaše organizacije. Anthropic aplikacij ne pregleduje, njihove zahteve pa štejejo v omejitve porabe vašega paketa.

**Kaj to pomeni za vas:** majhno orodje, ki ga je sodelavec naredil v Claudu, na primer seznam odprtih naročil, lahko zdaj živi na namizju namesto v zavihku brskalnika. Polnega dostopa do računalnika ne dajte aplikaciji, za katero ne veste, kaj točno počne.

Vir: [Claude, Turn artifacts into Mac and Windows apps](https://claude.com/resources/articles/install-as-app)

## 4. GPT-6.2 je na voljo v klepetu ChatGPT

OpenAI je 23. novembra začel uvajati GPT-6.2, prilagojen za klepet v ChatGPT, za naročnike paketov Plus, Pro, Business in Enterprise. Po navedbah OpenAI je boljši pri zahtevnejših zahtevah, pri katerih mora slediti podrobnim navodilom ali poiskati informacije na spletu. Na testih OpenAI se je razumevanje slik izboljšalo s 47,4 % pri GPT-6 na 71,7 %, sledenje navodilom pri zahtevnih pozivih pa z 62,5 % na 78,1 %. V paketu Enterprise je dostop odvisen od nastavitev skrbnika, modeli v ChatGPT Work in Codexu ostajajo enaki.

**Kaj to pomeni za vas:** v paketih Plus, Pro, Business in Enterprise se model v klepetu postopoma zamenja sam. Nalogo, pri kateri vas je ChatGPT doslej razočaral, na primer branje tabele s slike, preizkusite znova.

Vir: [OpenAI, ChatGPT release notes](https://help.openai.com/en/articles/6825453-chatgpt-release-notes)

## 5. Claude Ship: agenti za pregled in odobritev sprememb kode

Anthropic je 23. novembra predstavil Claude Ship, nabor agentov za razvojne ekipe na GitHubu, ki predlog spremembe kode (pull request) peljejo skozi pregled, popravke in odobritev. Code Review, ki kodo pregleda, je splošno dostopen. PR Steward (beta) popravlja neuspele teste, spore med spremembami in pripombe pregledovalcev, ne odobri pa in ne združi ničesar. Claude Approvals (beta) rutinske spremembe odobri po pravilih, ki jih ekipa zapiše v datoteko v repozitoriju, ali zahteva potrditev človeka. Na voljo je v paketih Team in Enterprise, samo za GitHub, obračunava pa se po porabi tokenov. Za Code Review in PR Steward lahko skrbniki nastavijo omejitev porabe.

**Kaj to pomeni za vas:** to je orodje za podjetja z lastnimi razvijalci. Pred vklopom Claude Approvals naj ekipa zapiše, katere spremembe sme agent odobriti sam, in naj ga najprej uporablja v načinu, v katerem agent le opazuje.

Vir: [Claude, Introducing Claude Ship](https://claude.com/resources/articles/introducing-claude-ship)

## 6. Gemini API bere le del datoteke, ki ga potrebuje

Google je 23. novembra v Gemini API dodal neposredno nalaganje datotek Microsoft Office in OpenDocument, poleg PDF, zvoka in videa. Agent lahko zahteva samo del datoteke, na primer obseg strani, list ali obseg celic v preglednici ali odsek posnetka, in plača le tokene (enote besedila, po katerih se obračuna raba modela) za del, ki ga pregleda. Funkcija je na voljo v Gemini API prek Google AI Studio in platforme Gemini (Vertex AI) ter deluje z vsemi modeli Gemini 4, obstoječe omejitve velikosti datotek pa ostajajo. Po navedbah partnerjev na Googlovem blogu je Vercel za branje besedila ene strani porabil 14-krat manj tokenov kot za obdelavo celotnega PDF, LiteLLM pa je število vhodnih tokenov zmanjšal za 67 % pri PDF in za 33 % pri preglednici.

**Kaj to pomeni za vas:** če razvijate orodje, ki z AI bere dolge pogodbe, kataloge ali velike preglednice, lahko z delnim branjem znižate stroške. Za uporabnike aplikacije Gemini se ne spremeni nič.

Vir: [Google, Introducing file slicing controls in the Gemini API](https://blog.google/innovation-and-ai/technology/developers-tools/file-slicing-controls/)

## 7. Anthropic je s Claudom prepisal svoj API in preverjal na pravem prometu

Anthropic je 25. novembra opisal, kako je svoj Messages API (vmesnik, prek katerega programi kličejo Claude) prepisal iz programskega jezika Python v Rust. Prvo osnovno pot obdelave zahteve je Claude napisal v približno tednu dni, maja 2026 pa je Claude pri Anthropicu pisal že več kot 80 % združene kode. Novo različico so vzporedno poganjali na pravem prometu in primerjali, kaj iz istih zahtev pripravita stara in nova različica: konec aprila sta se ujemali le pri približno četrtini zahtev, čeprav je nova prestala okoli 98 % testov, avgusta pa pri 99,6 %. Nova različica porabi približno 70 % manj procesorskega časa in več kot 80 % manj pomnilnika na zahtevo, javni promet pa je nanjo prešel septembra brez izpada.

**Kaj to pomeni za vas:** če z AI prenavljate program ali avtomatizacijo, uspešni testi še ne pomenijo, da deluje. Novo različico nekaj časa poganjajte vzporedno s staro na resničnih podatkih in primerjajte rezultate.

Vir: [Anthropic, Migrating our Messages API to Rust](https://www.anthropic.com/research/migrating-api-to-rust)

## 8. Urad EU za AI išče strokovnjake za delavnico o preizkušanju zmogljivih modelov

Urad za AI pri Evropski komisiji je 27. novembra objavil poziv k sodelovanju na spletni delavnici o vgrajenih evalvacijah (preizkušanju) modelov AI za splošne namene s sistemskim tveganjem. Pri takšni evalvaciji neodvisni zunanji ocenjevalci dlje časa dobijo dostop do ponudnikovih notranjih modelov, sistemov, zaposlenih in dokumentacije, poziv pa zbira predloge, kako jo izvajati. Delavnica bo januarja 2027, natančnega datuma poziv ne navaja. Prijave in predloge sprejemajo do 9. decembra 2026, udeležence pa izberejo po kakovosti predloga in izkušnjah s preizkušanjem takšnih modelov.

**Kaj to pomeni za vas:** poziv je namenjen raziskovalcem in organizacijam, ki modele AI že preizkušajo. Za večino podjetij je zanimiv kot znak, da EU pravila za najzmogljivejše modele zdaj prenaša v prakso.

Vir: [Evropska komisija, Call for participants: workshop on evaluations of GPAI models with systemic risk](https://digital-strategy.ec.europa.eu/en/news/call-participants-workshop-evaluations-gpai-models-systemic-risk)

Naslednji pregled izide v petek, 4. decembra.
