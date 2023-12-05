import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import {Stars} from '../../icons/Stars/Stars'
import {QuotesIllustration} from '../../icons/QuotesIllustration/QuotesIllustration'
import {QuotesIllustrationClose} from '../../icons/QuotesIllustration/QuoteIllustrationClose'

const OpinionesSlidermobile = () => {
  return (
    <div>
      
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide> 
        <div className='frame'>
        <div className="quote">

          <QuotesIllustration className="quotes-illustration" />
          <QuotesIllustrationClose className="quotes-illustration-close"/>

            <div className="div">
              <div className="text-wrapper">Melisa C.</div>
              <Stars className="stars-instance" />
              
            </div>
            <p className="p">
              Positivo: Calidad, Capacidad de respuesta, Precio, Profesionalismo
              <br />
              Excelente atención, los living y cada detalles en perfectas condiciones. Super recomendables 🤗
            </p>
          </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default OpinionesSlidermobile