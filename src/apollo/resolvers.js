export const defaults = {
  currentUser: null
};

export const resolvers = {};

export const typeDefs = `
  type CurrentUser {
    username: String!
    discordId: String!
  }
`;