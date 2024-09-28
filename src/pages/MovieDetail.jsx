import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
import { BackIcon } from "../Icons";

const MovieDetail = () => {
  const { id } = useParams();

  const theme = useContext(ThemeContext);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // data fetch
  const { data: credits } = useFetchMovie(`movie/${id}/credits`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id, pathname]);

  const handleBackNavigation = () => {
    navigate(-1);

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
  };

  // console.log(id);

  return (
    <main className="">
      <section className="">
        {/* <div
          className="absolute h-[70vh] bg-no-repeat bg-center bg-cover w-full opacity-30 z-10"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div> */}

        <div
          className="dark:text-white left-10 fixed cursor-pointer dark:bg-slate-800 bg-gray-300 p-3 rounded-full"
          onClick={handleBackNavigation}
        >
          <BackIcon theme={theme} />
        </div>

        {/* side info */}
        <SideInfo id={id} theme={theme} credits={credits} />

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
