import { useEffect, useState } from "react";
import { apiUrl } from "../lib/constant";

const useFetchAccountState = (apiPath, id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiToken = import.meta.env.VITE_API_TOKEN;

  const url = `${apiUrl}${apiPath}?api_key=${apiKey}`;

  useEffect(() => {
    const fetchWatchlist = async () => {
      setLoading(true);

      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${apiToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        // console.log(json);

        setData(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWatchlist();
  }, [apiPath, apiKey, apiToken, id]);

  return { data, error, loading };
};

export default useFetchAccountState;
