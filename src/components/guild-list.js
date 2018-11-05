import React, { Component } from 'react';
import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import MessageForm from './message-form';

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
    if (data.loading) {
      return (<li>Loading...</li>);
    } else if (!data.user) {
      return (<a href="http://localhost:8080/auth/discord">Sign In With Discord</a>);
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
    const form = this.props.data.user ? <MessageForm /> : '';
    return (
      <div>
        <ul id="guild-list">
          {this.displayGuilds()}
        </ul>
        {form}
      </div>
    );
  }
}

export default graphql(getGuildsQuery)(withApollo(GuildList));