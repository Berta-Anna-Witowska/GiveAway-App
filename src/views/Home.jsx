import React from "react";

import HomeHeader from "../components/HomeHeader";
import HomeThreeColumns from "../components/HomeThreeColumns";
import HomeSimpleSteps from "../components/HomeSimpleSteps";
import HomeAboutUs from "../components/HomeAboutUs";
import HomeWhoWeHelp from "../components/HomeWhoWeHelp";
import HomeContact from "../components/HomeContact";
import HomeFooter from "../components/HomeFooter";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeThreeColumns />
      <HomeSimpleSteps />
      <HomeAboutUs />
      <HomeWhoWeHelp />
      <HomeContact />
      <HomeFooter />
    </>
  );
}
