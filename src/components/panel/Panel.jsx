import "./Panel.css";
import { livings } from "../data.js";
import PanelItem from "./PanelItem";
import { otrosProductos } from "../data.js";

const Panel = () => {
	return (
		<div className="panel">
			<h1 className="title">Catálogo</h1>

			<div className="panel-items">
				{livings.map((item) => (
					<PanelItem key={item.id} producto={item} label="Living"></PanelItem>
				))}
				{otrosProductos.map((item) => (
					<PanelItem key={item.id} producto={item}></PanelItem>
				))}
			</div>
		</div>
	);
};

export default Panel;
