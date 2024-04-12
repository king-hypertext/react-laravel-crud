import React, { useEffect } from 'react'
import { Outlet, useNavigate, Navigate } from 'react-router-dom'
import { userStateContext } from '../contexts/AuthContext'
const GuestLayout = () => {
    const { authToken } = userStateContext();
    if (authToken !== null) {
        return <Navigate to={'/app'} replace={true} />;
    }
    const navigate = useNavigate();
    useEffect(() => {
        navigate('auth/login', { replace: true });
    }, []);
    return (
        <>
            <Outlet />
        </>
    )
}

export default GuestLayout
