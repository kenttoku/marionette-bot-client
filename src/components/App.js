import React from 'react';
import qs from 'query-string';
import { connect } from 'react-redux';
import { authenticate } from '../actions/actions';
import { Route } from 'react-router-dom';
import Header from './header';

export class App extends React.Component {
  componentDidMount() {
    console.log(this.props.authToken);
    this.props.dispatch(authenticate());
  }

  render() {
    return (
      <Route path='/' component={Header} />
    );
  }
}

const mapStateToProps = (state, props) => ({
  authToken: qs.parse(props.location.search).token
});

export default connect(mapStateToProps)(App);