import AboutSection from "@/components/AboutSection";
import Hero from "@/components/Hero";
import LatestProduct from "@/components/LatestProduct";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <LatestProduct />
    </div>
  );
};

export default Home;
