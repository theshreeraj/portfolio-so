import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import PortfolioCard from "../portfolioCard/PortfolioCard";
import "./Portfolios.css";

const Portfolios = () => {
  // State to hold the user data
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // To manage loading state

  // Fetch data from the API when the component mounts
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users/");
        setUsers(response.data); // Set the user data
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false); // Set loading to false even on error
      }
    };

    fetchUsers(); // Call the fetch function
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  // If data is still loading, display a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h3 style={{ marginTop: "35px", marginBottom: "35px" }}>Portfolios</h3>
      <div className="portfolio-container">
        {users.map((user, index) => (
          <PortfolioCard
            key={index}
            user={{
              "portfolio-hero": user.portfolioHero, // Use API data for portfolioHero
              "profile-photo": user.profilePhoto, // Use API data for profilePhoto
              username: user.name, // Use API data for username
              title: user.description, // Use API data for title
              portfoliolink: user.portfoliolink, // Use API data for portfoliolink
              linkedIn: user.linkedIn, // Use API data for linkedIn
              _id: user._id, // Pass the userId (_id) to the PortfolioCard
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Portfolios;
