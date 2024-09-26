import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Categories from "../../components/categories/Categories";
import Footer from "../../components/footer/Footer";
import "./Home.css";
import Portfolios from "../../components/portfolios/Portfolios";

const Home = () => {
  return (
    <div className="homepage-container">
      <Navbar />
      <Hero />
      <Categories />
      <Portfolios />
      <Footer />
    </div>
  );
};

export default Home;
