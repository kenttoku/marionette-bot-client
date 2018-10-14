import React from 'react';
import { connect } from 'react-redux';

export function LoginButton() {
  return (
    <a href="http://localhost:8080/auth/discord">Log in with discord </a>
  );
}

export default connect()(LoginButton);