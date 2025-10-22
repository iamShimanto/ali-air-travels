"use client";

import baseUrl from "@/app/baseUrl";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";

const BookNowRegistration = ({ isOpen, onClose, data }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    customer_name: "",
    customer_email: "",
    customer_phone: "",
    passport_number: "",
    gender: "",
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [alreadyBooked, setAlreadyBooked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setShow(true), 10);

      const bookingInfo = localStorage.getItem("bookedPackage");
      if (bookingInfo) {
        const { date } = JSON.parse(bookingInfo);
        const bookedDate = new Date(date);
        const now = new Date();
        const diffDays = (now - bookedDate) / (1000 * 60 * 60 * 24);

        if (diffDays < 10) {
          setAlreadyBooked(true);
        } else {
          setAlreadyBooked(false);
          localStorage.removeItem("bookedPackage");
        }
      } else {
        setAlreadyBooked(false);
      }
    } else {
      setShow(false);
      setSuccessMsg("");
      setErrorMsg("");
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await fetch(`${baseUrl()}/booking/create-booking`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          packageId: data?.id,
          customer_name: formData.customer_name,
          customer_email: formData.customer_email,
          customer_phone: formData.customer_phone,
          passport_number: formData.passport_number,
          gender: formData.gender,
          pax: 1,
          language: "English",
          notes: "",
        }),
      });

      const result = await response.json();
      console.log(result)
      if (response.ok) {
        setSuccessMsg("Booking created successfully!");

        localStorage.setItem(
          "bookedPackage",
          JSON.stringify({ id: data?.id, date: new Date() })
        );
        localStorage.setItem("bookingpackage", JSON.stringify({ formData }));

        setFormData({
          customer_name: "",
          customer_email: "",
          customer_phone: "",
          passport_number: "",
          gender: "",
        });
        setTimeout(() => {
          router.push("/mybooking");
        }, 1000);
      } else {
        setErrorMsg(result.message || "Something went wrong");
      }
    } catch (error) {
      setErrorMsg("Network error, try again later");
    } finally {
      setLoading(false);
    }
  };

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

        {alreadyBooked && (
          <p className="text-red-600 text-center mb-3">
            You have already booked a package within the last 10 days!
          </p>
        )}
        {successMsg && (
          <p className="text-green-600 text-center mb-3">{successMsg}</p>
        )}
        {errorMsg && (
          <p className="text-red-600 text-center mb-3">{errorMsg}</p>
        )}

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="customer_name"
            value={formData.customer_name}
            onChange={handleChange}
            placeholder="Full Name"
            className="border border-dark/20 rounded-lg px-4 py-2 outline-none focus:border-brand"
            required
            disabled={alreadyBooked}
          />
          <input
            type="email"
            name="customer_email"
            value={formData.customer_email}
            onChange={handleChange}
            placeholder="Email"
            className="border border-dark/20 rounded-lg px-4 py-2 outline-none focus:border-brand"
            required
            disabled={alreadyBooked}
          />
          <input
            type="tel"
            name="customer_phone"
            value={formData.customer_phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border border-dark/20 rounded-lg px-4 py-2 outline-none focus:border-brand"
            required
            disabled={alreadyBooked}
          />
          <input
            type="text"
            name="passport_number"
            value={formData.passport_number}
            onChange={handleChange}
            placeholder="Passport Number (optional)"
            className="border border-dark/20 rounded-lg px-4 py-2 outline-none focus:border-brand"
            disabled={alreadyBooked}
          />

          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="border border-dark/20 rounded-lg px-4 py-2 outline-none focus:border-brand text-dark"
            required
            disabled={alreadyBooked}
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <button
            type="submit"
            disabled={loading || alreadyBooked}
            className="mt-2 bg-brand text-white font-semibold rounded-lg py-2 cursor-pointer hover:bg-brand/90 transition-all"
          >
            {loading ? "Booking..." : "Confirm Booking"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookNowRegistration;
