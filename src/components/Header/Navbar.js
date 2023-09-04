import React, { useState } from "react";
import "./Navbar.css";
// import Zoom from "react-reveal/Zoom";
import { NavLink } from "react-router-dom";

// import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // <Zoom left>
    <nav className={`navbar ${isOpen ? "open" : ""} `}>
      <div className="navbar-logo">
        // <img src="images/logo.webp" alt="Logo" />
        <h1>COZA STORE</h1>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li className="navbar-link">
          <NavLink to="/home">Home</NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/shop">Shop</NavLink>
        </li>

        <li className="navbar-link">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/feature">Features</NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/blog">Blog</NavLink>
        </li>
        <li className="navbar-link">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
    // </Zoom>
  );
};

export default Navbar;
