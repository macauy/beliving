import "./Galery.css";
// import { useEffect, useRef, useState } from "react";
// import { data } from "../data";
import Slider from "../slider/Slider";

const Galery = () => {
	return (
		<div className="galery">
			<h4 className="title">Imaginá tu evento</h4>
			<Slider slides={0} />
		</div>
	);
};

export default Galery;
