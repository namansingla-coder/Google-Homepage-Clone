import React from "react";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">India</div>
      <div className="footer-bottom">
        <div className="footer-left">
          <a href="https://www.google.com/">Advertising</a>
          <a href="https://www.google.com/">Business</a>
          <a href="https://www.google.com/">How Search works</a>
        </div>
        <div className="footer-right">
          <a href="https://www.google.com/">Privacy</a>
          <a href="https://www.google.com/">Terms</a>
          <a href="https://www.google.com/">Settings</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;