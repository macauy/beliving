import { useState, useEffect } from "react";
import Button from "../../icons/Button/Button";
import Card from "../card/Card";
import "./Productos.css";
import { Link } from "react-router-dom";
// import { livings } from "../data.js";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { Skeleton } from "@mui/material";

const Productos = () => {
	const [livings, setLivings] = useState([]);
	let arr = [1, 2, 3, 4];
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

	return (
		<div className="productos">
			<h1 className="title-container title">Conocé nuestras opciones</h1>
			<section className="productos-livings">
				{livings.length > 0 ? (
					<div className="products-cards-container">
						{livings.map((item) => (
							<Card producto={item} key={item.id} />
						))}
					</div>
				) : (
					<div className="products-cards-container">
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
			<section className="productos-button-container">
				<Link to={"catalogo"}>
					<Button style="variant-2" text="VER TODOS"></Button>
				</Link>
			</section>
		</div>
	);
};

export default Productos;
