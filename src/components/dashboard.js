import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';

export class Dashboard extends React.Component {
  render() {
    return (
      <div className="dashboard">
        Dashboard
      </div>
    );
  }
}


export default connect()(Dashboard);