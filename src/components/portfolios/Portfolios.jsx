import React from "react";
import PortfolioCard from "../portfolioCard/PortfolioCard";
import "./Portfolios.css";

// Import your JSON data
const jsonData = {
  users: {
    user1: {
      "portfolio-hero": "https://gauriportfolioo.netlify.app/assets/Yummyy.png",
      "profile-photo": "https://gauriportfolioo.netlify.app/assets/snap1.jpg",
      username: "Gauri Pawar",
      title: "Full Stack Developer",
      portfoliolink: "https://gauriportfolioo.netlify.app/",
      linkedIn: "https://www.linkedin.com/public-profile/settings",
    },
    user2: {
      "portfolio-hero":
        "https://cdn.prod.website-files.com/65c14454c8e90beca1ee62a8/66a3fbde52d372acd84dbc8a_Nicolas%20Pellegrino%20-%20Wall%20of%20portfolios-p-1080.png",
      "profile-photo":
        "https://cdn.prod.website-files.com/65c14454c8e90beca1ee62a8/66a3fc675edfcd6748a0ee72_1709600949949-p-500.jpeg",
      username: "Sharavari Alawekar",
      title: "Full Stack Developer",
      portfoliolink: "https://theshreeraj.vercel.app/",
      linkedIn: "https://theshreeraj.vercel.app/",
    },
    user3: {
      "portfolio-hero":
        "https://cdn.prod.website-files.com/65c14454c8e90beca1ee62a8/66a2661bd5567f2b8e84ff6f_Anirudh%20Goyal%20-%20Wall%20of%20portfolios-p-1080.png",
      "profile-photo":
        "https://cdn.prod.website-files.com/65c14454c8e90beca1ee62a8/668c0348723cdd9cbde90b5a_1718310107172.jpeg",
      username: "Aayan Inamdar",
      title: "Full Stack Developer",
      portfoliolink: "https://theshreeraj.vercel.app/",
      linkedIn: "https://theshreeraj.vercel.app/",
    },
    user4: {
      "portfolio-hero":
        "https://cdn.prod.website-files.com/65c14454c8e90beca1ee62a8/668a80d91de9f8ecb34c1541_Screenshot%202024-07-07%20at%205.15.51%20PM-p-1080.png",
      "profile-photo":
        "https://cdn.prod.website-files.com/65c14454c8e90beca1ee62a8/668a81590fbf2f23d89760ad_1719396842371-p-500.jpeg",
      username: "Anirudh Goyal",
      title: "Full Stack Developer",
      portfoliolink: "https://theshreeraj.vercel.app/",
      linkedIn: "https://theshreeraj.vercel.app/",
    },
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
