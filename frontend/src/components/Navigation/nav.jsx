import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Homepage from '../Home/homepage'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginAuth from '../authentication/Login/login'

const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#">Fake Auth</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Link className=" my-2  text-decoration-none text-white" to="/">
                  Home
                </Link>
                <Link
                  className=" my-2  text-decoration-none text-white"
                  to="Login"
                >
                  Login
                </Link>
              </Nav>
              <Nav>
                <Link className=" my-2  text-white" to="#">
                  Profile
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginAuth />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navigation
