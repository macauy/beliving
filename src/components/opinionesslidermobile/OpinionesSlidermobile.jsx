import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import '../opinionineseach/opinionmelisa/OpinionMelisa'
import OpininonMelisa from '../opinionineseach/opinionmelisa/OpinionMelisa'
import '../opinionineseach/opinionmaria/OpinionMaria'
import OpinionMaria from '../opinionineseach/opinionmaria/OpinionMaria';
import '../opinionineseach/opinionemilse/OpinionEmilse'
import OpinionEmilse from '../opinionineseach/opinionemilse/OpinionEmilse';


const OpinionesSlidermobile = () => {
  return (
    <div >
      
      <Swiper 
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
      
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> 
              <OpininonMelisa/>
        </SwiperSlide>
        
        <SwiperSlide>
              <OpinionMaria/>
        </SwiperSlide>

        <SwiperSlide>
              <OpinionEmilse/>
        </SwiperSlide>
        
      </Swiper>

    </div>
  )
}

export default OpinionesSlidermobile