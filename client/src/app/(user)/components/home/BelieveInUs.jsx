"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import { text } from "@/data/translation";
import { useLanguage } from "@/context/LanguageContext";

const BelieveInUs = () => {
  const { lang, toggleLang } = useLanguage();
  return (
    <section className="px-3 pt-15 pb-8">
      <div className="container">
        <h2
          data-aos="fade-right"
          className="text-4xl md:text-5xl lg:text-6xl mb-10 text-dark font-jakarta font-semibold text-shadow-darkest border-b-4 border-brand w-fit overflow-hidden"
        >
          {text[lang].believe}
        </h2>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={2}
          slidesPerView={3}
          loop={true}
          speed={2000}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          allowTouchMove={false}
          breakpoints={{
            640: { slidesPerView: 4, spaceBetween: 20 },
            1024: { slidesPerView: 6, spaceBetween: 25 },
            1280: { slidesPerView: 7, spaceBetween: 30 },
          }}
          className="rounded-3xl flex items-center"
        >
          <SwiperSlide>
            <div className="p-6 rounded-2xl flex items-center justify-center">
              <Image
                src="/army.png"
                alt="Army"
                width={250}
                height={150}
                className="object-contain"
                loading="eager"
                priority
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-6 rounded-2xl flex items-center justify-center">
              <Image
                src="/navy.png"
                alt="Navy"
                width={250}
                height={150}
                className="object-contain"
                loading="eager"
                priority
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-6 rounded-2xl flex items-center justify-center">
              <Image
                src="/af.png"
                alt="Air Force"
                width={250}
                height={150}
                className="object-contain"
                loading="eager"
                priority
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-6 mt-3 rounded-2xl flex items-center justify-center">
              <Image
                src="/bgb.png"
                alt="BGB"
                width={250}
                height={150}
                className="object-contain"
                loading="eager"
                priority
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-6 mt-2 rounded-2xl flex items-center justify-center">
              <Image
                src="/bcb.png"
                alt="BCB"
                width={250}
                height={150}
                className="object-contain"
                loading="eager"
                priority
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-6 mt-6 rounded-2xl flex items-center justify-center">
              <Image
                src="/sabre.jpg"
                alt="Sabre"
                width={250}
                height={150}
                className="object-contain"
                loading="eager"
                priority
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-6 rounded-2xl flex items-center justify-center">
              <Image
                src="/hoa.png"
                alt="HOA"
                width={250}
                height={150}
                className="object-contain"
                loading="eager"
                priority
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-6 mt-2 rounded-2xl flex items-center justify-center">
              <Image
                src="/atab.png"
                alt="ATAB"
                width={250}
                height={150}
                className="object-contain"
                loading="eager"
                priority
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="p-2 mt-7 bg-black rounded-2xl flex items-center justify-center">
              <Image
                src="/websola.png"
                alt="Weblaa"
                width={250}
                height={150}
                className="object-contain my-5"
                loading="eager"
                priority
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default BelieveInUs;
