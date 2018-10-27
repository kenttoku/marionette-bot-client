import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import queryString from 'query-string';
import { saveAuthToken } from '../local-storage';
import GuildList from './guild-list';

class App extends Component {
  componentDidMount() {
    let query = queryString.parse(this.props.location.search);
    if (query.token) {
      saveAuthToken(query.token);
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

export default App;
