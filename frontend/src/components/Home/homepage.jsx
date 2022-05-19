import React from 'react'
import './homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
// import axios from 'axios'
import Slider from './slider/slider'
// import {}
import DisplayProducts from './displayProducts/displayProducts'
const Homepage = () => {
  return (
    <div>
      <div className="homepage-wrapper">
        <Slider />
        <div className="homepage-content my-5">
          <h1> Welcome to our store </h1>{' '}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.Consequatur,
            quisquam.{' '}
          </p>{' '}
          <Link to="/products">
            <Button variant="primary"> Shop Now </Button>{' '}
          </Link>{' '}
        </div>{' '}
        <div className="homepage-content-bottom my-5">
          <h4>New Arrivals </h4> {<DisplayProducts />}
        </div>{' '}
      </div>{' '}
    </div>
  )
}

export default Homepage
