import React from "react";
import "./PortfolioCard.css";
import { Link } from "react-router-dom";

const PortfolioCard = ({ user }) => {
  return (
    <div className="portfolio-card">
      <div className="portfolio-web">
        <img src={user["portfolio-hero"]} alt="" />
      </div>
      <div className="user-dp">
        <img
          className="userImg"
          src={user["profile-photo"]}
          alt={user.username}
        />
      </div>
      <div className="portfolio-content">
        <h3>{user.username}</h3>
        <p>{user.title}</p>
        <button className="card-btn">Portfolio</button>
        <Link to="/userDetails">
          <button className="card-btn">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default PortfolioCard;
