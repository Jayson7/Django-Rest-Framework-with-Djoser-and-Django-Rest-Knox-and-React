import React from 'react'

import a1 from '../../../images/slider/a1.jpg'
import b from '../../../images/slider/2.jpg'
import c from '../../../images/slider/3.jpg'
import './slider.css'

function Slider() {
  const text1 = ' we sell thing that you need'
  const text2 = ' We are here to help you'
  const text3 = ' Shop with Ease, Pride and Deligence '
  const textIterator = [text1, text2, text3]

  const images = [a1, b, c]
  const randomImage = images[Math.floor(Math.random() * images.length)]
  const randomText =
    textIterator[Math.floor(Math.random() * textIterator.length)]
  const slidesWithAnimation = () => {
    return (
      <div className="slide-container">
        <div className="slide">
          <div className="slide-content">
            <div className="slide-text">{randomText}</div>
            <div className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              accusamus dolorum repudiandae mollitia, odio asperiores modi
              cumque quis sed nesciunt aliquid quae, aut repellat, officiis
              alias. Temporibus officia perspiciatis dicta!
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn btn-info">Latest Products</div>
              <div className="btn btn-info">Latest Products</div>
            </div>
          </div>
          <img className="slide-image" src={randomImage} alt="" />
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="slider">{slidesWithAnimation()}</div>
    </div>
  )
}

export default Slider
