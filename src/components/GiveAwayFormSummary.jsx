import React, {useState, useEffect} from "react";

export default function GiveAwayFormSummary() {
  return (
    <div className="form-summary">
      <h1>Podsumowanie Twojej darowizny</h1>
      <div className="summary-thingstogive">
        <h2>Oddajesz:</h2>
        <div>rzeczy do oddania</div>
        <div>lokalizacja</div>
      </div>
      <div className="summary-box">
        <div className="summary-adress">
          <h2>Adres odbioru:</h2>
          <div className="adress-data">dane adres</div>
        </div>
        <div className="summary-date">
          <h2>Termin odbioru:</h2>
          <div className="date-data">dane termin</div>
        </div>
      </div>
    </div>
  );
}
