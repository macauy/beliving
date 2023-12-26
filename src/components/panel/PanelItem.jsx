import "./Panel.css";

const PanelItem = ({ producto, label }) => {
	return (
		<div className="panel-item">
			<div className="panel-item-title">
				<div className="panel-item-info">
					<h2>
						{label} {producto.name}
					</h2>
					<div>
						Precio: <span>{producto.price}</span>
					</div>
				</div>
				<div className="panel-item-buttons">
					<div className="panel-button edit-button">
						EDITAR <img src="./EditIcon.svg" alt="Icono de Editar" />
					</div>
					<div className="panel-button delete-button">
						ELIMINAR <img src="./DeleteIcon.svg" alt="Icono de eliminar" />
					</div>
				</div>
			</div>
			{producto.details.length > 1 && (
				<div className="panel-item-details">
					{producto.details.map((item) => (
						<div key={item.description} className="panel-item-detail-item">
							<span>{item.description}</span>
							<div>
								Precio: <span>{item.price}</span>
								{/* <input type="text" /> */}
							</div>
							<div className="panel-item-details-buttons">
								<div className="panel-button edit-button panel-button-small">
									<img src="./EditIcon.svg" alt="Icono de Editar" />
								</div>
								<div className="panel-button delete-button panel-button-small">
									<img src="./DeleteIcon.svg" alt="Icono de eliminar" />
								</div>
							</div>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default PanelItem;
