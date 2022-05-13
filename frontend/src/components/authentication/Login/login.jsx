import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'
import { useReducer } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const LoginAuth = () => {
  const initialState = {
    username: '',
    password: '',
  }

  function monitorReducer(regdata, { field, value }) {
    return {
      ...regdata,
      [field]: value,
    }
  }
  const [regdata, dispatch] = useReducer(monitorReducer, initialState)
  const onchange = (e) => {
    dispatch({ field: e.target.name, value: e.target.value })
  }
  const Handlesubmit = (event) => {
    event.preventDefault()
    console.log(regdata)
    axios
      .post('http://localhost:8000/api/auth/login', regdata)
      .then((res) => {
        console.log(res.data)
        if (res.data.success) {
          window.location.href = '/'
        } else {
          alert(res.data.message)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const { username, password } = regdata
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 my-5">
            <h1 className="text-center">Login</h1>
            <Form onSubmit={Handlesubmit}>
              <Form.Group className="my-3">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={onchange}
                  name="username"
                  required
                />
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={onchange}
                  required
                  name="password"
                />
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
