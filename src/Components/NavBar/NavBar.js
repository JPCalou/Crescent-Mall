
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../Imagenes/logo-mkr.png';
import '../../App.css';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'





function NavBar() {
  return (
    <Navbar className='Nav' expand="lg">
      <Container>
      <Navbar.Brand href="#home"><img src={logo} width="60" height="60" alt="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link href="#home">Crescent Market</Nav.Link>
            <Nav.Link href="#link">Contacto</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Velas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Jabones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Fragancias</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Mas info ...</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <CartWidget  />
        </Navbar.Collapse>
        
      </Container>
      
    </Navbar>
    
  );
}

export default NavBar;