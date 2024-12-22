import React, { useState } from "react";
import axios from "axios";
import "./PortForm.css";

const PortForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    graduationYear: "",
    portfoliolink: "",
    linkedIn: "",
    description: "",
    portfolioHero: null,
    profilePhoto: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("graduationYear", formData.graduationYear);
    data.append("portfoliolink", formData.portfoliolink);
    data.append("linkedIn", formData.linkedIn);
    data.append("description", formData.description);
    if (formData.portfolioHero) {
      data.append("portfolioHero", formData.portfolioHero);
    }
    if (formData.profilePhoto) {
      data.append("profilePhoto", formData.profilePhoto);
    }

    try {
      const response = await axios.post("http://localhost:8000/api/users", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Portfolio created successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error creating portfolio. Please try again.");
    }
  };

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="form-col-container">
            <div className="left-column">
              <div>
                <p>
                  <label htmlFor="portfolioHero">
                    Upload Hero Section of Portfolio
                  </label>
                </p>
                <input
                  className="form-input"
                  type="file"
                  name="portfolioHero"
                  onChange={handleChange}
                />
              </div>
              <div>
                <p>
                  <label htmlFor="name">Enter Your Name</label>
                </p>
                <input
                  className="form-input"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <p>
                  <label htmlFor="email">Enter Your Email</label>
                </p>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="johndoe@gmail.com"
                />
              </div>
              <div>
                <p>
                  <label htmlFor="graduationYear">Graduation Year</label>
                </p>
                <input
                  className="form-input"
                  type="date"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="right-column">
              <div>
                <p>
                  <label htmlFor="profilePhoto">Upload Your Photo</label>
                </p>
                <input
                  className="form-input"
                  type="file"
                  name="profilePhoto"
                  onChange={handleChange}
                />
              </div>
              <div>
                <p>
                  <label htmlFor="portfoliolink">Portfolio Link</label>
                </p>
                <input
                  className="form-input"
                  type="text"
                  name="portfoliolink"
                  value={formData.portfoliolink}
                  onChange={handleChange}
                  placeholder="https://johndoe.vercel.app/"
                />
              </div>
              <div>
                <p>
                  <label htmlFor="linkedIn">LinkedIn Link</label>
                </p>
                <input
                  className="form-input"
                  type="text"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleChange}
                  placeholder="https://in.linkedin.com/in/john-doe"
                />
              </div>
              <div>
                <p>
                  <label htmlFor="description">Describe About Yourself</label>
                </p>
                <input
                  className="form-input"
                  type="text"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Full Stack Developer with a penchant for technology."
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
            <button className="form-btn" type="submit">
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PortForm;
