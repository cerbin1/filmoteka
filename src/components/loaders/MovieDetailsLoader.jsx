export async function loader({ params }) {
  const url = `https://www.omdbapi.com/?apikey=${
    import.meta.env.VITE_OMDB_API_KEY
  }&i=${params.id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
