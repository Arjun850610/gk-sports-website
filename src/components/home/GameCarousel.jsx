"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import Heading from "../common/Heading";
import image from "../../assets/ludotoday.webp";

const games = [
  {
    title: "CallBreak",
    description:
      "CallBreak is a trick-based card game that demands skillful awareness and precise card play. Players must outsmart their opponents and win tricks to secure victory, all while strategizing their bids.",
    image: image,
  },
  {
    title: "Ludo Adda",
    description:
      "Enjoy the classic Ludo experience with modern twists and real-money challenges. Compete with friends or players worldwide to win big prizes and climb the leaderboard in this exciting board game.",
    image: image,
  },
  {
    title: "Rummy Adda",
    description:
      "Rummy Adda offers an engaging real-money experience with strategic gameplay. The game combines skill, strategy, and quick decision-making to form sets and sequences, aiming to reach the target score first.",
    image: image,
  },
  {
    title: "Quiz Time",
    description:
      "Test your knowledge with exciting quiz battles and win big prizes. With a variety of topics ranging from general knowledge to pop culture, this game is perfect for trivia enthusiasts and knowledge seekers.",
    image: image,
  },
];

const GameCarousel = () => {
  return (
    <div id="game-carousel" className="relative custom-container flex flex-col gap-5 lg:gap-10 lg:text-lg text-center">
      <Heading Heading={"Game Carousel"} />

      <div className="w-[90%] lg:w-full mx-auto relative">
        <div className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 !text-primary text-3xl cursor-pointer z-10">
          <FaAngleDoubleLeft className="swiper-button-prev" />
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
        //   centeredSlides={true}
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
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {games.map((game, index) => (
            <SwiperSlide key={index} className="pb-10">
              <div className="text-white h-full p-6 rounded-3xl flex flex-col items-center gap-4 w-full">
                <div className="w-60 h-60 rounded-3xl border-2 border-primary overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-primary font-semibold text-2xl mt-2">
                    {game.title}
                  </p>
                  <p className="lg:max-w-2xl">{game.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 text-red-500 text-3xl cursor-pointer z-10">
          <FaAngleDoubleRight className="swiper-button-next" />
        </div>
      </div>
    </div>
  );
};

export default GameCarousel;
