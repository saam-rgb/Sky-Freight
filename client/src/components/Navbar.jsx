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
  console.log(selectDropdown);
  const currentUser = true;
  return (
    <header className="mx-auto max-w-screen-2xl  py-4 md:px-8 px-2">
      <nav className="flex items-center justify-between">
        {/* left section icon and search bar*/}
        <div className="flex justify-between items-center md:gap-16 gap-4">
          <Link to="/" className="flex justify-center items-end ">
            <GiAirplaneDeparture size={30} className="mr-2" />
            <p className="text-lg font-bold font-secondary sm:block hidden">
              SkyFreight
            </p>
          </Link>
        </div>
        {/* Right section */}
        <div className="flex gap-3 items-center justify-center">
          <div className="flex gap-8 items-center">
            <ul className="flex gap-8 text-secondary ">
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
            <button className="btn">Contact Us</button>
          </div>
        </div>
      </nav>
    </header>
  );
};
