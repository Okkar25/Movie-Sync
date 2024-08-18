import { useEffect, useState } from "react";
import { apiUrl } from "../lib/constant";

const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);

  const apiKey = import.meta.env.VITE_API_KEY;

  const url = `${apiUrl}${apiPath}?api_key=${apiKey}&query=${queryTerm}`;

//   console.log(url);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    };

    fetchMovies();
  }, [apiPath, queryTerm]);

  return { data };
};

export default useFetch;
