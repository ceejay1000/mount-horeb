import React from "react";
import "./nav-styles.css";
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import {data} from '../../data/nav-data';
import { useState } from 'react';


const Nav = () => {
  let mobileNavActive = false;
  let [isActive, setActiveState] = useState(mobileNavActive);

  return (
    <div className="nav-container">
      {/* Logo */}
      <img
        className="logo"
        width="80px"
        height="80px"
        src="assets/img/logo_mount.png"
        alt=""
      />
      {/* Links */}

      {/* Burger-menu-icon */}
      <div className={`${isActive ? 'burgerActive': ''} burger-nav-icon`} onClick={ () =>  setActiveState(!isActive)}>
        <div></div>
        <div></div>
        <div></div>
      </div>


      <div className={`${isActive ? 'active': ''} left`}>
        <div className="nav-links">
          {data.map((datum, index) => {
            const { name, link } = datum;
            return (
              <NavLink
                key={index}
                exact
                to={link}
                activeStyle={{
                  color: "#333333",
                }}
                className="nav-link"
              >
                {name}
              </NavLink>
            );
          })}
        </div>
        {/* Social */}
        <div className="nav-social-links">
          <a className="nav-social-link" href="#">
            <FaTwitter className="icon" />
          </a>
          <a className="nav-social-link" href="#">
            <FaInstagram className="icon" />
          </a>
          <a className="nav-social-link" href="#">
            <FaFacebookF className="icon" />
          </a>
          <a className="nav-social-link" href="#">
            <FaYoutube className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Nav;
