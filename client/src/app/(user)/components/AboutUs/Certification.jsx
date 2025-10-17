"use client";
import Image from "next/image";
import React, { useState } from "react";

const Certification = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const certificates = [
    "/certificate-1.jpg",
    "/certificate-2.jpg",
    "/certificate-3.jpg",
    "/certificate-4.jpg",
    "/certificate-5.jpg",
    "/certificate-6.jpg",
    "/certificate-7.jpg",
    "/certificate-8.jpg",
  ];

  return (
    <section className="container  px-3 sm:pt-11 md:pt-10 pb-30 overflow-hidden">
      <h2
        data-aos="fade-right"
        data-aos-duration="1200"
        className="text-4xl md:text-5xl lg:text-5xl mb-15 xl:text-6xl text-dark text-shadow-darkest font-jakarta font-semibold border-b-3 border-brand w-fit  pb-3"
      >
        Certification
      </h2>
      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {certificates.map((src, index) => (
          <div
            key={index}
            className="relative w-full aspect-[4/3] cursor-pointer overflow-hidden rounded-xl nav-custom-shadow group"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Certificate ${index + 1}`}
              width={400}
              height={300}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              unoptimized
              onError={(e) => (e.currentTarget.src = "/fallback.jpg")}
            />
          </div>
        ))}

        {/* Zoom Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative w-[95vw] h-[85vh] max-w-5xl">
              <Image
                src={selectedImage}
                alt="Zoomed certificate"
                fill
                className="object-contain rounded-xl"
              />
            </div>

            <button
              className="absolute top-5 right-5 text-white text-3xl font-bold cursor-pointer"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certification;
