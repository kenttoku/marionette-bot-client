import jwtDecode from 'jwt-decode';
import queryString from 'query-string';
import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import { Link, Route } from 'react-router-dom';
import { loadAuthToken, saveAuthToken } from '../local-storage';
import GuildList from './guild-list';
import MessageForm from './message-form';

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
      this.props.client.cache.writeData({
        data: { currentUser: { ...decodedToken.user, __typename: 'User' } }
      });
    }
  }

  render() {
    return (
      <div className="app">
        <a href="http://localhost:8080/auth/discord">Sign In With Discord</a>
        <hr/>
        <Link to="/guilds">Test</Link>
        <Route path="/guilds" component={GuildList} />
        <Route path="/guilds" component={MessageForm} />
      </div>
    );
  }
}

export default withApollo(App);
