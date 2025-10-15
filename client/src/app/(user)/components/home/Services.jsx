import Link from "next/link";
import React from "react";
import Umrah from "./service-components/Umrah";
import Hajj from "./service-components/Hajj";

const Services = () => {
  return (
    <section className="py-5 sm:py-15 lg:pb-20 px-3 overflow-hidden ">
      <div className="container">
        <Umrah />
        <Hajj />
      </div>
    </section>
  );
};

export default Services;
