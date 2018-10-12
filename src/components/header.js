import React from 'react';
import { connect } from 'react-redux';

export function Header(props) {
  return (
    <a href="http://localhost:8080/auth/discord">Log in with discord </a>
  );
}

const mapStateToProps = (state, props) => ({
});

export default connect(mapStateToProps)(Header);