"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const FloatingWhatsapp = () => {
  const [visible, setVisible] = useState(true);

  return (
    <Link
      href="https://wa.me/8801345934447"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-20 right-4 z-50  rounded-full flex items-center justify-center text-white  transition-all duration-300
        ${
          visible
            ? "opacity-100 scale-100"
            : "opacity-0 scale-75 pointer-events-none"
        }
        hover:scale-103 hover:`}
    >
      <div className="relative w-14 h-14">
        <Image
          src="/WhatsApp.png"
          alt="whats app logo"
          fill
          className="object-contain  transition-all lg:hover:scale-110"
        />
      </div>
    </Link>
  );
};

export default FloatingWhatsapp;
