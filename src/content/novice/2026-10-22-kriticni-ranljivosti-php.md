---
title: 'Kritični ranljivosti v PHP (PHP2Shell), ki ju je pomagala najti AI: kaj morajo storiti podjetja s spletno stranjo'
description: 'PHP je 21. oktobra popravil dve kritični ranljivosti, URSIV je ogroženost v Sloveniji zvišal na visoko. Kdo je izpostavljen, kaj vemo o napadih in kaj naj podjetje stori zdaj.'
date: 2026-10-22
type: clanek
---

Projekt PHP je 21. oktobra izdal nujne varnostne popravke za dve kritični ranljivosti, ki ju raziskovalci imenujejo PHP2Shell. PHP je programski jezik, v katerem teče velik del spletnih strani, med drugim WordPress, Drupal in Joomla. Napadalec lahko ranljivi strežnik prek interneta prevzame brez gesla. Urad vlade za informacijsko varnost (URSIV) je še isti dan oceno kibernetske ogroženosti v Sloveniji zvišal na visoko.

> **Na kratko:** če ima vaše podjetje spletno stran ali spletno trgovino, takoj vprašajte ponudnika gostovanja ali izvajalca, ali je PHP že posodobljen na eno od različic 8.5.12, 8.4.27, 8.3.36 ali 8.2.35. Posodobitev WordPressa ali vtičnikov težave ne odpravi, popraviti je treba PHP na strežniku.

## Kaj se je zgodilo

Ranljivosti imata oznaki CVE-2026-109618 in CVE-2026-109619. CVE je mednarodna oznaka, pod katero se vodi posamezna varnostna luknja. Obe sta na lestvici resnosti CVSS ocenjeni z 9,2 od 10.

Prva ranljivost nastane, ko PHP-ju med obdelavo zahteve zmanjka pomnilnika in podatki ostanejo napol pripravljeni. Druga nastane, ko podatki ene zahteve ostanejo v pomnilniku in jih uporabi naslednja zahteva. Obe lahko napadalec sproži s posebej sestavljenimi zahtevami in nato na strežniku izvaja svojo kodo s pravicami spletnega strežnika. Za to se mu ni treba prijaviti.

Projekt PHP piše, da so ranljive vse namestitve PHP, ki odgovarjajo na spletne zahteve, ne glede na to, kako jih poganja spletni strežnik. Največje tveganje vidi pri strežnikih Apache z modulom mod_php, kjer je napad mogoč, še preden se zažene koda spletne strani. Raziskovalci podjetij Wiz in Calif so napad brez prijave pokazali na sistemih WordPress, Drupal in Joomla. Po navedbah podjetja Wiz je ranljiva skoraj vsaka različica PHP, vse nazaj do različice 5.4.

Viri: [PHP, varnostno obvestilo 21. 10. 2026](https://www.php.net/archive/2026.php#2026-10-21-5), [PHP na GitHubu, CVE-2026-109618](https://github.com/php/php-src/security/advisories/GHSA-w8hw-w9fx-j79w), [PHP na GitHubu, CVE-2026-109619](https://github.com/php/php-src/security/advisories/GHSA-6wmf-4rv5-p3rp), [Wiz, PHP2Shell](https://www.wiz.io/blog/php2shell-php-rce), [Calif, PHP2Shell](https://calif.io/php2shell/)

## Ranljivosti je pomagala najti AI

Ranljivosti sta našli dve skupini neodvisno druga od druge. Podjetje Calif je kritično napako našlo z modelom GPT-5.6 Sol v OpenAI-jevem programu Patch the Planet, prek katerega OpenAI pri odpravljanju varnostnih lukenj pomaga z varnostnim znanjem in dostopom do svojih modelov. Calif piše, da je raziskovalec AI agenta usmeril v dele kode, ki obravnavajo pomanjkanje pomnilnika, in da je agent pri tem opazil začetno napako. Poudarja, da je bilo pri tem najpomembnejše raziskovalčevo poznavanje starih ranljivosti PHP. Raziskovalci podjetja Wiz so našli obe ranljivosti in pri tem uporabljali svoje orodje Wiz Atlas ter modela Gemini 4 Argon in GPT-5.6 Sol. Calif je prvo napako projektu PHP prijavil 11. avgusta in drugo 21. avgusta, Wiz pa svoje ugotovitve 24. avgusta.

OpenAI ocenjuje, da gre za eno varnostnih težav z najširšim vplivom v zadnjem času. Piše tudi, da iste zmogljivosti AI lahko napadalcem pomagajo hitro razviti orodja za napad, in pričakuje, da bo podobnih odkritij v prihodnjih mesecih precej več.

Viri: [OpenAI, Patch the Planet](https://openai.com/index/coordinated-disclosure-of-critical-vulnerabilities/), [Wiz, PHP2Shell](https://www.wiz.io/blog/php2shell-php-rce), [Calif, PHP2Shell](https://calif.io/php2shell/)

## Ali napadi že potekajo

Amazon je 17. oktobra, štiri dni pred objavo popravkov, zaznal poskus izkoriščanja na svojem omrežju vab za napadalce (honeypot, strežnik, postavljen zato, da privabi napade). Ni jasno, kako je napadalec prišel do podatkov o ranljivosti. Na dan objave, še pred uradno objavo popravkov, je Amazon zaznal več poskusov, ki so po njegovi oceni prihajali od različnih napadalcev, in zapisal, da se PHP2Shell zdaj množično izkorišča. Ali bi bili ti poskusi uspešni na pravih strežnikih, še preverja. Cloudflare poroča o napadih na spletne strani svojih strank in o tem, da napadalci prilagajajo napade, da bi zaobšli njegovo zaščito.

URSIV je 21. oktobra zapisal, da so nekateri varnostni ponudniki poročali o prvih poskusih izkoriščanja, drugi jih pri svojih strankah niso zaznali, projekt PHP pa izkoriščanja ni potrdil. Ameriška agencija za kibernetsko varnost CISA je 26. oktobra obe ranljivosti (CVE-2026-109618 in CVE-2026-109619) dodala na seznam ranljivosti, ki se dokazano izkoriščajo (Known Exploited Vulnerabilities), in zveznim ustanovam naložila popravek do 29. oktobra.

Viri: [Amazon, PHP2Shell v omrežju MadPot](https://aws.amazon.com/blogs/security/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/), [Cloudflare, zaščita pred php2shell](https://blog.cloudflare.com/php-vulnerabilities-waf-protection/), [URSIV, ocena ogroženosti](https://www.gov.si/novice/2026-10-21-ursiv-zaradi-kriticnih-ranljivosti-v-php-zvisal-oceno-ogrozenosti-kibernetske-varnosti-na-visoko/), [CISA, seznam izkoriščanih ranljivosti](https://www.cisa.gov/known-exploited-vulnerabilities-catalog)

## Kaj velja v Sloveniji

URSIV je 21. oktobra oceno ogroženosti za zavezance po Zakonu o informacijski varnosti zvišal na visoko. Ocena velja do preklica in se po navedbah urada nanaša tudi na druge organizacije, ki uporabljajo PHP ali programsko opremo, ki PHP vsebuje. Zavezancem je urad z odredbo naložil, da v 24 urah od seznanitve z odredbo popišejo vse sisteme s PHP, v 48 urah posodobijo tiste, ki so dostopni prek interneta, in v sedmih dneh vse ostale.

Za podjetja, ki niso zavezanci, je urad 22. oktobra objavil priporočila: popišite aplikacije s PHP, najprej tiste, ki so dostopne prek interneta, namestite popravke in nato ponovno zaženite vse procese PHP. Preverite tudi programsko opremo, ki ima PHP vgrajen, in od proizvajalca zahtevajte rok za popravek. Če popravka ne morete namestiti takoj, ocenite tveganje in po potrebi začasno omejite dostop do izpostavljenih aplikacij ali uvedite druge zaščitne ukrepe. Zaznane incidente sporočite pristojni skupini za odzivanje na incidente (CSIRT).

Gorazd Božič iz SI-CERT je 22. oktobra za STA povedal, da v Sloveniji takrat vse deluje normalno, med nadgradnjami pa so mogoče motnje nekaterih spletnih storitev. Arnes je opozoril, da nekatere njegove storitve morda ne bodo dosegljive, strani ARSO s podatki o potresih pa so 22. oktobra po navedbah agencije nedostopne zaradi obsežnejše varnostne nadgradnje (povezave s PHP ARSO ne navaja).

Viri: [URSIV, odredba o nujnih ukrepih](https://www.gov.si/novice/2026-10-21-ursiv-izdal-odredbo-o-izvedbi-nujnih-ukrepov-zaradi-kriticnih-ranljivosti-v-php/), [URSIV, priporočila za organizacije, ki niso zavezanci](https://www.gov.si/novice/2026-10-22-priporocila-za-organizacije-ki-niso-zavezanci-po-zinfv-1-zaradi-kriticnih-ranljivosti-v-php/), [SI-CERT, obvestilo 2026-07](https://www.cert.si/si-cert-2026-07/), [RTV SLO, 22. 10. 2026](https://www.rtvslo.si/svet/ranljivost-v-programskem-jeziku-php-prizadela-70-odstotkov-interneta/797740), [ARSO, strani o potresih nedostopne](https://www.gov.si/novice/2026-10-22-spletne-strani-z-informacijami-o-potresni-dejavnosti-zacasno-nedostopne/)

## Kaj naj podjetje stori zdaj

Najprej ugotovite, kje uporabljate PHP. Najpogosteje je to spletna stran ali spletna trgovina, lahko pa tudi intranet, sistem za rezervacije ali naprava oziroma program, ki ima PHP vgrajen.

Če stran gostuje pri ponudniku gostovanja ali jo vzdržuje zunanji izvajalec, ga vprašajte dvoje: ali je PHP posodobljen na različico 8.5.12, 8.4.27, 8.3.36 ali 8.2.35 (ali na popravljen paket distribucije Linux) in ali so po posodobitvi ponovno zagnali procese PHP. Cloudflare izrecno opozarja, da posodobitev kode strani ali vtičnikov ranljivosti ne odpravi.

Če ima strežnik PHP 8.1 ali starejši, uradne popravljene različice zanj ni. Projekt PHP je za različice 7.4, 8.0 in 8.1 objavil le izvorne popravke za tiste, ki PHP prevajajo sami. Nekatere distribucije Linux in ponudniki podaljšane podpore so popravke prenesli tudi v starejše različice, zato vprašajte ponudnika. Sicer je rešitev nadgradnja na podprto različico. Pri načrtovanju upoštevajte, da se podpora za PHP 8.2 izteče 31. decembra 2026.

Dokler popravek ni nameščen, zmanjšajte tveganje. Cloudflare je zaščito samodejno vklopil za vse pakete z vklopljenim požarnim zidom za spletne aplikacije (WAF), tudi za brezplačnega, a sam opozarja, da posodobitve ne nadomesti. Skrbnik strežnika lahko uvede začasne nastavitve, ki jih navaja projekt PHP, ki pa po njegovih besedah ne naredijo namestitve varne. Projekt PHP je 23. oktobra objavil tudi ločeno obvestilo (CVE-2026-115560): do naslednje redne izdaje predlaga nastavitev session.upload_progress.enabled=0, da se izključi redek, a mogoč vektor za zagon kode na daljavo. To velja ob določeni konfiguraciji sej, ki jo projekt ocenjuje kot v praksi malo verjetno. Amazon svetuje, da preverjanje morebitnega vdora začnete pri 17. oktobru, ko je bil zaznan prvi poskus.

**Kaj to pomeni za vas:** to je najprej opravilo za ponudnika gostovanja ali izvajalca, odgovornost za podatke strank pa ostane pri vas, zato potrditev posodobitve zahtevajte pisno. Ker AI vse hitreje najde take napake, bodo nujne posodobitve verjetno pogostejše, zato je smiselno v pogodbo z izvajalcem zapisati, v kolikšnem času namesti kritične popravke.

Viri: [PHP, varnostno obvestilo z začasnimi ukrepi](https://www.php.net/archive/2026.php#2026-10-21-5), [Cloudflare, zaščita pred php2shell](https://blog.cloudflare.com/php-vulnerabilities-waf-protection/), [Amazon, PHP2Shell v omrežju MadPot](https://aws.amazon.com/blogs/security/amazon-threat-intelligence-identifies-php2shell-exploitation-prior-to-public-disclosure-in-madpot/)
