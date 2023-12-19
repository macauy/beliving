import { useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // para poner o quitar flechas de navegacion o ya en return en navegation lo dejamos en false (navigation={false})
import "./Slider.css";
import { pictures } from "../data.js";

//------------------ZOOM-----------------
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Slider = ({ slides }) => {
	const slidesSmall = 2;
	const slidesLarge = 4;
	let slidesToView = slides;

	// const screenWidth = window.innerWidth;

	const [width, setWidth] = useState(window.innerWidth);
	// const breakpoint = 768;

	useEffect(() => {
		const handleWindowResize = () => setWidth(window.innerWidth);
		window.addEventListener("resize", handleWindowResize);

		// Return a function from the effect that removes the event listener
		return () => window.removeEventListener("resize", handleWindowResize);
	}, []);

	if (slides == 0) {
		slidesToView = width < 768 ? slidesSmall : slidesLarge;
	}

	return (
		<div className="conteinerslider">
			<Swiper
				slidesPerView={slidesToView}
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
					"--swiper-navigation-size": "18px",
					"--swiper-pagination-color": "var(--primary)",
					// "--swiper-pagination-bullet-inactive-color": "#999999",
					// "--swiper-pagination-bullet-inactive-opacity": "1",
					// "--swiper-pagination-bullet-size": "10px",

					 //"--swiper-pagination-bullet-horizontal-gap": "6px",
				}}
			>
				{pictures.map((item) => (
					// <Card producto={item} key={item.name} />

					<SwiperSlide key={item.id}>
						<Zoom >
							<img src={item.imgUrl} alt="" />
						</Zoom>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Slider;
