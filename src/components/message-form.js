import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const createMessage = gql`
  mutation {
    createMessage(
      data: {
        content: "hello"
        userId: "12345"
        channelId: "testing"
        guildId: "guildid"
      }
    ) {
      content
    }
  }
`;

class MessageForm extends Component {
  render() {
    return (
      <form>
        <label htmlFor="message">Message</label>
        <input type="textfield"></input>
        <button type="submit">Submit</button>
      </form>
    );
  }
}


export default graphql()(MessageForm);