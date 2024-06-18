import { Link } from "react-router-dom";
import test from "../assets/hero.jpg";
import classes from "./HeroContent.module.css";

function HeroContent() {
  return (
    <section className={classes.heroContent}>
      <img src={test} alt="Kinowe hity" className={classes.heroImage} />
      <div className={classes.heroText}>
        <h1>Odkryj najlepsze filmy i seriale</h1>
        <p>
          Znajdź swoje ulubione filmy i seriale szybko i łatwo dzięki naszej
          zaawansowanej wyszukiwarce. Niezależnie od tego, czy szukasz nowości,
          klasyki, czy ulubionego gatunku, mamy coś dla Ciebie.
        </p>
        <p>
          Nasza baza danych jest aktualizowana na bieżąco, dzięki czemu zawsze
          znajdziesz najnowsze propozycje. Zaloguj się, aby tworzyć listy
          ulubionych, zapisywać recenzje i otrzymywać rekomendacje dopasowane do
          Twojego gustu.
        </p>
        <Link to="/movies">
          <button>Szukaj teraz</button>
        </Link>
      </div>
    </section>
  );
}

export default HeroContent;
