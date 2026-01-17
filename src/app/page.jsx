import AboutSection from "@/components/AboutSection";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import LatestProduct from "@/components/LatestProduct";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutSection />
      <LatestProduct />
      <Stats />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Home;
