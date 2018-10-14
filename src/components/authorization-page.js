import React from 'react';
import qs from 'query-string';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import DoMutation from './do-mutation';

const SET_AUTH_TOKEN = gql`
  mutation SetAuthToken($authToken: String!) {
    setAuthToken(authToken: $authToken) @client
  }
`;

const AuthorizationPage = (props) => {
  let authToken;
  if (props.location.search) {
    authToken = qs.parse(props.location.search).token;
  }
  console.log(authToken);
  return (
    <Mutation mutation={SET_AUTH_TOKEN} variables={{ authToken }}>
      {setAuthToken => (
        <DoMutation mutate={setAuthToken} />
      )}
    </Mutation>
  );
};

export default AuthorizationPage;