import classes from "./Account.module.css";
import { useLanguage } from "../../i18n";

function Account() {
  const { t } = useLanguage();
  return <main className={classes.container}>
    <h1>{t("Konto")}</h1>
    <section className={classes.notice} aria-labelledby="account-demo-title">
      <h2 id="account-demo-title">{t("Konto nie jest dostępne w tej wersji demo")}</h2>
      <p>{t("Filmoteka działa bez backendu i nie przechowuje kont, haseł ani danych użytkowników. Możesz przeglądać tytuły, oceny OMDb i ranking bez logowania.")}</p>
      <p>{t("Rejestracja, logowanie, recenzje i listy użytkownika są poza zakresem obecnego demo.")}</p>
    </section>
  </main>;
}
export default Account;
