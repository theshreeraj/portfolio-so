import React from "react";
import "./PortForm.css";

const PortForm = () => {
  return (
    <>
      <div className="form-container">
        <form action="">
          <div>
            <p>
              {" "}
              <label htmlFor="">Upload Hero Section of Portfolio</label>
            </p>
            <input className="form-input" type="file" />
          </div>

          <div>
            <p>
              {" "}
              <label htmlFor="">Upload Your Photo</label>
            </p>
            <input className="form-input" type="file" />
          </div>

          <div>
            <p>
              {" "}
              <label htmlFor="">Enter Your Name</label>
            </p>
            <input className="form-input" type="text" placeholder="John Doe" />
          </div>

          <div>
            <p>
              {" "}
              <label htmlFor="">Enter Your Email</label>
            </p>
            <input
              className="form-input"
              type="email"
              placeholder="johndoe@gmail.com"
            />
          </div>

          <div>
            <p>
              {" "}
              <label htmlFor="">Graduation Year</label>
            </p>
            <input className="form-input" type="date" placeholder="2023" />
          </div>

          <div>
            <p>
              {" "}
              <label htmlFor="">Portfolio Link</label>
            </p>
            <input
              className="form-input"
              type="text"
              placeholder="https://johndoe.vercel.app/"
            />
          </div>

          <div>
            <p>
              {" "}
              <label htmlFor="">LinkedIn Link</label>
            </p>
            <input
              className="form-input"
              type="text"
              placeholder="https://in.linkedin.com/in/john-doe"
            />
          </div>

          <div>
            <p>
              {" "}
              <label htmlFor="">Describe About Yourself</label>
            </p>
            <input
              className="form-input"
              type="text"
              placeholder="Full Stack Developer with penchant for technology."
            />
          </div>

          <button className="form-btn">Submit Form</button>
        </form>
      </div>
    </>
  );
};

export default PortForm;
