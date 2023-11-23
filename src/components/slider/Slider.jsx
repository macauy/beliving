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
import { pictures } from "../data.js";

const Slider = ({ slides }) => {
	return (
		<div className="conteinerslider">
			<Swiper
				slidesPerView={slides}
				spaceBetween={20}
				centeredSlides={true}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className="mySwiper"
				style={{
					"--swiper-navigation-size": "16px",
					"--swiper-pagination-color": "var(--primary)",
					// "--swiper-pagination-bullet-inactive-color": "#999999",
					// "--swiper-pagination-bullet-inactive-opacity": "1",
					// "--swiper-pagination-bullet-size": "16px",
					// "--swiper-pagination-bullet-horizontal-gap": "6px",
				}}
			>
				{pictures.map((item) => (
					// <Card producto={item} key={item.name} />

					<SwiperSlide key={item.id}>
						<img src={item.imgUrl} alt="" />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slider;
