"use client";

import React, { useState } from "react";
import BookNowRegistraion from "./BookNowRegistration";

const BookNowButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="bg-brand w-full sm:w-fit  font-jakarta text-2xl text-shadow-darker text-white font-semibold px-6 py-3 rounded-lg hover:bg-brand/90 transition-all cursor-pointer nav-custom-shadow hover:scale-110"
      >
        book now
      </button>

      <BookNowRegistraion
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default BookNowButton;
