import Footer from "./components/footer/Footer";
// import Galery from "./components/galery/Galery";//? es parte del home
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Preguntasfrecuentes from "./components/preguntasfrecuentes/Preguntasfrecuentes";
import Contacto from "./components/contacto/Contacto";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalogo from "./components/catalogo/Catalogo";
import ProductoDetalle from "./components/productDetail/ProductoDetalle";

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Catalogo" element={<Catalogo />} />
					<Route
						path="/PreguntasFrecuentes"
						element={<Preguntasfrecuentes />}
					/>
					<Route path="/Contacto" element={<Contacto />} />
					<Route path="/ProductoDetalle" element={<ProductoDetalle />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
