import SeriesListItem from "./SeriesListItem";

function SeriesList({ series }) {
  return (
    <>
      {series.map((serie) => (
        <SeriesListItem serie={serie} key={serie.imdbID} />
      ))}
    </>
  );
}

export default SeriesList;
