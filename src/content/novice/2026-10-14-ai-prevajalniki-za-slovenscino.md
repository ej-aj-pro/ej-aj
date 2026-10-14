---
title: 'AI prevajalniki za slovenščino: DeepL, Google Translate, ChatGPT, Claude in slovenski prevajalnik'
description: 'Kaj ponujajo DeepL, Google Translate, Microsoft, ChatGPT, Claude in Gemini pri prevajanju v slovenščino, katera javna orodja so na voljo in kako varno prevedete zaupen dokument.'
date: 2026-10-14
type: vodnik
---

Za prevod iz angleščine v slovenščino in nazaj je danes na voljo več vrst orodij: namenski prevajalniki, kot sta DeepL in Google Translate, klepetalniki, kot so ChatGPT, Claude in Gemini, ter brezplačna javna orodja, slovenska in evropska. Ta vodnik razloži, kaj vsako ponuja, koliko stane, kaj se zgodi z vašim besedilom in kako prevod preverite. Podatki so s strani ponudnikov (DeepL, Google, Microsoft, Anthropic), Evropske komisije, Vlade RS in portala Slovenščina.eu, preverjeni 14. oktobra 2026.

## Na kratko

- DeepL podpira slovenščino, tudi glosarje (sezname izrazov z obveznim prevodom). Brezplačna različica ima 50.000 znakov in en dokument na mesec, paket Individual stane 7,49 € na mesec pri letnem plačilu.
- Besedila iz brezplačnega DeepL se lahko uporabijo za učenje njegovih modelov. Pri plačljivem DeepL Pro jih po prevodu izbriše in jih ne uporablja za izboljšave.
- Google Translate brezplačno prevede dokumente Word, PDF, PowerPoint in Excel do 10 MB. Zagotovilo, da vsebine ne uporablja za učenje, Google daje za plačljivo storitev Cloud Translation.
- ChatGPT, Claude in Gemini lahko upoštevajo ton, bralca in seznam izrazov, ki jih zapišete v navodilo. Rezultatov za slovenščino ponudniki ne objavljajo.
- Slovenski prevajalnik na Slovenščina.eu prevaja med slovenščino in angleščino. Prevajalnik eTranslation Evropske komisije je brezplačen za javno upravo, mala podjetja, samozaposlene, akademske ustanove in nevladne organizacije.

## Dve vrsti prevajalnikov

DeepL, Google Translate, Microsoft Translator in slovenski prevajalnik RSDO so namenski strojni prevajalniki. Naučeni so na velikih zbirkah besedil in njihovih prevodov in delajo samo to: besedilo prevedejo. Klepetalniki, kot so ChatGPT, Claude in Gemini, temeljijo na velikih jezikovnih modelih, ki znajo pisati, povzemati in odgovarjati, prevajanje pa je le ena od nalog.

Nekateri ponudniki ponujajo oboje. Microsoftova storitev za razvijalce Azure Translator privzeto prevaja s klasičnim strojnim prevajalnikom, po želji pa tudi z jezikovnim modelom, ki lahko prevod prilagodi tonu (formalno, neformalno, nevtralno). Google v svoji plačljivi storitvi Cloud Translation ponuja oboje in za slovenščino podpira tudi prevajanje z jezikovnim modelom.

Viri: [Microsoft, Azure Translator, različica 2026-06-06](https://learn.microsoft.com/en-us/azure/ai-services/translator/text-translation/preview/overview), [Google Cloud, podprti jeziki](https://docs.cloud.google.com/translate/docs/languages)

## DeepL

DeepL prevaja v slovenščino in iz nje. Na seznamu jezikov za razvijalce ima slovenščina glosarje in pravila sloga, nima pa izboljševanja besedila (to je funkcija DeepL Write, ki popravlja slog in slovnico).

Brezplačna različica omogoča 50.000 znakov na mesec, en prevod datoteke na mesec do 5 MB in en glosar s 5 izrazi na jezikovni par. Plačljivi paketi so na strani s cenami navedeni v evrih z vključenim DDV in pri letnem plačilu:

| Paket | Cena na uporabnika na mesec | Znakov na mesec | Datotek na mesec | Glosarji |
|---|---|---|---|---|
| Individual | 7,49 € | 300.000 | 3 (do 30 MB) | 1, s 5 izrazi na jezikovni par |
| Team | 24,99 € | 1.000.000 | 20 (do 30 MB) | 5, s po 1.000 izrazi na jezikovni par |
| Business | 49,99 € | brez omejitve (pravilo poštene rabe) | 100 (do 100 MB) | brez omejitve |

Mesečnih cen stran ne izpiše, navaja pa, da je letno plačilo 16 % cenejše. Individual in Team imata 30-dnevni brezplačni preizkus.

DeepL prevede datoteke PDF (tudi skenirane), Word, PowerPoint, Excel, HTML, podnapise SRT in navadno besedilo, pri tem pa po lastnih navedbah ohrani obliko izvirnika.

Brezplačna in plačljiva različica se razlikujeta tudi v tem, kaj se zgodi z besedilom. Po pravilniku o zasebnosti DeepL besedila iz brezplačne različice hrani omejen čas in jih uporablja za učenje in izboljšave svojih modelov, tudi vaše popravke. Pri DeepL Pro besedila hrani le začasno, po opravljenem prevodu jih izbriše in jih ne uporablja za izboljšave. Izjema so stvari, ki jih sami shranite v račun, na primer glosarji in shranjeni prevodi.

**Kaj to pomeni za vas:** brezplačni DeepL je po naši oceni primeren za javna besedila, kot je vaša spletna stran. Za pogodbe, ponudbe in interno pošto uporabite Pro ali drugo storitev, ki besedil ne uporablja za učenje.

Viri: [DeepL, cene](https://www.deepl.com/en/pro/change-plan), [DeepL, podprti jeziki](https://developers.deepl.com/docs/getting-started/supported-languages), [DeepL, prevajanje dokumentov](https://www.deepl.com/en/features/document-translation), [DeepL, pravilnik o zasebnosti](https://www.deepl.com/en/privacy)

## Google Translate in Microsoft

Google Translate je brezplačen in podpira slovenščino. Na računalniku v brskalniku izberete Documents in naložite datoteko .docx, .pdf, .pptx ali .xlsx do 10 MB, PDF ima lahko največ 300 strani. Na telefonu prevajanje dokumentov ni na voljo. Besedilo v slikah in na skeniranih straneh PDF ostane v izvirniku.

Za plačljivo storitev Cloud Translation, ki jo podjetja vgradijo v svoje programe, Google navaja, da besedilo hrani le na kratko v pomnilniku, da ga prevede, in da poslane vsebine ne uporablja za učenje svojih prevajalnikov. Enakega zagotovila za brezplačni Google Translate v Googlovi pomoči nismo našli.

Microsoft prevajanje vgradi v Word, Excel, PowerPoint, Outlook in OneNote. Word lahko prevede celoten dokument in ustvari novo, prevedeno kopijo. Za to morate biti povezani v internet in imeti vklopljene povezane storitve Office (connected experiences). Za razvijalce je na voljo Azure Translator, ki slovenščino podpira tudi za prevajalnike, prilagojene lastnim besedilom (Custom Translator). Microsoft zanj navaja, da besedil ne shranjuje, dokumente pa po prevodu trajno izbriše.

Viri: [Google Translate](https://translate.google.com/?sl=en&tl=sl), [Google, prevajanje dokumentov](https://support.google.com/translate/answer/2534559?hl=en&co=GENIE.Platform%3DDesktop), [Google Cloud, raba podatkov](https://docs.cloud.google.com/translate/data-usage), [Microsoft, prevajanje v Officeu](https://support.microsoft.com/en-us/office/translate-text-into-a-different-language-287380e4-a56c-48a1-9977-f2dca89ce93f), [Microsoft, jeziki Azure Translator](https://learn.microsoft.com/en-us/azure/ai-services/translator/language-support), [Microsoft, podatki v Azure Translator](https://learn.microsoft.com/en-us/azure/ai-foundry/responsible-ai/translator/data-privacy-security)

## ChatGPT, Claude in Gemini kot prevajalnik

Klepetalniku lahko poleg besedila poveste, komu je prevod namenjen, kakšen naj bo ton in katere izraze mora uporabiti. Anthropic v dokumentaciji za Claude svetuje, da izrecno navedete izvirni in ciljni jezik, da prosite za naraven, idiomatski jezik, kot bi ga napisal rojeni govorec, in da upoštevate kulturne razlike, ne samo besed. Če želite samo prevod brez komentarjev, to zapišite.

Primer navodila, ki ga lahko prilagodite:

> Prevedi spodnje besedilo iz angleščine v slovenščino. Bralci so stranke podjetja, zato uporabljaj vikanje in poslovni, a ne tog ton. Te izraze vedno prevedi tako: "invoice" je "račun", "lead time" je "dobavni rok", "warranty" je "garancija". Ohrani vse številke in imena. Na koncu posebej naštej izraze, pri katerih nisi prepričan v prevod. Vrni samo prevod in ta seznam.

Anthropic in OpenAI objavljata rezultate svojih modelov za 14 jezikov, slovenščine med njimi ni. Informacijski pooblaščenec opozarja, da si orodja AI lahko izmislijo vsebino, zato je treba odgovor vedno preveriti.

**Kaj to pomeni za vas:** po naši oceni je klepetalnik boljša izbira, ko je pomemben ton (dopis, objava, odgovor stranki) ali ko želite besedilo hkrati prevesti in prilagoditi. Za dolge dokumente, kjer mora ostati vsak stavek in oblika datoteke, je namenski prevajalnik zanesljivejši, ker klepetalnik lahko kaj izpusti ali preoblikuje. Kako napisati dobro navodilo, piše v vodniku [Kako napisati dober prompt](/vodniki/kako-napisati-dober-prompt/), kako doseči slovenske odgovore v ChatGPT pa v vodniku [ChatGPT v slovenščini](/vodniki/chatgpt-v-slovenscini/).

Viri: [Anthropic, večjezičnost](https://platform.claude.com/docs/en/build-with-claude/multilingual-support), [OpenAI, večjezični MMLU](https://github.com/openai/simple-evals/blob/main/multilingual_mmlu_benchmark_results.md), [Informacijski pooblaščenec, priporočila (PDF)](https://www.ip-rs.si/fileadmin/user_upload/Pdf/Priporocila/Varna%20in%20odgovorna%20uporaba%20UI%20pri%20delu_%20Priporo%C4%8Dila%20za%20javne%20uslu%C5%BEbence_10feb2026.pdf)

## Slovenska in evropska javna orodja

Na portalu Slovenščina.eu je prevajalnik med slovenščino in angleščino, ki je nastal v projektu Razvoj slovenščine v digitalnem okolju (RSDO). Projekt je potekal od 2020 do 2023, sodelovalo je dvanajst univerz, raziskovalnih ustanov in podjetij, financirala pa sta ga Republika Slovenija in Evropski sklad za regionalni razvoj. V polje prilepite do 5.000 znakov in izberete smer prevoda. Izvorna koda in podatki projekta so prosto dostopni pod odprtimi licencami. Kaj se zgodi z vnesenim besedilom, stran ne navaja.

Razvijalci so v dokumentu ob koncu projekta zapisali, da je njihov prevajalnik na slovenski testni zbirki SloBench primerljiv z eTranslation, Google, Microsoft in DeepL, pri pravnih besedilih iz slovenščine v angleščino pa naj bi jih prekašal. Gre za lastno oceno razvijalcev s stanjem iz leta 2023.

eTranslation je prevajalnik Evropske komisije za vse uradne jezike EU, torej tudi slovenščino. Brezplačno ga lahko uporabljajo javne uprave, mala podjetja s samozaposlenimi vred, akademske ustanove, nevladne organizacije, projekti programa Digitalna Evropa in kandidati za delo v institucijah EU, če so iz EU ali iz države, pridružene programu Digitalna Evropa. Naročnine ni, omejitve rabe Komisija ne navaja. Za dostop potrebujete račun EU Login in registracijo na portalu jezikovnih orodij. Komisija navaja, da podatke obdeluje po pravilih EU o varstvu podatkov in jih nikoli ne uporabi za učenje komercialnih modelov AI.

**Kaj to pomeni za vas:** za malo podjetje ali samostojnega podjetnika je eTranslation po naši oceni najprej vredno preizkusiti, ko prevajate zaupne dokumente in ne želite plačevati naročnine.

Viri: [Slovenščina.eu, prevajalnik](https://slovenscina.eu/prevajalnik), [Slovenščina.eu, o projektu](https://slovenscina.eu/o-projektu), [RSDO, načrt razvoja strojnega prevajanja (PDF)](https://www.cjvt.si/rsdo/wp-content/uploads/sites/18/2023/03/Trajnostni_nacrt_razvoja_RSDO_DS4-Strojno_prevajanje.pdf), [Evropska komisija, jezikovna orodja](https://translation.ec.europa.eu/tools-and-resources/ai-translation-and-language-tools_en)

## Kako se meri kakovost prevodov v slovenščino

Kakovost strojnega prevajanja se meri samodejno: strojni prevod se primerja s človeškim prevodom istega besedila. Mera BLEU šteje, koliko zaporedij besed se ujema, BERTScore oceni, kako podoben je prevod po pomenu. Za slovenščino tako primerjavo objavlja lestvica SloBench Centra za jezikovne vire in tehnologije Univerze v Ljubljani. Rezultate in njihove omejitve smo opisali v vodniku [Kako dobro AI zna slovensko](/vodniki/kako-dobro-ai-zna-slovensko/).

Vir: [SloBench, prevajanje iz angleščine v slovenščino](https://slobench.cjvt.si/leaderboard/view/8)

## Kako varno prevedete zaupen dokument

Informacijski pooblaščenec svetuje, da v orodja AI ne vnašate osebnih, zaupnih in drugih varovanih podatkov, razen če je to za konkretno orodje in namen izrecno dovoljeno. Ne lepite celotnih besedil dokumentov in vnesite le toliko podatkov, kot je nujno. Opozarja tudi, da brisanje imena, naslova in EMŠO še ne pomeni, da posameznika ni mogoče prepoznati.

Pred prevodom pogodbe, ponudbe ali kadrovskega dokumenta naredite tole:

1. Preverite, ali interna pravila podjetja dovoljujejo prevajanje takega dokumenta z zunanjim orodjem in s katerim.
2. Ne uporabljajte brezplačnega DeepL ali osebnega paketa klepetalnika. Pri obeh se besedila lahko uporabijo za učenje.
3. Izberite storitev, ki po navedbah ponudnika besedil ne uporablja za učenje: DeepL Pro, Azure Translator, Google Cloud Translation, eTranslation, če ste upravičeni, ali poslovni paket klepetalnika s pogodbo o obdelavi podatkov.
4. Iz dokumenta odstranite podatke, ki za prevod niso potrebni, na primer priloge s podatki strank.

Kateri paketi klepetalnikov ne uporabljajo pogovorov za učenje, piše v vodniku [Kateri podatki ne sodijo v ChatGPT](/vodniki/varna-raba-ai-v-podjetju/).

Viri: [Informacijski pooblaščenec, priporočila (PDF)](https://www.ip-rs.si/fileadmin/user_upload/Pdf/Priporocila/Varna%20in%20odgovorna%20uporaba%20UI%20pri%20delu_%20Priporo%C4%8Dila%20za%20javne%20uslu%C5%BEbence_10feb2026.pdf), [DeepL, pravilnik o zasebnosti](https://www.deepl.com/en/privacy), [Evropska komisija, jezikovna orodja](https://translation.ec.europa.eu/tools-and-resources/ai-translation-and-language-tools_en)

## Kako ohranite enotne izraze

V DeepL v prevodu kliknete besedo, izberete drug prevod in DeepL vas vpraša, ali naj ga uporablja vedno. Tako nastane glosar. Glosarje lahko pripravite tudi ročno ali jih naložite iz datoteke, v ekipi pa si jih delite. V brezplačni različici in paketu Individual je v glosarju le 5 izrazov na jezikovni par, v paketu Team pa 5 glosarjev s po 1.000 izrazi.

Pri klepetalniku seznam izrazov zapišete v navodilo, kot v primeru zgoraj. Če prevajate pogosto, ga shranite v navodila po meri ali v projekt, da ga ni treba vsakič prilepiti.

Uveljavljene slovenske izraze poiščete v javnih terminoloških zbirkah. Evroterm je večjezična terminološka zbirka Sektorja za prevajanje in lektoriranje pri Generalnem sekretariatu Vlade. IATE je terminološka zbirka institucij EU. Terminološki portal projekta RSDO združuje slovenske strokovne slovarje, med njimi davčni slovar in slovar s področja umetne inteligence.

Viri: [DeepL, glosarji](https://www.deepl.com/en/features/glossary), [DeepL, cene](https://www.deepl.com/en/pro/change-plan), [Vlada RS, Sektor za prevajanje in lektoriranje](https://www.gov.si/drzavni-organi/vladne-sluzbe/generalni-sekretariat-vlade/o-generalnem-sekretariatu-vlade/sektor-za-prevajanje), [Evroterm](https://evroterm.vlada.si), [IATE](https://iate.europa.eu/home), [Terminološki portal](https://terminoloski.slovenscina.eu/)

## Kaj preverite po strojnem prevodu

Strojni prevod je osnutek. Preden ga pošljete ali objavite, ga preberite v celoti in preverite te stvari:

1. Številke, zneske in datume. V slovenščini tisočice ločuje pika, decimalke pa vejica: 1.500 in 0,5 %.
2. Imena oseb, podjetij in krajev ter njihovo sklanjanje.
3. Ali manjka kak stavek ali odstavek ali je kaj dodanega. Primerjajte dolžino odstavkov z izvirnikom.
4. Strokovne izraze po vašem glosarju, tudi tam, kjer so v izvirniku okrajšani.
5. Vikanje ali tikanje in ton, ki ustreza bralcu.
6. Dvojino, spol in ujemanje, ki jih angleški izvirnik ne nakaže.
7. Besedilo v slikah, tabelah in skeniranih straneh, ki ga prevajalnik morda ni prevedel.

**Kaj to pomeni za vas:** pri pogodbah in drugih dokumentih s pravnimi posledicami naj prevod po naši oceni pregleda nekdo, ki dobro pozna oba jezika in področje. Kako sistematično preverjati izhode orodij AI, je v vodniku [Kako preveriti, ali AI deluje](/vodniki/kako-preveriti-ali-ai-deluje/).

Viri: [Informacijski pooblaščenec, priporočila (PDF)](https://www.ip-rs.si/fileadmin/user_upload/Pdf/Priporocila/Varna%20in%20odgovorna%20uporaba%20UI%20pri%20delu_%20Priporo%C4%8Dila%20za%20javne%20uslu%C5%BEbence_10feb2026.pdf), [Google, prevajanje dokumentov](https://support.google.com/translate/answer/2534559?hl=en&co=GENIE.Platform%3DDesktop)
