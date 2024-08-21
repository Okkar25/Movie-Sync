import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../App";
import MissingCast from "../assets/Missing_Cast/ActorNotFound2.jpg";
import useFetchMovie from "../hooks/useFetchMovie";

// Import Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import SideInfo from "../components/MovieDetail/SideInfo";
import useFetch from "../hooks/useFetch";
import { Cast, Keyword, WatchProviders } from "../Icons";
import { formatAmount } from "../lib/functions";

const MovieDetail = () => {
  const { id } = useParams();
  const [watchlist, setWatchlist] = useState(false);

  const theme = useContext(ThemeContext);
  const swiper = useSwiper();

  // data fetch
  const { data: movie } = useFetchMovie(`movie/${id}`);
  const { data: watchProviders } = useFetch(`movie/${id}/watch/providers`);
  const { data: keywordProviders } = useFetchMovie(`movie/${id}/keywords`);
  const { data: credits } = useFetchMovie(`movie/${id}/credits`);

  const {
    backdrop_path,
    poster_path,
    budget,
    genres,
    homepage,
    imdb_id,
    original_language,
    origin_country,
    original_title,
    overview,
    popularity,
    production_companies,
    production_countries,
    release_date,
    tagline,
    revenue,
    runtime,
    status,
    video,
    vote_average,
    vote_count,
    spoken_languages,
  } = movie;

  const posterImage = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const backgroundImage = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;

  const spokenLanguage =
    spoken_languages?.length > 0 && spoken_languages[0]?.english_name;

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

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
        <div className="grid grid-cols-4 gap-3 text-center dark:text-white py-7 my-10 rounded-lg bg-gray-300 dark:bg-slate-800 ">
          <div className="status flex flex-col gap-1">
            <h4 className="font-medium">Status</h4>
            <p>{status}</p>
          </div>

          <div className="language flex flex-col gap-1">
            {" "}
            <h4 className="font-medium">Original language</h4>
            <p>{spokenLanguage}</p>
          </div>

          <div className="budget flex flex-col gap-1">
            {" "}
            <h4 className="font-medium">Budget</h4>
            <p>{formatAmount(budget)}</p>
          </div>

          <div className="revenue flex flex-col gap-1">
            {" "}
            <h4 className="font-medium">Revenue</h4>
            <p>{formatAmount(revenue)}</p>
          </div>
        </div>

        {/* cast */}
        <div className="flex flex-col gap-8 py-3 select-none">
          <div className="flex items-center justify-center gap-3">
            <Cast theme={theme} />
            <h4 className="dark:text-white text-xl font-Roboto font-semibold underline underline-offset-8">
              Top Billed Casts
            </h4>
          </div>

          <div className="flex items-center gap-9 overflow-x-auto castScrollBar pb-5 relative">
            <Swiper
              className="flex flex-col gap-5"
              modules={[Navigation]}
              slidesPerView={6}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              navigation={false}
            >
              {credits.cast?.slice(0, 21).map((actor) => (
                <SwiperSlide key={actor.id}>
                  <div className="flex flex-col items-center gap-3">
                    <img
                      src={
                        actor.profile_path
                          ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                          : MissingCast
                      }
                      alt="actor"
                      className="min-w-[170px] rounded"
                    />

                    <div className="flex flex-col items-center">
                      <span className="dark:text-white">
                        {actor.original_name}
                      </span>
                      <span className="dark:text-gray-300 line-clamp-1">
                        {actor.character}
                      </span>
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              {/* swiper buttons */}
              {/* <div className="">
                <SwiperController />
              </div> */}
            </Swiper>
          </div>
        </div>

        {/* keywords */}
        <div className="flex flex-col gap-10 py-4">
          <div className="flex items-center justify-center gap-3">
            <Keyword theme={theme} />
            <h4 className="dark:text-white text-xl font-Roboto font-semibold underline underline-offset-8">
              Keywords
            </h4>
          </div>

          <div className=" flex flex-wrap justify-center items-center gap-3">
            {keywordProviders?.keywords?.map((keyword) => (
              <span
                key={keyword.id}
                className="dark:text-white dark:bg-slate-700 bg-gray-300 px-4 py-1 rounded-lg"
              >
                {keyword.name}
              </span>
            ))}
          </div>
        </div>

        {/* watch providers */}
        {watchProviders?.US?.buy?.length > 0 && (
          <div className="watchProviders flex flex-col gap-10 py-7">
            <div className="flex items-center justify-center gap-3">
              <WatchProviders theme={theme} />
              <h4 className="dark:text-white text-xl font-Roboto font-semibold underline underline-offset-8">
                Watch Providers
              </h4>
            </div>

            <div className="flex items-center justify-between w-full">
              {watchProviders?.US?.buy.map((provider) => (
                <div
                  className="w-[200px] flex flex-col items-center gap-3"
                  key={provider.provider_id}
                >
                  <img
                    className="w-[70px] rounded-lg object-end object-cover cursor-pointer"
                    src={`https://image.tmdb.org/t/p/w500/${provider.logo_path}`}
                    alt="provider"
                  />
                  <p className="dark:text-white text-center font-Roboto">
                    {provider.provider_name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default MovieDetail;
