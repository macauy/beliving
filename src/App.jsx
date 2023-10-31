import "./App.css";
import Footer from "./components/footer/Footer";
import Galery from "./components/galery/Galery";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";

function App() {
	return (
		<>
			<Navbar />
			<Home />
			<Galery />
			<Footer />
		</>
	);
}

export default App;
