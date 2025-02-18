import React from "react";
import Heading from "../common/Heading";
import trofy from "../../assets/m502t0008_06jun22_trophy_02.png";
import withdrawal from "../../assets/instantwithdrawals.png";
import earnmembership from "../../assets/earnmembership.png";
import market from "../../assets/3d-representation-reselling-market.png";
import allTime from "../../assets/247.png";

const FeaturesSection = () => {
  const featuresData = [
    {
      image: trofy, // Replace with your image path
      title: "10 lakhs+ Monthly Rank Prizes",
    },
    {
      image: withdrawal, // Replace with your image path
      title: "Instant Withdrawals",
    },
    {
      image: market, // Replace with your image path
      title: "Lifetime Referral Deposit",
    },
    {
      image: earnmembership, // Replace with your image path
      title: "Earn Coins via Scratch Cards",
    },
    {
      image: allTime, // Replace with your image path
      title: "24x7 Live Support",
    },
  ];
  return (
    <section id="features" className="custom-container flex flex-col gap-5 lg:gap-10">
      <Heading Heading={"Features"} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 md:gap-10 gap-5">
        {featuresData?.map((data, index) => (
          <div
            key={index}
            className="w-full rounded-3xl p-5 text-center capitalize border-2 border-primary"
          >
            <img
              src={data?.image}
              alt={data?.title}
              className="w-full h-40 object-contain object-center"
            />
            <h4 className="text-2xl font-medium">{data?.title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
