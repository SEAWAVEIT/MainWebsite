import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Pages/UserAuthentication/AuthProvider';

function ProtectedRoute({ element: Component, ...rest }) {
    const { user } = useAuth();
    const location = useLocation();

    const ALLOWED_EMAIL = 'eamd.seawave@gmail.com';

    if (!user || user.email !== ALLOWED_EMAIL) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }
    return Component;
}

export default ProtectedRoute;
