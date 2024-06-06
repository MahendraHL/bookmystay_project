import React from 'react';
import { Redirect } from 'react-router-dom';

const RequireAuth = (Component) => {
  const isAuthenticated = sessionStorage.getItem('email') !== null; // Check if user is signed in

  return isAuthenticated ? (
    <Component />
  ) : (
    <Redirect to="/signin" /> // Redirect to sign-in page if not signed in
  );
};

export default RequireAuth;
