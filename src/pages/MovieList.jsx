import React from "react";
import { MovieCard } from "../components";
import useFetch from "../hooks/useFetch";

const MovieList = ({ apiPath }) => {
  const { data: movies } = useFetch(apiPath);

  let headerTitle = "Movies";

  switch (apiPath) {
    case "movie/now_playing":
      headerTitle = "Now Playing Movies";
      break;

    case "movie/popular":
      headerTitle = "Popular Movies";
      break;

    case "movie/top_rated":
      headerTitle = "Top Rated Movies";
      break;

    case "movie/upcoming":
      headerTitle = "Upcoming Movies";
      break;

    case "tv/top_rated":
      headerTitle = "Top Rated TV Shows";
      break;

    default:
      headerTitle = "Movies";
  }

  // console.log(movies);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-3 sm:py-5 flex flex-col gap-5 sm:gap-10 z-10">
        {movies?.length !== 0 && (
          <span className="dark:text-white font-semibold text-xl text-center sm:text-[25px] underline underline-offset-8">
            {headerTitle}
          </span>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {/* movie card */}
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MovieList;
