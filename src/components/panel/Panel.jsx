import "./Panel.css";
import PanelItem from "./PanelItem";

import { useState, useEffect, useContext } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

const Panel = () => {
	const [livings, setLivings] = useState([]);
	const [productos, setProductos] = useState([]);

	const { logOut } = useContext(UserContext);

	useEffect(() => {
		let items = collection(db, "livings");
		getDocs(items).then((res) => {
			let livings = res.docs.map((item) => {
				return { ...item.data(), idDB: item.id };
			});
			console.log("livings de base: ", livings);
			setLivings(livings.sort((a, b) => a.id - b.id));
		});
	}, []);

	useEffect(() => {
		let items = collection(db, "productos");
		getDocs(items).then((res) => {
			let productos = res.docs.map((item) => {
				return { ...item.data(), idDB: item.id };
			});
			setProductos(productos.sort((a, b) => a.id - b.id));
		});
	}, []);

	const deleteProduct = (category, id) => {
		console.log("borrando id", id, " de categoria", category);
		category == "livings"
			? setLivings(livings.filter((item) => item.id != id))
			: setProductos(productos.filter((item) => item.id != id));
	};

	return (
		<>
			<div className="panel-header">
				<h2>Tablero de productos</h2>
				<Link to={"/"} onClick={logOut}>
					<span className="panel-link-text">Cerrar sesión</span>{" "}
					<img src="./logout.svg" alt="" />
				</Link>
			</div>
			<div className="panel">
				<div className="panel-title">
					<h1 className="title">Catálogo</h1>
					<Link to={"/"}>Ir al sitio de BeLiving</Link>
				</div>
				<div className="panel-items">
					{livings.map((item) => (
						<PanelItem
							key={item.id}
							producto={item}
							label="Living"
							deleteProduct={deleteProduct}
						></PanelItem>
					))}
					{productos.map((item) => (
						<PanelItem
							key={item.id}
							producto={item}
							deleteProduct={deleteProduct}
						></PanelItem>
					))}
				</div>
			</div>
		</>
	);
};

export default Panel;
