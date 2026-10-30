# Slovenski test modelov: predlog metodologije

Predlog z dne 14. oktobra 2026, čaka Anžetovo odločitev. Nič od tega še ni na strani.

## Zakaj

Vodnik "Kako dobro AI zna slovensko" se opira na tuje in akademske lestvice (EuroEval, SloBench,
arena CJVT). Te so dragocene, a zaostajajo za novimi modeli (na SloBenchu so modeli iz leta
2024, Claude na areni CJVT ni ocenjen) in merijo naloge, ki niso pisarniško delo. Lasten test, ki
ga ponovimo ob vsakem novem modelu, bi bil edina taka primerjava v slovenščini: dober razlog za
ponovne obiske, za omembe v medijih in za povratne povezave.

Test ne sme trditi več, kot meri. Je primerjava na majhnem, javno objavljenem naboru nalog, ne
znanstvena meritev.

## Naloge (20, javne)

Pet skupin po štiri naloge. Vse naloge in navodila za ocenjevanje so objavljeni, da lahko vsak
test ponovi. Primeri so izmišljeni in splošni, brez podatkov iz resničnih podjetij.

1. **Slovnica, ki jo modeli lomijo:** dvojina ("Ana in Maja sta ..."), sklanjanje lastnih imen
   in tujih imen, ujemanje števnika (2, 3, 5 izdelkov), vikanje skozi celoten dopis.
2. **Poslovno pisanje:** uradni dopis občini, odgovor na reklamacijo, vabilo na dogodek, oglas
   za delovno mesto (spolno nevtralen zapis).
3. **Razumevanje:** povzetek slovenskega pravilnika ali razpisa (javno dostopen dokument),
   odgovor na vprašanje iz besedila, izpis rokov in zneskov v tabelo, prepoznava, česa besedilo
   ne pove.
4. **Prevajanje in prilagoditev:** angleški poslovni mail v slovenščino, slovensko besedilo v
   preprost jezik, strokovni izrazi po danem glosarju, slovenski zapis števil in datumov.
5. **Slovenske okoliščine:** praznik ali rok iz slovenske zakonodaje z virom, slovenski
   pravopis (velika začetnica pri ustanovah), zapis naslova in davčne številke, naloga, pri
   kateri je pravilen odgovor "tega ne vem".

## Kako ocenjujemo

- Vsak odgovor dobi od 0 do 3 točke po vnaprej objavljenem merilu za to nalogo (na primer pri
  dvojini: 3 = brez napak, 2 = ena napaka, 1 = več napak, 0 = dvojina ni uporabljena).
- Ocenjuje človek, ne AI. Predlog: Anže oceni vse, drugi ocenjevalec (lektor ali učitelj
  slovenščine) neodvisno oceni vsaj četrtino odgovorov; razlike se zapišejo.
- Ocenjevalec ne ve, kateri model je napisal odgovor (odgovori dobijo naključne oznake).
- Vsak model dobi isti prompt, v privzetih nastavitvah, v klepetalniku in prek API, kar je
  navedeno ob rezultatu. Vsako nalogo poženemo enkrat; to je slabost, ki jo navedemo.

## Kateri modeli

Tisti iz tabele na `/modeli/`, ki so na voljo slovenskim uporabnikom: najmanj vodilni model
Anthropica, OpenAI, Googla in Mistrala, Microsoft Copilot (klepet) in slovenski GaMS. Ob novem
vodilnem modelu ga dodamo in test ponovimo samo zanj.

## Objava

- Stran `/slovenski-test/` (ali vodnik) s tabelo točk po skupinah, datumom testa, različico
  modela in povezavo na vse odgovore (kot datoteka v repu, da je vse preverljivo).
- Brez skupne "zmagovalne" ocene v naslovu; besedilo pove, kje so razlike in kje jih ni.
- Rezultat gre v tedenski pregled in v newsletter, ko je nov model ocenjen.

## Kaj lahko avtomatizira agent

- Pošiljanje nalog modelom prek API in shranjevanje odgovorov (skripta, za vsak model en
  ključ API; strošek je nekaj evrov na krog).
- Priprava slepe preglednice za ocenjevanje (naključne oznake).
- Izračun točk in izris tabele iz izpolnjene preglednice.

Ocenjevanja agent ne opravi. Pri klepetalnikih brez API (Copilot) odgovore prilepi človek.

## Odločitve za Anžeta

1. Ali test sploh delamo (časovno: približno 2 do 3 ure ocenjevanja na krog s 6 modeli).
2. Kdo je drugi ocenjevalec.
3. Ali naj bodo ključi API na računu ej-aj (strošek) in kdo jih hrani.
4. Ali najprej objavimo samo naloge in merila, da dobimo odziv, in rezultate šele nato.
