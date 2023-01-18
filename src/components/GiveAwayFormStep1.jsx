import React, {useState, useEffect} from "react";

export default function GiveAwayFormStep1() {
  return (
    <div className="form-step step1">
      <h2>Krok 1/4</h2>
      <h1>Zaznacz co chcesz oddać:</h1>
      <div className="step1-checkboxes">
        <input type="checkbox" id="reuseClothes" name="" autoFocus />
        <label htmlFor="reuseClothes">
          ubrania, które nadają się do ponownego użycia
        </label>
        <input type="checkbox" id="throwawayClothes" name="" />
        <label htmlFor="throwawayClothes">ubrania, do wyrzucenia</label>
        <input type="checkbox" id="toys" name="" />
        <label htmlFor="toys">zabawki</label>
        <input type="checkbox" id="books" name="" />
        <label htmlFor="books">książki</label>
        <input type="checkbox" id="other" name="" />
        <label htmlFor="other">inne</label>
      </div>
    </div>
  );
}
