import { useEffect, useState } from "react";
import { apiUrl } from "../lib/constant";

const useFetch = (apiPath) => {
  const [data, setData] = useState([]);

  const url = `${apiUrl}${apiPath}?api_key=b98077a95222294b3c3ac8515718f26a`;

  console.log(url);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    };

    fetchMovies();
  }, [apiPath]);

  return { data };
};

export default useFetch;
