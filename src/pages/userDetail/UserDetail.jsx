import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // To get the userId from the URL
import "./UserDetail.css";

const UserDetail = () => {
  const { userId } = useParams(); // Get the userId from the URL
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/users/${userId}`
        );
        setUserDetails(response.data); // Set the user details state
        setLoading(false); // Set loading to false
      } catch (error) {
        console.error("Error fetching user details:", error);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchUserDetails(); // Call the function to fetch user details
  }, [userId]); // Re-fetch if the userId changes

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userDetails) {
    return <div>No user found</div>;
  }

  return (
    <div className="main-user-details">
      <div className="user-detail-container">
        <div className="user-detail-card">
          <div className="user-detail-dp">
            <img src={userDetails.profilePhoto} alt={userDetails.name} />
          </div>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginTop: "1rem",
              marginBottom: "1rem",
            }}
          >
            <button className="badge-btn">Connect</button>
            <button className="badge-btn">Resume</button>
            <button className="badge-btn">Copy Email</button>
          </div>
          <div className="user-detail-content">
            <h1>{userDetails.name}</h1>
            <div className="row-one">
              <p>{userDetails.name}</p>
              <p>{userDetails.graduationYear}</p>
              <p>
                Joined: {new Date(userDetails.createdAt).toLocaleDateString()}
              </p>
            </div>

            <div className="row-two">
              <div>
                <h5>{userDetails.description}</h5>
                <p>Designation</p>
              </div>
              <div>
                <h5>{userDetails.experienceCategory}</h5>
                <p>Experience</p>
              </div>
            </div>
            <p>
              {userDetails.name} is a passionate {userDetails.description}.
            </p>

            <div>
              <h3>Skills</h3>
              <div style={{ display: "flex", gap: "1rem" }}>
                {/* Display skills if available */}
                <p className="badge-btn">HTML</p>
                <p className="badge-btn">CSS</p>
                <p className="badge-btn">JavaScript</p>
                <p className="badge-btn">React.js</p>
                <p className="badge-btn">Node.js</p>
                <p className="badge-btn">Express.js</p>
                <p className="badge-btn">MongoDB</p>
                <p className="badge-btn">GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
