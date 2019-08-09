import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }
  }

  render() {
    return(
      <nav>
        <Link to="/">Home</Link>
        <Link to="/memes">Memes</Link>
        <Link to="sessions/new">Sign In</Link>
        <Link to="users/new">Sign Up</Link>
      </nav>
    )
  }
}
