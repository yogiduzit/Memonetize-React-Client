import React from 'react';
import {Session} from '../../api/index';
import logo from '../../img/logo.png'

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
      this.props.history.push('/');
      this.props.getCurrentUser();

    })

  }

  render() {
    return(
      <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <a className="navbar-brand" href="/">
          <img src={logo} className="logo-image" alt="Logo"/>
          Memonetize
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{justifyContent: "space-between"}}>
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/memes">Memes</a>
            </li>
          </ul>
            { this.props.isAuth ? 
            (<ul className="navbar-nav auth-nav"><li className="nav-item">
              <a className="nav-link" href="/users/current">My Profile</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/" onClick={this.signOut}>Sign Out</a>
            </li>
            </ul>)
            : (<ul className="navbar-nav auth-nav">
              <li className="nav-item">
                <a className="nav-link" href="/sessions/new">Log In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/users/new">Sign Up</a>
              </li>
            </ul>)
            }

        </div>
      </nav>
    )
  }
}
