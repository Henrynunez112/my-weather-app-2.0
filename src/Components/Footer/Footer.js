import React from "react";
import "./Footer.css";

const Footer = () =>{
    return(
        <div className="footer">
           <ul class="nav footerUl justify-content-end">
            <li class="nav-item" id="contactIcon">
             <a class="nav-link active" href={"https://www.linkedin.com/in/henrysaulnunez/"}
                    target="_blank">
linkedin
             </a>
            </li>
            <li class="nav-item">
             <a class="nav-link" href="#">Link</a>
                </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
  </li>
</ul>
        </div>
    )
};
export default Footer;