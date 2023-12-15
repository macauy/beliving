import { Outlet } from "react-router-dom";
import "./Layout.css";

const Layout = () => {
	return (
		<main className="main-layout">
			<Outlet />
		</main>
	);
};

export default Layout;
