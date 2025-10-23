import React from "react";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { TbCurrencyTaka } from "react-icons/tb";
import { useLanguage } from "@/context/LanguageContext";
import { text } from "@/data/translation";
import { cookies } from "next/headers";
import UmrahSlider from "./UmrahSlider";
import baseUrl from "@/app/baseUrl";

const Umrah = async () => {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "bn";

  const res = await fetch(
    `${baseUrl()}/package/all-package?lang=${lang}&type=umrah`,
    {
      cache: "no-store",
    }
  );

  const result = await res.json();

  return (
    <section className="py-10">
      <h2
        data-aos="fade-right"
        className="container text-4xl md:text-5xl lg:text-6xl mb-10 text-dark font-jakarta font-semibold text-shadow-darkest border-b-4 border-brand w-fit"
      >
        {text[lang].umrah}
      </h2>

      <div className="container hidden sm:grid xl:px-26 grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 pt-10 lg:pt-20">
        {result?.data?.map((item) => (
          <Link
            key={item.id}
            href={`/packagedetails/${item.id}`}
            className="flex flex-col border-5 border-brand rounded-4xl"
          >
            <div
              className="relative group h-[25dvh] sm:h-[35dvh] bg-center bg-no-repeat bg-cover rounded-t-lg sm:rounded-t-3xl overflow-hidden"
              style={{ backgroundImage: `url('/${item.img}')` }}
            >
              <div className="absolute inset-0 bg-black/40 z-[1] transition-all duration-300" />

              <div className="absolute inset-0 group-hover:backdrop-blur-sm group-hover:bg-black/20 transition-all duration-300 z-[2]" />

              <h2 className="absolute capitalize inset-0 flex justify-center items-center text-center text-2xl sm:text-3xl md:text-5xl text-glow font-jakarta font-semibold text-light text-shadow-darker z-[4] px-3">
                {item?.title}
              </h2>

              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 text-white z-[5] bg-black/10 backdrop-blur-sm">
                <FiSearch className="text-4xl mb-2" />
                <p className="text-xl lg:text-2xl">explore more</p>
              </div>
            </div>

            <div className="flex flex-col gap-2 sm:gap-4 bg-light rounded-lg sm:rounded-b-3xl pt-1.5 px-3 pb-4 shadow-xl">
              <h2 className="text-lg sm:text-xl md:text-2xl my-2 font-jakarta font-semibold text-dark/90 border-b-3 w-fit border-brand text-shadow-darker">
                {item?.title}
              </h2>
              <div className="text-sm sm:text-[16px] flex flex-wrap gap-2 sm:gap-3 pb-2">
                <p className="px-2 py-1 bg-brand text-light text-shadow-darkest nav-custom-shadow font-roboto w-fit rounded-2xl">
                  Cheapest
                </p>
                <p className="px-2 py-1 bg-brand text-light text-shadow-darkest nav-custom-shadow font-roboto w-fit rounded-2xl">
                  Full Board
                </p>
              </div>
              <p className="pl-2 pb-2 flex items-center text-xl sm:text-2xl text-dark text-shadow-darker font-jakarta font-semibold">
                {item?.price}
                {/* <TbCurrencyTaka className="text-3xl text-dark/80" /> */}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="container sm:hidden pt-10 relative">
        <UmrahSlider data={result} />
      </div>
    </section>
  );
};

export default Umrah;
