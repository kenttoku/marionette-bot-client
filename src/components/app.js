import React from 'react';
import { Route } from 'react-router-dom';

import AuthorizationPage from './authorization-page';
import LoginButton from './login-button.js';
import CurrentUser from './current-user';
export class App extends React.Component {
  componentDidMount() {
  }

  render() {
    console.log(this.props);

    return (
      <div className="app">
        <Route
          path="/auth"
          component={AuthorizationPage}
          location={this.props.location}/>
        <Route
          path="/dashboard"
          component={CurrentUser}
          location={this.props.location}/>
        <LoginButton />
      </div>
    );
  }
}

export default App;
