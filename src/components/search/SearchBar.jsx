import { useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../../i18n";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { t } = useLanguage();
  function submit(event) {
    event.preventDefault();
    const value = query.trim();
    if (value.length < 3) return;
    navigate(`/movies?q=${encodeURIComponent(value)}&page=1`);
  }
  return <form className={classes.searchBar} role="search" onSubmit={submit}>
    <label className={classes.visuallyHidden} htmlFor="site-search">{t("Wyszukaj film")}</label>
    <input id="site-search" type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder={t("Szukaj filmu…")} minLength={3} />
    <button type="submit" aria-label={t("Szukaj")} disabled={query.trim().length < 3}><FontAwesomeIcon icon={faSearch} aria-hidden="true" /></button>
  </form>;
}
export default SearchBar;
