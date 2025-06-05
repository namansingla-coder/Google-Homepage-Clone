import React from "react";
import "../CSS/Header.css";
import { IoApps } from "react-icons/io5";
import { ImLab } from "react-icons/im";

const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <a href="#">About</a>
        <a href="#">Store</a>
      </div>
      <div className="header-right">
        <a href="#">Gmail</a>
        <a href="#">Images</a>
        <a href="#" className="icon"><ImLab/></a>
        <a href="#" className="icon"><IoApps/></a>
        <a href="#" id="profile-circle">N</a>
      </div>
    </div>
  );
};

export default Header;