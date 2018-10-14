import React from 'react';
import DashboardRedirect from './dashboard-redirect';

class DoMutation extends React.Component {
  componentDidMount() {
    const { mutate } = this.props;
    mutate();
  }

  render() {
    return (
      <DashboardRedirect />
    );
  }
}

export default DoMutation;