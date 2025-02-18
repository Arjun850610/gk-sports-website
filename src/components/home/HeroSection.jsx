import React from "react";
import heroImage from "../../assets/mobile.png";
import { FaApple, FaAndroid } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="w-full lg:!h-[90vh] custom-container !pt-28 lg:pt-32 text-white grid grid-cols-1  lg:grid-cols-2 gap-10 lg:gap-10">
      {/* Hero Image */}
      <div className="w-full lg:h-[50%] order-2">
        <img
          src={heroImage}
          alt="heroImage"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="w-full flex flex-col items-start gap-5 order-1">
        {/* Text Content */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-center lg:text-start mt-6 text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50 shadow-lg transform hover:scale-105 transition-all duration-300">
          Turn Your Passion <br /> Into Your Career!
        </h1>

        <p className="text-lg md:text-xl text-start mt-2">
          Get started with us today. Grow in an Esports ecosystem with gamers &
          organizers alike. Get started with us today. Grow in an Esports
          ecosystem with gamers & organizers alike. Get started with us today.
          Grow in an Esports ecosystem with gamers & organizers alike.
        </p>

        {/* GST Refund Highlight */}
        <div className="bg-gradient-to-b from-yellow-400 to-yellow-600 text-black px-6 py-3 mt-6 rounded-lg border border-yellow-500 text-center">
          <p className="text-2xl font-bold">
            12 Lakhs + <span className="text-black">GST Refund</span>
          </p>
          <p className="text-lg font-semibold">Everyday</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
