import React from "react";
import "./Landing.css"; // Assuming you create a Hero.css for the styles

const Landing = () => {
  return (
    <div className="hero">
      <h1>Work.so</h1>
      <p>
        Curated <code>Portfolios</code>from <ins>Experienced folks</ins> to{" "}
        <mark>Freshers</mark>.
      </p>
      <p style={{ paddingTop: "1rem" }}>
        So, to get featured Do Work, Show Work & Get Work
      </p>
    </div>
  );
};

export default Landing;
