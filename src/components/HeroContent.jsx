import { Link } from "react-router-dom";
import hero from "../assets/hero.jpg";
import classes from "./HeroContent.module.css";
import { useLanguage } from "../i18n";

function HeroContent() {
  const { t } = useLanguage();
  return (
    <section className={classes.heroContent}>
      <img src={hero} alt={t("Kinowe hity")} className={classes.heroImage} />
      <div className={classes.heroText}>
        <h1>{t("Odkryj najlepsze filmy i seriale")}</h1>
        <p>
          {t(
            "Wyszukuj filmy i seriale po tytule, przeglądaj szczegóły i odkrywaj najwyżej oceniane klasyki.",
          )}
        </p>
        <p>
          {t(
            "Dane o tytułach i ocenach pochodzą z OMDb. Projekt działa po stronie przeglądarki i nie wymaga zakładania konta.",
          )}
        </p>
        <Link to="/movies">
          <button>{t("Szukaj teraz")}</button>
        </Link>
      </div>
    </section>
  );
}

export default HeroContent;
