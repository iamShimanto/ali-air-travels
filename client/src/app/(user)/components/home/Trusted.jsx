import { text } from "@/data/translation";
import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";

const Trusted = () => {
  const cookieStore = cookies();
    const lang = cookieStore.get("lang")?.value || "bn";
  return (
    <section className="pt-10 sm:pt-25  pb-10 overflow-hidden px-3 ">
      <div className="container">
        <h2
          data-aos="fade-right"
          className=" text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-dark text-shadow-darkest font-jakarta font-semibold  sm:border-b-4 border-brand w-fit  mb-8"
        >
          {text[lang].trust1}{" "}
          <p className="inline-block border-b-4 border-brand sm:border-none">
            {text[lang].trust2}
          </p>
        </h2>

        <div className="sm:hidden flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar px-1">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-[80%] aspect-square overflow-hidden rounded-xl snap-start"
            >
              <Image
                src={`/celebrity-${i + 1}.jpg`}
                alt={`Celebrity ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
                loading="eager"
                priority
              />
            </div>
          ))}
        </div>

        <div className="hidden sm:grid grid-cols-2 sm:grid-cols-4 gap-6 pt-20 pb-20">
          <div className="relative w-full aspect-square overflow-hidden rounded-xl">
            <Image
              src="/celebrity-1.jpg"
              alt="Celebrity 1"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              loading="eager"
              priority
            />
          </div>

          <div className="relative w-full aspect-square overflow-hidden rounded-xl">
            <Image
              src="/celebrity-2.jpg"
              alt="Celebrity 2"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              loading="eager"
              priority
            />
          </div>

          <div className="relative w-full aspect-square overflow-hidden rounded-xl">
            <Image
              src="/celebrity-3.jpg"
              alt="Celebrity 3"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              loading="eager"
              priority
            />
          </div>

          <div className="relative w-full aspect-square overflow-hidden rounded-xl">
            <Image
              src="/celebrity-4.jpg"
              alt="Celebrity 4"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              loading="eager"
              priority
            />
          </div>

          <div className="relative w-full aspect-square overflow-hidden rounded-xl">
            <Image
              src="/celebrity-5.jpg"
              alt="Celebrity 5"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              loading="eager"
              priority
            />
          </div>

          <div className="relative w-full aspect-square overflow-hidden rounded-xl">
            <Image
              src="/celebrity-6.jpg"
              alt="Celebrity 6"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              loading="eager"
              priority
            />
          </div>

          <div className="relative w-full aspect-square overflow-hidden rounded-xl">
            <Image
              src="/celebrity-7.jpg"
              alt="Celebrity 7"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              loading="eager"
              priority
            />
          </div>

          <div className="relative w-full aspect-square overflow-hidden rounded-xl">
            <Image
              src="/celebrity-8.jpg"
              alt="Celebrity 8"
              fill
              className="object-cover hover:scale-105 transition-transform duration-300"
              loading="eager"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trusted;
