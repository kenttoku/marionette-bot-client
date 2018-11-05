import jwtDecode from 'jwt-decode';
import queryString from 'query-string';
import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import { Route } from 'react-router-dom';
import { loadAuthToken, saveAuthToken, clearAuthToken } from '../local-storage';
import GuildList from './guild-list';

class App extends Component {
  componentDidMount() {
    let query = queryString.parse(this.props.location.search);
    if (query.token) {
      saveAuthToken(query.token);
      this.props.history.push('/');
    }

    const token = loadAuthToken();

    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.user) {
        this.props.client.cache.writeData({
          data: {
            username: decodedToken.user.username,
            userId: decodedToken.user.discordId
          }
        });

      }
    }
  }

  logOut() {
    clearAuthToken();
    this.forceUpdate();
  }

  render() {
    return (
      <div className="app">
        <Route path="/" component={GuildList} />
        <button onClick={() => this.logOut()}>Log out</button>
      </div>
    );
  }
}

export default withApollo(App);
