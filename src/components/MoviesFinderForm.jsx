import classes from "./MoviesFinderForm.module.css";
import years from "../data/years";

function MoviesFinderForm({
  onSubmit,
  onSearchParamChange,
  onSelectedYearsChange,
  validationError,
}) {
  return (
    <form onSubmit={onSubmit} className={classes.form}>
      <div className={classes.formGroup}>
        <label htmlFor="year">Lata: </label>
        <select name="year" id="year" onChange={onSelectedYearsChange}>
          {years.map((year) => (
            <option key={year.key} value={year.key}>
              {year.text}
            </option>
          ))}
        </select>
      </div>
      <div className={classes.formGroup}>
        <label htmlFor="search">Tytuł: </label>
        <input
          id="search"
          type="text"
          placeholder="Wyszukaj po frazie/tytule..."
          onChange={onSearchParamChange}
          className={`${classes.searchInput} ${
            validationError ? classes.searchInputError : ""
          }`}
        />
        {validationError && (
          <p className={classes.searchInputErrorMessage}>
            Podaj przynajmniej 3 znaki!
          </p>
        )}
      </div>
      <div className={`${classes.formGroup} ${classes.center}`}>
        <button className={classes.searchButton} type="submit">
          Szukaj
        </button>
      </div>
    </form>
  );
}
export default MoviesFinderForm;
