"use client";
import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import BTNComp from "../common/BTNComp";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Game Carousel",
      link: "#game-carousel",
    },
    {
      name: "Payment Partners",
      link: "#payment-partners",
    },
    {
      name: "Reviews",
      link: "#reviews",
    },
  ];

  return (
    <>
      <header className="custom-container !bg-[#000] !bg-opacity-100 !py-4 shadow-sm shadow-white/20 fixed top-0 left-0 z-[5]">
        <div className=" mx-auto flex justify-between items-center">
          <Link to={"/"}>
            <img src={logo} alt="Logo" className="w-auto h-16" />
          </Link>

          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden text-white text-4xl">
            <FiMenu onClick={() => setMenuOpen(true)} />
          </div>

          {/* Navigation Links (Large Screens) */}
          <nav className="hidden lg:flex gap-6">
            {links?.map((item, index) => (
              <a
                href={item?.link}
                key={index}
                className="hover:text-primary transition-all ease-in-out duration-300"
              >
                {item?.name}
              </a>
            ))}
          </nav>

          {/* Download Button (Large Screens) */}

          <a
            href="/app-release.apk"
            target="_blank"
            className="lg:block hidden"
          >
            <BTNComp text={"Download Now"} />
          </a>
        </div>
      </header>

      {/* Sidebar Menu (Mobile) */}
      <div
        className={`fixed inset-0 !z-[5] w-full h-screen bg-black text-white flex justify-center items-center transition-transform ease-in-out duration-500
          ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div
          className="absolute top-4 right-4 text-white text-4xl cursor-pointer"
          onClick={() => setMenuOpen(false)}
        >
          <FiX />
        </div>

        <nav className="flex flex-col gap-6 text-center text-xl">
          {links?.map((item, index) => (
            <a
              href={item?.link}
              onClick={() => setMenuOpen(false)}
              key={index}
              className="hover:text-primary transition-all ease-in-out duration-300"
            >
              {item?.name}
            </a>
          ))}

          {/* Glowing Download Button */}
          <a href="/app-release.apk" target="_blank">
            <BTNComp text={"Download Now"} />
          </a>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
