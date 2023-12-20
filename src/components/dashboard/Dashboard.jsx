// import { Link } from "react-router-dom";
import { db } from "../../firebaseConfig.js";
import { addDoc, collection } from "firebase/firestore";
import { livings, otrosProductos } from "../data.js";
import Button from "../../icons/Button/Button.jsx";

const Dashboard = () => {
	const loadLivings = () => {
		livings.forEach((item) => {
			let refProducts = collection(db, "livings");
			addDoc(refProducts, item);
		});
	};

	const loadProducts = () => {
		otrosProductos.forEach((item) => {
			let refProducts = collection(db, "productos");
			addDoc(refProducts, item);
		});
	};

	return (
		<>
			<div
				style={{ display: "flex", justifyContent: "center", margin: "50px" }}
			>
				<div onClick={loadLivings}>
					<Button style="default" text="Cargar Livings"></Button>
				</div>
			</div>
			<div
				style={{ display: "flex", justifyContent: "center", margin: "50px" }}
			>
				{/* <Link> */}
				<div onClick={loadProducts}>
					<Button style="default" text="Cargar Productos"></Button>
				</div>
				{/* </Link> */}
			</div>
		</>
	);
};

export default Dashboard;
