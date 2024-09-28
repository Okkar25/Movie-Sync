import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { WatchlistAdded, WatchlistNotAdded } from "../Icons";
import useFetchAccountState from "../hooks/useFetchAccountState";
import useFetchWatchlist from "../hooks/useFetchWatchlist";

const AddToWatchlist = ({ theme, id }) => {
  const {
    data: { favorite, rated, watchlist: AccountStateWatchlist },
  } = useFetchAccountState(`movie/${id}/account_states`);

  const [watchlist, setWatchlist] = useState(AccountStateWatchlist);

  const { pathname } = useLocation();

  const accountId = import.meta.env.VITE_API_ACCOUNT_ID;

  // add and remove from watchlist
  const { data: watchlistData } = useFetchWatchlist(
    `account/${accountId}/watchlist`,
    id,
    watchlist
  );

  console.log(watchlist);

  useEffect(() => {
    if (AccountStateWatchlist !== undefined) {
      setWatchlist(AccountStateWatchlist);
    }
  }, [AccountStateWatchlist, pathname]);

  return (
    <div
      className="watchlist cursor-pointer flex items-center gap-2"
      onClick={() => setWatchlist((prev) => !prev)}
    >
      <>
        {watchlist ? (
          <WatchlistAdded theme={theme} />
        ) : (
          <WatchlistNotAdded theme={theme} />
        )}
      </>

      <span className="font-Roboto w-[150px] dark:text-white">
        {watchlist ? "Added to Watchlist" : "Add to Watchlist"}
      </span>
    </div>
  );
};

export default AddToWatchlist;
