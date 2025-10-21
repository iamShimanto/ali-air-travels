"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { BsX } from "react-icons/bs";

const UserDetailsModal = ({ isOpen, onClose, user, setUser }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleLogout = () => {
    // Clear user from localStorage
    localStorage.removeItem("user");

    // Update parent state
    setUser(null);

    // Close the modal
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="relative bg-white w-[90%] max-w-md rounded-2xl nav-custom-shadow border-4 border-brand p-6 animate-slideInFromLeft font-jakarta"
      >
        <div className="relative mx-auto w-44 h-14 mb-8">
          <Image
            src="/second-logo.png"
            alt="Brand logo"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-dark">User Details</h2>
          <button
            onClick={onClose}
            className="text-4xl text-dark/70 transition-all hover:text-brand cursor-pointer leading-none"
          >
            <BsX />
          </button>
        </div>

        <div className="space-y-4 font-roboto">
          <div>
            <p className="text-dark/80 font-medium">Name:</p>
            <p className="text-dark">{user?.fullName || "John Doe"}</p>
          </div>
          <div>
            <p className="text-dark/80 font-medium">Email:</p>
            <p className="text-dark">{user?.email || "john@example.com"}</p>
          </div>
          <div>
            <p className="text-dark/80 font-medium">Phone Number:</p>
            <p className="text-dark">{user?.phone || "+880123456789"}</p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-5 mb-3 text-2xl font-semibold font-jakarta text-white nav-custom-shadow cursor-pointer bg-red-600 lg:bg-red-500 hover:bg-red-600 duration-200 w-full rounded-xl py-2"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserDetailsModal;
