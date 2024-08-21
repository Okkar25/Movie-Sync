import React from "react";
import useFetchMovie from "../../hooks/useFetchMovie";
import { formatAmount } from "../../lib/functions";

const BudgetRevenue = ({ id }) => {
  const { data: movie } = useFetchMovie(`movie/${id}`);
  const { budget, revenue, status, spoken_languages } = movie;

  const spokenLanguage =
    spoken_languages?.length > 0 && spoken_languages[0]?.english_name;

  return (
    <div className="grid grid-cols-4 gap-3 text-center dark:text-white py-7 my-10 rounded-lg bg-gray-300 dark:bg-slate-800 ">
      <div className="status flex flex-col gap-1">
        <h4 className="font-medium">Status</h4>
        <p>{status}</p>
      </div>

      <div className="language flex flex-col gap-1">
        {" "}
        <h4 className="font-medium">Original language</h4>
        <p>{spokenLanguage}</p>
      </div>

      <div className="budget flex flex-col gap-1">
        {" "}
        <h4 className="font-medium">Budget</h4>
        <p>{formatAmount(budget)}</p>
      </div>

      <div className="revenue flex flex-col gap-1">
        {" "}
        <h4 className="font-medium">Revenue</h4>
        <p>{formatAmount(revenue)}</p>
      </div>
    </div>
  );
};

export default BudgetRevenue;
