import React from "react";
import "./footer-styles.css";
import { FaTwitter, FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";


const Footer = () => {
    return (
      <div className="footer-container">
        <div className="dark-footer">
          <div className="footer-content">
              <div>20 Passey Place, SE9 5DQ, Eltham, United Kingdom</div>
              <a href="#">info@mhvci.org</a>
          </div>
        </div>
        <div className="blue-footer">
        &copy; Copyright MOUNT HOREB VICTORIOUS CHURCH LONDON BRANCH
        <div className="footer-icons">
        <a className="footer-social-link" href="#">
            <FaTwitter className="icon-footer"  color="#ecf2e1"  />
          </a>
          <a className="footer-social-link" href="#">
            <FaInstagram className="icon-footer"  color="#ecf2e1"  />
          </a>
          <a className="footer-social-link" href="#">
            <FaFacebookF className="icon-footer"  color="#ecf2e1"  />
          </a>
          <a className="footer-social-link" href="#">
            <FaYoutube className="icon-footer"  color="#ecf2e1" />
          </a>
        </div>
        </div>
      </div>
    );
}

export default Footer
