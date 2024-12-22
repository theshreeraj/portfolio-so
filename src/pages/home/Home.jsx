import React from "react";
import Navbar from "../../components/navbar/Navbar";
// import Hero from "../../components/hero/Hero";
import Categories from "../../components/categories/Categories";
import Footer from "../../components/footer/Footer";
import "./Home.css";
import Portfolios from "../../components/portfolios/Portfolios";
import Landing from "../../components/landing/Landing";
import FeaturedJobs from "../../components/featuredJobs/FeaturedJobs";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Hero /> */}
      <Landing />
      <div className="homepage-container">
        <Categories />
        <Portfolios />
        <FeaturedJobs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
