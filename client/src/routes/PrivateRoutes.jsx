import React, { useContext } from 'react'
import { Navigate } from 'react-router';

export default function PrivateRoutes({ children }) {
    const { user } = useContext(AuthContext);

    if (!user) {
        <Navigate to={'/signin'} />
    }
    return children
}
