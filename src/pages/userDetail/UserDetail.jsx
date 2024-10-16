import React from "react";
import "./UserDetail.css";
import userDP from "../../assets/user1.jpeg";

const UserDetail = () => {
  return (
    <>
      <div className="user-detail-container">
        <div className="user-detail-card">
          <div className="pulse"></div>
          <div className="user-detail-dp">
            <img src={userDP} alt="" />
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <button className="">Connect</button>
            <button className="">Resume</button>
            <button className="">Copy Email</button>
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

            <div>
              <h3>Skills</h3>
              <div style={{ display: "flex", gap: "1rem" }}>
                <p className="badge-btn">HTML</p>
                <p className="badge-btn">CSS</p>
                <p className="badge-btn">Javascript</p>
                <p className="badge-btn">React.js</p>
                <p className="badge-btn">Node.js</p>
                <p className="badge-btn">Expess.js</p>
                <p className="badge-btn">Mongo DB</p>
                <p className="badge-btn">Postman</p>
                <p className="badge-btn">Vercel</p>
                <p className="badge-btn">Render</p>
                <p className="badge-btn">Github</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetail;
