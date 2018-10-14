import { gql } from 'apollo-boost';

export const getGuildsQuery = gql`
  {
    guilds {
      name
      id
    }
  }
`;

export const refreshQuery = gql`
  {
    jwt {
      token
    }
  }
`;