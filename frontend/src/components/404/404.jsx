import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import './notfound.css'
import a404 from '../../images/404a.jpg'
import b404 from '../../images/404b.jpg'

function NotFound() {
  const images = [a404, b404]
  const randomImage = images[Math.floor(Math.random() * images.length)]

  return (
    <div>
      <div className="notfoundImg">
        <img className="r" src={randomImage} alt="" />
        <h1 className="ts">404</h1>
        <h5 className="t">
          The page you requested for does not exist on put App{' '}
        </h5>
        <div className="tbtn offset-5 ">
          <button className="btn btn-success py-2 px-5 mx-5 mt-3 ">
            Guide Me
          </button>
        </div>
      </div>
    </div>
  )
}

export default NotFound
