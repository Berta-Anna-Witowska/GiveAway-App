import React, {useState, useEffect} from "react";

export default function GiveAwayFormStep2() {
  return (
    <form className="form-step step2">
      <h2 className="step-number">Krok 2/4</h2>
      <h1>Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:</h1>
      <div className="step2-select">
        <h2>Liczba 60l worków:</h2>
        <select>
          <option value="0">- wybierz -</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </form>
  );
}
