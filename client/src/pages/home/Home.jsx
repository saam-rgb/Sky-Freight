import React from "react";
import { Hero } from "./Hero.jsx";
import { Testimonials } from "./Testimonials.jsx";
import { About } from "./About.jsx";
import { Tracking } from "./Tracking.jsx";
import Services from "./Services.jsx";
import Features from "./Features.jsx";
import { PartnerWithUs } from "./PartnerWithUs.jsx";
import { IndustriesWeServe } from "./IndustriesWeServe.jsx";
import { FAQ } from "./FAQ.jsx";
import ContactUs from "./ContactUs.jsx";
import CTA from "./CTA.jsx";

export const Home = () => {
  return (
    <div>
      <Hero />
      <Tracking />
      <Services />
      <About />
      <Features />
      <Testimonials />
      <PartnerWithUs />
      <IndustriesWeServe />
      <FAQ />
      <ContactUs />
      <CTA />
    </div>
  );
};
