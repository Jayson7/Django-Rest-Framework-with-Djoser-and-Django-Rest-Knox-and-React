import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

function SignoutAuth() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const authCheck = useSelector((state) => state.authStore.username)
    const tokenCheck = useSelector((state) => state.authStore.token)
    if (authCheck === 'anonymous') {
        navigate('/login')
    } else {
        axios
            .post('http://localhost:8000/auth/token/logout', {
                headers: {
                    Authorization: `Token ${tokenCheck}`,
                },
            })
            .then((res) => {
                dispatch({
                    type: 'LOGOUT',
                })
                window.location.reload()
                navigate('/login')
            })
            .catch((err) => {
                console.log(err)
            })
    }
}

export default SignoutAuth