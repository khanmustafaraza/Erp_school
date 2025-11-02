import React from "react";
import HomeFooter from "components/footer/homefooter/HomeFooter";
import Navbar from "components/navbar/Navbar";
import Hero from "components/hero/Hero";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HomeFooter />
    </>
  );
};

export default Home;
