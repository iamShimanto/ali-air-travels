"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import Link from "next/link";

const Banner = () => {
  return (
    <section className="py-2 mx-2 sm:mx-3">
      <div className="gap-2">
        <div className="relative w-full h-[40dvh] sm:h-[85dvh] rounded-3xl nav-custom-shadow overflow-hidden flex items-center justify-center">
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

          <div className="absolute inset-0 bg-black/30 z-10"></div>

          <div className="absolute  flex items-center justify-center z-20">
            <div className=" px-6 py-4 rounded-md">
              <h1 className="max-w-3xl text-center text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-jakarta font-semibold text-white text-glow text-shadow-darker">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
                  Trusted
                </span>{" "}
                Hajj & Umrah Agency In
                <br />
                <span className="border-b-4 border-brand">Bangladesh</span>
              </h1>
              <button className="scale-97 mt-10 sm:mt-20 w-fit mx-auto cursor-pointer bg-brand px-4 sm:px-4 py-1.5 sm:py-3 font-jakarta font-semibold text-light text-glow text-lg sm:text-2xl nav-custom-shadow rounded-xl  flex justify-center items-center transition-all hover:scale-100">
                explore more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
