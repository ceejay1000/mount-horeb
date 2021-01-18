import React from "react";
import latestSermon from "./Latest_Sermon";
import "./header-styles.css";

const Header = () => {
  return (
    <div className="header-container">
      <img
        height="600px"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.5),rgba(0,0,0,.5)),url("assets/img/cross-on-bible-green.jpg")`,
        }}
        className="header-bg"
        alt="Header-img"
      />
      <div className="header-welcome">
        <h2 className="header-title">
          Welcome to <br /> Mount Horeb London
        </h2>
        <div className="header-buttons">
          {/* <div className="header-button-container"> */}
            <button className="header-button">Come on a Sunday</button>
          {/* </div> */}
          {/* <div className="header-button-container"> */}
            <button className="header-button">Come on a Thursday</button>
          {/* </div> */}
          {/* <div className="header-button-container"> */}
            <button className="header-button">Come on a Friday</button>
          {/* </div> */}
        </div>
      </div>
      
      <latestSermon />
    </div>
  );
};

export default Header;
