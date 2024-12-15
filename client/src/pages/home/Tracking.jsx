import React from "react";

export const Tracking = () => {
  return (
    <section className="bg-gray-50 py-16" id="track">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Tracking
        </h2>
        <div className="flex justify-center">
          <div className="w-full md:w-1/2">
            <p className="mb-4 text-center">
              Track your order using your tracking ID.
            </p>
            <div className="flex">
              <label htmlFor="tracking-id" className="sr-only">
                Enter your tracking ID
              </label>
              <input
                id="tracking-id"
                type="text"
                placeholder="Tracking ID"
                className="w-full py-2 px-4 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                aria-label="Tracking ID"
              />
              <button
                className="bg-primary text-white rounded-r-md px-4 py-2 hover:bg-yellow-300 transition-all duration-200"
                aria-label="Track your shipment">
                Track your shipment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
