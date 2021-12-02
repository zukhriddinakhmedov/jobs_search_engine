import React from "react"
import {Link } from "react-router-dom"
import { Navbar, Container, Nav, Button } from "react-bootstrap"
import {MdWork} from "react-icons/md"
const NavBar = () => {
    return(
        <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/"><MdWork /> Jobify</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
      </Nav>
      <Nav>
      <Link to={`/favourites`}>
          <Button variant="danger">
           Favourites
           </Button>
        </Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    )
}

export default NavBar