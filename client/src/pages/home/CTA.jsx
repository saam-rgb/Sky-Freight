import React from "react";

const CTA = () => {
  return (
    <section className="bg-primary py-16">
      <div className="container mx-auto px-6 text-center text-white">
        {/* CTA Heading */}
        <h2 className="text-4xl font-bold mb-4">Ready to Ship Your Cargo?</h2>
        <p className="text-lg mb-8">
          Let us help you streamline your air cargo needs. Contact us today or
          get a quick quote!
        </p>
        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <a
            href="#contact"
            className="bg-white text-primary font-medium px-6 py-3 rounded-md hover:bg-gray-200 transition">
            Contact Us
          </a>
          <a
            href="#services"
            className="bg-yellow-500 text-white font-medium px-6 py-3 rounded-md hover:bg-yellow-400 transition">
            Get a Quick Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
