import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutAliAirTravels = () => {
  return (
    <section className="px-3 py-10 md:pt-20 pb-0 overflow-hidden">
      <div className="container">
        <div>
          <h2
            data-aos="fade-right"
            className="mx-auto text-4xl md:text-5xl lg:text-6xl mb-10 text-dark font-jakarta font-semibold text-shadow-darkest border-b-4 border-brand w-fit"
          >
            About Us
          </h2>
          <p
            data-aos="fade-up"
            className="text-lg md:text-xl text-dark font-jakarta text-shadow-dark text-center max-w-3xl mx-auto"
          >
            {" "}
            Ali Air Travels & Tours , a trusted business support Muslim
            communities around the bangladesh by providing unparalleled access
            to faith-based practices. This includes religious obligations such
            as Umrah, Travel and Shariah-compliant Lifestyle choices.
          </p>
        </div>
        <div className="py-15 grid grid-cols-1 md:grid-cols-2 place-items-center  gap-5">
          <div>
            <div className="relative w-fit mx-auto">
              <Image
                src="/mr-ali.png"
                alt="Mr. Ali - CEO"
                width={500}
                height={600}
                className="w-fit h-[50dvh] md:h-[50dvh] rounded-2xl object-cover"
                priority
              />
            </div>
          </div>
          <div>
            <h3
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-2xl md:text-3xl pt-5 text-dark/90 font-jakarta text-shadow-darker border-b-2 border-brand  w-fit"
            >
              FROM THE PROPRIETOR
            </h3>
            <p
              data-aos="fade-up"
              data-aos-duration="1600"
              className="text-lg md:text-xl pt-5 text-dark/80 font-jakarta text-shadow-darker  max-w-md leading-10"
            >
              "It's for the Ummah. Our business is to bring ibadah and education
              closer to the Ummah as a community and managing the guest of Allah
              SWT"
            </p>
            <h4
              data-aos="fade-up"
              data-aos-duration="1800"
              className="text-xl md:text-2xl pt-5 text-dark/90 font-jakarta text-shadow-darker "
            >
              -lorem lorem
            </h4>
          </div>
        </div>
        <div className="w-full mx-auto text-center pt-15 gap-5">
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="flex flex-wrap items-center justify-center text-4xl font-jakarta font-semibold text-dark/80 pb-2"
          >
            THE
            <Link href={"/"}>
              <div className="relative w-46 h-16 ">
                <Image
                  src="/second-logo.png"
                  alt="Second brand logo"
                  fill
                  className="object-contain md:scale-85 lg:scale-100 px-5"
                />
              </div>
            </Link>{" "}
            VISION & MISSION
          </div>{" "}
          <p
            data-aos="fade-up"
            data-aos-duration="1200"
            className="text-xl text-dark/80 font-roboto text-shadow-dark text-center max-w-3xl mx-auto pt-8"
          >
            Muslim lifestyle made easier with the all in one shariah compliant
            platform
          </p>
        </div>
        <div className="py-30 grid  grid-cols-2 md:grid-cols-4 gap-5">
          <div data-aos="fade-up" data-aos-duration="1200">
            <div className="relative w-full h-30 md:h-50 ">
              <Image
                src="/vision-2.png"
                alt="Second brand logo"
                fill
                className="object-contain  "
              />
            </div>
            <p className="pt-3 text-md lg:text-lg  lg:text-center text-dark/90 text-shadow-dark font-jakarta px-3">
              To become a credible knowledgeable and a globally trusted brand
              for Muslim friendly Product & Services
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1600">
            <div className="relative w-full h-30 md:h-50 ">
              <Image
                src="/vision-3.png"
                alt="Second brand logo"
                fill
                className="object-contain  "
              />
            </div>
            <p className="pt-3 text-md lg:text-lg  lg:text-center text-dark/90 text-shadow-dark font-jakarta px-3">
              To assist the Ummah and Empower its communities around the world
              through digitalization
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="2000">
            <div className="relative w-full h-30 md:h-50 ">
              <Image
                src="/vision-4.png"
                alt="Second brand logo"
                fill
                className="object-contain  "
              />
            </div>
            <p className="pt-3 text-md lg:text-lg  lg:text-center text-dark/90 text-shadow-dark font-jakarta px-3">
              To become the go-to platform for every Muslim's needs within their
              lifetime
            </p>
          </div>
          <div data-aos="fade-up" data-aos-duration="2400">
            <div className="relative w-full h-30 md:h-50 ">
              <Image
                src="/vision-1.png"
                alt="Second brand logo"
                fill
                className="object-contain  "
              />
            </div>
            <p className="pt-3 text-md lg:text-lg  lg:text-center text-dark/90 text-shadow-dark font-jakarta px-3">
              To enable Muslims to explore the world with convenience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAliAirTravels;
