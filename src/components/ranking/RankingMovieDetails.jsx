import { useCallback, useEffect, useState } from "react";
import classes from "./RankingMovieDetails.module.css";
import { Link } from "react-router-dom";
import { fetchOmdb, formatField } from "../../utils/omdb";
import { useLanguage } from "../../i18n";

function RankingMovieDetails({ id, number }) {
  const { t } = useLanguage();
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = useCallback(
    async (controller) => {
      try {
        const responseJson = await fetchOmdb({ i: id }, controller.signal);
        setData(responseJson);
      } catch (error) {
        if (!controller.signal.aborted) setData({ Error: error.message });
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false);
        }
      }
    },
    [id]
  );

  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller);
    return () => controller.abort();
  }, [fetchData]);

  return (
    <>
      {isLoading && <p>{t("Ładowanie...")}</p>}
      {!isLoading && (
        <div className={classes.movieListItem}>
          {data.Poster && data.Poster !== "N/A" && (
            <img
              src={data.Poster}
              className={classes.moviePoster}
              alt={`Poster-for-${data.Title}`}
            />
          )}
          <div className={classes.movieInfo}>
            <h2>
                <span className={classes.number}>{number}.</span> {formatField(data.Title, t("Nie udało się pobrać filmu"))}
            </h2>
            <p>{t("Rok: ")}{formatField(data.Year)}</p>
            {data.imdbID && <Link to={`/movies/${data.imdbID}`}>{t("Szczegóły")}</Link>}
          </div>
        </div>
      )}
    </>
  );
}
export default RankingMovieDetails;
