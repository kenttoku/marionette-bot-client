import React from 'react';
import { connect } from 'react-redux';

export function LoginButton() {
  return (
    <button href="http://localhost:8080/auth/discord">Log in with discord </button>
  );
}

export default connect()(LoginButton);