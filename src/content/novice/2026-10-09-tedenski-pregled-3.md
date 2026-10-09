---
title: 'Tedenski pregled #3: Claude Haiku 5.5, Claude v Google Docs in Sheets, Mistral Large 4, vodni žig za besedila ChatGPT v EU'
description: 'Anthropic je izdal poceni Claude Haiku 5.5 in Claude prinesel v Google Docs, Sheets in Slides, Mistral je predstavil Large 4, OpenAI bo besedila ChatGPT v EU označeval z vodnim žigom.'
date: 2026-10-09
type: tedenski-pregled
period: '3. do 9. oktober 2026'
---

V tretjem tedenskem pregledu so nov majhen model Anthropic, Claude v Googlovih pisarniških orodjih, nov evropski model, dva koraka k označevanju vsebin, ustvarjenih z AI, in novi evropski razpisi za projekte z AI.

> **Na kratko:** Claude v plačljivih paketih zdaj dela neposredno v Google Docs, Sheets in Slides, njegovi dokumenti in predstavitve pa so na voljo tudi v brezplačnem paketu. Za podjetja, ki delajo v Googlovih orodjih, je to najpreprostejši način, da zaposleni AI preizkusijo v datotekah, ki jih že uporabljajo.

## 1. Anthropic izdal Claude Haiku 5.5

Anthropic je 7. oktobra izdal Claude Haiku 5.5, svoj najhitrejši model, namenjen hitrim, ponavljajočim se nalogam, kot so povzemanje, podpora strankam v živo in delo podagentov (pomožnih agentov, ki jim glavni agent preda del naloge). Za zahtevke do 100.000 tokenov stane 0,10 USD za milijon vhodnih in 0,50 USD za milijon izhodnih tokenov (token je košček besedila, pogosto del besede), kar je po navedbah podjetja v povprečju okoli 75 % ceneje od Haiku 4.5. Na voljo je prek API-ja (povezave, prek katere programi uporabljajo model) pri Anthropicu, AWS, Google Cloud in Microsoft Azure. Anthropic je isti dan za polovico znižal ceno branja iz predpomnilnika pri Sonnet 5.5, na 0,10 USD za milijon tokenov. Naročniki paketov Max in Team bodo dobili mesečni dobropis za API: 100 USD v Max 5x, 200 USD v Max 20x in do 500 USD skupaj za ekipo v Team.

**Kaj to pomeni za vas:** za velike količine preprostih nalog, kot je razvrščanje e-pošte ali povzemanje zapisnikov, je Haiku 5.5 zdaj precej cenejša izbira. Če imate paket Team ali Max, lahko z mesečnim dobropisom preizkusite preprosto avtomatizacijo brez dodatnega stroška.

Vir: [Anthropic, Claude Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5)

## 2. Claude dela v Google Docs, Sheets in Slides

Anthropic je 6. oktobra izdal dodatek Claude for Google Workspace, ki je v javni preizkusni različici (beta) na voljo v vseh plačljivih paketih Claude. Namestite ga iz Google Workspace Marketplace, nato se Claude odpre v stranskem oknu ob odprtem dokumentu, preglednici ali predstavitvi. V Docs popravlja besedilo neposredno v dokumentu, večje predelave pa predlaga kot kartice, ki jih sprejmete ali zavrnete. V Sheets piše formule, sestavi vrtilne tabele in grafe, v Slides pa sestavi diapozitive iz postavitev obstoječe predstavitve. Privzeto vsako spremembo pokaže v potrditev, skrbnik pa lahko dodatek namesti vsem v domeni ali izbranim skupinam.

**Kaj to pomeni za vas:** zaposleni lahko Claude preizkusijo v svojih tabelah in dokumentih, ne da bi kopirali vsebino v klepet. Ker v privzetem načinu vsako spremembo potrdijo sami, je to varen prvi korak za netehnične ekipe.

Vir: [Claude, Claude now works with Google Docs, Sheets, and Slides](https://claude.com/resources/articles/claude-now-works-in-google-docs-sheets-and-slides)

## 3. Claudovi dokumenti in predstavitve na voljo tudi brezplačno, nove nadzorne plošče

Anthropic je 8. oktobra sporočil, da Claude Docs, Slides in Design niso več v preizkusni različici in so na voljo v vseh paketih, tudi v brezplačnem. Uporabniki so z njimi po navedbah podjetja ustvarili že več kot 45 milijonov dokumentov, predstavitev in oblikovanj, predstavitve pa je zdaj mogoče izvoziti v Google Slides kot urejljive datoteke. V plačljivih paketih je kot beta na voljo Claude Dashboards: Claude se poveže s podatkovnimi skladišči, kot sta BigQuery in Snowflake, ali s Salesforce in iz vprašanja v navadnem jeziku sestavi nadzorno ploščo, ki se sproti osvežuje. Ob vsakem grafu pokaže poizvedbo, iz katere je nastal, in čas zadnje osvežitve. V paketih Team in Enterprise je v beti še Claude Motion, ki iz poročila naredi kratko animirano razlago in jo izvozi kot video MP4.

**Kaj to pomeni za vas:** skupno urejanje dokumentov s Claudom lahko ekipa preizkusi brez naročnine. Nadzorne plošče so uporabne predvsem za podjetja, ki podatke že hranijo v podatkovnem skladišču ali v Salesforce.

Vir: [Claude, Build live dashboards and animate explainers with Claude](https://claude.com/resources/articles/dashboards-and-motion)

## 4. ChatGPT odgovarja z interaktivnimi grafi in kalkulatorji

OpenAI je 7. oktobra začel uvajati Intelligent UI, način, pri katerem ChatGPT v odgovore doda slike in interaktivne elemente: gumbe, kalkulatorje za posamezno nalogo, interaktivne in urejljive grafe. Funkcija prihaja skupaj z modelom GPT-6. Uporabniki paketov Pro, Plus, Business in Enterprise so jo dobili 7. oktobra, uporabniki brezplačnega paketa in paketa Go pa dan pozneje. Uporabnik bo lahko število slik v odgovorih zmanjšal.

**Kaj to pomeni za vas:** za hitre izračune, na primer primerjavo ponudb ali načrt varčevanja, lahko ChatGPT zdaj sam pripravi kalkulator. Številke v njem preverite, preden jih uporabite za odločitev.

Vir: [TechCrunch, ChatGPT is getting a lot more visual](https://techcrunch.com/2026/10/07/chatgpt-is-getting-a-lot-more-visual-with-the-launch-of-a-new-interface/)

## 5. Mistral predstavil model Large 4

Mistral je 6. oktobra predstavilo Mistral Large 4, svoj največji model. Ima bilijon parametrov, od katerih jih je pri posameznem odgovoru dejavnih 52 milijard, in razume besedilo ter slike. V predogledu je na voljo prek API-ja v Mistral Studiu po ceni 1,36 USD za milijon vhodnih in 4,18 USD za milijon izhodnih tokenov, predogled pa teče v Mistralovih evropskih podatkovnih centrih. Učen je bil na besedilih v več kot 160 jezikih, med njimi v vseh uradnih jezikih EU. Uteži modela (datoteke, ki jih podjetje lahko poganja na svojih strežnikih) bo Mistral po lastnih navedbah objavil do konca oktobra.

**Kaj to pomeni za vas:** če morate podatke obdelovati v Evropi ali na lastnih strežnikih, je Large 4 nova možnost, ki jo je vredno preizkusiti na slovenskih besedilih, ko bodo uteži objavljene.

Vir: [Mistral, Introducing Mistral Large 4](https://mistral.ai/news/mistral-large-4/)

## 6. OpenAI bo besedila ChatGPT v EU označeval z nevidnim vodnim žigom

OpenAI je 5. oktobra napovedal, da bo v prihodnjih tednih v besedila, ki jih ChatGPT in Codex napišeta uporabnikom v EU, dodajal nevidni vodni žig textGrain, oznako, skrito v izbiri besed. Razlog je 50. člen AI Acta, ki ponudnike generativne AI zavezuje, da je njihovo besedilo prepoznavno s programsko opremo. Oznaka velja za vse pakete, uporabniki API-ja pa jo lahko pri izbranih modelih vklopijo sami. Po testih OpenAI zamenjava 10 % besed s sopomenkami zniža zaznavo s približno 92 % na 66 %, zamenjava 25 % besed pa na 17 %. Orodje za preverjanje bo sprva na voljo le odobrenim raziskovalcem in strokovnim organizacijam, odsotnost oznake pa po navedbah OpenAI ne dokazuje, da je besedilo napisal človek.

**Kaj to pomeni za vas:** besedila iz ChatGPT bodo v EU tehnično označena, a oznaka je ob manjših popravkih nezanesljiva. Kdaj in kako v podjetju označujete vsebine, napisane z AI, ostaja stvar vaših pravil.

Vir: [The Next Web, OpenAI text watermarking](https://thenextweb.com/news/openai-text-watermarking-chatgpt-codex-eu-ai-act)

## 7. Google: vsakdo lahko preveri, ali je slika, video ali posnetek nastal z AI

Google je 7. oktobra razširil orodje SynthID Detector, s katerim lahko vsakdo preveri, ali je bila slika, video ali zvočni posnetek ustvarjen z Googlovo AI ali AI njegovih partnerjev. Orodje je na voljo po vsem svetu v angleščini na strani synthid.com, preverjanje pa je vgrajeno tudi v iskalnik Google, aplikacijo Gemini in brskalnik Chrome. Preveriti je mogoče tudi vsebine OpenAI, NVIDIA in Kakao, Apple naj bi se pridružil pozneje. Google je od leta 2023 z oznako SynthID opremil več kot 180 milijard slik in videov.

**Kaj to pomeni za vas:** ko dobite sumljivo sliko ali posnetek, na primer domnevni posnetek glasu direktorja, ga lahko preverite na synthid.com. Negativen rezultat ne pomeni, da je posnetek pristen, saj orodje prepozna le vsebine sodelujočih ponudnikov.

Vir: [Google, Making it easier to identify AI-generated content](https://blog.google/innovation-and-ai/models-and-research/google-deepmind/synth-id-ai-content/)

## 8. Obzorje Evropa 2027: novi razpisi za projekte z AI

Ministrstvo za izobraževanje, znanost in mladino je 9. oktobra objavilo napoved razpisov programa Obzorje Evropa za leto 2027 na digitalnem področju. Razpis HORIZON-CL4-2027-04 bo odprt od 17. novembra 2026 do 18. marca 2027, med temami pa so uporaba AI v robotiki za industrijo, mednarodno sodelovanje na področju AI in razvoj varnih ter računsko učinkovitih vodilnih modelov. Razpis HORIZON-BRIDGING-2027-01 bo odprt od 20. oktobra 2026 do 16. februarja 2027 in vključuje evropsko platformo AI za novičarske in avdiovizualne medije. Spletni informativni dnevi bodo od 14. do 16. oktobra.

**Kaj to pomeni za vas:** podjetja in raziskovalne skupine, ki razmišljajo o evropskem projektu z AI, imajo glede na razpis do februarja oziroma marca 2027 čas za prijavo. Informativni dnevi so dobra priložnost, da preverite, ali vaša ideja ustreza kateri od tem.

Vir: [GOV.SI, Najava razpisov Obzorje Evropa 2027 za digitalno področje](https://www.gov.si/novice/2026-10-09-najava-razpisov-obzorje-evropa-2027-za-digitalno-podrocje/)

---

Naslednji pregled izide v petek, 16. oktobra.
