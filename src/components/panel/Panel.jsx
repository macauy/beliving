import "./Panel.css";
import PanelItem from "./PanelItem";
// import { livings } from "../data.js";
// import { otrosProductos } from "../data.js";
import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Panel = () => {
	const [livings, setLivings] = useState([]);
	const [productos, setProductos] = useState([]);

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
		<div className="panel">
			<h1 className="title">Catálogo</h1>

			<div className="panel-items">
				{livings.map((item) => (
					<PanelItem key={item.id} producto={item} label="Living"></PanelItem>
				))}
				{productos.map((item) => (
					<PanelItem key={item.id} producto={item}></PanelItem>
				))}
			</div>
		</div>
	);
};

export default Panel;
