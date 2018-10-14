import React from 'react';
import qs from 'query-string';
import gql from 'graphql-tag';
import jwtDecode from 'jwt-decode';
import { withApollo } from 'react-apollo';

import { saveAuthToken } from '../local-storage';
import DashboardRedirect from './dashboard-redirect';

const query = gql`
  query GetCurrentUser {
    currentUser @client {
      email
      discordId
    }
  }
`;

class AuthPage extends React.Component {
  componentDidMount() {
    if (this.props.location.search) {
      const authToken = qs.parse(this.props.location.search).token;
      saveAuthToken(authToken);
      console.log(this.props.client);
      const currentUser = jwtDecode(authToken).user;
      currentUser.__typename = 'CurrentUser';
      this.props.client.writeData({ data: { currentUser } });
      const read = this.props.client.readQuery({
        query
      });
      console.log(read);
    }
  }
  render() {
    return (<DashboardRedirect/>);
  }
}

export default withApollo(AuthPage);