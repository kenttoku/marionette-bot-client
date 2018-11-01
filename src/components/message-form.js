import React, { Component } from 'react';
import { graphql, withApollo } from 'react-apollo';
import gql from 'graphql-tag';

const createMessage = gql`
  mutation(
    $content: String!, 
    $userId: String!, 
    $channelId: String!, 
    $guildId: String!
  ) {
    createMessage(
      data: {
        content: $content
        userId: $userId
        channelId: $channelId
        guildId: $guildId
      }
    ) {
    content
    }
  }
`;

class MessageForm extends Component {
  submitForm(e) {
    e.preventDefault();
    this.props.createMessage({
      variables: {
        content: this.props.client.cache.data.data.ROOT_QUERY.message,
        userId: this.props.client.cache.data.data.ROOT_QUERY.userId,
        channelId: '496750314205085726',
        guildId: 'blah'
      }
    });
  }

  changeMessage(e) {
    this.props.client.cache.writeData({
      data: { message: e.target.value }
    });
  }

  render() {
    return (
      <form onSubmit={e => this.submitForm(e)}>
        <label htmlFor="message">Message</label>
        <input type="text" id="message" onChange={e => this.changeMessage(e)} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}


export default graphql(createMessage, { name: 'createMessage' })(withApollo(MessageForm));