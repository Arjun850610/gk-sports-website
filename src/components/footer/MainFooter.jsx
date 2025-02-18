import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const MainFooter = () => {
  const [date, setdate] = useState(new Date())
  const policies = [
    { text: "Terms & Conditions", link: "/terms" },
    { text: "Privacy Policy", link: "/privacy-policy" },
    { text: "Refund and Cancellation", link: "/refund-cancellation-policy" },
  ];

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
    <footer className="">
      <div className="custom-container !bg-black border-t-2 border-primary !pt-10 !pb-0">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:max-w-xl mb-6 md:mb-0 flex flex-col gap-4">
            <img src={logo} alt="Logo" className="w-20 h-20 " />

            <p className="text-sm lg:text-base max-w-[70%]">
              Gametosa is India's #1 mobile Esports hosting and gaming platform,
              offering a wide range of online tournaments, live gaming events,
              and an engaging community for gamers.
            </p>
          </div>
          <div className="lg:w-1/3 w-full mb-6 md:mb-0">
            <h4 className="font-medium text-xl mb-4">Quick Links</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 lg:gap-2">
              {links?.map((item, index) => (
                <a
                  href={item?.link}
                  key={index}
                  className="hover:text-primary transition-all ease-in-out duration-300"
                >
                  {item?.name}
                </a>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/3">
            <h4 className="font-bold mb-4 text-xl">Policies</h4>
            <ul className="">
              {policies.map((policy, index) => (
                <li key={index} className="mb-2">
                  <Link
                    to={policy?.link}
                    className="hover:text-primary transition-all ease-in-out duration-300 text-nowrap"
                  >
                    {policy.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-sm">
          <p>&copy; {date.getFullYear()} GK-ESPORTS | All rights reserved.</p>
          <p className="mt-4">
            GK sports & Gaming is not endorsed by any game publishe
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
