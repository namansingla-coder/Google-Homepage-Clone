import React, { useState, useRef } from "react";
import "../CSS/SearchBox.css";
import { IoMdSearch } from "react-icons/io";
import { BsFillMicFill } from "react-icons/bs";
import { IoCameraOutline } from "react-icons/io5";

const SearchBox = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);

  const handleClick = (e) => {
    // Avoid expand if mic or camera clicked
    if (
      e.target.closest(".icon-mic") ||
      e.target.closest(".icon-camera")
    ) {
      return;
    }
    setIsExpanded(true);
    inputRef.current?.focus();
  };

  return (
    <div className={`search-box ${isExpanded ? "expanded" : ""}`} onClick={handleClick}>
      <IoMdSearch className="icon icon-search" />
      <input
        type="text"
        ref={inputRef}
        placeholder="Search Google or type a URL"
      />
      <div className="icon">

      </div>
        <div className="icon-group">
            <div className="icon-mic">
                <BsFillMicFill className="icon" />
            </div>
            <div className="icon-camera">
                <IoCameraOutline className="icon" />
            </div>
        </div>
    </div>
  );
};

export default SearchBox;