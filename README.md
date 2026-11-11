# Filmoteka

A multilingual frontend application for searching movies and TV series and browsing their details and rankings, available in Polish and English. Data is fetched from the [OMDb API](https://www.omdbapi.com/).

## Features

- Search for movies and TV series by title, including from the header search bar.
- Filter results by year range and browse pages of results.
- Title detail pages and a static top 10 movie ranking.
- Clear loading, error, no-results, and missing-data states.
- Runs in the browser; accounts and user features are not available.

## Getting started

Requires Node.js 20.19+ or 22.12+.

1. Install dependencies: `npm install`
2. Create a `.env.local` file in the project root and set your OMDb API key:
   `VITE_OMDB_API_KEY=your_api_key`
3. Start the development server: `npm run dev`

Available commands: `npm run build`, `npm run preview`, `npm run lint`.

## Limitations

The OMDb API key is used in the browser, so it is visible to application users. Do not use a key that contains secrets for other services. Search results and ranking data come from OMDb; the ranking is a static list of IMDb IDs. The year filter only checks the currently displayed page of 10 results and does not change the total number of results returned by the API.
