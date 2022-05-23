import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import a1 from '../../../images/slider/a1.jpg'
import b from '../../../images/slider/2.jpg'
import c from '../../../images/slider/3.jpg'
import './slider.css'
import { useSelector } from 'react-redux'

function Slider() {
  const slidesWithAnimation = () => {
    return (
      <div className="container p-5">
        {/* carousel */}

        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100 " src={a1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={c} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={b} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    )
  }

  return (
    <div>
      <div className="slider"> {slidesWithAnimation()} </div>{' '}
    </div>
  )
}

export default Slider
