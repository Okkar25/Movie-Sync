import React from "react";
import { Link } from "react-router-dom";
import backupImage from "../assets/Missing_Movie/come_soon1.jpg";

const MovieCard = ({
  movie: { id, title, overview, poster_path, backdrop_path },
}) => {
  const movieImage = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : backupImage;

  return (
    <div className="max-w-sm cursor-pointer bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <Link to={`/movie/${id}`}>
        <img
          className="rounded-t-lg w-full object-cover object-center h-[300px]"
          src={movieImage}
        />

        <div className="p-3">
          <h5 className="mb-2 text-xl line-clamp-1 font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>

          <p className="mb-3 font-normal text-sm line-clamp-2 text-gray-700 dark:text-gray-400">
            {overview}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
