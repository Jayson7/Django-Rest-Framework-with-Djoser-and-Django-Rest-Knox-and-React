import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
// import { useEffect } from 'react'
function DisplayProducts() {
  // const authCheck = useSelector((state) => state.authStore.username)
  const tokenCheck = useSelector((state) => state.authStore.token)
  const products = useSelector((state) => state.products)

  console.log(products)
  tokenCheck
    ? axios
        .get('http://localhost:8000/', {
          headers: {
            Authorization: `Token ${tokenCheck}`,
          },
        })
        .then((res) => {
          console.log(res)
        })

        .catch((err) => {
          console.log(err)
        })
    : console.log('no token')

  return (
    <div>
      {tokenCheck ? (
        <div>
          {products.map((product) => (
            <div className="card" key={product.id}>
              <img className="card-img-top" src={product.image} alt="" />
              <div className="card-body">
                <h5 className="card-title"> {product.name} </h5>
                <p className="card-text"> {product.description} </p>
                <p className="card-text">
                  <small className="text-muted"> {product.price} </small>
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-info">
          Sign in or Create an Account to view latest products
        </p>
      )}{' '}
    </div>
  )
}

export default DisplayProducts
