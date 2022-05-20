import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
function DisplayProducts() {
  const authCheck = useSelector((state) => state.authStore.username)
  const tokenCheck = useSelector((state) => state.authStore.token)
  
  const dispatch = useDispatch()

  axios
    .get('http://localhost:8000', {
      headers: {
        Authorization: `Token ${tokenCheck}`,
      },
    })
    .then((res) => {
      dispatch({
        type: 'STORE_PRODUCT',
        payload: {
          ...res.data,
        },
      })
    })
    .catch((err) => {})

  return (
    <div>
      {authCheck === 'anonymous' ? (
        <p className="text-info">
          Sign in or Create an Account to view latest products
        </p>
      ) : (
        
      )}
    </div>
  )
}

export default DisplayProducts
