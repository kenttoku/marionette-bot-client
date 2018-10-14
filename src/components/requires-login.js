import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default () => Component => {
  function RequiresLogin(props) {
    const { authenticating, loggedIn, error, ...passThroughProps } = props;
    if (authenticating) {
      return <div>Logging in...</div>;
    } else if (!loggedIn || error) {
      console.log('ran');
      return <Redirect to="/" />;
    }

    return <Component {...passThroughProps} />;
  }

  const displayName = Component.displayName || Component.name || 'Component';
  RequiresLogin.displayName = `RequiresLogin(${displayName})`;

  const mapStateToProps = state => ({
    authenticating: state.loading,
    loggedIn: state.currentUser !== null,
    error: state.error
  });

  return connect(mapStateToProps)(RequiresLogin);
};