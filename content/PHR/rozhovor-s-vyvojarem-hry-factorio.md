---
title: Rozhovor s vývojářem hry Factorio
---
- Vývojáři:Michal Kovařík a ???

- C++
- Allegro - graficka knihovna, multiplatformni
- primitivne napsany kod, pro jednoduchou expanzi
- determisticka lockstep situace


## Transkript z videa:
Ahoj, jsem Honza Novotný z FG Forrest. Ahoj, já jsem Petr Fershmann z FNX a Dativery. Vítejte u druhého dílu našeho workshopu o Factoriu.
Tentokrát se budeme věnovat technickým záležitostem, které jsme již rozebrali v minulém díle. A opět si budeme povídat s Michalem Kovaříkem.
Tak se bavte.
Přichází druhá část, kterou jsme se rozhodli zaměřit trochu techničtěji. Začal jsem zde otázkou,
kterou mě Petr nenechal dokončit, takže bych se na ni přece jen rád zeptal. Pro mě... Opravdu se mi líbilo, že hra
je již pro všechny tři platformy, Který, koneckonců, když se akcie,
je většinou určen pro Windows, že? Co vás k tomu vedlo a stojí to za to?
No, to je opět trochu náhoda. Protože... náhodou.
No, protože já pracuji s Windows a kolega, který se ke mně přidal, pracuje s Macem. Takže první věc, kterou udělal, když se připojil k projektu,
umožnil jeho kompilaci na Macu a pokračuje v jeho vývoji na Macu. A pak se k nám připojí třetí programátor,
dobře pracuje s Linuxem. A protože jsme tak... Protože jsme tak punkoví, víte - trochu svobodní,
tak ať si to každý dělá, jak chce. a pokud to umí zprovoznit na Linuxu, ať si to na něm vyvíjí. Takže to byl jen důsledek této skutečnosti,
že vývojáři rádi pracují na různých platformách A ve skutečnosti to není tolik práce.
Protože je napsán v jazyce C++, jádro kódu zůstává stejné. Ve skutečnosti jen některé...
Skutečně bolestivé jsou periferie, jako je ovládání klávesnice a kopírování a vkládání.
a další věci kolem, drobnosti, to se nasčítá. Jakou knihovnu používáte pro grafiku?
Tohle je trochu nejasné. Používáme - pokud jste o něm někdy slyšeli - Allegro. Jasná věc.
V 90. letech se používal v hrách pro DOS. Ne, i později. Ale znám to jen ze světa Linuxu.
Možná i později, ale jeho velmi hobby... Hobby knihovna. Není to moc profesionální.
Ale to je dáno i tím, že jsem neplánoval, že to bude nějaký velký projekt. Zpočátku jsem to plánoval jako hobby projekt,
a pak napůl koníček. Ale nějak jsme u toho zůstali. V Allegru jsme upravili spoustu věcí. Máme vlastní pobočku.
V něm pokračujeme v optimalizaci. Naše Allegro kreslí asi třikrát rychleji než oficiální Allegro.
A ty to nedáš... No, něco jsme jim dali, ale je to s nimi složité. Vždycky je s tím hodně práce, než to dostanou do kufru.
Ale spíše... Kdybychom dělali jakýkoli jiný projekt, udělali bychom ho v něčem jiném.
Ale na začátku jsem chtěl něco opravdu jednoduchého. Tak, aby... Tak nějak jsem ztratil nit.
Allegro, mluvili jsme o platformách. Možná to úzce souvisí s tím, že Direct X můžete používat i ve Windows, i když jen na periferiích.
Ano, to je výhoda Allegra, jeho multiplatformnost. Umí Open GL, Direct X a rozhraní je stejné.
Tak jsem prostě napsal... A zároveň máme ve hře samozřejmě vlastní rozhraní.
takže pokud bychom chtěli přejít na jinou grafickou knihovnu, nemuseli bychom měnit celý kód, ale jen jeho úzkou část.
Takže to tady nebylo příliš bolestivé a... Výhoda... protože jsme měli tři programátory a každý měl svůj vlastní systém.
udržovali, Takže to nebylo jako... kdybychom se vyvíjeli na Windows a pak najednou museli předělat pro Mac,
nahromaděné problémy, to by bylo peklo. Ale protože to bylo nepřetržité, bylo to v pořádku.
Ani sis toho nevšiml - bylo to spontánní. A kde se hra prodává nejlépe? Na které platformě?
No, většina ve Windows, myslím, že poměry jsou něco jako 70/15/15 Hmm, to je dobré.
Jsem si jistý, že naši hru hraje více linuxových hráčů, než jaký je poměr linuxových uživatelů mezi uživateli PC.
Chtěl jsem to říct - obvykle jsou to nějaká 2 %. My ve FlexiBee jsme to měli podobně.
Nevím, jestli jich bylo 15 nebo více, ale měli jsme také hodně linuxáků. Protože na Linuxu je méně her, takže...
Ano, dělali jsme účetní systém pro Mac a Linux, a tam jsme byli jediní. Ano, a někdy můžete vidět ty seznamy "Hry, které běží na Linuxu".
Lidé mají rádi, když má nativní podporu. To je jeden z důvodů, proč je to víc, myslím.
Rád bych věděl, zda máte prodejní platformy jako Steam - prodáváte pouze na Steamu?
Nebo také GOG či něco jiného? Dříve jsme prodávali hlavně na našich webových stránkách,
stále to děláme, přímo. Na Steamu pak máte Steam Humble, ale ten prodává pouze klíče,
a na GOG jsme přešli teprve nedávno. Ale poměry jsou takové, jaké jsou,
v podstatě téměř vše je ve službě Steam. GOG je zanedbatelný a naše webová stránka...
Ani nevím, ale mám podezření, že je to taky tak. Ani nevím, jestli to ještě funguje, pravděpodobně ano. Je tam tlačítko koupit.
Je to tak, takže to pravděpodobně stále nějak funguje, ale moc to nedělá. Co je potřeba, integrace se Steamem?
Co to znamená vydat ve službě Steam? Mají pro vás nějakou aplikaci, kterou můžete spustit? No, mají aplikaci, ale je na vás, jestli ji použijete, nebo ne.
Aplikace je pro věci jako Když mám úspory, a hraju jednou doma a pak v práci,
pak se mi přenesou úspory a podobně. Což se mi stává docela často, často to zkouším.
A... Takže v práci nepracuješ, ale hraješ. Někdy ano. Našel jsem si ideální práci,
protože když hraji, mohu říci, že "dělám výzkum". Chtěl jsem říct, že hraješ jen ten jeden, ale ty hraješ různé.
Ne, to není hraní, to je výzkum. Přesně tak. aah, to chci taky. Takže ten Steam... tam není žádná hlubší integrace?
No, my... Samozřejmě tam máme achievementy, savy a tak, Ty achievementy jsme dělali speciálně pro Steam,
Vydat hru bez achievementů je trochu divné. Nebo ji vydat jen se dvěma. Takže to dalo trochu práce,
ale opět jsme se snažili... Stále se snažíme, aby to bylo hratelné nejen na Steamu, takže jsme nějakým způsobem vytvořili achievementy,
že budou fungovat, i když nemáte... hru... Máme verzi pro Steam,
a verze bez systému Steam. Verzi bez Steamu lze uložit do archivu Zip a přehrávat ji lokálně.
Nemusíte ji instalovat, stačí ji umístit na flash disk a hrát kdekoli. V tomto... Teď trochu odbočím, ale tohle...
Dokonce i v otázce pirátství, protože hry hraji a hraji dlouho,
Vím, že se každá hra pirátí, tomu se nedá zabránit. A většinou ty pirátské překážky obtěžují hlavně ty, kteří mají hru oficiálně.
Proto jsme se rozhodli, že se o to nebudeme vůbec starat a stáhneme si archiv Zip a uložíme jej na disk Flash.
Protože je nám to jedno, mají naši hráči tuto pohodlnou možnost. A pokud ji kopírují, tak ji kopírují. Snažíme se k tomu přistupovat jako...
Motivací ke koupi hry je účet, díky kterému máte přístup k portálu modů,
když hrajete multiplayer, máte ověřenou přezdívku, a pokud server vyžaduje autentifikaci, což většina z nich vyžaduje, pak...
Takže se snažíme... a získáváte automatické aktualizace a tak dále. Takže se snažíme nabídnout něco navíc, ale nikoho neobtěžujeme, jen abychom se ujistili, že hra je legálně vlastněná.
Ale verze pro Steam má tuto ochranu implicitně. Takže pokud jste na Steamu...
Pokud si ji koupíte přímo na Steamu, získáte verzi, ve které ji nemůžete jen tak nahrát na disk.
To je ten rozdíl. Ale my se tím nemusíme zabývat, je tu nějaký balíčkovač nebo...
Data nahrajeme do služby Steam a ta se postará o zbytek. Práce s ním je minimální,
přímo se ujistit, že se tam nějakým způsobem dostane. Takže jestli jsem to správně pochopil,
víceméně z nějakého motoru na začátku, začali jste ho psát od nuly,
na zelené pastvině. No a já jsem si vzal příklad z Allegra - jak nakreslit bitmapu. a kód se postupně rozrůstal, až vzniklo Factorio.
Takže je to vlastně Hello world! Jistě. Dokonce... to opravdu...
Mám ještě Git, ten starý, první revize, a tam je opravdu něco jako: pokud jeden tlačí nahoru, přesunout držení nahoru
a tak dále, 50 řádků ovládacích prvků. Takže vydáte verzi 0.0.01
A to krok za krokem, evolucí... Nebylo to tak, že bychom si někdy řekli:
Zahoďme ji a začněme psát znovu od začátku. Tomu nevěřím. Spousta lidí tomu věří, např:
Teď už je to jen nepořádek, zahoďme ho a začněme pěkně od začátku. Hmm, ale to...
Myslím, že je vždy lepší nepořádek uklidit, protože jinak děláte jen různé chyby.
Měli jste nějaké koncepční kroky, kdy jste zjistili, že jste dosáhli stropu, uvědomili jste si, že takhle to dál nejde, a museli jste to předělat?
To je otázka... Měli jsme například... Co se někdy stalo...
Snažím se psát velmi pragmaticky. Jako - jsou dva extrémy, jeden je, že to donekonečna kazíš,
a složitost kódu kvadraticky roste, v jednu chvíli se stane nezvládnutelným.
A druhým extrémem je, když se vše dělá extrémně univerzálně, rozšiřitelně, Tak pomalé a komplikované.
Každá jednoduchá věc se... A nakonec se stává ještě méně rozšiřitelnou, protože protože všechno je rozšiřitelné, prokousat se všemi vrstvami abstrakce,
je tak obtížný, že se nakonec stává méně rozšiřitelným. Takže to děláme tak, že dokud je to jednoduché, tak to prostě jednoduše napíšeme,
a hlavně primitivně. A to pouze v případě, že existuje nějaký skutečný důvod pro to, aby byl univerzální nebo rozšiřitelný, nebo pokud se stane příliš nepřehledným,
pak to celé vezmeme a vyčistíme, aby to zůstalo nějak srozumitelné.
Děláme to takhle celou dobu, takže kdykoli to bylo moc špinavé, udělali jsme místní úklid.
To je to, co nám vyhovuje. A technologické - technologické limity.
Počkat, to je příliš obecné. Ne, technologickým jsem myslel něco jako... Co bylo technologicky nejtěžší?
No technologicky nejtěžší byl asi multiplayer, že? To byl největší... největší
kousek něčeho, co jsme s sebou táhli od samého začátku. Protože jsme věděli...
Už od začátku jsme věděli, jak bude vypadat architektura multiplayeru.
Byl jsem - a stále jsem - velmi vášnivý hráč Starcraftu. A vím docela dost o tom, jak to funguje,
protože jsem to taky hodně ladil, dokonce jsem psal aplikace v C++ pro Starcraft. Které se používají dodnes, takže vím, jak to funguje zevnitř.
A věděl jsem, že to je ten typ modelu, který budu mít, a z četby některých blogů jsem věděl, že všechny RTS fungují takto.
Takže jsem od začátku věděl, jaký bude model, takže jsem některé věci ve hře od začátku upravil tak, aby to bylo možné.
Mohl byste nějak představit model? Model je následující: Nejdříve musí být hra deterministická.
Tento model je založen na tzv. deterministické simulaci v režimu lockstep. Donedávna bych nevěděl, co to znamená.
Dozvěděl jsem se to až poté, co jsem napsal multiplayer, co to je.
A je založena na: Za prvé - hra je deterministická, což znamená, že pokud vezmu jeden soubor s uloženými daty,
a načíst ji na dvou počítačích nebo dvakrát na stejném počítači nebo jakkoli jinak. A nechám to hrát a po určité sadě kroků to vždycky skončí v úplně stejném stavu.
což je atribut, který by měl být v počítačových programech téměř automatický, ale není,
to rozhodně není pravda. Zvláště čím je program složitější a optimalizovanější, vyladěnější, tím více je...
Například v jazyce C++ je typicky nejjednodušší, když mám sadu ukazatelů,
Jen... Ukazatel je jedinečný, vím, že každý objekt je tam jen jednou, nemusím se o něj příliš starat. Ale pointer... jeho hodnota, která pak určuje pořadí, je pokaždé jiná.
a po iteraci sady se pořadí nakonec změní. A jakmile je pořadí jiné, může to způsobit různé...
nedeterministické chování. A takových věcí je spousta, typicky nějaká pomocná struktura,
určitý řád věcí. Nejčastěji se jednalo o pořadí věcí. Například mám pomocnou strukturu, nevím...
"Jací hráči se nacházejí v této části mapy." Jako další, nad primárními daty.
A já to nějak udržuji, když někdo přijde, přidám ho, když odejde, odeberu ho. A když načítám hru, tak ten seznam doplňuji, jak se ti hráči načítají.
A tento seznam - pokud výslovně neuložíte jeho pořadí, pak kdykoli někdo hraje, uloží hru a pošle ji někomu jinému.
pak je jeho pořadí v této pomocné struktuře jiné. a to je typický problém, který se stokrát opakoval.
Na různých místech. Možná přeháním, ale řekněme, že mnohokrát. Minimálně desítky. A...
A protože se pořadí liší, pak jakmile vytisknu seznam všech hráčů, nebo jim chcete doručit položky v daném pořadí,
A je mi jedno, v jakém pořadí, jen si potřebuji udělat nějaký seznam. Takové věci se stávaly často.
Pak věci jako... Speciality jako... Takže klíčem je vytvořit nějaký obchodní klíč a
udržovat čistý hash. Ne, pro nás bylo klíčové, že kdykoli jste měli tuto objednávku, měli jste dvě možnosti.
Buď si to objednáte deterministicky, nebo to můžete udělat podle nějakého klíče, který je homogenní.
Například když mám množinu ukazatelů, nebudu ji řadit podle nich, ale podle nějakého atributu objektu.
Což je všude stejné. Můžete je tedy seřadit, určit pořadí.
Nebo můžete objednávku uložit. V uložení hry uložíte i samotnou objednávku.
A záleží na situaci, co je pro výkon důležitější. Někdy je prostě důležitější, aby byl save menší.
Někdy je třeba zkrátit dobu běhu. Je třeba to promyslet individuálně.
Je někde ve hře prvek náhody? Samozřejmě, že hra obsahuje prvek náhody. Není to příliš deterministické.
Je tu šance. Ale to je jednoduché Generátor náhodných čísel může být deterministický. Pak se z něj stane pseudonáhodný generátor, ale...
hráčům je to jedno, nepoznají rozdíl. Každý náhodný generátor v počítači je jen pseudonáhodný.
Pokud nemáte tento oddíl, který zachycuje nějaký druh... Používají se stisky kláves, síťová komunikace.
Linux má Dev S random nebo U random? Že máte skutečná náhodná data převzatá právě z toho.
Může se však stát, že mu dojdou, a nedokáže generovat náhodná čísla. Ale řešit to má smysl v případě nějaké - počítačové bezpečnosti.
Ale pokud chci vědět, zda se avatar při střelbě trefí, pak je to opravdu jedno. Podívejte, právě teď hraju X-com.
a na začátku je to docela těžké. Takže uložíte-uložíte-uložíte-uložíte. A tak se mi to brzy stalo podezřelé,
že mám 90% šanci na zásah a pokaždé se netrefím. No, udělali to schválně, taky jsem se s tím setkal, vím o tom.
Mají úplně stejný problém jako my. Takže to je dobrý příklad. My - stejně jako X-com...
Stav generátoru, to je, řekněme, asi 20 bajtů. Uložíme ho do hry.
a při jeho načítání se generuje stále stejná sada čísel. A myslím, že X-com to nemá kvůli determinismu,
ale záměrně, aby se zabránilo zneužití ukládání a načítání. Takže se musíte naučit nejdříve střílet jinde,
vyměnit generátor a pak znovu střílet se stejným člověkem. No, vím, že pokud mám v generátoru aktuálně nízké číslo,
Musím si vzít jiného člověka, který může chodit blíž, dokud nezíská 100%. takže i když mám v generátoru nízké číslo,
vždycky se trefí, že? A pak dostanu nové číslo z generátoru, takže můžu střílet s někým jiným s různými procenty.
Je to opravdu skvělé. Je super, že to trochu vyřešili.
Protože jinak to není žádná zábava, když můžete vždy uložit načíst, nikdy chybět budete zvládnout nic.
Nedávno jsem ji také hrál a moc se mi líbila. Celkově hra, jeho opravdu dobrá hra.
Odvedl jste spoustu práce. Vraťme se k multiplayeru. Ano. Takže generátor náhodných čísel nezpůsobuje žádné potíže,
Ale samozřejmě je zde mnoho velmi specifických věcí týkajících se C++.
Například jsme se docela báli - jak se tomu říká - operací s plovoucí desetinnou čárkou.
Je to jako... Nikdo nikdy neví, jak ty kousky dopadnou. A naštěstí existují přísné kompilační mody,
kde se čísla skutečně chovají podle normy. To nebyl problém. Problémy způsobovaly věci jako sinus cosinus.
Protože sinus-cosinus je v C++ definován jako funkce, která dává sinus-cosinus, ale přesná čísla, algoritmy nebo přesnost nejsou nikde uvedeny.
Zjistíte tedy, že implementace jeho zápisu do standardní knihovny se liší pro všechny systémy - Windows, Linux i Mac.
A dostanete víceméně stejné hodnoty. Někdy ale dostanete jiný poslední kousek.
A musíme to všechno dodržovat. Máme různé kontrolní mechanismy, dokonce jsme provedli testy,
které ji kontrolují - zahrají si kousek hry a zkontrolují, že to přineslo stejné výsledky, jaké výsledky a tak dále.
A musí to být přísné, jiná možnost není. Takže pokud je poslední kousek v dutině jiný, je to problém.
A věci jako tato... Nebo například to, co není v C++ definováno, když máte dva parametry funkce.
V jakém pořadí by se tedy měly hodnoty parametrů vyhodnocovat. To není definováno?
Není. Což obvykle není problém, compilar si může vybrat, co je pro výkon vhodnější.
Pokud ale v obou případech zavoláte náhodný generátor, který je deterministický, pak je to někdy tak a někdy naopak.
A to byla velmi často opakovaná chyba, typicky nějaké x a y. To musí být velmi těžké najít.
A co se týče mulitplayeru, to mi také přijde technicky zajímavé, jak jsme se naučili způsob, jak ho hledat.
Dnes jsme se dostali do fáze, kdy je snadné ji najít. Metodou je...
Po určité době jsme vytvořili něco, čemu říkáme "těžký režim". To znamená, že hru vezmu,
uložit, a jak to běží, než v každém tick... tick je jako jeden krok simulace.
Uložím ji, načtu ji někam vedle do paměti a pak provedu stejný krok s oběma kopiemi.
A nejprve po každém načtení provedu CRC, máme způsoby, jak provést CRC buď celé hry, nebo jen...
Normálně, když lidé hrají multiplayer, nemohu udělat CRC celé mapy, to by bylo extrémně pomalé, dělám CRC jen některých klíčových hodnot.
A v tomto našem těžkém testovacím režimu vytváříme CRC celé mapy, přesný stav hry.
jako kdybyste provedli záchranu. Zkontroluji, zda je to stejné, a pak provedu aktualizaci v obou těchto kopiích zvlášť,
a ještě jednou zkontroluji, zda je CRC stejné. a tím často zjistíme takové věci.
Že když se chyba stane, najdu ji přesně v okamžiku, kdy se stala. A pak máme zvláštní
mod, že když uložíte hru, dobře tam jsou jen binární data, že? Zjistím rozdíl a co z toho poznám?
Takže máme speciální mod, který do těchto binárních dat ukládá naše pomocné značky typu "Data hráče začínají zde,
tady začíná jeho pozice, tady je tohle" Takže pokud je hodnota jiná, pak mohu nějak říct, že někdy je to jen jedna hodnota jiná,
a já si říkám, proč je to jinak, je to trochu detektivní. Docela zajímavé, jestli fakt. Někdy je to pořád dokola to samé,
někdy je to různorodé, takže musíte detektivně hledat, kde je problém, proč se to rozdělilo.
A strávil jsem nad tím tolik času, že jsem se málem zbláznil. Bylo to opravdu neuvěřitelné.
Protože hra nebyla na začátku deterministická a po dvou letech vývoje jste najednou museli všechno sladit.
A předtím, než jsme měli všechny tyto metody, než jsme je vybudovali. Než jsme si uvědomili, že se vyplatí je mít,
Na začátku jsem si přečetl binární uložení, Diffy těchto binárních uložení a snažil se v nich něco najít.
to bylo neuvěřitelné. Než jsme přišli na metody těchto těžkých procesů.
A... Takže to byl první krok, nějak ho donutit, aby byl deterministický.
Další hroznou věcí bylo, že jsme nevěděli, kdy to skončí. Třeba - hrál jsem to a zjistil, že to není deterministické.
Tak jsem opravil - jednu věc. A pak jsem si to pustil znovu a zjistil jsem další věc. A pak jsem jich opravil 50, aniž bych věděl, jestli mi zbývají už jen 3, nebo dalších 50.
A to bylo... A některé věci se objevily jen jednou za čas. Pouze pokud jste hru právě uložili a načetli.
v určitém konkrétním okamžiku, kdy něco. Takže teď máte těžký režim, který vám řekne, co kdy. Dnes máme těžký režim.
Bez něj to bylo velmi obtížné. Lamersova otázka: Jak přesně funguje synchronizace stavů?
a co by se pokazilo, kdyby nebyl deterministický. Dobře, můžu se k tomu dostat hned.
Stejně jako StarCraft, Age of Empires a v podstatě všechny RTS, které znám, to dělají takto.
Problém je v tom, že... Kdysi jsem četl blog o tom, jak ve Warcraftu 2 dělají multiplayer.
Popsali, jak to nakonec všechno naprogramovali a šli si zahrát první hru. Programátoři společně, lan.
Hráli asi 20 minut, pak se sešli a jeden řekl: a jeden z nich řekl: "Rok! Porazil jsem tě!" a ten druhý: "Počkej... Já jsem taky vyhrál."
Zjistili tedy, že se objevil přesně nějaký velmi malý rozdíl, a pak se objevil efekt motýlích křídel,
kde se někde hodnota mění o 0,001, A to způsobí, že avatar jednou někde netrefí.
A v jedné verzi hry plížení stále je a v druhé jeho smrt. A rozdíl se kumuluje čím dál víc.
A nakonec jsou ty hry úplně jiné. Takže to bylo jako...
To, co jsem zatím popsal, je dostatečně dobré, pokud hru jen hrajete, ničeho se nedotknete. Pak to bude fungovat.
A nyní stačí, abyste odesílali vstupní akci, kterou nazýváme. Z těch věcí, které ve hře děláte.
Třeba že máte toho chlapa, kliknete nahoru a on začne stoupat. A to se dělá tak, že...
Že to musí... ve stejnou dobu... začít... jako...
Třeba takto: Akce se musí uplatnit ve stejný okamžik ve všech počítačích. Takže když řeknu, že je zaškrtnuto 120,
a já chci jít nahoru, nemůžu začít jít nahoru hned, protože máme internet, a tak chvíli trvá, než se informace dostanou k ostatním hráčům.
Abychom však zachovali determinističnost simulace, musíme oba pohybovat avatarem ve stejném čase. A tak vytvoříte jakési okno.
a tomu se ve skutečnosti říká latence. Takže když řeknu, že okno je například nevím...
Jedna sekunda Pokud se zblázním, hra si myslí: Řekněme, že máme 60 tiků na sekundu,
takže v tick 180 je čas, kdy dojde k akci, a čas mezi nimi je čas na distribuci informací.
Všichni vědí, že jdu nahoru, a jakmile to přijde, stane se to. Samozřejmě nevýhoda...
Čím větší je okno, tím je odolnější vůči rušivým vlivům internetu. Pokud je totiž okno malé,
a já mám jen půl vteřiny a nedorazí ke všem, nemohou dokončit krok simulace.
dokud nebudou s jistotou vědět, zda něco udělám, nebo ne. Musí mít potvrzení, říkáme tomu klíšťový uzávěr.
Jeden krok musí být dokončen. A... Když je okno malé, pak se zpozdí pokaždé, když se kruh mírně přeruší.
Pokud je však okno dlouhé, trvá dlouho, než hra zareaguje na cokoli, co uděláte.
To je výzva, jak najít ideální velikost pro okno. Což jsme se dozvěděli později, nebo zjistili,
nejlepším řešením je, aby byl dynamický a neustále se měnil.
A dokonce zůstává pro každého hráče stejná. Například na začátku jsme měli architekturu peer-to-peer.
To znamená, že... Je to něco, co vypadá jako... Je to typický příklad teorie versus praxe.
Teoreticky vypadá architektura peer-to-peer skvěle. Máte... představte si, že máte řekněme 5 hráčů.
a každý je propojen s každým, kompletní graf. A výhodou je, že když stisknu nahoru
pak ji každý hráč obdrží přímo, takže je to pro něj nejrychlejší způsob, jak ji získat.
takže teoreticky, pokud všichni mají stejný internet a vše, doba odezvy se zkrátí na polovinu, místo toho, aby
mít jeden server, který funguje jako centrální bod, který pošlete na server, a ten ho pak pošle dál hráči.
Zpoždění se tedy zdvojnásobí. Na základě této jednoduché úvahy jsme tedy řekli: Musíme to mít, i když to bude těžší, je to nejlepší možné.
No, ale... ve skutečnosti je to úplně jinak.
Protože za prvé, ve skutečnosti ne všichni mají stejný, dobrý, připojení. A jakmile neexistuje centrální autorita, všechno je mnohem, mnohem složitější.
Byli jsme idealisté, chtěli jsme to zvládnout bez centrální autority. Takže když hraje 5 lidí a jeden z nich se odpojí,
bez ohledu na to, kdo to je, mohou zbývající 4 pokračovat ve hře. Nebo když to nějak zkrátíte, tak dva mohou pokračovat společně stejně jako tři.
Později jsme zjistili, že existuje mnoho zvláštních situací. Třeba že se někdo připojí a dva o tom vědí, ale tři ne,
a mezitím nějaké odpojení. a teď... tolik různých kombinací toho, co se může dít.
A co může.. Co si myslím, že dělají ostatní, co si myslí, že dělám já, co jsem potvrdil a co se mezitím může pokazit.
A bylo to tak složité, že jsme si uvědomili, že to vlastně nemá smysl.
To byla jedna věc, proč jsme přešli na... Vlastně vysvětluji, proč jsme přešli z peer-to-peer na centrální server.
Ne centrální, jako když máme centrální server, ale ve hře je jeden z hráčů nastaven jako server,
ten, kdo hru vytvořil, a ostatní se k němu hlásí. A další věc se týká latence, kterou jsem zmínil.
Protože máme server, který funguje jako centrální autorita a vše probíhá přes něj,
pak může operativně určit, co bude odesláno a co ne.
Řeší to spoustu komplikací. Nejdříve organizační Jak se hráči připojují a tak dále.
Měli jsme například... Když se hráč připojí, pak jako... No, člověk se to vždycky snaží dělat jednoduše a logicky.
Takže logicky zastavím hru, uložím ji, hráč ji pak načte, až ji dostane přes síť.
a jakmile ji načte, může vše a všichni pokračovat dál. A nakonec jsme zjistili, jak je to hrozné.
Protože hrajeme hru 5 hráčů, teď se někdo připojí a začne stahovat hru. a my všichni jen sedíme a čekáme a on stahuje dál a dál.
a najednou se zpomalí na b/s nebo 5 Kb/s a najednou čekáme 3 minuty.
A jeden hráč to může ostatním zkazit. A my jsme nevěděli, jak je to důležité,
abyste měli jistotu, že se nikdy nemůže stát, že by jeden hráč mohl ostatní zaseknout. Naučili jsme se to jistě - někdo se připojí,
Stačí, když se zastaví na tak dlouho, aby server uložil hru, a pak všichni pokračují ve hře, zatímco nováčci stahují,
a jakmile skončí, hra je před námi, že? Hrálo se dál po dobu, kdy stahovali.
A tak musí dohánět, snaží se hrát dvojnásobnou rychlostí, aby dohonili ostatní.
protože stále přijímá všechny jejich vstupy-akce, A jakmile je dohoní, mohou říct serveru Ok, jsem tady, teď můžu hrát taky.
A najednou, i když je jejich internet pomalý, nestíhají nebo něco podobného, je to jen jejich problém. Opět minimalizujete problém na jednoho hráče.
Ne celou hru. A jakmile hraje více než 5 nebo 10 hráčů, není jiná možnost, jak to udělat.
A to je věc, kterou jsme si na začátku vůbec neuvědomovali. Jak moc je důležité, aby to takto fungovalo.
A to... To je opět iterace, kdy jsme o ní zpočátku nic nevěděli,
a tak jsme se to museli naučit a mít energii na to, abychom si neřekli "koho to zajímá", ale abychom to předělali a v podstatě to celé přepsali.
A kolik hráčů hraje současně? Nebo o co jde? Hrál jsem jen demo... No a tady přichází opět přístup.
Nejprve jsme říkali: No, pokud to funguje přes Lan pro několik hráčů,
budeme spokojeni. A pak: Když to bude fungovat přes internet pro dva tři hráče, budeme spokojeni.
A pak to jednou fungovalo dva tři roky... Hráči vždycky... Takhle to nefunguje, zkoušejí, kolik to dokáže.
A pak řeknou: Hráli jsme to v deseti a nebylo to moc dobré. Tak to udělejte hratelné za deset, trochu to optimalizujte.
A stále se o to pokoušejí víc a víc. Snaží se ji zlomit, stejně jako v případě optimalizace. Takže... právě teď je to...
Provedli jsme několik zátěžových testů s aktuální verzí multiplayeru, které jsme požádali youtubera, aby natočil relaci.
a požádejte všechny, aby se přihlásili. A tam jsme měli maximum asi 400 hráčů. A to byl v podstatě limit.
Když to nezvládla ani síť. Ale řekněme, že 300 hráčů s dobrým připojením to může hrát.
To je hodně. Skvělé. A to je asi stokrát víc, než kolik jste mohli udělat předtím s modelem peer-to-peer, že?
A vůbec nebylo v plánu udělat z toho takovou megahru, ale když už se to snažíme udělat pořádně,
to se děje jako vedlejší produkt. To byla také nehoda. A cílem v multiplayeru je zničit nepřátelskou základnu?
Ne, ne, ne, vůbec ne. Multiplayer... Je to kooperace? Je to kooperace. V podstatě jen kooperace. Existují nějaké mody, takže si můžete zahrát mod
kde bojujete proti sobě, ale hra pro to není vůbec optimalizovaná. Je to trochu - zase punk.
Je vyvážená a umožňuje bojovat proti nepřátelům nebo proti nim přežít.
Bitva je ve hře celkově trochu druhořadá. Nepodíváme se na ni tak často.
Třeba když postavíte věž a ona začne okamžitě střílet, To není normálně žádný problém. Ale když přijde nepřítel, postaví věž, která je mnohem silnější než já.
hned vedle mě a začne střílet do mé základny, to je na nic, ne? A s takovými problémy se v normální hře nesetkáváme,
ale jakmile hráči začnou hrát znovu proti sobě, pokud bychom ji chtěli upravit pro nějaký druh soutěžní hry nebo něco podobného,
to by dalo hodně a hodně práce. Proto jsme prozatím řekli, že je to neúplné, ale pokud to chtějí zkusit, mohou.
Především 90 % hráčů hraje kompetitivně (myslel kooperativně), což vede k věcem jako... a pak tu máme griefing a podobně.
To znamená, kdo dosáhne nejvyššího pokroku nebo kdo nakonec odletí s raketou? Ne, spolupráce znamená, že spolupracují,
spolupracují a snaží se tuto továrnu vybudovat společně. Neexistuje žádné "kdo je nejlepší", o tom to moc není. Jde spíše o to.
dobrý pocit z týmové práce. Multiplayer moc nehraju, jen když hrajeme v kanceláři, což je trochu jiné.
Ale když jsem se připojil k jedné z těch her o 100 lidech, tak to mělo své kouzlo, protože psaní v chatu nemělo smysl.
protože tam bylo příliš mnoho lidí. Takže něco stavíte a ve stejné části mapy je dalších 5 lidí,
teď to postavíte a snažíte se mu vysvětlit, jak to chcete udělat, postavíte to, on to smaže: "Ne, postavím to támhle."
A teď už jen tím, co budujete a ničíte, se musíte na něčem shodnout a většinou to lidé dělají.
je to trochu jako pantomima. Jako by to mělo své kouzlo,
A když se dohodnete, oni se od vás něco naučí nebo vy od nich,
která má svou přidanou hodnotu. A to jsme chtěli. Právě jste navrhl... jaké to je,
když se přihlásíte do hry s hráči, učí se, nebo máte nějaký příběh?
Teď odbočím od technických témat, ale myslím, že by to mohlo být zajímavé téma. No samozřejmě... Když se přihlásíte jako autor,
Na začátku... a 100 lidí tam hraje vaši hru. No to je samozřejmě perfektní pocit, když se přihlásíte a...
Zvlášť když jsme dělali ty testy A na začátku jsme byli ve hře dobří,
protože jsme byli jediní, kdo ji opravdu hrál, a teď se často nechávám inspirovat hráči a tím, co dokážou vymyslet.
a líbí se mi, když vymyslí něco, co by mě nenapadlo. Ve hře můžete dělat věci v... Nechci říct nekonečné,
ale řekněme, že téměř nekonečně mnoha způsoby. A najednou vidím, že tam někdo něco vymyslel,
takže když dnes stavím továrnu, polovinu věcí jsem viděl někde jinde a líbily se mi. Takže to začínám dělat podobně.
Takže hráči mě určitě hodně inspirují. jako - tohle není úplně příběh, ale...
Někdy vymýšlejí způsoby, jak ve hře použít věci, které nás nenapadly.
Například - ve hře je auto. Takže se můžete přepravovat rychleji.
V autě je také inventář pro uložení vašich věcí. A ve hře jsou pásy na přenášení věcí a na pás si můžete dát jen omezené množství věcí.
A pak někdo přišel na to, že když se auto nasadí na pás, tak se auto rozjede. A když použijete vkládače, vloží do zásoby autíček věci.
Měl tedy pás plný aut, který se pohyboval v kruhu, a tím donutil pás, aby měl stokrát větší kapacitu.
Protože místo na pás se věci dávaly do auta. A když jsem to viděl, řekl jsem si: "Hej, to je fakt skvělý."
a nebudeme zakazovat, když to někdo bude chtít udělat. Je to trochu omezené, jako že to nemůže jít pod zem a podobně.
Je skvělé, jaké skvělé nápady tito lidé mají. Viděl jsem na youtube, jak nějaký skvělý člověk
se podařilo dostat od startu k raketě pod dvě hodiny. Ano, jistě - to je speedrunning. A to bylo neuvěřitelné.
Viděl jsem video asi dvakrát. a opravdu - respekt. Jejich úroveň dovedností je daleko za tím, čeho bychom my kdy byli schopni.
A bylo jisté, že se to stane, že ti lidé to brzy budou hrát lépe než my. A znají různé triky.
A pak zjistíme, že používají trik, který se nám nelíbí a o kterém jsme ani nevěděli.
A tak to zakážeme, pokud je to příliš nespravedlivé. Ale oni toho vymyslí hodně.
A máte nějaký druh umělé inteligence? Protože tam jsou chyby, ale z dema mám pocit, že to na mě prostě něco posílá ve vlnách.
No, třeba umělá inteligence... Nevím, jestli to všechno může být umělá inteligence, ale v kódu je adresář s názvem "AI".
A řeší... V tom případě je to umělá inteligence. A řeší věci jako pathfinding,
aby se tito brouci vůbec dostali přes les. Není to opravdu jednoduché, když máte 50 brouků,
které se pohybují ve stádu, aby nepřicházely v jednom řetězci. Aby zaútočily najednou.
Aby je přiměli obejít les. Aby věděli... Jinak si myslím, že jsou to docela skládky,
opravdu se mi nezdá, že by byli nějak extra chytří, jako by věděli, jak na to, a snažili se vyhýbat věcem. Stali by se jen větší nepříjemností,
takhle je vidíte přicházet z nějakého směru, postavíte tam věž a já se jim pak můžu radostně smát, jak tam umírají na hromadách, tak hloupí.
Takže vidím, že jeho... Myslím, že je to dobře. Líbí se mi to, ne? Ano, například jsem to nečekal.
A boj ve hře je spíše... Spíše jako motivace, něco, co hráče popostrčí.
Aby nebylo neomezené množství času. Nějak se v čase vyvíjejí.
A dává to další rozměr, můžete je také zničit, nebo výzkum - člověk se musí rozhodnout.
zda investovat do jiné technologie, nebo více do zbrojení. Abych tam mohl dobýt důl,
pokud to stojí za to. Myslím, že to do toho přidává nějakou strategii, ale je to tam jen vedlejší věc, celou dobu se snažím, aby z toho nebyla hra o boji.
Proto AI není nic moc, staví základny všude, kde je místo,
a vyrazit do útoku. Nic opravdu chytrého. Jak dalece můžete hru rozvíjet pomocí testů?
Protože v podniku máme běžně testy Máte 800 000 testů, říkáte jim uživatelé.
Ne, spíše ano, ale obvykle máme automatizované testy. Máme jich asi 1000... Nemáme jednotkové testy.
Po několika osobních zkušenostech tomu nefandím. Všechny naše testy jsou integrační.
A to nám vyhovuje. Třeba tady dám truhlu, tam dám inserter a otestuji, že po 10 sekundách se zboží doručí.
A podobné věci. Postavím vlak a vyzkouším, jestli dojede do nějakého cíle, a když se něco pokazí,
testy jsou... A zároveň byly tyto testy opravdu užitečné ve více hráčích pro testování determinismu.
nějakým jasně definovaným způsobem. Že to není jen o tom, že jsme hráli nějakou mapu, ale že to jsou opravdu ty testy.
Ale není to tak, že bychom měli všechno pokryté testy, to vůbec ne. A od určitého bodu bychom,
kdykoli se někde objevila chyba, napsali jsme nejprve test, který ji reprodukoval,
a pak ho opravíte a test funguje. Takže ty věci, které často způsobují chyby, jsou pokryty více než ostatní.
Opět podle naší pragmatické metody. Ale určitě je dobré je mít, hodně nám pomáhají.
Jako... Nedokážu si představit, že bychom dnes byli bez nich.
A kolik chyb pochází z chyb v enginu a kolik jich je způsobeno tím, že někdo hraje na této konkrétní verzi Windows.
Záplatami, běžícím prostředím. Myslíš jako když jim nefunguje grafická karta...
Ano, přesně tak, ty se musí na dálku řešit dost těžko. V hlášeních chyb máme kategorie,
existují věci jako "vyřešeno", pak "drobné problémy" a pak je tu "1/0 magie".
A když něco vložím do drobných problémů, funguje to v podstatě jako hřbitov.
Ale snažíme se... Záleží na tom, kolik je tam momentálně chyb.
A pokud stejnou chybu nahlásí 10 nebo 5 lidí, je to důležité, takže se tím zabýváme.
Ale myslím, že... Záleží na tom, v jaké fázi vývoje se právě nachází.
Pracujeme tak, že když vydáme experimentální verzi... Máme experimentální a stabilní verzi, je to pravděpodobně standardní postup.
Takže kdykoli vydáme novou experimentální verzi, tak se samozřejmě objeví milion chyb, později se to stabilizuje a většinou se objeví chyby v enginu, způsobené našimi chybami v programu.
A později, když se to stabilizuje, se začnou objevovat ty drobné problémy, ale myslím, že těch drobných problémů je menšina.
Rok, s těmito testy... A ty dáš ten experimentální pětině hráčů nebo... Ne, ne, ne, dáme to každému, kdo...
kdo je ochoten riskovat experimentální verzi. Ano, takže máte přímo... Například na Steamu, dokud si výslovně nezvolíte, máte k dispozici pouze stabilní verzi,
ale někde tam můžete zkontrolovat... A viděl jsem, že i jiné hry to mají, rozhodnete se, že chcete experimentální verzi,
a pak prostě... To se nám opravdu, ale opravdu vyplatilo, model s experimentální verzí.
Než jsme ho začali používat, byl to opravdový psychopat. No, to už je opravdu dávno. Udělali bychom chybu a "ale ne, to jim nefunguje".
a teď jsme se cítili trapně a chtěli jsme se omluvit. A teď je to v pořádku, prostě řekneme - fajn, vydáme experimentální verzi,
můžete to zkusit, ale nic nezaručujeme, je to experimentální. Takže pokud to spadne, hráči to pochopí, je to trochu jejich... berou to jako jejich...
Jejich chyba - tedy ne chyba, ale... Jejich riskantní, experimentální verze. Jejich risk, a najednou je to jiné.
V tom je dobrý. Hráči ji samozřejmě chtějí hrát, takže lidí je dost. A dokonce to jde ve fázích, někteří hráči jdou jako:
To máme vždycky... jako teď 0.15.0. A během poslední verze 0.14 byla poslední, stabilní verze 0.14.22.
takže trvalo 22 menších aktualizací, než se verze ustálila. A hráči jsou již rozděleni, někteří říkají
"Budu hrát od samé nuly" a někdo: "Ne, budu hrát možná od 3 nebo 4." A někdo... A tak to vzniká spontánně,
že to přerozděluje, hráči sami... vybrat, jak velkou míru rizika chtějí.
Na začátku je samozřejmě více chyb, na konci se zabýváme většinou drobnostmi. Stává se dobře hratelným.
Takže to pro nás funguje opravdu dobře a je to vynikající model.
Dnes si nedokážu představit, že bychom hru vyvíjeli pět let, aniž by byla veřejná.
A pak bychom ji hned uvolnili? opravovali bychom ji donekonečna. A to by bylo hrozné, proto to děláme takto.
Ale pak ten pocit - hru jste vyvíjeli několik let - bez jediné chyby.
Nikdo nikdy neměl takový pocit. Pokud ho nechcete uvolnit, pak ano. - Pokud nechcete, pak ano.
A ještě jedna technická věc, kterou považuji za zajímavou. Na čem Factorio stojí a co je technicky zajímavé,
a obtížná, je optimalizace. Proto jsme ji vytvořili v C++ a proto je ve 2D.
Věděli jsme, že tam máte továrnu, která je opravdu velká a stále roste. A všechno musí fungovat.
Jakmile postavíte kus pásu nebo těžební zařízení a tam ho zpracujete a vyrobíte ozubená kola. A tato ozubená kola se používají dál a dál.
A začátek musí pokračovat, pokračovat a pokračovat, i když jste zrovna někde jinde. A Továrna se zvětšuje.
Od začátku jsme tedy věděli, že optimalizace bude velmi důležitá. A že to bude klíčový aspekt
kvalita hry. A tady... Zážitek - nějak jsme to hráli,
jsme napsali tak, aby byl hratelný. A... A pak jsme vydali novou verzi a někdo přišel a řekl:
"Tady mám tuhle továrnu a ta se zadrhává", protože postavil... Nebo vložil hlášení o chybě: "A pak ji otevřeme a máme obrovskou továrnu.
Je to tak? Pak jsme si řekli, že to zoptimalizujeme, a tak jsem na tom strávil asi dva týdny optimalizací,
A tak jsem mohl říct: "Dobře, optimalizoval jsem to, takže vaše továrna zase běží hladce."
A pak jsme vydali další verzi a on přišel s dvakrát tak velkou továrnou nebo někdo jiný "Zase to zaostává!"
a tak se znovu objevuje interace. Hra je nyní - nevím - stokrát rychlejší než na začátku?
A opravdu, Udivuje mě, jak člověk vždycky najde nějaké triky, nějaké metody.
jak ji zrychlit, a nakonec dokonce opravdu 100krát. Simulace v porovnání s tím, jak to vypadalo na začátku.
A jaké procesy například používáte? Procesy... jsou různé.
Rozdělil jsem se na... tvrdou... tvrdou optimalizaci,
věci jako cashe misses, mít malé paměťové struktury, které jsou blízko sebe atd,
a věci jako dobré cykly a podobné úpravy, které pomohou, ale jsou velmi omezené.
ve stupnici, můžete ji zrychlit pouze dvakrát, někdy desetkrát.
ale ne o moc víc. A pak jsou tu chytré optimalizace, které zjistíte nebo si představíte.
že jste počítač a simulujete hru. A co je největší nesmysl, který musíte udělat,
něco, co musíte dělat znovu a znovu. Třeba když zjistím, že - já nevím... Například hra právě stojí támhle,
a tam jsou dlaždice tam, to není přesně simulace, ale kreslení.
A tyto dlaždice jsou vždy stejné, takže nemá smysl je kreslit stále dokola. Takže je nakreslím jednou a pak je nakreslím celé jako jednu bitmapu.
Nebo typická věc... Říkáme tomu inserter, to jsou ty úchyty,
mechanické ruce, které z jedné věci něco vezmou a umístí na druhou stranu.
A obvykle na začátku ruka každé zaškrtnutí zkontroluje: "Je v truhle něco, co bych si měl vzít?".
"Ne, chápu." a další zaškrtnutí: "Je něco v truhle?" "Pořád ne." A další: "Je tam něco?" A tak máte 10 000 rukou, které se takto ptají každý tik.
Takže zjistíte, že to není dobré. Tak to uděláte tak, že když nic není, ruka spí. A pokud se v truhle něco objeví, dostane oznámení.
Pokud to mohu shrnout, postupuje od systému, kde je každý subjekt aktivní,
a aktivně se ptá. na systém založený na událostech. Když se nic neděje, přejdete do režimu spánku a
něco vám řekne. Poté, co si něco vyzvednete z pásu, usnete, a pokud se na pásu objeví něco nového, upozorní vás na to - zaregistrujete se u něj - a on vás upozorní na něco nového.
A jakmile se něco vypne, musí se to vypnout. To je základ. Pak to funguje dobře.
A pak opakující se věci, cashing, prostě budování dobrých datových struktur.
Je to... no... Není... Nemyslím si, že je to příliš akademické, tato optimalizace.
Spíš selská logika, od všeho trochu. Člověk se prostě vyprofiluje a hledá...
hledat, co by tam mohlo být, a hledat nejjednodušší možný způsob, jak to urychlit.
Ale vždycky jsem si tuto část vývoje užíval, dává to dobrý pocit, když to najednou běží hladčeji.
Používáte nějaký profiler? Samozřejmě, bez profileru by to nešlo, nebylo by to možné.
V aplikaci Visual Studio... Běžně používáme Visual Studio pro C++. Nemohu říct, že by C++...
Visual Studio ani C++ nejsou věci, které by mě nějak extra potěšily, ale momentálně nevím o ničem lepším.
Takže to používáme. A mají na to opravdu dobré nástroje, to se mi moc líbí.
Lze přesně zjistit, co, kdy a jak. Nezkoušeli jste CLion od JetBrains?
Nepoznávám ji. Mají nějaký IDE pro C. Neznám ho. Tak mi to později napiš a já to můžu zkusit.
Na nějakém papíře, protože ty vždycky zapomenu. Zajímala by mě ještě jedna věc...
Říkal jste, že děláte různé Cash-misses, optimalizace. Jak to měříte, abyste zjistili, zda změna skutečně přináší rozdíl.
Protože když něco změníte, všechno se v aplikaci promíchá a všechno je jinak - čísla. Většinou se to měří podle...
Existují dvě možnosti, že? Například si uložíte nějakou opravdu velkou továrnu,
a spustíte ji desetkrát za sebou, aktualizujete 100 kroků, a pokud zjistíte, že je rychlejší o 2 %, pak víte, že je lepší.
Nějaké kompletní testy. Ano, to pravděpodobně funguje dobře. Funguje to docela dobře, protože
Myslím, že je důležité, aby se testy prováděly vždy v továrně, která má vše. Často se totiž stává, že optimalizujete jednu věc,
který běží desetkrát rychleji, ale zpomalíte něco jiného. Přesně tak, to je... Typicky když si dopředu připravíte nějaká pomocná data,
což sice zrychlí jednu věc, kterou optimalizujete, ale pak je celá datová struktura větší a vše, co s ní pracuje, musí kvůli tomu získat více paměti, nebo...
A program jako celek se může zpomalit. To je podle mě... Takže jednoduše integrační testy celé továrny.
Ano, jistě. To je základní způsob, jak to udělat. Samozřejmě, že pokud budu testovat nějaký konkrétní...
Někdy jsem... Tovární mám většinou s řemeny nebo s něčím specifickým, na čem se dá optimalizace otestovat.
O jedné konkrétní věci. Ale většinou máte nějaké obrovské továrny, které nikdy neběží hladce.
Na nich to vyzkoušíte. A pak také to, co jsem se naučil z optimalizace,
je paralelismus, vlákna. Na tom pracujeme postupně. Třeba právě teď...
Prvním krokem bylo zajistit, aby vykreslování a simulace hry probíhaly v různých vláknech.
Musí existovat jedno kritické místo, kde se vyzvedne vše, co má být nakresleno, Protože to nemůže...
Protože pokud hra simuluje a auto... hra zachytí, že by mělo být nakresleno zde, tak mezitím ujede a...
později se vedle něj nakreslí a bude tam dvakrát. Musí tedy existovat kritický úsek pro sběr minimálních dat.
k vykreslování, ale samotné vykreslování a simulace probíhají odděleně. A pak se dějí věci, jako když
úseky jsou shromážděny, paralyzovat ji, spustit v řádcích a... A tak dále. Nebo když to uděláte...
Nebo když nevím... když se mapa generuje, běží v jiném vlákně. Nebo když... Krok za krokem se snažíme...
Celá simulace hry zatím není primárně jednovláknová, ale snažíme se do vláken umístit některé speciální úlohy.
A právě teď... v příští verzi možná začneme simulovat i části továrny pomocí vícevláknového zpracování.
A pak se bude snadno rozšiřovat dál. Zatím s multithredingem...
Téměř vždy, když jsme chtěli dělat multithreading, jsme našli nějaký způsob, jak zrychlit singlethread tolikrát, že
že je lepší ji urychlit. A to bude mít za následek menší proudové a hardwarové nároky.
pak multithreading. Ale pomalu na to přicházíme. Nemám s tím žádné zkušenosti.
Je to velmi zajímavé. Vy, pravděpodobně... Na webu to děláte často,
ale pro mě je to opět nový způsob myšlení. Jsme... je to v Javě. Asi nemá smysl, aby běžel na více vláknech, než je jader procesoru, nebo?
Máte... Obvykle děláte plus jedna. Jako bych to věděl... ale opět nemáte mnoho vstupně-výstupních operací.
Vím, že na serverech se dělá plus jeden procesor, protože když tam čekáte na I/O operace,
pak máte větší rezervy. Ano, čekáte na I/O a z našeho pohledu jsou vzpomínky ve skutečnosti I/O.
Jako většinou... Mám doma úplně stejný počítač jako v práci, ale paměť doma má o jeden tik lepší časování.
A kompiluje se o 20 % rychleji. Takže podobnost je, pokud jsem to zkoumal, většinou, zejména v 64bitových systémech,
protože ukazatele jsou větší, takže všechno je větší. Program čeká na paměť. Takže multithreading je tam dobrý, protože
Mohu si něco vyžádat z paměti, a zatímco čekám na vzpomínku, někdo jiný může dělat něco jiného jinde.
Takže nevím přesně, jak je to s tím plusem... Nezkoumáme to do takových detailů
V... Máme počet procesorů nebo něco podobného. Ale ještě jsme nedosáhli limitu.
že bychom potřebovali použít všechny procesory. Tak, jak to je, když běžíme ve dvou nebo třech vláknech, nějaké speciální úlohy, pak už je to dobré.
Jste rádi. A nějaká hra, která je vícevláknová, jako celá její simulace.
Nikdy jsem ho nikde neviděl. Znamená to hodně změnit způsob programování. Že děláte mikroúkoly a pak je distribuujete.
Vím, že se tím IDEA zabývala během editace. Že všechny analýzy a podobné věci běží na jednom procesoru.
A když chtěli paralyzovat, museli ji přepsat. Takže některé jejich funkce jsou již paralyzované,
a můžete vidět, že když ho spustíte, rozdělí úlohy, přetáhne je vlákno a běží opravdu plynule.
Když zkontrolujete stav systému, uvidíte, že všechna jádra jsou na 100 %.
Nebo někdy jen jeden. Ale to znamená, že když dáte jedno vlákno na procesor, jako na simulaci a grafiku,
pak můžete použít maximálně dvě vlákna. Jistě, pořád lepší než... Ale v okamžiku, kdy... Jako typicky například Quicksort,
kde se tahá po intervalech, nastavíte tyto intervaly jako úlohy. Pak potřebujete něco, co tyto úlohy dobře provede,
a pak máte k dispozici fond vláken. V tu chvíli se dá paralýza provést docela dobře. Ale opět to znamená, že s tím musí Allegro počítat,
aby nebylo příliš mnoho synchronizací, a to je... A to je přesně ta věc, která od začátku...
Opět - stejně jako u multiplayeru jsem tušil, že bude časem potřeba, takže jsme pro něj připravili některé věci.
A do jisté míry bude vycházet z... Je prakticky napsaná, jen ji nechceme zveřejnit,
než ji budeme moci řádně otestovat. A vychází z toho, že problémem je synchronizace, zámky a další věci.
Náš multiplayer je postaven tak, že téměř nemá žádné zámky. Jak je založen - simuluju kus hry,
a simuluju jich více najednou, vždy ty, které jsou od sebe vzdálené. A je zaručeno, že věci, které jsou vícevláknové, mohou ovlivnit jen něco v blízkém okolí.
A takto mohu simulovat například dvacet kousků, nebo čím větší mapa, tím více jich je najednou.
a až budou hotové, pak další. Takže se to dělá v jakési mřížce. No a to je typicky věc, kterou bude snadné hodit do fondu vláken.
A tam můžete provést paralýzu a plně využít procesory. Ale vždy... to je něco, co se stále opakuje:
Všechno je nakonec vždycky těžší, než se zdá. Takže je to samozřejmě podobné.
Samozřejmě s tím nic nesouvisí, ale pak něco vložíte do truhly, která je propojena kabelem,
a počítá počet položek, které jsou propojeny přes celou mapu. Takových věcí je vždycky hodně,
ale myslím, že to zní jako dobrá výzva. Zajímá mě ještě jedno téma, a to jsou mobilní telefony, přesněji řečeno tablety.
Například já dnes hraji hry většinou na tabletu. Nebo na telefonu. Plánujete něco takového?
No, my... Plánováno... To začala nehoda. Proč mě to nepřekvapuje?
No, tak to je, nemůžu si pomoct, ale měli jsme... Bylo to v dubnu, a jak děláme ty páteční fakta, než ty byly přesně 1. dubna.
Takže jsme udělali dubnový pátek Fakta, že Factorio bude na mobilních telefonech a že to nebude "pay to win", ale "pay to automate".
A že za to lidé budou platit a... Samozřejmě, že to bylo myšleno...
Čím déle jste četli, tím absurdnější to bylo. I tak jsme ale museli po několika dnech na konec dát disclaimer,
že je to jen vtip, nic skutečného. A od té doby se všichni ptali: Kdy to vyjde na telefony?
A proto... A měli jsme tam telefon s Factoriem, a to byl samozřejmě jen falešný obrázek.
Ale samozřejmě od té doby.. Najednou se ten nápad objevil. A najednou jsme přemýšleli,
že možná existuje způsob, jak to udělat. Samozřejmě v nějaké zjednodušené verzi, protože je to opravdu náročné na výpočet.
Ale jestli to bude nějaká malá továrna, která bude nějak specializovaná nebo něco takového.
Bez nepřátel možná, až se to takto zjednoduší, pak by to mohlo fungovat. A myslím, že jsme možná měli i nějaký prototyp.
že ji spustíme na telefonu. A to je opět výhoda Allegra, že má podporu i pro mobilní telefony.
Takže to můžeme zvládnout s knihovnou. Hlavním problémem jsou ovládací prvky, že? Najednou nemáte klávesnici,
žádné klávesové zkratky, vše musíte provádět na dotykové obrazovce. Což není snadné navrhnout.
A samozřejmě vytvořit správnou podmnožinu Factoria. Ale... Takže teď je to tak trochu odložené, protože máme opravdu moc práce.
Ale není vyloučeno, že to někdy v budoucnu uděláme. Zdá se mi, že je to úplně jiný trh.
než počítačové hry. A má potenciál růstu. Neexistuje žádný překryv...
Minecraft tam šel také a udělal obrovský... Přesně tak. Například moje děti hrají převážně na tabletu.
A samozřejmě sledují youtubery. A na tabletu by jim to přišlo velmi zajímavé.
Takže si myslím, že bys měl možnost ji zdvojnásobit. No, Mikeš to považuje za zajímavé i na PC.
Protože jsem... No, moje děti zatím počítač nemají, zatím mají jen tablet. Asi jim budu muset něco koupit.
Jak má stavební část nebo stavební fázi, spojil si to s minecraftem, a tak ho to opravdu zaujalo.
Musím svému dítěti koupit počítač, PC master race, to musíme mít doma.
Takže... Takže to bude... Přemýšleli jsme... Dokonce jsme přemýšleli, že bychom udělali port na Xbox nebo tak něco.
Ale hlavní problém překvapivě není příliš technický, jako například nutit ho vůbec začít.
I na Xboxu ji zkompilujete z C++, ve skutečnosti stačí jen trochu odlišný způsob vykreslování,
což je jen samotný back-end... nebo front-end? Jen konec programování, kde se to dostane na výstup.
Což není mnoho. Hlavním problémem je ovládání, aby se dalo hrát na nějakém ovladači.
A pak je otázka, zda by lidé od Xboxu neočekávali něco jiného.
Na druhou stranu, taková hra tam vůbec není, takže by možná měli zájem. Myslím, že by to bylo zajímavé na telefonu.
Protože právě tento druh her mám na telefonu nejraději. Nedávno mi to někdo vysvětloval, že je to určitá forma synnergie.
Někdo ji hraje na telefonu, někomu ji ukáže a možná si kvůli tomu koupí PC verzi.
Že se navzájem podporují. Takže to nepopíráme, ale... problém je... Třeba já osobně na telefonu moc nehraju.
protože trávím hodně času u počítače, takže mám stále ten starý telefon s fyzickými tlačítky, který umí jen volat,
protože vím, k čemu by to vedlo, kdybych ten telefon měl neustále u sebe. A taky se chci, alespoň když jdu ven, dívat chvíli do slunce.
A... Protože mobilní hry moc nehraju, nemám takovou osobní motivaci, abych je hrál... Většinou, když dělám něco pro Factorio,
Nedělám to proto, že "Rok, dáme tam další funkci, abychom vydělali víc peněz." Vůbec ne, dávám tam nové funkce, abych si hru příště zahrál,
to by'n být otravné, místo toho měl něco příjemného v něm, nebo něco, co hráči chtějí. A protože s telefonem nehraji, nemám tuto vnitřní motivaci.
A peníze... ty nejsou nejdůležitější. Takže se k nim dostaneme, až dokončíme věci, které máme právě teď.
Nebo kdyby se najednou objevilo 5 vývojářů, které bychom k němu mohli přiřadit, abychom nemuseli vybírat přímo z týmu.
To je jednoduché, stačí v Kafemlejnku říct, že hledáte mobilní vývojáře, a oni se určitě objeví. No a my budeme rádi, když nás někdo šikovný vyhledá.
Přesně tak! Takže hledáme někoho pro jablko a mobilní telefony... pokud s tím má někdo přímé zkušenosti,
dejte nám vědět, můžeme si o tom promluvit. Fajn, uzavírám svůj projekt a jdu dělat hry.
Samozřejmě s vámi. Jistě. Dobře, tak se bavte! - Dobře se bavte!