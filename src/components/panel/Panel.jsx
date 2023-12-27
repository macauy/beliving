import "./Panel.css";
import PanelItem from "./PanelItem";

import { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Panel = () => {
	const [livings, setLivings] = useState([]);
	const [productos, setProductos] = useState([]);

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
