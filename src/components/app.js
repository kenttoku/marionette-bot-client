import jwtDecode from 'jwt-decode';
import queryString from 'query-string';
import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import { Link, Route } from 'react-router-dom';
import { saveAuthToken } from '../local-storage';
import GuildList from './guild-list';

class App extends Component {
  componentDidMount() {
    let query = queryString.parse(this.props.location.search);
    if (query.token) {
      saveAuthToken(query.token);
      const decodedToken = jwtDecode(query.token);
      this.props.client.cache.writeData({
        data: { currentUser: { ...decodedToken.user, __typename: 'User' } }
      });
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div className="app">
        <a href="http://localhost:8080/auth/discord">Sign In With Discord</a>
        <hr/>
        <Link to="/guilds">Test</Link>
        <Route path="/guilds" component={GuildList} />
      </div>
    );
  }
}

export default withApollo(App);
