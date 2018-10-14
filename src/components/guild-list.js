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
  displayGuilds() {
    const data = this.props.data;
    if (data.loading) {
      return (<div>Loading...</div>);
    } else {
      return data.guilds.map(guild => {
        return (
          <li key={guild.id}>{guild.name}</li>
        );
      });
    }
  }
  render() {

    return (
      <div>
        <ul id="guild-list">
          {this.displayGuilds()}
        </ul>
      </div>
    );
  }
}

export default graphql(getGuildsQuery)(GuildList);