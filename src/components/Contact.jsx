import React from "react";
import Footer from "./Footer";
import decoration from "../assets/Decoration.svg";

export default function Contact() {
  return (
    <>
      <section className="contact">
        <div className="overlay">
          <form className="contact-form">
            <h2>Skontaktuj się z nami</h2>
            <img
              src={decoration}
              className="decoration-line"
              alt="linia dekoracyjna"
            />
            <span className="input-boxes">
              <div className="input-box">
                <label for="name">Wpisz swoje imię</label>
                <input
                  type="text"
                  placeholder="Krzysztof"
                  name="name"
                  required
                ></input>
              </div>
              <div className="input-box">
                <label for="email">Wpisz swój email</label>
                <input
                  type="email"
                  placeholder="abc@xyz.pl"
                  name="email"
                  required
                ></input>
              </div>
            </span>
            <label for="message">Wpisz swoją wiadomość</label>
            <textarea
              type="text"
              name="message"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              required
            ></textarea>
            <button className="btn btn-contactform" type="submit" name="submit">
              Wyślij
            </button>
          </form>
          <Footer />
        </div>
      </section>
    </>
  );
}
