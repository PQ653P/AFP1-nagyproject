# Tesztjegyzőkönyv

## 1. Bevezetés

A tesztelés az alkalmazás fejlesztés egyik, hanem a legfontosabb mellékteendője mivel ezekből a tesztekből derül ki,
hogy mik vannak teljesen készen, és miket kell a későbbiekben javítani.
Ezeket a teszteket a fejlesztők hajtják végre, általában a saját részükön, hogy pontosan tudják, hogy hol keressék az esetleges hibákat.

## 2. Tesztelési terv hatóköre, célja:

Ahogy a bevezetésben is le lett írva a tesztelés legfontosabb célja,
hogy a fejlesztők kiszűrjék a program hibáit és azokat minnél hamarabb és minnél hatékonnyabban javítsák ki.
A tesztelés a teljes programra, beleértve a dokumentációkra is kiterjed.
A frontend fejlesztők a frontend részt nézik át a backend fejlesztők pedig a saját, backend részüket tesztelik le.

## 3. Tesztek

Mind a 4 fejlesztőre ki lett osztva a saját részének tesztelése, esetleges hibáinak javítása.

## 3.1 Lehóczky Csaba - YP5NM7

### Sikeres tesztek

| Sorszám | Teszt neve | Leírása |
|---|---|---|
| 1. | **Árnyékolás teszt** | CSS segítségével, a szövegek árnyékolásának szerkesztése. |
| 2. | **Gomb teszt** | CSS fájlban, a gombnak sikeres méret növelése. |
| 3. | **CSS teszt** | Az alkalmazás tesztelve lett, CSS-el való design-ra. |
| 4. | **HTML teszt** | Az alkalmazásban lévő html fájlok sikeresen tesztelve lettek. |
| 5. | **Szabályok teszt** | Az oldal szabályainak a tesztelése, megfelelőek. |


### Hibás tesztek

| Sorszám | Teszt neve | Leírása |
|---|---|---|
| 1. | **Háttér teszt** | Az oldal egyes részein nem megfelelően jelent meg a háttér. A hiba ki lett javítva. |
| 2. | **Címsor teszt** | Az alkalmazás egyes címsorai nem megfelelően jelentek meg. A hiba ki lett javítva. |
| 3. | **Adatbázis teszt** | Az adatbázis hiányosan tárolt adatokat. A hiba ki lett javítva. |
| 4. | **Betűszín teszt** | Az alkalmazás helyenként nem a megfelelő betűszínt használta. A hiba ki lett javítva. |
| 5. | **CSS teszt** | Bizonyos aloldalak nem csatlakoztak rendesen a CSS lépcsőzetes stíluslap-dokumentumhoz. A hiba ki lett javítva. |



## 3.2 Árvai Dániel - IXWYOW

### Sikeres tesztek

| Sorszám | Teszt neve | Leírása |
|---|---|---|
| 1. | **Újrakeverés teszt** | Ha a játékos elég kört játszik, hogy a pakli elfogyjon, vagy majdnem elfogyjon, a következő játék kezdetekor a lapokat a program visszakeveri a pakliba. |
| 2. | **Zseton teszt** | A játékban minden kör végén a játékos 10 zsetont kap, ha megnyeri, 10 zsetont veszít, ha elveszíti a játékot. |
| 3. | **Osztás teszt** | A játék elején az osztó a játékosnak és önmagának is 2 lapot oszt ki. A játékos lapjait felfedve, a sajátjai közül az elsőt felfordítva, a másodikat arrcal lefelé. |
| 4. | **Új játék teszt** | Új kör indításakor a játék (a zsetonokat és a pakli már kihúzott lapjait leszámítva) alaphelyzetbe áll.|
| 5. | **21 túllépése teszt** | Ha akár az osztó, akár a játékos lapjainak összege meghaladja a 21-et, akkor az a fél elveszíti a játékot. |


### Hibás tesztek

| Sorszám | Teszt neve | Leírása |
|---|---|---|
| 1. | **Pontszámlálás teszt** | A játék során a játékos lapjainak összértékét a program hibásan számolta ki. A hiba ki lett javítva. |
| 2. | **Menü teszt**| A menü hibás linkeket tartalmazott a regisztrációs és bejelentkezési oldalakra. A hiba ki lett javítva. |
| 3. | **Lapok tesztje** | A játék során hibásan jelentek meg a játékos lapjai. A hiba ki lett javítva. |
| 4. | **Login teszt**| A bejelentkezés nem működött, hibás PHP kód miatt. A hiba ki lett javítva. |
| 5. | **Regisztráció teszt** | A regisztráció nem működött, hibás adatbázis konfiguráció miatt. A hiba ki lett javítva. |



## 3.3 Koplányi Balázs - PMWV8O

### Sikeres tesztek

| Sorszám | Teszt neve | Leírása |
|---|---|---|
| 1. | **Gomb animáció teszt** | CSS segítségével, a animáció rendelése a gombokhoz. |
| 2. | **Betűszín teszt** | CSS segítségével, a betűk sikeres átszínezése. |
| 3. | **Pontszám teszt** | Korábbi hiba kijavítása után, a játékos lapjainak összértékét a program immár helyesen számolja ki. |
| 4. | **Betűstílus teszt** | CSS segítségével, a betűk stílusának sikeres megváltoztatása. |
| 5. | **Gomb átszínezés teszt** | CSS segítségével, a gombok sikeres átszínezése. |


### Hibás tesztek

| Sorszám | Teszt neve | Leírása |
|---|---|---|
| 1. | **Menü teszt** | A menü hibás linkeket tartalmazott a játék oldalára. A hiba ki lett javítva. |
| 2. | **Kártyák tesztje** | Az oldal méretének változtatásakor torzultak a lapok. A hiba ki lett javítva.  |
| 3. | **Pénz teszt** | Ha a játékos elvesztette minden pénzét, minuszba tudott menni az egyenlege. A hiba ki lett javítva.  |
| 4. | **Bejelentkező felület teszt** | A jelszó nem tárolódott el a PHPMyAdmin-ban. A hiba ki lett javítva.  |
| 5. | **Pakli tesztje** | A játék alatt rossz minőségben jelentek meg a lapok. A hiba ki lett javítva.  |



## 3.4 Pusztai Dominik Tamás - PQ653P

### Sikeres tesztek

| Sorszám | Teszt neve | Leírása |
|---|---|---|
| 1. | **Regisztráció teszt** | PHPMyAdminnal való regisztrációs adatok sikeres tárolása. |
| 2. | **Javított bejelentkezés teszt** | Az adatbázis álltal eltárolt adatok sikeres elérése, és sikeres bejelentkezés megvalósítása. | 
| 3. | **Gombok hivatkozás teszt** | A gombok sikeres átvitele, a kiválasztott oldalra. |
| 4. | **Megállás teszt** | A játék során, ha a játékos nem szeretne több lapot felhúzni, meg szeretne állni, akkor az osztó nem oszt neki több lapot, és azoknak a lapoknak az értékei megjelenítése. |



### Hibás tesztek

| Sorszám | Teszt neve | Leírása |
|---|---|---|
| 1. | **Bejelentkezés teszt** | PHPMyAdmin-ban eltárolt adatok, sikertelen elérése. |
| 2. | **Játék funkció elérése teszt**  | A játék funckió elérhető akkor is, ha nem volt bejelentkeztetve a felhasználó. A hiba ki lett javítva! |
| 3. | **Háttér teszt** | A háttér "kilógott" az oldalról, az oldal méretének változásával torzult. A hiba ki lett javítva. |
| 4. | **Címsor teszt** | A CSS fájlban beálított címsorok kinézetének sikertelen megjelenítése. A hiba ki lett javítva. |