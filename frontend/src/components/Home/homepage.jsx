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
  }, [])
  const DisplayProducts = () => {
    if (products) {
      return products.map((product) => {
        return (
          <div className="col-md-4" key={product.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name_of_product}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">{product.price}</p>
                <p className="card-text">{product.quantity}</p>
                <Link to={`/product/${product.id}`}>
                  <Button variant="primary">View</Button>
                </Link>
              </div>
            </div>
          </div>
        )
      })
    } else {
      return (
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Please Login to view products</h5>
            </div>
          </div>
        </div>
      )
    }
  }

  return (
    <div>
      <h1>Hompage</h1>
      {/* <Slider /> */}
      <div className="row">
        <DisplayProducts />
      </div>
    </div>
  )
}
export default Homepage
