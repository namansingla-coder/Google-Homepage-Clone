import React from "react";
import "../CSS/Header.css";
import { IoApps } from "react-icons/io5";
import { ImLab } from "react-icons/im";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <a href="https://www.google.com/">About</a>
        <a href="https://www.google.com/">Store</a>
      </div>
      <div className="header-right">
        <a href="https://www.google.com/">Gmail</a>
        <a href="https://www.google.com/">Images</a>
        <a href="https://www.google.com/" className="icon"><ImLab/></a>
        <a href="https://www.google.com/" className="icon"><IoApps/></a>
        <a href="https://www.google.com/" id="profile-circle">N</a>
      </div>
    </div>
  );
};

export default Header;