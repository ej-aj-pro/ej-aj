---
title: 'Tedenski pregled #8: Claude Fable 5.2, preglednice in sestanki v Claudu, Gemini 4 Carbon in označevanje AI na volilnih plakatih'
description: 'Anthropic je izdal Claude Fable 5.2 ter v Claude dodal preglednice, table in sestanke. Google je razširil Gemini 4 Carbon, Akos pa pojasnil, kdaj morajo kandidati označiti slike, narejene z AI.'
date: 2026-11-13
type: tedenski-pregled
period: '7. do 13. november 2026'
---

V osmem tedenskem pregledu so nov Anthropicov model Claude Fable 5.2, preglednice, table in sestanki v Claudu, Claudov paket za proizvodna podjetja, Googlova modela Gemini 4 Carbon in Hydrogen, profili podjetij v ChatGPT, Zapierjeva anketa o agentih ter pravila za označevanje AI na volilnih plakatih v Sloveniji in EU.

> **Na kratko:** Claude ta teden dobiva orodja, ki so bila doslej domena pisarniških paketov: preglednice, skupne table in udeležbo na sestankih. Če imate paket Claude Team, so nekatera vklopljena samodejno, zato je smiselno pred uvedbo preveriti nastavitve in se dogovoriti, kaj zaposleni smejo uporabljati.

## 1. Anthropic je izdal Claude Fable 5.2

Anthropic je 9. novembra predstavil model Claude Fable 5.2 in Mythos 5.2, ki temeljita na istem modelu. Mythos 5.2 je namenjen preverjenim uporabnikom: organizacijam v Anthropicovih programih preverjanja za kibernetsko varnost in znanosti o življenju ter naročnikom Claude Enterprise prek storitve Claude Security. Po navedbah podjetja Fable 5.2 odgovore ustvari do 30 % hitreje kot Fable 5.1 in stane 8 USD za milijon vhodnih ter 40 USD za milijon izhodnih tokenov (tokeni so enote besedila, po katerih se obračunava raba). Na voljo je v aplikaciji Claude, prek API-ja ter v oblakih AWS, Google Cloud in Microsoft Azure. Anthropic hkrati priporoča, da za večino vsakdanjega dela ostanete pri modelu Opus 5.5, ki je privzeti model na paketih Pro, Max, Ultra in Team. Na paketu Pro in standardnih sedežih Team Fable 5.2 zunaj začetnih ponudb ni vključen v redne omejitve rabe, zato porablja dodatne kredite.

**Kaj to pomeni za vas:** za običajno pisarniško delo ostanite pri Opus 5.5. Če zaposleni sami izbirajo model, preverite, ali imate vklopljene dodatne kredite, da vas ne preseneti strošek ali ustavljeno delo.

Viri: [Anthropic, Claude Fable 5.2 in Mythos 5.2](https://www.anthropic.com/news/claude-fable-and-mythos-5-2), [Claude, Opus 5.5 kot privzeti model za delo z znanjem](https://claude.com/resources/articles/using-claude-opus-5-5-as-your-daily-driver-for-knowledge-work)

## 2. Claude dobi preglednice, skupne table in nadzorne plošče

Anthropic je 10. novembra v Claude dodal tri nova orodja. Claude Sheets so preglednice z zavihki, formulami in spustnimi seznami, ki jih Claude ureja in pri tem označi vsako spremembo; za zahtevnejše delo jih izvozite v .xlsx ali CSV. Claude Whiteboards je skupna tabla, ki jo lahko pretvorite v dokument ali predstavitev. Obe orodji sta v preizkusni različici (beta), nadzorne plošče iz podatkov podjetja pa so pod imenom Claude Data splošno dostopne in potrebujejo konektor do podatkovnega skladišča ali CRM-ja. Orodja so na voljo na vseh plačljivih paketih: na paketu Team so privzeto vklopljena, na Enterprise sta Sheets in Whiteboards izklopljena, Claude Data pa se privzeto vklopi 19. novembra. Isti dan je Anthropic objavil, da se lahko aplikacije, kot so Asana, Canva, Dropbox in monday.com, odprejo neposredno v Claudu, ki v njih z vašo odobritvijo dela spremembe.

**Kaj to pomeni za vas:** če uporabljate paket Team, zaposleni ta orodja že vidijo. Skrbnik jih vklopi ali izklopi v nastavitvah organizacije pod Artifacts.

Viri: [Claude, Sheets, Whiteboards in Data](https://claude.com/resources/articles/sheets-whiteboards-data), [Claude, aplikacije se odprejo v Claudu](https://claude.com/resources/articles/interactive-connectors-full-tool)

## 3. Claude se lahko pridruži sestankom v Google Meet

Anthropic je 12. novembra predstavil Claude Meetings: Claude se pridruži videoklicu kot viden udeleženec, piše zapiske in naloge ter med klicem odgovarja na vprašanja, privzeto pisno. Shrani prepis in povzetek, zvoka ne. Za zdaj deluje samo v Google Meet, kot beta na paketih Team in Enterprise. Privzeto se ne pridruži klicem, na katerih so ljudje zunaj organizacije, in odide, če se tak udeleženec pridruži med klicem; skrbnik lahko to spremeni. Anthropic uporabnike poziva, naj poskrbijo, da se vsi na klicu strinjajo s prepisovanjem.

**Kaj to pomeni za vas:** podjetja, ki uporabljajo Microsoft Teams, morajo še počakati. Kjer imate Google Workspace, se pred prvim preizkusom dogovorite, kako boste udeležence obvestili o prepisu in kdo bo zapiske videl.

Vir: [Claude, Introducing Claude Meetings](https://claude.com/resources/articles/claude-meetings)

## 4. Claude for Manufacturing: paket 17 skillov za proizvodna podjetja

Anthropic je 12. novembra izdal Claude for Manufacturing, plugin s 17 skilli (shranjenimi postopki) za prodajo, kakovost, operativo, oskrbovalno verigo, razvoj izdelkov in nastavitev. Med primeri so priprava ponudbe za novo naročilo, poročilo o neuspeli kontroli kakovosti, iskanje vzroka okvare stroja, povpraševanje pri dobaviteljih in poročilo o proizvodnji. Povezuje se s sistemi Autodesk Fusion, Infor, Microsoft 365 in Oracle NetSuite. Claude pripravi osnutke, ki jih pregleda in odobri človek. Na voljo je na paketih Team in Enterprise, Anthropic pa 17. novembra pripravlja tehnični spletni seminar.

**Kaj to pomeni za vas:** tudi če ne uporabljate naštetih sistemov, je seznam 17 postopkov uporaben kot vzorec, kako razdeliti delo v proizvodnem podjetju na manjše naloge, ki se vse končajo s človekovim pregledom.

Vir: [Claude, Introducing Claude for Manufacturing](https://claude.com/resources/articles/claude-for-manufacturing)

## 5. Google je razširil dostop do Gemini 4 Carbon in izdal Gemini 4 Hydrogen

Google je 10. novembra model Gemini 4 Carbon, ki je bil doslej na voljo le izbranim strokovnjakom za kibernetsko varnost, odprl vsem razvijalcem in plačljivim podjetjem prek Gemini API, Google AI Studio in Gemini Enterprise. Naročniki Google AI Ultra ga dobijo tudi v aplikaciji Gemini in načinu AI Mode v iskalniku. Začetna cena je 2 USD za milijon vhodnih in 10 USD za milijon izhodnih tokenov, od 30. novembra pa bo 4 oziroma 20 USD. Google navaja, da je model prvi na več primerjalnih testih, med njimi Zapierjevem AutomationBench. Dva dni pozneje je postal splošno dostopen še Gemini 4 Hydrogen, ki je v brezplačnem paketu API brezplačen, v plačljivem pa stane 1,50 USD za milijon vhodnih in 7,50 USD za milijon izhodnih tokenov.

**Kaj to pomeni za vas:** če prek API-ja uporabljate Gemini, je do konca novembra Carbon cenejši, zato je zdaj dober čas za preizkus. Za preproste naloge v velikem obsegu je cenejša izbira Hydrogen.

Viri: [Google, Gemini 4 Carbon je na voljo](https://blog.google/intl/es-es/productos/gemini-4-carbon-ya-esta-disponible/), [Google AI Studio, dnevnik sprememb](https://aistudio.google.com/docs/changelog)

## 6. OpenAI: podjetja lahko prevzamejo svoj profil v ChatGPT

OpenAI je 10. novembra kot beta predstavil Businesses in ChatGPT. Po navedbah OpenAI lahko podjetja v Business Hub prevzamejo in potrdijo svoj profil, posodobijo podatke o podjetju, cenah in zalogi ter vidijo, kolikokrat jih ChatGPT omeni in koliko klikov na njihovo stran pripelje. Lastne agente za stranke (Business Agents) lahko za zdaj gradijo le upravičena podjetja za spletno prodajo in spletne storitve v ZDA. OpenAI navaja, da plačilo za oglaševane agente ne vpliva na to, kako pogosto ChatGPT podjetje priporoči, in da pogovorov uporabnikov s podjetji ne deli.

**Kaj to pomeni za vas:** ko bo prevzem profila na voljo tudi v Sloveniji, je vredno preveriti, kaj ChatGPT o vašem podjetju in izdelkih pove strankam. Agenti za stranke pri nas za zdaj niso na voljo.

Viri: [OpenAI, Introducing Businesses in ChatGPT](https://openai.com/index/introducing-businesses-chatgpt/), [AI Weekly, 10. november](https://aiweekly.co/alerts/openai-puts-verified-business-profiles-and-agents-in-chatgpt)

## 7. Zapier: 71 % velikih podjetij ima AI agente v redni rabi

Zapier je novembra posodobil svojo anketo med več kot 500 vodji velikih podjetij o rabi AI agentov (programov, ki samostojno izvajajo naloge v več korakih). Agente v redni rabi ima 71 % podjetij, lani 40 %. Agente uporablja ali preizkuša 88 % vprašanih. Le 30 % jih pravi, da agenti večino nalog opravijo brez človeka. Kot največjo oviro jih 27 % navaja zasebnost podatkov, varnost in skladnost s predpisi, 24 % pa natančnost in zanesljivost. Zapier prodaja orodja za avtomatizacijo, zato ima pri rezultatih lasten interes.

**Kaj to pomeni za vas:** tudi v podjetjih, ki agente že uporabljajo, ti večinoma ne delajo brez nadzora. Ko uvajate agenta, vnaprej določite, na katerih korakih odloči človek.

Vir: [Zapier, anketa o AI agentih](https://zapier.com/blog/ai-agents-survey)

## 8. Akos: slike z AI na volilnih plakatih je treba vidno označiti

Pred lokalnimi volitvami so nekateri kandidati za plakate in objave uporabili AI, poroča MMC RTV SLO. Agencija za komunikacijska omrežja in storitve (Akos), ki v Sloveniji nadzira obveznosti označevanja iz 50. člena akta EU o umetni inteligenci, je pojasnila, da posebnih pravil za predvolilne plakate ni, veljajo pa splošne obveznosti. Globoke ponaredke, torej slike, ki so z AI ustvarjene ali spremenjene, prikazujejo resnične osebe, kraje ali dogodke in bi lahko delovale pristno, je treba označiti; manjši popravki, kot je barvna korekcija, ne štejejo. Oznaka mora biti jasno vidna na plakatu ali ob sliki, metapodatki ne zadostujejo. Odgovoren je kandidat, ki je orodje uporabil, ne ponudnik orodja, za kršitve pa so predpisane globe.

**Kaj to pomeni za vas:** ista pravila veljajo tudi za oglase in objave podjetij. Če s sliko, narejeno z AI, prikažete kraj, izdelek ali osebo, kot da gre za fotografijo, dodajte vidno oznako.

Vir: [MMC RTV SLO, Kandidati na volitvah z UI-jem ustvarili podobe kraja, množico podpornikov](https://www.rtvslo.si/slovenija/lokalne-volitve-2026/kandidati-na-volitvah-z-ui-jem-ustvarili-podobe-kraja-mnozico-podpornikov/799723)

## 9. Evropska komisija zbira mnenja o volilnih smernicah za spletne platforme

Evropska komisija je 10. novembra odprla javno posvetovanje o osnutku posodobljenih smernic za volitve po aktu o digitalnih storitvah (DSA). Smernice veljajo za zelo velike spletne platforme in iskalnike, prvotne so iz leta 2024. Komisija posodobitev utemeljuje s hitrim razvojem tehnologije, zlasti generativne AI, in z vse bolj izpopolnjenimi načini manipulacije. Osnutek predvideva tudi varnejše sisteme za priporočanje vsebin in boljšo zaščito kandidatov. Mnenja je mogoče oddati do 23. novembra.

**Kaj to pomeni za vas:** smernice zavezujejo velike platforme, ne manjših podjetij. Če se ukvarjate s komuniciranjem ali oglaševanjem v volilnem obdobju, je posvetovanje priložnost, da poveste svoje.

Vir: [Evropska komisija, posvetovanje o volilnih smernicah po DSA](https://digital-strategy.ec.europa.eu/en/news/commission-invites-views-draft-revised-election-guidelines-under-digital-services-act)

Naslednji pregled izide v petek, 20. novembra.
