import React from "react";
import {useNavigate} from "react-router-dom";
import Navbar from "../components/Navbar";
import SignInBar from "../components/SingnInBar";

import decoration from "../assets/Decoration.svg";

export default function SingnIn() {
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    const [email, password] = e.target.elements;

    if (password.value.length < 6) {
      console.log("Hasło musi się składać co najmniej z 6 znaków.");
      return;
    }

    let {
      data: {user},
      error,
    } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) {
      console.log("Pojawił się problem. Spróbuj jeszcze raz!");
      return;
    }
    console.log("Logowanie powiodło się!");
    navigate("/");
  };

  return (
    <>
      <section className="signup">
        <SignInBar />
        <Navbar />
        <div className="signup-formsection">
          <div className="signup-box">
            <h2>Zaloguj się</h2>
            <img src={decoration} alt="linia dekoracyjna"></img>
            <form className="signup-form">
              <div className="input-box">
                <label for="email">Email</label>
                <input type="email" name="email" required></input>
                <label for="password">Hasło</label>
                <input type="password" name="password"></input>
              </div>
              <div className="signup-buttons">
                <button
                  className="btn btn-signup"
                  onClick={() => navigate("/rejestracja")}
                >
                  Załóż konto
                </button>
                <button className="btn btn-signup" onClick={loginUser}>
                  Zaloguj się
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
