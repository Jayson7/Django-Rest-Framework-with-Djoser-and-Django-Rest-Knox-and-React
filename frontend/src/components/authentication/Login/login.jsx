import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'
const LoginAuth = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 my-5">
            <h1 className="text-center">Login</h1>
            <Form>
              <Form.Group controlId="formBasicUsername" className="my-3">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword" className="my-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <button className="btn btn-primary btn-block">Login</button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginAuth
