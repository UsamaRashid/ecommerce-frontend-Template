import React from "react";
import HeroSection from "../components/HeroSection";
import HomeStats from "../components/HomeStats";
import FeaturedProducts from "../components/FeaturedProducts";
import ProductOverview from "../components/ProductOverview";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomeStats />
      <FeaturedProducts />
      <ProductOverview />
    </>
  );
};

export default Home;
