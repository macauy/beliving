import Home from "./components/home/Home";
// import Footer from "./components/footer/Footer";
// import Navbar from "./components/navbar/Navbar";
import Preguntasfrecuentes from "./components/preguntasfrecuentes/Preguntasfrecuentes";
import Contacto from "./components/contacto/Contacto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalogo from "./components/catalogo/Catalogo";
import ProductoDetalle from "./components/productDetail/ProductoDetalle";
import Layout from "./layout/Layout";
import Dashboard from "./components/dashboard/Dashboard";
// import IconWhatsapp from "./icons/IconWhatsapp/IconWhatsapp";
import Login from "./components/login/Login";
import Panel from "./components/panel/Panel";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import UserContextProvider from "./context/UserContext";

function App() {
	return (
		<>
			<BrowserRouter>
				<UserContextProvider>
					{/* <Navbar /> */}
					<Routes>
						{/* Rutas publicas */}
						<Route element={<Layout />}>
							<Route path="/" element={<Home />} />
							<Route path="/Catalogo" element={<Catalogo />} />
							<Route
								path="/PreguntasFrecuentes"
								element={<Preguntasfrecuentes />}
							/>
							<Route path="/Contacto" element={<Contacto />} />
							<Route path="/ProductoDetalle" element={<ProductoDetalle />} />
							<Route path="/dashboard" element={<Dashboard />} />
							<Route path="*" element={<h1>404 not found</h1>} />
						</Route>
						<Route path="/login" element={<Login />} />

						{/* Rutas privadas */}
						<Route element={<ProtectedRoutes />}>
							<Route path="/panel" element={<Panel />} />
						</Route>
					</Routes>
					{/* <Footer /> */}
				</UserContextProvider>
			</BrowserRouter>
		</>
	);
}

export default App;
