import React from 'react';
import qs from 'query-string';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Header from './header';
import jwtDecode from 'jwt-decode';

import { setAuthToken, authSuccess } from '../actions/auth-actions';
import { saveAuthToken } from '../local-storage';
import { AuthorizationPage } from './authorization-page';

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
    return (
      <div>
        <Route path="/auth" component={AuthorizationPage} />
        <Header />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => ({
  authToken: qs.parse(props.location.search).token
});

export default connect(mapStateToProps)(App);
