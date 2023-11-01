import './Navbar.css';

const Navbar = () => {


	//! las imagenes del header o navbar son estaticas solo por presentaciòn, a cambio de alguna modificaciòn.
  return (
	<header id='header'>
		<div id='logoBeliving'><img src="/public/BL.svg" alt="" /></div>
		<div id='menuHambur'><img src="/public/imgHamburguesa.svg" alt="" /></div>
	</header>
  )
}

export default Navbar