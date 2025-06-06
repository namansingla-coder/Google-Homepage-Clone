// Header.js
import React from "react";
import "../CSS/Header.css";
import { IoApps } from "react-icons/io5";
import { ImLab } from "react-icons/im";

const Header = ({ onAppsClick }) => {
  return (
    <div className="header">
      <div className="header-left">
        <a href="https://about.google.com/">About</a>
        <a href="https://store.google.com/">Store</a>
      </div>
      <div className="header-right">
        <a href="https://www.gmail.com/">Gmail</a>
        <a href="https://www.google.com/imghp?hl=en&authuser=0&ogbl">Images</a>
        <span className="icon"><ImLab /></span>
        <span className="icon" onClick={onAppsClick}><IoApps /></span>
        <a href="#" id="profile-circle">N</a>
      </div>
    </div>
  );
};

export default Header;