"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import Image from "next/image";
import { IoIosGlobe } from "react-icons/io";
import { FaCheck, FaWhatsapp, FaRegUser } from "react-icons/fa";
import { IoHomeOutline, IoBookmarksOutline } from "react-icons/io5";
import { BsExclamationCircle } from "react-icons/bs";
import { RiUserLine } from "react-icons/ri";
import AuthModal from "../Authentication/AuthModal";
import UserDetailsModal from "../Authentication/UserDetailsModal";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(false);

  const languages = ["EN", "বাং"];

  return (
    <>
      <nav className="bg-light border-b-4 border-b-brand nav-custom-shadow mx-3 sm:mx-5 px-2 pt-1 pb-2 sm:pt-2 sm:pb-3 mt-2 rounded-2xl border-b border-dark/10 relative">
        <div className="container">
          <div className="flex items-center justify-between h-16">
            <Link href={"/"}>
              <div className="relative w-40 sm:w-46 h-13 sm:h-16">
                <Image
                  src="/second-logo.png"
                  alt="Second brand logo"
                  fill
                  className="object-contain md:scale-85 lg:scale-100"
                />
              </div>
            </Link>

            <div className="hidden md:flex">
              <ul className="flex items-center gap-2 lg:gap-4 font-jakarta">
                <li>
                  <Link
                    href="/"
                    className="text-[17px] lg:text-[20px] px-2 md:px-1.5 lg:px-3 text-shadow-dark text-dark/80 hover:text-brand font-headerFont transition-all duration-200"
                  >
                    home
                  </Link>
                </li>{" "}
                <li>
                  <Link
                    href="/aboutus"
                    className="text-[17px] lg:text-[20px] px-2 md:px-1.5 lg:px-3 text-shadow-dark text-dark/80 hover:text-brand font-headerFont transition-all duration-200"
                  >
                    about us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/mybooking"
                    className="text-[17px] lg:text-[20px] px-2 md:px-1.5 lg:px-3 text-shadow-dark text-dark/80 hover:text-brand font-headerFont transition-all duration-200"
                  >
                    my booking
                  </Link>
                </li>
                <li>
                  <h2 className="text-transparent text-[20px] md:text-[22px] border-dark/20 font-headerFont border-r-2">
                    .
                  </h2>
                </li>
                <li className="ml-5 relative">
                  <button
                    onMouseEnter={() => setLangOpen(true)}
                    onMouseLeave={() => setLangOpen(false)}
                    className="flex items-center text-[25px] lg:text-[32px] text-shadow-dark cursor-pointer mr-2 text-dark/80 hover:text-brand font-headerFont transition-all duration-200"
                  >
                    <IoIosGlobe />
                    <span className="text-lg ml-1">{selectedLang}</span>
                  </button>

                  {langOpen && (
                    <div
                      onMouseEnter={() => setLangOpen(true)}
                      onMouseLeave={() => setLangOpen(false)}
                      className="absolute left-0 bg-light shadow-lg rounded-lg py-2 w-24 z-50"
                    >
                      {languages.map((lang) => (
                        <button
                          key={lang}
                          onClick={() => setSelectedLang(lang)}
                          className="flex items-center justify-between w-full px-3 py-1 text-dark/80 cursor-pointer hover:bg-dark hover:text-light transition-all text-sm"
                        >
                          {lang}
                          {selectedLang === lang && (
                            <FaCheck className="text-green-500 text-sm" />
                          )}
                        </button>
                      ))}
                    </div>
                  )}
                </li>
                <li className="hidden lg:flex">
                  <Link href="/contact">
                    <div className="relative w-8 lg:w-10 h-8 lg:h-10">
                      <Image
                        src="/WhatsApp.png"
                        alt="whats app logo"
                        fill
                        className="object-contain shadow-2xl transition-all lg:hover:scale-110"
                      />
                    </div>
                  </Link>
                </li>
                <li>
                  <h2 className="text-transparent text-[20px] md:text-[22px] border-dark/20 font-headerFont border-r-2">
                    d
                  </h2>
                </li>
                <li>
                  <button
                    onClick={() => setShowAuthModal(true)}
                    className="text-[15px] lg:text-[18px] cursor-pointer px-2 lg:px-3 leading-5 text-shadow-dark text-dark/80 hover:text-brand font-headerFont transition-all duration-200"
                  >
                    Login /<br />
                    Sign-Up
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setShowUserDetails(true)}
                    className="text-[20px] lg:text-[27px] cursor-pointer mx-3 mt-1.5 leading-5 text-shadow-dark text-dark/80 hover:text-brand font-headerFont transition-all duration-200"
                  >
                    <FaRegUser />
                  </button>
                </li>
              </ul>
            </div>

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
              <li data-aos="fade-left" data-aos-duration="1600">
                <Link
                  href="/"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-4 w-full px-4 pt-0.5 pb-2 text-[20px] text-dark/80 text-shadow-darker rounded transition-all border-b border-dark/20"
                >
                  <span>home</span> <IoHomeOutline className="shadow-2xl" />
                </Link>
              </li>
              <li data-aos="fade-left" data-aos-duration="1800">
                <Link
                  href="/aboutus"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-4 w-full px-4 pt-0.5 pb-2 text-[20px] text-dark/80 text-shadow-darker rounded transition-all border-b border-dark/20"
                >
                  about us <BsExclamationCircle />
                </Link>
              </li>

              <li data-aos="fade-left" data-aos-duration="2100">
                <Link
                  href="/mybooking"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-4 w-full px-4 pt-0.5 pb-2 text-[20px] text-dark/80 text-shadow-darker rounded transition-all border-b border-dark/20"
                >
                  my booking <IoBookmarksOutline />
                </Link>
              </li>
              <li>
                <button
                  data-aos="fade-left"
                  data-aos-duration="2400"
                  onClick={() => {
                    setShowAuthModal(true);
                    setMenuOpen(false);
                  }}
                  className="flex items-center gap-4 w-full px-4 pt-0.5 pb-2 text-[20px] text-dark/80 text-shadow-darker rounded transition-all border-b border-dark/20 text-left"
                >
                  login/sign-up <RiUserLine />
                </button>
              </li>
            </ul>

            <div className="space-y-4 mt-10 pb-6">
              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-5 w-full px-4 py-2 text-[26px] bg-[#5F8B4C] text-white rounded transition-all nav-custom-shadow"
              >
                <FaWhatsapp /> WhatsApp
              </Link>

              <div className="flex items-center justify-center gap-5 w-full px-4 py-2 text-[26px] bg-dark text-white rounded transition-all nav-custom-shadow">
                <IoIosGlobe className="inline-block text-[34px]" />
                <button className="text-[22px] text-brand">english</button>
                <button className="text-[22px] ml-4">বাংলা</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />

      <UserDetailsModal
        isOpen={showUserDetails}
        onClose={() => setShowUserDetails(false)}
        user={{
          name: "John Doe",
          email: "john@example.com",
          phone: "+880123456789",
        }}
      />
    </>
  );
};

export default Nav;
