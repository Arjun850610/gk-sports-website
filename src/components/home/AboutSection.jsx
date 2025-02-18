import React, { useState, useRef, useEffect } from "react";
import Heading from "../common/Heading";

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  const expandedStyle = {
    maxHeight: isExpanded ? contentHeight + "px" : "0",
    overflow: "hidden",
    transition: "max-height 0.3s ease-in-out",
  };

  return (
    <div id="about" className="custom-container flex flex-col gap-5 lg:gap-10 lg:text-lg text-center">
      <Heading Heading={"ABOUT GK SPORTS"} />
      <p className="">
        Experience gaming like never before on India's biggest real-money gaming
        platform. Khiladi Adda offers a one-of-a-kind entertainment experience
        by fusing the fun of gaming with the excitement of real money.
      </p>
      <p className="">
        Experience gaming like never before on India's biggest real-money gaming
        platform. Khiladi Adda offers a one-of-a-kind entertainment experience
        by fusing the fun of gaming with the excitement of real money
        <span onClick={toggleExpansion} className="font-medium ml-1 text-primary cursor-pointer">
          {isExpanded ? "...Read Less" : "...Read More"}
        </span>
      </p>

      <div style={expandedStyle}>
        <div ref={contentRef}>
          <p className="mb-4">
            Play the best games that require skill and win real money. We have
            created a platform where trust is of the biggest significance
            because we believe in safe, trustworthy, and responsible real-money
            gaming. Exclusively 100% verified profiles are permitted on Khiladi
            Adda, which also only offers ethical skill-based games. No chance,
            no luck, use your skills to play games for real money instead. Play
            the best games that require skill and win real money. We have
            created a platform where trust is of the biggest significance
            because we believe in safe, trustworthy, and responsible real-money
            gaming. Exclusively 100% verified profiles are permitted on Khiladi
            Adda, which also only offers ethical skill-based games. No chance,
            no luck, use your skills to play games for real money instead. Play
            the best games that require skill and win real money. We have
            created a platform where trust is of the biggest significance
            because we believe in safe, trustworthy, and responsible real-money
            gaming. Exclusively 100% verified profiles are permitted on Khiladi
            Adda, which also only offers ethical skill-based games. No chance,
            no luck, use your skills to play games for real money instead.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
