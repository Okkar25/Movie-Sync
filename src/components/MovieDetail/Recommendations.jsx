import React from "react";
import { useNavigate } from "react-router-dom";
import backupImage from "../../assets/Missing_Movie/come_soon1.jpg";
import useFetch from "../../hooks/useFetch";
import { RecommendationsIcon } from "../../Icons";

const Recommendations = ({ id, theme }) => {
  const { data: similarMovies } = useFetch(`movie/${id}/recommendations`);
  const navigate = useNavigate();

  //   console.log(similarMovies); // backdrop_path / poster_path / release_date / original_title

  return (
    <div className="flex flex-col gap-8 py-3 select-none">
      <div className="flex items-center justify-center gap-3">
        <RecommendationsIcon theme={theme} />
        <h4 className="dark:text-white text-xl font-Roboto font-semibold underline underline-offset-8">
          Recommendations
        </h4>
      </div>

      <div className="flex items-center gap-5 overflow-x-auto castScrollBar pb-5">
        {similarMovies.map((movie) => (
          <div
            className="flex flex-col gap-3"
            key={movie.id}
            onClick={() => navigate(`/movie/${movie.id}`)}
          >
            <img
              src={
                movie.backdrop_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`
                  : backupImage
              }
              alt="similar movies"
              className="min-w-[250px] h-[150px] object-cover rounded-lg cursor-pointer"
            />

            <div className="flex flex-col items-center">
              <span className="dark:text-white line-clamp-1">
                {movie.original_title}
              </span>
              <span className="dark:text-gray-300 line-clamp-1">
                {movie.character}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
