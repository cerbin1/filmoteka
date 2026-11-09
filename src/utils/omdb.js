const API_KEY = "707e40f9";

export async function fetchOmdb(params, signal) {
  if (!API_KEY) throw new Error("Brak klucza API OMDb.");
  const url = new URL("https://www.omdbapi.com/");
  url.search = new URLSearchParams({ apikey: API_KEY, ...params });
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error("Nie udało się połączyć z serwisem OMDb.");
  const data = await response.json();
  if (data.Response === "False")
    throw new Error(data.Error || "Wystąpił błąd API.");
  return data;
}

export function formatField(value, fallback = "Brak danych") {
  return value && value !== "N/A" ? value : fallback;
}
