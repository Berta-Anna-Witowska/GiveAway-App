import React from "react";
import {useNavigate} from "react-router-dom";

import decoration from "../assets/Decoration.svg";
import icon1 from "../assets/Icon-1.svg";
import icon2 from "../assets/Icon-2.svg";
import icon3 from "../assets/Icon-3.svg";
import icon4 from "../assets/Icon-4.svg";

export default function HomeSimpleSteps() {
  const simplestepsColumns = [
    {
      icon: icon1,
      icon_alt: "koszulka",
      title: "Wybierz rzeczy",
      text: "ubrania, zabawki, sprzęt i inne",
    },
    {
      icon: icon2,
      icon_alt: "torba zakupowa",
      title: "Spakuj je",
      text: "skorzystaj z worków na śmieci",
    },
    {
      icon: icon3,
      icon_alt: "lupa",
      title: "Zdecyduj komu chcesz pomóc",
      text: "wybierz zaufane miejsce",
    },
    {
      icon: icon4,
      icon_alt: "znak nieskończoności",
      title: "Zamów kuriera",
      text: "kurier przyjedzie w dogodnym terminie",
    },
  ];

  const navigate = useNavigate();

  return (
    <section id="simplesteps" className="simplesteps">
      <h2>Wystarczą 4 proste kroki</h2>
      <img
        src={decoration}
        className="decoration-line"
        alt="linia dekoracyjna"
      />
      <div className="fourcolumns">
        {simplestepsColumns.map(({icon, icon_alt, title, text}, idx) => (
          <div className="column" key={idx}>
            <img src={icon} alt={icon_alt} className="column-icon" />
            <h3 className="column-title">{title}</h3>
            <hr className="column-line" />
            <p className="column-description">{text}</p>
          </div>
        ))}
      </div>
      <button
        className="btn btn-header"
        onClick={() => navigate("/oddaj-rzeczy")}
      >
        Oddaj
        <br />
        rzeczy
      </button>
    </section>
  );
}
