import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../media/Temp Logo 2.0.png'
import Button from 'react-bootstrap/Button'

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" style={{"background-color" : "white", "box-shadow" : "0px 0px 10px lightgray"}} sticky="top">
      <Container>
        <Navbar.Brand href="#">
            <img alt="" src={logo} height="30" className="d-inline-block align-top"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#products" style={{"line-height": "40px"}}>Products</Nav.Link>
            <Nav.Link href="#company" style={{"line-height": "40px"}}>Company</Nav.Link>
            <Nav.Link href="#blog" style={{"line-height": "40px"}}>Blog</Nav.Link>
            <Nav.Link href="#demo" style={{"line-height": "35px"}}><Button variant='outline-danger'>Demo</Button></Nav.Link>
            <Nav.Link href="#login" style={{"line-height": "35px"}}><Button variant='danger'>Login</Button></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}