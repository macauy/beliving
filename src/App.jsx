import Footer from "./components/footer/Footer";
import Galery from "./components/galery/Galery";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Preguntasfrecuentes from "./components/preguntasfrecuentes/Preguntasfrecuentes";
import Contacto from "./components/contacto/Contacto";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
		<BrowserRouter>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Home/>}/>
				<Route path="/Galeria" element={<Galery/>}/>
				<Route path="/PreguntasFrecuentes" element={<Preguntasfrecuentes/>}/>
				<Route path="/Contacto" element={<Contacto/>}/>
			</Routes>
			<Footer/>
		</BrowserRouter>
			
		</>
	);
}

export default App;
