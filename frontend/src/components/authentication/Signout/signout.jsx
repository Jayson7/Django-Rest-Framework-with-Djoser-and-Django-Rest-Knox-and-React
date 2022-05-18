import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignoutAuth() {
  const navigate = useNavigate()
  const authCheck = useSelector((state) => state.authStore.username)
  const tokenCheck = useSelector((state) => state.authStore.token)
  if (authCheck === 'anonymous') {
    navigate('/login')
  } else {
    axios
      .get('http://localhost:8000/auth/token/logout', {
        headers: {
          Authorization: `Token ${tokenCheck}`,
        },
      })
      .then((res) => {
        if (res.data) {
          console.log(res.data)
          navigate('/login')
          alert('Logout Successfully')
        }
      })
      .catch((err) => {
        console.log(err)
        alert('Invalid Credentials')
        navigate('/login')
      })
  }

  return <div></div>
}

export default SignoutAuth
