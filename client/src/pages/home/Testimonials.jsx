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
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Testimonials
        </h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          See what our clients have to say about our services.
        </p>
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.length > 0 &&
              testimonials.map((content, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col sm:flex-row items-stretch overflow-hidden p-4 border rounded-lg">
                    <div className="flex flex-col justify-between flex-grow">
                      <div className="flex gap-2 items-center">
                        <div className="w-10">
                          <img
                            src={getImgUrl(content.image)}
                            alt={content.title}
                            className="object-cover rounded-full"
                          />
                        </div>
                        <h3 className="text-lg font-medium hover:text-primary">
                          {content.title}
                        </h3>
                      </div>
                      <div className="w-20 h-2 bg-primary my-4"></div>
                      <p className="text-sm text-gray-500 flex-grow">
                        {content.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};
