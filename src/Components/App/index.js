import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Elements, StripeProvider } from 'react-stripe-elements';

import { User } from '../../api';
import NavigationBar from '../Navbar';
import MemeIndexPage from '../MemeIndexPage';
import MemeShowPage from '../MemeShowPage';
import Welcome from '../Welcome';
import SignInPage from '../SignInPage';
import SignUpPage from '../SignUpPage';
import NewMemePage from '../NewMemePage';
import AuthRoute from '../AuthRoute';
import EditMemePage from '../EditMemePage';
import UserProfile from '../../UserProfile';
import PaymentForm from '../PaymentForm';
require('dotenv').config();


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

      <article className="main-container">
        <BrowserRouter>
          <Route exact path="/*" render={(props) => <NavigationBar {...props} isAuth={this.state.currentUser ? true : false } getCurrentUser={this.getCurrentUser} user={this.state.currentUser}/>}/>
          <Route exact path="/" render={(props) => <Welcome {...props} isAuth={this.state.currentUser ? true : false } isPro={this.state.currentUser && this.state.currentUser.is_pro}/> }/>
          <Route exact path="/memes" component={MemeIndexPage}/>
          <Route exact path="/memes/:id" component={MemeShowPage}/>
          <Route exact path="/sessions/new" render={(props) => <SignInPage {...props} getCurrentUser={this.getCurrentUser}/>}/>
          <Route exact path="/sessions/destroy"/>
          <Route exact path="/user/new" render={ (props) => <SignUpPage {...props} getCurrentUser={this.getCurrentUser} /> }/>
          <Route exact path="/users/:id" component={UserProfile}/>
          <Route exact path="/payments" render={(props) => 
            <StripeProvider apiKey={process.env.REACT_APP_STRIPE_KEY}>
              <Elements>
                <PaymentForm {...props}/>
              </Elements>
            </StripeProvider>
          }/>
          <AuthRoute exact path="/meme/new" isAuth={this.state.currentUser ? true : false}  component={NewMemePage}/>
          <AuthRoute exact path="/memes/:id/edit" isAuth={this.state.currentUser ? true : false} component={EditMemePage}/>
        </BrowserRouter>
      </article> 
    )

  }
}