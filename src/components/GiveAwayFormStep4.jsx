import React, {useState, useEffect} from "react";

export default function GiveAwayFormStep4() {
  return (
    <form className="form-step step4">
      <h2 className="step-number">Krok 4/4</h2>
      <h1>Podaj adres oraz termin odbioru rzeczy przez kuriera</h1>
      <div className="step4-form">
        <div className="adress-box">
          <h3>Adres odbioru:</h3>
          <label htmlFor="street">Ulica</label>
          <input type="text" id="street" name="" />
          <label htmlFor="city">Miasto</label>
          <input type="text" id="city" name="" />
          <label htmlFor="postalcode">Kod pocztowy</label>
          <input type="text" id="postalcode" name="" />
          <label htmlFor="phonenumber">Numer telefonu</label>
          <input type="text" id="phonenumber" name="" />
        </div>
        <div className="time-box">
          <h3>Termin odbioru:</h3>
          <label htmlFor="date">Data</label>
          <input type="text" id="date" name="" />
          <label htmlFor="time">Godzina</label>
          <input type="text" id="time" name="" />
          <label htmlFor="note">Uwagi dla kuriera</label>
          <input type="text" id="note" name="" />
        </div>
      </div>
    </form>
  );
}
