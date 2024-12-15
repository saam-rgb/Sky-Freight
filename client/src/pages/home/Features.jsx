import React, { useEffect, useState } from "react";

const Features = () => {
  const [features, setFeatures] = useState([]);

  // Fetch features from the JSON file
  useEffect(() => {
    fetch("/features.json")
      .then((response) => response.json())
      .then((data) => setFeatures(data))
      .catch((error) => console.error("Error loading features:", error));
  }, []);

  return (
    <section id="why-choose-us" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Why Choose Us</h2>
        <p className="text-lg text-gray-600 mb-12">
          At SkyFreight, we understand the importance of reliable and efficient
          logistics in today’s competitive market. Here’s why businesses trust
          us as their go-to air cargo partner:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
