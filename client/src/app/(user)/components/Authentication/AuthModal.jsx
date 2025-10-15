"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const AuthModal = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const [isSignUp, setIsSignUp] = useState(false);

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

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="bg-white w-[90%] max-w-md rounded-2xl shadow-2xl p-6 relative nav-custom-shadow border-4 border-brand
             animate-slideInFromLeft"
      >
        <div className="flex flex-col items-center mb-6">
          <div className="relative w-44 h-14 mb-4">
            <Image
              src="/second-logo.png"
              alt="Brand logo"
              fill
              className="object-contain"
            />
          </div>

          <div className="flex items-center justify-between w-full font-jakarta">
            <h2 className="text-2xl font-semibold text-dark">
              {isSignUp ? "Create an Account" : "Log In!"}
            </h2>
            <button
              onClick={onClose}
              className="text-4xl text-dark/70 transition-all hover:text-brand cursor-pointer leading-none"
            >
              ×
            </button>
          </div>
        </div>

        <form className="flex flex-col gap-3 font-roboto">
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="border border-dark/20 rounded-lg px-4 py-2 focus:outline-none focus:border-brand"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="border border-dark/20 rounded-lg px-4 py-2 focus:outline-none focus:border-brand"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-dark/20 rounded-lg px-4 py-2 focus:outline-none focus:border-brand"
          />
          {isSignUp && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="border border-dark/20 rounded-lg px-4 py-2 focus:outline-none focus:border-brand"
            />
          )}
          <button
            type="submit"
            className="bg-brand text-white py-2 rounded-lg hover:opacity-90 transition-all cursor-pointer"
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
        </form>

        <p className="text-sm text-center text-dark/60 mt-4 font-roboto">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => setIsSignUp(false)}
                className="text-brand cursor-pointer hover:underline"
              >
                Sign In
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => setIsSignUp(true)}
                className="text-brand cursor-pointer hover:underline"
              >
                Sign Up
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
