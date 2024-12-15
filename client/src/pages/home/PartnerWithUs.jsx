import React from "react";

export const PartnerWithUs = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        {/* Headline */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
          Partner with Us
        </h2>

        {/* Description */}
        <p className="text-center text-lg text-gray-600 mb-8">
          Join forces with SkyFreight and unlock new opportunities. Our seamless
          logistics solutions can help grow your business while we take care of
          the heavy lifting. Let's build something great together.
        </p>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-yellow-500 transition duration-300">
            Become a Partner
          </a>
        </div>

        {/* Optional: Partner Logos */}
        {/* If you have existing partners, you can add their logos here */}
        <div className="mt-12 flex justify-center gap-8">
          <img
            src="/path/to/partner-logo1.png"
            alt="Partner 1"
            className="h-16"
          />
          <img
            src="/path/to/partner-logo2.png"
            alt="Partner 2"
            className="h-16"
          />
          <img
            src="/path/to/partner-logo3.png"
            alt="Partner 3"
            className="h-16"
          />
        </div>
      </div>
    </section>
  );
};
