import React from "react";
import "./Footer.css";
import Github from "../../assets/github.png";
import Linkdin from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <img src={Github} alt="" />
          <img src={Linkdin} alt="" />
        </div>

        <div className="logo-footer">
          <img src={Logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f-1"></div>
      <div className="blur blur-f-2"></div>
    </div>
  );
};

export default Footer;
