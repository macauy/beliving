import "./Catalogo.css";
import Card from "../card/Card";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Catalogo = () => {
	const [livings, setLivings] = useState([]);
	const [productos, setProductos] = useState([]);

	useEffect(() => {
		let items = collection(db, "livings");
		getDocs(items).then((res) => {
			let livings = res.docs.map((item) => {
				return { ...item.data() };
			});
			setLivings(livings.sort((a, b) => a.id - b.id));
		});
		console.log("trayendo livings");
	}, []);

	useEffect(() => {
		let items = collection(db, "productos");
		getDocs(items).then((res) => {
			let productos = res.docs.map((item) => {
				return { ...item.data() };
			});
			setProductos(productos.sort((a, b) => a.id - b.id));
		});
		console.log("trayendo productos");
	}, []);

	return (
		<div className="catalogo">
			<Link to={"/catalogo#productos"}></Link>
			<h1 className="title catalogo-title">Conocé nuestras opciones</h1>

			<section className="catalogo-livings" id="livings">
				<h2 className="catalogo-subtitle">LIVINGS</h2>
				<div className="cards-container">
					{livings.map((item) => (
						<Card producto={item} key={item.id} />
					))}
				</div>
			</section>
			<section className="catalogo-otros" id="productos">
				<h2 className="catalogo-subtitle">OTROS PRODUCTOS</h2>
				<div className="cards-container">
					{productos.map((item) => (
						<Card producto={item} key={item.id} />
					))}
				</div>
			</section>
		</div>
	);
};

export default Catalogo;
