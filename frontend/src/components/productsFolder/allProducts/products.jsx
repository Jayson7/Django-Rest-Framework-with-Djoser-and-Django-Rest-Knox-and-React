import React from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
// import { useState } from 'react'

function AllProducts() {
  const authCheck = useSelector((state) => state.authStore.username)
  const tokenCheck = useSelector((state) => state.authStore.token)

  if (authCheck === 'anonymous') {
    return (
      <div>
        <h1>Sign in or Create an Account to view latest products</h1>
      </div>
    )
  } else {
    axios
      .get('http://localhost:8000', {
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

    return <div></div>
  }
}
export default AllProducts
