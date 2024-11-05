import React from "react";

export const Tracking = () => {
  return (
    <div className="py-12 md:px-12  px-6 " id="track">
      <h2 className="text-3xl font-semibold mb-6">Tracking</h2>
      <div className="flex justify-center">
        <div className="md:w-1/2 w-full">
          <p className="mb-4">Track your order using tracking id.</p>
          <div className="flex">
            <input
              type="text"
              placeholder="Tracking id"
              className="w-full py-2 px-4 rounded-l-md focus:outline-none text-black border border-gray-300"
            />
            <button className="bg-primary text-white rounded-r-md px-4 py-2 hover:bg-yellow-300 transition-all duration-200 cursor-pointer ">
              Track your shipment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
