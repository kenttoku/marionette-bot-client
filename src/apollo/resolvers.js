export const defaults = {
  currentUser: null
};

export const resolvers = {
  Mutation: {
    setUser: (_, { user }, { cache }) => {
      const data = { user, __typename: 'User' };
      cache.writeData({ data });
    }
  }
};

export const typeDefs = `
  type User {
    username: String!
    discordId: String!
  }
`;