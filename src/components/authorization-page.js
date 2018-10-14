import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export class AuthorizationPage extends React.Component {
  render() {
    return (
      <Redirect to="/dashboard" />
    );
  }
}

export default connect()(AuthorizationPage);