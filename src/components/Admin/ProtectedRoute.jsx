import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Pages/UserAuthentication/AuthProvider';
import { ALLOWED_EMAIL } from './contants';
function ProtectedRoute({ element: Component, ...rest }) {
    const { user } = useAuth();
    const location = useLocation();

    if (!user || !ALLOWED_EMAIL.includes(user.email)) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    return Component;
}

export default ProtectedRoute;
