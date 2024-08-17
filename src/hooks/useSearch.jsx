import { useEffect, useState } from "react";
import { apiUrl } from "../lib/constant";

const useSearch = (searchQuery) => {
  const [data, setData] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  const searchTvSeries = async (query) => {
    const urlTvSeries = `${apiUrl}search/tv?api_key=${apiKey}&query=${query}`;
    const response = await fetch(urlTvSeries);
    const data = await response.json();
    return data.results;
  };

  const searchMovies = async (query) => {
    const urlMovies = `${apiUrl}search/movie?api_key=${apiKey}&query=${query}`;
    const response = await fetch(urlMovies);
    const data = await response.json();
    return data.results;
  };

  const searchAll = async (query) => {
    const tvResults = await searchTvSeries(query);
    const movieResults = await searchMovies(query);

    // tvResults = tvResults.map((tv) => (tv.media_type = "tv"));
    // movieResults = movieResults.map((movie) => (movie.media_type = "movie"));
    tvResults?.forEach((tv) => (tv.media_type = "tv"));
    movieResults?.forEach((movie) => (movie.media_type = "movie"));

    const combinedResults = [...tvResults, ...movieResults];

    return combinedResults;
  };

  useEffect(() => {
    const displayResults = async (query) => {
      const results = await searchAll(query);
      setData(results);
    };

    if (searchQuery) {
      displayResults(searchQuery);
    }
  }, [searchQuery]);

  return { data };
};

export default useSearch;
