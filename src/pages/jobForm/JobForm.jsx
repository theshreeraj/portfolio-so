import React from "react";
import "./JobForm.css";

const JobForm = () => {
  return (
    <>
      <div className="form-container">
        <form action="">
          <div className="form-col-container">
            <div className="left-column">
              <div>
                <p>
                  {" "}
                  <label htmlFor="">Upload a logo of Company</label>
                </p>
                <input className="form-input" type="file" />
              </div>

              <div>
                <p>
                  {" "}
                  <label htmlFor="">Enter Job Title</label>
                </p>
                <input
                  className="form-input"
                  type="text"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <p>
                  {" "}
                  <label htmlFor="">Enter Job Description</label>
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
            </div>

            <div className="right-column">
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
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
            }}
          >
            {" "}
            <button className="form-btn">Submit Form</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default JobForm;
