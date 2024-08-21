import React from "react";
import { WatchProvidersIcon } from "../../Icons";
import useFetch from "../../hooks/useFetch";

const WatchProviders = ({ id, theme }) => {
  const { data: watchProviders } = useFetch(`movie/${id}/watch/providers`);

  return (
    <div>
      {watchProviders?.US?.buy?.length > 0 && (
        <div className="watchProviders flex flex-col gap-10 py-10">
          <div className="flex items-center justify-center gap-3">
            <WatchProvidersIcon theme={theme} />
            <h4 className="dark:text-white text-xl font-Roboto font-semibold underline underline-offset-8">
              Watch Providers
            </h4>
          </div>

          <div className="flex items-center justify-between w-full">
            {watchProviders?.US?.buy.map((provider) => (
              <div
                className="w-[200px] flex flex-col items-center gap-3"
                key={provider.provider_id}
              >
                <img
                  className="w-[70px] rounded-lg object-end object-cover cursor-pointer"
                  src={`https://image.tmdb.org/t/p/w500/${provider.logo_path}`}
                  alt="provider"
                />
                <p className="dark:text-white text-center font-Roboto">
                  {provider.provider_name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default WatchProviders;
