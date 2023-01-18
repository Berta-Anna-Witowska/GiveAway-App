import React, {useState, useEffect} from "react";

import decoration from "../assets/Decoration.svg";

export default function GiveAwayFormThanks() {
  return (
    <div className="thanks-div">
      <h1>
        Dziękujemy za przesłanie formularza
        <br /> Na maila prześlemy wszelkie informacje o odbiorze.
      </h1>
      <img src={decoration} alt="linia dekoracyjna" />
    </div>
  );
}
