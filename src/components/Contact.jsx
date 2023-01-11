import React, {useRef, useState} from "react";

import emailjs from "@emailjs/browser";
import {publicKEY, emailJS_serviceKEY, template} from "../serviceWorker";

import Footer from "./Footer";
import decoration from "../assets/Decoration.svg";

export default function Contact() {
  const form = useRef();
  const [text1, setText1] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");
  const [text4, setText4] = useState("");
  const [borderColor, setBorderColor] = useState("#737373");
  const [borderColor2, setBorderColor2] = useState("#737373");
  const [borderColor3, setBorderColor3] = useState("#737373");

  const sendEmail = (e) => {
    e.preventDefault();
    const [name, email, message] = e.target.elements;

    if (name.value.length < 3) {
      console.log("Imię musi się składać co najmniej z 3 znaków.");
      setText1("Podane imię jest nieprawidłowe!");
      setBorderColor("red");
      return;
    }
    if (name.value.includes(" ")) {
      console.log(name.value);
      setText1("Podane imię jest nieprawidłowe!");
      setBorderColor("red");
      return;
    }
    setText1("");
    setBorderColor("#737373");

    if (!email.value.includes("@")) {
      console.log(email.value);
      setText2("Podany email jest nieprawidłowy!");
      setBorderColor2("red");
      return;
    }
    setText2("");
    setBorderColor2("#737373");

    if (message.value.length < 120) {
      console.log(message.value);
      setText3("Wiadomość musi mieć co najmniej 120 znaków!");
      setBorderColor3("red");
      return;
    }
    setText3("");
    setBorderColor3("#737373");

    emailjs
      .sendForm(emailJS_serviceKEY, template, form.current, publicKEY)
      .then(
        (result) => {
          console.log("Wiadomość wysłana!");
          setText4(`Wiadomość została wysłana! \n Wkrótce się skontaktujemy.`);
        },
        (error) => {
          console.log("Wysyłanie nie powiodło się !");
        }
      );
    e.target.reset();
  };

  return (
    <>
      <section id="contact" className="contact">
        <div className="overlay">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <h2>Skontaktuj się z nami</h2>
            <img
              src={decoration}
              className="decoration-line"
              alt="linia dekoracyjna"
            />
            <span className="success">{text4}</span>
            <span className="input-boxes">
              <div className="input-box">
                <label htmlFor="name">Wpisz swoje imię</label>
                <input
                  type="text"
                  placeholder="Krzysztof"
                  name="name"
                  required
                  style={{borderColor}}
                ></input>
                <span className="error">{text1}</span>
              </div>
              <div className="input-box">
                <label htmlFor="email">Wpisz swój email</label>
                <input
                  type="email"
                  placeholder="abc@xyz.pl"
                  name="email"
                  required
                  style={{borderColor: borderColor2}}
                ></input>
                <span className="error">{text2}</span>
              </div>
            </span>
            <label htmlFor="message">Wpisz swoją wiadomość</label>
            <textarea
              type="text"
              name="message"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              rows={5}
              required
              style={{borderColor: borderColor3}}
            ></textarea>
            <span className="error">{text3}</span>

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
