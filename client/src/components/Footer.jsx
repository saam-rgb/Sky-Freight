import React from "react";
// import logo from "/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { GiAirplaneDeparture } from "react-icons/gi";

export const Footer = () => {
  return (
    <div className="bg-secondary text-white px-10 py-8">
      <footer>
        {/* top section */}
        <div className="container mx-auto flex md:flex-row flex-col justify-between items-center my-10">
          {/* icon-navigation section */}
          <div className="md:w-1/2 w-full md:py-0 pb-6">
            <div className="flex items-center mb-10 gap-2">
              <GiAirplaneDeparture size={50} className="" />
              <p className="text-xl font-bold font-secondary sm:block hidden">
                SkyFreight
              </p>
            </div>
            <ul className="flex gap-4 ">
              <li>
                <a href="#" className="hover:text-primary">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary">
                  About
                </a>
              </li>
              <li>
                <a href="#track" className="hover:text-primary">
                  Tracking
                </a>
              </li>
            </ul>
          </div>
          {/* newsletter section */}
          <div className="md:w-1/2 w-full">
            <p className="mb-4">
              Subscribe to our newsletter to recieve latest updates, news and
              offers.
            </p>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full py-2 px-4 rounded-l-md focus:outline-none text-black"
              />
              <button className="bg-primary text-white rounded-r-md px-4 py-2 hover:bg-yellow-300 transition-all duration-200 cursor-pointer ">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        {/* bottom section */}
        <div className="container mx-auto flex md:flex-row flex-col items-center justify-between border-t border-gray-400 pt-6 ">
          {/* privacy section */}
          <div>
            <ul className="flex gap-4 md:py-0 pb-6">
              <li>
                <a href="#" className="hover:text-primary">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#top" className="hover:text-primary">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          {/* social section */}
          <div className="flex gap-6">
            <a
              href=""
              target="blank"
              rel="noopener noreferrer"
              className="hover:text-primary">
              <FaFacebook size={24} />{" "}
            </a>
            <a
              href=""
              target="blank"
              rel="noopener noreferrer"
              className="hover:text-primary">
              <FaTwitter size={24} />{" "}
            </a>
            <a
              href=""
              target="blank"
              rel="noopener noreferrer"
              className="hover:text-primary">
              <FaInstagram size={24} />{" "}
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
