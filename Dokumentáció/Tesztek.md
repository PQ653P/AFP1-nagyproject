# Tesztjegyzőkönyv

## 1. Bevezetés

## 2. Tesztelési terv hatóköre, célja:

## 3. Tesztek

## 3.1 Lehóczky Csaba - YP5NM7

### Sikeres tesztek

| Sorszám | Teszt neve | Leírása |
|---|---|---|
| 1. | **Árnyékolás teszt** | CSS segítségével, a szövegek árnyékolásának szerkesztése. |
| 2. | **Gomb teszt** | CSS fájlban, a gombnak sikeres méret növelése. |
| 3. | **CSS teszt** | Az alkalmazás tesztelve lett, CSS-el való design-ra. |



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
|   |   |
|---|---|
| **Regisztráció teszt** | PHPMyAdminnal való regisztrációs adatok sikeres tárolása. |





### Hibás tesztek
|   |   |
|---|---|
| **Bejelentkezés teszt** | PHPMyAdmin-ban eltárolt adatok, sikertelen elérése. |
