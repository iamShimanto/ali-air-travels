"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Link from "next/link";

const HajjSlider = ({ data }) => {
  return (
    <>
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        spaceBetween={15}
        loop
        speed={400}
        autoplay={{ delay: 1500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        className="w-full [--swiper-pagination-color:#ff6500] [--swiper-pagination-bullet-inactive-color:#d1d5db]"
      >
        {data?.data?.map((item) => (
          <SwiperSlide>
            <Link
              key={item.id}
              href={`/packagedetails/${item.id}`}
              className="flex flex-col border-4 border-brand rounded-4xl"
            >
              <div
                className="relative h-[40dvh] sm:h-[50dvh] bg-center bg-no-repeat bg-cover rounded-t-3xl overflow-hidden"
                style={{ backgroundImage: "url('/hajj-1.jpg')" }}
              >
                <div className="absolute inset-0 bg-black/20 z-[1]" />

                <h2 className="absolute inset-0 flex justify-center items-center text-5xl sm:text-4xl md:text-5xl text-glow font-jakarta font-semibold text-light text-shadow-darker z-[2] bg-black/30 backdrop-blur-xs rounded-t-3xl text-center">
                  {item?.title}
                </h2>
              </div>

              <div className="flex bg-light flex-col gap-3 rounded-b-3xl pt-2 px-3 pb-4">
                <h2 className="text-2xl font-jakarta font-semibold text-dark/90 text-shadow-darker">
                  {item?.title}
                </h2>
                <div className="text-sm flex flex-wrap gap-2 pb-2">
                  <p className="px-2 py-1 bg-brand text-light text-shadow-darkest nav-custom-shadow font-roboto w-fit rounded-2xl">
                    Cheapest
                  </p>
                  <p className="px-2 py-1 bg-brand text-light text-shadow-darkest nav-custom-shadow font-roboto w-fit rounded-2xl">
                    Full Board
                  </p>
                </div>
                <p className="text-lg flex items-center text-dark text-shadow-darker font-jakarta font-semibold">
                  {item?.price}
                </p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HajjSlider;
