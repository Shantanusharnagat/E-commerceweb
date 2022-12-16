import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/Media/logoNew.png'
import './navbar.css'
import search from "../images/Media/search.png"
function BasicExample() {
  return (
    <Navbar bg="light" expand="lg" className='nav'>
      <Container>
        <Navbar.Brand href="#home" className='logo'>
            <img src={logo} alt="logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto routes">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Jackets</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Book
              </NavDropdown.Item>
              
              
            </NavDropdown>
            <Nav.Link href="#link">Track Order</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <span class="material-symbols-outlined gogicons">
search favorite person shopping_cart
</span>
            {/* <Nav.Link href="#link"><img src={search} className="iconsnav" alt="search"/></Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;