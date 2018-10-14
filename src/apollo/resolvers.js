export const defaults = {
  currentUser: null,
  loading: false,
  error: null
};

export const resolvers = {};

export const typeDefs = `
  type CurrentUser {
    id: String!
    username: String!
    email: String!
    discordId: String!
  }
`;