import React from 'react';
import {Session} from '../../api/index';
import logo from '../../img/logo.png'

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }

    this.signOut = this.signOut.bind(this);
  }

  componentDidMount() {
    this.props.getCurrentUser();
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
            <li className="nav-item active">
              <a className="nav-link" href="/memes">About</a>
            </li>
            {
              this.props.isAuth ?
            <li className="nav-item active">
              <a className="nav-link" href="/meme/new">Create</a>
            </li> : null
            }
          </ul>
            { this.props.isAuth ? 
            (<ul className="navbar-nav auth-nav">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  {this.props.user.full_name }
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="/" onClick={this.signOut}>Sign Out</a>
                  <a className="dropdown-item" href="/users/current">My Profile</a>
                  { !this.props.user.is_pro ? <a className="dropdown-item" href="/payments">Buy Gold</a> : null}

                </div>
              </div>
            </ul>)
            : (<ul className="navbar-nav auth-nav">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  { null }
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="/sessions/new">Log In</a>
                  <a className="dropdown-item" href="/user/new">Sign Up</a>
                </div>
              </div>
            </ul>)
            }

        </div>
      </nav>
    )
  }
}
