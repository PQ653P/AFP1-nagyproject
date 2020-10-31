Követelmény specifikáció

1. Jelenlegi helyzet
Mivel a csoport tagjai szeretik a kártyajátékokat (főleg a tétre menő, szerencsejátékokat) ezért úgy döntöttünk megalkotjuk a saját Blackjack játékunkat.
A játékhoz regisztrálni kell, és ahhoz hogy játszunk be kell jelentkezni, hogy az aktuális állást el lehessen menteni.
Sok helyen láttuk, hogy nem lehet normális tétet tenni, vagy nem is lehet tétet tenni egyáltalán. Ezért úgy gondoltuk,
hogy megalkotjuk a saját játékunkat úgy ahogy mi szeretnénk, beleértve a játék technikáját és az egyenleg rendszert.
Pár helyen aggály volt a játék kinézete és dizájnja, ezért mi úgy gondoltuk, hogy megcsinálunk egy egyszerű, de igényes Blackjack játékot.
-------------------------------------------------------------------------------
2.Vágyálomrendszer
A project célja, egy olyan játék készítése, amit egy gyors regisztráció
után, könnyűszerrel elérhető a felhasználók számára. Törekszünk egy
letisztult, igényes, szabálytartó és mind ezek mellett egy szórakoztató
játék létrehozására. Melyben a játékos megismerheti a Blackjack
játékszabályait, kedvére kamatoztathatja szerencséjét, és boldog órákat
tölthet el. A rendszer a felhasználó igényeit helyezi középpontba
azáltal, hogy egy letisztult, egyszerűen kezelhető felületet biztosít
számukra. A mai rohanó világban, az embernek, se ideje, se kedve elrohanni a legközelebbi szerencsejáték zrt.-hez,
hogy pénzért szórakozhasson, ezért törekedtünk a teljesen ingyenes, mégis a valóságon alapuló modell megalkotására.
Pontozás is jelen lesz a weblapon, ennek hatására a játékosokat tudjuk buzdítani a játékra, mindezek mellett versengeni tudnak egymással,
és akik a tabella elején (azaz nekik van a legtöbb "zsetonjuk"= pontjuk)
állnak, a későbbiekben plussz jutalomban részesítjük őket pl.:(egyedi kártya hátlap design).
-------------------------------------------------------------------------------
3. Jelenlegi üzleti folyamatok modellje
A mai világban a legtöbb embernek nincs elegendő pénzbeli háttere ahhoz, hogy egy élvezhető, szerencsén alapuló, könnyen kezelhető alkalmi játékkal játsszon, anélkül hogy ki kellene mozdulnia az illető komfortzónájából, bár van egy csomó online felületen elérhető ”szerencsejáték”- okkal foglalkozó weboldal,
ezeknek a hátránya:
	- Bonyolult regisztráció
	- Személyazonosság kiadása
	- Bankkártya használata
Ezért arra jutottunk, hogy egy ingyenes, könnyű regisztrációs , szerencsén alapuló alkalmi játékot létrehozzunk.
4. igényeit üzleti folyamatok modellje
Ezt a programot azért hozzuk létre, hogy a (szerencsejátékot szerető) emberek a szabad időjükben tudjanak játszani költségvetés, és személyi adatok kiadása nélkül. A projektünk egy adatbázissal lesz kapcsolatban, mely lokális módon lesz majd elérhető, egy adott hálózaton keresztül.
A könnyű regisztrációs előnynek köszönhetően, percek alatt már a játék felületet tudjuk kezelni, a zsetonok száma mentésre kerül, ez által nem kell minden alkalommal újból és újból az elejétől kezdeni a játékot, ennek köszönhetően a felhasználók nagyobb kedvvel fogják alkalmazni a program adta lehetőségeket.
5.Fogalomszótár
5.1.1 Blackjack (huszonegy)

A huszonegy egy kártyajáték, melyet 52 lapos francia kártyával játszanak
dzsókerek nélkül. Blackjack néven is ismert. A játék célja, hogy a játékos
lapjai összértéke minél közelebb legyen a huszonegyhez, de azt ne lépje túl.

5.1.2 Általános játékszabály

A blackjack minden egyes körében az asztalnál ülő játékosok azzal kezdenek,
hogy betesznek egy tétet a saját megfelelő tétpozíciójukra, amit „doboz”-nak is
neveznek. Minden egyes asztal egyértelműen mutatja a játékos által rakható
minimális és maximális tétet. A tét nagyságát a zseton ikonra kattintva lehet
kiválasztani, ami kijelzi a kívánt tét helyes értékét. Miután minden tétet
feltettek, a játékosoknak két kártyát osztanak ki képpel felfelé a dobozukba,
és az osztó vagy egy kártyát kap (európai stílus), vagy két kártyát, egyiket képpel felfelé (atlantic city stílus), attól függően, milyen játék zajlik.

A blackjack minden leosztásában a cél az osztó megverése. Ehhez olyan lapodnak
kell lennie, ami magasabb az osztó lapjánál, de összességében nem haladja meg a 21-et. Emellett akkor is nyerhetsz, ha 22-nél alacsonyabb értékű lapod van és
az osztó lapjának értéke meghaladja a 21-et. Ha a lapod teljes értéke 22 vagy több, azt általában „besokallás”-nak nevezik, és automatikusan elveszted minden
feltett pénzedet.

Amikor erre felszólítanak, további kártyákat húzhatsz, hogy növeld a lapod teljes értékét. Ha végeztél a kártyák húzásával, az osztó befejezi a saját
lapját. Ezt szigorú szabályok szerint teheti meg, amelyek eltérnek attól függően, hogy melyik blackjack változatban játszol. Győződj meg róla, hogy
megértetted minden egyes változat szabályait, mivel ez nagyban befolyásolja, hogyan is játsszák a blackjacket, és lehetővé teszi, hogy fontos stratégiai
döntéseket hozz minden egyes leosztásban.

Nem meglepő módon a blackjackben a „blackjack” a legjobb kéz. A játék legjobb lapja többet fizet, mint bármely más kombináció (akár 3:2 oddsszal is fizethet
a téted, attól függően, hogy melyik játékváltozatot játszod), és ászból, illetve bármilyen tízes értékű kártyából áll, ez lehet bármelyik bubi, dáma,
király vagy tízes. A blackjacket az első két kártyádként kell kapnod, hogy számítson, és verhetetlen lap. Azonban döntetlen lehetséges, ha az osztó lapja
szintén blackjack.

A blackjackben a tízesek, bubik, dámák, és királyok mindegyikének tízes az értéke. Az ászoknak két különböző értéke lehet, egy vagy tizenegy
(választhatsz, melyik). Például, ha egy ászt és egy négyest kombinálsz össze, a
kezed értéke öt vagy 15 lehet.
A blackjackben általában egy az egyhez (1:1) fizetnek a nyerő lapok. Amikor a kezed értéke megegyezik az osztóéval, azt „döntetlen”-nek hívják. Ha ez
történik, visszakapod a tétedet, de további pénzre nem számíthatsz.

5.1.3 A játék végeredménye
 -Ha a játékos lapjainak összértéke közelebb van a 21-hez, mint az osztóé,
akkor a játékos a tétet 2:1 arányban kapja meg.

 -Ha az osztó lapjainak összértéke közelebb van a 21-hez, mint a játékosé,
akkor a játékos elvesztette a tétet.

 -Ha a játékos és az osztó lapjainak összértéke egyforma, akkor az állás
döntetlen (Push), a megtett tétet visszakapja a játékos.

 -Ha a játékos lapjainak összértéke a játék során a 21-et meghaladja (Bust),
akkor a játékos elvesztette a tétet, az osztó későbbi eredményétől függetlenül.

 -Ha az osztó lapjainak összértéke a játék során a 21-et meghaladja (Bust),
akkor a játékos a tétet 2:1 arányban kapja meg.

 -Ha a játékos az első két lapjának összértéke pontosan 21 (Blackjack), és az
osztó nem Blackjack-et ért el, akkor a játékos a megtett tétet 3:2 arányban kapja meg.

5.1.2 Kifejezések:

 -Játékmenet - A fentebb említett játék lefolyásának folyamata.

 -HTML - HyperText Makeup Language - magyarul: hiperszöveges jelölőnyelv - weboldalak készítéséhez kifejlesztett leírónyelv.

 -CSS - Cascading Style Sheets - magyarul: egymásba ágyazott stílusalapok - weboldalak külleméhez kifejlesztett stílusleíró nyelv.

- PHP - Elterjedt nyílt forráskódú szerver-oldali programozási nyelv, amely az SSI (Server Side Includes) és a Perl ötvözésére hivatott.

 -Front-End - Egy adott rendszer legfelsőbb, a felhasználóval kapcsolatot táró rétege, amelynek feladata a rendszerből kijutó adatok megjelenítése, prezentálása, illetve a bejövő adatok fogadása.

 -Back-End - Egy adott rendszer alsóbb rétege, aminek feladata a front-end réteg felől érkező adatok feldolgozása, valamint a keletkezett eredmény front-end számára történő visszajuttatása.

 -Supervisor - Angol szó magyarul felügyelő. A projekt szempontjából olyan személy(ek) aki(k) a fejlesztési folyamatokat felügyelik.
