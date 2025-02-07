import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const HomePage = () => {
  return (
    <>
      <div>
         {/* Hero Section */}
         <section className="flex flex-col items-center bg-red-300 justify-center h-screen text-center p-8">
        <h2 className="text-4xl md:text-6xl font-bold">Welcome to GuardianLens!</h2>
        <p className="mt-4 text-lg md:text-xl max-w-2xl">
          We provide amazing services to help your business grow.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">Get Started</button>
      </section>
      </div>
      {/* Features Section */}
     {/* Features Section with Swiper */}
     <section className="p-10">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={20}
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
        </Swiper>
      </section>
      </>
  )
}

export default HomePage
