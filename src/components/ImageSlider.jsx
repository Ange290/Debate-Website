import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

// Make sure these paths are correct relative to your ImageSlider component
import xkl1 from "../assets/xkl1.jpg";
import xkl8 from "../assets/xkl8.jpg";
import xkl3 from "../assets/xkl3.jpg";
import xkl4 from "../assets/xkl4.jpg";
import xkl7 from "../assets/xkl7.jpg";

const images = [xkl1, xkl8, xkl3, xkl4, xkl7];

const ImageSlider = () => {
  return (
    
    <div className="relative w-full h-[500px] md:h-[500px] lg:h-[600px] overflow-hidden">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full" 
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <div  className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-20">
        <h1 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg">
          Join Our Debate Community
        </h1>
        <p className="text-white mt-4 text-lg sm:text-xl max-w-xl drop-shadow-md">
          Empowering  voices. Shaping minds and Build tommorow.
        </p>
        <button className="mt-8 px-6 py-3 bg-yellow-500 text-black font-semibold rounded hover:bg-yellow-400 transition">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;