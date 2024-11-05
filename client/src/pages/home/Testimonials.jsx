import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { getImgUrl } from "../../utils/getImgUrl";
import { Link } from "react-router-dom";

export const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);
  console.log(testimonials);

  return (
    <div className="py-12 md:px-12  px-6 ">
      <h2 className="text-3xl font-semibold mb-6">Testimonials</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        modules={[Navigation, Pagination]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper">
        <div>
          {testimonials.length > 0 &&
            testimonials.map((content, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col sm:flex-row items-center">
                  <div>
                    <div className="flex gap-2 items-center">
                      <div className="w-10">
                        <img
                          src={getImgUrl(content.image)}
                          alt={content.title}
                          className=" object-cover rounded-full"
                        />
                      </div>
                      <h3 className="text-lg font-medium  hover:text-primary">
                        {content.title}
                      </h3>
                    </div>
                    <div className="w-20 h-2 bg-primary my-4"></div>
                    <p className="text-sm text-gray-500">
                      {content.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </div>
      </Swiper>
    </div>
  );
};
