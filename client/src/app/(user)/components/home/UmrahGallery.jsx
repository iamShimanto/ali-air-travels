"use client";
import Image from "next/image";
import React, { useState } from "react";

const HajjGallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setActiveIndex(null);
  };

  const showPrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : 19));
  };

  const showNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev < 19 ? prev + 1 : 0));
  };

  React.useEffect(() => {
    const handleKey = (e) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") showPrev(e);
      else if (e.key === "ArrowRight") showNext(e);
      else if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen]);

  return (
    <section className="py-15 sm:pb-20 overflow-hidden mt-5 md:mt-10">
      <div className="container mx-auto px-4 h-fit">
        <h2
          data-aos="fade-right"
          data-aos-duration="1600"
          className="text-4xl md:text-5xl lg:text-6xl mb-10 text-dark font-jakarta font-semibold text-shadow-darkest sm:border-b-4 border-brand w-fit"
        >
          Umrah & Hajj{" "}
          <p className="inline-block border-b-4 border-brand sm:border-none">
            Gallery
          </p>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 sm:gap-5  md:pt-20">
          <div className="md:hidden overflow-hidden h-[50dvh]">
            <Image
              src="/gallery.jpg"
              width={800}
              height={600}
              alt="Hajj Gallery Main"
              className="rounded-xl overflow-hidden"
              loading="eager"
              priority
            />
          </div>
          <div className="hidden md:flex overflow-hidden ">
            <Image
              src="/gallery-a.jpg"
              width={800}
              height={600}
              alt="Hajj Gallery Main"
              className="rounded-xl"
              loading="eager"
              priority
            />
          </div>

          <div className="grid grid-cols-2 place-items-center justify-items-center gap-3">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="relative w-full h-50 rounded-xl overflow-hidden cursor-pointer group"
                onClick={() => openModal(num - 1)}
              >
                <Image
                  src={`/gallery-${num}.jpg`}
                  alt={`Hajj Gallery ${num}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-300 "
                  loading="eager"
                  priority
                />
              </div>
            ))}

            <div
              className="col-span-2 relative w-full nav-custom-shadow h-[60px] font-jakarta text-xl lg:text-2xl text-glow flex items-center justify-center bg-brand text-white font-semibold rounded-xl cursor-pointer hover:bg-brand/80 transition"
              onClick={() => openModal(0)}
            >
              View Full Gallery
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <button
            onClick={closeModal}
            className="absolute top-3 right-3 text-brand lg:text-white cursor-pointer rounded-full w-10 h-10 flex items-center justify-center text-2xl hover:text-brand transition"
            title="Close (Esc)"
          >
            ✕
          </button>
          <div
            className="scale-90 relative max-w-6xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {activeIndex !== null && (
              <div className="relative w-full h-[40vh] sm:h-[50vh] md:h-[60vh] rounded-2xl overflow-hidden mb-4">
                <Image
                  src={`/gallery-${activeIndex + 1}.jpg`}
                  alt={`Preview ${activeIndex + 1}`}
                  fill
                  className="object-cover object-center"
                  priority
                />

                <button
                  onClick={showPrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl"
                >
                  ‹
                </button>
                <button
                  onClick={showNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-black rounded-full w-10 h-10 flex items-center justify-center text-2xl"
                >
                  ›
                </button>
              </div>
            )}

            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 max-h-[30vh] sm:max-h-[35vh] md:max-h-[40vh] overflow-y-auto w-full">
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className={`relative w-full h-[80px] sm:h-[90px] md:h-[100px] rounded-md overflow-hidden cursor-pointer border-2 ${
                    activeIndex === i ? "border-brand" : "border-transparent"
                  }`}
                  onClick={() => setActiveIndex(i)}
                >
                  <Image
                    src={`/gallery-${i + 1}.jpg`}
                    alt={`Thumbnail ${i + 1}`}
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HajjGallery;
