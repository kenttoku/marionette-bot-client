import React from 'react';
import requiresLogin from './requires-login';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const getGuildsQuery = gql`
  {
    guilds {
      name
      discordId
      channels {
        name
        discordId
      }
    }
  }
`;

class GuildList extends React.Component {
  displayGuilds() {
    const data = this.props.data;
    if (data.loading || !data.guilds) {
      return (<li>Loading...</li>);
    } else {
      return data.guilds.map(guild => {
        return (
          <li key={`guild-${guild.discordId}`}>{guild.name}
            <ul>{this.displayChannels(guild)}</ul>
          </li>
        );
      });
    }
  }

  displayChannels(guild) {
    return guild.channels.map(channel => {
      return (
        <li key={`channel-${channel.discordId}`}>{channel.name}</li>
      );
    });
  }

  render() {
    return (
      <ul id="guild-list">
        {this.displayGuilds()}
      </ul>
    );
  }
}

export default requiresLogin()(graphql(getGuildsQuery)(GuildList));