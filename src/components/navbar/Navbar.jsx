import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <h3>Work.so</h3>
        </div>

        <div className="nav-menu">
          <Link to="/jobform">
            <button className="cta-btn">Post a Job</button>
          </Link>
          <Link to="/portfolioform">
            <button className="cta-btn">Submit Your Portfolio</button>
          </Link>
          <button className="cta-btn">Share on X</button>

          <Link to="/userdashboard">
            <button className="cta-btn">U</button>
          </Link>

          <Link to="/recruiterdashboard">
            <button className="cta-btn">R</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
