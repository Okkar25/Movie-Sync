import { useEffect, useState } from "react";
import { apiUrl } from "../lib/constant";

const useFetchMovie = (apiPath) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;

  const url = `${apiUrl}${apiPath}?api_key=${apiKey}`;

  // console.log(url);

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const json = await response.json();
        // console.log("API Response", json);

        setData(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [apiPath]);

  return { data, loading, error };
};

export default useFetchMovie;
