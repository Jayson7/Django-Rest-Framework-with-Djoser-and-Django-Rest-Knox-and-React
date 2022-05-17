import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'
// import {}

const Homepage = () => {
  const authCheck = useSelector((state) => state.authStore.username)
  const tokenCheck = useSelector((state) => state.authStore.token)

  if (authCheck !== 'anonymous') {
    console.log(tokenCheck)
    axios
      .get('http://localhost:8000', {
        headers: {
          Authorization: `Token ${tokenCheck}`,
        },
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12 my-3">
            <h1> Welcome to Fake Auth </h1>
          </div>
          {authCheck === 'anonymous' ? (
            <div className="col-md-12">
              <h4> Welcome {authCheck}, Please Sign In </h4>
              <Link to="/login">
                <Button className="py-2 px-5" variant="primary">
                  Sign In
                </Button>
              </Link>
            </div>
          ) : (
            <div className="col-md-12">
              <h4> Welcome {authCheck} </h4>

              <Link to="/signout">
                <Button className="py-2 px-5" variant="primary">
                  Sign Out
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Homepage
