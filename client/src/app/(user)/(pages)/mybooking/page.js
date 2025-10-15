import React from "react";

const Page = () => {
  return (
    <section className="py-10 md:py-20 px-3 overflow-hidden">
      <div className="container">
        <h2 className="container text-4xl md:text-5xl lg:text-6xl mb-15 md:mb-20 text-dark font-jakarta font-semibold text-shadow-darkest border-b-4 border-brand w-fit">
          My Booking
        </h2>
        <div className="bg-light nav-custom-shadow py-10 md:py-15 px-3 rounded-3xl grid grid-cols-1 sm:grid-cols-2 gap-5  md:justify-items-center">
          <div className="text-lg md:text-2xl    font-jakarta text-dark text-shadow-dark">
            <h3 className="text-2xl md:text-4xl text-dark text-shadow-dark font-semibold mb-3 md:mb-6 border-b-3 border-brand w-fit">
              personal details
            </h3>
            <p>
              <span className="font-semibold">name:</span> lorem ipusim soyem
            </p>
            <p>
              <span className="font-semibold">age:</span> 39
            </p>
            <p>
              <span className="font-semibold">sex:</span> male
            </p>
            <p>
              <span className="font-semibold">mobile:</span> 019xxxxxxxx
            </p>
          </div>
          <div className="text-lg md:text-2xl    font-jakarta text-dark text-shadow-dark mt-5">
            <h3 className="text-2xl md:text-4xl text-dark text-shadow-dark font-semibold mb-3 md:mb-6 border-b-3 border-brand w-fit">
              package details
            </h3>
            <p>
              <span className="font-semibold">service:</span> umrah/hajj
            </p>{" "}
            <p>
              <span className="font-semibold">package:</span> umrah/hajj regular
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
