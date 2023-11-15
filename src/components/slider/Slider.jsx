// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // para poner o quitar flechas de navegacion o ya en return en navegation lo dejamos en false (navigation={false})
import "./Slider.css";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Slider = ({ slides }) => {
	return (
		<div className="conteinerslider">
			<Swiper
				slidesPerView={slides}
				spaceBetween={15}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={false}
				modules={[Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<img src="../../../public/gallery/7a.png" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="../../../public/gallery/8a.png" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="../../../public/gallery/9a.png" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="../../../public/gallery/7a.png" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="../../../public/gallery/8a.png" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="../../../public/gallery/9a.png" alt="" />
				</SwiperSlide>
			</Swiper>
		</div>
	);
};

export default Slider;
