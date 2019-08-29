import React from 'react';
import { Session } from '../../api/index';
import Error from '../Error';

export default class SignInPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      error: null
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }
  
  handleSubmit(event) {
    event.preventDefault();

    const data = {
      email: this.state.email,
      password: this.state.password
    }

    Session.create(data).then(res => {
      if (res.id) {
        localStorage.setItem("currentUserId", res.id)
        this.props.history.push('/');
        this.props.getCurrentUser();
      } else if (res.error) {
        this.setState({
          ...this.state,
          error: res.error
        })
      }


    });

  }

  render() {
    return(

      <div className="signin-form-container">
        {
          this.state.error ?
          <Error body={this.state.error}/>
           : 
           null
        }
        <form onSubmit={this.handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" name="email" placeholder="Enter email" onChange={this.handleChange}/>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" name="password" placeholder="Password" onChange={this.handleChange}/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    )
  }
}