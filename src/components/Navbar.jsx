import classes from "./Navbar.module.css";
import SearchBar from "./search/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useLanguage } from "../i18n";

function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  return <nav className={classes.navbar} aria-label={t("Nawigacja główna")}>
    <ul className={classes.navbarList}>
      <li><NavLink to="/movies">{t("Filmy")}</NavLink></li>
      <li><NavLink to="/series">{t("Seriale")}</NavLink></li>
      <li><NavLink to="/ranking">{t("Ranking")}</NavLink></li>
    </ul>
    <SearchBar />
    <div className={classes.account}>
      <FontAwesomeIcon icon={faUser} aria-hidden="true" />
      <Link to="/account"><span className={classes.accountButtonText}>{t("Konto")}</span></Link>
    </div>
    <button className={classes.languageButton} type="button" onClick={() => setLanguage(language === "en" ? "pl" : "en")} aria-label={t("Zmień język")}>
      {t(language.toUpperCase())}
    </button>
  </nav>;
}
export default Navbar;
