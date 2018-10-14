import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Dashboard from './dashboard';
const GET_CURRENT_USER = gql`
  {
    authToken @client {
      authToken
    }
  }
`;

const CurrentUser = () => (
  <Query query={GET_CURRENT_USER}>
    {data => {
      console.log(data);
      return (<Dashboard />);
    }}
  </Query>
);

export default CurrentUser;