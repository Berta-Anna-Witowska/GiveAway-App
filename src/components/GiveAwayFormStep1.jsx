import React, {useState, useEffect} from "react";

export default function GiveAwayFormStep1() {
  return (
    <form className="form-step step1">
      <h2 className="step-number">Krok 1/4</h2>
      <h1>Zaznacz co chcesz oddać:</h1>
      <div className="step1-checkboxes">
        <div className="step1-input">
          <input type="radio" id="reuseClothes" name="" autoFocus />
          <label htmlFor="reuseClothes">
            ubrania, które nadają się do ponownego użycia
          </label>
        </div>
        <div className="step1-input">
          <input type="radio" id="throwawayClothes" name="" />
          <label htmlFor="throwawayClothes">ubrania, do wyrzucenia</label>
        </div>
        <div className="step1-input">
          <input type="radio" id="toys" name="" />
          <label htmlFor="toys">zabawki</label>
        </div>
        <div className="step1-input">
          <input type="radio" id="books" name="" />
          <label htmlFor="books">książki</label>
        </div>
        <div className="step1-input">
          {" "}
          <input type="radio" id="other" name="" />
          <label htmlFor="other">inne</label>
        </div>
      </div>
    </form>
  );
}
