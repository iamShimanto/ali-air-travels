import Image from "next/image";
import React from "react";

const MeetTheCeo = () => {
  return (
    <>
      <section className="relative overflow-x-hidden pt-10 pb-10 sm:pb-30 px-3 bg-light overflow-hidden">
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 items-center relative z-10">
          <div className="relative w-fit mx-auto">
            <Image
              src="/mr-ali.png"
              alt="Mr. Ali - CEO"
              width={500}
              height={600}
              className="w-fit h-[40dvh] md:h-[50dvh] rounded-2xl object-cover"
              priority
            />
          </div>

          <div>
            <h2
              data-aos="fade-up"
              data-aos-duration="800"
              className="text-4xl  font-jakarta font-semibold w-fit text-dark text-shadow-darkest  sm:border-b-4  border-brand pt-15 sm:pt-0"
            >
              Meet the{" "}
              <p className="inline-block border-b-4 border-brand sm:border-none">
                Proprietor,
              </p>
            </h2>
            <h3
              data-aos="fade-up"
              data-aos-duration="1200"
              className="mt-5 text-3xl font-jakarta font-semibold text-dark/90 mb-2"
            >
              Hossian Ahmed Mazumdar
            </h3>
            <h4
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-xl font-roboto text-dark/80 border-b border-brand rounded-xl w-fit"
            >
              Ali Air Travels
            </h4>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="mt-3 font-roboto text-lg max-w-xl text-gray-600 leading-relaxed pt-4"
            >
              Mr. Hossian Ahmed Mazumdar is the visionary leader behind our
              success, bringing innovation and dedication to every aspect of our
              company.
            </p>
          </div>
        </div>
      </section>
      <div className="absolute rotate-180 left-0 w-full h-20 bg-gradient-to-t from-[#f1f1f1] to-transparent pointer-events-none" />
    </>
  );
};

export default MeetTheCeo;
