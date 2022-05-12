import React from 'react'
import { Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap'
import Homepage from '../Home/homepage'
import 'bootstrap/dist/css/bootstrap.min.css'

const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Fake Auth</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link className="text-white" href="#">
                  Profile
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/about" element={<About />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navigation
