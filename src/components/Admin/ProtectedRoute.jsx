import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../Pages/UserAuthentication/AuthProvider';

function ProtectedRoute({ element: Component, ...rest }) {
    const { user, isAdmin } = useAuth();
    const location = useLocation();

    if (!user || !isAdmin) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return Component;
}

export default ProtectedRoute;
