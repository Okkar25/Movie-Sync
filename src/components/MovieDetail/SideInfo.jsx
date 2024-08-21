import React from "react";
import {
  PlayTrailer,
  Star,
  WatchlistAdded,
  WatchlistNotAdded,
} from "../../Icons";
import useFetchMovie from "../../hooks/useFetchMovie";
import { formatDuration, formatRating } from "../../lib/functions";

const SideInfo = ({ id, theme, watchlist, setWatchlist, credits }) => {
  const { data: movie } = useFetchMovie(`movie/${id}`);
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

  const movieDirector = credits.crew?.find(
    (director) => director?.known_for_department === "Directing"
  )?.original_name;

  return (
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
            <span className="font-semibold">{formatRating(vote_average)}</span>
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

        {/* director */}
        <p className="text-lg font-Roboto mt-3 font-medium text-orange-700 dark:text-orange-200 italic">
          Director : {movieDirector}
        </p>
      </div>
    </div>
  );
};

export default SideInfo;
