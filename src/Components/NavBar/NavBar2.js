import logo from '../Imagenes/logo-mkr.png';
import './NavBar2.css'
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Link } from 'react-router-dom'


function NavBar2() {
    return(
        <nav className="menuCSS3">
			<div className='rutas'>
			<Link to={'/'}><img src={logo} width="60" height="60" alt="logo"/></Link>
		<ul>
		
			<li><Link to={'/'}>Crescent</Link></li>
			<li><Link to={'/'}>Productos</Link>
				<ul>
					<li><Link to={'/category/Vela'}>Velas</Link></li>
					<li><Link to={'/category/Aromatizador'}>Aromatizadores</Link></li>
					<li><Link to={'/category/Difusor'}> Difusores</Link></li>
				</ul>
			</li>
			{/* <li><a href="#">FAQ</a></li> */}
			<li><Link to={'/contacto'}>Contacto</Link></li>
		</ul>
		</div>
		<CartWidget  />
	</nav>

    )
}

export default NavBar2;