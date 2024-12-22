import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../../assets/logomain.png";
import "./JobCard.css";

const JobCard = () => {
  return (
    <div className="job-card">
      <div className="job-content">
        <div className="logo-container">
          <img src={companyLogo} alt="hello" />
        </div>
        <div>
          <h3>Senior Software Developer</h3>
          <p>
            <small>Rego Digital</small>
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          padding: "0 0.5rem 0.5rem 0.5rem",
        }}
      >
        <a href="#" target="_blank" rel="noreferrer">
          {" "}
          <button className="card-btn">Apply</button>
        </a>
        <Link to="/jobDetails">
          <button className="card-btn">Details</button>
        </Link>
      </div>
    </div>
  );
};

export default JobCard;
