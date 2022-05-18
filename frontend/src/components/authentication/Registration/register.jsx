import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Form } from 'react-bootstrap'
import { useReducer } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  const initialState = {
    username: '',
    password: '',
    email: '',
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
    // console.log(regdata)
    axios
      .post('http://localhost:8000/auth/users/', regdata)
      .then((res) => {
        if (res.data) {
          console.log(res.data)
          navigate('/login')
          alert('Account Registered Successfully')
        }
      })
      .catch((err) => {
        console.log(err)
        alert('Invalid Credentials')
      })
  }
  const { username, password, email } = regdata
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 my-5">
            <h1 className="text-center"> Create An Account </h1>{' '}
            <Form onSubmit={Handlesubmit}>
              <Form.Group className="my-3">
                <Form.Label> Username </Form.Label>{' '}
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={onchange}
                  name="username"
                  required
                />
              </Form.Group>{' '}
              <Form.Group className="my-3">
                <Form.Label> email </Form.Label>{' '}
                <Form.Control
                  type="email"
                  placeholder="email"
                  value={email}
                  onChange={onchange}
                  required
                  name="email"
                />
              </Form.Group>
              <Form.Group className="my-3">
                <Form.Label> Password </Form.Label>{' '}
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={onchange}
                  required
                  name="password"
                />
              </Form.Group>
              <button className="btn btn-primary btn-block"> Register </button>{' '}
            </Form>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  )
}

export default Register
