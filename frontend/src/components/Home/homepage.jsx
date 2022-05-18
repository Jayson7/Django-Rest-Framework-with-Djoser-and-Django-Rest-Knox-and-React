import React from 'react'
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
        <div className="homepage-content">
          <div className="homepage-content-left">
            <div className="homepage-content-left-top">
              <h1> Welcome to our store </h1>{' '}
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit.Consequatur, quisquam.{' '}
              </p>{' '}
              <Link to="/products">
                <Button variant="primary"> Shop Now </Button>{' '}
              </Link>{' '}
            </div>{' '}
            <div className="homepage-content-left-bottom">
              <h1> New Arrivals </h1> {<DisplayProducts />}
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  )
}

export default Homepage
