"use client";

import React from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { TbCurrencyTaka } from "react-icons/tb";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hajj = () => {
  return (
    <section className="pt-15 lg:pt-28 pb-10">
      <h2
        data-aos="fade-right"
        className="container text-4xl md:text-5xl lg:text-6xl mb-10 text-dark font-jakarta font-semibold text-shadow-darkest border-b-4 border-brand w-fit"
      >
        Hajj Packages
      </h2>

      <div className="container hidden sm:grid xl:px-26 grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 pt-10 lg:pt-20">
        <Link
          href="/packagedetails"
          className="flex flex-col border-5 rounded-4xl  border-brand"
        >
          <div
            className="relative group h-[25dvh] sm:h-[35dvh]  bg-center bg-no-repeat bg-cover rounded-t-lg sm:rounded-t-3xl overflow-hidden"
            style={{ backgroundImage: "url('/hajj-1.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/40 z-[1] transition-all duration-300" />

            <div className="absolute inset-0 group-hover:backdrop-blur-sm group-hover:bg-black/20 transition-all duration-300 z-[2]" />

            <h2 className="absolute inset-0 flex justify-center items-center text-center text-2xl sm:text-3xl md:text-5xl text-glow font-jakarta font-semibold text-light text-shadow-darker z-[4] px-3">
              Hajj Regular
            </h2>

            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 text-white z-[5] bg-black/10 backdrop-blur-sm">
              <FiSearch className="text-4xl mb-2" />
              <p className="text-xl lg:text-2xl">explore more</p>
            </div>
          </div>
          <div className="flex bg-light flex-col gap-2 sm:gap-5 rounded-lg sm:rounded-b-3xl pt-1.5 px-3 pb-4 shadow-xl">
            <h2 className="text-lg sm:text-xl md:text-2xl my-2 font-jakarta font-semibold text-dark/90 border-b-3 w-fit border-brand text-shadow-darker">
              Hajj Regular
            </h2>
            <div className="text-sm sm:text-[16px] flex flex-wrap gap-2 sm:gap-4 pb-2 ">
              <p className="px-2 py-1 bg-brand text-light text-shadow-darkest nav-custom-shadow font-roboto w-fit rounded-2xl ">
                Cheapest
              </p>
              <p className="px-2 py-1 bg-brand text-light text-shadow-darkest nav-custom-shadow font-roboto w-fit rounded-2xl ">
                Full Board
              </p>
            </div>
            <p className="text-xl flex items-center sm:text-2xl text-dark text-shadow-darker font-jakarta font-semibold">
              1,80,000 <TbCurrencyTaka className="text-3xl" />
            </p>
          </div>
        </Link>

        <Link
          href="/packagedetails"
          className="flex flex-col border-5 rounded-4xl  border-brand"
        >
          <div
            className="relative group h-[25dvh] sm:h-[35dvh] bg-center bg-no-repeat bg-cover rounded-t-lg sm:rounded-t-3xl overflow-hidden"
            style={{ backgroundImage: "url('/hajj-2.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/40 z-[1] transition-all duration-300" />

            <div className="absolute inset-0 group-hover:backdrop-blur-sm group-hover:bg-black/20 transition-all duration-300 z-[2]" />

            <h2 className="absolute inset-0 flex justify-center items-center text-center text-2xl sm:text-3xl md:text-5xl text-glow font-jakarta font-semibold text-light text-shadow-darker z-[4] px-3">
              Hajj Regular
            </h2>

            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 text-white z-[5] bg-black/10 backdrop-blur-sm">
              <FiSearch className="text-4xl mb-2" />
              <p className="text-xl lg:text-2xl">explore more</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:gap-5 bg-light rounded-lg sm:rounded-b-3xl pt-1.5 px-3 pb-4 shadow-xl">
            <h2 className="text-lg sm:text-xl md:text-2xl my-2 font-jakarta font-semibold text-dark/90 border-b-3 w-fit border-brand text-shadow-darker">
              Hajj Special
            </h2>
            <div className="text-sm sm:text-[16px] flex flex-wrap gap-2 sm:gap-4 pb-2 ">
              <p className="px-2 py-1 bg-brand text-light text-shadow-darkest nav-custom-shadow font-roboto w-fit rounded-2xl ">
                Affordable
              </p>
              <p className="px-2 py-1 bg-brand text-light text-shadow-darkest nav-custom-shadow font-roboto w-fit rounded-2xl ">
                Full Board
              </p>
            </div>
            <p className="text-xl flex items-center sm:text-2xl text-dark text-shadow-darker font-jakarta font-semibold">
              2,20,000 <TbCurrencyTaka className="text-3xl" />
            </p>
          </div>
        </Link>

        <Link
          href="/packagedetails"
          className="flex flex-col border-5 rounded-4xl  border-brand"
        >
          <div
            className="relative group h-[25dvh] sm:h-[35dvh] bg-center bg-no-repeat bg-cover rounded-t-lg sm:rounded-t-3xl overflow-hidden"
            style={{ backgroundImage: "url('/hajj-3.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/40 z-[1] transition-all duration-300" />

            <div className="absolute inset-0 group-hover:backdrop-blur-sm group-hover:bg-black/20 transition-all duration-300 z-[2]" />

            <h2 className="absolute inset-0 flex justify-center items-center text-center text-2xl sm:text-3xl md:text-5xl text-glow font-jakarta font-semibold text-light text-shadow-darker z-[4] px-3">
              Hajj Regular
            </h2>

            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 text-white z-[5] bg-black/10 backdrop-blur-sm">
              <FiSearch className="text-4xl mb-2" />
              <p className="text-xl lg:text-2xl">explore more</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:gap-5 bg-light rounded-lg sm:rounded-b-3xl pt-1.5 px-3 pb-4 shadow-xl">
            <h2 className="text-lg sm:text-xl md:text-2xl my-2 font-jakarta font-semibold text-dark/90 border-b-3 w-fit border-brand text-shadow-darker">
              Hajj Premium
            </h2>
            <div className="text-sm sm:text-[16px] flex flex-wrap gap-2 sm:gap-4 pb-2 ">
              <p className="px-2 py-1 bg-brand text-light text-shadow-darkest nav-custom-shadow font-roboto w-fit rounded-2xl ">
                Premium
              </p>
              <p className="px-2 py-1 bg-brand text-light text-shadow-darkest nav-custom-shadow font-roboto w-fit rounded-2xl ">
                4 Star Hotel
              </p>
            </div>
            <p className="text-xl flex items-center sm:text-2xl text-dark text-shadow-darker font-jakarta font-semibold">
              2,90,000 <TbCurrencyTaka className="text-3xl" />
            </p>
          </div>
        </Link>
        <Link
          href="/packagedetails"
          className="flex flex-col border-5 rounded-4xl  border-brand"
        >
          <div
            className="relative group h-[25dvh] sm:h-[35dvh] bg-center bg-no-repeat bg-cover rounded-t-lg sm:rounded-t-3xl overflow-hidden"
            style={{ backgroundImage: "url('/hajj-4.jpg')" }}
          >
            <div className="absolute inset-0 bg-black/40 z-[1] transition-all duration-300" />

            <div className="absolute inset-0 group-hover:backdrop-blur-sm group-hover:bg-black/20 transition-all duration-300 z-[2]" />

            <h2 className="absolute inset-0 flex justify-center items-center text-center text-2xl sm:text-3xl md:text-5xl text-glow font-jakarta font-semibold text-light text-shadow-darker z-[4] px-3">
              Hajj Exclusive
            </h2>

            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 text-white z-[5] bg-black/10 backdrop-blur-sm">
              <FiSearch className="text-4xl mb-2" />
              <p className="text-xl lg:text-2xl">explore more</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 sm:gap-5 bg-light rounded-lg sm:rounded-b-3xl pt-1.5 px-3 pb-4 shadow-xl">
            <h2 className="text-lg sm:text-xl md:text-2xl my-2 font-jakarta font-semibold text-dark/90 border-b-3 w-fit border-brand text-shadow-darker">
              Hajj Exclusive
            </h2>
            <div className="text-sm sm:text-[16px] flex flex-wrap gap-2 sm:gap-4 pb-2 ">
              <p className="px-2 py-1 bg-brand text-light text-shadow-darkest nav-custom-shadow font-roboto w-fit rounded-2xl ">
                Premium
              </p>
              <p className="px-2 py-1 bg-brand text-light text-shadow-darkest nav-custom-shadow font-roboto w-fit rounded-2xl ">
                4 Star Hotel
              </p>
            </div>
            <p className="text-xl sm:text-2xl text-dark text-shadow-darker font-jakarta font-semibold">
              <span className="text-xl font-roboto text-dark/90">tk</span>: on
              discussion
            </p>
          </div>
        </Link>
      </div>

      <div className="container sm:hidden pt-10 relative">
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
          <SwiperSlide>
            <Link
              href="/packagedetails"
              className="flex flex-col border-4 border-brand rounded-4xl"
            >
              <div
                className="relative h-[40dvh] sm:h-[50dvh] bg-center bg-no-repeat bg-cover rounded-t-3xl overflow-hidden"
                style={{ backgroundImage: "url('/hajj-1.jpg')" }}
              >
                <div className="absolute inset-0 bg-black/20 z-[1]" />

                <h2 className="absolute inset-0 flex justify-center items-center text-5xl sm:text-4xl md:text-5xl text-glow font-jakarta font-semibold text-light text-shadow-darker z-[2] bg-black/30 backdrop-blur-xs rounded-t-3xl text-center">
                  Hajj
                  <br /> Regular
                </h2>
              </div>

              <div className="flex bg-light flex-col gap-3 rounded-b-3xl pt-2 px-3 pb-4">
                <h2 className="text-2xl font-jakarta font-semibold text-dark/90 text-shadow-darker">
                  Hajj Regular
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
                  1,80,000
                  <TbCurrencyTaka className="text-xl" />
                </p>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              href="/packagedetails"
              className="flex flex-col  border-4 border-brand rounded-4xl"
            >
              <div
                className="relative h-[40dvh] sm:h-[50dvh] bg-center bg-no-repeat bg-cover rounded-t-3xl overflow-hidden"
                style={{ backgroundImage: "url('/hajj-2.jpg')" }}
              >
                <div className="absolute inset-0 bg-black/20 z-[1]" />

                <h2 className="absolute inset-0 flex justify-center items-center text-5xl sm:text-4xl md:text-5xl text-glow font-jakarta font-semibold text-light text-shadow-darker z-[2] bg-black/30 backdrop-blur-xs rounded-t-3xl text-center">
                  Hajj
                  <br /> Special
                </h2>
              </div>
              <div className="flex bg-light flex-col gap-3 rounded-b-3xl pt-2 px-3 pb-4  ">
                <h2 className="text-2xl font-jakarta font-semibold text-dark/90 text-shadow-darker">
                  Hajj Special
                </h2>
                <div className="text-sm flex flex-wrap gap-2 pb-2">
                  <p className="px-2 py-1 bg-brand text-light text-shadow-darkest nav-custom-shadow font-roboto w-fit rounded-2xl ">
                    Affordable
                  </p>
                  <p className="px-2 py-1 bg-brand text-light text-shadow-darkest nav-custom-shadow font-roboto w-fit rounded-2xl ">
                    Full Board
                  </p>
                </div>
                <p className="text-lg flex items-center text-dark text-shadow-darker font-jakarta font-semibold">
                  2,20,000
                  <TbCurrencyTaka className="text-xl" />
                </p>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              href="/packagedetails"
              className="flex flex-col  border-4 border-brand rounded-4xl"
            >
              <div
                className="relative h-[40dvh] sm:h-[50dvh] bg-center bg-no-repeat bg-cover rounded-t-3xl overflow-hidden"
                style={{ backgroundImage: "url('/hajj-3.jpg')" }}
              >
                <div className="absolute inset-0 bg-black/20 z-[1]" />

                <h2 className="absolute inset-0 flex justify-center items-center text-5xl sm:text-4xl md:text-5xl text-glow font-jakarta font-semibold text-light text-shadow-darker z-[2] bg-black/30 backdrop-blur-xs rounded-t-3xl text-center">
                  Hajj
                  <br /> Premium
                </h2>
              </div>
              <div className="flex bg-light flex-col gap-3 rounded-b-3xl pt-2 px-3 pb-4  ">
                <h2 className="text-2xl font-jakarta font-semibold text-dark/90 text-shadow-darker">
                  Hajj Premium
                </h2>
                <div className="text-sm flex flex-wrap gap-2 pb-2">
                  <p className="px-2 py-1 bg-brand text-light text-shadow-darkest nav-custom-shadow font-roboto w-fit rounded-2xl ">
                    Premium
                  </p>
                  <p className="px-2 py-1 bg-brand text-light text-shadow-darkest nav-custom-shadow font-roboto w-fit rounded-2xl ">
                    4 Star Hotel
                  </p>
                </div>
                <p className="text-lg flex items-center text-dark text-shadow-darker font-jakarta font-semibold">
                  2,90,000
                  <TbCurrencyTaka className="text-xl" />
                </p>
              </div>
            </Link>
          </SwiperSlide>

          <SwiperSlide>
            <Link
              href="/packagedetails"
              className="flex flex-col  border-4 border-brand rounded-4xl"
            >
              <div
                className="relative h-[40dvh] sm:h-[50dvh] bg-center bg-no-repeat bg-cover rounded-t-3xl overflow-hidden"
                style={{ backgroundImage: "url('/hajj-4.jpg')" }}
              >
                <div className="absolute inset-0 bg-black/20 z-[1]" />

                <h2 className="absolute inset-0 flex justify-center items-center text-5xl sm:text-4xl md:text-5xl text-glow font-jakarta font-semibold text-light text-shadow-darker z-[2] bg-black/30 backdrop-blur-xs rounded-t-3xl text-center">
                  Hajj
                  <br /> Exclusive
                </h2>
              </div>
              <div className="flex bg-light flex-col gap-3 rounded-b-3xl pt-2 px-3 pb-4  ">
                <h2 className="text-2xl font-jakarta font-semibold text-dark/90 text-shadow-darker">
                  Hajj Exclusive
                </h2>
                <div className="text-sm flex flex-wrap gap-2 pb-2">
                  <p className="px-2 py-1 bg-brand text-light text-shadow-darkest nav-custom-shadow font-roboto w-fit rounded-2xl ">
                    Exclusive
                  </p>
                  <p className="px-2 py-1 bg-brand text-light text-shadow-darkest nav-custom-shadow font-roboto w-fit rounded-2xl ">
                    5 Star Hotel
                  </p>
                </div>
                <p className="text-lg  flex items-center text-dark text-shadow-darker font-jakarta font-semibold">
                  2,90,000
                  <TbCurrencyTaka className="text-xl" />
                </p>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hajj;
