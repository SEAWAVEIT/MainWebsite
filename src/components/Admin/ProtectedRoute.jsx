import React from 'react'
import { Route, Navigate } from "react-router-dom"
import { useAuth } from "../Pages/UserAuthentication/AuthProvider"

function ProtectedRoute({ element: Component, ...rest }) {
    const { user, isAdmin } = useAuth()

    return (
        <Route
            {...rest}
            element={user && isAdmin ? Component : <Navigate to="/signin" />}
        />
    )
}

export default ProtectedRoute