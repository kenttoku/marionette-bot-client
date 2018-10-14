import gql from 'graphql-tag';

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