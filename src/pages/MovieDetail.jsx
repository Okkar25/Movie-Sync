import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../App";
import useFetchMovie from "../hooks/useFetchMovie";

// Import Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// components
import {
  BudgetRevenue,
  Casts,
  Keywords,
  SideInfo,
  WatchProviders,
} from "../components/MovieDetail";
import Recommendations from "../components/MovieDetail/Recommendations";

const MovieDetail = () => {
  const { id } = useParams();
  const [watchlist, setWatchlist] = useState(false);

  const theme = useContext(ThemeContext);

  // data fetch
  const { data: credits } = useFetchMovie(`movie/${id}/credits`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // console.log(id);

  return (
    <main className="">
      <section className="">
        {/* <div
          className="absolute h-[70vh] bg-no-repeat bg-center bg-cover w-full opacity-30 z-10"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div> */}

        {/* side info */}
        <SideInfo
          id={id}
          theme={theme}
          watchlist={watchlist}
          setWatchlist={setWatchlist}
          credits={credits}
        />

        {/* status / budget / revenue / director / original language */}
        <BudgetRevenue id={id} />

        {/* cast */}
        <Casts theme={theme} credits={credits} />

        {/* keywords */}
        <Keywords id={id} theme={theme} />

        {/* watch providers */}
        <WatchProviders id={id} theme={theme} />

        {/* recommendations */}
        <Recommendations id={id} theme={theme} />
      </section>
    </main>
  );
};

export default MovieDetail;
