import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { MovieCard } from "../components";
import useFetch from "../hooks/useFetch";

const Search = ({ apiPath }) => {
  const location = useLocation();
  const searchQuery = location.state?.searchParams;
  // const { data: movies } = useSearch(searchQuery);
  // const { data: movies } = useFetch(apiPath, searchQuery);

  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("query");
  const { data: movies } = useFetch(apiPath, queryTerm);

  console.log(searchParams);

  return (
    <main>
      <section className="flex flex-col gap-5 sm:gap-10 max-w-7xl mx-auto py-3 sm:py-5">
        {movies?.length !== 0 && (
          <span className="dark:text-white text-xl text-center sm:text-start sm:text-[28px]">
            Results for '{queryTerm}'
          </span>
        )}

        {/* movie card */}
        {movies?.length ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </div>
          </>
        ) : (
          <>
            <span className="dark:text-white text-center">
              There are no movies that matched your query.
            </span>
          </>
        )}
      </section>
    </main>
  );
};

export default Search;
