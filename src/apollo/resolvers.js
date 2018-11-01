export const defaults = {
  message: null,
  username: null,
  userId: null,
  channelId: null,
  guildId: null
};

export const resolvers = {
};

export const typeDefs = `
  type User {
    username: String!
    discordId: String!
  }
`;