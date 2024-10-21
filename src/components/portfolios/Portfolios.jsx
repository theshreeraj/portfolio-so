import React from "react";
import PortfolioCard from "../portfolioCard/PortfolioCard";
import "./Portfolios.css";
import sharvariAlawekar from "../../assets/portfoliohero/sharvari-alawekar-hero.png";
import gauriPawar from "../../assets/portfoliohero/gauri-pawar-hero.png";
import abhijeetmane from "../../assets/portfoliohero/abhijeet-mane-hero.png";
import shahrukhnangur from "../../assets/portfoliohero/shahruk-nangur-hero.png";
import eshwarlalpotu from "../../assets/portfoliohero/eshwar-lalpotu-hero.png";

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
    user4: {
      "portfolio-hero": shahrukhnangur,
      "profile-photo":
        "https://media.licdn.com/dms/image/v2/D4D03AQHfoRFEqRcjbA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705036734621?e=2147483647&v=beta&t=T-UOnisaDtSARkNYX0pPQpPfOIfnKvGgdzQySZhEME4",
      username: "Shahrukh Nangur",
      title: "Full Stack Developer",
      portfoliolink: "https://portfolio-shahrukh.vercel.app/",
      linkedIn: "www.linkedin.com/in/shahrukh-nagnur",
      "profile-photo":
        "https://media.licdn.com/dms/image/v2/D4D03AQHfoRFEqRcjbA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1705036734621?e=2147483647&v=beta&t=T-UOnisaDtSARkNYX0pPQpPfOIfnKvGgdzQySZhEME4",
      username: "Shahrukh Nangur",
      title: "Full Stack Developer",
      portfoliolink: "https://portfolio-shahrukh.vercel.app/",
      linkedIn: "www.linkedin.com/in/shahrukh-nagnur",
    },
    user5: {
      "portfolio-hero": eshwarlalpotu,
      "profile-photo":
        "https://media.licdn.com/dms/image/v2/D4D03AQEvYU0IdjOUlw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715325501490?e=2147483647&v=beta&t=sxiqEYJlbk-AA4E16UKWTCHCkzu6aIeiR3Lo8qB8cEY",
      username: "Eshwar Lalpotu",
      title: "Full Stack Developer",
      portfoliolink: "https://eshwar-devv-test.vercel.app/",
      linkedIn: "https://www.linkedin.com/in/eshwar-lalpotu",
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
