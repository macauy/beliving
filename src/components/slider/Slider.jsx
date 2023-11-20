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
					<img src="../../../public/gallery/1.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="../../../public/gallery/2.webp" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="../../../public/gallery/3.webp" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="../../../public/gallery/4.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="../../../public/gallery/5.jpg" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="../../../public/gallery/7.webp" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="../../../public/gallery/8.webp" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="../../../public/gallery/9.webp" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="../../../public/gallery/10.webp" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="../../../public/gallery/11.webp" alt="" />
				</SwiperSlide>
				<SwiperSlide>
					<img src="" alt="" />
				</SwiperSlide>

			</Swiper>
		</div>
	);
};

export default Slider;
