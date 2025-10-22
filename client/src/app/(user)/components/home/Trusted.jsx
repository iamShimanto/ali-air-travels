"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { text } from "@/data/translation";

const Trusted = () => {
  const { lang, toggleLang } = useLanguage();
  return (
    <section className="pt-10 sm:pt-25 pb-10 overflow-hidden px-3">
      <div className="container">
        <h2
          data-aos="fade-in"
          className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-dark text-shadow-darkest font-jakarta font-semibold sm:border-b-4 border-brand w-fit mb-18"
        >
          {text[lang].trust1}{" "}
          <p className="inline-block border-b-4 border-brand sm:border-none">
            {text[lang].trust2}
          </p>
        </h2>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={1}
          spaceBetween={15}
          loop
          speed={600}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="w-full [--swiper-pagination-color:#ff6500] [--swiper-pagination-bullet-inactive-color:#d1d5db] "
        >
          {[...Array(8)].map((_, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full aspect-square overflow-hidden rounded-xl">
                <Image
                  src={`/celebrity-${i + 1}.jpg`}
                  alt={`Celebrity ${i + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  loading="eager"
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Trusted;
