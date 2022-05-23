import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Nav, Navbar, Container } from 'react-bootstrap'
import Homepage from '../Home/homepage'
import 'bootstrap/dist/css/bootstrap.min.css'
import LoginAuth from '../authentication/Login/login'
import { useSelector } from 'react-redux'
import NotFound from '../404/404'
import Profile from '../Profile/profile'
import SignoutAuth from '../authentication/Signout/signout.jsx'
import Register from '../authentication/Registration/register'

const Navigation = () => {
  const authCheck = useSelector((state) => state.authStore.username)
  return (
    <div>
      <BrowserRouter>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <Container>
            <Navbar.Brand href="#">FakeShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                if(authCheck)
                {
                  <>
                    <Link
                      className=" my-2  text-decoration-none text-white"
                      to="/"
                    >
                      Home
                    </Link>
                    <Link
                      className=" my-2  mx-2  text-decoration-none text-white"
                      to="/"
                    >
                      Categories
                    </Link>
                    <Link
                      className=" my-2  mx-2  text-decoration-none text-white"
                      to="/"
                    >
                      Popular
                    </Link>
                    <Link
                      className=" my-2  mx-2  text-decoration-none text-white"
                      to="/"
                    >
                      Cart
                    </Link>
                    <Link
                      className=" my-2  mx-2  text-decoration-none text-white"
                      to="/"
                    >
                      Help
                    </Link>
                  </>
                }
              </Nav>

              <Nav>
                {authCheck === 'anonymous' ? (
                  <>
                    <Link
                      className=" my-2  mx-2  text-decoration-none text-white"
                      to="/register"
                    >
                      Register
                    </Link>
                    <Link
                      className=" my-2 mx-2  text-white text-decoration-none"
                      to="/login"
                    >
                      Login
                    </Link>
                  </>
                ) : (
                  <>
                    <Link
                      className=" my-2  mx-2 text-white text-decoration-none text-capitalize"
                      to="/profile"
                    >
                      {authCheck}
                    </Link>
                    <Link
                      className=" my-2  mx-2 text-white text-decoration-none text-capitalize"
                      to="/signout"
                    >
                      logout
                    </Link>
                  </>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<LoginAuth />} />
          <Route path="/signout" element={<SignoutAuth />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Navigation
