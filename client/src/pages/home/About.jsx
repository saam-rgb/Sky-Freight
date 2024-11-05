import React from "react";
import aboutImg from "../../assets/about.avif";

export const About = () => {
  return (
    <div
      className="py-12 md:px-10 px-2 flex flex-col sm:flex-row items-center"
      id="about">
      {/* left section - content */}
      <div className="md:w-1/2 w-full px-4 sm:mb-0 mb-4">
        <h2 className="text-3xl font-semibold mb-6">About</h2>
        <p className="mb-4">
          Welcome to SkyFreight, your reliable partner in air cargo solutions.
          We specialize in delivering your goods swiftly and securely,
          recognizing the importance of timely logistics in today’s fast-paced
          market. Our experienced team utilizes advanced technology and a global
          network to ensure your shipments arrive safely and on time.
        </p>
        <p>
          We cater to a variety of cargo needs, from fragile items to high-value
          shipments, all while prioritizing quality and customer satisfaction.
          At SkyFreight, we’re committed to providing personalized service
          tailored to your unique requirements. Experience seamless logistics
          with us, and let us help elevate your shipping experience to new
          heights.
        </p>
      </div>
      <div className="md:w-1/2 w-full sm:px-0 px-4">
        <img src={aboutImg} alt="Company Image" />
      </div>
    </div>
  );
};
