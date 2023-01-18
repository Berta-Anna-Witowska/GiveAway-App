import React, {useState, useEffect} from "react";

export default function GiveAwayFormSummary() {
  return (
    <div className="form-summary">
      <h1>Podsumowanie Twojej darowizny</h1>
      <div>Oddajesz:</div>
      <div className="summary-box">
        <div className="summary-adress">Adres odbioru:</div>
        <div className="summary-date">Termin odbioru:</div>
      </div>
    </div>
  );
}
