import React from "react";

const Banner = () => {
  return (
    <section className=" py-2 mx-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center justify-items-center gap-2">
        <div
          className="w-full h-[35dvh] sm:h-[70dvh] bg-center bg-cover bg-no-repeat rounded-t-3xl sm:rounded-tr-none sm:rounded-l-3xl"
          style={{ backgroundImage: "url('/banner-1.jpg')" }}
        ></div>
        <div className="w-full h-[20dvh] sm:h-[70dvh] flex flex-row sm:flex-col gap-2">
          <div
            className="w-full h-full bg-center bg-cover rounded-bl-3xl sm:rounded-bl-none sm:rounded-tr-3xl"
            style={{ backgroundImage: "url('/banner-2.jpg')" }}
          ></div>
          <div
            className="w-full h-full bg-center bg-cover rounded-br-3xl"
            style={{ backgroundImage: "url('/banner-3.jpg')" }}
          ></div>
        </div>
      </div>
      <h1 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-jakarta font-semibold text-shadow-darker text-dark/90 py-10">
        Trusted Hajj & Umrah Agency In Bangladesh
      </h1>
    </section>
  );
};

export default Banner;
