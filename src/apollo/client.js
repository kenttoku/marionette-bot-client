import { ApolloClient } from 'apollo-client';
import { ApolloLink } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { withClientState } from 'apollo-link-state';

import { API_BASE_URL } from '../config';

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: API_BASE_URL
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('authToken');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    }
  };
});

const defaults = {
  authToken: null,
  currentUser: null,
  loading: false,
  error: null
};

const resolvers = {
  Mutation: {
    setAuthToken: (_, args, { cache }) => {
      const data = {
        authToken: {
          __typename: 'AuthToken',
          authToken: args.authToken
        }
      };
      cache.writeData({ data });
      return null;
    }
  }
};

const stateLink = withClientState({ cache, resolvers, defaults });

const client = new ApolloClient({
  link: ApolloLink.from([stateLink, authLink.concat(httpLink)]),
  cache
});

export default client;