import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { User } from '../../api';
import { connect } from "react-redux";
import { createNewUser } from '../../store/actions';

export class SignUpPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.createNewUser({ user: this.state });
  }

  handleChange(event) {
    const { target } = event;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  render() {
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="first_name" onChange={this.handleChange} placeholder="Enter first name" />
        </Form.Group>
        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="last_name" onChange={this.handleChange} placeholder="Enter last name" />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" onChange={this.handleChange} placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" onChange={this.handleChange} placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicPasswordConfirmation">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" name="password_confirmation" onChange={this.handleChange} placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  createNewUser: userParams => dispatch(createNewUser(userParams))
});

export default connect(null, mapDispatchToProps)(SignUpPage);