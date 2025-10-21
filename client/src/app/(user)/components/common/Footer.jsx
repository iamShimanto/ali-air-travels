"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";
import { text } from "@/data/translation";

const Footer = () => {
  const { lang, toggleLang } = useLanguage();
  return (
    <footer className="m-3 md:m-5 mb-5 md:mb-10 nav-custom-shadow rounded-2xl bg-white border-t border-gray-200 text-dark/80 text-sm">
      <div className="container mx-auto  sm:pt-20 pb-5  px-4 pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 lg:justify-items-center gap-8">
        <div data-aos="fade-up" data-aos-duration="8000" className="space-y-4">
          <Image
            src="/footer.png"
            alt="Ikhlas Logo"
            width={130}
            height={40}
            className="object-contain"
          />
          <div className="text-sm leading-6 font-roboto">
            <p>
              {text[lang].location1}
              <br />
              {text[lang].location2}
            </p>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-duration="1400">
          <h3 className="font-semibold mb-5  text-xl md:text-2xl text-dark/90 text-shadow-darker font-jakarta border-b-2 border-brand w-fit">
            {text[lang].umrahfooter}
          </h3>
          <ul className="space-y-2 font-roboto">
            <li>
              <Link
                href="/packagedetails/68f66d3c0ec597f0505b6fb3"
                className="hover:text-brand transition-all"
              >
                {text[lang].umrahregular}
              </Link>
            </li>
            <li>
              <Link
                href="/packagedetails/68f66d720ec597f0505b6fb6"
                className="hover:text-brand transition-all"
              >
                {text[lang].umrahstandard}
              </Link>
            </li>
            <li>
              <Link
                href="/packagedetails/68f66d9c0ec597f0505b6fb8"
                className="hover:text-brand transition-all"
              >
                {text[lang].umrahpremium}
              </Link>
            </li>
            <li>
              <Link
                href="/packagedetails/68f66db90ec597f0505b6fba"
                className="hover:text-brand transition-all"
              >
                {text[lang].umrahcouple}
              </Link>
            </li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-duration="2000">
          <h3 className="font-semibold mb-5 text-dark/90 text-shadow-darker text-xl md:text-2xl font-jakarta border-b-2 border-brand w-fit">
            {text[lang].hajjfooter}
          </h3>
          <ul className="space-y-2 font-roboto">
            <li>
              <Link
                href="/packagedetails/68f666a24ddc2727e2dc8023"
                className="hover:text-brand transition-all"
              >
                {text[lang].hajjregular}
              </Link>
            </li>
            <li>
              <Link
                href="/packagedetails/68f66b244ddc2727e2dc8026"
                className="hover:text-brand transition-all"
              >
                {text[lang].hajjstandard}
              </Link>
            </li>
            <li>
              <Link
                href="/packagedetails/68f66b594ddc2727e2dc8029"
                className="hover:text-brand transition-all"
              >
                {text[lang].hajjpremium}
              </Link>
            </li>
            <li>
              <Link
                href="/packagedetails/68f66b764ddc2727e2dc802b"
                className="hover:text-brand transition-all"
              >
                {text[lang].hajjcouple}
              </Link>
            </li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-duration="2500">
          <Link
            href={"https://www.facebook.com/share/14LcR2Nu5st/"}
            target="_blank"
            className="flex items-center  gap-1 px-3 py-2.5 bg-[#1877F2] rounded-xl justify-center  nav-custom-shadow text-light text-2xl sm:text-xl text-glow transition-all hover:scale-105"
          >
            {text[lang].visitfacebook} <FaFacebookF className="text-md" />
          </Link>
        </div>
      </div>

      <div className="border-t border-gray-200 mt-6">
        <div className="container mx-auto px-6 py-6 text-xs text-gray-500 leading-6">
          <p>
            {text[lang].copyright}{" "}
            <Link
              href="https://www.websola.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:underline"
            >
              Websola
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
