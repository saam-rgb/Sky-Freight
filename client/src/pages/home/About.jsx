import React from "react";
import aboutImg from "/about.webp";

export const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          About
        </h2>
        <div className="py-12  flex flex-col-reverse  sm:flex-row items-start">
          {/* left section - content */}

          <div className="md:w-1/2 w-full px-4 sm:mb-0 mb-4 text-justify ">
            <p className="text-xl font-bold italic mb-4">
              Welcome to SkyFreight – Your Trusted Air Cargo Partner
            </p>
            <p className="mb-4">
              At SkyFreight, we redefine air cargo logistics with speed,
              security, and reliability. In today’s fast-paced world, we
              understand the critical need for timely and efficient shipping
              solutions. With a team of industry experts and cutting-edge
              technology, we ensure that your goods reach their destination
              safely and on time—every time.
            </p>
            <p className="mb-4">
              We specialize in handling a diverse range of cargo, including
              fragile items, oversized equipment, and high-value shipments, with
              the utmost care and precision. Our global network and commitment
              to customer satisfaction set us apart, enabling us to deliver
              exceptional service tailored to your unique shipping needs.
            </p>
            <p className="mb-4">
              Choose SkyFreight to experience seamless, stress-free logistics
              and elevate your air cargo solutions to a whole new level. Let us
              handle your shipments with the expertise and dedication you
              deserve.
            </p>
            <button className="bg-primary px-5 py-3 rounded-sm text-white font-semibold">
              Let us handle your shipments
            </button>
          </div>
          <div className="md:w-1/2 w-full sm:px-0 px-8 sm:mb-0 mb-5">
            <img src={aboutImg} alt="Company Image" />
          </div>
        </div>
      </div>
    </section>
  );
};
