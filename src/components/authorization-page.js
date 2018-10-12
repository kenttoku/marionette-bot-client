import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export class AuthorizationPage extends React.Component {
  render() {
    return (
      <div>
        <Redirect to="/" />
      </div>
    );
  }
}

export default connect()(AuthorizationPage);