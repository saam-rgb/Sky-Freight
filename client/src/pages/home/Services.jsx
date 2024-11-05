import React from "react";

export const Services = () => {
  return (
    <div className="py-12 md:px-12  px-6">
      <h2 className="text-3xl font-semibold mb-6">Services</h2>
      <div className=" flex flex-col sm:flex-row">
        <div className="sm:w-1/3 w-full border border-gray-400 shadow-md rounded-md p-4 text-center mx-4">
          <h3 className="text-xl font-semibold">Super</h3>
          <p>not nice</p>
        </div>
        <div className="sm:w-1/3 w-full border border-gray-400 shadow-md rounded-md p-4 text-center mx-4">
          <h3 className="text-xl font-semibold">Super</h3>
          <p>not nice</p>
        </div>
        <div className="sm:w-1/3 w-full border border-gray-400 shadow-md rounded-md p-4 text-center mx-4">
          <h3 className="text-xl font-semibold">Super</h3>
          <p>not nice</p>
        </div>
      </div>
    </div>
  );
};
