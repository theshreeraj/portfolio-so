import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h3>Portfolio.so</h3>
          <p>Portfolios</p>
          <p>Case Studies</p>
        </div>

        <div className="nav-menu">
          <Link to="/form">
            <button className="cta-btn">Submit Your Portfolio</button>
          </Link>
          <button className="cta-btn">Share on X</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
