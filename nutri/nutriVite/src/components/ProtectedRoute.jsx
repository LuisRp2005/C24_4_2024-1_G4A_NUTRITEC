// components/ProtectedRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, isAuthenticated, ...props }) => {
  return (
    isAuthenticated ? <Route {...props} element={<Component />} /> : <Navigate to="/login" />
  );
};

export default ProtectedRoute;
