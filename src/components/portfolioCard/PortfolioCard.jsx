import React from "react";
import "./PortfolioCard.css";
import { Link } from "react-router-dom";

const PortfolioCard = ({ user }) => {
  return (
    <div className="portfolio-card">
      <div className="portfolio-web">
        <img src={user["portfolio-hero"]} alt="" />
      </div>
      <div className="portfolio-content">
        <div className="user-dp">
          <img
            className="userImg"
            src={user["profile-photo"]}
            alt={user.username}
          />
        </div>
        <div>
          <h3>{user.username}</h3>
          <p>
            <small>{user.title}</small>
          </p>
          <a href={user.portfoliolink} target="_blank" rel="noreferrer">
            <button className="card-btn">Portfolio</button>
          </a>
          {/* This Link will navigate to the UserDetail page with the user's ID */}
          <Link to={`/user/${user._id}`}>
            <button className="card-btn">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
