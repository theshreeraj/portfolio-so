import React from "react";
import PortfolioCard from "../portfolioCard/PortfolioCard";
import "./Portfolios.css";
import sharvariAlawekar from "../../assets/portfoliohero/sharvari-alawekar-hero.png";
import gauriPawar from "../../assets/portfoliohero/gauri-pawar-hero.png";
import abhijeetmane from "../../assets/portfoliohero/abhijeet-mane-hero.png";

// Import your JSON data
const jsonData = {
  users: {
    user1: {
      "portfolio-hero": gauriPawar,
      "profile-photo": "https://shorturl.at/AO25X",
      username: "Gauri Pawar",
      title: "Full Stack Developer",
      portfoliolink: "https://gauriportfolioo.netlify.app/",
      linkedIn: "https://www.linkedin.com/public-profile/settings",
    },
    user2: {
      "portfolio-hero": sharvariAlawekar,
      "profile-photo": "https://shorturl.at/bFh30",
      username: "Sharavari Alawekar",
      title: "Full Stack Developer",
      portfoliolink: "https://sharvariportfolio.vercel.app/",
      linkedIn: "https://www.linkedin.com/in/sharvari-alavekar-88a333270/",
    },
    user3: {
      "portfolio-hero": abhijeetmane,
      "profile-photo": "https://shorturl.at/5JwyH",
      username: "Abhijeet Mane",
      title: "Full Stack Developer",
      portfoliolink: "https://abhijeet-mane-portfolio.vercel.app/",
      linkedIn: "https://www.linkedin.com/in/abhijeet-mane-07012000",
    },
    // user4: {
    //   "portfolio-hero":
    //     "https://cdn.prod.website-files.com/65c14454c8e90beca1ee62a8/668a80d91de9f8ecb34c1541_Screenshot%202024-07-07%20at%205.15.51%20PM-p-1080.png",
    //   "profile-photo":
    //     "https://cdn.prod.website-files.com/65c14454c8e90beca1ee62a8/668a81590fbf2f23d89760ad_1719396842371-p-500.jpeg",
    //   username: "Anirudh Goyal",
    //   title: "Full Stack Developer",
    //   portfoliolink: "https://theshreeraj.vercel.app/",
    //   linkedIn: "https://theshreeraj.vercel.app/",
    // },
  },
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
