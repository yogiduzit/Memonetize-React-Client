import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from '../Navbar';
import MemeIndexPage from '../MemeIndexPage';
import Welcome from '../Welcome';

export default function Router() {
  return(
    <BrowserRouter>
      <Navbar/>
      <Route path="/" component={Welcome}></Route>
      <Route path="/memes" component={MemeIndexPage}></Route>
    </BrowserRouter>
  )
}