import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../App";
import useFetchMovie from "../hooks/useFetchMovie";

import useFetch from "../hooks/useFetch";
import {
  Keyword,
  PlayTrailer,
  Star,
  WatchlistAdded,
  WatchlistNotAdded,
  WatchProviders,
} from "../Icons";
import { formatAmount, formatDuration, formatRating } from "../lib/functions";

const MovieDetail = () => {
  const { id } = useParams();
  const [watchlist, setWatchlist] = useState(false);

  const theme = useContext(ThemeContext);

  const { data: movie } = useFetchMovie(`movie/${id}`);
  const { data: watchProviders } = useFetch(`movie/${id}/watch/providers`);
  const { data: keywordProviders } = useFetchMovie(`movie/${id}/keywords`);

  console.log(keywordProviders.keywords);

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

  return (
    <main className="">
      <section className="">
        {/* <div
          className="absolute h-[70vh] bg-no-repeat bg-center bg-cover w-full opacity-30 z-10"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div> */}

        <div className="grid grid-cols-4 gap-10 mt-7">
          <div className="col-span-1">
            <img
              src={posterImage}
              alt="poster"
              className="rounded-lg select-none"
            />
          </div>

          <div className="col-span-3 select-none">
            {/* title / year */}
            <div className="flex items-center gap-2 ">
              <p className="dark:text-white font-semibold w-fit line-clamp-2 text-4xl font-Poppins">
                {original_title}
              </p>
              <span className="dark:text-gray-400 text-2xl font-Roboto">
                ({release_date?.split("-")[0]})
              </span>
            </div>

            {/* release date / language / duration / rating  */}
            <div className="dark:text-gray-300 text-sm mt-3 font-Roboto flex items-center">
              <span className="">
                {release_date?.split("-").join("/")} ({origin_country}) &bull;{" "}
                {original_language} &bull;{" "}
              </span>
              <span className="bg-blue-600 text-white mx-2 text-sm font-medium px-3 py-0.5 rounded dark:bg-blue-700 dark:text-white">
                {formatDuration(runtime)}
              </span>
              &bull;{" "}
              <span className="bg-yellow-300 flex items-center gap-1 w-[60px] text-black text-sm font-medium mx-2 px-2 py-0.5 rounded dark:bg-yellow-300 dark:text-gray-900">
                <Star />
                <span className="font-semibold">
                  {formatRating(vote_average)}
                </span>
              </span>
            </div>

            {/* genres */}
            <div className="mt-7">
              {genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="text-blue-600 border-blue-600 font-medium bg-transparent text-sm me-2 px-3 py-1.5 rounded dark:bg-transparent dark:text-blue-400 border dark:border-blue-400"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* watchlist / play video */}
            <div className="mt-7 flex items-center gap-5">
              <button className="flex items-center gap-2 border-2 hover:text-white hover:bg-slate-600 hover:border-slate-600 border-slate-700 dark:hover:bg-slate-700 px-4 py-3 rounded-lg">
                <PlayTrailer theme={theme} className="" />
                <span className="dark:text-slate-300 text-[17px] ">
                  Play Trailer
                </span>
              </button>

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
            </div>

            {/* tagline / overview */}
            <div className="flex flex-col gap-2 mt-5">
              <p className="dark:text-gray-400 text-gray-500 text-[17px] italic">
                {tagline}
              </p>

              <div className="flex flex-col gap-1">
                <h3 className="dark:text-white text-[20px] font-medium">
                  Overview
                </h3>
                <p className="dark:text-white text-[17px]">{overview}</p>
              </div>
            </div>
          </div>
        </div>

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

        {/* keywords */}
        <div className="flex flex-col gap-8 py-7">
          <div className="flex items-center justify-center gap-3">
            <Keyword theme={theme} />
            <h4 className="dark:text-white text-xl font-Roboto">Keywords</h4>
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
          <div className="watchProviders flex flex-col gap-8 py-7">
            <div className="flex items-center justify-center gap-3">
              <WatchProviders theme={theme} />
              <h4 className="dark:text-white text-xl font-Roboto">Watch Providers</h4>
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
