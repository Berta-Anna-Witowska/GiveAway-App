import React from "react";
import {useNavigate} from "react-router-dom";
import {Link} from "react-scroll";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="navBar">
        <button className="btn" onClick={() => navigate("/")}>
          Start
        </button>
        <Link
          activeClass="active"
          className="btn"
          to="simplesteps"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          O co chodzi?
        </Link>
        <Link
          activeClass="active"
          className="btn"
          to="aboutus"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          O nas
        </Link>
        <Link
          activeClass="active"
          className="btn"
          to="whodowehelp"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Fundacja i organizacje
        </Link>
        <Link
          activeClass="active"
          className="btn"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          Kontakt
        </Link>
      </nav>
    </>
  );
}
