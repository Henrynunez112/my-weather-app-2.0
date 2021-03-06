import React from "react";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

const NavBar = ({ theme }) => {

  const darkTheme = {
    backgroundColor: '#363537',
    border: '3px solid #388bfd',
    color: '#E2E2E2',
    transition: 'all 0.25s linear',
  }

  const darkToggler = {
    border: '3px solid #388bfd',
  }
  const lightToggler = {
    border: '3px solid #363537',
  }

  const darkToggleIcon = {
    backgroundColor: '#c77402',
    filter: 'invert(1)',
    borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px'
  }

  const darkThemeLogo = {
    border: '3px solid #e2b341',
    color: '#E2E2E2',
    transition: 'all 0.25s linear'
  }

  const lightText = {
    color: '#363537',
    transition: 'all 0.25s linear'
  }

  const darkText = {
    color: '#E2E2E2',
    transition: 'all 0.25s linear'
  }



  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top" style={theme === 'dark' ? darkTheme : null} >

        <a className="navbar-brand" href="/" style={theme === 'dark' ? darkThemeLogo : null}>
          <span id='brandedH'>H</span>enry's Widget App
      </a>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        style={theme === 'dark' ? darkToggler : lightToggler}
      >
        <span className="navbar-toggler-icon" style={theme === 'dark' ? darkToggleIcon : null}></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav" >
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/" style={theme === 'light' ? lightText : darkText}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/weather" style={theme === 'light' ? lightText : darkText}>Weather</NavLink>
          </li>
        </ul>
      </div>
    </nav >
  );
};
export default NavBar;
