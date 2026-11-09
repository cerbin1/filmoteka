import classes from "./SeriesFinder.module.css";
import SeriesFinderForm from "./SeriesFinderForm";
import SeriesList from "./SeriesList";
import years from "../../data/years";
import { useCatalogSearch } from "../../hooks/useCatalogSearch";
import { useLanguage } from "../../i18n";

function SeriesFinder() {
  const { t, language } = useLanguage();
  const { query, setQuery, yearKey, setYearKey, data, loading, error, page, submit, goToPage, retry } = useCatalogSearch("series");
  const selectedYears = years.find((year) => String(year.key) === yearKey);
  const filtered = (data?.Search || []).filter((item) => {
    if (!selectedYears?.values) return true;
    const year = Number.parseInt(item.Year, 10);
    return year >= selectedYears.values.start && year < selectedYears.values.end;
  });
  const pagesCount = Math.ceil(Number(data?.totalResults || 0) / 10);
  const pageResultCount = data?.Search?.length || 0;

  return <main className={classes.seriesContainer} aria-busy={loading}>
    <h1>{t("Wyszukiwarka seriali")}</h1>
    <SeriesFinderForm query={query} yearKey={yearKey} onSubmit={submit} onSearchParamChange={(event) => setQuery(event.target.value)} onSelectedYearsChange={(event) => setYearKey(event.target.value)} validationError={Boolean(error && query.trim().length < 3)} />
    {loading && <p className={classes.status} role="status">{t("Szukam seriali…")}</p>}
    {!loading && error && <div className={classes.error} role="alert"><p>{error}</p>{query.trim().length >= 3 && <button type="button" onClick={retry}>Spróbuj ponownie</button>}</div>}
    {!loading && !error && !data && !query && <p className={classes.status}>{t("Wpisz tytuł lub użyj wyszukiwarki w nagłówku.")}</p>}
    {!loading && !error && data && filtered.length === 0 && <p className={classes.status}>Na tej stronie nie ma seriali w wybranym przedziale lat. Zmień filtr lub przejdź dalej.</p>}
    {data && !error && !loading && <>
      <p className={classes.resultSummary}>
        {selectedYears?.values
          ? `Łącznie ${data.totalResults} tytułów dla tej frazy. Na stronie ${page}: ${filtered.length} z ${pageResultCount} mieści się w zakresie ${selectedYears.text}. Filtr dotyczy bieżącej strony; stronicowanie obejmuje wszystkie wyniki frazy.`
          : `Łącznie ${data.totalResults} tytułów dla tej frazy. Na stronie ${page}: ${pageResultCount} tytułów.`}
      </p>
      {filtered.length > 0 && <><h2>{t("Wyniki wyszukiwania")}</h2><SeriesList series={filtered} /></>}
      {pagesCount > 1 && <nav className={classes.pagination} aria-label={t("Stronicowanie wyników")}>
        <button type="button" disabled={page <= 1 || loading} onClick={() => goToPage(page - 1)}>{t("Poprzednia")}</button>
        <span aria-live="polite">{language === "en" ? `Page ${page} of ${pagesCount}` : `Strona ${page} z ${pagesCount}`}</span>
        <button type="button" disabled={page >= pagesCount || loading} onClick={() => goToPage(page + 1)}>{t("Następna")}</button>
      </nav>}
    </>}
  </main>;
}
export default SeriesFinder;
