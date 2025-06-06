import React from "react";
import "../CSS/AppMenu.css";
import { MdAccountCircle, MdEmail, MdCalendarToday } from "react-icons/md";
import { FaGoogleDrive, FaYoutube, FaGoogle } from "react-icons/fa";
import {
  SiGooglemaps,
  SiGooglemeet,
  SiGooglephotos,
  SiGoogletranslate,
  SiGooglenews
} from "react-icons/si";
import { GiSparkles } from "react-icons/gi";

const AppsMenu = () => {
  return (
    <div className="apps-popup">
      <div className="app-grid">
        <a href="https://myaccount.google.com" className="app-item" target="_blank" rel="noopener noreferrer">
          <MdAccountCircle className="app-icon" /> Account
        </a>
        <a href="https://drive.google.com" className="app-item" target="_blank" rel="noopener noreferrer">
          <FaGoogleDrive className="app-icon" /> Drive
        </a>
        <a href="https://mail.google.com" className="app-item" target="_blank" rel="noopener noreferrer">
          <MdEmail className="app-icon" /> Gmail
        </a>
        <a href="https://www.youtube.com" className="app-item" target="_blank" rel="noopener noreferrer">
          <FaYoutube id="youtube" className="app-icon" /> YouTube
        </a>
        <a href="https://gemini.google.com" className="app-item" target="_blank" rel="noopener noreferrer">
          <GiSparkles className="app-icon" /> Gemini
        </a>
        <a href="https://maps.google.com" className="app-item" target="_blank" rel="noopener noreferrer">
          <SiGooglemaps className="app-icon" /> Maps
        </a>
        <a href="https://www.google.com" className="app-item" target="_blank" rel="noopener noreferrer">
          <FaGoogle className="app-icon" /> Search
        </a>
        <a href="https://calendar.google.com" className="app-item" target="_blank" rel="noopener noreferrer">
          <MdCalendarToday className="app-icon" /> Calendar
        </a>
        <a href="https://news.google.com" className="app-item" target="_blank" rel="noopener noreferrer">
          <SiGooglenews className="app-icon" /> News
        </a>
        <a href="https://photos.google.com" className="app-item" target="_blank" rel="noopener noreferrer">
          <SiGooglephotos className="app-icon" /> Photos
        </a>
        <a href="https://meet.google.com" className="app-item" target="_blank" rel="noopener noreferrer">
          <SiGooglemeet className="app-icon" /> Meet
        </a>
        <a href="https://translate.google.com" className="app-item" target="_blank" rel="noopener noreferrer">
          <SiGoogletranslate className="app-icon" /> Translate
        </a>
      </div>
    </div>
  );
};

export default AppsMenu;