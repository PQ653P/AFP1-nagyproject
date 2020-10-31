# Rendszertervek

## 1. Rendszer célja

A rendszer célja, hogy a játékos legyőzze az ellenfelét Blackjack játékban.
A játékos képes tétet tenni, ahogy az ellenfele is, aki nyer az viszi mindet amit feltettek tétnek, és az hozzá lesz adva a nyertes számlájára.
A játékhoz regisztrálni kell és belépni, hogy használjuk.
A számla egyenlege minden játék után mentésre kerül, így ha újra játszani szeretnénk akkor ugyanonnan kezdhetjük ahol befejeztük.
A játék a hagyományos Huszonegy szabályai szerint lesz értelmezve, a szabályokat a "Szabályok" oldalon lehet megtalálni és elolvasni.
Ha a játékosnak elfogy az egyenlege akkor újra kell kezdenie a játékot, a cél, hogy elnyerjük ellenfelünk összes zsetonját.

## 2. Projekt terv

Projekt szerepkörök, felelősségek

- szerepkörök:
    - Senior fejlesztők: 1. Bozó Tamás, 2. Sass-Gyarmati Norbert, 3. Oravecz Zsolt
    - Junior fejlesztők: 1. Árvai Dániel, 2. Koplányi Balázs, 3. Lehóczky Csaba, 4. Pusztai Dominik
- felelőségek:
    - senior fejlesztő: A junior fejlesztők munkájának felügyelete és megkönnyítése tanácsadás által, segíthetnek kisebb projektelemek elkészítésében is.
    - junior fejlesztő: A projekt elkészítése. Projekt munkások és felelősségeik

A projektet weblapra fejlesztjük front- és backend segítségével. Az elkülönített feladatokon más-más emberek dolgoznak.

### Frontend felelősök:

Frontend fejlesztése HTML/CSS segítségével

A feladat célja, hogy egy letisztult, könnyen kezelhető, igényes weblapot nyújtson a felhasználó számára.

### Backend felelősök:

Feladatuk a háttérben működő programok megírása, randomizálás, JavaScript kód, adatbázis kezelése, az eredmény kiértékelés, és az értékek mentése.

## 3.Követelmények

Funkcionális követelmények:
- A regisztrált felhasználók tárolása
    - A felhasználók csoportba szervezése
    - Webes felületen gördülékeny működés
- Nem funkcionális követelmények:
    - Letisztult kinézet
    - A programnak egyszerűnek kell lennie , ezért a teljesítménye sem lehet nagy

A rendszer fejlesztése HTML/CSS valamint JavaScript és php segítségével történik.
A weblap felépítése, valamint dizájnolása a HTML/CSS nyelv implementálásával valósítandó meg.
A weboldal használatához egy egyszerű böngészőre van szükség.


## 4. Funkcionális terv

Rendszerszereplők:
- Játékos
- Admin

Rendszerhasználati esetek és lefutásaik:
- Játékos:
    - Regisztráció az oldalra
    - Saját adatainak módosítása
    - Regisztráció törlése
    - A játékban való részvétel
- Admin:
    - Minden adathoz hozzáfér
    - Felhasználok adatainak módosítása

## 5. Fizikai környezet

Az alkalmazás webes platformra készül.
Van tűzfal a hálózaton és engedélyezi a 80-as (HTTP) és a 443-as (HTTPS) portokat.
Nincsenek megvásárolt komponenseink.
Fejlesztői eszközök:
    - Visual Studio Code / Netbeans / IntelliJ WebStorm
    - WAMP server
    - git

## 6. Architekturális terv

### Backend

A rendszerhez szükség van egy adatbázis szerverre,
ebben az esetben MySQL-t használunk.
A kliens oldali programokat egy PHP alapú REST API szolgálja ki,
ez csatlakozik az adatbázis szerverhez.
A kliensekkel JSON objebktumokkal kommunikál.

### Web kliens

A webalkalmazás JavaScript haszálatával készül el.
A REST API-hoz a user belépését követően egyedi api-key segítségével
lehet hozzáférni, ez biztosítja, hogy illetéktelen felhasználok ne
módosíthassák az adatokat.

## 7. Tesztterv

Az alkalmazás elkészítése során szükség van a folyamatos tesztelésre.
Tesztelni kell a gombok működését, valamint a pontszám változását, ha a játékos vagy a gép nyer, illetve az új játék kezdésénél a pontszám nullázását.
Tesztelni kell, hogy a dizájn megjelenik-e és/vagy úgy jelenik meg ahogy mi szerettük volna, és változtatás esetén megváltozik-e mindenhol ahol szerettük volna.