import { useEffect, useState } from "react";
import { apiUrl } from "../lib/constant";

const useFetchWatchlist = (apiPath, id, watchlist) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_API_KEY;
  const apiToken = import.meta.env.VITE_API_TOKEN;

  const url = `${apiUrl}${apiPath}?api_key=${apiKey}`;
//   console.log(url);

  const payload = {
    media_type: "movie",
    media_id: id,
    watchlist: watchlist,
  };

  useEffect(() => {
    const fetchWatchlist = async () => {
      setLoading(true);

      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${apiToken}`,
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWatchlist();
  }, [apiPath, apiKey, apiToken, id, watchlist]);

  return { data, error, loading };
};

export default useFetchWatchlist;
