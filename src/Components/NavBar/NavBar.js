import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Henry's Widget App
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link" exact to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/weather">Weather</NavLink>
          </li>
          {/* 
          <li className="nav-item">
            <NavLink className="nav-link">
              Pricing
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
