import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import { useEffect } from 'react'
function DisplayProducts() {
  // const authCheck = useSelector((state) => state.authStore.username)
  const tokenCheck = useSelector((state) => state.authStore.token)
  const products = useSelector((state) => state.products)
  const dispatch = useDispatch()

  axios.defaults.headers.common['Authorization'] = `Token ${tokenCheck}`
  tokenCheck &&
    axios
      .get('http://localhost:8000')
      .then((res) => dispatch({ type: 'STORE_PRODUCT', payload: res.data }))
      .catch((err) => console.log(err))

  // console.log(products)
  return (
    <div>
      {/* {products.map((product) => (
        <div className="card">
          <div className="card-body">
            <h5 className="card-title" key={product.id}>
              {product.name_of_product}
            </h5>
            <p className="card-text">{product.owner}</p>
            <p className="card-text">{product.created_at}</p>
            <p className="card-text">{product.quantity}</p>
            <p className="card-text">{product.views}</p>

            <p className="card-text">{product.price}</p>
            <p className="card-text">{product.category}</p>
            <p className="card-text">{product.image}</p>
          </div>
        </div>
      ))} */}
    </div>
  )
}

export default DisplayProducts
