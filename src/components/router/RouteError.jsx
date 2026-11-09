import { isRouteErrorResponse, Link, useRouteError } from "react-router-dom";
import classes from "./RouteError.module.css";
import { useLanguage } from "../../i18n";

function RouteError() {
  const { t } = useLanguage();
  const error = useRouteError();
  const message = isRouteErrorResponse(error)
    ? (error.status === 404 ? "Nie znaleziono takiego tytułu." : error.statusText || "Nie udało się wczytać tej strony.")
    : error?.message || "Nie udało się wczytać danych. Sprawdź połączenie i spróbuj ponownie.";
  return <main className={classes.container} role="alert">
    <h1>{t("Coś poszło nie tak")}</h1>
    <p>{t(message)}</p>
    <Link to="/movies">{t("Wróć do wyszukiwarki")}</Link>
  </main>;
}
export default RouteError;
