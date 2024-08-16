import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo2-removebg.png";

const Footer = () => {
  return (
    <footer
      className="bg-white shadow dark:bg-gray-800 mt-auto dark:border-t dark:border-gray-900"
      style={{ boxShadow: "0 0 3px 0 rgba(0,0,0,0.2)" }}
    >
      <div className="w-full max-w-screen-xl mx-auto p-5 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center justify-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8 sm:h-10" alt="Flowbite Logo" />
            <span className="self-center font-Poppins text-xl sm:text-2xl font-semibold whitespace-nowrap dark:text-white">
              MovieSync
            </span>
          </Link>

          <ul className="flex flex-wrap items-center justify-center mb-6 text-sm sm:text-[15px] font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                Instagram
              </Link>
            </li>

            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                LinkedIn
              </Link>
            </li>

            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                YouTube
              </Link>
            </li>

            <li>
              <Link to="/" className="hover:underline">
                GitHub
              </Link>
            </li>
          </ul>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="flex flex-col gap-1 sm:flex-row justify-center text-center text-sm sm:text-[15px] text-gray-600 dark:text-gray-400">
          <p>
            © 2024
            <Link
              to="/"
              className="hover:underline dark:text-slate-400 ms-1 font-semibold"
            >
              MovieSync
            </Link>
            . All Rights Reserved.
          </p>

          <p>
            Developed by
            <span className="dark:text-white ms-1 text-black font-semibold">
              Novak
            </span>
            .
          </p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
