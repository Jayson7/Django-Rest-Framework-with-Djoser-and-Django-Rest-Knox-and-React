import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
function DisplayProducts() {
  const authCheck = useSelector((state) => state.authStore.username)
  const tokenCheck = useSelector((state) => state.authStore.token)

  const fetchLitteProducts = () => {
    axios
      .get('http://localhost:8000', {
        headers: {
          Authorization: `Token ${tokenCheck}`,
        },
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      {authCheck === 'anonymous' ? (
        <p className="text-info">
          Sign in or Create an Account to view latest products
        </p>
      ) : (
        <p>Products</p>
      )}
    </div>
  )
}

export default DisplayProducts
