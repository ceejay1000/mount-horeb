import React from "react";
import interim2 from "../../interim2.svg";
import "./whatNext-styles.css";

const buttonInfo = [
  "Become a partner",
  "Become a Member",
  "Welcome Meal",
  "Men's Fellowship",
  "Women's Fellowship",
  "Youth and Children",
];

const WhatNext = () => {
  return (
    <div className="what-next-container">
      <h2 className="what-next-heading">WHAT NEXT?</h2>
      <img className="interimImage" src={interim2} alt="Interim" />
      <div className="what-next-buttons">
        {buttonInfo.map((info, index) => (
          // <div className="what-next-button-container">
            <button key={index} className="what-next-button">
              {info}
            </button>
          // </div>
        ))}
      </div>
    </div>
  );
};

export default WhatNext;
