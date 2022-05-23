import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import a1 from '../../../images/slider/a1.jpg'
import b from '../../../images/slider/2.jpg'
import c from '../../../images/slider/3.jpg'
import './slider.css'
import { useSelector } from 'react-redux'

function Slider() {
  const slidesWithAnimation = () => {
    return <div>{/* carousel */}</div>
  }

  return (
    <div>
      <div className="slider"> {slidesWithAnimation()} </div>{' '}
    </div>
  )
}

export default Slider
