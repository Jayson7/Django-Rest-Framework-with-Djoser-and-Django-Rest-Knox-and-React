import React from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import './homepage.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import axios from 'axios'
// import Slider from './slider/slider'

const Homepage = () => {
  const products = useSelector((state) => state.products.product)
  // const user = useSelect(state)
  const authCheck = useSelector((state) => state.authStore.token)
  const dispatch = useDispatch()
  axios.defaults.headers.common['Authorization'] = `token ${authCheck}`
  useEffect(() => {
    axios
      .get('http://localhost:8000')
      .then((res) => {
        dispatch({
          type: 'STORE_PRODUCT',
          payload: res.data,
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }, [authCheck])
  const DisplayProducts = () => {
    if (products) {
      return products.map((product) => {
        return (
          <div key={product.id} className="col-md-4">
            <div className="card m-3">
              <div className="card-body">
                <img className="card-image" src={product.image} alt="" />
                <h5 className="card-title text-center my-2 h3 text-capitalize">
                  {product.name_of_product}
                </h5>
                <div className="d-flex justify-content-around align-content-center flex-column h6 my-3">
                  <p className="card-text">Cateory: {product.category}</p>
                  <p className="card-text">Price: {product.price}</p>
                  <p className="card-text">Quantity: {product.quantity}</p>
                  <p className="card-text">Views: {product.views}</p>
                </div>
                <div className="d-flex align-content-center justify-content-evenly flex-wrap">
                  <Link to={`/product/${product.id}`}>
                    <Button variant="primary" className="mx-2 my-2 px-5">
                      View
                    </Button>
                  </Link>
                  <Link to={`/product/${product.id}`}>
                    <Button variant="primary" className="mx-2 my-2 px-4">
                      Add to Cart
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )
      })
    } else {
      return (
        <div className="col-md-12">
          <div className="card">
            <div className="card-body text-center">
              <h5 className="card-title">
                Please Login or Sign up to view products
              </h5>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      <br />
      <br />
      <br />
      <div className="container-fluid my-5">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron bg-dark py-5 px-4 text-white">
              <h1 className="display-4">Welcome to the Homepage</h1>
              <p className="lead">
                This is a simple hero unit, a simple jumbotron-style component
                for calling extra attention to featured content or information.
              </p>
              <hr className="my-4" />
              <p>
                It uses utility classes for typography and spacing to space
                content out within the larger container.
              </p>
              <p className="lead">
                <Link to="/products" className="btn btn-primary btn-lg">
                  View Products
                </Link>
              </p>
            </div>
          </div>
          <br />

          <div className="container my-5">
            <h4 className="text-center my-5 h2">Latest Products</h4>
            <div className="container">
              <div className="row">{<DisplayProducts />}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Homepage
