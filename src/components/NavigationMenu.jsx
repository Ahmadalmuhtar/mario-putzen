import React from "react";
import "../styles/NavigationMenu.css";

const NavigationMenu = () => {
  return (
    <div className="navigation-menu">
      <a href="/" className="menu-item">
        Startseite
      </a>
      <a href="/connect-with-us" className="menu-item">
        Verbinde Dich Mit Uns
      </a>
    </div>
  );
};

export default NavigationMenu;
