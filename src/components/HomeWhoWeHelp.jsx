import React from "react";
import decoration from "../assets/Decoration.svg";

export default function HomeWhoWeHelp() {
  return (
    <section id="whodowehelp" className="whodowehelp">
      <h2>Komu pomagamy?</h2>
      <img
        src={decoration}
        className="decoration-line"
        alt="linia dekoracyjna"
      ></img>
      <div className="whodowehelp-buttons">
        <button className="btn btn-whodowehelp">Fundacjom</button>
        <button className="btn btn-whodowehelp">
          Organizacjom
          <br />
          pozarządowym
        </button>
        <button className="btn btn-whodowehelp">
          Lokalnym
          <br />
          zbiórkom
        </button>
      </div>
      <p className="whodowehelp-description">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>
    </section>
  );
}
