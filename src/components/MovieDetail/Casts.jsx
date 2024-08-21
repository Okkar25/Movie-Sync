import React from "react";
import MissingCast from "../../assets/Missing_Cast/ActorNotFound2.jpg";
import { Cast } from "../../Icons";

// Import Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

const Casts = ({ theme, credits }) => {
  const swiper = useSwiper();

  return (
    <div className="flex flex-col gap-8 py-3 select-none">
      <div className="flex items-center justify-center gap-3">
        <Cast theme={theme} />
        <h4 className="dark:text-white text-xl font-Roboto font-semibold underline underline-offset-8">
          Top Billed Casts
        </h4>
      </div>

      <div className="flex items-center gap-9 overflow-x-auto castScrollBar pb-5 relative cursor-grab">
        <Swiper
          className="flex flex-col gap-5"
          modules={[Navigation]}
          slidesPerView={6}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={false}
        >
          {credits.cast?.slice(0, 21).map((actor) => (
            <SwiperSlide key={actor.id}>
              <div className="flex flex-col items-center gap-3">
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                      : MissingCast
                  }
                  alt="actor"
                  className="min-w-[170px] rounded"
                />

                <div className="flex flex-col items-center">
                  <span className="dark:text-white line-clamp-1">
                    {actor.original_name}
                  </span>
                  <span className="dark:text-gray-300 line-clamp-1">
                    {actor.character}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* swiper buttons */}
          {/* <div className="">
        <SwiperController />
      </div> */}
        </Swiper>
      </div>
    </div>
  );
};

export default Casts;
