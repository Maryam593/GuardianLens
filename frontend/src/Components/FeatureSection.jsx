import React from 'react'
import SwiperCard from './Card/SwiperCard'
import { SwiperSlide } from 'swiper/react'
import ItemCard from './Card/ItemCard'

const FeatureSection = () => {
  return (
    <div>
    {/* ✅ Features Section */}
    <section className="py-16 shadow-md">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Why Choose Guardian Lens?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our platform offers the best security, speed, and support.
          </p>
        </div>
        <div className="m-10 ">
          <SwiperCard>
            {[
              { title: "🚀 Fast Performance", desc: "Our system runs at lightning speed." },
              { title: "🔒 Secure & Reliable", desc: "We prioritize your security at every level." },
              { title: "📞 24/7 Support", desc: "Our team is available to assist you anytime." },
              { title: "❓ FAQ", desc: "Reach us out anywhere anytime!" },
            ].map((item, index) => (
              <SwiperSlide key={index}>
                <ItemCard item = {item}/>
              </SwiperSlide>
            ))}
          </SwiperCard>
        </div>
      </section>   
    </div>
  )
}

export default FeatureSection
