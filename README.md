## 🎉 EatWell

**Opis projektu:**
Aplikacja EatWell pomaga użytkownikom wybierać lepsze produkty spożywcze, monitorować spożycie kalorii, białka, tłuszczu oraz węglowodanów. Użytkownik może wpisać nazwę produktu i natychmiast otrzymać prostą ocenę zdrowotną wraz z rekomendacjami podobych produktów. Aplikacja oceni produkt na podstawie Nutri-Score, zawartości cukru, soli, tłuszczu, białka, węglewodanów i błonnika oraz pokaze kaloryczność produktu względem dziennej normy spożycia kalorii dopasowanej do uzytkownika.

## Cele:

1. Edukacja i podnoszenie świadomości na temat zdrowego odżywiania.
2. Wsparcie użytkowników w podejmowaniu zdrowych wyborów żywieniowych na co dzień.
3. Budowanie nawyków zdrowego odżywiania i świadomego planowania diety.
   Funkcjonalności

✅ [Przedstawenei analizy produktów spozywczych w klarowny sposób]
🔍 [Wyszukiwarka produktów po nazwię np. mleko]
📊 [Kalkulator BMI oraz dziennej normy spozycia kalorii]
🌐 [Responsywny design, działający na różnych urządzeniach]

**Wymagania systemowe**
Node.js w wersji >= 16.0.0
npm do zarządzania zależnościami

## Instalacja

```
git clone git@github.com:yanicorn3000/EatWell-new.git
cd EatWell-new
npm install
```

Uruchom projekt:

```
npm run dev && npm run api
```

## Technologie

Projekt został zbudowany z użyciem:

- **React** - Frontend
- **React Router** - nawigacja
- **React Context** - zarządzanie stanem aplikacji, przechowywanie informacji o zalogowanym użytkowniku
- **JSON Server** - przechowywane danych uzytkownika
- **React Query** - pobieranie danych z API
- **clsx, scss** - stylowanie

## API:

Openfoodfacts - API - https://pl.openfoodfacts.org/
API Documentation - https://openfoodfacts.github.io/openfoodfacts-server/

Autor: Yana Dziabiola - https://github.com/yanicorn3000
