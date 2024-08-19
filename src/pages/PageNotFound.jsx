import React from "react";
import { useNavigate } from "react-router-dom";
import notFound from "../assets/404Error/NotFound2.svg";

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    <main className="">
      <section className="flex flex-col justify-center pt-3 sm:pt-5 px-2">
        <div className="flex flex-col items-center my-4">
          <p className="dark:text-white text-center text-lg sm:text-xl font-Poppins">
            Oops! We can't find the page you're looking for.
          </p>
          <img src={notFound} className="w-[400px]" alt="404" />
        </div>

        <div className="mx-auto">
          <button onClick={() => navigate("/")} className="btn">
            Back to Home Page
          </button>
        </div>
      </section>
    </main>
  );
};

export default PageNotFound;
