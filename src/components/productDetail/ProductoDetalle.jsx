import { useState } from "react";
import Navegacion from "../../common/navegacion/Navegacion";
import QuestionBar from "../../common/questionBar/QuestionBar";
import Button from "../../icons/Button/Button";
// import Slider from "../slider/Slider";
import ThumbsSlider from "../slider/ThumbsSlider";
import "./ProductoDetalle.css";
import { NavLink, useLocation } from "react-router-dom";
import { livings } from "../data.js";
import { otrosProductos } from "../data.js";
import Whatsapp from "../whatsapp/Whatsapp.jsx";
import { Link } from "react-router-dom";

const ProductoDetalle = () => {
	const location = useLocation();

	let productoIn = location.state;
	const [producto, setProducto] = useState(productoIn);

	let productos = producto.category === "Livings" ? livings : otrosProductos;
	let index = productos.findIndex((item) => item.id == producto.id);

	const previo = () => {
		if (index == 0) index = productos.length - 1;
		else index--;
		setProducto(productos[index]);
	};
	const siguiente = () => {
		if (index == productos.length - 1) index = 0;
		else index++;
		setProducto(productos[index]);
	};

	return (
		<div>
			<div className="producto-detalle-title">
				<h1 className="title">{producto.name}</h1>
			</div>
			<Navegacion
				category={producto.category}
				name={producto.name}
				previo={previo}
				siguiente={siguiente}
			></Navegacion>

			<div className="producto-detalle-container">
				<section className="producto-detalle-galery">
					<ThumbsSlider pictures={producto.pictures} />
				</section>
				<section className="producto-detalle">
					<div className="producto-description">
						{producto.details?.map((item) => (
							<div
								className="producto-description-details"
								key={item.description}
							>
								<p>{item.description}</p>
								{item.items && (
									<>
										<p>Incluye:</p>
										<ul>
											{item.items.map((item) => (
												<li key={item}>{item}</li>
											))}
										</ul>
									</>
								)}
							</div>
						))}
						<p className="producto-detalle-contacto-desktop">
							Para reservar, consultanos por WhatsApp o pedí tu cotización
							haciendo click en el siguiente botón.
						</p>
					</div>
					<div className="producto-price">
						<div>
							<h3>{producto.price} *</h3>
							<p>*No incluye costo de envío</p>
						</div>
						<div className="producto-price-button">
							<Link to={"/Contacto"}>
								<Button style="default" text="COTIZAR"></Button>
							</Link>
						</div>
					</div>
				</section>
			</div>
			<div className="producto-detalle-contacto">
				<p>
					Para reservar, consultar sobre el envío o disponibilidad,{" "}
					<a target="" rel="" onClick={Whatsapp}>
						contactanos
					</a>{" "}
					o<NavLink to={"/Contacto"}> pedí tu cotización</NavLink>.
				</p>
			</div>
			<section className="producto-detalle-footer">
				<QuestionBar />
			</section>
		</div>
	);
};

export default ProductoDetalle;
