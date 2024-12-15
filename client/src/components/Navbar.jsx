import React, { useState } from "react";
import { IoSearch, IoCartOutline } from "react-icons/io5";
import { GiAirplaneDeparture } from "react-icons/gi";
import { HiOutlineUser } from "react-icons/hi2";
import { FaRegHeart, FaUserAstronaut } from "react-icons/fa";
import { Link } from "react-router-dom";

const dropdown = [
  { name: "About", href: "#about" },
  { name: "Track orders", href: "#track" },
  { name: "Shipment details", href: "#details" },
];

export const Navbar = () => {
  const [selectDropdown, setSelectDropdown] = useState(false);
  const currentUser = true;

  return (
    <header className="mx-auto max-w-screen-2xl py-4 md:px-8 px-2">
      <nav className="flex items-center justify-between">
        {/* Left section: logo and icons */}
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center">
            <GiAirplaneDeparture size={30} className="mr-2" />
            <p className="text-lg font-bold font-secondary sm:block hidden">
              SkyFreight
            </p>
          </Link>
        </div>

        {/* Right section: links, user, and contact */}
        <div className="flex items-center gap-3 sm:gap-8">
          {/* Links */}
          <ul className=" gap-4 sm:gap-8 text-secondary hidden sm:flex">
            <li>
              <a href="#" className="hover:text-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary">
                About Us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-primary">
                Services
              </a>
            </li>
            <li>
              <a href="#track" className="hover:text-primary">
                Track
              </a>
            </li>
          </ul>

          {/* Contact button */}
          <button className="btn hidden sm:block">Contact Us</button>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden text-xl"
            onClick={() => setSelectDropdown(!selectDropdown)}>
            {selectDropdown ? "X" : "☰"}
          </button>

          {/* Dropdown for Mobile */}
          {selectDropdown && (
            <div className="absolute top-16 right-0 w-48 bg-white shadow-md z-20 sm:hidden">
              <ul>
                <li>
                  <a
                    href="#about"
                    className="block px-4 py-2 hover:bg-gray-200">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="block px-4 py-2 hover:bg-gray-200">
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#track"
                    className="block px-4 py-2 hover:bg-gray-200">
                    Track
                  </a>
                </li>
                <li>
                  <button className="block px-4 py-2 hover:bg-gray-200">
                    Contact Us
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};
