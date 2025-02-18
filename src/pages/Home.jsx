import React from "react";
import HeroSection from "../components/home/HeroSection";
import AboutSection from "../components/home/AboutSection";
import PaymentPartners from "../components/home/PaymentPartners";
import FeaturesSection from "../components/home/FeaturesSection";
import ReviewSection from "../components/home/ReviewSection";
import GameCarousel from "../components/home/GameCarousel";

const Home = () => {
  return (
    <main className="">
      <HeroSection />
      <FeaturesSection />
      <GameCarousel />
      <PaymentPartners />
      <ReviewSection />
      <AboutSection />
    </main>
  );
};

export default Home;
