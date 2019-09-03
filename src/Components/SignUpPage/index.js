import React from 'react';
import { User } from '../../api';
import Error from '../Error';

export default class SignUpPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        password_confirmation: '',
        tag_names: []
      },
      errors: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();

    User
    .create(this.state)
    .then((data) => {
      if (data.id) {
        this.props.getCurrentUser();
        this.props.history.push('/');
      } else if (data.errors) {
        this.setState({
          ...this.state,
          errors: data.errors
        })
      }
    })
  }

  handleChange(event) {
    const { target } = event;

    const { name, value } = target;

    const newState = {[name]: value}

    this.setState({
      user: {
        ...this.state.user,
        ...newState
      }

    });
  }

  render() {
    return(
      <div className="signup-form-container">
        {
          this.state.errors[0] ? 
            <div className="errors-container">
              {
                this.state.errors.map((value, index) => <Error key={index} body={value}/>)
              }
            </div>
          : null

        }
        <form onSubmit={this.handleSubmit} className="signup-form">
          <div className="form-group">
            <label for="first-name">First Name</label>
            <input type="text" name="first_name" id="first-name" className="form-control" onChange={this.handleChange} placeholder="Enter first name" />
          </div>
          <div className="form-group">
            <label for="last-name">Last Name</label>
            <input type="text" name="last_name" id="first-name" className="form-control" onChange={this.handleChange} placeholder="Enter last name" />
          </div>
          <div className="form-group">
            <label for="email">E-mail</label>
            <input type="text" name="email" id="email" className="form-control" onChange={this.handleChange} placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label for="password">Password</label>
            <input type="text" name="password" id="password" className="form-control" onChange={this.handleChange} placeholder="Enter password" />
          </div>
          <div className="form-group">
            <label for="password-confirmation">Password Confirmation</label>
            <input type="text" name="password_confirmation" id="password-confirmation" className="form-control" onChange={this.handleChange} placeholder="Confirm password" />
          </div>
          <div className="form-group">
            <label for="tag-names-field">Tags</label>
            <input type="text" className="form-control tags" name="tag_names" id="tag-names-field" placeholder="funny, puns, star-wars" onChange={this.handleChange}/>
          </div>
          <input type="submit" className="btn btn-primary"/>
        </form>
      </div>
    );
  }
}
