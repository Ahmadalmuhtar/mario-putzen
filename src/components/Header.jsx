import React from "react";
import "../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="company-info">
        <img
          src="/path-to-your-logo.png"
          alt="Company Logo"
          className="company-logo"
        />
        <h1>Mario Putzen</h1>
      </div>
      <div className="contact-info">
        <div className="contact-item">
          <FontAwesomeIcon icon={faPhone} className="contact-icon" />
          <span className="contact-detail">+49 1520 2080771</span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          <span className="contact-detail">
            Mail Us Marioputzen25@gmail.com
          </span>
        </div>
        <div className="contact-item">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
          <span className="contact-detail">
            Labharswegstraße 9 78462 Konstanz
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
