export const defaults = {
  authToken: null,
  currentUser: null,
  loading: false,
  error: null
};

export const resolvers = {
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

export const typeDefs = `
  type AuthToken {
    authToken: String!
  }

  type Mutation {
    setAuthToken(authToken: String!): AuthToken
  }

  type Query {
    authToken: AuthToken
  }
`;