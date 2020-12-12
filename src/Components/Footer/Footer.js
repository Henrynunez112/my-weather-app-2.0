import React from "react";
import "./Footer.css";

const Footer = ({ theme }) => {

  const darkThemeFooter = {
    border: '3px solid #DA3633',
    backgroundColor: '#363537',
    transition: 'all 0.25s linear',
  }

  return (
    <div className="footer" style={theme === 'dark' ? darkThemeFooter : null}>
      <ul className="nav footerUl justify-content-around">
        <li className="nav-item" id="contactIcon">
          <a className="nav-link" href={"https://www.linkedin.com/in/henrysaulnunez/"}
            target="_blank" rel="noopener noreferrer">
            <i className="devicon-linkedin-plain"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={"https://github.com/Henrynunez112/"} target="_blank" rel="noopener noreferrer"><i className="devicon-github-plain"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={"https://twitter.com/stoic1190"} target="_blank" rel="noopener noreferrer"><i className="devicon-twitter-plain"></i></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={"https://the-dev-known-as-henrynunez.netlify.app"} target="_blank" rel="noopener noreferrer"><i className="devicon-chrome-plain"></i></a>
        </li>
      </ul>
    </div>
  )
};
export default Footer;