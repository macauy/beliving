import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

import { Outlet } from "react-router-dom";
import "./Layout.css";
import IconWhatsapp from "../icons/IconWhatsapp/IconWhatsapp";

const Layout = () => {
	return (
		<>
			<Navbar />
			<main className="main-layout">
				<Outlet />
			</main>
			<Footer />
			<IconWhatsapp />
		</>
	);
};

export default Layout;
