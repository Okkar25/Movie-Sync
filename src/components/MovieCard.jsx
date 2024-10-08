import React from "react";
import { Link } from "react-router-dom";
import backupImage from "../assets/Missing_Movie/come_soon1.jpg";
import { averageRating, formatReleaseDate } from "../lib/functions";

const MovieCard = ({
  movie: {
    id,
    title,
    overview,
    poster_path,
    backdrop_path,
    original_name,
    vote_average,
    release_date,
    first_air_date,
  },
}) => {
  const movieImage = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
    : backupImage;

  return (
    <div className="relative max-w-sm cursor-pointer bg-gray-200 border-0 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <p className="text-yellow-200 absolute bottom-[80px] sm:bottom-[84px] right-0 bg-gray-900 px-4 py-1 rounded-tl-lg">
        {averageRating(vote_average)}
      </p>

      <Link to={`/movie/${id}`}>
        <img
          className="rounded-t-lg w-full object-cover object-center h-[250px] sm:h-[300px]"
          src={movieImage}
        />

        <div className="p-3">
          <h5 className="sm:mb-2 mb-1 text-lg sm:text-xl line-clamp-1 font-bold tracking-tight text-gray-900 dark:text-white">
            {title || original_name}
          </h5>

          {/* <p className="sm:mb-3 mb-0 font-normal text-sm line-clamp-2 text-gray-700 dark:text-gray-400">
            {overview}
          </p> */}

          <p className="font-normal text-[16px] line-clamp-1 text-gray-700 dark:text-gray-400">
            {formatReleaseDate(release_date || first_air_date)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
