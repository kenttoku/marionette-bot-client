import jwtDecode from 'jwt-decode';
import queryString from 'query-string';
import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import { Route } from 'react-router-dom';
import { loadAuthToken, saveAuthToken } from '../local-storage';
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
    } else {
      this.props.client.cache.writeData({
        data: {
          username: null,
          userId: null
        }
      });
    }
  }

  render() {
    return (
      <div className="app">
        <Route path="/" component={GuildList} />
      </div>
    );
  }
}

export default withApollo(App);
