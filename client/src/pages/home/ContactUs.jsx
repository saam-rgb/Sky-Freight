import React from "react";

export const ContactUs = () => {
  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Have questions or need help? Feel free to reach out to us.
        </p>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Get in Touch
            </h3>
            <p className="text-gray-600 mb-6">
              We’re here to assist you with any questions or concerns you may
              have.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full mr-4">
                  📍
                </span>
                <p>123 SkyFreight Avenue, Airway City, 56789</p>
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full mr-4">
                  📞
                </span>
                <p>+1 234 567 890</p>
              </li>
              <li className="flex items-center">
                <span className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full mr-4">
                  📧
                </span>
                <p>support@skyfreight.com</p>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h3>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-yellow-500 transition-all duration-200">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-6">
            Visit Us
          </h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094336!2d144.95373631532127!3d-37.817209979751824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5771b0cd938ed4b!2sSkyFreight%20Cargo!5e0!3m2!1sen!2sus!4v1680287209924!5m2!1sen!2sus"
              className="w-full h-72 rounded-lg border"
              allowFullScreen=""
              loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
