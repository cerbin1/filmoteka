import classes from "./Ranking.module.css";
import RankingMovieDetails from "./RankingMovieDetails";

const top10MoviesIds = [
  "tt0111161",
  "tt0068646",
  "tt0468569",
  "tt0071562",
  "tt0050083",
  "tt0108052",
  "tt0167260",
  "tt0110912",
  "tt0120737",
  "tt0060196",
];

function Ranking() {
  return (
    <div className={classes.container}>
      <h1>Top 10 filmów</h1>
      {top10MoviesIds.map((id) => (
        <RankingMovieDetails
          key={id}
          number={top10MoviesIds.indexOf(id) + 1}
          id={id}
        />
      ))}
    </div>
  );
}

export default Ranking;
