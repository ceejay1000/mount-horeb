import React from "react";
import "./separator.css";

const Separator = ({type}) => {
  return (
    <div className="container">
      <h1 id={type}>...</h1>
    </div>
  );
};

export default Separator;
