import React from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';
import requiresLogin from './requires-login.js';

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
      return (<option>Loading...</option>);
    } else {
      return data.guilds.map(guild => {
        return (
          <option key={guild.id}>{guild.name}</option>
        );
      });
    }
  }
  render() {

    return (

      <select id="guild-list">
        {this.displayGuilds()}
      </select>
    );
  }
}

export default (graphql(getGuildsQuery)(GuildList));