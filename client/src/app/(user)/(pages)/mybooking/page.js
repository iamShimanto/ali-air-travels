"use client";
import baseUrl from "@/app/baseUrl";
import { useLanguage } from "@/context/LanguageContext";
import { text } from "@/data/translation";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { lang, toggleLang } = useLanguage();
  const [user, setUser] = useState({});
  const [packageId, setPackageId] = useState("");
  const [packaged, setPackaged] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("bookingpackage"));
    const packagedata = JSON.parse(localStorage.getItem("bookedPackage"));
    setPackageId(packagedata?.id);
    setUser(data?.formData);
  }, []);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${baseUrl()}/package/package/${packageId}`);
      const result = await res.json();
      setPackaged(result?.data);
    })();
  }, [packageId]);
  console.log(packaged);

  return (
    <>
      <div className="px-3 pb-10 pt-5">
        <section className="relative py-10 md:py-20 h-[80dvh] px-3 overflow-hidden mt-3 rounded-xl bg-[url('/banner-1.jpg')] bg-center bg-cover before:absolute before:inset-0 before:bg-black/30 before:backdrop-blur-sm before:rounded-xl">
          <div className="relative z-10 container">
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-15 md:mb-20 mx-auto text-dark bg-light bg-opacity-70 py-3 px-4 rounded-2xl font-jakarta font-semibold text-shadow-darkest border-b-4 border-brand w-fit">
              {text[lang].booking}
            </h2>

            <div className="w-full max-w-6xl mx-auto bg-light bg-opacity-30 nav-custom-shadow py-10 md:py-15 px-6 md:px-10 rounded-3xl grid grid-cols-1 sm:grid-cols-2 gap-5 md:justify-items-center">
              <div className="text-lg md:text-2xl font-jakarta text-dark text-shadow-dark">
                <h3 className="text-2xl md:text-4xl font-semibold mb-3 md:mb-6 border-b-3 border-brand w-fit">
                  {text[lang].personaldetails}
                </h3>
                <p>
                  <span className="font-semibold">name:</span>{" "}
                  {user?.customer_name || "Not Found"}
                </p>
                <p>
                  <span className="font-semibold">Gender:</span>{" "}
                  {user?.gender || "Not Found"}
                </p>
                <p>
                  <span className="font-semibold">mobile:</span>{" "}
                  {user?.customer_phone || "Not Found"}
                </p>
              </div>
              <div className="text-lg md:text-2xl font-jakarta text-dark text-shadow-dark mt-5">
                <h3 className="text-2xl md:text-4xl font-semibold mb-3 md:mb-6 border-b-3 border-brand w-fit">
                  {text[lang].packagedetails}
                </h3>
                <p className=" capitalize">
                  <span className="font-semibold">service:</span>{" "}
                  {packaged?.type || "Not Found"}
                </p>
                <p className=" capitalize">
                  <span className="font-semibold">package:</span>{" "}
                  {packaged?.title || "Not Found"}
                </p>
              </div>
            </div>
          </div>

          <Link
            href="https://wa.me/8801345934447"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto block rounded-xl nav-custom-shadow h-[8dvh] bg-brand mt-6 w-fit relative z-10 "
          >
            <p className="px-6 text-2xl flex justify-center items-center h-full text-white font-semibold text-glow font-jakarta">
              Contact Now
            </p>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Page;
