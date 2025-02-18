"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import Heading from "../common/Heading";

const reviews = [
  {
    name: "Shankar",
    winnings: "₹26 Lacs",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "Just awesome apk ... Withdrawal section of this apk is very smooth... takes less than 2 min to withdraw money.. I love it...",
  },
  {
    name: "Pradeep",
    winnings: "₹13 Lacs",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    review:
      "I have been playing for almost a year. Their Fantasy Cricket format is best & easy to win. Withdrawal experience is the best as they provide instant withdrawal.",
  },
  {
    name: "Ram",
    winnings: "₹23 Lacs",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "I am Ram from Delhi. I won a total of 23 Lakhs & I was the 1st on the monthly leaderboard of June Month. I love playing on KA.",
  },
  {
    name: "Shankar",
    winnings: "₹26 Lacs",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    review:
      "Just awesome apk ... Withdrawal section of this apk is very smooth... takes less than 2 min to withdraw money.. I love it...",
  },
  {
    name: "Pradeep",
    winnings: "₹13 Lacs",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    review:
      "I have been playing for almost a year. Their Fantasy Cricket format is best & easy to win. Withdrawal experience is the best as they provide instant withdrawal.",
  },
  {
    name: "Ram",
    winnings: "₹23 Lacs",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    review:
      "I am Ram from Delhi. I won a total of 23 Lakhs & I was the 1st on the monthly leaderboard of June Month. I love playing on KA.",
  },
];

const ReviewSection = () => {
  return (
    <div
      id="reviews"
      className="relative custom-container flex flex-col gap-5 lg:gap-10 lg:text-lg text-center"
    >
      <Heading Heading={"Reviews"} />

      <div className="w-[80%] lg:w-full mx-auto relative">
        {/* Left Navigation Button */}
        <div className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 text-primary text-3xl cursor-pointer z-10">
          <FaAngleDoubleLeft className="swiper-button-prev" />
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1} // default for small screens
          autoplay={{
            delay: 3000, // Auto-slide every 3 seconds
            disableOnInteraction: false, // Keeps autoplay active even after interacting with the carousel
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            enabled: true,
            renderBullet: (index, className) => {
              return `<span class="${className} !bg-primary !w-10 !h-2 !rounded-lg custom-bullet"></span>`;
            },
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1, // 1 slide for small screens
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2, // 2 slides for medium screens
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3, // 3 slides for large screens
              spaceBetween: 30,
            },
          }}
        >
          {reviews.map((review, index) => (
            <SwiperSlide key={index} className="pb-16">
              <div className="text-white h-full p-6 border-2 border-primary rounded-3xl flex flex-col items-center gap-4 shadow-lg w-full">
                {/* User Image */}
                <div className="w-20 h-20 rounded-full border-2 border-primary overflow-hidden">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm lg:text-base">{review.review}</p>
                  <p className="text-primary text-lg font-semibold mt-2">
                    {review.name}
                  </p>
                  <p className="text-primary/90 text-xs lg:text-sm">
                    Won {review.winnings}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Navigation Button */}
        <div className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 text-primary text-3xl cursor-pointer z-10">
          <FaAngleDoubleRight className="swiper-button-next" />
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
