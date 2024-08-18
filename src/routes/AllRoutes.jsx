import React from "react";
import { Route, Routes } from "react-router-dom";
import { MovieDetail, MovieList, PageNotFound, Search } from "../pages";

const AllRoutes = () => {
  const urlRoutes = {
    now_playing: "movie/now_playing",
    popular: "movie/popular",
    top_rated: "movie/top_rated",
    upcoming: "movie/upcoming",
    tv: "tv/top_rated",
    search: "search/movie",
  };

  return (
    <div className="dark:bg-gray-900 bg-gray-100">
      <Routes>
        <Route
          path="/"
          element={<MovieList apiPath={urlRoutes.now_playing} />}
        />

        <Route
          path="/movies/popular"
          element={<MovieList apiPath={urlRoutes.popular} />}
        />

        <Route
          path="/movies/top"
          element={<MovieList apiPath={urlRoutes.top_rated} />}
        />

        <Route
          path="/movies/upcoming"
          element={<MovieList apiPath={urlRoutes.upcoming} />}
        />

        <Route
          path="/tv/top_rated"
          element={<MovieList apiPath={urlRoutes.tv} />}
        />

        <Route path="/movie/:id" element={<MovieDetail />} />

        <Route path="/search" element={<Search apiPath={urlRoutes.search} />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
