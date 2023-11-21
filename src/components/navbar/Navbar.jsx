import { Fade as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	// Hace que elmenu hamburguesa abre y cierre
	const [isOpen, setOpen] = useState(false);

	// Estado para controlar la visibilidad del menú
	const cerrarMenu = () => {
		setOpen(false);
	  };
	  // Función handler para el clic en el botón de toggle
  	const toggleMenu = () => {
    	setOpen();
  	};

	return (
		<nav>
			<div className="nav-title">
				<Link to={"/"}>
					<div id="logo" className="logo">
						<img src="/public/BL.svg" alt="" />
					</div>
				</Link>
				<div id="botonburguer" className="botonburguer">
					<Hamburger color="#45a196" toggled={isOpen} toggle={setOpen} />
				</div>
			</div>
			<ul
				onClick={toggleMenu}
				className={`menu-container ${isOpen ? "open" : " "}`}
			>
				<li onClick={cerrarMenu}>
					<NavLink to={"/Catalogo"}>Catálogo</NavLink>
				</li>
				<li onClick={cerrarMenu}>
					<NavLink to={"/PreguntasFrecuentes"}>Preguntas frecuentes</NavLink>
				</li>
				<li onClick={cerrarMenu}>
					<NavLink to={"Contacto"}>Contacto</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
