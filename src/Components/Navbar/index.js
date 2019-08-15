import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default class NavigationBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    }
  }

  render() {
    return(
      <nav>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Memonetize</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/memes">Memes</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="sessions/new">Sign In</Nav.Link>
            <Nav.Link href="users/new">Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
       

      </nav>
    )
  }
}
