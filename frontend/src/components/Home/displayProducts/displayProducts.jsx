import React from 'react'
import { useSelector } from 'react-redux'
function DisplayProducts() {
  const authCheck = useSelector((state) => state.authStore.username)
  const tokenCheck = useSelector((state) => state.authStore.token)

  return (
    <div>
      {authCheck === 'anonymous' ? (
        <p className="text-info">
          Sign in or Create an Account to view latest products
        </p>
      ) : (
        <h1>Products</h1>
      )}
    </div>
  )
}

export default DisplayProducts
