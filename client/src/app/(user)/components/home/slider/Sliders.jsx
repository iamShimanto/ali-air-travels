"use client"
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Sliders = () => {
  return (
    <>
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        loop={true}
        className="absolute inset-0 h-full w-full z-0"
      >
        <SwiperSlide className="relative h-full w-full">
          <Image
            src="/banner-1.jpg"
            alt="Banner 1"
            fill
            className="object-cover"
            priority
          />
        </SwiperSlide>

        <SwiperSlide className="relative h-full w-full">
          <Image
            src="/banner-2.jpg"
            alt="Banner 2"
            fill
            className="object-cover"
            priority
          />
        </SwiperSlide>

        <SwiperSlide className="relative h-full w-full">
          <Image
            src="/banner-3.jpg"
            alt="Banner 3"
            fill
            className="object-cover"
            priority
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Sliders;
