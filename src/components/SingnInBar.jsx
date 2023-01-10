import React from "react";
import {useNavigate} from "react-router-dom";

export default function SignInBar({isLogged}) {
  const navigate = useNavigate();
  console.log(isLogged);

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
            <button
              className="btn btn-signinBar"
              onClick={() => navigate("/oddaj-rzeczy")}
            >
              Oddaj rzeczy
            </button>
            <button
              className="btn btn-signinBar"
              onClick={() => navigate("/wylogowano")}
            >
              Wyloguj
            </button>
          </>
        )}
      </div>
    </>
  );
}
