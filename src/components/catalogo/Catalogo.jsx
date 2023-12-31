import "./Catalogo.css";
import Card from "../card/Card";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";

import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
// import { livings, otrosProductos } from "../data";

const Catalogo = () => {
	const [livings, setLivings] = useState([]);
	const [productos, setProductos] = useState([]);

	let arr = [1, 2, 3, 4, 5];

	useEffect(() => {
		let localLivings = JSON.parse(sessionStorage.getItem("LIVINGS")) ?? [];
		if (localLivings.length > 0) {
			setLivings(localLivings);
		} else {
			let items = collection(db, "livings");
			getDocs(items).then((res) => {
				let livings = res.docs.map((item) => {
					return { ...item.data() };
				});
				setLivings(livings.sort((a, b) => a.id - b.id));
				sessionStorage.setItem("LIVINGS", JSON.stringify(livings));
			});
		}
	}, []);

	useEffect(() => {
		let localProductos = JSON.parse(sessionStorage.getItem("PRODUCTOS")) ?? [];
		if (localProductos.length > 0) {
			setProductos(localProductos);
		} else {
			let items = collection(db, "productos");
			getDocs(items).then((res) => {
				let productos = res.docs.map((item) => {
					return { ...item.data() };
				});
				setProductos(productos.sort((a, b) => a.id - b.id));
				sessionStorage.setItem("PRODUCTOS", JSON.stringify(productos));
			});
		}
	}, []);

	return (
		<div className="catalogo">
			<Link to={"/catalogo#productos"}></Link>
			<h1 className="title catalogo-title">Conocé nuestras opciones</h1>

			<section className="catalogo-livings" id="livings">
				<h2 className="catalogo-subtitle">LIVINGS</h2>
				{livings.length > 0 ? (
					<div className="cards-container">
						{livings.map((item) => (
							<Card producto={item} key={item.id} />
						))}
					</div>
				) : (
					<div className="cards-container">
						{arr.map((e) => {
							return (
								<div key={e} className="skeleton">
									<Skeleton variant="rounded" width={200} height={150} />
									<Skeleton variant="text" width={200} height={100} />
									<Skeleton variant="rounded" width={200} height={25} />
								</div>
							);
						})}
					</div>
				)}
			</section>
			<section className="catalogo-otros" id="productos">
				<h2 className="catalogo-subtitle">OTROS PRODUCTOS</h2>
				{productos.length > 0 ? (
					<div className="cards-container">
						{productos.map((item) => (
							<Card producto={item} key={item.id} />
						))}
					</div>
				) : (
					<div className="cards-container">
						{arr.map((e) => {
							return (
								<div key={e} className="skeleton">
									<Skeleton variant="rounded" width={200} height={150} />
									<Skeleton variant="text" width={200} height={100} />
									<Skeleton variant="rounded" width={200} height={25} />
								</div>
							);
						})}
					</div>
				)}
			</section>
		</div>
	);
};

export default Catalogo;
