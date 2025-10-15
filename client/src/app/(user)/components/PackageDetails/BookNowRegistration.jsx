"use client";

import React, { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";

const BookNowRegistration = ({ isOpen, onClose }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // allow mount before animation starts
      setTimeout(() => setShow(true), 10);
    } else {
      setShow(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center font-jakarta">
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      ></div>

      <div
        className={`relative bg-white rounded-2xl shadow-2xl w-[90%] sm:w-[450px] border-4 border-brand p-6 z-50 transform transition-all duration-500 ${
          show
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-10 scale-95"
        }`}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-3xl text-dark hover:text-brand"
        >
          <BsX />
        </button>

        <h2 className="text-3xl font-jakarta font-semibold text-dark/90 border-b-3 w-fit mx-auto border-brand text-center mb-6">
          Book This Package
        </h2>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="border border-dark/20 rounded-lg px-4 py-2 outline-none focus:border-brand"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-dark/20 rounded-lg px-4 py-2 outline-none focus:border-brand"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="border border-dark/20 rounded-lg px-4 py-2 outline-none focus:border-brand"
          />
          <input
            type="text"
            placeholder="Passport Number (optional)"
            className="border border-dark/20 rounded-lg px-4 py-2 outline-none focus:border-brand"
          />

          <select
            className="border border-dark/20 rounded-lg px-4 py-2 outline-none focus:border-brand text-dark"
            defaultValue=""
          >
            <option value="" disabled>
              Select Sex
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <button
            type="submit"
            className="mt-2 bg-brand text-white font-semibold rounded-lg py-2 cursor-pointer hover:bg-brand/90 transition-all"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNowRegistration;
