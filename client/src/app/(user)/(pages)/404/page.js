import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <section className="w-full bg-light h-dvh flex flex-col justify-center items-center">
      <p className="text-4xl font-semibold font-jakarta text-dark text-shadow-darkest">
        <span className="italic">404_</span> not found
      </p>

      <Link
        href={"/"}
        className="mt-20 text-2xl border-b  text-dark duration-200 hover:text-black text-shadow-dark"
      >
        return home
      </Link>
    </section>
  );
};

export default Page;
