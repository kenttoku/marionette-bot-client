import React from 'react';
import qs from 'query-string';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { graphql } from 'react-apollo';

import { authSuccess } from '../actions/auth-actions';
import { loadAuthToken, saveAuthToken } from '../local-storage';
import { AuthorizationPage } from './authorization-page';
import GuildList from './guild-list';
import LoginButton from './login-button.js';
import Dashboard from './dashboard';
import { refreshQuery } from '../querys';

export class App extends React.Component {
  componentDidMount() {
    let authToken = loadAuthToken();
    if (this.props.location.search) {
      authToken = qs.parse(this.props.location.search).token;
    }
    if (authToken) {
      const decodedToken = jwtDecode(authToken);
      this.props.dispatch(authSuccess(decodedToken.user));
      saveAuthToken(authToken);
    }
  }

  resetToken() {
    const data = this.props.data;
    if (!data.loading && data.jwt) {
      saveAuthToken(data.jwt.token);
    }
  }

  render() {
    this.resetToken();

    return (
      <div className="app">
        <Route path="/auth" component={AuthorizationPage} />
        <Route path="/dashboard" component={Dashboard} />
        <LoginButton />
        <GuildList />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  currentUser: state.currentUser
});

export default graphql(refreshQuery)(connect(mapStateToProps)(App));
