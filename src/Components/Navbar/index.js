import React from 'react';
import {Session} from '../../api/index';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }

    this.signOut = this.signOut.bind(this);
  }

  signOut(event) {
    event.preventDefault();
    
    Session.destroy()
    .then(() => {
      localStorage.removeItem("currentUserId");
      this.props.getCurrentUser();

    })

  }

  render() {
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">Memonetize</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="/memes">Memes</a>
            </li>
          </ul>
            { this.props.isAuth ? 
            (<ul className="navbar-nav"><li class="nav-item">
              <a class="nav-link" href="/users/current">My Profile</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/" onClick={this.signOut}>Sign Out</a>
            </li></ul>)
            : (<ul className="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/sessions/new">Sign In</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/users/new">Sign Up</a>
              </li>
            </ul>)
            }

        </div>
      </nav>
    )
  }
}
