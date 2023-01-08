import React from "react";

import SignInBar from "./SingnInBar";
import Navbar from "./Navbar";

import decoration from "../assets/Decoration.svg";

export default function HomeHeader() {
  return (
    <>
      <header className="header">
        <SignInBar />
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
            <button className="btn btn-header">
              Oddaj
              <br />
              rzeczy
            </button>
            <button className="btn btn-header">
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
