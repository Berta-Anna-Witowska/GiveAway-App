import React, {useState, useEffect} from "react";
import GiveAwayFormStep1 from "./GiveAwayFormStep1";
import GiveAwayFormStep2 from "./GiveAwayFormStep2";
import GiveAwayFormStep3 from "./GiveAwayFormStep3";
import GiveAwayFormStep4 from "./GiveAwayFormStep4";
import GiveAwayFormSummary from "./GiveAwayFormSummary";
import GiveAwayFormThanks from "./GiveAWayFormThanks";

export default function GiveAwayForm() {
  const [page, setPage] = useState(1);
  console.log(page);
  const [text, setText] = useState(
    "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."
  );

  const handleNextPage = () => {
    if (page === 1) {
      setPage(2);
      setText(
        "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."
      );
    }
    if (page === 2) {
      setPage(3);
      setText(
        "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy."
      );
    }
    if (page === 3) {
      setPage(4);
      setText("Podaj adres oraz termin odbioru rzeczy.");
    }
    if (page === 4) {
      setPage(5);
    }
    if (page === 5) {
      setPage(6);
    }
  };

  const handlePrevPage = () => {
    if (page === 2) {
      setPage(1);
      setText(
        "Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć komu najlepiej je przekazać."
      );
    }
    if (page === 3) {
      setPage(2);
      setText(
        "Wszystkie rzeczy do oddania zapakuj w 60l worki. Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz TUTAJ."
      );
    }
    if (page === 4) {
      setPage(3);
      setText(
        "Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę tej organizacji w wyszukiwarce. Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy."
      );
    }
    if (page === 5) {
      setPage(4);
      setText("Podaj adres oraz termin odbioru rzeczy.");
    }
    if (page === 6) {
      setPage(5);
    }
  };

  return (
    <div className="giveaway-form">
      {page <= 4 && (
        <div className="form-banner">
          <h1>Ważne!</h1>
          {text && <p>{text}</p>}
        </div>
      )}
      <div className="form-box">
        {page === 1 && <GiveAwayFormStep1 />}
        {page === 2 && <GiveAwayFormStep2 />}
        {page === 3 && <GiveAwayFormStep3 />}
        {page === 4 && <GiveAwayFormStep4 />}
        {page === 5 && <GiveAwayFormSummary />}
        {page === 6 && <GiveAwayFormThanks />}
        {page <= 5 && (
          <span className="form-buttons">
            {page > 1 && <button onClick={handlePrevPage}>Wstecz</button>}
            <button onClick={handleNextPage}>
              {page !== 5 ? "Dalej" : "Potwierdzam"}
            </button>
          </span>
        )}
      </div>
    </div>
  );
}
