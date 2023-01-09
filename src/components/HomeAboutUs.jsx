import React from "react";
import signature from "../assets/Signature.svg";
import peoplePhoto from "../assets/People.jpg";
import decoration from "../assets/Decoration.svg";

export default function HomeAboutUs() {
  return (
    <section className="aboutus">
      <div className="aboutus-description">
        <h2>O nas</h2>
        <img
          src={decoration}
          className="decoration-line"
          alt="linia dekoracyjna"
        />
        <p className="aboutus-description-text">
          Nori grape silver beet broccoli kombu beet greens fava bean potato
          quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil
          turnip greens parsnip.
        </p>
        <img className="aboutus-description-img" src={signature}></img>
      </div>
      <img className="aboutus-img" src={peoplePhoto}></img>
    </section>
  );
}
