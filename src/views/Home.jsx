import React from "react";

import HomeHeader from "../components/HomeHeader";
import HomeThreeColumns from "../components/HomeThreeColumns";
import HomeSimpleSteps from "../components/HomeSimpleSteps";
import HomeAboutUs from "../components/HomeAboutUs";
import HomeWhoWeHelp from "../components/HomeWhoWeHelp";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeThreeColumns />
      <HomeSimpleSteps />
      <HomeAboutUs />
      {/* <HomeWhoWeHelp /> */}
      <Contact />
    </>
  );
}
