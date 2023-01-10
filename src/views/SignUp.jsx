import React from "react";
import {useNavigate} from "react-router-dom";
import {supabase} from "../serviceWorker.jsx";

import Navbar from "../components/Navbar";
import SignInBar from "../components/SingnInBar";

import decoration from "../assets/Decoration.svg";

export default function SignUp() {
  const navigate = useNavigate();

  const signupUser = async (e) => {
    e.preventDefault();

    const [email, password, repassword] = e.target.elements;

    // walidacja
    if (password.value.length < 6) {
      console.log("Hasło musi się składać co najmniej z 6 znaków.");
      return;
    }
    if (repassword.value.length < 6) {
      console.log("Hasło musi się składać co najmniej z 6 znaków.");
      return;
    }

    if (password.value !== repassword.value) {
      console.log("Hasła muszą być takie same!");
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
      console.log("Pojawił się problem. Spróbuj jeszcze raz!");
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
                <label for="email">Email</label>
                <input type="email" name="email" required></input>
                <label for="password">Hasło</label>

                <input type="password" name="password"></input>
                <label for="password">Powtórz hasło</label>
                <input type="password" name="repassword"></input>
              </div>
              <div className="signup-buttons">
                <button
                  label="Signup"
                  className="btn btn-signup"
                  onClick={() => navigate("/logowanie")}
                >
                  Zaloguj się
                </button>
                <button className="btn btn-signup" onClick={SignUp}>
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
