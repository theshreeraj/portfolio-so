import React from "react";
import JobCard from "../jobCard/JobCard";
import "./FeaturedJobs.css";

const FeaturedJobs = () => {
  return (
    <>
      <h3 style={{ marginTop: "35px", marginBottom: "35px" }}>Featured Jobs</h3>
      <div className="featuredJobs-container">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </div>
    </>
  );
};

export default FeaturedJobs;
