import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import { pictures } from "../data.js";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./ThumbsSlider.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export default function ThumbsSlider({ pictures }) {
	const [thumbsSwiper, setThumbsSwiper] = useState(null);

	return (
		<div className="thumbs-swiper-container">
			<Swiper
				style={{
					"--swiper-navigation-color": "#fff",
					"--swiper-pagination-color": "#fff",
				}}
				spaceBetween={10}
				navigation={false}
				thumbs={{ swiper: thumbsSwiper }}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper2 thumbs-swiper-galery"
			>
				{pictures.map((item) => (
					<SwiperSlide key={item.id}>
						<img src={item.imgUrl} alt="" />
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				style={{
					height: "auto",
				}}
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={4}
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper thumbs-swiper-thumbs"
			>
				{pictures.map((item) => (
					<SwiperSlide key={item.id} className="thumbs-swiper-thumb">
						<img src={item.imgUrl} alt="" />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
