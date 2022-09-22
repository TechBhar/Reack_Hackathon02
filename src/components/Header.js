import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function Header() {
  return (
    <>
          <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">PayWall</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="./aboutus.html">About us</Nav.Link>
            <Nav.Link href="#features">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header