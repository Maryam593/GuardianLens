import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";


const HomePage = () => {
 
  return (
    <>
      <div className="relative h-screen w-full">
        {/* ✅ Background Video */}
        {/* <video 
  autoPlay 
  loop 
  muted 
  className="absolute top-0 left-0 w-full h-full object-cover"
>
<source src="/themeVideo.mp4?nocache=${Date.now()}" type="video/mp4" />

  Your browser does not support the video tag.
</video> */}

        {/* ✅ Overlay for better readability */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

        {/* ✅ Hero Content */}
        <section className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-8 text-white">
          <h2 className="text-4xl md:text-6xl font-bold">Welcome to GuardianLens!</h2>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
            We provide amazing services to help your business grow.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
            Get Started
          </button>
        </section>
      </div>

      {/* ✅ Features Section with Swiper */}
      <section className="p-10">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          navigation
          className="pb-10"
        >
          <SwiperSlide>
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold">🚀 Fast Performance</h3>
              <p className="mt-2">Our system runs at lightning speed.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold">🔒 Secure & Reliable</h3>
              <p className="mt-2">We prioritize your security at every level.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold">📞 24/7 Support</h3>
              <p className="mt-2">Our team is available to assist you anytime.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold">📞 FAQ</h3>
              <p className="mt-2">Reach us out anywhere anytime!</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
}

export default HomePage;
