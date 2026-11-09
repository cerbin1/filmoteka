import classes from "./MoviesFinderForm.module.css";
import years from "../../data/years";
import { useLanguage } from "../../i18n";

function MoviesFinderForm({ query, yearKey, onSubmit, onSearchParamChange, onSelectedYearsChange, validationError }) {
  const { t } = useLanguage();
  return <form onSubmit={onSubmit} className={classes.form}>
    <div className={classes.formGroup}>
      <label htmlFor="movie-year">{t("Lata: ")}</label>
      <select name="year" id="movie-year" value={yearKey} onChange={onSelectedYearsChange}>
        {years.map((year) => <option key={year.key} value={year.key}>{year.key === 0 ? t("Wszystkie") : year.text}</option>)}
      </select>
    </div>
    <div className={classes.formGroup}>
      <label htmlFor="movie-search">{t("Tytuł: ")}</label>
      <input id="movie-search" type="search" value={query} placeholder={t("Wyszukaj po frazie/tytule…")} onChange={onSearchParamChange} aria-invalid={Boolean(validationError)} aria-describedby={validationError ? "movie-search-error" : undefined} className={`${classes.searchInput} ${validationError ? classes.searchInputError : ""}`} />
      {validationError && <p id="movie-search-error" className={classes.searchInputErrorMessage}>{t("Podaj przynajmniej 3 znaki.")}</p>}
    </div>
    <div className={`${classes.formGroup} ${classes.center}`}><button className={classes.searchButton} type="submit">{t("Szukaj")}</button></div>
  </form>;
}
export default MoviesFinderForm;
