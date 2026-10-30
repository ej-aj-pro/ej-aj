---
title: 'Razpisi za AI in digitalizacijo: kako z AI sestavljamo tedenski pregled'
description: 'Kje se objavljajo razpisi za podjetja, kako jih AI agent vsak teden prebere, zakaj status preverimo na strani razpisa in kaj to pomeni za podjetje, ki želi zgraditi podobno orodje.'
date: 2026-10-22
type: vodnik
motiv: denar
---

Na strani [Razpisi za AI, digitalizacijo in tehnologijo](/razpisi/) zbiramo odprte in napovedane razpise za podjetja, ki uvajajo AI ali razvijajo tehnologijo. Seznam pripravlja AI agent, torej program, ki samostojno opravi več korakov naloge (v našem primeru Claude Code), pred objavo pa ga pregleda urednik. Ta vodnik opiše, od kod so podatki, kako jih agent bere in kje so meje takega orodja. Opis je uporaben tudi za podjetja, ki bi rada podobno orodje zgradila za svoje področje.

## Na kratko

- Razpisi za podjetja v Sloveniji izhajajo pri več deset razpisovalcih: skladih, agencijah, ministrstvih, občinah in v programih EU. Enotnega uradnega seznama z vsemi podatki ni.
- 22. oktobra 2026 smo preizkusili 81 spletnih naslovov, kjer se razpisi objavljajo. Večino je mogoče prebrati samodejno, 9 jih je ta dan vrnilo napako ali je imelo napačen naslov.
- Status razpisa vedno preverimo na strani posameznega razpisa, ne na seznamu razpisovalca. Seznam in stran razpisa se lahko razlikujeta.
- Na naši strani je samo seznam s kratkim opisom. Vsak razpis vodi na uradno objavo, kjer so vsi pogoji.

## Kje se razpisi objavljajo

Državne spodbude za podjetja objavljajo predvsem [Slovenski podjetniški sklad](https://www.podjetniskisklad.si/javni-razpisi-pozivi-programi/) (vavčerji, torej manjša nepovratna sredstva za posamezne storitve, ter garancije in krediti), [ARIS](https://www.aris-rs.si/objave/razpisi/odprti) (raziskave in inovacije), [SPIRIT Slovenija](https://www.spiritslovenia.si/razpisi), Eko sklad, Zavod za zaposlovanje in ministrstva na [gov.si](https://www.gov.si/zbirke/javne-objave/). Razpise v programih EU, kot sta Obzorje Evropa in Digitalna Evropa, zbira [portal Evropske komisije za financiranje](https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/home). Svoje razpise imajo še regionalne razvojne agencije in vsaka od 212 občin.

Za naš seznam izberemo razpise za AI, digitalizacijo, kibernetsko varnost, raziskave in razvoj ter startupe. Splošnih razpisov (na primer za energetsko prenovo ali kmetijstvo) na seznamu ni, občinskih zaenkrat tudi ne.

## Kako agent bere vire

Za vsak vir smo preverili, na kakšen način je podatke mogoče prebrati brez človeka. Najzanesljivejši je API, torej vmesnik, prek katerega program dobi podatke v urejeni obliki in mu spletne strani ni treba brati. Javni API ima portal Evropske komisije za financiranje, prav tako evropski portal javnih naročil TED. SPIRIT Slovenija ima za stranjo z razpisi vmesnik, ki vrne naslov, datum objave in rok vsakega razpisa.

Večina slovenskih virov je navadnih spletnih strani, kjer je besedilo že v strani in ga agent prebere neposredno. Ko razpisovalec stran prenovi, je treba branje popraviti. Nekatere strani pa vsebino naložijo šele v brskalniku (z JavaScriptom), zato agent zanje uporabi pravi brskalnik. Tako deluje na primer seznam razpisov Podjetniškega sklada.

Nobeden od preizkušenih virov v datoteki `robots.txt`, kjer stran pove, česa programi ne smejo brati, ni prepovedal branja. Uradni list je 22. oktobra 2026 vračal napako tudi v navadnem brskalniku, zato ga bomo dodali, ko bo spet deloval. Za občinske razpise je to najboljši enotni vir.

## Zakaj status preverimo na strani razpisa

Seznam razpisovalca ni vedno dovolj. Vavčer za pridobitev certifikatov (V10) je bil 22. oktobra 2026 na seznamu Podjetniškega sklada označen kot odprt do 31. 3. 2028, na [strani vavčerja](https://www.podjetniskisklad.si/v10-vavcer-za-pridobitev-certifikatov/) pa je pisalo, da je prejemanje novih vlog od 18. 9. 2026 začasno ustavljeno. Pri portalu Evropske komisije smo opazili podobno: iskalnik med odprte uvrsti tudi teme z roki iz leta 2023, zato agent upošteva samo razpise, ki imajo rok v prihodnosti.

Zato agent pri vsakem razpisu odpre njegovo stran in od tam prepiše stanje, rok in znesek. Če podatka na strani ni, ga ne zapiše.

## Kaj se zgodi vsak teden

Enkrat na teden se samodejno zažene rutina (opravilo, ki ga agent izvede ob nastavljenem času). Ta za vsak razpis na seznamu znova odpre uradno stran in preveri, ali se je spremenilo stanje, rok ali znesek. Napovedani razpisi, ki so bili objavljeni, se premaknejo med odprte, potekli med zaprte. Nato agent pregleda vire za nove razpise. Enako preveri tudi storitve brez roka, na primer inovacijska stičišča in dostop do superračunalnikov. Te so na strani v posebnem razdelku.

Vsako spremembo pred objavo preveri ločen agent, ki ne pozna prvega izdelka in znova odpre vsak vir. Šele nato spremembe pregleda urednik. Ker je stran objavljena največ enkrat na teden, število dni do roka izračuna bralčev brskalnik, razpis s preteklim rokom pa se samodejno označi.

## Česa orodje ne naredi

Seznam ne pove, ali je vaše podjetje upravičeno do sredstev, in ne pomaga pri pripravi vloge. Pogoji razpisov so dolgi in se med razpisi razlikujejo, zato vedno velja razpisna dokumentacija na uradni strani. Širši pregled vseh razpisov za podjetja (tudi splošnih) ima [Podjetniški portal](https://www.podjetniski-portal.si/razpisi) agencije SPIRIT, ki pošilja tudi brezplačen tedenski bilten.

## Če želite podobno orodje v svojem podjetju

Podobno lahko spremljate razpise za svojo panogo, javna naročila ali spremembe predpisov. Iz našega dela so uporabni štirje nasveti:

1. Začnite z viri, ki imajo API ali urejen seznam. Strani, ki jih je treba brati v brskalniku, dodajte pozneje.
2. Podatke hranite v eni datoteki ali tabeli in pri vsakem zapisu navedite vir in datum zadnjega preverjanja.
3. Ne zaupajte statusu na seznamu. Agent naj vsakič odpre stran posameznega vira.
4. Preverjanje naj opravi ločen korak (ali ločen agent), objavo pa naj potrdi človek.

**Kaj to pomeni za vas:** po naši oceni je spremljanje razpisov dobra prva naloga za AI agenta v podjetju, ker je ponavljajoča, viri so javni, rezultat pa človek hitro preveri. Za začetek zadošča en vir, ki ga zdaj nekdo pregleduje ročno.
