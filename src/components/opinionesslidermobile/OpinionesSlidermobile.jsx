// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import '../opinionineseach/opinionmelisa/OpinionMelisa'
import OpininonMelisa from '../opinionineseach/opinionmelisa/OpinionMelisa'
import '../opinionineseach/opinionmaria/OpinionMaria'
import OpinionMaria from '../opinionineseach/opinionmaria/OpinionMaria';
import '../opinionineseach/opinionemilse/OpinionEmilse'
import OpinionEmilse from '../opinionineseach/opinionemilse/OpinionEmilse';
import "swiper/css";
import './OpinionesSlidermobile.css'

const OpinionesSlidermobile = () => {
  return (
    <div className='slider-opinions'>
      
      <Swiper 
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
      
        modules={[Pagination]}
        className="mySwiper-slider-opinions"
      >
        <SwiperSlide className='slide-opinion'> 
              <OpininonMelisa/>
        </SwiperSlide>
        
        <SwiperSlide className='slide-opinion'>
              <OpinionMaria/>
        </SwiperSlide>

        <SwiperSlide className='slide-opinion'>
              <OpinionEmilse/>
        </SwiperSlide>
        
      </Swiper>

    </div>
  )
}

export default OpinionesSlidermobile