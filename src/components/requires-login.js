import React from 'react';
import { withApollo } from 'react-apollo';

export default () => Component => {
  function RequiresLogin(props) {
    const { client, ...passThroughProps } = props;
    console.log(client);
    // if (authenticating) {
    //   return <Spinner className="spinner" name="pacman" />;
    // } else if (!loggedIn || error) {
    //   return <Redirect to="/" />;
    // }

    return <Component {...passThroughProps} />;
  }

  const displayName = Component.displayName || Component.name || 'Component';
  RequiresLogin.displayName = `RequiresLogin(${displayName})`;

  return withApollo(RequiresLogin);
};
