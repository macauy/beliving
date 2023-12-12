import { Outlet } from "react-router-dom";
import IconWhatsapp from "../icons/IconWhatsapp/IconWhatsapp";
import "./Layout.css";

const Layout = () => {
	return (
		<main className="main-layout">
			<Outlet />
			<IconWhatsapp />
		</main>
	);
};

export default Layout;
