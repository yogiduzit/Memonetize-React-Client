import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import NavigationBar from '../Navbar';
import MemeIndexPage from '../MemeIndexPage';
import MemeShowPage from '../MemeShowPage';
import Welcome from '../Welcome';
import SignInPage from '../SignInPage';
import SignUpPage from '../SignUpPage';

export default function Router() {
  return(
    <BrowserRouter>
      <NavigationBar/>
      <Route exact path="/" component={Welcome}></Route>
      <Route exact path="/memes" component={MemeIndexPage}></Route>
      <Route exact path="/memes/:id" component={MemeShowPage}></Route>
      <Route exact path="/sessions/new" component={SignInPage}></Route>
      <Route exact path="/users/new" component={SignUpPage}></Route>
    </BrowserRouter>
  )
}