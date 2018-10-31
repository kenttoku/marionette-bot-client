import React from 'react';
import requiresLogin from './requires-login';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const getGuildsQuery = gql`
  {
    guilds {
      name
      discordId
    }
  }
`;

class GuildList extends React.Component {
  displayGuilds() {
    const data = this.props.data;
    if (data.loading || !data.guilds) {
      return (<option>Loading...</option>);
    } else {
      return data.guilds.map(guild => {
        return (
          <option key={guild.discordId}>{guild.name}</option>
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

export default requiresLogin()(graphql(getGuildsQuery)(GuildList));