import React from "react";
import Banner from "./(user)/components/home/Banner";
import Services from "./(user)/components/home/Services";
import Trusted from "./(user)/components/home/Trusted";
import MeetTheCeo from "./(user)/components/home/MeetTheCeo";

import UmrahGallery from "./(user)/components/home/UmrahGallery";
import BelieveInUs from "./(user)/components/home/BelieveInUs";
import Parallax from "./(user)/components/home/Parallax";

const Page = () => {
  return (
    <>
      <Banner />
      <MeetTheCeo />
      <BelieveInUs />
      <Trusted />
      <Services />
      <Parallax />
      <UmrahGallery />
    </>
  );
};

export default Page;
