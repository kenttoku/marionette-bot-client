import React from 'react';
import qs from 'query-string';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import { setAuthToken, authSuccess } from '../actions/auth-actions';
import { saveAuthToken } from '../local-storage';
import { AuthorizationPage } from './authorization-page';
import GuildList from './guild-list';
import LoginButton from './login-button.js';

export class App extends React.Component {
  componentDidMount() {
    if (this.props.authToken) {
      const decodedToken = jwtDecode(this.props.authToken);
      this.props.dispatch(setAuthToken(this.props.authToken));
      this.props.dispatch(authSuccess(decodedToken.user));
      saveAuthToken(this.props.authToken);
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
  authToken: qs.parse(props.location.search).token
});

export default connect(mapStateToProps)(App);
