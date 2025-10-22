import BookNowButton from "@/app/(user)/components/PackageDetails/BookNowButton";
import baseUrl from "@/app/baseUrl";
import { cookies } from "next/headers";
import Script from "next/script";
import React from "react";

export async function generateMetadata({ params }) {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "en";

  const res = await fetch(
    `${baseUrl()}/package/package/${params.id}?lang=${lang}`
  );
  const result = await res.json();
  const pkg = result?.data;

  if (!pkg) {
    return {
      title: "Package Not Found | Ali Air Travels",
      description: "This Hajj/Umrah package could not be found.",
    };
  }

  return {
    title: `${pkg.title} | Ali Air Travels`,
    description: `${pkg.title} - Price: ${pkg.price}. Accommodation, meals, and transport included. Book your Hajj or Umrah package from Bangladesh.`,
    keywords: [
      "Hajj Bangladesh",
      "Umrah Bangladesh",
      `${pkg.title}`,
      "Hajj Package Bangladesh",
      "Umrah Package Bangladesh",
    ],
    openGraph: {
      title: `${pkg.title} | Ali Air Travels`,
      description: `${pkg.title} - Price: ${pkg.price}. Full Hajj & Umrah package from Bangladesh.`,
      url: `https://aliairtravels.com/packagedetails/${params.id}`,
      images: [
        {
          url: pkg.image || "https://aliairtravels.com/banner-logo.png",
          width: 1200,
          height: 630,
          alt: pkg.title,
        },
      ],
      locale: lang === "bn" ? "bn_BD" : "en_BD",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${pkg.title} | Ali Air Travels`,
      description: `${pkg.title} - Price: ${pkg.price}. Book your Hajj or Umrah package from Bangladesh.`,
      images: [pkg.image || "https://aliairtravels.com/banner-logo.png"],
    },
  };
}

const Page = async ({ params }) => {
  const cookieStore = cookies();
  const lang = cookieStore.get("lang")?.value || "en";

  const res = await fetch(
    `${baseUrl()}/package/package/${params.id}?lang=${lang}`
  );
  const result = await res.json();
  const pkg = result?.data;
  console.log(result)

  if (!pkg) return <div>Package not found.</div>;

  const schemaPackage = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: pkg?.title,
    description: pkg?.description,
    image: pkg?.image || "https://aliairtravels.com/banner-logo.png",
    url: `https://aliairtravels.com/packagedetails/${params.id}`,
    offers: {
      "@type": "Offer",
      price: pkg.price.replace(/[^\d]/g, ""),
      priceCurrency: "BDT",
      availability: "https://schema.org/InStock",
    },
    itinerary: pkg.itinerary || undefined,
  };

  return (
    <div>
      <Script
        id={`package-schema-${pkg.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaPackage) }}
      />
      <section className="px-3 pb-10 overflow-hidden h-full">
        <div
          className="container mt-5 h-[20dvh] rounded-3xl bg-cover bg-center bg-no-repeat w-full relative"
          style={{ backgroundImage: "url('/package-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] rounded-3xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl md:text-7xl text-light text-glow font-semibold font-jakarta text-center border-b-4 border-brand">
              {pkg.title}
            </h2>
          </div>
        </div>

        <div className="container gap-5 px-3 md:px-5 lg:px-7 py-10 bg-light mt-5 rounded-2xl shadow-xl">
          <h3 className="text-4xl md:text-5xl text-dark text-shadow-darker font-semibold font-jakarta w-fit border-b-4 mb-10 border-brand">
            Package Details
          </h3>
          <div>
            <h2 className="text-3xl capitalize sm:text-4xl text-dark text-shadow-darkest font-jakarta my-8">
              {pkg.title}
            </h2>
            <div className="font-roboto text-dark pt-2">
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Package Price:</span> {pkg.price}
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Accommodation:</span>{" "}
                {pkg.accommodation}
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Meal:</span> {pkg.meal}
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Transport:</span> {pkg.transport}
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Makkah Accommodation:</span>{" "}
                {pkg.makkah_accommodation}
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Madinah Accommodation:</span>{" "}
                {pkg.madinah_accommodation}
              </p>
            </div>
          </div>

          <div className="w-full sm:w-fit mt-10 rounded-2xl">
            <BookNowButton data={pkg} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
