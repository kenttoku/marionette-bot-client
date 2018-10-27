import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloProvider } from 'react-apollo';
import App from './components/App';
import client from './apollo/client';
import './index.css';

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Route path='/' component={App} />
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
);
