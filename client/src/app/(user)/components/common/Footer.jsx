"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="m-3 md:m-5 mb-5 md:mb-10 nav-custom-shadow rounded-2xl bg-white border-t border-gray-200 text-dark/80 text-sm">
      <div className="container mx-auto  px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:justify-items-center gap-8">
        {/* Logo + Address */}
        <div className="space-y-4">
          <Image
            src="/footer.png"
            alt="Ikhlas Logo"
            width={130}
            height={40}
            className="object-contain"
          />
          <div className="text-sm leading-6 font-roboto">
            <p>
              5/F, Satabdi Center, Inner Circular Road,
              <br />
              Fakirapool, Dhaka 1000
            </p>
          </div>
        </div>

        {/* Umrah */}
        <div>
          <h3 className="font-semibold mb-5  text-xl md:text-2xl text-dark/90 text-shadow-darker font-jakarta border-b-2 border-brand w-fit">
            Umrah
          </h3>
          <ul className="space-y-2 font-roboto">
            <li>
              <Link href="#" className="hover:text-brand transition-all">
                Umrah Regular
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-brand transition-all">
                Umrah Special
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-brand transition-all">
                Umrah Premuim
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-brand transition-all">
                Umrah Couple
              </Link>
            </li>
          </ul>
        </div>

        {/* Syarikat */}
        <div>
          <h3 className="font-semibold mb-5 text-dark/90 text-shadow-darker text-xl md:text-2xl font-jakarta border-b-2 border-brand w-fit">
            Hajj
          </h3>
          <ul className="space-y-2 font-roboto">
            <li>
              <Link href="#" className="hover:text-brand transition-all">
                Hajj Regular
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-brand transition-all">
                Hajj Special
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-brand transition-all">
                Hajj Premuim
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile App + Social */}
        <div>
          <h3 className="font-semibold mb-5  font-jakarta text-xl md:text-2xl text-dark/90 text-shadow-darker border-b-2 border-brand w-fit">
            Social Media
          </h3>
          <div className="flex items-center gap-4">
            <Link href="#">
              <FaFacebookF
                size={18}
                className="hover:text-brand transition-all"
              />
            </Link>
            <Link href="#">
              <FaInstagram
                size={18}
                className="hover:text-brand transition-all"
              />
            </Link>
            <Link href="#">
              <FaYoutube
                size={18}
                className="hover:text-brand transition-all"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-6">
        <div className="container mx-auto px-6 py-6 text-xs text-gray-500 leading-6">
          <p>
            ©2025 Ali Air Travels & Tours. All rights reserved. Licensed Travel
            Agency. Use of this website constitutes acceptance of our Terms &
            Conditions and Privacy Policy. This website is developed by{" "}
            <a
              href="https://weblaa.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Weblaa
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
