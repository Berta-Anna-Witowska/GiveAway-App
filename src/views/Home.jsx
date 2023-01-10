import React, {useState, useEffect} from "react";
import {supabase} from "../serviceWorker.jsx";

import HomeHeader from "../components/HomeHeader";
import HomeThreeColumns from "../components/HomeThreeColumns";
import HomeSimpleSteps from "../components/HomeSimpleSteps";
import HomeAboutUs from "../components/HomeAboutUs";
import HomeWhoWeHelp from "../components/HomeWhoWeHelp";
import Contact from "../components/Contact";

export default function Home() {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const isUserLogged = async () => {
      const {
        data: {session},
        error,
      } = await supabase.auth.getSession();
      if (error) {
        console.log(error);
      }
      if (!session) {
        setIsLogged(false);
        return;
      }
      setIsLogged(true);
      console.log(isLogged);
    };
    isUserLogged();
  }, [isLogged]);

  return (
    <>
      <HomeHeader isLogged={isLogged} />
      <HomeThreeColumns />
      <HomeSimpleSteps />
      <HomeAboutUs />
      <HomeWhoWeHelp />
      <Contact />
    </>
  );
}
