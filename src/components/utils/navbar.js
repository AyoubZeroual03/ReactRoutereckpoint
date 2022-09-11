import {NavLink} from "react-router-dom"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const Navbare=()=> {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as= {NavLink} to="/">Home</Nav.Link>
            <Nav.Link as= {NavLink} to="/About">About</Nav.Link>
            <Nav.Link as= {NavLink} to="/admin">admin</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
      </>
  )
}