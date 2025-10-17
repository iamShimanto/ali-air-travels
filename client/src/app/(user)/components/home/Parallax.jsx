const Parallax = () => {
  return (
    <section
      className="relative h-[35dvh] md:h-[50dvh] lg:h-[70dvh] sm:py-15 lg:pb-20 px-2 overflow-hidden bg-fixed bg-center bg-cover nav-custom-shadow"
      style={{ backgroundImage: "url('/parallax.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />
      <h2
        data-aos="fade-right"
        data-aos-duration="1200"
        className="relative text-white  md:text-6xl font-bold z-10 h-full flex justify-center items-center font-jakarta text-4xl text-glow"
      >
        Trusted by{" "}
        <p className="inline-block border-b-4 border-brand mt-2 ml-1">
          Millions
        </p>
      </h2>
    </section>
  );
};

export default Parallax;
