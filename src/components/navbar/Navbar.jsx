import './Navbar.css';

const Navbar = () => {


	//! las imagenes del header o navbar son estaticas solo por presentaciòn, a cambio de alguna modificaciòn hasta saber cual sera el navbar final que mdoulso llevara.
  return (
	<nav id='navbar'>
			<div id='logoBeliving' className='logo'><img src="/public/BL.svg" alt="" /></div>
			<div id='menuHambur' className='logo'><img src="/public/imgHamburguesa.svg" alt="" /></div>
	</nav>
  )
}

export default Navbar
/*
	<nav>
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</nav>
*/