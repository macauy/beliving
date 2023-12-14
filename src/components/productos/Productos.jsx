import { useState, useEffect } from "react";
import Button from "../../icons/Button/Button";
import Card from "../card/Card";
import "./Productos.css";
import { Link } from "react-router-dom";
// import { livings } from "../data.js";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const Productos = () => {
	const [livings, setLivings] = useState([]);

	useEffect(() => {
		let items = collection(db, "livings");
		getDocs(items).then((res) => {
			let livings = res.docs.map((item) => {
				return { ...item.data() };
			});
			console.log(livings);
			setLivings(livings.sort((a, b) => a.id - b.id));
		});
	}, []);

	return (
		<div className="productos">
			<h1 className="title-container title">Conocé nuestras opciones</h1>
			<section className="productos-livings">
				<div className="products-cards-container">
					{livings.map((item) => (
						<Card producto={item} key={item.name} />
					))}
				</div>
			</section>
			<section className="productos-button-container">
				<Link to={"catalogo"}>
					<Button style="variant-2" text="VER TODOS"></Button>
				</Link>
			</section>
		</div>
	);
};

export default Productos;
