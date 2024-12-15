import React from "react";
import { getImgUrl } from "../../utils/getImgUrl";

const industries = [
  {
    name: "E-commerce",
    description: "Fast and secure delivery for your online stores.",
    image: "ecommerce.png",
  },
  {
    name: "Automotive",
    description: "Efficient cargo solutions for automotive parts and vehicles.",
    image: "automotive.png",
  },
  {
    name: "Healthcare",
    description: "Specialized logistics for medical and healthcare equipment.",
    image: "healthcare.png",
  },
  {
    name: "Electronics",
    description: "Safe handling of high-value electronic items.",
    image: "electronics.png",
  },
  {
    name: "Food & Beverage",
    description: "Timely delivery for perishable food and beverages.",
    image: "food.png",
  },
  {
    name: "Manufacturing",
    description: "Reliable transport solutions for industrial goods.",
    image: "manufacturing.png",
  },
];

export const IndustriesWeServe = () => {
  return (
    <section className="py-16 bg-white" id="industries">
      <div className="container mx-auto px-6">
        {/* Headline */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Industries We Serve
        </h2>

        {/* Description */}
        <p className="text-center text-lg text-gray-600 mb-12">
          We cater to a wide range of industries with our reliable and
          customized air cargo solutions. Explore how we can meet your business
          needs.
        </p>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
              <img
                src={getImgUrl(industry.image)}
                alt={industry.name}
                className="w-24 h-24 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {industry.name}
              </h3>
              <p className="text-gray-600 text-sm">{industry.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-yellow-500 transition duration-300">
            Request a Quote
          </a>
        </div>
      </div>
    </section>
  );
};
