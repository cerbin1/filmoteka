# Filmoteka

Polskojęzyczna aplikacja frontendowa do wyszukiwania filmów i seriali oraz przeglądania szczegółów i rankingu. Dane pobierane są z [OMDb API](https://www.omdbapi.com/).

## Funkcje

- Wyszukiwanie filmów i seriali po tytule, także z wyszukiwarki w nagłówku.
- Filtrowanie wyników według przedziału lat i paginacja.
- Strony szczegółów tytułów oraz statyczny ranking 10 filmów.
- Czytelne stany ładowania, błędu, braku wyników i brakujących danych.
- Aplikacja działa po stronie przeglądarki; konto i funkcje użytkownika nie są dostępne.

## Uruchomienie

Wymagany Node.js 20.19+ lub 22.12+.

1. Zainstaluj zależności: `npm install`
2. Utwórz plik `.env.local` w katalogu głównym i ustaw klucz OMDb:
   `VITE_OMDB_API_KEY=twój_klucz_api`
3. Uruchom serwer developerski: `npm run dev`

Dostępne polecenia: `npm run build`, `npm run preview`, `npm run lint`.

## Ograniczenia

Klucz OMDb jest używany w przeglądarce, więc jest widoczny dla użytkowników aplikacji. Nie umieszczaj w nim sekretów używanych do innych usług. Dane wyników i rankingu pochodzą z OMDb; ranking jest statyczną listą identyfikatorów IMDb. Filtr roku sprawdza tylko aktualnie widoczną stronę 10 wyników i nie zmienia łącznej liczby wyników zwróconej przez API.
