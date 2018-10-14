import React from 'react';
import { Route } from 'react-router-dom';

import LoginButton from './login-button';
import AuthPage from './auth-page';

class App extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="app">
        <LoginButton />
        <Route path="/auth"
          component={AuthPage}
        />
      </div>
    );
  }
}

export default App;
