import React from "react";
import "./Footer.css";

const Footer = () =>{
    return(
        <div className="footer">
           <ul class="nav footerUl justify-content-end">
            <li class="nav-item" id="contactIcon">
             <a class="nav-link" href={"https://www.linkedin.com/in/henrysaulnunez/"}
                    target="_blank">
<i class="devicon-linkedin-plain"></i>
             </a>
            </li>
            <li class="nav-item">
             <a class="nav-link" href={"https://github.com/Henrynunez112/"} target="_blank"><i class="devicon-github-plain"></i></a>
                </li>
  <li class="nav-item">
    <a class="nav-link" href={"https://twitter.com/stoic1190"} target="_blank"><i class="devicon-twitter-plain"></i></a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href={"https://the-dev-known-as-henrynunez.netlify.app"} target="_blank"><i class="devicon-chrome-plain"></i></a>
  </li>
</ul>
        </div>
    )
};
export default Footer;