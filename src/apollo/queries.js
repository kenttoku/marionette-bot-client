import gql from 'graphql-tag';

export const getGuildsQuery = gql`
  {
    guilds {
      name
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