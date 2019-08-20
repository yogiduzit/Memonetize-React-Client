import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavigationBar from '../Navbar';
import MemeIndexPage from '../MemeIndexPage';
import MemeShowPage from '../MemeShowPage';
import Welcome from '../Welcome';
import SignInPage from '../SignInPage';
import SignUpPage from '../SignUpPage';
import { User } from '../../api';


export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: localStorage.currentUserId
    }

    this.getCurrentUser = this.getCurrentUser.bind(this);
  }


  getCurrentUser() {
    User.current().then(user => {
      if (user.id) {
        this.setState({
          currentUser: user
        })
        localStorage.setItem("currentUserId", user.id);
      }
    })
  }

  render() {
    return(

      <article className="Yogi">
        <BrowserRouter>
          <NavigationBar isAuth={this.state.currentUser ? true : false } getCurrentUser={this.getCurrentUser} />
          <Route exact path="/" component={Welcome}></Route>
          <Route exact path="/memes" component={MemeIndexPage}></Route>
          <Route exact path="/memes/:id" component={MemeShowPage}></Route>
          <Route exact path="/sessions/new" render={(props) => <SignInPage {...props} getCurrentUser={this.getCurrentUser}/>}></Route>
          <Route exact path="/sessions/destroy"></Route>
          <Route exact path="/users/new" render={ (props) => <SignUpPage {...props} getCurrentUser={this.getCurrentUser} /> }></Route>
        </BrowserRouter>
      </article> 
    )

  }
}