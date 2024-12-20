import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { GiAirplaneDeparture } from "react-icons/gi";

export const Footer = () => {
  return (
    <div className="bg-secondary text-white px-10 py-8">
      <footer>
        {/* Top Section */}
        <div className="container mx-auto flex md:flex-row flex-col justify-between items-center my-10">
          {/* Logo & Navigation */}
          <div className="md:w-1/2 w-full md:py-0 pb-6">
            <div className="flex items-center mb-10 gap-2">
              <GiAirplaneDeparture size={50} />
              <p className="text-xl font-bold font-secondary sm:block hidden">
                SkyFreight
              </p>
            </div>
            <ul className="flex flex-wrap gap-4">
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
              <li>
                <a href="#services" className="hover:text-primary">
                  Services
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-primary">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="md:w-1/2 w-full">
            <p className="mb-4">
              Subscribe to our newsletter for the latest updates on air cargo
              services, shipping solutions, and exclusive offers.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full py-2 px-4 rounded-l-md focus:outline-none text-black"
                required
              />
              <button
                onClick={() => alert("Thank you for subscribing!")}
                className="bg-primary text-white rounded-r-md px-4 py-2 hover:bg-yellow-300 transition-all duration-200 cursor-pointer">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="container mx-auto flex md:flex-row flex-col items-center justify-between border-t border-gray-400 pt-6">
          {/* Privacy Links */}
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
          {/* Social Icons */}
          <div className="flex gap-6">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="Follow us on Facebook">
              <FaFacebook size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="Follow us on Twitter">
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary"
              aria-label="Follow us on Instagram">
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};
