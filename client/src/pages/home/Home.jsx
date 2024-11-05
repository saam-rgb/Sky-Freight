import React from "react";
import { Hero } from "./Hero.jsx";
import { Testimonials } from "./Testimonials.jsx";
import { About } from "./About.jsx";
import { Tracking } from "./Tracking.jsx";
import { Services } from "./Services.jsx";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Tracking />
      <Services />
      <About />
      <Testimonials />
    </div>
  );
};
