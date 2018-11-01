import React, { Component } from 'react';
import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

const getGuildsQuery = gql`
  {
    user(where:{}) {
      guilds {
        name
        discordId
        channels {
          name
          discordId
        }
      }
    }
  }
`;

class GuildList extends Component {
  selectGuild(guildId) {
    this.props.client.cache.writeData({
      data: { guildId }
    });
  }

  selectChannel(channelId) {
    this.props.client.cache.writeData({
      data: { channelId }
    });
  }

  displayGuilds() {
    const data = this.props.data;
    if (data.loading || !data.user) {
      return (<li>Loading...</li>);
    } else {
      return data.user.guilds.map(guild => {
        return (
          <li
            key={`guild-${guild.discordId}`}
            onClick={() => this.selectGuild(guild.discordId)}
          >{guild.name}
            <ul>{this.displayChannels(guild)}</ul>
          </li>
        );
      });
    }
  }

  displayChannels(guild) {
    return guild.channels.map(channel => {
      return (
        <li
          key={`channel-${channel.discordId}`}
          onClick={() => this.selectChannel(channel.discordId)}
        >{channel.name}</li>
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

export default graphql(getGuildsQuery)(withApollo(GuildList));