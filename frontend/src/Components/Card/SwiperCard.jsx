import React from 'react'
import { Swiper } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const SwiperCard = ({children}) => {
  return (
    <div className=''>
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
          {children}
        </Swiper>
    </div>
  )
}

export default SwiperCard
