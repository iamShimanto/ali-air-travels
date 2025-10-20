import BookNowButton from "@/app/(user)/components/PackageDetails/BookNowButton";
import baseUrl from "@/app/baseUrl";
import { cookies } from "next/headers";
import React from "react";

const page = async ({ params }) => {
  const param = await params.id;
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "bn";

  const res = await fetch(`${baseUrl()}/package/package/${param}?lang=${lang}`);
  const result = await res.json();
  console.log(result);

  return (
    <div>
      <section className="px-3 pb-10 overflow-hidden h-full">
        <div
          className="container mt-5 h-[20dvh] rounded-3xl bg-cover bg-center bg-no-repeat w-full relative"
          style={{ backgroundImage: "url('/package-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] rounded-3xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl capitalize md:text-7xl text-light text-glow font-semibold font-jakarta text-center border-b-4 border-brand">
              {result?.data?.title}
            </h2>
          </div>
        </div>

        <div className="container  gap-5 px-3 md:px-5 lg:px-7 py-10 bg-light mt-5 rounded-2xl shadow-xl">
          <h3 className="text-4xl md:text-5xl text-dark text-shadow-darker font-semibold font-jakarta w-fit border-b-4 mb-10 border-brand">
            Package Details
          </h3>
          <div>
            <h2 className="text-3xl capitalize sm:text-4xl text-dark text-shadow-darkest font-jakarta my-8">
              {result?.data?.title}
            </h2>
            <div className="font-roboto text-dark pt-2">
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Package Price:</span>{" "}
                {result?.data?.price}
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Accommodation:</span>{" "}
                {result?.data?.accommodation}
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Meal:</span> {result?.data?.meal}
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Transport:</span>{" "}
                {result?.data?.transport}
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Makkah Accommodation:</span>{" "}
                {result?.data?.makkah_accommodation}
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Madinah Accommodation:</span>{" "}
                {result?.data?.madinah_accommodation}
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Qurbani:</span> <del>No</del>
              </p>
            </div>
          </div>

          <div className=" w-full sm:w-fit mt-10 rounded-2xl">
            <BookNowButton />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
