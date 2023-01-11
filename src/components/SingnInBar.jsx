import React from "react";
import {useNavigate} from "react-router-dom";
import {supabase} from "../serviceWorker";

export default function SignInBar({isLogged}) {
  const navigate = useNavigate();

  const logoutUser = async () => {
    let {error} = await supabase.auth.signOut();
    if (!error) {
      console.log("Zostałeś wylogowany.");
      navigate("/wylogowano");
    }
    return;
  };

  return (
    <>
      <div className="signinBar">
        {!isLogged && (
          <>
            <button
              className="btn btn-signinBar"
              onClick={() => navigate("/logowanie")}
            >
              Zaloguj
            </button>
            <button
              className="btn btn-signinBar"
              onClick={() => navigate("/rejestracja")}
            >
              Załóż konto
            </button>
          </>
        )}
        {isLogged && (
          <>
            <span>Cześć email</span>

            <button
              className="btn btn-signinBar"
              onClick={() => navigate("/oddaj-rzeczy")}
            >
              Oddaj rzeczy
            </button>
            <button className="btn btn-signinBar" onClick={logoutUser}>
              Wyloguj
            </button>
          </>
        )}
      </div>
    </>
  );
}
