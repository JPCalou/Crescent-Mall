
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Imagenes/logo-mkr.png';
import '../../App.css';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Link as LinkBoostrap} from 'react-router-dom'






function NavBar() {
  return (
    <Navbar className='Nav' expand="lg">
      <Container>
      <Navbar.Brand ><LinkBoostrap to={'/'}><img src={logo} width="60" height="60" alt="logo"/></LinkBoostrap></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
          <LinkBoostrap to={'/'}><Nav.Link >Crescent Market</Nav.Link></LinkBoostrap>
          <LinkBoostrap to={'/contacto'}><Nav.Link >Contacto</Nav.Link></LinkBoostrap>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#1"><LinkBoostrap to={'/category/Vela'}>Velas</LinkBoostrap></NavDropdown.Item>
             <NavDropdown.Item href="#2"><LinkBoostrap to={'/category/Difusor'}> Difusores</LinkBoostrap></NavDropdown.Item>
              <NavDropdown.Item href="#3"><LinkBoostrap to={'/category/Aromatizador'}>Aromatizadores</LinkBoostrap></NavDropdown.Item>
              <NavDropdown.Divider />
              {/* <NavDropdown.Item href="#action/3.4">Mas info ...</NavDropdown.Item> */}
            </NavDropdown>
            
          </Nav>
          <CartWidget  />
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
    
  );
}

export default NavBar;