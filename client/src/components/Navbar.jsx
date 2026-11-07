import { useEffect, useState } from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import { HiMenu, HiX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/track", label: "Track" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const desktopLinkClass = ({ isActive }) =>
    `relative py-1 transition-colors hover:text-primary ${
      isActive ? "text-primary" : "text-secondary"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block rounded-md px-3 py-2 transition-colors ${
      isActive
        ? "bg-primary/10 text-primary"
        : "text-secondary hover:bg-gray-100"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm transition-shadow duration-300 ${
        scrolled ? "shadow-md" : ""
      }`}>
      <nav className="mx-auto grid max-w-screen-2xl grid-cols-[auto_1fr_auto] items-center gap-4 px-4 py-3 md:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          className="flex items-center gap-2 justify-self-start">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary">
            <GiAirplaneDeparture size={22} />
          </span>
          <p className="hidden font-primary text-lg font-bold text-secondary sm:block">
            SkyFreight
          </p>
        </Link>

        {/* Desktop links, centered between logo and actions */}
        <ul className="hidden items-center gap-8 justify-self-center font-secondary text-secondary sm:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} end={link.end} className={desktopLinkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Right section */}
        <div className="flex items-center gap-3 justify-self-end">
          <Link
            to="/contact"
            className="hidden rounded-md bg-cta px-5 py-2 font-secondary font-semibold text-white transition-colors duration-200 hover:bg-orange-600 sm:block">
            Contact Us
          </Link>

          {/* Mobile menu toggle */}
          <button
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="text-secondary sm:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out sm:hidden ${
          menuOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"
        }`}>
        <ul className="flex flex-col gap-1 bg-white px-4 py-3 font-secondary">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.end}
                onClick={() => setMenuOpen(false)}
                className={mobileLinkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-md bg-cta px-3 py-2 text-center font-semibold text-white">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
