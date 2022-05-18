import React from 'react'
import { Link } from 'react-router-dom'
import a1 from '../../../images/slider/a1.jpg'
import b from '../../../images/slider/2.jpg'
import c from '../../../images/slider/3.jpg'
import './slider.css'
import { useSelector } from 'react-redux'

function Slider() {
  const authCheck = useSelector((state) => state.authStore.username)
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
            <div className="slide-text"> {randomText} </div>{' '}
            <div className="info">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam
              accusamus dolorum repudiandae mollitia, odio asperiores modi
              cumque quis sed nesciunt aliquid quae, aut repellat, officiis
              alias.Temporibus officia perspiciatis dicta!
            </div>{' '}
            <div className="d-flex justify-content-evenly align-items-center btn-wrap">
              <div className="btn btn-info text-white py-2 my-5 ">
                Latest Products{' '}
              </div>{' '}
              {authCheck === 'anonymous' ? (
                <Link
                  className="btn btn-warning text-white py-2 px-5 my-5 text-decoration-none "
                  to="/login"
                >
                  Login{' '}
                </Link>
              ) : (
                <div className="btn btn-dark  text-white py-2 px-5 my-4 ">
                  Best Offers{' '}
                </div>
              )}{' '}
            </div>{' '}
          </div>{' '}
          <img className="slide-image" src={randomImage} alt="" />
        </div>{' '}
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
