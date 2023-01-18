import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {supabase} from "../serviceWorker";
import Navbar from "../components/Navbar";
import SignInBar from "../components/SingnInBar";

import decoration from "../assets/Decoration.svg";

export default function SingnIn() {
  const navigate = useNavigate();
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [borderColor, setBorderColor] = useState("#737373");
  const [borderColor2, setBorderColor2] = useState("#737373");
  const [text3, setText3] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const [email, password] = e.target.elements;

    if (!email.value.includes("@")) {
      console.log(email.value);
      setText1("Podany email jest nieprawidłowy!");
      setBorderColor("red");
      return;
    }
    setText1("");
    setBorderColor("#737373");

    if (password.value.length < 6) {
      console.log("Hasło musi się składać co najmniej z 6 znaków.");
      setText2("Podane hasło jest za krótkie!");
      setBorderColor2("red");
      return;
    }
    setText3("");
    setBorderColor2("#737373");

    let {
      data: {user},
      error,
    } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });
    if (error) {
      console.log("Pojawił się problem. Spróbuj jeszcze raz!");
      setText3(
        "Pojawił się problem. Spróbuj jeszcze raz! Jeśli nie masz konta, zarejestruj się."
      );
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
            <form className="signup-form" onSubmit={loginUser}>
              <div className="input-box">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  style={{borderColor}}
                ></input>
                <span className="error">{text1}</span>

                <label htmlFor="password">Hasło</label>
                <input
                  type="password"
                  name="password"
                  style={{borderColor: borderColor2}}
                ></input>
                <span className="error">{text2}</span>

                <span className="error">{text3}</span>
              </div>
              <div className="signup-buttons">
                <button
                  className="btn btn-signup"
                  onClick={() => navigate("/rejestracja")}
                >
                  Załóż konto
                </button>
                <button className="btn btn-signup">Zaloguj się</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
