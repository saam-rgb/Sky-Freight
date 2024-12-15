import React, { useState } from "react";

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How can I track my shipment?",
      answer:
        "You can track your shipment using the tracking ID provided. Visit our tracking section and enter your tracking number for real-time updates.",
      ctaText: "Track Your Shipment",
      ctaLink: "/track",
    },
    {
      question: "What types of cargo do you transport?",
      answer:
        "We handle a wide range of cargo including perishable goods, electronics, automotive parts, healthcare supplies, and more.",
      ctaText: "Learn More",
      ctaLink: "/services",
    },
    {
      question: "How long does it take for delivery?",
      answer:
        "Delivery time depends on the destination and type of shipment. Typically, domestic shipments take 1-3 days, while international shipments may take 3-7 days.",
      ctaText: "Request a Quote",
      ctaLink: "/contact",
    },
    {
      question: "What are your shipping charges?",
      answer:
        "Shipping charges vary based on the weight, dimensions, and destination of the cargo. Please contact us for a customized quote.",
      ctaText: "Get a Quote",
      ctaLink: "/contact",
    },
    {
      question: "Do you provide international cargo services?",
      answer:
        "Yes, we provide international cargo services to major destinations worldwide with reliable and timely deliveries.",
      ctaText: "Explore Services",
      ctaLink: "/services",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-center text-gray-600 mb-12">
          Find answers to the most common questions about our cargo services.
        </p>

        {/* FAQ List */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg shadow-sm bg-white transition-all duration-300">
              <button
                className="w-full text-left px-6 py-4 font-medium text-gray-800 hover:text-primary focus:outline-none flex justify-between items-center"
                onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">
                  <p className="mb-4">{faq.answer}</p>
                  {/* CTA Button */}
                  <a
                    href={faq.ctaLink}
                    className="inline-block bg-primary text-white py-2 px-4 rounded hover:bg-yellow-500 transition-all duration-200">
                    {faq.ctaText}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Feel free to reach out to us for more details about our cargo
            solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white py-3 px-6 rounded hover:bg-yellow-500 transition-all duration-200">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};
