import React from "react";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">India</div>
      <div className="footer-bottom">
        <div className="footer-left">
          <a href="#">Advertising</a>
          <a href="#">Business</a>
          <a href="#">How Search works</a>
        </div>
        <div className="footer-right">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Settings</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;