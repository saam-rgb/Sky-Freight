import React from "react";

import heroVid from "/heroVideo.mp4";

export const Hero = () => {
  return (
    <div className="mb-10">
      <video
        width="100%"
        autoPlay
        muted
        loop
        className=" relative w-full object-cover h-[calc(100vh-20px)] object-bottom">
        <source src={heroVid} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      {/* vid content text */}
      <div className="absolute  text-white translate-y-1/2 md:top-1/3 top-1/4 md:translate-x-0 md:right-1/2 md:pr-24  md:pl-10 pl-0  sm:right-1/3 translate-x-1/2 right-1/2 bg-blend-overlay">
        <h2 className="text-6xl font-semibold mb-10">
          Your Cargo, Our Commitment
        </h2>
        <button className="btn">Request a Quote</button>
      </div>
    </div>
  );
};
