import { useEffect, useState } from "react";
import { apiUrl } from "../lib/constant";

const useFetch = (apiPath, searchQuery = "") => {
  const [data, setData] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  const url =
    searchQuery !== ""
      ? `${apiUrl}${apiPath}?api_key=${apiKey}&query=${searchQuery}`
      : `${apiUrl}${apiPath}?api_key=${apiKey}`;

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    };

    fetchMovies();
  }, [apiPath, searchQuery]);

  return { data };
};

export default useFetch;
