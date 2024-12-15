import React, { useEffect, useState } from "react";
import { getServicesImgUrl } from "../../utils/getImgUrl";

const Services = () => {
  const [services, setServices] = useState([]);

  // Fetch services data
  useEffect(() => {
    fetch("/services.json")
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error("Error loading services:", error));
  }, []);

  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Our Services
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Discover our wide range of air cargo solutions tailored to meet your
          shipping needs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col">
              <img
                src={getServicesImgUrl(service.image)}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex-grow">
                <h3 className="text-xl font-semibold hover:text-primary text-gray-800 cursor-pointer mb-4">
                  {service.name}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
              </div>
              <div className="p-6 mt-auto">
                <button className="w-full py-2 bg-primary text-white font-medium rounded hover:bg-yellow-500 transition">
                  Get a Quick Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
