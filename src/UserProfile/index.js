import React from 'react';
import { User } from '../api';

export default class UserProfile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userData: null
    }
  }

  componentDidMount() {
    if (this.props.current) {
      User
      .current()
      .then(user => {
        if (user.id) {
          this.setState({
            userData: user
          })
        }
      })
    } else {
      User
      .find(this.props.match.params.id)
      .then(user => {
        if (user.id) {
          this.setState({
            userData: user
          })
        }
      }) 
    }
  }

  render() {
    if (!this.state.userData) {
      return(<div className="error-container">Sorry! User not found</div>)
    }

    return(
      <div className="user-info">
        <h3 className="heading">{`${this.state.userData.full_name}`}</h3>
      </div>
    )
  }
}