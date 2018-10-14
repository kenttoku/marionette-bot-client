import React from 'react';
import qs from 'query-string';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import { authSuccess } from '../actions/auth-actions';
import { saveAuthToken } from '../local-storage';
import { AuthorizationPage } from './authorization-page';
import GuildList from './guild-list';
import LoginButton from './login-button.js';

export class App extends React.Component {
  componentDidMount() {
    const authToken = qs.parse(this.props.location.search).token;
    if (authToken) {
      const decodedToken = jwtDecode(authToken);
      this.props.dispatch(authSuccess(decodedToken.user));
      saveAuthToken(authToken);
    }
  }

  render() {
    console.log(this.props);
    return (
      <div className="app">
        <Route path="/auth" component={AuthorizationPage} />
        <LoginButton />
        <GuildList />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(App);
