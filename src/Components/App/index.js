import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavigationBar from '../Navbar';
import MemeIndexPage from '../MemeIndexPage';
import MemeShowPage from '../MemeShowPage';
import Welcome from '../Welcome';
import SignInPage from '../SignInPage';
import SignUpPage from '../SignUpPage';
import { User } from '../../api';
import NewMemePage from '../NewMemePage';
import AuthRoute from '../AuthRoute';


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
      } else {
        localStorage.removeItem('currentUserId')
        this.setState({
          currentUser: null
        });
      }
    })
  }

  render() {
    return(

      <article className="Yogi">
        <BrowserRouter>
          <Route exact path="/*" render={(props) => <NavigationBar {...props} isAuth={this.state.currentUser ? true : false } getCurrentUser={this.getCurrentUser}/>}/>
          <Route exact path="/" component={Welcome}/>
          <Route exact path="/memes" component={MemeIndexPage}/>
          <Route exact path="/memes/:id" component={MemeShowPage}/>
          <Route exact path="/sessions/new" render={(props) => <SignInPage {...props} getCurrentUser={this.getCurrentUser}/>}/>
          <Route exact path="/sessions/destroy"/>
          <Route exact path="/users/new" render={ (props) => <SignUpPage {...props} getCurrentUser={this.getCurrentUser} /> }/>
          <AuthRoute exact path="/meme/new"isAuth={this.state.currentUser ? true : false}  component={NewMemePage}/>
        </BrowserRouter>
      </article> 
    )

  }
}