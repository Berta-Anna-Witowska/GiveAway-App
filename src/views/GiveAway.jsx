import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";

import {supabase} from "../serviceWorker.jsx";

import GiveAwayHeader from "../components/GiveAwayHeader.jsx";
import GiveAwayForm from "../components/GiveAwayForm.jsx";
import Contact from "../components/Contact.jsx";

export default function GiveAway() {
  const navigate = useNavigate();

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
        // navigate("/logowanie");
        return;
      }
      setIsLogged(true);
      console.log(isLogged);
    };
    isUserLogged();
  }, [isLogged]);

  return (
    <div>
      <GiveAwayHeader />
      <GiveAwayForm />
      <Contact />
    </div>
  );
}
