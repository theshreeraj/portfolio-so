import React from "react";
import PortfolioCard from "../portfolioCard/PortfolioCard";
import "./Portfolios.css";

// Import your JSON data
const jsonData = {
    "users": {
        "user1": {
            "portfolio-hero": "https://theshreeraj.vercel.app/assets/Unboxproj-d7e76be6.png",
            "profile-photo": "https://theshreeraj.vercel.app/assets/Unboxproj-d7e76be6.png",
            "username": "Naved Shaikh",
            "title": "Full Stack Developer",
            "portfolio-link": "https://theshreeraj.vercel.app/",
            "linkedIn": "https://theshreeraj.vercel.app/"
        },
        "user2": {
            "portfolio-hero": "https://theshreeraj.vercel.app/assets/Unboxproj-d7e76be6.png",
            "profile-photo": "https://theshreeraj.vercel.app/assets/Unboxproj-d7e76be6.png",
            "username": "Naved Shaikh",
            "title": "Full Stack Developer",
            "portfolio-link": "https://theshreeraj.vercel.app/",
            "linkedIn": "https://theshreeraj.vercel.app/"
        }
    }
};

const Portfolios = () => {
  const users = Object.values(jsonData.users);

  return (
    <>
      <h3 style={{ marginTop: "35px", marginBottom: "35px" }}>Portfolios</h3>
      <div className="portfolio-container">
        {users.map((user, index) => (
          <PortfolioCard key={index} user={user} />
        ))}
      </div>
    </>
  );
};

export default Portfolios;
