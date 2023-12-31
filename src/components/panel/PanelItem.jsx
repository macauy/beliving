import { useState } from "react";
import "./Panel.css";
import PanelItemDetail from "./PanelItemDetail";
import { db } from "../../firebaseConfig.js";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";

const PanelItem = ({ producto, label, deleteProduct }) => {
	let category = producto.category.toLowerCase();

	const [details, setDetails] = useState(producto.details);
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
		let refDoc = doc(db, category, producto.idDB);
		updateDoc(refDoc, {
			price: price,
		});
		sessionStorage.removeItem(category.toUpperCase());
	};

	const handleDelete = () => {
		let ok = confirm("¿Confirma la eliminación del documento?");
		if (ok) {
			deleteDoc(doc(db, category, producto.idDB));
			deleteProduct(category, producto.id);
		}
	};

	const updateItem = (id, price) => {
		let refDoc = doc(db, category, producto.idDB);

		let details = producto.details;
		let index = producto.details.findIndex((item) => item.id == id);
		if (index >= 0) {
			details[index].price = price;
			updateDoc(refDoc, {
				details: details,
			});
			sessionStorage.removeItem(category.toUpperCase());
		} else console.log("Producto no encontrado. Index: ", index);
	};

	const deleteItem = (id) => {
		let refDoc = doc(db, category, producto.idDB);
		let details = producto.details;
		let index = producto.details.findIndex((item) => item.id == id);
		if (index >= 0) {
			let newDetails = details.filter((item) => item.id != id);
			updateDoc(refDoc, {
				details: newDetails,
			});
			setDetails(newDetails);
			sessionStorage.removeItem(category.toUpperCase());
		} else console.log("Producto no encontrado. Index: ", index);
	};

	return (
		<div className="panel-item">
			<div className="panel-item-title">
				<div className="panel-item-info">
					<h3>
						{label} {producto.name}
					</h3>
					<div className="panel-item-info-price">
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
							<span className="panel-button-text">OK</span>{" "}
							<img src="./ok.svg" alt="" />
						</div>
					)}
				</div>
				<div className="panel-item-buttons">
					<div className="panel-button edit-button" onClick={handleEdit}>
						<span className="panel-button-text">EDITAR</span>{" "}
						<img src="./edit-icon.svg" alt="Icono de Editar" />
					</div>
					<div className="panel-button delete-button" onClick={handleDelete}>
						<span className="panel-button-text">ELIMINAR</span>{" "}
						<img src="./delete-icon.svg" alt="Icono de eliminar" />
					</div>
				</div>
			</div>
			{details.length > 1 && (
				<div className="panel-item-details">
					{details.map((item) => (
						<PanelItemDetail
							key={item.id}
							item={item}
							updateItem={updateItem}
							deleteItem={deleteItem}
						></PanelItemDetail>
					))}
				</div>
			)}
		</div>
	);
};

export default PanelItem;
