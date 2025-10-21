"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import baseUrl from "@/app/baseUrl"; // your API base URL

const AuthModal = ({ isOpen, onClose, setUser }) => {
  const modalRef = useRef(null);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

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

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    try {
      const url = isSignUp
        ? `${baseUrl()}/auth/signup`
        : `${baseUrl()}/auth/login`;

      if (isSignUp && formData.password !== formData.confirmPassword) {
        setErrorMsg("Passwords do not match");
        setLoading(false);
        return;
      }

      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        if (isSignUp) {
          
          setIsSignUp(false);
          setFormData({
            fullName: "",
            phone: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
          setErrorMsg("Signup successful! Please login.");
          
        } else {
          localStorage.setItem("user", JSON.stringify(result.data.user));
          setUser(result.data.user);
          onClose();
        }
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
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="bg-white w-[90%] max-w-md rounded-2xl shadow-2xl p-6 relative nav-custom-shadow border-4 border-brand animate-slideInFromLeft"
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

        {/* Error or info message */}
        {errorMsg && (
          <p className="text-red-600 text-center mb-3">{errorMsg}</p>
        )}

        <form
          className="flex flex-col gap-3 font-roboto"
          onSubmit={handleSubmit}
        >
          {isSignUp && (
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="border border-dark/20 rounded-lg px-4 py-2 focus:outline-none focus:border-brand"
              required
            />
          )}
          {isSignUp && (
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border border-dark/20 rounded-lg px-4 py-2 focus:outline-none focus:border-brand"
              required
            />
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="border border-dark/20 rounded-lg px-4 py-2 focus:outline-none focus:border-brand"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="border border-dark/20 rounded-lg px-4 py-2 focus:outline-none focus:border-brand"
            required
          />
          {isSignUp && (
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              className="border border-dark/20 rounded-lg px-4 py-2 focus:outline-none focus:border-brand"
              required
            />
          )}
          <button
            type="submit"
            className="bg-brand text-white py-2 rounded-lg hover:opacity-90 transition-all cursor-pointer"
            disabled={loading}
          >
            {loading
              ? isSignUp
                ? "Signing Up..."
                : "Logging In..."
              : isSignUp
              ? "Sign Up"
              : "Sign In"}
          </button>
        </form>

        <p className="text-sm text-center text-dark/60 mt-4 font-roboto">
          {isSignUp ? (
            <>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setIsSignUp(false);
                  setErrorMsg("");
                }}
                className="text-brand cursor-pointer hover:underline"
              >
                Sign In
              </span>
            </>
          ) : (
            <>
              Don’t have an account?{" "}
              <span
                onClick={() => {
                  setIsSignUp(true);
                  setErrorMsg("");
                }}
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
