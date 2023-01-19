import React, {useState, useEffect} from "react";

export default function GiveAwayFormStep3() {
  return (
    <form className="form-step step3">
      <h2 className="step-number">Krok 3/4</h2>
      <h1>Lokalizacja:</h1>
      <select>
        <option value="0">- Wybierz -</option>
        <option value="1">Poznań</option>
        <option value="2">Warszawa</option>
        <option value="3">Kraków</option>
        <option value="4">Poznań</option>
        <option value="5">Katowice</option>
      </select>
      <div className="step3-checkboxes">
        <h3>Komu chcesz pomóc?</h3>
        <div className="checkbox">
          <label htmlFor="children">
            <input type="checkbox" id="children" name="" />
            dzieciom
          </label>
        </div>
        <div className="checkbox">
          <label htmlFor="mothers">
            <input type="checkbox" id="mothers" name="" />
            samotnym matkom
          </label>
        </div>
        <div className="checkbox">
          <label htmlFor="homeless">
            <input type="checkbox" id="homeless" name="" />
            bezdomnym
          </label>
        </div>
        <div className="checkbox">
          <label htmlFor="disabled">
            <input type="checkbox" id="disabled" name="" />
            niepełnosprawnym
          </label>
        </div>
        <div className="checkbox">
          <label htmlFor="elderly">
            <input type="checkbox" id="elderly" name="" />
            osobom starszym
          </label>
        </div>
      </div>
      <h3>Wpisz nazwę konkretnej organizacji (opcjonalnie)</h3>
      <input type="text" id="localization"></input>
    </form>
  );
}
