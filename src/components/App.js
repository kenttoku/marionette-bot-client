import React from 'react';
import queryString from 'query-string';
import { saveAuthToken } from '../local-storage';

class App extends React.Component {
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
      </div>
    );
  }
}

export default App;
