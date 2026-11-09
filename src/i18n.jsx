import { createContext, useContext, useEffect, useMemo, useState } from "react";

const translations = {
  en: {
    "Nawigacja główna": "Main navigation", Filmy: "Movies", Seriale: "Series", Ranking: "Ranking", Konto: "Account",
    "Wyszukaj film": "Search movies", "Szukaj": "Search", "Szukaj filmu…": "Search movies…",
    "Odkryj najlepsze filmy i seriale": "Discover the best movies and series", "Wyszukuj filmy i seriale po tytule, przeglądaj szczegóły i odkrywaj najwyżej oceniane klasyki.": "Search movies and series by title, browse details, and discover the highest-rated classics.",
    "Dane o tytułach i ocenach pochodzą z OMDb. Projekt działa po stronie przeglądarki i nie wymaga zakładania konta.": "Title and rating data comes from OMDb. This project runs in your browser and does not require an account.", "Szukaj teraz": "Search now", "Kinowe hity": "Movie hits",
    "Wyszukiwarka filmów": "Movie search", "Wyszukiwarka seriali": "Series search", "Szukam filmów…": "Searching movies…", "Szukam seriali…": "Searching series…",
    "Spróbuj ponownie": "Try again", "Wpisz tytuł lub użyj wyszukiwarki w nagłówku.": "Enter a title or use the search bar in the header.",
    "Wyniki wyszukiwania": "Search results", "Stronicowanie wyników": "Search result pages", "Poprzednia": "Previous", "Następna": "Next",
    "Lata: ": "Years: ", "Tytuł: ": "Title: ", "Wyszukaj po frazie/tytule…": "Search by phrase/title…", "Podaj przynajmniej 3 znaki.": "Enter at least 3 characters.",
    "Szczegóły": "Details", "Rok: ": "Year: ", "Plakat filmu ": "Movie poster: ", "Plakat serialu ": "Series poster: ", "Szczegóły filmu": "Movie details", "Szczegóły serialu": "Series details", "Fabuła:": "Plot:",
    "Brak plakatu": "No poster", "Brak danych": "No data", "Data wydania: ": "Release date: ", "Czas trwania: ": "Runtime: ", "Gatunek: ": "Genre: ", "Jezyk: ": "Language: ",
    "Szczegóły ": "Details ", "Oceny użytkowników": "Ratings", "Ocena IMDB: ": "IMDb rating: ", "Liczba głosów: ": "Votes: ", "Ekipa filmowa": "Cast and crew", "Reżyser: ": "Director: ", "Scenariusz: ": "Writer: ", "Aktorzy: ": "Actors: ",
    "Top 10 filmów": "Top 10 Movies", "Ładowanie...": "Loading...", "Nie udało się pobrać filmu": "Could not load movie",
    "Konto nie jest dostępne w tej wersji demo": "Accounts are not available in this demo", "Filmoteka działa bez backendu i nie przechowuje kont, haseł ani danych użytkowników. Możesz przeglądać tytuły, oceny OMDb i ranking bez logowania.": "Filmoteka runs without a backend and does not store accounts, passwords, or user data. You can browse titles, OMDb ratings, and rankings without signing in.", "Rejestracja, logowanie, recenzje i listy użytkownika są poza zakresem obecnego demo.": "Registration, sign-in, reviews, and user lists are outside the scope of this demo.",
    "Nie znaleziono takiego tytułu.": "Title not found.", "Nie udało się wczytać tej strony.": "Could not load this page.", "Nie udało się wczytać danych. Sprawdź połączenie i spróbuj ponownie.": "Could not load data. Check your connection and try again.", "Coś poszło nie tak": "Something went wrong", "Wróć do wyszukiwarki": "Back to search",
    "Nie udało się pobrać wyników.": "Could not load results.", "Wpisz co najmniej 3 znaki.": "Enter at least 3 characters.", "Brak klucza API OMDb.": "OMDb API key is missing.", "Nie udało się połączyć z serwisem OMDb.": "Could not connect to OMDb.", "Wystąpił błąd API.": "An API error occurred.",
    "Wszystkie": "All years", "PL": "EN", "EN": "PL", "Zmień język": "Change language"
  },
  pl: { "Wszystkie": "Wszystkie", "PL": "EN" }
};

const LanguageContext = createContext(null);
const STORAGE_KEY = "filmoteka-language";

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved === "pl" || saved === "en" ? saved : "en";
    } catch { return "en"; }
  });
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  const setLanguage = (next) => {
    setLanguageState(next);
    try { localStorage.setItem(STORAGE_KEY, next); } catch { /* storage may be disabled */ }
    document.documentElement.lang = next;
  };
  const value = useMemo(() => ({ language, setLanguage, t: (text) => translations[language]?.[text] || text }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  return useContext(LanguageContext);
}
