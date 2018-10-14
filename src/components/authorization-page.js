import React from 'react';
import { Redirect } from 'react-router-dom';

function AuthorizationPage() {
  return (
    <Redirect to="/dashboard" />
  );
}

export default AuthorizationPage;