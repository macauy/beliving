import { useState } from "react";
import "./Panel.css";

const PanelItemDetail = ({ item }) => {
	const [price, setPrice] = useState(item.price);
	const [isReadOnly, setIsReadOnly] = useState(true);

	const handleEdit = () => {
		setIsReadOnly(!isReadOnly);
	};

	const handleChange = (e) => {
		setPrice(e.target.value);
		console.log(price, "price del state");
	};

	const handleSubmit = () => {
		console.log("guardar dato en base");
		setIsReadOnly(true);
	};

	return (
		<div className="panel-item-detail-item">
			<span>{item.description}</span>
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
			<div className="panel-item-details-buttons">
				<div
					className="panel-button edit-button panel-button-small"
					onClick={handleEdit}
				>
					<img src="./edit-icon.svg" alt="Icono de Editar" />
				</div>
				<div className="panel-button delete-button panel-button-small">
					<img src="./delete-icon.svg" alt="Icono de eliminar" />
				</div>
			</div>
		</div>
	);
};

export default PanelItemDetail;
