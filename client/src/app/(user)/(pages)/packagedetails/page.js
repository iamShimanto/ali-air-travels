import BookNowButton from "../../components/PackageDetails/BookNowButton";

const PackageDetails = () => {
  return (
    <>
      <section className="px-3 pb-10 overflow-hidden h-full">
        <div
          className="container mt-5 h-[20dvh] rounded-3xl bg-cover bg-center bg-no-repeat w-full relative"
          style={{ backgroundImage: "url('/package-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] rounded-3xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl md:text-7xl text-light text-glow font-semibold font-jakarta text-center border-b-4 border-brand">
              Hajj Regular
            </h2>
          </div>
        </div>

        <div className="container  gap-5 px-3 md:px-5 lg:px-7 py-10 bg-light mt-5 rounded-2xl shadow-xl">
          <h3 className="text-4xl md:text-5xl text-dark text-shadow-darker font-semibold font-jakarta w-fit border-b-4 mb-10 border-brand">
            Package Details
          </h3>
          <div>
            <h2 className="text-3xl sm:text-4xl text-dark text-shadow-darkest font-jakarta my-8">
              Hajj Regular
            </h2>
            <div className="font-roboto text-dark pt-2">
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Package Price:</span> 5,80,000 Taka
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Accommodation:</span> Maximum 5–6
                people per room.
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Meal:</span> Three meals daily with
                local cuisine.
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Transport:</span> Bus and local
                historical Ziarah, D-Categorized Guide.
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Makkah Accommodation:</span> Within
                700–800 meters distance from Masjid Al-Haram’s outer circle.
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Madinah Accommodation:</span> Within
                800–1000 meters distance from Masjid An-Nabawi’s outer circle.
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
      <section className="px-3 pb-10 overflow-hidden h-full">
        <div
          className="container mt-5 h-[25dvh] rounded-3xl bg-cover bg-center bg-no-repeat w-full relative"
          style={{ backgroundImage: "url('/package-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] rounded-3xl"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-4xl md:text-7xl text-light text-glow font-semibold font-jakarta text-center border-b-4 border-brand">
              Umrah Regular
            </h2>
          </div>
        </div>
        <div className="container px-3 md:px-5 lg:px-7 py-10 bg-light mt-5 rounded-2xl shadow-xl">
          <h3 className="text-4xl md:text-5xl text-dark text-shadow-darker font-semibold font-jakarta w-fit border-b-4 mb-10 border-brand">
            Package Details
          </h3>
          <div>
            <h2 className="text-3xl sm:text-4xl text-dark text-shadow-darkest font-jakarta my-8">
              Umrah Regular
            </h2>
            <div className="font-roboto text-dark pt-2">
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Package Price:</span> 58,000 Taka
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Accommodation:</span> Maximum 5–6
                people per room.
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Meal:</span> Three meals daily with
                local cuisine.
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Transport:</span> Bus and local
                historical Ziarah,D-Categorized Guide.
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Makkah Accommodation:</span> Within
                700–800 meters distance from Masjid Al-Haram’s outer circle.
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Madinah Accommodation:</span> Within
                800–1000 meters distance from Masjid An-Nabawi’s outer circle.
              </p>
              <p className="text-xl md:text-2xl pb-3">
                <span className="font-bold">Qurbani:</span> <del>No</del>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackageDetails;

{
  /* <p className="text-xl md:text-2xl pb-3">
  <span className="font-bold">d</span> s
</p>{" "} */
}
//  <section className="px-3 pb-10 overflow-hidden h-full">
//     <div
//       className="container mt-5 h-[25dvh] rounded-3xl bg-cover bg-center bg-no-repeat w-full relative"
//       style={{ backgroundImage: "url('/package-bg.jpg')" }}
//     >
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] rounded-3xl"></div>
//       <div className="absolute inset-0 flex items-center justify-center">
//         <h2 className="text-4xl md:text-7xl text-light text-glow font-semibold font-jakarta text-center border-b-4 border-brand">
//           Hajj Special
//         </h2>
//       </div>
//     </div>
//     <div className="container px-3 md:px-5 lg:px-7 py-10 bg-light mt-5 rounded-2xl shadow-xl">
//       <h3 className="text-4xl md:text-5xl text-dark text-shadow-darker font-semibold font-jakarta w-fit border-b-4 mb-10 border-brand">
//         Package Details
//       </h3>
//       <div>
//         <h2 className="text-3xl sm:text-4xl text-dark text-shadow-darkest font-jakarta my-8">
//           Hajj Special
//         </h2>
//         <div className="font-roboto text-dark pt-2">
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Package Price:</span> 58,000 Taka
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Accommodation:</span> Maximum 5–6
//             people per room.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Meal:</span> Three meals daily with
//             local cuisine.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Transport:</span> Bus and local
//             historical Ziarah,D-Categorized Guide.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Makkah Accommodation:</span> Within
//             700–800 meters distance from Masjid Al-Haram’s outer circle.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Madinah Accommodation:</span> Within
//             800–1000 meters distance from Masjid An-Nabawi’s outer circle.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Qurbani:</span> <del>No</del>
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>
//   <section className="px-3 pb-10 overflow-hidden h-full">
//     <div
//       className="container mt-5 h-[25dvh] rounded-3xl bg-cover bg-center bg-no-repeat w-full relative"
//       style={{ backgroundImage: "url('/package-bg.jpg')" }}
//     >
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] rounded-3xl"></div>
//       <div className="absolute inset-0 flex items-center justify-center">
//         <h2 className="text-4xl md:text-7xl text-light text-glow font-semibold font-jakarta text-center border-b-4 border-brand">
//           Hajj Regular
//         </h2>
//       </div>
//     </div>
//     <div className="container px-3 md:px-5 lg:px-7 py-10 bg-light mt-5 rounded-2xl shadow-xl">
//       <h3 className="text-4xl md:text-5xl text-dark text-shadow-darker font-semibold font-jakarta w-fit border-b-4 mb-10 border-brand">
//         Package Details
//       </h3>
//       <div>
//         <h2 className="text-3xl sm:text-4xl text-dark text-shadow-darkest font-jakarta my-8">
//           Hajj Regular
//         </h2>
//         <div className="font-roboto text-dark pt-2">
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Package Price:</span> 58,000 Taka
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Accommodation:</span> Maximum 5–6
//             people per room.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Meal:</span> Three meals daily with
//             local cuisine.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Transport:</span> Bus and local
//             historical Ziarah,D-Categorized Guide.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Makkah Accommodation:</span> Within
//             700–800 meters distance from Masjid Al-Haram’s outer circle.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Madinah Accommodation:</span> Within
//             800–1000 meters distance from Masjid An-Nabawi’s outer circle.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Qurbani:</span> <del>No</del>
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>

//   {/* umrah */}
//   <section className="px-3 pb-10 overflow-hidden h-full">
//     <div
//       className="container mt-5 h-[25dvh] rounded-3xl bg-cover bg-center bg-no-repeat w-full relative"
//       style={{ backgroundImage: "url('/package-bg.jpg')" }}
//     >
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] rounded-3xl"></div>
//       <div className="absolute inset-0 flex items-center justify-center">
//         <h2 className="text-4xl md:text-7xl text-light text-glow font-semibold font-jakarta text-center border-b-4 border-brand">
//           Hajj Regular
//         </h2>
//       </div>
//     </div>
//     <div className="container px-3 md:px-5 lg:px-7 py-10 bg-light mt-5 rounded-2xl shadow-xl">
//       <h3 className="text-4xl md:text-5xl text-dark text-shadow-darker font-semibold font-jakarta w-fit border-b-4 mb-10 border-brand">
//         Package Details
//       </h3>
//       <div>
//         <h2 className="text-3xl sm:text-4xl text-dark text-shadow-darkest font-jakarta my-8">
//           Hajj Regular
//         </h2>
//         <div className="font-roboto text-dark pt-2">
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Package Price:</span> 58,000 Taka
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Accommodation:</span> Maximum 5–6
//             people per room.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Meal:</span> Three meals daily with
//             local cuisine.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Transport:</span> Bus and local
//             historical Ziarah,D-Categorized Guide.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Makkah Accommodation:</span> Within
//             700–800 meters distance from Masjid Al-Haram’s outer circle.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Madinah Accommodation:</span> Within
//             800–1000 meters distance from Masjid An-Nabawi’s outer circle.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Qurbani:</span> <del>No</del>
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>
//   <section className="px-3 pb-10 overflow-hidden h-full">
//     <div
//       className="container mt-5 h-[25dvh] rounded-3xl bg-cover bg-center bg-no-repeat w-full relative"
//       style={{ backgroundImage: "url('/package-bg.jpg')" }}
//     >
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] rounded-3xl"></div>
//       <div className="absolute inset-0 flex items-center justify-center">
//         <h2 className="text-4xl md:text-7xl text-light text-glow font-semibold font-jakarta text-center border-b-4 border-brand">
//           Hajj Regular
//         </h2>
//       </div>
//     </div>
//     <div className="container px-3 md:px-5 lg:px-7 py-10 bg-light mt-5 rounded-2xl shadow-xl">
//       <h3 className="text-4xl md:text-5xl text-dark text-shadow-darker font-semibold font-jakarta w-fit border-b-4 mb-10 border-brand">
//         Package Details
//       </h3>
//       <div>
//         <h2 className="text-3xl sm:text-4xl text-dark text-shadow-darkest font-jakarta my-8">
//           Hajj Regular
//         </h2>
//         <div className="font-roboto text-dark pt-2">
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Package Price:</span> 58,000 Taka
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Accommodation:</span> Maximum 5–6
//             people per room.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Meal:</span> Three meals daily with
//             local cuisine.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Transport:</span> Bus and local
//             historical Ziarah,D-Categorized Guide.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Makkah Accommodation:</span> Within
//             700–800 meters distance from Masjid Al-Haram’s outer circle.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Madinah Accommodation:</span> Within
//             800–1000 meters distance from Masjid An-Nabawi’s outer circle.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Qurbani:</span> <del>No</del>
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>
//   <section className="px-3 pb-10 overflow-hidden h-full">
//     <div
//       className="container mt-5 h-[25dvh] rounded-3xl bg-cover bg-center bg-no-repeat w-full relative"
//       style={{ backgroundImage: "url('/package-bg.jpg')" }}
//     >
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] rounded-3xl"></div>
//       <div className="absolute inset-0 flex items-center justify-center">
//         <h2 className="text-4xl md:text-7xl text-light text-glow font-semibold font-jakarta text-center border-b-4 border-brand">
//           Hajj Regular
//         </h2>
//       </div>
//     </div>
//     <div className="container px-3 md:px-5 lg:px-7 py-10 bg-light mt-5 rounded-2xl shadow-xl">
//       <h3 className="text-4xl md:text-5xl text-dark text-shadow-darker font-semibold font-jakarta w-fit border-b-4 mb-10 border-brand">
//         Package Details
//       </h3>
//       <div>
//         <h2 className="text-3xl sm:text-4xl text-dark text-shadow-darkest font-jakarta my-8">
//           Hajj Regular
//         </h2>
//         <div className="font-roboto text-dark pt-2">
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Package Price:</span> 58,000 Taka
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Accommodation:</span> Maximum 5–6
//             people per room.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Meal:</span> Three meals daily with
//             local cuisine.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Transport:</span> Bus and local
//             historical Ziarah,D-Categorized Guide.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Makkah Accommodation:</span> Within
//             700–800 meters distance from Masjid Al-Haram’s outer circle.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Madinah Accommodation:</span> Within
//             800–1000 meters distance from Masjid An-Nabawi’s outer circle.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Qurbani:</span> <del>No</del>
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>
//   <section className="px-3 pb-10 overflow-hidden h-full">
//     <div
//       className="container mt-5 h-[25dvh] rounded-3xl bg-cover bg-center bg-no-repeat w-full relative"
//       style={{ backgroundImage: "url('/package-bg.jpg')" }}
//     >
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px] rounded-3xl"></div>
//       <div className="absolute inset-0 flex items-center justify-center">
//         <h2 className="text-4xl md:text-7xl text-light text-glow font-semibold font-jakarta text-center border-b-4 border-brand">
//           Hajj Regular
//         </h2>
//       </div>
//     </div>
//     <div className="container px-3 md:px-5 lg:px-7 py-10 bg-light mt-5 rounded-2xl shadow-xl">
//       <h3 className="text-4xl md:text-5xl text-dark text-shadow-darker font-semibold font-jakarta w-fit border-b-4 mb-10 border-brand">
//         Package Details
//       </h3>
//       <div>
//         <h2 className="text-3xl sm:text-4xl text-dark text-shadow-darkest font-jakarta my-8">
//           Hajj Regular
//         </h2>
//         <div className="font-roboto text-dark pt-2">
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Package Price:</span> 58,000 Taka
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Accommodation:</span> Maximum 5–6
//             people per room.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Meal:</span> Three meals daily with
//             local cuisine.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Transport:</span> Bus and local
//             historical Ziarah,D-Categorized Guide.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Makkah Accommodation:</span> Within
//             700–800 meters distance from Masjid Al-Haram’s outer circle.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Madinah Accommodation:</span> Within
//             800–1000 meters distance from Masjid An-Nabawi’s outer circle.
//           </p>
//           <p className="text-xl md:text-2xl pb-3">
//             <span className="font-bold">Qurbani:</span> <del>No</del>
//           </p>
//         </div>
//       </div>
//     </div>
//   </section>
