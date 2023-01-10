import React from "react";
import {useNavigate} from "react-router-dom";

import SignInBar from "./SingnInBar";
import Navbar from "./Navbar";

import decoration from "../assets/Decoration.svg";

export default function HomeHeader({isLogged}) {
  const navigate = useNavigate();
  return (
    <>
      <header className="header">
        <SignInBar isLogged={isLogged} />
        <Navbar />
        <div className="header-box">
          <h1 className="header-text">
            Zacznij pomagać!
            <br /> Oddaj niechciane rzeczy w zaufane ręce
          </h1>
          <img
            src={decoration}
            className="decoration-line"
            alt="linia dekoracyjna"
          />
          <span className="header-buttons">
            <button
              className="btn btn-header"
              onClick={() => navigate("/oddaj-rzeczy")}
            >
              Oddaj
              <br />
              rzeczy
            </button>
            <button
              className="btn btn-header"
              onClick={() => navigate("/logowanie")}
            >
              Zorganizuj
              <br />
              zbiórkę
            </button>
          </span>
        </div>
      </header>
    </>
  );
}
