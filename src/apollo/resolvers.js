export const defaults = {
  username: null,
  userId: null,
  message: null
};

export const resolvers = {
};

export const typeDefs = `
  type User {
    username: String!
    discordId: String!
  }
`;