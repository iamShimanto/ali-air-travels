import React from "react";
import Sliders from "./slider/Sliders";
import { cookies } from "next/headers";
import { text } from "@/data/translation";

const Banner = () => {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "bn";
  return (
    <section className="py-2 mx-2 sm:mx-3">
      <div className="gap-2">
        <div className="relative w-full h-[40dvh] sm:h-[85dvh] rounded-3xl nav-custom-shadow overflow-hidden flex items-center justify-center">
          <Sliders />

          <div className="absolute inset-0 bg-black/30 z-10"></div>

          <div className="absolute  flex items-center justify-center z-20">
            <div className=" px-6 py-4 rounded-md">
              <h1 className="max-w-3xl text-center text-3xl sm:text-5xl md:text-6xl xl:text-7xl font-jakarta font-semibold text-white text-glow text-shadow-darker">
                <span
                  data-aos="fade-right"
                  className="inline-block text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
                >
                  {text[lang].bannertop}
                </span>{" "}
                <br />
                <span data-aos="fade-left" className="inline-block">
                  {text[lang].bannermiddle}
                </span>
                <br />
                <span
                  data-aos="fade-right"
                  className="inline-block  border-b-4 border-brand"
                >
                  {text[lang].bannerbottom}
                </span>
              </h1>
              <button
                data-aos="fade-up"
                className="scale-97 mt-10 sm:mt-20 w-fit mx-auto cursor-pointer bg-brand px-4 sm:px-4 py-1.5 sm:py-3 font-jakarta font-semibold text-light text-glow text-lg sm:text-2xl nav-custom-shadow rounded-xl  flex justify-center items-center transition-all hover:scale-100"
              >
                {text[lang].bannerexplore}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
