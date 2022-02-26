import React from "react";
import { Link } from "react-router-dom";
import "../css/NavBar.css";
import LOGO from "../images/LOGO.png";

const NavBar = () => {
  return (
    <>
      <header>
        <nav id="nav" className="navbar navbar-inverse navbar-fixed-top">
          <Link className="logo-title" to="/">
            <img id="nav-img" src={LOGO} alt="logo" />
            <h5 className="nav-title">Ekuulu Epi HOSTEL</h5>
          </Link>
          <ul className="link-container">
              <Link id="nav-link" to="/">Inicio</Link>
              <Link id="nav-link" to="/menu">Menú</Link>
              <Link id="nav-link" to="/login">Login</Link>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
