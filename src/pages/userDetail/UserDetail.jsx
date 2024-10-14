import React from "react";
import "./UserDetail.css";
import userDP from "../../assets/user1.jpeg";

const UserDetail = () => {
  return (
    <>
      <div className="user-detail-container">
        <div className="user-detail-card">
          <div className="user-detail-dp">
            <img src={userDP} alt="" />
          </div>
          <div className="user-detail-content">
            <h1>Diego Mendes</h1>
            <div className="row-one">
              <p>Diego Mendes</p>
              <p>United States</p>
              <p>Joined October 7, 2024</p>
            </div>

            <div className="row-two">
              <div>
                <h5>Senior Product Design Manager </h5>
                <p>Designation</p>
              </div>
              <div>
                <h5>8+ years </h5>
                <p>Experience</p>
              </div>
            </div>
            <p>
              Diego Mendes is a Senior Product Design Manager for Video at
              Apple. Before joining Apple, he worked at Meta AR/VR, Facebook
              Stories, Pocket, Chegg, and Meebo. With a diverse design
              background, Diego has led impactful projects across multiple tech
              platforms.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
