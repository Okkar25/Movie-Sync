import React from "react";
import { useSwiper } from "swiper/react";
import { ChevronLeft, ChevronRight } from "../Icons";

const SwiperController = () => {
  const swiper = useSwiper();

  return (
    <div className="flex items-center justify-center gap-10">
      <div className="cursor-pointer" onClick={() => swiper.slidePrev()}>
        <ChevronLeft />
      </div>

      <div className="cursor-pointer" onClick={() => swiper.slideNext()}>
        <ChevronRight />
      </div>
    </div>
  );
};

export default SwiperController;
