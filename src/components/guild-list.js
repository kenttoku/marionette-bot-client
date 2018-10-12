import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

const getGuildsQuery = gql`
  {
    guilds {
      name
      id
    }
  }
`;

class GuildList extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <ul id="guild-list">
          <li>Guild Name</li>
        </ul>
      </div>
    );
  }
}

export default graphql(getGuildsQuery)(GuildList);