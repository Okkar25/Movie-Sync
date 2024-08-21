import React from "react";
import useFetchMovie from "../../hooks/useFetchMovie";
import { Keyword } from "../../Icons";

const Keywords = ({ id, theme }) => {
  const { data: keywordProviders } = useFetchMovie(`movie/${id}/keywords`);

  return (
    <div className="flex flex-col gap-10 py-5">
      <div className="flex items-center justify-center gap-3">
        <Keyword theme={theme} />
        <h4 className="dark:text-white text-xl font-Roboto font-semibold underline underline-offset-8">
          Keywords
        </h4>
      </div>

      <div className=" flex flex-wrap justify-center items-center gap-3">
        {keywordProviders?.keywords?.map((keyword) => (
          <span
            key={keyword.id}
            className="dark:text-white dark:bg-slate-700 bg-gray-300 px-4 py-1 rounded-lg"
          >
            {keyword.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Keywords;
