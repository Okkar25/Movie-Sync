import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Dark from "../assets/darkMode/Dark";
import Light from "../assets/darkMode/Light";
import Logo from "../assets/logo1-removebg.png";

const Header = ({ darkMode, setDarkMode }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [hidden, setHidden] = useState(false);

  const [search, setSearch] = useState(""); // use with input onChange

  const handleSearch = (e) => {
    e.preventDefault();

    // navigate("search", { state: { searchParams: search } }); // use with useLocation
    const queryTerm = e.target.search.value;

    navigate(`search?query=${queryTerm}`);
    // setSearch("");
    e.target.reset();
    setHidden(true);
  };

  useEffect(() => {
    setHidden(true);
  }, [pathname]);

  const linkClass = ({ isActive }) =>
    isActive
      ? "block py-2 px-3 text-[17px] bg-blue-600 text-white dark:bg-gray-900 sm:dark:bg-transparent font-semibold sm:text-indigo-600 sm:bg-transparent rounded md:hover:bg-transparent md:hover:text-indigo-600 md:p-0 md:dark:hover:text-white dark:text-white dark:hover:bg-gray-900 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
      : "block py-2 px-3 text-[17px] font-semibold text-gray-900 rounded hover:bg-blue-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 md:dark:hover:bg-transparent dark:border-gray-700";

  return (
    <header className="mb-20">
      <nav
        className="bg-gray-300 border-gray-200 dark:bg-gray-800 fixed top-0 w-full dark:border-b dark:border-gray-900 z-50"
        style={{ boxShadow: "0 0 3px 0 rgba(0,0,0,0.2)" }}
      >
        <div className="max-w-screen-xl  flex flex-wrap items-center justify-between mx-auto p-5">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8 sm:h-10" alt="MovieSync Logo" />
            <span className="self-center font-Poppins text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
              MovieSync
            </span>
          </Link>

          {/* search bar icons row */}
          <div className="mobile-nav flex md:order-2">
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="bg-gray-100 border border-gray-100 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm me-2 sm:me-3 px-3 py-1 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              {darkMode ? <Light /> : <Dark />}
            </button>

            {/* responsive search icon */}
            <button
              onClick={() => setHidden((prev) => !prev)}
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="md:hidden bg-gray-100 dark:bg-transparent text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-3"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span className="sr-only">Search</span>
            </button>

            {/* search bar - desktop */}
            <div className="relative hidden md:block">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <form onSubmit={handleSearch}>
                <input
                  name="search"
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-100 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search . . ."
                  autoComplete="off"
                />
              </form>
            </div>

            {/* responsive hamburger menu */}
            <button
              onClick={() => setHidden((prev) => !prev)}
              data-collapse-toggle="navbar-search"
              type="button"
              className="inline-flex items-center dark:bg-transparent bg-gray-100 p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>

          {/* nav bar routes and dropdown icons */}
          <div
            id="nav-links"
            className={`${
              hidden ? "hidden" : ""
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          >
            {/* responsive search bar */}
            <div className="relative mt-3 md:hidden">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <form onSubmit={handleSearch}>
                <input
                  name="search"
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-100 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search . . ."
                  autoComplete="off"
                />
              </form>
            </div>

            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-100 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
              <li>
                <NavLink to="/" end className={linkClass}>
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink to="/movies/popular" className={linkClass}>
                  Popular
                </NavLink>
              </li>

              <li>
                <NavLink to="/movies/top" className={linkClass}>
                  Top Rated
                </NavLink>
              </li>

              <li>
                <NavLink to="/movies/upcoming" className={linkClass}>
                  Upcoming
                </NavLink>
              </li>

              <li>
                <NavLink to="/tv/top_rated" className={linkClass}>
                  TV Shows
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
