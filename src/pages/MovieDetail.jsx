import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchMovie from "../hooks/useFetchMovie";
import Star from "../Icons/Star";
import WatchlistAdded from "../Icons/WatchlistAdded";
import WatchlistNotAdded from "../Icons/WatchlistNotAdded";
import { formatDuration, formatRating } from "../lib/functions";

const MovieDetail = () => {
  const { id } = useParams();
  const [watchlist, setWatchlist] = useState(false);

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
  } = movie;

  const posterImage = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const backgroundImage = `https://image.tmdb.org/t/p/w500/${backdrop_path}`;

  console.log(movie);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <section className="mt-5">
        <div className="grid grid-cols-4 gap-10">
          <div className="col-span-1">
            <img src={posterImage} alt="poster" className="rounded-lg" />
          </div>

          <div className="col-span-3 select-none">
            {/* title / year */}
            <div className="flex items-center gap-2">
              <p className="dark:text-white font-semibold text-4xl font-Poppins">
                {original_title}
              </p>
              <span className="dark:text-gray-400 text-2xl font-Roboto">
                ( {release_date?.split("-")[0]} )
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
            <div className="mt-5">
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
            <div className="mt-4">
              <div
                className="watchlist cursor-pointer flex items-center gap-3"
                onClick={() => setWatchlist((prev) => !prev)}
              >
                <>{watchlist ? <WatchlistAdded /> : <WatchlistNotAdded />}</>

                <span className="dark:text-white font-Roboto w-[180px]">
                  {watchlist ? "Remove from Watchlist" : "Add to Watchlist"}
                </span>
              </div>

              <div className="">

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MovieDetail;
