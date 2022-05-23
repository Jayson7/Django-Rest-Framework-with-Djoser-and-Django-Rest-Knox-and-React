import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './notfound.css'
import a404 from '../../images/404a.jpg'
import b404 from '../../images/404b.jpg'

function NotFound() {
  const images = [a404, b404]
  const randomImage = images[Math.floor(Math.random() * images.length)]

  return (
    <div className="container mt-5">
      <div className="notfoundImg mt-5">
        <img className="r mt-5" src={randomImage} alt="" />
        <h1 className="ts"> 404 </h1>{' '}
        <h5 className="t">
          The page you requested for does not exist on our App{' '}
        </h5>{' '}
        <div className="d-flex justify-content-center align-items-center">
          <Link
            className="btn btn-success text-decoration-none py-2 w-50 my-2 "
            to="/"
          >
            Guide Me{' '}
          </Link>{' '}
        </div>{' '}
      </div>{' '}
    </div>
  )
}

export default NotFound
