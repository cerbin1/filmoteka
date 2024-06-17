import classes from "./MoviesFinderForm.module.css";

const years = [
  { key: 0, text: "Wszystkie" },
  { key: 1, values: { start: 2020, end: 2030 }, text: "2020+" },
  { key: 2, values: { start: 2010, end: 2020 }, text: "2010-2020" },
  { key: 3, values: { start: 2000, end: 2010 }, text: "2000-2010" },
  { key: 4, values: { start: 1990, end: 2000 }, text: "1990-2000" },
  { key: 5, values: { start: 1980, end: 1990 }, text: "1980-1990" },
  { key: 6, values: { start: 1970, end: 1980 }, text: "1970-1980" },
  { key: 7, values: { start: 1960, end: 1970 }, text: "1960-1970" },
  { key: 8, values: { start: 1950, end: 1960 }, text: "1950-1960" },
];

function MoviesFinderForm({
  onSubmit,
  onSearchParamChange,
  onSelectedYearsChange,
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
          onChange={onSearchParamChange}
          className={classes.searchInput}
        />
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
