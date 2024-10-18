import React from "react";
import "./PortfolioCard.css";
import { Link } from "react-router-dom";

const PortfolioCard = ({ user }) => {
  return (
    <div className="portfolio-card">
      <div className="portfolio-web">
        <img src={user["portfolio-hero"]} alt="" />
      </div>
      {/* <div className="user-dp">
        <img
          className="userImg"
          src={user["profile-photo"]}
          alt={user.username}
        />
      </div> */}
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
          <p>{user.title}</p>
          <a href={user.portfoliolink} target="_blank" rel="noreferrer">
            {" "}
            <button className="card-btn">Portfolio</button>
          </a>
          <Link to="/userDetails">
            <button className="card-btn">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
