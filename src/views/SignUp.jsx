import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {supabase} from "../serviceWorker.jsx";

import Navbar from "../components/Navbar";
import SignInBar from "../components/SingnInBar";

import decoration from "../assets/Decoration.svg";

export default function SignUp() {
  const navigate = useNavigate();

  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [borderColor, setBorderColor] = useState("#737373");
  const [borderColor2, setBorderColor2] = useState("#737373");
  const [borderColor3, setBorderColor3] = useState("#737373");
  const [text4, setText4] = useState("");

  const signupUser = async (e) => {
    e.preventDefault();

    const [email, password, repassword] = e.target.elements;

    // walidacja
    if (!email.value.includes("@")) {
      console.log(email.value);
      setText1("Podany email jest nieprawidłowy!");
      setBorderColor("red");
      return;
    }
    setText1("");
    setBorderColor("#737373");

    if (password.value.length < 6) {
      setText2("Hasło musi się składać co najmniej z 6 znaków!");
      setBorderColor2("red");
      return;
    }
    if (repassword.value.length < 6) {
      setText3("Hasło musi się składać co najmniej z 6 znaków!");
      setBorderColor3("red");
      return;
    }

    if (password.value !== repassword.value) {
      setText3("Hasła muszą być takie same!");
      setBorderColor3("red");

      return;
    }

    //rejestracja
    let {
      data: {user},
      error,
    } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });

    if (error) {
      setText4("Pojawił się problem. Spróbuj jeszcze raz!");
      return;
    }
    console.log("Rejestracja powiodła się! Jesteś teraz zalogowany.");
    navigate("/");
    return;
  };

  return (
    <>
      <section className="signup">
        <SignInBar />
        <Navbar />
        <div className="signup-formsection">
          <div className="signup-box">
            <h2>Załóż konto</h2>
            <img src={decoration} alt="linia dekoracyjna"></img>
            <form className="signup-form" onSubmit={(e) => signupUser(e)}>
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

                <label htmlFor="password">Powtórz hasło</label>
                <input
                  type="password"
                  name="repassword"
                  style={{borderColor: borderColor3}}
                ></input>
                <span className="error">
                  {text3}
                  {text4}
                </span>
              </div>
              <div className="signup-buttons">
                <button
                  className="btn btn-signup"
                  onClick={() => navigate("/logowanie")}
                >
                  Zaloguj się
                </button>
                <button type="submit" className="btn btn-signup">
                  Załóż konto
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
