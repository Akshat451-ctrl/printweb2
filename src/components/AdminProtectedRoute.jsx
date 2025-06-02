import React from 'react';
import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';

const AdminProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  if (!token || role !== 'admin') {
    alert('Unauthorized access. Please login as Admin.');
    return <Navigate to="/login" />;
  }

  return children;
};
AdminProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AdminProtectedRoute;

