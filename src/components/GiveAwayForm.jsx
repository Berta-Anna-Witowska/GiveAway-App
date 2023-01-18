import React, {useState, useEffect} from "react";
import GiveAwayFormStep1 from "./GiveAwayFormStep1";
import GiveAwayFormStep2 from "./GiveAwayFormStep2";
import GiveAwayFormStep3 from "./GiveAwayFormStep3";
import GiveAwayFormStep4 from "./GiveAwayFormStep4";
import GiveAwayFormSummary from "./GiveAwayFormSummary";
import GiveAwayFormThanks from "./GiveAWayFormThanks";

export default function GiveAwayForm() {
  return (
    <div className="giveaway-form">
      <div className="form-banner">
        <h1>Ważne!</h1>
        <p>
          {/* Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać. */}
          Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję
          jak poprawnie spakować rzeczy znajdziesz TUTAJ.
          {/* Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy. */}
          {/* Podaj adres oraz termin odbioru rzeczy. */}
        </p>
      </div>
      <GiveAwayFormStep1 />
      {/* <GiveAwayFormStep2 />
      <GiveAwayFormStep3 />
      <GiveAwayFormStep4 />
      <GiveAwayFormSummary />
      <GiveAwayFormThanks /> */}
      <span className="firm-buttons">
        <button>Wstecz</button>
        <button>Dalej/Wyślij</button>
      </span>
    </div>
  );
}
