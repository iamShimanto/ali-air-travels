"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { IoIosGlobe } from "react-icons/io";
import { FaCheck, FaWhatsapp, FaRegUser } from "react-icons/fa";
import { IoHomeOutline, IoBookmarksOutline } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

import AuthModal from "../Authentication/AuthModal";
import UserDetailsModal from "../Authentication/UserDetailsModal";
import { useLanguage } from "@/context/LanguageContext";
import { text } from "@/data/translation";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [user, setUser] = useState(null); // User state

  const { lang, toggleLang } = useLanguage();
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleToggleLang = () => {
    toggleLang();
    setTimeout(() => {
      location.reload();
    }, 10);
  };

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-light border-b-4 border-b-brand nav-custom-shadow mx-3 sm:mx-5 px-2 pt-1 pb-2 sm:pt-2 sm:pb-3 mt-2 rounded-2xl border-dark/10 relative">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <div className="relative w-40 sm:w-46 h-13 sm:h-16">
                <Image
                  src="/second-logo.png"
                  alt="Brand Logo"
                  fill
                  className="object-contain md:scale-85 lg:scale-100"
                />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex">
              <ul className="flex items-center gap-2 lg:gap-4 font-jakarta">
                <li>
                  <Link
                    href="/"
                    className="text-[17px] lg:text-[20px] px-2 md:px-1.5 lg:px-3 text-dark/80 hover:text-brand font-headerFont transition-all duration-200"
                  >
                    {text[lang].home}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/aboutus"
                    className="text-[17px] lg:text-[20px] px-2 md:px-1.5 lg:px-3 text-dark/80 hover:text-brand font-headerFont transition-all duration-200"
                  >
                    {text[lang].about}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mybooking"
                    className="text-[17px] lg:text-[20px] px-2 md:px-1.5 lg:px-3 text-dark/80 hover:text-brand font-headerFont transition-all duration-200"
                  >
                    {text[lang].myBooking}
                  </Link>
                </li>

                {/* Language Toggle */}
                <li className="ml-5 relative">
                  <button
                    onMouseEnter={() => setLangOpen(true)}
                    onMouseLeave={() => setLangOpen(false)}
                    className="flex items-center text-[25px] lg:text-[32px] cursor-pointer mr-2 text-dark/80 hover:text-brand transition-all duration-200"
                  >
                    <IoIosGlobe />
                    <span className="text-lg ml-1">
                      {lang === "en" ? "EN" : "বাং"}
                    </span>
                  </button>

                  {langOpen && (
                    <div
                      onMouseEnter={() => setLangOpen(true)}
                      onMouseLeave={() => setLangOpen(false)}
                      className="absolute left-0 bg-light shadow-lg rounded-lg py-2 w-24 z-50"
                    >
                      <button
                        onClick={handleToggleLang}
                        className="flex items-center justify-between w-full px-3 py-1 text-dark/80 cursor-pointer hover:bg-dark hover:text-light transition-all text-sm"
                      >
                        {lang === "en" ? "বাং" : "EN"}
                        <FaCheck className="text-green-500 text-sm" />
                      </button>
                    </div>
                  )}
                </li>

                {/* WhatsApp */}
                <li className="hidden lg:flex">
                  <Link
                    href="https://wa.me/8801345934447"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative w-8 lg:w-10 h-8 lg:h-10">
                      <Image
                        src="/WhatsApp.png"
                        alt="WhatsApp"
                        fill
                        className="object-contain shadow-2xl transition-all lg:hover:scale-110"
                      />
                    </div>
                  </Link>
                </li>

                {/* Login/Profile toggle */}
                {user ? (
                  <li>
                    <button
                      onClick={() => setShowUserDetails(true)}
                      className="text-[20px] lg:text-[27px] cursor-pointer mx-3 mt-1.5 leading-5 text-dark/80 hover:text-brand font-headerFont transition-all duration-200"
                    >
                      <FaRegUser />
                    </button>
                  </li>
                ) : (
                  <li>
                    <button
                      onClick={() => setShowAuthModal(true)}
                      className="text-[15px] lg:text-[18px] cursor-pointer px-2 lg:px-3 leading-5 text-dark/80 hover:text-brand font-headerFont transition-all duration-200"
                    >
                      Login /<br />
                      Sign-Up
                    </button>
                  </li>
                )}
              </ul>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                className="cursor-pointer outline-none"
              >
                <PiDotsThreeOutlineFill className="text-[32px] text-dark mt-3 mr-2" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed inset-0 z-50 flex justify-end transition-all duration-300 ${
          menuOpen ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={() => setMenuOpen(false)}
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        <div
          className={`relative h-full w-[80%] max-w-xs bg-white shadow-2xl border-l-4 border-brand rounded-l-4xl p-6 transform transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            className="text-4xl text-dark/70 absolute top-4 right-5"
          >
            ×
          </button>

          <div className="flex flex-col h-full justify-between pt-10">
            <ul className="space-y-4 mt-10 font-jakarta">
              <li>
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-4 w-full px-4 py-2 text-[20px] text-dark/80 rounded transition-all border-b border-dark/20"
                >
                  {text[lang].home} <IoHomeOutline />
                </Link>
              </li>
              <li>
                <Link
                  href="/aboutus"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-4 w-full px-4 py-2 text-[20px] text-dark/80 rounded transition-all border-b border-dark/20"
                >
                  {text[lang].about} <BsExclamationCircle />
                </Link>
              </li>
              <li>
                <Link
                  href="/mybooking"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-4 w-full px-4 py-2 text-[20px] text-dark/80 rounded transition-all border-b border-dark/20"
                >
                  {text[lang].myBooking} <IoBookmarksOutline />
                </Link>
              </li>

              {/* Mobile Login/Profile toggle */}
              {user ? (
                <li>
                  <button
                    onClick={() => {
                      setShowUserDetails(true);
                      setMenuOpen(false);
                    }}
                    className="flex items-center gap-4 w-full px-4 py-2 text-[20px] text-dark/80 rounded transition-all border-b border-dark/20"
                  >
                    <FaRegUser /> Profile
                  </button>
                </li>
              ) : (
                <li>
                  <button
                    onClick={() => {
                      setShowAuthModal(true);
                      setMenuOpen(false);
                    }}
                    className="flex items-center gap-4 w-full px-4 py-2 text-[20px] text-dark/80 rounded transition-all border-b border-dark/20"
                  >
                    Login / Sign-Up <RiUserLine />
                  </button>
                </li>
              )}

              {/* Mobile language toggle */}
              <li className="mt-6">
                <button
                  onClick={handleToggleLang}
                  className="flex items-center gap-2 px-4 py-2 w-full bg-gray-100 rounded hover:bg-gray-200"
                >
                  <IoIosGlobe className="text-xl" />
                  <span>{lang === "en" ? "EN" : "বাং"}</span>
                  <FaCheck className="ml-auto text-green-500" />
                </button>
              </li>
            </ul>

            <Link
              href="https://wa.me/8801345934447"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-5 w-full px-4 py-2 mt-6 text-[26px] bg-[#5F8B4C] text-white rounded shadow-lg"
            >
              <FaWhatsapp /> WhatsApp
            </Link>
          </div>
        </div>
      </div>

      {/* Modals */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        setUser={setUser}
      />
      <UserDetailsModal
        user={user}
        setUser={setUser}
        isOpen={showUserDetails}
        onClose={() => setShowUserDetails(false)}
      />
    </>
  );
};

export default Nav;
