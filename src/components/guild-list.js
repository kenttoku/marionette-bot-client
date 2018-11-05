import React, { Component } from 'react';
import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import MessageForm from './message-form';
import { clearAuthToken } from '../local-storage';
import { AUTH_URL } from '../config';

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
  selectGuild(guildId, guildName) {
    this.props.client.cache.writeData({
      data: { guildId, guildName }
    });
    this.forceUpdate();
  }

  selectChannel(channelId, channelName) {
    this.props.client.cache.writeData({
      data: { channelId, channelName }
    });
    this.forceUpdate();
  }

  displayGuilds() {
    const data = this.props.data;
    if (data.loading) {
      return (<li>Loading...</li>);
    } else if (!data.user) {
      return (<a href={`${AUTH_URL}/auth/discord`}>Sign In With Discord</a>);
    } else {
      return data.user.guilds.map(guild => {
        return (
          <li
            key={`guild-${guild.discordId}`}
            onClick={() => this.selectGuild(guild.discordId, guild.name)}
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
          onClick={() => this.selectChannel(channel.discordId, channel.name)}
        >{channel.name}</li>
      );
    });
  }

  logOut() {
    clearAuthToken();
    this.props.client.cache.writeData({
      data: {
        username: null,
        userId: null
      }
    });
    window.location.reload();
  }

  render() {
    const form = this.props.data.user ? <MessageForm /> : '';
    const channelName = this.props.client.cache.data.data.ROOT_QUERY.channelName;
    const guildName = this.props.client.cache.data.data.ROOT_QUERY.guildName;
    const selection = this.props.data.user ? <div>Selected: {guildName} - {channelName}</div> : '';
    const logOutButton = this.props.data.user ? <button onClick={() => this.logOut()}>Log out</button> : '';
    return (
      <div>
        {selection}
        <ul id="guild-list">
          {this.displayGuilds()}
        </ul>
        {form}
        {logOutButton}
      </div>
    );
  }
}

export default graphql(getGuildsQuery)(withApollo(GuildList));