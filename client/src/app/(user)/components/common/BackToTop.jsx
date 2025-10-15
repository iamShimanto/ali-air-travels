"use client";

import React, { useEffect, useState } from "react";
import { RiArrowUpSLine } from "react-icons/ri";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-5 right-5 z-50 p-2 rounded-full border-2 cursor-pointer border-brand bg-brand lg:bg-light text-light lg:text-dark/90 text-3xl shadow-lg transition-all duration-300
        ${
          visible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75 pointer-events-none"
        }
        hover:bg-brand hover:text-light
      `}
    >
      <RiArrowUpSLine />
    </button>
  );
};

export default BackToTop;
