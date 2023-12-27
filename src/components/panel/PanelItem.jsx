import { useState } from "react";
import "./Panel.css";
import PanelItemDetail from "./PanelItemDetail";
import { db } from "../../firebaseConfig.js";
import { doc, updateDoc } from "firebase/firestore";

const PanelItem = ({ producto, label }) => {
	const [price, setPrice] = useState(producto.price);
	const [isReadOnly, setIsReadOnly] = useState(true);

	const handleEdit = () => {
		setIsReadOnly(!isReadOnly);
	};

	const handleChange = (e) => {
		setPrice(e.target.value);
	};

	const handleSubmit = () => {
		setIsReadOnly(true);

		let category = producto.category.toLowerCase();
		let refDoc = doc(db, category, producto.idDB);
		updateDoc(refDoc, {
			price: price,
		});
	};

	const updateItem = (id, price) => {
		let category = producto.category.toLowerCase();
		let refDoc = doc(db, category, producto.idDB);

		let details = producto.details;
		let index = producto.details.findIndex((item) => item.id == id);
		if (index >= 0) {
			details[index].price = price;
			updateDoc(refDoc, {
				details: details,
			});
		} else console.log("Producto no encontrado. Index: ", index);
	};

	return (
		<div className="panel-item">
			<div className="panel-item-title">
				<div className="panel-item-info">
					<h2>
						{label} {producto.name}
					</h2>
					<div>
						{isReadOnly && <span>Precio: {price}</span>}
						{!isReadOnly && (
							<>
								<span>Precio: </span>
								<input
									type="text"
									disabled={isReadOnly}
									placeholder={price}
									onChange={handleChange}
									className="panel-input"
								/>
							</>
						)}
					</div>
					{!isReadOnly && (
						<div className="panel-button ok-button" onClick={handleSubmit}>
							<span>OK</span>
						</div>
					)}
				</div>
				<div className="panel-item-buttons">
					<div className="panel-button edit-button" onClick={handleEdit}>
						EDITAR <img src="./edit-icon.svg" alt="Icono de Editar" />
					</div>
					<div className="panel-button delete-button">
						ELIMINAR <img src="./delete-icon.svg" alt="Icono de eliminar" />
					</div>
				</div>
			</div>
			{producto.details.length > 1 && (
				<div className="panel-item-details">
					{producto.details.map((item) => (
						<PanelItemDetail
							key={item.id}
							item={item}
							updateItem={updateItem}
						></PanelItemDetail>
					))}
				</div>
			)}
		</div>
	);
};

export default PanelItem;
