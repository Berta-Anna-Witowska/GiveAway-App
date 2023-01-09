import React from "react";

import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-copyright">Copyright by Coders Lab</span>
      <div className="footer-socialmedia">
        <a href="https://www.facebook.com/">
          <img src={facebook} alt="ikona facebook" />
        </a>
        <a href="https://www.instagram.com/">
          <img src={instagram} alt="ikona instagram" />
        </a>
      </div>
    </footer>
  );
}
