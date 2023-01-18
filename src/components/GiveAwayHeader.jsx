import React, {useState, useEffect} from "react";
import SignInBar from "./SingnInBar";
import Navbar from "./Navbar";

import decoration from "../assets/Decoration.svg";

export default function GiveAwayHeader() {
  return (
    <header className="header giveaway-header">
      <SignInBar />
      <Navbar />
      <div className="giveaway-header-textbox">
        <h1>Oddaj rzeczy, których już nie chcesz</h1>
        <h1>POTRZEBUJĄCYM</h1>
        <img src={decoration} alt="" />
        <h2>Wystarczą 4 proste kroki:</h2>
        <div className="steps">
          <div className="step">
            <div className="step-text">
              <h2>1</h2>
              <span>Wybierz rzeczy</span>
            </div>
          </div>
          <div className="step">
            <div className="step-text">
              <h2>2</h2>
              <span>Spakuj je w worki</span>
            </div>
          </div>
          <div className="step">
            <div className="step-text">
              <h2>3</h2>
              <span>Wybierz fundację</span>
            </div>
          </div>
          <div className="step">
            <div className="step-text">
              <h2>4</h2>
              <span>Zamów kuriera</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
