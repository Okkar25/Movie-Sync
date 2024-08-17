import React from "react";
import { useLocation } from "react-router-dom";
import { MovieCard } from "../components";
import useSearch from "../hooks/useSearch";

const Search = ({ apiPath }) => {
  const location = useLocation();

  const searchQuery = location.state.searchParams;
  //
  // const { data: movies } = useFetch(apiPath, searchQuery);
  const { data: movies } = useSearch(searchQuery);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7 text-center">
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
            <span className="dark:text-white">
              There are no movies that matched your query.
            </span>
          </>
        )}
      </section>
    </main>
  );
};

export default Search;
