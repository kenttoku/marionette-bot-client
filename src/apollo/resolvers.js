export const defaults = {
  currentUser: null
};

export const resolvers = {
};

export const typeDefs = `
  type User {
    username: String!
    discordId: String!
  }
`;