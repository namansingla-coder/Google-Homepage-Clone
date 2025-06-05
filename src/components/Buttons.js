import React from "react";
import "../CSS/Buttons.css";

const Buttons = ({ feelingLucky }) => {
  return (
    <div className="button-group">
      <button>Google Search</button>
      <button>{feelingLucky}</button>
    </div>
  );
};

export default Buttons;