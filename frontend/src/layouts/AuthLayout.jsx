import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { userStateContext } from '../contexts/AuthContext'
const AuthLayout = () => {
    const { authToken } = userStateContext();
    if (!authToken) {
       return <Navigate to='/auth/login' replace={true} />
    }
    return (
        <>
            AuthLayout
            <Outlet />
        </>
    )
}

export default AuthLayout
