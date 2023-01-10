import React from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";
import SignInBar from "../components/SingnInBar";

import decoration from "../assets/Decoration.svg";

export default function SingnOut() {
  const navigate = useNavigate();
  return (
    <section className="signout">
      <SignInBar />
      <Navbar />
      <div className="signout-box">
        <h2>
          Wylogowanie nastąpiło
          <br />
          pomyślnie!
        </h2>
        <img src={decoration} alt="linia dekoracyjna"></img>
        <button className="btn btn-signout" onClick={() => navigate("/")}>
          Strona główna
        </button>
      </div>
    </section>
  );
}
