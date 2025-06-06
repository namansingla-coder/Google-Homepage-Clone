import React from "react";
import "../CSS/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">India</div>
      <div className="footer-bottom">
        <div className="footer-left">
          <a href="https://business.google.com/">Advertising</a>
          <a href="https://business.google.com/">Business</a>
          <a href="https://www.google.com/search/howsearchworks/?fg=1">How Search works</a>
        </div>
        <div className="footer-right">
          <a href="https://policies.google.com/privacy?hl=en-IN&fg=1">Privacy</a>
          <a href="https://policies.google.com/terms?hl=en-IN&fg=1">Terms</a>
          <a href="https://www.google.com/">Settings</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;