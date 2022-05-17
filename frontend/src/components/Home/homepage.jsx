import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import Slider from './slider/slider'
// import {}

const Homepage = () => {
  const authCheck = useSelector((state) => state.authStore.username)
  const tokenCheck = useSelector((state) => state.authStore.token)

  if (authCheck !== 'anonymous') {
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
      <div className="homepage-wrapper">
        <Slider />
      </div>
    </div>
  )
}

export default Homepage
